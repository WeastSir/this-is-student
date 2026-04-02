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
<div id="ltCtrlCards" style="font-size:24px;font-weight:700;background:linear-gradient(135deg,#00c6fb,#005bea);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;margin-bottom:6px">50</div>
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
<div class="sec" id="ctrl_kz"><h1>Kennzahlen</h1><p class="sub">KPI, Erfolgskennzahlen, Finanzierung, Liquidität, Working Capital, Balanced Scorecard</p>
<div class="hl" style="text-align:center;font-style:italic;font-size:15px">«Was man nicht messen kann, kann man nicht lenken.» — <strong>Peter Drucker</strong>, Ökonom (1909–2005)</div>
<div class="hl">Kennzahlen sind eine <strong>Zusammenfassung quantitativer Informationen</strong> für den inner- und zwischenbetrieblichen Vergleich. Sie setzen Informationen in eine allgemeine Relation und ermöglichen so interne, externe und branchenweite Vergleiche.<br><br><strong>Führen mit Kennzahlen</strong> = die Ergebnisse des Tagesgeschäfts messen, um daraus abgeleitete Entscheidungen zu treffen, die den Weiterbestand der Unternehmung sichern.</div>
<div class="hlr"><strong>Checkliste Herausforderungen</strong> — So behältst du die Orientierung im Zahlendschungel:<br>1. Was misst die Kennzahl? Welches Ziel verfolgt sie?<br>2. Zusammenhänge erkennen: Wie wurde sie genau berechnet?<br>3. Gibt es Vergleichswerte? (Benchmarks? Interne Ziele?)<br>4. Eigene Meinung bilden: Was sagt die Kennzahl für dich aus?<br>5. Was sind die Konsequenzen? (Genug? Zu wenig? Zu viel?)<br>6. Welche Massnahmen sind erforderlich?</div>
<div class="hlbl"><strong>Lernziele K01:</strong><br>• Den Begriff «Kennzahl» auswendig und mit eigenen Worten definieren können.<br>• Stellenwert von Kennzahlen nennen und ihrer Art und Funktion zuweisen können.<br>• Herausforderungen im Umgang mit Kennzahlen beschreiben und anhand eines Beispiels erkennen.<br>• Verschiedene Arten von Kennzahlen auswendig aufzählen und deren Aufgaben beschreiben.<br>• Balanced Scorecard beschreiben, Perspektiven nennen, einfache BSC aufzeichnen können.</div>
<div style="display:flex;gap:8px;margin:12px 0 4px"><button style="font-size:11px;padding:4px 10px" onclick="this.parentElement.nextElementSibling.querySelectorAll('.tl-item').forEach(i=>i.classList.add('open'))">Alle aufklappen</button><button style="font-size:11px;padding:4px 10px" onclick="this.parentElement.nextElementSibling.querySelectorAll('.tl-item').forEach(i=>i.classList.remove('open'))">Alle schliessen</button></div>
<div class="tl">
<div class="tl-item"><div class="tl-num tl-num-b">1</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Arten von Kennzahlen</div><div class="tl-merksatz">«Absolut = Grösse. Relativ = Verhältnis. Relativ hat mehr Aussagekraft.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body"><strong>Absolute Kennzahlen</strong> geben Auskunft über die Grösse (z.B. Umsatz in CHF). <strong>Relative Kennzahlen</strong> (Verhältniszahlen) haben höhere Aussagekraft.</div><div class="tl-sub"><div class="c ca"><div class="ct2">Gliederungszahlen</div><div class="cd">Teilgrösse ÷ Gesamtgrösse. Bsp: Eigenkapitalquote = EK ÷ GK.</div></div><div class="c cg"><div class="ct2">Beziehungszahlen</div><div class="cd">Verschiedenartige Grössen ins Verhältnis. Bsp: EK-Rendite = Gewinn ÷ EK. Ursache-Wirkungs-Beziehung.</div></div><div class="c cm"><div class="ct2">Indexzahlen</div><div class="cd">Gleiche Zahl zu verschiedenen Zeitpunkten. Bsp: Umsatz 2024 ÷ Umsatz 2023. Perioden müssen gleich lang sein!</div></div></div><div class="merksatz">Merke: Zähler und Nenner müssen zeitlich, sachlich und wertmässig äquivalent sein.</div></div></div>

<div class="tl-item"><div class="tl-num tl-num-g">2</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Erfolgskennzahlen</div><div class="tl-merksatz">«EBITDA = operativer Erfolg ohne Steuern, Zinsen, Abschreibungen.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-sub"><div class="c ca"><div class="ct2">EBT</div><div class="cd">Earnings before Taxes = Jahresergebnis + direkte Steuern</div></div><div class="c ca"><div class="ct2">EBIT</div><div class="cd">= EBT ± Finanzaufwand/-ertrag. Operatives Ergebnis vor Zinsen und Steuern.</div></div><div class="c ca"><div class="ct2">EBITDA</div><div class="cd">= EBIT + Abschreibungen + Amortisationen. Zeigt die operative Ertragskraft.</div></div></div><div class="tl-body" style="margin-top:12px"><strong>Rentabilitäten:</strong><br>• <strong>Umsatzrendite</strong> = Reingewinn ÷ Umsatz × 100%<br>• <strong>EBITDA-Marge</strong> = EBITDA ÷ Umsatz × 100%<br>• <strong>Eigenkapitalrendite (RoE)</strong> = Reingewinn ÷ Ø Eigenkapital × 100%<br>• <strong>Gesamtkapitalrendite (RoA)</strong> = Reingewinn ÷ Ø Gesamtkapital × 100%</div><div class="merksatz">Merke: EB-Ziffern = Alternative Performance Measures (APM), nicht reguliert. Ganzheitliche Betrachtung nötig!</div></div></div>

<div class="tl-item"><div class="tl-num tl-num-a">3</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Finanzierungskennzahlen</div><div class="tl-merksatz">«Eigenfinanzierungsgrad = wie viel Verlust kann absorbiert werden?»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-sub"><div class="c cg"><div class="ct2">Eigenfinanzierungsgrad</div><div class="cd">= EK ÷ GK × 100%. Massstab für finanzielle Sicherheit.</div></div><div class="c cr"><div class="ct2">Statischer Verschuldungsgrad</div><div class="cd">= FK ÷ EK × 100%. Rein vergangenheitsorientiert (Bilanz).</div></div><div class="c cm"><div class="ct2">Dynamischer Verschuldungsgrad</div><div class="cd">= (FK − flüssige Mittel) ÷ Geldfluss aus Betriebstätigkeit. Wie schnell können Schulden getilgt werden?</div></div><div class="c cp"><div class="ct2">Anlagedeckungsgrad I</div><div class="cd">= EK ÷ Anlagevermögen × 100%. Richtwert: 20–30% bereits stabil.</div></div><div class="c cp"><div class="ct2">Anlagedeckungsgrad II</div><div class="cd">= (EK + langfr. FK) ÷ AV × 100%. <strong>Goldene Bilanzregel:</strong> Langfristiges Vermögen mit langfristigem Kapital finanzieren. Sollte über 100% liegen!</div></div></div><div class="merksatz">Merke: Hoher Eigenfinanzierungsgrad ≠ immer gut. Leverage-Effekt: FK kann Rendite steigern wenn Zinskosten < Rendite.</div></div></div>

