// ===== KURS: SALES =====
// Modul für This Is Student — Sales (Semester 5 BWL)
// Dozent: Christian Gottstein · SHL Schweizerische Hotelfachschule Luzern
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

<!-- SALES ÜBERSICHT -->
<div class="sec" id="sales">
<div style="border-radius:24px;padding:36px 32px;margin-bottom:32px;background:linear-gradient(135deg,rgba(56,182,232,.06),rgba(184,56,232,.04));border:1px solid var(--bd);position:relative;overflow:hidden">
<div style="position:absolute;top:-40px;right:-40px;width:160px;height:160px;border-radius:50%;background:linear-gradient(135deg,rgba(56,182,232,.1),rgba(184,56,232,.08))"></div>
<div style="position:relative;z-index:1">
<div style="font-size:12px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:var(--ac);margin-bottom:8px">Semester 5 · Betriebswirtschaft</div>
<h1 style="font-size:32px;letter-spacing:-.6px;margin-bottom:8px">Sales</h1>
<p style="font-size:15px;color:var(--tx2);margin-bottom:0">Dozent: Christian Gottstein · SHL Schweizerische Hotelfachschule Luzern</p>
</div></div>

<div class="hl">Durchgängiges Fallbeispiel: <strong>Hotel &amp; Restaurant «Bellevue»</strong> — 4-Sterne-Superior in Luzern, 120 Zimmer, zwei Restaurants, Wellnessbereich, 5 Tagungsräume (20–200 Personen). Familie Meier, 3. Generation. Sales-Team: <strong>Lisa Meier</strong> (Director of Sales), <strong>Marc Brunner</strong> (Corporate &amp; MICE), <strong>Sophie Keller</strong> (Leisure, Tour Operator &amp; Events).</div>

<div style="font-size:13px;font-weight:600;letter-spacing:1px;text-transform:uppercase;color:var(--tx3);margin-bottom:14px">Theorie · 3 Kapitel</div>
<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:12px;margin-bottom:36px">
<div class="c ck" onclick="go('sales_kap1')" style="padding:20px 22px;display:flex;gap:14px;align-items:flex-start"><div style="width:32px;height:32px;border-radius:10px;background:var(--al);color:var(--ac);display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0">1</div><div><div class="ct2">Einordnung Verkauf</div><div class="cd">Marketing-Mix 4Ps, Vertrieb direkt/indirekt, Segmente, Einkaufsprozesse, Kundentypen</div></div></div>
<div class="c ck" onclick="go('sales_kap2')" style="padding:20px 22px;display:flex;gap:14px;align-items:flex-start"><div style="width:32px;height:32px;border-radius:10px;background:var(--gl);color:var(--g);display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0">2</div><div><div class="ct2">Verkaufsgespräche</div><div class="cd">Kommunikation, Fragetechniken, 7 Phasen, FAB-Technik, Preisnennung, Abschluss, Einwände</div></div></div>
<div class="c ck" onclick="go('sales_kap3')" style="padding:20px 22px;display:flex;gap:14px;align-items:flex-start"><div style="width:32px;height:32px;border-radius:10px;background:var(--pl);color:var(--pr);display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0">3</div><div><div class="ct2">Verkaufsplanung</div><div class="cd">Verkaufsmassnahmen, Analyse, Pareto, ABC, 6W-Ziele, Strategie, Budget</div></div></div></div>

<div style="font-size:13px;font-weight:600;letter-spacing:1px;text-transform:uppercase;color:var(--tx3);margin-bottom:14px">Lerntools</div>
<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:12px">
<div class="c ck" onclick="go('sales_mind')" style="text-align:center;padding:24px 16px"><div style="font-size:24px;font-weight:700;background:var(--grad);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;margin-bottom:6px">3</div><div class="ct2">Zusammenfassung</div><div class="cd">Alle Kapitel</div></div>
<div class="c ck" onclick="go('sales_kart')" style="text-align:center;padding:24px 16px"><div id="ltSalesCards" style="font-size:24px;font-weight:700;background:var(--grad);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;margin-bottom:6px">50</div><div class="ct2">Karteikarten</div><div class="cd">Klicken &amp; repetieren</div></div>
<div class="c ck" onclick="go('sales_quiz')" style="text-align:center;padding:24px 16px"><div id="ltSalesQuiz" style="font-size:24px;font-weight:700;background:var(--grad);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;margin-bottom:6px">50</div><div class="ct2">Quiz</div><div class="cd">Mit Lernfortschritt</div></div>
<div class="c ck" onclick="go('sales_glossar')" style="text-align:center;padding:24px 16px"><div style="font-size:24px;font-weight:700;background:var(--grad);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;margin-bottom:6px">A–Z</div><div class="ct2">Glossar</div><div class="cd">Fachbegriffe</div></div>
</div>
</div>

<!-- ============================================ -->
<!-- KAP 1: EINORDNUNG VERKAUF                    -->
<!-- ============================================ -->
<div class="sec" id="sales_kap1"><h1>Einordnung Verkauf</h1><p class="sub">Kapitel 1 — Warum Sales, Marketing-Mix, Vertriebsarten, Segmente, Einkaufsprozesse, Kundentypen</p>

<div class="hl"><strong>Lernziele Kapitel 1:</strong> Aufgaben einer Verkaufsperson beschreiben und mit Praxisbeispielen belegen · Schnittstellen des Verkaufs mit anderen Abteilungen benennen · Die wichtigsten Segmentgruppen und deren Einkaufsprozesse und -beteiligte in eigenen Worten erläutern.</div>

<div style="display:flex;gap:8px;margin:12px 0 4px"><button style="font-size:11px;padding:4px 10px" onclick="this.parentElement.nextElementSibling.querySelectorAll('.tl-item').forEach(i=>i.classList.add('open'))">Alle aufklappen</button><button style="font-size:11px;padding:4px 10px" onclick="this.parentElement.nextElementSibling.querySelectorAll('.tl-item').forEach(i=>i.classList.remove('open'))">Alle schliessen</button></div>
<div class="tl">

<div class="tl-item"><div class="tl-num tl-num-b">1.1</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Einleitung — Warum Sales im Gastgewerbe?</div><div class="tl-merksatz">«Wir verkaufen keine Zimmer — wir verkaufen Lösungen.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body">
Ob wir ein Produkt verkaufen, eine Dienstleistung anbieten, eine Urlaubsdestination schmackhaft machen oder bei der Geschäftsleitung um eine Gehaltserhöhung bitten — immer geht es darum, jemanden von «etwas» zu überzeugen. Alle Unternehmen wollen Umsatz und Ertrag steigern.<br><br>
Im Gastgewerbe bleibt der professionelle Verkauf jedoch oft auf der Strecke. Es geht dabei nicht bloss darum, einem Gast am Tisch ein Getränk zu verkaufen. Vielmehr geht es um den <strong>Aufbau langfristiger Beziehungen</strong> zwischen Kundschaft und Dienstleistungsunternehmen — z.B. zwischen einer Firma und einem Hotel, einer Reiseagentur und einem Restaurant. Dabei ist es unerlässlich zu verstehen, wie der Einkauf auf Seite des Verhandlungsgegenübers funktioniert. Nur dann kann die Verkaufsperson in Verhandlungen bestehen.
</div><div class="merksatz">Fallbeispiel Bellevue: Lisa Meier betont bei jedem Teammeeting: «Wenn die Novartis-Travel-Managerin bei uns bucht, kauft sie nicht einfach 50 Übernachtungen, sondern Zuverlässigkeit, schnellen Check-in für gestresste Geschäftsreisende und einen reibungslosen Abrechnungsprozess.» Diese Haltung durchzieht den gesamten Sales-Ansatz des Bellevue.</div></div></div>

<div class="tl-item"><div class="tl-num tl-num-b">1.2</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Gesamtkontext — Schnittstellen zu Marketing (4 Ps)</div><div class="tl-merksatz">«Sales gehört zu Place UND Promotion.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body">
Im strategischen Marketing unterscheidet man den Marketing-Mix in die sogenannten <strong>«4 P»</strong>:<br><br>
• <strong>Product</strong> — Produktgestaltung, Sortiment (tief/breit), Marke, Verpackung, Zusatzleistungen, Auskunftsstelle<br>
• <strong>Price</strong> — Preisfestlegung, Preisstrategie, Konditionen, Yield/Revenue Management, Preiselastizität<br>
• <strong>Place/Distribution</strong> — Absatzwege, direkter/indirekter/gemischter Vertrieb, Logistik — <strong>hier liegt Sales!</strong><br>
• <strong>Promotion</strong> — Kommunikationsmix: Werbung, Sponsoring, Product Placement, persönlicher Verkauf, Event-Marketing<br><br>
Sales/Verkauf wird dabei primär dem <strong>Place</strong> und der <strong>Promotion</strong> zugeordnet.<br><br>
Unter <strong>Place</strong> versteht man alle Entscheidungen und Massnahmen, die den Weg eines Produkts/einer Dienstleistung von der anbietenden zur verbrauchenden Person betreffen. Da wir ein Hotel nicht «liefern» können, bedeutet Sales in unserer Branche: die Kundschaft dazu bringen, in unserem Hotel zu buchen und die Dienstleistung vor Ort anzunehmen. Dazu gehören die langfristige Vertriebspolitik, die Wahl der Distributionskanäle, die Auswahl der richtigen Kundschaft und die Pflege der Vertriebs- und Gästebeziehungen.<br><br>
Unter <strong>Promotion</strong> fällt der allgemeine Kommunikations-Mix — neben klassischer Werbung und Sponsoring sind hier der <strong>persönliche Verkauf</strong> und das <strong>Event-Marketing</strong> angesiedelt, also direkte Werkzeuge des Sales.
</div></div></div>

<div class="tl-item"><div class="tl-num tl-num-b">1.2.1</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Direkter vs. indirekter Vertrieb</div><div class="tl-merksatz">«Farming = ernten was reinkommt. Hunting = aktiv neue Geschäfte jagen.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body">
<strong>Direkter Vertrieb</strong> umschreibt alle Verkaufsaktivitäten <strong>ohne</strong> Zwischenhändler, <strong>indirekter Vertrieb</strong> dagegen die Aktivitäten <strong>unter Einbezug</strong> von Zwischenhändlern (z.B. Reisebüros, OTAs wie Booking.com).<br><br>
Beim direkten Vertrieb unterscheidet man zwischen:<br>
• <strong>Reaktiver Verkauf «Farming»</strong> — Anfragen werden bearbeitet, die von aussen kommen: Bankett-/Event-Abteilung, Rezeption, Service im Restaurant. Man «erntet», was hereinkommt.<br>
• <strong>Proaktiver Verkauf «Hunting»</strong> — Aktive Neukundenakquise: Sales-/Account Management, Verkaufsabteilung, Aussendienst. Man «jagt» neue Geschäfte.<br><br>
<strong>Vorteile des direkten Vertriebs:</strong><br>
• Direkte Kommunikation mit der (potenziellen) Kundschaft → Loyalitätsaufbau<br>
• Unmittelbare Steuerung und Kontrolle, direkter Einfluss auf alle Massnahmen<br>
• Keine Aufwände für Mittler-Gebühren, Provisionen, Kommissionen<br><br>
<strong>Nachteile des direkten Vertriebs:</strong><br>
• Viele Märkte und Kundensegmente bleiben oft unbearbeitet (mangels Ressourcen)<br>
• Sales-Mitarbeitende müssen gefunden, geschult und geführt werden<br>
• Der Betrieb muss die Vertriebskosten vorfinanzieren und das Erfolgsrisiko tragen
</div><div class="merksatz">Fallbeispiel Bellevue: Marc Brunner (Corporate Sales) arbeitet vorwiegend im proaktiven direkten Vertrieb — er besucht Firmen in der Region Zentralschweiz und verhandelt Firmenraten. Sophie Keller pflegt dagegen auch den indirekten Vertrieb: Verträge mit Tour Operators wie Kuoni, TUI und DER Touristik, Kommissionsvereinbarungen mit Booking.com und Expedia. Die Rezeption betreibt reaktiven Verkauf: Walk-in-Gäste, Telefonanfragen, Upselling beim Check-in.</div></div></div>

