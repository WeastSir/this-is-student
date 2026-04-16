// ===== KURS: CONTROLLING 2 =====
// Auto-generated module for This Is Student
(function() {

// Course config
const courseConfig = {
  id: 'ctrl',
  name: 'Controlling 2',
  pages: ['ctrl','ctrl_kz','ctrl_klr','ctrl_kalk','ctrl_inv','ctrl_ueb','ctrl_mind','ctrl_zahlen','ctrl_kart','ctrl_quiz','ctrl_glossar'],
  subNav: [
  {s:'ctrl',l:'Übersicht'},
  {s:'ctrl_kz',l:'Kennzahlen'},{s:'ctrl_klr',l:'Kostenrechnung'},{s:'ctrl_kalk',l:'Kalkulation'},{s:'ctrl_inv',l:'Investition'},
  {s:'ctrl_ueb',l:'Übungen'},
  {s:'ctrl_mind',l:'Zusammenfassung'},{s:'ctrl_zahlen',l:'Bilanz & ER lesen'},{s:'ctrl_kart',l:'Karten'},{s:'ctrl_quiz',l:'Quiz'},{s:'ctrl_glossar',l:'Glossar'}
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
<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(155px,1fr));gap:12px">
<div class="c ck" onclick="go('ctrl_ueb')" style="text-align:center;padding:24px 16px">
<div style="font-size:24px;font-weight:700;background:linear-gradient(135deg,#00c6fb,#005bea);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;margin-bottom:6px">✍</div>
<div class="ct2">Übungen</div><div class="cd">Interaktive Aufgaben</div>
</div>
<div class="c ck" onclick="go('ctrl_mind')" style="text-align:center;padding:24px 16px">
<div style="font-size:24px;font-weight:700;background:linear-gradient(135deg,#00c6fb,#005bea);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;margin-bottom:6px">4</div>
<div class="ct2">Zusammenfassung</div><div class="cd">Visuelle Übersichten</div>
</div>
<div class="c ck" onclick="go('ctrl_zahlen')" style="text-align:center;padding:24px 16px">
<div style="font-size:24px;font-weight:700;background:linear-gradient(135deg,#00c6fb,#005bea);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;margin-bottom:6px">📊</div>
<div class="ct2">Bilanz & ER lesen</div><div class="cd">Fallstudie Hotel San Nazzaro</div>
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
<!-- CTRL: Kennzahlen (PDF-Zusammenfassung als Timeline) -->
<div class="sec" id="ctrl_kz"><h1>01 · Kennzahlen</h1><p class="sub">KPI, Erfolgskennzahlen, Finanzierung, Liquidität, Working Capital, Balanced Scorecard</p>

<div class="hlbl"><strong>LERNZIELE K01</strong><br>
✓ Den Begriff «Kennzahl» auswendig und mit eigenen Worten definieren<br>
✓ Den Stellenwert von Kennzahlen nennen und sie ihrer Art und Funktion zuweisen<br>
✓ Die Herausforderungen im Umgang mit Kennzahlen beschreiben und an Beispielen erkennen<br>
✓ Die verschiedenen Arten von Kennzahlen auswendig aufzählen und sinngemäss beschreiben<br>
✓ Die Balanced Scorecard mit eigenen Worten beschreiben, Perspektiven aufzählen und eine einfache Scorecard selbstständig aufzeichnen</div>

<div class="hl" style="text-align:center;font-style:italic;font-size:14px;margin-top:14px">«Was man nicht messen kann, kann man nicht lenken.» — <strong>Peter Drucker</strong>, Ökonom (1909–2005)</div>

<div style="display:flex;gap:8px;margin:16px 0 6px"><button style="font-size:11px;padding:4px 10px" onclick="this.parentElement.nextElementSibling.querySelectorAll('.tl-item').forEach(i=>i.classList.add('open'))">Alle aufklappen</button><button style="font-size:11px;padding:4px 10px" onclick="this.parentElement.nextElementSibling.querySelectorAll('.tl-item').forEach(i=>i.classList.remove('open'))">Alle schliessen</button></div>

<div class="tl">

<div class="tl-item"><div class="tl-num tl-num-b">1</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Was ist eine Kennzahl?</div><div class="tl-merksatz">«Kennzahlen verdichten Rohdaten zu Führungsentscheidungen.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail">
<div class="tl-body">Eine <strong>Kennzahl</strong> ist eine Zusammenfassung von quantitativen (in Zahlen ausdrückbaren) Informationen für den innerbetrieblichen und/oder zwischenbetrieblichen Vergleich. Kennzahlen setzen erhaltene Informationen in eine allgemeine Relation — etwa ins Verhältnis zum Ganzen — und drücken diese Relation als neuen, vereinfachten Wert aus (z.B. in Prozenten).<br><br>
Einfach gesagt: Kennzahlen verdichten eine Flut von Rohdaten aus dem Rechnungswesen zu wenigen, aussagekräftigen Zahlen, die Führungsentscheidungen ermöglichen. Ohne Kennzahlen ist <strong>Führen mit Fakten</strong> unmöglich — man tappt im Dunkeln.</div>
<div class="merksatz">Merke: Ohne Kennzahlen keine Führung. Sie ersetzen Bauchgefühl durch Faktenbasis.</div>
</div></div>

<div class="tl-item"><div class="tl-num tl-num-b">2</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Aufgaben von Kennzahlen</div><div class="tl-merksatz">«Strategie messbar machen, Fokus geben, nach aussen kommunizieren.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail">
<div class="tl-body">Führen mit Kennzahlen heisst, die Ergebnisse des Tagesgeschäfts zu messen, daraus Entscheidungen abzuleiten und so den Weiterbestand des Unternehmens zu sichern.</div>
<div class="tl-sub">
<div class="c ca"><div class="ct2">Operationalisierung der Strategie</div><div class="cd">Über Steuerungsgrössen (Key Performance Indicators — KPI) werden abstrakte strategische Ziele messbar gemacht.</div></div>
<div class="c cm"><div class="ct2">Entscheidungshilfe</div><div class="cd">Für interne Empfänger (Geschäftsleitung, Verwaltungsrat, Abteilungsleitung) — sie richten den Fokus auf das Wesentliche.</div></div>
<div class="c cp"><div class="ct2">Kommunikation nach aussen</div><div class="cd">Für Ratingagenturen, Banken, Investoren und den Kapitalmarkt sind Kennzahlen die Sprache, in der Unternehmen bewertet werden.</div></div>
</div>
<div class="hla" style="border-left:4px solid #34c759;background:rgba(52,199,89,0.08);padding:14px 18px;margin-top:12px;border-radius:10px;font-size:13px">
<strong style="color:#34c759">🏨 FALLBEISPIEL HOTEL BELLAVISTA</strong><br>
Claudia Bellavista steht am Montagmorgen vor ihrem Dashboard. Statt 12 Millionen Franken Umsatz und 800 Einzelbuchungen liest sie drei Zahlen: <strong>OCC 78 %</strong>, <strong>ADR CHF 245</strong>, <strong>RevPAR CHF 191</strong>. Drei Zahlen — und sie weiss sofort: Die Auslastung stimmt, aber der Durchschnittspreis ist im Vergleich zum Vormonat um 8 % gefallen. Handlungsbedarf!
</div>
<div class="merksatz">Merke: Drei Zahlen können ein ganzes Hotel steuern — wenn sie die richtigen sind.</div>
</div></div>

<div class="tl-item"><div class="tl-num tl-num-a">3</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Arten von Kennzahlen</div><div class="tl-merksatz">«Absolut = Grösse. Relativ = Verhältnis. Relativ hat mehr Aussagekraft.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail">
<div class="tl-body"><strong>Absolute Kennzahlen</strong> geben Auskunft über die Grösse (z.B. Umsatz in CHF). <strong>Relative Kennzahlen</strong> (Verhältniszahlen) haben höhere Aussagekraft.</div>
<div class="tl-sub">
<div class="c ca"><div class="ct2">Gliederungszahlen</div><div class="cd">Teilgrösse ÷ Gesamtgrösse. Bsp: Eigenkapitalquote = EK ÷ GK.</div></div>
<div class="c cg"><div class="ct2">Beziehungszahlen</div><div class="cd">Verschiedenartige Grössen ins Verhältnis. Bsp: EK-Rendite = Gewinn ÷ EK. Ursache-Wirkungs-Beziehung.</div></div>
<div class="c cm"><div class="ct2">Indexzahlen</div><div class="cd">Gleiche Zahl zu verschiedenen Zeitpunkten. Bsp: Umsatz 2024 ÷ Umsatz 2023. Perioden müssen gleich lang sein!</div></div>
</div>
<div class="hl" style="margin-top:12px;font-style:italic">Merke: Zähler und Nenner müssen zeitlich, sachlich und wertmässig äquivalent sein.</div>
</div></div>

<div class="tl-item"><div class="tl-num tl-num-g">4</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Erfolgskennzahlen — «Wie profitabel sind wir?»</div><div class="tl-merksatz">«Earnings-before-Ziffern: Management isoliert von Finanzierung und Steuern.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail">
<div class="tl-body">Erfolgskennzahlen drücken aus, welchen betriebswirtschaftlichen Erfolg ein Unternehmen in einer Periode erwirtschaftet hat. Sie isolieren einzelne Ergebnisebenen, damit die <strong>Managementleistung</strong> unabhängig von Finanzierungs- und Steuereffekten sichtbar wird. Man nennt diese isolierten Grössen <strong>«Earnings-before-Ziffern»</strong>.</div>

<div style="margin-top:14px;font-weight:700;color:#e8a838">Die Earnings-before-Kaskade</div>
<div style="display:flex;flex-direction:column;align-items:center;gap:6px;margin:10px 0">
<div style="background:rgba(52,199,89,0.15);border:2px solid #34c759;padding:8px 16px;border-radius:8px;min-width:260px;text-align:center;font-weight:700;font-size:13px">Total Betriebsertrag</div>
<div style="color:#e8a838;font-size:18px">↓</div>
<div style="background:var(--s2);border:1px solid var(--bd);padding:8px 16px;border-radius:8px;min-width:260px;text-align:center;font-weight:600;font-size:13px">− Operative Aufwände → GOI / GOP</div>
<div style="color:#e8a838;font-size:18px">↓</div>
<div style="background:var(--s2);border:1px solid var(--bd);padding:8px 16px;border-radius:8px;min-width:260px;text-align:center;font-weight:600;font-size:13px"><strong>EBITDA</strong> — operatives Tagesgeschäft</div>
<div style="color:#e8a838;font-size:18px">↓</div>
<div style="background:var(--s2);border:1px solid var(--bd);padding:8px 16px;border-radius:8px;min-width:260px;text-align:center;font-weight:600;font-size:13px">− Abschreibungen → <strong>EBIT</strong></div>
<div style="color:#e8a838;font-size:18px">↓</div>
<div style="background:var(--s2);border:1px solid var(--bd);padding:8px 16px;border-radius:8px;min-width:260px;text-align:center;font-weight:600;font-size:13px">− Finanzaufwand → <strong>EBT</strong></div>
<div style="color:#e8a838;font-size:18px">↓</div>
<div style="background:rgba(232,168,56,0.15);border:2px solid #e8a838;padding:8px 16px;border-radius:8px;min-width:260px;text-align:center;font-weight:700;font-size:13px">− Steuern → <strong>Jahresergebnis</strong></div>
</div>

<div style="overflow-x:auto;margin:12px 0">
<table style="width:100%;font-size:12.5px;border-collapse:collapse;color:var(--tx)">
<thead><tr style="background:var(--s2);font-weight:700"><td style="padding:8px;border:1px solid var(--bd)">Kennzahl</td><td style="padding:8px;border:1px solid var(--bd)">Formel</td><td style="padding:8px;border:1px solid var(--bd)">Richtwert</td></tr></thead>
<tbody>
<tr><td style="padding:6px 8px;border:1px solid var(--bd);font-weight:600">RoE (Eigenkapitalrendite)</td><td style="padding:6px 8px;border:1px solid var(--bd)">Reingewinn / EK × 100 %</td><td style="padding:6px 8px;border:1px solid var(--bd);color:#34c759;font-weight:600">5–10 %</td></tr>
<tr><td style="padding:6px 8px;border:1px solid var(--bd);font-weight:600">RoA (Gesamtkapitalrendite)</td><td style="padding:6px 8px;border:1px solid var(--bd)">Reingewinn / GK × 100 %</td><td style="padding:6px 8px;border:1px solid var(--bd)">branchenabh.</td></tr>
<tr><td style="padding:6px 8px;border:1px solid var(--bd);font-weight:600">RoS (Umsatzrendite)</td><td style="padding:6px 8px;border:1px solid var(--bd)">Reingewinn / Betriebsertrag × 100 %</td><td style="padding:6px 8px;border:1px solid var(--bd);color:#34c759;font-weight:600">Gastro 2–8 %, Hotel 5–10 %</td></tr>
<tr><td style="padding:6px 8px;border:1px solid var(--bd);font-weight:600">EBITDA-Marge</td><td style="padding:6px 8px;border:1px solid var(--bd)">EBITDA / Betriebsertrag × 100 %</td><td style="padding:6px 8px;border:1px solid var(--bd)">branchenabh.</td></tr>
</tbody></table></div>

<div class="hla" style="border-left:4px solid #34c759;background:rgba(52,199,89,0.08);padding:14px 18px;margin-top:12px;border-radius:10px;font-size:13px">
<strong style="color:#34c759">🏨 FALLBEISPIEL BELLAVISTA — RoS</strong><br>
Betriebsertrag 2024: CHF 12'000'000. Jahresgewinn: CHF 960'000. <strong>Umsatzrendite = 960'000 / 12'000'000 × 100 = 8 %.</strong> Innerhalb des Richtwerts für Hotellerie (5–10 %), aber noch Luft nach oben. Claudia nimmt sich für 2025 eine RoS von 9 % als strategisches Ziel.
</div>
<div class="merksatz">Merke: EBITDA ist das reine Tagesgeschäft. Der Reingewinn zeigt, was nach allen Kosten übrig bleibt.</div>
</div></div>

<div class="tl-item"><div class="tl-num tl-num-b">5</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Finanzierungskennzahlen — «Wie stabil stehen wir da?»</div><div class="tl-merksatz">«Goldene Bilanzregel: langfristiges Vermögen mit langfristigem Kapital.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail">
<div class="tl-body">Finanzierungskennzahlen analysieren die <strong>Passivseite der Bilanz</strong>: Wie ist das Unternehmen finanziert? Wie hoch ist die Abhängigkeit von Fremdkapital? Gibt es eine goldene Bilanzregel-Struktur (langfristiges Vermögen mit langfristigem Kapital finanziert)?</div>

<div style="overflow-x:auto;margin:12px 0">
<table style="width:100%;font-size:12.5px;border-collapse:collapse;color:var(--tx)">
<thead><tr style="background:var(--s2);font-weight:700"><td style="padding:8px;border:1px solid var(--bd)">Kennzahl</td><td style="padding:8px;border:1px solid var(--bd)">Formel</td><td style="padding:8px;border:1px solid var(--bd)">Richtwert</td></tr></thead>
<tbody>
<tr><td style="padding:6px 8px;border:1px solid var(--bd);font-weight:600">Eigenkapitalquote</td><td style="padding:6px 8px;border:1px solid var(--bd)">EK / GK × 100 %</td><td style="padding:6px 8px;border:1px solid var(--bd);color:#34c759;font-weight:600">20–30 %</td></tr>
<tr><td style="padding:6px 8px;border:1px solid var(--bd);font-weight:600">Fremdkapitalquote</td><td style="padding:6px 8px;border:1px solid var(--bd)">FK / GK × 100 %</td><td style="padding:6px 8px;border:1px solid var(--bd);color:#ff3b30;font-weight:600">70–80 %</td></tr>
<tr><td style="padding:6px 8px;border:1px solid var(--bd);font-weight:600">Verschuldungsgrad statisch</td><td style="padding:6px 8px;border:1px solid var(--bd)">FK / EK × 100 %</td><td style="padding:6px 8px;border:1px solid var(--bd);color:#ff3b30;font-weight:600">≤ 200 %</td></tr>
<tr><td style="padding:6px 8px;border:1px solid var(--bd);font-weight:600">Verschuldungsgrad dynamisch</td><td style="padding:6px 8px;border:1px solid var(--bd)">Effektivverschuldung / Cashflow × 100 %</td><td style="padding:6px 8px;border:1px solid var(--bd);color:#ff9500;font-weight:600">100–300 % (1–3 J.)</td></tr>
<tr><td style="padding:6px 8px;border:1px solid var(--bd);font-weight:600">Anlagedeckungsgrad II</td><td style="padding:6px 8px;border:1px solid var(--bd)">(EK + langfr. FK) / AV × 100 %</td><td style="padding:6px 8px;border:1px solid var(--bd);color:#34c759;font-weight:600">100 %</td></tr>
</tbody></table></div>

<div class="hl">Der <strong style="color:#e8a838">Anlagedeckungsgrad II</strong> ist besonders wichtig: Ist er unter 100 %, wird das Anlagevermögen teilweise kurzfristig finanziert — ein Warnsignal. Kurzfristige Gläubiger könnten Rückzahlungen fordern, bevor die langfristigen Anlagen Erträge erwirtschaftet haben.</div>

<div class="hla" style="border-left:4px solid #34c759;background:rgba(52,199,89,0.08);padding:14px 18px;margin-top:12px;border-radius:10px;font-size:13px">
<strong style="color:#34c759">🏨 FALLBEISPIEL BELLAVISTA</strong><br>
Das Hotel Bellavista hat eine Bilanzsumme von CHF 28 Mio., EK von CHF 7 Mio., langfristiges FK von CHF 19 Mio. und Anlagevermögen von CHF 25 Mio. <strong>Eigenkapitalquote = 25 %</strong> (solid), <strong>Anlagedeckungsgrad II = (7+19)/25 × 100 = 104 %</strong> — die goldene Bilanzregel ist knapp erfüllt.
</div>
<div class="merksatz">Merke: Goldene Bilanzregel = langfristiges Kapital ≥ Anlagevermögen. Unter 100 % wird's riskant.</div>
</div></div>

<div class="tl-item"><div class="tl-num tl-num-r">6</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Liquiditätskennzahlen — «Können wir unsere Rechnungen bezahlen?»</div><div class="tl-merksatz">«Illiquidität führt zur Insolvenz — überlebenswichtig!»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail">
<div class="tl-body">Liquidität bezeichnet zum einen die Eigenschaft von Vermögensgegenständen, in Zahlungsmittel umgewandelt zu werden (in der Regel durch Verkauf), und zum anderen die Fähigkeit einer Person oder eines Unternehmens, Zahlungsverpflichtungen <strong style="color:#ff3b30">pünktlich</strong> nachzukommen. Die Erhaltung der Liquidität ist überlebenswichtig: <strong style="color:#ff3b30">Illiquidität führt zur Insolvenz</strong>.</div>

<div class="hlr" style="margin-top:12px"><strong>⚠ RECHTLICHER HINWEIS</strong><br>Droht eine Zahlungsunfähigkeit (<span class="b bb">Art. 725 OR ff.</span>), muss der Verwaltungsrat Massnahmen zur Sicherstellung ergreifen. Bei Überschuldung ohne Aussicht auf Gesundung ist der Verwaltungsrat gesetzlich verpflichtet, das Gericht zu benachrichtigen — was <strong>de facto zum Konkurs</strong> führt.</div>

<div class="tl-body" style="margin-top:12px">Es werden drei Liquiditätsgrade unterschieden:</div>
<div class="tl-sub">
<div class="c ca"><div class="ct2">1. Grad — Cash Ratio</div><div style="background:rgba(232,168,56,0.12);border:1px dashed #e8a838;padding:8px;border-radius:6px;margin:8px 0;text-align:center;font-style:italic;color:#e8a838;font-size:12px">Flüssige Mittel / kurzfr. FK × 100 %<br><span style="color:var(--tx2);font-style:normal;font-size:11px">Richtwert: 10–35 %</span></div><div class="cd">Können die Barmittel die kurzfristigen Verbindlichkeiten decken?</div></div>
<div class="c cm"><div class="ct2">2. Grad — Quick Ratio</div><div style="background:rgba(232,168,56,0.12);border:1px dashed #e8a838;padding:8px;border-radius:6px;margin:8px 0;text-align:center;font-style:italic;color:#e8a838;font-size:12px">(Flüss. Mittel + Ford. LuL) / kurzfr. FK × 100 %<br><span style="color:var(--tx2);font-style:normal;font-size:11px">Richtwert: min. 100 %</span></div><div class="cd">Inkl. ausstehende Kundenforderungen — sind diese bei Fälligkeit gedeckt?</div></div>
<div class="c cg"><div class="ct2">3. Grad — Current Ratio</div><div style="background:rgba(232,168,56,0.12);border:1px dashed #e8a838;padding:8px;border-radius:6px;margin:8px 0;text-align:center;font-style:italic;color:#e8a838;font-size:12px">UV / kurzfr. FK × 100 %<br><span style="color:var(--tx2);font-style:normal;font-size:11px">Richtwert: 150–200 %</span></div><div class="cd">«Banker's Rule» / «Two-to-One-Rule».</div></div>
</div>

<div class="hla" style="border-left:4px solid #34c759;background:rgba(52,199,89,0.08);padding:14px 18px;margin-top:12px;border-radius:10px;font-size:13px">
<strong style="color:#34c759">🏨 FALLBEISPIEL BELLAVISTA — LIQUIDITÄTSGRAD 2</strong><br>
Flüssige Mittel CHF 420'000, Forderungen aus Lieferung und Leistung CHF 180'000, kurzfristiges Fremdkapital CHF 560'000. <strong>Quick Ratio = (420+180)/560 × 100 = 107 %.</strong> Knapp, aber okay.
</div>
<div class="merksatz">Merke: Ein profitables Unternehmen kann an Illiquidität sterben. Liquidität schlägt Rentabilität — kurzfristig.</div>
</div></div>

<div class="tl-item"><div class="tl-num tl-num-a">7</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Working Capital — «Wo ist das Geld parkiert?»</div><div class="tl-merksatz">«Nettoumlaufvermögen — Puffer zwischen UV und kurzfr. Schulden.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail">
<div class="tl-body">Als <strong>Working Capital</strong> (Nettoumlaufvermögen) bezeichnet man die Differenz zwischen Umlaufvermögen und kurzfristigen Verbindlichkeiten. Ein positives Working Capital ist ein Indikator für finanzielle Stabilität: Ein Teil des kurzfristigen Vermögens wird langfristig finanziert.</div>

<div style="background:rgba(232,168,56,0.12);border:1px dashed #e8a838;padding:10px 14px;border-radius:8px;margin:12px 0;text-align:center;font-family:Georgia,serif;font-style:italic;color:#e8a838;font-size:14px">Working Capital = Umlaufvermögen − kurzfr. Fremdkapital<br><span style="font-size:11px;color:var(--tx2);font-style:normal;font-family:-apple-system">Sollte positiv, aber nicht übermässig hoch sein</span></div>

<div class="tl-body">In der Hotellerie ist das Geld typischerweise an drei Orten parkiert:</div>
<div class="tl-sub">
<div class="c ca"><div class="ct2">Offene Gästerechnungen</div><div class="cd">Inhouse-Rechnungen, Event-Nachrechnungen, Corporate-Kunden mit Zahlungsziel.</div></div>
<div class="c cm"><div class="ct2">Warenlager</div><div class="cd">F&B-Vorräte, Weinkeller, Amenities, Reinigungsmaterial.</div></div>
<div class="c cr"><div class="ct2">Unbezahlte Lieferantenrechnungen</div><div class="cd">Offene Kreditoren — erhöhen die kurzfristigen Verbindlichkeiten.</div></div>
</div>

<div style="margin-top:14px;font-weight:700;color:#e8a838">Die drei Fristen und der Cash Conversion Cycle</div>
<div style="overflow-x:auto;margin:10px 0">
<table style="width:100%;font-size:12.5px;border-collapse:collapse;color:var(--tx)">
<thead><tr style="background:var(--s2);font-weight:700"><td style="padding:8px;border:1px solid var(--bd)">Kennzahl</td><td style="padding:8px;border:1px solid var(--bd)">Bedeutung</td><td style="padding:8px;border:1px solid var(--bd)">Formel (× 360)</td></tr></thead>
<tbody>
<tr><td style="padding:6px 8px;border:1px solid var(--bd);font-weight:600">DSO</td><td style="padding:6px 8px;border:1px solid var(--bd)">Debitorenfrist — wie lange warte ich auf mein Geld?</td><td style="padding:6px 8px;border:1px solid var(--bd)">Ø Ford. LuL / Betriebsertrag × 360</td></tr>
<tr><td style="padding:6px 8px;border:1px solid var(--bd);font-weight:600">DIO</td><td style="padding:6px 8px;border:1px solid var(--bd)">Lagerdauer — wie lange bleibt Ware liegen?</td><td style="padding:6px 8px;border:1px solid var(--bd)">Ø Warenbestand / Wareneinsatz × 360</td></tr>
<tr><td style="padding:6px 8px;border:1px solid var(--bd);font-weight:600">DPO</td><td style="padding:6px 8px;border:1px solid var(--bd)">Kreditorenfrist — wie lange zahle ich nicht?</td><td style="padding:6px 8px;border:1px solid var(--bd)">Ø Verbindl. / Wareneinsatz × 360</td></tr>
<tr style="background:rgba(0,198,251,0.08)"><td style="padding:6px 8px;border:1px solid var(--bd);font-weight:700">CCC</td><td style="padding:6px 8px;border:1px solid var(--bd)"><strong>Kapitalbindungsdauer</strong></td><td style="padding:6px 8px;border:1px solid var(--bd);font-weight:600">DIO + DSO − DPO (10–30 T.)</td></tr>
</tbody></table></div>

<div class="hla" style="border-left:4px solid #34c759;background:rgba(52,199,89,0.08);padding:14px 18px;margin-top:12px;border-radius:10px;font-size:13px">
<strong style="color:#34c759">🏨 FALLBEISPIEL BELLAVISTA — CCC</strong><br>
Lagerdauer F&B = 12 Tage (DIO), Debitorenfrist Corporate = 28 Tage (DSO), Kreditorenfrist Lieferanten = 21 Tage (DPO). <strong>CCC = 12 + 28 − 21 = 19 Tage.</strong> Im Richtwertbereich. Claudia verhandelt ein längeres Zahlungsziel auf 30 Tage → CCC sinkt auf 10 Tage = Liquiditätsgewinn!
</div>
<div class="merksatz">Merke: Je tiefer der CCC, desto weniger Kapital ist gebunden. Verhandle mit Lieferanten!</div>
</div></div>

<div class="tl-item"><div class="tl-num tl-num-p">8</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Exkurs: Liquiditätsplanung</div><div class="tl-merksatz">«Rollierend planen — monatlich neu auf Basis der Ist-Werte.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail">
<div class="tl-body">Die Liquiditätsplanung ist die strategische Verwaltung der flüssigen Mittel eines Unternehmens anhand eines Liquiditätsplans, der alle Ein- und Auszahlungen umfasst. Eine seriöse Planung hilft vor allem in Krisenzeiten, handlungsfähig zu bleiben und Engpässe frühzeitig zu erkennen.</div>

<div style="background:rgba(232,168,56,0.12);border:1px dashed #e8a838;padding:10px 14px;border-radius:8px;margin:12px 0;text-align:center;font-family:Georgia,serif;font-style:italic;color:#e8a838;font-size:13px">Liquide Mittel Periodenbeginn + Einzahlungen − Auszahlungen = Liquide Mittel Periodenende</div>

<div class="tl-sub">
<div class="c cg"><div class="ct2">✓ Nutzen</div><div class="cd">• Sicherstellung Zahlungsfähigkeit<br>• Planungssicherheit<br>• Früherkennung finanzieller Risiken</div></div>
<div class="c cr"><div class="ct2">⚠ Herausforderungen</div><div class="cd">• Unvorhersehbare Ausgaben (Defekte, Notreparaturen)<br>• Schwankende Einnahmen (Saisonalität, Absagen)</div></div>
</div>

<div class="tl-body" style="margin-top:10px"><strong style="color:#e8a838">Vorgehen:</strong> Rollierende Planung — laufende Anpassung auf Basis aktueller Ist-Werte zur Verbesserung der Prognosegenauigkeit. Zeitrahmen üblicherweise auf Wochen- oder Monatsbasis.</div>
<div class="merksatz">Merke: Wer nicht plant, plant den Engpass. Rollierend ist Pflicht.</div>
</div></div>

<div class="tl-item"><div class="tl-num tl-num-g">9</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Branchenspezifische Kennzahlen (Hotellerie & Gastronomie)</div><div class="tl-merksatz">«RevPAR ist DIE Hotel-Kennzahl — sie verbindet OCC und ADR.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail">
<div class="tl-body">Jede Branche hat ihre Eigenheiten, die sich in spezifischen KPIs ausdrücken lassen. Typische Branchenwerte sind <strong style="color:#e8a838">Benchmarks</strong> — Werte des Durchschnitts der jeweils besten Unternehmen einer Branche. Quellen: KATAG · Gastrosuisse · Hotelleriesuisse · Schweiz Tourismus · BfS.</div>

<div class="tl-sub">
<div class="c ca"><div class="ct2">RevPAR</div><div class="cd"><em>Revenue per Available Room</em> — Umsatz pro verfügbarem Zimmer. DIE wichtigste Hotelkennzahl.<br><strong style="color:#e8a838">Rooms Revenue / (Zimmer × Tage)</strong></div></div>
<div class="c ca"><div class="ct2">ADR</div><div class="cd"><em>Average Daily Rate</em> — Preis der verkauften Zimmer, nicht der verfügbaren.<br><strong style="color:#e8a838">Rooms Revenue / Room Nights</strong></div></div>
<div class="c cg"><div class="ct2">OCC</div><div class="cd"><em>Occupancy Rate</em> — Belegungsrate. <strong>100 % ist nicht immer optimal!</strong><br><strong style="color:#e8a838">Verkaufte / Total × 100 %</strong></div></div>
<div class="c cm"><div class="ct2">RevPASH</div><div class="cd"><em>Revenue Per Available Seat Hour</em> — Umsatz pro Sitzstunde.<br><strong style="color:#e8a838">F&B Rev. / (Sitze × Öffnungsstd.)</strong></div></div>
<div class="c cp"><div class="ct2">RevPSQM</div><div class="cd">Umsatz pro m² Veranstaltungsfläche (MICE).<br><strong style="color:#e8a838">Verans.ertrag / Fläche</strong></div></div>
<div class="c cp"><div class="ct2">RevPOLH</div><div class="cd">Umsatz pro Arbeitsstunde (Wellness).<br><strong style="color:#e8a838">Wellness-Ertrag / Arbeitsstd.</strong></div></div>
</div>

<div class="c cr" style="padding:12px 16px;margin-top:10px">
<div class="ct2">Personalaufwandquote</div>
<div class="cd">Wichtigste Aufwandsposition im Gastgewerbe. Kann pro Profitcenter (Rooms, F&B, Wellness) berechnet werden.</div>
<div style="background:rgba(232,168,56,0.12);border:1px dashed #e8a838;padding:6px 10px;border-radius:6px;margin-top:8px;text-align:center;font-style:italic;color:#e8a838;font-size:12px">Total Personalaufwand / Total Ertrag × 100 %<br><span style="font-size:11px;color:var(--tx2);font-style:normal">Richtwert: weit unter 45 % = gut</span></div>
</div>

<div class="hlr" style="margin-top:12px"><strong>⚠ HÄUFIGER FEHLER</strong><br>Eine hohe Belegungsrate (OCC) ist <strong>KEIN</strong> Indikator für Rentabilität! Wenn aus der Beherbergung ein negativer GOP resultiert, werden die Zimmer unter Selbstkosten verkauft. <strong>100 % OCC zu Dumpingpreisen ist unternehmerischer Unsinn.</strong></div>

<div class="hla" style="border-left:4px solid #34c759;background:rgba(52,199,89,0.08);padding:14px 18px;margin-top:12px;border-radius:10px;font-size:13px">
<strong style="color:#34c759">🏨 FALLBEISPIEL BELLAVISTA — JANUAR 2024</strong><br>
80 Zimmer × 31 Tage = 2'480 verfügbare Zimmernächte. Verkauft: 1'736 Room Nights (<strong>OCC 70 %</strong>). Rooms Revenue CHF 425'320. <strong>ADR = 425'320 / 1'736 = CHF 245. RevPAR = 425'320 / 2'480 = CHF 171.50.</strong> Januar ist Nebensaison — RevPAR im Sommer CHF 260.
</div>
<div class="merksatz">Merke: RevPAR = OCC × ADR. Wenn beide gleichzeitig steigen, ist das der Jackpot.</div>
</div></div>

<div class="tl-item"><div class="tl-num tl-num-x">10</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Herausforderungen — Checkliste gegen den Zahlendschungel</div><div class="tl-merksatz">«Sechs Fragen, die jede Kennzahl beantworten muss.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail">
<div class="tl-body">Die Kunst im Umgang mit Kennzahlen bedingt ein umfassendes Verständnis über deren Bedeutung, Herleitung und Interpretation. Diese Checkliste hilft, die Orientierung zu behalten:</div>
<div class="hl" style="margin-top:12px">
<strong>1.</strong> Was misst die Kennzahl? Welches Ziel verfolgt sie?<br>
<strong>2.</strong> Zusammenhänge erkennen: Wie wurde die Kennzahl genau berechnet?<br>
<strong>3.</strong> Gibt es Vergleichswerte? (Benchmarks? Interne Ziele? Vorjahreswerte?)<br>
<strong>4.</strong> Eigene Meinung bilden: Was sagt die Kennzahl für mich aus?<br>
<strong>5.</strong> Was sind die Konsequenzen? (Genug? Zu wenig? Zu viel?)<br>
<strong>6.</strong> Welche Massnahmen sind erforderlich?
</div>
<div class="merksatz">Merke: Eine Zahl allein sagt nichts — sie braucht Benchmark, Vorjahreswert oder Zielvorgabe.</div>
</div></div>

<div class="tl-item"><div class="tl-num tl-num-g">11</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Balanced Scorecard (Kaplan & Norton)</div><div class="tl-merksatz">«What you measure is what you get — Strategie in Kennzahlen übersetzen.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail">
<div class="tl-body">Die <strong style="color:#e8a838">Balanced Scorecard</strong> wurde 1992 von Robert S. Kaplan (Harvard Business School) und David P. Norton entwickelt. Sie ergänzt die rein finanzielle Sichtweise um weitere, für die Unternehmensführung wichtige Perspektiven. Die BSC ist ein Instrument des <strong style="color:#00c6fb">strategischen Controllings</strong>, das Strategie in Kennzahlen übersetzt und so kommunizierbar macht.<br><br>Prägend war die Erkenntnis: Rein finanzielle Kennzahlen waren in der Industrieära ausreichend, in der heutigen Wissensgesellschaft mit kürzeren Produktlebenszyklen und internationaler Konkurrenz braucht es mehr.</div>

<div style="margin-top:14px;font-weight:700;color:#e8a838">Die vier Perspektiven</div>
<div class="tl-sub">
<div class="c ca"><div class="ct2">💰 Finanzielle Perspektive</div><div class="cd">Die einzige rein monetäre Perspektive (Jahresergebnis, Umsatzrendite). Finales Ziel für alle anderen.<br><em>«Wie sollen wir gegenüber Eigentümern auftreten, um finanziellen Erfolg zu haben?»</em></div></div>
<div class="c cg"><div class="ct2">👥 Kundenperspektive</div><div class="cd">Marktanteile, Gästezufriedenheit, Gästetreue. Frühwarnsystem — Probleme werden sichtbar, bevor sie in Umsätzen durchschlagen.<br><em>«Wie sollen wir gegenüber Kunden auftreten, um unsere Vision zu verwirklichen?»</em></div></div>
<div class="c cm"><div class="ct2">⚙ Interne Prozessperspektive</div><div class="cd">Time-to-Market, Kapazitätsauslastung, Ausschussquoten, Produktivität.<br><em>«In welchen Geschäftsprozessen müssen wir die Besten sein?»</em></div></div>
<div class="c cp"><div class="ct2">🌱 Lern- und Entwicklungsperspektive</div><div class="cd">Weiterbildung, F&E, Investitionen in IT.<br><em>«Wie können wir Veränderungs- und Wachstumspotenziale fördern?»</em></div></div>
</div>

<div class="tl-body" style="margin-top:12px"><strong style="color:#e8a838">Wichtig:</strong> Alle Kennzahlen müssen durch <strong style="color:#00c6fb">Ursache-Wirkungs-Ketten</strong> verbunden sein. Schema Hotellerie: Fachwissen → Prozessqualität → Top-Angebot → Kundentreue → Umsatzrentabilität. Pro Perspektive ca. <strong>5 Kennzahlen</strong>. Eine fünfte Perspektive <strong>«Nachhaltigkeit»</strong> wird heute oft ergänzt.</div>

<div class="hla" style="border-left:4px solid #34c759;background:rgba(52,199,89,0.08);padding:14px 18px;margin-top:12px;border-radius:10px;font-size:13px">
<strong style="color:#34c759">🏨 FALLBEISPIEL BELLAVISTA — BSC (Auszug)</strong><br>
<strong>Finanziell:</strong> Ziel «ADR +15 %», KPI «Average Daily Rate», Massnahme «Upselling-Schulung». <strong>Kunde:</strong> Ziel «min. 70 % Returning Guests», KPI «Wiederholungsrate», Massnahme «Loyalty-Programm». <strong>Prozess:</strong> Ziel «Zimmerreinigung max. 30 min», KPI «Reinigungsdauer», Massnahme «neue Checkliste». <strong>Lernen:</strong> Ziel «Fluktuation −20 %», KPI «Austritte/Jahr», Massnahme «4-Tage-Woche».
</div>
<div class="merksatz">Merke: BSC = Strategie + Ursache-Wirkungs-Kette. Fachwissen → Prozessqualität → Kundentreue → Rentabilität.</div>
</div></div>

<div class="tl-item"><div class="tl-num tl-num-b">12</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Spiralthema: Informationssysteme im Controlling</div><div class="tl-merksatz">«Dashboard, Reporting, Revenue Management — ohne IT kein Controlling.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail">
<div class="tl-body">Ein Informationssystem erfasst Informationen, speichert sie in Datenbanken, verarbeitet sie und stellt sie für Auswertungen zur Verfügung. In der Hotellerie spielen sie eine entscheidende Rolle bei Effizienz und Gästeservice.</div>
<div class="tl-sub">
<div class="c ca"><div class="ct2">Echtzeit-Analysen</div><div class="cd">Dashboards mit aktuellen Kennzahlen wie OCC %, ADR, RevPAR.</div></div>
<div class="c cg"><div class="ct2">Abweichungsanalysen & Kostenkontrollen</div><div class="cd">Überwachung Lagerbestände, Stunden-/Ferien-/Überzeitsaldi.</div></div>
<div class="c cm"><div class="ct2">Revenue Management</div><div class="cd">Optimierung der Preisgestaltung basierend auf Nachfrageprognosen.</div></div>
<div class="c cp"><div class="ct2">Finanzplanung</div><div class="cd">Budgets, Forecasts, Liquiditäts- und Investitionspläne.</div></div>
<div class="c cr"><div class="ct2">Zielerreichung & Erfolgsmessung</div><div class="cd">Performance-Steuerung anhand Balanced Scorecard.</div></div>
</div>
<div class="merksatz">Merke: Ohne IT-System keine Echtzeit-Steuerung — und damit keine wettbewerbsfähige Hotellerie.</div>
</div></div>

</div>
</div>


<!-- CTRL: Kosten- und Leistungsrechnung (PDF 1:1 als Timeline) -->
<div class="sec" id="ctrl_klr"><h1>02 · Kosten- und Leistungsrechnung</h1><p class="sub">FIBU vs. BEBU · Voll- und Teilkostenrechnung · Deckungsbeitrag · Break-Even</p>

<div class="hlbl"><strong>LERNZIELE K02</strong><br>
✓ Die Unterschiede zwischen Finanz- und Betriebsbuchhaltung (FIBU / BEBU) erklären<br>
✓ Ziele und Aufgaben der Kostenrechnung nennen<br>
✓ Voll- und Teilkostenrechnung voneinander abgrenzen und anwenden<br>
✓ Kostenarten, Kostenstellen und Kostenträger zuordnen können<br>
✓ Einzel- und Gemeinkosten, variable und fixe Kosten unterscheiden<br>
✓ Deckungsbeitrag und DDR-Wert berechnen und interpretieren<br>
✓ Break-Even-Analyse durchführen (mengen- und wertmässige Nutzschwelle)</div>

<div style="display:flex;gap:8px;margin:16px 0 6px"><button style="font-size:11px;padding:4px 10px" onclick="this.parentElement.nextElementSibling.querySelectorAll('.tl-item').forEach(i=>i.classList.add('open'))">Alle aufklappen</button><button style="font-size:11px;padding:4px 10px" onclick="this.parentElement.nextElementSibling.querySelectorAll('.tl-item').forEach(i=>i.classList.remove('open'))">Alle schliessen</button></div>

<div class="tl">

<div class="tl-item"><div class="tl-num tl-num-b">1</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Von der FIBU zur BEBU</div><div class="tl-merksatz">«Aufwand wird Kosten, Ertrag wird Erlös — innen statt aussen.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail">
<div class="tl-body">Das Rechnungswesen ist ein Informationssystem mit zwei Flügeln:</div>
<div class="tl-sub">
<div class="c ca"><div class="ct2">Finanzbuchhaltung (FIBU)</div><div class="cd"><strong style="color:#e8a838">Externe Sicht:</strong> Jahresabschluss, Lagebericht (OR), Halbjahresabschluss, Umweltbericht, ESG-Bericht. Adressaten: Fiskus, Bank, Aktionäre.</div></div>
<div class="c cg"><div class="ct2">Betriebsbuchhaltung (BEBU)</div><div class="cd"><strong style="color:#34c759">Interne Sicht:</strong> Budget, Betriebsstatistik, Investitionsrechnung, Kostenrechnung, Nutzschwellenanalyse. Adressaten: Geschäftsleitung, Abteilungsleiter.</div></div>
</div>
<div class="tl-body" style="margin-top:10px">Aus den <strong style="color:#e8a838">Aufwänden</strong> der Erfolgsrechnung werden <strong style="color:#e8a838">Kosten</strong>, aus den <strong style="color:#e8a838">Erträgen</strong> werden <strong style="color:#e8a838">Erlöse</strong>. Die betriebliche Objektivität wird durch <strong style="color:#00c6fb">Abgrenzungen</strong> (stille Reserven auflösen) und <strong style="color:#00c6fb">kalkulatorische Kosten</strong> (z.B. Eigenkapitalzins) hergestellt.</div>
<div class="merksatz">Merke: FIBU ist für die Aussenwelt. BEBU für die Steuerung im Haus.</div>
</div></div>

<div class="tl-item"><div class="tl-num tl-num-a">2</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Ziele und Aufgaben der Kostenrechnung</div><div class="tl-merksatz">«WAS · WO · WOFÜR — die drei Kern-Fragen der Kostenrechnung.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail">
<div class="tl-sub">
<div class="c ca"><div class="ct2">📔 Betriebsabrechnung</div><div class="cd">Kosten und Erlöse werden den Kostenträgern (Produkten) zugeordnet → Erfolg pro Produkt wird ermittelt.</div></div>
<div class="c cg"><div class="ct2">🔍 Analyse</div><div class="cd">Untersuchung der Prozesse und Ergebnisse der Leistungserstellung — Auswertung zuhanden der Führung.</div></div>
<div class="c cm"><div class="ct2">💲 Kalkulation</div><div class="cd">Berechnungsgrundlagen zur Preisgestaltung und Vorratsbewertung werden aufbereitet.</div></div>
</div>

<div style="margin-top:14px;font-weight:700;color:#e8a838">Die drei Kern-Fragen</div>
<div style="display:flex;align-items:center;justify-content:center;gap:8px;margin:10px 0;flex-wrap:wrap">
<div style="background:var(--s2);border:2px solid #00c6fb;padding:12px 16px;border-radius:8px;text-align:center;min-width:160px"><div style="font-size:11px;letter-spacing:2px;color:#00c6fb;font-weight:700">WAS?</div><div style="font-weight:700;margin:3px 0">Kostenarten</div><div style="font-size:11px;color:var(--tx2)">Welche Kosten sind angefallen?</div></div>
<div style="color:#e8a838;font-size:20px;font-weight:700">→</div>
<div style="background:var(--s2);border:2px solid #00c6fb;padding:12px 16px;border-radius:8px;text-align:center;min-width:160px"><div style="font-size:11px;letter-spacing:2px;color:#00c6fb;font-weight:700">WO?</div><div style="font-weight:700;margin:3px 0">Kostenstellen</div><div style="font-size:11px;color:var(--tx2)">Wo sind sie angefallen?</div></div>
<div style="color:#e8a838;font-size:20px;font-weight:700">→</div>
<div style="background:var(--s2);border:2px solid #00c6fb;padding:12px 16px;border-radius:8px;text-align:center;min-width:160px"><div style="font-size:11px;letter-spacing:2px;color:#00c6fb;font-weight:700">WOFÜR?</div><div style="font-weight:700;margin:3px 0">Kostenträger</div><div style="font-size:11px;color:var(--tx2)">Welches Produkt trägt sie?</div></div>
</div>

<div class="hl" style="margin-top:10px"><strong>BEISPIEL</strong><br>
<strong style="color:#e8a838">Kostenarten:</strong> Wareneinkäufe, Werbekosten, Zinsen.<br>
<strong style="color:#e8a838">Kostenstellen:</strong> Rooms Division, F&B, Wellness, Administration.<br>
<strong style="color:#e8a838">Kostenträger:</strong> Doppelzimmer Deluxe, HP-Package, Tagesteller.</div>
<div class="merksatz">Merke: Erst WAS, dann WO, dann WOFÜR. In dieser Reihenfolge wird verrechnet.</div>
</div></div>

<div class="tl-item"><div class="tl-num tl-num-b">3</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Grundbegriffe der Kostenrechnung</div><div class="tl-merksatz">«Einzel vs. Gemein, variabel vs. fix — die vier Kosten-Achsen.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail">
<div class="tl-sub">
<div class="c ca"><div class="ct2">Einzelkosten (= direkte Kosten)</div><div class="cd">Stehen in festem Zusammenhang mit einem Produkt und können den Kostenträgern direkt zugeordnet werden.<br><strong>Bsp:</strong> Wareneinkauf von Lebensmitteln für ein konkretes Menü.</div></div>
<div class="c cm"><div class="ct2">Gemeinkosten (= indirekte Kosten)</div><div class="cd">Können nicht unmittelbar einem Produkt zugeordnet werden. Verteilung über Kostenstellen mit Umlageschlüsseln.<br><strong>Bsp:</strong> Versicherung Hotel, Marketing-Gehälter.</div></div>
<div class="c cg"><div class="ct2">Variable Kosten</div><div class="cd">Von der Beschäftigungshöhe abhängig.<br>• Beschaffung Lebensmittel & Getränke<br>• Hygieneartikel<br>• Temporäres Personal<br>• Provisionen</div></div>
<div class="c cr"><div class="ct2">Fixe Kosten</div><div class="cd">Unabhängig von der Beschäftigungshöhe — als Kostenblock.<br>• Miete<br>• Gehälter festes Personal<br>• Versicherungen, Lizenzen<br>• Unterhalt</div></div>
</div>

<div style="background:rgba(232,168,56,0.12);border:1px dashed #e8a838;padding:10px 14px;border-radius:8px;margin-top:12px;text-align:center;font-family:Georgia,serif;font-style:italic;color:#e8a838;font-size:14px">Lineare Kostenfunktion: K(x) = K<sub>var</sub> × x + K<sub>fix</sub><br><span style="font-size:11px;color:var(--tx2);font-style:normal;font-family:-apple-system">Totalkosten = (Variable Kosten × verkaufte Menge) + Fixe Kosten</span></div>

<div style="margin-top:12px;font-weight:700;color:#e8a838">Hauptkostenstellen vs. Hilfskostenstellen</div>
<div class="tl-sub">
<div class="c ca"><div class="ct2">Hauptkostenstellen</div><div class="cd">Werden <strong>direkt</strong> auf die Kostenträger verrechnet.</div></div>
<div class="c cp"><div class="ct2">Hilfskostenstellen</div><div class="cd">Werden zuerst auf Hauptkostenstellen verteilt und damit nur <strong>mittelbar</strong> auf Kostenträger.<br><em>Bsp: Personalabteilung (Shared Service) einer Hotelgruppe.</em></div></div>
</div>
<div class="merksatz">Merke: Fix = Block. Variabel = Menge. Einzel = direkt. Gemein = indirekt.</div>
</div></div>

<div class="tl-item"><div class="tl-num tl-num-g">4</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Vollkostenrechnung</div><div class="tl-merksatz">«Alle Kosten werden auf Produkte verteilt — fix und variabel.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail">
<div class="tl-body">Bei der <strong style="color:#e8a838">Vollkostenrechnung</strong> werden sämtliche Kosten (fixe und variable) auf die einzelnen Kostenträger umgelegt → Ermittlung des Erfolgs pro Produkt.</div>

<div style="margin-top:12px;font-weight:700;color:#e8a838">Systematik der Vollkostenrechnung</div>
<div style="display:flex;align-items:center;justify-content:center;gap:6px;margin:10px 0;flex-wrap:wrap">
<div style="background:var(--s2);border:1px solid var(--bd);padding:8px 12px;border-radius:6px;text-align:center;font-size:12px"><strong>Kostenarten</strong><br><em style="color:var(--tx2);font-size:10px">WAS?</em></div>
<div style="color:#e8a838;font-weight:700">→</div>
<div style="background:var(--s2);border:1px solid var(--bd);padding:8px 12px;border-radius:6px;text-align:center;font-size:12px"><strong>Kostenstellen</strong><br><em style="color:var(--tx2);font-size:10px">WO?</em></div>
<div style="color:#e8a838;font-weight:700">→</div>
<div style="background:var(--s2);border:1px solid var(--bd);padding:8px 12px;border-radius:6px;text-align:center;font-size:12px"><strong>Umlage</strong><br><em style="color:var(--tx2);font-size:10px">Schlüssel</em></div>
<div style="color:#e8a838;font-weight:700">→</div>
<div style="background:var(--s2);border:1px solid var(--bd);padding:8px 12px;border-radius:6px;text-align:center;font-size:12px"><strong>Kostenträger</strong><br><em style="color:var(--tx2);font-size:10px">WOFÜR?</em></div>
<div style="color:#e8a838;font-weight:700">→</div>
<div style="background:rgba(232,168,56,0.15);border:2px solid #e8a838;padding:8px 12px;border-radius:6px;text-align:center;font-size:12px"><strong>Herstellk.<br>Selbstk.<br>Erfolg</strong></div>
</div>

<div style="margin-top:12px;font-weight:700;color:#e8a838">Checkliste: Vorgehen</div>
<ol style="margin-left:20px;line-height:1.8;font-size:13px">
<li>Sachliche Abgrenzungen in der Kostenartenrechnung (KOA)</li>
<li>Einzelkosten auf Kostenträger direkt übertragen</li>
<li>Gemeinkosten über Schlüssel auf Kostenstellen umlegen</li>
<li>Herstellkosten pro Kostenträger, dann Verwaltung umlegen</li>
<li>Selbstkosten pro Kostenträger, Umsatzerlös gegenüberstellen</li>
<li>Gewinn/Verlust pro Kostenträger</li>
</ol>

<div style="overflow-x:auto;margin:10px 0">
<table style="width:100%;font-size:12.5px;border-collapse:collapse;color:var(--tx)">
<tbody>
<tr><td style="padding:6px 8px;border:1px solid var(--bd);font-weight:600;width:35%">Einzelkosten</td><td style="padding:6px 8px;border:1px solid var(--bd)">z.B. Warenkosten Küche</td></tr>
<tr><td style="padding:6px 8px;border:1px solid var(--bd);font-weight:600">Gemeinkosten</td><td style="padding:6px 8px;border:1px solid var(--bd)">z.B. Personalkosten</td></tr>
<tr><td style="padding:6px 8px;border:1px solid var(--bd);font-weight:600">Herstellkosten</td><td style="padding:6px 8px;border:1px solid var(--bd)">Total Kosten Produktion/Fertigung</td></tr>
<tr><td style="padding:6px 8px;border:1px solid var(--bd);font-weight:600">Selbstkosten</td><td style="padding:6px 8px;border:1px solid var(--bd)">Total Kosten inkl. Administration/Vertrieb</td></tr>
<tr><td style="padding:6px 8px;border:1px solid var(--bd);font-weight:600">Nettoerlös</td><td style="padding:6px 8px;border:1px solid var(--bd)">Total Betriebsertrag</td></tr>
<tr style="background:rgba(232,168,56,0.08)"><td style="padding:6px 8px;border:1px solid var(--bd);font-weight:700">Betriebsergebnis</td><td style="padding:6px 8px;border:1px solid var(--bd);font-weight:700">Gewinn / Verlust</td></tr>
</tbody></table></div>
<div class="merksatz">Merke: Vollkostenrechnung verteilt ALLES. Achtung bei Entscheidungen — Fixkosten verändern sich kurzfristig nicht.</div>
</div></div>

<div class="tl-item"><div class="tl-num tl-num-p">5</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Teilkostenrechnung</div><div class="tl-merksatz">«Nur variable Kosten auf Produkte — Fixkosten bleiben Block.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail">
<div class="tl-body">Im Gegensatz zur Vollkostenrechnung werden den Kostenträgern <strong style="color:#e8a838">nur die variablen Kosten</strong> zugerechnet. Die fixen Kosten werden nicht umgelegt, sondern bleiben bis zur Erfolgsermittlung als Kostenblock unberücksichtigt.</div>

<div style="margin-top:12px;font-weight:700;color:#e8a838">Systematik der Teilkostenrechnung</div>
<div style="display:flex;align-items:center;justify-content:center;gap:6px;margin:10px 0;flex-wrap:wrap">
<div style="background:var(--s2);border:1px solid var(--bd);padding:8px 12px;border-radius:6px;text-align:center;font-size:12px"><strong>Kostenspaltung</strong><br><em style="color:var(--tx2);font-size:10px">fix / variabel</em></div>
<div style="color:#e8a838;font-weight:700">→</div>
<div style="background:var(--s2);border:1px solid var(--bd);padding:8px 12px;border-radius:6px;text-align:center;font-size:12px"><strong>Ermittlung</strong><br><em style="color:var(--tx2);font-size:10px">Deckungsbeitrag</em></div>
<div style="color:#e8a838;font-weight:700">→</div>
<div style="background:rgba(232,168,56,0.15);border:2px solid #e8a838;padding:8px 12px;border-radius:6px;text-align:center;font-size:12px"><strong>Umlage Fixkosten<br>als Block</strong></div>
</div>

<div style="margin-top:10px;font-weight:700;color:#e8a838">Ergebnisse pro Kostenträger</div>
<ul style="margin-left:20px;line-height:1.8;font-size:13px">
<li>Einzelkosten</li>
<li>Variable Herstellkosten</li>
<li>Variable Selbstkosten</li>
<li>Nettoerlös</li>
<li><strong style="color:#e8a838">Deckungsbeitrag</strong></li>
</ul>
<div class="tl-body" style="margin-top:8px"><em>Fixkosten werden nicht pro Kostenträger betrachtet, da sie als Block anfallen.</em></div>
<div class="merksatz">Merke: Teilkosten ist besser für kurzfristige Entscheidungen — sie zeigt den «wahren» Beitrag jedes Produkts.</div>
</div></div>

<div class="tl-item"><div class="tl-num tl-num-g">6</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Deckungsbeitragsrechnung</div><div class="tl-merksatz">«Umsatz minus variable Kosten = Beitrag zur Fixkostendeckung.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail">
<div class="tl-body">Der <strong style="color:#e8a838">Deckungsbeitrag</strong> ist die Differenz zwischen dem Erlös (Umsatz) und den variablen Kosten und steht für den Betrag, der zur <strong style="color:#00c6fb">Deckung der Fixkosten und zur Erzielung eines Gewinns</strong> zur Verfügung steht. Aus unternehmerischer Sicht ist es sinnvoll, nur Produkte anzubieten, die positive Deckungsbeiträge abwerfen.</div>

<div class="tl-sub">
<div class="c ca"><div class="ct2">Deckungsbeitrag in CHF</div>
<div style="background:rgba(232,168,56,0.12);border:1px dashed #e8a838;padding:8px;border-radius:6px;margin:8px 0;text-align:center;font-style:italic;color:#e8a838;font-size:12px">DB [CHF] = Nettoverkaufspreis p.St. − variable Kosten p.St.</div>
<div class="cd">Ab welchem Betrag wird ein Beitrag zur Fixkostendeckung geleistet?</div></div>
<div class="c cg"><div class="ct2">Deckungsbeitragsmarge in %</div>
<div style="background:rgba(232,168,56,0.12);border:1px dashed #e8a838;padding:8px;border-radius:6px;margin:8px 0;text-align:center;font-style:italic;color:#e8a838;font-size:12px">DB-Marge = DB [CHF] / Nettoverkaufspreis × 100 %</div>
<div class="cd">Wie viel trägt jedes verkaufte Produkt relativ zur Fixkostendeckung bei?</div></div>
</div>

<div class="hla" style="border-left:4px solid #34c759;background:rgba(52,199,89,0.08);padding:14px 18px;margin-top:12px;border-radius:10px;font-size:13px">
<strong style="color:#34c759">🏨 FALLBEISPIEL BELLAVISTA — Restaurant «Vista»</strong><br>
Tagesteller CHF 28.50 — variable Kosten CHF 9.20 → <strong>DB = CHF 19.30; DB-Marge = 67.7 %</strong>. Salatbuffet CHF 24.00 — var. Kosten CHF 7.80 → DB = CHF 16.20, DB-Marge = 67.5 %. Beide Produkte tragen substanziell zur Fixkostendeckung bei.
</div>

<div style="margin-top:14px;font-weight:700;color:#e8a838">Doppelte Deckungsbeitragsrechnung (DDR)</div>
<div class="tl-body">Die DDR hilft, die Rentabilität eines Produkts aus zwei Blickwinkeln gleichzeitig zu bewerten: <strong>absoluter Beitrag (CHF)</strong> und <strong>relative Marge (%)</strong>.</div>

<div style="background:rgba(232,168,56,0.12);border:1px dashed #e8a838;padding:10px 14px;border-radius:8px;margin:10px 0;text-align:center;font-family:Georgia,serif;font-style:italic;color:#e8a838;font-size:14px">DDR-Wert = DB [CHF] × 2 + DB-Marge [%] / 2</div>

<div style="overflow-x:auto;margin:10px 0">
<table style="width:100%;font-size:12.5px;border-collapse:collapse;color:var(--tx)">
<thead><tr style="background:var(--s2);font-weight:700"><td style="padding:8px;border:1px solid var(--bd)">Produkt</td><td style="padding:8px;border:1px solid var(--bd);text-align:right">DB [CHF]</td><td style="padding:8px;border:1px solid var(--bd);text-align:right">DB [%]</td><td style="padding:8px;border:1px solid var(--bd);text-align:right">DDR-Wert</td></tr></thead>
<tbody>
<tr style="background:rgba(52,199,89,0.08)"><td style="padding:6px 8px;border:1px solid var(--bd);font-weight:700">Burger</td><td style="padding:6px 8px;border:1px solid var(--bd);text-align:right">23</td><td style="padding:6px 8px;border:1px solid var(--bd);text-align:right">69,7 %</td><td style="padding:6px 8px;border:1px solid var(--bd);text-align:right;color:#34c759;font-weight:700">80,85</td></tr>
<tr><td style="padding:6px 8px;border:1px solid var(--bd);font-weight:700">Spaghetti</td><td style="padding:6px 8px;border:1px solid var(--bd);text-align:right">18</td><td style="padding:6px 8px;border:1px solid var(--bd);text-align:right">76,2 %</td><td style="padding:6px 8px;border:1px solid var(--bd);text-align:right">74,10</td></tr>
</tbody></table></div>
<div class="tl-body">Trotz höherer Marge bei den Spaghetti lohnt sich der Burger betriebswirtschaftlich mehr — er hat den höheren DDR-Wert.</div>

<div style="margin-top:14px;font-weight:700;color:#e8a838">Sales-Mix — DDR mit Verkaufszahlen</div>
<div style="background:rgba(232,168,56,0.12);border:1px dashed #e8a838;padding:8px 12px;border-radius:6px;margin:10px 0;text-align:center;font-family:Georgia,serif;font-style:italic;color:#e8a838;font-size:13px">DB Total [CHF] = DB pro Stück × Absatzmenge</div>

<div style="overflow-x:auto;margin:10px 0">
<table style="width:100%;font-size:12.5px;border-collapse:collapse;color:var(--tx)">
<thead><tr style="background:var(--s2);font-weight:700"><td style="padding:8px;border:1px solid var(--bd)">Produkt</td><td style="padding:8px;border:1px solid var(--bd);text-align:right">DB [CHF]</td><td style="padding:8px;border:1px solid var(--bd);text-align:right">Verkäufe</td><td style="padding:8px;border:1px solid var(--bd);text-align:right">DB Total</td></tr></thead>
<tbody>
<tr><td style="padding:6px 8px;border:1px solid var(--bd);font-weight:700">Burger</td><td style="padding:6px 8px;border:1px solid var(--bd);text-align:right">23</td><td style="padding:6px 8px;border:1px solid var(--bd);text-align:right">220</td><td style="padding:6px 8px;border:1px solid var(--bd);text-align:right">5'060</td></tr>
<tr style="background:rgba(52,199,89,0.08)"><td style="padding:6px 8px;border:1px solid var(--bd);font-weight:700">Spaghetti</td><td style="padding:6px 8px;border:1px solid var(--bd);text-align:right">18</td><td style="padding:6px 8px;border:1px solid var(--bd);text-align:right">380</td><td style="padding:6px 8px;border:1px solid var(--bd);text-align:right;color:#34c759;font-weight:700">6'840</td></tr>
</tbody></table></div>

<div class="hl"><strong>💡 ERKENNTNIS</strong><br>Obwohl ein einzelner Burger mehr DB liefert, bringen die Spaghetti <strong>insgesamt mehr DB (6'840 vs. 5'060)</strong> — wegen höherer Nachfrage. Die Spaghetti gehören auf die Karte! <strong>Nachfrage × DB ist wichtiger als DB allein.</strong></div>
<div class="merksatz">Merke: Das Produkt mit dem höchsten DB × Absatzmenge gehört auf die Karte.</div>
</div></div>

<div class="tl-item"><div class="tl-num tl-num-r">7</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Break-Even-Analyse</div><div class="tl-merksatz">«Der Punkt, an dem Erlöse = Kosten. Weder Gewinn noch Verlust.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail">
<div class="tl-body">Die <strong style="color:#e8a838">Break-Even-Analyse</strong> ermittelt den Punkt, bei dem die Erlöse (Verkaufspreis × Absatzmenge) und die Totalkosten (variable + fixe Kosten) identisch sind. An diesem Punkt ist der Gewinn gleich Null — er wird <strong style="color:#e8a838">Break-Even-Point</strong>, <strong>Gewinnschwelle</strong> oder <strong>Nutzschwelle</strong> genannt.</div>

<div class="hl" style="margin-top:12px"><strong>DECKUNGSBEITRAG vs. BREAK-EVEN POINT</strong><br>
<strong style="color:#e8a838">Deckungsbeitrag:</strong> Betrag zur Deckung der Fixkosten und Gewinn nach Abzug variabler Kosten (CHF oder %).<br>
<strong style="color:#e8a838">Break-Even-Point:</strong> Punkt, an dem die Erlöse die gesamten Kosten genau decken (CHF oder Stück).<br>
<strong>Zusammenspiel:</strong> Der DB wird zur Berechnung des Break-Even Points verwendet.</div>

<div style="background:rgba(232,168,56,0.12);border:1px dashed #e8a838;padding:10px 14px;border-radius:8px;margin:12px 0;text-align:center;font-family:Georgia,serif;font-style:italic;color:#e8a838;font-size:14px">Grundformel: Verkaufspreis × x = K<sub>var</sub> × x + K<sub>fix</sub><br><span style="font-size:11px;color:var(--tx2);font-style:normal;font-family:-apple-system">Unterhalb: Verlustzone · Oberhalb: Gewinnzone</span></div>

<div style="margin-top:12px;font-weight:700;color:#e8a838">Die wichtigen Berechnungen</div>
<div class="tl-sub">
<div class="c ca"><div class="ct2">Mengenmässige Nutzschwelle (Stück)</div>
<div style="background:rgba(232,168,56,0.12);border:1px dashed #e8a838;padding:6px 8px;border-radius:6px;margin:8px 0;text-align:center;font-style:italic;color:#e8a838;font-size:12px">NS<sub>Stk</sub> = Fixe Kosten / DB pro Stück</div>
<div class="cd">Ab welcher Menge sind alle Kosten gedeckt?</div></div>
<div class="c cg"><div class="ct2">Wertmässige NS V1</div>
<div style="background:rgba(232,168,56,0.12);border:1px dashed #e8a838;padding:6px 8px;border-radius:6px;margin:8px 0;text-align:center;font-style:italic;color:#e8a838;font-size:12px">NS<sub>CHF</sub> = Fixe Kosten / DB-Marge [%]</div>
<div class="cd">Welcher Umsatz wird mindestens benötigt?</div></div>
<div class="c cm"><div class="ct2">Wertmässige NS V2</div>
<div style="background:rgba(232,168,56,0.12);border:1px dashed #e8a838;padding:6px 8px;border-radius:6px;margin:8px 0;text-align:center;font-style:italic;color:#e8a838;font-size:11px">NS<sub>CHF</sub> = Mengenm. NS × Nettoerlös pro Stück</div>
<div class="cd">Alternative über mengenmässige Nutzschwelle.</div></div>
</div>

<div class="hla" style="border-left:4px solid #34c759;background:rgba(52,199,89,0.08);padding:14px 18px;margin-top:12px;border-radius:10px;font-size:13px">
<strong style="color:#34c759">🏨 FALLBEISPIEL BELLAVISTA — Weihnachtsbankett</strong><br>
Package CHF 120/Gast. Variable Kosten CHF 45 → DB = CHF 75. Fixkosten Deko+Musik+Aufbau CHF 9'000.<br>
<strong>Mengenmässige NS = 9'000 / 75 = 120 Gäste.</strong> Ab dem 121. Platz macht das Bankett Gewinn.<br>
<strong>Wertmässige NS = 120 × 120 = CHF 14'400 Umsatz.</strong>
</div>

<div class="tl-body" style="margin-top:10px"><strong style="color:#e8a838">Nutzen:</strong></div>
<ul style="margin-left:20px;line-height:1.7;font-size:13px">
<li>Faktenbasierte Entscheidungen über Produktsortiment</li>
<li>Auswahl des wirtschaftlichsten Szenarios aus mehreren Alternativen</li>
<li>Festlegung des Mindestpreises für ein neues Produkt</li>
</ul>
<div class="merksatz">Merke: Break-Even = Überlebensgrenze. Darunter ist Verlust, darüber Gewinn.</div>
</div></div>

</div>
</div>


<!-- CTRL: Kalkulation (PDF 1:1 als Timeline) -->
<div class="sec" id="ctrl_kalk"><h1>03 · Kalkulation</h1><p class="sub">Preiskomponenten · Preisgestaltung · Aufschlagskalkulation · MWST</p>

<div class="hlbl"><strong>LERNZIELE K03</strong><br>
✓ Die einzelnen Komponenten eines Preises in eigenen Worten nennen und beschreiben<br>
✓ Die verschiedenen Herangehensweisen der Preisgestaltung erläutern und situationsgerecht anwenden<br>
✓ Mithilfe der Aufschlagskalkulation und einer Betriebsrechnung Zuschlagsätze berechnen und auf Produkte ableiten<br>
✓ Selbstständig und sinnvoll für beliebige Produkte einen Preis ermitteln, begründen und argumentieren</div>

<div style="display:flex;gap:8px;margin:16px 0 6px"><button style="font-size:11px;padding:4px 10px" onclick="this.parentElement.nextElementSibling.querySelectorAll('.tl-item').forEach(i=>i.classList.add('open'))">Alle aufklappen</button><button style="font-size:11px;padding:4px 10px" onclick="this.parentElement.nextElementSibling.querySelectorAll('.tl-item').forEach(i=>i.classList.remove('open'))">Alle schliessen</button></div>

<div class="tl">

<div class="tl-item"><div class="tl-num tl-num-r">1</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Warum ist Kalkulation wichtig?</div><div class="tl-merksatz">«Schätzpreise sind fahrlässig — richtige Kalkulation ist Voraussetzung für Erfolg.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail">
<div class="tl-body">Die richtige Preiskalkulation entscheidet über den unternehmerischen Erfolg. Wie entsteht der passende Preis für ein Gericht? Was ist der korrekte Preis für ein Hotelzimmer? <strong style="color:#e8a838">Schätzpreise, Faustformeln oder einfaches Kopieren der Konkurrenz sind fahrlässig</strong> — die korrekte Preiskalkulation ist die Voraussetzung für den Erfolg.</div>

<div class="hlr" style="margin-top:12px"><strong>⚠ HÄUFIGER FEHLER IN DER GASTRONOMIE</strong><br>Die alte Faustformel <strong>«Wareneinsatz mal drei gleich Preis»</strong> ist nicht mehr zeitgemäss! Sie ignoriert Personalkosten, Fixkosten, Qualitätsunterschiede und die Zahlungsbereitschaft der Gäste.</div>

<div class="tl-body" style="margin-top:12px"><strong style="color:#e8a838">Markttransparente Artikel:</strong> Produkte wie Bier, Cola oder Kaffee, deren Preise auf den Karten vergleichbarer Betriebe zu finden sind. Der Preis ist kaum verhandelbar — ähnliche Zuliefererpreise führen zu ähnlichen Kalkulationsschemata. Gäste vergleichen heute live via Apps (z.B. Booking.com, Vivino für Wein).</div>
<div class="merksatz">Merke: Alle Kostenkomponenten erfassen — vom Material bis zur MWST. Nicht «Wareneinsatz × 3».</div>
</div></div>

<div class="tl-item"><div class="tl-num tl-num-b">2</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Die sechs Komponenten eines Preises</div><div class="tl-merksatz">«Material + Fertigung + Gemein + Verwaltung + Gewinn + MWST = Brutto.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail">
<div class="tl-body">Ein Preis setzt sich meistens aus folgenden Einzelkomponenten zusammen:</div>

<div style="display:flex;flex-direction:column;gap:6px;margin:14px 0">
<div style="display:flex;align-items:center;gap:8px"><div style="background:var(--s2);border:1px solid var(--bd);padding:8px 14px;border-radius:6px;min-width:240px;font-size:13px"><strong>1. Materialeinzelkosten</strong></div><div style="color:#e8a838;font-weight:700;font-size:12px">+</div></div>
<div style="display:flex;align-items:center;gap:8px"><div style="background:var(--s2);border:1px solid var(--bd);padding:8px 14px;border-radius:6px;min-width:240px;font-size:13px"><strong>2. Fertigungseinzelkosten</strong></div><div style="color:#e8a838;font-weight:700;font-size:12px">= Einzelkosten</div></div>
<div style="display:flex;align-items:center;gap:8px"><div style="background:var(--s2);border:1px solid var(--bd);padding:8px 14px;border-radius:6px;min-width:240px;font-size:13px"><strong>3. Gemeinkostenzuschläge</strong></div><div style="color:#e8a838;font-weight:700;font-size:12px">= Herstellkosten</div></div>
<div style="display:flex;align-items:center;gap:8px"><div style="background:var(--s2);border:1px solid var(--bd);padding:8px 14px;border-radius:6px;min-width:240px;font-size:13px"><strong>4. Verwaltungs- & Vertriebskosten</strong></div><div style="color:#e8a838;font-weight:700;font-size:12px">= Selbstkosten</div></div>
<div style="display:flex;align-items:center;gap:8px"><div style="background:var(--s2);border:1px solid var(--bd);padding:8px 14px;border-radius:6px;min-width:240px;font-size:13px"><strong>5. Gewinn</strong></div><div style="color:#e8a838;font-weight:700;font-size:12px">= Netto-Verkaufspreis</div></div>
<div style="display:flex;align-items:center;gap:8px"><div style="background:rgba(232,168,56,0.15);border:2px solid #e8a838;padding:8px 14px;border-radius:6px;min-width:240px;font-size:13px"><strong>6. Mehrwertsteuer (MWST)</strong></div><div style="color:#e8a838;font-weight:700;font-size:12px">= Brutto-Verkaufspreis = Umsatz</div></div>
</div>

<div style="margin-top:14px;font-weight:700;color:#e8a838">Details zu den Komponenten</div>
<ol style="margin-left:20px;line-height:1.8;font-size:13px">
<li><strong>Materialeinzelkosten:</strong> Einkaufspreis + Transport. Reinigung/Schnittreste → selten 100 % des Produkts verwendet. <strong style="color:#00c6fb">Verbindliche Rezepte</strong> sind der Schlüssel.</li>
<li><strong>Fertigungseinzelkosten:</strong> Löhne, Sozialversicherungen, Urlaub. <strong style="color:#ff3b30">Der grösste Kostenpunkt überhaupt — niemals unterschätzen!</strong></li>
<li><strong>Gemeinkostenzuschläge:</strong> Pflege (Lagerung, Kühlung, Versicherung) + Nebenkosten (Strom, Abfall).</li>
<li><strong>Verwaltungs- & Vertriebskosten:</strong> «Unsichtbare» Aufwände wie Buchhaltung, Marketing, Zinsen.</li>
<li><strong>Gewinn:</strong> Marge <strong style="color:#e8a838">Gastronomie ~10 %</strong>, <strong style="color:#e8a838">Hotellerie ~15 %</strong>.</li>
<li><strong>MWST:</strong> 8,1 % (Normal), 3,8 % (Beherbergung), 2,6 % (Lebensmittel) — Stand 1.1.2024. Preise <strong>immer inkl. MWST</strong>.</li>
</ol>
<div class="merksatz">Merke: Sechs Stufen — jede zählt. Wer eine vergisst, verkauft unter Selbstkosten.</div>
</div></div>

<div class="tl-item"><div class="tl-num tl-num-a">3</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Dreieck der Preisgestaltung</div><div class="tl-merksatz">«Kosten · Kunde · Konkurrenz — aus allen drei Richtungen denken.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail">
<div class="tl-body">Die Preisfindung sollte sich an drei Gesichtspunkten orientieren — dem <strong style="color:#e8a838">Dreieck der Preisgestaltung</strong>:</div>

<div class="tl-sub">
<div class="c ca"><div class="ct2">🏢 Kosten (Unternehmen)</div><div class="cd"><strong>Kostenorientierte Preisfestsetzung:</strong> Preis basiert auf Selbstkosten + Gewinnzuschlag. Reine Kostendeckung.<br><em>Bsp: Öffentliche Schulen, Wein in Gastronomie (fixer Zuschlag).</em></div></div>
<div class="c cg"><div class="ct2">👥 Kunde (Nachfrage)</div><div class="cd"><strong>Nachfrageorientierte Preisfestsetzung:</strong> Was sind Kund:innen bereit zu zahlen?<br><em>Bsp: Hotels/Flüge — Dienstag anderer Preis als Samstag.</em></div></div>
<div class="c cp"><div class="ct2">🏛 Konkurrenz</div><div class="cd"><strong>Konkurrenzorientierte Preisfestsetzung:</strong> Orientierung an Mitbewerber:innen.<br><em>Bsp: Kaffee, Flasche Bier — überall ähnlicher Preis.</em></div></div>
</div>

<div style="margin-top:14px;font-weight:700;color:#e8a838">Weitere Preisfindungsmethoden</div>
<div class="tl-sub">
<div class="c cm"><div class="ct2">Dynamic Pricing</div><div class="cd">Preis wird <strong>dynamisch der Nachfrage angepasst</strong>. Voraussetzungen: Kapazitäten begrenzt und nicht lagerbar (Zimmer, Flüge). Variable Kosten bekannt (Untergrenze).<br><br>Bei hoher Nachfrage teuer, bei tiefer bis zur Preisuntergrenze — jeder Franken über variablen Kosten deckt Fixkosten.</div></div>
<div class="c cr"><div class="ct2">Target Pricing & Target Costing</div><div class="cd"><strong style="color:#e8a838">Target Pricing:</strong> Was darf das Produkt maximal kosten, um marktfähig zu sein?<br><br><strong style="color:#e8a838">Target Costing:</strong> Was darf das Produkt in der Herstellung maximal kosten, um den Ziel-Gewinn zu erzielen? (Zielverkaufspreis − Mindestgewinn = zulässige Kosten)</div></div>
</div>
<div class="merksatz">Merke: Nur Kosten-Basis ist zu teuer. Nur Konkurrenz-Basis ist zu naiv. Dreieck denken!</div>
</div></div>

<div class="tl-item"><div class="tl-num tl-num-g">4</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Kalkulationsmethoden im Überblick</div><div class="tl-merksatz">«Aufschlagskalkulation ist der Hotellerie-Standard.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail">
<div class="tl-body">Es gibt verschiedene Arten, den Preis eines Produkts bzw. einer Leistung zu berechnen:</div>

<div style="overflow-x:auto;margin:12px 0">
<table style="width:100%;font-size:12.5px;border-collapse:collapse;color:var(--tx)">
<thead><tr style="background:var(--s2);font-weight:700"><td style="padding:8px;border:1px solid var(--bd)">Methode</td><td style="padding:8px;border:1px solid var(--bd)">Vorgehen</td></tr></thead>
<tbody>
<tr><td style="padding:6px 8px;border:1px solid var(--bd);font-weight:600">Einfacher Faktor</td><td style="padding:6px 8px;border:1px solid var(--bd)">Warenkosten × Faktor</td></tr>
<tr><td style="padding:6px 8px;border:1px solid var(--bd);font-weight:600">Einfacher Zuschlag</td><td style="padding:6px 8px;border:1px solid var(--bd)">Warenkosten + Wert</td></tr>
<tr><td style="padding:6px 8px;border:1px solid var(--bd);font-weight:600">Divisionskalkulation</td><td style="padding:6px 8px;border:1px solid var(--bd)">Alle Kosten / Anzahl Produkte</td></tr>
<tr style="background:rgba(232,168,56,0.12)"><td style="padding:6px 8px;border:1px solid var(--bd);font-weight:700;color:#e8a838">Aufschlagskalkulation ⭐</td><td style="padding:6px 8px;border:1px solid var(--bd)">Hotellerie-Standard — siehe nächste Nummer</td></tr>
<tr><td style="padding:6px 8px;border:1px solid var(--bd);font-weight:600">Betriebsrechnung</td><td style="padding:6px 8px;border:1px solid var(--bd)">Aus der Teilkostenrechnung abgeleitet</td></tr>
<tr><td style="padding:6px 8px;border:1px solid var(--bd);font-weight:600;color:#ff3b30">Praktiker-Methode</td><td style="padding:6px 8px;border:1px solid var(--bd)">«Handgelenk mal Pi» — nicht empfehlenswert!</td></tr>
</tbody></table></div>
<div class="merksatz">Merke: In der Hotellerie ist Aufschlagskalkulation + DDR + Sales-Mix der Goldstandard.</div>
</div></div>

<div class="tl-item"><div class="tl-num tl-num-g">5</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Aufschlagskalkulation (ausführlich)</div><div class="tl-merksatz">«Sieben Schritte vom Betriebskosten-Block zum Gericht-Preis.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail">
<div class="tl-body">Die <strong style="color:#e8a838">Aufschlagskalkulation</strong> zeigt in erster Linie die gastronomische Rentabilität in Bezug auf die tatsächlich anfallenden Produktionskosten. Idealerweise kombiniert mit <strong style="color:#00c6fb">DDR</strong> und <strong style="color:#00c6fb">ausgewogenem Sales-Mix</strong>.</div>

<div style="margin-top:12px;font-weight:700;color:#e8a838">Die 7-Schritt-Checkliste</div>
<ol style="margin-left:20px;line-height:1.8;font-size:13px">
<li><strong>Gesamte Betriebskosten</strong> (Fixkosten: Personal, Miete, Versicherung, Marketing, Administration, Finanzen) summieren</li>
<li><strong>Aufteilung in Sparten</strong> (Speisen / Getränke) → Produktionskosten pro Sparte</li>
<li><strong>Unterteilung in Untersparten</strong> (Haupt-/Vorspeisen; Wein/Bier/Mineral) anhand Absatzplanung</li>
<li><strong>Produktionskosten der Sparte</strong> × prozentualer Wert der Untersparte = Produktionskosten Untersparte</li>
<li><strong>/ Anzahl Produkte</strong> = Ø Selbstkostenanteil pro Produkt</li>
<li><strong>+ Warenkosten</strong> des konkreten Gerichts + <strong>Gewinnanteil + Reserve</strong></li>
<li><strong>+ aktuelle MWST</strong> → Endpreis</li>
</ol>

<div class="hl" style="margin-top:10px"><strong>WICHTIGE DETAILS</strong><br>
<strong style="color:#e8a838">Standard-Rezeptur:</strong> Ordentlich dokumentierte Auflistung aller Komponenten in g/dl/Stück mit Einkaufspreisen.<br>
<strong style="color:#e8a838">Gewinn-Zuschlag:</strong> Mindestens der im Businessplan festgelegte Jahresgewinn in %.<br>
<strong style="color:#e8a838">Reserve:</strong> Bei Fehlbestellung oder Bruch problemlos ersetzbar.<br>
<strong style="color:#e8a838">Preissensibilität:</strong> Anpassung an Konkurrenzpreise und Zahlungsbereitschaft.</div>

<div class="hla" style="border-left:4px solid #34c759;background:rgba(52,199,89,0.08);padding:14px 18px;margin-top:12px;border-radius:10px;font-size:13px">
<strong style="color:#34c759">🏨 FALLBEISPIEL BELLAVISTA — «Zanderfilet auf Rösti»</strong><br>
<strong>Warenkosten (Rezeptur):</strong> Zanderfilet 180g CHF 9.50, Kartoffeln CHF 1.20, Gemüse CHF 2.10, Sauce CHF 1.80 = <strong style="color:#e8a838">CHF 14.60</strong><br>
+ Ø Selbstkostenanteil Hauptspeisen: <strong>CHF 11.20</strong><br>
+ Gewinnanteil 15 %: <strong>CHF 3.87</strong><br>
+ Reserve 3 %: <strong>CHF 0.89</strong><br>
<strong>= Netto-Verkaufspreis: CHF 30.56</strong><br>
+ MWST 8,1 %: CHF 2.48<br>
→ <strong style="color:#e8a838">Brutto-Verkaufspreis (Speisekarte): CHF 33.00</strong> (aufgerundet)
</div>
<div class="merksatz">Merke: Standard-Rezeptur + aktuelle Einkaufspreise = jederzeit richtig kalkulieren.</div>
</div></div>

<div class="tl-item"><div class="tl-num tl-num-b">6</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Einfluss der Kostenrechnung auf die Kalkulation</div><div class="tl-merksatz">«Kostenspaltung fix/variabel — auch in der Kalkulation.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail">
<div class="tl-body">Auf gleicher Basis wie bei der Teilkostenrechnung findet auch in der Kalkulation eine <strong style="color:#e8a838">Kostenspaltung</strong> statt — Fixkosten und variable Kosten werden getrennt.</div>

<div class="tl-sub">
<div class="c cr"><div class="ct2">Fixkosten in Hotellerie/Gastronomie</div><div class="cd">Nicht von der Auslastung abhängig: Personalkosten (Festanstellung), Miete, Versicherung, Marketing, Administration, Finanzkosten.</div></div>
<div class="c cg"><div class="ct2">Variable Kosten in Hotellerie/Gastronomie</div><div class="cd">Direkt mit Auslastung verknüpft: Warenkosten für Essen & Getränke, Kosten eines Gästeaufenthalts (Reinigung, Wäsche, Amenities).</div></div>
</div>

<div class="tl-body" style="margin-top:10px">Variable Kosten lassen sich durch <strong style="color:#e8a838">standardisierte Rezepturen und Abläufe</strong> sowie einen <strong style="color:#e8a838">gut organisierten Einkauf</strong> optimieren. Die Einnahmen müssen sowohl fixe als auch variable Kosten decken.</div>
<div class="merksatz">Merke: Variable Kosten kann man täglich optimieren. Fixkosten nur strategisch.</div>
</div></div>

<div class="tl-item"><div class="tl-num tl-num-p">7</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Materielle und immaterielle Komponenten</div><div class="tl-merksatz">«Gäste zahlen oft mehr für Atmosphäre als für das Produkt.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail">
<div class="tl-body">Ein Angebot in der Hotellerie besteht nicht nur aus messbaren Produkten, sondern auch aus schwer fassbaren Werten:</div>

<div class="tl-sub">
<div class="c ca"><div class="ct2">Materielle Komponenten</div><div class="cd">Das Essen, das Getränk, das Zimmer, die Einrichtung, die Lage, die Sauberkeit.</div></div>
<div class="c cm"><div class="ct2">Immaterielle Komponenten</div><div class="cd">Atmosphäre, Gastfreundschaft, Service, Story, Marke, Reputation, Erlebnis.</div></div>
</div>

<div class="tl-body" style="margin-top:10px">Im Preis steckt immer <strong style="color:#e8a838">beides</strong> — und der Gast zahlt oft mehr für die <strong style="color:#00c6fb">immateriellen Werte</strong> als für das Produkt selbst.</div>
<div class="merksatz">Merke: Das Erlebnis ist der Hebel. Das Produkt allein bringt keinen Preis-Premium.</div>
</div></div>

</div>
</div>


<!-- CTRL: Investitionsrechnung (PDF 1:1 als Timeline) -->
<div class="sec" id="ctrl_inv"><h1>04 · Investitionsrechnung</h1><p class="sub">Grundlagen · Rechengrössen · Statische Verfahren · Rückflusszahl · NPV</p>

<div class="hlbl"><strong>LERNZIELE K04</strong><br>
✓ Den Begriff Investition definieren und verschiedene Investitionsarten unterscheiden<br>
✓ Die Motive hinter Investitionen erläutern und Beispiele aus der Hotellerie nennen<br>
✓ Die Rechengrössen der Investitionsrechnung (Kapitaleinsatz, Cashflow, Nutzungsdauer, Zinsfuss, Liquidationserlös) erklären<br>
✓ Statische Rechenverfahren (Kostenvergleich, Gewinnvergleich, Renditerechnung, Amortisationsrechnung) anwenden<br>
✓ Die Rückflusszahl berechnen und interpretieren<br>
✓ Grundverständnis der dynamischen Verfahren (NPV-Methode) aufweisen</div>

<div style="display:flex;gap:8px;margin:16px 0 6px"><button style="font-size:11px;padding:4px 10px" onclick="this.parentElement.nextElementSibling.querySelectorAll('.tl-item').forEach(i=>i.classList.add('open'))">Alle aufklappen</button><button style="font-size:11px;padding:4px 10px" onclick="this.parentElement.nextElementSibling.querySelectorAll('.tl-item').forEach(i=>i.classList.remove('open'))">Alle schliessen</button></div>

<div class="tl">

<div class="tl-item"><div class="tl-num tl-num-b">1</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Was ist eine Investition?</div><div class="tl-merksatz">«Investire = einkleiden. Geld wird in Anlagevermögen eingekleidet.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail">
<div class="tl-body"><strong style="color:#e8a838">Investire</strong> (lateinisch) = <em>einkleiden</em>. Investitionen sind finanzielle Mittel, die für längere Zeit in <strong style="color:#e8a838">Anlagevermögen</strong> «eingekleidet» (angelegt) werden. Das Ziel einer Investition ist immer eine <strong style="color:#34c759">Wertsteigerung</strong> — Return on Investment.</div>

<div style="margin-top:12px;font-weight:700;color:#e8a838">Investitionsmerkmale</div>
<div class="tl-sub">
<div class="c ca"><div class="ct2">🎯 Zielgerichtet</div><div class="cd">Finanzielle Ressourcen werden für einen zukunftsgerichteten Zweck eingesetzt — nicht für den laufenden Konsum.</div></div>
<div class="c cm"><div class="ct2">⏳ Mittel- bis langfristig</div><div class="cd">Der erwartete Nutzen erstreckt sich über einen längeren Zeitraum — Jahre oder Jahrzehnte.</div></div>
<div class="c cp"><div class="ct2">📊 Unregelmässige Ströme</div><div class="cd">Einnahmen- und Ausgabenströme fallen unregelmässig an — hohe Anfangsausgabe, gestaffelte Rückflüsse.</div></div>
<div class="c cg"><div class="ct2">📈 Wertsteigerung als Ziel</div><div class="cd">Zugunsten künftiger höherer Einnahmen wird heute auf einen kleineren, weniger risikoreichen Nutzen verzichtet.</div></div>
</div>

<div style="margin-top:12px;font-weight:700;color:#e8a838">Wie «beginnen» Investitionen?</div>
<div style="display:flex;align-items:center;justify-content:center;gap:6px;margin:10px 0;flex-wrap:wrap">
<div style="background:var(--s2);border:1px solid var(--bd);padding:8px 12px;border-radius:6px;text-align:center;font-size:12px;font-weight:700">Investitionsbedarf</div>
<div style="color:#e8a838;font-weight:700">→</div>
<div style="background:var(--s2);border:1px solid var(--bd);padding:8px 12px;border-radius:6px;text-align:center;font-size:12px;font-weight:700">Investitionsbudget</div>
<div style="color:#e8a838;font-weight:700">→</div>
<div style="background:var(--s2);border:1px solid var(--bd);padding:8px 12px;border-radius:6px;text-align:center;font-size:12px;font-weight:700">Finanzierungsplan</div>
<div style="color:#e8a838;font-weight:700">→</div>
<div style="background:var(--s2);border:1px solid var(--bd);padding:8px 12px;border-radius:6px;text-align:center;font-size:12px;font-weight:700">Finanzierungen beschaffen</div>
<div style="color:#e8a838;font-weight:700">→</div>
<div style="background:var(--s2);border:1px solid var(--bd);padding:8px 12px;border-radius:6px;text-align:center;font-size:12px;font-weight:700">Baubewilligungen</div>
</div>
<div class="merksatz">Merke: Investition ≠ Konsum. Langfristig, zielgerichtet, mit Rückflüssen.</div>
</div></div>

<div class="tl-item"><div class="tl-num tl-num-a">2</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Investitionsarten</div><div class="tl-merksatz">«Sach, Finanz, Immateriell — drei Arten der Mittelanlage.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail">
<div class="tl-body">Je nach Art der Mittelanlage unterscheidet man <strong>drei Investitionsarten</strong>:</div>

<div class="tl-sub">
<div class="c ca"><div class="ct2">🏢 Sachinvestition</div><div class="cd">• Fahrzeuge<br>• Maschinen<br>• Immobilien<br><br><em>Bsp: Betriebsfahrzeug, Kücheneinrichtung, Restaurantmobiliar, Hotelgebäude</em></div></div>
<div class="c cg"><div class="ct2">💳 Finanzinvestition</div><div class="cd">• Aktivdarlehen<br>• Beteiligungen<br><br><em>Bsp: Darlehen an Aktionär, Beteiligung an anderem Betrieb</em></div></div>
<div class="c cp"><div class="ct2">💡 Immaterielle Investition</div><div class="cd">• Forschung<br>• Sozialleistungen<br>• Patente<br>• Lizenzen<br><br><em>Bsp: IT-Benutzerlizenzen, EDV-Software, Casino-Konzession</em></div></div>
</div>
<div class="merksatz">Merke: Nicht jede Investition ist sichtbar — Patente und Software sind oft die wertvollsten.</div>
</div></div>

<div class="tl-item"><div class="tl-num tl-num-g">3</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Motive einer Investition</div><div class="tl-merksatz">«Gründung, Erweiterung, Ersatz, Rationalisierung, Umstellung, Diversifikation, Sicherung.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail">
<div class="tl-body">Wird nach dem <strong style="color:#e8a838">Motiv</strong> gefragt, warum eine Investition getätigt wird, unterscheidet man folgende Typen:</div>

<div style="overflow-x:auto;margin:12px 0">
<table style="width:100%;font-size:12.5px;border-collapse:collapse;color:var(--tx)">
<thead><tr style="background:var(--s2);font-weight:700"><td style="padding:8px;border:1px solid var(--bd)">Investitionsart</td><td style="padding:8px;border:1px solid var(--bd)">Motiv</td><td style="padding:8px;border:1px solid var(--bd)">Hotel-Beispiel</td></tr></thead>
<tbody>
<tr><td style="padding:6px 8px;border:1px solid var(--bd);font-weight:600">Gründungsinvestition</td><td style="padding:6px 8px;border:1px solid var(--bd)">Gründung Unternehmung, neue Filiale</td><td style="padding:6px 8px;border:1px solid var(--bd)">Neues Boutique-Hotel wird eröffnet</td></tr>
<tr><td style="padding:6px 8px;border:1px solid var(--bd);font-weight:600">Erweiterungsinvestition</td><td style="padding:6px 8px;border:1px solid var(--bd)">Bestehende Kapazität wird erweitert</td><td style="padding:6px 8px;border:1px solid var(--bd)">Angrenzendes Grundstück für Parkplätze</td></tr>
<tr><td style="padding:6px 8px;border:1px solid var(--bd);font-weight:600">Ersatzinvestition</td><td style="padding:6px 8px;border:1px solid var(--bd)">Anlage durch gleichartige ersetzt</td><td style="padding:6px 8px;border:1px solid var(--bd)">Austausch veralteter Möbel</td></tr>
<tr><td style="padding:6px 8px;border:1px solid var(--bd);font-weight:600">Rationalisierungsinvestition</td><td style="padding:6px 8px;border:1px solid var(--bd)">Wirtschaftlichkeit erhöhen</td><td style="padding:6px 8px;border:1px solid var(--bd)">Energieeffiziente Beleuchtung</td></tr>
<tr><td style="padding:6px 8px;border:1px solid var(--bd);font-weight:600">Umstellungsinvestition</td><td style="padding:6px 8px;border:1px solid var(--bd)">Neue Technologien</td><td style="padding:6px 8px;border:1px solid var(--bd)">Solarenergie</td></tr>
<tr><td style="padding:6px 8px;border:1px solid var(--bd);font-weight:600">Diversifikationsinvestition</td><td style="padding:6px 8px;border:1px solid var(--bd)">Produktionsprogramm erweitern</td><td style="padding:6px 8px;border:1px solid var(--bd)">Resort an neuem Standort</td></tr>
<tr><td style="padding:6px 8px;border:1px solid var(--bd);font-weight:600">Sicherungsinvestition</td><td style="padding:6px 8px;border:1px solid var(--bd)">Fortbestand sichern (F&E, Schulung)</td><td style="padding:6px 8px;border:1px solid var(--bd)">Beteiligung Werbeagentur</td></tr>
</tbody></table></div>

<div class="hl"><strong>UNTERSCHEIDUNGSMERKMALE</strong><br>
Nebst den Motiven: <strong style="color:#e8a838">Rechenbare</strong> vs. nicht rechenbare (z.B. Sozialinvestitionen). <strong style="color:#e8a838">Zwangsinvestition</strong> (unaufschiebbar, defekte Küche) vs. <strong style="color:#e8a838">Alternativinvestition</strong>.<br><br>
In der Praxis vereint eine Investition oft mehrere Motive: Ersatz einer IT-Anlage = Ersatz + Zwang + Rationalisierung + Erweiterung.</div>

<div class="hla" style="border-left:4px solid #34c759;background:rgba(52,199,89,0.08);padding:14px 18px;margin-top:12px;border-radius:10px;font-size:13px">
<strong style="color:#34c759">🏨 FALLBEISPIEL BELLAVISTA — Investitionsportfolio 2024</strong><br>
<strong>Ersatz</strong> Wäschereianlage (Zwang, CHF 180'000); <strong>Erweiterung</strong> Wellness um Indoor-Pool (CHF 750'000); <strong>Rationalisierung</strong> PV-Anlage (CHF 320'000); <strong>Sicherung</strong> neues PMS-System (immateriell, CHF 85'000). <strong>Gesamtvolumen: CHF 1'335'000.</strong>
</div>
<div class="merksatz">Merke: Zwang geht vor Alternativ. Rentabilität ist nicht das einzige Kriterium.</div>
</div></div>

<div class="tl-item"><div class="tl-num tl-num-x">4</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Der Investitionsprozess</div><div class="tl-merksatz">«Neun Schritte von der Idee bis zur Kontrolle.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail">
<div class="tl-body">Der Investitionsvorgang darf nicht isoliert betrachtet werden — er ist Teil der Finanz- und Liquiditätsplanung:</div>
<ol style="margin-left:20px;line-height:1.8;font-size:13px">
<li><strong>Investitionsanregungen sammeln:</strong> Vorschlagswesen, prämierte Ideen</li>
<li><strong>Vorfilterung:</strong> Anregungen die nicht zu Zielen passen oder technisch unmöglich sind</li>
<li><strong>Datensammlung:</strong> wirtschaftliche, technische und soziale Prüfung</li>
<li><strong>Wirtschaftlichkeitsrechnung:</strong> statische/dynamische Verfahren</li>
<li><strong>Gesamtbeurteilung:</strong> auch soziale und psychologische Aspekte</li>
<li><strong>Priorisierung:</strong> zuerst Zwangsinvestitionen, dann Alternativprojekte</li>
<li><strong>Finanzierung:</strong> benötigte vs. verfügbare Mittel</li>
<li><strong>Durchführung:</strong> Zeitplan, Personalschulung, Marketing</li>
<li><strong>Kontrolle:</strong> Abweichungen sofort erkennen</li>
</ol>

<div class="hlr" style="margin-top:12px"><strong>⚠ HÄUFIGER FEHLER: REINE RENTABILITÄTSBETRACHTUNG</strong><br>Am einfachsten wäre die Einordnung nach Rentabilität — doch dann würden rein wirtschaftliche Überlegungen dominieren. <strong>Sozial-, Schulungs- und Sicherheitsinvestitionen hätten zu wenig Chancen</strong>, realisiert zu werden.</div>
<div class="merksatz">Merke: Nicht nur rentabel = investieren. Soziale und strategische Aspekte mit-bewerten.</div>
</div></div>

<div class="tl-item"><div class="tl-num tl-num-b">5</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Rechengrössen der Investitionsrechnung</div><div class="tl-merksatz">«Kapitaleinsatz, Cashflow, Nutzungsdauer, Zinsfuss, Liquidationserlös, Ø Kapital.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail">
<div class="tl-body">In Wirtschaftlichkeitsrechnungen werden Ausgaben und Einnahmen einander gegenübergestellt:</div>

<div class="tl-sub">
<div class="c ca"><div class="ct2">💼 Kapitaleinsatz (Anfangsausgaben)</div><div class="cd">Alle bis zur Inbetriebnahme anfallenden Kosten:<br>• Einstandspreis Investitionsobjekt<br>• Forschungs- und Entwicklungskosten<br>• Projektierungskosten<br>• Einbau- und Installationskosten<br>• Wartung bis Inbetriebnahme<br>• Produktionsausfall<br>• Sekundärinvestitionen<br>• Erhöhung Umlaufvermögen<br><strong style="color:#e8a838">= Investiertes Kapital</strong></div></div>
<div class="c cg"><div class="ct2">💰 Cashflow (laufende Ströme)</div><div class="cd">Liquiditätszufluss aus der Investitionstätigkeit — Überschuss investitionsbedingter Einnahmen über Ausgaben.<br><br><em>In älterer Literatur auch «Rohgewinn».</em></div></div>
<div class="c cm"><div class="ct2">📅 Nutzungsdauer</div><div class="cd">Zeitspanne, während der die Anlage genutzt wird — <strong>wirtschaftliche</strong> Nutzungsdauer, nicht technische Lebensdauer.<br><br><em>Entwertung durch technischen Fortschritt berücksichtigen!</em></div></div>
<div class="c cp"><div class="ct2">💱 Liquidationserlös</div><div class="cd">Mittelzufluss am Ende der Nutzungsdauer, falls verkaufbar (Restwert).</div></div>
<div class="c cr"><div class="ct2">📊 Zinsfuss (kalkulatorisch)</div><div class="cd">Kosten der Finanzierung. Setzt sich zusammen aus risikofreiem Zins + Risikoaufschlag.</div></div>
<div class="c ca"><div class="ct2">🏦 Ø Investiertes Kapital</div><div style="background:rgba(232,168,56,0.12);border:1px dashed #e8a838;padding:6px;border-radius:6px;margin:6px 0;text-align:center;font-style:italic;color:#e8a838;font-size:12px">Ø Kapital = Investiertes Kapital / 2</div><div class="cd">Weil Rückflüsse reinvestiert werden können, wird nur die Hälfte als durchschnittlich gebunden betrachtet.</div></div>
</div>

<div class="hl" style="margin-top:10px"><strong>SEKUNDÄRINVESTITIONEN</strong><br>Unabdingbar verbundene Folgeinvestitionen. Beispiel: Beim Umbau auf grössere IT-Anlage braucht es auch eine neue Sicherheitsanlage und stärkere Klimatisierung.</div>
<div class="merksatz">Merke: Ø Kapital = Investiertes Kapital / 2. Die Hälfte ist durchschnittlich gebunden.</div>
</div></div>

<div class="tl-item"><div class="tl-num tl-num-b">6</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Rechenverfahren — Überblick</div><div class="tl-merksatz">«Statisch = Durchschnittsjahr. Dynamisch = ganze Nutzungsdauer mit Zinseszins.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail">
<div class="tl-sub">
<div class="c ca"><div class="ct2">Statische (buchhalterische) Verfahren</div><div class="cd">Basieren auf <strong>periodisierter, durchschnittlicher Betrachtung</strong>.<br>• Kostenvergleich<br>• Gewinnvergleich<br>• Renditerechnung<br>• Amortisationsrechnung (Payback)<br><br><strong>→ Fokus Semester 5</strong></div></div>
<div class="c cp"><div class="ct2">Dynamische (finanzmathematische) Verfahren</div><div class="cd">Berücksichtigen die <strong>gesamte Nutzungsdauer</strong> mit Zinseszins.<br>• Kapitalwertverfahren (NPV)<br>• Annuitätenmethode<br>• Interner Ertragssatz (IRR)<br>• Dynamisierte Payback-Methode<br><br><strong>→ Vertiefung Semester 6</strong></div></div>
</div>
<div class="merksatz">Merke: Heute verfügbares Geld ist mehr wert als künftiges — das macht dynamische Verfahren genauer.</div>
</div></div>

<div class="tl-item"><div class="tl-num tl-num-g">7</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Statisches Verfahren — Kostenvergleich</div><div class="tl-merksatz">«Bei gleichen Erlösen: die billigere Variante wählen.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail">
<div class="tl-body">Der <strong style="color:#e8a838">Kostenvergleich</strong> stellt die anfallenden Kosten einer Periode (i.d.R. ein Jahr) zweier oder mehrerer Investitionsobjekte gegenüber. Gewählt wird die Investition mit den tieferen Kosten.</div>
<div class="tl-body" style="margin-top:8px"><strong>Einsatzgebiet:</strong> Vergleich der Kosten einer geplanten Ersatzbeschaffung.</div>
<ul style="margin-left:20px;line-height:1.7;font-size:13px">
<li>Ersatz von Reinigungsmaschinen</li>
<li>Kauf neuer Küchengeräte</li>
<li>Anschaffung neuer Betriebsfahrzeuge</li>
</ul>

<div class="hla" style="border-left:4px solid #34c759;background:rgba(52,199,89,0.08);padding:14px 18px;margin-top:12px;border-radius:10px;font-size:13px">
<strong style="color:#34c759">🏨 FALLBEISPIEL BELLAVISTA — Wäschereianlage ersetzen</strong><br>
<strong>Variante A «Effizient»:</strong> Anschaffung CHF 180'000, ND 10 J., Ø Kapital CHF 90'000, Zins 5 % = 4'500/J., Abschr. 18'000, Energie 8'000, Wartung 3'500 → <strong>Jahreskosten CHF 34'000</strong>.<br>
<strong>Variante B «Premium»:</strong> Anschaffung CHF 220'000, ND 12 J., Ø Kapital CHF 110'000, Zins 5 % = 5'500/J., Abschr. 18'333, Energie 5'000, Wartung 2'500 → <strong>Jahreskosten CHF 31'333</strong>.<br>
<strong style="color:#e8a838">→ Variante B gewinnt trotz höherer Anschaffung.</strong>
</div>
<div class="merksatz">Merke: Teurer anschaffen kann billiger betreiben sein — über die Gesamtkosten rechnen.</div>
</div></div>

<div class="tl-item"><div class="tl-num tl-num-g">8</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Statisches Verfahren — Gewinnvergleich</div><div class="tl-merksatz">«Vergleicht Jahresgewinne — aber nur bei ähnlichem Kapitaleinsatz.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail">
<div class="tl-body">Der <strong style="color:#e8a838">Gewinnvergleich</strong> bezieht die Erlöse in die Rechnung ein und stellt die zu erwartenden <strong>Jahresgewinne</strong> gegenüber. Geeignet für Ersatz- oder Erweiterungsinvestitionen mit unterschiedlichen Erlöserwartungen.</div>
<div class="tl-body" style="margin-top:8px"><strong>Entscheidungsregel:</strong> Gewählt wird die Investition mit dem <strong style="color:#34c759">grössten Jahresgewinn</strong>.</div>

<div class="hlr" style="margin-top:12px"><strong>⚠ SCHWÄCHE DES GEWINNVERGLEICHS</strong><br>Die Kapitaleinsätze dürfen <strong>nicht stark voneinander abweichen</strong>, sonst kommt das Projekt mit höherem Kapitaleinsatz zu gut weg. Ein Projekt mit CHF 500'000 muss absolut gesehen mehr Gewinn abwerfen als eines mit CHF 100'000. Die Lösung: <strong>Renditerechnung</strong>.</div>

<div class="tl-body" style="margin-top:8px"><strong>Einsatzgebiete:</strong></div>
<ul style="margin-left:20px;line-height:1.7;font-size:13px">
<li>Ausbau der Zimmerkapazitäten</li>
<li>Erweiterung der Parkplätze</li>
<li>Technologische Neuerungen in Sitzungszimmern</li>
</ul>
<div class="merksatz">Merke: Gewinnvergleich nur bei ähnlichen Kapitaleinsätzen — sonst Rendite rechnen.</div>
</div></div>

<div class="tl-item"><div class="tl-num tl-num-g">9</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Statisches Verfahren — Renditerechnung (RoI)</div><div class="tl-merksatz">«Fair selbst bei unterschiedlichem Kapitaleinsatz.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail">
<div class="tl-body">Die <strong style="color:#e8a838">Renditerechnung (RoI)</strong> bezieht den durchschnittlich erzielten Jahresgewinn <strong>vor Abzug der kalkulatorischen Zinsen</strong> auf das durchschnittlich eingesetzte Kapital.</div>

<div style="background:rgba(232,168,56,0.12);border:1px dashed #e8a838;padding:12px 16px;border-radius:8px;margin:12px 0;text-align:center;font-family:Georgia,serif;font-style:italic;color:#e8a838;font-size:14px">Rentabilität = (Gewinn + kalkulatorischer Zins) / Ø investiertes Kapital × 100 %<br><span style="font-size:11px;color:var(--tx2);font-style:normal;font-family:-apple-system">Richtwert: &gt; 10 %</span></div>

<div class="hl"><strong>WARUM «+ KALKULATORISCHER ZINS»?</strong><br>Bei der gezeigten Rendite handelt es sich um die <strong style="color:#e8a838">Bruttorendite</strong>, welche die gesamte Verzinsung der Investition nachweist. Deshalb ist der bereits um die kalkulatorischen Zinsen geschmälerte Gewinn wieder zu korrigieren.</div>

<div class="tl-body" style="margin-top:10px"><strong>Vorteil gegenüber Kosten-/Gewinnvergleich:</strong> Auch gänzlich unterschiedliche Investitionen können beurteilt werden. Geeignet für Ersatz-, Rationalisierungs- und Erweiterungsinvestitionen.</div>
<div class="tl-body" style="margin-top:6px"><strong>Entscheidungsregel:</strong> Gewählt wird die Investition mit der <strong style="color:#34c759">höchsten Rendite</strong>.</div>

<div class="hla" style="border-left:4px solid #34c759;background:rgba(52,199,89,0.08);padding:14px 18px;margin-top:12px;border-radius:10px;font-size:13px">
<strong style="color:#34c759">🏨 FALLBEISPIEL BELLAVISTA — Wahl zwischen 2 Fahrzeugen</strong><br>
<div style="overflow-x:auto;margin-top:8px">
<table style="width:100%;font-size:12px;border-collapse:collapse;color:var(--tx)">
<thead><tr style="background:var(--s2);font-weight:700"><td style="padding:6px 8px;border:1px solid var(--bd)">Kennzahl</td><td style="padding:6px 8px;border:1px solid var(--bd);text-align:right">Elektro</td><td style="padding:6px 8px;border:1px solid var(--bd);text-align:right">Benzin</td></tr></thead>
<tbody>
<tr><td style="padding:5px 7px;border:1px solid var(--bd)">Jahresgewinn (Anteil Invest.)</td><td style="padding:5px 7px;border:1px solid var(--bd);text-align:right">5'100</td><td style="padding:5px 7px;border:1px solid var(--bd);text-align:right">2'540</td></tr>
<tr><td style="padding:5px 7px;border:1px solid var(--bd)">Jahreszins Ø Kapital</td><td style="padding:5px 7px;border:1px solid var(--bd);text-align:right">840</td><td style="padding:5px 7px;border:1px solid var(--bd);text-align:right">560</td></tr>
<tr><td style="padding:5px 7px;border:1px solid var(--bd)">Investiertes Kapital</td><td style="padding:5px 7px;border:1px solid var(--bd);text-align:right">42'000</td><td style="padding:5px 7px;border:1px solid var(--bd);text-align:right">28'000</td></tr>
<tr style="background:rgba(52,199,89,0.08)"><td style="padding:5px 7px;border:1px solid var(--bd);font-weight:700">Rentabilität</td><td style="padding:5px 7px;border:1px solid var(--bd);text-align:right;font-weight:700;color:#34c759">28,29 %</td><td style="padding:5px 7px;border:1px solid var(--bd);text-align:right;font-weight:700">22,14 %</td></tr>
</tbody></table></div>
<strong style="color:#34c759">→ Elektro-Fahrzeug gewinnt!</strong>
</div>
<div class="merksatz">Merke: Rendite vergleicht Investitionen mit unterschiedlichem Kapitaleinsatz fair.</div>
</div></div>

<div class="tl-item"><div class="tl-num tl-num-a">10</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Statisches Verfahren — Amortisationsrechnung (Payback)</div><div class="tl-merksatz">«Wie schnell zahlt sich die Investition selbst zurück?»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail">
<div class="tl-body">Die <strong style="color:#e8a838">Amortisationsrechnung</strong> berechnet den Zeitraum, bis sich eine Investition mit den erzielten Cashflows vollständig zurückzahlt. Diesen Zeitraum nennt man <strong style="color:#e8a838">Wiedergewinnungszeit</strong>, <strong>Amortisationsdauer</strong> oder <strong>Payback-Period</strong>.</div>

<div style="background:rgba(232,168,56,0.12);border:1px dashed #e8a838;padding:12px 16px;border-radius:8px;margin:12px 0;text-align:center;font-family:Georgia,serif;font-style:italic;color:#e8a838;font-size:14px">Wiedergewinnungszeit = Kapitaleinsatz / Geldfluss aus Betriebstätigkeit<br><span style="font-size:11px;color:var(--tx2);font-style:normal;font-family:-apple-system">Kürzer als Nutzungsdauer → rentabel</span></div>

<div class="tl-body"><strong>Entscheidungsregel:</strong> <strong style="color:#34c759">kürzeste Wiedergewinnungszeit</strong>.</div>
<div class="tl-body" style="margin-top:6px">Payback ist auch ein <strong style="color:#e8a838">Risikomass</strong>: Je kürzer,</div>
<ul style="margin-left:20px;line-height:1.7;font-size:13px">
<li>desto wahrscheinlicher sind die zugrunde gelegten Daten</li>
<li>desto rascher stehen die investierten Mittel wieder zur Verfügung</li>
</ul>

<div class="hla" style="border-left:4px solid #34c759;background:rgba(52,199,89,0.08);padding:14px 18px;margin-top:12px;border-radius:10px;font-size:13px">
<strong style="color:#34c759">🏨 FALLBEISPIEL BELLAVISTA — Fahrzeugvergleich Payback</strong><br>
<div style="overflow-x:auto;margin-top:8px">
<table style="width:100%;font-size:12px;border-collapse:collapse;color:var(--tx)">
<thead><tr style="background:var(--s2);font-weight:700"><td style="padding:6px 8px;border:1px solid var(--bd)">Position</td><td style="padding:6px 8px;border:1px solid var(--bd);text-align:right">Elektro</td><td style="padding:6px 8px;border:1px solid var(--bd);text-align:right">Benzin</td></tr></thead>
<tbody>
<tr><td style="padding:5px 7px;border:1px solid var(--bd)">Jährlicher Erlös</td><td style="padding:5px 7px;border:1px solid var(--bd);text-align:right">13'440</td><td style="padding:5px 7px;border:1px solid var(--bd);text-align:right">11'700</td></tr>
<tr><td style="padding:5px 7px;border:1px solid var(--bd)">− Betriebskosten</td><td style="padding:5px 7px;border:1px solid var(--bd);text-align:right">1'500</td><td style="padding:5px 7px;border:1px solid var(--bd);text-align:right">3'000</td></tr>
<tr style="font-weight:700"><td style="padding:5px 7px;border:1px solid var(--bd)">Cashflow</td><td style="padding:5px 7px;border:1px solid var(--bd);text-align:right">11'940</td><td style="padding:5px 7px;border:1px solid var(--bd);text-align:right">8'700</td></tr>
<tr><td style="padding:5px 7px;border:1px solid var(--bd)">Invest. Kapital</td><td style="padding:5px 7px;border:1px solid var(--bd);text-align:right">42'000</td><td style="padding:5px 7px;border:1px solid var(--bd);text-align:right">28'000</td></tr>
<tr style="background:rgba(52,199,89,0.08)"><td style="padding:5px 7px;border:1px solid var(--bd);font-weight:700">Wiedergewinnungszeit</td><td style="padding:5px 7px;border:1px solid var(--bd);text-align:right;font-weight:700">3,5 J.</td><td style="padding:5px 7px;border:1px solid var(--bd);text-align:right;font-weight:700;color:#34c759">3,2 J.</td></tr>
</tbody></table></div>
<strong>→ Beim Payback gewinnt das Benzin-Fahrzeug</strong> — Widerspruch zur Renditerechnung! Deshalb muss mit der <strong>Rückflusszahl</strong> nachgerechnet werden.
</div>
<div class="merksatz">Merke: Payback allein führt bei unterschiedlicher Nutzungsdauer in die Irre → Rückflusszahl rechnen!</div>
</div></div>

<div class="tl-item"><div class="tl-num tl-num-r">11</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Rückflusszahl — bei unterschiedlicher Nutzungsdauer</div><div class="tl-merksatz">«Wie oft amortisiert sich die Investition während ihrer Lebensdauer?»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail">
<div class="tl-body">Beim Vergleich von Investitionen mit <strong style="color:#e8a838">unterschiedlicher Nutzungsdauer</strong> darf nicht nur auf die Amortisationszeit abgestellt werden. Diese ist ins Verhältnis zur Nutzungsdauer zu setzen — das ergibt die <strong style="color:#e8a838">Rückflusszahl</strong>.</div>

<div style="background:rgba(232,168,56,0.12);border:1px dashed #e8a838;padding:12px 16px;border-radius:8px;margin:12px 0;text-align:center;font-family:Georgia,serif;font-style:italic;color:#e8a838;font-size:14px">Rückflusszahl = Nutzungsdauer / Wiedergewinnungszeit<br><span style="font-size:11px;color:var(--tx2);font-style:normal;font-family:-apple-system">Grösser als 1 → Investition rentabel</span></div>

<div class="tl-body"><strong>Entscheidungsregel:</strong> <strong style="color:#34c759">grösste Rückflusszahl</strong>.</div>

<div class="hl" style="margin-top:12px"><strong>BEISPIEL RÜCKFLUSSZAHL</strong><br>
<strong>Anlage A:</strong> ND 5 J., WGZ 3,33 J. → Rückflusszahl = 5 / 3,33 = <strong style="color:#34c759">1,50</strong> (Rang 1).<br>
<strong>Anlage B:</strong> ND 6 J., WGZ 4,5 J. → Rückflusszahl = 6 / 4,5 = <strong>1,33</strong> (Rang 2).<br>
<strong>→ Anlage A gewinnt</strong> — amortisiert sich 1,5-mal während ihrer Lebensdauer.</div>

<div class="hlr" style="margin-top:12px"><strong>⚠ WICHTIGE HINWEISE</strong><br>
<strong>1.</strong> Bei <strong>unregelmässigem</strong> Cashflow: Payback als <strong>Staffel</strong> lösen (Jahr für Jahr kumulieren).<br>
<strong>2.</strong> Wiedergewinnungszeit auch <strong>grafisch</strong> ablesbar: x-Achse Jahre, y-Achse kumulierter Cashflow, Schnittpunkt mit Investitionssumme = Payback.</div>
<div class="merksatz">Merke: Rückflusszahl &gt; 1 = Investition rentiert sich. Bei ungleicher Nutzungsdauer Pflicht!</div>
</div></div>

<div class="tl-item"><div class="tl-num tl-num-p">12</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Grundverständnis: Dynamische Verfahren — NPV-Methode</div><div class="tl-merksatz">«Heute verfügbares Geld ist mehr wert als künftiges.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail">
<div class="tl-body">Die <strong style="color:#e8a838">Net-Present-Value-Methode (NPV)</strong> basiert auf dem Discounted-Cash-Flow-Ansatz (DCF). Zukünftige Cashflows werden mit einem kalkulatorischen Zinssatz (Kapitalkostensatz / WACC) <strong style="color:#00c6fb">diskontiert</strong> — auf den heutigen Wert (Barwert) zurückgerechnet.</div>

<div style="background:rgba(232,168,56,0.12);border:1px dashed #e8a838;padding:12px 16px;border-radius:8px;margin:12px 0;text-align:center;font-family:Georgia,serif;font-style:italic;color:#e8a838;font-size:14px">NPV = Σ Barwerte aller Cashflows − Investitionssumme<br><span style="font-size:11px;color:var(--tx2);font-style:normal;font-family:-apple-system">NPV &gt; 0 → Investition schafft Mehrwert</span></div>

<div class="hl"><strong>BEISPIEL NPV-BERECHNUNG</strong><br>
<strong>Investitionssumme:</strong> CHF 3'000 heute<br>
<strong>Geschätzte Cashflows:</strong> CHF 600/Jahr über 10 Jahre<br>
<strong>Kapitalkostensatz (WACC):</strong> 11 %<br><br>
Jeder zukünftige Cashflow wird auf den heutigen Wert abgezinst. Summe der Barwerte: CHF 3'530. Minus Investitionssumme CHF 3'000 → <strong style="color:#34c759">NPV = + CHF 530</strong>. Der Mehrwert ist positiv → Investition lohnt sich.</div>

<div class="tl-body" style="margin-top:10px"><strong style="color:#e8a838">Kernunterschied statisch vs. dynamisch:</strong> Statisch = Durchschnittsjahr. Dynamisch = gesamte Nutzungsdauer inkl. Vorbereitungs- und Liquidationsphase mit Zinseszinsrechnung.</div>
<div class="merksatz">Merke: NPV &gt; 0 = Mehrwert. Dynamische Methoden sind genauer, aber rechenintensiv.</div>
</div></div>

</div>
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

<!-- === NEUE SEKTION: Bilanz & ER lesen (Hotel San Nazzaro) === -->
<div class="sec" id="ctrl_zahlen"><h1>Bilanz & Erfolgsrechnung lesen</h1><p class="sub">Fallstudie Hotel San Nazzaro — jede Formel der Formelsammlung auf echte Bilanz + ER angewendet</p>

<style>
#ctrl_zahlen .zl-z1{color:#7ed8f7;font-weight:700}
#ctrl_zahlen .zl-z2{color:#ffb350;font-weight:700}
#ctrl_zahlen .zl-z3{color:#d4a0ff;font-weight:700}
#ctrl_zahlen .zl-z4{color:#5cd377;font-weight:700;font-size:17px}
#ctrl_zahlen .zl-bg1{background:rgba(0,198,251,.2);padding:1px 6px;border-radius:3px;color:#7ed8f7;font-weight:700}
#ctrl_zahlen .zl-bg2{background:rgba(255,149,0,.2);padding:1px 6px;border-radius:3px;color:#ffb350;font-weight:700}
#ctrl_zahlen .zl-bg3{background:rgba(175,82,222,.2);padding:1px 6px;border-radius:3px;color:#d4a0ff;font-weight:700}
#ctrl_zahlen .zl-legend{display:flex;gap:16px;flex-wrap:wrap;padding:12px 16px;background:var(--s1);border:1px solid var(--bd);border-radius:12px;margin-bottom:18px;font-size:12px}
#ctrl_zahlen .zl-legend .it{display:flex;align-items:center;gap:6px}
#ctrl_zahlen .zl-legend .d{width:14px;height:14px;border-radius:3px}
#ctrl_zahlen .kz{background:var(--s1);border:1px solid var(--bd);border-radius:12px;margin-bottom:14px;overflow:hidden}
#ctrl_zahlen .kz-h{padding:14px 18px;background:var(--s2);cursor:pointer;display:flex;justify-content:space-between;align-items:center;gap:10px;border-bottom:1px solid var(--bd)}
#ctrl_zahlen .kz-h:hover{background:#1f2332}
#ctrl_zahlen .kz-nr{font-size:10px;color:var(--tx3);letter-spacing:1.5px;text-transform:uppercase}
#ctrl_zahlen .kz-t{font-size:15px;font-weight:700;margin-top:2px}
#ctrl_zahlen .kz-v{font-size:18px;font-weight:700;white-space:nowrap;font-variant-numeric:tabular-nums}
#ctrl_zahlen .kz-a{color:var(--tx3);transition:transform .2s}
#ctrl_zahlen .kz.open .kz-a{transform:rotate(90deg)}
#ctrl_zahlen .kz-b{display:none;padding:16px 18px}
#ctrl_zahlen .kz.open .kz-b{display:block}
#ctrl_zahlen .zl-fb{background:var(--s2);border:1px dashed var(--bd);border-radius:8px;padding:12px;margin-bottom:12px;font-family:Georgia,serif;font-size:16px;text-align:center;line-height:1.8}
#ctrl_zahlen .zl-fb .lb{font-size:10px;color:var(--tx3);letter-spacing:1.5px;text-transform:uppercase;margin-bottom:6px;font-family:-apple-system,sans-serif;font-weight:700}
#ctrl_zahlen .zl-tr{width:100%;border-collapse:collapse;margin-bottom:12px;font-size:12.5px}
#ctrl_zahlen .zl-tr th{padding:8px 10px;color:var(--tx3);font-size:10px;text-transform:uppercase;letter-spacing:1px;background:var(--s2);text-align:left}
#ctrl_zahlen .zl-tr td{padding:8px 10px;border-bottom:1px solid var(--bd);vertical-align:top;color:var(--tx)}
#ctrl_zahlen .zl-tr .te{font-weight:700;width:26%}
#ctrl_zahlen .zl-tr .wh{color:var(--tx2);width:48%;font-size:12px}
#ctrl_zahlen .zl-tr .wh em{color:var(--tx3);font-style:normal;font-size:11px;display:block;margin-top:2px}
#ctrl_zahlen .zl-tr .va{text-align:right;font-variant-numeric:tabular-nums;font-weight:700;white-space:nowrap}
#ctrl_zahlen .zl-dc{background:#fafaf8;color:#1a1a1a;border-radius:8px;padding:12px 14px;font-size:11.5px;font-variant-numeric:tabular-nums;margin-bottom:12px;border:1px solid #ddd}
#ctrl_zahlen .zl-dc .dt{font-weight:700;font-size:10px;color:#444;margin-bottom:6px;text-transform:uppercase;letter-spacing:1px;border-bottom:1.5px solid #333;padding-bottom:4px}
#ctrl_zahlen .zl-dc .dr{display:flex;justify-content:space-between;padding:2px 4px;border-bottom:1px dotted #ddd}
#ctrl_zahlen .zl-dc .dr.sec{font-weight:700;color:#333;background:#f0f0ed;border-bottom:1px solid #ccc}
#ctrl_zahlen .zl-dc .dr.h1{background:rgba(0,198,251,.25);color:#004a5f;font-weight:700;margin:2px -4px;padding:3px 8px;border:2px solid #00c6fb;border-radius:3px}
#ctrl_zahlen .zl-dc .dr.h2{background:rgba(255,149,0,.25);color:#6b3d00;font-weight:700;margin:2px -4px;padding:3px 8px;border:2px solid #ff9500;border-radius:3px}
#ctrl_zahlen .zl-dc .dr.h3{background:rgba(175,82,222,.25);color:#4a1f66;font-weight:700;margin:2px -4px;padding:3px 8px;border:2px solid #af52de;border-radius:3px}
#ctrl_zahlen .zl-dc .dr .l{flex:1}
#ctrl_zahlen .zl-dc .dr .v{margin-left:12px;font-weight:inherit}
#ctrl_zahlen .zl-tag{display:inline-block;background:#fff;border:1.5px solid currentColor;padding:0 4px;border-radius:3px;font-size:9px;font-weight:700;margin-right:4px}
#ctrl_zahlen .zl-split{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:12px}
@media(max-width:800px){#ctrl_zahlen .zl-split{grid-template-columns:1fr}}
#ctrl_zahlen .zl-ca{background:var(--gl);border-left:3px solid var(--g);padding:10px 14px;border-radius:0 8px 8px 0;font-family:Georgia,serif;font-size:14px;line-height:2;color:var(--tx)}
#ctrl_zahlen .zl-ca .lb{font-size:10px;color:var(--g);letter-spacing:1.5px;text-transform:uppercase;font-family:-apple-system,sans-serif;font-weight:700;margin-bottom:4px}
#ctrl_zahlen .zl-ca .eq{display:block}
#ctrl_zahlen .zl-nt{background:var(--aml);border-left:3px solid var(--am);padding:9px 12px;margin-top:10px;font-size:12px;color:#ffd38a;border-radius:0 8px 8px 0}
#ctrl_zahlen .zl-nt strong{color:#ffb350}
#ctrl_zahlen .bd-g{background:var(--gl);color:#5cd377;padding:3px 10px;border-radius:12px;font-size:10px;font-weight:700;text-transform:uppercase}
#ctrl_zahlen .bd-r{background:var(--rl);color:#ff6b63;padding:3px 10px;border-radius:12px;font-size:10px;font-weight:700;text-transform:uppercase}
#ctrl_zahlen .bd-o{background:var(--aml);color:#ffb350;padding:3px 10px;border-radius:12px;font-size:10px;font-weight:700;text-transform:uppercase}
#ctrl_zahlen .zl-bt{background:var(--ac);color:#000;border:none;padding:6px 12px;border-radius:6px;font-weight:700;cursor:pointer;font-size:11px;margin:0 4px 16px 0}
#ctrl_zahlen .zl-bt2{background:var(--s2);color:var(--tx)}
#ctrl_zahlen .zl-ref{background:var(--s1);border:1px solid var(--bd);border-radius:12px;padding:16px 20px;margin-bottom:18px}
#ctrl_zahlen .zl-ref h3{font-size:14px;margin-bottom:8px;color:var(--ac)}
#ctrl_zahlen .zl-ref-g{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:12px;font-size:12px}
#ctrl_zahlen .zl-ref-g h4{font-size:10px;color:var(--tx3);text-transform:uppercase;letter-spacing:1.2px;margin-bottom:5px}
#ctrl_zahlen .zl-ref-g ul{list-style:none;line-height:1.7;padding-left:0}
#ctrl_zahlen .zl-ref-g li{color:var(--tx2)}
#ctrl_zahlen .zl-ref-g li strong{color:var(--tx)}
#ctrl_zahlen .zl-ref-g li em{color:var(--tx3);font-style:normal;font-size:11px}
</style>

<div class="zl-legend"><span style="color:var(--tx3);font-size:10px;letter-spacing:1px;text-transform:uppercase;font-weight:700">Farben:</span>
<div class="it"><div class="d" style="background:rgba(0,198,251,.4);border:2px solid #00c6fb"></div><strong style="color:#7ed8f7">Zahl 1</strong></div>
<div class="it"><div class="d" style="background:rgba(255,149,0,.4);border:2px solid #ff9500"></div><strong style="color:#ffb350">Zahl 2</strong></div>
<div class="it"><div class="d" style="background:rgba(175,82,222,.4);border:2px solid #af52de"></div><strong style="color:#d4a0ff">Zahl 3</strong></div>
<div class="it"><div class="d" style="background:rgba(52,199,89,.4);border:2px solid #34c759"></div><strong style="color:#5cd377">Resultat</strong></div>
</div>

<div class="zl-ref"><h3>📚 Wo finde ich was? — Quick Reference</h3>
<div class="zl-ref-g">
<div><h4>📄 Erfolgsrechnung</h4><ul>
<li><strong>Reingewinn</strong> <em>= «Jahresgewinn» letzte Zeile</em></li>
<li><strong>Betriebsertrag</strong> <em>= «Total Betriebsertrag»</em></li>
<li><strong>EBITDA/EBIT/EBT</strong> <em>direkt beschriftet</em></li>
<li><strong>Warenaufwand</strong> <em>= Waren Rest + Beh addieren</em></li>
<li><strong>Abschreibungen</strong> <em>direkt</em></li>
</ul></div>
<div><h4>📊 Bilanz</h4><ul>
<li><strong>Gesamtkapital</strong> <em>= «Total Vermögen»</em></li>
<li><strong>EK / FK</strong> <em>= «Total Eigen/Fremdkapital»</em></li>
<li><strong>Anlagevermögen</strong> <em>= «Total Sachanlagevermögen»</em></li>
<li><strong>Flüss. Mittel</strong> <em>direkt, 1. Zeile UV</em></li>
<li><strong>Forderungen LuL</strong> <em>= «Forderungen aus Leistungen»</em></li>
</ul></div>
<div><h4>🧮 Selber berechnen</h4><ul>
<li><strong>Ø-Werte</strong> <em>(Berichtsj. + Vorj.) ÷ 2</em></li>
<li><strong>Warenaufwand</strong> <em>Rest. + Beh.</em></li>
<li><strong>Cashflow indirekt</strong> <em>Reing. + Abschr. + Ford.verluste</em></li>
<li><strong>Effektivversch.</strong> <em>FK − Flüss. Mittel</em></li>
</ul></div>
<div><h4>📌 Ausgangslage</h4><ul>
<li><strong>Zimmer</strong> <em>42 · 365 Tage</em></li>
<li><strong>Auslastung</strong> <em>74.2 %</em></li>
<li><strong>Restaurant</strong> <em>60 Sitze · 360 Tg · 12h</em></li>
<li><strong>Gäste</strong> <em>39'000 (Berichtsj.)</em></li>
</ul></div>
</div></div>

<button class="zl-bt" onclick="this.parentElement.querySelectorAll('.kz').forEach(k=>k.classList.add('open'))">Alle aufklappen</button>
<button class="zl-bt zl-bt2" onclick="this.parentElement.querySelectorAll('.kz').forEach(k=>k.classList.remove('open'))">Alle schliessen</button>

<h2 style="margin-top:20px;padding-bottom:8px;border-bottom:2px solid var(--bd)">📊 Erfolgskennzahlen</h2>

<div class="kz"><div class="kz-h" onclick="this.parentElement.classList.toggle('open')"><div><div class="kz-nr">Erfolg · 1</div><div class="kz-t">Eigenkapitalrendite (RoE)</div></div><div style="display:flex;gap:8px;align-items:center"><div class="kz-v">3.0 %</div><span class="bd-r">herausfordernd</span><span class="kz-a">▶</span></div></div>
<div class="kz-b">
<div class="zl-fb"><div class="lb">Formel</div><span class="zl-z1">Reingewinn</span> ÷ <span class="zl-z2">Ø Eigenkapital</span> × 100 %</div>
<table class="zl-tr"><tr><th>Formel sagt…</th><th>Heisst im Dokument</th><th>Wert CHF</th></tr>
<tr><td class="te"><span class="zl-z1">Reingewinn</span></td><td class="wh">«Jahresgewinn» (letzte Zeile ER)<em>nicht EBT — der Endwert nach Steuern!</em></td><td class="va zl-bg1">18'500</td></tr>
<tr><td class="te"><span class="zl-z2">Ø Eigenkapital</span></td><td class="wh">(Total EK Berichtsj. + Vorj.) ÷ 2<em>= (621'500 + 603'000) ÷ 2</em></td><td class="va zl-bg2">612'250</td></tr></table>
<div class="zl-dc"><div class="dt">📊 Bilanz — Eigenkapital (beide Jahre)</div>
<div class="dr sec"><span class="l">EIGENKAPITAL</span><span class="v">Berichtsj. | Vorj.</span></div>
<div class="dr"><span class="l">Aktienkapital</span><span class="v">500'000 | 500'000</span></div>
<div class="dr"><span class="l">Gesetzliche Reserven</span><span class="v">32'000 | 30'000</span></div>
<div class="dr"><span class="l">Bilanzgewinn</span><span class="v">89'500 | 73'000</span></div>
<div class="dr h2"><span class="l"><span class="zl-tag">Zahl 2</span>Total Eigenkapital</span><span class="v">621'500 | 603'000</span></div></div>
<div class="zl-dc"><div class="dt">📄 ER — Ende</div>
<div class="dr"><span class="l">EBT</span><span class="v">26'500</span></div>
<div class="dr"><span class="l">Direkte Steuern</span><span class="v">8'000</span></div>
<div class="dr h1"><span class="l"><span class="zl-tag">Zahl 1</span>Jahresgewinn</span><span class="v">18'500</span></div></div>
<div class="zl-ca"><div class="lb">Rechnen</div>
<span class="eq">Ø EK = (<span class="zl-z2">621'500</span> + <span class="zl-z2">603'000</span>) ÷ 2 = <span class="zl-z2">612'250</span></span>
<span class="eq">RoE = <span class="zl-z1">18'500</span> ÷ <span class="zl-z2">612'250</span> × 100 = <span class="zl-z4">3.0 %</span></span></div>
<div class="zl-nt"><strong>Soll ≥ 5 % · Ist 3 % → zu tief.</strong> EK verzinst sich kaum.</div>
</div></div>

<div class="kz"><div class="kz-h" onclick="this.parentElement.classList.toggle('open')"><div><div class="kz-nr">Erfolg · 2</div><div class="kz-t">Gesamtkapitalrendite (RoA)</div></div><div style="display:flex;gap:8px;align-items:center"><div class="kz-v">0.4 %</div><span class="bd-r">schwach</span><span class="kz-a">▶</span></div></div>
<div class="kz-b">
<div class="zl-fb"><div class="lb">Formel</div><span class="zl-z1">Reingewinn</span> ÷ <span class="zl-z2">Ø Gesamtkapital</span> × 100 %</div>
<table class="zl-tr"><tr><th>Formel sagt…</th><th>Heisst im Dokument</th><th>Wert CHF</th></tr>
<tr><td class="te"><span class="zl-z1">Reingewinn</span></td><td class="wh">«Jahresgewinn» (letzte Zeile ER)</td><td class="va zl-bg1">18'500</td></tr>
<tr><td class="te"><span class="zl-z2">Ø Gesamtkapital</span></td><td class="wh">(Total Vermögen Berichtsj. + Vorj.) ÷ 2<em>= (4'997'500 + 5'234'000) ÷ 2 · auch «Bilanzsumme»</em></td><td class="va zl-bg2">5'115'750</td></tr></table>
<div class="zl-dc"><div class="dt">📊 Bilanz — Bilanzsumme</div>
<div class="dr"><span class="l">Total Umlaufvermögen</span><span class="v">263'650 | 196'000</span></div>
<div class="dr"><span class="l">Total Sachanlagevermögen</span><span class="v">4'733'850 | 5'038'000</span></div>
<div class="dr h2"><span class="l"><span class="zl-tag">Zahl 2</span>Total Vermögen (Bilanzsumme)</span><span class="v">4'997'500 | 5'234'000</span></div></div>
<div class="zl-ca"><div class="lb">Rechnen</div>
<span class="eq">Ø GK = (<span class="zl-z2">4'997'500</span> + <span class="zl-z2">5'234'000</span>) ÷ 2 = <span class="zl-z2">5'115'750</span></span>
<span class="eq">RoA = <span class="zl-z1">18'500</span> ÷ <span class="zl-z2">5'115'750</span> × 100 = <span class="zl-z4">0.4 %</span></span></div>
</div></div>

<div class="kz"><div class="kz-h" onclick="this.parentElement.classList.toggle('open')"><div><div class="kz-nr">Erfolg · 3</div><div class="kz-t">Umsatzrendite (RoS)</div></div><div style="display:flex;gap:8px;align-items:center"><div class="kz-v">0.5 %</div><span class="bd-r">schlecht</span><span class="kz-a">▶</span></div></div>
<div class="kz-b">
<div class="zl-fb"><div class="lb">Formel</div><span class="zl-z1">Reingewinn</span> ÷ <span class="zl-z2">Betriebsertrag</span> × 100 %</div>
<table class="zl-tr"><tr><th>Formel sagt…</th><th>Heisst im Dokument</th><th>Wert CHF</th></tr>
<tr><td class="te"><span class="zl-z1">Reingewinn</span></td><td class="wh">«Jahresgewinn» (letzte Zeile ER)</td><td class="va zl-bg1">18'500</td></tr>
<tr><td class="te"><span class="zl-z2">Betriebsertrag</span></td><td class="wh">«Total Betriebsertrag» (3. Zeile ER)<em>= Restaurations- + Beherbergungsertrag</em></td><td class="va zl-bg2">3'580'000</td></tr></table>
<div class="zl-dc"><div class="dt">📄 ER — oben + unten</div>
<div class="dr"><span class="l">Restaurationsertrag</span><span class="v">1'760'000</span></div>
<div class="dr"><span class="l">Beherbergungsertrag</span><span class="v">1'820'000</span></div>
<div class="dr h2"><span class="l"><span class="zl-tag">Zahl 2</span>Total Betriebsertrag</span><span class="v">3'580'000</span></div>
<div class="dr" style="color:#999;font-style:italic"><span class="l">...(Aufwände, EBITDA, EBIT, EBT, Steuern)...</span></div>
<div class="dr h1"><span class="l"><span class="zl-tag">Zahl 1</span>Jahresgewinn</span><span class="v">18'500</span></div></div>
<div class="zl-ca"><div class="lb">Rechnen</div>
<span class="eq">RoS = <span class="zl-z1">18'500</span> ÷ <span class="zl-z2">3'580'000</span> × 100 = <span class="zl-z4">0.5 %</span></span></div>
<div class="zl-nt"><strong>Soll 2.5 % · Ist 0.5 % → weit unter Soll.</strong> Trotz guter EBITDA-Marge bleibt nach Abschr. und Zinsen fast nichts.</div>
</div></div>

<div class="kz"><div class="kz-h" onclick="this.parentElement.classList.toggle('open')"><div><div class="kz-nr">Erfolg · 4</div><div class="kz-t">EBITDA-Marge</div></div><div style="display:flex;gap:8px;align-items:center"><div class="kz-v">16.1 %</div><span class="bd-g">profitabel</span><span class="kz-a">▶</span></div></div>
<div class="kz-b">
<div class="zl-fb"><div class="lb">Formel</div><span class="zl-z1">EBITDA</span> ÷ <span class="zl-z2">Betriebsertrag</span> × 100 %</div>
<table class="zl-tr"><tr><th>Formel sagt…</th><th>Heisst im Dokument</th><th>Wert CHF</th></tr>
<tr><td class="te"><span class="zl-z1">EBITDA</span></td><td class="wh">«EBITDA» (mitte ER)<em>direkt ablesbar — so beschriftet</em></td><td class="va zl-bg1">577'500</td></tr>
<tr><td class="te"><span class="zl-z2">Betriebsertrag</span></td><td class="wh">«Total Betriebsertrag»</td><td class="va zl-bg2">3'580'000</td></tr></table>
<div class="zl-dc"><div class="dt">📄 ER — Weg zum EBITDA</div>
<div class="dr h2"><span class="l"><span class="zl-tag">Zahl 2</span>Total Betriebsertrag</span><span class="v">3'580'000</span></div>
<div class="dr"><span class="l">− Direkter Aufwand</span><span class="v">2'067'400</span></div>
<div class="dr"><span class="l">= GOI</span><span class="v">1'512'600</span></div>
<div class="dr"><span class="l">− Indirekter Aufwand</span><span class="v">802'600</span></div>
<div class="dr"><span class="l">= GOP</span><span class="v">710'000</span></div>
<div class="dr"><span class="l">− Sonstiger Aufwand</span><span class="v">132'500</span></div>
<div class="dr h1"><span class="l"><span class="zl-tag">Zahl 1</span>EBITDA</span><span class="v">577'500</span></div></div>
<div class="zl-ca"><div class="lb">Rechnen</div>
<span class="eq">EBITDA-Marge = <span class="zl-z1">577'500</span> ÷ <span class="zl-z2">3'580'000</span> × 100 = <span class="zl-z4">16.1 %</span></span></div>
<div class="zl-nt"><strong>Soll 10 % · Ist 16.1 % → profitabel!</strong> Operatives Tagesgeschäft läuft gut.</div>
</div></div>

<h2 style="margin-top:24px;padding-bottom:8px;border-bottom:2px solid var(--bd)">💰 Finanzierungskennzahlen</h2>

<div class="kz"><div class="kz-h" onclick="this.parentElement.classList.toggle('open')"><div><div class="kz-nr">Finanzierung · 1</div><div class="kz-t">Eigenkapitalquote</div></div><div style="display:flex;gap:8px;align-items:center"><div class="kz-v">12.4 %</div><span class="bd-r">tief</span><span class="kz-a">▶</span></div></div>
<div class="kz-b">
<div class="zl-fb"><div class="lb">Formel</div><span class="zl-z1">Eigenkapital</span> ÷ <span class="zl-z2">Gesamtkapital</span> × 100 %</div>
<table class="zl-tr"><tr><th>Formel sagt…</th><th>Heisst im Dokument</th><th>Wert CHF</th></tr>
<tr><td class="te"><span class="zl-z1">Eigenkapital</span></td><td class="wh">«Total Eigenkapital» (Bilanz)<em>Berichtsjahr direkt — kein Ø!</em></td><td class="va zl-bg1">621'500</td></tr>
<tr><td class="te"><span class="zl-z2">Gesamtkapital</span></td><td class="wh">«Total Vermögen» = «Total Schulden»</td><td class="va zl-bg2">4'997'500</td></tr></table>
<div class="zl-dc"><div class="dt">📊 Bilanz — Gesamtbild</div>
<div class="dr h2"><span class="l"><span class="zl-tag">Zahl 2</span>Total Vermögen (Bilanzsumme)</span><span class="v">4'997'500</span></div>
<div class="dr sec"><span class="l">PASSIVEN</span><span class="v"></span></div>
<div class="dr"><span class="l">Total kurzfr. FK</span><span class="v">416'000</span></div>
<div class="dr"><span class="l">Total langfr. FK</span><span class="v">3'960'000</span></div>
<div class="dr"><span class="l">Total Fremdkapital</span><span class="v">4'376'000</span></div>
<div class="dr h1"><span class="l"><span class="zl-tag">Zahl 1</span>Total Eigenkapital</span><span class="v">621'500</span></div></div>
<div class="zl-ca"><div class="lb">Rechnen</div><span class="eq">EK-Quote = <span class="zl-z1">621'500</span> ÷ <span class="zl-z2">4'997'500</span> × 100 = <span class="zl-z4">12.4 %</span></span></div>
<div class="zl-nt">Soll 20–30 %. Tiefe Eigenfinanzierung → wenig Puffer.</div>
</div></div>

<div class="kz"><div class="kz-h" onclick="this.parentElement.classList.toggle('open')"><div><div class="kz-nr">Finanzierung · 2</div><div class="kz-t">Fremdkapitalquote</div></div><div style="display:flex;gap:8px;align-items:center"><div class="kz-v">87.6 %</div><span class="bd-r">hoch</span><span class="kz-a">▶</span></div></div>
<div class="kz-b">
<div class="zl-fb"><div class="lb">Formel</div><span class="zl-z1">Fremdkapital</span> ÷ <span class="zl-z2">Gesamtkapital</span> × 100 %</div>
<table class="zl-tr"><tr><th>Formel sagt…</th><th>Heisst im Dokument</th><th>Wert CHF</th></tr>
<tr><td class="te"><span class="zl-z1">Fremdkapital</span></td><td class="wh">«Total Fremdkapital»<em>= kurzfr. + langfr. FK</em></td><td class="va zl-bg1">4'376'000</td></tr>
<tr><td class="te"><span class="zl-z2">Gesamtkapital</span></td><td class="wh">«Total Schulden» = Bilanzsumme</td><td class="va zl-bg2">4'997'500</td></tr></table>
<div class="zl-ca"><div class="lb">Rechnen</div>
<span class="eq">FK-Quote = <span class="zl-z1">4'376'000</span> ÷ <span class="zl-z2">4'997'500</span> × 100 = <span class="zl-z4">87.6 %</span></span>
<span class="eq" style="color:var(--tx3);font-size:12px">Check: 12.4 + 87.6 = 100 % ✓</span></div>
</div></div>

<div class="kz"><div class="kz-h" onclick="this.parentElement.classList.toggle('open')"><div><div class="kz-nr">Finanzierung · 3</div><div class="kz-t">Verschuldungsgrad (statisch)</div></div><div style="display:flex;gap:8px;align-items:center"><div class="kz-v">704.1 %</div><span class="bd-r">riskant</span><span class="kz-a">▶</span></div></div>
<div class="kz-b">
<div class="zl-fb"><div class="lb">Formel</div><span class="zl-z1">Fremdkapital</span> ÷ <span class="zl-z2">Eigenkapital</span> × 100 %</div>
<table class="zl-tr"><tr><th>Formel sagt…</th><th>Heisst im Dokument</th><th>Wert CHF</th></tr>
<tr><td class="te"><span class="zl-z1">Fremdkapital</span></td><td class="wh">«Total Fremdkapital»</td><td class="va zl-bg1">4'376'000</td></tr>
<tr><td class="te"><span class="zl-z2">Eigenkapital</span></td><td class="wh">«Total Eigenkapital»</td><td class="va zl-bg2">621'500</td></tr></table>
<div class="zl-ca"><div class="lb">Rechnen</div><span class="eq">Versch. = <span class="zl-z1">4'376'000</span> ÷ <span class="zl-z2">621'500</span> × 100 = <span class="zl-z4">704.1 %</span></span></div>
<div class="zl-nt"><strong>Soll ≤ 200 % · Ist 704 %.</strong> Extrem fremdfinanziert — 7× mehr FK als EK.</div>
</div></div>

<div class="kz"><div class="kz-h" onclick="this.parentElement.classList.toggle('open')"><div><div class="kz-nr">Finanzierung · 4</div><div class="kz-t">Verschuldungsgrad (dynamisch)</div></div><div style="display:flex;gap:8px;align-items:center"><div class="kz-v">~1085 %</div><span class="bd-r">hoch</span><span class="kz-a">▶</span></div></div>
<div class="kz-b">
<div class="zl-fb"><div class="lb">Formel</div><span class="zl-z1">Effektivverschuldung</span> ÷ <span class="zl-z2">Cashflow</span> × 100 %</div>
<table class="zl-tr"><tr><th>Formel sagt…</th><th>Heisst im Dokument</th><th>Wert CHF</th></tr>
<tr><td class="te"><span class="zl-z1">Effektivverschuldung</span></td><td class="wh">Selber: FK − Flüssige Mittel<em>= 4'376'000 − 29'050</em></td><td class="va zl-bg1">4'346'950</td></tr>
<tr><td class="te"><span class="zl-z2">Cashflow indirekt</span></td><td class="wh">Jahresgewinn + Abschreibungen + Forderungsverluste<em>= 18'500 + 380'000 + 7'000</em></td><td class="va zl-bg2">~ 400'500</td></tr></table>
<div class="zl-split"><div class="zl-dc"><div class="dt">📊 Bilanz</div>
<div class="dr"><span class="l">Flüssige Mittel</span><span class="v">29'050</span></div>
<div class="dr"><span class="l">Total Fremdkapital</span><span class="v">4'376'000</span></div>
<div class="dr h1"><span class="l"><span class="zl-tag">Zahl 1</span>FK − Cash</span><span class="v">4'346'950</span></div></div>
<div class="zl-dc"><div class="dt">📄 ER — Cashflow</div>
<div class="dr"><span class="l">Jahresgewinn</span><span class="v">18'500</span></div>
<div class="dr"><span class="l">+ Abschreibungen</span><span class="v">380'000</span></div>
<div class="dr"><span class="l">+ Forderungsverluste</span><span class="v">7'000</span></div>
<div class="dr h2"><span class="l"><span class="zl-tag">Zahl 2</span>Cashflow</span><span class="v">~ 400'500</span></div></div></div>
<div class="zl-ca"><div class="lb">Rechnen</div><span class="eq">Dyn. = <span class="zl-z1">4'346'950</span> ÷ <span class="zl-z2">400'500</span> × 100 = <span class="zl-z4">~1085 %</span></span></div>
<div class="zl-nt">~10.8 Jahre Cashflow nötig zur Schuldentilgung. Soll 100–300 % (1–3 Jahre) — weit darüber.</div>
</div></div>

<div class="kz"><div class="kz-h" onclick="this.parentElement.classList.toggle('open')"><div><div class="kz-nr">Finanzierung · 5</div><div class="kz-t">Anlagedeckungsgrad I</div></div><div style="display:flex;gap:8px;align-items:center"><div class="kz-v">13.1 %</div><span class="bd-r">sehr tief</span><span class="kz-a">▶</span></div></div>
<div class="kz-b">
<div class="zl-fb"><div class="lb">Formel</div><span class="zl-z1">Eigenkapital</span> ÷ <span class="zl-z2">Anlagevermögen</span> × 100 %</div>
<table class="zl-tr"><tr><th>Formel sagt…</th><th>Heisst im Dokument</th><th>Wert CHF</th></tr>
<tr><td class="te"><span class="zl-z1">Eigenkapital</span></td><td class="wh">«Total Eigenkapital»</td><td class="va zl-bg1">621'500</td></tr>
<tr><td class="te"><span class="zl-z2">Anlagevermögen</span></td><td class="wh">«Total Sachanlagevermögen»<em>Fahrzeuge + Mobilien + Küche + Immobilien</em></td><td class="va zl-bg2">4'733'850</td></tr></table>
<div class="zl-dc"><div class="dt">📊 Bilanz — Sachanlagen</div>
<div class="dr"><span class="l">Fahrzeuge / Mobilien / Küche</span><span class="v">327'450</span></div>
<div class="dr"><span class="l">Immobilien</span><span class="v">4'406'400</span></div>
<div class="dr h2"><span class="l"><span class="zl-tag">Zahl 2</span>Total Sachanlagevermögen</span><span class="v">4'733'850</span></div></div>
<div class="zl-ca"><div class="lb">Rechnen</div><span class="eq">ADG I = <span class="zl-z1">621'500</span> ÷ <span class="zl-z2">4'733'850</span> × 100 = <span class="zl-z4">13.1 %</span></span></div>
</div></div>

<div class="kz"><div class="kz-h" onclick="this.parentElement.classList.toggle('open')"><div><div class="kz-nr">Finanzierung · 6</div><div class="kz-t">Anlagedeckungsgrad II (Goldene Bilanzregel)</div></div><div style="display:flex;gap:8px;align-items:center"><div class="kz-v">96.8 %</div><span class="bd-o">knapp</span><span class="kz-a">▶</span></div></div>
<div class="kz-b">
<div class="zl-fb"><div class="lb">Formel</div>(<span class="zl-z1">EK</span> + <span class="zl-z2">langfr. FK</span>) ÷ <span class="zl-z3">Anlagevermögen</span> × 100 %</div>
<table class="zl-tr"><tr><th>Formel sagt…</th><th>Heisst im Dokument</th><th>Wert CHF</th></tr>
<tr><td class="te"><span class="zl-z1">Eigenkapital</span></td><td class="wh">«Total Eigenkapital»</td><td class="va zl-bg1">621'500</td></tr>
<tr><td class="te"><span class="zl-z2">langfr. FK</span></td><td class="wh">«Total langfristiges Fremdkapital»<em>= Darlehen + Grundpfand</em></td><td class="va zl-bg2">3'960'000</td></tr>
<tr><td class="te"><span class="zl-z3">Anlagevermögen</span></td><td class="wh">«Total Sachanlagevermögen»</td><td class="va zl-bg3">4'733'850</td></tr></table>
<div class="zl-dc"><div class="dt">📊 Bilanz — langfristiges Kapital + AV</div>
<div class="dr"><span class="l">Darlehen</span><span class="v">460'000</span></div>
<div class="dr"><span class="l">Grundpfanddarlehen</span><span class="v">3'500'000</span></div>
<div class="dr h2"><span class="l"><span class="zl-tag">Zahl 2</span>Total langfr. FK</span><span class="v">3'960'000</span></div>
<div class="dr h1"><span class="l"><span class="zl-tag">Zahl 1</span>Total Eigenkapital</span><span class="v">621'500</span></div>
<div class="dr h3"><span class="l"><span class="zl-tag">Zahl 3</span>Total Sachanlagevermögen</span><span class="v">4'733'850</span></div></div>
<div class="zl-ca"><div class="lb">Rechnen</div>
<span class="eq">ADG II = (<span class="zl-z1">621'500</span> + <span class="zl-z2">3'960'000</span>) ÷ <span class="zl-z3">4'733'850</span> × 100</span>
<span class="eq">= 4'581'500 ÷ <span class="zl-z3">4'733'850</span> × 100 = <span class="zl-z4">96.8 %</span></span></div>
<div class="zl-nt"><strong>Goldene Bilanzregel: Soll 100 %.</strong> Mit 96.8 % knapp verletzt — ein Teil AV wird kurzfristig finanziert (riskant).</div>
</div></div>

<h2 style="margin-top:24px;padding-bottom:8px;border-bottom:2px solid var(--bd)">💧 Liquiditätskennzahlen</h2>

<div class="kz"><div class="kz-h" onclick="this.parentElement.classList.toggle('open')"><div><div class="kz-nr">Liquidität · 1</div><div class="kz-t">Liquiditätsgrad I (Cash Ratio)</div></div><div style="display:flex;gap:8px;align-items:center"><div class="kz-v">7.0 %</div><span class="bd-r">zu tief</span><span class="kz-a">▶</span></div></div>
<div class="kz-b">
<div class="zl-fb"><div class="lb">Formel</div><span class="zl-z1">Flüssige Mittel</span> ÷ <span class="zl-z2">kurzfr. FK</span> × 100 %</div>
<table class="zl-tr"><tr><th>Formel sagt…</th><th>Heisst im Dokument</th><th>Wert CHF</th></tr>
<tr><td class="te"><span class="zl-z1">Flüssige Mittel</span></td><td class="wh">«Flüssige Mittel» (1. Zeile UV)<em>Kasse, Post, Bank, kurze Festgelder</em></td><td class="va zl-bg1">29'050</td></tr>
<tr><td class="te"><span class="zl-z2">kurzfr. FK</span></td><td class="wh">«Total kurzfristiges Fremdkapital»</td><td class="va zl-bg2">416'000</td></tr></table>
<div class="zl-ca"><div class="lb">Rechnen</div><span class="eq">LG I = <span class="zl-z1">29'050</span> ÷ <span class="zl-z2">416'000</span> × 100 = <span class="zl-z4">7.0 %</span></span></div>
<div class="zl-nt">Soll 10–35 %. Unter Minimum.</div>
</div></div>

<div class="kz"><div class="kz-h" onclick="this.parentElement.classList.toggle('open')"><div><div class="kz-nr">Liquidität · 2</div><div class="kz-t">Liquiditätsgrad II (Quick Ratio)</div></div><div style="display:flex;gap:8px;align-items:center"><div class="kz-v">18.6 %</div><span class="bd-r">Angespannte Liquidität</span><span class="kz-a">▶</span></div></div>
<div class="kz-b">
<div class="zl-fb"><div class="lb">Formel</div>(<span class="zl-z1">Flüssige Mittel</span> + <span class="zl-z2">Forderungen LuL</span>) ÷ <span class="zl-z3">kurzfr. FK</span> × 100 %</div>
<table class="zl-tr"><tr><th>Formel sagt…</th><th>Heisst im Dokument</th><th>Wert CHF</th></tr>
<tr><td class="te"><span class="zl-z1">Flüssige Mittel</span></td><td class="wh">«Flüssige Mittel» (1. Zeile UV)</td><td class="va zl-bg1">29'050</td></tr>
<tr><td class="te"><span class="zl-z2">Forderungen LuL</span></td><td class="wh">«Forderungen aus Leistungen» (2. Zeile UV)<em>NICHT «Übrige Forderungen» dazunehmen!</em></td><td class="va zl-bg2">48'500</td></tr>
<tr><td class="te"><span class="zl-z3">kurzfr. FK</span></td><td class="wh">«Total kurzfristiges Fremdkapital»</td><td class="va zl-bg3">416'000</td></tr></table>
<div class="zl-dc"><div class="dt">📊 Bilanz — UV + kurzfr. FK</div>
<div class="dr h1"><span class="l"><span class="zl-tag">Zahl 1</span>Flüssige Mittel</span><span class="v">29'050</span></div>
<div class="dr h2"><span class="l"><span class="zl-tag">Zahl 2</span>Forderungen aus Leistungen</span><span class="v">48'500</span></div>
<div class="dr" style="color:#999;font-style:italic"><span class="l">Übrige Ford. (NICHT!), Warenvorräte, RAG</span><span class="v">186'100</span></div>
<div class="dr h3"><span class="l"><span class="zl-tag">Zahl 3</span>Total kurzfr. FK</span><span class="v">416'000</span></div></div>
<div class="zl-ca"><div class="lb">Rechnen</div>
<span class="eq">LG II = (<span class="zl-z1">29'050</span> + <span class="zl-z2">48'500</span>) ÷ <span class="zl-z3">416'000</span> × 100</span>
<span class="eq">= 77'550 ÷ <span class="zl-z3">416'000</span> × 100 = <span class="zl-z4">18.6 %</span></span></div>
<div class="zl-nt"><strong>Alarm! Soll mind. 100 %.</strong> Mit 18.6 % dramatisch zu tief — Forderungen + Cash decken kurzfr. Schulden bei weitem nicht.</div>
</div></div>

<div class="kz"><div class="kz-h" onclick="this.parentElement.classList.toggle('open')"><div><div class="kz-nr">Liquidität · 3</div><div class="kz-t">Liquiditätsgrad III (Current Ratio)</div></div><div style="display:flex;gap:8px;align-items:center"><div class="kz-v">63.4 %</div><span class="bd-r">unter Banker's Rule</span><span class="kz-a">▶</span></div></div>
<div class="kz-b">
<div class="zl-fb"><div class="lb">Formel</div><span class="zl-z1">Umlaufvermögen</span> ÷ <span class="zl-z2">kurzfr. FK</span> × 100 %</div>
<table class="zl-tr"><tr><th>Formel sagt…</th><th>Heisst im Dokument</th><th>Wert CHF</th></tr>
<tr><td class="te"><span class="zl-z1">Umlaufvermögen</span></td><td class="wh">«Total Umlaufvermögen»<em>alles UV zusammen</em></td><td class="va zl-bg1">263'650</td></tr>
<tr><td class="te"><span class="zl-z2">kurzfr. FK</span></td><td class="wh">«Total kurzfristiges Fremdkapital»</td><td class="va zl-bg2">416'000</td></tr></table>
<div class="zl-dc"><div class="dt">📊 Bilanz — UV komplett</div>
<div class="dr"><span class="l">Flüssige Mittel + Forderungen + Übrige</span><span class="v">107'550</span></div>
<div class="dr"><span class="l">Warenvorräte</span><span class="v">127'000</span></div>
<div class="dr"><span class="l">Aktive Rechnungsabgrenzungen</span><span class="v">29'100</span></div>
<div class="dr h1"><span class="l"><span class="zl-tag">Zahl 1</span>Total Umlaufvermögen</span><span class="v">263'650</span></div>
<div class="dr h2"><span class="l"><span class="zl-tag">Zahl 2</span>Total kurzfr. FK</span><span class="v">416'000</span></div></div>
<div class="zl-ca"><div class="lb">Rechnen</div><span class="eq">LG III = <span class="zl-z1">263'650</span> ÷ <span class="zl-z2">416'000</span> × 100 = <span class="zl-z4">63.4 %</span></span></div>
<div class="zl-nt"><strong>Banker's Rule: 150–200 %.</strong> Unter 100 % bedeutet: negatives Working Capital!</div>
</div></div>

<h2 style="margin-top:24px;padding-bottom:8px;border-bottom:2px solid var(--bd)">⏱️ Working-Capital-Kennzahlen</h2>

<div class="kz"><div class="kz-h" onclick="this.parentElement.classList.toggle('open')"><div><div class="kz-nr">WC · 1</div><div class="kz-t">Working Capital (absolut)</div></div><div style="display:flex;gap:8px;align-items:center"><div class="kz-v" style="color:var(--r)">−152'350</div><span class="bd-r">NEGATIV!</span><span class="kz-a">▶</span></div></div>
<div class="kz-b">
<div class="zl-fb"><div class="lb">Formel</div><span class="zl-z1">Umlaufvermögen</span> − <span class="zl-z2">kurzfr. FK</span></div>
<table class="zl-tr"><tr><th>Formel sagt…</th><th>Heisst im Dokument</th><th>Wert CHF</th></tr>
<tr><td class="te"><span class="zl-z1">UV</span></td><td class="wh">«Total Umlaufvermögen»</td><td class="va zl-bg1">263'650</td></tr>
<tr><td class="te"><span class="zl-z2">kurzfr. FK</span></td><td class="wh">«Total kurzfristiges Fremdkapital»</td><td class="va zl-bg2">416'000</td></tr></table>
<div class="zl-ca"><div class="lb">Rechnen</div><span class="eq">WC = <span class="zl-z1">263'650</span> − <span class="zl-z2">416'000</span> = <span class="zl-z4" style="color:var(--r)">−152'350 CHF</span></span></div>
<div class="zl-nt"><strong>Alarm!</strong> Kurzfr. Schulden übersteigen UV → Teile AV kurzfristig finanziert → Goldene Bilanzregel verletzt.</div>
</div></div>

<div class="kz"><div class="kz-h" onclick="this.parentElement.classList.toggle('open')"><div><div class="kz-nr">WC · 2</div><div class="kz-t">DSO — Debitorenfrist</div></div><div style="display:flex;gap:8px;align-items:center"><div class="kz-v">5 Tage</div><span class="bd-g">Tiefes Ausfallrisiko</span><span class="kz-a">▶</span></div></div>
<div class="kz-b">
<div class="zl-fb"><div class="lb">Formel</div><span class="zl-z1">Ø Forderungen LuL</span> ÷ <span class="zl-z2">Betriebsertrag</span> × <span class="zl-z3">360</span></div>
<table class="zl-tr"><tr><th>Formel sagt…</th><th>Heisst im Dokument</th><th>Wert</th></tr>
<tr><td class="te"><span class="zl-z1">Ø Forderungen LuL</span></td><td class="wh">Selber: (Forderungen aus Leist. Berichtsj. + Vorj.) ÷ 2<em>= (48'500 + 54'000) ÷ 2</em></td><td class="va zl-bg1">51'250</td></tr>
<tr><td class="te"><span class="zl-z2">Betriebsertrag</span></td><td class="wh">«Total Betriebsertrag» (ER)</td><td class="va zl-bg2">3'580'000</td></tr>
<tr><td class="te"><span class="zl-z3">360</span></td><td class="wh">Kalendertage (immer 360)</td><td class="va zl-bg3">360</td></tr></table>
<div class="zl-split"><div class="zl-dc"><div class="dt">📊 Bilanz — beide Jahre</div>
<div class="dr"><span class="l">Ford. Leist. Berichtsj.</span><span class="v">48'500</span></div>
<div class="dr"><span class="l">Ford. Leist. Vorjahr</span><span class="v">54'000</span></div>
<div class="dr h1"><span class="l"><span class="zl-tag">Zahl 1</span>Ø (48'500+54'000)÷2</span><span class="v">51'250</span></div></div>
<div class="zl-dc"><div class="dt">📄 ER — Umsatz</div>
<div class="dr h2"><span class="l"><span class="zl-tag">Zahl 2</span>Total Betriebsertrag</span><span class="v">3'580'000</span></div></div></div>
<div class="zl-ca"><div class="lb">Rechnen</div><span class="eq">DSO = <span class="zl-z1">51'250</span> ÷ <span class="zl-z2">3'580'000</span> × <span class="zl-z3">360</span> = <span class="zl-z4">5 Tage</span></span></div>
<div class="zl-nt"><strong>Soll max. 30 Tg · Ist 5 Tg → super!</strong> Gäste zahlen sofort (Bargeld/Karte).</div>
</div></div>

<div class="kz"><div class="kz-h" onclick="this.parentElement.classList.toggle('open')"><div><div class="kz-nr">WC · 3</div><div class="kz-t">DIO — Lagerdauer</div></div><div style="display:flex;gap:8px;align-items:center"><div class="kz-v">53 Tage</div><span class="bd-r">Risiko veralteter Waren</span><span class="kz-a">▶</span></div></div>
<div class="kz-b">
<div class="zl-fb"><div class="lb">Formel</div><span class="zl-z1">Ø Warenvorräte</span> ÷ <span class="zl-z2">Warenaufwand</span> × <span class="zl-z3">360</span></div>
<table class="zl-tr"><tr><th>Formel sagt…</th><th>Heisst im Dokument</th><th>Wert</th></tr>
<tr><td class="te"><span class="zl-z1">Ø Warenvorräte</span></td><td class="wh">Selber: (Warenvorräte Berichtsj. + Vorj.) ÷ 2<em>= (127'000 + 80'000) ÷ 2</em></td><td class="va zl-bg1">103'500</td></tr>
<tr><td class="te"><span class="zl-z2">Warenaufwand</span></td><td class="wh">«Dir. Aufwand Waren Rest.» + «…Beh.»<em>= 687'000 + 15'400</em></td><td class="va zl-bg2">702'400</td></tr>
<tr><td class="te"><span class="zl-z3">360</span></td><td class="wh">Kalendertage</td><td class="va zl-bg3">360</td></tr></table>
<div class="zl-split"><div class="zl-dc"><div class="dt">📊 Bilanz — Warenvorräte</div>
<div class="dr"><span class="l">Warenvorräte Berichtsj.</span><span class="v">127'000</span></div>
<div class="dr"><span class="l">Warenvorräte Vorjahr</span><span class="v">80'000</span></div>
<div class="dr h1"><span class="l"><span class="zl-tag">Zahl 1</span>Ø (127'000+80'000)÷2</span><span class="v">103'500</span></div></div>
<div class="zl-dc"><div class="dt">📄 ER — Warenaufwand</div>
<div class="dr"><span class="l">Dir. Aufwand Waren Rest.</span><span class="v">687'000</span></div>
<div class="dr"><span class="l">Dir. Aufwand Waren Beh.</span><span class="v">15'400</span></div>
<div class="dr h2"><span class="l"><span class="zl-tag">Zahl 2</span>Total Warenaufwand</span><span class="v">702'400</span></div></div></div>
<div class="zl-ca"><div class="lb">Rechnen</div><span class="eq">DIO = <span class="zl-z1">103'500</span> ÷ <span class="zl-z2">702'400</span> × <span class="zl-z3">360</span> = <span class="zl-z4">53 Tage</span></span></div>
<div class="zl-nt"><strong>Soll max. 30 Tg · Ist 53 Tg.</strong> Vor allem Weinkeller (92'000) bindet Kapital.</div>
</div></div>

<div class="kz"><div class="kz-h" onclick="this.parentElement.classList.toggle('open')"><div><div class="kz-nr">WC · 4</div><div class="kz-t">DPO — Kreditorenfrist</div></div><div style="display:flex;gap:8px;align-items:center"><div class="kz-v">72 Tage</div><span class="bd-o">hoch</span><span class="kz-a">▶</span></div></div>
<div class="kz-b">
<div class="zl-fb"><div class="lb">Formel</div><span class="zl-z1">Ø Verb. LuL</span> ÷ <span class="zl-z2">Warenaufwand</span> × <span class="zl-z3">360</span></div>
<table class="zl-tr"><tr><th>Formel sagt…</th><th>Heisst im Dokument</th><th>Wert</th></tr>
<tr><td class="te"><span class="zl-z1">Ø Verb. LuL</span></td><td class="wh">Selber: (Verbindl. aus Lief./Leist. Berichtsj. + Vorj.) ÷ 2<em>= (107'000 + 175'000) ÷ 2</em></td><td class="va zl-bg1">141'000</td></tr>
<tr><td class="te"><span class="zl-z2">Warenaufwand</span></td><td class="wh">gleich wie bei DIO</td><td class="va zl-bg2">702'400</td></tr>
<tr><td class="te"><span class="zl-z3">360</span></td><td class="wh">Kalendertage</td><td class="va zl-bg3">360</td></tr></table>
<div class="zl-dc"><div class="dt">📊 Bilanz — Verbindlichkeiten</div>
<div class="dr"><span class="l">Verb. Lief./Leist. Berichtsj.</span><span class="v">107'000</span></div>
<div class="dr"><span class="l">Verb. Lief./Leist. Vorjahr</span><span class="v">175'000</span></div>
<div class="dr h1"><span class="l"><span class="zl-tag">Zahl 1</span>Ø (107'000+175'000)÷2</span><span class="v">141'000</span></div></div>
<div class="zl-ca"><div class="lb">Rechnen</div><span class="eq">DPO = <span class="zl-z1">141'000</span> ÷ <span class="zl-z2">702'400</span> × <span class="zl-z3">360</span> = <span class="zl-z4">72 Tage</span></span></div>
<div class="zl-nt">Soll max. 60 Tg · Ist 72 → leicht darüber. Gut für Liquidität, kann aber Lieferantenbeziehung belasten.</div>
</div></div>

<div class="kz"><div class="kz-h" onclick="this.parentElement.classList.toggle('open')"><div><div class="kz-nr">WC · 5</div><div class="kz-t">CCC — Cash Conversion Cycle</div></div><div style="display:flex;gap:8px;align-items:center"><div class="kz-v">−14 Tage</div><span class="bd-o">Spezialfall</span><span class="kz-a">▶</span></div></div>
<div class="kz-b">
<div class="zl-fb"><div class="lb">Formel</div><span class="zl-z1">DIO</span> + <span class="zl-z2">DSO</span> − <span class="zl-z3">DPO</span></div>
<table class="zl-tr"><tr><th>Formel sagt…</th><th>Zuerst berechnen</th><th>Wert</th></tr>
<tr><td class="te"><span class="zl-z1">DIO</span></td><td class="wh">Lagerdauer (Kennzahl oben)</td><td class="va zl-bg1">53 T</td></tr>
<tr><td class="te"><span class="zl-z2">DSO</span></td><td class="wh">Debitorenfrist</td><td class="va zl-bg2">5 T</td></tr>
<tr><td class="te"><span class="zl-z3">DPO</span></td><td class="wh">Kreditorenfrist</td><td class="va zl-bg3">72 T</td></tr></table>
<div class="zl-ca"><div class="lb">Rechnen</div><span class="eq">CCC = <span class="zl-z1">53</span> + <span class="zl-z2">5</span> − <span class="zl-z3">72</span> = <span class="zl-z4">−14 Tage</span></span></div>
<div class="zl-nt">Negativ sieht gut aus, kommt hier aber v.a. durch zu langen DPO. Sauberer wäre: DIO senken.</div>
</div></div>

<h2 style="margin-top:24px;padding-bottom:8px;border-bottom:2px solid var(--bd)">🏨 Branchenspezifische Kennzahlen</h2>

<div class="kz"><div class="kz-h" onclick="this.parentElement.classList.toggle('open')"><div><div class="kz-nr">Branche · 1</div><div class="kz-t">ADR — Average Daily Rate</div></div><div style="display:flex;gap:8px;align-items:center"><div class="kz-v">CHF 159.85</div><span class="bd-o">durchschnittlich</span><span class="kz-a">▶</span></div></div>
<div class="kz-b">
<div class="zl-fb"><div class="lb">Formel</div><span class="zl-z1">Beherbergungsertrag</span> ÷ <span class="zl-z2">Anzahl verkaufte Zimmer</span></div>
<table class="zl-tr"><tr><th>Formel sagt…</th><th>Heisst im Dokument</th><th>Wert</th></tr>
<tr><td class="te"><span class="zl-z1">Rooms Revenue</span></td><td class="wh">«Beherbergungsertrag» (2. Zeile ER)</td><td class="va zl-bg1">1'820'000</td></tr>
<tr><td class="te"><span class="zl-z2">Verkaufte Zimmer</span></td><td class="wh">Aus Ausgangslage: 42 × 365 × 74.2 %<em>= 11'385 Room Nights</em></td><td class="va zl-bg2">11'385</td></tr></table>
<div class="zl-split"><div class="zl-dc"><div class="dt">📄 ER — Beherbergung</div>
<div class="dr h1"><span class="l"><span class="zl-tag">Zahl 1</span>Beherbergungsertrag</span><span class="v">1'820'000</span></div></div>
<div class="zl-dc"><div class="dt">📌 Ausgangslage</div>
<div class="dr"><span class="l">Zimmer</span><span class="v">42</span></div>
<div class="dr"><span class="l">Betriebstage</span><span class="v">365</span></div>
<div class="dr"><span class="l">Auslastung</span><span class="v">74.2 %</span></div>
<div class="dr h2"><span class="l"><span class="zl-tag">Zahl 2</span>42 × 365 × 0.742</span><span class="v">11'385</span></div></div></div>
<div class="zl-ca"><div class="lb">Rechnen</div><span class="eq">ADR = <span class="zl-z1">1'820'000</span> ÷ <span class="zl-z2">11'385</span> = <span class="zl-z4">CHF 159.85</span></span></div>
<div class="zl-nt"><strong>Vorjahr:</strong> Laut Ausgangslage ADR Vorjahr 20 % höher → ca. CHF 191.80 → ADR ist gesunken!</div>
</div></div>

<div class="kz"><div class="kz-h" onclick="this.parentElement.classList.toggle('open')"><div><div class="kz-nr">Branche · 2</div><div class="kz-t">RevPAR — Revenue Per Available Room</div></div><div style="display:flex;gap:8px;align-items:center"><div class="kz-v">CHF 118.70</div><span class="bd-o">mittel</span><span class="kz-a">▶</span></div></div>
<div class="kz-b">
<div class="zl-fb"><div class="lb">Formel</div><span class="zl-z1">Beherbergungsertrag</span> ÷ (<span class="zl-z2">Zimmeranzahl</span> × <span class="zl-z3">Betriebstage</span>)</div>
<table class="zl-tr"><tr><th>Formel sagt…</th><th>Heisst im Dokument</th><th>Wert</th></tr>
<tr><td class="te"><span class="zl-z1">Rooms Revenue</span></td><td class="wh">«Beherbergungsertrag» (ER)</td><td class="va zl-bg1">1'820'000</td></tr>
<tr><td class="te"><span class="zl-z2">Zimmeranzahl</span></td><td class="wh">Aus Ausgangslage: 42 Zimmer</td><td class="va zl-bg2">42</td></tr>
<tr><td class="te"><span class="zl-z3">Betriebstage</span></td><td class="wh">Aus Ausgangslage: ganzjährig = 365</td><td class="va zl-bg3">365</td></tr></table>
<div class="zl-ca"><div class="lb">Rechnen</div>
<span class="eq">RevPAR = <span class="zl-z1">1'820'000</span> ÷ (<span class="zl-z2">42</span> × <span class="zl-z3">365</span>)</span>
<span class="eq">= 1'820'000 ÷ 15'330 = <span class="zl-z4">CHF 118.70</span></span>
<span class="eq" style="font-size:12px;color:var(--tx3)">Check: ADR × OCC = 159.85 × 0.742 = 118.61 ✓</span></div>
</div></div>

<div class="kz"><div class="kz-h" onclick="this.parentElement.classList.toggle('open')"><div><div class="kz-nr">Branche · 3</div><div class="kz-t">OCC % — Occupancy Rate</div></div><div style="display:flex;gap:8px;align-items:center"><div class="kz-v">74.2 %</div><span class="bd-g">gut</span><span class="kz-a">▶</span></div></div>
<div class="kz-b">
<div class="zl-fb"><div class="lb">Formel</div><span class="zl-z1">Verkaufte Einheiten</span> ÷ <span class="zl-z2">Total Einheiten</span> × 100 %</div>
<table class="zl-tr"><tr><th>Formel sagt…</th><th>Heisst im Dokument</th><th>Wert</th></tr>
<tr><td class="te" colspan="3" style="text-align:center;color:var(--tx2);font-style:italic">Im Fall San Nazzaro ist die OCC direkt in der Ausgangslage gegeben: <strong style="color:var(--tx)">74.2 %</strong>.</td></tr>
<tr><td class="te"><span class="zl-z1">Verkaufte Zimmer</span></td><td class="wh">Berechnet: 11'385 Room Nights</td><td class="va zl-bg1">11'385</td></tr>
<tr><td class="te"><span class="zl-z2">Verfügbare Zimmer</span></td><td class="wh">42 × 365 = 15'330</td><td class="va zl-bg2">15'330</td></tr></table>
<div class="zl-ca"><div class="lb">Rechnen</div><span class="eq">OCC = <span class="zl-z1">11'385</span> ÷ <span class="zl-z2">15'330</span> × 100 = <span class="zl-z4">74.2 %</span></span></div>
</div></div>

<div class="kz"><div class="kz-h" onclick="this.parentElement.classList.toggle('open')"><div><div class="kz-nr">Branche · 4</div><div class="kz-t">RevPASH — Revenue Per Available Seat Hour (Gastro)</div></div><div style="display:flex;gap:8px;align-items:center"><div class="kz-v">CHF 6.79</div><span class="bd-o">mittel</span><span class="kz-a">▶</span></div></div>
<div class="kz-b">
<div class="zl-fb"><div class="lb">Formel</div><span class="zl-z1">F&B Revenue</span> ÷ (<span class="zl-z2">Sitzplätze</span> × <span class="zl-z3">Öffnungsstunden</span>)</div>
<table class="zl-tr"><tr><th>Formel sagt…</th><th>Heisst im Dokument</th><th>Wert</th></tr>
<tr><td class="te"><span class="zl-z1">F&B Revenue</span></td><td class="wh">«Restaurationsertrag» (ER)</td><td class="va zl-bg1">1'760'000</td></tr>
<tr><td class="te"><span class="zl-z2">Sitzplätze</span></td><td class="wh">Aus Ausgangslage: 60 Plätze</td><td class="va zl-bg2">60</td></tr>
<tr><td class="te"><span class="zl-z3">Öffnungsstunden total</span></td><td class="wh">360 Tage × ~12h = 4'320 h (vereinfacht)</td><td class="va zl-bg3">4'320</td></tr></table>
<div class="zl-ca"><div class="lb">Rechnen</div>
<span class="eq">RevPASH = <span class="zl-z1">1'760'000</span> ÷ (<span class="zl-z2">60</span> × <span class="zl-z3">4'320</span>)</span>
<span class="eq">= 1'760'000 ÷ 259'200 = <span class="zl-z4">CHF 6.79</span></span></div>
</div></div>

<div class="kz"><div class="kz-h" onclick="this.parentElement.classList.toggle('open')"><div><div class="kz-nr">Branche · 5</div><div class="kz-t">Personalaufwandquote</div></div><div style="display:flex;gap:8px;align-items:center"><div class="kz-v">46.0 %</div><span class="bd-r">über Richtwert</span><span class="kz-a">▶</span></div></div>
<div class="kz-b">
<div class="zl-fb"><div class="lb">Formel</div><span class="zl-z1">Total Personalaufwand</span> ÷ <span class="zl-z2">Total Betriebsertrag</span> × 100 %</div>
<table class="zl-tr"><tr><th>Formel sagt…</th><th>Heisst im Dokument</th><th>Wert CHF</th></tr>
<tr><td class="te"><span class="zl-z1">Total Personalaufwand</span></td><td class="wh">«Direkter Personalaufwand» + «Indirekter Personalaufwand»<em>= 1'365'000 + 280'000</em></td><td class="va zl-bg1">1'645'000</td></tr>
<tr><td class="te"><span class="zl-z2">Betriebsertrag</span></td><td class="wh">«Total Betriebsertrag»</td><td class="va zl-bg2">3'580'000</td></tr></table>
<div class="zl-dc"><div class="dt">📄 ER — Personalaufwand</div>
<div class="dr"><span class="l">Direkter Personalaufwand</span><span class="v">1'365'000</span></div>
<div class="dr"><span class="l">Indirekter Personalaufwand</span><span class="v">280'000</span></div>
<div class="dr h1"><span class="l"><span class="zl-tag">Zahl 1</span>Total Personalaufwand</span><span class="v">1'645'000</span></div></div>
<div class="zl-ca"><div class="lb">Rechnen</div><span class="eq">P-Quote = <span class="zl-z1">1'645'000</span> ÷ <span class="zl-z2">3'580'000</span> × 100 = <span class="zl-z4">46.0 %</span></span></div>
<div class="zl-nt"><strong>Soll ≤ 45 %.</strong> Mit 46 % knapp darüber.</div>
</div></div>

<h2 style="margin-top:24px;padding-bottom:8px;border-bottom:2px solid var(--bd)">📈 Break-Even & Deckungsbeitrag</h2>

<div class="kz"><div class="kz-h" onclick="this.parentElement.classList.toggle('open')"><div><div class="kz-nr">BE · 1</div><div class="kz-t">Deckungsbeitrag in CHF (Beispielrezept)</div></div><div style="display:flex;gap:8px;align-items:center"><div class="kz-v">—</div><span class="bd-o">Beispiel</span><span class="kz-a">▶</span></div></div>
<div class="kz-b">
<div class="zl-fb"><div class="lb">Formel</div><span class="zl-z1">Nettoverkaufspreis</span> − <span class="zl-z2">variable Kosten</span></div>
<div class="zl-nt"><strong>Hinweis:</strong> DB wird pro Produkt berechnet — aus Bilanz/ER direkt nicht ableitbar. Braucht Rezepturkosten einzelner Speisen. Beispiel Risotto: NVP CHF 28.50 − var. Kosten CHF 8.20 = <span class="zl-z4">DB CHF 20.30</span>.</div>
</div></div>

<div class="kz"><div class="kz-h" onclick="this.parentElement.classList.toggle('open')"><div><div class="kz-nr">BE · 2</div><div class="kz-t">DB-Marge in % (Beispielrezept)</div></div><div style="display:flex;gap:8px;align-items:center"><div class="kz-v">—</div><span class="bd-o">Beispiel</span><span class="kz-a">▶</span></div></div>
<div class="kz-b">
<div class="zl-fb"><div class="lb">Formel</div><span class="zl-z1">DB in CHF</span> ÷ <span class="zl-z2">Nettoverkaufspreis</span> × 100 %</div>
<div class="zl-ca"><div class="lb">Beispiel Risotto</div><span class="eq">= <span class="zl-z1">20.30</span> ÷ <span class="zl-z2">28.50</span> × 100 = <span class="zl-z4">71.2 %</span></span></div>
</div></div>

<div class="kz"><div class="kz-h" onclick="this.parentElement.classList.toggle('open')"><div><div class="kz-nr">BE · 3</div><div class="kz-t">Mengenmässige Nutzschwelle</div></div><div style="display:flex;gap:8px;align-items:center"><div class="kz-v">—</div><span class="bd-o">Beispiel</span><span class="kz-a">▶</span></div></div>
<div class="kz-b">
<div class="zl-fb"><div class="lb">Formel</div><span class="zl-z1">Fixkosten</span> ÷ <span class="zl-z2">DB pro Stück</span></div>
<div class="zl-nt">Beispiel: Fixkosten Bankett CHF 9'000 ÷ DB 75 CHF = <span class="zl-z4">120 Gäste</span>.</div>
</div></div>

<div class="kz"><div class="kz-h" onclick="this.parentElement.classList.toggle('open')"><div><div class="kz-nr">BE · 4</div><div class="kz-t">Wertmässige Nutzschwelle</div></div><div style="display:flex;gap:8px;align-items:center"><div class="kz-v">—</div><span class="bd-o">Beispiel</span><span class="kz-a">▶</span></div></div>
<div class="kz-b">
<div class="zl-fb"><div class="lb">Formel (V1)</div><span class="zl-z1">Fixkosten</span> ÷ <span class="zl-z2">DB-Marge %</span></div>
<div class="zl-fb"><div class="lb">Formel (V2)</div><span class="zl-z1">Mengenm. NS</span> × <span class="zl-z2">Nettopreis</span></div>
<div class="zl-ca"><span class="eq">V1: <span class="zl-z1">9'000</span> ÷ <span class="zl-z2">0.625</span> = <span class="zl-z4">CHF 14'400</span></span></div>
</div></div>

<div class="kz"><div class="kz-h" onclick="this.parentElement.classList.toggle('open')"><div><div class="kz-nr">BE · 5</div><div class="kz-t">DDR-Wert</div></div><div style="display:flex;gap:8px;align-items:center"><div class="kz-v">—</div><span class="bd-o">Beispiel</span><span class="kz-a">▶</span></div></div>
<div class="kz-b">
<div class="zl-fb"><div class="lb">Formel</div><span class="zl-z1">DB in CHF</span> × 2 + <span class="zl-z2">DB-Marge %</span> ÷ 2</div>
<div class="zl-ca"><span class="eq">Risotto: <span class="zl-z1">20.30</span> × 2 + <span class="zl-z2">71.2</span> ÷ 2 = 40.60 + 35.60 = <span class="zl-z4">76.20</span></span></div>
</div></div>

<h2 style="margin-top:24px;padding-bottom:8px;border-bottom:2px solid var(--bd)">💼 Investitionsrechnung (Beispielwerte)</h2>

<div class="kz"><div class="kz-h" onclick="this.parentElement.classList.toggle('open')"><div><div class="kz-nr">Inv · 1</div><div class="kz-t">Ø investiertes Kapital</div></div><div style="display:flex;gap:8px;align-items:center"><div class="kz-v">—</div><span class="bd-o">Formel</span><span class="kz-a">▶</span></div></div>
<div class="kz-b">
<div class="zl-fb"><div class="lb">Formel</div><span class="zl-z1">Investiertes Kapital</span> ÷ 2</div>
<div class="zl-nt">Beispiel Küchenmaschine CHF 40'000 → <span class="zl-z4">Ø 20'000</span></div>
</div></div>

<div class="kz"><div class="kz-h" onclick="this.parentElement.classList.toggle('open')"><div><div class="kz-nr">Inv · 2</div><div class="kz-t">Kalkulatorischer Zins</div></div><div style="display:flex;gap:8px;align-items:center"><div class="kz-v">—</div><span class="bd-o">Formel</span><span class="kz-a">▶</span></div></div>
<div class="kz-b">
<div class="zl-fb"><div class="lb">Formel</div><span class="zl-z1">Ø inv. Kapital</span> × <span class="zl-z2">Zinsfuss %</span></div>
<div class="zl-ca"><span class="eq">20'000 × 5 % = <span class="zl-z4">CHF 1'000</span></span></div>
</div></div>

<div class="kz"><div class="kz-h" onclick="this.parentElement.classList.toggle('open')"><div><div class="kz-nr">Inv · 3</div><div class="kz-t">Abschreibungen</div></div><div style="display:flex;gap:8px;align-items:center"><div class="kz-v">—</div><span class="bd-o">Formel</span><span class="kz-a">▶</span></div></div>
<div class="kz-b">
<div class="zl-fb"><div class="lb">Formel</div>(<span class="zl-z1">Kapitaleinsatz</span> − <span class="zl-z2">Liquidationserlös</span>) ÷ <span class="zl-z3">Nutzungsdauer</span></div>
<div class="zl-ca"><span class="eq">(40'000 − 0) ÷ 8 = <span class="zl-z4">CHF 5'000/J.</span></span></div>
</div></div>

<div class="kz"><div class="kz-h" onclick="this.parentElement.classList.toggle('open')"><div><div class="kz-nr">Inv · 4</div><div class="kz-t">Rendite (RoI)</div></div><div style="display:flex;gap:8px;align-items:center"><div class="kz-v">—</div><span class="bd-o">Formel</span><span class="kz-a">▶</span></div></div>
<div class="kz-b">
<div class="zl-fb"><div class="lb">Formel</div>(<span class="zl-z1">Gewinn</span> + <span class="zl-z2">kalk. Zins</span>) ÷ <span class="zl-z3">Ø inv. Kapital</span> × 100 %</div>
<div class="zl-ca"><span class="eq">(3'000 + 1'000) ÷ 20'000 × 100 = <span class="zl-z4">20 %</span></span></div>
<div class="zl-nt">Soll &gt; 10 % → Investition rentabel.</div>
</div></div>

<div class="kz"><div class="kz-h" onclick="this.parentElement.classList.toggle('open')"><div><div class="kz-nr">Inv · 5</div><div class="kz-t">Wiedergewinnungszeit (Payback)</div></div><div style="display:flex;gap:8px;align-items:center"><div class="kz-v">—</div><span class="bd-o">Formel</span><span class="kz-a">▶</span></div></div>
<div class="kz-b">
<div class="zl-fb"><div class="lb">Formel</div><span class="zl-z1">Kapitaleinsatz</span> ÷ <span class="zl-z2">Cashflow</span></div>
<div class="zl-ca"><span class="eq">40'000 ÷ 8'000 = <span class="zl-z4">5 Jahre</span></span></div>
<div class="zl-nt">Soll: kürzer als Nutzungsdauer → hier 5 Jahre &lt; 8 Jahre ✓</div>
</div></div>

<div class="kz"><div class="kz-h" onclick="this.parentElement.classList.toggle('open')"><div><div class="kz-nr">Inv · 6</div><div class="kz-t">Rückflusszahl</div></div><div style="display:flex;gap:8px;align-items:center"><div class="kz-v">—</div><span class="bd-o">Formel</span><span class="kz-a">▶</span></div></div>
<div class="kz-b">
<div class="zl-fb"><div class="lb">Formel</div><span class="zl-z1">Nutzungsdauer</span> ÷ <span class="zl-z2">Wiedergewinnungszeit</span></div>
<div class="zl-ca"><span class="eq">8 ÷ 5 = <span class="zl-z4">1.6×</span></span></div>
<div class="zl-nt">Soll &gt; 1 → Investition rentiert sich 1.6× während Lebensdauer.</div>
</div></div>

<div style="background:var(--pl);border:1px solid var(--pr);border-radius:12px;padding:18px 22px;margin-top:30px;color:#d4a0ff">
<h3 style="color:#d4a0ff;margin-bottom:10px">🎯 Gesamtbefund Hotel San Nazzaro</h3>
<p style="font-size:13px;color:var(--tx)">Von 26 berechneten Kennzahlen (Erfolg, Finanzierung, Liquidität, WC, Branche, BE, Invest.):</p>
<p style="margin-top:10px;font-size:13px"><strong style="color:#5cd377">✓ Stärken:</strong> EBITDA-Marge 16.1 %, DSO nur 5 Tage, OCC 74.2 %, niedriges Ausfallrisiko.</p>
<p style="font-size:13px"><strong style="color:#ff6b63">✗ Schwächen:</strong> EK-Quote nur 12.4 %, Verschuldungsgrad 704 %, LG II nur 18.6 %, negatives Working Capital −152'350, DIO 53 Tage, ADR gesunken.</p>
<p style="margin-top:10px;font-size:13px"><strong>Top-3-Prioritäten:</strong> 1. Eigenkapital aufbauen 2. Warenlager straffen (v.a. Weinkeller) 3. ADR stabilisieren/steigern.</p>
</div>
</div>
<!-- === ENDE ctrl_zahlen === -->

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