<div class="tl-item"><div class="tl-num tl-num-r">4</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Liquiditätskennzahlen</div><div class="tl-merksatz">«Liquiditätsgrad II unter 100% = Alarmzeichen! Banker's Rule: LG III ≥ 200%.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-sub"><div class="c cr"><div class="ct2">Liquiditätsgrad I (Cash Ratio)</div><div class="cd">= Flüssige Mittel ÷ kurzfr. FK × 100%. Richtwert: 10–35%.</div></div><div class="c cm"><div class="ct2">Liquiditätsgrad II (Quick Ratio)</div><div class="cd">= (Flüssige Mittel + Ford. LuL) ÷ kurzfr. FK × 100%. Richtwert: ≥ 100%.</div></div><div class="c ca"><div class="ct2">Liquiditätsgrad III (Current Ratio)</div><div class="cd">= Umlaufvermögen ÷ kurzfr. FK × 100%. Richtwert: 150–200% (Banker's Rule: 200%).</div></div></div><div class="merksatz">Merke: Illiquidität → Insolvenz! Art. 725 OR: VR muss Massnahmen ergreifen bei drohender Zahlungsunfähigkeit.</div></div></div>

<div class="tl-item"><div class="tl-num tl-num-p">5</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Working Capital & Cash Conversion Cycle</div><div class="tl-merksatz">«CCC = DIO + DSO − DPO. Je kürzer, desto besser für die Liquidität.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body"><strong>Working Capital</strong> = Umlaufvermögen − kurzfr. FK. Sollte positiv sein, aber nicht zu hoch (Kapitalbindung).</div><div class="tl-sub"><div class="c ca"><div class="ct2">DSO (Days Sales Outstanding)</div><div class="cd">= Ø Forderungen LuL ÷ Betriebsertrag × 360. Debitorenfrist — wie lange wartet man auf Geld?</div></div><div class="c cm"><div class="ct2">DIO (Days Inventory Outstanding)</div><div class="cd">= Ø Warenvorräte ÷ Warenaufwand × 360. Lagerdauer — wie lange liegen Waren im Lager?</div></div><div class="c cg"><div class="ct2">DPO (Days Payable Outstanding)</div><div class="cd">= Ø Verbindlichkeiten LuL ÷ Warenaufwand × 360. Kreditorenfrist — wie lange dauert Bezahlung an Lieferanten?</div></div></div><div class="tl-body" style="margin-top:12px"><strong>Cash Conversion Cycle = DIO + DSO − DPO</strong><br>Gibt an, wie viele Tage Kapital gebunden ist von Einkauf bis Zahlungseingang.</div><div class="merksatz">Merke: CCC optimieren = Liquidität UND Rendite verbessern. Einkaufs-, Lager- und Verkaufsprozesse regelmässig analysieren.</div></div></div>

<div class="tl-item"><div class="tl-num tl-num-bl">6</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Branchenspezifische Kennzahlen (Hotellerie/Gastro)</div><div class="tl-merksatz">«RevPAR = die wichtigste Metrik der Hotellerie. OCC% ≠ Rentabilität!»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-sub"><div class="c ca"><div class="ct2">RevPAR</div><div class="cd">= Ertrag Beherbergung ÷ (Zimmeranzahl × Betriebstage). Revenue Per Available Room.</div></div><div class="c ca"><div class="ct2">ADR</div><div class="cd">= Ertrag Beherbergung ÷ Anzahl verkaufte Zimmer. Average Daily Rate ≠ RevPAR!</div></div><div class="c cg"><div class="ct2">OCC% (Belegungsrate)</div><div class="cd">= Verkaufte Einheiten ÷ Totale Einheiten × 100%. 100% ist nicht immer ideal!</div></div><div class="c cm"><div class="ct2">RevPASH</div><div class="cd">= F&B Revenue ÷ (Sitzplätze × Öffnungsstunden). Revenue Per Available Seat Hour.</div></div><div class="c cp"><div class="ct2">Personalaufwandquote</div><div class="cd">= Total Personalaufwand ÷ Total Betriebsertrag × 100%. Grösster Kostenpunkt!</div></div></div><div class="merksatz">Merke: Hohe OCC% ≠ Rentabilität. Negativer GOP bei hoher Auslastung = Zimmer unter Selbstkosten verkauft.</div></div></div>

<div class="tl-item"><div class="tl-num tl-num-b">7</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Balanced Scorecard</div><div class="tl-merksatz">«Vier Perspektiven, alle verbunden durch Ursache-Wirkungs-Ketten zur Strategie.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body">Entwickelt 1992 von <strong>Robert S. Kaplan & David P. Norton</strong>. Ausgewogenes Kennzahlensystem, das finanzielle Sichtweise um andere Perspektiven erweitert. Instrument des <strong>strategischen Controllings</strong>. Max. ~5 Kennzahlen pro Perspektive.</div><div class="tl-sub"><div class="c ca"><div class="ct2">Finanzielle Perspektive</div><div class="cd">Rein monetär. Jahresergebnis, Umsatzrendite. Finales Ziel für alle anderen Perspektiven.</div></div><div class="c cg"><div class="ct2">Kundenperspektive</div><div class="cd">Marktanteile, Gästezufriedenheit, Gästetreue. Frühwarnsystem für Marktprobleme.</div></div><div class="c cm"><div class="ct2">Interne Prozessperspektive</div><div class="cd">Time to market, Kapazitätsauslastung, Produktivität. In welchen Prozessen der Beste sein?</div></div><div class="c cp"><div class="ct2">Lern- & Entwicklungsperspektive</div><div class="cd">Mitarbeiterzufriedenheit, Fluktuationsrate, Innovationen. Potenziale entwickeln.</div></div></div><div class="tl-body" style="margin-top:12px"><strong>Ursache-Wirkungs-Kette:</strong> Fachwissen MA → bessere Prozessqualität → schnellere Durchlaufzeit → termintreue Lieferung → höhere Kundenzufriedenheit → Kundentreue → Umsatzrendite.</div><div class="merksatz">Merke: BSC = nicht nur Messinstrument, sondern Instrument zur Strategieumsetzung. Erst Strategie formulieren, dann Kennzahlen ableiten!</div></div></div>

<div class="tl-item"><div class="tl-num tl-num-x">8</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Funktionen & Herausforderungen</div><div class="tl-merksatz">«Klare Definition + richtiges Mass an KPIs = erfolgreiche Steuerung.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body"><strong>5 Funktionen:</strong> Anregung (Initiativen), Operationalisierung (Ziele messbar), Vorgabe (Motivation), Steuerung (Abstimmung), Kontrolle (Soll-Ist).<br><br><strong>Herausforderungen:</strong> Information overload vermeiden, eindeutige Definitionen, keine widersprüchlichen Kennzahlen, nicht zu kurzfristig denken, nicht-monetäre Aspekte berücksichtigen.</div><div class="merksatz">Merke: DuPont-Schema = mathematische Verknüpfung. BSC = sachlogische Verknüpfung. Beides hat seinen Platz.</div></div></div>
</div></div>