<div class="tl-item"><div class="tl-num tl-num-g">1.3</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Markt- oder Verkaufssegmente</div><div class="tl-merksatz">«Segmentierungen variieren stark — es gibt keinen universellen Standard!»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body">
<strong>Segmentierung</strong> bedeutet die Aufteilung eines Markts in Kundschafts- oder Gästegruppen nach bestimmten Kriterien, die dann separat bearbeitet werden. Neben sozioökonomischen Merkmalen (Alter, Geschlecht, Ausbildung, Einkommen) spielen im Gastgewerbe besonders <strong>branchenspezifische Kriterien</strong> eine Rolle:<br><br>
• <strong>Buchungsgrösse</strong> — Einzel- oder Gruppenbuchungen (z.B. ab 9/10 Zimmern = Gruppe)<br>
• <strong>Aufenthaltszweck</strong> — Geschäftlich (Business) oder Freizeit/Privat (Leisure)<br>
• <strong>Vertragsverhältnis</strong> — Lokal/international, mit/ohne Vertrag, Reiserichtlinien ja/nein<br><br>
Die Segmentierung ist bei Hotelketten fast immer vorgegeben, unterscheidet sich aber je nach Unternehmen — IHG hat eine andere Einteilung als Marriott oder Radisson.
</div><div class="merksatz">Achtung: Entscheidend ist, dass Sie die Segmentierung Ihres Betriebs kennen und danach arbeiten. Es gibt keinen universellen Standard!</div></div></div>

<div class="tl-item"><div class="tl-num tl-num-g">1.4</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Einkaufsprozesse — der Blick auf die Kundenseite</div><div class="tl-merksatz">«Wer Fristen verpasst oder falsche Tools nutzt, verliert das Geschäft.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body">
Für Verkaufsmitarbeitende sind gründliche Kenntnisse der Abläufe auf Kundenseite unerlässlich. Die Einkaufsprozesse sind oft überraschend komplex, teuer und zeitaufwendig. Um erfolgreich zu verkaufen, muss man diese Abläufe kennen und sich danach richten — besonders, weil man auf geschulte <strong>Einkaufs-Fachleute</strong> (Einkäufer:innen, Travel Manager) trifft, die ganz andere Anforderungen haben als die Gäste selbst.<br><br>
Die zu beantwortenden <strong>Kernfragen</strong> über die Segmente/Kundschaft sind:<br>
• <strong>Wie?</strong> — Wie läuft der Einkaufsprozess ab, in welchen Stufen?<br>
• <strong>Wann?</strong> — Welche Fristen sind einzuhalten?<br>
• <strong>Womit?</strong> — Welche Tools/Mittel werden eingesetzt?<br>
• <strong>Wer?</strong> — Wer trifft die Entscheidungen bzw. ist daran beteiligt?
</div><div class="merksatz">Merksatz: Jedes Segment hat seinen eigenen Einkaufsprozess. Es ist die zentrale Aufgabe der Verkaufsperson, diese Prozesse für die wichtigen Zielgruppen zu kennen (oder in Erfahrung zu bringen) und sicherzustellen, dass sich das Hotel daran hält. Wer Fristen verpasst oder falsche Tools nutzt, verliert das Geschäft — unabhängig von der Qualität des Produkts.</div></div></div>

<div class="tl-item"><div class="tl-num tl-num-g">1.4.1</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Einzel-Geschäftsreisende / Corporate Transient</div><div class="tl-merksatz">«Managed Travel = RFP ab Mitte Jahr + Reiserichtlinien. Unmanaged = freie Hotelwahl.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body">
Dieses Segment wird nochmals unterteilt in Firmen mit professionellem Reiseeinkauf (managed travel) und solche, die den Reisenden weitgehend freie Hand lassen (unmanaged travel).<br><br>
<strong>Mit Reiserichtlinien (Managed Travel):</strong><br>
Sobald ein Unternehmen an einem Ort ein höheres Geschäftsreiseaufkommen hat, versucht es, via Vertrag mit einem Hotel einen Preisnachlass zu verhandeln. Diese Vertragsverhandlungen sind je nach Firmengrösse sehr aufwendig und beginnen oft bereits <strong>Mitte des Kalenderjahres für das Folgejahr</strong>.<br><br>
Grosse Unternehmen führen diesen Einkaufsprozess als <strong>RFP – Request for Proposal</strong> elektronisch durch, z.B. mit Tools wie <strong>Lanyon</strong> oder <strong>Nexus</strong>, oder beauftragen eine <strong>TMC – Travel Management Company</strong> (z.B. Amex GBT, BCD Travel, CWT). Diese Prozesse sind vom Hotel exakt einzuhalten — Abweichungen können zum Verlust des Vertrages führen.<br><br>
Reisende sind durch mehr oder weniger strikte <strong>Reiserichtlinien</strong> an die Vorgaben und die Hotelauswahl des Arbeitgebenden gebunden. Auch der Buchungsprozess kann an spezialisierte weltweit operierende Reisebüros (<strong>Konsortien</strong>) ausgelagert werden. Ist das Reisebüro auf dem Firmengelände und exklusiv für das Unternehmen tätig, spricht man von einem <strong>Implant</strong>.<br><br>
<strong>Ohne Vorgaben (Unmanaged Travel):</strong><br>
Der Gast/Bucher ist nicht durch Reiserichtlinien gebunden — die Hotelwahl ist seine individuelle Entscheidung. Viele orientieren sich an OTAs oder Reisebüros und buchen den tagesaktuellen Preis. Mitentscheidend sind oft Vielreise- oder Stammgastprogramme. Einige OTAs (z.B. Booking.com, HRS, Expedia) haben für KMU/SME spezielle Programme aufgelegt, damit auch kleinere Unternehmen ohne grosse Volumen an Nachlässe kommen.
</div><div class="merksatz">Fallbeispiel Bellevue: Marc Brunner erhält im Juni eine RFP-Einladung von der Roche AG über die Plattform Lanyon. Er muss bis zum 15. August die Raten für das nächste Jahr eingeben, inklusive Last-Room-Availability-Garantie, Stornierungsbedingungen und Amenity-Paket. Im September folgt ein persönliches Gespräch mit der Travel Managerin von Roche. Die Frist ist eng — ein verspätetes Angebot bedeutet automatisch Ausschluss vom Vertrag.</div></div></div>

<div class="tl-item"><div class="tl-num tl-num-g">1.4.2</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Einzel-Freizeitreisende / Transient Leisure</div><div class="tl-merksatz">«Veranstalter = statische Katalogpreise, 9–18 Monate Vorlauf. OTAs = dynamisch.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body">
Auch hier kann in «managed» (über Reisebüro/Paketreise) und «unmanaged» (Selbstbucher) unterschieden werden. Mit dem Aufkommen der OTAs stellen immer mehr Gäste ihre Reise selbst zusammen. Gleichzeitig sind viele Gäste von der Online-Vielfalt überfordert und bevorzugen die persönliche Beratung im Reisebüro.<br><br>
<strong>Veranstalter / Paketreisen — Touristische Marktstruktur:</strong><br>
Gäste/Kundschaft → Reisebüro (Retailer) → Veranstalter (Tour Operator) → Incoming Operator → Hotel/Restaurant<br><br>
Die Einkaufsprozesse bei Veranstaltern sind oft noch durch die Produktion von <strong>Katalogen/Broschüren</strong> geprägt, die einen langen Vorlauf haben und einmal gedruckt nicht mehr änderbar (statisch) sind. Bei Flugdestinationen müssen Veranstalter vorab Flugkapazitäten fest einkaufen — dieser Prozess beginnt <strong>9 bis 18 Monate im Voraus</strong>. Da oft zu diesem Zeitpunkt noch keine Hotelbudgets und Preisstrategien ausgearbeitet sind, werden Preise zunächst hoch angesetzt und dann kurzfristig durch Promotionen gesenkt.<br><br>
<strong>Einzelfreizeitreisende (Unmanaged):</strong><br>
Dank OTAs können Gäste fast alle Reisebestandteile selbst buchen. Eine Schlüsselrolle nehmen OTAs ein: Das Hotel muss auf diesen Portalen buchbar sein (12-monatige Verträge, Anbindung ans Reservierungssystem, Kommission). Die zweite Schlüsselrolle kommt dem Hotel selbst zu: durch Marketing die Gäste zur <strong>Direktbuchung</strong> zu überzeugen! Dieses Segment zeichnet sich durch <strong>dynamische Preise</strong> aus — Preise und Verfügbarkeiten werden der Marktnachfrage (Forecast) angepasst.
</div></div></div>

<div class="tl-item"><div class="tl-num tl-num-g">1.4.3</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Gruppensegmente &amp; Spezialgeschäft</div><div class="tl-merksatz">«Ab ca. 10 Zimmern = Gruppe. MICE, SMERF, Airlines — jedes mit eigenem Prozess.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body">
<strong>Geschäftsreisegruppen / MICE:</strong><br>
Ab ca. 10 Zimmern = Gruppe. Vielfältige Vorbereitungen: TN-Absprache, Koordination, Buchungs-/Zahlungsabwicklung. Oft über spezialisierte Agenturen (z.B. Plan2plan, Cvent, Meetingselect). Strikte Einhaltung von Formaten und Fristen nötig. Hotel-/Restaurantleistung ist oft nur ein Teil der Gesamtkosten.<br><br>
<strong>Freizeitreisegruppen / SMERF:</strong><br>
Werden vom Veranstalter oft als Serie eingekauft (z.B. x Personen jeden Montag + Freizimmer für Reiseführer). Gleiche Prozesse wie Paketreisen für Individuelle. Private Gruppen werden selten proaktiv akquiriert, sondern eher über Werbung vermarktet.<br><br>
<strong>Airlines:</strong><br>
Besonderes Geschäftsfeld nahe eines Flughafens.<br>
• <strong>Crew-Aufenthalte:</strong> regelmässig, planbar, oft mit Zusatzleistungen (Transfer, Wäsche). Langwieriger Einkaufsprozess mit hohem Wert auf Kontrolle/Sicherheit.<br>
• <strong>Layover:</strong> ad-hoc bei Störungen/Wetter — erfordert schnelle Reaktion der Operation.
</div><div class="merksatz">Fallbeispiel Bellevue: Sophie Keller bereitet sich auf die ITB Berlin vor. Sie hat im Vorfeld 15 Termine mit Tour Operators vereinbart — darunter TUI Schweiz, DER Touristik und Kuoni. Für die Sommersaison des übernächsten Jahres muss sie Allotments (Zimmerkontingente) und Raten anbieten. Gleichzeitig betreut Marc Brunner die MICE-Anfrage der Swisscom für eine 3-tägige Kadertagung mit 80 Teilnehmenden. Die Anfrage kam über Cvent — er muss innerhalb von 48 Stunden ein detailliertes Angebot einreichen.</div></div></div>

