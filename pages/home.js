// ===== THIS IS STUDENT — HOME & KURS-ÜBERSICHT =====
// Landing Page + Kurs-Cards werden hier generiert.
// 
// NEUEN KURS HINZUFÜGEN? → Einfach unten in KURSE_LISTE eintragen!
// KURS ENTFERNEN? → Zeile löschen oder status auf 'arbeit' setzen.
// =====================================================

(function() {
  'use strict';

  // ==========================================
  // KONFIGURATION — Hier Kurse bearbeiten!
  // ==========================================

  var KURSE_LISTE = [
    // Verfügbare Kurse (status: 'live')
    {
      id: 'recht2',
      name: 'Recht 2 — SchKG',
      beschreibung: 'Schuldbetreibung & Konkurs · Gesellschaftsrecht',
      dozent: 'Olivier Dollé',
      details: ['10 Module', '40+ Artikel', 'Quiz & Karten'],
      farbe: ['var(--ac)', 'var(--pr)'],  // Gradient-Farben
      status: 'live'
    },
    {
      id: 'arb',
      name: 'Arbeitsrecht',
      beschreibung: 'Einzelarbeitsvertrag · L-GAV · Kündigung · Arbeitszeiten',
      dozent: 'Schwegler & Meinhardt',
      details: ['9 Module', '55 Artikel', 'Quiz & Karten'],
      farbe: ['var(--bl,#007AFF)', 'var(--pr)'],
      status: 'live'
    },
    {
      id: 'ctrl',
      name: 'Controlling 2',
      beschreibung: 'Kennzahlen · Kostenrechnung · Kalkulation · Investition',
      dozent: 'Joël Egger',
      details: ['4 Kapitel', '30+ Formeln', 'Quiz & Karten'],
      farbe: ['#00c6fb', '#005bea'],
      status: 'live'
    },
    {
      id: 'fa3',
      name: 'Financial Accounting 3',
      beschreibung: 'Bilanz & ER · MWST · Personal · Abschlüsse · Kennzahlen',
      dozent: 'Dario Furger',
      details: ['8 Kapitel', '35+ Karten', '4 Übungen'],
      farbe: ['#f5af19', '#f12711'],
      status: 'live'
    },
    {
      id: 'marketing',
      name: 'Operatives Marketing',
      beschreibung: 'Marketing-Mix · SWOT · AIDA · Kommunikation · Online',
      dozent: 'Hall & Martin',
      details: ['8 Kapitel', '40 Karten', 'Quiz & Glossar'],
      farbe: ['#38e89c', '#38b6e8'],
      status: 'live'
    },
    {
      id: 'rm',
      name: 'Revenue Management',
      beschreibung: 'CompSet · Benchmarking · Forecast · Total RM · Displacement',
      dozent: 'Andreas Klar',
      details: ['3 Module', '45 Karten', 'Quiz & Glossar'],
      farbe: ['#e8a838', '#e84f38'],
      status: 'live'
    },
    {
      id: 'hrm2',
      name: 'HRM 2',
      beschreibung: 'Personalgewinnung · E-Recruiting · Onboarding · Zeugnisse',
      dozent: 'Simone Rogge',
      details: ['6 Kapitel', '59 Karten', 'Quiz & Glossar'],
      farbe: ['#b838e8', '#e84f38'],
      status: 'live'
    },
    {
      id: 'sales',
      name: 'Sales',
      beschreibung: 'Verkaufsgespräche · Einwände · FAB · Planung · ABC-Analyse',
      dozent: 'Christian Gottstein',
      details: ['3 Kapitel', '50 Karten', 'Quiz & Glossar'],
      farbe: ['#38b6e8', '#b838e8'],
      status: 'live'
    },
    {
      id: 'fl',
      name: 'Führung & Leadership',
      beschreibung: 'St. Galler · GRID · MbO · Maslow · Glasl · Topend · 7 Führungskiller',
      dozent: 'Marc Aeberhard',
      details: ['11 Kapitel', '77 Karten', 'Quiz & Glossar'],
      farbe: ['#8b2c5a', '#e89a38'],
      status: 'live'
    },

    // Kurse in Arbeit (status: 'arbeit')
    { name: 'Betriebsorganisation', status: 'arbeit' },
    { name: 'Food & Beverage Mgmt', status: 'arbeit' }
  ];

  // ==========================================
  // HTML GENERIERUNG (nicht bearbeiten!)
  // ==========================================

  var live = KURSE_LISTE.filter(function(k) { return k.status === 'live'; });
  var arbeit = KURSE_LISTE.filter(function(k) { return k.status === 'arbeit'; });

  function esc(s) { return (s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;'); }

  // Landing Page
  var homeHTML = '<div class="sec on" id="home">';
  homeHTML += '<div style="text-align:center;padding:80px 0 40px;min-height:70vh;display:flex;flex-direction:column;justify-content:center;align-items:center">';
  homeHTML += '<div style="margin-bottom:28px"><svg width="100" height="100" viewBox="0 0 200 200" fill="none"><polygon points="100,10 178,40 178,160 100,190 22,160 22,40" stroke="var(--ac)" stroke-width="2.5" fill="none"/><circle cx="100" cy="100" r="65" stroke="var(--ac2,#D4654A)" stroke-width="2" fill="none" opacity="0.6"/><text x="100" y="118" text-anchor="middle" font-family="Georgia,serif" font-size="72" fill="var(--ac)">T</text></svg></div>';
  homeHTML += '<h1 style="font-size:56px;letter-spacing:-1.5px;margin-bottom:12px;line-height:1.05"><span style="color:var(--ac)">This Is Student</span></h1>';
  homeHTML += '<p style="font-size:20px;color:var(--tx2);margin-bottom:8px;letter-spacing:-.2px;max-width:460px">Die interaktive Lernplattform für dein Studium.</p>';
  homeHTML += '<p style="font-size:15px;color:var(--tx3);margin-bottom:48px">Visuell · Interaktiv · Prüfungsbereit</p>';
  homeHTML += '<button class="bp1" onclick="go(\'kurse\')" style="font-size:16px;padding:14px 40px;border-radius:980px;font-weight:600;letter-spacing:-.2px">Zu den Kursen →</button>';
  homeHTML += '</div>';
  // Footer
  homeHTML += '<div style="text-align:center;padding:40px 0 20px;border-top:1px solid var(--bd);margin-top:40px">';
  homeHTML += '<div style="font-size:12px;color:var(--tx3);line-height:2">';
  homeHTML += '<span style="display:inline-block;padding:3px 10px;border-radius:980px;background:var(--aml);color:var(--am);font-size:10.5px;font-weight:700;letter-spacing:.5px;margin-bottom:8px">IN DEVELOPMENT</span><br>';
  homeHTML += 'This Is Student · Version 0.2 Beta<br>';
  homeHTML += '© 2026 — Ein persönliches Lernprojekt<br>';
  homeHTML += '<span style="color:var(--tx3)">Status: In Testing &amp; Arbeit · Inhalte werden laufend ergänzt</span><br>';
  homeHTML += '<span style="display:inline-flex;gap:12px;margin-top:12px">';
  homeHTML += '<button onclick="go(\'impressum\')" style="font-size:11px;padding:5px 14px;color:var(--tx3);border-color:var(--bd)">Impressum</button>';
  homeHTML += '<button onclick="go(\'faq\')" style="font-size:11px;padding:5px 14px;color:var(--tx3);border-color:var(--bd)">FAQ &amp; Über das Projekt</button>';
  homeHTML += '<button onclick="go(\'support\')" style="font-size:11px;padding:5px 14px;color:var(--tx3);border-color:var(--bd)">Support</button>';
  homeHTML += '</span></div></div>';
  homeHTML += '</div>';

  // Kurse-Übersicht
  var kurseHTML = '<div class="sec" id="kurse">';
  kurseHTML += '<div style="text-align:center;padding:28px 0 20px">';
  kurseHTML += '<h1 style="font-size:42px;letter-spacing:-.8px">Deine Kurse</h1>';
  kurseHTML += '<p style="font-size:16px;color:var(--tx2);margin-bottom:32px">BWS Semester 5 — Wähle ein Fach</p>';
  kurseHTML += '<div style="display:flex;justify-content:center;gap:32px;margin-bottom:40px;flex-wrap:wrap">';
  kurseHTML += '<div style="text-align:center"><div style="font-size:36px;font-weight:700;letter-spacing:-1px;color:var(--ac)">' + KURSE_LISTE.length + '</div><div style="font-size:12px;color:var(--tx3);letter-spacing:.5px;text-transform:uppercase;font-weight:600">Kurse total</div></div>';
  kurseHTML += '<div style="text-align:center"><div style="font-size:36px;font-weight:700;letter-spacing:-1px;color:var(--g)">' + live.length + '</div><div style="font-size:12px;color:var(--tx3);letter-spacing:.5px;text-transform:uppercase;font-weight:600">Verfügbar</div></div>';
  kurseHTML += '<div style="text-align:center"><div style="font-size:36px;font-weight:700;letter-spacing:-1px;color:var(--am)">' + arbeit.length + '</div><div style="font-size:12px;color:var(--tx3);letter-spacing:.5px;text-transform:uppercase;font-weight:600">In Arbeit</div></div>';
  kurseHTML += '</div></div>';

  // Kurs-Cards (verfügbar) — Apple-clean v2
  kurseHTML += '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:14px;margin:0 0 48px">';
  live.forEach(function(k) {
    kurseHTML += '<div class="c ck" onclick="go(\'' + k.id + '\')" style="border-radius:var(--rd2);padding:28px;position:relative;overflow:hidden">';
    kurseHTML += '<div style="display:flex;align-items:center;gap:8px;margin-bottom:14px"><span style="display:inline-block;padding:3px 10px;border-radius:980px;background:var(--gl);color:var(--g);font-size:10px;font-weight:700;letter-spacing:.5px">VERFÜGBAR</span></div>';
    kurseHTML += '<div style="font-family:var(--se);font-size:20px;font-weight:400;margin-bottom:6px;letter-spacing:-.2px">' + esc(k.name) + '</div>';
    kurseHTML += '<div style="font-size:13px;color:var(--tx2);line-height:1.6;margin-bottom:14px">' + esc(k.beschreibung) + '</div>';
    kurseHTML += '<div style="display:flex;gap:12px;flex-wrap:wrap;margin-bottom:10px">';
    k.details.forEach(function(d) { kurseHTML += '<span style="font-size:11px;color:var(--tx3)">' + esc(d) + '</span>'; });
    kurseHTML += '</div>';
    kurseHTML += '<div style="font-size:11px;color:var(--tx3);margin-bottom:14px">Dozent: ' + esc(k.dozent) + '</div>';
    kurseHTML += '<div><span style="font-size:13px;color:var(--ac);font-weight:600">Kurs öffnen →</span></div>';
    kurseHTML += '</div>';
  });

  // Downloads Card (gleicher Stil)
  kurseHTML += '<div class="c ck" onclick="go(\'downloads\')" style="border-radius:var(--rd2);padding:28px;position:relative;overflow:hidden">';
  kurseHTML += '<div style="margin-bottom:14px"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--tx3)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg></div>';
  kurseHTML += '<div style="font-family:var(--se);font-size:20px;font-weight:400;margin-bottom:6px;letter-spacing:-.2px">Zusammenfassungen</div>';
  kurseHTML += '<div style="font-size:13px;color:var(--tx2);line-height:1.6;margin-bottom:14px">PDFs zum Download</div>';
  kurseHTML += '<div style="display:flex;gap:12px;margin-bottom:14px">';
  kurseHTML += '<span style="font-size:11px;color:var(--tx3)">Alle Fächer</span>';
  kurseHTML += '<span style="font-size:11px;color:var(--tx3)">Offline nutzbar</span>';
  kurseHTML += '</div>';
  kurseHTML += '<div><span style="font-size:13px;color:var(--ac);font-weight:600">Öffnen →</span></div>';
  kurseHTML += '</div>';

  kurseHTML += '</div>';

  // In Arbeit
  kurseHTML += '<div style="display:flex;align-items:center;gap:12px;margin-bottom:20px">';
  kurseHTML += '<h2 style="font-size:20px;margin:0;color:var(--tx)">Weitere Kurse</h2>';
  kurseHTML += '<span style="display:inline-block;padding:3px 10px;border-radius:980px;background:var(--aml);color:var(--am);font-size:10px;font-weight:700;letter-spacing:.5px">' + arbeit.length + ' IN ARBEIT</span>';
  kurseHTML += '</div>';
  kurseHTML += '<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:8px">';
  arbeit.forEach(function(k) {
    kurseHTML += '<div style="padding:14px 18px;border-radius:12px;background:var(--s2);color:var(--tx2);font-size:14px;font-weight:500;opacity:.6;transition:all .2s;letter-spacing:-.1px" onmouseover="this.style.opacity=\'1\'" onmouseout="this.style.opacity=\'.6\'">' + esc(k.name) + '</div>';
  });
  kurseHTML += '</div></div>';

  // Inject into .ct container
  var ct = document.querySelector('.ct');
  if (ct) {
    ct.insertAdjacentHTML('afterbegin', homeHTML + kurseHTML);
  }

})();