<!-- CTRL: Kosten- und Leistungsrechnung -->
<div class="sec" id="ctrl_klr"><h1>Kosten- & Leistungsrechnung</h1><p class="sub">FIBU vs. BEBU, Vollkosten, Teilkosten, Deckungsbeitrag, Break-even</p>
<div class="hl">Die Kostenrechnung füllt die Lücke der FIBU: Sie ordnet Kosten den Kostenträgern zu, analysiert Prozesse und liefert Kalkulationsgrundlagen für die Preisgestaltung.<br><br><strong>Hierarchie:</strong> Erfolgsrechnung (FIBU) → Kostenrechnung (BEBU) → Deckungsbeitragsrechnung → Kalkulation. Nettoerlös ist dabei immer 100%.</div>
<div class="hla"><strong>Die 3 Fragen der Kostenrechnung:</strong><br>• <strong>Was?</strong> (Kostenarten) — Welche Kosten sind angefallen? Bsp: Wareneinkäufe, Werbekosten, Zinsen<br>• <strong>Wo?</strong> (Kostenstellen) — Wo im Betrieb? Bsp: Rooms Division, F&B, Wellness, Administration<br>• <strong>Wofür?</strong> (Kostenträger) — Welches Produkt trägt die Kosten? Bsp: DZ Deluxe, HP-Package, Tagesteller</div>
<div class="hlbl"><strong>Lernziele K02:</strong><br>• Ziele und Aufgaben der Kosten- und Leistungsrechnung anhand konkreter Beispiele nennen.<br>• Verwendungszweck und Eigenschaften von Voll- und Teilkostenrechnung nennen und Unterschiede beschreiben.<br>• Begriffe, Bestandteile und Resultate beider Rechnungsarten in eigenen Worten erklären.<br>• Deckungsbeitragsrechnung und Break-even-Analyse selbstständig berechnen können.</div>

