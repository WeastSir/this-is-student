// ===== THIS IS STUDENT — LOGIN MODULE =====
// Login Screen, Register, Password Reset, Change Password Modal
// Wird automatisch in index.html injiziert
// =============================================

(function() {
  'use strict';

  const loginHTML = `
<!-- LOGIN SCREEN -->
<div id="loginScreen">
<div id="loginBox">
<div id="loginLogo">This Is Student</div>
<div class="login-dots"><div class="login-dot active"></div><div class="login-dot"></div><div class="login-dot"></div></div>
<h1>Willkommen</h1>
<div class="login-sub">Melde dich an oder erstelle einen Account.</div>

<!-- Tabs -->
<div id="loginTabContainer" style="display:flex;gap:0;margin-bottom:24px;border-radius:12px;overflow:hidden;border:1px solid rgba(255,255,255,.08)">
<button id="tabLogin" class="active" onclick="showLoginTab('login')" style="flex:1;padding:10px;font-size:13px;font-weight:600;border:none;cursor:pointer;font-family:var(--f);transition:all .2s;background:rgba(232,86,122,.2);color:#fff">Anmelden</button>
<button id="tabRegister" onclick="showLoginTab('register')" style="flex:1;padding:10px;font-size:13px;font-weight:600;border:none;cursor:pointer;font-family:var(--f);transition:all .2s;background:rgba(255,255,255,.04);color:rgba(255,255,255,.4)">Registrieren</button>
</div>

<!-- Login Form -->
<div id="loginFormWrap">
<div class="login-field">
<label>E-Mail</label>
<input type="email" id="loginEmail" placeholder="deine@email.ch" autocomplete="email" spellcheck="false">
</div>
<div class="login-field">
<label>Passwort</label>
<input type="password" id="loginPW" placeholder="Passwort eingeben" autocomplete="current-password" onkeydown="if(event.key==='Enter')checkLogin()">
</div>
<button id="loginBtn" onclick="checkLogin()">Anmelden</button>
<div style="text-align:center;margin-top:14px">
<a href="#" onclick="showLoginTab('reset');return false" style="font-size:12px;color:rgba(255,255,255,.35);text-decoration:none;transition:color .2s" onmouseover="this.style.color='rgba(232,86,122,.8)'" onmouseout="this.style.color='rgba(255,255,255,.35)'">Passwort vergessen?</a>
</div>
<div id="loginError" style="display:none"></div>
<div id="loginSuccess" style="display:none"></div>
</div>

<!-- Register Form -->
<div id="regFormWrap" style="display:none">
<div class="login-field">
<label>E-Mail</label>
<input type="email" id="regEmail" placeholder="deine@email.ch" autocomplete="email" spellcheck="false">
</div>
<div class="login-field">
<label>Anzeigename</label>
<input type="text" id="regName" placeholder="Dein Name (z.B. Max Muster)" autocomplete="name">
</div>
<div class="login-field">
<label>Passwort</label>
<input type="password" id="regPW" placeholder="Mindestens 6 Zeichen" autocomplete="new-password">
</div>
<div class="login-field">
<label>Passwort bestätigen</label>
<input type="password" id="regPW2" placeholder="Passwort wiederholen" autocomplete="new-password" onkeydown="if(event.key==='Enter')document.getElementById('regBtn').click()">
</div>
<div class="login-field" id="regCodeField">
<label>Invite-Code</label>
<input type="text" id="regCode" placeholder="Code eingeben" autocomplete="off" spellcheck="false" style="text-transform:uppercase;letter-spacing:2px">
</div>
<button id="regBtn" onclick="doRegister()" style="width:100%;padding:15px;border-radius:14px;border:none;background:linear-gradient(135deg,#e8567a,#c44569);color:#fff;font-family:var(--f);font-size:15px;font-weight:600;cursor:pointer;transition:all .3s;box-shadow:0 4px 20px rgba(232,86,122,.25);letter-spacing:.3px">Account erstellen</button>
<div id="regError" style="display:none;color:#ff6b6b;font-size:12.5px;margin-top:14px;padding:10px 14px;background:rgba(255,107,107,.08);border-radius:10px;border:1px solid rgba(255,107,107,.15)"></div>
<div id="regSuccess" style="display:none;text-align:center;padding:10px 14px;background:rgba(76,209,146,.08);border-radius:10px;border:1px solid rgba(76,209,146,.15);color:#4cd192;font-size:13px;margin-top:14px"></div>
</div>

<!-- Password Reset Form -->
<div id="resetFormWrap" style="display:none">
<div style="margin-bottom:20px">
<h2 style="color:#fff;font-size:22px;margin-bottom:6px">Passwort zurücksetzen</h2>
<p style="font-size:13px;color:rgba(255,255,255,.4);line-height:1.5">Gib deine E-Mail ein. Du erhältst einen Link zum Zurücksetzen.</p>
</div>
<div class="login-field">
<label>E-Mail</label>
<input type="email" id="resetEmail" placeholder="deine@email.ch" autocomplete="email" spellcheck="false" onkeydown="if(event.key==='Enter')doPasswordReset()">
</div>
<button id="resetBtn" onclick="doPasswordReset()" style="width:100%;padding:15px;border-radius:14px;border:none;background:linear-gradient(135deg,#e8567a,#c44569);color:#fff;font-family:var(--f);font-size:15px;font-weight:600;cursor:pointer;transition:all .3s;box-shadow:0 4px 20px rgba(232,86,122,.25);letter-spacing:.3px">Reset-Link senden</button>
<div id="resetError" style="display:none;color:#ff6b6b;font-size:12.5px;margin-top:14px;padding:10px 14px;background:rgba(255,107,107,.08);border-radius:10px;border:1px solid rgba(255,107,107,.15)"></div>
<div id="resetSuccess" style="display:none;text-align:center;padding:10px 14px;background:rgba(76,209,146,.08);border-radius:10px;border:1px solid rgba(76,209,146,.15);color:#4cd192;font-size:13px;margin-top:14px"></div>
<div style="text-align:center;margin-top:16px">
<a href="#" onclick="showLoginTab('login');return false" style="font-size:12px;color:rgba(255,255,255,.35);text-decoration:none;transition:color .2s" onmouseover="this.style.color='rgba(232,86,122,.8)'" onmouseout="this.style.color='rgba(255,255,255,.35)'">← Zurück zum Login</a>
</div>
</div>

<!-- New Password Form (after clicking reset link) -->
<div id="newPWFormWrap" style="display:none">
<div style="margin-bottom:20px">
<h2 style="color:#fff;font-size:22px;margin-bottom:6px">Neues Passwort</h2>
<p style="font-size:13px;color:rgba(255,255,255,.4);line-height:1.5">Wähle dein neues Passwort.</p>
</div>
<div class="login-field">
<label>Neues Passwort</label>
<input type="password" id="newPW" placeholder="Mindestens 6 Zeichen" autocomplete="new-password">
</div>
<div class="login-field">
<label>Passwort bestätigen</label>
<input type="password" id="newPW2" placeholder="Passwort wiederholen" autocomplete="new-password" onkeydown="if(event.key==='Enter')doSetNewPassword()">
</div>
<button onclick="doSetNewPassword()" style="width:100%;padding:15px;border-radius:14px;border:none;background:linear-gradient(135deg,#e8567a,#c44569);color:#fff;font-family:var(--f);font-size:15px;font-weight:600;cursor:pointer;transition:all .3s;box-shadow:0 4px 20px rgba(232,86,122,.25);letter-spacing:.3px">Passwort ändern</button>
<div id="newPWError" style="display:none;color:#ff6b6b;font-size:12.5px;margin-top:14px;padding:10px 14px;background:rgba(255,107,107,.08);border-radius:10px;border:1px solid rgba(255,107,107,.15)"></div>
<div id="newPWSuccess" style="display:none;text-align:center;padding:10px 14px;background:rgba(76,209,146,.08);border-radius:10px;border:1px solid rgba(76,209,146,.15);color:#4cd192;font-size:13px;margin-top:14px"></div>
</div>

<div class="login-footer">This Is Student</div>
</div>
</div>
`;

  const changePWHTML = `
<!-- PASSWORT ÄNDERN MODAL -->
<div id="changePWModal" style="display:none;position:fixed;inset:0;z-index:10001;background:rgba(0,0,0,.55);-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px);padding:20px;overflow-y:auto;align-items:center;justify-content:center" onclick="if(event.target===this)closeChangePWModal()">
<div style="max-width:420px;width:100%;background:var(--s);border-radius:var(--rd2);border:1px solid var(--bd);padding:36px;box-shadow:var(--shadow-lg);position:relative;backdrop-filter:blur(20px)">
<button onclick="closeChangePWModal()" style="position:absolute;top:16px;right:18px;font-size:22px;cursor:pointer;color:var(--tx3);border:none;background:var(--s2);font-family:var(--f);width:36px;height:36px;border-radius:50%;display:flex;align-items:center;justify-content:center;transition:all .2s">&times;</button>
<div style="font-family:var(--se);font-size:22px;margin-bottom:20px;letter-spacing:-.3px">Passwort ändern</div>
<div style="margin-bottom:14px">
<label style="display:block;font-size:11px;font-weight:600;letter-spacing:1px;text-transform:uppercase;color:var(--tx3);margin-bottom:6px">Aktuelles Passwort</label>
<input type="password" id="changePWOld" style="width:100%;padding:12px 16px;border:1.5px solid var(--bd);border-radius:12px;font-family:var(--f);font-size:14px;background:var(--s2);color:var(--tx);outline:none;transition:border .3s;box-sizing:border-box" placeholder="Aktuelles Passwort">
</div>
<div style="margin-bottom:14px">
<label style="display:block;font-size:11px;font-weight:600;letter-spacing:1px;text-transform:uppercase;color:var(--tx3);margin-bottom:6px">Neues Passwort</label>
<input type="password" id="changePWNew" style="width:100%;padding:12px 16px;border:1.5px solid var(--bd);border-radius:12px;font-family:var(--f);font-size:14px;background:var(--s2);color:var(--tx);outline:none;transition:border .3s;box-sizing:border-box" placeholder="Mindestens 6 Zeichen">
</div>
<div style="margin-bottom:20px">
<label style="display:block;font-size:11px;font-weight:600;letter-spacing:1px;text-transform:uppercase;color:var(--tx3);margin-bottom:6px">Neues Passwort bestätigen</label>
<input type="password" id="changePWNew2" style="width:100%;padding:12px 16px;border:1.5px solid var(--bd);border-radius:12px;font-family:var(--f);font-size:14px;background:var(--s2);color:var(--tx);outline:none;transition:border .3s;box-sizing:border-box" placeholder="Passwort wiederholen" onkeydown="if(event.key==='Enter')doChangePassword()">
</div>
<div id="changePWError" style="display:none;color:var(--r);font-size:12.5px;margin-bottom:14px;padding:10px 14px;background:var(--rl);border-radius:10px;border:1px solid rgba(255,59,48,.15)"></div>
<div id="changePWSuccess" style="display:none;text-align:center;padding:10px 14px;background:var(--gl);border-radius:10px;border:1px solid rgba(52,199,89,.15);color:var(--g);font-size:13px;margin-bottom:14px"></div>
<div style="display:flex;gap:10px;justify-content:flex-end">
<button onclick="closeChangePWModal()" style="font-size:13px;padding:10px 20px">Abbrechen</button>
<button class="bp1" onclick="doChangePassword()" style="font-size:13px;padding:10px 24px">Passwort ändern</button>
</div>
</div>
</div>
`;

  // Inject login screen at the very beginning of body
  document.body.insertAdjacentHTML('afterbegin', loginHTML);
  
  // Inject changePW modal before the scripts
  document.body.insertAdjacentHTML('beforeend', changePWHTML);

})();
