// ===== SUPPORT PAGE =====
// Füge in index.html ein: <script src="support.js"></script>
(function(){

window.TIS = window.TIS || {};
window.TIS.pages = window.TIS.pages || {};

window.TIS.pages.support = `
<div class="sec" id="support">
<div style="max-width:560px;margin:0 auto">

<div style="text-align:center;margin-bottom:36px">
<div style="font-size:40px;margin-bottom:12px">💬</div>
<h1 style="font-size:32px">Support</h1>
<p class="sub" style="margin-bottom:0">Frage, Feedback oder Problem? Schreib uns — wir melden uns so schnell wie möglich.</p>
</div>

<div id="supportForm" class="c" style="padding:28px 28px 24px">
<div style="margin-bottom:18px">
<label style="font-size:12px;font-weight:600;letter-spacing:.5px;text-transform:uppercase;color:var(--tx3);display:block;margin-bottom:6px">Name</label>
<input type="text" id="supName" placeholder="Dein Name" style="width:100%;padding:12px 16px;border:1.5px solid var(--bd);border-radius:12px;font-family:var(--f);font-size:14px;background:var(--s);color:var(--tx);outline:none;transition:border .2s;box-sizing:border-box" onfocus="this.style.borderColor='var(--ac)'" onblur="this.style.borderColor='var(--bd)'">
</div>

<div style="margin-bottom:18px">
<label style="font-size:12px;font-weight:600;letter-spacing:.5px;text-transform:uppercase;color:var(--tx3);display:block;margin-bottom:6px">E-Mail</label>
<input type="email" id="supEmail" placeholder="Deine E-Mail-Adresse" style="width:100%;padding:12px 16px;border:1.5px solid var(--bd);border-radius:12px;font-family:var(--f);font-size:14px;background:var(--s);color:var(--tx);outline:none;transition:border .2s;box-sizing:border-box" onfocus="this.style.borderColor='var(--ac)'" onblur="this.style.borderColor='var(--bd)'">
</div>

<div style="margin-bottom:18px">
<label style="font-size:12px;font-weight:600;letter-spacing:.5px;text-transform:uppercase;color:var(--tx3);display:block;margin-bottom:6px">Betreff</label>
<select id="supSubject" style="width:100%;padding:12px 16px;border:1.5px solid var(--bd);border-radius:12px;font-family:var(--f);font-size:14px;background:var(--s);color:var(--tx);outline:none;transition:border .2s;box-sizing:border-box;cursor:pointer" onfocus="this.style.borderColor='var(--ac)'" onblur="this.style.borderColor='var(--bd)'">
<option value="Frage zum Inhalt">Frage zum Inhalt</option>
<option value="Fehler melden">Fehler melden</option>
<option value="Feedback / Verbesserung">Feedback / Verbesserung</option>
<option value="Technisches Problem">Technisches Problem</option>
<option value="Sonstiges">Sonstiges</option>
</select>
</div>

<div style="margin-bottom:22px">
<label style="font-size:12px;font-weight:600;letter-spacing:.5px;text-transform:uppercase;color:var(--tx3);display:block;margin-bottom:6px">Nachricht</label>
<textarea id="supMsg" rows="5" placeholder="Beschreibe dein Anliegen..." style="width:100%;padding:12px 16px;border:1.5px solid var(--bd);border-radius:12px;font-family:var(--f);font-size:14px;background:var(--s);color:var(--tx);outline:none;resize:vertical;transition:border .2s;box-sizing:border-box;line-height:1.6" onfocus="this.style.borderColor='var(--ac)'" onblur="this.style.borderColor='var(--bd)'"></textarea>
</div>

<button id="supBtn" onclick="window._submitSupport()" class="bp1" style="width:100%;padding:14px;font-size:15px;border-radius:12px;font-weight:600;letter-spacing:-.1px">Nachricht senden</button>

<div id="supStatus" style="display:none;margin-top:16px;padding:14px 18px;border-radius:12px;font-size:14px;text-align:center"></div>
</div>

<div style="text-align:center;margin-top:24px;font-size:12px;color:var(--tx3);line-height:1.8">
Antwortzeit: In der Regel innerhalb von 24–48 Stunden.<br>
Alternativ erreichst du uns unter <strong>thisisstudent.support@gmail.com</strong>
</div>

</div>
</div>
`;

// Submit handler
window._submitSupport = async function(){
  const name = document.getElementById('supName').value.trim();
  const email = document.getElementById('supEmail').value.trim();
  const subject = document.getElementById('supSubject').value;
  const msg = document.getElementById('supMsg').value.trim();
  const btn = document.getElementById('supBtn');
  const status = document.getElementById('supStatus');

  // Validation
  if(!name || !email || !msg){
    status.style.display = 'block';
    status.style.background = 'var(--rl)';
    status.style.color = 'var(--r)';
    status.textContent = 'Bitte fülle alle Felder aus.';
    return;
  }
  if(!email.includes('@') || !email.includes('.')){
    status.style.display = 'block';
    status.style.background = 'var(--rl)';
    status.style.color = 'var(--r)';
    status.textContent = 'Bitte gib eine gültige E-Mail-Adresse ein.';
    return;
  }

  // Send
  btn.disabled = true;
  btn.textContent = 'Wird gesendet...';
  btn.style.opacity = '0.6';

  try {
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        access_key: '5826e778-fea4-48d8-a6b5-927ee2643375',
        subject: '[This Is Student] ' + subject,
        from_name: 'This Is Student Support',
        name: name,
        email: email,
        message: msg
      })
    });
    const data = await res.json();
    if(data.success){
      status.style.display = 'block';
      status.style.background = 'var(--gl)';
      status.style.color = 'var(--g)';
      status.innerHTML = '<strong>Nachricht gesendet!</strong> Wir melden uns so schnell wie möglich bei dir.';
      // Reset form
      document.getElementById('supName').value = '';
      document.getElementById('supEmail').value = '';
      document.getElementById('supMsg').value = '';
      btn.textContent = '✓ Gesendet';
      btn.style.opacity = '1';
      btn.style.background = 'var(--g)';
    } else {
      throw new Error('Failed');
    }
  } catch(e){
    status.style.display = 'block';
    status.style.background = 'var(--rl)';
    status.style.color = 'var(--r)';
    status.textContent = 'Fehler beim Senden. Bitte versuche es erneut oder schreib direkt an thisisstudent.support@gmail.com';
    btn.disabled = false;
    btn.textContent = 'Nachricht senden';
    btn.style.opacity = '1';
  }
};

})();
