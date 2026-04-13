// ===== KURS: SALES =====
// Auto-generated module for This Is Student
(function() {

const courseConfig = {
  id: 'sales',
  name: 'Sales',
  pages: ['sales','sales_kap1','sales_kap2','sales_kap3','sales_mind','sales_kart','sales_quiz','sales_glossar'],
  subNav: [
    {s:'sales',l:'Übersicht'},
    {s:'sales_kap1',l:'1 Einordnung'},
    {s:'sales_kap2',l:'2 Verkaufsgespräche'},
    {s:'sales_kap3',l:'3 Verkaufsplanung'},
    {s:'sales_mind',l:'Zusammenfassung'},
    {s:'sales_kart',l:'Karten'},
    {s:'sales_quiz',l:'Quiz'},
    {s:'sales_glossar',l:'Glossar'}
  ],
  navButton: '<button class="nl nl-main" data-s="sales" onclick="go(\'sales\')" style="display:none">Sales</button>'
};

const courseHTML = `

<!-- SALES HOME -->
<div class="sec" id="sales">
<div style="border-radius:24px;padding:36px 32px;margin-bottom:32px;background:linear-gradient(135deg,rgba(56,182,232,.06),rgba(175,82,222,.04));border:1px solid var(--bd);position:relative;overflow:hidden">
<div style="position:absolute;top:-40px;right:-40px;width:160px;height:160px;border-radius:50%;background:linear-gradient(135deg,rgba(56,182,232,.1),rgba(175,82,222,.08))"></div>
<div style="position:relative;z-index:1">
<div style="font-size:12px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:var(--ac);margin-bottom:8px">Semester 5 · Betriebswirtschaft</div>
<h1 style="font-size:32px;letter-spacing:-.6px;margin-bottom:8px">Sales</h1>
<p style="font-size:15px;color:var(--tx2);margin-bottom:0">Dozent: Christian Gottstein · SHL Schweizerische Hotelfachschule Luzern</p>
</div></div>
<div class="hl">Durchgängiges Fallbeispiel: <strong>Hotel &amp; Restaurant «Bellevue»</strong> — 4-Sterne-Superior in Luzern, 120 Zimmer, zwei Restaurants, Wellnessbereich, 5 Tagungsräume. Familie Meier, 3. Generation. Sales-Team: Lisa Meier (DOS), Marc Brunner (Corporate &amp; MICE), Sophie Keller (Leisure &amp; Events).</div>
<div style="font-size:13px;font-weight:600;letter-spacing:1px;text-transform:uppercase;color:var(--tx3);margin-bottom:14px">Theorie · 3 Kapitel</div>
<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:12px;margin-bottom:36px">
<div class="c ck" onclick="go('sales_kap1')" style="padding:20px 22px;display:flex;gap:14px;align-items:flex-start"><div style="width:32px;height:32px;border-radius:10px;background:var(--al);color:var(--ac);display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0">1</div><div><div class="ct2">Einordnung Verkauf</div><div class="cd">Marketing-Mix, Vertrieb, Segmente, Einkaufsprozesse, Kundentypen</div></div></div>
<div class="c ck" onclick="go('sales_kap2')" style="padding:20px 22px;display:flex;gap:14px;align-items:flex-start"><div style="width:32px;height:32px;border-radius:10px;background:var(--gl);color:var(--g);display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0">2</div><div><div class="ct2">Verkaufsgespräche</div><div class="cd">Kommunikation, Fragetechniken, 7 Phasen, FAB, Preisnennung, Einwände</div></div></div>
<div class="c ck" onclick="go('sales_kap3')" style="padding:20px 22px;display:flex;gap:14px;align-items:flex-start"><div style="width:32px;height:32px;border-radius:10px;background:var(--pl);color:var(--pr);display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0">3</div><div><div class="ct2">Verkaufsplanung</div><div class="cd">Massnahmen, Analyse, ABC, Pareto, 6W-Ziele, Budget</div></div></div></div>
<div style="font-size:13px;font-weight:600;letter-spacing:1px;text-transform:uppercase;color:var(--tx3);margin-bottom:14px">Lerntools</div>
<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:12px">
<div class="c ck" onclick="go('sales_mind')" style="text-align:center;padding:24px 16px"><div style="font-size:24px;font-weight:700;background:var(--grad);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;margin-bottom:6px">3</div><div class="ct2">Zusammenfassung</div><div class="cd">Mindmaps</div></div>
<div class="c ck" onclick="go('sales_kart')" style="text-align:center;padding:24px 16px"><div id="ltSalesCards" style="font-size:24px;font-weight:700;background:var(--grad);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;margin-bottom:6px">50</div><div class="ct2">Karteikarten</div><div class="cd">Klicken &amp; repetieren</div></div>
<div class="c ck" onclick="go('sales_quiz')" style="text-align:center;padding:24px 16px"><div id="ltSalesQuiz" style="font-size:24px;font-weight:700;background:var(--grad);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;margin-bottom:6px">50</div><div class="ct2">Quiz</div><div class="cd">Mit Lernfortschritt</div></div>
<div class="c ck" onclick="go('sales_glossar')" style="text-align:center;padding:24px 16px"><div style="font-size:24px;font-weight:700;background:var(--grad);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;margin-bottom:6px">A–Z</div><div class="ct2">Glossar</div><div class="cd">Fachbegriffe</div></div></div></div>

<!-- KAP 1 -->
<div class="sec" id="sales_kap1"><h1>Einordnung Verkauf</h1><p class="sub">Kapitel 1 — Warum Sales, 4 Ps, Vertrieb, Segmente, Einkaufsprozesse, Kundentypen</p>
<div class="hl">Sales im Gastgewerbe = <strong>Aufbau langfristiger Beziehungen</strong>. Man muss verstehen, wie der Einkauf auf Kundenseite funktioniert.</div>
<div style="display:flex;gap:8px;margin:12px 0 4px"><button style="font-size:11px;padding:4px 10px" onclick="this.parentElement.nextElementSibling.querySelectorAll('.tl-item').forEach(i=>i.classList.add('open'))">Alle aufklappen</button><button style="font-size:11px;padding:4px 10px" onclick="this.parentElement.nextElementSibling.querySelectorAll('.tl-item').forEach(i=>i.classList.remove('open'))">Alle schliessen</button></div>
<div class="tl">
<div class="tl-item"><div class="tl-num tl-num-b">1</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Schnittstellen zu Marketing — 4 Ps</div><div class="tl-merksatz">«Sales gehört zu Place UND Promotion.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body">4 Ps: Product, Price, <strong>Place</strong> (Vertrieb — hier liegt Sales!), <strong>Promotion</strong> (Kommunikationsmix — persönlicher Verkauf &amp; Event-Marketing).</div><div class="tl-sub"><div class="c ca"><div class="ct2">Place</div><div class="cd">Kundschaft dazu bringen, bei uns zu buchen. Vertriebspolitik, Distributionskanäle, Pflege der Gästebeziehungen.</div></div><div class="c cg"><div class="ct2">Promotion</div><div class="cd">Werbung, Sponsoring, Product Placement + <strong>persönlicher Verkauf</strong> und <strong>Event-Marketing</strong>.</div></div></div></div></div>
<div class="tl-item"><div class="tl-num tl-num-b">2</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Direkter vs. indirekter Vertrieb</div><div class="tl-merksatz">«Farming = ernten. Hunting = jagen.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body"><strong>Direkt</strong> = ohne Zwischenhändler. <strong>Indirekt</strong> = via Reisebüros, OTAs.</div><div class="tl-sub"><div class="c ca"><div class="ct2">Reaktiv «Farming»</div><div class="cd">Anfragen bearbeiten: Bankett, Rezeption, Restaurant.</div></div><div class="c cg"><div class="ct2">Proaktiv «Hunting»</div><div class="cd">Aktive Neukundenakquise: Sales-/Account Mgmt, Aussendienst.</div></div></div><div class="tl-body" style="margin-top:12px"><strong>Vorteile direkt:</strong> Loyalitätsaufbau · Kontrolle · Keine Provisionen.<br><strong>Nachteile:</strong> Segmente bleiben unbearbeitet · Personal-Aufwand · Betrieb trägt Risiko.</div></div></div>
<div class="tl-item"><div class="tl-num tl-num-b">3</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Marktsegmente</div><div class="tl-merksatz">«Buchungsgrösse, Aufenthaltszweck, Vertragsverhältnis.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-sub"><div class="c ca"><div class="ct2">Buchungsgrösse</div><div class="cd">Einzel oder Gruppe (ab ~10 Zimmer)</div></div><div class="c cg"><div class="ct2">Aufenthaltszweck</div><div class="cd">Business oder Leisure</div></div><div class="c cm"><div class="ct2">Vertragsverhältnis</div><div class="cd">Mit/ohne Vertrag, Reiserichtlinien ja/nein</div></div></div><div class="merksatz">Segmentierungen variieren stark! Kein universeller Standard.</div></div></div>
<div class="tl-item"><div class="tl-num tl-num-g">4</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Einkaufsprozesse — 4 Kernfragen</div><div class="tl-merksatz">«Wer Fristen verpasst, verliert das Geschäft.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-sub"><div class="c ca"><div class="ct2">Wie?</div><div class="cd">Ablauf, Stufen</div></div><div class="c cg"><div class="ct2">Wann?</div><div class="cd">Fristen</div></div><div class="c cm"><div class="ct2">Womit?</div><div class="cd">Tools (Lanyon, Cvent...)</div></div><div class="c cr"><div class="ct2">Wer?</div><div class="cd">Entscheidungsträger</div></div></div></div></div>
<div class="tl-item"><div class="tl-num tl-num-g">5</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Corporate Transient</div><div class="tl-merksatz">«Managed = RFP + Reiserichtlinien. Unmanaged = OTA-Preis.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-sub"><div class="c ca"><div class="ct2">Managed Travel</div><div class="cd">RFP ab Mitte Jahr fürs Folgejahr. TMC (Amex GBT, BCD, CWT). Konsortien. Implant. Reisende an Richtlinien gebunden.</div></div><div class="c cg"><div class="ct2">Unmanaged Travel</div><div class="cd">Freie Hotelwahl. OTAs, tagesaktueller Preis. SME/KMU-Programme.</div></div></div></div></div>
<div class="tl-item"><div class="tl-num tl-num-g">6</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Transient Leisure &amp; Gruppen</div><div class="tl-merksatz">«Veranstalter = statisch. OTAs = dynamisch. Ab 10 Zi. = Gruppe.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-sub"><div class="c ca"><div class="ct2">Veranstalter/Paketreisen</div><div class="cd">Gäste→Reisebüro→Tour Operator→Incoming→Hotel. Katalogproduktion, 9–18 Monate Vorlauf bei Flug.</div></div><div class="c cg"><div class="ct2">Einzelfreizeit (Unmanaged)</div><div class="cd">OTAs (12-Mon.-Verträge, Kommission). Direktbuchung fördern! Dynamische Preise.</div></div><div class="c cm"><div class="ct2">MICE / Geschäftsgruppen</div><div class="cd">Ab ~10 Zi. Agenturen (Cvent, Meetingselect). Strikte Fristen/Formate.</div></div><div class="c cr"><div class="ct2">Airlines</div><div class="cd">Crew (planbar, Zusatzleistungen) + Layover (ad-hoc, schnelle Reaktion nötig).</div></div></div></div></div>
<div class="tl-item"><div class="tl-num tl-num-r">7</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">4 Kundentypen</div><div class="tl-merksatz">«Sicherheit · Wirtschaftlichkeit · Prestige · Bequemlichkeit»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-sub"><div class="c ca"><div class="ct2">Sicherheitstyp</div><div class="cd">Stabilität, Zuverlässigkeit. Nie enttäuschen, Zertifikate betonen.</div></div><div class="c cg"><div class="ct2">Wirtschaftlichkeitstyp</div><div class="cd">Preis-Leistung, Best Deal. Hart verhandeln — liebt ebenbürtige Gegenpartei.</div></div><div class="c cm"><div class="ct2">Prestigetyp</div><div class="cd">Ansehen, Marke, Status. Neuheiten zuerst anbieten, Events einladen.</div></div><div class="c cr"><div class="ct2">Bequemlichkeitstyp</div><div class="cd">Alles aus einer Hand, Rundum-Service. Arbeit abnehmen, Referenzen bereithalten.</div></div></div><div class="tl-body" style="margin-top:8px">Weitere: DISC/DISG, Myers-Briggs (MBTI).</div></div></div>
</div></div>

<!-- KAP 2 -->
<div class="sec" id="sales_kap2"><h1>Verkaufsgespräche</h1><p class="sub">Kapitel 2 — Kommunikation, Fragetechniken, 7 Phasen, FAB, Preisnennung, Abschluss, Einwände</p>
<div class="hl">7% Inhalt · 38% Stimme · <strong>55% Körpersprache</strong>. Fragen und Zuhören kosten nichts!</div>
<div style="display:flex;gap:8px;margin:12px 0 4px"><button style="font-size:11px;padding:4px 10px" onclick="this.parentElement.nextElementSibling.querySelectorAll('.tl-item').forEach(i=>i.classList.add('open'))">Alle aufklappen</button><button style="font-size:11px;padding:4px 10px" onclick="this.parentElement.nextElementSibling.querySelectorAll('.tl-item').forEach(i=>i.classList.remove('open'))">Alle schliessen</button></div>
<div class="tl">
<div class="tl-item"><div class="tl-num tl-num-b">1</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">4-Ohren-Modell (Schulz von Thun)</div><div class="tl-merksatz">«Wer nur auf der Sachebene reagiert, übersieht die wahre Botschaft.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-sub"><div class="c ca"><div class="ct2">Sachebene</div><div class="cd">Worüber ich informiere</div></div><div class="c cg"><div class="ct2">Selbstoffenbarung</div><div class="cd">Was ich von mir kundgebe</div></div><div class="c cm"><div class="ct2">Beziehungsebene</div><div class="cd">Was ich von dir halte</div></div><div class="c cr"><div class="ct2">Appellebene</div><div class="cd">Wozu ich dich veranlassen möchte</div></div></div></div></div>
<div class="tl-item"><div class="tl-num tl-num-b">2</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Nonverbale Kommunikation</div><div class="tl-merksatz">«Erste 30 Sekunden entscheiden — Eindruck haftet Jahre.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body">Körpersprache (Kinesik) kann kaum lügen — vieles unbewusst. Wichtigste Signale: Gestik, Körperhaltung, Mimik, Blickkontakt, räumliches Verhalten, paraverbale Kommunikation, Kleidung/Statussymbole.</div></div></div>
<div class="tl-item"><div class="tl-num tl-num-b">3</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Fragetechniken</div><div class="tl-merksatz">«Wer fragt, der führt — wichtigstes Verkaufsinstrument!»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-sub"><div class="c ca"><div class="ct2">Offene Fragen</div><div class="cd">W-Fragen. Info gewinnen, Vertrauen aufbauen. Bedarfsanalyse.</div></div><div class="c cg"><div class="ct2">Geschlossene Fragen</div><div class="cd">Ja/Nein. Nur taktisch! Erleichtern Gesprächsende.</div></div><div class="c cm"><div class="ct2">Alternativfragen</div><div class="cd">Nur Zustimmungsvarianten. «KW 50 oder 51?» Für Abschluss.</div></div><div class="c cr"><div class="ct2">Suggestivfragen</div><div class="cd">Manipulierend — sehr vorsichtig!</div></div><div class="c ca"><div class="ct2">Gegenfragen</div><div class="cd">Bei Einwänden. «Preis zu hoch?» — «Im Verhältnis wozu?»</div></div><div class="c cg"><div class="ct2">Ermittlungsfragen</div><div class="cd">Offene Frage, Bedarfsanalyse-Phase.</div></div><div class="c cm"><div class="ct2">Ja-Fragen / Ja-Strasse</div><div class="cd">Fast nur «Ja» möglich. Aneinandergereiht = Abschlusstechnik.</div></div></div></div></div>
<div class="tl-item"><div class="tl-num tl-num-g">4</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">7 Phasen des Verkaufsgesprächs</div><div class="tl-merksatz">«Vorbereitung → Warm-up → Analyse → Präsentation → Preis → Abschluss → Nachbearbeitung»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-sub"><div class="c ca"><div class="ct2">1. Vorbereitung</div><div class="cd">Termin, Recherche (Bestands-/Neukunden), Unterlagen, Ziele, Rückversicherung.</div></div><div class="c cg"><div class="ct2">2. Warm-up</div><div class="cd">ASP finden, Smalltalk. Doppelt: Beziehungsaufbau + Kompetenzaufbau.</div></div><div class="c cm"><div class="ct2">3. Bedarfsanalyse</div><div class="cd">Offene Fragen, Trichtermodell (breit→eng). Zuhören!</div></div><div class="c cr"><div class="ct2">4. Produktpräsentation</div><div class="cd">FAB-Technik. Kaufsignale beachten.</div></div><div class="c ca"><div class="ct2">5. Preisnennung</div><div class="cd">Sandwich-Methode. Nie nackt, keine Pause nach Preis.</div></div><div class="c cg"><div class="ct2">6. Abschluss</div><div class="cd">Kaufsignale → Abschluss. Ja-Strasse, Alternativtechnik.</div></div><div class="c cm"><div class="ct2">7. Nachbearbeitung</div><div class="cd">Dankesnachricht, Info an Abteilungen, CRM pflegen, Follow-ups.</div></div></div><div class="merksatz">Die Nachbearbeitung entscheidet über das Folgegeschäft!</div></div></div>
<div class="tl-item"><div class="tl-num tl-num-g">5</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">FAB-Technik (Feature–Advantage–Benefit)</div><div class="tl-merksatz">«Es wird nie das Produkt gekauft — immer der Nutzen!»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-sub"><div class="c ca"><div class="ct2">Merkmal</div><div class="cd">Sachliche Eigenschaft. «24h-Rezeption.»</div></div><div class="c cg"><div class="ct2">Vorteil</div><div class="cd">Allgemeiner Nutzen. «Jederzeit anreisen.»</div></div><div class="c cm"><div class="ct2">Nutzen</div><div class="cd">Individuell. «Flexibel, keine Sorgen bei Verspätung.»</div></div></div><div class="tl-body" style="margin-top:8px"><strong>Kaufmotivatoren:</strong> Sachlich = «Mehr» (Effizienz, Gewinn, Zeit). Emotional = «Weniger» (Aufwand, Risiko, Stress).</div><div class="merksatz">Falsch: «Queen-Size-Bett.» — Richtig: «Im Queen-Size-Bett schlafen Sie gut und gehen morgen ausgeruht zur Besprechung.»</div></div></div>
<div class="tl-item"><div class="tl-num tl-num-r">6</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Sandwich-Methode &amp; Kaufsignale</div><div class="tl-merksatz">«Preis nie alleine nennen! Vorteile → PREIS → Vorteile.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-sub"><div class="c cr"><div class="ct2">So NICHT</div><div class="cd">«Kostet 262.30 CHF.» → Reizwort «kostet» + nackter Preis.</div></div><div class="c cg"><div class="ct2">Sandwich</div><div class="cd">1–3 Vorteile → PREIS → 1–3 Vorteile. Keine Sprechpause!</div></div></div><div class="tl-body" style="margin-top:8px"><strong>Kaufsignale:</strong> Direkter Kaufwunsch · Fragen nach dem «Danach» · Beschäftigung mit Details · Häufige Zustimmung · Fragen nach Referenzen · Zustimmendes Nicken.</div><div class="merksatz">Kaufsignale NIEMALS übersehen — unnötige Argumente können den Kaufwunsch ersticken!</div></div></div>
<div class="tl-item"><div class="tl-num tl-num-r">7</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Einwandbehandlung — 5 Schritte</div><div class="tl-merksatz">«NEIN = Noch Etwas Input Nötig!»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div style="display:flex;flex-wrap:wrap;gap:8px;margin:12px 0"><div style="padding:8px 14px;border-radius:8px;background:var(--al);border:1px solid var(--ac);font-size:13px"><strong>1.</strong> Verständnis</div><div style="padding:8px 14px;border-radius:8px;background:var(--gl);border:1px solid var(--g);font-size:13px"><strong>2.</strong> Nachfragen</div><div style="padding:8px 14px;border-radius:8px;background:var(--aml);border:1px solid var(--am);font-size:13px"><strong>3.</strong> FAB</div><div style="padding:8px 14px;border-radius:8px;background:var(--pl);border:1px solid var(--pr);font-size:13px"><strong>4.</strong> Rückversichern</div><div style="padding:8px 14px;border-radius:8px;background:rgba(255,59,48,.08);border:1px solid var(--r);font-size:13px"><strong>5.</strong> Erneuter Abschluss</div></div><div class="merksatz">Nach JEDER Einwandbehandlung zwingend erneuter Abschlussversuch!</div></div></div>
<div class="tl-item"><div class="tl-num tl-num-r">8</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">5 Preisverhandlungs-Strategien</div><div class="tl-merksatz">«Einfach Preis senken = kein Verhandeln!»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-sub"><div class="c ca"><div class="ct2">1. Nutzenargumentation</div><div class="cd">FABs wiederholen. Reserve-Nutzen. Kostet nichts!</div></div><div class="c cg"><div class="ct2">2. Zugaben</div><div class="cd">Hoher Kundennutzen, geringe Kosten (Late C/O, Spa, Apéro).</div></div><div class="c cm"><div class="ct2">3. Preis- &amp; Leistungskürzung</div><div class="cd">Beides reduzieren.</div></div><div class="c cr"><div class="ct2">4. Preissenkung</div><div class="cd">Letzte Lösung, im Spielraum.</div></div><div class="c ca"><div class="ct2">5. Kein Abschluss</div><div class="cd">Grenzen kennen. Professionell bleiben. Kontakt halten.</div></div></div></div></div>
</div></div>

<!-- KAP 3 -->
<div class="sec" id="sales_kap3"><h1>Verkaufsplanung</h1><p class="sub">Kapitel 3 — Massnahmen, Analyse, Pareto, ABC, 6W-Ziele, Budget</p>
<div class="hl"><strong>Analyse</strong> (wo stehen wir?) → <strong>Ziele</strong> (wo hin?) → <strong>Massnahmen</strong> (wie dahin?).</div>
<div style="display:flex;gap:8px;margin:12px 0 4px"><button style="font-size:11px;padding:4px 10px" onclick="this.parentElement.nextElementSibling.querySelectorAll('.tl-item').forEach(i=>i.classList.add('open'))">Alle aufklappen</button><button style="font-size:11px;padding:4px 10px" onclick="this.parentElement.nextElementSibling.querySelectorAll('.tl-item').forEach(i=>i.classList.remove('open'))">Alle schliessen</button></div>
<div class="tl">
<div class="tl-item"><div class="tl-num tl-num-b">1</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Verkaufsmassnahmen</div><div class="tl-merksatz">«Telefonat bis Tradeshow — jede Massnahme hat ihren Zweck.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-sub"><div class="c ca"><div class="ct2">Telefonat</div><div class="cd">Aktiv: Termine, Nachfassen, Events. Nicht bei Robinsonliste! Passiv: Reservierung, Hotline.</div></div><div class="c cg"><div class="ct2">Social Media &amp; Pitch</div><div class="cd">LinkedIn &gt; Facebook. Contentmarketing. Elevator Pitch: 30–60 Sek.</div></div><div class="c cm"><div class="ct2">Hausführungen</div><div class="cd">Spontan: immer bereit! 2–3 Zimmer + 1 VA-Raum. Angemeldet: Umfang absprechen.</div></div><div class="c cr"><div class="ct2">Events &amp; Fam-Trips</div><div class="cd">Kundenbindung, informelle Kontakte. Fam-Trips: einprägsam sein!</div></div><div class="c ca"><div class="ct2">Sales-Blitz</div><div class="cd">Intensive Kampagne, max. 5 Min./Besuch, eine Kernaussage.</div></div><div class="c cg"><div class="ct2">Road Show &amp; Messen</div><div class="cd">IMEX, IBTM, WTM, ILTM, ITB. Kostspielig — messbare Ziele!</div></div></div></div></div>
<div class="tl-item"><div class="tl-num tl-num-g">2</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">5 Planungsschritte &amp; Analyse</div><div class="tl-merksatz">«Analyse → Ziele → Strategie → Massnahmen → Budget»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-sub"><div class="c ca"><div class="ct2">Pareto (80/20)</div><div class="cd">20% der Kunden = 80% des Umsatzes.</div></div><div class="c cg"><div class="ct2">ABC-Analyse</div><div class="cd">A = Top-Kunden, intensiv. B = Mitte, Potenzial für A. C = standardisiert, grösste Anzahl.</div></div></div><div class="tl-body" style="margin-top:8px">Weitere Kriterien: F&amp;B-Umsatz, Anreisetag/Saison, Stornierungen/Wash, Zahlungsdisziplin, Klumpenbildung, Anteil Neu- vs. Bestandskunden.</div></div></div>
<div class="tl-item"><div class="tl-num tl-num-r">3</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">6W-Raster &amp; Budget</div><div class="tl-merksatz">«Was? Wieviel? Wem? Wann? Wo? Wer?»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-sub"><div class="c ca"><div class="ct2">Was &amp; Wieviel</div><div class="cd">Umsatz, RNs, GOP, RevPAR. Absolute Zahl, CHF, %.</div></div><div class="c cg"><div class="ct2">Wem &amp; Wann</div><div class="cd">Segment, Zielgruppe. Zielperiode.</div></div><div class="c cm"><div class="ct2">Wo &amp; Wer</div><div class="cd">Markt. Verantwortliche Person.</div></div></div><div class="tl-body" style="margin-top:8px"><strong>Budget:</strong> Personal (fix/variabel, Schulung, Incentives) · Reisekosten · Büro/CRM · Messegebühren/Aktionen/Verkaufsmittel.</div><div class="merksatz">Primär (nach aussen) = Sales-Plan. Sekundär (nach innen) = Personal, Schulung, Organisation.</div></div></div>
</div></div>

<!-- ZUSAMMENFASSUNG -->
<div class="sec" id="sales_mind"><h1>Zusammenfassung</h1><p class="sub">Sales — Alle 3 Kapitel auf einen Blick</p>
<div class="mm"><div class="mm-center"><div class="mm-hub" style="border-color:var(--ac);color:var(--ac);background:var(--al)">Sales</div></div>
<div class="mm-branches">
<div class="mm-branch" style="background:var(--al);border:1.5px solid var(--ac)"><h3 style="color:var(--ac)">1. Einordnung</h3><ul style="color:var(--ac)"><li>4 Ps: Place &amp; Promotion</li><li>Direkt vs. Indirekt</li><li>Farming vs. Hunting</li><li>5 Hauptsegmente</li><li>4 Kernfragen Einkauf</li><li>4 Kundentypen</li></ul></div>
<div class="mm-branch" style="background:var(--gl);border:1.5px solid var(--g)"><h3 style="color:var(--g)">2. Verkaufsgespräch</h3><ul style="color:var(--g)"><li>7% / 38% / 55%</li><li>4-Ohren-Modell</li><li>7 Fragetechniken</li><li>7 Phasen</li><li>FAB-Technik</li><li>Sandwich-Methode</li><li>5 Schritte Einwand</li></ul></div>
<div class="mm-branch" style="background:var(--pl);border:1.5px solid var(--pr)"><h3 style="color:var(--pr)">3. Verkaufsplanung</h3><ul style="color:var(--pr)"><li>11 Verkaufsmassnahmen</li><li>5 Planungsschritte</li><li>Pareto 80/20</li><li>ABC-Analyse</li><li>6W-Raster</li><li>Budget</li></ul></div>
</div></div>
<h2 style="margin-top:32px">FAB-Technik</h2>
<div style="display:flex;align-items:center;justify-content:center;flex-wrap:wrap;gap:8px;margin:16px 0;padding:20px;background:var(--s2);border-radius:12px;border:1px solid var(--bd)">
<div style="padding:14px 20px;border-radius:10px;background:var(--al);border:1.5px solid var(--ac);text-align:center"><div style="font-size:13px;font-weight:700;color:var(--ac)">Merkmal</div><div style="font-size:11px;color:var(--tx3)">Sachliche Eigenschaft</div></div>
<span style="color:var(--am);font-size:20px;font-weight:700">→</span>
<div style="padding:14px 20px;border-radius:10px;background:var(--gl);border:1.5px solid var(--g);text-align:center"><div style="font-size:13px;font-weight:700;color:var(--g)">Vorteil</div><div style="font-size:11px;color:var(--tx3)">Allgemeiner Nutzen</div></div>
<span style="color:var(--am);font-size:20px;font-weight:700">→</span>
<div style="padding:14px 20px;border-radius:10px;background:var(--pl);border:1.5px solid var(--pr);text-align:center"><div style="font-size:13px;font-weight:700;color:var(--pr)">Nutzen</div><div style="font-size:11px;color:var(--tx3)">Individueller Kundennutzen</div></div>
</div></div>

<!-- KARTEIKARTEN -->
<div class="sec" id="sales_kart"><h1>Karteikarten</h1><p class="sub">Klicke auf die Karte zum Umdrehen</p>
<div style="display:flex;flex-wrap:wrap;gap:10px;align-items:center;margin-bottom:18px">
<button class="bp1" onclick="salesqSt()">Quiz starten</button>
<span id="salesfcc" style="font-size:13px;color:var(--tx3)"><span id="salesfcCount">0</span> Karten · <span id="salesfcPool">0 im Stapel</span></span>
</div>
<div class="fc" id="salesfc" onclick="this.classList.toggle('flipped')">
<div class="fc-inner"><div class="fc-front"><div id="salesfcq"></div></div><div class="fc-back"><div id="salesfca"></div></div></div>
</div>
<div style="display:flex;gap:8px;justify-content:center;margin:18px 0">
<button onclick="window.TIS&&TIS.fc&&TIS.fc.prev&&TIS.fc.prev('salesfc')">← Zurück</button>
<button onclick="window.TIS&&TIS.fc&&TIS.fc.next&&TIS.fc.next('salesfc')">Weiter →</button>
<button onclick="window.TIS&&TIS.fc&&TIS.fc.shuffle&&TIS.fc.shuffle('salesfc')">Mischen</button>
</div>
<div id="salesfcList"></div></div>

<!-- QUIZ -->
<div class="sec" id="sales_quiz"><h1>Quiz</h1><p class="sub">Automatisch generiert aus den Karteikarten</p>
<div style="display:flex;gap:12px;flex-wrap:wrap;margin-bottom:16px">
<span style="font-size:13px;color:var(--tx3)">Richtig: <strong id="salesqTotR">0</strong></span>
<span style="font-size:13px;color:var(--tx3)">Falsch: <strong id="salesqTotW">0</strong></span>
<span style="font-size:13px;color:var(--tx3)">Quote: <strong id="salesqTotP">0%</strong></span></div>
<div style="margin-bottom:16px">
<div style="display:flex;gap:4px;margin-bottom:4px;align-items:center"><div style="width:10px;height:10px;border-radius:50%;background:var(--g);flex-shrink:0"></div><div style="font-size:12px;color:var(--tx2);width:70px">Sicher</div><div style="flex:1;height:8px;background:var(--s2);border-radius:4px;overflow:hidden"><div id="salesqBarG" style="height:100%;background:var(--g);border-radius:4px;transition:width .5s;width:0%"></div></div><div style="font-size:12px;color:var(--tx2);width:30px;text-align:right" id="salesqBarGn">0</div></div>
<div style="display:flex;gap:4px;margin-bottom:4px;align-items:center"><div style="width:10px;height:10px;border-radius:50%;background:var(--am);flex-shrink:0"></div><div style="font-size:12px;color:var(--tx2);width:70px">Wackelig</div><div style="flex:1;height:8px;background:var(--s2);border-radius:4px;overflow:hidden"><div id="salesqBarO" style="height:100%;background:var(--am);border-radius:4px;transition:width .5s;width:0%"></div></div><div style="font-size:12px;color:var(--tx2);width:30px;text-align:right" id="salesqBarOn">0</div></div>
<div style="display:flex;gap:4px;margin-bottom:4px;align-items:center"><div style="width:10px;height:10px;border-radius:50%;background:var(--r);flex-shrink:0"></div><div style="font-size:12px;color:var(--tx2);width:70px">Unsicher</div><div style="flex:1;height:8px;background:var(--s2);border-radius:4px;overflow:hidden"><div id="salesqBarR" style="height:100%;background:var(--r);border-radius:4px;transition:width .5s;width:0%"></div></div><div style="font-size:12px;color:var(--tx2);width:30px;text-align:right" id="salesqBarRn">0</div></div>
<div style="display:flex;gap:4px;align-items:center"><div style="width:10px;height:10px;border-radius:50%;background:var(--tx3);flex-shrink:0"></div><div style="font-size:12px;color:var(--tx2);width:70px">Noch offen</div><div style="flex:1;height:8px;background:var(--s2);border-radius:4px;overflow:hidden"><div id="salesqBarX" style="height:100%;background:var(--tx3);border-radius:4px;transition:width .5s;width:100%"></div></div><div style="font-size:12px;color:var(--tx2);width:30px;text-align:right" id="salesqBarXn">0</div></div></div>
<div class="pb"><div class="pf" id="salesqP"></div></div><div class="pt" id="salesqPT">Frage 1</div>
<div id="salesqC"></div>
<div style="text-align:center;margin-top:14px">
<button class="bp1" id="salesqN" onclick="salesqNx()" style="display:none">Nächste Frage</button>
<button class="bp1" id="salesqRS" onclick="salesqSt()" style="display:none">Weiter üben</button>
<button id="salesqReset" onclick="salesqReset()" style="display:none;margin-left:8px">Fortschritt zurücksetzen</button></div></div>

<!-- GLOSSAR -->
<div class="sec" id="sales_glossar"><h1>Glossar</h1><p class="sub">Fachbegriffe im Sales</p>
<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:8px">
<div class="c" style="padding:12px 16px"><strong style="color:var(--ac)">FAB</strong> <span style="color:var(--tx2)">— Feature-Advantage-Benefit. Merkmal → Vorteil → Nutzen.</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--ac)">RFP</strong> <span style="color:var(--tx2)">— Request for Proposal. Elektronische Ausschreibung für Hotelverträge.</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--ac)">TMC</strong> <span style="color:var(--tx2)">— Travel Management Company (z.B. Amex GBT, BCD, CWT).</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--g)">OTA</strong> <span style="color:var(--tx2)">— Online Travel Agency (z.B. Booking.com, Expedia, HRS).</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--g)">MICE</strong> <span style="color:var(--tx2)">— Meetings, Incentives, Conventions, Exhibitions.</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--g)">SMERF</strong> <span style="color:var(--tx2)">— Social, Military, Educational, Religious, Fraternal. Freizeitgruppen.</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--am)">Konsortium</strong> <span style="color:var(--tx2)">— Weltweit operierendes Reisebüro für Firmenbuchungen.</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--am)">Implant</strong> <span style="color:var(--tx2)">— Reisebüro auf dem Firmengelände, exklusiv für ein Unternehmen.</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--am)">Allotment</strong> <span style="color:var(--tx2)">— Zimmerkontingent für Tour Operator.</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--pr)">Farming</strong> <span style="color:var(--tx2)">— Reaktiver Verkauf (ernten).</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--pr)">Hunting</strong> <span style="color:var(--tx2)">— Proaktiver Verkauf (jagen).</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--pr)">Sandwich-Methode</strong> <span style="color:var(--tx2)">— Vorteile → Preis → Vorteile. Psychologische Preisminimierung.</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--r)">Ja-Strasse</strong> <span style="color:var(--tx2)">— Aneinandergereihte Ja-Fragen als Abschlusstechnik.</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--r)">Kinesik</strong> <span style="color:var(--tx2)">— Wissenschaft der Körpersprache.</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--r)">ABC-Analyse</strong> <span style="color:var(--tx2)">— Kunden in A (Top), B (Mitte), C (Basis) einteilen.</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--ac)">Pareto</strong> <span style="color:var(--tx2)">— 80/20-Regel: 80% Ergebnis von 20% Aufwand.</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--ac)">6W-Raster</strong> <span style="color:var(--tx2)">— Was, Wieviel, Wem, Wann, Wo, Wer.</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--g)">RN</strong> <span style="color:var(--tx2)">— Room Night. Eine Zimmerbelegung für eine Nacht.</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--g)">LRA</strong> <span style="color:var(--tx2)">— Last Room Availability. Letztes Zimmer zum Firmenpreis.</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--am)">Sales-Blitz</strong> <span style="color:var(--tx2)">— Intensive Kurzverkaufskampagne (max. 5 Min./Besuch).</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--am)">Elevator Pitch</strong> <span style="color:var(--tx2)">— 30–60 Sek. Verkaufsvortrag.</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--am)">Fam-Trip</strong> <span style="color:var(--tx2)">— Kostenlose Studienreise für Reisebüro-Mitarbeitende.</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--pr)">DISC/DISG</strong> <span style="color:var(--tx2)">— Dominanz, Initiative, Stetigkeit, Gewissenhaftigkeit.</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--pr)">Robinsonliste</strong> <span style="color:var(--tx2)">— Sperrliste: kein Telemarketing an diese Privatpersonen.</span></div>
</div></div>

`;

// KARTEIKARTEN
const SALES_CARDS = [
['Was bedeutet Sales im Gastgewerbe?','Aufbau langfristiger Beziehungen zwischen Kundschaft und Dienstleistungsunternehmen — nicht bloss Zimmer verkaufen. Einkaufsprozesse der Kundenseite verstehen.'],
['Welchen 2 Ps des Marketing-Mix wird Sales zugeordnet?','Place (Vertrieb/Distribution) und Promotion (Kommunikation). Place: Kundschaft zum Buchen bringen. Promotion: persönlicher Verkauf und Event-Marketing.'],
['Was ist der Unterschied zwischen direktem und indirektem Vertrieb?','Direkt = ohne Zwischenhändler. Indirekt = via Reisebüros, OTAs (Booking.com etc.).'],
['Was bedeutet «Farming» im Verkauf?','Reaktiver Verkauf — Anfragen bearbeiten, die von aussen kommen (Bankett, Rezeption, Restaurant). Man «erntet».'],
['Was bedeutet «Hunting» im Verkauf?','Proaktiver Verkauf — Aktive Neukundenakquise: Sales-/Account Management, Aussendienst. Man «jagt».'],
['Nenne 3 Vorteile des direkten Vertriebs.','1. Direkte Kommunikation → Loyalität. 2. Unmittelbare Steuerung/Kontrolle. 3. Keine Mittler-Gebühren/Provisionen.'],
['Nach welchen 3 Kriterien wird im Gastgewerbe segmentiert?','1. Buchungsgrösse (Einzel/Gruppe). 2. Aufenthaltszweck (Business/Leisure). 3. Vertragsverhältnis (mit/ohne Vertrag).'],
['Welche 4 Kernfragen muss die Verkaufsperson über den Einkaufsprozess beantworten?','1. Wie (Ablauf/Stufen)? 2. Wann (Fristen)? 3. Womit (Tools)? 4. Wer (Entscheidungsträger)?'],
['Was ist ein RFP?','Request for Proposal — elektronische Ausschreibung für Hotelverträge, z.B. über Lanyon, Nexus.'],
['Was ist eine TMC?','Travel Management Company — spezialisiertes Firmenreisebüro (Amex GBT, BCD Travel, CWT).'],
['Was ist ein Konsortium im Hotelvertrieb?','Weltweit operierendes Reisebüro, das Buchungen für Firmen abwickelt.'],
['Was ist ein Implant?','Reisebüro auf dem Firmengelände, exklusiv für dieses Unternehmen.'],
['Wie sieht die touristische Marktstruktur bei Paketreisen aus?','Gäste → Reisebüro → Veranstalter (Tour Operator) → Incoming Operator → Hotel.'],
['Ab wie vielen Zimmern spricht man von einer Gruppe?','Ca. ab 10 Zimmern (je nach Unternehmen).'],
['Was ist MICE?','Meetings, Incentives, Conventions, Exhibitions — Geschäftsreisegruppen/Tagungsgeschäft.'],
['Beschreibe den Sicherheitstyp.','Sucht Stabilität, Zuverlässigkeit, konstante Qualität. Preis sekundär. Tipp: Zertifikate betonen, persönliche Betreuung.'],
['Beschreibe den Wirtschaftlichkeitstyp.','Preis-Leistung, Best Deal. Geniesst Preisgespräch. Tipp: Hart verhandeln — liebt ebenbürtige Gegenpartei.'],
['Beschreibe den Prestigetyp.','Ansehen gewinnen. Markenbewusstsein, Status. Tipp: Neuheiten zuerst, Events einladen, Titel verwenden.'],
['Beschreibe den Bequemlichkeitstyp.','Alles aus einer Hand, Rundum-Service. Tipp: Arbeit abnehmen, Referenzen bereithalten.'],
['Wie verteilt sich die Wahrnehmung der Kommunikationsarten?','7% Worte/Inhalt, 38% Stimme/Tonfall, 55% Körpersprache.'],
['Nenne die 4 Ebenen des 4-Ohren-Modells.','1. Sachebene (informieren). 2. Selbstoffenbarung (kundgeben). 3. Beziehungsebene (Haltung). 4. Appellebene (veranlassen).'],
['Warum sind die ersten 30 Sekunden bei Neukunden entscheidend?','Erster Eindruck haftet Jahre. Korrektur ist sehr schwierig und aufwendig.'],
['Was sind offene Fragen und wofür eignen sie sich?','W-Fragen (wer, wie, warum). Info gewinnen, Gespräch im Fluss halten. Ideal für Bedarfsanalyse.'],
['Was ist eine Alternativfrage?','Bietet nur Varianten der Zustimmung («KW 50 oder 51?»). Keine Nein-Option. Gut für Abschluss.'],
['Was ist eine Gegenfrage?','Reagiert auf Einwände, gewinnt Zeit. «Preis zu hoch?» → «Im Verhältnis wozu?»'],
['Was ist eine Ja-Strasse?','Aneinandergereihte Ja-Fragen als Abschlusstechnik — eleganteste Form ohne Druckgefühl.'],
['Nenne die 7 Phasen des Verkaufsgesprächs.','1. Vorbereitung → 2. Warm-up → 3. Bedarfsanalyse → 4. Produktpräsentation → 5. Preisnennung → 6. Abschluss → 7. Nachbearbeitung.'],
['Was ist das Trichtermodell in der Bedarfsanalyse?','Mit breiten Fragen beginnen, schrittweise einschränken. Bedürfnisse herausfinden (bewusste + unbewusste).'],
['Was ist die FAB-Technik?','Feature-Advantage-Benefit: Merkmal → Vorteil → individueller Kundennutzen. Immer nur eine Kette.'],
['Nenne ein FAB-Beispiel.','Merkmal: 24h-Rezeption. → Vorteil: Jederzeit anreisen. → Nutzen: Terminlich flexibel, keine Sorgen bei Verspätung.'],
['Was sind sachliche und emotionale Kaufmotivatoren?','Sachlich = «Mehr» (Effizienz, Gewinn, Zeit). Emotional = «Weniger» (Aufwand, Risiko, Stress).'],
['Was ist die Sandwich-Methode?','1–3 Vorteile → PREIS → 1–3 Vorteile. Psychologische Minimierung. Keine Sprechpause nach Preis!'],
['Warum soll man «kostet» vermeiden?','Negative Assoziationen (Telefonkosten, Mietkosten). Reiner Preis wird automatisch als zu teuer empfunden.'],
['Nenne 4 Kaufsignale.','1. Direkter Kaufwunsch. 2. Fragen nach dem «Danach». 3. Beschäftigung mit Details. 4. Zustimmendes Nicken.'],
['Warum darf man Kaufsignale nicht übersehen?','Wer weiter argumentiert statt abzuschliessen, riskiert Rückentwicklung des Kaufwunsches. Neue Zweifel!'],
['Nenne die 5 Schritte der Einwandbehandlung.','1. Verständnis → 2. Nachfragen → 3. FAB zum Einwand → 4. Rückversichern → 5. Erneuter Abschluss.'],
['Was bedeutet NEIN im Verkauf?','«Noch Etwas Input Nötig» — Einwände signalisieren Interesse!'],
['Nenne die 5 Preisverhandlungs-Strategien.','1. Nutzenargumentation (kostet nichts!). 2. Zugaben. 3. Preis+Leistung kürzen. 4. Preissenkung. 5. Kein Abschluss.'],
['Was ist ein Elevator Pitch?','30–60 Sek.: «Für Sie (Zielgruppe) und Ihr (Problem) ist (Produkt) eine (Kategorie) mit (Hauptvorteil).»'],
['Was ist ein Sales-Blitz?','Intensive Kurzverkaufskampagne, max. 5 Min./Besuch, eine Kernaussage, Infobeschaffung.'],
['Was ist ein Fam-Trip?','Familiarisation Trip — kostenlose Studienreise für Reisebüromitarbeitende/Travel Manager.'],
['Nenne die 5 Schritte der Verkaufsplanung.','1. Analyse → 2. Ziele → 3. Strategie → 4. Massnahmen → 5. Budget.'],
['Was besagt die Pareto-Regel im Verkauf?','80% Ergebnisse mit 20% Aufwand. 20% der Kunden = 80% des Umsatzes.'],
['Was ist die ABC-Analyse?','A = Top-Kunden (intensivste Betreuung). B = Mitte (Potenzial für A). C = geringste Bedeutung (standardisiert).'],
['Was sind die 6Ws im Zielraster?','Was (Zielinhalt), Wieviel (Zahl/%), Wem (Segment), Wann (Frist), Wo (Markt), Wer (Verantwortung).'],
['Was umfasst die primäre Verkaufsplanung?','Nach aussen: Ziele nach Produkten/Kunden/Regionen/Zeiträumen + Einsatzplanung → Sales & Marketingplan.'],
['Was umfasst die sekundäre Verkaufsplanung?','Nach innen: Organisation, Personalplanung, Weiterbildung, Entlöhnung, Verkaufsmittel.'],
['Was sind die zwei Arten von Airline-Geschäft?','1. Crew-Aufenthalte (regelmässig, planbar). 2. Layover (ad-hoc bei Störungen).'],
['Nenne 5 wichtige Tradeshows im Hotelverkauf.','IMEX (MICE), IBTM (Corporate), WTM (Tour Operator), ILTM (Luxus), ITB Berlin (global).'],
['Was ist LRA?','Last Room Availability — Garantie, dass das letzte Zimmer zum Firmenpreis verfügbar ist.'],
['Warum ist die Nachbearbeitung so wichtig?','Sie entscheidet über das Folgegeschäft! Ohne Dankesnachricht, pünktliches Angebot und Abteilungsinfo ist alles wertlos.'],
];

// REGISTRIERUNG
window.TIS = window.TIS || {};
window.TIS.courses = window.TIS.courses || {};
window.TIS.courses.sales = {
  config: courseConfig,
  html: courseHTML,
  flashcards: SALES_CARDS,
};

})();