<div class="tl-item"><div class="tl-num tl-num-r">1.5</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Persönlichkeitsmodelle — 4 Kundentypen</div><div class="tl-merksatz">«Sicherheit, Wirtschaftlichkeit, Prestige, Bequemlichkeit — jeden anders ansprechen!»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body">
Persönlichkeitsmodelle werden eingesetzt, um Kund:innen und Gesprächspartner:innen einzuordnen, zu gruppieren und Massnahmen/Aktivitäten zu steuern. In der Regel werden die anzuwendenden Typisierungen vom Unternehmen vorgegeben.<br><br>
<strong>Sicherheitstyp:</strong><br>
Hat Angst vor Veränderungen, sucht Stabilität, zuverlässige Lieferanten und konstante Qualität. Wechselt ungern die Bezugsquelle. Preis ist sekundär — Seriosität und Güte zählen. <em>Tipp:</em> Optimale Sicherheit bieten, bei zugesicherten Eigenschaften nie enttäuschen, Zertifikate betonen, persönliche Betreuung anbieten.<br><br>
<strong>Wirtschaftlichkeitstyp:</strong><br>
Stark am Preis-Leistungs-Verhältnis interessiert, manchmal am niedrigsten Preis. Fragt nach Aktionen/Sonderangeboten. Geniesst das Preisgespräch. <em>Tipp:</em> Auf längeres Preisgespräch einstellen. Wenn nötig hart verhandeln — dieser Typ liebt eine ebenbürtige Gegenpartei.<br><br>
<strong>Prestigetyp:</strong><br>
Versucht durch Einkäufe Ansehen zu gewinnen. Hohes Markenbewusstsein, sucht Profilierung. Status (Kleidung, Fahrzeug, Büro) ist wichtig. <em>Tipp:</em> Bewunderung/Anerkennung zeigen, Neuheiten zuerst anbieten, zu Events einladen. Titel verwenden, wenn vorhanden.<br><br>
<strong>Bequemlichkeitstyp:</strong><br>
Liebt stabile, risikolose Verhältnisse und das Prinzip «Alles aus einer Hand». Wünscht Rundum-Service, Kontinuität, Zuverlässigkeit. <em>Tipp:</em> Jede Art von Arbeit abnehmen. Neues nur anbieten, wenn es echte Vorteile bringt und keinen Mehraufwand bedeutet. Referenzen bereithalten.<br><br>
<strong>Weitere Persönlichkeitsmodelle:</strong><br>
• <strong>DISC / DISG</strong> — Dominance, Inducement, Submission, Compliance (deutsch: Dominanz, Initiative, Stetigkeit, Gewissenhaftigkeit)<br>
• <strong>Myers-Briggs Type Indicator (MBTI)</strong> — 16 Persönlichkeitstypen basierend auf vier Dimensionen
</div><div class="merksatz">Fallbeispiel Bellevue: Die Travel Managerin der Novartis ist ein typischer Sicherheitstyp — sie will Verlässlichkeit, immer den gleichen Check-in-Prozess und klare Eskalationswege. Marc betont Zertifizierungen und den persönlichen Ansprechpartner. Der Einkäufer einer Beratungsfirma hingegen ist ein Wirtschaftlichkeitstyp — er vergleicht jedes Jahr drei Hotels und verhandelt hart um Raten. Marc bereitet sich mit klaren Zahlen zur Marktposition und kompetitiven Benchmarks vor.</div></div></div>

</div></div>

<!-- ============================================ -->
<!-- KAP 2: VERKAUFSGESPRÄCHE                     -->
<!-- ============================================ -->
<div class="sec" id="sales_kap2"><h1>Verkaufsgespräche</h1><p class="sub">Kapitel 2 — Kommunikation, Fragetechniken, 7 Phasen, FAB-Technik, Preisnennung, Abschluss, Einwände, Preisverhandlung</p>

<div class="hl"><strong>Lernziele Kapitel 2:</strong> Verbale/nonverbale Kommunikation beschreiben · 5 Fragetechniken anwenden · Verkaufsgespräch in 7 Phasen planen · Potenzialanalyse mit Fragetechniken · FAB-Technik anwenden · Einwände strukturiert behandeln · Bei Preiswiderstand profitable Lösungen entwickeln.</div>

<div style="display:flex;gap:8px;margin:12px 0 4px"><button style="font-size:11px;padding:4px 10px" onclick="this.parentElement.nextElementSibling.querySelectorAll('.tl-item').forEach(i=>i.classList.add('open'))">Alle aufklappen</button><button style="font-size:11px;padding:4px 10px" onclick="this.parentElement.nextElementSibling.querySelectorAll('.tl-item').forEach(i=>i.classList.remove('open'))">Alle schliessen</button></div>
<div class="tl">

<div class="tl-item"><div class="tl-num tl-num-b">2.1</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Kommunikation im Verkauf</div><div class="tl-merksatz">«Nur 7% Worte, 38% Stimme, 55% Körpersprache.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body">
Das lateinische Wort <em>communicatio</em> bedeutet «Verbindung» / «Mitteilung». Kommunikation kann <strong>verbal</strong> (durch Sprache) oder <strong>nonverbal</strong> (durch Körpersignale) erfolgen. Sie kann direkt (Face-to-face) oder indirekt (über ein Medium) stattfinden. Neben den sichtbaren, bewussten Elementen gibt es auch unsichtbare, unbewusste Anteile — den sogenannten <strong>Kommunikations-Eisberg</strong>.<br><br>
<strong>Gewichtung der Kommunikationsarten in der Wahrnehmung:</strong><br>
• <strong>7%</strong> — Worte / Inhalt<br>
• <strong>38%</strong> — Stimme / Tonfall<br>
• <strong>55%</strong> — Körpersprache
</div><div class="merksatz">Achtung: Nur 7% der Wahrnehmung entfällt auf den Inhalt! Das bedeutet nicht, dass Inhalt unwichtig ist — aber dass Körpersprache und Stimme massgeblich darüber entscheiden, ob Ihr Gegenüber Sie als kompetent, sympathisch und vertrauenswürdig wahrnimmt.</div></div></div>

<div class="tl-item"><div class="tl-num tl-num-b">2.1.1</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Verbale Kommunikation — Das 4-Ohren-Modell (Schulz von Thun)</div><div class="tl-merksatz">«Sender spricht mit 4 Schnäbeln, Empfänger hört mit 4 Ohren.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body">
Jede Äusserung («Nachricht») kann aus <strong>vier unterschiedlichen Richtungen</strong> angesehen und gedeutet werden. Das Modell zeigt, dass der Sender «mit vier Schnäbeln spricht» und der Empfänger «mit vier Ohren hört»:<br><br>
• <strong>Sachebene</strong> — Die beschriebene Sache: «Worüber ich informiere»<br>
• <strong>Selbstoffenbarungsebene</strong> — Was über die sprechende Person deutlich wird: «Was ich von mir selbst kundgebe»<br>
• <strong>Beziehungsebene</strong> — Was über die Beziehung offenbart wird: «Was ich von dir halte oder wie wir zueinanderstehen»<br>
• <strong>Appellebene</strong> — Wozu der Empfänger veranlasst werden soll: «Wozu ich dich veranlassen möchte»<br><br>
<strong>Beispiel im Verkauf:</strong> Ein Firmenkunde sagt: «Ihr Mitbewerber hat mir aber einen besseren Preis angeboten.»<br>
— Sachebene: Ein anderes Hotel bietet günstigere Raten.<br>
— Selbstoffenbarung: «Ich bin preisbewusst und gut informiert.»<br>
— Beziehungsebene: «Ich erwarte, dass Sie mir entgegenkommen.»<br>
— Appellebene: «Senken Sie Ihren Preis!»<br>
Wer als Verkäufer nur auf der Sachebene reagiert, übersieht die wahre Botschaft.
</div></div></div>

<div class="tl-item"><div class="tl-num tl-num-b">2.1.2</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Nonverbale Kommunikation</div><div class="tl-merksatz">«Die ersten 30 Sekunden entscheiden — der erste Eindruck haftet Jahre.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body">
Nonverbale Kommunikation (auch nichtsprachliche Kommunikation) wird überwiegend durch <strong>Körpersprache</strong> ausgedrückt, aber auch durch <strong>paraverbale Kommunikation</strong> (Stimmeigenschaften, Sprechverhalten, Lachen, Seufzen, Räuspern etc.).<br><br>
Bei Neukund:innen entscheiden bereits die <strong>ersten 30 Sekunden</strong>, ob das Gegenüber Sie spontan mag und ob die Chemie stimmt. Der erste Eindruck ist enorm wichtig und haftet häufig über viele Jahre — die Korrektur einmal abgespeicherter Eindrücke ist sehr schwierig und aufwendig.<br><br>
Die Körpersprache (<strong>Kinesik</strong>) kann nur schwer «lügen», da viele Aspekte unbewusst und unkontrolliert ablaufen. Wer sie entschlüsseln kann, hat eine exzellente Voraussetzung, sich in seine Kund:innen hineinzuversetzen und deren Motive zu erkennen.<br><br>
<strong>Die wichtigsten körpersprachlichen Signale:</strong> Gestik &amp; Motorik · Körperhaltung · Mimik · Blickkontakt · Räumliches Verhalten · Paraverbale Kommunikation · Kleidung, Frisur, Statussymbole
</div></div></div>

<div class="tl-item"><div class="tl-num tl-num-g">2.2</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Fragetechniken — «Wer fragt, der führt»</div><div class="tl-merksatz">«Fragen und Zuhören sind Ihre wichtigsten Verkaufsinstrumente — und sie kosten nichts!»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body">
Mit Fragen können Sie Einwände geschickt behandeln, Meinungen beeinflussen, Informationen gewinnen und den Gesprächsverlauf bestimmen.<br><br>
<strong>Offene Fragen (W-Fragen):</strong> Wer, wie, warum etc. Gewinnen Informationen, halten Gespräche im Fluss, bauen Vertrauen auf. Einsatz: Bedarfsanalyse, Gesprächseröffnung. Bsp: «Welche Anforderungen hat Ihre Tagung?»<br><br>
<strong>Geschlossene Fragen:</strong> Ja/Nein-Antwort. Engen Reaktionsmöglichkeiten stark ein. Erleichtern dem Gegenüber, Gespräche schnell zu beenden. Nur bewusst taktisch einsetzen! Bsp: «Haben Sie schon bei uns übernachtet?»<br><br>
<strong>Alternativfragen:</strong> Mischung zwischen offen/geschlossen. Führt Entscheidung herbei, bietet nur Varianten der Zustimmung. Einsatz: Abschluss. Bsp: «Wollen Sie die VA in der 50. oder 51. KW platzieren?»<br><br>
<strong>Suggestivfragen:</strong> Keine echte Frage — will beeinflussen/Meinung vorgeben. Manipulierender Charakter ist offensichtlich! Sehr vorsichtig einsetzen! Bsp: «Es wäre doch sicherlich praktischer, gleich alle Seminare an einem Ort zusammenzufassen?»<br><br>
<strong>Gegenfragen:</strong> Reagieren auf Einwände, gewinnen Zeit, fordern das Gegenüber, seine Aussage klarer darzulegen. Bsp: Kunde: «Ist der Preis nicht zu hoch?» — Sie: «Im Verhältnis wozu?»<br><br>
<strong>Ermittlungsfragen:</strong> Offene Frage, wesentlicher Bestandteil der Bedarfsanalyse. Gehört in die Anfangsphase. Bsp: «Für wie viele Mitarbeitende benötigen Sie Übernachtungen?»<br><br>
<strong>Rhetorische Fragen:</strong> Keine Antwort erwartet. Bringt Gespräch wieder in Gang und steuert Richtung Zielerreichung. Bsp: «Liegt das Problem nicht darin, dass Ihre MA zu viel Zeit mit der Hotelsuche verbringen?»<br><br>
<strong>Dirigierende Fragen:</strong> Lenkt Kund:innen auf ein wichtiges Thema. Weist auf weitere Vorteile/Nutzen hin. Bsp: «Können wir bitte noch über die Buchungswege sprechen?»<br><br>
<strong>Ja-Fragen:</strong> Lässt fast keine andere Antwort als «Ja» zu. Aneinandergereiht = <strong>«Ja-Strasse»</strong> als Abschlusstechnik. Bsp: «Wollen Sie sich nicht auch die Arbeit erleichtern und Zeit gewinnen?»
</div></div></div>

