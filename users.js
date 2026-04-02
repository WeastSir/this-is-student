// ===== THIS IS STUDENT — AUTH SYSTEM v3.0 =====
// Supabase-basiertes Login mit Registrierung, Invite-Codes, Admin-Panel
// ================================================================

(function() {
  const SUPABASE_URL = 'https://wgfuxttruwsvfhxsgybz.supabase.co';
  const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndnZnV4dHRydXdzdmZoeHNneWJ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUxMzEzNzgsImV4cCI6MjA5MDcwNzM3OH0.Cf4sNB3arHbCar7nujsQs1-770Jz0QC_dWi4R8E1d5A';

  // Supabase REST helper
  async function sb(table, method, body, query) {
    const url = SUPABASE_URL + '/rest/v1/' + table + (query || '');
    const headers = {
      'apikey': SUPABASE_KEY,
      'Authorization': 'Bearer ' + SUPABASE_KEY,
      'Content-Type': 'application/json',
      'Prefer': method === 'POST' ? 'return=representation' : (method === 'PATCH' ? 'return=representation' : '')
    };
    const opts = { method: method, headers: headers };
    if (body) opts.body = JSON.stringify(body);
    const res = await fetch(url, opts);
    if (!res.ok) { const err = await res.text(); throw new Error(err); }
    const text = await res.text();
    return text ? JSON.parse(text) : null;
  }

  // SHA-256 hash
  async function hashPW(username, password) {
    const data = new TextEncoder().encode(username.toLowerCase() + ':' + password);
    const hash = await crypto.subtle.digest('SHA-256', data);
    return Array.from(new Uint8Array(hash)).map(b => b.toString(16).padStart(2, '0')).join('');
  }

  // Random code generator
  function generateCode(len) {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let code = '';
    for (let i = 0; i < (len || 8); i++) code += chars[Math.floor(Math.random() * chars.length)];
    return code;
  }

  // ==========================================
  // LEGACY COMPAT — keep window.TIS.userList empty
  // ==========================================
  window.TIS = window.TIS || {};
  window.TIS.userList = [];

  // Current user session
  let currentUser = null;

  // ==========================================
  // LOGIN
  // ==========================================
  async function doLogin() {
    const userInput = document.getElementById('loginUser').value.trim();
    const pwInput = document.getElementById('loginPW').value;
    const errEl = document.getElementById('loginError');
    const sucEl = document.getElementById('loginSuccess');
    
    if (!userInput || !pwInput) { errEl.style.display = 'block'; errEl.textContent = 'Bitte Benutzername und Passwort eingeben.'; return; }
    
    try {
      const hash = await hashPW(userInput, pwInput);
      const username = userInput.toLowerCase();
      
      // Fetch user from DB
      const users = await sb('tis_users', 'GET', null, '?username=eq.' + encodeURIComponent(username) + '&active=eq.true&select=*');
      
      if (!users || users.length === 0) {
        errEl.style.display = 'block'; errEl.textContent = 'Benutzername oder Passwort ist falsch.';
        sucEl.style.display = 'none'; return;
      }
      
      const user = users[0];
      
      // First login migration (PENDING_FIRST_LOGIN)
      if (user.password_hash === 'PENDING_FIRST_LOGIN') {
        // Known admin passwords — migrate hash to DB
        const knownPWs = {
          'g_mattiello': 'Ctrl!2026$Mstr',
          'developer': 'Dev#TiS!2026x'
        };
        if (knownPWs[username] && pwInput === knownPWs[username]) {
          await sb('tis_users', 'PATCH', { password_hash: hash }, '?id=eq.' + user.id);
          user.password_hash = hash;
        } else {
          errEl.style.display = 'block'; errEl.textContent = 'Benutzername oder Passwort ist falsch.';
          sucEl.style.display = 'none'; return;
        }
      }
      
      // Check hash
      if (hash !== user.password_hash) {
        errEl.style.display = 'block'; errEl.textContent = 'Benutzername oder Passwort ist falsch.';
        sucEl.style.display = 'none';
        document.getElementById('loginPW').value = '';
        return;
      }
      
      // Success
      currentUser = user;
      errEl.style.display = 'none';
      sucEl.innerHTML = 'Willkommen, <strong>' + user.display_name + '</strong> (' + user.role + ')';
      sucEl.style.display = 'block';
      
      // Update last login
      sb('tis_users', 'PATCH', { last_login: new Date().toISOString() }, '?id=eq.' + user.id).catch(function(){});
      
      // Save session
      localStorage.setItem('tis_user', username);
      localStorage.setItem('tis_hash', hash);
      localStorage.setItem('tis_uid', user.id);
      localStorage.setItem('tis_time', Date.now());
      
      updateAccountMenu(user);
      
      setTimeout(function() { document.getElementById('loginScreen').classList.add('hidden'); }, 800);
      
    } catch (e) {
      errEl.style.display = 'block'; errEl.textContent = 'Verbindungsfehler. Bitte versuche es nochmal.';
      console.error('Login error:', e);
    }
  }

  // ==========================================
  // REGISTRATION
  // ==========================================
  async function doRegister() {
    const userInput = document.getElementById('regUser').value.trim();
    const nameInput = document.getElementById('regName').value.trim();
    const pwInput = document.getElementById('regPW').value;
    const pw2Input = document.getElementById('regPW2').value;
    const codeInput = document.getElementById('regCode').value.trim().toUpperCase();
    const errEl = document.getElementById('regError');
    const sucEl = document.getElementById('regSuccess');
    
    errEl.style.display = 'none'; sucEl.style.display = 'none';
    
    // Validation
    if (!userInput || !nameInput || !pwInput || !pw2Input) {
      errEl.textContent = 'Bitte alle Felder ausfüllen.'; errEl.style.display = 'block'; return;
    }
    if (userInput.length < 3) {
      errEl.textContent = 'Benutzername muss mindestens 3 Zeichen haben.'; errEl.style.display = 'block'; return;
    }
    if (/[^a-zA-Z0-9_.]/.test(userInput)) {
      errEl.textContent = 'Benutzername: nur Buchstaben, Zahlen, _ und . erlaubt.'; errEl.style.display = 'block'; return;
    }
    if (pwInput.length < 6) {
      errEl.textContent = 'Passwort muss mindestens 6 Zeichen haben.'; errEl.style.display = 'block'; return;
    }
    if (pwInput !== pw2Input) {
      errEl.textContent = 'Passwörter stimmen nicht überein.'; errEl.style.display = 'block'; return;
    }
    
    try {
      // Check invite code requirement
      const settings = await sb('tis_settings', 'GET', null, '?key=eq.require_invite_code&select=*');
      const requireCode = settings && settings.length > 0 && settings[0].value === 'true';
      
      if (requireCode) {
        if (!codeInput) {
          errEl.textContent = 'Invite-Code ist erforderlich.'; errEl.style.display = 'block'; return;
        }
        // Validate invite code
        const codes = await sb('tis_invite_codes', 'GET', null, '?code=eq.' + encodeURIComponent(codeInput) + '&active=eq.true&used_by=is.null&select=*');
        if (!codes || codes.length === 0) {
          errEl.textContent = 'Ungültiger oder bereits verwendeter Invite-Code.'; errEl.style.display = 'block'; return;
        }
      }
      
      // Check username availability
      const existing = await sb('tis_users', 'GET', null, '?username=eq.' + encodeURIComponent(userInput.toLowerCase()) + '&select=id');
      if (existing && existing.length > 0) {
        errEl.textContent = 'Benutzername ist bereits vergeben.'; errEl.style.display = 'block'; return;
      }
      
      // Create user
      const hash = await hashPW(userInput, pwInput);
      const newUser = await sb('tis_users', 'POST', {
        username: userInput.toLowerCase(),
        password_hash: hash,
        display_name: nameInput,
        role: 'Student'
      });
      
      if (!newUser || newUser.length === 0) {
        errEl.textContent = 'Registrierung fehlgeschlagen. Bitte versuche es nochmal.'; errEl.style.display = 'block'; return;
      }
      
      // Mark invite code as used
      if (requireCode && codeInput) {
        await sb('tis_invite_codes', 'PATCH', {
          used_by: newUser[0].id,
          used_at: new Date().toISOString(),
          active: false
        }, '?code=eq.' + encodeURIComponent(codeInput) + '&used_by=is.null');
      }
      
      sucEl.innerHTML = 'Account erstellt! Du kannst dich jetzt anmelden.';
      sucEl.style.display = 'block';
      
      // Switch to login after delay
      setTimeout(function() { showLoginTab('login'); }, 2000);
      
    } catch (e) {
      errEl.textContent = 'Fehler bei der Registrierung. Bitte versuche es nochmal.'; errEl.style.display = 'block';
      console.error('Register error:', e);
    }
  }

  // ==========================================
  // PASSWORD RESET (Admin-initiated)
  // ==========================================
  async function adminResetPassword(userId, newPassword) {
    try {
      // Get username for hash
      const users = await sb('tis_users', 'GET', null, '?id=eq.' + userId + '&select=username');
      if (!users || users.length === 0) return false;
      const hash = await hashPW(users[0].username, newPassword);
      await sb('tis_users', 'PATCH', { password_hash: hash }, '?id=eq.' + userId);
      return true;
    } catch (e) {
      console.error('Reset error:', e);
      return false;
    }
  }

  // ==========================================
  // SESSION CHECK
  // ==========================================
  async function checkSavedAuth() {
    const username = localStorage.getItem('tis_user');
    const hash = localStorage.getItem('tis_hash');
    const time = localStorage.getItem('tis_time');
    
    if (!username || !hash || !time) return;
    if (Date.now() - parseInt(time) > 30 * 24 * 60 * 60 * 1000) return; // 30 days
    
    try {
      const users = await sb('tis_users', 'GET', null, '?username=eq.' + encodeURIComponent(username) + '&active=eq.true&select=*');
      if (users && users.length > 0 && users[0].password_hash === hash) {
        currentUser = users[0];
        document.getElementById('loginScreen').classList.add('hidden');
        updateAccountMenu(users[0]);
      }
    } catch (e) {
      console.error('Auth check error:', e);
    }
  }

  // ==========================================
  // ACCOUNT MENU
  // ==========================================
  function updateAccountMenu(user) {
    const initials = user.display_name.split(' ').map(function(n) { return n[0]; }).join('').toUpperCase().slice(0, 2) || '?';
    const av = document.getElementById('accountAvatar'); if (av) av.textContent = initials;
    const an = document.getElementById('accountName'); if (an) an.textContent = user.display_name;
    const dn = document.getElementById('dropName'); if (dn) dn.textContent = user.display_name;
    const dr = document.getElementById('dropRole'); if (dr) dr.textContent = user.role;
    
    // Show admin button if Master or Developer
    var adminBtn = document.getElementById('adminPanelBtn');
    if (adminBtn) {
      adminBtn.style.display = (user.role === 'Master' || user.role === 'Developer') ? '' : 'none';
    }
  }

  function logout() {
    localStorage.removeItem('tis_user');
    localStorage.removeItem('tis_hash');
    localStorage.removeItem('tis_uid');
    localStorage.removeItem('tis_time');
    currentUser = null;
    location.reload();
  }

  // ==========================================
  // LOGIN/REGISTER TAB SWITCHING
  // ==========================================
  function showLoginTab(tab) {
    var loginForm = document.getElementById('loginFormWrap');
    var regForm = document.getElementById('regFormWrap');
    var tabLogin = document.getElementById('tabLogin');
    var tabReg = document.getElementById('tabRegister');
    if (!loginForm || !regForm) return;
    
    if (tab === 'register') {
      loginForm.style.display = 'none'; regForm.style.display = 'block';
      if (tabLogin) tabLogin.classList.remove('active');
      if (tabReg) tabReg.classList.add('active');
      // Check if invite code required and update visibility
      checkInviteCodeVisibility();
    } else {
      loginForm.style.display = 'block'; regForm.style.display = 'none';
      if (tabLogin) tabLogin.classList.add('active');
      if (tabReg) tabReg.classList.remove('active');
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
  // ADMIN PANEL
  // ==========================================
  async function loadAdminPanel() {
    if (!currentUser || (currentUser.role !== 'Master' && currentUser.role !== 'Developer')) return;
    
    var panel = document.getElementById('adminContent');
    if (!panel) return;
    
    panel.innerHTML = '<div style="text-align:center;padding:20px;color:var(--tx3)">Laden...</div>';
    
    try {
      // Load all data
      var users = await sb('tis_users', 'GET', null, '?select=*&order=created_at.desc');
      var codes = await sb('tis_invite_codes', 'GET', null, '?select=*&order=created_at.desc');
      var settings = await sb('tis_settings', 'GET', null, '?key=eq.require_invite_code&select=*');
      var requireCode = settings && settings.length > 0 && settings[0].value === 'true';
      
      var h = '';
      
      // Settings
      h += '<h2 style="margin-top:0">Einstellungen</h2>';
      h += '<div class="c" style="padding:16px 20px;margin-bottom:24px">';
      h += '<div style="display:flex;justify-content:space-between;align-items:center">';
      h += '<div><strong>Invite-Code Pflicht</strong><br><span style="font-size:12px;color:var(--tx2)">Neue User brauchen einen Code zur Registrierung</span></div>';
      h += '<button onclick="window._tis_toggleInvite()" id="inviteToggleBtn" class="' + (requireCode ? 'bp1' : '') + '" style="min-width:60px">' + (requireCode ? 'AN' : 'AUS') + '</button>';
      h += '</div></div>';
      
      // Invite Codes
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
      
      // Users
      h += '<h2>Benutzer (' + (users ? users.length : 0) + ')</h2>';
      if (users && users.length > 0) {
        users.forEach(function(u) {
          var roleColor = u.role === 'Master' ? 'var(--ac)' : u.role === 'Developer' ? 'var(--pr)' : u.role === 'Admin' ? 'var(--am)' : 'var(--g)';
          h += '<div class="c" style="padding:14px 18px;margin-bottom:6px">';
          h += '<div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px">';
          h += '<div><strong>' + u.display_name + '</strong> <span style="font-size:12px;color:var(--tx3)">@' + u.username + '</span>';
          h += '<br><span style="font-size:11px;padding:2px 8px;border-radius:980px;background:' + roleColor + ';color:#fff">' + u.role + '</span>';
          h += ' <span style="font-size:11px;color:var(--tx3)">Registriert: ' + new Date(u.created_at).toLocaleDateString('de-CH') + '</span>';
          if (u.last_login) h += ' <span style="font-size:11px;color:var(--tx3)">· Letzter Login: ' + new Date(u.last_login).toLocaleDateString('de-CH') + '</span>';
          h += '</div>';
          h += '<div style="display:flex;gap:6px">';
          // No reset/delete for Master account
          if (u.role !== 'Master') {
            h += '<button onclick="window._tis_resetPW(\'' + u.id + '\',\'' + u.username + '\')" style="font-size:11px;padding:4px 10px">PW Reset</button>';
            if (u.role !== 'Developer') {
              h += '<button onclick="window._tis_toggleUser(\'' + u.id + '\',' + u.active + ')" style="font-size:11px;padding:4px 10px;color:' + (u.active ? 'var(--r)' : 'var(--g)') + '">' + (u.active ? 'Sperren' : 'Aktivieren') + '</button>';
            }
          }
          h += '</div></div></div>';
        });
      }
      
      panel.innerHTML = h;
      
    } catch (e) {
      panel.innerHTML = '<div class="hlr">Fehler beim Laden: ' + e.message + '</div>';
      console.error('Admin panel error:', e);
    }
  }

  // ==========================================
  // ADMIN ACTIONS (global)
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

  window._tis_resetPW = async function(userId, username) {
    var newPW = prompt('Neues Passwort für @' + username + ':');
    if (!newPW || newPW.length < 6) { alert('Passwort muss mindestens 6 Zeichen haben.'); return; }
    var ok = await adminResetPassword(userId, newPW);
    if (ok) alert('Passwort wurde zurückgesetzt.');
    else alert('Fehler beim Zurücksetzen.');
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
  // EXPOSE TO GLOBAL SCOPE
  // ==========================================
  window.checkLogin = doLogin;
  window.checkSavedAuth = checkSavedAuth;
  window.logout = logout;
  window.showLoginTab = showLoginTab;
  window.loadAdminPanel = loadAdminPanel;
  window.TIS_currentUser = function() { return currentUser; };

  // Auto-check on load
  document.addEventListener('DOMContentLoaded', checkSavedAuth);

})();
