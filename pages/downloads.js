// ===== DOWNLOADS — PDF-ZUSAMMENFASSUNGEN =====
// ================================================
// ANLEITUNG: PDFs hinzufügen
// 1. PDF-Datei in den Ordner /pdfs/ auf GitHub Pages legen
// 2. Unten im DOWNLOADS-Array einen neuen Eintrag machen
// 3. Fertig! Der Download-Link erscheint automatisch.
// ================================================

(function() {
window.TIS = window.TIS || {};
window.TIS.pages = window.TIS.pages || {};

// ==========================================
// KONFIGURATION — Hier PDFs bearbeiten!
// ==========================================
// Jeder Eintrag: { name: 'Dateiname', kurs: 'Kursname', datei: 'pfad/zur/datei.pdf', groesse: '2.1 MB' }
// 
// BEISPIEL:
// { name: 'SchKG Zusammenfassung', kurs: 'Recht 2', datei: 'pdfs/recht2-zusammenfassung.pdf', groesse: '1.8 MB' },

var DOWNLOADS = [
  // ── Recht 2 ──
  // { name: 'SchKG Zusammenfassung', kurs: 'Recht 2', datei: 'pdfs/recht2-zusammenfassung.pdf', groesse: '1.8 MB' },

  // ── Arbeitsrecht ──
  // { name: 'Arbeitsrecht Zusammenfassung', kurs: 'Arbeitsrecht', datei: 'pdfs/arbeitsrecht-zusammenfassung.pdf', groesse: '2.1 MB' },

  // ── Controlling 2 ──
  // { name: 'Controlling 2 Zusammenfassung', kurs: 'Controlling 2', datei: 'pdfs/controlling2-zusammenfassung.pdf', groesse: '1.5 MB' },

  // ── Financial Accounting 3 ──
  // { name: 'FA3 Zusammenfassung', kurs: 'Financial Accounting 3', datei: 'pdfs/fa3-zusammenfassung.pdf', groesse: '2.3 MB' },

  // ── Operatives Marketing ──
  // { name: 'Marketing Zusammenfassung', kurs: 'Operatives Marketing', datei: 'pdfs/marketing-zusammenfassung.pdf', groesse: '1.9 MB' },

  // ── Revenue Management ──
  // { name: 'RM Zusammenfassung', kurs: 'Revenue Management', datei: 'pdfs/rm-zusammenfassung.pdf', groesse: '1.6 MB' },
];

// ==========================================
// HTML GENERIERUNG (nicht bearbeiten!)
// ==========================================

// Gruppiere nach Kurs
var kurse = {};
DOWNLOADS.forEach(function(d) {
  if (!kurse[d.kurs]) kurse[d.kurs] = [];
  kurse[d.kurs].push(d);
});

var html = '';

// Header
html += '<div class="sec" id="downloads">';
html += '<h1>Zusammenfassungen</h1>';
html += '<p class="sub">PDF-Zusammenfassungen zum Download — für alle Fächer</p>';

if (DOWNLOADS.length === 0) {
  // Leerer Zustand
  html += '<div style="text-align:center;padding:60px 20px">';
  html += '<div style="font-size:48px;margin-bottom:16px;opacity:.3">📄</div>';
  html += '<div style="font-size:18px;font-weight:600;color:var(--tx);margin-bottom:8px">Noch keine PDFs verfügbar</div>';
  html += '<div style="font-size:14px;color:var(--tx3);max-width:400px;margin:0 auto">Die Zusammenfassungen werden laufend ergänzt. Schau bald wieder vorbei!</div>';
  html += '</div>';
} else {
  // PDF-Liste nach Kurs gruppiert
  var kursNamen = Object.keys(kurse);
  kursNamen.forEach(function(kursName) {
    var pdfs = kurse[kursName];
    html += '<div style="margin-bottom:32px">';
    html += '<h2 style="font-size:18px;letter-spacing:-.2px;margin-bottom:12px">' + kursName + '</h2>';
    html += '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:10px">';
    pdfs.forEach(function(pdf) {
      html += '<a href="' + pdf.datei + '" download style="text-decoration:none;color:inherit">';
      html += '<div class="c ck" style="padding:18px 20px;display:flex;align-items:center;gap:14px">';
      html += '<div style="width:40px;height:40px;border-radius:10px;background:var(--rl);color:var(--r);display:flex;align-items:center;justify-content:center;font-weight:700;font-size:12px;flex-shrink:0">PDF</div>';
      html += '<div style="flex:1;min-width:0">';
      html += '<div class="ct2" style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis">' + pdf.name + '</div>';
      html += '<div class="cd">' + pdf.groesse + '</div>';
      html += '</div>';
      html += '<div style="font-size:18px;color:var(--ac);flex-shrink:0">↓</div>';
      html += '</div></a>';
    });
    html += '</div></div>';
  });
}

// Buttons
html += '<div style="text-align:center;padding:24px 0">';
html += '<button onclick="go(\'kurse\')" style="font-size:13px;padding:10px 24px">← Zurück zu den Kursen</button>';
html += '</div>';
html += '</div>';

window.TIS.pages.downloads = html;

// Inject
var target = document.getElementById('pagesContent');
if (target) target.insertAdjacentHTML('beforeend', html);

})();