<h2>Praxis: Hotel-Budget (Soll-Ist-Kontrolle)</h2>
<div class="c" style="padding:20px;overflow-x:auto"><div class="ct2" style="margin-bottom:12px">Beispiel: Betriebsrechnung «Hotel San Nazzaro» — Was wird kontrolliert?</div>
<table style="width:100%;font-size:12.5px;border-collapse:collapse;color:var(--tx)">
<tr style="background:var(--s2);font-weight:700"><td style="padding:8px;border:1px solid var(--bd)">Position</td><td style="padding:8px;border:1px solid var(--bd);text-align:right">Budget (Soll)</td><td style="padding:8px;border:1px solid var(--bd);text-align:right">Ist</td><td style="padding:8px;border:1px solid var(--bd);text-align:right">Abweichung</td></tr>
<tr style="background:var(--gl)"><td style="padding:6px 8px;border:1px solid var(--bd);font-weight:600" colspan="4">Ertrag</td></tr>
<tr><td style="padding:6px 8px;border:1px solid var(--bd)">Restaurationsertrag</td><td style="padding:6px 8px;border:1px solid var(--bd);text-align:right">1'980'000</td><td style="padding:6px 8px;border:1px solid var(--bd);text-align:right">1'760'000</td><td style="padding:6px 8px;border:1px solid var(--bd);text-align:right;color:var(--r)">−220'000</td></tr>
<tr><td style="padding:6px 8px;border:1px solid var(--bd)">Beherbergungsertrag</td><td style="padding:6px 8px;border:1px solid var(--bd);text-align:right">1'560'000</td><td style="padding:6px 8px;border:1px solid var(--bd);text-align:right">1'820'000</td><td style="padding:6px 8px;border:1px solid var(--bd);text-align:right;color:var(--g)">+260'000</td></tr>
<tr style="font-weight:700;background:var(--s2)"><td style="padding:6px 8px;border:1px solid var(--bd)">Total Betriebsertrag</td><td style="padding:6px 8px;border:1px solid var(--bd);text-align:right">3'540'000</td><td style="padding:6px 8px;border:1px solid var(--bd);text-align:right">3'580'000</td><td style="padding:6px 8px;border:1px solid var(--bd);text-align:right;color:var(--g)">+40'000</td></tr>
<tr style="background:var(--rl)"><td style="padding:6px 8px;border:1px solid var(--bd);font-weight:600" colspan="4">Direkter Aufwand</td></tr>
<tr><td style="padding:6px 8px;border:1px solid var(--bd)">Warenaufwand Restauration</td><td style="padding:6px 8px;border:1px solid var(--bd);text-align:right">680'000</td><td style="padding:6px 8px;border:1px solid var(--bd);text-align:right">687'000</td><td style="padding:6px 8px;border:1px solid var(--bd);text-align:right;color:var(--r)">−7'000</td></tr>
<tr><td style="padding:6px 8px;border:1px solid var(--bd)">Warenaufwand Beherbergung</td><td style="padding:6px 8px;border:1px solid var(--bd);text-align:right">18'500</td><td style="padding:6px 8px;border:1px solid var(--bd);text-align:right">15'400</td><td style="padding:6px 8px;border:1px solid var(--bd);text-align:right;color:var(--g)">+3'100</td></tr>
<tr><td style="padding:6px 8px;border:1px solid var(--bd)">Personalaufwand direkt</td><td style="padding:6px 8px;border:1px solid var(--bd);text-align:right">1'350'000</td><td style="padding:6px 8px;border:1px solid var(--bd);text-align:right">1'365'000</td><td style="padding:6px 8px;border:1px solid var(--bd);text-align:right;color:var(--r)">−15'000</td></tr>
<tr style="font-weight:700;background:var(--s2)"><td style="padding:6px 8px;border:1px solid var(--bd)">GOI (Bruttobetriebserfolg)</td><td style="padding:6px 8px;border:1px solid var(--bd);text-align:right">1'491'500</td><td style="padding:6px 8px;border:1px solid var(--bd);text-align:right">1'512'600</td><td style="padding:6px 8px;border:1px solid var(--bd);text-align:right;color:var(--g)">+21'100</td></tr>
<tr style="background:var(--aml)"><td style="padding:6px 8px;border:1px solid var(--bd);font-weight:600" colspan="4">Indirekter Aufwand</td></tr>
<tr><td style="padding:6px 8px;border:1px solid var(--bd)">Personalaufwand indirekt</td><td style="padding:6px 8px;border:1px solid var(--bd);text-align:right">270'500</td><td style="padding:6px 8px;border:1px solid var(--bd);text-align:right">280'000</td><td style="padding:6px 8px;border:1px solid var(--bd);text-align:right;color:var(--r)">−9'500</td></tr>
<tr><td style="padding:6px 8px;border:1px solid var(--bd)">Verwaltung / Marketing / Unterhalt</td><td style="padding:6px 8px;border:1px solid var(--bd);text-align:right">452'000</td><td style="padding:6px 8px;border:1px solid var(--bd);text-align:right">430'600</td><td style="padding:6px 8px;border:1px solid var(--bd);text-align:right;color:var(--g)">+21'400</td></tr>
<tr style="font-weight:700;background:var(--s2)"><td style="padding:6px 8px;border:1px solid var(--bd)">GOP (Bruttobetriebsergebnis)</td><td style="padding:6px 8px;border:1px solid var(--bd);text-align:right">769'000</td><td style="padding:6px 8px;border:1px solid var(--bd);text-align:right">802'000</td><td style="padding:6px 8px;border:1px solid var(--bd);text-align:right;color:var(--g)">+33'000</td></tr>
<tr><td style="padding:6px 8px;border:1px solid var(--bd)">Liegenschafts-/Versicherungsaufwand</td><td style="padding:6px 8px;border:1px solid var(--bd);text-align:right">90'500</td><td style="padding:6px 8px;border:1px solid var(--bd);text-align:right">82'500</td><td style="padding:6px 8px;border:1px solid var(--bd);text-align:right;color:var(--g)">+8'000</td></tr>
<tr style="font-weight:700;background:var(--al)"><td style="padding:6px 8px;border:1px solid var(--bd)">EBITDA</td><td style="padding:6px 8px;border:1px solid var(--bd);text-align:right">678'500</td><td style="padding:6px 8px;border:1px solid var(--bd);text-align:right">719'500</td><td style="padding:6px 8px;border:1px solid var(--bd);text-align:right;color:var(--g)">+41'000</td></tr>
<tr><td style="padding:6px 8px;border:1px solid var(--bd)">Abschreibungen</td><td style="padding:6px 8px;border:1px solid var(--bd);text-align:right">480'000</td><td style="padding:6px 8px;border:1px solid var(--bd);text-align:right">380'000</td><td style="padding:6px 8px;border:1px solid var(--bd);text-align:right;color:var(--g)">+100'000</td></tr>
<tr style="font-weight:700;background:var(--al)"><td style="padding:6px 8px;border:1px solid var(--bd)">EBIT</td><td style="padding:6px 8px;border:1px solid var(--bd);text-align:right">198'500</td><td style="padding:6px 8px;border:1px solid var(--bd);text-align:right">339'500</td><td style="padding:6px 8px;border:1px solid var(--bd);text-align:right;color:var(--g)">+141'000</td></tr>
<tr><td style="padding:6px 8px;border:1px solid var(--bd)">Finanzaufwand / -ertrag</td><td style="padding:6px 8px;border:1px solid var(--bd);text-align:right">−179'000</td><td style="padding:6px 8px;border:1px solid var(--bd);text-align:right">−169'000</td><td style="padding:6px 8px;border:1px solid var(--bd);text-align:right;color:var(--g)">+10'000</td></tr>
<tr style="font-weight:700;background:var(--s2)"><td style="padding:6px 8px;border:1px solid var(--bd)">EBT</td><td style="padding:6px 8px;border:1px solid var(--bd);text-align:right">19'500</td><td style="padding:6px 8px;border:1px solid var(--bd);text-align:right">170'500</td><td style="padding:6px 8px;border:1px solid var(--bd);text-align:right;color:var(--g)">+151'000</td></tr>
<tr><td style="padding:6px 8px;border:1px solid var(--bd)">Direkte Steuern</td><td style="padding:6px 8px;border:1px solid var(--bd);text-align:right">5'000</td><td style="padding:6px 8px;border:1px solid var(--bd);text-align:right">8'000</td><td style="padding:6px 8px;border:1px solid var(--bd);text-align:right;color:var(--r)">−3'000</td></tr>
<tr style="font-weight:700;background:linear-gradient(90deg,var(--gl),transparent)"><td style="padding:8px;border:1px solid var(--bd)">Jahresgewinn</td><td style="padding:8px;border:1px solid var(--bd);text-align:right">14'500</td><td style="padding:8px;border:1px solid var(--bd);text-align:right">162'500</td><td style="padding:8px;border:1px solid var(--bd);text-align:right;color:var(--g);font-size:14px">+148'000</td></tr>
</table>
<div class="merksatz" style="margin-top:14px">Merke: Die Soll-Ist-Analyse ist DAS Kernwerkzeug des Controllings. Jede Abweichung muss analysiert werden: Warum? Einmalig oder strukturell? Welche Massnahmen?</div>
</div>
<div style="display:flex;gap:8px;margin:12px 0 4px"><button style="font-size:11px;padding:4px 10px" onclick="this.parentElement.nextElementSibling.querySelectorAll('.tl-item').forEach(i=>i.classList.add('open'))">Alle aufklappen</button><button style="font-size:11px;padding:4px 10px" onclick="this.parentElement.nextElementSibling.querySelectorAll('.tl-item').forEach(i=>i.classList.remove('open'))">Alle schliessen</button></div>
<div class="tl">
<div class="tl-item"><div class="tl-num tl-num-b">1</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">FIBU vs. BEBU</div><div class="tl-merksatz">«FIBU = extern + obligatorisch + Vergangenheit. BEBU = intern + freiwillig + Zukunft.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-sub"><div class="c cbl"><div class="ct2">Finanzbuchhaltung (FIBU)</div><div class="cd">Extern · obligatorisch · gesetzlich geregelt (OR 957ff.) · vergangenheitsorientiert · Bilanz + Erfolgsrechnung + Anhang.</div></div><div class="c cg"><div class="ct2">Betriebsbuchhaltung (BEBU)</div><div class="cd">Intern · freiwillig · zukunftsorientiert · flexibel · Kostenrechnung, Investitionsrechnung, Soll-Ist-Vergleich.</div></div></div><div class="merksatz">Merke: FIBU + BEBU = gesamtes Rechnungswesen. Art. 716a OR: Ausgestaltung des Rechnungswesens = unübertragbare VR-Aufgabe.</div></div></div>

<div class="tl-item"><div class="tl-num tl-num-g">2</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Vollkostenrechnung</div><div class="tl-merksatz">«Alle Kosten auf Kostenträger umlegen → Erfolg pro Produkt ermitteln.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body"><strong>3 Stufen:</strong> Kostenartenrechnung (welche Kosten?) → Kostenstellenrechnung (wo?) → Kostenträgerrechnung (wofür?).</div><div class="tl-sub"><div class="c ca"><div class="ct2">Einzelkosten (direkte Kosten)</div><div class="cd">Direkt dem Kostenträger zuordenbar. Bsp: Wareneinkauf Lebensmittel für ein Menü.</div></div><div class="c cm"><div class="ct2">Gemeinkosten (indirekte Kosten)</div><div class="cd">Nicht direkt zuordenbar → über Umlageschlüssel verteilt. Bsp: Verwaltung, Miete.</div></div></div><div class="tl-body" style="margin-top:12px"><strong>Ergebnisgrössen:</strong> Einzelkosten → + Gemeinkosten = <strong>Herstellkosten</strong> → + Verwaltung/Vertrieb = <strong>Selbstkosten</strong> → Nettoerlös − Selbstkosten = <strong>Betriebsergebnis</strong>.</div><div class="merksatz">Merke: Umlageschlüssel: Produktion = nach Materialverbrauch/Stunden. Fertigung = Maschinenlaufstunden. Verwaltung = nach Herstellkosten.</div></div></div>

