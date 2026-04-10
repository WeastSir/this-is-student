// ===== KURS: REVENUE MANAGEMENT 2-4 =====
// Auto-generated module for This Is Student
(function() {

const courseConfig = {
  id: 'rm',
  name: 'Revenue Management 2-4',
  pages: ['rm','rm_kap1','rm_kap2','rm_kap3','rm_mind','rm_kart','rm_quiz','rm_glossar'],
  subNav: [
    {s:'rm',l:'Übersicht'},
    {s:'rm_kap1',l:'Strategisches RM'},
    {s:'rm_kap2',l:'Operatives RM'},
    {s:'rm_kap3',l:'Total RM'},
    {s:'rm_mind',l:'Zusammenfassung'},
    {s:'rm_kart',l:'Karten'},
    {s:'rm_quiz',l:'Quiz'},
    {s:'rm_glossar',l:'Glossar'}
  ],
  navButton: '<button class="nl nl-main" data-s="rm" onclick="go(\'rm\')" style="display:none">Revenue Mgmt</button>'
};

const courseHTML = `

<!-- RM HOME / ÜBERSICHT -->
<div class="sec" id="rm">
<div style="border-radius:24px;padding:36px 32px;margin-bottom:32px;background:linear-gradient(135deg,rgba(232,168,56,.08),rgba(56,182,232,.06));border:1px solid var(--bd);position:relative;overflow:hidden">
<div style="position:absolute;top:-40px;right:-40px;width:160px;height:160px;border-radius:50%;background:linear-gradient(135deg,rgba(232,168,56,.1),rgba(56,182,232,.08))"></div>
<div style="position:relative;z-index:1">
<div style="font-size:12px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:var(--am);margin-bottom:8px">Semester 5 · BWL</div>
<h1 style="font-size:32px;letter-spacing:-.6px;margin-bottom:8px">Revenue Management 2–4</h1>
<p style="font-size:15px;color:var(--tx2);margin-bottom:0">Dozent: Andreas Klar · Strategisches, Operatives &amp; Total RM</p>
</div>
</div>

<div style="font-size:13px;font-weight:600;letter-spacing:1px;text-transform:uppercase;color:var(--tx3);margin-bottom:14px">Theorie · 3 Module</div>
<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:12px;margin-bottom:36px">
<div class="c ck" onclick="go('rm_kap1')" style="padding:20px 22px;display:flex;gap:14px;align-items:flex-start">
<div style="width:32px;height:32px;border-radius:10px;background:var(--aml);color:var(--am);display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0">1</div>
<div><div class="ct2">Strategisches RM</div><div class="cd">Zielsetzung, CompSet, Benchmarking, PLC, Preisstrategie</div></div>
</div>
<div class="c ck" onclick="go('rm_kap2')" style="padding:20px 22px;display:flex;gap:14px;align-items:flex-start">
<div style="width:32px;height:32px;border-radius:10px;background:var(--gl);color:var(--g);display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0">2</div>
<div><div class="ct2">Operatives RM</div><div class="cd">Organisation, RM-Prozess, Segmentierung, Forecast</div></div>
</div>
<div class="c ck" onclick="go('rm_kap3')" style="padding:20px 22px;display:flex;gap:14px;align-items:flex-start">
<div style="width:32px;height:32px;border-radius:10px;background:var(--pl);color:var(--pr);display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0">3</div>
<div><div class="ct2">Total Revenue Mgmt</div><div class="cd">RevPATI, RevPASH, RevPASQM, Displacement, Dynamische Planung</div></div>
</div>
</div>

<div style="font-size:13px;font-weight:600;letter-spacing:1px;text-transform:uppercase;color:var(--tx3);margin-bottom:14px">Lerntools</div>
<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:12px">
<div class="c ck" onclick="go('rm_mind')" style="text-align:center;padding:24px 16px">
<div style="font-size:24px;font-weight:700;background:var(--grad);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;margin-bottom:6px">3</div>
<div class="ct2">Zusammenfassung</div><div class="cd">Mindmaps &amp; Formeln</div>
</div>
<div class="c ck" onclick="go('rm_kart')" style="text-align:center;padding:24px 16px">
<div id="ltRmCards" style="font-size:24px;font-weight:700;background:var(--grad);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;margin-bottom:6px">45</div>
<div class="ct2">Karteikarten</div><div class="cd">Klicken &amp; repetieren</div>
</div>
<div class="c ck" onclick="go('rm_quiz')" style="text-align:center;padding:24px 16px">
<div id="ltRmQuiz" style="font-size:24px;font-weight:700;background:var(--grad);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;margin-bottom:6px">45</div>
<div class="ct2">Quiz</div><div class="cd">Mit Lernfortschritt</div>
</div>
<div class="c ck" onclick="go('rm_glossar')" style="text-align:center;padding:24px 16px">
<div style="font-size:24px;font-weight:700;background:var(--grad);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;margin-bottom:6px">A–Z</div>
<div class="ct2">Glossar</div><div class="cd">Begriffe &amp; Formeln</div>
</div>
</div>
</div>

<!-- KAPITEL 1: STRATEGISCHES RM -->
<div class="sec" id="rm_kap1"><h1>Strategisches Revenue Management</h1><p class="sub">Modul RYM 02 — Zielsetzung, CompSet, Benchmarking, PLC, Preisstrategie</p>
<div class="hl">Gute strategische Ziele sind <strong>in Relation zur Marktsituation und den Mitbewerbern</strong> zu definieren. Der reine Vorjahresvergleich ist unbrauchbar.</div>
<div style="display:flex;gap:8px;margin:12px 0 4px"><button style="font-size:11px;padding:4px 10px" onclick="this.parentElement.nextElementSibling.querySelectorAll('.tl-item').forEach(i=>i.classList.add('open'))">Alle aufklappen</button><button style="font-size:11px;padding:4px 10px" onclick="this.parentElement.nextElementSibling.querySelectorAll('.tl-item').forEach(i=>i.classList.remove('open'))">Alle schliessen</button></div>
<div class="tl">

<div class="tl-item"><div class="tl-num tl-num-b">1</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Strategische Zielsetzung</div><div class="tl-merksatz">«Ziele immer relativ zum Markt setzen — nie nur Vorjahresvergleich!»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body">Ein Ziel ist ein erstrebenswert angestrebter Zustand. In Unternehmen bilden Ziele eine <strong>Zielhierarchie</strong> (Mittel-Zweck-Beziehungen). Zielkonflikte entstehen, wenn sich Ziele gegenseitig ausschliessen. Das Hauptproblem in der Hotellerie: Ziele werden ohne Markt-/Konkurrenzbezug definiert. Gängige Messzahlen liefert das Benchmarking, z.B. der <strong>RGI</strong> (Revenue Generation Index).</div><div class="merksatz">Merke: RGI als Zielgrösse nutzen — unabhängig davon, ob der Gesamtmarkt wächst oder schrumpft.</div></div></div>

<div class="tl-item"><div class="tl-num tl-num-b">2</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Competitive Set (Mitbewerbsanalyse)</div><div class="tl-merksatz">«Mind. 4 Hotels, die um dieselben Gastnächte konkurrieren.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body">Das CompSet besteht aus mind. <strong>4 vergleichbaren Betrieben</strong>. Massgeblich: direkte Konkurrenz um Gastnächte. In wettbewerbsstarken Märkten auch je ein Hotel der höheren/niedrigeren Kategorie einbeziehen. Analyse nach: <strong>Preis-Positionierung</strong> und <strong>Online-Reviews</strong> → Preis-Bewertungsmatrix. Besonders problematisch: Hotels die <strong>günstiger UND besser bewertet</strong> sind (= Handlungsbedarf!).</div><div class="tl-sub"><div class="c ca"><div class="ct2">Faktoren zur CompSet-Definition</div><div class="cd">Lage, Grösse, Positionierung, Bewertungen, Preislage, Stil, Segmentation, Hotelkette, Sterne</div></div><div class="c cr"><div class="ct2">Betrügerische Aktivitäten</div><div class="cd">Selbst geschriebene Bewertungen sind ausdrücklich ausgeschlossen!</div></div></div><div class="merksatz">Merke: Es besteht ein direkter Zusammenhang zwischen Online-Reviews, Positionierung und Preis.</div></div></div>

<div class="tl-item"><div class="tl-num tl-num-a">3</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">6 Preispositionierungs-Strategien</div><div class="tl-merksatz">«Prüfung: 9 Punkte! Name + Erklärung + Beispiel pro Strategie.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body">Nach Marn, Roegner und Zawada gibt es 6 Grundstrategien der Preispositionierung gegenüber der Konkurrenz:</div><div class="tl-sub"><div class="c ca"><div class="ct2">1. Skimming</div><div class="cd"><strong>ÜBER</strong> der Konkurrenz. Wann: Marktführer, Hochsaison, Nachfrageüberhang. Bsp: Konkurrenz EUR 79 → ich EUR 89–99.</div></div><div class="c cg"><div class="ct2">2. Penetration</div><div class="cd"><strong>UNTER</strong> der Konkurrenz. Wann: Neueröffnung, neuer Markt, 2–3 Monate. Bsp: Eröffnungs-Special als günstigstes Hotel.</div></div><div class="c cm"><div class="ct2">3. Surrounding</div><div class="cd">Ein Produkt <strong>günstiger</strong>, eines <strong>teurer</strong>. Wann: Premium will Image halten. Bsp: Room CHF 69 / Suite CHF 99 / Konkurrenz CHF 79.</div></div><div class="c cp"><div class="ct2">4. Matching</div><div class="cd"><strong>Exakt gleicher Preis</strong>, besseres Produkt. Nur bei besserer Bewertung! Bsp: Sarain CHF 235 = Bestzeit CHF 235.</div></div><div class="c ca"><div class="ct2">5. Undercutting</div><div class="cd"><strong>Knapp unter</strong> Konkurrenz, gleiche Qualität. Bsp: CHF 75 vs. CHF 79. Auch via Non-Refundable Rate möglich.</div></div><div class="c cr"><div class="ct2">6. «Hidden» — KEINE Strategie!</div><div class="cd">Fehlen einer klaren Positionierung. Porter: «Stuck in the middle». <strong>VERMEIDEN!</strong></div></div></div></div></div>

<div class="tl-item"><div class="tl-num tl-num-g">4</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Kennzahlen im Benchmarking</div><div class="tl-merksatz">«Market Shares (%) vs. Indices (100=Durchschnitt). ARI × MPI ≠ RGI!»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body"><strong>Zwei Vergleichsgruppen:</strong> CompSet (nur Mitbewerber) vs. <strong>Market</strong> (CompSet + mein Hotel). Prüfung rechnet IMMER mit Market!<br><br><strong>Market Shares</strong> (Ergebnis in %):<br>• <strong>FMS</strong> = Zimmer Hotel / Zimmer Market × 100 (Kapazitätsanteil)<br>• <strong>AMS</strong> = Sold RN Hotel / Sold RN Market × 100 (Nachfrageanteil)<br>• <strong>RMS</strong> = Revenue Hotel / Revenue Market × 100 (Umsatzanteil)<br><br><strong>Indices</strong> (100 = Marktdurchschnitt):<br>• <strong>MPI</strong> = Occ% Hotel / Occ% Market × 100 (voller oder leerer?)<br>• <strong>ARI</strong> = ADR Hotel / ADR Market × 100 (teurer oder günstiger?)<br>• <strong>RGI</strong> = RevPAR Hotel / RevPAR Market × 100 (<strong>WICHTIGSTE!</strong> Gesamtperformance)</div><div class="tl-sub"><div class="c cg"><div class="ct2">Über 100 = besser als Markt</div><div class="cd">Weiter so! Das Hotel performt überdurchschnittlich.</div></div><div class="c cr"><div class="ct2">Unter 100 = schlechter als Markt</div><div class="cd">Handlungsbedarf! Underperforming gegenüber Konkurrenz.</div></div><div class="c cm"><div class="ct2">Kombination: RGI hoch + ARI tief + MPI hoch</div><div class="cd">= Zu günstig! Preis erhöhen. Auch mit weniger Gästen steigt der RevPAR.</div></div><div class="c cp"><div class="ct2">Kombination: RGI tief + ARI hoch + MPI tief</div><div class="cd">= Zu teuer! Preis senken, um mehr Gäste zu gewinnen.</div></div></div><div class="hlr"><strong>ACHTUNG:</strong> ARI × MPI ≠ RGI! Die Indices sind NICHT multiplikativ verknüpft! Prüfung: IMMER mit Market rechnen, IMMER Lösungsweg aufschreiben!</div></div></div>

<div class="tl-item"><div class="tl-num tl-num-r">5</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Profitability Matrix</div><div class="tl-merksatz">«RevPAR-Veränderung vs. Rate-Veränderung — 4 Quadranten.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body">Die Profitability Matrix (Osbourne, Weber, Seillier 2012) stellt die Veränderung im RevPAR zum Verhältnis der Veränderung in der Rate dar. Reporting-Tools: Fairmas und STR (kartellrechtlich neutral).</div><div class="tl-sub"><div class="c cg"><div class="ct2">RevPAR ↑ &amp; Rate ↑</div><div class="cd">Ideales Wachstum — mehr Umsatz bei höheren Preisen.</div></div><div class="c cm"><div class="ct2">RevPAR ↑ &amp; Rate ↓</div><div class="cd">Volumen-Wachstum — mehr Auslastung, tiefere Preise.</div></div><div class="c cr"><div class="ct2">RevPAR ↓ &amp; Rate ↑</div><div class="cd">«Pricing out» — zu hohe Preise vertreiben Gäste.</div></div><div class="c cr"><div class="ct2">RevPAR ↓ &amp; Rate ↓</div><div class="cd">Krise — alles sinkt. Dringender Handlungsbedarf.</div></div></div></div></div>

<div class="tl-item"><div class="tl-num tl-num-p">6</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Product Life Cycle (PLC)</div><div class="tl-merksatz">«4 Phasen mit typischen Index-Werten — Immer neue Produkte in der Pipeline!»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body">Der Produktlebenszyklus (Vernon 1966, Hirsch 1967) unterteilt das Leben eines Produkts in 4 Phasen:</div><div class="tl-sub"><div class="c ca"><div class="ct2">Introduction (ARI 0.72 / MPI 0.84 / RGI 0.78)</div><div class="cd">«Heads in beds» aufbauen. Penetration, Eröffnungs-Specials. Noch keine Gewinne. Endet beim Break-even.</div></div><div class="c cg"><div class="ct2">Growth (ARI 0.89 / MPI 1.01 / RGI 0.96)</div><div class="cd">Erst Occ% steigern, dann ADR steigern. Erstmals Gewinne. Konkurrenz wird aufmerksam (Free-Rider).</div></div><div class="c cm"><div class="ct2">Maturity (ARI 1.12 / MPI 1.09 / RGI 1.11)</div><div class="cd">Längste &amp; profitabelste Phase. Maximize RevPAR. Hotels: Kapazität erhöhen oder Produkt upgraden.</div></div><div class="c cr"><div class="ct2">Decline (ARI 1.21 / MPI 0.67 / RGI 0.78)</div><div class="cd">Markt schrumpft. Optionen: Relaunch oder Exit. Hotels: Investitionsstau vermeiden!</div></div></div><div class="merksatz">Merke: Immer neue Produkte in der Pipeline haben um aktuell zu bleiben!</div></div></div>

<div class="tl-item"><div class="tl-num tl-num-a">7</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Progressive vs. regressive Preisstrategie</div><div class="tl-merksatz">«Progressiv = Preis steigt zur Anreise. Regressiv = Last-Minute. Mickey Mouse = beides!»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body">Bezugsgrösse: <strong>Lead Time</strong> = Zeitspanne bis Anreise.</div><div class="tl-sub"><div class="c cg"><div class="ct2">Progressive Preisstrategie</div><div class="cd">Preis <strong>steigt</strong> je näher die Anreise. Bsp: Fluggesellschaften. Ursachen: hohe Nachfrage, knappe Kapazität, preisunelastische Spätbucher.</div></div><div class="c cr"><div class="ct2">Regressive Preisstrategie</div><div class="cd">Preis <strong>sinkt</strong> je näher die Anreise. Bsp: Last-Minute. Ursachen: schwache Nachfrage, verderbliche Ware.</div></div><div class="c cm"><div class="ct2">Mickey-Mouse-Strategie (Marongiu 2017)</div><div class="cd">Opportunistisch «mal höher und mal tiefer» — agil und reaktiv, abhängig von eigenem Hotel und CompSet.</div></div></div></div></div>

</div></div>

<!-- KAPITEL 2: OPERATIVES RM -->
<div class="sec" id="rm_kap2"><h1>Operatives Revenue Management</h1><p class="sub">Modul RYM 03 — Organisation, RM-Prozess, Segmentierung, Forecast</p>
<div class="hl">Revenue Management folgt einem <strong>stets wiederkehrenden Kreislauf</strong>: Forecast → Optimize → Control → Monitor → 🔁</div>
<div style="display:flex;gap:8px;margin:12px 0 4px"><button style="font-size:11px;padding:4px 10px" onclick="this.parentElement.nextElementSibling.querySelectorAll('.tl-item').forEach(i=>i.classList.add('open'))">Alle aufklappen</button><button style="font-size:11px;padding:4px 10px" onclick="this.parentElement.nextElementSibling.querySelectorAll('.tl-item').forEach(i=>i.classList.remove('open'))">Alle schliessen</button></div>
<div class="tl">

<div class="tl-item"><div class="tl-num tl-num-b">1</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Organisation &amp; Kompetenzen</div><div class="tl-merksatz">«Sales und RM auf Augenhöhe — klare Eskalationsstufe bei Konflikten.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body">Grösster Konflikt: zwischen <strong>Sales</strong> und <strong>Revenue Management</strong>. Sales ist RM vorgesetzt → Verträge mit zu geringer Wertschöpfung. RM ist Sales vorgesetzt → zu wenig Rücksicht auf Firmenkunden.<br><br><strong>Ideale Struktur:</strong> Gleichstellung, klare Eskalation (z.B. Business Development), RM hat Veto-Recht bei grossen Verträgen, komplementäre Ziele. Moderne Entwicklung: Abteilung «Commercial» (Sales + Marketing + RM + eCommerce).</div></div></div>

<div class="tl-item"><div class="tl-num tl-num-g">2</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Revenue-Management-Prozess</div><div class="tl-merksatz">«Kreislauf: Forecast → Optimize → Control → Monitor → 🔁»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body">Drei Ziele: <strong>Kontinuierliche Applikation</strong>, <strong>personelle Unabhängigkeit</strong>, <strong>kontinuierliche Verbesserung</strong>.<br><br><strong>1. Forecast:</strong> Endbuchungsstand pro Anreisedatum, Segment und Aufenthaltsdauer abschätzen.<br><strong>2. Optimize:</strong> Verbleibende Nachfrage vs. verfügbare Zimmer.<br><strong>3. Control:</strong> Restriktionen (MinLOS, CTA, CTD), Overbooking Factor, BAR anpassen.<br><strong>4. Monitor:</strong> Erfolg messen, Erfahrungen in zukünftige Zyklen übernehmen. Wash-Factor beachten!</div><div class="hlr"><strong>GIGA — Garbage In, Garbage Out!</strong> Ohne korrekte Dateneingabe funktioniert RM nicht.</div><div class="merksatz">New School: Forecast Accuracy dem operativen Ergebnis unterordnen.</div></div></div>

<div class="tl-item"><div class="tl-num tl-num-a">3</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">RM-Aufgaben: Täglich, Wöchentlich, Monatlich, Jährlich</div><div class="tl-merksatz">«RM-Arbeiten MORGENS als Erstes — sonst 50% Potenzial verloren!»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-sub"><div class="c ca"><div class="ct2">Täglich</div><div class="cd">Analyse Vortag + kommende 7 Tage, Restriktionen, Verfügbarkeit, Buchungskanäle. <strong>Morgens als Erstes!</strong></div></div><div class="c cg"><div class="ct2">Wöchentlich: Revenue Meeting</div><div class="cd">30–45 min: OTB, Pickup, Konkurrenzpreise (Rate Shopper), Forecast, Entscheidungen. Kurzes Protokoll.</div></div><div class="c cm"><div class="ct2">Monatlich</div><div class="cd">Benchmark (Indizes), Budgetvergleich, Forecast-Accuracy. Rolling Budget: Erkenntnisse → Folgejahr.</div></div><div class="c cp"><div class="ct2">Jährlich</div><div class="cd">RM-Strategie überarbeiten: Konjunktur, Konkurrenz, Nachfrage, Preisstrategie, Business-Mix, AGBs.</div></div></div><div class="merksatz">Agieren anstatt reagieren! Tägliche Nachfrageanalyse als Basis für Massnahmen.</div></div></div>

<div class="tl-item"><div class="tl-num tl-num-r">4</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Market Segmentation</div><div class="tl-merksatz">«Eindeutig, jeder Gast genau einem Segment — 4 Hauptsegmente.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body">Grundsätze: Segmentierung <strong>eindeutig</strong>, jeder Gast <strong>ausschliesslich einem</strong> Segment. Klassische 2-stufige Hierarchie:</div><div class="tl-sub"><div class="c ca"><div class="ct2">Leisure Individual</div><div class="cd">Feriengäste, einzeln buchend. Hohe Lead Time, preissensitiv, flexible Daten.</div></div><div class="c cg"><div class="ct2">Corporate/Business Individual</div><div class="cd">Geschäftsreisende. Kurze Lead Time, weniger preissensitiv, fixe Daten.</div></div><div class="c cm"><div class="ct2">Leisure Groups</div><div class="cd">Reisegruppen, Tour Operators. Lange Lead Time, tiefe Raten.</div></div><div class="c cp"><div class="ct2">Business Groups (MICE)</div><div class="cd">Meetings, Incentives, Conventions. Zusatzumsatz F&amp;B + Technik.</div></div></div><div class="merksatz">Plus Segment «Others» als Sammelbecken. Jedes Segment hat eigenes Buchungsverhalten (Lead Time, CXL%).</div></div></div>

<div class="tl-item"><div class="tl-num tl-num-p">5</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Forecast — Drei Methoden</div><div class="tl-merksatz">«Historisch, Advanced (linear), Kombiniert (PULY / %Dev) — alle rechnen können!»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body"><strong>Kennzahlen:</strong> OTB (Vorbuchungsstand), Pickup = OTB(heute) – OTB(gestern), Lead Time = Anreise – Buchung.</div><div class="tl-sub"><div class="c ca"><div class="ct2">Historische Methode</div><div class="cd">FC = (RN(Y-1) + RN(Y-2) + ...) / n. «Was letzes Jahr passiert ist, passiert wieder.» Reagiert nicht auf Marktänderungen.</div></div><div class="c cg"><div class="ct2">Advanced Methode (Linear)</div><div class="cd">FC = OTB + (∅ PU/Tag × verbleibende Tage). Berücksichtigt aktuelle Buchungsdynamik.</div></div><div class="c cp"><div class="ct2">Kombiniert: PULY</div><div class="cd">FC = OTB + PU(Last Year). Kombiniert aktuelle OTB-Stände mit Vorjahres-Pickup.</div></div><div class="c cp"><div class="ct2">Kombiniert: % Deviation</div><div class="cd">FC = Actual(LY) × (OTB / OTB(LY)). Zeigt in Krisenzeiten bessere Ergebnisse.</div></div></div><div class="hlr"><strong>Constrained</strong> = max. Zimmerzahl beachten. <strong>Unconstrained</strong> = theoretische Nachfrage, auch über Kapazität hinaus.</div></div></div>

</div></div>

<!-- KAPITEL 3: TOTAL RM -->
<div class="sec" id="rm_kap3"><h1>Total Revenue Management</h1><p class="sub">Modul RYM 04 — RevPATI, F&amp;B, Function Space, Displacement, Dynamische Planung</p>
<div class="hl">Total RM weitet die bekannten Ansätze auf <strong>alle Leistungsbereiche</strong> aus. Grundmodell: <strong>RevPATI</strong> = Umsatz / Gesamtkapazität.</div>
<div style="display:flex;gap:8px;margin:12px 0 4px"><button style="font-size:11px;padding:4px 10px" onclick="this.parentElement.nextElementSibling.querySelectorAll('.tl-item').forEach(i=>i.classList.add('open'))">Alle aufklappen</button><button style="font-size:11px;padding:4px 10px" onclick="this.parentElement.nextElementSibling.querySelectorAll('.tl-item').forEach(i=>i.classList.remove('open'))">Alle schliessen</button></div>
<div class="tl">

<div class="tl-item"><div class="tl-num tl-num-b">1</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">RevPATI — Basis-Ansatz</div><div class="tl-merksatz">«Revenue Per Available Time-based Inventory Unit — für alle Profit Center.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body">Zwei Berechnungswege: <strong>(1)</strong> Umsatz / Gesamtkapazität. <strong>(2)</strong> ∅ Preis × Auslastung (%). Deckungsbeitrag = RevPATI – variable Kosten. Break-even = Fixkosten / Deckungsbeitrag.</div><div class="tl-sub"><div class="c ca"><div class="ct2">RevPAR (Rooms)</div><div class="cd">Room Revenue / Available Rooms. Einheit: Zimmer pro Nacht.</div></div><div class="c cg"><div class="ct2">RevPASH (F&amp;B)</div><div class="cd">F&amp;B Revenue / (Seats × Hours). Einheit: Sitzplatz pro Stunde.</div></div><div class="c cm"><div class="ct2">RevPASQM (Events/Fläche)</div><div class="cd">Event Revenue / Available m². Präziseste Kennzahl bei variierenden Raumgrössen.</div></div><div class="c cp"><div class="ct2">RevPAMR / RevPATH</div><div class="cd">Meeting Rooms / Treatment Hours. RevPAMR nur bei identischen Raumgrössen aussagekräftig.</div></div></div></div></div>

<div class="tl-item"><div class="tl-num tl-num-g">2</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">F&amp;B Revenue Management</div><div class="tl-merksatz">«Ein Restaurant verkauft Sitzplätze pro Stunde — RevPASH!»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body">Nach Kimes: Restaurant verkauft «Seats per Hour». RevPASH = Umsatz / (Plätze × Stunden). Massnahmen: Duration Management (Reservationsregeln, Speisekartenaufbau) und Demand Based Pricing (Happy Hour, Mittagskarte, Servicezeiten, Tagesempfehlung).</div><div class="hla"><strong>Rechenbeispiel:</strong> 40 Plätze, 8h geöffnet, CHF 3'200 Umsatz → RevPASH = 3'200 / 320 = <strong>CHF 10.00</strong></div></div></div>

<div class="tl-item"><div class="tl-num tl-num-a">3</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Displacement-Analyse</div><div class="tl-merksatz">«Group Value vs. Displacement Cost — Gruppe nur annehmen wenn GV > DC!»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body"><strong>Vorgehen:</strong> (1) Group Value berechnen: Rooms × (ADR – Room Cost) + Additional Revenue – Expenses. (2) Displacement Cost berechnen: Displaced Rooms × (ADR ind. – Room Cost) + entgangene Umsätze. (3) Vergleichen: GV > DC → annehmen.<br><br><strong>Displaced Rooms</strong> = Group Rooms – freie Zimmer (Inventory – Forecast).</div><div class="hla"><strong>Rechenbeispiel Hotel West:</strong> 110 EZ, FC 85% = 93, OTB 54, ADR FC CHF 110. Gruppe: 60 Pers., ADR CHF 80. → Freie Zi: 110-93=17 → Displaced: 60-17=43. Group Value CHF 6'546 > Displacement Cost CHF 4'300 → <strong>ANNEHMEN ✓</strong></div></div></div>

<div class="tl-item"><div class="tl-num tl-num-r">4</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Function Space RM</div><div class="tl-merksatz">«RevPASQM ist die präzisere Kennzahl — Demand Based Pricing im Kommen.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body">Zwei Kennzahlen: <strong>RevPASQM</strong> (pro m²) und <strong>RevPAMR</strong> (pro Raum). Demand Based Pricing: Alternativdatum (nachfrageschwache Tage), Randzeiten (Wochenende vergünstigt), Volumenbasiert (sinkende Pauschale).</div><div class="hla"><strong>Rechenbeispiel:</strong> 8 Räume × 50 m² = 400 m², 180 TN, CHF 95 Pauschale → Umsatz = 17'100 → RevPASQM = <strong>CHF 42.75</strong></div></div></div>

<div class="tl-item"><div class="tl-num tl-num-p">5</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Dynamische Planung vs. Budget</div><div class="tl-merksatz">«Forecast-basierte Planung statt starres Budget — mehr Profitabilität!»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body">Planungshorizonte: Strategisch (5–10 J.), Taktisch (3–5 J.), Operativ (&lt;1–3 J.). Die <strong>dynamische Planung</strong> basiert auf dem Forecast statt auf dem Budget. Vorteile: höhere Genauigkeit, tagesaktuelle Planung, stetige Anpassung. Betriebe mit dynamischer Planung zeigen deutlichen Zuwachs in der Profitabilität.</div></div></div>

</div></div>

<!-- ZUSAMMENFASSUNG / MINDMAPS -->
<div class="sec" id="rm_mind"><h1>Zusammenfassung</h1><p class="sub">Visuelle Übersichten &amp; Formelsammlung</p>

<div class="mm"><div class="mm-center"><div class="mm-hub" style="border-color:var(--am);color:var(--am);background:var(--aml)">Revenue Management</div></div>
<div class="mm-branches">
<div class="mm-branch" style="background:var(--aml);border:1.5px solid var(--am)"><h3 style="color:var(--am)">Strategisches RM</h3><ul style="color:var(--am)"><li>Zielsetzung relativ zum Markt</li><li>CompSet &amp; Price-Value-Matrix</li><li>6 Preispositionierungen</li><li>Benchmarking: FMS, AMS, RMS, MPI, ARI, RGI</li><li>Product Life Cycle</li><li>Progressiv vs. Regressiv</li></ul></div>
<div class="mm-branch" style="background:var(--gl);border:1.5px solid var(--g)"><h3 style="color:var(--g)">Operatives RM</h3><ul style="color:var(--g)"><li>Sales vs. RM: gleichgestellt</li><li>Kreislauf: Forecast→Optimize→Control→Monitor</li><li>Daily/Weekly/Monthly/Yearly Tasks</li><li>4 Segmente: Leisure/Corp Ind., Leisure/MICE Groups</li><li>Forecast: Historisch, Advanced, PULY, %Dev</li></ul></div>
<div class="mm-branch" style="background:var(--pl);border:1.5px solid var(--pr)"><h3 style="color:var(--pr)">Total RM</h3><ul style="color:var(--pr)"><li>RevPATI als Basis-Ansatz</li><li>RevPASH (F&amp;B)</li><li>RevPASQM / RevPAMR (Events)</li><li>Displacement-Analyse</li><li>Dynamische Planung &gt; Budget</li></ul></div>
</div></div>

<h2>Formelsammlung</h2>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
<div class="c" style="padding:14px 18px"><strong style="color:var(--am)">ADR</strong><br><span style="color:var(--tx2)">= Rooms Revenue / Sold RN</span></div>
<div class="c" style="padding:14px 18px"><strong style="color:var(--am)">Occ%</strong><br><span style="color:var(--tx2)">= Sold RN / Available Rooms × 100</span></div>
<div class="c" style="padding:14px 18px"><strong style="color:var(--am)">RevPAR</strong><br><span style="color:var(--tx2)">= Revenue / Available Rooms = ADR × Occ%</span></div>
<div class="c" style="padding:14px 18px"><strong style="color:var(--g)">FMS</strong><br><span style="color:var(--tx2)">= Zimmer Hotel / Zimmer Market × 100</span></div>
<div class="c" style="padding:14px 18px"><strong style="color:var(--g)">AMS</strong><br><span style="color:var(--tx2)">= Sold RN Hotel / Sold RN Market × 100</span></div>
<div class="c" style="padding:14px 18px"><strong style="color:var(--g)">RMS</strong><br><span style="color:var(--tx2)">= Revenue Hotel / Revenue Market × 100</span></div>
<div class="c" style="padding:14px 18px"><strong style="color:var(--ac)">MPI</strong><br><span style="color:var(--tx2)">= Occ% Hotel / Occ% Market × 100</span></div>
<div class="c" style="padding:14px 18px"><strong style="color:var(--ac)">ARI</strong><br><span style="color:var(--tx2)">= ADR Hotel / ADR Market × 100</span></div>
<div class="c" style="padding:14px 18px"><strong style="color:var(--r)">RGI ★</strong><br><span style="color:var(--tx2)">= RevPAR Hotel / RevPAR Market × 100</span></div>
<div class="c" style="padding:14px 18px"><strong style="color:var(--pr)">Pickup</strong><br><span style="color:var(--tx2)">= OTB(heute) – OTB(gestern)</span></div>
<div class="c" style="padding:14px 18px"><strong style="color:var(--pr)">FC Advanced</strong><br><span style="color:var(--tx2)">= OTB + (∅ PU/Tag × verbleibende Tage)</span></div>
<div class="c" style="padding:14px 18px"><strong style="color:var(--pr)">FC PULY</strong><br><span style="color:var(--tx2)">= OTB + PU(Last Year)</span></div>
<div class="c" style="padding:14px 18px"><strong style="color:var(--pr)">FC %Dev</strong><br><span style="color:var(--tx2)">= Actual(LY) × (OTB / OTB(LY))</span></div>
<div class="c" style="padding:14px 18px"><strong style="color:var(--am)">Group Value</strong><br><span style="color:var(--tx2)">= Rooms × (ADR–RC) + Add.Rev – Expenses</span></div>
<div class="c" style="padding:14px 18px"><strong style="color:var(--r)">Displacement Cost</strong><br><span style="color:var(--tx2)">= Displaced × (ADR ind.–RC) + entg. Umsätze</span></div>
<div class="c" style="padding:14px 18px"><strong style="color:var(--am)">RevPASH</strong><br><span style="color:var(--tx2)">= F&amp;B Umsatz / (Seats × Hours)</span></div>
<div class="c" style="padding:14px 18px"><strong style="color:var(--am)">RevPASQM</strong><br><span style="color:var(--tx2)">= Event Umsatz / verfügbare m²</span></div>
</div>
</div>

<!-- KARTEIKARTEN -->
<div class="sec" id="rm_kart"><h1>Karteikarten</h1><p class="sub"><span id="rmfcCount">0</span> Karten — klicke zum Umdrehen</p>
<div class="fcc" id="rmfcc"></div>
<div class="fd"><div class="fc" id="rmfc" onclick="this.classList.toggle('fl')"><div class="ff ffr"><div class="fq" id="rmfcq"></div><div class="fh">Klicke zum Umdrehen</div></div><div class="ff ffb"><div class="fa" id="rmfca"></div></div></div></div>
<div class="fb"><button onclick="fcPrev()">Zurück</button><button onclick="fcShuffle()">Mischen</button><button class="bp1" onclick="fcNext()">Nächste</button></div>
<div style="text-align:center;margin-top:10px;font-size:11px;color:var(--tx3)" id="rmfcPool"></div>
<div id="rmfcList" style="display:none;margin-top:16px"></div>
</div>

<!-- QUIZ -->
<div class="sec" id="rm_quiz"><h1>Quiz</h1><p class="sub">Alle Fragen werden wiederholt bis du sie kannst</p>
<div id="rmq_Stats" style="margin-bottom:20px">
<div style="display:flex;gap:8px;margin-bottom:14px;flex-wrap:wrap">
<div class="qsc" style="flex:1;min-width:70px"><div class="qsn" id="rmq_TotR" style="color:var(--g)">0</div><div class="qsl">Total richtig</div></div>
<div class="qsc" style="flex:1;min-width:70px"><div class="qsn" id="rmq_TotW" style="color:var(--r)">0</div><div class="qsl">Total falsch</div></div>
<div class="qsc" style="flex:1;min-width:70px"><div class="qsn" id="rmq_TotP" style="color:var(--ac)">0%</div><div class="qsl">Erfolgsquote</div></div>
</div>
<div style="font-size:12px;color:var(--tx3);margin-bottom:6px">Lernerfolg</div>
<div style="display:flex;gap:4px;margin-bottom:4px;align-items:center"><div style="width:10px;height:10px;border-radius:50%;background:var(--g);flex-shrink:0"></div><div style="font-size:12px;color:var(--tx2);width:70px">Sicher</div><div style="flex:1;height:8px;background:var(--s2);border-radius:4px;overflow:hidden"><div id="rmq_BarG" style="height:100%;background:var(--g);border-radius:4px;transition:width .5s;width:0%"></div></div><div style="font-size:12px;color:var(--tx2);width:30px;text-align:right" id="rmq_BarGn">0</div></div>
<div style="display:flex;gap:4px;margin-bottom:4px;align-items:center"><div style="width:10px;height:10px;border-radius:50%;background:var(--am);flex-shrink:0"></div><div style="font-size:12px;color:var(--tx2);width:70px">Wackelig</div><div style="flex:1;height:8px;background:var(--s2);border-radius:4px;overflow:hidden"><div id="rmq_BarO" style="height:100%;background:var(--am);border-radius:4px;transition:width .5s;width:0%"></div></div><div style="font-size:12px;color:var(--tx2);width:30px;text-align:right" id="rmq_BarOn">0</div></div>
<div style="display:flex;gap:4px;margin-bottom:4px;align-items:center"><div style="width:10px;height:10px;border-radius:50%;background:var(--r);flex-shrink:0"></div><div style="font-size:12px;color:var(--tx2);width:70px">Unsicher</div><div style="flex:1;height:8px;background:var(--s2);border-radius:4px;overflow:hidden"><div id="rmq_BarR" style="height:100%;background:var(--r);border-radius:4px;transition:width .5s;width:0%"></div></div><div style="font-size:12px;color:var(--tx2);width:30px;text-align:right" id="rmq_BarRn">0</div></div>
<div style="display:flex;gap:4px;align-items:center"><div style="width:10px;height:10px;border-radius:50%;background:var(--tx3);flex-shrink:0"></div><div style="font-size:12px;color:var(--tx2);width:70px">Noch offen</div><div style="flex:1;height:8px;background:var(--s2);border-radius:4px;overflow:hidden"><div id="rmq_BarX" style="height:100%;background:var(--tx3);border-radius:4px;transition:width .5s;width:100%"></div></div><div style="font-size:12px;color:var(--tx2);width:30px;text-align:right" id="rmq_BarXn">0</div></div>
</div>
<div class="pb"><div class="pf" id="rmq_P"></div></div><div class="pt" id="rmq_PT">Frage 1</div>
<div id="rmq_C"></div>
<div style="text-align:center;margin-top:14px">
<button class="bp1" id="rmq_N" onclick="rmqNx()" style="display:none">Nächste Frage</button>
<button class="bp1" id="rmq_RS" onclick="rmqSt()" style="display:none">Weiter üben</button>
<button id="rmq_Reset" onclick="rmqReset()" style="display:none;margin-left:8px">Fortschritt zurücksetzen</button>
</div>
</div>

<!-- GLOSSAR -->
<div class="sec" id="rm_glossar"><h1>Glossar</h1><p class="sub">Begriffe &amp; Formeln im Revenue Management</p>
<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:8px">
<div class="c" style="padding:12px 16px"><strong style="color:var(--am)">ADR</strong> <span style="color:var(--tx2)">— Average Daily Rate (Durchschnittspreis pro verkauftem Zimmer)</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--am)">RevPAR</strong> <span style="color:var(--tx2)">— Revenue per Available Room (Umsatz pro verfügbarem Zimmer)</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--am)">Occ%</strong> <span style="color:var(--tx2)">— Occupancy Rate (Belegungsquote in Prozent)</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--g)">FMS</strong> <span style="color:var(--tx2)">— Fair Market Share (Kapazitätsanteil am Markt)</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--g)">AMS</strong> <span style="color:var(--tx2)">— Actual Market Share (tatsächlicher Nachfrageanteil)</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--g)">RMS</strong> <span style="color:var(--tx2)">— Revenue Market Share (Umsatzanteil am Markt)</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--ac)">MPI</strong> <span style="color:var(--tx2)">— Market Penetration Index (Belegung vs. Markt)</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--ac)">ARI</strong> <span style="color:var(--tx2)">— Average Rate Index (Preis vs. Markt)</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--r)">RGI</strong> <span style="color:var(--tx2)">— Revenue Generated Index (WICHTIGSTE! Gesamtperformance)</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--pr)">OTB</strong> <span style="color:var(--tx2)">— On the Books (aktueller Vorbuchungsstand)</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--pr)">PU</strong> <span style="color:var(--tx2)">— Pickup (Veränderung im Buchungsstand zum Vortag)</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--pr)">BAR</strong> <span style="color:var(--tx2)">— Best Available Rate (tagesaktueller Preis)</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--am)">CompSet</strong> <span style="color:var(--tx2)">— Competitive Set (Gruppe der Mitbewerber-Hotels)</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--am)">MinLOS</strong> <span style="color:var(--tx2)">— Minimum Length of Stay (Mindestaufenthalt)</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--am)">CTA / CTD</strong> <span style="color:var(--tx2)">— Closed to Arrival / Departure (Anreise-/Abreisesperren)</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--am)">RevPASH</strong> <span style="color:var(--tx2)">— Revenue Per Available Seat Hour (F&amp;B-Kennzahl)</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--am)">RevPASQM</strong> <span style="color:var(--tx2)">— Revenue Per Available Square Meter (Events)</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--am)">RevPATI</strong> <span style="color:var(--tx2)">— Revenue Per Available Time-based Inventory Unit (Basis-Ansatz)</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--am)">PLC</strong> <span style="color:var(--tx2)">— Product Life Cycle (Produktlebenszyklus: Introduction→Growth→Maturity→Decline)</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--am)">MICE</strong> <span style="color:var(--tx2)">— Meetings, Incentives, Conventions, Exhibitions</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--am)">RFP</strong> <span style="color:var(--tx2)">— Request for Proposal (Angebotsanfrage für Gruppen/Events)</span></div>
</div>
</div>

`;

// KARTEIKARTEN
const RM_CARDS = [
['Was ist ein Ziel im Revenue Management?','Ein in der Zukunft liegender, erstrebenswert angestrebter Zustand — im RM immer relativ zum Markt definiert (z.B. RGI > 105).'],
['Warum ist der Vorjahresvergleich als Zielsetzung unbrauchbar?','In boomenden Märkten werden Ziele ohne Zutun erreicht, in rezessiven Zeiten sind sie unerreichbar. Auch Veränderungen der Angebotsseite werden nicht berücksichtigt.'],
['Was ist ein Competitive Set (CompSet)?','Gruppe von mind. 4 vergleichbaren Hotels, mit deren Performance sich ein Hotel vergleicht. Kriterium: direkte Konkurrenz um Gastnächte.'],
['Nach welchen zwei Kriterien wird das CompSet analysiert?','Preis-Positionierung und Online-Reviews, erfasst in der Preis-Bewertungsmatrix (Price Value Matrix).'],
['Was ist Skimming?','Preisführer — ÜBER der Konkurrenz positionieren. Wann: Marktführer, Hochsaison, Nachfrageüberhang. Lukrativste Variante.'],
['Was ist Penetration?','Bewusst UNTER der Konkurrenz. «Erkauft» Marktanteile. Wann: Neueröffnung, neuer Markt, 2–3 Monate.'],
['Was ist Surrounding?','Ein Produkt günstiger, eines teurer als Konkurrenz. Wann: Premium will Image halten aber Preis senken.'],
['Was ist Matching?','Exakt gleicher Preis wie Konkurrenz, aber besseres Produkt/Bewertung. Gast empfindet positives Preis-Leistungs-Verhältnis.'],
['Was ist Undercutting?','Knapp unter der Konkurrenz bei gleicher Qualität. Bsp: CHF 75 vs. CHF 79. Auch durch Non-Refundable Rate möglich.'],
['Was ist «Hidden»?','Keine Strategie! Fehlen einer klaren Positionierung. Porter: «Stuck in the middle». Immer vermeiden!'],
['Formel: Fair Market Share (FMS)?','FMS = Zimmer «my hotel» / Zimmer «market» × 100. Misst den Kapazitätsanteil.'],
['Formel: Actual Market Share (AMS)?','AMS = Sold RN «my hotel» / Sold RN «market» × 100. Misst den tatsächlichen Nachfrageanteil.'],
['Formel: Revenue Market Share (RMS)?','RMS = Revenue «my hotel» / Revenue «market» × 100. Misst den Umsatzanteil.'],
['Formel: Average Rate Index (ARI)?','ARI = ADR «my hotel» / ADR «market» × 100. Misst: Verkaufe ich teurer oder günstiger als der Markt?'],
['Formel: Market Penetration Index (MPI)?','MPI = Occ% «my hotel» / Occ% «market» × 100. Misst: Bin ich voller oder leerer als der Markt?'],
['Formel: Revenue Generated Index (RGI)?','RGI = RevPAR «my hotel» / RevPAR «market» × 100. WICHTIGSTE Kennzahl! Misst die Gesamtperformance.'],
['Was bedeutet ein Index von über 100?','Besser als der Markt — das Hotel performt überdurchschnittlich.'],
['Was bedeutet ein Index unter 100?','Schlechter als der Markt — Handlungsbedarf, Underperforming gegenüber Konkurrenz.'],
['Was bedeutet: RGI hoch + ARI tief + MPI hoch?','Zu günstig! Preis erhöhen. Auch mit weniger Gästen steigt der RevPAR.'],
['Was bedeutet: RGI tief + ARI hoch + MPI tief?','Zu teuer! Preis senken, um mehr Gäste zu gewinnen.'],
['ACHTUNG: Gilt ARI × MPI = RGI?','NEIN! Die Index-Werte sind NICHT multiplikativ verknüpft! Häufiger Prüfungsfehler.'],
['CompSet vs. Market — was ist der Unterschied?','CompSet = nur die Mitbewerber. Market = CompSet + mein Hotel. Prüfung rechnet IMMER mit Market!'],
['Nenne die 4 PLC-Phasen.','Introduction (Einführung) → Growth (Wachstum) → Maturity (Reife/Sättigung) → Decline (Rückgang/Degeneration).'],
['PLC: Was passiert in der Introduction?','«Heads in beds» aufbauen. Penetrations-Strategie, Eröffnungs-Specials. Noch keine Gewinne. Typisch: ARI 0.72, MPI 0.84, RGI 0.78.'],
['PLC: Was passiert in der Maturity?','Längste & profitabelste Phase. Maximize RevPAR. Typisch: ARI 1.12, MPI 1.09, RGI 1.11. Kein Wachstum ohne Produktmodifikation.'],
['Was ist die progressive Preisstrategie?','Preis steigt je näher die Anreise. Bsp: Fluggesellschaften. Belohnt Frühbucher.'],
['Was ist die regressive Preisstrategie?','Preis sinkt je näher die Anreise. Bsp: Last-Minute-Angebote. Bei schwacher Nachfrage.'],
['Was ist die Mickey-Mouse-Strategie?','Opportunistisch «mal höher und mal tiefer» quotieren — agil und reaktiv, abhängig von Markt und CompSet.'],
['Warum ist die organisatorische Einbindung von RM wichtig?','Ohne klare Kompetenzen scheitern RM-Initiativen. Sales und RM müssen gleichgestellt sein mit klarer Eskalationsstufe.'],
['Nenne die 4 Schritte des Revenue-Optimization-Circle.','Forecast → Optimize → Control → Monitor → 🔁 (Kreislauf).'],
['Was bedeutet GIGA im RM?','Garbage In, Garbage Out — ohne korrekte Dateneingabe funktioniert RM nicht.'],
['Welche Entscheidungen werden im Schritt «Control» getroffen?','Restriktionen (MinLOS, CTA, CTD), Overbooking Factor anpassen, BAR (Best Available Rate) ändern.'],
['Nenne die 4 Frequenzen der RM-Anwendung.','Täglich (Vortag + 7 Tage), Wöchentlich (Revenue Meeting), Monatlich (Benchmark + Budget), Jährlich (Strategieüberprüfung).'],
['Warum morgens RM-Arbeiten erledigen?','Sonst sind 50% des Optimierungspotenzials vergeben, da bereits die Hälfte des Tages vorüber ist.'],
['Nenne die 4 klassischen Marktsegmente in der Hotellerie.','Leisure Individual, Corporate/Business Individual, Leisure Groups, Business Groups (MICE). Plus «Others».'],
['Was ist der Pickup?','Veränderung im Buchungsstand: Pickup = OTB(heute) – OTB(gestern). Zeigt die Dynamik der Geschäftsentwicklung.'],
['Formel: Forecast nach Advanced Methode (linear)?','FC = OTB + (∅ Pickup/Tag × verbleibende Tage). Interpoliert den durchschnittlichen Pickup in die Zukunft.'],
['Formel: Forecast nach PULY-Methode?','FC = OTB + Pickup(Last Year). Addiert den Pickup des Vorjahres zum aktuellen OTB.'],
['Formel: Forecast nach % Deviation?','FC = Actual(LY) × (OTB / OTB(LY)). Prozentuale Abweichung zum Vorjahr auf den historischen Forecast übertragen.'],
['Constrained vs. Unconstrained Forecast?','Constrained = Kapazitätsgrenze beachten (max. Zimmerzahl). Unconstrained = theoretische Nachfrage, auch über 100%.'],
['Was ist RevPATI?','Revenue Per Available Time-based Inventory Unit. Basis-Ansatz für Performance-Messung aller Profit Center.'],
['Formel: RevPASH?','RevPASH = Restaurant-Umsatz / (Sitzplätze × Öffnungsstunden). Oder: ∅ Guest Check × Auslastung (%).'],
['Formel: RevPASQM?','RevPASQM = Veranstaltungsumsatz / verfügbare Quadratmeter. Präziseste Kennzahl bei variierenden Raumgrössen.'],
['Was ist eine Displacement-Analyse?','Vergleich von Group Value (Profit Gruppe) vs. Displacement Cost (entgangenes Individualgeschäft). GV > DC → annehmen.'],
['Formel: Displaced Rooms?','Displaced Rooms = Group Rooms – freie Zimmer (Inventory – Forecast Rooms). Nur die überschüssigen Zimmer sind displaced!'],
];

// REGISTRIERUNG
window.TIS = window.TIS || {};
window.TIS.courses = window.TIS.courses || {};
window.TIS.courses.rm = {
  config: courseConfig,
  html: courseHTML,
  flashcards: RM_CARDS,
};

})();