<div class="tl-item"><div class="tl-num tl-num-g">2.3</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Verkaufsgespräche — Der Ablauf in 7 Phasen</div><div class="tl-merksatz">«Vorbereitung → Warm-up → Bedarfsanalyse → Präsentation → Preis → Abschluss → Nachbearbeitung»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body">
Ein professionelles Verkaufsgespräch folgt einem schematischen Ablauf mit klar definierten Phasen. Ein Einwand kann jederzeit auftreten und führt nach seiner Behandlung zum erneuten Abschlussversuch.<br><br>
<strong>Phase 1: Vorbereitung</strong><br>
Schon bei der Vorbereitung wird der erste Eindruck vermittelt. Terminvereinbarung &amp; Bestätigung (wann, wo, wer, evtl. Agenda). Recherche Bestandskund:innen: Kundenhistorie, Umsätze, Reklamationen. Recherche Neukund:innen: Internet, Medien, LinkedIn. Gesprächsziele definieren. Rückversicherung des Termins am Tag davor.<br><br>
<strong>Phase 2: Begrüssung / Warm-up</strong><br>
Bei Kaltakquise/Erstkontakt zunächst nach der richtigen Ansprechperson (ASP) fragen. Dann: Begrüssung, Vorstellung, Smalltalk. Doppelter Aufbau: <strong>Beziehungsaufbau</strong> (sympathisch, freundlich, unaufdringlich) und <strong>Kompetenzaufbau</strong> (Produkt- &amp; Marktkenntnis). Signale der Kund:innen beachten!<br><br>
<strong>Phase 3: Potenzial-/Bedarfsanalyse</strong><br>
Bedürfnisse herausfinden (bewusste + unbewusste). Vor allem <strong>offene Fragen</strong> verwenden (Suggestivfragen hier nicht gut!). <strong>Trichtermodell:</strong> Mit breiten Fragen beginnen, schrittweise einschränken. Verkaufsperson: fragen, zuhören, steuern, Beraterfunktion einnehmen.<br><br>
<strong>Phase 4: Produktpräsentation</strong><br>
Produktmerkmale mit Bedürfnissen verknüpfen (aus Bedarfsanalyse!). Kern: <strong>Nutzenargumentation: Merkmal → Vorteil → Nutzen (FAB)</strong>. (Kauf-)Signale beachten. Verkaufsmittel nutzen (Broschüren, Fotos, Medien).<br><br>
<strong>Phase 5: Preisnennung</strong><br>
Erst unmittelbar vor dem Abschluss. Preis nie ohne Nutzen («nackt») nennen. «Einbetten» in Nutzenargumente (<strong>Sandwich-Methode</strong>).<br><br>
<strong>Phase 6: Verkaufsabschluss</strong><br>
Muss zwingend durch die Verkäufer:innen eingeleitet werden. Kaufsignale erkennen! Nutzen zusammenfassen.<br><br>
<strong>Phase 7: Nachbearbeitung</strong><br>
Dankeschön-Nachricht. Information an alle betroffenen Abteilungen. Kundenprofil pflegen (PMS, Verkaufssoftware). Follow-ups setzen.
</div><div class="merksatz">Fallbeispiel Bellevue — Vollständiges Verkaufsgespräch: Marc trifft die neue Travel Managerin einer Beratungsfirma. 1. Vorbereitung: 200 MA, ca. 400 RNs/Jahr in Luzern — Ziel: 200 RNs zu CHF 220. 2. Warm-up: «Willkommen im Bellevue! Herzlichen Glückwunsch zur neuen Position!» 3. Bedarfsanalyse mit offenen Fragen. 4. FAB: Express-Check-in → sofortiger Zimmerzugang → keine Zeitverluste. 5. Sandwich: Flexibles Stornierungsrecht + Frühstück → CHF 225 → inkl. City Tax und Upgrade bei Verfügbarkeit. 6. Abschluss bei Kaufsignal (TM nickt). 7. Am selben Abend Dankesnachricht, am nächsten Tag Vertragsentwurf, Rezeption und Revenue Management informiert.</div></div></div>

<div class="tl-item"><div class="tl-num tl-num-r">2.4</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Nutzenargumentation — FAB-Technik (Feature–Advantage–Benefit)</div><div class="tl-merksatz">«Es wird nie das Produkt gekauft — es wird immer der Nutzen/Gewinn erworben.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body">
Kundschaftsorientierte Argumentation ist weit mehr als das Aufzählen positiver Produktmerkmale. Nicht jedes Argument ist für jede Klientel passend! Nennen Sie nur die Argumente, welche die Kundschaft braucht, und schildern Sie gleichzeitig, welchen Nutzen sie davon hat.<br><br>
<strong>Merkmal</strong> → Sachliche Produkteigenschaft<br>
<strong>Vorteil</strong> → Allgemeiner Nutzen des Merkmals<br>
<strong>Nutzen</strong> → Individueller Kundennutzen<br><br>
Wichtig: Immer nur <strong>ein Merkmal, ein Vorteil und ein Nutzen</strong> in einer Kette darstellen. Überlegen Sie sich zuerst, welchen Nutzen Sie «verkaufen» möchten!<br><br>
<strong>Beispiel FAB-Kette:</strong><br>
Merkmal: «Unsere Rezeption ist 24 Stunden besetzt.»<br>
Vorteil: «Sie können jederzeit anreisen.»<br>
Nutzen: «Sie sind terminlich viel flexibler und brauchen sich auch bei Verspätungen um die Anreise keine Gedanken zu machen.»<br><br>
<strong>Falsch vs. Richtig:</strong><br>
Falsch: «Dieses Zimmer hat ein Queen-Size Bett.» (nur Merkmal, kein Nutzen)<br>
Richtig: «In diesem Queen-Size-Bett haben Sie genug Platz und schlafen gut, sodass Sie morgen ausgeruht zu Ihrer Besprechung gehen.»<br><br>
<strong>Kaufmotivatoren — sachlich &amp; emotional:</strong><br>
Sachlich = «Mehr»: Mehr Effizienz, mehr Gewinn, mehr Zeit, mehr Sicherheit<br>
Emotional = «Weniger»: Weniger Aufwand, weniger Risiko, weniger Kosten, weniger Stress
</div><div class="merksatz">Fallbeispiel Bellevue: Marc präsentiert der Novartis-Travel-Managerin: Merkmal: «Express-Check-in mit digitalem Zimmerschlüssel via App.» Vorteil: «Ihre Mitarbeitenden können direkt aufs Zimmer — ohne Wartezeit.» Nutzen: «Das spart nach langen Anreisetagen wertvolle Zeit und reduziert den Reisestress — und Sie erhalten weniger Beschwerden.» → Sachlich: «mehr Zeit» + Emotional: «weniger Stress».</div></div></div>

<div class="tl-item"><div class="tl-num tl-num-r">2.5</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Preisnenntechniken — Die Sandwich-Methode</div><div class="tl-merksatz">«Preis nie alleine nennen — immer verpackt in Vorteile. Keine Sprechpause nach dem Preis!»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body">
Das Preisgespräch soll immer erst <strong>unmittelbar vor dem Abschluss</strong> erfolgen. Die Kundschaft muss ihren Bedarf erkannt haben, ihre persönlichen Vorteile sehen und den Kaufwunsch empfinden.<br><br>
Versuchen Sie zunächst, dem Preis auszuweichen: «Ich möchte Ihnen gerne das richtige Produkt zum richtigen Preis anbieten. Darf ich Ihnen deshalb vorab einige Fragen stellen?»<br><br>
<strong>Psychologische Preisminimierung:</strong><br>
Das Nennen des reinen Preises ohne Erklärung ist fatal! Das Wort «kostet» schafft negative Assoziationen (Telefonkosten, Mietkosten, Heizkosten…).<br>
<strong>So nicht:</strong> Kunde: «Was kostet die Übernachtung?» — Verkäufer: «Die Übernachtung kostet 262.30 CHF.» → Automatisch als zu teuer empfunden!<br><br>
<strong>Die Sandwich-Methode:</strong> Verpacken Sie den Preis in die Mitte von Vorteilen:<br>
<strong>1–3 Vorteile → PREIS → 1–3 Vorteile</strong><br>
Dadurch wird der Preis psychologisch minimiert. Nach der Preisnennung <strong>keine Sprechpause</strong> entstehen lassen!<br><br>
<strong>Richtig:</strong> «Die Übernachtung im schönen grossen Einzelzimmer mit Blick auf den See bieten wir Ihnen für CHF 262.30 an, das inkludiert auch das reichhaltige Frühstück vom Buffet und die City Tax.»<br><br>
Wenn die Kundschaft nochmals nach dem Preis fragt (Beweis, dass das Sandwich funktioniert hat!), antworten Sie erneut mit einem reduzierten Sandwich.
</div><div class="merksatz">Merksatz: Nennen Sie den Preis niemals alleine — sondern immer wohldosiert verpackt in Vorteile. Lassen Sie die Kundschaft spüren: «Ich bekomme etwas für mein Geld» statt «Der will ja nur mein Geld».</div></div></div>

<div class="tl-item"><div class="tl-num tl-num-r">2.6</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Verkaufsabschluss — Kaufsignale &amp; Abschlusstechniken</div><div class="tl-merksatz">«Kaufsignale niemals übersehen! Wer weiter argumentiert statt abzuschliessen, riskiert Rückentwicklung.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body">
Der Abschluss muss <strong>zwingend durch die Verkäufer:innen</strong> eingeleitet werden.<br><br>
<strong>Kaufsignale erkennen:</strong><br>
• Direkter Kaufwunsch wird geäussert<br>
• Fragen nach dem «Danach» (Kundendienst, Garantie, Betreuung)<br>
• Beschäftigung mit Details (Zubehör, Ausstattung, Preis)<br>
• Immer öftere Zustimmung und Identifizierung mit dem Produkt<br>
• Fragen nach Bewährung und Referenzen<br>
• Hinzuziehen weiterer Personen<br>
• Zustimmendes Nicken, starkes Interesse in Körperhaltung und Mimik<br><br>
<strong>Abschlusstechniken:</strong><br>
• <strong>Probeabschluss:</strong> «Angenommen, Sie haben sich zum Kauf entschlossen, …» — Testen der Bereitschaft.<br>
• <strong>Zusammenfassung:</strong> Die bestätigten Argumente konzentriert zusammenfassen — stärkstes Argument am Schluss.<br>
• <strong>Ja-Fragen-Strasse:</strong> Zusammenfassung + Bestätigungen einholen + abschliessen. Eleganteste Form — kein Druckgefühl.<br>
• <strong>Empfehlungstechnik:</strong> Sachlich: «Es ist empfehlenswert, sich schnell zu entscheiden, da die Nachfrage hoch ist.»<br>
• <strong>Alternativtechnik:</strong> Zwei positive Alternativen zur Wahl stellen. Bevorzugte Alternative mit Nutzen versehen.<br>
• <strong>Direkte Bestätigung:</strong> Nur bei eindeutiger Kaufbereitschaft: «Jawohl, ich notiere den Ballsaal. Sie erhalten die Vereinbarung bis übermorgen.»
</div><div class="merksatz">Warnung: Kaufsignale niemals übersehen! Wer nach erkennbaren Kaufsignalen weiter argumentiert statt zum Abschluss überzugehen, riskiert die Rückentwicklung des Kaufwunsches. Unnötige Argumente können neue Zweifel wecken und den Kaufwunsch ersticken.</div></div></div>