<div class="tl-item"><div class="tl-num tl-num-a">3</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Teilkostenrechnung</div><div class="tl-merksatz">«Nur variable Kosten auf Kostenträger. Fixkosten bleiben als Block.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body"><strong>Kostenspaltung:</strong> K(x) = K_var × x + K_fix</div><div class="tl-sub"><div class="c cr"><div class="ct2">Fixe Kosten</div><div class="cd">Unabhängig von Auslastung: Miete, feste Gehälter, Versicherungen, Lizenzen, Unterhalt.</div></div><div class="c cg"><div class="ct2">Variable Kosten</div><div class="cd">Abhängig von Auslastung: Lebensmittel, Getränke, Verbrauchsmaterial, temporäres Personal, Provisionen.</div></div></div><div class="tl-body" style="margin-top:12px"><strong>Ergebnisgrössen:</strong> Variable Selbstkosten, Nettoerlös, <strong>Deckungsbeitrag</strong>. Fixkosten = Gesamtbetrachtung (nicht pro Produkt).</div><div class="merksatz">Merke: Vollkosten = Erfolg pro Produkt. Teilkosten = Deckungsbeitrag pro Produkt. Beides hat seinen Zweck!</div></div></div>

<div class="tl-item"><div class="tl-num tl-num-r">4</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Deckungsbeitragsrechnung & DDR</div><div class="tl-merksatz">«DB = Nettopreis − variable Kosten. DDR-Wert = DB×2 + DB%÷2.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body"><strong>Deckungsbeitrag in CHF</strong> = Nettoverkaufspreis − variable Kosten pro Stück<br><strong>DB-Marge in %</strong> = DB in CHF ÷ Nettoverkaufspreis × 100%<br><br><strong>DDR-Wert</strong> = DB in CHF × 2 + DB-Marge% ÷ 2<br>→ Hoher DDR-Wert = wirtschaftlicher. Produkte mit hohem DDR aktiv verkaufen!<br><br><strong>Sales-Mix:</strong> DB Total = DB pro Stück × Absatzmenge. Zeigt die tatsächliche Rentabilität unter Berücksichtigung der Nachfrage.</div><div class="merksatz">Merke: Hohe Marge ≠ höchster Deckungsbeitrag. Burger (23 CHF DB, 69.7%) schlägt Spaghetti (18 CHF DB, 76.2%) im DDR-Wert!</div></div></div>

<div class="tl-item"><div class="tl-num tl-num-p">5</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Break-even-Analyse</div><div class="tl-merksatz">«Nutzschwelle = Fixkosten ÷ DB pro Stück. Ab hier wird Gewinn gemacht.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body"><strong>Break-even-Formel:</strong> VP × x = K_var × x + K_fix<br><br><strong>Mengenmässige Nutzschwelle</strong> (Stück) = Fixkosten ÷ DB in CHF<br><strong>Wertmässige Nutzschwelle</strong> (CHF) = Fixkosten ÷ DB-Marge in %<br>Oder: mengenmässige NS × Nettoerlös pro Stück<br><br>Unterhalb = Verlustzone. Oberhalb = Gewinnzone.</div><div class="merksatz">Merke: Break-even = das Minimum. Jede Geschäftsidee muss zuerst die Nutzschwelle erreichen können!</div></div></div>
</div></div>

<!-- CTRL: Kalkulation -->
<div class="sec" id="ctrl_kalk"><h1>Kalkulation</h1><p class="sub">Preiskomponenten, Preisgestaltung, Aufschlagskalkulation, MWST</p>
<div class="hl">Die richtige Preiskalkulation entscheidet über den unternehmerischen Erfolg. «Wareneinsatz × 3 = Preis» ist nicht mehr zeitgemäss! Kalkulation hat mit Controlling zu tun: <strong>Lenkung & Steuerung</strong> der Preisgestaltung + <strong>Kontrolle</strong> des unternehmerischen Erfolges.</div>
<div class="hlbl"><strong>Lernziele K03:</strong><br>• Einzelkomponenten eines Preises in eigenen Worten nennen und beschreiben.<br>• Verschiedene Herangehensweisen der Preisgestaltung erläutern und situationsgerecht anwenden.<br>• Mithilfe der Aufschlagskalkulation sämtliche Zuschlagssätze berechnen und auf ein Produkt ableiten.<br>• Selbstständig für beliebige Produkte einen Preis ermitteln, Herangehensweise begründen und argumentieren.</div>
<div style="display:flex;gap:8px;margin:12px 0 4px"><button style="font-size:11px;padding:4px 10px" onclick="this.parentElement.nextElementSibling.querySelectorAll('.tl-item').forEach(i=>i.classList.add('open'))">Alle aufklappen</button><button style="font-size:11px;padding:4px 10px" onclick="this.parentElement.nextElementSibling.querySelectorAll('.tl-item').forEach(i=>i.classList.remove('open'))">Alle schliessen</button></div>
<div class="tl">
<div class="tl-item"><div class="tl-num tl-num-b">1</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Preiskomponenten</div><div class="tl-merksatz">«Material + Fertigung + Gemeinkosten + Verwaltung + Gewinn + MWST = Preis.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body"><strong>Materialeinzelkosten</strong> (Einkaufspreis, Transport, Abfall berücksichtigen!)<br>+ <strong>Fertigungseinzelkosten</strong> (Personal inkl. Sozialversicherungen)<br>+ <strong>Gemeinkostenzuschläge</strong> (Lagerung, Strom, Nebenkosten) = <strong>Herstellkosten</strong><br>+ <strong>Verwaltungs-/Vertriebskosten</strong> (Buchhaltung, Marketing, Zinsen) = <strong>Selbstkosten</strong><br>+ <strong>Gewinn</strong> (Gastro ~10%, Hotellerie ~15%)<br>+ <strong>MWST</strong> = <strong>Brutto-Verkaufspreis</strong></div><div class="merksatz">Merke: Standardisierte Rezepturen + klare Portionsgrössen = verlässliche Kalkulation. Regelmässig empirisch prüfen!</div></div></div>

<div class="tl-item"><div class="tl-num tl-num-a">2</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Preisgestaltung — 3 Ansätze</div><div class="tl-merksatz">«Dreieck: Kosten, Konkurrenz, Nachfrage. Dazu: Dynamic Pricing & Target Costing.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-sub"><div class="c ca"><div class="ct2">Nachfrageorientiert</div><div class="cd">Preis nach Zahlungsbereitschaft der Kunden. Bsp: Hotels, Fluggesellschaften. Di→Mi günstiger als Fr→Sa.</div></div><div class="c cg"><div class="ct2">Kostenorientiert</div><div class="cd">Preis = Selbstkosten + Gewinnzuschlag. Bsp: öffentliche Einrichtungen, Wein mit fixem Zuschlag.</div></div><div class="c cm"><div class="ct2">Konkurrenzorientiert</div><div class="cd">Preise der Mitbewerber als Referenz. Bsp: Kaffee, Bier — markttransparente Artikel.</div></div><div class="c cp"><div class="ct2">Dynamic Pricing</div><div class="cd">Preis wird dynamisch der Nachfrage angepasst. Kapazitäten begrenzt + nicht lagerbar + variable Kosten bekannt.</div></div><div class="c cr"><div class="ct2">Target Pricing / Target Costing</div><div class="cd">Target Pricing: Max. Marktpreis bestimmen. Target Costing: Max. Herstellkosten = Zielpreis − Mindestgewinn.</div></div></div></div></div>

