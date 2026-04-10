// ===== DOWNLOADS — PDF-ZUSAMMENFASSUNGEN =====
// ================================================
// VOLLAUTOMATISCH! Einfach PDFs in den /pdfs/ Ordner
// auf GitHub hochladen — sie erscheinen automatisch.
// Kein Code anpassen nötig.
// ================================================

(function() {

var GITHUB_USER = 'WeastSir';
var GITHUB_REPO = 'this-is-student';
var PDF_FOLDER  = 'pdfs';

// Schöner Name aus Dateiname ableiten
// "Recht2_SchKG_Zusammenfassung.pdf" → "Recht2 SchKG Zusammenfassung"
function prettyName(filename) {
  return filename
    .replace(/\.pdf$/i, '')
    .replace(/[-_]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

// Dateigrösse formatieren
function formatSize(bytes) {
  if (bytes < 1024) return bytes + ' B';
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(0) + ' KB';
  return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
}

// HTML bauen
function buildPage(pdfs) {
  var html = '';
  html += '<div class="sec" id="downloads">';
  html += '<h1>Zusammenfassungen</h1>';
  html += '<p class="sub">PDF-Zusammenfassungen zum Download</p>';

  if (!pdfs || pdfs.length === 0) {
    html += '<div style="text-align:center;padding:60px 20px">';
    html += '<div style="font-size:48px;margin-bottom:16px;opacity:.3">\uD83D\uDCC4</div>';
    html += '<div style="font-size:18px;font-weight:600;color:var(--tx);margin-bottom:8px">Noch keine PDFs verfügbar</div>';
    html += '<div style="font-size:14px;color:var(--tx3);max-width:400px;margin:0 auto">Die Zusammenfassungen werden laufend ergänzt. Schau bald wieder vorbei!</div>';
    html += '</div>';
  } else {
    html += '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:10px;margin-top:20px">';
    pdfs.forEach(function(pdf) {
      var downloadUrl = 'https://raw.githubusercontent.com/' + GITHUB_USER + '/' + GITHUB_REPO + '/main/' + PDF_FOLDER + '/' + encodeURIComponent(pdf.name);
      html += '<a href="' + downloadUrl + '" download="' + pdf.name + '" target="_blank" style="text-decoration:none;color:inherit">';
      html += '<div class="c ck" style="padding:18px 20px;display:flex;align-items:center;gap:14px">';
      html += '<div style="width:40px;height:40px;border-radius:10px;background:var(--rl);color:var(--r);display:flex;align-items:center;justify-content:center;font-weight:700;font-size:12px;flex-shrink:0">PDF</div>';
      html += '<div style="flex:1;min-width:0">';
      html += '<div class="ct2" style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis">' + prettyName(pdf.name) + '</div>';
      html += '<div class="cd">' + formatSize(pdf.size) + '</div>';
      html += '</div>';
      html += '<div style="font-size:18px;color:var(--ac);flex-shrink:0">\u2193</div>';
      html += '</div></a>';
    });
    html += '</div>';
  }

  html += '<div style="text-align:center;padding:24px 0">';
  html += '<button onclick="go(\'kurse\')" style="font-size:13px;padding:10px 24px">\u2190 Zurück zu den Kursen</button>';
  html += '</div>';
  html += '</div>';

  return html;
}

// PDFs laden via GitHub API (öffentliches Repo = kein Token nötig)
function loadPDFs() {
  var target = document.getElementById('pagesContent');
  if (!target) return;

  // Erst Platzhalter zeigen (Laden...)
  var placeholder = '<div class="sec" id="downloads"><h1>Zusammenfassungen</h1><p class="sub">PDF-Zusammenfassungen zum Download</p>';
  placeholder += '<div style="text-align:center;padding:40px;color:var(--tx3)">Laden...</div></div>';
  target.insertAdjacentHTML('beforeend', placeholder);

  var apiUrl = 'https://api.github.com/repos/' + GITHUB_USER + '/' + GITHUB_REPO + '/contents/' + PDF_FOLDER;

  fetch(apiUrl)
    .then(function(res) {
      if (!res.ok) throw new Error('Ordner nicht gefunden');
      return res.json();
    })
    .then(function(files) {
      // Nur PDFs filtern, readme etc. ignorieren
      var pdfs = files.filter(function(f) {
        return f.name.toLowerCase().endsWith('.pdf');
      });
      // Alphabetisch sortieren
      pdfs.sort(function(a, b) { return a.name.localeCompare(b.name); });

      // Platzhalter ersetzen
      var el = document.getElementById('downloads');
      if (el) el.outerHTML = buildPage(pdfs);
    })
    .catch(function() {
      // Fehler oder Ordner existiert noch nicht → leeren Zustand zeigen
      var el = document.getElementById('downloads');
      if (el) el.outerHTML = buildPage([]);
    });
}

loadPDFs();

})();