<div class="tl-item"><div class="tl-num tl-num-r">2.7</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Einwandbehandlung — 5 Schritte</div><div class="tl-merksatz">«NEIN = Noch Etwas Input Nötig. Einwände fördern die Kommunikation!»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body">
Einwände und Fragen sind normale Bestandteile einer Verhandlung. Begrüssen Sie Einwände — sie fördern die Kommunikation und signalisieren Interesse!<br><br>
Verwandeln Sie in <strong>fünf Schritten</strong> einen Einwand in Zustimmung:<br>
<strong>1. Verständnis zeigen → 2. Nachfragen → 3. FAB zum Einwand → 4. Rückversichern → 5. Erneuter Abschluss</strong><br><br>
Diese Abfolge funktioniert, weil Sie mit Schritt 1 und 2 «die Luft herauslassen» und das Gegenüber auf die rationale Ebene zurückholen. Erst in Schritt 3 sachliche Klärung. Schritt 4 prüft ob bereinigt. Schritt 5 ist der erneute Abschlussversuch — nach jeder Einwandbehandlung zwingend!<br><br>
<strong>Tipps:</strong> Einwände als Prüfstein und Signal sehen. Auf alle denkbaren Einwände vorbereiten. Aufmerksam zuhören. Nie unterbrechen! Vorwand im Einwand erkennen. Korrekt, höflich, ruhig bleiben. Nicht als «Besserwisser:in» auftreten. Wissen Sie keine Antwort — offen zugeben.
</div><div class="merksatz">Fallbeispiel Bellevue: Die Travel Managerin sagt: «Ihr Hotel hat keinen Pool — das ist für unsere Mitarbeitenden wichtig.» 1. Verständnis: «Das verstehe ich — Entspannung nach einem langen Arbeitstag ist wichtig.» 2. Nachfragen: «Nutzen Ihre Reisenden den Pool aktiv zum Schwimmen oder eher zur Entspannung?» 3. FAB: «Unser Wellnessbereich mit Sauna, Dampfbad und Ruheraum bietet genau diese Entspannung — und dazu persönliche Betreuung.» 4. Rückversichern: «Wäre das eine gute Alternative?» 5. Abschluss: «Dann lassen Sie uns die Konditionen finalisieren…»</div></div></div>

<div class="tl-item"><div class="tl-num tl-num-r">2.8</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Preisverhandlung — 5 Strategien</div><div class="tl-merksatz">«Einfach den Preis senken ist kein Verhandeln — es geht um Profitabilität!»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body">
Preisverhandlungen sind ein normaler Bestandteil jedes Verkaufsgesprächs. Eine der bekanntesten Einkaufsstrategien: niemals das erste Angebot akzeptieren. Kennen Sie Ihren Verhandlungsspielraum und wissen Sie, ab wann Sie auf das Geschäft verzichten.<br><br>
<strong>1. Nutzenargumentation</strong> — Die stärksten FABs wiederholen. Evtl. einen «Reserve-Nutzen» einsetzen. Kostet nichts — immer zuerst versuchen!<br><br>
<strong>2. Nutzenerhöhung durch Zugaben</strong> — Etwas inkludieren, das für die Kundschaft hohen Nutzen hat, aber wenig kostet: Late Check-out, Spa-Zugang, Apéro, günstigere Zahlungskonditionen.<br><br>
<strong>3. Preis- und Leistungskürzung</strong> — Preis reduzieren, aber auch Leistung/Service kürzen. Was hat für die Kundschaft weniger Bedeutung und für Sie eine Kostenersparnis?<br><br>
<strong>4. Preissenkung</strong> — Die letzte Lösung: Preis bei voller Leistung senken. Nur innerhalb des Verhandlungsspielraums!<br><br>
<strong>5. Das Geschäft kommt nicht zustande</strong> — Vorab in Betracht ziehen. Nicht jedes Gespräch endet positiv. Sachlich, höflich, professionell bleiben — nicht persönlich nehmen. Kontakt für zukünftiges Geschäft erhalten.
</div></div></div>

</div></div>

<!-- ============================================ -->
<!-- KAP 3: VERKAUFSPLANUNG                       -->
<!-- ============================================ -->
<div class="sec" id="sales_kap3"><h1>Verkaufsplanung</h1><p class="sub">Kapitel 3 — Verkaufsmassnahmen, Analyse, ABC, Pareto, 6W-Ziele, Strategie, Budget</p>

<div class="hl"><strong>Lernziele Kapitel 3:</strong> Verschiedene Verkaufsmassnahmen passend zu Segmenten in eine Jahresplanung einordnen · Kundenstamm anhand BCG-Matrix, Pareto-Regel und ABC-Klassifizierung analysieren · 5 weitere Kriterien zur Kundenklassifizierung anwenden · Zielsetzungen im Verkauf mit «6W» ausarbeiten und deren Messbarkeit sicherstellen.</div>

<div style="display:flex;gap:8px;margin:12px 0 4px"><button style="font-size:11px;padding:4px 10px" onclick="this.parentElement.nextElementSibling.querySelectorAll('.tl-item').forEach(i=>i.classList.add('open'))">Alle aufklappen</button><button style="font-size:11px;padding:4px 10px" onclick="this.parentElement.nextElementSibling.querySelectorAll('.tl-item').forEach(i=>i.classList.remove('open'))">Alle schliessen</button></div>
<div class="tl">

<div class="tl-item"><div class="tl-num tl-num-b">3.1</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Verkaufsmassnahmen — Wege zur Kundschaft</div><div class="tl-merksatz">«Telefonat, Social Media, Pitch, Hausführungen, Messen, Blitze — jede Massnahme hat ihren Platz.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body">
Unter Verkaufsmassnahmen verstehen wir verschiedene Wege, Kund:innen zu kontaktieren und/oder persönlich zu treffen:<br><br>
<strong>Telefonat:</strong> Aktiv: Terminvereinbarung, Nachfassen, Einladung zu Events, Neukundengewinnung. Nicht erlaubt bei Privatpersonen auf der Robinsonliste! Passiv/reaktiv: Anrufe der Kund:innen (Reservierung, Hotline, Reklamation).<br><br>
<strong>Soziale Medien:</strong> Primär Kommunikationskanal (Kontaktpflege, Gästekommentare, Beschwerden). Noch keine direkten Verkaufskanäle. LinkedIn/Xing wichtiger als Facebook. Contentmarketing: Fachartikel bereitstellen — unaufdringlich, langfristig, authentisch.<br><br>
<strong>Persönliches Gespräch:</strong> Das klassische Verkaufsgespräch — siehe Kapitel 2.<br><br>
<strong>Pitch:</strong> Persönliche Präsentation zur Angebotsabgabe. Briefing enthält die Anforderungen. Alle Anbieter präsentieren innert kurzer Zeit — der Pitch muss einprägsam sein!<br><br>
<strong>Elevator Pitch:</strong> 30–60 Sekunden: «Für Sie (Zielgruppe) und Ihr (Problem) ist (Produkt) eine (Kategorie) mit (Hauptvorteil). Im Vergleich zum Wettbewerb hebt es sich ab, weil (Einzigartigkeit).»<br><br>
<strong>Hausführungen:</strong> Spontan: Immer vorbereitet sein! 2–3 Zimmer + 1 VA-Raum bereithalten. Angemeldet: Umfang absprechen, Zimmer blocken. Verschiedene Kategorien zeigen, höhere Etage mit Aussicht.<br><br>
<strong>Kundenveranstaltungen:</strong> Jubiläen, Eröffnungen, Weiterbildungen, kulturelle/spielerische VAs. Zweck: Kundenbindung + informelle Gespräche.<br><br>
<strong>Fam-Trips:</strong> Kostenlose Studienreisen für Reisebüromitarbeitende, Einkäufer:innen, Travel Manager. Oft intensives Programm — Präsentation muss einprägsam sein!<br><br>
<strong>Sales-Blitz:</strong> Kurze, intensive Verkaufskampagne in einem bestimmten Gebiet. Max. 5 Min. pro Besuch, eine Kernaussage, Infobeschaffung. Ergebnisse am Ende des Tages an das Hotelteam übergeben.<br><br>
<strong>Road Show / Tournee:</strong> Serie von Veranstaltungen in grösseren Städten. Mehrere Anbieter gemeinsam. Aufwendig in der Vorbereitung.<br><br>
<strong>Tradeshows / Messen:</strong> Auf Destinationen/Segmente ausgerichtet: IMEX (MICE), IBTM (MICE/Corporate), WTM (Tour Operator), ILTM (Luxus), ITB Berlin (global). Teilnahme kostspielig — messbare Ziele nötig! Nachbereitung einplanen.
</div><div class="merksatz">Fallbeispiel Bellevue — Jahres-Verkaufsplan: Januar: Sales-Blitz in Zürich (Marc, 40 Firmenbesuche in 2 Tagen). März: ITB Berlin (Sophie, 15 Termine mit Tour Operators). Mai: Kundenveranstaltung «Gourmet Evening» (Top-20-Firmenkunden). Juni: RFP-Saison beginnt (Marc). September: IMEX Frankfurt (Marc, 12 Termine). November: Fam-Trip für Reisebüros Zentralschweiz (Sophie). Laufend: Telemarketing (2h/Woche pro Sales Manager), LinkedIn, Hausführungen.</div></div></div>

<div class="tl-item"><div class="tl-num tl-num-g">3.2</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Planung der Abteilung Verkauf — 5 Schritte</div><div class="tl-merksatz">«Analyse → Ziele → Strategie → Massnahmen → Budget»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body">
Zur Leitung einer Verkaufsabteilung gehört die mittel- und langfristige Verkaufsplanung:<br>
<strong>1. Analyse → 2. Verkaufsziele → 3. Verkaufsstrategie → 4. Verkaufsmassnahmen → 5. Budget (-kontrolle)</strong>
</div></div></div>