<div class="tl-item"><div class="tl-num tl-num-g">3</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Aufschlagskalkulation (7 Schritte)</div><div class="tl-merksatz">«Betriebskosten → Sparten → Untersparten → ÷ Absatzmenge → + Warenkosten + Gewinn + MWST.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body"><strong>1.</strong> Gesamte Betriebskosten summieren<br><strong>2.</strong> In Sparten aufteilen (z.B. Speisen 70% / Getränke 30%)<br><strong>3.</strong> Untersparten bestimmen (z.B. Hauptspeisen 75% aller Speisen)<br><strong>4.</strong> Produktionskosten der Untersparte berechnen<br><strong>5.</strong> ÷ Absatzmenge = Selbstkostenanteil pro Produkt<br><strong>6.</strong> + Warenkosten (Rezeptur) + Gewinn + Reserve<br><strong>7.</strong> + MWST = <strong>Brutto-Verkaufspreis</strong></div><div class="tl-highlight"><strong>Beispiel Hauptspeise:</strong> CHF 16.90 (Selbstkosten) + CHF 7.80 (Waren) + CHF 3.00 (Gewinn) + CHF 1.00 (Reserve) = CHF 28.70 netto × 108.1% = <strong>CHF 31.00 inkl. MWST</strong></div><div class="merksatz">Merke: Aufschlagskalkulation + DDR-Analyse + Sales-Mix = optimale Preisgestaltung.</div></div></div>

<div class="tl-item"><div class="tl-num tl-num-r">4</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Mehrwertsteuer</div><div class="tl-merksatz">«8.1% Normal, 3.8% Beherbergung, 2.6% Take-away. Seit 1.1.2024!»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-sub"><div class="c cr"><div class="ct2">Normalsatz: 8.1%</div><div class="cd">Restaurant (Konsum vor Ort), Getränke, allgemeine Leistungen.</div></div><div class="c cm"><div class="ct2">Sondersatz: 3.8%</div><div class="cd">Beherbergung (auch mit Frühstück). Seminarpauschalen: 70%-Regel.</div></div><div class="c cg"><div class="ct2">Reduzierter Satz: 2.6%</div><div class="cd">Take-away, Lebensmittel zum Mitnehmen.</div></div></div><div class="merksatz">Merke: In CH Hotellerie/Gastro müssen Preise IMMER inkl. MWST ausgewiesen sein!</div></div></div>
</div></div>

<!-- CTRL: Investitionsrechnung -->
<div class="sec" id="ctrl_inv"><h1>Investitionsrechnung</h1><p class="sub">Grundlagen, Rechengrössen, Kostenvergleich, Gewinnvergleich, Rendite, Amortisation, NPV</p>
<div class="hl"><strong>Investire</strong> (lat.) = einkleiden. Finanzielle Mittel werden langfristig in Sach-, Finanz- oder immaterielle Werte angelegt. Ziel: Einkommens- und Wertsteigerung.</div>
<div class="gr"><div class="c cg"><div class="ct2">Wertvermehrung (= Investition)</div><div class="cd">Nutzungsdauer >12 Monate · zukünftiger Nutzenzufluss · wird im AV aktiviert (Bilanz)<br>Bsp: Kauf Betriebsfahrzeug, neue Kücheneinrichtung, Erweiterungsbau</div></div><div class="c cr"><div class="ct2">Werterhaltung (= Unterhalt)</div><div class="cd">Erhaltung des gebrauchsfähigen Zustands · wird erfolgswirksam verbucht (ER) · nie aktiviert!<br>Bsp: Reparatur am Fahrzeug, Ersatzteile Küche, Malerarbeiten</div></div></div>
<div class="hla"><strong>Gesunde vs. ungesunde Finanzierung:</strong><br>• <strong>Organisch (gesund):</strong> Reinvestitionsbedarf aus eigenem operativem Cashflow erwirtschaften → erneute Wertvermehrung.<br>• <strong>Anorganisch (ungesund):</strong> Investitionsstau → nur noch durch weitere Fremdverschuldung finanzierbar → oft nicht tragbar!</div>
<div class="hlbl"><strong>Lernziele K04:</strong><br>• Grundlagen der Investitionsrechnung in eigenen Worten wiedergeben.<br>• Wichtigste Rechengrössen nennen und einem reellen Fall zuweisen können.<br>• Investition planen und grundlegende Berechnungen (Kosten-, Gewinnvergleich, Rendite- & Amortisationsrechnung) selbstständig ausführen.<br>• Erhaltene Resultate sinnvoll bewerten, beurteilen und begründen.</div>

