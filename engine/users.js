// ===== THIS IS STUDENT — AUTH SYSTEM v4.0 =====
// Supabase Auth mit E-Mail/Passwort, E-Mail-Verifizierung, Password Reset
// Kein eigenes Hashing mehr — alles über Supabase Auth
// ================================================================

(function() {
  'use strict';

  const SUPABASE_URL = 'https://wgfuxttruwsvfhxsgybz.supabase.co';
  const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndnZnV4dHRydXdzdmZoeHNneWJ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUxMzEzNzgsImV4cCI6MjA5MDcwNzM3OH0.Cf4sNB3arHbCar7nujsQs1-770Jz0QC_dWi4R8E1d5A';

  // ==========================================
  // SUPABASE CLIENT (via CDN @supabase/supabase-js)
  // ==========================================
  let supabase = null;

  function initSupabase() {
    if (supabase) return supabase;
    if (window.supabase && window.supabase.createClient) {
      supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
    } else {
      console.error('[TIS Auth] Supabase Client nicht geladen. Bitte <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script> in index.html einfügen.');
    }
    return supabase;
  }

  // Supabase REST helper (for tis_users profile table, invite codes, settings)
  async function sb(table, method, body, query) {
    var client = initSupabase();
    var session = client ? (await client.auth.getSession()).data.session : null;
    var token = session ? session.access_token : SUPABASE_KEY;
    
    var url = SUPABASE_URL + '/rest/v1/' + table + (query || '');
    var headers = {
      'apikey': SUPABASE_KEY,
      'Authorization': 'Bearer ' + token,
      'Content-Type': 'application/json',
      'Prefer': method === 'POST' ? 'return=representation' : (method === 'PATCH' ? 'return=representation' : '')
    };
    var opts = { method: method, headers: headers };
    if (body) opts.body = JSON.stringify(body);
    var res = await fetch(url, opts);
    if (!res.ok) { var err = await res.text(); throw new Error(err); }
    var text = await res.text();
    return text ? JSON.parse(text) : null;
  }

  // Random code generator (for invite codes)
  function generateCode(len) {
    var chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    var code = '';
    for (var i = 0; i < (len || 8); i++) code += chars[Math.floor(Math.random() * chars.length)];
    return code;
  }

  // ==========================================
  // LEGACY COMPAT
  // ==========================================
  window.TIS = window.TIS || {};
  window.TIS.userList = [];

  // Current user profile (from tis_users table)
  let currentUser = null;

  // ==========================================
  // LOGIN (E-Mail + Passwort via Supabase Auth)
  // ==========================================
  async function doLogin() {
    var emailInput = document.getElementById('loginEmail').value.trim();
    var pwInput = document.getElementById('loginPW').value;
    var errEl = document.getElementById('loginError');
    var sucEl = document.getElementById('loginSuccess');
    
    errEl.style.display = 'none';
    sucEl.style.display = 'none';
    
    if (!emailInput || !pwInput) {
      errEl.textContent = 'Bitte E-Mail und Passwort eingeben.';
      errEl.style.display = 'block';
      return;
    }
    
    var loginBtn = document.getElementById('loginBtn');
    if (loginBtn) { loginBtn.disabled = true; loginBtn.textContent = 'Anmelden…'; }
    
    try {
      var client = initSupabase();
      var { data, error } = await client.auth.signInWithPassword({
        email: emailInput,
        password: pwInput
      });
      
      if (error) {
        var msg = 'E-Mail oder Passwort ist falsch.';
        if (error.message.includes('Email not confirmed')) {
          msg = 'E-Mail noch nicht bestätigt. Bitte prüfe deinen Posteingang.';
        } else if (error.message.includes('Invalid login credentials')) {
          msg = 'E-Mail oder Passwort ist falsch.';
        } else if (error.message.includes('Too many requests')) {
          msg = 'Zu viele Versuche. Bitte warte kurz.';
        }
        errEl.textContent = msg;
        errEl.style.display = 'block';
        if (loginBtn) { loginBtn.disabled = false; loginBtn.textContent = 'Anmelden'; }
        return;
      }
      
      // Auth successful — load or create profile
      var profile = await loadOrCreateProfile(data.user);
      
      if (!profile || !profile.active) {
        errEl.textContent = profile ? 'Dein Account wurde gesperrt. Kontaktiere den Admin.' : 'Profil konnte nicht geladen werden.';
        errEl.style.display = 'block';
        await client.auth.signOut();
        if (loginBtn) { loginBtn.disabled = false; loginBtn.textContent = 'Anmelden'; }
        return;
      }
      
      currentUser = profile;
      
      sucEl.innerHTML = 'Willkommen, <strong>' + profile.display_name + '</strong>';
      sucEl.style.display = 'block';
      
      // Update last login
      sb('tis_users', 'PATCH', { last_login: new Date().toISOString() }, '?auth_uid=eq.' + data.user.id).catch(function(){});
      
      updateAccountMenu(profile);
      
      setTimeout(function() {
        document.getElementById('loginScreen').classList.add('hidden');
      }, 800);
      
    } catch (e) {
      errEl.textContent = 'Verbindungsfehler. Bitte versuche es nochmal.';
      errEl.style.display = 'block';
      console.error('[TIS Auth] Login error:', e);
    }
    if (loginBtn) { loginBtn.disabled = false; loginBtn.textContent = 'Anmelden'; }
  }

  // ==========================================
  // REGISTRATION (E-Mail + Passwort + Invite-Code)
  // ==========================================
  async function doRegister() {
    var emailInput = document.getElementById('regEmail').value.trim();
    var nameInput = document.getElementById('regName').value.trim();
    var pwInput = document.getElementById('regPW').value;
    var pw2Input = document.getElementById('regPW2').value;
    var codeInput = document.getElementById('regCode').value.trim().toUpperCase();
    var errEl = document.getElementById('regError');
    var sucEl = document.getElementById('regSuccess');
    
    errEl.style.display = 'none';
    sucEl.style.display = 'none';
    
    // Validation
    if (!emailInput || !nameInput || !pwInput || !pw2Input) {
      errEl.textContent = 'Bitte alle Felder ausfüllen.';
      errEl.style.display = 'block';
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput)) {
      errEl.textContent = 'Bitte eine gültige E-Mail-Adresse eingeben.';
      errEl.style.display = 'block';
      return;
    }
    if (pwInput.length < 6) {
      errEl.textContent = 'Passwort muss mindestens 6 Zeichen haben.';
      errEl.style.display = 'block';
      return;
    }
    if (pwInput !== pw2Input) {
      errEl.textContent = 'Passwörter stimmen nicht überein.';
      errEl.style.display = 'block';
      return;
    }
    
    var regBtn = document.getElementById('regBtn');
    if (regBtn) { regBtn.disabled = true; regBtn.textContent = 'Registrieren…'; }
    
    try {
      // Check invite code requirement
      var settings = await sb('tis_settings', 'GET', null, '?key=eq.require_invite_code&select=*');
      var requireCode = settings && settings.length > 0 && settings[0].value === 'true';
      
      var validatedCode = null;
      if (requireCode) {
        if (!codeInput) {
          errEl.textContent = 'Invite-Code ist erforderlich.';
          errEl.style.display = 'block';
          if (regBtn) { regBtn.disabled = false; regBtn.textContent = 'Account erstellen'; }
          return;
        }
        var codes = await sb('tis_invite_codes', 'GET', null, '?code=eq.' + encodeURIComponent(codeInput) + '&active=eq.true&used_by=is.null&select=*');
        if (!codes || codes.length === 0) {
          errEl.textContent = 'Ungültiger oder bereits verwendeter Invite-Code.';
          errEl.style.display = 'block';
          if (regBtn) { regBtn.disabled = false; regBtn.textContent = 'Account erstellen'; }
          return;
        }
        validatedCode = codes[0];
      }
      
      // Register with Supabase Auth
      var client = initSupabase();
      var { data, error } = await client.auth.signUp({
        email: emailInput,
        password: pwInput,
        options: {
          data: {
            display_name: nameInput,
            role: 'Student'
          }
        }
      });
      
      if (error) {
        var msg = 'Registrierung fehlgeschlagen.';
        if (error.message.includes('already registered') || error.message.includes('already been registered')) {
          msg = 'Diese E-Mail ist bereits registriert. Versuche dich anzumelden.';
        } else if (error.message.includes('Password should be')) {
          msg = 'Passwort zu schwach. Mindestens 6 Zeichen.';
        } else if (error.message.includes('rate limit')) {
          msg = 'Zu viele Versuche. Bitte warte kurz.';
        }
        errEl.textContent = msg;
        errEl.style.display = 'block';
        if (regBtn) { regBtn.disabled = false; regBtn.textContent = 'Account erstellen'; }
        return;
      }
      
      // Create profile in tis_users
      if (data.user) {
        try {
          await sb('tis_users', 'POST', {
            auth_uid: data.user.id,
            email: emailInput.toLowerCase(),
            display_name: nameInput,
            role: 'Student',
            active: true
          });
        } catch (profileErr) {
          console.warn('[TIS Auth] Profil erstellen fehlgeschlagen (wird beim ersten Login nachgeholt):', profileErr);
        }
        
        // Mark invite code as used
        if (validatedCode) {
          await sb('tis_invite_codes', 'PATCH', {
            used_by: data.user.id,
            used_at: new Date().toISOString(),
            active: false
          }, '?code=eq.' + encodeURIComponent(codeInput) + '&used_by=is.null').catch(function(){});
        }
      }
      
      // Check if email confirmation is needed
      if (data.session) {
        // Auto-confirmed — user is already logged in
        sucEl.innerHTML = 'Account erstellt! Du wirst gleich weitergeleitet…';
        sucEl.style.display = 'block';
        var profile = await loadOrCreateProfile(data.user);
        if (profile) {
          currentUser = profile;
          updateAccountMenu(profile);
          setTimeout(function() {
            document.getElementById('loginScreen').classList.add('hidden');
          }, 1200);
        }
      } else {
        // Confirmation email sent
        sucEl.innerHTML = '✉️ <strong>Bestätigungs-E-Mail gesendet!</strong><br><span style="font-size:12px;opacity:.8;margin-top:4px;display:inline-block">Bitte prüfe deinen Posteingang (und Spam) und klicke auf den Bestätigungslink. Danach kannst du dich anmelden.</span>';
        sucEl.style.display = 'block';
        setTimeout(function() { showLoginTab('login'); }, 5000);
      }
      
    } catch (e) {
      errEl.textContent = 'Fehler bei der Registrierung. Bitte versuche es nochmal.';
      errEl.style.display = 'block';
      console.error('[TIS Auth] Register error:', e);
    }
    if (regBtn) { regBtn.disabled = false; regBtn.textContent = 'Account erstellen'; }
  }

  // ==========================================
  // PASSWORD RESET
  // ==========================================
  async function doPasswordReset() {
    var emailInput = document.getElementById('resetEmail').value.trim();
    var errEl = document.getElementById('resetError');
    var sucEl = document.getElementById('resetSuccess');
    
    errEl.style.display = 'none';
    sucEl.style.display = 'none';
    
    if (!emailInput) {
      errEl.textContent = 'Bitte E-Mail-Adresse eingeben.';
      errEl.style.display = 'block';
      return;
    }
    
    var resetBtn = document.getElementById('resetBtn');
    if (resetBtn) { resetBtn.disabled = true; resetBtn.textContent = 'Senden…'; }
    
    try {
      var client = initSupabase();
      var { error } = await client.auth.resetPasswordForEmail(emailInput, {
        redirectTo: window.location.origin + window.location.pathname
      });
      
      if (error) {
        errEl.textContent = 'Fehler beim Senden. Bitte versuche es nochmal.';
        errEl.style.display = 'block';
      } else {
        sucEl.innerHTML = '✉️ <strong>Reset-Link gesendet!</strong><br><span style="font-size:12px;opacity:.8;margin-top:4px;display:inline-block">Falls ein Account mit dieser E-Mail existiert, erhältst du einen Link zum Zurücksetzen.</span>';
        sucEl.style.display = 'block';
      }
    } catch (e) {
      errEl.textContent = 'Verbindungsfehler. Bitte versuche es nochmal.';
      errEl.style.display = 'block';
      console.error('[TIS Auth] Reset error:', e);
    }
    if (resetBtn) { resetBtn.disabled = false; resetBtn.textContent = 'Reset-Link senden'; }
  }

  // ==========================================
  // NEW PASSWORD (after clicking reset link)
  // ==========================================
  async function doSetNewPassword() {
    var pwInput = document.getElementById('newPW').value;
    var pw2Input = document.getElementById('newPW2').value;
    var errEl = document.getElementById('newPWError');
    var sucEl = document.getElementById('newPWSuccess');
    
    errEl.style.display = 'none';
    sucEl.style.display = 'none';
    
    if (!pwInput || pwInput.length < 6) {
      errEl.textContent = 'Passwort muss mindestens 6 Zeichen haben.';
      errEl.style.display = 'block';
      return;
    }
    if (pwInput !== pw2Input) {
      errEl.textContent = 'Passwörter stimmen nicht überein.';
      errEl.style.display = 'block';
      return;
    }
    
    try {
      var client = initSupabase();
      var { error } = await client.auth.updateUser({ password: pwInput });
      
      if (error) {
        errEl.textContent = 'Fehler: ' + error.message;
        errEl.style.display = 'block';
      } else {
        sucEl.innerHTML = '✅ <strong>Passwort erfolgreich geändert!</strong><br><span style="font-size:12px">Du wirst gleich weitergeleitet…</span>';
        sucEl.style.display = 'block';
        setTimeout(async function() {
          hideAllLoginTabs();
          var session = await client.auth.getSession();
          if (session.data.session) {
            var profile = await loadOrCreateProfile(session.data.session.user);
            if (profile) {
              currentUser = profile;
              updateAccountMenu(profile);
            }
            document.getElementById('loginScreen').classList.add('hidden');
          }
          window.history.replaceState({}, document.title, window.location.pathname);
        }, 1500);
      }
    } catch (e) {
      errEl.textContent = 'Verbindungsfehler.';
      errEl.style.display = 'block';
    }
  }

  // ==========================================
  // CHANGE PASSWORD (from Account menu)
  // ==========================================
  async function doChangePassword() {
    var oldPw = document.getElementById('changePWOld');
    var newPw = document.getElementById('changePWNew');
    var newPw2 = document.getElementById('changePWNew2');
    var errEl = document.getElementById('changePWError');
    var sucEl = document.getElementById('changePWSuccess');
    
    if (!oldPw || !newPw || !newPw2) return;
    errEl.style.display = 'none';
    sucEl.style.display = 'none';
    
    if (!newPw.value || newPw.value.length < 6) {
      errEl.textContent = 'Neues Passwort muss mindestens 6 Zeichen haben.';
      errEl.style.display = 'block';
      return;
    }
    if (newPw.value !== newPw2.value) {
      errEl.textContent = 'Passwörter stimmen nicht überein.';
      errEl.style.display = 'block';
      return;
    }
    
    try {
      var client = initSupabase();
      var session = await client.auth.getSession();
      var email = session.data.session?.user?.email;
      if (!email) { errEl.textContent = 'Keine aktive Sitzung.'; errEl.style.display = 'block'; return; }
      
      // Verify old password
      var { error: signInError } = await client.auth.signInWithPassword({
        email: email,
        password: oldPw.value
      });
      if (signInError) {
        errEl.textContent = 'Altes Passwort ist falsch.';
        errEl.style.display = 'block';
        return;
      }
      
      var { error } = await client.auth.updateUser({ password: newPw.value });
      if (error) {
        errEl.textContent = 'Fehler: ' + error.message;
        errEl.style.display = 'block';
      } else {
        sucEl.textContent = 'Passwort erfolgreich geändert!';
        sucEl.style.display = 'block';
        oldPw.value = '';
        newPw.value = '';
        newPw2.value = '';
      }
    } catch (e) {
      errEl.textContent = 'Verbindungsfehler.';
      errEl.style.display = 'block';
    }
  }

  // ==========================================
  // PROFILE MANAGEMENT
  // ==========================================
  async function loadOrCreateProfile(authUser) {
    if (!authUser) return null;
    try {
      // Look up by auth_uid
      var profiles = await sb('tis_users', 'GET', null, '?auth_uid=eq.' + authUser.id + '&select=*');
      if (profiles && profiles.length > 0) return profiles[0];
      
      // Fallback: lookup by email (migration from old system)
      profiles = await sb('tis_users', 'GET', null, '?email=eq.' + encodeURIComponent(authUser.email) + '&select=*');
      if (profiles && profiles.length > 0) {
        await sb('tis_users', 'PATCH', { auth_uid: authUser.id }, '?id=eq.' + profiles[0].id);
        profiles[0].auth_uid = authUser.id;
        return profiles[0];
      }
      
      // Create new profile
      var displayName = authUser.user_metadata?.display_name || authUser.email.split('@')[0];
      var newProfile = await sb('tis_users', 'POST', {
        auth_uid: authUser.id,
        email: authUser.email,
        display_name: displayName,
        role: 'Student',
        active: true
      });
      return newProfile && newProfile.length > 0 ? newProfile[0] : null;
    } catch (e) {
      console.error('[TIS Auth] Profile load error:', e);
      return null;
    }
  }

  // ==========================================
  // SESSION CHECK
  // ==========================================
  async function checkSavedAuth() {
    try {
      var client = initSupabase();
      if (!client) return;
      
      // Handle password recovery redirect (Supabase sends #access_token=...&type=recovery)
      var hashStr = window.location.hash;
      if (hashStr && hashStr.includes('type=recovery')) {
        // Wait for Supabase to pick up the tokens
        await new Promise(function(r) { setTimeout(r, 800); });
        var { data: { session } } = await client.auth.getSession();
        if (session) {
          showLoginTab('newpassword');
          return;
        }
      }
      
      // Handle email confirmation redirect
      if (hashStr && (hashStr.includes('type=signup') || hashStr.includes('type=email'))) {
        await new Promise(function(r) { setTimeout(r, 800); });
        window.history.replaceState({}, document.title, window.location.pathname);
      }
      
      // Normal session check
      var { data: { session } } = await client.auth.getSession();
      if (!session) return;
      
      var profile = await loadOrCreateProfile(session.user);
      if (profile && profile.active) {
        currentUser = profile;
        document.getElementById('loginScreen').classList.add('hidden');
        updateAccountMenu(profile);
      } else if (profile && !profile.active) {
        await client.auth.signOut();
      }
    } catch (e) {
      console.error('[TIS Auth] Session check error:', e);
    }
  }

  // ==========================================
  // AUTH STATE LISTENER
  // ==========================================
  function setupAuthListener() {
    var client = initSupabase();
    if (!client) return;
    
    client.auth.onAuthStateChange(function(event, session) {
      if (event === 'SIGNED_OUT') {
        currentUser = null;
        var ls = document.getElementById('loginScreen');
        if (ls) ls.classList.remove('hidden');
      }
      if (event === 'PASSWORD_RECOVERY') {
        showLoginTab('newpassword');
      }
    });
  }

  // ==========================================
  // LOGOUT
  // ==========================================
  async function logout() {
    try {
      var client = initSupabase();
      if (client) await client.auth.signOut();
    } catch (e) {
      console.error('[TIS Auth] Logout error:', e);
    }
    currentUser = null;
    // Clean legacy localStorage
    localStorage.removeItem('tis_user');
    localStorage.removeItem('tis_hash');
    localStorage.removeItem('tis_uid');
    localStorage.removeItem('tis_time');
    location.reload();
  }

  // ==========================================
  // ACCOUNT MENU
  // ==========================================
  function updateAccountMenu(user) {
    var initials = user.display_name.split(' ').map(function(n) { return n[0]; }).join('').toUpperCase().slice(0, 2) || '?';
    var av = document.getElementById('accountAvatar'); if (av) av.textContent = initials;
    var an = document.getElementById('accountName'); if (an) an.textContent = user.display_name;
    var dn = document.getElementById('dropName'); if (dn) dn.textContent = user.display_name;
    var dr = document.getElementById('dropRole'); if (dr) dr.textContent = user.role;
    var de = document.getElementById('dropEmail'); if (de) de.textContent = user.email || '';
    
    var adminBtn = document.getElementById('adminPanelBtn');
    if (adminBtn) {
      adminBtn.style.display = (user.role === 'Master' || user.role === 'Developer') ? '' : 'none';
    }
  }

  // ==========================================
  // LOGIN/REGISTER/RESET TAB SWITCHING
  // ==========================================
  function hideAllLoginTabs() {
    ['loginFormWrap', 'regFormWrap', 'resetFormWrap', 'newPWFormWrap'].forEach(function(id) {
      var el = document.getElementById(id);
      if (el) el.style.display = 'none';
    });
    ['tabLogin', 'tabRegister'].forEach(function(id) {
      var el = document.getElementById(id);
      if (el) el.classList.remove('active');
    });
    var tabContainer = document.getElementById('loginTabContainer');
    if (tabContainer) tabContainer.style.display = '';
  }

  function showLoginTab(tab) {
    hideAllLoginTabs();
    
    if (tab === 'register') {
      var regForm = document.getElementById('regFormWrap');
      if (regForm) regForm.style.display = 'block';
      var tabReg = document.getElementById('tabRegister');
      if (tabReg) tabReg.classList.add('active');
      checkInviteCodeVisibility();
    } else if (tab === 'reset') {
      var resetForm = document.getElementById('resetFormWrap');
      if (resetForm) resetForm.style.display = 'block';
      var tabContainer = document.getElementById('loginTabContainer');
      if (tabContainer) tabContainer.style.display = 'none';
    } else if (tab === 'newpassword') {
      var newPWForm = document.getElementById('newPWFormWrap');
      if (newPWForm) newPWForm.style.display = 'block';
      var tabContainer2 = document.getElementById('loginTabContainer');
      if (tabContainer2) tabContainer2.style.display = 'none';
    } else {
      var loginForm = document.getElementById('loginFormWrap');
      if (loginForm) loginForm.style.display = 'block';
      var tabLogin = document.getElementById('tabLogin');
      if (tabLogin) tabLogin.classList.add('active');
    }
  }

  async function checkInviteCodeVisibility() {
    try {
      var settings = await sb('tis_settings', 'GET', null, '?key=eq.require_invite_code&select=*');
      var required = settings && settings.length > 0 && settings[0].value === 'true';
      var codeField = document.getElementById('regCodeField');
      if (codeField) codeField.style.display = required ? 'block' : 'none';
    } catch (e) { /* show by default */ }
  }

  // ==========================================
  // CHANGE PASSWORD MODAL
  // ==========================================
  function showChangePWModal() {
    var modal = document.getElementById('changePWModal');
    if (modal) {
      modal.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    }
    var drop = document.getElementById('accountDrop');
    if (drop) drop.classList.remove('show');
  }

  function closeChangePWModal() {
    var modal = document.getElementById('changePWModal');
    if (modal) modal.style.display = 'none';
    document.body.style.overflow = '';
    ['changePWOld', 'changePWNew', 'changePWNew2'].forEach(function(id) {
      var el = document.getElementById(id);
      if (el) el.value = '';
    });
    var errEl = document.getElementById('changePWError');
    var sucEl = document.getElementById('changePWSuccess');
    if (errEl) errEl.style.display = 'none';
    if (sucEl) sucEl.style.display = 'none';
  }

  // ==========================================
  // ADMIN PANEL
  // ==========================================
  async function loadAdminPanel() {
    if (!currentUser || (currentUser.role !== 'Master' && currentUser.role !== 'Developer')) return;
    
    var panel = document.getElementById('adminContent');
    if (!panel) return;
    
    panel.innerHTML = '<div style="text-align:center;padding:20px;color:var(--tx3)">Laden...</div>';
    
    try {
      var users = await sb('tis_users', 'GET', null, '?select=*&order=created_at.desc');
      var codes = await sb('tis_invite_codes', 'GET', null, '?select=*&order=created_at.desc');
      var settings = await sb('tis_settings', 'GET', null, '?key=eq.require_invite_code&select=*');
      var requireCode = settings && settings.length > 0 && settings[0].value === 'true';
      
      var h = '';
      
      h += '<h2 style="margin-top:0">Einstellungen</h2>';
      h += '<div class="c" style="padding:16px 20px;margin-bottom:24px">';
      h += '<div style="display:flex;justify-content:space-between;align-items:center">';
      h += '<div><strong>Invite-Code Pflicht</strong><br><span style="font-size:12px;color:var(--tx2)">Neue User brauchen einen Code zur Registrierung</span></div>';
      h += '<button onclick="window._tis_toggleInvite()" id="inviteToggleBtn" class="' + (requireCode ? 'bp1' : '') + '" style="min-width:60px">' + (requireCode ? 'AN' : 'AUS') + '</button>';
      h += '</div></div>';
      
      h += '<h2>Invite-Codes</h2>';
      h += '<div style="margin-bottom:16px"><button class="bp1" onclick="window._tis_genCode()">+ Neuen Code generieren</button></div>';
      h += '<div id="adminCodeList">';
      if (codes && codes.length > 0) {
        codes.forEach(function(c) {
          var status = c.used_by ? '<span style="color:var(--r)">Verwendet</span>' : (c.active ? '<span style="color:var(--g)">Aktiv</span>' : '<span style="color:var(--tx3)">Deaktiviert</span>');
          h += '<div class="c" style="padding:12px 16px;margin-bottom:6px;display:flex;justify-content:space-between;align-items:center">';
          h += '<div><strong style="font-family:monospace;font-size:16px;letter-spacing:2px;color:var(--ac)">' + c.code + '</strong>';
          h += '<br><span style="font-size:11px;color:var(--tx3)">' + new Date(c.created_at).toLocaleDateString('de-CH') + '</span></div>';
          h += '<div style="text-align:right">' + status + '</div>';
          h += '</div>';
        });
      } else {
        h += '<div style="color:var(--tx3);font-size:13px">Keine Codes vorhanden.</div>';
      }
      h += '</div>';
      
      h += '<h2>Benutzer (' + (users ? users.length : 0) + ')</h2>';
      if (users && users.length > 0) {
        users.forEach(function(u) {
          var roleColor = u.role === 'Master' ? 'var(--ac)' : u.role === 'Developer' ? 'var(--pr)' : u.role === 'Admin' ? 'var(--am)' : 'var(--g)';
          h += '<div class="c" style="padding:14px 18px;margin-bottom:6px">';
          h += '<div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px">';
          h += '<div><strong>' + u.display_name + '</strong> <span style="font-size:12px;color:var(--tx3)">' + (u.email || '') + '</span>';
          h += '<br><span style="font-size:11px;padding:2px 8px;border-radius:980px;background:' + roleColor + ';color:#fff">' + u.role + '</span>';
          h += ' <span style="font-size:11px;color:var(--tx3)">Registriert: ' + new Date(u.created_at).toLocaleDateString('de-CH') + '</span>';
          if (u.last_login) h += ' <span style="font-size:11px;color:var(--tx3)">· Letzter Login: ' + new Date(u.last_login).toLocaleDateString('de-CH') + '</span>';
          h += '</div>';
          h += '<div style="display:flex;gap:6px">';
          if (u.role !== 'Master' && u.role !== 'Developer') {
            h += '<button onclick="window._tis_toggleUser(\'' + u.id + '\',' + u.active + ')" style="font-size:11px;padding:4px 10px;color:' + (u.active ? 'var(--r)' : 'var(--g)') + '">' + (u.active ? 'Sperren' : 'Aktivieren') + '</button>';
          }
          h += '</div></div></div>';
        });
      }
      
      panel.innerHTML = h;
      
    } catch (e) {
      panel.innerHTML = '<div class="hlr">Fehler beim Laden: ' + e.message + '</div>';
      console.error('[TIS Auth] Admin panel error:', e);
    }
  }

  // ==========================================
  // ADMIN ACTIONS
  // ==========================================
  window._tis_toggleInvite = async function() {
    try {
      var settings = await sb('tis_settings', 'GET', null, '?key=eq.require_invite_code&select=*');
      var current = settings && settings.length > 0 && settings[0].value === 'true';
      await sb('tis_settings', 'PATCH', { value: current ? 'false' : 'true', updated_at: new Date().toISOString() }, '?key=eq.require_invite_code');
      loadAdminPanel();
    } catch (e) { alert('Fehler: ' + e.message); }
  };

  window._tis_genCode = async function() {
    try {
      var code = generateCode(8);
      await sb('tis_invite_codes', 'POST', {
        code: code,
        created_by: currentUser.id
      });
      loadAdminPanel();
    } catch (e) { alert('Fehler: ' + e.message); }
  };

  window._tis_toggleUser = async function(userId, isActive) {
    var action = isActive ? 'sperren' : 'aktivieren';
    if (!confirm('User wirklich ' + action + '?')) return;
    try {
      await sb('tis_users', 'PATCH', { active: !isActive }, '?id=eq.' + userId);
      loadAdminPanel();
    } catch (e) { alert('Fehler: ' + e.message); }
  };

  // ==========================================
  // EXPOSE TO GLOBAL
  // ==========================================
  window.checkLogin = doLogin;
  window.doRegister = doRegister;
  window.doPasswordReset = doPasswordReset;
  window.doSetNewPassword = doSetNewPassword;
  window.doChangePassword = doChangePassword;
  window.showChangePWModal = showChangePWModal;
  window.closeChangePWModal = closeChangePWModal;
  window.checkSavedAuth = checkSavedAuth;
  window.logout = logout;
  window.showLoginTab = showLoginTab;
  window.loadAdminPanel = loadAdminPanel;
  window.TIS_currentUser = function() { return currentUser; };
  
  // Expose for lernkarten-sync.js
  window.TIS_getSupabase = function() { return initSupabase(); };
  window.TIS_getSession = async function() {
    var client = initSupabase();
    if (!client) return null;
    var { data } = await client.auth.getSession();
    return data.session;
  };

  // Auto-init
  document.addEventListener('DOMContentLoaded', function() {
    initSupabase();
    setupAuthListener();
    checkSavedAuth();
  });

})();