<div class="tl-item"><div class="tl-num tl-num-g">3.2.1</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Analyse — Pareto-Regel &amp; ABC-Analyse</div><div class="tl-merksatz">«80% der Ergebnisse mit 20% des Aufwandes. A-Kunden = Top, C-Kunden = standardisiert.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body">
Die Analyse dient dazu, Wesentliches von Unwesentlichem zu trennen und Marketing-/Sales-Schwerpunkte zu setzen.<br><br>
<strong>Pareto-Regel (80/20-Regel):</strong><br>
Benannt nach Vilfredo Pareto: <strong>80% der Ergebnisse werden mit 20% des Gesamtaufwandes</strong> erreicht. Die verbleibenden 20% der Ergebnisse benötigen 80% der Arbeit. Im Verkauf: 20% der Kunden generieren 80% des Umsatzes.<br><br>
<strong>ABC-Analyse (Programmstrukturanalyse):</strong><br>
Teilt Objekte (Kunden, Produkte) in drei Klassen nach absteigender Bedeutung:<br>
• <strong>A-Kunden:</strong> Höchste Umsatzbedeutung, intensivste Betreuung. Die Top-Kunden.<br>
• <strong>B-Kunden:</strong> Mittlere Bedeutung, regelmässige Betreuung. Potenzial für Entwicklung zu A.<br>
• <strong>C-Kunden:</strong> Geringste Umsatzbedeutung, standardisierte Betreuung. Oft die grösste Anzahl.<br><br>
<strong>Weitere Analysekriterien</strong> (über Logisumsatz/Übernachtungen hinaus):<br>
F&amp;B-Umsatz und sonstiger Umsatz · Anreisetag/Saison · Kosten/Ertrag/Buchungsweg · Stornierungen/Wash · Klumpenbildung · Zahlungsdisziplin · Anteil des Hotels am Gesamtreiseumsatz · Anzahl Mitbewerber/unsere Position · Anteil Neukundschaft vs. Bestandskundschaft.
</div><div class="merksatz">Fallbeispiel Bellevue — ABC-Analyse: A-Kunden (12 Firmen, 8%): 65% des Corporate-Umsatzes. Darunter Novartis (480 RNs), Roche (320 RNs). → Persönliche Betreuung durch Marc, quartalsweise Reviews, Einladung zu Kundenveranstaltungen. B-Kunden (28 Firmen, 19%): 25% des Umsatzes. Mittelgrosse Firmen mit 50–150 RNs/Jahr. → Halbjährlicher Kontakt, Ziel: Entwicklung zu A. C-Kunden (110 Firmen, 73%): 10% des Umsatzes. Unter 50 RNs/Jahr. → Standardisierte Betreuung via Newsletter.</div></div></div>

<div class="tl-item"><div class="tl-num tl-num-r">3.2.2</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Verkaufsziele setzen — Das 6W-Raster</div><div class="tl-merksatz">«Was, Wieviel, Wem, Wann, Wo, Wer — Ziele müssen SMART sein.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body">
Zielsetzungen müssen fair, erreichbar, messbar und realisierbar sein (<strong>SMART</strong>). Das <strong>6W-Raster</strong> hilft, Ziele konkret zu definieren:<br><br>
• <strong>Was</strong> — Zielinhalt: Welche Zielgrösse? (Umsatz, RNs, Gewinn, GOP, RevPAR, Neukund:innen)<br>
• <strong>Wieviel</strong> — Quantifizierung: Welcher Wert? (Absolute Zahl, CHF, %)<br>
• <strong>Wem</strong> — Zielsegment: Welche Zielgruppe? (Firmen, Tagungsgeschäft, Hochzeitsanlässe)<br>
• <strong>Wann</strong> — Zielperiode: Bis wann? (Bis Ende des Jahres, bis zum 20. September)<br>
• <strong>Wo</strong> — Geographischer Markt (Schweiz, Luzern, Region ZH)<br>
• <strong>Wer</strong> — Verantwortlichkeit (Herr XY, Verkaufsabteilung)<br><br>
Die 6Ws helfen zur unmissverständlichen Formulierung, besonders bei quantitativen Zielen — die im Verkaufsalltag überwiegen. Qualitative Ziele: Kundenzufriedenheit, Kundenbindung, Image.
</div><div class="merksatz">Fallbeispiel Bellevue — Verkaufsziel mit 6W: Was: Room Nights im Corporate-Segment. Wieviel: 8'500 RNs (+12% vs. Vorjahr). Wem: Corporate-Transient (managed &amp; unmanaged). Wann: Bis 31. Dezember. Wo: Quellmärkte Schweiz und Deutschland. Wer: Marc Brunner (Sales Manager Corporate).</div></div></div>

<div class="tl-item"><div class="tl-num tl-num-r">3.2.3</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Verkaufsstrategie, Planung &amp; Budget</div><div class="tl-merksatz">«Primäre Planung = nach aussen. Sekundäre Planung = nach innen.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body">
<strong>Verkaufsstrategie:</strong><br>
Die Rolle des Verkaufs muss abgestimmt sein mit übergeordneten Unternehmens- und Marketingzielen. Sales ist Teil der 4 bzw. 7 P des Marketing-Mix. Die Strategie definiert den Rahmen: Welche Segmente werden prioritär bearbeitet? Welche Kanäle genutzt? Wie wird das Team eingesetzt?<br><br>
<strong>Primäre Planung (nach aussen):</strong><br>
1. Detaillierte Verkaufsziele heruntergebrochen nach Produkten, Kundengruppen, Regionen und Zeiträumen.<br>
2. Einsatzplanung: Mitarbeitende, Zeitpläne, Reisen → Sales &amp; Marketingplan<br><br>
<strong>Sekundäre Planung (nach innen):</strong><br>
Organisation und Organisationsplanung, Personalplanung und -marketing, Weiterbildung, Entlöhnung, Verkaufs- &amp; Präsentationshilfen/-mittel<br><br>
<strong>Budget:</strong><br>
• Personal — Fixe &amp; variable Kosten, Personalschulungen, Incentives<br>
• Reisekosten — Kundenbesuche, Messen, Blitze, Road Shows<br>
• Büro &amp; Verwaltung — Büroaufwand, CRM-Software, Kommunikation<br>
• Massnahmen — Messegebühren, Verkaufsaktionen, Verkaufs- &amp; Präsentationsmittel
</div><div class="merksatz">Fallbeispiel Bellevue — Sales-Budget (Auszug): Personal: CHF 380'000 (3 Personen + CHF 15'000 Incentive). Reisekosten: CHF 25'000. Messen: CHF 18'000 (ITB, IMEX). Kundenveranstaltungen: CHF 12'000 (2 Events/Jahr). CRM-Software: CHF 8'000. Verkaufsmittel: CHF 5'000. Gesamt: CHF 448'000 → ca. 3.5% des Gesamtumsatzes.</div></div></div>

</div></div>

<!-- ============================================ -->
<!-- ZUSAMMENFASSUNG / MINDMAP                    -->
<!-- ============================================ -->
<div class="sec" id="sales_mind"><h1>Zusammenfassung</h1><p class="sub">Kompakter Überblick über alle 3 Kapitel</p>

<div class="c" style="padding:20px;margin-bottom:16px">
<div class="ct2" style="margin-bottom:10px">Kapitel 1 — Einordnung Verkauf</div>
<div style="font-size:13px;color:var(--tx2);line-height:1.8">
• Sales = Aufbau langfristiger Beziehungen, nicht bloss Zimmer verkaufen<br>
• Sales liegt in den <strong>4 Ps</strong> bei <strong>Place</strong> (Vertrieb) und <strong>Promotion</strong> (persönlicher Verkauf, Event-Marketing)<br>
• <strong>Direkter Vertrieb:</strong> Reaktiv (Farming) vs. Proaktiv (Hunting). Vorteile: Loyalität, Kontrolle, keine Provisionen. Nachteile: Ressourcenmangel, Schulungsaufwand, Erfolgsrisiko<br>
• <strong>Indirekter Vertrieb:</strong> Via Reisebüros, OTAs (Booking.com, Expedia), Tour Operators<br>
• <strong>Segmentierung:</strong> Buchungsgrösse · Aufenthaltszweck · Vertragsverhältnis<br>
• <strong>Einkaufsprozesse:</strong> Kernfragen = Wie, Wann, Womit, Wer. Corporate Transient (RFP ab Mitte Jahr), Leisure (Kataloge 9–18 Mt. Vorlauf, OTAs dynamisch), Gruppen/MICE (Cvent, 48h-Frist), Airlines (Crew + Layover)<br>
• <strong>4 Kundentypen:</strong> Sicherheit · Wirtschaftlichkeit · Prestige · Bequemlichkeit. Weitere: DISC/DISG, MBTI
</div></div>

<div class="c" style="padding:20px;margin-bottom:16px">
<div class="ct2" style="margin-bottom:10px">Kapitel 2 — Verkaufsgespräche</div>
<div style="font-size:13px;color:var(--tx2);line-height:1.8">
• <strong>Kommunikation:</strong> 7% Worte, 38% Stimme, 55% Körpersprache. 4-Ohren-Modell (Schulz von Thun): Sach-, Selbstoffenbarungs-, Beziehungs-, Appellebene<br>
• <strong>Nonverbal:</strong> Erste 30 Sek. entscheidend. Kinesik kann schwer «lügen». Signale: Gestik, Haltung, Mimik, Blick, Raum, Paraverbal, Kleidung<br>
• <strong>Fragetechniken:</strong> Offen (W-Fragen) · Geschlossen · Alternativ · Suggestiv · Gegen · Ermittlung · Rhetorisch · Dirigierend · Ja-Fragen (Ja-Strasse)<br>
• <strong>7 Phasen:</strong> 1. Vorbereitung → 2. Warm-up/ASP → 3. Bedarfsanalyse (Trichtermodell) → 4. Produktpräsentation (FAB) → 5. Preisnennung (Sandwich) → 6. Abschluss (Kaufsignale!) → 7. Nachbearbeitung<br>
• <strong>FAB-Technik:</strong> Merkmal → Vorteil → Nutzen. Kaufmotivatoren: Sachlich (Mehr) + Emotional (Weniger)<br>
• <strong>Sandwich-Methode:</strong> 1–3 Vorteile → PREIS → 1–3 Vorteile. Nie «kostet» sagen!<br>
• <strong>Einwandbehandlung 5 Schritte:</strong> Verständnis → Nachfragen → FAB → Rückversichern → Erneuter Abschluss. NEIN = «Noch Etwas Input Nötig»<br>
• <strong>5 Preisverhandlungs-Strategien:</strong> 1. Nutzenargumentation (kostenlos!). 2. Zugaben. 3. Preis+Leistung kürzen. 4. Preissenkung (letzte Lösung). 5. Kein Abschluss
</div></div>

<div class="c" style="padding:20px;margin-bottom:16px">
<div class="ct2" style="margin-bottom:10px">Kapitel 3 — Verkaufsplanung</div>
<div style="font-size:13px;color:var(--tx2);line-height:1.8">
• <strong>Verkaufsmassnahmen:</strong> Telefonat · Soziale Medien · Pers. Gespräch · Pitch / Elevator Pitch · Hausführungen · Kundenveranstaltungen · Fam-Trips · Sales-Blitz · Road Show · Tradeshows/Messen (IMEX, IBTM, WTM, ILTM, ITB)<br>
• <strong>5 Schritte Verkaufsplanung:</strong> 1. Analyse → 2. Ziele → 3. Strategie → 4. Massnahmen → 5. Budget<br>
• <strong>Pareto-Regel:</strong> 80% Ergebnisse mit 20% Aufwand. 20% Kunden = 80% Umsatz<br>
• <strong>ABC-Analyse:</strong> A = Top-Kunden (intensiv). B = Mitte (Potenzial). C = gering (standardisiert)<br>
• <strong>Weitere Analysekriterien:</strong> F&amp;B-Umsatz, Anreisetag, Kosten/Ertrag, Stornierungen, Zahlungsdisziplin, Marktanteil, Mitbewerber-Position<br>
• <strong>6W-Raster:</strong> Was · Wieviel · Wem · Wann · Wo · Wer → SMART-Ziele<br>
• <strong>Primäre Planung</strong> (nach aussen): Verkaufsziele + Einsatzplanung → Sales &amp; Marketingplan<br>
• <strong>Sekundäre Planung</strong> (nach innen): Organisation, Personal, Weiterbildung, Verkaufsmittel<br>
• <strong>Budget:</strong> Personal + Reisekosten + Büro + Massnahmen
</div></div>
</div>