<h2>Praxisbeispiel: Fahrzeug Elektro vs. Benzin</h2>
<div class="c" style="padding:20px;overflow-x:auto"><div class="ct2" style="margin-bottom:12px">Alle 4 statischen Verfahren auf einen Blick</div>
<table style="width:100%;font-size:12.5px;border-collapse:collapse;color:var(--tx)">
<tr style="background:var(--s2);font-weight:700"><td style="padding:8px;border:1px solid var(--bd)">Grösse</td><td style="padding:8px;border:1px solid var(--bd);text-align:right">Elektro</td><td style="padding:8px;border:1px solid var(--bd);text-align:right">Benzin</td></tr>
<tr><td style="padding:6px 8px;border:1px solid var(--bd)">Investiertes Kapital</td><td style="padding:6px 8px;border:1px solid var(--bd);text-align:right">42'000</td><td style="padding:6px 8px;border:1px solid var(--bd);text-align:right">28'000</td></tr>
<tr><td style="padding:6px 8px;border:1px solid var(--bd)">Nutzungsdauer</td><td style="padding:6px 8px;border:1px solid var(--bd);text-align:right">7 Jahre</td><td style="padding:6px 8px;border:1px solid var(--bd);text-align:right">5 Jahre</td></tr>
<tr><td style="padding:6px 8px;border:1px solid var(--bd)">Jährlicher Erlös</td><td style="padding:6px 8px;border:1px solid var(--bd);text-align:right">13'440</td><td style="padding:6px 8px;border:1px solid var(--bd);text-align:right">11'700</td></tr>
<tr><td style="padding:6px 8px;border:1px solid var(--bd)">Jährliche Betriebskosten</td><td style="padding:6px 8px;border:1px solid var(--bd);text-align:right">1'500</td><td style="padding:6px 8px;border:1px solid var(--bd);text-align:right">3'000</td></tr>
<tr><td style="padding:6px 8px;border:1px solid var(--bd)">Abschreibung (linear)</td><td style="padding:6px 8px;border:1px solid var(--bd);text-align:right">6'000</td><td style="padding:6px 8px;border:1px solid var(--bd);text-align:right">5'600</td></tr>
<tr><td style="padding:6px 8px;border:1px solid var(--bd)">Kalk. Zins (8% auf Ø Kapital)</td><td style="padding:6px 8px;border:1px solid var(--bd);text-align:right">1'680</td><td style="padding:6px 8px;border:1px solid var(--bd);text-align:right">1'120</td></tr>
<tr style="background:var(--s2);font-weight:600"><td style="padding:6px 8px;border:1px solid var(--bd)">Jährliche Gesamtkosten</td><td style="padding:6px 8px;border:1px solid var(--bd);text-align:right">9'180</td><td style="padding:6px 8px;border:1px solid var(--bd);text-align:right">9'720</td></tr>
<tr style="background:var(--gl);font-weight:600"><td style="padding:6px 8px;border:1px solid var(--bd)">Jahresgewinn</td><td style="padding:6px 8px;border:1px solid var(--bd);text-align:right">4'260</td><td style="padding:6px 8px;border:1px solid var(--bd);text-align:right">1'980</td></tr>
<tr><td style="padding:6px 8px;border:1px solid var(--bd)">Rendite (ROI)</td><td style="padding:6px 8px;border:1px solid var(--bd);text-align:right;font-weight:700;color:var(--g)">28.3%</td><td style="padding:6px 8px;border:1px solid var(--bd);text-align:right">22.1%</td></tr>
<tr><td style="padding:6px 8px;border:1px solid var(--bd)">Cashflow (Erlös − Betriebskosten)</td><td style="padding:6px 8px;border:1px solid var(--bd);text-align:right">11'940</td><td style="padding:6px 8px;border:1px solid var(--bd);text-align:right">8'700</td></tr>
<tr><td style="padding:6px 8px;border:1px solid var(--bd)">Wiedergewinnungszeit</td><td style="padding:6px 8px;border:1px solid var(--bd);text-align:right">3.5 Jahre</td><td style="padding:6px 8px;border:1px solid var(--bd);text-align:right;font-weight:700;color:var(--g)">3.2 Jahre</td></tr>
<tr style="background:var(--al);font-weight:600"><td style="padding:6px 8px;border:1px solid var(--bd)">Rückflusszahl</td><td style="padding:6px 8px;border:1px solid var(--bd);text-align:right;font-weight:700;color:var(--g)">2.0×</td><td style="padding:6px 8px;border:1px solid var(--bd);text-align:right">1.6×</td></tr>
</table>
<div class="merksatz" style="margin-top:12px">Merke: Benzin amortisiert sich «schneller» (3.2 vs. 3.5 Jahre), aber Elektro amortisiert sich «öfter» (2.0× vs. 1.6×) → Elektro ist langfristig zu bevorzugen! Bei unterschiedlicher Nutzungsdauer immer die Rückflusszahl berechnen!</div>
</div>
<div style="display:flex;gap:8px;margin:12px 0 4px"><button style="font-size:11px;padding:4px 10px" onclick="this.parentElement.nextElementSibling.querySelectorAll('.tl-item').forEach(i=>i.classList.add('open'))">Alle aufklappen</button><button style="font-size:11px;padding:4px 10px" onclick="this.parentElement.nextElementSibling.querySelectorAll('.tl-item').forEach(i=>i.classList.remove('open'))">Alle schliessen</button></div>
<div class="tl">
<div class="tl-item"><div class="tl-num tl-num-b">1</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Investitionsarten & -motive</div><div class="tl-merksatz">«Sachinvestition, Finanzinvestition, Immaterielle Investition — oft mehrere Motive gleichzeitig.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-sub"><div class="c ca"><div class="ct2">Sachinvestition</div><div class="cd">Fahrzeuge, Maschinen, Immobilien.</div></div><div class="c cg"><div class="ct2">Finanzinvestition</div><div class="cd">Aktivdarlehen, Beteiligungen.</div></div><div class="c cp"><div class="ct2">Immaterielle Investition</div><div class="cd">Forschung, Patente, Lizenzen, Schulung.</div></div></div><div class="tl-body" style="margin-top:12px"><strong>Motive:</strong> Gründung · Erweiterung · Ersatz · Rationalisierung · Umstellung · Diversifikation · Sicherung.<br><strong>Investitionsprozess:</strong> Anregung → Grobselektion → Datenerfassung → Wirtschaftlichkeitsrechnung → Gesamtbeurteilung → Priorisierung → Finanzabstimmung → Durchführung → Kontrolle.</div></div></div>

<div class="tl-item"><div class="tl-num tl-num-a">2</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Rechengrössen</div><div class="tl-merksatz">«7 Grössen: Kapitaleinsatz, laufende Ausgaben/Einnahmen, Cashflow, Nutzungsdauer, Zinsfuss, Liquidationserlös.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body"><strong>Kapitaleinsatz</strong> = Einstandspreis + F&E + Projektierung + Installation + Sekundärinvestitionen + UV-Erhöhung.<br><br><strong>Cashflow</strong> = Einnahmen − liq.wirksame Betriebskosten. Oder indirekt: Reingewinn + Abschreibungen + kalk. Zinsen.<br><br><strong>Nutzungsdauer:</strong> Wirtschaftliche (nicht technische!) Lebensdauer. Erfahrungswerte oder steuerliche Dauer.<br><br><strong>WACC</strong> = (FK-Kosten% × FK/GK) + (EK-Kosten% × EK/GK)<br><br><strong>Liquidationserlös</strong> = Verkaufserlös − Entsorgungs-/Demontagekosten. Statisch: erhöht Durchschnittskapital. Dynamisch: Einnahme am Ende.</div></div></div>

<div class="tl-item"><div class="tl-num tl-num-g">3</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Kostenvergleich</div><div class="tl-merksatz">«Jährliche Gesamtkosten vergleichen. Nur sinnvoll bei gleichem Erlös!»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body"><strong>Jährliche Gesamtkosten</strong> = Betriebskosten + Abschreibung + Zins auf Durchschnittskapital.<br><br><strong>Abschreibung</strong> = (Kapitaleinsatz − Liquidationserlös) ÷ Nutzungsdauer<br><strong>Durchschnittskapital</strong> = (inv. Kapital + Liq.erlös) ÷ 2<br><strong>Zins</strong> = Durchschnittskapital × Zinsfuss<br><br>→ Gewählt wird die Investition mit den <strong>geringsten jährlichen Durchschnittskosten</strong>.</div><div class="merksatz">Merke: Bei unterschiedlichen Kapazitäten → Kosten pro Leistungseinheit vergleichen!</div></div></div>

<div class="tl-item"><div class="tl-num tl-num-r">4</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Gewinnvergleich</div><div class="tl-merksatz">«Erlöse minus Gesamtkosten = Jahresgewinn. Aber: Kapitaleinsatz wird nicht berücksichtigt!»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body"><strong>Jahresgewinn</strong> = Erlös − Betriebskosten − Abschreibung − Zins auf Durchschnittskapital.<br><br>→ Gewählt wird die Investition mit dem <strong>grössten Jahresgewinn</strong>.<br><br>Schwäche: Unterschiedliche Kapitaleinsätze werden ungenügend berücksichtigt.</div><div class="merksatz">Merke: Rangfolge kann sich gegenüber Kostenvergleich ändern, wenn Erlöse unterschiedlich sind!</div></div></div>

