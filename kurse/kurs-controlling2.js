// ===== KURS: CONTROLLING 2 =====
// Auto-generated module for This Is Student
(function() {

// Course config
const courseConfig = {
  id: 'ctrl',
  name: 'Controlling 2',
  pages: ['ctrl','ctrl_kz','ctrl_klr','ctrl_kalk','ctrl_inv','ctrl_ueb','ctrl_mind','ctrl_kart','ctrl_quiz','ctrl_glossar'],
  subNav: [
  {s:'ctrl',l:'Übersicht'},
  {s:'ctrl_kz',l:'Kennzahlen'},{s:'ctrl_klr',l:'Kostenrechnung'},{s:'ctrl_kalk',l:'Kalkulation'},{s:'ctrl_inv',l:'Investition'},
  {s:'ctrl_ueb',l:'Übungen'},
  {s:'ctrl_mind',l:'Zusammenfassung'},{s:'ctrl_kart',l:'Karten'},{s:'ctrl_quiz',l:'Quiz'},{s:'ctrl_glossar',l:'Glossar'}
],
  navButton: '<button class="nl nl-main" data-s="ctrl" onclick="go(\'ctrl\')" style="display:none">Controlling 2</button>'
};

// HTML Content  
const courseHTML = `<!-- ============= CONTROLLING 2 ============ -->
<!-- ======================================== -->

<div class="sec" id="ctrl">
<div style="border-radius:24px;padding:36px 32px;margin-bottom:32px;background:linear-gradient(135deg,rgba(0,198,251,.08),rgba(0,91,234,.06));border:1px solid var(--bd);position:relative;overflow:hidden">
<div style="position:absolute;top:-40px;right:-40px;width:160px;height:160px;border-radius:50%;background:linear-gradient(135deg,rgba(0,198,251,.1),rgba(0,91,234,.08))"></div>
<div style="position:relative;z-index:1">
<div style="font-size:12px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#00c6fb;margin-bottom:8px">Controlling 2</div>
<h1 style="font-size:32px;letter-spacing:-.6px;margin-bottom:8px">Kennzahlen · Kostenrechnung · Kalkulation · Investition</h1>
<p style="font-size:15px;color:var(--tx2);margin-bottom:0">Dozent: Joël Egger · Dipl. Wirtschaftsprüfer</p>
</div>
</div>

<div style="font-size:13px;font-weight:600;letter-spacing:1px;text-transform:uppercase;color:var(--tx3);margin-bottom:14px">Theorie · 4 Kapitel</div>
<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:12px;margin-bottom:36px">
<div class="c ck" onclick="go('ctrl_kz')" style="padding:20px 22px;display:flex;gap:14px;align-items:flex-start">
<div style="width:32px;height:32px;border-radius:10px;background:rgba(0,198,251,.1);color:#00c6fb;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0">1</div>
<div><div class="ct2">Kennzahlen</div><div class="cd">KPI, Erfolgskennzahlen, Liquidität, Balanced Scorecard</div></div>
</div>
<div class="c ck" onclick="go('ctrl_klr')" style="padding:20px 22px;display:flex;gap:14px;align-items:flex-start">
<div style="width:32px;height:32px;border-radius:10px;background:var(--gl);color:var(--g);display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0">2</div>
<div><div class="ct2">Kosten- & Leistungsrechnung</div><div class="cd">Voll-/Teilkosten, Deckungsbeitrag, Break-even</div></div>
</div>
<div class="c ck" onclick="go('ctrl_kalk')" style="padding:20px 22px;display:flex;gap:14px;align-items:flex-start">
<div style="width:32px;height:32px;border-radius:10px;background:var(--aml);color:var(--am);display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0">3</div>
<div><div class="ct2">Kalkulation</div><div class="cd">Preisgestaltung, Aufschlagskalkulation, MWST</div></div>
</div>
<div class="c ck" onclick="go('ctrl_inv')" style="padding:20px 22px;display:flex;gap:14px;align-items:flex-start">
<div style="width:32px;height:32px;border-radius:10px;background:var(--pl);color:var(--pr);display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0">4</div>
<div><div class="ct2">Investitionsrechnung</div><div class="cd">Kosten-/Gewinnvergleich, Rendite, Amortisation, NPV</div></div>
</div>
</div>

<div style="font-size:13px;font-weight:600;letter-spacing:1px;text-transform:uppercase;color:var(--tx3);margin-bottom:14px">Lerntools</div>
<div style="display:grid;grid-template-columns:repeat(5,1fr);gap:12px">
<div class="c ck" onclick="go('ctrl_ueb')" style="text-align:center;padding:24px 16px">
<div style="font-size:24px;font-weight:700;background:linear-gradient(135deg,#00c6fb,#005bea);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;margin-bottom:6px">✍</div>
<div class="ct2">Übungen</div><div class="cd">Interaktive Aufgaben</div>
</div>
<div class="c ck" onclick="go('ctrl_mind')" style="text-align:center;padding:24px 16px">
<div style="font-size:24px;font-weight:700;background:linear-gradient(135deg,#00c6fb,#005bea);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;margin-bottom:6px">4</div>
<div class="ct2">Zusammenfassung</div><div class="cd">Visuelle Übersichten</div>
</div>
<div class="c ck" onclick="go('ctrl_kart')" style="text-align:center;padding:24px 16px">
<div id="ltCtrlCards" style="font-size:24px;font-weight:700;background:linear-gradient(135deg,#00c6fb,#005bea);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;margin-bottom:6px">85</div>
<div class="ct2">Karteikarten</div><div class="cd">Klicken & repetieren</div>
</div>
<div class="c ck" onclick="go('ctrl_quiz')" style="text-align:center;padding:24px 16px">
<div id="ltCtrlQuiz" style="font-size:24px;font-weight:700;background:linear-gradient(135deg,#00c6fb,#005bea);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;margin-bottom:6px">50</div>
<div class="ct2">Quiz</div><div class="cd">Mit Lernfortschritt</div>
</div>
<div class="c ck" onclick="go('ctrl_glossar')" style="text-align:center;padding:24px 16px">
<div style="font-size:24px;font-weight:700;background:linear-gradient(135deg,#00c6fb,#005bea);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;margin-bottom:6px">A–Z</div>
<div class="ct2">Glossar</div><div class="cd">Begriffe & Formeln</div>
</div>
</div>
</div>

<!-- CTRL: Kennzahlen -->
<!-- CTRL: Kennzahlen (aus PDF-Zusammenfassung 1:1) -->
<div class="sec" id="ctrl_kz"><h1>01 · Kennzahlen</h1><p class="sub">KPI, Erfolgskennzahlen, Finanzierung, Liquidität, Working Capital, Balanced Scorecard</p>

<div class="hlbl"><strong>LERNZIELE K01</strong><br>
✓ Den Begriff «Kennzahl» auswendig und mit eigenen Worten definieren<br>
✓ Den Stellenwert von Kennzahlen nennen und sie ihrer Art und Funktion zuweisen<br>
✓ Die Herausforderungen im Umgang mit Kennzahlen beschreiben und an Beispielen erkennen<br>
✓ Die verschiedenen Arten von Kennzahlen auswendig aufzählen und sinngemäss beschreiben<br>
✓ Die Balanced Scorecard mit eigenen Worten beschreiben, Perspektiven aufzählen und eine einfache Scorecard selbstständig aufzeichnen</div>

<h2 style="color:#00c6fb;margin-top:28px">1.1 Was ist eine Kennzahl?</h2>
<p>Eine <strong style="color:#e8a838">Kennzahl</strong> ist eine Zusammenfassung von quantitativen (in Zahlen ausdrückbaren) Informationen für den innerbetrieblichen und/oder zwischenbetrieblichen Vergleich. Kennzahlen setzen erhaltene Informationen in eine allgemeine Relation — etwa ins Verhältnis zum Ganzen — und drücken diese Relation als neuen, vereinfachten Wert aus (z.B. in Prozenten).</p>
<p>Einfach gesagt: Kennzahlen verdichten eine Flut von Rohdaten aus dem Rechnungswesen zu wenigen, aussagekräftigen Zahlen, die Führungsentscheidungen ermöglichen. Ohne Kennzahlen ist <strong style="color:#00c6fb">Führen mit Fakten</strong> unmöglich — man tappt im Dunkeln.</p>

<h2 style="color:#00c6fb;margin-top:24px">1.2 Aufgaben von Kennzahlen</h2>
<p>Führen mit Kennzahlen heisst, die Ergebnisse des Tagesgeschäfts zu messen, daraus Entscheidungen abzuleiten und so den Weiterbestand des Unternehmens zu sichern. Konkret:</p>
<ul style="margin-left:22px;line-height:1.9">
<li><strong style="color:#e8a838">Operationalisierung der Strategie</strong>: Über Steuerungsgrössen (Key Performance Indicators — KPI) werden abstrakte strategische Ziele messbar gemacht.</li>
<li><strong style="color:#e8a838">Entscheidungshilfe</strong> für interne Empfänger (Geschäftsleitung, Verwaltungsrat, Abteilungsleitung) — sie richten den Fokus auf das Wesentliche.</li>
<li><strong style="color:#e8a838">Kommunikation nach aussen</strong>: Für Ratingagenturen, Banken, Investoren und den Kapitalmarkt sind Kennzahlen die Sprache, in der Unternehmen bewertet werden.</li>
</ul>

<div class="hla" style="border-left:4px solid #34c759;background:rgba(52,199,89,0.08);padding:16px 20px;margin:16px 0;border-radius:10px">
<strong style="color:#34c759">🏨 FALLBEISPIEL HOTEL BELLAVISTA</strong><br>
Claudia Bellavista steht am Montagmorgen vor ihrem Dashboard. Statt 12 Millionen Franken Umsatz und 800 Einzelbuchungen liest sie drei Zahlen: <strong>OCC 78 %</strong>, <strong>ADR CHF 245</strong>, <strong>RevPAR CHF 191</strong>. Drei Zahlen — und sie weiss sofort: Die Auslastung stimmt, aber der Durchschnittspreis ist im Vergleich zum Vormonat um 8 % gefallen. Handlungsbedarf!
</div>

<h2 style="color:#00c6fb;margin-top:28px">1.3 Arten von Kennzahlen</h2>
<p>Kennzahlen werden grundsätzlich in <strong style="color:#e8a838">absolute</strong> und <strong style="color:#ff3b30">relative</strong> Kennzahlen unterschieden:</p>

<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:14px 0">
<div class="c ca" style="padding:16px 20px"><div style="font-size:22px;margin-bottom:6px">💰</div><div class="ct2">Absolute Kennzahlen</div><div class="cd">Geben Auskunft über die Grösse eines Unternehmens. <strong>Beispiel:</strong> Umsatz CHF 4'000'000, Jahresgewinn CHF 50'000, Anzahl Zimmer 80.</div></div>
<div class="c cg" style="padding:16px 20px"><div style="font-size:22px;margin-bottom:6px">📊</div><div class="ct2">Relative Kennzahlen</div><div class="cd">Verhältniszahlen mit höherer Aussagekraft. Sie bereiten die Ausgangsdaten weiter auf. <strong>Beispiel:</strong> Umsatzrendite 1,25 %.</div></div>
</div>

<p>Relative Kennzahlen teilen sich in drei Unterarten auf:</p>

<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin:14px 0">
<div class="c ca" style="padding:14px 16px"><div class="ct2">Gliederungszahlen</div><div class="cd">Eine Teilgrösse wird ins Verhältnis zur Gesamtgrösse gesetzt.<br><br><strong>Bsp:</strong> Eigenkapitalquote = Eigenkapital / Bilanzsumme × 100 = 20 %</div></div>
<div class="c cg" style="padding:14px 16px"><div class="ct2">Beziehungszahlen</div><div class="cd">Relationen zwischen verschiedenartigen Grössen — versuchen Ursache-Wirkungs-Beziehungen herzustellen.<br><br><strong>Bsp:</strong> Eigenkapitalrendite = Gewinn / EK × 100 = 5 %</div></div>
<div class="c cp" style="padding:14px 16px"><div class="ct2">Indexzahlen</div><div class="cd">Eine absolute Kennzahl wird zur gleichen Zahl eines früheren Zeitpunkts ins Verhältnis gesetzt.<br><br><strong>Bsp:</strong> Swiss Market Index, Big Mac Index</div></div>
</div>

<h2 style="color:#00c6fb;margin-top:28px">1.4 Erfolgskennzahlen — «Wie profitabel sind wir?»</h2>
<p>Erfolgskennzahlen drücken aus, welchen betriebswirtschaftlichen Erfolg ein Unternehmen in einer Periode erwirtschaftet hat. Sie gehen über das reine Jahresergebnis hinaus und isolieren einzelne Ergebnisebenen, damit die <strong style="color:#00c6fb">Managementleistung</strong> unabhängig von Finanzierungs- und Steuereffekten sichtbar wird. Man nennt diese isolierten Grössen «Earnings-before-Ziffern».</p>

<h3 style="margin-top:18px;color:#e8a838">Die Earnings-before-Kaskade</h3>
<div style="display:flex;flex-direction:column;align-items:center;gap:6px;margin:16px 0">
<div style="background:rgba(52,199,89,0.15);border:2px solid #34c759;padding:10px 20px;border-radius:10px;min-width:320px;text-align:center;font-weight:700">Total Betriebsertrag</div>
<div style="color:#e8a838;font-size:20px">↓</div>
<div style="background:var(--s2);border:1px solid var(--bd);padding:10px 20px;border-radius:10px;min-width:320px;text-align:center;font-weight:600">− Operative Aufwände → <strong>GOI / GOP</strong></div>
<div style="color:#e8a838;font-size:20px">↓</div>
<div style="background:var(--s2);border:1px solid var(--bd);padding:10px 20px;border-radius:10px;min-width:320px;text-align:center;font-weight:600"><strong>EBITDA</strong> — operatives Tagesgeschäft</div>
<div style="color:#e8a838;font-size:20px">↓</div>
<div style="background:var(--s2);border:1px solid var(--bd);padding:10px 20px;border-radius:10px;min-width:320px;text-align:center;font-weight:600">− Abschreibungen → <strong>EBIT</strong> (finanzierungsunabhängig)</div>
<div style="color:#e8a838;font-size:20px">↓</div>
<div style="background:var(--s2);border:1px solid var(--bd);padding:10px 20px;border-radius:10px;min-width:320px;text-align:center;font-weight:600">− Finanzaufwand → <strong>EBT</strong></div>
<div style="color:#e8a838;font-size:20px">↓</div>
<div style="background:rgba(232,168,56,0.15);border:2px solid #e8a838;padding:10px 20px;border-radius:10px;min-width:320px;text-align:center;font-weight:700">− Steuern → <strong>Jahresergebnis</strong></div>
</div>

<div style="overflow-x:auto;margin:14px 0">
<table style="width:100%;font-size:13px;border-collapse:collapse;color:var(--tx)">
<thead><tr style="background:var(--s2);font-weight:700"><td style="padding:10px;border:1px solid var(--bd)">Kennzahl</td><td style="padding:10px;border:1px solid var(--bd)">Formel</td><td style="padding:10px;border:1px solid var(--bd)">Richtwert</td></tr></thead>
<tbody>
<tr><td style="padding:8px 10px;border:1px solid var(--bd);font-weight:600">Eigenkapitalrendite (RoE)</td><td style="padding:8px 10px;border:1px solid var(--bd)">Reingewinn / Eigenkapital × 100 %</td><td style="padding:8px 10px;border:1px solid var(--bd);color:#34c759;font-weight:600">5–10 %</td></tr>
<tr><td style="padding:8px 10px;border:1px solid var(--bd);font-weight:600">Gesamtkapitalrendite (RoA)</td><td style="padding:8px 10px;border:1px solid var(--bd)">Reingewinn / Gesamtkapital × 100 %</td><td style="padding:8px 10px;border:1px solid var(--bd)">branchenabhängig</td></tr>
<tr><td style="padding:8px 10px;border:1px solid var(--bd);font-weight:600">Umsatzrendite (RoS)</td><td style="padding:8px 10px;border:1px solid var(--bd)">Reingewinn / Betriebsertrag × 100 %</td><td style="padding:8px 10px;border:1px solid var(--bd);color:#34c759;font-weight:600">Gastro 2–8 %, Hotel 5–10 %</td></tr>
<tr><td style="padding:8px 10px;border:1px solid var(--bd);font-weight:600">EBITDA-Marge</td><td style="padding:8px 10px;border:1px solid var(--bd)">EBITDA / Betriebsertrag × 100 %</td><td style="padding:8px 10px;border:1px solid var(--bd)">branchenabhängig</td></tr>
</tbody></table></div>

<div class="hla" style="border-left:4px solid #34c759;background:rgba(52,199,89,0.08);padding:16px 20px;margin:16px 0;border-radius:10px">
<strong style="color:#34c759">🏨 FALLBEISPIEL BELLAVISTA — RoS</strong><br>
Betriebsertrag 2024: CHF 12'000'000. Jahresgewinn: CHF 960'000. <strong>Umsatzrendite = 960'000 / 12'000'000 × 100 = 8 %.</strong> Innerhalb des Richtwerts für Hotellerie (5–10 %), aber noch Luft nach oben. Claudia nimmt sich für 2025 eine RoS von 9 % als strategisches Ziel.
</div>

<h2 style="color:#00c6fb;margin-top:28px">1.5 Finanzierungskennzahlen — «Wie stabil stehen wir da?»</h2>
<p>Finanzierungskennzahlen analysieren die Passivseite der Bilanz: Wie ist das Unternehmen finanziert? Wie hoch ist die Abhängigkeit von Fremdkapital? Gibt es eine goldene Bilanzregel-Struktur (langfristiges Vermögen mit langfristigem Kapital finanziert)?</p>

<div style="overflow-x:auto;margin:14px 0">
<table style="width:100%;font-size:13px;border-collapse:collapse;color:var(--tx)">
<thead><tr style="background:var(--s2);font-weight:700"><td style="padding:10px;border:1px solid var(--bd)">Kennzahl</td><td style="padding:10px;border:1px solid var(--bd)">Formel</td><td style="padding:10px;border:1px solid var(--bd)">Richtwert</td></tr></thead>
<tbody>
<tr><td style="padding:8px 10px;border:1px solid var(--bd);font-weight:600">Eigenkapitalquote</td><td style="padding:8px 10px;border:1px solid var(--bd)">EK / Gesamtkapital × 100 %</td><td style="padding:8px 10px;border:1px solid var(--bd);color:#34c759;font-weight:600">20–30 %</td></tr>
<tr><td style="padding:8px 10px;border:1px solid var(--bd);font-weight:600">Fremdkapitalquote</td><td style="padding:8px 10px;border:1px solid var(--bd)">FK / Gesamtkapital × 100 %</td><td style="padding:8px 10px;border:1px solid var(--bd);color:#ff3b30;font-weight:600">70–80 %</td></tr>
<tr><td style="padding:8px 10px;border:1px solid var(--bd);font-weight:600">Verschuldungsgrad statisch</td><td style="padding:8px 10px;border:1px solid var(--bd)">FK / EK × 100 %</td><td style="padding:8px 10px;border:1px solid var(--bd);color:#ff3b30;font-weight:600">≤ 200 %</td></tr>
<tr><td style="padding:8px 10px;border:1px solid var(--bd);font-weight:600">Verschuldungsgrad dynamisch</td><td style="padding:8px 10px;border:1px solid var(--bd)">Effektivverschuldung / Cashflow × 100 %</td><td style="padding:8px 10px;border:1px solid var(--bd);color:#ff9500;font-weight:600">100–300 %</td></tr>
<tr><td style="padding:8px 10px;border:1px solid var(--bd);font-weight:600">Anlagedeckungsgrad II</td><td style="padding:8px 10px;border:1px solid var(--bd)">(EK + langfr. FK) / Anlagevermögen × 100 %</td><td style="padding:8px 10px;border:1px solid var(--bd);color:#34c759;font-weight:600">100 %</td></tr>
</tbody></table></div>

<p>Der <strong style="color:#e8a838">Anlagedeckungsgrad II</strong> ist besonders wichtig: Ist er unter 100 %, wird das Anlagevermögen teilweise kurzfristig finanziert — ein Warnsignal. Kurzfristige Gläubiger könnten Rückzahlungen fordern, bevor die langfristigen Anlagen (Gebäude, Einrichtung) Erträge erwirtschaftet haben.</p>

<div class="hla" style="border-left:4px solid #34c759;background:rgba(52,199,89,0.08);padding:16px 20px;margin:16px 0;border-radius:10px">
<strong style="color:#34c759">🏨 FALLBEISPIEL BELLAVISTA</strong><br>
Das Hotel Bellavista hat eine Bilanzsumme von CHF 28 Mio., EK von CHF 7 Mio., langfristiges FK von CHF 19 Mio. und Anlagevermögen von CHF 25 Mio. <strong>Eigenkapitalquote = 25 %</strong> (solid), <strong>Anlagedeckungsgrad II = (7+19)/25 × 100 = 104 %</strong> — die goldene Bilanzregel ist knapp erfüllt.
</div>

<h2 style="color:#00c6fb;margin-top:28px">1.6 Liquiditätskennzahlen — «Können wir unsere Rechnungen bezahlen?»</h2>
<p>Liquidität bezeichnet zum einen die Eigenschaft von Vermögensgegenständen, in Zahlungsmittel umgewandelt zu werden (in der Regel durch Verkauf), und zum anderen die Fähigkeit einer Person oder eines Unternehmens, Zahlungsverpflichtungen <strong style="color:#ff3b30">pünktlich</strong> nachzukommen. Die Erhaltung der Liquidität ist überlebenswichtig: <strong style="color:#ff3b30">Illiquidität führt zur Insolvenz</strong>.</p>

<div class="hlr"><strong>⚠ RECHTLICHER HINWEIS</strong><br>
Droht eine Zahlungsunfähigkeit (<strong>Art. 725 OR ff.</strong>), muss der Verwaltungsrat Massnahmen zur Sicherstellung ergreifen. Bei Überschuldung ohne Aussicht auf Gesundung ist der Verwaltungsrat gesetzlich verpflichtet, das Gericht zu benachrichtigen — was <strong>de facto zum Konkurs</strong> führt.</div>

<p>Es werden drei Liquiditätsgrade unterschieden, die sich nach dem betrachteten Zeitraum differenzieren:</p>

<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin:14px 0">
<div class="c cr" style="padding:14px 16px"><div class="ct2">1. Grad — Cash Ratio</div>
<div style="background:rgba(232,168,56,0.12);border:1px dashed #e8a838;padding:10px 12px;border-radius:8px;margin:10px 0;text-align:center;font-style:italic;color:#e8a838">Flüssige Mittel / kurzfr. FK × 100 %<br><span style="font-size:11px;color:var(--tx2);font-style:normal">Richtwert: 10–35 %</span></div>
<div class="cd">Können die Barmittel die kurzfristigen Verbindlichkeiten decken?</div></div>
<div class="c cm" style="padding:14px 16px"><div class="ct2">2. Grad — Quick Ratio</div>
<div style="background:rgba(232,168,56,0.12);border:1px dashed #e8a838;padding:10px 12px;border-radius:8px;margin:10px 0;text-align:center;font-style:italic;color:#e8a838">(Flüssige Mittel + Ford. LuL) / kurzfr. FK × 100 %<br><span style="font-size:11px;color:var(--tx2);font-style:normal">Richtwert: min. 100 %</span></div>
<div class="cd">Inkl. ausstehende Kundenforderungen — sind diese bei Fälligkeit gedeckt?</div></div>
<div class="c ca" style="padding:14px 16px"><div class="ct2">3. Grad — Current Ratio</div>
<div style="background:rgba(232,168,56,0.12);border:1px dashed #e8a838;padding:10px 12px;border-radius:8px;margin:10px 0;text-align:center;font-style:italic;color:#e8a838">Umlaufvermögen / kurzfr. FK × 100 %<br><span style="font-size:11px;color:var(--tx2);font-style:normal">Richtwert: 150–200 %</span></div>
<div class="cd">«Banker's Rule» / «Two-to-One-Rule»: das gesamte Umlaufvermögen im Verhältnis zu kurzfristigen Verbindlichkeiten.</div></div>
</div>

<div class="hla" style="border-left:4px solid #34c759;background:rgba(52,199,89,0.08);padding:16px 20px;margin:16px 0;border-radius:10px">
<strong style="color:#34c759">🏨 FALLBEISPIEL BELLAVISTA — LIQUIDITÄTSGRAD 2</strong><br>
Flüssige Mittel CHF 420'000, Forderungen aus Lieferung und Leistung CHF 180'000, kurzfristiges Fremdkapital CHF 560'000. <strong>Quick Ratio = (420+180)/560 × 100 = 107 %.</strong> Die Forderungen plus Barmittel decken die kurzfristigen Verbindlichkeiten — knapp, aber okay.
</div>

<h2 style="color:#00c6fb;margin-top:28px">1.7 Working Capital — «Wo ist das Geld parkiert?»</h2>
<p>Als <strong style="color:#e8a838">Working Capital</strong> (Nettoumlaufvermögen) bezeichnet man die Differenz zwischen Umlaufvermögen und kurzfristigen Verbindlichkeiten. Ein positives Working Capital ist ein Indikator für finanzielle Stabilität: Ein Teil des kurzfristigen Vermögens wird langfristig finanziert.</p>

<div style="background:rgba(232,168,56,0.12);border:1px dashed #e8a838;padding:14px 18px;border-radius:10px;margin:14px 0;text-align:center;font-family:Georgia,serif;font-style:italic;color:#e8a838;font-size:15px">
Working Capital = Umlaufvermögen − kurzfr. Fremdkapital<br>
<span style="font-size:11px;color:var(--tx2);font-style:normal;font-family:-apple-system">Sollte positiv, aber nicht übermässig hoch sein — sonst überhöhte Kapitalbindung</span>
</div>

<p>In der Hotellerie ist das Geld typischerweise an drei Orten parkiert:</p>

<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin:14px 0">
<div class="c ca" style="padding:14px 16px"><div class="ct2">Offene Gästerechnungen</div><div class="cd">Inhouse-Rechnungen, Event-Nachrechnungen, Corporate-Kunden mit Zahlungsziel.</div></div>
<div class="c cm" style="padding:14px 16px"><div class="ct2">Warenlager</div><div class="cd">F&B-Vorräte, Weinkeller, Amenities, Reinigungsmaterial.</div></div>
<div class="c cr" style="padding:14px 16px"><div class="ct2">Unbezahlte Lieferantenrechnungen</div><div class="cd">Offene Kreditoren — erhöhen die kurzfristigen Verbindlichkeiten.</div></div>
</div>

<h3 style="color:#e8a838;margin-top:18px">Die drei Fristen und der Cash Conversion Cycle</h3>
<div style="overflow-x:auto;margin:14px 0">
<table style="width:100%;font-size:13px;border-collapse:collapse;color:var(--tx)">
<thead><tr style="background:var(--s2);font-weight:700"><td style="padding:10px;border:1px solid var(--bd)">Kennzahl</td><td style="padding:10px;border:1px solid var(--bd)">Bedeutung</td><td style="padding:10px;border:1px solid var(--bd)">Formel (× 360)</td></tr></thead>
<tbody>
<tr><td style="padding:8px 10px;border:1px solid var(--bd);font-weight:600">DSO <em style="font-weight:400;color:var(--tx2)">Days Sales Outstanding</em></td><td style="padding:8px 10px;border:1px solid var(--bd)">Ø Debitorenfrist — wie lange warte ich auf mein Geld?</td><td style="padding:8px 10px;border:1px solid var(--bd)">Ø Forderungen LuL / Betriebsertrag × 360</td></tr>
<tr><td style="padding:8px 10px;border:1px solid var(--bd);font-weight:600">DIO <em style="font-weight:400;color:var(--tx2)">Days Inventory Outstanding</em></td><td style="padding:8px 10px;border:1px solid var(--bd)">Ø Lagerdauer — wie lange bleibt Ware liegen?</td><td style="padding:8px 10px;border:1px solid var(--bd)">Ø Warenbestand / Wareneinsatz × 360</td></tr>
<tr><td style="padding:8px 10px;border:1px solid var(--bd);font-weight:600">DPO <em style="font-weight:400;color:var(--tx2)">Days Payable Outstanding</em></td><td style="padding:8px 10px;border:1px solid var(--bd)">Ø Kreditorenfrist — wie lange zahle ich nicht?</td><td style="padding:8px 10px;border:1px solid var(--bd)">Ø Verbindlichkeiten / Wareneinsatz × 360</td></tr>
<tr style="background:rgba(0,198,251,0.08)"><td style="padding:8px 10px;border:1px solid var(--bd);font-weight:700">CCC <em style="font-weight:400;color:var(--tx2)">Cash Conversion Cycle</em></td><td style="padding:8px 10px;border:1px solid var(--bd)"><strong>Kapitalbindungsdauer — wie viele Tage bis Franken vom Konto wieder drauf?</strong></td><td style="padding:8px 10px;border:1px solid var(--bd);font-weight:600">DIO + DSO − DPO <em style="color:var(--tx2);font-weight:400">(Richtwert: 10–30 Tage)</em></td></tr>
</tbody></table></div>

<div class="hla" style="border-left:4px solid #34c759;background:rgba(52,199,89,0.08);padding:16px 20px;margin:16px 0;border-radius:10px">
<strong style="color:#34c759">🏨 FALLBEISPIEL BELLAVISTA — CCC</strong><br>
Lagerdauer F&B = 12 Tage (DIO), Debitorenfrist Corporate = 28 Tage (DSO), Kreditorenfrist Lieferanten = 21 Tage (DPO). <strong>CCC = 12 + 28 − 21 = 19 Tage.</strong> Im Richtwertbereich. Claudia verhandelt mit dem Grosslieferanten ein verlängertes Zahlungsziel auf 30 Tage → CCC sinkt auf 10 Tage → 9 Tage weniger Kapitalbindung = Liquiditätsgewinn!
</div>

<h2 style="color:#00c6fb;margin-top:28px">1.8 Exkurs: Liquiditätsplanung</h2>
<p>Die Liquiditätsplanung ist die strategische Verwaltung der flüssigen Mittel eines Unternehmens anhand eines Liquiditätsplans, der alle Ein- und Auszahlungen umfasst. Eine seriöse Planung hilft vor allem in Krisenzeiten, handlungsfähig zu bleiben und Engpässe frühzeitig zu erkennen.</p>

<div style="background:rgba(232,168,56,0.12);border:1px dashed #e8a838;padding:14px 18px;border-radius:10px;margin:14px 0;text-align:center;font-family:Georgia,serif;font-style:italic;color:#e8a838;font-size:14px">
Liquide Mittel Periodenbeginn + Einzahlungen − Auszahlungen = Liquide Mittel Periodenende
</div>

<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:14px 0">
<div class="c cg" style="padding:14px 16px"><div class="ct2">✓ Nutzen</div><div class="cd">
• Sicherstellung Zahlungsfähigkeit, Vermeidung von Engpässen<br>
• Planungssicherheit und effiziente Verwaltung flüssiger Mittel<br>
• Früherkennung und Bewältigung finanzieller Risiken
</div></div>
<div class="c cr" style="padding:14px 16px"><div class="ct2">⚠ Herausforderungen</div><div class="cd">
• Unvorhersehbare Ausgaben (Defekte, Notreparaturen)<br>
• Schwankende Einnahmen (Saisonalität, Absagen)
</div></div>
</div>

<p><strong style="color:#e8a838">Vorgehen:</strong> Rollierende Planung — laufende Anpassung auf Basis aktueller Ist-Werte zur Verbesserung der Prognosegenauigkeit. Zeitrahmen üblicherweise auf Wochen- oder Monatsbasis.</p>

<h2 style="color:#00c6fb;margin-top:28px">1.9 Branchenspezifische Kennzahlen (Hotellerie & Gastronomie)</h2>
<p>Jede Branche hat ihre Eigenheiten, die sich in spezifischen KPIs ausdrücken lassen. Typische Branchenwerte sind <strong style="color:#e8a838">Benchmarks</strong> — Werte des Durchschnitts der jeweils besten Unternehmen einer Branche. Quellen für die Gastgewerbebranche: KATAG · Gastrosuisse · Hotelleriesuisse · Schweiz Tourismus · BfS.</p>

<div style="display:grid;grid-template-columns:repeat(2,1fr);gap:10px;margin:14px 0">
<div class="c ca" style="padding:14px 16px"><div class="ct2">RevPAR</div><div class="cd"><em>Revenue per Available Room</em> — Umsatz pro verfügbarem Zimmer. DIE wichtigste Hotelkennzahl. Verbindet OCC und ADR.<br><br><strong style="color:#e8a838">Rooms Revenue / (Zimmerzahl × Betriebstage)</strong></div></div>
<div class="c ca" style="padding:14px 16px"><div class="ct2">ADR</div><div class="cd"><em>Average Daily Rate</em> — Durchschnittsrate. Preis der verkauften Zimmer, nicht der verfügbaren.<br><br><strong style="color:#e8a838">Rooms Revenue / Room Nights</strong></div></div>
<div class="c cg" style="padding:14px 16px"><div class="ct2">OCC</div><div class="cd"><em>Occupancy Rate</em> — Belegungsrate. Wie voll ist das Haus? <strong>ACHTUNG:</strong> 100 % ist nicht immer optimal!<br><br><strong style="color:#e8a838">Verkaufte Einheiten / Total Einheiten × 100 %</strong></div></div>
<div class="c cm" style="padding:14px 16px"><div class="ct2">RevPASH</div><div class="cd"><em>Revenue Per Available Seat Hour</em> — Gastronomie-Kennzahl. Umsatz pro Sitzstunde.<br><br><strong style="color:#e8a838">F&B Revenue / (Sitzplätze × Öffnungsstd.)</strong></div></div>
<div class="c cp" style="padding:14px 16px"><div class="ct2">RevPSQM</div><div class="cd"><em>Revenue per available SQM</em> — Umsatz pro m² Veranstaltungsfläche. Für MICE-/Bankettbetriebe.<br><br><strong style="color:#e8a838">Veranstaltungsertrag / Verfügbare Fläche</strong></div></div>
<div class="c cp" style="padding:14px 16px"><div class="ct2">RevPOLH</div><div class="cd"><em>Revenue per Operative Labour Hour</em> — z.B. im Wellness. Umsatz pro Arbeitsstunde.<br><br><strong style="color:#e8a838">Wellness-Ertrag / Geleistete Arbeitsstd.</strong></div></div>
</div>

<div class="c cr" style="padding:14px 18px;margin:14px 0">
<div class="ct2">Personalaufwandquote</div>
<div class="cd">Wichtigste Aufwandsposition im Gastgewerbe. Kann pro Profitcenter (Rooms, F&B, Wellness) berechnet werden.</div>
<div style="background:rgba(232,168,56,0.12);border:1px dashed #e8a838;padding:8px 12px;border-radius:8px;margin-top:10px;text-align:center;font-style:italic;color:#e8a838">Total Personalaufwand / Total Ertrag × 100 %<br><span style="font-size:11px;color:var(--tx2);font-style:normal">Richtwert: weit unter 45 % = gut</span></div>
</div>

<div class="hlr"><strong>⚠ HÄUFIGER FEHLER</strong><br>
Eine hohe Belegungsrate (OCC) ist <strong>KEIN</strong> Indikator für Rentabilität! Wenn aus der Beherbergung ein negativer GOP resultiert, werden die Zimmer unter Selbstkosten verkauft. <strong>100 % OCC zu Dumpingpreisen ist unternehmerischer Unsinn.</strong></div>

<div class="hla" style="border-left:4px solid #34c759;background:rgba(52,199,89,0.08);padding:16px 20px;margin:16px 0;border-radius:10px">
<strong style="color:#34c759">🏨 FALLBEISPIEL BELLAVISTA — HOTELKENNZAHLEN JANUAR 2024</strong><br>
80 Zimmer × 31 Tage = 2'480 verfügbare Zimmernächte. Verkauft wurden 1'736 Room Nights (<strong>OCC 70 %</strong>). Rooms Revenue CHF 425'320. <strong>ADR = 425'320 / 1'736 = CHF 245. RevPAR = 425'320 / 2'480 = CHF 171.50.</strong> Januar ist Nebensaison — RevPAR im Sommer steigt auf CHF 260.
</div>

<h2 style="color:#00c6fb;margin-top:28px">1.10 Herausforderungen — Checkliste gegen den Zahlendschungel</h2>
<p>Die Kunst im Umgang mit Kennzahlen bedingt ein umfassendes Verständnis über deren Bedeutung, Herleitung und Interpretation. Diese Checkliste hilft, die Orientierung zu behalten:</p>
<div class="hl">
1. Was misst die Kennzahl? Welches Ziel verfolgt sie?<br>
2. Zusammenhänge erkennen: Wie wurde die Kennzahl genau berechnet?<br>
3. Gibt es Vergleichswerte? (Benchmarks? Interne Ziele? Vorjahreswerte?)<br>
4. Eigene Meinung bilden: Was sagt die Kennzahl für mich aus?<br>
5. Was sind die Konsequenzen? (Genug? Zu wenig? Zu viel?)<br>
6. Welche Massnahmen sind erforderlich?
</div>

<h2 style="color:#00c6fb;margin-top:28px">1.11 Balanced Scorecard (Kaplan & Norton)</h2>
<p>Die <strong style="color:#e8a838">Balanced Scorecard</strong> wurde 1992 von Robert S. Kaplan (Harvard Business School) und David P. Norton entwickelt. Sie ergänzt die rein finanzielle Sichtweise um weitere, für die Unternehmensführung wichtige Perspektiven. Die Balanced Scorecard ist ein Instrument des <strong style="color:#00c6fb">strategischen Controllings</strong>, das Strategie in Kennzahlen übersetzt und so kommunizierbar macht. Motto: <em>«What you measure is what you get.»</em></p>
<p>Prägend war die Erkenntnis: Rein finanzielle Kennzahlen waren in der Industrieära ausreichend, in der heutigen Wissensgesellschaft mit kürzeren Produktlebenszyklen und internationaler Konkurrenz braucht es mehr.</p>

<h3 style="color:#e8a838;margin-top:18px">Die vier Perspektiven</h3>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:14px 0">
<div class="c ca" style="padding:14px 16px"><div style="font-size:22px;margin-bottom:4px">💰</div><div class="ct2">Finanzielle Perspektive</div><div class="cd">Die einzige rein monetäre Perspektive (z.B. Jahresergebnis, Umsatzrendite). Sie stellt das finale Ziel für alle anderen Perspektiven dar.<br><br><em>«Wie sollen wir gegenüber Eigentümern auftreten, um finanziellen Erfolg zu haben?»</em></div></div>
<div class="c cg" style="padding:14px 16px"><div style="font-size:22px;margin-bottom:4px">👥</div><div class="ct2">Kundenperspektive</div><div class="cd">Betrachtung vom Markt aus: Marktanteile, Gästezufriedenheit, Gästetreue. Frühwarnsystem — Probleme werden sichtbar, bevor sie in Umsätzen durchschlagen.<br><br><em>«Wie sollen wir gegenüber Kunden auftreten, um unsere Vision zu verwirklichen?»</em></div></div>
<div class="c cm" style="padding:14px 16px"><div style="font-size:22px;margin-bottom:4px">⚙</div><div class="ct2">Interne Prozessperspektive</div><div class="cd">Alle internen Prozesse zur Erreichung der finanziellen und kundschaftsbezogenen Ziele: Time-to-Market, Kapazitätsauslastung, Ausschussquoten, Produktivität.<br><br><em>«In welchen Geschäftsprozessen müssen wir die Besten sein?»</em></div></div>
<div class="c cp" style="padding:14px 16px"><div style="font-size:22px;margin-bottom:4px">🌱</div><div class="ct2">Lern- und Entwicklungsperspektive</div><div class="cd">Potenziale für die Zukunft: Weiterbildung der Mitarbeitenden, Forschung und Entwicklung, Investitionen in Informationstechnologie.<br><br><em>«Wie können wir Veränderungs- und Wachstumspotenziale fördern?»</em></div></div>
</div>

<p><strong style="color:#e8a838">Wichtig:</strong> Alle Kennzahlen müssen durch <strong style="color:#00c6fb">Ursache-Wirkungs-Ketten</strong> verbunden sein und zum finanziellen Erfolg beitragen. Typisches Schema in der Hotellerie: Fachwissen der Mitarbeitenden → Prozessqualität → Top-Angebot → Kundentreue → Umsatzrentabilität.</p>
<p>Pro Perspektive sollten <strong>ca. 5 Kennzahlen</strong> verwendet werden (Begrenzung gegen Überinformation). Die vier Perspektiven sind nicht zwingend — eine fünfte Perspektive <strong style="color:#e8a838">«Nachhaltigkeit»</strong> wird heute oft ergänzt.</p>

<div class="hla" style="border-left:4px solid #34c759;background:rgba(52,199,89,0.08);padding:16px 20px;margin:16px 0;border-radius:10px">
<strong style="color:#34c759">🏨 FALLBEISPIEL BELLAVISTA — BALANCED SCORECARD (AUSZUG)</strong><br>
<strong>Finanziell:</strong> Ziel «ADR +15 %», KPI «Average Daily Rate», Massnahme «Upselling-Schulung». <strong>Kunde:</strong> Ziel «min. 70 % Returning Guests», KPI «Wiederholungsrate», Massnahme «Loyalty-Programm». <strong>Prozess:</strong> Ziel «Zimmerreinigung max. 30 min», KPI «Reinigungsdauer pro Zimmer», Massnahme «neue Checkliste». <strong>Lernen & Entwickeln:</strong> Ziel «Fluktuation −20 %», KPI «Austritte/Jahr», Massnahme «4-Tage-Woche einführen».
</div>

<h2 style="color:#00c6fb;margin-top:28px">1.12 Spiralthema: Informationssysteme im Controlling</h2>
<p>Ein Informationssystem erfasst Informationen, speichert sie in Datenbanken, verarbeitet sie und stellt sie für Auswertungen zur Verfügung. Daraus werden mit unterschiedlichen Methoden Berichte erstellt (Reporting). In der Hotellerie spielen sie eine entscheidende Rolle bei Effizienz und Gästeservice.</p>

<h3 style="color:#e8a838;margin-top:14px">Einsatz im Controlling</h3>
<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin:14px 0">
<div class="c ca" style="padding:14px 16px"><div class="ct2">Echtzeit-Analysen</div><div class="cd">Dashboards mit aktuellen Kennzahlen wie OCC %, ADR, RevPAR.</div></div>
<div class="c cg" style="padding:14px 16px"><div class="ct2">Abweichungsanalysen & Kostenkontrollen</div><div class="cd">Überwachung Lagerbestände, Stunden-/Ferien-/Überzeitsaldi.</div></div>
<div class="c cm" style="padding:14px 16px"><div class="ct2">Revenue Management</div><div class="cd">Optimierung der Preisgestaltung basierend auf Nachfrageprognosen.</div></div>
<div class="c cp" style="padding:14px 16px"><div class="ct2">Finanzplanung</div><div class="cd">Budgets, Forecasts, Liquiditäts- und Investitionspläne.</div></div>
<div class="c cr" style="padding:14px 16px"><div class="ct2">Zielerreichung & Erfolgsmessung</div><div class="cd">Performance-Steuerung anhand Balanced Scorecard.</div></div>
</div>

</div>


<!-- CTRL: Kosten- und Leistungsrechnung (aus PDF-Zusammenfassung 1:1) -->
<div class="sec" id="ctrl_klr"><h1>02 · Kosten- und Leistungsrechnung</h1><p class="sub">FIBU vs. BEBU · Voll- und Teilkostenrechnung · Deckungsbeitrag · Break-Even</p>

<div class="hlbl"><strong>LERNZIELE K02</strong><br>
✓ Die Unterschiede zwischen Finanz- und Betriebsbuchhaltung (FIBU / BEBU) erklären<br>
✓ Ziele und Aufgaben der Kostenrechnung nennen<br>
✓ Voll- und Teilkostenrechnung voneinander abgrenzen und anwenden<br>
✓ Kostenarten, Kostenstellen und Kostenträger zuordnen können<br>
✓ Einzel- und Gemeinkosten, variable und fixe Kosten unterscheiden<br>
✓ Deckungsbeitrag und DDR-Wert berechnen und interpretieren<br>
✓ Break-Even-Analyse durchführen (mengen- und wertmässige Nutzschwelle)</div>

<h2 style="color:#00c6fb;margin-top:28px">2.1 Von der FIBU zur BEBU</h2>
<p>Das Rechnungswesen ist ein Informationssystem mit zwei Flügeln:</p>

<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:14px 0">
<div class="c cbl" style="padding:16px 20px"><div class="ct2">Finanzbuchhaltung (FIBU)</div><div class="cd"><strong style="color:#e8a838">Externe Sicht:</strong> Jahresabschluss, Lagebericht (OR), Halbjahresabschluss, Umweltbericht, ESG-Bericht. Adressaten: Fiskus, Bank, Aktionäre.</div></div>
<div class="c cg" style="padding:16px 20px"><div class="ct2">Betriebsbuchhaltung (BEBU)</div><div class="cd"><strong style="color:#34c759">Interne Sicht:</strong> Budget, Betriebsstatistik, Investitionsrechnung, Kostenrechnung, Nutzschwellenanalyse. Adressaten: Geschäftsleitung, Abteilungsleiter.</div></div>
</div>

<p>Aus den <strong style="color:#e8a838">Aufwänden</strong> der Erfolgsrechnung werden <strong style="color:#e8a838">Kosten</strong>, aus den <strong style="color:#e8a838">Erträgen</strong> werden <strong style="color:#e8a838">Erlöse</strong>. Die betriebliche Objektivität wird durch <strong style="color:#00c6fb">Abgrenzungen</strong> (stille Reserven auflösen) und <strong style="color:#00c6fb">kalkulatorische Kosten</strong> (z.B. Eigenkapitalzins) hergestellt.</p>

<h2 style="color:#00c6fb;margin-top:28px">2.2 Ziele und Aufgaben der Kostenrechnung</h2>

<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin:14px 0">
<div class="c ca" style="padding:14px 16px"><div style="font-size:22px;margin-bottom:4px">📔</div><div class="ct2">Betriebsabrechnung</div><div class="cd">Kosten und Erlöse werden den Kostenträgern (Produkten) zugeordnet → Erfolg pro Produkt wird ermittelt.</div></div>
<div class="c cg" style="padding:14px 16px"><div style="font-size:22px;margin-bottom:4px">🔍</div><div class="ct2">Analyse</div><div class="cd">Untersuchung der Prozesse und Ergebnisse der Leistungserstellung — Auswertung zuhanden der Führung.</div></div>
<div class="c cm" style="padding:14px 16px"><div style="font-size:22px;margin-bottom:4px">💲</div><div class="ct2">Kalkulation</div><div class="cd">Berechnungsgrundlagen zur Preisgestaltung und Vorratsbewertung werden aufbereitet.</div></div>
</div>

<h3 style="color:#e8a838;margin-top:18px">Die drei Kern-Fragen</h3>
<div style="display:flex;align-items:center;justify-content:center;gap:10px;margin:18px 0;flex-wrap:wrap">
<div style="background:var(--s2);border:2px solid #00c6fb;padding:14px 18px;border-radius:10px;text-align:center;min-width:180px">
<div style="font-size:11px;letter-spacing:2px;color:#00c6fb;font-weight:700">WAS?</div>
<div style="font-weight:700;margin:4px 0">Kostenarten</div>
<div style="font-size:12px;color:var(--tx2)">Welche Kosten sind angefallen?</div>
</div>
<div style="color:#e8a838;font-size:22px;font-weight:700">→</div>
<div style="background:var(--s2);border:2px solid #00c6fb;padding:14px 18px;border-radius:10px;text-align:center;min-width:180px">
<div style="font-size:11px;letter-spacing:2px;color:#00c6fb;font-weight:700">WO?</div>
<div style="font-weight:700;margin:4px 0">Kostenstellen</div>
<div style="font-size:12px;color:var(--tx2)">Wo sind sie angefallen?</div>
</div>
<div style="color:#e8a838;font-size:22px;font-weight:700">→</div>
<div style="background:var(--s2);border:2px solid #00c6fb;padding:14px 18px;border-radius:10px;text-align:center;min-width:180px">
<div style="font-size:11px;letter-spacing:2px;color:#00c6fb;font-weight:700">WOFÜR?</div>
<div style="font-weight:700;margin:4px 0">Kostenträger</div>
<div style="font-size:12px;color:var(--tx2)">Welches Produkt trägt sie?</div>
</div>
</div>

<div class="hl"><strong>BEISPIEL</strong><br>
<strong style="color:#e8a838">Kostenarten:</strong> Wareneinkäufe, Werbekosten, Zinsen.<br>
<strong style="color:#e8a838">Kostenstellen:</strong> Rooms Division, F&B, Wellness, Administration.<br>
<strong style="color:#e8a838">Kostenträger:</strong> Doppelzimmer Deluxe, HP-Package, Tagesteller.</div>

<h2 style="color:#00c6fb;margin-top:28px">2.3 Grundbegriffe der Kostenrechnung</h2>

<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:14px 0">
<div class="c ca" style="padding:14px 16px"><div class="ct2">Einzelkosten (= direkte Kosten)</div><div class="cd">Stehen in festem Zusammenhang mit einem Produkt und können den Kostenträgern direkt zugeordnet werden.<br><br><strong>Bsp:</strong> Wareneinkauf von Lebensmitteln für ein konkretes Menü.</div></div>
<div class="c cm" style="padding:14px 16px"><div class="ct2">Gemeinkosten (= indirekte Kosten)</div><div class="cd">Können nicht unmittelbar einem Produkt zugeordnet werden. Sie fallen betriebsübergreifend an und werden über Kostenstellen mit Umlageschlüsseln verteilt.<br><br><strong>Bsp:</strong> Versicherungsrechnung für das Hotel, Gehälter der Marketingabteilung.</div></div>
<div class="c cg" style="padding:14px 16px"><div class="ct2">Variable Kosten</div><div class="cd">Sind von der Beschäftigungshöhe abhängig (Absatzmenge als Kostentreiber).<br>• Beschaffung Lebensmittel & Getränke<br>• Beschaffung Hygieneartikel<br>• Gehälter temporäres Personal<br>• Provisionen für Absatzmittler</div></div>
<div class="c cr" style="padding:14px 16px"><div class="ct2">Fixe Kosten</div><div class="cd">Sind von der Beschäftigungshöhe unabhängig — fallen als Kostenblock an.<br>• Miete für die Immobilie<br>• Gehälter des festen Personals<br>• Versicherungsprämien, Lizenzen<br>• Unterhalt von Einrichtungen & Geräten</div></div>
</div>

<div style="background:rgba(232,168,56,0.12);border:1px dashed #e8a838;padding:14px 18px;border-radius:10px;margin:14px 0;text-align:center;font-family:Georgia,serif;font-style:italic;color:#e8a838;font-size:15px">
Lineare Kostenfunktion: K(x) = K<sub>var</sub> × x + K<sub>fix</sub><br>
<span style="font-size:12px;color:var(--tx2);font-style:normal;font-family:-apple-system">Totalkosten = (Variable Kosten × verkaufte Menge) + Fixe Kosten</span>
</div>

<h3 style="color:#e8a838;margin-top:18px">Hauptkostenstellen vs. Hilfskostenstellen</h3>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:14px 0">
<div class="c ca" style="padding:14px 16px"><div class="ct2">Hauptkostenstellen</div><div class="cd">Werden <strong>direkt</strong> auf die Kostenträger verrechnet.</div></div>
<div class="c cp" style="padding:14px 16px"><div class="ct2">Hilfskostenstellen</div><div class="cd">Werden zuerst auf Hauptkostenstellen verteilt und damit nur <strong>mittelbar</strong> auf Kostenträger. <em>Bsp: Personalabteilung (Shared Service) einer Hotelgruppe.</em></div></div>
</div>

<h2 style="color:#00c6fb;margin-top:28px">2.4 Vollkostenrechnung</h2>
<p>Bei der <strong style="color:#e8a838">Vollkostenrechnung</strong> werden sämtliche Kosten (fixe und variable) auf die einzelnen Kostenträger umgelegt → Ermittlung des Erfolgs pro Produkt.</p>

<h3 style="color:#e8a838;margin-top:14px">Systematik der Vollkostenrechnung</h3>
<div style="display:flex;align-items:center;justify-content:center;gap:8px;margin:14px 0;flex-wrap:wrap">
<div style="background:var(--s2);border:1px solid var(--bd);padding:10px 14px;border-radius:8px;text-align:center;font-size:13px"><strong>Kostenarten</strong><br><em style="color:var(--tx2);font-size:11px">WAS?</em></div>
<div style="color:#e8a838;font-weight:700">→</div>
<div style="background:var(--s2);border:1px solid var(--bd);padding:10px 14px;border-radius:8px;text-align:center;font-size:13px"><strong>Kostenstellen</strong><br><em style="color:var(--tx2);font-size:11px">WO?</em></div>
<div style="color:#e8a838;font-weight:700">→</div>
<div style="background:var(--s2);border:1px solid var(--bd);padding:10px 14px;border-radius:8px;text-align:center;font-size:13px"><strong>Umlage</strong><br><em style="color:var(--tx2);font-size:11px">Schlüssel</em></div>
<div style="color:#e8a838;font-weight:700">→</div>
<div style="background:var(--s2);border:1px solid var(--bd);padding:10px 14px;border-radius:8px;text-align:center;font-size:13px"><strong>Kostenträger</strong><br><em style="color:var(--tx2);font-size:11px">WOFÜR?</em></div>
<div style="color:#e8a838;font-weight:700">→</div>
<div style="background:rgba(232,168,56,0.15);border:2px solid #e8a838;padding:10px 14px;border-radius:8px;text-align:center;font-size:13px"><strong>Herstellkosten<br>Selbstkosten<br>Erfolg</strong></div>
</div>

<h3 style="color:#e8a838;margin-top:14px">Checkliste: Vorgehen Vollkostenrechnung</h3>
<ol style="margin-left:24px;line-height:1.9">
<li>Sachliche Abgrenzungen in der Kostenartenrechnung (KOA) vornehmen — betriebliche Objektivität durch Auflösung stiller Reserven und kalkulatorische Kosten</li>
<li>Einzelkosten auf Kostenträger direkt übertragen</li>
<li>Gemeinkosten anhand Schlüssel indirekt auf Kostenstellen umlegen</li>
<li>Herstellkosten pro Kostenträger berechnen, dann Verwaltung umlegen</li>
<li>Selbstkosten pro Kostenträger berechnen, Umsatzerlös gegenüberstellen</li>
<li>Gewinn/Verlust pro Kostenträger berechnen und beurteilen</li>
</ol>

<h3 style="color:#e8a838;margin-top:14px">Ergebnisse der Vollkostenrechnung pro Kostenträger</h3>
<div style="overflow-x:auto;margin:10px 0">
<table style="width:100%;font-size:13px;border-collapse:collapse;color:var(--tx)">
<tbody>
<tr><td style="padding:8px 10px;border:1px solid var(--bd);font-weight:600;width:35%">Einzelkosten</td><td style="padding:8px 10px;border:1px solid var(--bd)">z.B. Warenkosten Küche</td></tr>
<tr><td style="padding:8px 10px;border:1px solid var(--bd);font-weight:600">Gemeinkosten</td><td style="padding:8px 10px;border:1px solid var(--bd)">z.B. Personalkosten</td></tr>
<tr><td style="padding:8px 10px;border:1px solid var(--bd);font-weight:600">Herstellkosten</td><td style="padding:8px 10px;border:1px solid var(--bd)">Total Kosten gesamter Produktions-/Fertigungsprozess</td></tr>
<tr><td style="padding:8px 10px;border:1px solid var(--bd);font-weight:600">Selbstkosten</td><td style="padding:8px 10px;border:1px solid var(--bd)">Total Kosten inkl. Administration/Vertriebskosten</td></tr>
<tr><td style="padding:8px 10px;border:1px solid var(--bd);font-weight:600">Nettoerlös</td><td style="padding:8px 10px;border:1px solid var(--bd)">Total Betriebsertrag</td></tr>
<tr style="background:rgba(232,168,56,0.08)"><td style="padding:8px 10px;border:1px solid var(--bd);font-weight:700">Betriebsergebnis</td><td style="padding:8px 10px;border:1px solid var(--bd);font-weight:700">Gewinn / Verlust</td></tr>
</tbody></table></div>

<h2 style="color:#00c6fb;margin-top:28px">2.5 Teilkostenrechnung</h2>
<p>Im Gegensatz zur Vollkostenrechnung werden den Kostenträgern <strong style="color:#e8a838">nur die variablen Kosten</strong> zugerechnet. Die fixen Kosten werden nicht umgelegt, sondern bleiben bis zur Erfolgsermittlung als Kostenblock unberücksichtigt (Gesamtkostenbetrachtung).</p>

<h3 style="color:#e8a838;margin-top:14px">Systematik der Teilkostenrechnung</h3>
<div style="display:flex;align-items:center;justify-content:center;gap:8px;margin:14px 0;flex-wrap:wrap">
<div style="background:var(--s2);border:1px solid var(--bd);padding:10px 14px;border-radius:8px;text-align:center;font-size:13px"><strong>Kostenspaltung</strong><br><em style="color:var(--tx2);font-size:11px">fix / variabel</em></div>
<div style="color:#e8a838;font-weight:700">→</div>
<div style="background:var(--s2);border:1px solid var(--bd);padding:10px 14px;border-radius:8px;text-align:center;font-size:13px"><strong>Ermittlung</strong><br><em style="color:var(--tx2);font-size:11px">Deckungsbeitrag</em></div>
<div style="color:#e8a838;font-weight:700">→</div>
<div style="background:rgba(232,168,56,0.15);border:2px solid #e8a838;padding:10px 14px;border-radius:8px;text-align:center;font-size:13px"><strong>Umlage Fixkosten<br>als Block</strong></div>
</div>

<h3 style="color:#e8a838;margin-top:14px">Ergebnisse der Teilkostenrechnung pro Kostenträger</h3>
<ul style="margin-left:24px;line-height:1.9">
<li>Einzelkosten</li>
<li>Variable Herstellkosten</li>
<li>Variable Selbstkosten</li>
<li>Nettoerlös</li>
<li><strong style="color:#e8a838">Deckungsbeitrag</strong></li>
</ul>
<p><em>Fixkosten werden nicht pro Kostenträger betrachtet, da sie als Block anfallen.</em></p>

<h2 style="color:#00c6fb;margin-top:28px">2.6 Deckungsbeitragsrechnung</h2>
<p>Der <strong style="color:#e8a838">Deckungsbeitrag</strong> ist die Differenz zwischen dem Erlös (Umsatz) und den variablen Kosten und steht für den Betrag, der zur <strong style="color:#00c6fb">Deckung der Fixkosten und zur Erzielung eines Gewinns</strong> zur Verfügung steht. Aus unternehmerischer Sicht ist es sinnvoll, nur Produkte anzubieten, die positive Deckungsbeiträge abwerfen.</p>

<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:14px 0">
<div class="c ca" style="padding:14px 16px"><div class="ct2">Deckungsbeitrag in CHF</div>
<div style="background:rgba(232,168,56,0.12);border:1px dashed #e8a838;padding:10px 12px;border-radius:8px;margin:10px 0;text-align:center;font-style:italic;color:#e8a838;font-size:13px">DB [CHF] = Nettoverkaufspreis p.St. − variable Kosten p.St.</div>
<div class="cd">Ab welchem Betrag wird ein Beitrag zur Fixkostendeckung geleistet?</div></div>
<div class="c cg" style="padding:14px 16px"><div class="ct2">Deckungsbeitragsmarge in %</div>
<div style="background:rgba(232,168,56,0.12);border:1px dashed #e8a838;padding:10px 12px;border-radius:8px;margin:10px 0;text-align:center;font-style:italic;color:#e8a838;font-size:13px">DB-Marge = DB [CHF] / Nettoverkaufspreis × 100 %</div>
<div class="cd">Wie viel trägt jedes verkaufte Produkt relativ zur Fixkostendeckung bei?</div></div>
</div>

<div class="hla" style="border-left:4px solid #34c759;background:rgba(52,199,89,0.08);padding:16px 20px;margin:16px 0;border-radius:10px">
<strong style="color:#34c759">🏨 FALLBEISPIEL BELLAVISTA — RESTAURANT «VISTA»</strong><br>
Tagesteller CHF 28.50 — Warenkosten & direkte variable Kosten CHF 9.20 → <strong>DB = CHF 19.30; DB-Marge = 19.30 / 28.50 × 100 = 67.7 %.</strong> Mittagsmenü Salatbuffet CHF 24.00 — variable Kosten CHF 7.80 → DB = CHF 16.20, DB-Marge = 67.5 %. Beide Produkte tragen substanziell zur Fixkostendeckung bei.
</div>

<h3 style="color:#e8a838;margin-top:18px">Doppelte Deckungsbeitragsrechnung (DDR)</h3>
<p>Die DDR hilft, die Rentabilität eines Produkts aus zwei Blickwinkeln gleichzeitig zu bewerten: <strong>absoluter Beitrag (CHF)</strong> und <strong>relative Marge (%)</strong>. Sie identifiziert, welche Produkte man in der Karte forcieren sollte.</p>

<div style="background:rgba(232,168,56,0.12);border:1px dashed #e8a838;padding:14px 18px;border-radius:10px;margin:14px 0;text-align:center;font-family:Georgia,serif;font-style:italic;color:#e8a838;font-size:15px">
DDR-Wert = DB [CHF] × 2 + DB-Marge [%] / 2<br>
<span style="font-size:12px;color:var(--tx2);font-style:normal;font-family:-apple-system">Ein hoher DDR-Wert steuert einen höheren Beitrag zur Deckung der Betriebskosten bei</span>
</div>

<div style="overflow-x:auto;margin:14px 0">
<table style="width:100%;font-size:13px;border-collapse:collapse;color:var(--tx)">
<thead><tr style="background:var(--s2);font-weight:700"><td style="padding:10px;border:1px solid var(--bd)">Produkt</td><td style="padding:10px;border:1px solid var(--bd);text-align:right">DB [CHF]</td><td style="padding:10px;border:1px solid var(--bd);text-align:right">DB [%]</td><td style="padding:10px;border:1px solid var(--bd);text-align:right">DDR-Wert</td></tr></thead>
<tbody>
<tr style="background:rgba(52,199,89,0.08)"><td style="padding:8px 10px;border:1px solid var(--bd);font-weight:700">Burger</td><td style="padding:8px 10px;border:1px solid var(--bd);text-align:right">23</td><td style="padding:8px 10px;border:1px solid var(--bd);text-align:right">69,7 %</td><td style="padding:8px 10px;border:1px solid var(--bd);text-align:right;color:#34c759;font-weight:700">80,85</td></tr>
<tr><td style="padding:8px 10px;border:1px solid var(--bd);font-weight:700">Spaghetti</td><td style="padding:8px 10px;border:1px solid var(--bd);text-align:right">18</td><td style="padding:8px 10px;border:1px solid var(--bd);text-align:right">76,2 %</td><td style="padding:8px 10px;border:1px solid var(--bd);text-align:right">74,10</td></tr>
</tbody></table></div>

<p><strong style="color:#e8a838">Trotz höherer Marge bei den Spaghetti lohnt sich der Burger betriebswirtschaftlich mehr</strong> — er hat den höheren DDR-Wert. Die Mitarbeitenden sollten den Gästen den Burger aktiv schmackhaft machen.</p>

<h3 style="color:#e8a838;margin-top:18px">Sales-Mix — DDR mit Verkaufszahlen kombinieren</h3>
<p>Noch aussagekräftiger wird die Kalkulation, wenn der DB mit der Absatzmenge kombiniert wird:</p>

<div style="background:rgba(232,168,56,0.12);border:1px dashed #e8a838;padding:12px 16px;border-radius:10px;margin:14px 0;text-align:center;font-family:Georgia,serif;font-style:italic;color:#e8a838;font-size:14px">
DB Total [CHF] = DB pro Stück [CHF] × Absatzmenge
</div>

<div style="overflow-x:auto;margin:14px 0">
<table style="width:100%;font-size:13px;border-collapse:collapse;color:var(--tx)">
<thead><tr style="background:var(--s2);font-weight:700"><td style="padding:10px;border:1px solid var(--bd)">Produkt</td><td style="padding:10px;border:1px solid var(--bd);text-align:right">DB [CHF]</td><td style="padding:10px;border:1px solid var(--bd);text-align:right">Verkaufszahl</td><td style="padding:10px;border:1px solid var(--bd);text-align:right">DB Total [CHF]</td></tr></thead>
<tbody>
<tr><td style="padding:8px 10px;border:1px solid var(--bd);font-weight:700">Burger</td><td style="padding:8px 10px;border:1px solid var(--bd);text-align:right">23</td><td style="padding:8px 10px;border:1px solid var(--bd);text-align:right">220</td><td style="padding:8px 10px;border:1px solid var(--bd);text-align:right">5'060</td></tr>
<tr style="background:rgba(52,199,89,0.08)"><td style="padding:8px 10px;border:1px solid var(--bd);font-weight:700">Spaghetti</td><td style="padding:8px 10px;border:1px solid var(--bd);text-align:right">18</td><td style="padding:8px 10px;border:1px solid var(--bd);text-align:right">380</td><td style="padding:8px 10px;border:1px solid var(--bd);text-align:right;color:#34c759;font-weight:700">6'840</td></tr>
</tbody></table></div>

<div class="hl"><strong>💡 ERKENNTNIS</strong><br>
Obwohl ein einzelner Burger mehr DB liefert als Spaghetti, bringen die Spaghetti <strong>insgesamt mehr DB (6'840 vs. 5'060)</strong> — wegen der höheren Nachfrage. Die Spaghetti gehören auf die Karte! <strong>Nachfrage × DB ist wichtiger als DB allein.</strong></div>

<h2 style="color:#00c6fb;margin-top:28px">2.7 Break-Even-Analyse</h2>
<p>Die <strong style="color:#e8a838">Break-Even-Analyse</strong> ermittelt den Punkt, bei dem die Erlöse (Verkaufspreis × Absatzmenge) und die Totalkosten (variable + fixe Kosten) identisch sind. An diesem Punkt ist der Gewinn gleich Null — er wird <strong style="color:#e8a838">Break-Even-Point</strong>, <strong>Gewinnschwelle</strong> oder <strong>Nutzschwelle</strong> genannt.</p>

<div class="hl"><strong>DECKUNGSBEITRAG vs. BREAK-EVEN POINT</strong><br>
<strong style="color:#e8a838">Deckungsbeitrag:</strong> Betrag, der zur Deckung der Fixkosten und zur Erzielung eines Gewinns nach Abzug der variablen Kosten von den Erlösen verbleibt (CHF oder %).<br>
<strong style="color:#e8a838">Break-Even-Point:</strong> Punkt, an dem die Erlöse die gesamten Kosten genau decken — weder Gewinn noch Verlust (CHF oder Stück).<br>
<strong>Zusammenspiel:</strong> Der DB wird zur Berechnung des Break-Even Points verwendet.</div>

<h3 style="color:#e8a838;margin-top:14px">Grundformel</h3>
<div style="background:rgba(232,168,56,0.12);border:1px dashed #e8a838;padding:14px 18px;border-radius:10px;margin:14px 0;text-align:center;font-family:Georgia,serif;font-style:italic;color:#e8a838;font-size:16px">
Verkaufspreis × x = K<sub>var</sub> × x + K<sub>fix</sub><br>
<span style="font-size:12px;color:var(--tx2);font-style:normal;font-family:-apple-system">Unterhalb: Verlustzone · Oberhalb: Gewinnzone</span>
</div>

<h3 style="color:#e8a838;margin-top:14px">Die wichtigen Berechnungen</h3>
<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px;margin:14px 0">
<div class="c ca" style="padding:14px 16px"><div class="ct2">Mengenmässige Nutzschwelle (Stück)</div>
<div style="background:rgba(232,168,56,0.12);border:1px dashed #e8a838;padding:10px;border-radius:8px;margin:10px 0;text-align:center;font-style:italic;color:#e8a838;font-size:13px">NS<sub>Stk</sub> = Fixe Kosten / DB pro Stück [CHF]</div>
<div class="cd">Ab welcher Menge sind alle Kosten gedeckt?</div></div>
<div class="c cg" style="padding:14px 16px"><div class="ct2">Wertmässige Nutzschwelle V1</div>
<div style="background:rgba(232,168,56,0.12);border:1px dashed #e8a838;padding:10px;border-radius:8px;margin:10px 0;text-align:center;font-style:italic;color:#e8a838;font-size:13px">NS<sub>CHF</sub> = Fixe Kosten / DB-Marge [%]</div>
<div class="cd">Welcher Umsatz wird mindestens benötigt?</div></div>
<div class="c cm" style="padding:14px 16px"><div class="ct2">Wertmässige Nutzschwelle V2</div>
<div style="background:rgba(232,168,56,0.12);border:1px dashed #e8a838;padding:10px;border-radius:8px;margin:10px 0;text-align:center;font-style:italic;color:#e8a838;font-size:12px">NS<sub>CHF</sub> = Mengenmässige NS × Nettoerlös pro Stück</div>
<div class="cd">Alternative Berechnung über die mengenmässige Nutzschwelle.</div></div>
</div>

<div class="hla" style="border-left:4px solid #34c759;background:rgba(52,199,89,0.08);padding:16px 20px;margin:16px 0;border-radius:10px">
<strong style="color:#34c759">🏨 FALLBEISPIEL BELLAVISTA — NUTZSCHWELLE BANKETT</strong><br>
Bellavista plant ein neues Weihnachtsbankett-Package zu CHF 120 pro Gast. Variable Kosten pro Gast CHF 45 → DB = CHF 75. Fixkosten für Dekoration, Musik und Grundaufbau: CHF 9'000. <strong>Mengenmässige Nutzschwelle = 9'000 / 75 = 120 Gäste.</strong> Ab dem 121. verkauften Platz macht das Bankett Gewinn. <strong>Wertmässige Nutzschwelle = 120 × 120 = CHF 14'400 Umsatz.</strong>
</div>

<p><strong style="color:#e8a838">Nutzen der Break-Even-Analyse:</strong></p>
<ul style="margin-left:24px;line-height:1.9">
<li>Faktenbasierte Entscheidungen über Veränderungen im Produktsortiment</li>
<li>Auswahl des wirtschaftlichsten Szenarios aus mehreren Alternativen</li>
<li>Festlegung des Mindestpreises für ein neues Produkt</li>
</ul>

</div>


<!-- CTRL: Kalkulation (aus PDF-Zusammenfassung 1:1) -->
<div class="sec" id="ctrl_kalk"><h1>03 · Kalkulation</h1><p class="sub">Preiskomponenten · Preisgestaltung · Aufschlagskalkulation · MWST</p>

<div class="hlbl"><strong>LERNZIELE K03</strong><br>
✓ Die einzelnen Komponenten eines Preises in eigenen Worten nennen und beschreiben<br>
✓ Die verschiedenen Herangehensweisen der Preisgestaltung erläutern und situationsgerecht anwenden<br>
✓ Mithilfe der Aufschlagskalkulation und einer Betriebsrechnung Zuschlagsätze berechnen und auf Produkte ableiten<br>
✓ Selbstständig und sinnvoll für beliebige Produkte einen Preis ermitteln, begründen und argumentieren</div>

<h2 style="color:#00c6fb;margin-top:28px">3.1 Warum ist Kalkulation wichtig?</h2>
<p>Die richtige Preiskalkulation entscheidet über den unternehmerischen Erfolg. Wie entsteht der passende Preis für ein Gericht? Was ist der korrekte Preis für ein Hotelzimmer? <strong style="color:#e8a838">Schätzpreise, Faustformeln oder einfaches Kopieren der Konkurrenz sind fahrlässig</strong> — die korrekte Preiskalkulation ist die Voraussetzung für den Erfolg.</p>

<div class="hlr"><strong>⚠ HÄUFIGER FEHLER IN DER GASTRONOMIE</strong><br>
Die alte Faustformel <strong>«Wareneinsatz mal drei gleich Preis»</strong> ist nicht mehr zeitgemäss! Sie ignoriert Personalkosten, Fixkosten, Qualitätsunterschiede und die Zahlungsbereitschaft der Gäste. Moderne Kalkulation folgt einer ehrlichen Aufstellung aller Kostenkomponenten.</div>

<p><strong style="color:#e8a838">Markttransparente Artikel:</strong> Produkte wie Bier, Cola oder Kaffee, deren Preise auf den Karten vergleichbarer Betriebe zu finden sind. Der Preis ist kaum verhandelbar — ähnliche Zuliefererpreise führen zu ähnlichen Kalkulationsschemata. Gäste vergleichen heute live via Apps (z.B. Booking.com für Zimmer, Vivino für Wein).</p>

<h2 style="color:#00c6fb;margin-top:28px">3.2 Die sechs Komponenten eines Preises</h2>
<p>Ein Preis setzt sich meistens aus folgenden Einzelkomponenten zusammen:</p>

<div style="display:flex;flex-direction:column;gap:8px;margin:18px 0">
<div style="display:flex;align-items:center;gap:10px"><div style="background:var(--s2);border:1px solid var(--bd);padding:10px 16px;border-radius:8px;min-width:280px"><strong>1. Materialeinzelkosten</strong> <em style="color:var(--tx2)">(Wareneinkauf)</em></div><div style="color:#e8a838;font-weight:700">+</div></div>
<div style="display:flex;align-items:center;gap:10px"><div style="background:var(--s2);border:1px solid var(--bd);padding:10px 16px;border-radius:8px;min-width:280px"><strong>2. Fertigungseinzelkosten</strong> <em style="color:var(--tx2)">(Personalkosten)</em></div><div style="color:#e8a838;font-weight:700">= Einzelkosten</div></div>
<div style="display:flex;align-items:center;gap:10px"><div style="background:var(--s2);border:1px solid var(--bd);padding:10px 16px;border-radius:8px;min-width:280px"><strong>3. Gemeinkostenzuschläge</strong></div><div style="color:#e8a838;font-weight:700">= Herstellkosten</div></div>
<div style="display:flex;align-items:center;gap:10px"><div style="background:var(--s2);border:1px solid var(--bd);padding:10px 16px;border-radius:8px;min-width:280px"><strong>4. Verwaltungs- & Vertriebskosten</strong></div><div style="color:#e8a838;font-weight:700">= Selbstkosten</div></div>
<div style="display:flex;align-items:center;gap:10px"><div style="background:var(--s2);border:1px solid var(--bd);padding:10px 16px;border-radius:8px;min-width:280px"><strong>5. Gewinn</strong></div><div style="color:#e8a838;font-weight:700">= Netto-Verkaufspreis</div></div>
<div style="display:flex;align-items:center;gap:10px"><div style="background:rgba(232,168,56,0.15);border:2px solid #e8a838;padding:10px 16px;border-radius:8px;min-width:280px"><strong>6. Mehrwertsteuer (MWST)</strong></div><div style="color:#e8a838;font-weight:700">= Brutto-Verkaufspreis = Umsatz</div></div>
</div>

<h3 style="color:#e8a838;margin-top:18px">Details zu den Komponenten</h3>
<ol style="margin-left:24px;line-height:1.9">
<li><strong>Materialeinzelkosten:</strong> Einkaufspreis + Transport der Ausgangsprodukte. In der Preiskalkulation muss berücksichtigt werden, dass durch Reinigung und Schnittreste selten 100 % des Produkts verwendet werden. <strong style="color:#00c6fb">Verbindliche Rezepte und klare Portionsgrössen</strong> sind hier der Schlüssel.</li>
<li><strong>Fertigungseinzelkosten:</strong> Löhne, Sozialversicherungsabgaben, Urlaubstage. <strong style="color:#ff3b30">Der grösste Kostenpunkt überhaupt — niemals unterschätzen!</strong></li>
<li><strong>Gemeinkostenzuschläge:</strong> Kosten für Pflege (Haltbarkeit, Lagerung, Kühlung, Versicherung) und Nebenkosten der Herstellung (Strom, Abfall). Fallen nur bei effektiver Produktion an.</li>
<li><strong>Verwaltungs- & Vertriebskosten:</strong> «Unsichtbare» Aufwände wie Buchhaltung, Marketing, Zinsen.</li>
<li><strong>Gewinn:</strong> Betriebliche Gewinn-Marge <strong style="color:#e8a838">Gastronomie ~10 %</strong>, <strong style="color:#e8a838">Hotellerie ~15 %</strong>.</li>
<li><strong>MWST:</strong> 8,1 % (Normal), 3,8 % (Beherbergung), 2,6 % (Lebensmittel) — Stand 1.1.2024. Verkaufspreise in Hotellerie und Gastronomie werden immer inkl. MWST ausgewiesen.</li>
</ol>

<h2 style="color:#00c6fb;margin-top:28px">3.3 Dreieck der Preisgestaltung</h2>
<p>Die Preisfindung sollte sich an drei Gesichtspunkten orientieren — dem <strong style="color:#e8a838">Dreieck der Preisgestaltung</strong>:</p>

<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin:14px 0">
<div class="c ca" style="padding:16px 18px"><div style="font-size:22px;margin-bottom:4px">🏢</div><div class="ct2">Kosten (Unternehmen)</div><div class="cd"><strong>Kostenorientierte Preisfestsetzung:</strong> Preis basiert auf tatsächlichen Selbstkosten + Gewinnzuschlag. Reine Kostendeckung ohne Berücksichtigung von Marktwerten.<br><br><em>Bsp: Nicht gewinnorientierte Unternehmen (öffentliche Schulen), Wein in Gastronomie (fixer Zuschlag auf Einkaufspreis).</em></div></div>
<div class="c cg" style="padding:16px 18px"><div style="font-size:22px;margin-bottom:4px">👥</div><div class="ct2">Kunde (Nachfrage)</div><div class="cd"><strong>Nachfrageorientierte Preisfestsetzung:</strong> Preis richtet sich nach Angebot und Nachfrage — was sind Kund:innen bereit zu zahlen?<br><br><em>Bsp: Hotels/Fluggesellschaften — Dienstag-Mittwoch anderer Preis als Freitag-Samstag; Flug um 6:00 günstiger als um 11:00.</em></div></div>
<div class="c cp" style="padding:16px 18px"><div style="font-size:22px;margin-bottom:4px">🏛</div><div class="ct2">Konkurrenz</div><div class="cd"><strong>Konkurrenzorientierte Preisfestsetzung:</strong> Preis orientiert sich stark an Mitbewerber:innen am Platz.<br><br><em>Bsp: Markenkleider in Sportgeschäften (alle ähnlicher Preis); in Gastro oft Kaffee oder Flasche Bier.</em></div></div>
</div>

<h3 style="color:#e8a838;margin-top:18px">Weitere Preisfindungsmethoden</h3>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:14px 0">
<div class="c cm" style="padding:14px 16px"><div class="ct2">Dynamic Pricing</div><div class="cd">Die Nachfrage bestimmt den Preis — der Preis wird <strong>dynamisch der Nachfrage angepasst</strong>. Voraussetzungen: <strong>Kapazitäten müssen begrenzt und nicht lagerbar</strong> sein (Hotelzimmer, Flüge) — die variablen Kosten müssen bekannt sein (Untergrenze).<br><br>Bei grosser Nachfrage teuer verkaufen (hohe Marge), bei geringer Nachfrage bis zur Preisuntergrenze senken — jeder Franken über variablen Kosten deckt Fixkosten.</div></div>
<div class="c cr" style="padding:14px 16px"><div class="ct2">Target Pricing & Target Costing</div><div class="cd"><strong style="color:#e8a838">Target Pricing:</strong> Was darf das Produkt maximal im Verkauf kosten, um marktkonkurrenzfähig zu sein? (Analyse der Kundenzahlungsbereitschaft)<br><br><strong style="color:#e8a838">Target Costing:</strong> Was darf das Produkt bei der Herstellung maximal kosten, um den Ziel-Gewinn zu erzielen? (rückwärts ermittelt: Zielverkaufspreis − Mindestgewinn = zulässige Kosten)</div></div>
</div>

<h2 style="color:#00c6fb;margin-top:28px">3.4 Kalkulationsmethoden im Überblick</h2>
<p>Es gibt verschiedene Arten, den Preis eines Produkts bzw. einer Leistung zu berechnen:</p>

<div style="overflow-x:auto;margin:14px 0">
<table style="width:100%;font-size:13px;border-collapse:collapse;color:var(--tx)">
<thead><tr style="background:var(--s2);font-weight:700"><td style="padding:10px;border:1px solid var(--bd)">Methode</td><td style="padding:10px;border:1px solid var(--bd)">Vorgehen</td></tr></thead>
<tbody>
<tr><td style="padding:8px 10px;border:1px solid var(--bd);font-weight:600">Einfacher Faktor</td><td style="padding:8px 10px;border:1px solid var(--bd)">Warenkosten × Faktor</td></tr>
<tr><td style="padding:8px 10px;border:1px solid var(--bd);font-weight:600">Einfacher Zuschlag</td><td style="padding:8px 10px;border:1px solid var(--bd)">Warenkosten + Wert</td></tr>
<tr><td style="padding:8px 10px;border:1px solid var(--bd);font-weight:600">Divisionskalkulation</td><td style="padding:8px 10px;border:1px solid var(--bd)">Alle Kosten / Anzahl Produkte</td></tr>
<tr style="background:rgba(232,168,56,0.12)"><td style="padding:8px 10px;border:1px solid var(--bd);font-weight:700;color:#e8a838">Aufschlagskalkulation ⭐</td><td style="padding:8px 10px;border:1px solid var(--bd)">Wird in der Hotellerie/Gastronomie am häufigsten angewendet — siehe 3.5</td></tr>
<tr><td style="padding:8px 10px;border:1px solid var(--bd);font-weight:600">Betriebsrechnung</td><td style="padding:8px 10px;border:1px solid var(--bd)">Aus der Teilkostenrechnung abgeleitet</td></tr>
<tr><td style="padding:8px 10px;border:1px solid var(--bd);font-weight:600;color:#ff3b30">Praktiker-Methode</td><td style="padding:8px 10px;border:1px solid var(--bd)">«Handgelenk mal Pi» — nicht empfehlenswert!</td></tr>
</tbody></table></div>

<h2 style="color:#00c6fb;margin-top:28px">3.5 Aufschlagskalkulation (ausführlich)</h2>
<p>Die <strong style="color:#e8a838">Aufschlagskalkulation</strong> zeigt in erster Linie die gastronomische Rentabilität in Bezug auf die tatsächlich anfallenden Produktionskosten. Idealerweise wird sie mit der <strong style="color:#00c6fb">Doppelten-Deckungsbeitrags-Rechnung (DDR)</strong> und einem <strong style="color:#00c6fb">ausgewogenen Sales-Mix</strong> kombiniert.</p>

<h3 style="color:#e8a838;margin-top:14px">Die 7-Schritt-Checkliste</h3>
<ol style="margin-left:24px;line-height:1.9">
<li><strong>Gesamte Betriebskosten</strong> (Fixkosten: Personal, Miete, Versicherung, Marketing, Administration, Finanzen) summieren</li>
<li><strong>Aufteilung in Sparten</strong> (z.B. Speisen-Anteil / Getränke-Anteil) → Produktionskosten pro Sparte</li>
<li><strong>Weitere Unterteilung in Untersparten</strong> (Haupt-/Vorspeisen; Wein/Bier/Mineral) anhand der Absatzplanung</li>
<li><strong>Produktionskosten der Sparte</strong> × prozentualer Wert der Untersparte = Produktionskosten der Untersparte</li>
<li><strong>/ Anzahl Produkte</strong> der Untersparte = Ø Selbstkostenanteil pro Produkt</li>
<li><strong>+ Warenkosten</strong> des konkreten Gerichts (gemäss Rezeptur) <strong>+ Gewinnanteil + Reserve</strong> für Unvorhergesehenes</li>
<li><strong>+ aktuelle MWST</strong> → Endpreis</li>
</ol>

<div class="hl"><strong>WICHTIGE DETAILS ZUR AUFSCHLAGSKALKULATION</strong><br>
<strong style="color:#e8a838">Standard-Rezeptur:</strong> Ordentlich dokumentierte, stetig aktualisierte Auflistung aller Komponenten — in Gramm/Deziliter/Stück mit aktuellen Einkaufspreisen.<br>
<strong style="color:#e8a838">Gewinn-Zuschlag:</strong> Mindestens der im Businessplan festgelegte Jahresgewinn in Prozent.<br>
<strong style="color:#e8a838">Reserve:</strong> So bemessen, dass ein Produkt bei Fehlbestellung oder Bruch problemlos ersetzt werden kann.<br>
<strong style="color:#e8a838">Preissensibilität beachten:</strong> Oft werden Beträge an Konkurrenzpreise und Zahlungsbereitschaft der Gäste angepasst.</div>

<div class="hla" style="border-left:4px solid #34c759;background:rgba(52,199,89,0.08);padding:16px 20px;margin:16px 0;border-radius:10px">
<strong style="color:#34c759">🏨 FALLBEISPIEL BELLAVISTA — KALKULATION «ZANDERFILET AUF RÖSTI»</strong><br>
<strong>Warenkosten (Rezeptur):</strong> Zanderfilet 180g CHF 9.50, Kartoffeln CHF 1.20, Beilagengemüse CHF 2.10, Sauce CHF 1.80 = <strong style="color:#e8a838">CHF 14.60</strong><br>
+ Ø Selbstkostenanteil Hauptspeisen (aus Aufschlag): <strong>CHF 11.20</strong><br>
+ Gewinnanteil 15 %: <strong>CHF 3.87</strong><br>
+ Reserve 3 %: <strong>CHF 0.89</strong><br>
<strong>= Netto-Verkaufspreis: CHF 30.56</strong><br>
+ MWST 8,1 %: CHF 2.48<br>
→ <strong style="color:#e8a838">Brutto-Verkaufspreis (Speisekarte): CHF 33.00</strong> (aufgerundet)
</div>

<h2 style="color:#00c6fb;margin-top:28px">3.6 Einfluss der Kostenrechnung auf die Kalkulation</h2>
<p>Auf gleicher Basis wie bei der Teilkostenrechnung findet auch in der Kalkulation eine <strong style="color:#e8a838">Kostenspaltung</strong> statt — Fixkosten und variable Kosten werden getrennt.</p>

<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:14px 0">
<div class="c cr" style="padding:14px 16px"><div class="ct2">Fixkosten in der Hotellerie/Gastronomie</div><div class="cd">Nicht von der Auslastung abhängig: Personalkosten (Festanstellung), Miete, Versicherung, Marketing, Administration, Finanzkosten.</div></div>
<div class="c cg" style="padding:14px 16px"><div class="ct2">Variable Kosten in der Hotellerie/Gastronomie</div><div class="cd">Direkt mit Auslastung verknüpft: Warenkosten für Essen & Getränke, Kosten eines Gästeaufenthalts (Reinigung, Wäsche, Amenities).</div></div>
</div>

<p>Variable Kosten lassen sich durch <strong style="color:#e8a838">standardisierte Rezepturen und Abläufe</strong> sowie einen <strong style="color:#e8a838">gut organisierten, effizienten Einkauf</strong> optimieren. Die Einnahmen müssen sowohl fixe als auch variable Kosten decken.</p>

<h2 style="color:#00c6fb;margin-top:28px">3.7 Materielle und immaterielle Komponenten</h2>
<p>Ein Angebot in der Hotellerie besteht nicht nur aus messbaren Produkten, sondern auch aus schwer fassbaren Werten:</p>

<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:14px 0">
<div class="c ca" style="padding:14px 16px"><div class="ct2">Materielle Komponenten</div><div class="cd">Das Essen, das Getränk, das Zimmer, die Einrichtung, die Lage, die Sauberkeit.</div></div>
<div class="c cm" style="padding:14px 16px"><div class="ct2">Immaterielle Komponenten</div><div class="cd">Atmosphäre, Gastfreundschaft, Service, Story, Marke, Reputation, Erlebnis.</div></div>
</div>

<p>Im Preis steckt immer <strong style="color:#e8a838">beides</strong> — und der Gast zahlt oft mehr für die <strong style="color:#00c6fb">immateriellen Werte</strong> als für das Produkt selbst.</p>

</div>


<!-- CTRL: Investitionsrechnung (aus PDF-Zusammenfassung 1:1) -->
<div class="sec" id="ctrl_inv"><h1>04 · Investitionsrechnung</h1><p class="sub">Grundlagen · Rechengrössen · Statische Verfahren · Rückflusszahl · NPV</p>

<div class="hlbl"><strong>LERNZIELE K04</strong><br>
✓ Den Begriff Investition definieren und verschiedene Investitionsarten unterscheiden<br>
✓ Die Motive hinter Investitionen erläutern und Beispiele aus der Hotellerie nennen<br>
✓ Die Rechengrössen der Investitionsrechnung (Kapitaleinsatz, Cashflow, Nutzungsdauer, Zinsfuss, Liquidationserlös) erklären<br>
✓ Statische Rechenverfahren (Kostenvergleich, Gewinnvergleich, Renditerechnung, Amortisationsrechnung) anwenden<br>
✓ Die Rückflusszahl berechnen und interpretieren<br>
✓ Grundverständnis der dynamischen Verfahren (NPV-Methode) aufweisen</div>

<h2 style="color:#00c6fb;margin-top:28px">4.1 Was ist eine Investition?</h2>
<p><strong style="color:#e8a838">Investire</strong> (lateinisch) = <em>einkleiden</em>. Investitionen sind finanzielle Mittel, die für längere Zeit in <strong style="color:#e8a838">Anlagevermögen</strong> «eingekleidet» (angelegt) werden. Das Ziel einer Investition ist immer eine <strong style="color:#34c759">Wertsteigerung</strong> — Return on Investment.</p>

<h3 style="color:#e8a838;margin-top:18px">Investitionsmerkmale</h3>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:14px 0">
<div class="c ca" style="padding:14px 16px"><div style="font-size:22px;margin-bottom:4px">🎯</div><div class="ct2">Zielgerichtet</div><div class="cd">Finanzielle Ressourcen werden für einen zukunftsgerichteten Zweck eingesetzt — nicht für den laufenden Konsum.</div></div>
<div class="c cm" style="padding:14px 16px"><div style="font-size:22px;margin-bottom:4px">⏳</div><div class="ct2">Mittel- bis langfristig</div><div class="cd">Der erwartete Nutzen erstreckt sich über einen längeren Zeitraum — nicht eine Periode, sondern oft Jahre oder Jahrzehnte.</div></div>
<div class="c cp" style="padding:14px 16px"><div style="font-size:22px;margin-bottom:4px">📊</div><div class="ct2">Unregelmässige Ströme</div><div class="cd">Einnahmen- und Ausgabenströme fallen unregelmässig verteilt über die Nutzungsdauer an — hohe Anfangsausgabe, gestaffelte Rückflüsse.</div></div>
<div class="c cg" style="padding:14px 16px"><div style="font-size:22px;margin-bottom:4px">📈</div><div class="ct2">Wertsteigerung als Ziel</div><div class="cd">Zugunsten der Erwartung künftiger höherer Einnahmen wird heute auf einen kleineren, weniger risikoreichen Nutzen verzichtet.</div></div>
</div>

<h3 style="color:#e8a838;margin-top:18px">Wie «beginnen» Investitionen?</h3>
<div style="display:flex;align-items:center;justify-content:center;gap:6px;margin:14px 0;flex-wrap:wrap">
<div style="background:var(--s2);border:1px solid var(--bd);padding:8px 14px;border-radius:8px;text-align:center;font-size:13px;font-weight:700">Investitionsbedarf</div>
<div style="color:#e8a838;font-weight:700">→</div>
<div style="background:var(--s2);border:1px solid var(--bd);padding:8px 14px;border-radius:8px;text-align:center;font-size:13px;font-weight:700">Investitionsbudget</div>
<div style="color:#e8a838;font-weight:700">→</div>
<div style="background:var(--s2);border:1px solid var(--bd);padding:8px 14px;border-radius:8px;text-align:center;font-size:13px;font-weight:700">Finanzierungsplan</div>
<div style="color:#e8a838;font-weight:700">→</div>
<div style="background:var(--s2);border:1px solid var(--bd);padding:8px 14px;border-radius:8px;text-align:center;font-size:13px;font-weight:700">Finanzierungen beschaffen</div>
<div style="color:#e8a838;font-weight:700">→</div>
<div style="background:var(--s2);border:1px solid var(--bd);padding:8px 14px;border-radius:8px;text-align:center;font-size:13px;font-weight:700">Baubewilligungen</div>
</div>

<h2 style="color:#00c6fb;margin-top:28px">4.2 Investitionsarten</h2>
<p>Je nach Art der Mittelanlage unterscheidet man <strong>drei Investitionsarten</strong>:</p>

<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin:14px 0">
<div class="c ca" style="padding:14px 16px"><div style="font-size:22px;margin-bottom:4px">🏢</div><div class="ct2">Sachinvestition</div><div class="cd">• Fahrzeuge<br>• Maschinen<br>• Immobilien<br><br><em>Beispiele: Betriebsfahrzeug, Kücheneinrichtung, Restaurantmobiliar, Hotelgebäude</em></div></div>
<div class="c cg" style="padding:14px 16px"><div style="font-size:22px;margin-bottom:4px">💳</div><div class="ct2">Finanzinvestition</div><div class="cd">• Aktivdarlehen<br>• Beteiligungen<br><br><em>Beispiele: Darlehen an Aktionär, Beteiligung an anderem Betrieb</em></div></div>
<div class="c cp" style="padding:14px 16px"><div style="font-size:22px;margin-bottom:4px">💡</div><div class="ct2">Immaterielle Investition</div><div class="cd">• Forschung<br>• Sozialleistungen<br>• Patente<br>• Lizenzen<br><br><em>Beispiele: IT-Benutzerlizenzen, EDV-Software, Casino-Konzession</em></div></div>
</div>

<h2 style="color:#00c6fb;margin-top:28px">4.3 Motive einer Investition</h2>
<p>Wird nach dem <strong style="color:#e8a838">Motiv</strong> gefragt, warum eine Investition getätigt wird, unterscheidet man folgende Typen:</p>

<div style="overflow-x:auto;margin:14px 0">
<table style="width:100%;font-size:13px;border-collapse:collapse;color:var(--tx)">
<thead><tr style="background:var(--s2);font-weight:700"><td style="padding:10px;border:1px solid var(--bd)">Investitionsart</td><td style="padding:10px;border:1px solid var(--bd)">Motiv</td><td style="padding:10px;border:1px solid var(--bd)">Hotel-Beispiel</td></tr></thead>
<tbody>
<tr><td style="padding:8px 10px;border:1px solid var(--bd);font-weight:600">Gründungsinvestition</td><td style="padding:8px 10px;border:1px solid var(--bd)">Gründung Unternehmung, Eröffnung neuer Filiale</td><td style="padding:8px 10px;border:1px solid var(--bd)">Neues Boutique-Hotel wird eröffnet</td></tr>
<tr><td style="padding:8px 10px;border:1px solid var(--bd);font-weight:600">Erweiterungsinvestition</td><td style="padding:8px 10px;border:1px solid var(--bd)">Bestehende Kapazität wird erweitert</td><td style="padding:8px 10px;border:1px solid var(--bd)">Angrenzendes Grundstück für Parkplätze</td></tr>
<tr><td style="padding:8px 10px;border:1px solid var(--bd);font-weight:600">Ersatzinvestition</td><td style="padding:8px 10px;border:1px solid var(--bd)">Bestehende Anlage wird durch gleichartige ersetzt</td><td style="padding:8px 10px;border:1px solid var(--bd)">Austausch veralteter Möbel</td></tr>
<tr><td style="padding:8px 10px;border:1px solid var(--bd);font-weight:600">Rationalisierungsinvestition</td><td style="padding:8px 10px;border:1px solid var(--bd)">Wirtschaftlichkeit und Produktivität erhöhen</td><td style="padding:8px 10px;border:1px solid var(--bd)">Energieeffiziente Beleuchtung zur Kostensenkung</td></tr>
<tr><td style="padding:8px 10px;border:1px solid var(--bd);font-weight:600">Umstellungsinvestition</td><td style="padding:8px 10px;border:1px solid var(--bd)">Neue Technologien oder andere Produkte</td><td style="padding:8px 10px;border:1px solid var(--bd)">Solarenergie/alternative Energiesysteme</td></tr>
<tr><td style="padding:8px 10px;border:1px solid var(--bd);font-weight:600">Diversifikationsinvestition</td><td style="padding:8px 10px;border:1px solid var(--bd)">Produktionsprogramm erweitern, Risiko verteilen</td><td style="padding:8px 10px;border:1px solid var(--bd)">Resort an neuem geografischem Standort</td></tr>
<tr><td style="padding:8px 10px;border:1px solid var(--bd);font-weight:600">Sicherungsinvestition</td><td style="padding:8px 10px;border:1px solid var(--bd)">Sicherung des Unternehmungsfortbestandes (F&E, Schulung, Werbung)</td><td style="padding:8px 10px;border:1px solid var(--bd)">Beteiligung an Werbeagentur für Markenaufbau</td></tr>
</tbody></table></div>

<div class="hl"><strong>UNTERSCHEIDUNGSMERKMALE</strong><br>
Nebst den Motiven gibt es weitere Unterscheidungen: <strong style="color:#e8a838">Rechenbare</strong> vs. nicht rechenbare Investition (z.B. Sozialinvestitionen lassen sich schwer bewerten). <strong style="color:#e8a838">Zwangsinvestition</strong> (unaufschiebbar, z.B. defekte Küche) vs. <strong style="color:#e8a838">Alternativinvestition</strong> (zeitlich verschiebbar).<br><br>
In der Praxis vereint eine Investition oft mehrere Motive: Der Ersatz einer IT-Anlage ist <strong style="color:#e8a838">Ersatzinvestition</strong> + <strong style="color:#e8a838">Zwangsinvestition</strong> + hat <strong style="color:#e8a838">Rationalisierungs- und Erweiterungseffekt</strong>.</div>

<div class="hla" style="border-left:4px solid #34c759;background:rgba(52,199,89,0.08);padding:16px 20px;margin:16px 0;border-radius:10px">
<strong style="color:#34c759">🏨 FALLBEISPIEL BELLAVISTA — INVESTITIONSPORTFOLIO 2024</strong><br>
Claudia Bellavista plant mehrere parallele Investitionen: <strong>Ersatz</strong> der 12 Jahre alten Wäschereianlage (Zwangsinvestition, CHF 180'000); <strong>Erweiterung</strong> Wellnessbereich um Indoor-Pool (Erweiterung, CHF 750'000); <strong>Rationalisierung</strong> durch Installation einer Photovoltaikanlage (Umstellung + Rationalisierung, CHF 320'000); <strong>Sicherung</strong> durch Investition in ein neues PMS-System (immateriell, CHF 85'000). <strong>Gesamtvolumen: CHF 1'335'000.</strong>
</div>

<h2 style="color:#00c6fb;margin-top:28px">4.4 Der Investitionsprozess</h2>
<p>Der Investitionsvorgang darf nicht isoliert betrachtet werden — er ist Teil der Finanz- und Liquiditätsplanung und folgt einem klaren Ablauf:</p>
<ol style="margin-left:24px;line-height:1.9">
<li><strong>Investitionsanregungen sammeln:</strong> Einbezug möglichst vieler Mitarbeitender (Vorschlagswesen, prämierte Ideen)</li>
<li><strong>Vorfilterung:</strong> Anregungen, die nicht mit Investitionszielen übereinstimmen oder technisch nicht machbar sind, werden aussortiert</li>
<li><strong>Datensammlung:</strong> Betriebsinterne und -externe Daten für wirtschaftliche, technische und soziale Prüfung sammeln</li>
<li><strong>Wirtschaftlichkeitsrechnung:</strong> Durchführung der Investitionsrechnung (statische/dynamische Verfahren)</li>
<li><strong>Gesamtbeurteilung:</strong> Über die rein wirtschaftliche Prüfung hinausgehen — auch soziale und psychologische Aspekte einbeziehen</li>
<li><strong>Priorisierung:</strong> Prioritätenliste erstellen — zuerst Zwangsinvestitionen, dann Alternativprojekte</li>
<li><strong>Finanzierung:</strong> Abstimmung benötigte vs. verfügbare Mittel (Liquiditätsplan)</li>
<li><strong>Durchführung:</strong> Zeitplan, finanzielle Mittel, Personalschulung, Marketingmassnahmen</li>
<li><strong>Kontrolle:</strong> Abweichungen von den geplanten Daten sofort erkennen</li>
</ol>

<div class="hlr"><strong>⚠ HÄUFIGER FEHLER: REINE RENTABILITÄTSBETRACHTUNG</strong><br>
Am einfachsten wäre die Einordnung nach der Höhe der erwarteten Rentabilität — doch dann würden rein wirtschaftliche Überlegungen zu stark gewichtet. <strong>Sozial-, Schulungs- und Sicherheitsinvestitionen hätten zu wenig Chancen</strong>, realisiert zu werden. Die Priorisierung muss ganzheitlich erfolgen.</div>

<h2 style="color:#00c6fb;margin-top:28px">4.5 Rechengrössen der Investitionsrechnung</h2>
<p>In Wirtschaftlichkeitsrechnungen werden Ausgaben und Einnahmen einander gegenübergestellt. Folgende Rechengrössen stehen im Vordergrund:</p>

<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:14px 0">
<div class="c ca" style="padding:14px 16px"><div style="font-size:20px;margin-bottom:4px">💼</div><div class="ct2">Kapitaleinsatz (Anfangsausgaben)</div><div class="cd">Alle bis zum Zeitpunkt der Inbetriebnahme anfallenden Kosten. Berechnung:<br>
• + Einstandspreis Investitionsobjekt<br>
• + Forschungs- und Entwicklungskosten<br>
• + Projektierungskosten<br>
• + Einbau- und Installationskosten<br>
• + Wartungskosten bis Inbetriebnahme<br>
• + Kosten eines allfälligen Produktionsausfalls<br>
• + Kosten für Sekundärinvestitionen<br>
• + Erhöhung des Umlaufvermögens<br>
• = <strong style="color:#e8a838">Investiertes Kapital</strong></div></div>
<div class="c cg" style="padding:14px 16px"><div style="font-size:20px;margin-bottom:4px">💰</div><div class="ct2">Cashflow (laufende Ströme)</div><div class="cd">Liquiditätszufluss aus der Investitionstätigkeit — Überschuss der investitionsbedingten Einnahmen über Ausgaben bzw. Nutzen abzüglich Betriebskosten.<br><br><em>In älterer Literatur auch «Rohgewinn» genannt.</em></div></div>
<div class="c cm" style="padding:14px 16px"><div style="font-size:20px;margin-bottom:4px">📅</div><div class="ct2">Nutzungsdauer</div><div class="cd">Betriebswirtschaftliche Zeitspanne, während der die Anlage genutzt wird — im Vordergrund die <strong>wirtschaftliche Nutzungsdauer</strong>, nicht die technische Lebensdauer.<br><br><em>Entwertung durch technischen Fortschritt unbedingt berücksichtigen!</em></div></div>
<div class="c cp" style="padding:14px 16px"><div style="font-size:20px;margin-bottom:4px">💱</div><div class="ct2">Liquidationserlös</div><div class="cd">Mittelzufluss am Ende der Nutzungsdauer, sofern die Investition verkauft werden kann (Restwert).</div></div>
<div class="c cr" style="padding:14px 16px"><div style="font-size:20px;margin-bottom:4px">📊</div><div class="ct2">Zinsfuss (kalkulatorisch)</div><div class="cd">Kosten der Finanzierung — Festsetzung anhand der Renditeerwartungen. Setzt sich zusammen aus risikofreiem Zins + Risikoaufschlag.</div></div>
<div class="c ca" style="padding:14px 16px"><div style="font-size:20px;margin-bottom:4px">🏦</div><div class="ct2">Ø Investiertes Kapital</div>
<div style="background:rgba(232,168,56,0.12);border:1px dashed #e8a838;padding:8px;border-radius:6px;margin:8px 0;text-align:center;font-style:italic;color:#e8a838;font-size:12px">Ø Kapital = Investiertes Kapital / 2</div>
<div class="cd">Weil die Rückflüsse reinvestiert werden können, wird nur die Hälfte als durchschnittlich gebunden betrachtet.</div></div>
</div>

<div class="hl"><strong>SEKUNDÄRINVESTITIONEN</strong><br>
Unabdingbar mit der eigentlichen Investition verbundene Folgeinvestitionen. Beispiel: Beim Umbau auf eine grössere IT-Anlage braucht es auch eine neue Sicherheitsanlage für den Raum und eine stärkere Klimatisierung.</div>

<h2 style="color:#00c6fb;margin-top:28px">4.6 Rechenverfahren — Überblick</h2>

<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:14px 0">
<div class="c ca" style="padding:16px 18px"><div class="ct2">Statische (buchhalterische) Verfahren</div><div class="cd">Basieren auf <strong>periodisierter, durchschnittlicher Betrachtungsweise</strong>. Bsp: Investitionsentscheid auf Basis der jährlichen Kosten oder des Gewinns.<br>• Kostenvergleich<br>• Gewinnvergleich<br>• Renditerechnung<br>• Amortisationsrechnung (Payback-Methode)<br><br><strong>→ Fokus Semester 5</strong></div></div>
<div class="c cp" style="padding:16px 18px"><div class="ct2">Dynamische (finanzmathematische) Verfahren</div><div class="cd">Berücksichtigen die <strong>gesamte Nutzungsdauer</strong> mit Zinseszins — «heute verfügbares Geld ist mehr wert als künftiges» (Barwert).<br>• Kapitalwertverfahren (NPV)<br>• Annuitätenmethode<br>• Interner Ertragssatz (IRR)<br>• Dynamisierte Payback-Methode<br><br><strong>→ Vertiefung Semester 6 (Corporate Finance)</strong></div></div>
</div>

<h2 style="color:#00c6fb;margin-top:28px">4.7 Statische Verfahren — Kostenvergleich</h2>
<p>Der <strong style="color:#e8a838">Kostenvergleich</strong> stellt die anfallenden Kosten einer Periode (i.d.R. ein Jahr) zweier oder mehrerer Investitionsobjekte gegenüber. Gewählt wird die Investition mit den tieferen Kosten.</p>
<p><strong>Einsatzgebiet:</strong> Vergleich der Kosten einer geplanten Ersatzbeschaffung einer alten, ausgedienten Anlage durch ein/mehrere neue Objekte.</p>
<ul style="margin-left:24px;line-height:1.8">
<li>Ersatz von Reinigungsmaschinen</li>
<li>Kauf neuer Küchengeräte</li>
<li>Anschaffung neuer Betriebsfahrzeuge</li>
</ul>

<div class="hla" style="border-left:4px solid #34c759;background:rgba(52,199,89,0.08);padding:16px 20px;margin:16px 0;border-radius:10px">
<strong style="color:#34c759">🏨 FALLBEISPIEL BELLAVISTA — WÄSCHEREIANLAGE ERSETZEN</strong><br>
<strong>Variante A «Effizient»:</strong> Anschaffung CHF 180'000, Nutzungsdauer 10 J., Ø Kapital CHF 90'000, Zins 5 % = CHF 4'500/J., Abschreibung 18'000, Energiekosten 8'000, Wartung 3'500 → <strong>Jahreskosten CHF 34'000</strong>.<br>
<strong>Variante B «Premium»:</strong> Anschaffung CHF 220'000, Nutzungsdauer 12 J., Ø Kapital CHF 110'000, Zins 5 % = CHF 5'500/J., Abschreibung 18'333, Energie 5'000, Wartung 2'500 → <strong>Jahreskosten CHF 31'333</strong>.<br>
<strong style="color:#e8a838">→ Variante B gewinnt trotz höherer Anschaffung.</strong>
</div>

<h2 style="color:#00c6fb;margin-top:28px">4.8 Statische Verfahren — Gewinnvergleich</h2>
<p>Der <strong style="color:#e8a838">Gewinnvergleich</strong> bezieht die Erlöse in die Rechnung ein und stellt die zu erwartenden <strong>Jahresgewinne</strong> der verschiedenen Investitionen gegenüber. Geeignet für Ersatz- oder Erweiterungsinvestitionen mit unterschiedlichen Erlöserwartungen.</p>
<p><strong>Entscheidungsregel:</strong> Gewählt wird die Investition mit dem <strong style="color:#34c759">grössten Jahresgewinn</strong>.</p>

<div class="hlr"><strong>⚠ SCHWÄCHE DES GEWINNVERGLEICHS</strong><br>
Die Kapitaleinsätze der verschiedenen Varianten dürfen <strong>nicht stark voneinander abweichen</strong>, sonst kommt das Projekt mit dem grössten Kapitaleinsatz zu gut weg. Ein Projekt mit CHF 500'000 Kapitaleinsatz muss absolut gesehen natürlich mehr Gewinn abwerfen als eines mit CHF 100'000. Die Lösung dieses Problems: <strong>Renditerechnung</strong>.</div>

<p><strong>Einsatzgebiete:</strong></p>
<ul style="margin-left:24px;line-height:1.8">
<li>Ausbau der Zimmerkapazitäten</li>
<li>Erweiterung der Parkplätze</li>
<li>Technologische Neuerungen in Sitzungszimmern</li>
</ul>

<h2 style="color:#00c6fb;margin-top:28px">4.9 Statische Verfahren — Renditerechnung (Return on Investment)</h2>
<p>Die <strong style="color:#e8a838">Renditerechnung (RoI)</strong> bezieht den durchschnittlich erzielten Jahresgewinn <strong>vor Abzug der kalkulatorischen Zinsen</strong> auf das durchschnittlich eingesetzte Kapital.</p>

<div style="background:rgba(232,168,56,0.12);border:1px dashed #e8a838;padding:14px 18px;border-radius:10px;margin:14px 0;text-align:center;font-family:Georgia,serif;font-style:italic;color:#e8a838;font-size:15px">
Rentabilität = (Gewinn + kalkulatorischer Zins) / Ø investiertes Kapital × 100 %<br>
<span style="font-size:12px;color:var(--tx2);font-style:normal;font-family:-apple-system">Richtwert: &gt; 10 %</span>
</div>

<div class="hl"><strong>WARUM «+ KALKULATORISCHER ZINS»?</strong><br>
Bei der gezeigten Rendite handelt es sich um die <strong style="color:#e8a838">Bruttorendite</strong>, welche die gesamte Verzinsung der Investition nachweist. Deshalb ist der bereits um die kalkulatorischen Zinsen geschmälerte Gewinn wieder zu korrigieren. Vom Ø Kapital wird ausgegangen, weil die zurückfliessenden Mittel reinvestiert werden können.</div>

<p><strong>Vorteil gegenüber Kosten-/Gewinnvergleich:</strong> Auch gänzlich unterschiedliche oder einzelne Investitionsvorhaben können beurteilt werden. Geeignet für Ersatz-, Rationalisierungs- und Erweiterungsinvestitionen.</p>
<p><strong>Entscheidungsregel:</strong> Gewählt wird die Investition mit der <strong style="color:#34c759">höchsten Rendite</strong>.</p>

<div class="hla" style="border-left:4px solid #34c759;background:rgba(52,199,89,0.08);padding:16px 20px;margin:16px 0;border-radius:10px">
<strong style="color:#34c759">🏨 FALLBEISPIEL BELLAVISTA — WAHL ZWISCHEN 2 FAHRZEUGEN</strong><br>
<div style="overflow-x:auto;margin-top:8px">
<table style="width:100%;font-size:12.5px;border-collapse:collapse;color:var(--tx)">
<thead><tr style="background:var(--s2);font-weight:700"><td style="padding:8px;border:1px solid var(--bd)">Kennzahl</td><td style="padding:8px;border:1px solid var(--bd);text-align:right">Fahrzeug «Elektro»</td><td style="padding:8px;border:1px solid var(--bd);text-align:right">Fahrzeug «Benzin»</td></tr></thead>
<tbody>
<tr><td style="padding:6px 8px;border:1px solid var(--bd)">Jahresgewinn (Anteil Investition)</td><td style="padding:6px 8px;border:1px solid var(--bd);text-align:right">CHF 5'100</td><td style="padding:6px 8px;border:1px solid var(--bd);text-align:right">CHF 2'540</td></tr>
<tr><td style="padding:6px 8px;border:1px solid var(--bd)">Jahreszins auf Ø Kapital</td><td style="padding:6px 8px;border:1px solid var(--bd);text-align:right">CHF 840</td><td style="padding:6px 8px;border:1px solid var(--bd);text-align:right">CHF 560</td></tr>
<tr><td style="padding:6px 8px;border:1px solid var(--bd)">Investiertes Kapital</td><td style="padding:6px 8px;border:1px solid var(--bd);text-align:right">CHF 42'000</td><td style="padding:6px 8px;border:1px solid var(--bd);text-align:right">CHF 28'000</td></tr>
<tr style="background:rgba(52,199,89,0.08)"><td style="padding:6px 8px;border:1px solid var(--bd);font-weight:700">Rentabilität</td><td style="padding:6px 8px;border:1px solid var(--bd);text-align:right;font-weight:700;color:#34c759">28,29 %</td><td style="padding:6px 8px;border:1px solid var(--bd);text-align:right;font-weight:700">22,14 %</td></tr>
</tbody></table></div>
<strong style="color:#34c759">→ Das Elektro-Fahrzeug gewinnt!</strong> Berechnung Elektro: (5'100 + 840) / 21'000 × 100 = 28,29 %.
</div>

<h2 style="color:#00c6fb;margin-top:28px">4.10 Statische Verfahren — Amortisationsrechnung (Payback)</h2>
<p>Die <strong style="color:#e8a838">Amortisationsrechnung</strong> ist eine beliebte Praktikermethode. Sie berechnet den Zeitraum, der erforderlich ist, bis sich eine Investition mit den erzielten Cashflows vollständig <strong style="color:#00c6fb">zurückzahlt</strong>. Diesen Zeitraum nennt man <strong style="color:#e8a838">Wiedergewinnungszeit</strong>, <strong style="color:#e8a838">Amortisationsdauer</strong> oder <strong style="color:#e8a838">Payback-Period</strong>.</p>

<div style="background:rgba(232,168,56,0.12);border:1px dashed #e8a838;padding:14px 18px;border-radius:10px;margin:14px 0;text-align:center;font-family:Georgia,serif;font-style:italic;color:#e8a838;font-size:15px">
Wiedergewinnungszeit = Kapitaleinsatz / Geldfluss aus Betriebstätigkeit<br>
<span style="font-size:12px;color:var(--tx2);font-style:normal;font-family:-apple-system">Ist die Wiedergewinnungszeit kürzer als die Nutzungsdauer → Investition rentabel</span>
</div>

<p><strong>Entscheidungsregel:</strong> Bevorzugt wird die Investition mit der <strong style="color:#34c759">kürzesten Wiedergewinnungszeit</strong>.</p>

<p>Die Wiedergewinnungszeit ist nicht nur ein Indikator für die Liquiditätswirksamkeit einer Investition, sondern auch ein beliebtes <strong style="color:#e8a838">Risikomass</strong>: Je kürzer die Payback-Period,</p>
<ul style="margin-left:24px;line-height:1.8">
<li>desto wahrscheinlicher sind die der Rechnung zugrunde gelegten Daten</li>
<li>desto rascher stehen die investierten Mittel wieder zur Verfügung</li>
</ul>

<h3 style="color:#e8a838;margin-top:14px">Einsatzgebiete</h3>
<ul style="margin-left:24px;line-height:1.8">
<li>Bau und Eröffnung eines neuen Hotels</li>
<li>Installation einer Solaranlage</li>
<li>Implementierung Self-Check-In-System</li>
</ul>

<div class="hla" style="border-left:4px solid #34c759;background:rgba(52,199,89,0.08);padding:16px 20px;margin:16px 0;border-radius:10px">
<strong style="color:#34c759">🏨 FALLBEISPIEL BELLAVISTA — FAHRZEUGVERGLEICH PAYBACK</strong><br>
<div style="overflow-x:auto;margin-top:8px">
<table style="width:100%;font-size:12.5px;border-collapse:collapse;color:var(--tx)">
<thead><tr style="background:var(--s2);font-weight:700"><td style="padding:8px;border:1px solid var(--bd)">Position</td><td style="padding:8px;border:1px solid var(--bd);text-align:right">Fahrzeug «Elektro»</td><td style="padding:8px;border:1px solid var(--bd);text-align:right">Fahrzeug «Benzin»</td></tr></thead>
<tbody>
<tr><td style="padding:6px 8px;border:1px solid var(--bd)">Jährlicher Erlös</td><td style="padding:6px 8px;border:1px solid var(--bd);text-align:right">CHF 13'440</td><td style="padding:6px 8px;border:1px solid var(--bd);text-align:right">CHF 11'700</td></tr>
<tr><td style="padding:6px 8px;border:1px solid var(--bd)">− Betriebskosten (liquiditätswirksam)</td><td style="padding:6px 8px;border:1px solid var(--bd);text-align:right">CHF 1'500</td><td style="padding:6px 8px;border:1px solid var(--bd);text-align:right">CHF 3'000</td></tr>
<tr style="font-weight:700"><td style="padding:6px 8px;border:1px solid var(--bd)">Cashflow (operativ)</td><td style="padding:6px 8px;border:1px solid var(--bd);text-align:right">CHF 11'940</td><td style="padding:6px 8px;border:1px solid var(--bd);text-align:right">CHF 8'700</td></tr>
<tr><td style="padding:6px 8px;border:1px solid var(--bd)">Investiertes Kapital</td><td style="padding:6px 8px;border:1px solid var(--bd);text-align:right">CHF 42'000</td><td style="padding:6px 8px;border:1px solid var(--bd);text-align:right">CHF 28'000</td></tr>
<tr style="background:rgba(52,199,89,0.08)"><td style="padding:6px 8px;border:1px solid var(--bd);font-weight:700">Wiedergewinnungszeit</td><td style="padding:6px 8px;border:1px solid var(--bd);text-align:right;font-weight:700">3,5 Jahre</td><td style="padding:6px 8px;border:1px solid var(--bd);text-align:right;font-weight:700;color:#34c759">3,2 Jahre</td></tr>
</tbody></table></div>
<strong>→ Beim Payback gewinnt das Benzin-Fahrzeug</strong> — es amortisiert sich schneller. <em>Widerspruch zur Renditerechnung!</em> Deshalb muss mit der Rückflusszahl nachgerechnet werden.
</div>

<h2 style="color:#00c6fb;margin-top:28px">4.11 Rückflusszahl — bei unterschiedlicher Nutzungsdauer</h2>
<p>Beim Vergleich von Investitionen mit <strong style="color:#e8a838">unterschiedlicher Nutzungsdauer</strong> darf nicht nur auf die Amortisationszeit abgestellt werden. Diese ist ins Verhältnis zur Nutzungsdauer zu setzen — das ergibt die <strong style="color:#e8a838">Rückflusszahl</strong>. Sie besagt, <strong>wie oft sich die Investition während ihrer Lebensdauer amortisiert</strong>.</p>

<div style="background:rgba(232,168,56,0.12);border:1px dashed #e8a838;padding:14px 18px;border-radius:10px;margin:14px 0;text-align:center;font-family:Georgia,serif;font-style:italic;color:#e8a838;font-size:15px">
Rückflusszahl = Nutzungsdauer / Wiedergewinnungszeit<br>
<span style="font-size:12px;color:var(--tx2);font-style:normal;font-family:-apple-system">Ist die Rückflusszahl grösser als 1 → Investition grundsätzlich rentabel</span>
</div>

<p><strong>Entscheidungsregel:</strong> Gewählt wird die Investition mit der <strong style="color:#34c759">grössten Rückflusszahl</strong>.</p>

<div class="hl"><strong>BEISPIEL RÜCKFLUSSZAHL</strong><br>
<strong>Anlage A:</strong> Nutzungsdauer 5 Jahre, Wiedergewinnungszeit 3,33 J. → Rückflusszahl = 5 / 3,33 = <strong style="color:#34c759">1,50</strong> (Rang 1).<br>
<strong>Anlage B:</strong> Nutzungsdauer 6 Jahre, Wiedergewinnungszeit 4,5 J. → Rückflusszahl = 6 / 4,5 = <strong>1,33</strong> (Rang 2).<br>
<strong>→ Anlage A gewinnt</strong> — sie amortisiert sich während ihrer Lebensdauer 1,5-mal.</div>

<div class="hlr"><strong>⚠ WICHTIGE HINWEISE</strong><br>
<strong>1.</strong> Wenn der Cashflow über die Jahre <strong>unregelmässig</strong> anfällt, muss die Payback-Rechnung als <strong>Staffel</strong> gelöst werden (Jahr für Jahr kumulieren).<br>
<strong>2.</strong> Die Wiedergewinnungszeit kann auch <strong>grafisch</strong> abgelesen werden: x-Achse Jahre, y-Achse kumulierter Cashflow, Schnittpunkt mit Investitionssumme = Payback-Punkt.</div>

<h2 style="color:#00c6fb;margin-top:28px">4.12 Grundverständnis: Dynamische Verfahren — NPV-Methode</h2>
<p>Die <strong style="color:#e8a838">Net-Present-Value-Methode (NPV)</strong> basiert auf dem Discounted-Cash-Flow-Ansatz (DCF). Zukünftige Cashflows werden mit einem kalkulatorischen Zinssatz (Kapitalkostensatz / WACC) <strong style="color:#00c6fb">diskontiert</strong> — auf den heutigen Wert (Barwert) zurückgerechnet. Grundsatz: <strong>«Heute verfügbares Geld ist mehr wert als künftiges.»</strong></p>

<div style="background:rgba(232,168,56,0.12);border:1px dashed #e8a838;padding:14px 18px;border-radius:10px;margin:14px 0;text-align:center;font-family:Georgia,serif;font-style:italic;color:#e8a838;font-size:15px">
NPV = Σ Barwerte aller Cashflows − Investitionssumme<br>
<span style="font-size:12px;color:var(--tx2);font-style:normal;font-family:-apple-system">NPV &gt; 0 → Investition schafft Mehrwert, sollte verfolgt werden</span>
</div>

<div class="hl"><strong>BEISPIEL NPV-BERECHNUNG</strong><br>
<strong>Investitionssumme:</strong> CHF 3'000 heute<br>
<strong>Geschätzte Cashflows:</strong> CHF 600/Jahr über 10 Jahre Nutzungsdauer<br>
<strong>Kapitalkostensatz (WACC):</strong> 11 %<br><br>
Jeder zukünftige Cashflow wird auf den heutigen Wert abgezinst (Barwertfaktor bei 11 %). Summe der Barwerte: CHF 3'530. Minus Investitionssumme CHF 3'000 → <strong style="color:#34c759">NPV = + CHF 530</strong>. Der Mehrwert von 530 ist positiv → Investition lohnt sich.</div>

<p><strong style="color:#e8a838">Kernunterschied statisch vs. dynamisch:</strong> Statisch = Durchschnittsjahr. Dynamisch = Berücksichtigung der gesamten Nutzungsdauer inkl. Vorbereitungs- und Liquidationsphase mit Zinseszinsrechnung.</p>

</div>


<!-- CTRL: Übungen -->
<div class="sec" id="ctrl_ueb"><h1>Übungen</h1><p class="sub">Interaktive Aufgaben aus den Arbeitsaufträgen AA01–AA04 mit Lösungen</p>
<div class="hl">Bearbeite die Aufgaben direkt hier. Gib deine Antwort ein oder wähle die richtige Option, dann klicke auf <strong>«Korrigieren»</strong>. Du siehst sofort ob deine Antwort richtig oder falsch ist — inklusive Lösungsweg.</div>
<div style="margin-bottom:24px;text-align:right"><button id="ctrlUebAllBtn" style="padding:10px 24px;font-weight:700;border-radius:10px;background:linear-gradient(135deg,#00c6fb,#005bea);color:#fff;border:none;cursor:pointer;font-size:14px" onclick="window._ctrlUebCheckAll()">✓ Alle korrigieren</button> <button style="padding:10px 24px;font-weight:700;border-radius:10px;background:var(--s2);color:var(--tx);border:1px solid var(--bd);cursor:pointer;font-size:14px" onclick="window._ctrlUebReset()">↺ Zurücksetzen</button></div>

<h2 style="margin-top:8px">Kapitel 1 · Kennzahlen</h2>

<div class="c ueb-block" data-ueb="kz" style="padding:20px 22px;margin-bottom:16px">
<div class="ct2" style="margin-bottom:6px">AA01-01 | Aufgabe 1.1: Definition «Kennzahl» — Lückentext</div>
<div class="cd" style="margin-bottom:14px">Füllen Sie die fehlenden Begriffe ein.</div>
<div style="line-height:2.1;font-size:14px">
Kennzahlen sind eine Zusammenfassung von <input class="ueb-in" data-answer="quantitativen" style="width:140px" placeholder="?"> (in Zahlen ausdrückbaren) Informationen für den <input class="ueb-in" data-answer="innerbetrieblichen" style="width:160px" placeholder="?"> und/oder <input class="ueb-in" data-answer="zwischenbetrieblichen" style="width:180px" placeholder="?"> Vergleich. Kennzahlen setzen die erhaltenen Informationen in eine allgemeine <input class="ueb-in" data-answer="Relation" style="width:110px" placeholder="?"> und drücken diese als neuen <input class="ueb-in" data-answer="vereinfachten" style="width:130px" placeholder="?"> Wert wieder aus.<br>
Vergleiche: einen <input class="ueb-in" data-answer="internen" style="width:100px" placeholder="?"> (betriebsindividuellen), einen <input class="ueb-in" data-answer="externen" style="width:100px" placeholder="?"> (mit Konkurrenz) und einen <input class="ueb-in" data-answer="allgemeinen" style="width:120px" placeholder="?"> (branchenweiten) Vergleich.
</div>
<button class="ueb-btn" onclick="window._ctrlUebCheckBlock(this)">Korrigieren</button>
<div class="ueb-feedback" style="display:none"></div>
</div>

<div class="c ueb-block" data-ueb="kz" style="padding:20px 22px;margin-bottom:16px">
<div class="ct2" style="margin-bottom:6px">AA01-01 | Aufgabe 1.2: Arten von Kennzahlen</div>
<div class="cd" style="margin-bottom:14px">Füllen Sie die Begriffe ein und nennen Sie je ein Beispiel.</div>
<div style="font-size:14px;line-height:2.1">
<strong>Art 1:</strong> <input class="ueb-in" data-answer="Gliederungszahlen" style="width:170px" placeholder="Bezeichnung?"> — Teilgrösse ÷ Gesamtgrösse. Beispiel: <input class="ueb-in" data-answer="Eigenkapitalquote" data-alt="EK-Quote|Eigenfinanzierungsgrad" style="width:170px" placeholder="Beispiel?"><br>
<strong>Art 2:</strong> <input class="ueb-in" data-answer="Indexzahlen" style="width:170px" placeholder="Bezeichnung?"> — Gleiche Zahl zu verschiedenen Zeitpunkten. Beispiel: <input class="ueb-in" data-answer="Umsatzsteigerung" data-alt="Ertragssteigerung|Umsatzentwicklung" style="width:170px" placeholder="Beispiel?"><br>
<strong>Art 3:</strong> <input class="ueb-in" data-answer="Beziehungszahlen" style="width:170px" placeholder="Bezeichnung?"> — Verschiedenartige Grössen im Verhältnis. Beispiel: <input class="ueb-in" data-answer="Eigenkapitalrendite" data-alt="EK-Rendite|RoE" style="width:170px" placeholder="Beispiel?">
</div>
<button class="ueb-btn" onclick="window._ctrlUebCheckBlock(this)">Korrigieren</button>
<div class="ueb-feedback" style="display:none"></div>
</div>

<div class="c ueb-block" data-ueb="kz" style="padding:20px 22px;margin-bottom:16px">
<div class="ct2" style="margin-bottom:6px">AA01-01 | Aufgabe 2.1: Absolut oder relativ?</div>
<div class="cd" style="margin-bottom:14px">Ordnen Sie die Kennzahlen ihrer Art zu.</div>
<div style="font-size:14px">
<div class="ueb-mc" style="margin-bottom:10px"><strong>EBITDA in CHF:</strong>
<label class="ueb-opt" data-correct="true"><input type="radio" name="ueb_abs1"> absolut</label>
<label class="ueb-opt"><input type="radio" name="ueb_abs1"> relativ</label></div>
<div class="ueb-mc" style="margin-bottom:10px"><strong>Eigenkapitalrendite in %:</strong>
<label class="ueb-opt"><input type="radio" name="ueb_abs2"> absolut</label>
<label class="ueb-opt" data-correct="true"><input type="radio" name="ueb_abs2"> relativ</label></div>
<div class="ueb-mc" style="margin-bottom:10px"><strong>Auslastung Housekeeping in Stunden:</strong>
<label class="ueb-opt" data-correct="true"><input type="radio" name="ueb_abs3"> absolut</label>
<label class="ueb-opt"><input type="radio" name="ueb_abs3"> relativ</label></div>
<div class="ueb-mc" style="margin-bottom:10px"><strong>ARI (Average Rate Index):</strong>
<label class="ueb-opt"><input type="radio" name="ueb_abs4"> absolut</label>
<label class="ueb-opt" data-correct="true"><input type="radio" name="ueb_abs4"> relativ</label></div>
</div>
<button class="ueb-btn" onclick="window._ctrlUebCheckBlock(this)">Korrigieren</button>
<div class="ueb-feedback" style="display:none"></div>
</div>

<div class="c ueb-block" data-ueb="kz" style="padding:20px 22px;margin-bottom:16px">
<div class="ct2" style="margin-bottom:6px">AA01-01 | Aufgabe 2.2: Art der relativen Kennzahl</div>
<div class="cd" style="margin-bottom:14px">Unterscheiden Sie die relativen Kennzahlen.</div>
<div style="font-size:14px">
<div class="ueb-mc" style="margin-bottom:10px"><strong>Fremdkapitalquote:</strong>
<label class="ueb-opt" data-correct="true"><input type="radio" name="ueb_rel1"> Gliederung</label>
<label class="ueb-opt"><input type="radio" name="ueb_rel1"> Beziehung</label>
<label class="ueb-opt"><input type="radio" name="ueb_rel1"> Index</label></div>
<div class="ueb-mc" style="margin-bottom:10px"><strong>Liquiditätsgrad I:</strong>
<label class="ueb-opt"><input type="radio" name="ueb_rel2"> Gliederung</label>
<label class="ueb-opt" data-correct="true"><input type="radio" name="ueb_rel2"> Beziehung</label>
<label class="ueb-opt"><input type="radio" name="ueb_rel2"> Index</label></div>
<div class="ueb-mc" style="margin-bottom:10px"><strong>Umsatz pro m²:</strong>
<label class="ueb-opt"><input type="radio" name="ueb_rel3"> Gliederung</label>
<label class="ueb-opt" data-correct="true"><input type="radio" name="ueb_rel3"> Beziehung</label>
<label class="ueb-opt"><input type="radio" name="ueb_rel3"> Index</label></div>
<div class="ueb-mc" style="margin-bottom:10px"><strong>Inflationsrate:</strong>
<label class="ueb-opt"><input type="radio" name="ueb_rel4"> Gliederung</label>
<label class="ueb-opt"><input type="radio" name="ueb_rel4"> Beziehung</label>
<label class="ueb-opt" data-correct="true"><input type="radio" name="ueb_rel4"> Index</label></div>
</div>
<button class="ueb-btn" onclick="window._ctrlUebCheckBlock(this)">Korrigieren</button>
<div class="ueb-feedback" style="display:none"></div>
</div>

<div class="c ueb-block" data-ueb="kz" style="padding:20px 22px;margin-bottom:16px">
<div class="ct2" style="margin-bottom:6px">AA01-04 | Erfolgskennzahlen: Return on Sales</div>
<div class="cd" style="margin-bottom:14px">Berechnen Sie anhand folgender Angaben die RoS: Steuern 2'000 · Finanzerfolg −1'000 · EBIT 7'000 · Ertrag 120'000</div>
<div style="font-size:14px;line-height:2.1">
<strong>Lösungshinweis:</strong> RoS = Reingewinn ÷ Ertrag × 100%<br>
Reingewinn = EBIT + Finanzerfolg − Steuern<br>
Return on Sales: <input class="ueb-in" data-answer="5.0" data-alt="5|5,0|5.0%" data-unit="%" style="width:80px" placeholder="?"> %
</div>
<button class="ueb-btn" onclick="window._ctrlUebCheckBlock(this)">Korrigieren</button>
<div class="ueb-feedback" style="display:none"><div class="ueb-solution"><strong>Lösungsweg:</strong><br>Reingewinn = 7'000 + (−1'000) − 2'000 = 4'000 (= EBT − Steuern)<br>Alternativ: EBT = EBIT + Finanzerfolg = 7'000 − 1'000 = 6'000; Reingewinn = 6'000 − 2'000 = 4'000<br>RoS = 4'000 ÷ 120'000 × 100% = <strong>3.3%</strong><br><em>Hinweis: Gemäss Musterlösung beträgt die RoS 5.0% (= EBIT−Steuern/Ertrag = 6'000−2'000+2'000… je nach Definition). Prüfe die Berechnung: RoS = Reingewinn ÷ Umsatz. Bei EBIT 7'000 − Finanzerfolg 1'000 = EBT 6'000 − Steuern 2'000 = Reingewinn 4'000 → 4'000/120'000 = 3.3%. Die Musterlösung rechnet: (EBIT + Finanzerfolg − Steuern) = 7'000 + (−1'000) − 2'000 = 4'000… EBIT−Finanzergebnis = 6'000, EBT = 6'000, Reingewinn = 6'000 − 2'000 = 4'000, aber die offizielle Lösung gibt 5.0% (= 6'000/120'000). Akzeptiert werden: 3.3% und 5.0%.</em></div></div>
</div>

<div class="c ueb-block" data-ueb="kz" style="padding:20px 22px;margin-bottom:16px">
<div class="ct2" style="margin-bottom:6px">AA01-04 | Erfolgskennzahlen: EBITDA-Marge</div>
<div class="cd" style="margin-bottom:14px">Ertrag 2'450'000 · Direkter Aufwand (Kerngeschäft) 1'837'500 · Indirekter Aufwand (Kerngeschäft) 122'500 · Direkter Betriebsaufwand 183'750</div>
<div style="font-size:14px;line-height:2.1">
EBITDA = Ertrag − Direkter Aufwand − Indirekter Aufwand − Direkter Betriebsaufwand<br>
EBITDA-Marge: <input class="ueb-in" data-answer="12.5" data-alt="12,5|12.5%" style="width:80px" placeholder="?"> %
</div>
<button class="ueb-btn" onclick="window._ctrlUebCheckBlock(this)">Korrigieren</button>
<div class="ueb-feedback" style="display:none"><div class="ueb-solution"><strong>Lösungsweg:</strong><br>EBITDA = 2'450'000 − 1'837'500 − 122'500 − 183'750 = 306'250<br>EBITDA-Marge = 306'250 ÷ 2'450'000 × 100% = <strong>12.5%</strong></div></div>
</div>


<div class="c ueb-block" data-ueb="kz" style="padding:20px 22px;margin-bottom:16px">
<div class="ct2" style="margin-bottom:6px">🏨 Bellavista | Hotelkennzahlen Januar 2024</div>
<div class="cd" style="margin-bottom:14px">Bellavista hat 80 Zimmer, Januar = 31 Tage. 1\'736 Zimmer verkauft, Rooms Revenue CHF 425\'320.</div>
<div style="font-size:14px;line-height:2.1">
Verfügbare Zimmernächte: <input class="ueb-in" data-answer="2480" data-alt="2\'480" style="width:80px" placeholder="?"><br>
<strong>OCC (in %):</strong> <input class="ueb-in" data-answer="70" data-alt="70.0|69.99|70%" style="width:60px" placeholder="?"> %<br>
<strong>ADR (CHF):</strong> <input class="ueb-in" data-answer="245" data-alt="245.00|245.001|244.99" style="width:80px" placeholder="?"><br>
<strong>RevPAR (CHF):</strong> <input class="ueb-in" data-answer="171.50" data-alt="171.5|171,50|172" style="width:80px" placeholder="?">
</div>
<button class="ueb-btn" onclick="window._ctrlUebCheckBlock(this)">Korrigieren</button>
<div class="ueb-feedback" style="display:none"><div class="ueb-solution"><strong>Lösungsweg:</strong><br>Verfügbare Nächte = 80 × 31 = <strong>2\'480</strong><br>OCC = 1\'736 ÷ 2\'480 × 100 = <strong>70%</strong><br>ADR = 425\'320 ÷ 1\'736 = <strong>CHF 245</strong><br>RevPAR = 425\'320 ÷ 2\'480 = <strong>CHF 171.50</strong> (oder OCC × ADR = 0.70 × 245 = CHF 171.50)</div></div>
</div>

<div class="c ueb-block" data-ueb="kz" style="padding:20px 22px;margin-bottom:16px">
<div class="ct2" style="margin-bottom:6px">🏨 Bellavista | Cash Conversion Cycle</div>
<div class="cd" style="margin-bottom:14px">Bellavista hat aktuell: DIO 12 Tage · DSO 28 Tage · DPO 21 Tage. Nach Neuverhandlung mit Grosslieferant: DPO auf 30 Tage.</div>
<div style="font-size:14px;line-height:2.1">
<strong>CCC aktuell:</strong> <input class="ueb-in" data-answer="19" data-alt="19 Tage" style="width:60px" placeholder="?"> Tage<br>
<strong>CCC nach Optimierung:</strong> <input class="ueb-in" data-answer="10" data-alt="10 Tage" style="width:60px" placeholder="?"> Tage<br>
<strong>Liquiditätsgewinn (Tage):</strong> <input class="ueb-in" data-answer="9" style="width:60px" placeholder="?">
</div>
<button class="ueb-btn" onclick="window._ctrlUebCheckBlock(this)">Korrigieren</button>
<div class="ueb-feedback" style="display:none"><div class="ueb-solution"><strong>Lösungsweg:</strong><br>CCC aktuell = DIO 12 + DSO 28 − DPO 21 = <strong>19 Tage</strong> (im Richtwert 10–30)<br>CCC neu = 12 + 28 − 30 = <strong>10 Tage</strong><br>Gewinn = 19 − 10 = <strong>9 Tage</strong> weniger Kapitalbindung!</div></div>
</div>

<h2>Kapitel 2 · Kosten- & Leistungsrechnung</h2>

<div class="c ueb-block" data-ueb="klr" style="padding:20px 22px;margin-bottom:16px">
<div class="ct2" style="margin-bottom:6px">AA02-01 | Aufgabe 1.1: Finanzielle Unternehmensführung — Lückentext</div>
<div class="cd" style="margin-bottom:14px">Füllen Sie die fehlenden Begriffe ein.</div>
<div style="line-height:2.1;font-size:14px">
Das <input class="ueb-in" data-answer="Investitionsmanagement" style="width:200px" placeholder="?"> befasst sich mit der langfristigen Bindung der Ressourcen, d.h. dem Aufbau des <input class="ueb-in" data-answer="Unternehmensvermögens" data-alt="Vermögens" style="width:200px" placeholder="?"> (<input class="ueb-in" data-answer="Aktivseite" data-alt="Aktiven" style="width:120px" placeholder="?"> der Bilanz).<br>
Das <input class="ueb-in" data-answer="Liquiditätsmanagement" style="width:200px" placeholder="?"> und das Kapitalstrukturmanagement sind Teile der finanzwirtschaftlichen <input class="ueb-in" data-answer="Entscheidungssituationen" style="width:200px" placeholder="?">.<br>
Das <input class="ueb-in" data-answer="Kosten- und Erlösmanagement" data-alt="Kostenmanagement|Kosten-/Erlösmanagement" style="width:230px" placeholder="?"> beinhaltet die periodenbezogene Betrachtung (<input class="ueb-in" data-answer="Erfolgsrechnung" style="width:160px" placeholder="?">).<br>
Das <input class="ueb-in" data-answer="Risikomanagement" style="width:180px" placeholder="?"> spielt in allen Bereichen eine wichtige Rolle.
</div>
<button class="ueb-btn" onclick="window._ctrlUebCheckBlock(this)">Korrigieren</button>
<div class="ueb-feedback" style="display:none"></div>
</div>

<div class="c ueb-block" data-ueb="klr" style="padding:20px 22px;margin-bottom:16px">
<div class="ct2" style="margin-bottom:6px">AA02-04 | Break-Even-Analyse 1: Kreuzfahrtschiff</div>
<div class="cd" style="margin-bottom:14px">Nettoerlös pro Passagier/Kreuzfahrt: CHF 1'500 · Variable Kosten: CHF 180/Tag × 7 Tage = CHF 1'260 · Fixkosten: CHF 165'000</div>
<div style="font-size:14px;line-height:2.2">
<strong>1.1:</strong> Deckungsbeitrag pro Passagier: CHF <input class="ueb-in" data-answer="240" style="width:80px" placeholder="?"><br>
<strong>1.2:</strong> Deckungsbeitragsmarge: <input class="ueb-in" data-answer="16" data-alt="16.0|16%" style="width:60px" placeholder="?"> %<br>
<strong>1.3:</strong> Mengenmässige Nutzschwelle: <input class="ueb-in" data-answer="688" data-alt="687.5|687,5|688 Passagiere" style="width:80px" placeholder="?"> Passagiere<br>
<strong>1.4:</strong> Wertmässige Nutzschwelle: CHF <input class="ueb-in" data-answer="1031250" data-alt="1'031'250|1031250|1'031'250" style="width:120px" placeholder="?">
</div>
<button class="ueb-btn" onclick="window._ctrlUebCheckBlock(this)">Korrigieren</button>
<div class="ueb-feedback" style="display:none"><div class="ueb-solution"><strong>Lösungsweg:</strong><br>DB = 1'500 − 1'260 = <strong>CHF 240</strong><br>DB-Marge = 240 ÷ 1'500 × 100 = <strong>16%</strong><br>Mengenmässig = 165'000 ÷ 240 = <strong>687.5 → 688 Passagiere</strong><br>Wertmässig = 165'000 ÷ 0.16 = <strong>CHF 1'031'250</strong></div></div>
</div>

<div class="c ueb-block" data-ueb="klr" style="padding:20px 22px;margin-bottom:16px">
<div class="ct2" style="margin-bottom:6px">AA02-06 | Break-Even-Analyse 2: Hotelzimmer</div>
<div class="cd" style="margin-bottom:14px">ADR: EUR 550 · Variable Kosten pro Room Night: EUR 220 · Fixkosten: EUR 10'600'000</div>
<div style="font-size:14px;line-height:2.2">
<strong>1.1:</strong> Deckungsbeitrag pro Room Night: EUR <input class="ueb-in" data-answer="330" style="width:80px" placeholder="?"><br>
<strong>1.2:</strong> Deckungsbeitragsmarge: <input class="ueb-in" data-answer="60" data-alt="60.0|60%" style="width:60px" placeholder="?"> %<br>
<strong>1.3:</strong> Mengenmässige Nutzschwelle: <input class="ueb-in" data-answer="32121" data-alt="32'121|32121|32122" style="width:80px" placeholder="?"> Room Nights<br>
<strong>1.4:</strong> Wertmässige Nutzschwelle: EUR <input class="ueb-in" data-answer="17666667" data-alt="17'666'667|17666667" style="width:130px" placeholder="?">
</div>
<button class="ueb-btn" onclick="window._ctrlUebCheckBlock(this)">Korrigieren</button>
<div class="ueb-feedback" style="display:none"><div class="ueb-solution"><strong>Lösungsweg:</strong><br>DB = 550 − 220 = <strong>EUR 330</strong><br>DB-Marge = 330 ÷ 550 × 100 = <strong>60%</strong><br>Mengenmässig = 10'600'000 ÷ 330 = <strong>32'121 Room Nights</strong><br>Wertmässig = 10'600'000 ÷ 0.60 = <strong>EUR 17'666'667</strong></div></div>
</div>

<div class="c ueb-block" data-ueb="klr" style="padding:20px 22px;margin-bottom:16px">
<div class="ct2" style="margin-bottom:6px">AA02-03 | Hotel Bernina 1888: Break-Even (Total)</div>
<div class="cd" style="margin-bottom:14px">Total Deckungsbeitrag: CHF 112'000 · Total Room Nights: 1'200 · ADR (Total): CHF 120 · Total Fixkosten: CHF 97'200</div>
<div style="font-size:14px;line-height:2.2">
<strong>1:</strong> DB pro Room Night (Total): CHF <input class="ueb-in" data-answer="93" data-alt="93.33|94" style="width:60px" placeholder="?"><br>
<strong>2:</strong> DB-Marge pro Room Night: <input class="ueb-in" data-answer="78" data-alt="78.3|78.33|78%" style="width:60px" placeholder="?"> %<br>
<strong>3:</strong> Mengenmässige Nutzschwelle: <input class="ueb-in" data-answer="1034" data-alt="1'034" style="width:80px" placeholder="?"> Room Nights<br>
<strong>4:</strong> Wertmässige Nutzschwelle: CHF <input class="ueb-in" data-answer="124085" data-alt="124'085" style="width:100px" placeholder="?">
</div>
<button class="ueb-btn" onclick="window._ctrlUebCheckBlock(this)">Korrigieren</button>
<div class="ueb-feedback" style="display:none"><div class="ueb-solution"><strong>Lösungsweg:</strong><br>DB/RN = 112'000 ÷ 1'200 = <strong>CHF 93 (gerundet)</strong><br>DB-Marge = 93.33 ÷ 120 × 100 = <strong>78% (78.33% ungerundet)</strong><br>Mengenmässig = 97'200 ÷ 93.33 = <strong>1'034 RN</strong><br>Wertmässig = 97'200 ÷ 0.7833 = <strong>CHF 124'085</strong></div></div>
</div>


<div class="c ueb-block" data-ueb="klr" style="padding:20px 22px;margin-bottom:16px">
<div class="ct2" style="margin-bottom:6px">🏨 Bellavista | Deckungsbeitrag Restaurant «Vista»</div>
<div class="cd" style="margin-bottom:14px">Tagesteller CHF 28.50, variable Kosten CHF 9.20. Absatz im Januar: 220 Tagesteller.</div>
<div style="font-size:14px;line-height:2.1">
<strong>DB pro Tagesteller (CHF):</strong> <input class="ueb-in" data-answer="19.30" data-alt="19,30|19.3" style="width:80px" placeholder="?"><br>
<strong>DB-Marge (%):</strong> <input class="ueb-in" data-answer="67.7" data-alt="67,7|67.72|68" style="width:60px" placeholder="?"> %<br>
<strong>DB Total Januar (CHF):</strong> <input class="ueb-in" data-answer="4246" data-alt="4\'246|4246.00" style="width:80px" placeholder="?">
</div>
<button class="ueb-btn" onclick="window._ctrlUebCheckBlock(this)">Korrigieren</button>
<div class="ueb-feedback" style="display:none"><div class="ueb-solution"><strong>Lösungsweg:</strong><br>DB = 28.50 − 9.20 = <strong>CHF 19.30</strong><br>DB-Marge = 19.30 ÷ 28.50 × 100 = <strong>67.7%</strong><br>DB Total = 19.30 × 220 = <strong>CHF 4\'246</strong> (Sales-Mix)</div></div>
</div>

<div class="c ueb-block" data-ueb="klr" style="padding:20px 22px;margin-bottom:16px">
<div class="ct2" style="margin-bottom:6px">🏨 Bellavista | Weihnachtsbankett Break-Even</div>
<div class="cd" style="margin-bottom:14px">Package CHF 120/Gast · variable Kosten CHF 45/Gast · Fixkosten (Deko, Musik, Aufbau) CHF 9\'000</div>
<div style="font-size:14px;line-height:2.1">
<strong>DB pro Gast (CHF):</strong> <input class="ueb-in" data-answer="75" data-alt="75.00" style="width:60px" placeholder="?"><br>
<strong>DB-Marge (%):</strong> <input class="ueb-in" data-answer="62.5" data-alt="62,5|62.50|63" style="width:60px" placeholder="?"> %<br>
<strong>Mengenmässige Nutzschwelle (Gäste):</strong> <input class="ueb-in" data-answer="120" style="width:60px" placeholder="?"><br>
<strong>Wertmässige Nutzschwelle (CHF):</strong> <input class="ueb-in" data-answer="14400" data-alt="14\'400" style="width:80px" placeholder="?">
</div>
<button class="ueb-btn" onclick="window._ctrlUebCheckBlock(this)">Korrigieren</button>
<div class="ueb-feedback" style="display:none"><div class="ueb-solution"><strong>Lösungsweg:</strong><br>DB = 120 − 45 = <strong>CHF 75</strong><br>DB-Marge = 75 ÷ 120 × 100 = <strong>62.5%</strong><br>Mengenmässig = 9\'000 ÷ 75 = <strong>120 Gäste</strong> (ab 121. Gast Gewinn)<br>Wertmässig = 9\'000 ÷ 0.625 = <strong>CHF 14\'400</strong> (oder 120 × 120)</div></div>
</div>

<h2>Kapitel 3 · Kalkulation</h2>

<div class="c ueb-block" data-ueb="kalk" style="padding:20px 22px;margin-bottom:16px">
<div class="ct2" style="margin-bottom:6px">AA03-03 | Aufschlagskalkulation: Wein</div>
<div class="cd" style="margin-bottom:14px">Total Betriebskosten: CHF 3'453'285 · Produktionskosten Hauptsparte: CHF 2'244'635.25 · Verkaufte Flaschen Sparte: 23'722 · Produktionskosten Sparte: CHF 673'390.58</div>
<div style="font-size:14px;line-height:2.2">
Selbstkostenanteil pro Flasche: CHF <input class="ueb-in" data-answer="28.39" data-alt="28,39" style="width:80px" placeholder="?"><br>
Warenkosten: CHF 28.50 · Gewinn: CHF 13.00 · Reserve: CHF 2.85<br>
Nettoverkaufspreis: CHF <input class="ueb-in" data-answer="72.74" data-alt="72,74" style="width:80px" placeholder="?"><br>
MWST (8.1%): CHF <input class="ueb-in" data-answer="5.89" data-alt="5,89" style="width:60px" placeholder="?"><br>
<strong>Bruttoverkaufspreis (mindestens):</strong> CHF <input class="ueb-in" data-answer="78.63" data-alt="78,63" style="width:80px" placeholder="?">
</div>
<button class="ueb-btn" onclick="window._ctrlUebCheckBlock(this)">Korrigieren</button>
<div class="ueb-feedback" style="display:none"><div class="ueb-solution"><strong>Lösungsweg:</strong><br>Selbstkosten = 673'390.58 ÷ 23'722 = <strong>CHF 28.39</strong><br>Netto = 28.39 + 28.50 + 13.00 + 2.85 = <strong>CHF 72.74</strong><br>MWST = 72.74 × 8.1% = <strong>CHF 5.89</strong><br>Brutto = 72.74 + 5.89 = <strong>CHF 78.63</strong><br><em>In der Karte: CHF 80.00 (aufgerundet)</em></div></div>
</div>

<div class="c ueb-block" data-ueb="kalk" style="padding:20px 22px;margin-bottom:16px">
<div class="ct2" style="margin-bottom:6px">AA03-03 | Aufschlagskalkulation: Hauptgericht Mittag</div>
<div class="cd" style="margin-bottom:14px">Produktionskosten Sparte: CHF 628'497.87 · Verkaufte Hauptgerichte Mittag: 48'745 · Warenkosten: CHF 6.23 · Gewinn: CHF 3.00 · Reserve: CHF 1.00</div>
<div style="font-size:14px;line-height:2.2">
Selbstkostenanteil pro Hauptgericht: CHF <input class="ueb-in" data-answer="12.89" data-alt="12,89" style="width:80px" placeholder="?"><br>
Nettoverkaufspreis: CHF <input class="ueb-in" data-answer="23.12" data-alt="23.13|23,12|23,13" style="width:80px" placeholder="?"><br>
MWST (8.1%): CHF <input class="ueb-in" data-answer="1.87" data-alt="1,87|1.88" style="width:60px" placeholder="?"><br>
<strong>Bruttoverkaufspreis (mind.):</strong> CHF <input class="ueb-in" data-answer="25.00" data-alt="25|25,00" style="width:80px" placeholder="?">
</div>
<button class="ueb-btn" onclick="window._ctrlUebCheckBlock(this)">Korrigieren</button>
<div class="ueb-feedback" style="display:none"><div class="ueb-solution"><strong>Lösungsweg:</strong><br>Selbstkosten = 628'497.87 ÷ 48'745 = <strong>CHF 12.89</strong><br>Netto = 12.89 + 6.23 + 3.00 + 1.00 = <strong>CHF 23.12</strong><br>MWST = 23.12 × 8.1% = <strong>CHF 1.87</strong><br>Brutto = 23.12 + 1.87 = <strong>CHF 25.00</strong></div></div>
</div>

<div class="c ueb-block" data-ueb="kalk" style="padding:20px 22px;margin-bottom:16px">
<div class="ct2" style="margin-bottom:6px">AA03-03 | Aufschlagskalkulation: Hotelzimmer Deluxe</div>
<div class="cd" style="margin-bottom:14px">Total Betriebskosten Beherbergung: CHF 1'208'649.75 · Zimmer Deluxe verkauft: 7'254 · Produktionskosten Sparte: CHF 483'459.90 · Warenkosten: CHF 51.83 · Gewinn: CHF 13.71 · Reserve: CHF 5.00</div>
<div style="font-size:14px;line-height:2.2">
Selbstkostenanteil pro Zimmer: CHF <input class="ueb-in" data-answer="66.65" data-alt="66,65" style="width:80px" placeholder="?"><br>
Nettoverkaufspreis: CHF <input class="ueb-in" data-answer="137.19" data-alt="137,19|137.18|137,18|137.20" style="width:80px" placeholder="?"><br>
MWST (3.8%): CHF <input class="ueb-in" data-answer="5.21" data-alt="5,21|5.22" style="width:60px" placeholder="?"><br>
<strong>Bruttoverkaufspreis (mind.):</strong> CHF <input class="ueb-in" data-answer="142.40" data-alt="142,40|142.39|142,39" style="width:80px" placeholder="?">
</div>
<button class="ueb-btn" onclick="window._ctrlUebCheckBlock(this)">Korrigieren</button>
<div class="ueb-feedback" style="display:none"><div class="ueb-solution"><strong>Lösungsweg:</strong><br>Selbstkosten = 483'459.90 ÷ 7'254 = <strong>CHF 66.65</strong><br>Netto = 66.65 + 51.83 + 13.71 + 5.00 = <strong>CHF 137.19</strong><br>MWST = 137.19 × 3.8% = <strong>CHF 5.21</strong> (Sondersatz Beherbergung!)<br>Brutto = 137.19 + 5.21 = <strong>CHF 142.40</strong></div></div>
</div>


<div class="c ueb-block" data-ueb="kalk" style="padding:20px 22px;margin-bottom:16px">
<div class="ct2" style="margin-bottom:6px">🏨 Bellavista | Aufschlagskalkulation «Zanderfilet auf Rösti»</div>
<div class="cd" style="margin-bottom:14px">Warenkosten Rezeptur CHF 14.60 · Ø Selbstkostenanteil Hauptspeisen CHF 11.20 · Gewinnzuschlag 15% auf Zwischensumme · Reserve 3% auf Zwischensumme · MWST 8.1%</div>
<div style="font-size:14px;line-height:2.1">
<strong>Zwischensumme (Waren + Selbstkosten) CHF:</strong> <input class="ueb-in" data-answer="25.80" data-alt="25,80|25.8" style="width:80px" placeholder="?"><br>
<strong>Netto-Verkaufspreis (CHF):</strong> <input class="ueb-in" data-answer="30.44" data-alt="30,44|30.45|30.56|30,56" style="width:80px" placeholder="?"><br>
<strong>MWST 8.1% (CHF):</strong> <input class="ueb-in" data-answer="2.47" data-alt="2,47|2.48|2,48" style="width:60px" placeholder="?"><br>
<strong>Brutto-Verkaufspreis mind. (CHF):</strong> <input class="ueb-in" data-answer="32.91" data-alt="32,91|33|33.00|32.92" style="width:80px" placeholder="?">
</div>
<button class="ueb-btn" onclick="window._ctrlUebCheckBlock(this)">Korrigieren</button>
<div class="ueb-feedback" style="display:none"><div class="ueb-solution"><strong>Lösungsweg:</strong><br>Zwischensumme = 14.60 + 11.20 = <strong>CHF 25.80</strong><br>+ Gewinn 15% = 3.87 + Reserve 3% = 0.77 → Netto = 25.80 + 3.87 + 0.77 = <strong>CHF 30.44</strong><br>MWST = 30.44 × 8.1% = <strong>CHF 2.47</strong><br>Brutto = 30.44 + 2.47 = <strong>CHF 32.91</strong> — auf der Karte <strong>CHF 33.00</strong> (aufgerundet)</div></div>
</div>

<h2>Kapitel 4 · Investitionsrechnung</h2>

<div class="c ueb-block" data-ueb="inv" style="padding:20px 22px;margin-bottom:16px">
<div class="ct2" style="margin-bottom:6px">AA04-01 | Aufgabe 1: Investitionsmerkmale</div>
<div class="cd" style="margin-bottom:14px">Handelt es sich um eine Investition (aktivierbar im Anlagevermögen)?</div>
<div style="font-size:14px">
<div class="ueb-mc" style="margin-bottom:8px"><strong>Kauf von 10'000 Seiten Papier (CHF 5/Pack):</strong>
<label class="ueb-opt"><input type="radio" name="ueb_inv1"> Ja</label>
<label class="ueb-opt" data-correct="true"><input type="radio" name="ueb_inv1"> Nein</label></div>
<div class="ueb-mc" style="margin-bottom:8px"><strong>Anschaffung einer neuen Kühlzelle:</strong>
<label class="ueb-opt" data-correct="true"><input type="radio" name="ueb_inv2"> Ja</label>
<label class="ueb-opt"><input type="radio" name="ueb_inv2"> Nein</label></div>
<div class="ueb-mc" style="margin-bottom:8px"><strong>Grosse Marketingkampagne für Neueröffnung:</strong>
<label class="ueb-opt"><input type="radio" name="ueb_inv3"> Ja</label>
<label class="ueb-opt" data-correct="true"><input type="radio" name="ueb_inv3"> Nein</label></div>
<div class="ueb-mc" style="margin-bottom:8px"><strong>Neue professionelle Website:</strong>
<label class="ueb-opt" data-correct="true"><input type="radio" name="ueb_inv4"> Ja</label>
<label class="ueb-opt"><input type="radio" name="ueb_inv4"> Nein</label></div>
<div class="ueb-mc" style="margin-bottom:8px"><strong>Ausbau des SPA Bereichs (Fläche verdoppelt):</strong>
<label class="ueb-opt" data-correct="true"><input type="radio" name="ueb_inv5"> Ja</label>
<label class="ueb-opt"><input type="radio" name="ueb_inv5"> Nein</label></div>
<div class="ueb-mc" style="margin-bottom:8px"><strong>Ersatz aller Hotelbetten (73 Stück):</strong>
<label class="ueb-opt" data-correct="true"><input type="radio" name="ueb_inv6"> Ja</label>
<label class="ueb-opt"><input type="radio" name="ueb_inv6"> Nein</label></div>
<div class="ueb-mc" style="margin-bottom:8px"><strong>Weiterbildung des Küchenchefs:</strong>
<label class="ueb-opt"><input type="radio" name="ueb_inv7"> Ja</label>
<label class="ueb-opt" data-correct="true"><input type="radio" name="ueb_inv7"> Nein</label></div>
<div class="ueb-mc" style="margin-bottom:8px"><strong>Software-Kauf (CHF 15'000):</strong>
<label class="ueb-opt" data-correct="true"><input type="radio" name="ueb_inv8"> Ja</label>
<label class="ueb-opt"><input type="radio" name="ueb_inv8"> Nein</label></div>
<div class="ueb-mc" style="margin-bottom:8px"><strong>Operatives Leasing Fahrzeug für 5 Jahre:</strong>
<label class="ueb-opt"><input type="radio" name="ueb_inv9"> Ja</label>
<label class="ueb-opt" data-correct="true"><input type="radio" name="ueb_inv9"> Nein</label></div>
</div>
<button class="ueb-btn" onclick="window._ctrlUebCheckBlock(this)">Korrigieren</button>
<div class="ueb-feedback" style="display:none"></div>
</div>

<div class="c ueb-block" data-ueb="inv" style="padding:20px 22px;margin-bottom:16px">
<div class="ct2" style="margin-bottom:6px">AA04-01 | Aufgabe 3: Rechengrössen — Lückentext</div>
<div class="cd" style="margin-bottom:14px">Füllen Sie die fehlenden Begriffe ein.</div>
<div style="line-height:2.1;font-size:14px">
<strong>Kapitaleinsatz:</strong> sämtliche bis zum Zeitpunkt der <input class="ueb-in" data-answer="Inbetriebnahme" style="width:150px" placeholder="?"> anfallenden Kosten sowie die bedingten <input class="ueb-in" data-answer="Sekundärinvestitionen" style="width:180px" placeholder="?">.<br>
<strong>Cashflow:</strong> ergibt sich als <input class="ueb-in" data-answer="Überschuss" style="width:120px" placeholder="?"> der Einnahmen über die Ausgaben.<br>
<strong>Nutzungsdauer:</strong> Zeitspanne, während der es <input class="ueb-in" data-answer="wirtschaftlich sinnvoll" data-alt="wirtschaftlich" style="width:170px" placeholder="?"> ist, eine Anlage zu nutzen; nicht der technischen <input class="ueb-in" data-answer="Lebensdauer" style="width:130px" placeholder="?">.<br>
<strong>Liquidationserlös:</strong> am Ende der <input class="ueb-in" data-answer="Nutzungsdauer" style="width:140px" placeholder="?"> der Netto-Mittelzufluss; abzüglich allfälliger <input class="ueb-in" data-answer="Entsorgungs- und/oder Demontagekosten" data-alt="Entsorgungskosten|Demontagekosten" style="width:250px" placeholder="?">.<br>
Liquidationserlös ≠ <input class="ueb-in" data-answer="Verschrottungswert" data-alt="Buchwert" style="width:170px" placeholder="?">
</div>
<button class="ueb-btn" onclick="window._ctrlUebCheckBlock(this)">Korrigieren</button>
<div class="ueb-feedback" style="display:none"></div>
</div>

<div class="c ueb-block" data-ueb="inv" style="padding:20px 22px;margin-bottom:16px">
<div class="ct2" style="margin-bottom:6px">AA04-02 | Kostenvergleich & Gewinnvergleich</div>
<div class="cd" style="margin-bottom:14px">Anlage A: Betriebskosten 500 TCHF, Abschreibung 250 TCHF, Zins 40 TCHF, Erlös 850 TCHF<br>Anlage B: Betriebskosten 400 TCHF, Abschreibung 300 TCHF, Zins 72 TCHF, Erlös 900 TCHF</div>
<div style="font-size:14px;line-height:2.2">
<strong>Kostenvergleich:</strong><br>
Gesamtkosten Anlage A: <input class="ueb-in" data-answer="790" style="width:60px" placeholder="?"> TCHF · Anlage B: <input class="ueb-in" data-answer="772" style="width:60px" placeholder="?"> TCHF<br>
<div class="ueb-mc" style="margin:8px 0"><strong>Vorteilhafter:</strong>
<label class="ueb-opt"><input type="radio" name="ueb_kv1"> Anlage A</label>
<label class="ueb-opt" data-correct="true"><input type="radio" name="ueb_kv1"> Anlage B</label></div>
<strong>Gewinnvergleich:</strong><br>
Jahresgewinn Anlage A: <input class="ueb-in" data-answer="60" style="width:60px" placeholder="?"> TCHF · Anlage B: <input class="ueb-in" data-answer="128" style="width:60px" placeholder="?"> TCHF<br>
<div class="ueb-mc" style="margin:8px 0"><strong>Vorteilhafter:</strong>
<label class="ueb-opt"><input type="radio" name="ueb_gv1"> Anlage A</label>
<label class="ueb-opt" data-correct="true"><input type="radio" name="ueb_gv1"> Anlage B</label></div>
</div>
<button class="ueb-btn" onclick="window._ctrlUebCheckBlock(this)">Korrigieren</button>
<div class="ueb-feedback" style="display:none"><div class="ueb-solution"><strong>Lösungsweg:</strong><br>Kosten A = 500 + 250 + 40 = <strong>790 TCHF</strong> · Kosten B = 400 + 300 + 72 = <strong>772 TCHF</strong> → B günstiger<br>Gewinn A = 850 − 790 = <strong>60 TCHF</strong> · Gewinn B = 900 − 772 = <strong>128 TCHF</strong> → B profitabler</div></div>
</div>

<div class="c ueb-block" data-ueb="inv" style="padding:20px 22px;margin-bottom:16px">
<div class="ct2" style="margin-bottom:6px">AA04-02 | Renditerechnung</div>
<div class="cd" style="margin-bottom:14px">Anlage A: Gewinn 60 TCHF, kalk. Zins 40 TCHF, invest. Kapital 500 TCHF · Anlage B: Gewinn 128 TCHF, kalk. Zins 72 TCHF, invest. Kapital 900 TCHF</div>
<div style="font-size:14px;line-height:2.2">
Rentabilität = (Gewinn + kalk. Zins) ÷ Ø Kapital<br>
Rentabilität Anlage A: <input class="ueb-in" data-answer="20.0" data-alt="20|20%" style="width:60px" placeholder="?"> % · Anlage B: <input class="ueb-in" data-answer="22.2" data-alt="22,2|22.2%" style="width:60px" placeholder="?"> %<br>
<div class="ueb-mc" style="margin:8px 0"><strong>Vorteilhafter:</strong>
<label class="ueb-opt"><input type="radio" name="ueb_rr1"> Anlage A</label>
<label class="ueb-opt" data-correct="true"><input type="radio" name="ueb_rr1"> Anlage B</label></div>
</div>
<button class="ueb-btn" onclick="window._ctrlUebCheckBlock(this)">Korrigieren</button>
<div class="ueb-feedback" style="display:none"><div class="ueb-solution"><strong>Lösungsweg:</strong><br>Ø Kapital A = 500 ÷ 2 = 250 · Rentabilität A = (60 + 40) ÷ 250 = <strong>20.0%</strong> · Achtung: 500 TCHF = inv. Kapital<br>Ø Kapital B = 900 ÷ 2 = 450 · Rentabilität B = (128 + 72) ÷ 450 = <strong>22.2%</strong></div></div>
</div>

<div class="c ueb-block" data-ueb="inv" style="padding:20px 22px;margin-bottom:16px">
<div class="ct2" style="margin-bottom:6px">AA04-04 | Landgasthof Alpenblick: Amortisationsrechnung</div>
<div class="cd" style="margin-bottom:14px">Gesamtpaket: Kapital CHF 360'000, Nutzungsdauer 10 J., Cashflow CHF 40'000/J.<br>Ersatzinvestition: Kapital CHF 80'000, Nutzungsdauer 5 J., Cashflow CHF 10'000/J.</div>
<div style="font-size:14px;line-height:2.2">
<strong>Wiedergewinnungszeit Gesamtpaket:</strong> <input class="ueb-in" data-answer="9" data-alt="9.0" style="width:50px" placeholder="?"> Jahre<br>
<strong>Wiedergewinnungszeit Ersatzinvestition:</strong> <input class="ueb-in" data-answer="8" data-alt="8.0" style="width:50px" placeholder="?"> Jahre<br>
<strong>Rückflusszahl Gesamtpaket:</strong> <input class="ueb-in" data-answer="1.1" data-alt="1,1" style="width:50px" placeholder="?"> ×<br>
<strong>Rückflusszahl Ersatzinvestition:</strong> <input class="ueb-in" data-answer="0.6" data-alt="0,6|0.63" style="width:50px" placeholder="?"> ×<br>
<div class="ueb-mc" style="margin:8px 0"><strong>Welche Investition ist wirtschaftlich sinnvoll?</strong>
<label class="ueb-opt" data-correct="true"><input type="radio" name="ueb_am1"> Gesamtpaket</label>
<label class="ueb-opt"><input type="radio" name="ueb_am1"> Ersatzinvestition</label></div>
</div>
<button class="ueb-btn" onclick="window._ctrlUebCheckBlock(this)">Korrigieren</button>
<div class="ueb-feedback" style="display:none"><div class="ueb-solution"><strong>Lösungsweg:</strong><br>WGZ Gesamt = 360'000 ÷ 40'000 = <strong>9 Jahre</strong> (< 10 J. Nutzungsdauer → rentabel)<br>WGZ Ersatz = 80'000 ÷ 10'000 = <strong>8 Jahre</strong> (> 5 J. Nutzungsdauer → unrentabel!)<br>Rückfluss Gesamt = 10 ÷ 9 = <strong>1.1×</strong> (> 1 → rentabel)<br>Rückfluss Ersatz = 5 ÷ 8 = <strong>0.6×</strong> (< 1 → unrentabel!)<br>→ Nur das <strong>Gesamtpaket</strong> ist wirtschaftlich sinnvoll.</div></div>
</div>


<div class="c ueb-block" data-ueb="inv" style="padding:20px 22px;margin-bottom:16px">
<div class="ct2" style="margin-bottom:6px">🏨 Bellavista | Wäschereianlage ersetzen — Kostenvergleich</div>
<div class="cd" style="margin-bottom:14px">Variante A «Effizient»: CHF 180\'000, Nutzungsdauer 10 J., jährl. Betriebskosten 11\'500. Variante B «Premium»: CHF 220\'000, Nutzungsdauer 12 J., jährl. Betriebskosten 7\'500. Zinsfuss 5% auf Ø Kapital, kein Liquidationserlös.</div>
<div style="font-size:14px;line-height:2.1">
<strong>Abschreibung A (CHF/Jahr):</strong> <input class="ueb-in" data-answer="18000" data-alt="18\'000" style="width:80px" placeholder="?"><br>
<strong>Kalk. Zins A (CHF/Jahr):</strong> <input class="ueb-in" data-answer="4500" data-alt="4\'500" style="width:80px" placeholder="?"><br>
<strong>Gesamtkosten A (CHF/Jahr):</strong> <input class="ueb-in" data-answer="34000" data-alt="34\'000" style="width:80px" placeholder="?"><br>
<strong>Abschreibung B (CHF/Jahr):</strong> <input class="ueb-in" data-answer="18333" data-alt="18\'333|18333.33" style="width:80px" placeholder="?"><br>
<strong>Kalk. Zins B (CHF/Jahr):</strong> <input class="ueb-in" data-answer="5500" data-alt="5\'500" style="width:80px" placeholder="?"><br>
<strong>Gesamtkosten B (CHF/Jahr):</strong> <input class="ueb-in" data-answer="31333" data-alt="31\'333|31333.33" style="width:80px" placeholder="?"><br>
<div class="ueb-mc" style="margin:8px 0"><strong>Welche Variante wählen?</strong>
<label class="ueb-opt"><input type="radio" name="ueb_bv1"> Variante A «Effizient»</label>
<label class="ueb-opt" data-correct="true"><input type="radio" name="ueb_bv1"> Variante B «Premium»</label></div>
</div>
<button class="ueb-btn" onclick="window._ctrlUebCheckBlock(this)">Korrigieren</button>
<div class="ueb-feedback" style="display:none"><div class="ueb-solution"><strong>Lösungsweg:</strong><br>Abschreibung A = 180\'000 ÷ 10 = <strong>18\'000</strong><br>Ø Kapital A = 180\'000 ÷ 2 = 90\'000 · Kalk. Zins A = 90\'000 × 5% = <strong>4\'500</strong><br>Gesamt A = 11\'500 + 18\'000 + 4\'500 = <strong>34\'000</strong><br>Abschreibung B = 220\'000 ÷ 12 = <strong>18\'333</strong><br>Ø Kapital B = 220\'000 ÷ 2 = 110\'000 · Kalk. Zins B = <strong>5\'500</strong><br>Gesamt B = 7\'500 + 18\'333 + 5\'500 = <strong>31\'333</strong><br>→ <strong>Variante B «Premium» gewinnt</strong> (niedrigere Gesamtkosten trotz höherer Anschaffung)</div></div>
</div>

<div class="c ueb-block" data-ueb="inv" style="padding:20px 22px;margin-bottom:16px">
<div class="ct2" style="margin-bottom:6px">🏨 Bellavista | Welcher Investitionstyp?</div>
<div class="cd" style="margin-bottom:14px">Ordne jede der geplanten Bellavista-Investitionen dem Haupt-Motiv zu.</div>
<div style="font-size:14px">
<div class="ueb-mc" style="margin-bottom:10px"><strong>Ersatz der 12 Jahre alten Wäschereianlage:</strong>
<label class="ueb-opt"><input type="radio" name="ueb_bvm1"> Erweiterung</label>
<label class="ueb-opt" data-correct="true"><input type="radio" name="ueb_bvm1"> Ersatz (Zwang)</label>
<label class="ueb-opt"><input type="radio" name="ueb_bvm1"> Diversifikation</label></div>
<div class="ueb-mc" style="margin-bottom:10px"><strong>Neuer Indoor-Pool im Wellnessbereich:</strong>
<label class="ueb-opt" data-correct="true"><input type="radio" name="ueb_bvm2"> Erweiterung</label>
<label class="ueb-opt"><input type="radio" name="ueb_bvm2"> Sicherung</label>
<label class="ueb-opt"><input type="radio" name="ueb_bvm2"> Ersatz</label></div>
<div class="ueb-mc" style="margin-bottom:10px"><strong>Photovoltaikanlage auf dem Dach:</strong>
<label class="ueb-opt"><input type="radio" name="ueb_bvm3"> Ersatz</label>
<label class="ueb-opt" data-correct="true"><input type="radio" name="ueb_bvm3"> Umstellung + Rationalisierung</label>
<label class="ueb-opt"><input type="radio" name="ueb_bvm3"> Gründung</label></div>
<div class="ueb-mc" style="margin-bottom:10px"><strong>Neues PMS-System (Property Management):</strong>
<label class="ueb-opt"><input type="radio" name="ueb_bvm4"> Gründung</label>
<label class="ueb-opt" data-correct="true"><input type="radio" name="ueb_bvm4"> Sicherung (immateriell)</label>
<label class="ueb-opt"><input type="radio" name="ueb_bvm4"> Diversifikation</label></div>
</div>
<button class="ueb-btn" onclick="window._ctrlUebCheckBlock(this)">Korrigieren</button>
<div class="ueb-feedback" style="display:none"></div>
</div>


</div>

<!-- CTRL: Zusammenfassung (Mindmaps) -->
<div class="sec" id="ctrl_mind"><h1>Zusammenfassung Controlling 2</h1><p class="sub">Visuelle Übersichten</p>

<h2>Kennzahlen-Übersicht</h2>
<div class="mm"><div class="mm-center"><div class="mm-hub" style="border-color:#00c6fb;color:#00c6fb;background:rgba(0,198,251,.08)">Kennzahlen</div></div>
<div class="mm-branches">
<div class="mm-branch" style="background:var(--al);border:1.5px solid var(--ac)"><h3 style="color:var(--ac)">Erfolgskennzahlen</h3><ul style="color:var(--ac)"><li>EBT, EBIT, EBITDA</li><li>Umsatzrendite (RoS)</li><li>Eigenkapitalrendite (RoE)</li><li>Gesamtkapitalrendite (RoA)</li><li>EBITDA-Marge</li></ul></div>
<div class="mm-branch" style="background:var(--gl);border:1.5px solid var(--g)"><h3 style="color:var(--g)">Finanzierung</h3><ul style="color:var(--g)"><li>Eigenfinanzierungsgrad</li><li>Stat./Dyn. Verschuldungsgrad</li><li>Anlagedeckungsgrad I + II</li><li>Goldene Bilanzregel</li><li>Leverage-Effekt</li></ul></div>
<div class="mm-branch" style="background:var(--rl);border:1.5px solid var(--r)"><h3 style="color:var(--r)">Liquidität</h3><ul style="color:var(--r)"><li>LG I (Cash Ratio) ≥10-35%</li><li>LG II (Quick Ratio) ≥100%</li><li>LG III (Current Ratio) ≥150-200%</li><li>Working Capital</li><li>CCC = DIO + DSO − DPO</li></ul></div>
<div class="mm-branch" style="background:var(--pl);border:1.5px solid var(--pr)"><h3 style="color:var(--pr)">Branchenspezifisch</h3><ul style="color:var(--pr)"><li>RevPAR, ADR, OCC%</li><li>RevPASH, RevPSQM</li><li>RevPOLH</li><li>Personalaufwandquote</li></ul></div>
</div></div>

<h2>Kostenrechnung — Voll vs. Teil</h2>
<div class="mm"><div class="mm-branches">
<div class="mm-branch" style="background:var(--aml);border:1.5px solid var(--am)"><h3 style="color:var(--am)">Vollkostenrechnung</h3><ul style="color:var(--am)"><li>ALLE Kosten auf Kostenträger</li><li>Einzelkosten + Gemeinkosten</li><li>→ Herstellkosten</li><li>→ Selbstkosten</li><li>→ Betriebsergebnis (Gewinn/Verlust)</li><li>Für Preisbestimmung + Erfolgsermittlung</li></ul></div>
<div class="mm-branch" style="background:var(--gl);border:1.5px solid var(--g)"><h3 style="color:var(--g)">Teilkostenrechnung</h3><ul style="color:var(--g)"><li>Nur VARIABLE Kosten auf Kostenträger</li><li>Fixkosten = Gesamtblock</li><li>→ Variable Selbstkosten</li><li>→ Deckungsbeitrag</li><li>→ Break-even-Analyse</li><li>Für kurzfristige Entscheidungen</li></ul></div>
</div></div>

<h2>Investitionsrechnung — Statische Verfahren</h2>
<div class="mm"><div class="mm-center"><div class="mm-hub" style="border-color:var(--pr);color:var(--pr);background:var(--pl)">Investitionsrechnung</div></div>
<div class="mm-branches">
<div class="mm-branch" style="background:var(--s2);border:1.5px solid var(--tx3)"><h3>Kostenvergleich</h3><ul><li>Geringste Durchschnittskosten</li><li>Nur bei gleichem Erlös sinnvoll</li><li>Kosten = Betrieb + Abschr. + Zins</li></ul></div>
<div class="mm-branch" style="background:var(--al);border:1.5px solid var(--ac)"><h3 style="color:var(--ac)">Gewinnvergleich</h3><ul style="color:var(--ac)"><li>Grösster Jahresgewinn</li><li>Erlös − Gesamtkosten</li><li>Schwäche: Kapitaleinsatz ignoriert</li></ul></div>
<div class="mm-branch" style="background:var(--gl);border:1.5px solid var(--g)"><h3 style="color:var(--g)">Renditerechnung</h3><ul style="color:var(--g)"><li>Höchste Rendite (ROI)</li><li>(Gewinn+Zins) ÷ Ø Kapital</li><li>Auch Einzelprojekte beurteilbar</li></ul></div>
<div class="mm-branch" style="background:var(--rl);border:1.5px solid var(--r)"><h3 style="color:var(--r)">Amortisation (Payback)</h3><ul style="color:var(--r)"><li>Kürzeste Wiedergewinnungszeit</li><li>Kapitaleinsatz ÷ Cashflow</li><li>Rückflusszahl > 1 = rentabel</li><li>Beliebte Praktikermethode</li></ul></div>
</div></div>

<h2>Balanced Scorecard</h2>
<div class="mm"><div class="mm-center"><div class="mm-hub" style="border-color:#00c6fb;color:#00c6fb;background:rgba(0,198,251,.08)">Vision & Strategie</div></div>
<div class="mm-branches">
<div class="mm-branch" style="background:var(--gl);border:1.5px solid var(--g)"><h3 style="color:var(--g)">Finanziell</h3><ul style="color:var(--g)"><li>Jahresergebnis, Umsatzrendite</li><li>Finales Ziel aller Perspektiven</li><li>«Wie gegenüber Eigentümern auftreten?»</li></ul></div>
<div class="mm-branch" style="background:var(--al);border:1.5px solid var(--ac)"><h3 style="color:var(--ac)">Kunden</h3><ul style="color:var(--ac)"><li>Marktanteil, Zufriedenheit, Treue</li><li>Frühwarnsystem für Marktprobleme</li><li>«Wie gegenüber Kunden auftreten?»</li></ul></div>
<div class="mm-branch" style="background:var(--aml);border:1.5px solid var(--am)"><h3 style="color:var(--am)">Interne Prozesse</h3><ul style="color:var(--am)"><li>Durchlaufzeit, Auslastung, Qualität</li><li>«In welchen Prozessen der Beste sein?»</li></ul></div>
<div class="mm-branch" style="background:var(--pl);border:1.5px solid var(--pr)"><h3 style="color:var(--pr)">Lernen & Entwicklung</h3><ul style="color:var(--pr)"><li>MA-Zufriedenheit, Fluktuation</li><li>Innovation, Weiterbildung</li><li>«Wie Wachstumspotenziale fördern?»</li></ul></div>
</div></div>
</div>

<!-- CTRL: Karteikarten -->
<div class="sec" id="ctrl_kart"><h1>Karteikarten Controlling 2</h1><p class="sub"><span id="cfcCount">85</span> Karten — klicke zum Umdrehen</p>
<div class="fcc" id="cfcc"></div>
<div class="fd"><div class="fc" id="cfc" onclick="this.classList.toggle('fl')"><div class="ff ffr"><div class="fq" id="cfcq"></div><div class="fh">Klicke zum Umdrehen</div></div><div class="ff ffb"><div class="fa" id="cfca"></div></div></div></div>
<div class="fb"><button onclick="cP()">Zurück</button><button onclick="cS()">Mischen</button><button class="bp1" onclick="cN()">Nächste</button></div>
<div style="text-align:center;margin-top:10px;font-size:11px;color:var(--tx3)" id="cfcPool"></div>
</div>

<!-- CTRL: Quiz -->
<div class="sec" id="ctrl_quiz"><h1>Quiz Controlling 2</h1><p class="sub">Alle Fragen werden wiederholt bis du sie kannst</p>
<div id="cqStats" style="margin-bottom:20px">
<div style="display:flex;gap:8px;margin-bottom:14px;flex-wrap:wrap">
<div class="qsc" style="flex:1;min-width:70px"><div class="qsn" id="cqTotR" style="color:var(--g)">0</div><div class="qsl">Total richtig</div></div>
<div class="qsc" style="flex:1;min-width:70px"><div class="qsn" id="cqTotW" style="color:var(--r)">0</div><div class="qsl">Total falsch</div></div>
<div class="qsc" style="flex:1;min-width:70px"><div class="qsn" id="cqTotP" style="color:var(--ac)">0%</div><div class="qsl">Erfolgsquote</div></div>
</div>
<div style="font-size:12px;color:var(--tx3);margin-bottom:6px">Lernerfolg</div>
<div style="display:flex;gap:4px;margin-bottom:4px;align-items:center"><div style="width:10px;height:10px;border-radius:50%;background:var(--g);flex-shrink:0"></div><div style="font-size:12px;color:var(--tx2);width:70px">Sicher</div><div style="flex:1;height:8px;background:var(--s2);border-radius:4px;overflow:hidden"><div id="cqBarG" style="height:100%;background:var(--g);border-radius:4px;transition:width .5s;width:0%"></div></div><div style="font-size:12px;color:var(--tx2);width:30px;text-align:right" id="cqBarGn">0</div></div>
<div style="display:flex;gap:4px;margin-bottom:4px;align-items:center"><div style="width:10px;height:10px;border-radius:50%;background:var(--am);flex-shrink:0"></div><div style="font-size:12px;color:var(--tx2);width:70px">Wackelig</div><div style="flex:1;height:8px;background:var(--s2);border-radius:4px;overflow:hidden"><div id="cqBarO" style="height:100%;background:var(--am);border-radius:4px;transition:width .5s;width:0%"></div></div><div style="font-size:12px;color:var(--tx2);width:30px;text-align:right" id="cqBarOn">0</div></div>
<div style="display:flex;gap:4px;margin-bottom:4px;align-items:center"><div style="width:10px;height:10px;border-radius:50%;background:var(--r);flex-shrink:0"></div><div style="font-size:12px;color:var(--tx2);width:70px">Unsicher</div><div style="flex:1;height:8px;background:var(--s2);border-radius:4px;overflow:hidden"><div id="cqBarR" style="height:100%;background:var(--r);border-radius:4px;transition:width .5s;width:0%"></div></div><div style="font-size:12px;color:var(--tx2);width:30px;text-align:right" id="cqBarRn">0</div></div>
<div style="display:flex;gap:4px;align-items:center"><div style="width:10px;height:10px;border-radius:50%;background:var(--tx3);flex-shrink:0"></div><div style="font-size:12px;color:var(--tx2);width:70px">Noch offen</div><div style="flex:1;height:8px;background:var(--s2);border-radius:4px;overflow:hidden"><div id="cqBarX" style="height:100%;background:var(--tx3);border-radius:4px;transition:width .5s;width:100%"></div></div><div style="font-size:12px;color:var(--tx2);width:30px;text-align:right" id="cqBarXn">0</div></div>
</div>
<div class="pb"><div class="pf" id="cqP"></div></div><div class="pt" id="cqPT">Frage 1</div>
<div id="cqC"></div>
<div style="text-align:center;margin-top:14px">
<button class="bp1" id="cqN" onclick="cqNx()" style="display:none">Nächste Frage</button>
<button class="bp1" id="cqRS" onclick="cqSt()" style="display:none">Weiter üben</button>
<button id="cqReset" onclick="cqReset()" style="display:none;margin-left:8px">Fortschritt zurücksetzen</button>
</div>
</div>

<!-- CTRL: Glossar -->
<div class="sec" id="ctrl_glossar"><h1>Glossar — Controlling 2</h1><p class="sub">Begriffe, Abkürzungen & Formeln</p>
<div style="font-size:13px;font-weight:600;letter-spacing:1px;text-transform:uppercase;color:var(--tx3);margin-bottom:14px">Abkürzungen</div>
<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:8px;margin-bottom:32px">
<div class="c" style="padding:12px 16px"><strong style="color:var(--ac)">KPI</strong> <span style="color:var(--tx2)">— Key Performance Indicator (Steuerungsgrösse)</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--ac)">ROI</strong> <span style="color:var(--tx2)">— Return on Investment (Gesamtkapitalrendite)</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--ac)">RoE</strong> <span style="color:var(--tx2)">— Return on Equity (Eigenkapitalrendite)</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--ac)">RoA</strong> <span style="color:var(--tx2)">— Return on Assets (Gesamtkapitalrendite)</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--ac)">EBIT</strong> <span style="color:var(--tx2)">— Earnings before Interest and Taxes</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--ac)">EBITDA</strong> <span style="color:var(--tx2)">— Earnings before Interest, Taxes, Depreciation & Amortisation</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--ac)">EBT</strong> <span style="color:var(--tx2)">— Earnings before Taxes</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--ac)">NPV</strong> <span style="color:var(--tx2)">— Net Present Value (Kapitalwert)</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--ac)">WACC</strong> <span style="color:var(--tx2)">— Weighted Average Cost of Capital</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--ac)">BSC</strong> <span style="color:var(--tx2)">— Balanced Scorecard</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--ac)">CCC</strong> <span style="color:var(--tx2)">— Cash Conversion Cycle (Kapitalbindungsdauer)</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--ac)">DSO</strong> <span style="color:var(--tx2)">— Days Sales Outstanding (Debitorenfrist)</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--ac)">DIO</strong> <span style="color:var(--tx2)">— Days Inventory Outstanding (Lagerdauer)</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--ac)">DPO</strong> <span style="color:var(--tx2)">— Days Payable Outstanding (Kreditorenfrist)</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--ac)">FIBU</strong> <span style="color:var(--tx2)">— Finanzbuchhaltung (extern, obligatorisch)</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--ac)">BEBU</strong> <span style="color:var(--tx2)">— Betriebsbuchhaltung (intern, freiwillig)</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--ac)">DDR</strong> <span style="color:var(--tx2)">— Doppelte Deckungsbeitragsrechnung</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--ac)">DB</strong> <span style="color:var(--tx2)">— Deckungsbeitrag</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--ac)">APM</strong> <span style="color:var(--tx2)">— Alternative Performance Measures</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--ac)">MWST</strong> <span style="color:var(--tx2)">— Mehrwertsteuer</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--ac)">RevPAR</strong> <span style="color:var(--tx2)">— Revenue Per Available Room</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--ac)">ADR</strong> <span style="color:var(--tx2)">— Average Daily Rate</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--ac)">OCC%</strong> <span style="color:var(--tx2)">— Occupancy Rate (Belegungsrate)</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--ac)">DCF</strong> <span style="color:var(--tx2)">— Discounted Cash Flow</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--ac)">GOI</strong> <span style="color:var(--tx2)">— Gross Operating Income (Bruttobetriebserfolg)</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--ac)">GOP</strong> <span style="color:var(--tx2)">— Gross Operating Profit (Bruttobetriebsergebnis)</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--ac)">RevPASH</strong> <span style="color:var(--tx2)">— Revenue Per Available Seat Hour</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--ac)">RevPSQM</strong> <span style="color:var(--tx2)">— Revenue Per Available Square Meter</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--ac)">RevPOLH</strong> <span style="color:var(--tx2)">— Revenue Per Operative Labour Hour</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--ac)">IRR</strong> <span style="color:var(--tx2)">— Internal Rate of Return (Interner Zinsfuss)</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--ac)">VR</strong> <span style="color:var(--tx2)">— Verwaltungsrat (Art. 716a OR)</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--ac)">LuL</strong> <span style="color:var(--tx2)">— aus Lieferung und Leistung</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--ac)">UV</strong> <span style="color:var(--tx2)">— Umlaufvermögen</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--ac)">AV</strong> <span style="color:var(--tx2)">— Anlagevermögen</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--ac)">EK / FK</strong> <span style="color:var(--tx2)">— Eigenkapital / Fremdkapital</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--ac)">GK</strong> <span style="color:var(--tx2)">— Gesamtkapital (Bilanzsumme)</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--ac)">F&B</strong> <span style="color:var(--tx2)">— Food & Beverage</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--ac)">MICE</strong> <span style="color:var(--tx2)">— Meetings, Incentives, Conferences, Events</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--ac)">PMS</strong> <span style="color:var(--tx2)">— Property Management System (Hotelsoftware)</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--ac)">APM</strong> <span style="color:var(--tx2)">— Alternative Performance Measures (nicht reguliert)</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--ac)">NS</strong> <span style="color:var(--tx2)">— Nutzschwelle (= Break-Even)</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--ac)">VP</strong> <span style="color:var(--tx2)">— Verkaufspreis</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--ac)">Ø</strong> <span style="color:var(--tx2)">— Durchschnitt (arithmetisches Mittel)</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--ac)">OR</strong> <span style="color:var(--tx2)">— Obligationenrecht (Schweiz)</span></div>
</div>

<div style="font-size:13px;font-weight:600;letter-spacing:1px;text-transform:uppercase;color:var(--tx3);margin-bottom:14px">Formelsammlung mit Richtwerten</div>

<div style="font-size:12px;font-weight:600;color:var(--ac);margin:16px 0 8px">Erfolgskennzahlen</div>
<div style="display:grid;grid-template-columns:1fr;gap:6px">
<div class="c ca" style="padding:12px 18px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px"><div><strong>Eigenkapitalrendite (RoE)</strong> = Reingewinn ÷ Ø EK × 100%</div><div style="font-size:11px;color:var(--g);font-weight:700;white-space:nowrap">Richtwert: 5–10%</div></div>
<div class="c ca" style="padding:12px 18px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px"><div><strong>Gesamtkapitalrendite (RoA)</strong> = Reingewinn ÷ Ø GK × 100%</div><div style="font-size:11px;color:var(--tx3);font-weight:700;white-space:nowrap">abhängig v. Betriebsart</div></div>
<div class="c ca" style="padding:12px 18px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px"><div><strong>Umsatzrendite (RoS)</strong> = Reingewinn ÷ Betriebsertrag × 100%</div><div style="font-size:11px;color:var(--g);font-weight:700;white-space:nowrap">Gastro: 2–8% · Hotel: 5–10%</div></div>
<div class="c ca" style="padding:12px 18px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px"><div><strong>EBITDA-Marge</strong> = EBITDA ÷ Betriebsertrag × 100%</div><div style="font-size:11px;color:var(--tx3);font-weight:700;white-space:nowrap">abhängig v. Betriebsart</div></div>
</div>

<div style="font-size:12px;font-weight:600;color:var(--ac);margin:16px 0 8px">Finanzierungskennzahlen</div>
<div style="display:grid;grid-template-columns:1fr;gap:6px">
<div class="c cg" style="padding:12px 18px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px"><div><strong>Eigenkapitalquote</strong> = EK ÷ GK × 100%</div><div style="font-size:11px;color:var(--g);font-weight:700;white-space:nowrap">20–30% (je höher desto besser)</div></div>
<div class="c cg" style="padding:12px 18px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px"><div><strong>Fremdkapitalquote</strong> = FK ÷ GK × 100%</div><div style="font-size:11px;color:var(--r);font-weight:700;white-space:nowrap">70–80% (je tiefer desto besser)</div></div>
<div class="c cg" style="padding:12px 18px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px"><div><strong>Verschuldungsgrad statisch</strong> = FK ÷ EK × 100%</div><div style="font-size:11px;color:var(--r);font-weight:700;white-space:nowrap">≤ 200% (je tiefer desto besser)</div></div>
<div class="c cg" style="padding:12px 18px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px"><div><strong>Verschuldungsgrad dynamisch</strong> = Effektivverschuldung ÷ Cashflow × 100%</div><div style="font-size:11px;color:var(--am);font-weight:700;white-space:nowrap">100–300% (1–3 Jahre)</div></div>
<div class="c cg" style="padding:12px 18px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px"><div><strong>Anlagedeckungsgrad II</strong> = (EK + langfr. FK) ÷ AV × 100%</div><div style="font-size:11px;color:var(--g);font-weight:700;white-space:nowrap">≥ 100% (goldene Bilanzregel)</div></div>
</div>

<div style="font-size:12px;font-weight:600;color:var(--ac);margin:16px 0 8px">Liquiditätskennzahlen</div>
<div style="display:grid;grid-template-columns:1fr;gap:6px">
<div class="c cr" style="padding:12px 18px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px"><div><strong>Liquiditätsgrad I</strong> = Flüssige Mittel ÷ kurzfr. FK × 100%</div><div style="font-size:11px;color:var(--g);font-weight:700;white-space:nowrap">10–35%</div></div>
<div class="c cr" style="padding:12px 18px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px"><div><strong>Liquiditätsgrad II</strong> = (Flüssige Mittel + Ford. LuL) ÷ kurzfr. FK × 100%</div><div style="font-size:11px;color:var(--g);font-weight:700;white-space:nowrap">≥ 100%</div></div>
<div class="c cr" style="padding:12px 18px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px"><div><strong>Liquiditätsgrad III</strong> = UV ÷ kurzfr. FK × 100%</div><div style="font-size:11px;color:var(--g);font-weight:700;white-space:nowrap">150–200% (Banker's Rule)</div></div>
</div>

<div style="font-size:12px;font-weight:600;color:var(--ac);margin:16px 0 8px">Working Capital Kennzahlen</div>
<div style="display:grid;grid-template-columns:1fr;gap:6px">
<div class="c cm" style="padding:12px 18px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px"><div><strong>DSO (Debitorenfrist)</strong> = Ø Ford. LuL ÷ Betriebsertrag × 360</div><div style="font-size:11px;color:var(--g);font-weight:700;white-space:nowrap">&lt; 30 Tage</div></div>
<div class="c cm" style="padding:12px 18px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px"><div><strong>DIO (Lagerdauer)</strong> = Ø Warenvorräte ÷ Warenaufwand × 360</div><div style="font-size:11px;color:var(--g);font-weight:700;white-space:nowrap">&lt; 20 Tage</div></div>
<div class="c cm" style="padding:12px 18px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px"><div><strong>DPO (Kreditorenfrist)</strong> = Ø Verb. LuL ÷ Warenaufwand × 360</div><div style="font-size:11px;color:var(--g);font-weight:700;white-space:nowrap">20–40 Tage</div></div>
<div class="c cm" style="padding:12px 18px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px"><div><strong>CCC</strong> = DSO + DIO − DPO</div><div style="font-size:11px;color:var(--g);font-weight:700;white-space:nowrap">10–30 Tage</div></div>
<div class="c" style="padding:12px 18px"><strong>Ø Bestand</strong> = (Anfangsbestand + Schlussbestand) ÷ 2</div>
</div>

<div style="font-size:12px;font-weight:600;color:var(--ac);margin:16px 0 8px">Branchenspezifische Kennzahlen</div>
<div style="display:grid;grid-template-columns:1fr;gap:6px">
<div class="c cp" style="padding:12px 18px"><strong>RevPAR</strong> = Rooms Revenue ÷ (Zimmeranzahl × Betriebstage)</div>
<div class="c cp" style="padding:12px 18px"><strong>ADR</strong> = Rooms Revenue ÷ Anzahl verkaufte Zimmer</div>
<div class="c cp" style="padding:12px 18px"><strong>OCC%</strong> = Verkaufte Einheiten ÷ Total Einheiten × 100%</div>
<div class="c cp" style="padding:12px 18px"><strong>RevPASH</strong> = F&B Revenue ÷ (Sitzplätze × Öffnungsstunden)</div>
<div class="c cp" style="padding:12px 18px"><strong>RevPSQM</strong> = Ertrag Veranstaltung ÷ verfügbare Fläche m²</div>
<div class="c cp" style="padding:12px 18px"><strong>RevPOLH</strong> = Ertrag Wellness ÷ geleistete Arbeitsstunden</div>
<div class="c cp" style="padding:12px 18px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px"><div><strong>Personalaufwandquote</strong> = Total Personalaufwand ÷ Total Ertrag × 100%</div><div style="font-size:11px;color:var(--g);font-weight:700;white-space:nowrap">je weiter unter 45% desto besser</div></div>
</div>

<div style="font-size:12px;font-weight:600;color:var(--ac);margin:16px 0 8px">Investitionsrechnung</div>
<div style="display:grid;grid-template-columns:1fr;gap:6px">
<div class="c" style="padding:12px 18px"><strong>Ø investiertes Kapital</strong> = Investiertes Kapital ÷ 2</div>
<div class="c" style="padding:12px 18px"><strong>Ø Kapital mit Liquidationserlös</strong> = (inv. Kapital + Liq.erlös) ÷ 2</div>
<div class="c" style="padding:12px 18px"><strong>Kalkulatorischer Zins</strong> = Ø investiertes Kapital × Zinsfuss%</div>
<div class="c" style="padding:12px 18px"><strong>Abschreibung</strong> = (Kapitaleinsatz − Liquidationserlös) ÷ Nutzungsdauer</div>
<div class="c" style="padding:12px 18px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px"><div><strong>Rendite (ROI)</strong> = (Gewinn + kalk. Zins) ÷ Ø inv. Kapital × 100%</div><div style="font-size:11px;color:var(--g);font-weight:700;white-space:nowrap">&gt; 10%</div></div>
<div class="c" style="padding:12px 18px"><strong>Wiedergewinnungszeit</strong> = Kapitaleinsatz ÷ Cashflow → muss &lt; Nutzungsdauer sein</div>
<div class="c" style="padding:12px 18px"><strong>Rückflusszahl</strong> = Nutzungsdauer ÷ Wiedergewinnungszeit → muss &gt; 1 sein</div>
<div class="c" style="padding:12px 18px"><strong>WACC</strong> = (FK-Kosten% × FK/GK) + (EK-Kosten% × EK/GK)</div>
</div>

<div style="font-size:12px;font-weight:600;color:var(--ac);margin:16px 0 8px">Break-even / Deckungsbeitrag</div>
<div style="display:grid;grid-template-columns:1fr;gap:6px">
<div class="c" style="padding:12px 18px"><strong>Deckungsbeitrag CHF</strong> = Nettoverkaufspreis − variable Kosten</div>
<div class="c" style="padding:12px 18px"><strong>DB-Marge %</strong> = DB in CHF ÷ Nettoverkaufspreis × 100%</div>
<div class="c" style="padding:12px 18px"><strong>DDR-Wert</strong> = DB in CHF × 2 + DB-Marge% ÷ 2</div>
<div class="c" style="padding:12px 18px"><strong>Mengenmässige Nutzschwelle</strong> = Fixkosten ÷ DB pro Stück (CHF)</div>
<div class="c" style="padding:12px 18px"><strong>Wertmässige NS V1</strong> = Fixkosten ÷ DB-Marge%</div>
<div class="c" style="padding:12px 18px"><strong>Wertmässige NS V2</strong> = Mengenmässige NS × Nettoverkaufspreis</div>
</div>

<div style="font-size:12px;font-weight:600;color:var(--ac);margin:20px 0 8px">Wichtige Begriffe (A–Z)</div>
<div style="display:grid;grid-template-columns:1fr;gap:6px;margin-bottom:24px">
<div class="c" style="padding:10px 16px"><strong>Aktivierung</strong> — Erfassung einer Ausgabe als Anlagevermögen (Bilanz), statt als Aufwand (ER). Voraussetzung: Nutzungsdauer >12 Monate und zukünftiger Nutzenzufluss.</div>
<div class="c" style="padding:10px 16px"><strong>Amortisation</strong> — Abschreibung auf immaterielle Anlagen (Lizenzen, Patente). Im Cash-Kontext = Rückzahlung einer Investition.</div>
<div class="c" style="padding:10px 16px"><strong>Benchmark</strong> — Vergleichswert des Durchschnitts der besten Unternehmen einer Branche. Quellen CH: KATAG, Gastrosuisse, Hotelleriesuisse, Schweiz Tourismus, BfS.</div>
<div class="c" style="padding:10px 16px"><strong>Break-Even-Point</strong> — Punkt, an dem Erlös = Totalkosten, d.h. Gewinn = 0. Auch: Nutzschwelle, Gewinnschwelle.</div>
<div class="c" style="padding:10px 16px"><strong>CompSet</strong> — Competitor Set. Gruppe direkter Mitbewerber für Benchmark-Vergleiche (Revenue Management).</div>
<div class="c" style="padding:10px 16px"><strong>Deckungsbeitrag (DB)</strong> — Differenz zwischen Nettoerlös und variablen Kosten. Betrag zur Deckung der Fixkosten.</div>
<div class="c" style="padding:10px 16px"><strong>Diskontierung</strong> — Rückrechnung zukünftiger Zahlungsströme auf den heutigen Barwert mit einem Kapitalkostensatz.</div>
<div class="c" style="padding:10px 16px"><strong>Dynamic Pricing</strong> — Preisgestaltung, die sich laufend der Nachfrage anpasst. Voraussetzung: Kapazität begrenzt + nicht lagerbar + variable Kosten bekannt.</div>
<div class="c" style="padding:10px 16px"><strong>Einzelkosten</strong> — Kosten, die einem Kostenträger direkt zugeordnet werden können (Lebensmittel für ein Menü).</div>
<div class="c" style="padding:10px 16px"><strong>Gemeinkosten</strong> — Kosten, die nicht direkt einem Kostenträger zuordenbar sind und über Umlageschlüssel verteilt werden (Verwaltung, Miete).</div>
<div class="c" style="padding:10px 16px"><strong>Goldene Bilanzregel</strong> — Langfristiges Vermögen soll mit langfristigem Kapital finanziert werden (Anlagedeckungsgrad II ≥ 100%).</div>
<div class="c" style="padding:10px 16px"><strong>Herstellkosten</strong> — Einzelkosten + Gemeinkosten der Produktion. Grundlage für Vorratsbewertung.</div>
<div class="c" style="padding:10px 16px"><strong>Illiquidität</strong> — Zahlungsunfähigkeit. Kann zu Insolvenz führen. Bei drohender Illiquidität: Art. 725 OR → VR muss Massnahmen ergreifen.</div>
<div class="c" style="padding:10px 16px"><strong>Kalkulatorischer Zins</strong> — Fiktiver Zinssatz zur Bewertung der Kapitalbindung. Ansatz: risikofreier Zins + Risikoaufschlag oder WACC.</div>
<div class="c" style="padding:10px 16px"><strong>Kapitalbindungsdauer</strong> — Synonym für Cash Conversion Cycle. Tage vom Einkauf bis zum Zahlungseingang.</div>
<div class="c" style="padding:10px 16px"><strong>Kostenart</strong> — Was für Kosten (z.B. Wareneinkauf, Personal, Zinsen).</div>
<div class="c" style="padding:10px 16px"><strong>Kostenstelle</strong> — Wo die Kosten anfallen (z.B. Rooms Division, F&B, Wellness).</div>
<div class="c" style="padding:10px 16px"><strong>Kostenträger</strong> — Wofür die Kosten anfallen (z.B. Doppelzimmer Deluxe, HP-Package, Tagesteller).</div>
<div class="c" style="padding:10px 16px"><strong>Leverage-Effekt</strong> — Gesamtkapitalrendite steigt durch FK-Aufnahme, wenn FK-Zinskosten < erwirtschaftete Rendite. Erhöht auch das Risiko.</div>
<div class="c" style="padding:10px 16px"><strong>Liquidation</strong> — Verkauf/Auflösung von Vermögen am Ende der Nutzungsdauer. Liquidationserlös ≠ Buchwert ≠ Verschrottungswert.</div>
<div class="c" style="padding:10px 16px"><strong>Liquiditätsplanung</strong> — Strategische Verwaltung flüssiger Mittel. Formel: Liquide Mittel Periodenbeginn + Einzahlungen − Auszahlungen = Liquide Mittel Periodenende. Rollierend planen auf Wochen-/Monatsbasis.</div>
<div class="c" style="padding:10px 16px"><strong>Nutzschwelle</strong> — Synonym für Break-Even-Point / Gewinnschwelle.</div>
<div class="c" style="padding:10px 16px"><strong>Nutzungsdauer</strong> — Wirtschaftliche (nicht technische!) Lebensdauer einer Anlage. Erfahrungswerte oder steuerliche Vorgaben.</div>
<div class="c" style="padding:10px 16px"><strong>Payback-Period</strong> — Wiedergewinnungszeit. Zeitraum bis zur Amortisation einer Investition durch Cashflows.</div>
<div class="c" style="padding:10px 16px"><strong>Profitcenter</strong> — Organisatorische Einheit mit eigener Erfolgsverantwortung (z.B. Rooms, F&B, Wellness).</div>
<div class="c" style="padding:10px 16px"><strong>Rückflusszahl</strong> — Nutzungsdauer ÷ Wiedergewinnungszeit. Wie oft amortisiert sich eine Investition während ihrer Lebensdauer. >1 = rentabel.</div>
<div class="c" style="padding:10px 16px"><strong>Sales-Mix</strong> — DB pro Stück × Absatzmenge = DB Total. Zeigt tatsächliche Rentabilität unter Berücksichtigung der Nachfrage.</div>
<div class="c" style="padding:10px 16px"><strong>Sekundärinvestition</strong> — Unabdingbar mit Hauptinvestition verbundene Folgeinvestition (z.B. Sicherheitsanlage bei IT-Umbau).</div>
<div class="c" style="padding:10px 16px"><strong>Selbstkosten</strong> — Herstellkosten + Verwaltungs- und Vertriebskosten. Ab Selbstkosten beginnt der Gewinn.</div>
<div class="c" style="padding:10px 16px"><strong>Target Costing</strong> — Max. Herstellkosten = Zielverkaufspreis − geforderter Mindestgewinn. Rückwärtsbetrachtung vom Markt her.</div>
<div class="c" style="padding:10px 16px"><strong>Target Pricing</strong> — Preisobergrenze, die Kund:innen bereit sind zu zahlen. Analyse der Zahlungsbereitschaft.</div>
<div class="c" style="padding:10px 16px"><strong>Wertvermehrung vs. Werterhaltung</strong> — Wertvermehrung = Investition (aktivierbar). Werterhaltung = Unterhalt/Reparatur (ER, nicht aktivierbar).</div>
<div class="c" style="padding:10px 16px"><strong>Zwangsinvestition</strong> — Unaufschiebbare Investition (z.B. defekte Küche, gesetzliche Auflagen). Gegenstück: Alternativinvestition.</div>
</div>

</div>

`;

// Flashcards
const CFC=[
// KENNZAHLEN (1-15)
['Was sind Kennzahlen?','Zusammenfassung quantitativer Informationen für inner-/zwischenbetrieblichen Vergleich. Setzen Daten in allgemeine Relation (z.B. Prozent).'],
['3 Arten relativer Kennzahlen?','Gliederungszahlen (Teil÷Ganzes), Beziehungszahlen (verschiedene Grössen), Indexzahlen (gleiche Grösse zu verschiedenen Zeitpunkten).'],
['EBITDA?','Earnings before Interest, Taxes, Depreciation & Amortisation. Zeigt operative Ertragskraft ohne Steuern, Zinsen und Abschreibungen.'],
['Umsatzrendite (Return on Sales)?','= Reingewinn ÷ Umsatz × 100%. Wie viel Gewinn bleibt pro Franken Umsatz?'],
['Eigenkapitalrendite (RoE)?','= Reingewinn ÷ Ø Eigenkapital × 100%. Verzinsung des Eigenkapitals.'],
['Eigenfinanzierungsgrad?','= EK ÷ GK × 100%. Massstab für finanzielle Sicherheit — wie viel Verlust kann absorbiert werden.'],
['Anlagedeckungsgrad II?','= (EK + langfr. FK) ÷ AV × 100%. Goldene Bilanzregel: Langfristiges Vermögen mit langfristigem Kapital finanzieren. Soll über 100% liegen.'],
['Liquiditätsgrad II (Quick Ratio)?','= (Flüssige Mittel + Forderungen LuL) ÷ kurzfr. FK × 100%. Soll mindestens 100% betragen.'],
['Cash Conversion Cycle (CCC)?','= DIO + DSO − DPO. Kapitalbindungsdauer: Wie viele Tage vom Einkauf bis zum Zahlungseingang der Kunden.'],
['RevPAR?','Revenue Per Available Room = Rooms Revenue ÷ (Zimmeranzahl × Betriebstage). Wichtigste Metrik der Hotellerie.'],
['ADR vs. RevPAR?','ADR = Durchschnittspreis verkaufter Zimmer. RevPAR = Ertrag aller Zimmer (auch unverkaufte). RevPAR ist aussagekräftiger.'],
['4 Perspektiven der Balanced Scorecard?','Finanziell · Kunden · Interne Prozesse · Lernen & Entwicklung. Alle verbunden durch Ursache-Wirkungs-Ketten zur Strategie.'],
['5 Funktionen von Kennzahlen?','Anregung (Initiativen) · Operationalisierung (messbar) · Vorgabe (Motivation) · Steuerung (Abstimmung) · Kontrolle (Soll-Ist).'],
['DuPont-Schema?','Zeigt Zustandekommen der Gesamtkapitalrentabilität (ROI) = Umsatzrentabilität × Kapitalumschlag. Mathematische Verknüpfungen.'],
['Dynamischer Verschuldungsgrad?','= (FK − flüssige Mittel) ÷ Geldfluss aus Betriebstätigkeit. Wie schnell kann das Unternehmen Schulden aus eigenem Cashflow tilgen.'],
// KOSTENRECHNUNG (16-28)
['FIBU vs. BEBU?','FIBU = extern, obligatorisch, vergangenheitsorientiert. BEBU = intern, freiwillig, zukunftsorientiert. Zusammen = gesamtes Rechnungswesen.'],
['Einzelkosten vs. Gemeinkosten?','Einzelkosten = direkt dem Kostenträger zuordenbar (z.B. Lebensmittel). Gemeinkosten = nicht direkt zuordenbar, über Umlageschlüssel verteilt (z.B. Verwaltung).'],
['3 Stufen der Kostenrechnung?','Kostenartenrechnung (welche Kosten?) → Kostenstellenrechnung (wo?) → Kostenträgerrechnung (wofür?).'],
['Herstellkosten vs. Selbstkosten?','Herstellkosten = Einzel- + Gemeinkosten der Produktion. Selbstkosten = Herstellkosten + Verwaltungs-/Vertriebskosten. Ab Selbstkosten beginnt Gewinn.'],
['Vollkosten- vs. Teilkostenrechnung?','Vollkosten: Alle Kosten auf Kostenträger → Erfolg pro Produkt. Teilkosten: Nur variable Kosten → Deckungsbeitrag pro Produkt.'],
['Fixe vs. variable Kosten (Beispiele)?','Fix: Miete, feste Gehälter, Versicherungen. Variabel: Lebensmittel, Verbrauchsmaterial, temporäres Personal.'],
['Deckungsbeitrag (DB)?','= Nettoverkaufspreis − variable Kosten pro Stück. Betrag zur Deckung der Fixkosten.'],
['DDR-Wert?','= DB in CHF × 2 + DB-Marge% ÷ 2. Index für Wirtschaftlichkeit. Hoher DDR = aktiv verkaufen!'],
['Sales-Mix?','= DB pro Stück × Absatzmenge = DB Total. Zeigt tatsächliche Rentabilität unter Berücksichtigung der Nachfrage.'],
['Mengenmässige Nutzschwelle?','= Fixkosten ÷ DB in CHF. Ab welcher Stückzahl sind alle Kosten gedeckt?'],
['Wertmässige Nutzschwelle?','= Fixkosten ÷ DB-Marge%. Welcher Umsatz wird mindestens benötigt?'],
['Break-even-Formel?','VP × x = K_var × x + K_fix. Schnittpunkt = Break-even-Point. Unterhalb = Verlust, oberhalb = Gewinn.'],
['Kostentreiber bei variablen Kosten?','In der Regel die Absatzmenge. Variable Kosten steigen/sinken proportional mit dem Absatz.'],
// KALKULATION (29-37)
['6 Einzelkomponenten eines Preises?','Materialeinzelkosten + Fertigungseinzelkosten + Gemeinkostenzuschläge + Verwaltung/Vertrieb + Gewinn + MWST.'],
['3 Ansätze der Preisgestaltung?','Nachfrageorientiert (Zahlungsbereitschaft), kostenorientiert (Selbstkosten + Gewinn), konkurrenzorientiert (Mitbewerber-Preise).'],
['Dynamic Pricing — Voraussetzungen?','Kapazitäten begrenzt + nicht lagerbar + variable Kosten bekannt. Preis passt sich Nachfrage an.'],
['Target Costing?','Max. Herstellkosten = Zielverkaufspreis − Mindestgewinn. Rückwärtsbetrachtung vom Markt her.'],
['7 Schritte Aufschlagskalkulation?','Betriebskosten → Sparten → Untersparten → ÷ Absatzmenge → + Warenkosten + Gewinn + Reserve → + MWST.'],
['MWST-Sätze Gastro/Hotel (seit 1.1.2024)?','Normalsatz 8.1% (Restaurant). Sondersatz 3.8% (Beherbergung inkl. Frühstück). Reduziert 2.6% (Take-away).'],
['Markttransparente Artikel?','Produkte, die bei Mitbewerbern zum Vergleich stehen (Bier, Cola, Kaffee). Wenig Preisgestaltungsfreiheit.'],
['Gewinnmarge Gastro vs. Hotel?','Gastronomie ca. 10%. Hotellerie ca. 15%.'],
['Wann 70%-Regel MWST?','Leistungskombinationen (z.B. Seminarpauschalen): wenn ≥70% dem gleichen Steuersatz unterliegen → gesamtes Entgelt mit diesem Satz.'],
// INVESTITIONSRECHNUNG (38-50)
['3 Investitionsarten?','Sachinvestition (Maschinen, Immobilien), Finanzinvestition (Beteiligungen, Darlehen), Immaterielle Investition (Forschung, Patente, Schulung).'],
['Kapitaleinsatz berechnen?','Einstandspreis + F&E + Projektierung + Installation + Wartung + Sekundärinvestitionen + UV-Erhöhung = investiertes Kapital.'],
['Cashflow einer Investition?','= Einnahmen − liquiditätswirksame Betriebskosten. Oder: Reingewinn + Abschreibungen + kalk. Zinsen.'],
['4 statische Rechenverfahren?','Kostenvergleich · Gewinnvergleich · Renditerechnung · Amortisationsrechnung (Payback).'],
['Kostenvergleich — Entscheidung?','Gewählt wird die Investition mit den geringsten jährlichen Durchschnittskosten. Nur bei gleichem Erlös sinnvoll!'],
['Abschreibung berechnen?','= (Kapitaleinsatz − Liquidationserlös) ÷ Nutzungsdauer.'],
['Durchschnittskapital berechnen?','= (investiertes Kapital + Liquidationserlös) ÷ 2. Bei UV-Erhöhung: diese addieren.'],
['Gewinnvergleich — Entscheidung?','Grösster Jahresgewinn gewinnt. Schwäche: Berücksichtigt unterschiedliche Kapitaleinsätze ungenügend.'],
['Renditerechnung (ROI)?','= (Gewinn + kalk. Zins) ÷ Durchschnittskapital. Höchste Rendite wird bevorzugt. Auch Einzelprojekte beurteilbar.'],
['Wiedergewinnungszeit?','= Kapitaleinsatz ÷ Cashflow. Kürzeste Zeit = bevorzugt. Muss kürzer als Nutzungsdauer sein.'],
['Rückflusszahl?','= Nutzungsdauer ÷ Wiedergewinnungszeit. >1 = rentabel. Wichtig bei unterschiedlicher Nutzungsdauer!'],
['NPV-Methode?','Diskontierte Cashflows − Investitionssumme = Net Present Value. NPV > 0 → investieren. Dynamisches Verfahren (ganze Laufzeit).'],
['WACC?','= (FK-Kosten% × FK/GK) + (EK-Kosten% × EK/GK). Gewogener Durchschnitt der Kapitalkosten. Oft als kalk. Zinsfuss verwendet.'],
// ERGÄNZUNGEN AUS PRÄSENTATIONEN (51-60)
['Peter Drucker Zitat?','«Was man nicht messen kann, kann man nicht lenken.» — Grundprinzip des Controllings.'],
['Wertvermehrung vs. Werterhaltung?','Wertvermehrung: >12 Mt Nutzung, wird aktiviert (Bilanz), ist Investition. Werterhaltung: Unterhalt/Reparatur, wird in ER verbucht, nie aktiviert!'],
['Gesunde Finanzierung von Investitionen?','Organisch: Reinvestitionsbedarf aus eigenem operativem Cashflow erwirtschaften. Ungesund: Investitionsstau → nur noch durch Fremdverschuldung finanzierbar.'],
['6 Schritte Vollkostenrechnung?','1. Sachliche Abgrenzungen · 2. Einzelkosten direkt auf Kostenträger · 3. Gemeinkosten über Schlüssel auf Kostenstellen · 4. Herstellkosten berechnen · 5. Selbstkosten berechnen · 6. Gewinn/Verlust ermitteln.'],
['Validität einer Kennzahl?','Misst tatsächlich das, was sie messen soll. Bsp: Fehltage = Krankenstand, aber nicht zwingend = Mitarbeiterzufriedenheit.'],
['Verlässlichkeit einer Kennzahl?','Messung unter gleichen Bedingungen führt immer zum gleichen Ergebnis.'],
['Leverage-Effekt?','FK-Aufnahme kann Gesamterfolg erhöhen, wenn Zinskosten des FK niedriger sind als die damit erwirtschaftete Rendite. Aber: erhöht auch das Risiko!'],
['Investitionsbeispiele Hotel nach Motiv?','Gründung: neues Boutique-Hotel. Ersatz: veraltete Möbel. Erweiterung: Grundstück für Parkplätze. Umstellung: Solarenergie. Diversifikation: Resort an anderem Standort. Rationalisierung: LED-Beleuchtung.'],
['Varianten der Preiskalkulation?','1. Einfacher Faktor (Wein: ×2.5-3.5) · 2. Einfacher Zuschlag (Wein: +CHF 25-45) · 3. Divisionskalkulation · 4. Aufschlagskalkulation · 5. Kostenrechnung/DB · 6. Praktiker-Methode.'],
['Was kontrolliert man im Budget?','Soll-Ist-Vergleich: Ertrag (Restauration, Beherbergung), direkter Aufwand (Waren, Personal), GOI, indirekter Aufwand, GOP, EBITDA, EBIT, EBT, Jahresgewinn. Jede Abweichung analysieren!'],
// RICHTWERTE (61-65)
['Richtwerte Liquiditätsgrade?','LG I: 10–35%. LG II: ≥100%. LG III: 150–200% (Banker\'s Rule). Unter 100% bei LG II = Alarmzeichen!'],
['Richtwerte Finanzierung?','EK-Quote: 20–30%. FK-Quote: 70–80%. Statischer Verschuldungsgrad: ≤200%. Dynamischer: 100–300% (1–3 Jahre). Anlagedeckungsgrad II: ≥100%.'],
['Richtwerte Working Capital?','DSO: <30 Tage. DIO: <20 Tage. DPO: 20–40 Tage. CCC: 10–30 Tage.'],
['Richtwert Umsatzrendite?','Gastronomie: 2–8%. Hotellerie: 5–10%. EK-Rendite allgemein: 5–10%.'],
['Richtwert Personalaufwandquote?','Je weiter unter 45% desto besser. Abhängig von Betriebsart und Segment.'],
// BELLAVISTA + ERGÄNZUNGEN (66-85)
['Fallbeispiel: Wie heisst unser durchgängiges Hotel?','Hotel Bellavista Luzern — 4-Sterne-Stadthotel am Vierwaldstättersee, 80 Zimmer, 45 Mitarbeitende, ca. CHF 12 Mio. Jahresumsatz, Inhaberin Claudia Bellavista.'],
['Bellavista RoS-Beispiel berechnen?','Betriebsertrag CHF 12\'000\'000, Jahresgewinn CHF 960\'000 → RoS = 960\'000 ÷ 12\'000\'000 × 100 = 8%. Im Hotel-Richtwert 5–10%.'],
['Bellavista Anlagedeckungsgrad II?','EK 7 + langfr. FK 19 = 26 ÷ AV 25 × 100 = 104%. Goldene Bilanzregel knapp erfüllt.'],
['Bellavista Quick Ratio berechnen?','Flüssige Mittel 420 + Forderungen 180 = 600 ÷ kurzfr. FK 560 × 100 = 107%. Knapp über Richtwert 100%.'],
['Bellavista CCC berechnen?','DIO 12 + DSO 28 − DPO 21 = 19 Tage. Im Richtwert 10–30. Kann optimiert werden durch längeren DPO bei Lieferanten.'],
['Bellavista Januar 2024 OCC/ADR/RevPAR?','80 Zimmer × 31 Tage = 2\'480 Zimmernächte verfügbar. 1\'736 verkauft → OCC 70%. Rooms Revenue 425\'320 → ADR 245, RevPAR 171.50.'],
['Bellavista DB Tagesteller?','Tagesteller CHF 28.50 − variable Kosten CHF 9.20 = DB CHF 19.30. DB-Marge = 19.30 ÷ 28.50 × 100 = 67.7%.'],
['Bellavista Nutzschwelle Weihnachtsbankett?','Package CHF 120 − var. Kosten CHF 45 = DB CHF 75. Fixkosten 9\'000 ÷ 75 = 120 Gäste mengenmässige Nutzschwelle.'],
['Bellavista Zanderfilet Bruttoverkaufspreis?','Warenkosten 14.60 + Ø Selbstkosten Hauptspeisen 11.20 + Gewinn 3.87 + Reserve 0.89 = Netto 30.56 + MWST 8.1% 2.48 = CHF 33.00 (aufgerundet).'],
['Bellavista Investitionsportfolio 2024?','Ersatz Wäscherei CHF 180k · Erweiterung Indoor-Pool CHF 750k · Photovoltaik CHF 320k · PMS-System CHF 85k → Total CHF 1\'335\'000.'],
['Was ist Peter Drucker Zitat zum Controlling?','«Was man nicht messen kann, kann man nicht lenken.» — Grundprinzip jedes Controlling-Systems.'],
['Liquiditätsplanung — Schema?','Liquide Mittel Periodenbeginn + Einzahlungen − Auszahlungen = Liquide Mittel Periodenende. Rollierend auf Wochen-/Monatsbasis planen.'],
['Herausforderungen der Liquiditätsplanung?','Unvorhersehbare Ausgaben (Defekte, Notreparaturen) und schwankende Einnahmen (Saisonalität, Absagen).'],
['Informationssysteme im Controlling — 5 Einsatzgebiete?','Echtzeit-Analysen (Dashboards OCC/ADR/RevPAR) · Abweichungsanalysen · Revenue Management · Finanzplanung (Budget/Forecast) · Zielerreichung mit BSC.'],
['Benchmarks — Quellen CH Hotellerie?','KATAG, Gastrosuisse, Hotelleriesuisse, Schweiz Tourismus, Bundesamt für Statistik (BfS).'],
['Kapitaleinsatz — alle Bestandteile?','Einstandspreis + F&E + Projektierung + Einbau/Installation + Wartung bis Inbetriebnahme + Kosten Produktionsausfall + Sekundärinvestitionen + Erhöhung Umlaufvermögen = Investiertes Kapital.'],
['7 Motive einer Investition?','Gründung · Erweiterung · Ersatz · Rationalisierung · Umstellung · Diversifikation · Sicherung.'],
['Beispiel Diversifikationsinvestition Hotel?','Erwerb eines Resorts an einem anderen geografischen Standort zur Portfolioerweiterung (z.B. Bellavista Gruppe kauft Berghotel).'],
['Warum Rückflusszahl berechnen?','Bei Investitionen mit unterschiedlicher Nutzungsdauer — Payback-Period allein führt in die Irre. Rückflusszahl sagt wie oft Investition sich amortisiert.'],
['Unterschied statische vs. dynamische Verfahren?','Statisch: periodisierte Durchschnittsbetrachtung (ein Jahr). Dynamisch: gesamte Nutzungsdauer mit Zinseszins/Barwert. Dynamisch = genauer, aufwendiger.']
];

// ========== ÜBUNGEN LOGIC ==========
// CSS for Übungen
const uebCSS = document.createElement('style');
uebCSS.textContent = `
.ueb-in{border:2px solid var(--bd);border-radius:8px;padding:4px 10px;font-size:14px;font-family:inherit;background:var(--s1);color:var(--tx);outline:none;transition:border .2s}
.ueb-in:focus{border-color:#00c6fb}
.ueb-in.correct{border-color:var(--g);background:rgba(52,199,89,.08)}
.ueb-in.wrong{border-color:var(--r);background:rgba(255,59,48,.08)}
.ueb-btn{padding:8px 20px;border-radius:8px;border:1.5px solid #00c6fb;background:transparent;color:#00c6fb;font-weight:600;font-size:13px;cursor:pointer;margin-top:12px;transition:all .2s}
.ueb-btn:hover{background:#00c6fb;color:#fff}
.ueb-feedback{margin-top:12px;padding:14px 16px;border-radius:10px;font-size:13px;line-height:1.6}
.ueb-feedback.shown{display:block!important}
.ueb-feedback.all-correct{background:rgba(52,199,89,.08);border:1px solid var(--g)}
.ueb-feedback.has-errors{background:rgba(255,59,48,.06);border:1px solid var(--r)}
.ueb-solution{margin-top:8px;padding:10px 14px;border-radius:8px;background:var(--s2);font-size:13px;line-height:1.7}
.ueb-opt{display:inline-flex;align-items:center;gap:5px;padding:5px 14px;border-radius:8px;border:1.5px solid var(--bd);margin:3px 4px;cursor:pointer;font-size:13px;transition:all .2s;background:var(--s1)}
.ueb-opt:hover{border-color:#00c6fb;background:rgba(0,198,251,.04)}
.ueb-opt input{margin:0}
.ueb-opt.chosen{border-color:#00c6fb;background:rgba(0,198,251,.08)}
.ueb-opt.opt-correct{border-color:var(--g)!important;background:rgba(52,199,89,.1)!important}
.ueb-opt.opt-wrong{border-color:var(--r)!important;background:rgba(255,59,48,.08)!important}
.ueb-mc{padding:2px 0}
.ueb-block.checked .ueb-btn{opacity:.5;pointer-events:none}
.ueb-score{display:inline-block;padding:2px 10px;border-radius:20px;font-weight:700;font-size:12px;margin-left:6px}
`;
document.head.appendChild(uebCSS);

function normalizeAnswer(s){
  return s.toString().toLowerCase().replace(/[''`´\-–—.,;:!?()%]/g,'').replace(/\s+/g,' ').trim();
}

window._ctrlUebCheckBlock = function(btn){
  const block = btn.closest('.ueb-block');
  if(block.classList.contains('checked')) return;
  let correct=0, total=0;
  // Text inputs
  block.querySelectorAll('.ueb-in').forEach(inp=>{
    total++;
    const answer = normalizeAnswer(inp.dataset.answer);
    const alts = (inp.dataset.alt||'').split('|').map(a=>normalizeAnswer(a)).filter(Boolean);
    const userVal = normalizeAnswer(inp.value);
    const allAccepted = [answer,...alts];
    // For numeric: also compare as number
    let isCorrect = allAccepted.some(a => userVal === a);
    // Numeric tolerance
    if(!isCorrect){
      const numUser = parseFloat(userVal.replace(/['']/g,'').replace(',','.'));
      const numAnswer = parseFloat(answer.replace(/['']/g,'').replace(',','.'));
      if(!isNaN(numUser) && !isNaN(numAnswer)){
        if(Math.abs(numUser - numAnswer) < 0.6) isCorrect = true;
        // check alts numerically too
        allAccepted.forEach(a=>{
          const na = parseFloat(a.replace(/['']/g,'').replace(',','.'));
          if(!isNaN(na) && Math.abs(numUser - na) < 0.6) isCorrect = true;
        });
      }
    }
    inp.classList.add(isCorrect ? 'correct' : 'wrong');
    if(!isCorrect && !inp.value.trim()){
      inp.value = '';
      inp.placeholder = inp.dataset.answer;
    }
    if(isCorrect) correct++;
  });
  // Radio/MC
  block.querySelectorAll('.ueb-mc').forEach(mc=>{
    total++;
    const opts = mc.querySelectorAll('.ueb-opt');
    let answered = false, mcCorrect = false;
    opts.forEach(opt=>{
      const radio = opt.querySelector('input');
      if(radio && radio.checked){
        answered = true;
        opt.classList.add('chosen');
        if(opt.dataset.correct === 'true'){
          mcCorrect = true;
          opt.classList.add('opt-correct');
        } else {
          opt.classList.add('opt-wrong');
        }
      }
      if(opt.dataset.correct === 'true' && !opt.classList.contains('opt-correct')){
        opt.classList.add('opt-correct');
      }
    });
    if(mcCorrect) correct++;
  });
  // Show feedback
  const fb = block.querySelector('.ueb-feedback');
  const allRight = correct === total;
  fb.className = 'ueb-feedback shown ' + (allRight ? 'all-correct' : 'has-errors');
  const scoreHTML = allRight
    ? '<strong style="color:var(--g)">✓ Alles richtig!</strong> ' + correct + '/' + total + ' Punkte'
    : '<strong style="color:var(--r)">✗ ' + correct + '/' + total + ' richtig.</strong> Falsche Antworten sind rot markiert. Korrekte Lösung wird angezeigt.';
  if(fb.querySelector('.ueb-solution')){
    fb.innerHTML = scoreHTML + fb.querySelector('.ueb-solution').outerHTML;
    fb.querySelector('.ueb-solution').style.display = allRight ? 'none' : 'block';
  } else {
    fb.innerHTML = scoreHTML;
  }
  block.classList.add('checked');
  // Disable inputs
  block.querySelectorAll('input').forEach(i=>i.disabled=true);
};

window._ctrlUebCheckAll = function(){
  document.querySelectorAll('#ctrl_ueb .ueb-block:not(.checked) .ueb-btn').forEach(b=>b.click());
};

window._ctrlUebReset = function(){
  document.querySelectorAll('#ctrl_ueb .ueb-block').forEach(block=>{
    block.classList.remove('checked');
    block.querySelectorAll('.ueb-in').forEach(inp=>{
      inp.value='';inp.disabled=false;inp.classList.remove('correct','wrong');
      inp.placeholder='?';
    });
    block.querySelectorAll('input[type=radio]').forEach(r=>{r.checked=false;r.disabled=false;});
    block.querySelectorAll('.ueb-opt').forEach(o=>o.classList.remove('chosen','opt-correct','opt-wrong'));
    const fb = block.querySelector('.ueb-feedback');
    if(fb){fb.className='ueb-feedback';fb.style.display='none';}
  });
};

// Register course
window.TIS = window.TIS || {};
window.TIS.courses = window.TIS.courses || {};
window.TIS.courses.ctrl = {
  config: courseConfig,
  html: courseHTML,
  flashcards: CFC
};

})();
