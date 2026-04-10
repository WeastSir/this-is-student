// ===== THIS IS STUDENT — THEME SWITCHER =====
// Wechselt zwischen style-original.css und style-v2.css
// Speichert die Wahl pro User in Supabase (tis_users.theme)
// ================================================

(function() {
  'use strict';

  // CSS file references
  const THEMES = {
    original: 'style.css',
    v2: 'style-v2.css'
  };

  // The <link> element that holds the active theme
  let themeLink = document.getElementById('themeStylesheet');

  // Current theme
  let currentTheme = 'original';

  // ==========================================
  // APPLY THEME (swap CSS file)
  // ==========================================
  function applyTheme(theme) {
    if (!THEMES[theme]) theme = 'original';
    currentTheme = theme;

    if (themeLink) {
      themeLink.href = THEMES[theme];
    }

    // Store in localStorage as fallback (instant load before Supabase responds)
    try { localStorage.setItem('tis_theme', theme); } catch(e) {}

    // Update toggle button text
    updateToggleBtn();
  }

  // ==========================================
  // TOGGLE THEME
  // ==========================================
  function toggleDesign() {
    var newTheme = currentTheme === 'original' ? 'v2' : 'original';
    applyTheme(newTheme);
    saveThemeToSupabase(newTheme);

    // Close account dropdown
    var drop = document.getElementById('accountDrop');
    if (drop) drop.classList.remove('show');
  }

  // ==========================================
  // UPDATE BUTTON TEXT
  // ==========================================
  function updateToggleBtn() {
    var btn = document.getElementById('designToggleBtn');
    if (btn) {
      btn.innerHTML = currentTheme === 'original'
        ? '<span style="font-size:14px">🎨</span> Design: Original → <strong>V2 testen</strong>'
        : '<span style="font-size:14px">🎨</span> Design: V2 → <strong>Original</strong>';
    }
  }

  // ==========================================
  // SAVE TO SUPABASE
  // ==========================================
  async function saveThemeToSupabase(theme) {
    try {
      var user = window.TIS_currentUser ? window.TIS_currentUser() : null;
      if (!user || !user.auth_uid) return;

      var session = window.TIS_getSession ? await window.TIS_getSession() : null;
      var token = session ? session.access_token : null;
      if (!token) return;

      var SUPABASE_URL = 'https://wgfuxttruwsvfhxsgybz.supabase.co';
      var SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndnZnV4dHRydXdzdmZoeHNneWJ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUxMzEzNzgsImV4cCI6MjA5MDcwNzM3OH0.Cf4sNB3arHbCar7nujsQs1-770Jz0QC_dWi4R8E1d5A';

      await fetch(SUPABASE_URL + '/rest/v1/tis_users?auth_uid=eq.' + user.auth_uid, {
        method: 'PATCH',
        headers: {
          'apikey': SUPABASE_KEY,
          'Authorization': 'Bearer ' + token,
          'Content-Type': 'application/json',
          'Prefer': 'return=representation'
        },
        body: JSON.stringify({ theme: theme })
      });
    } catch (e) {
      console.warn('[TIS Theme] Save failed:', e);
    }
  }

  // ==========================================
  // LOAD FROM SUPABASE (called after login)
  // ==========================================
  async function loadThemeFromSupabase() {
    try {
      var user = window.TIS_currentUser ? window.TIS_currentUser() : null;
      if (!user) return;

      // If the profile already has .theme, use it directly
      if (user.theme) {
        applyTheme(user.theme);
        return;
      }

      // Otherwise fetch from Supabase
      var session = window.TIS_getSession ? await window.TIS_getSession() : null;
      var token = session ? session.access_token : null;
      if (!token) return;

      var SUPABASE_URL = 'https://wgfuxttruwsvfhxsgybz.supabase.co';
      var SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndnZnV4dHRydXdzdmZoeHNneWJ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUxMzEzNzgsImV4cCI6MjA5MDcwNzM3OH0.Cf4sNB3arHbCar7nujsQs1-770Jz0QC_dWi4R8E1d5A';

      var res = await fetch(SUPABASE_URL + '/rest/v1/tis_users?auth_uid=eq.' + user.auth_uid + '&select=theme', {
        headers: {
          'apikey': SUPABASE_KEY,
          'Authorization': 'Bearer ' + token
        }
      });
      var data = await res.json();
      if (data && data[0] && data[0].theme) {
        applyTheme(data[0].theme);
      }
    } catch (e) {
      console.warn('[TIS Theme] Load failed:', e);
    }
  }

  // ==========================================
  // INJECT TOGGLE BUTTON INTO ACCOUNT DROPDOWN
  // ==========================================
  function injectDesignToggle() {
    var drop = document.getElementById('accountDrop');
    if (!drop || document.getElementById('designToggleBtn')) return;

    // Find the divider before logout
    var dividers = drop.querySelectorAll('div[style*="border-top"]');
    var lastDivider = dividers.length > 0 ? dividers[dividers.length - 1] : null;

    var btn = document.createElement('button');
    btn.id = 'designToggleBtn';
    btn.onclick = toggleDesign;
    btn.style.cssText = 'display:flex;align-items:center;gap:8px;width:100%;padding:10px 16px;border:none;background:none;color:var(--tx2);font-family:var(--f);font-size:12.5px;cursor:pointer;text-align:left;transition:background .2s';
    btn.onmouseover = function() { this.style.background = 'var(--s2)'; };
    btn.onmouseout = function() { this.style.background = 'none'; };

    if (lastDivider) {
      drop.insertBefore(btn, lastDivider);
    } else {
      drop.appendChild(btn);
    }

    updateToggleBtn();
  }

  // ==========================================
  // INIT
  // ==========================================
  function init() {
    // 1. Instant load from localStorage (no flash)
    try {
      var saved = localStorage.getItem('tis_theme');
      if (saved && THEMES[saved]) applyTheme(saved);
    } catch(e) {}

    // 2. Inject toggle button once DOM is ready
    var observer = new MutationObserver(function() {
      if (document.getElementById('accountDrop')) {
        injectDesignToggle();
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });

    // Also try immediately
    setTimeout(injectDesignToggle, 500);

    // 3. After login, load from Supabase (overrides localStorage if different)
    // We poll for TIS_currentUser to be available
    var loginCheck = setInterval(function() {
      var user = window.TIS_currentUser ? window.TIS_currentUser() : null;
      if (user) {
        clearInterval(loginCheck);
        loadThemeFromSupabase();
        // Re-inject in case dropdown wasn't ready
        setTimeout(injectDesignToggle, 200);
      }
    }, 500);

    // Stop polling after 60s
    setTimeout(function() { clearInterval(loginCheck); }, 60000);
  }

  // ==========================================
  // EXPOSE
  // ==========================================
  window.toggleDesign = toggleDesign;
  window.TIS_applyTheme = applyTheme;
  window.TIS_loadThemeFromSupabase = loadThemeFromSupabase;

  // Start
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