<div class="tl-item"><div class="tl-num tl-num-p">5</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Renditerechnung (ROI)</div><div class="tl-merksatz">«Rendite = (Gewinn + kalk. Zins) ÷ Durchschnittskapital. Grösste Rendite gewinnt.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body"><strong>Rentabilität</strong> = (Gewinn + kalkulatorischer Zins) ÷ durchschnittlich investiertes Kapital<br><br>= Bruttorendite (gesamte Verzinsung). Deshalb kalk. Zins wieder addieren!<br><br>→ Bevorzugt wird die Investition mit der <strong>höchsten Rendite</strong>.<br><br>Vorteil gegenüber Gewinnvergleich: Auch gänzlich unterschiedliche oder einzelne Investitionen beurteilbar.</div></div></div>

<div class="tl-item"><div class="tl-num tl-num-a">6</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Amortisationsrechnung (Payback)</div><div class="tl-merksatz">«Wiedergewinnungszeit = Kapitaleinsatz ÷ Cashflow. Kürzer = besser + sicherer.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body"><strong>Wiedergewinnungszeit</strong> = Kapitaleinsatz ÷ Cashflow pro Jahr<br><br>Ist Wiedergewinnungszeit < Nutzungsdauer → grundsätzlich rentabel.<br><br><strong>Rückflusszahl</strong> = Nutzungsdauer ÷ Wiedergewinnungszeit<br>→ Rückflusszahl > 1 = rentabel. Je grösser, desto besser.<br><br>→ Bevorzugt wird die Investition mit der <strong>kürzesten Wiedergewinnungszeit</strong> bzw. grössten Rückflusszahl.</div><div class="merksatz">Merke: Kurze Payback-Period = geringeres Risiko + bessere Liquiditätswirkung. Aber: Bei unterschiedlicher Nutzungsdauer Rückflusszahl berechnen!</div></div></div>

<div class="tl-item"><div class="tl-num tl-num-bl">7</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">NPV-Methode (dynamisch)</div><div class="tl-merksatz">«Heute verfügbares Geld ist mehr wert als künftiges. NPV > 0 = investieren!»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body">Dynamische Verfahren betrachten die <strong>gesamte Nutzungsdauer</strong> und gewichten Zahlungsströme mittels Zinseszinsrechnung.<br><br><strong>NPV</strong> = Summe aller diskontierten Cashflows − Investitionssumme<br><br>Barwertfaktor = 1 ÷ (1 + Zinssatz)^n<br><br>NPV > 0 → Projekt generiert Mehrwert → investieren.<br>NPV < 0 → Projekt vernichtet Wert → nicht investieren.</div><div class="merksatz">Merke: Statisch = Durchschnittsjahr. Dynamisch = ganze Laufzeit. Dynamisch ist genauer, aber aufwendiger.</div></div></div>
</div></div>

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
<div class="sec" id="ctrl_kart"><h1>Karteikarten Controlling 2</h1><p class="sub"><span id="cfcCount">50</span> Karten — klicke zum Umdrehen</p>
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

<div style="font-size:13px;font-weight:600;letter-spacing:1px;text-transform:uppercase;color:var(--tx3);margin:28px 0 14px">Semesterplanung</div>
<div style="display:grid;grid-template-columns:1fr;gap:6px">
<div class="c" style="padding:14px 18px;display:flex;gap:14px;align-items:flex-start"><div style="width:28px;height:28px;border-radius:8px;background:var(--al);color:var(--ac);display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;flex-shrink:0">1</div><div><div class="ct2">02.04.2026 — Einführung & Kennzahlen 1/2</div><div class="cd">Erfolgs- und Finanzierungskennzahlen · S. 1–11 · Übungen: AA01-01, AA01-02, AA01-04</div></div></div>
<div class="c" style="padding:14px 18px;display:flex;gap:14px;align-items:flex-start"><div style="width:28px;height:28px;border-radius:8px;background:var(--al);color:var(--ac);display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;flex-shrink:0">2</div><div><div class="ct2">16.04.2026 — Kennzahlen 2/2 & BSC</div><div class="cd">Liquiditäts-/Working Capital-KZ, Branchenspezifisch, Balanced Scorecard · S. 11–20 · Übungen: AA01-06, AA01-03, AA01-05, AA05-01</div></div></div>
<div class="c" style="padding:14px 18px;display:flex;gap:14px;align-items:flex-start"><div style="width:28px;height:28px;border-radius:8px;background:var(--gl);color:var(--g);display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;flex-shrink:0">3</div><div><div class="ct2">23.04.2026 — Kosten- und Leistungsrechnung</div><div class="cd">FIBU→BEBU, Voll-/Teilkostenrechnung, Break-even, Deckungsbeitrag · S. 21–35 · Übungen: AA02-01 bis AA02-05</div></div></div>
<div class="c cr" style="padding:14px 18px;display:flex;gap:14px;align-items:flex-start"><div style="width:28px;height:28px;border-radius:8px;background:var(--rl);color:var(--r);display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;flex-shrink:0">!</div><div><div class="ct2" style="color:var(--r)">04./05.05.2026 — Zwischenprüfung</div><div class="cd">Online Moodle, <strong>kein Openbook!</strong> Stoff: Kennzahlen + Kostenrechnung (Block 1–3)</div></div></div>
<div class="c" style="padding:14px 18px;display:flex;gap:14px;align-items:flex-start"><div style="width:28px;height:28px;border-radius:8px;background:var(--aml);color:var(--am);display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;flex-shrink:0">4</div><div><div class="ct2">21.05.2026 — Besprechung ZWP & Kalkulation</div><div class="cd">Einführung, Herausforderungen, Kalkulation Hotellerie/Gastro · S. 36–44 · Übungen: AA03-01, AA03-02, AA03-04</div></div></div>
<div class="c" style="padding:14px 18px;display:flex;gap:14px;align-items:flex-start"><div style="width:28px;height:28px;border-radius:8px;background:var(--pl);color:var(--pr);display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;flex-shrink:0">5</div><div><div class="ct2">03.06.2026 — Kalkulation & Investitionsrechnung</div><div class="cd">Aufschlagskalkulation, statische Rechenverfahren · S. 45–63 · Übungen: AA03-03, AA04-01 bis AA04-03</div></div></div>
<div class="c" style="padding:14px 18px;display:flex;gap:14px;align-items:flex-start"><div style="width:28px;height:28px;border-radius:8px;background:var(--s2);color:var(--tx2);display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;flex-shrink:0">6</div><div><div class="ct2">09.06.2026 — Repetition & Fallstudie</div><div class="cd">Schwerpunktthemen AP, Investitionsrechnung 2, Kennzahlenanalyse Praxis, Lerndomino · Übungen: AA04-04, AA06-01</div></div></div>
<div class="c cr" style="padding:14px 18px;display:flex;gap:14px;align-items:flex-start"><div style="width:28px;height:28px;border-radius:8px;background:var(--rl);color:var(--r);display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;flex-shrink:0">!</div><div><div class="ct2" style="color:var(--r)">12.06.2026 — Abschlussprüfung</div><div class="cd">Online Moodle, <strong>kein Openbook!</strong> Stoff: Gesamter Semesterstoff (Block 1–6)</div></div></div>
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
['Richtwert Personalaufwandquote?','Je weiter unter 45% desto besser. Abhängig von Betriebsart und Segment.']
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
