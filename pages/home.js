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

    // Kurse in Arbeit (status: 'arbeit')
    { name: 'Betriebsorganisation', status: 'arbeit' },
    { name: 'Business English', status: 'arbeit' },
    { name: 'Digitale Kompetenzen', status: 'arbeit' },
    { name: 'Food & Beverage Mgmt', status: 'arbeit' },
    { name: 'Führung & Leadership', status: 'arbeit' },
    { name: 'Human Resources Mgmt', status: 'arbeit' },
    { name: 'ID Loop', status: 'arbeit' },
    { name: 'Innovation & Digitalisierung', status: 'arbeit' },
    { name: 'Medien', status: 'arbeit' },
    { name: 'Präsentationstechnik', status: 'arbeit' },
    { name: 'Qualitätsmanagement', status: 'arbeit' },
    { name: 'Sales', status: 'arbeit' },
    { name: 'Sozialversicherungen', status: 'arbeit' },
    { name: 'Sustainability', status: 'arbeit' }
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
  homeHTML += '<h1 style="font-size:56px;letter-spacing:-1.5px;margin-bottom:12px;line-height:1.05"><span style="background:var(--grad);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text">This Is Student</span></h1>';
  homeHTML += '<p style="font-size:20px;color:var(--tx2);margin-bottom:8px;letter-spacing:-.2px;max-width:460px">Die interaktive Lernplattform für dein Studium.</p>';
  homeHTML += '<p style="font-size:15px;color:var(--tx3);margin-bottom:48px">Visuell · Interaktiv · Prüfungsbereit</p>';
  homeHTML += '<button class="bp1" onclick="go(\'kurse\')" style="font-size:16px;padding:14px 40px;border-radius:980px;font-weight:600;letter-spacing:-.2px;box-shadow:0 4px 16px rgba(232,86,122,.3)">Zu den Kursen →</button>';
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
  kurseHTML += '<div style="text-align:center"><div style="font-size:36px;font-weight:700;letter-spacing:-1px;background:var(--grad);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text">' + KURSE_LISTE.length + '</div><div style="font-size:12px;color:var(--tx3);letter-spacing:.5px;text-transform:uppercase;font-weight:600">Kurse total</div></div>';
  kurseHTML += '<div style="text-align:center"><div style="font-size:36px;font-weight:700;letter-spacing:-1px;color:var(--g)">' + live.length + '</div><div style="font-size:12px;color:var(--tx3);letter-spacing:.5px;text-transform:uppercase;font-weight:600">Verfügbar</div></div>';
  kurseHTML += '<div style="text-align:center"><div style="font-size:36px;font-weight:700;letter-spacing:-1px;color:var(--am)">' + arbeit.length + '</div><div style="font-size:12px;color:var(--tx3);letter-spacing:.5px;text-transform:uppercase;font-weight:600">In Arbeit</div></div>';
  kurseHTML += '</div></div>';

  // Kurs-Cards (verfügbar)
  kurseHTML += '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:16px;margin:0 0 48px">';
  live.forEach(function(k) {
    var f1 = k.farbe[0], f2 = k.farbe[1];
    kurseHTML += '<div class="ck" onclick="go(\'' + k.id + '\')" style="position:relative;border-radius:24px;padding:3px;background:linear-gradient(135deg,' + f1 + ',' + f2 + ',' + f1 + ');cursor:pointer;transition:all .3s;box-shadow:0 4px 24px rgba(0,0,0,.08)">';
    kurseHTML += '<div style="background:var(--s);border-radius:22px;padding:32px;height:100%;position:relative;overflow:hidden">';
    kurseHTML += '<div style="position:absolute;top:0;right:0;width:120px;height:120px;background:linear-gradient(135deg,rgba(0,0,0,.03),transparent);border-radius:0 22px 0 100%"></div>';
    kurseHTML += '<div style="position:relative;z-index:1">';
    kurseHTML += '<div style="display:flex;align-items:center;gap:8px;margin-bottom:16px"><span style="display:inline-block;padding:4px 12px;border-radius:980px;background:var(--gl);color:var(--g);font-size:10.5px;font-weight:700;letter-spacing:.5px">VERFÜGBAR</span></div>';
    kurseHTML += '<div style="font-family:var(--se);font-size:24px;font-weight:700;margin-bottom:8px;letter-spacing:-.3px">' + esc(k.name) + '</div>';
    kurseHTML += '<div style="font-size:14px;color:var(--tx2);line-height:1.6;margin-bottom:16px">' + esc(k.beschreibung) + '</div>';
    kurseHTML += '<div style="display:flex;gap:16px;flex-wrap:wrap;margin-bottom:16px">';
    k.details.forEach(function(d) { kurseHTML += '<span style="font-size:12px;color:var(--tx3)">' + esc(d) + '</span>'; });
    kurseHTML += '</div>';
    kurseHTML += '<div style="font-size:12px;color:var(--tx3)">Dozent: ' + esc(k.dozent) + '</div>';
    kurseHTML += '<div style="margin-top:16px"><span style="font-size:13px;color:var(--ac);font-weight:600">Kurs öffnen →</span></div>';
    kurseHTML += '</div></div></div>';
  });
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