<!-- ============================================ -->
<!-- KARTEIKARTEN                                 -->
<!-- ============================================ -->
<div class="sec" id="sales_kart"><h1>Karteikarten</h1><p class="sub"><span id="salesfcCount">0</span> Karten — klicke zum Umdrehen</p>
<div class="fcc" id="salesfcc"></div>
<div class="fd"><div class="fc" id="salesfc" onclick="this.classList.toggle('fl')"><div class="ff ffr"><div class="fq" id="salesfcq"></div><div class="fh">Klicke zum Umdrehen</div></div><div class="ff ffb"><div class="fa" id="salesfca"></div></div></div></div>
<div class="fb"><button onclick="fcPrev()">Zurück</button><button onclick="fcShuffle()">Mischen</button><button class="bp1" onclick="fcNext()">Nächste</button></div>
<div style="text-align:center;margin-top:10px;font-size:11px;color:var(--tx3)" id="salesfcPool"></div>
<div id="salesfcList" style="display:none;margin-top:16px"></div>
</div>

<!-- ============================================ -->
<!-- QUIZ                                         -->
<!-- ============================================ -->
<div class="sec" id="sales_quiz"><h1>Quiz</h1><p class="sub">Alle Fragen werden wiederholt bis du sie kannst</p>
<div id="salesqStats" style="margin-bottom:20px">
<div style="display:flex;gap:8px;margin-bottom:14px;flex-wrap:wrap">
<div class="qsc" style="flex:1;min-width:70px"><div class="qsn" id="salesqTotR" style="color:var(--g)">0</div><div class="qsl">Total richtig</div></div>
<div class="qsc" style="flex:1;min-width:70px"><div class="qsn" id="salesqTotW" style="color:var(--r)">0</div><div class="qsl">Total falsch</div></div>
<div class="qsc" style="flex:1;min-width:70px"><div class="qsn" id="salesqTotP" style="color:var(--ac)">0%</div><div class="qsl">Erfolgsquote</div></div>
</div>
<div style="font-size:12px;color:var(--tx3);margin-bottom:6px">Lernerfolg</div>
<div style="display:flex;gap:4px;margin-bottom:4px;align-items:center"><div style="width:10px;height:10px;border-radius:50%;background:var(--g);flex-shrink:0"></div><div style="font-size:12px;color:var(--tx2);width:70px">Sicher</div><div style="flex:1;height:8px;background:var(--s2);border-radius:4px;overflow:hidden"><div id="salesqBarG" style="height:100%;background:var(--g);border-radius:4px;transition:width .5s;width:0%"></div></div><div style="font-size:12px;color:var(--tx2);width:30px;text-align:right" id="salesqBarGn">0</div></div>
<div style="display:flex;gap:4px;margin-bottom:4px;align-items:center"><div style="width:10px;height:10px;border-radius:50%;background:var(--am);flex-shrink:0"></div><div style="font-size:12px;color:var(--tx2);width:70px">Wackelig</div><div style="flex:1;height:8px;background:var(--s2);border-radius:4px;overflow:hidden"><div id="salesqBarO" style="height:100%;background:var(--am);border-radius:4px;transition:width .5s;width:0%"></div></div><div style="font-size:12px;color:var(--tx2);width:30px;text-align:right" id="salesqBarOn">0</div></div>
<div style="display:flex;gap:4px;margin-bottom:4px;align-items:center"><div style="width:10px;height:10px;border-radius:50%;background:var(--r);flex-shrink:0"></div><div style="font-size:12px;color:var(--tx2);width:70px">Unsicher</div><div style="flex:1;height:8px;background:var(--s2);border-radius:4px;overflow:hidden"><div id="salesqBarR" style="height:100%;background:var(--r);border-radius:4px;transition:width .5s;width:0%"></div></div><div style="font-size:12px;color:var(--tx2);width:30px;text-align:right" id="salesqBarRn">0</div></div>
<div style="display:flex;gap:4px;align-items:center"><div style="width:10px;height:10px;border-radius:50%;background:var(--tx3);flex-shrink:0"></div><div style="font-size:12px;color:var(--tx2);width:70px">Noch offen</div><div style="flex:1;height:8px;background:var(--s2);border-radius:4px;overflow:hidden"><div id="salesqBarX" style="height:100%;background:var(--tx3);border-radius:4px;transition:width .5s;width:100%"></div></div><div style="font-size:12px;color:var(--tx2);width:30px;text-align:right" id="salesqBarXn">0</div></div>
</div>
<div class="pb"><div class="pf" id="salesqP"></div></div><div class="pt" id="salesqPT">Frage 1</div>
<div id="salesqC"></div>
<div style="text-align:center;margin-top:14px">
<button class="bp1" id="salesqN" onclick="salesqNx()" style="display:none">Nächste Frage</button>
<button class="bp1" id="salesqRS" onclick="salesqSt()" style="display:none">Weiter üben</button>
<button id="salesqReset" onclick="salesqReset()" style="display:none;margin-left:8px">Fortschritt zurücksetzen</button>
</div>
</div>

<!-- ============================================ -->
<!-- GLOSSAR                                      -->
<!-- ============================================ -->
<div class="sec" id="sales_glossar"><h1>Glossar</h1><p class="sub">Fachbegriffe im Sales</p>
<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:8px">
<div class="c" style="padding:12px 16px"><strong>4 Ps</strong> <span style="color:var(--tx2)">— Product, Price, Place, Promotion. Sales liegt bei Place + Promotion.</span></div>
<div class="c" style="padding:12px 16px"><strong>Farming</strong> <span style="color:var(--tx2)">— Reaktiver Verkauf. Anfragen bearbeiten, die hereinkommen.</span></div>
<div class="c" style="padding:12px 16px"><strong>Hunting</strong> <span style="color:var(--tx2)">— Proaktiver Verkauf. Aktive Neukundenakquise.</span></div>
<div class="c" style="padding:12px 16px"><strong>RFP</strong> <span style="color:var(--tx2)">— Request for Proposal. Elektronische Ausschreibung für Hotelverträge.</span></div>
<div class="c" style="padding:12px 16px"><strong>TMC</strong> <span style="color:var(--tx2)">— Travel Management Company (Amex GBT, BCD Travel, CWT).</span></div>
<div class="c" style="padding:12px 16px"><strong>Konsortium</strong> <span style="color:var(--tx2)">— Weltweit operierendes Reisebüro für Firmenbuchungen.</span></div>
<div class="c" style="padding:12px 16px"><strong>Implant</strong> <span style="color:var(--tx2)">— Reisebüro auf dem Firmengelände, exklusiv für ein Unternehmen.</span></div>
<div class="c" style="padding:12px 16px"><strong>OTA</strong> <span style="color:var(--tx2)">— Online Travel Agency (Booking.com, Expedia, HRS).</span></div>
<div class="c" style="padding:12px 16px"><strong>MICE</strong> <span style="color:var(--tx2)">— Meetings, Incentives, Conventions, Exhibitions.</span></div>
<div class="c" style="padding:12px 16px"><strong>SMERF</strong> <span style="color:var(--tx2)">— Social, Military, Education, Religious, Fraternal — Freizeitreisegruppen.</span></div>
<div class="c" style="padding:12px 16px"><strong>Allotment</strong> <span style="color:var(--tx2)">— Zimmerkontingent, das einem Veranstalter zugesichert wird.</span></div>
<div class="c" style="padding:12px 16px"><strong>LRA</strong> <span style="color:var(--tx2)">— Last Room Availability. Letztes Zimmer zum Firmenpreis.</span></div>
<div class="c" style="padding:12px 16px"><strong>RN</strong> <span style="color:var(--tx2)">— Room Night. Eine Zimmerbelegung für eine Nacht.</span></div>
<div class="c" style="padding:12px 16px"><strong>Kinesik</strong> <span style="color:var(--tx2)">— Wissenschaft der Körpersprache.</span></div>
<div class="c" style="padding:12px 16px"><strong>4-Ohren-Modell</strong> <span style="color:var(--tx2)">— Schulz von Thun: Sach-, Selbstoffenbarungs-, Beziehungs-, Appellebene.</span></div>
<div class="c" style="padding:12px 16px"><strong>FAB</strong> <span style="color:var(--tx2)">— Feature-Advantage-Benefit. Merkmal → Vorteil → Nutzen.</span></div>
<div class="c" style="padding:12px 16px"><strong>Sandwich-Methode</strong> <span style="color:var(--tx2)">— Preis verpackt in Vorteile: Vorteil → Preis → Vorteil.</span></div>
<div class="c" style="padding:12px 16px"><strong>Ja-Strasse</strong> <span style="color:var(--tx2)">— Aneinandergereihte Ja-Fragen als Abschlusstechnik.</span></div>
<div class="c" style="padding:12px 16px"><strong>ABC-Analyse</strong> <span style="color:var(--tx2)">— A = Top-Kunden, B = Mitte, C = geringste Bedeutung.</span></div>
<div class="c" style="padding:12px 16px"><strong>Pareto-Regel</strong> <span style="color:var(--tx2)">— 80/20-Regel. 80% Ergebnisse mit 20% Aufwand.</span></div>
<div class="c" style="padding:12px 16px"><strong>6W-Raster</strong> <span style="color:var(--tx2)">— Was, Wieviel, Wem, Wann, Wo, Wer.</span></div>
<div class="c" style="padding:12px 16px"><strong>Sales-Blitz</strong> <span style="color:var(--tx2)">— Intensive Kurzverkaufskampagne (max. 5 Min./Besuch).</span></div>
<div class="c" style="padding:12px 16px"><strong>Elevator Pitch</strong> <span style="color:var(--tx2)">— 30–60 Sek. Verkaufsvortrag mit Kernaussage.</span></div>
<div class="c" style="padding:12px 16px"><strong>Fam-Trip</strong> <span style="color:var(--tx2)">— Kostenlose Studienreise für Reisebüro-Mitarbeitende.</span></div>
<div class="c" style="padding:12px 16px"><strong>DISC/DISG</strong> <span style="color:var(--tx2)">— Dominanz, Initiative, Stetigkeit, Gewissenhaftigkeit.</span></div>
<div class="c" style="padding:12px 16px"><strong>Robinsonliste</strong> <span style="color:var(--tx2)">— Sperrliste: kein Telemarketing an diese Privatpersonen.</span></div>
<div class="c" style="padding:12px 16px"><strong>ASP</strong> <span style="color:var(--tx2)">— Ansprechperson. Kontaktperson beim Kunden.</span></div>
<div class="c" style="padding:12px 16px"><strong>Wash</strong> <span style="color:var(--tx2)">— Differenz zwischen gebuchten und tatsächlich genutzten Zimmern.</span></div>
<div class="c" style="padding:12px 16px"><strong>GOP</strong> <span style="color:var(--tx2)">— Gross Operating Profit. Operativer Bruttoertrag.</span></div>
</div></div>

`;

// KARTEIKARTEN
const SALES_CARDS = [
// Kapitel 1 — Einordnung Verkauf
['Was bedeutet Sales im Gastgewerbe?','Aufbau langfristiger Beziehungen zwischen Kundschaft und Dienstleistungsunternehmen — nicht bloss Zimmer verkaufen. Einkaufsprozesse der Kundenseite verstehen.'],
['Welchen 2 Ps des Marketing-Mix wird Sales zugeordnet?','Place (Vertrieb/Distribution) und Promotion (Kommunikation). Place: Kundschaft zum Buchen bringen. Promotion: persönlicher Verkauf und Event-Marketing.'],
['Was ist der Unterschied zwischen direktem und indirektem Vertrieb?','Direkt = ohne Zwischenhändler. Indirekt = via Reisebüros, OTAs (Booking.com etc.).'],
['Was bedeutet «Farming» im Verkauf?','Reaktiver Verkauf — Anfragen bearbeiten, die von aussen kommen (Bankett, Rezeption, Restaurant). Man «erntet».'],
['Was bedeutet «Hunting» im Verkauf?','Proaktiver Verkauf — Aktive Neukundenakquise: Sales-/Account Management, Aussendienst. Man «jagt».'],
['Nenne 3 Vorteile des direkten Vertriebs.','1. Direkte Kommunikation → Loyalität. 2. Unmittelbare Steuerung/Kontrolle. 3. Keine Mittler-Gebühren/Provisionen.'],
['Nenne 3 Nachteile des direkten Vertriebs.','1. Viele Märkte bleiben unbearbeitet (mangels Ressourcen). 2. Sales-MA müssen gefunden, geschult, geführt werden. 3. Vertriebskosten vorfinanzieren + Erfolgsrisiko tragen.'],
['Nach welchen 3 Kriterien wird im Gastgewerbe segmentiert?','1. Buchungsgrösse (Einzel/Gruppe). 2. Aufenthaltszweck (Business/Leisure). 3. Vertragsverhältnis (mit/ohne Vertrag).'],
['Welche 4 Kernfragen muss die Verkaufsperson über den Einkaufsprozess beantworten?','1. Wie (Ablauf/Stufen)? 2. Wann (Fristen)? 3. Womit (Tools)? 4. Wer (Entscheidungsträger)?'],
['Was ist ein RFP?','Request for Proposal — elektronische Ausschreibung für Hotelverträge, z.B. über Lanyon, Nexus. Beginnt oft Mitte des Kalenderjahres für das Folgejahr.'],
['Was ist eine TMC?','Travel Management Company — spezialisiertes Firmenreisebüro (z.B. Amex GBT, BCD Travel, CWT).'],
['Was ist ein Konsortium im Hotelvertrieb?','Weltweit operierendes Reisebüro, das Buchungen für Firmen und ihre Geschäftsreisenden abwickelt.'],
['Was ist ein Implant?','Reisebüro auf dem Firmengelände, exklusiv für dieses Unternehmen tätig.'],
['Was unterscheidet Managed Travel von Unmanaged Travel?','Managed: Reiserichtlinien, Firmenvertrag, professioneller Einkauf (RFP, TMC). Unmanaged: Freie Hotelwahl, tagesaktueller OTA-Preis.'],
['Wie sieht die touristische Marktstruktur bei Paketreisen aus?','Gäste → Reisebüro (Retailer) → Veranstalter (Tour Operator) → Incoming Operator → Hotel/Restaurant.'],
['Ab wie vielen Zimmern spricht man von einer Gruppe?','Ca. ab 10 Zimmern (je nach Unternehmen).'],
['Was ist MICE?','Meetings, Incentives, Conventions, Exhibitions — Geschäftsreisegruppen/Tagungsgeschäft.'],
['Was sind die zwei Arten von Airline-Geschäft?','1. Crew-Aufenthalte (regelmässig, planbar). 2. Layover (ad-hoc bei Störungen/Wetter).'],
['Beschreibe den Sicherheitstyp.','Sucht Stabilität, Zuverlässigkeit, konstante Qualität. Preis sekundär. Tipp: Zertifikate betonen, persönliche Betreuung anbieten, nie bei zugesicherten Eigenschaften enttäuschen.'],
['Beschreibe den Wirtschaftlichkeitstyp.','Preis-Leistung, Best Deal. Geniesst Preisgespräch. Tipp: Hart verhandeln — dieser Typ liebt eine ebenbürtige Gegenpartei.'],
['Beschreibe den Prestigetyp.','Ansehen gewinnen, hohes Markenbewusstsein, Status. Tipp: Bewunderung zeigen, Neuheiten zuerst anbieten, zu Events einladen, Titel verwenden.'],
['Beschreibe den Bequemlichkeitstyp.','Alles aus einer Hand, Rundum-Service, Kontinuität. Tipp: Jede Arbeit abnehmen, Neues nur bei echtem Vorteil ohne Mehraufwand. Referenzen bereithalten.'],
// Kapitel 2 — Verkaufsgespräche
['Wie verteilt sich die Wahrnehmung der Kommunikationsarten?','7% Worte/Inhalt, 38% Stimme/Tonfall, 55% Körpersprache.'],
['Nenne die 4 Ebenen des 4-Ohren-Modells (Schulz von Thun).','1. Sachebene (informieren). 2. Selbstoffenbarung (kundgeben). 3. Beziehungsebene (Haltung). 4. Appellebene (veranlassen).'],
['Warum sind die ersten 30 Sekunden bei Neukunden entscheidend?','Der erste Eindruck haftet Jahre. Korrektur einmal abgespeicherter Eindrücke ist sehr schwierig und aufwendig.'],
['Was ist Kinesik?','Die Wissenschaft der Körpersprache. Kann schwer «lügen», da viele Aspekte unbewusst ablaufen.'],
['Was sind offene Fragen und wofür eignen sie sich?','W-Fragen (wer, wie, warum). Info gewinnen, Gespräch im Fluss halten, Vertrauen aufbauen. Ideal für Bedarfsanalyse.'],
['Was ist eine Alternativfrage?','Bietet nur Varianten der Zustimmung («KW 50 oder 51?»). Keine Nein-Option. Gut für Entscheidungsförderung und Abschluss.'],
['Was ist eine Gegenfrage?','Reagiert auf Einwände, gewinnt Zeit. Bsp: «Preis zu hoch?» → «Im Verhältnis wozu?» Zwingt zur Klärung.'],
['Was ist eine Ja-Strasse?','Aneinandergereihte Ja-Fragen als Abschlusstechnik — eleganteste Form ohne Druckgefühl.'],
['Nenne die 7 Phasen des Verkaufsgesprächs.','1. Vorbereitung → 2. Warm-up/ASP finden → 3. Bedarfsanalyse → 4. Produktpräsentation → 5. Preisnennung → 6. Abschluss → 7. Nachbearbeitung.'],
['Was ist das Trichtermodell in der Bedarfsanalyse?','Mit breiten Fragen beginnen, schrittweise einschränken. Bedürfnisse herausfinden (bewusste + unbewusste). Offene Fragen verwenden!'],
['Was ist die FAB-Technik?','Feature-Advantage-Benefit: Merkmal → Vorteil → individueller Kundennutzen. Immer nur eine Kette pro Argumentation.'],
['Nenne ein FAB-Beispiel.','Merkmal: 24h-Rezeption. → Vorteil: Jederzeit anreisen. → Nutzen: Terminlich flexibel, keine Sorgen bei Verspätung.'],
['Was sind sachliche und emotionale Kaufmotivatoren?','Sachlich = «Mehr» (Effizienz, Gewinn, Zeit, Sicherheit). Emotional = «Weniger» (Aufwand, Risiko, Stress, Kosten, Sorgen).'],
['Was ist die Sandwich-Methode?','Preis verpackt: 1–3 Vorteile → PREIS → 1–3 Vorteile. Psychologische Minimierung. Keine Sprechpause nach dem Preis!'],
['Warum soll man das Wort «kostet» vermeiden?','Negative Assoziationen (Telefonkosten, Mietkosten…). Reiner Preis ohne Nutzen wird automatisch als zu teuer empfunden.'],
['Nenne 4 Kaufsignale.','1. Direkter Kaufwunsch. 2. Fragen nach dem «Danach» (Garantie, Betreuung). 3. Beschäftigung mit Details. 4. Zustimmendes Nicken/Körperhaltung.'],
['Warum darf man Kaufsignale nicht übersehen?','Wer weiter argumentiert statt abzuschliessen, riskiert Rückentwicklung des Kaufwunsches. Unnötige Argumente wecken neue Zweifel!'],
['Nenne die 6 Abschlusstechniken.','1. Probeabschluss. 2. Zusammenfassung. 3. Ja-Fragen-Strasse. 4. Empfehlungstechnik. 5. Alternativtechnik. 6. Direkte Bestätigung.'],
['Nenne die 5 Schritte der Einwandbehandlung.','1. Verständnis zeigen → 2. Nachfragen → 3. FAB zum Einwand → 4. Rückversichern → 5. Erneuter Abschluss.'],
['Was bedeutet NEIN im Verkauf?','«Noch Etwas Input Nötig» — Einwände signalisieren Interesse und sind normal!'],
['Nenne die 5 Preisverhandlungs-Strategien.','1. Nutzenargumentation (kostet nichts — immer zuerst!). 2. Zugaben. 3. Preis+Leistung kürzen. 4. Preissenkung (letzte Lösung). 5. Kein Abschluss.'],
['Was ist bei der Nachbearbeitung wichtig?','Dankesnachricht an Kund:innen. Info an alle Abteilungen. Kundenprofil pflegen (PMS, CRM). Follow-ups setzen. Dokumentation für Folgegeschäft.'],
// Kapitel 3 — Verkaufsplanung
['Was ist ein Elevator Pitch?','30–60 Sek.: «Für Sie (Zielgruppe) und Ihr (Problem) ist (Produkt) eine (Kategorie) mit (Hauptvorteil). Im Vergleich zum Wettbewerb hebt es sich ab, weil (Einzigartigkeit).»'],
['Was ist ein Sales-Blitz?','Kurze, intensive Verkaufskampagne in einem bestimmten Gebiet. Max. 5 Min./Besuch, eine Kernaussage, Infobeschaffung. Ergebnisse am Ende des Tages übergeben.'],
['Was ist ein Fam-Trip?','Familiarisation Trip — kostenlose Studienreise für Reisebüromitarbeitende/Travel Manager. Präsentation muss einprägsam sein!'],
['Nenne 5 wichtige Tradeshows im Hotelverkauf.','IMEX (MICE), IBTM (MICE/Corporate), WTM (Tour Operator), ILTM (Luxus), ITB Berlin (global).'],
['Nenne die 5 Schritte der Verkaufsplanung.','1. Analyse → 2. Verkaufsziele → 3. Strategie → 4. Massnahmen → 5. Budget (-kontrolle).'],
['Was besagt die Pareto-Regel im Verkauf?','80% der Ergebnisse mit 20% des Aufwandes. Im Verkauf: 20% der Kunden generieren 80% des Umsatzes.'],
['Was ist die ABC-Analyse?','A = Top-Kunden (intensivste Betreuung). B = Mitte (Potenzial für A). C = geringste Bedeutung (standardisiert). Oft grösste Anzahl = C.'],
['Was sind die 6Ws im Zielraster?','Was (Zielinhalt), Wieviel (Zahl/%), Wem (Segment), Wann (Frist), Wo (Markt), Wer (Verantwortung). → SMART!'],
['Was umfasst die primäre Verkaufsplanung?','Nach aussen: Detaillierte Ziele nach Produkten/Kunden/Regionen/Zeiträumen + Einsatzplanung (MA, Zeitpläne, Reisen) → Sales & Marketingplan.'],
['Was umfasst die sekundäre Verkaufsplanung?','Nach innen: Organisation, Personalplanung, Weiterbildung, Entlöhnung, Verkaufs- & Präsentationshilfen/-mittel.'],
['Was ist LRA?','Last Room Availability — Garantie, dass das letzte Zimmer zum vereinbarten Firmenpreis verfügbar ist.'],
['Warum ist die Nachbearbeitung so wichtig?','Sie entscheidet über das Folgegeschäft! Ohne Dankesnachricht, pünktliches Angebot und Abteilungsinfo ist die beste Verkaufspräsentation wertlos.'],
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
