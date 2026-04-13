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
<!-- ÜBERSICHT -->
<div class="sec" id="sales">
<div style="border-radius:24px;padding:36px 32px;margin-bottom:32px;background:linear-gradient(135deg,rgba(56,182,232,.06),rgba(184,56,232,.04));border:1px solid var(--bd);position:relative;overflow:hidden"><div style="position:absolute;top:-40px;right:-40px;width:160px;height:160px;border-radius:50%;background:linear-gradient(135deg,rgba(56,182,232,.1),rgba(184,56,232,.08))"></div><div style="position:relative;z-index:1"><div style="font-size:12px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:var(--ac);margin-bottom:8px">Semester 5 · Betriebswirtschaft</div><h1 style="font-size:32px;margin-bottom:8px">Sales</h1><p style="font-size:15px;color:var(--tx2)">Dozent: Christian Gottstein · SHL Schweizerische Hotelfachschule Luzern</p></div></div>
<div class="hl">Durchgängiges Fallbeispiel: <strong>Hotel &amp; Restaurant «Bellevue»</strong> — 4-Sterne-Superior in Luzern, 120 Zimmer, 2 Restaurants, Wellness, 5 Tagungsräume. Familie Meier, 3. Generation. Sales-Team: <strong>Lisa Meier</strong> (DOS), <strong>Marc Brunner</strong> (Corporate &amp; MICE), <strong>Sophie Keller</strong> (Leisure &amp; Events).</div>
<div style="font-size:13px;font-weight:600;letter-spacing:1px;text-transform:uppercase;color:var(--tx3);margin-bottom:14px">Theorie · 3 Kapitel</div>
<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:12px;margin-bottom:36px">
<div class="c ck" onclick="go('sales_kap1')" style="padding:20px 22px;display:flex;gap:14px;align-items:flex-start"><div style="width:32px;height:32px;border-radius:10px;background:var(--al);color:var(--ac);display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0">1</div><div><div class="ct2">Einordnung Verkauf</div><div class="cd">Marketing-Mix 4Ps, Vertrieb, Segmente, Einkaufsprozesse, Kundentypen</div></div></div>
<div class="c ck" onclick="go('sales_kap2')" style="padding:20px 22px;display:flex;gap:14px;align-items:flex-start"><div style="width:32px;height:32px;border-radius:10px;background:var(--gl);color:var(--g);display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0">2</div><div><div class="ct2">Verkaufsgespräche</div><div class="cd">Kommunikation, Fragetechniken, 7 Phasen, FAB, Preisnennung, Einwände</div></div></div>
<div class="c ck" onclick="go('sales_kap3')" style="padding:20px 22px;display:flex;gap:14px;align-items:flex-start"><div style="width:32px;height:32px;border-radius:10px;background:var(--pl);color:var(--pr);display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0">3</div><div><div class="ct2">Verkaufsplanung</div><div class="cd">Massnahmen, Analyse, ABC, Pareto, 6W-Ziele, Budget</div></div></div></div>
<div style="font-size:13px;font-weight:600;letter-spacing:1px;text-transform:uppercase;color:var(--tx3);margin-bottom:14px">Lerntools</div>
<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:12px">
<div class="c ck" style="text-align:center;padding:24px 16px"><div style="font-size:24px;font-weight:700;background:var(--grad);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;margin-bottom:6px">3</div><div class="ct2">Zusammenfassung</div><div class="cd">Alle Kapitel</div></div>
<div class="c ck" style="text-align:center;padding:24px 16px"><div style="font-size:24px;font-weight:700;background:var(--grad);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;margin-bottom:6px">50</div><div class="ct2">Karteikarten</div><div class="cd">Klicken &amp; repetieren</div></div>
<div class="c ck" style="text-align:center;padding:24px 16px"><div style="font-size:24px;font-weight:700;background:var(--grad);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;margin-bottom:6px">50</div><div class="ct2">Quiz</div><div class="cd">Mit Lernfortschritt</div></div>
<div class="c ck" style="text-align:center;padding:24px 16px"><div style="font-size:24px;font-weight:700;background:var(--grad);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;margin-bottom:6px">A–Z</div><div class="ct2">Glossar</div><div class="cd">Fachbegriffe</div></div></div>
</div>


<!-- KAP 1: EINORDNUNG VERKAUF -->
<div class="sec" id="sales_kap1"><h1>Einordnung Verkauf</h1><p class="sub">Kapitel 1 — Warum Sales, Marketing-Mix, Vertrieb, Segmente, Einkaufsprozesse, Kundentypen</p>

<div style="background:var(--s2);border-radius:var(--rd);padding:20px 24px;margin:18px 0;font-size:14px"><b style="display:block;font-size:15px;margin-bottom:8px">Lernziele:</b><div style="color:var(--tx2);line-height:2">• Aufgaben einer Verkaufsperson im Hotel/Gastrounternehmen beschreiben und mit Praxisbeispielen belegen<br>• Schnittstellen des Verkaufs mit anderen Abteilungen/Funktionen eines Hotels benennen<br>• Die wichtigsten Segmentgruppen und deren Einkaufsprozesse und -beteiligte in eigenen Worten erläutern</div></div>

<div style="display:flex;gap:8px;margin:12px 0 4px"><button style="font-size:11px;padding:4px 10px" onclick="this.parentElement.nextElementSibling.querySelectorAll('.tl-item').forEach(i=>i.classList.add('open'))">Alle aufklappen</button><button style="font-size:11px;padding:4px 10px" onclick="this.parentElement.nextElementSibling.querySelectorAll('.tl-item').forEach(i=>i.classList.remove('open'))">Alle schliessen</button></div>
<div class="tl">

<div class="tl-item"><div class="tl-num tl-num-b">1</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Einleitung — Warum Sales im Gastgewerbe?</div><div class="tl-merksatz">«Wir verkaufen keine Zimmer — wir verkaufen Lösungen.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body">
Ob wir ein Produkt verkaufen, eine Dienstleistung anbieten, eine Urlaubsdestination schmackhaft machen oder bei der Geschäftsleitung um eine Gehaltserhöhung bitten — immer geht es darum, jemanden von «etwas» zu überzeugen. Alle Unternehmen wollen Umsatz und Ertrag steigern.<br><br>
Im Gastgewerbe bleibt der professionelle Verkauf jedoch oft auf der Strecke. Es geht dabei nicht bloss darum, einem Gast am Tisch ein Getränk zu verkaufen. Vielmehr geht es um den <strong>Aufbau langfristiger Beziehungen</strong> zwischen Kundschaft und Dienstleistungsunternehmen — z.B. zwischen einer Firma und einem Hotel, einer Reiseagentur und einem Restaurant. Dabei ist es unerlässlich zu verstehen, wie der Einkauf auf Seite des Verhandlungsgegenübers funktioniert. Nur dann kann die Verkaufsperson in Verhandlungen bestehen.
</div><div class="merksatz">Fallbeispiel Bellevue: Lisa Meier betont bei jedem Teammeeting: «Wenn die Novartis-Travel-Managerin bei uns bucht, kauft sie nicht einfach 50 Übernachtungen, sondern Zuverlässigkeit, schnellen Check-in für gestresste Geschäftsreisende und einen reibungslosen Abrechnungsprozess.» Diese Haltung durchzieht den gesamten Sales-Ansatz des Bellevue.</div></div></div>

<div class="tl-item"><div class="tl-num tl-num-b">2</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Gesamtkontext — Schnittstellen zu Marketing (4 Ps)</div><div class="tl-merksatz">«Sales gehört zu Place UND Promotion.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body">
Im strategischen Marketing unterscheidet man den Marketing-Mix in die sogenannten <strong>«4 P»</strong>:<br><br>
• <strong>Product</strong> — Produktgestaltung, Sortiment (tief/breit), Marke, Verpackung, Zusatzleistungen, Auskunftsstelle<br>
• <strong>Price</strong> — Preisfestlegung, Preisstrategie, Konditionen, Yield/Revenue Management, Preiselastizität<br>
• <strong>Place/Distribution</strong> — Absatzwege, direkter/indirekter/gemischter Vertrieb, Logistik — <strong>hier liegt Sales!</strong><br>
• <strong>Promotion</strong> — Kommunikationsmix: Werbung, Sponsoring, Product Placement, persönlicher Verkauf, Event-Marketing<br><br>
Sales/Verkauf wird dabei primär dem <strong>Place</strong> und der <strong>Promotion</strong> zugeordnet.<br><br>
Unter <strong>Place</strong> versteht man alle Entscheidungen und Massnahmen, die den Weg eines Produkts/einer Dienstleistung von der anbietenden zur verbrauchenden Person betreffen. Da wir ein Hotel nicht «liefern» können, bedeutet Sales in unserer Branche: die Kundschaft dazu bringen, in unserem Hotel zu buchen und die Dienstleistung vor Ort anzunehmen. Dazu gehören die langfristige Vertriebspolitik, die Wahl der Distributionskanäle, die Auswahl der richtigen Kundschaft und die Pflege der Vertriebs- und Gästebeziehungen.<br><br>
Unter <strong>Promotion</strong> fällt der allgemeine Kommunikations-Mix — neben klassischer Werbung und Sponsoring sind hier der <strong>persönliche Verkauf</strong> und das <strong>Event-Marketing</strong> angesiedelt, also direkte Werkzeuge des Sales.
</div>
<!-- SVG: 4Ps Diagramm -->
<div style="background:var(--s);border:1px solid var(--bd);border-radius:var(--rd2);padding:28px;margin:20px 0;box-shadow:var(--shadow)">
<svg viewBox="0 0 680 520" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block">
<defs><marker id="sArr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M2 1L8 5L2 9" fill="none" stroke="#AEAEB2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></marker></defs>
<text x="340" y="30" text-anchor="middle" font-family="Inter,sans-serif" font-size="16" font-weight="700" fill="#1D1D1F">Marketing-Mix «4 Ps»</text>
<text x="340" y="52" text-anchor="middle" font-family="Inter,sans-serif" font-size="12" fill="#AEAEB2">Sales wird Place und Promotion zugeordnet</text>
<rect x="20" y="76" width="150" height="80" rx="12" fill="#F0F0F5" stroke="#D1D1D6" stroke-width="0.5"/>
<text x="95" y="108" text-anchor="middle" font-family="Inter,sans-serif" font-size="14" font-weight="700" fill="#6E6E73">Product</text>
<text x="95" y="126" text-anchor="middle" font-family="Inter,sans-serif" font-size="11" fill="#AEAEB2">Sortiment, Marke</text>
<text x="95" y="140" text-anchor="middle" font-family="Inter,sans-serif" font-size="11" fill="#AEAEB2">Zusatzleistungen</text>
<rect x="185" y="76" width="150" height="80" rx="12" fill="#F0F0F5" stroke="#D1D1D6" stroke-width="0.5"/>
<text x="260" y="108" text-anchor="middle" font-family="Inter,sans-serif" font-size="14" font-weight="700" fill="#6E6E73">Price</text>
<text x="260" y="126" text-anchor="middle" font-family="Inter,sans-serif" font-size="11" fill="#AEAEB2">Preisstrategie</text>
<text x="260" y="140" text-anchor="middle" font-family="Inter,sans-serif" font-size="11" fill="#AEAEB2">Yield / Revenue</text>
<rect x="350" y="76" width="150" height="80" rx="12" fill="rgba(52,199,89,.12)" stroke="#34C759" stroke-width="1"/>
<text x="425" y="108" text-anchor="middle" font-family="Inter,sans-serif" font-size="14" font-weight="700" fill="#1B7A34">Place</text>
<text x="425" y="126" text-anchor="middle" font-family="Inter,sans-serif" font-size="11" fill="#1B7A34">Vertrieb, Absatzwege</text>
<text x="425" y="140" text-anchor="middle" font-family="Inter,sans-serif" font-size="11" fill="#1B7A34">→ hier liegt Sales!</text>
<rect x="515" y="76" width="150" height="80" rx="12" fill="rgba(175,82,222,.1)" stroke="#AF52DE" stroke-width="1"/>
<text x="590" y="108" text-anchor="middle" font-family="Inter,sans-serif" font-size="14" font-weight="700" fill="#7B2FA0">Promotion</text>
<text x="590" y="126" text-anchor="middle" font-family="Inter,sans-serif" font-size="11" fill="#7B2FA0">Pers. Verkauf</text>
<text x="590" y="140" text-anchor="middle" font-family="Inter,sans-serif" font-size="11" fill="#7B2FA0">Event-Marketing</text>
<line x1="425" y1="156" x2="400" y2="230" stroke="#AEAEB2" stroke-width="1.5" marker-end="url(#sArr)"/>
<line x1="590" y1="156" x2="440" y2="230" stroke="#AEAEB2" stroke-width="1.5" marker-end="url(#sArr)"/>
<rect x="300" y="234" width="220" height="70" rx="16" fill="rgba(232,86,122,.1)" stroke="#E8567A" stroke-width="1"/>
<text x="410" y="264" text-anchor="middle" font-family="Inter,sans-serif" font-size="16" font-weight="700" fill="#C44569">Sales / Verkauf</text>
<text x="410" y="284" text-anchor="middle" font-family="Inter,sans-serif" font-size="12" fill="#C44569">Direkt &amp; indirekt</text>
<line x1="360" y1="304" x2="230" y2="370" stroke="#AEAEB2" stroke-width="1.5" marker-end="url(#sArr)"/>
<line x1="460" y1="304" x2="530" y2="370" stroke="#AEAEB2" stroke-width="1.5" marker-end="url(#sArr)"/>
<rect x="70" y="374" width="280" height="70" rx="12" fill="rgba(52,199,89,.1)" stroke="#34C759" stroke-width="1"/>
<text x="210" y="402" text-anchor="middle" font-family="Inter,sans-serif" font-size="14" font-weight="700" fill="#1B7A34">Direkter Vertrieb</text>
<text x="210" y="422" text-anchor="middle" font-family="Inter,sans-serif" font-size="12" fill="#1B7A34">Farming (reaktiv) · Hunting (proaktiv)</text>
<rect x="380" y="374" width="260" height="70" rx="12" fill="rgba(175,82,222,.1)" stroke="#AF52DE" stroke-width="1"/>
<text x="510" y="402" text-anchor="middle" font-family="Inter,sans-serif" font-size="14" font-weight="700" fill="#7B2FA0">Indirekter Vertrieb</text>
<text x="510" y="422" text-anchor="middle" font-family="Inter,sans-serif" font-size="12" fill="#7B2FA0">OTAs · Reisebüros · Tour Operators</text>
<rect x="70" y="460" width="130" height="40" rx="8" fill="#F0F0F5" stroke="#D1D1D6" stroke-width="0.5"/>
<text x="135" y="484" text-anchor="middle" font-family="Inter,sans-serif" font-size="11" fill="#6E6E73">Rezeption, Bankett</text>
<rect x="220" y="460" width="130" height="40" rx="8" fill="#F0F0F5" stroke="#D1D1D6" stroke-width="0.5"/>
<text x="285" y="484" text-anchor="middle" font-family="Inter,sans-serif" font-size="11" fill="#6E6E73">Sales Manager, AD</text>
<line x1="135" y1="444" x2="135" y2="458" stroke="#AEAEB2" stroke-width="1" marker-end="url(#sArr)"/>
<line x1="285" y1="444" x2="285" y2="458" stroke="#AEAEB2" stroke-width="1" marker-end="url(#sArr)"/>
</svg></div>
</div></div>

<div class="tl-item"><div class="tl-num tl-num-b">3</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Direkter vs. indirekter Vertrieb</div><div class="tl-merksatz">«Farming = ernten was reinkommt. Hunting = aktiv neue Geschäfte jagen.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body">
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

<div class="tl-item"><div class="tl-num tl-num-g">4</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Markt- oder Verkaufssegmente</div><div class="tl-merksatz">«Segmentierungen variieren stark — es gibt keinen universellen Standard!»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body">
<strong>Segmentierung</strong> bedeutet die Aufteilung eines Markts in Kundschafts- oder Gästegruppen nach bestimmten Kriterien, die dann separat bearbeitet werden. Neben sozioökonomischen Merkmalen (Alter, Geschlecht, Ausbildung, Einkommen) spielen im Gastgewerbe besonders <strong>branchenspezifische Kriterien</strong> eine Rolle:<br><br>
• <strong>Buchungsgrösse</strong> — Einzel- oder Gruppenbuchungen (z.B. ab 9/10 Zimmern = Gruppe)<br>
• <strong>Aufenthaltszweck</strong> — Geschäftlich (Business) oder Freizeit/Privat (Leisure)<br>
• <strong>Vertragsverhältnis</strong> — Lokal/international, mit/ohne Vertrag, Reiserichtlinien ja/nein<br><br>
Die Segmentierung ist bei Hotelketten fast immer vorgegeben, unterscheidet sich aber je nach Unternehmen — IHG hat eine andere Einteilung als Marriott oder Radisson.
</div><div class="merksatz">Achtung: Entscheidend ist, dass Sie die Segmentierung Ihres Betriebs kennen und danach arbeiten. Es gibt keinen universellen Standard!</div></div></div>

<div class="tl-item"><div class="tl-num tl-num-g">5</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Einkaufsprozesse — der Blick auf die Kundenseite</div><div class="tl-merksatz">«Wer Fristen verpasst oder falsche Tools nutzt, verliert das Geschäft.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body">
Für Verkaufsmitarbeitende sind gründliche Kenntnisse der Abläufe auf Kundenseite unerlässlich. Die Einkaufsprozesse sind oft überraschend komplex, teuer und zeitaufwendig. Um erfolgreich zu verkaufen, muss man diese Abläufe kennen und sich danach richten — besonders, weil man auf geschulte <strong>Einkaufs-Fachleute</strong> (Einkäufer:innen, Travel Manager) trifft, die ganz andere Anforderungen haben als die Gäste selbst.<br><br>
Die zu beantwortenden <strong>Kernfragen</strong> über die Segmente/Kundschaft sind:
</div>
<!-- SVG: Kernfragen -->
<div style="background:var(--s);border:1px solid var(--bd);border-radius:var(--rd2);padding:24px;margin:16px 0;box-shadow:var(--shadow)">
<svg viewBox="0 0 680 120" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block">
<rect x="10" y="10" width="155" height="90" rx="12" fill="rgba(232,86,122,.08)" stroke="#E8567A" stroke-width="0.5"/>
<text x="88" y="42" text-anchor="middle" font-family="Inter,sans-serif" font-size="20" fill="#E8567A">📋</text>
<text x="88" y="64" text-anchor="middle" font-family="Inter,sans-serif" font-size="14" font-weight="700" fill="#C44569">Wie?</text>
<text x="88" y="82" text-anchor="middle" font-family="Inter,sans-serif" font-size="11" fill="#6E6E73">Ablauf / Stufen</text>
<rect x="178" y="10" width="155" height="90" rx="12" fill="rgba(255,149,0,.08)" stroke="#FF9500" stroke-width="0.5"/>
<text x="256" y="42" text-anchor="middle" font-family="Inter,sans-serif" font-size="20" fill="#FF9500">⏰</text>
<text x="256" y="64" text-anchor="middle" font-family="Inter,sans-serif" font-size="14" font-weight="700" fill="#B36A00">Wann?</text>
<text x="256" y="82" text-anchor="middle" font-family="Inter,sans-serif" font-size="11" fill="#6E6E73">Fristen</text>
<rect x="346" y="10" width="155" height="90" rx="12" fill="rgba(52,199,89,.08)" stroke="#34C759" stroke-width="0.5"/>
<text x="424" y="42" text-anchor="middle" font-family="Inter,sans-serif" font-size="20" fill="#34C759">🔧</text>
<text x="424" y="64" text-anchor="middle" font-family="Inter,sans-serif" font-size="14" font-weight="700" fill="#1B7A34">Womit?</text>
<text x="424" y="82" text-anchor="middle" font-family="Inter,sans-serif" font-size="11" fill="#6E6E73">Tools / Mittel</text>
<rect x="514" y="10" width="155" height="90" rx="12" fill="rgba(0,122,255,.08)" stroke="#007AFF" stroke-width="0.5"/>
<text x="592" y="42" text-anchor="middle" font-family="Inter,sans-serif" font-size="20" fill="#007AFF">👤</text>
<text x="592" y="64" text-anchor="middle" font-family="Inter,sans-serif" font-size="14" font-weight="700" fill="#005BBF">Wer?</text>
<text x="592" y="82" text-anchor="middle" font-family="Inter,sans-serif" font-size="11" fill="#6E6E73">Entscheidungsträger</text>
</svg></div>
<div class="merksatz">Merksatz: Jedes Segment hat seinen eigenen Einkaufsprozess. Es ist die zentrale Aufgabe der Verkaufsperson, diese Prozesse für die wichtigen Zielgruppen zu kennen und sicherzustellen, dass sich das Hotel daran hält. Wer Fristen verpasst oder falsche Tools nutzt, verliert das Geschäft — unabhängig von der Qualität des Produkts.</div>
</div></div>

<div class="tl-item"><div class="tl-num tl-num-g">6</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Corporate Transient — Einzel-Geschäftsreisende</div><div class="tl-merksatz">«Managed Travel = RFP ab Mitte Jahr + Reiserichtlinien. Unmanaged = freie Hotelwahl.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body">
Dieses Segment wird nochmals unterteilt in Firmen mit professionellem Reiseeinkauf (managed travel) und solche, die den Reisenden weitgehend freie Hand lassen (unmanaged travel).<br><br>
<strong>Mit Reiserichtlinien (Managed Travel):</strong><br>
Sobald ein Unternehmen an einem Ort ein höheres Geschäftsreiseaufkommen hat, versucht es, via Vertrag mit einem Hotel einen Preisnachlass zu verhandeln. Diese Vertragsverhandlungen sind je nach Firmengrösse sehr aufwendig und beginnen oft bereits <strong>Mitte des Kalenderjahres für das Folgejahr</strong>. Grosse Unternehmen führen diesen Einkaufsprozess als <strong>RFP – Request for Proposal</strong> elektronisch durch, z.B. mit Tools wie <strong>Lanyon</strong> oder <strong>Nexus</strong>, oder beauftragen eine <strong>TMC – Travel Management Company</strong> (z.B. Amex GBT, BCD Travel, CWT). Diese Prozesse sind vom Hotel exakt einzuhalten — Abweichungen können zum Verlust des Vertrages führen.<br><br>
Reisende sind durch mehr oder weniger strikte <strong>Reiserichtlinien</strong> an die Vorgaben und die Hotelauswahl des Arbeitgebenden gebunden. Auch der Buchungsprozess kann an spezialisierte weltweit operierende Reisebüros (<strong>Konsortien</strong>) ausgelagert werden. Ist das Reisebüro auf dem Firmengelände und exklusiv für das Unternehmen tätig, spricht man von einem <strong>Implant</strong>.<br><br>
<strong>Ohne Vorgaben (Unmanaged Travel):</strong><br>
Der Gast/Bucher ist nicht durch Reiserichtlinien gebunden — die Hotelwahl ist seine individuelle Entscheidung. Viele orientieren sich an OTAs oder Reisebüros und buchen den tagesaktuellen Preis. Mitentscheidend sind oft Vielreise- oder Stammgastprogramme. Einige OTAs (z.B. Booking.com, HRS, Expedia) haben für KMU/SME spezielle Programme aufgelegt, damit auch kleinere Unternehmen ohne grosse Volumen an Nachlässe kommen.
</div><div class="merksatz">Fallbeispiel Bellevue: Marc Brunner erhält im Juni eine RFP-Einladung von der Roche AG über die Plattform Lanyon. Er muss bis zum 15. August die Raten für das nächste Jahr eingeben, inklusive Last-Room-Availability-Garantie, Stornierungsbedingungen und Amenity-Paket. Im September folgt ein persönliches Gespräch mit der Travel Managerin von Roche. Die Frist ist eng — ein verspätetes Angebot bedeutet automatisch Ausschluss vom Vertrag.</div></div></div>

<div class="tl-item"><div class="tl-num tl-num-g">7</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Transient Leisure, Gruppen &amp; Airlines</div><div class="tl-merksatz">«Veranstalter = statische Katalogpreise, 9–18 Monate Vorlauf. OTAs = dynamisch.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body">
<strong>Einzel-Freizeitreisende:</strong> Die touristische Marktstruktur bei Paketreisen folgt einer Kette: Gäste → Reisebüro (Retailer) → Veranstalter (Tour Operator) → Incoming Operator → Hotel. Die Einkaufsprozesse sind oft noch durch Katalogproduktion geprägt (langer Vorlauf, einmal gedruckt statisch). Bei Flugdestinationen müssen Veranstalter <strong>9–18 Monate im Voraus</strong> Flugkapazitäten einkaufen. Einzelfreizeitreisende buchen zunehmend selbst über OTAs — das Hotel muss auf diesen Portalen buchbar sein (12-monatige Verträge, Kommission) und gleichzeitig durch Marketing zur <strong>Direktbuchung</strong> überzeugen. Dieses Segment zeichnet sich durch <strong>dynamische Preise</strong> aus.<br><br>
<strong>Geschäftsreisegruppen / MICE:</strong> Ab ca. 10 Zimmern = Gruppe. Vielfältige Vorbereitungen nötig (TN-Absprache, Koordination, Zahlungsabwicklung). Oft über spezialisierte Agenturen (Cvent, Meetingselect). Strikte Einhaltung von Formaten und Fristen. Die Hotel-/Restaurantleistung ist oft nur ein Teil der Gesamtkosten.<br><br>
<strong>Freizeitreisegruppen / SMERF:</strong> Werden vom Veranstalter oft als Serie eingekauft (z.B. x Personen jeden Montag). Private Gruppen werden selten proaktiv akquiriert, eher über Werbung vermarktet.<br><br>
<strong>Airlines:</strong> Besonderes Geschäftsfeld nahe Flughafen. <strong>Crew-Aufenthalte</strong> sind regelmässig und planbar, mit Zusatzleistungen (Transfer, Wäsche). Langwieriger Einkaufsprozess. <strong>Layover</strong> ist ad-hoc-Geschäft bei Störungen — erfordert schnelle Reaktion der Operation.
</div><div class="merksatz">Fallbeispiel Bellevue: Sophie Keller bereitet sich auf die ITB Berlin vor — 15 Termine mit Tour Operators (TUI, DER Touristik, Kuoni). Gleichzeitig betreut Marc die MICE-Anfrage der Swisscom für eine 3-tägige Kadertagung mit 80 Teilnehmenden. Die Anfrage kam über Cvent — er muss innerhalb von 48 Stunden ein detailliertes Angebot einreichen.</div></div></div>

<div class="tl-item"><div class="tl-num tl-num-r">8</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Persönlichkeitsmodelle — 4 Kundentypen</div><div class="tl-merksatz">«Sicherheit, Wirtschaftlichkeit, Prestige, Bequemlichkeit — jeden anders ansprechen!»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body">
Persönlichkeitsmodelle werden eingesetzt, um Kund:innen und Gesprächspartner:innen einzuordnen, zu gruppieren und Massnahmen/Aktivitäten zu steuern. In der Regel werden die anzuwendenden Typisierungen vom Unternehmen vorgegeben.
</div>
<!-- SVG: 4 Kundentypen -->
<div style="background:var(--s);border:1px solid var(--bd);border-radius:var(--rd2);padding:24px;margin:16px 0;box-shadow:var(--shadow)">
<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block">
<rect x="10" y="10" width="320" height="110" rx="12" fill="rgba(52,199,89,.08)" stroke="#34C759" stroke-width="0.5"/>
<text x="30" y="38" font-family="Inter,sans-serif" font-size="14" font-weight="700" fill="#1B7A34">🛡️ Sicherheitstyp</text>
<text x="30" y="58" font-family="Inter,sans-serif" font-size="12" fill="#6E6E73">Stabilität, Zuverlässigkeit, konstante Qualität.</text>
<text x="30" y="76" font-family="Inter,sans-serif" font-size="12" fill="#6E6E73">Preis sekundär — Seriosität und Güte zählen.</text>
<text x="30" y="100" font-family="Inter,sans-serif" font-size="11" font-weight="600" fill="#1B7A34">Tipp: Zertifikate betonen, pers. Betreuung, nie enttäuschen</text>
<rect x="350" y="10" width="320" height="110" rx="12" fill="rgba(255,149,0,.08)" stroke="#FF9500" stroke-width="0.5"/>
<text x="370" y="38" font-family="Inter,sans-serif" font-size="14" font-weight="700" fill="#B36A00">💰 Wirtschaftlichkeitstyp</text>
<text x="370" y="58" font-family="Inter,sans-serif" font-size="12" fill="#6E6E73">Preis-Leistung, Best Deal. Geniesst Preisgespräch.</text>
<text x="370" y="76" font-family="Inter,sans-serif" font-size="12" fill="#6E6E73">Fragt nach Aktionen/Sonderangeboten.</text>
<text x="370" y="100" font-family="Inter,sans-serif" font-size="11" font-weight="600" fill="#B36A00">Tipp: Hart verhandeln — liebt ebenbürtige Gegenpartei</text>
<rect x="10" y="138" width="320" height="110" rx="12" fill="rgba(175,82,222,.08)" stroke="#AF52DE" stroke-width="0.5"/>
<text x="30" y="166" font-family="Inter,sans-serif" font-size="14" font-weight="700" fill="#7B2FA0">👑 Prestigetyp</text>
<text x="30" y="186" font-family="Inter,sans-serif" font-size="12" fill="#6E6E73">Ansehen gewinnen. Markenbewusstsein, Status.</text>
<text x="30" y="204" font-family="Inter,sans-serif" font-size="12" fill="#6E6E73">Profilierung, Anerkennung.</text>
<text x="30" y="228" font-family="Inter,sans-serif" font-size="11" font-weight="600" fill="#7B2FA0">Tipp: Neuheiten zuerst, Events einladen, Titel verwenden</text>
<rect x="350" y="138" width="320" height="110" rx="12" fill="rgba(0,122,255,.08)" stroke="#007AFF" stroke-width="0.5"/>
<text x="370" y="166" font-family="Inter,sans-serif" font-size="14" font-weight="700" fill="#005BBF">🛋️ Bequemlichkeitstyp</text>
<text x="370" y="186" font-family="Inter,sans-serif" font-size="12" fill="#6E6E73">Alles aus einer Hand, Rundum-Service.</text>
<text x="370" y="204" font-family="Inter,sans-serif" font-size="12" fill="#6E6E73">Kontinuität, Zuverlässigkeit.</text>
<text x="370" y="228" font-family="Inter,sans-serif" font-size="11" font-weight="600" fill="#005BBF">Tipp: Arbeit abnehmen, Referenzen bereithalten</text>
</svg></div>
<div class="tl-body" style="margin-top:12px"><strong>Weitere Persönlichkeitsmodelle:</strong><br>• <strong>DISC / DISG</strong> — Dominance, Inducement, Submission, Compliance (deutsch: Dominanz, Initiative, Stetigkeit, Gewissenhaftigkeit)<br>• <strong>Myers-Briggs Type Indicator (MBTI)</strong> — 16 Persönlichkeitstypen basierend auf vier Dimensionen</div>
<div class="merksatz">Fallbeispiel Bellevue: Die Travel Managerin der Novartis ist ein typischer Sicherheitstyp — sie will Verlässlichkeit, immer den gleichen Check-in-Prozess und klare Eskalationswege. Marc betont Zertifizierungen und den persönlichen Ansprechpartner. Der Einkäufer einer Beratungsfirma hingegen ist ein Wirtschaftlichkeitstyp — er vergleicht jedes Jahr drei Hotels und verhandelt hart um Raten. Marc bereitet sich mit klaren Zahlen zur Marktposition und kompetitiven Benchmarks vor.</div>
</div></div>

</div></div>

<!-- KAP 2: VERKAUFSGESPRÄCHE -->
<div class="sec" id="sales_kap2"><h1>Verkaufsgespräche</h1><p class="sub">Kapitel 2 — Kommunikation, Fragetechniken, 7 Phasen, FAB-Technik, Preisnennung, Abschluss, Einwände, Preisverhandlung</p>

<div style="background:var(--s2);border-radius:var(--rd);padding:20px 24px;margin:18px 0;font-size:14px"><b style="display:block;font-size:15px;margin-bottom:8px">Lernziele:</b><div style="color:var(--tx2);line-height:2">• Unterschiede und Wirkungen verbaler/nonverbaler Kommunikation mit eigenen Worten beschreiben<br>• Die fünf Fragetechniken gezielt anwenden und deren Vor-/Nachteile korrekt aufzählen<br>• Ein Verkaufsgespräch in den verschiedenen Phasen professionell planen<br>• Selbstständig eine aussagekräftige Potenzialanalyse mithilfe von Fragetechniken durchführen<br>• Mit der Merkmal-Vorteil-Nutzen-Technik (FAB) verständlich und nachvollziehbar argumentieren<br>• Einwände selbstständig und strukturiert behandeln<br>• Bei Preiswiderstand der kaufenden Person alternative profitable Lösungen entwickeln</div></div>

<div style="display:flex;gap:8px;margin:12px 0 4px"><button style="font-size:11px;padding:4px 10px" onclick="this.parentElement.nextElementSibling.querySelectorAll('.tl-item').forEach(i=>i.classList.add('open'))">Alle aufklappen</button><button style="font-size:11px;padding:4px 10px" onclick="this.parentElement.nextElementSibling.querySelectorAll('.tl-item').forEach(i=>i.classList.remove('open'))">Alle schliessen</button></div>
<div class="tl">

<div class="tl-item"><div class="tl-num tl-num-b">1</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Kommunikation im Verkauf</div><div class="tl-merksatz">«Nur 7% Worte, 38% Stimme, 55% Körpersprache.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body">
Das lateinische Wort <em>communicatio</em> bedeutet «Verbindung» / «Mitteilung». Kommunikation kann <strong>verbal</strong> (durch Sprache) oder <strong>nonverbal</strong> (durch Körpersignale) erfolgen. Sie kann direkt (Face-to-face) oder indirekt (über ein Medium) stattfinden. Neben den sichtbaren, bewussten Elementen gibt es auch unsichtbare, unbewusste Anteile — den sogenannten <strong>Kommunikations-Eisberg</strong>.
</div>
<!-- SVG: Kommunikationsgewichtung -->
<div style="background:var(--s);border:1px solid var(--bd);border-radius:var(--rd2);padding:24px;margin:16px 0;box-shadow:var(--shadow)">
<svg viewBox="0 0 680 140" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block">
<rect x="10" y="10" width="210" height="110" rx="12" fill="rgba(52,199,89,.06)" stroke="#34C759" stroke-width="0.5"/>
<text x="115" y="50" text-anchor="middle" font-family="Inter,sans-serif" font-size="36" font-weight="700" fill="#34C759">7%</text>
<text x="115" y="72" text-anchor="middle" font-family="Inter,sans-serif" font-size="12" fill="#6E6E73">Worte / Inhalt</text>
<rect x="30" y="88" width="170" height="6" rx="3" fill="#F0F0F5"/><rect x="30" y="88" width="12" height="6" rx="3" fill="#34C759"/>
<rect x="235" y="10" width="210" height="110" rx="12" fill="rgba(175,82,222,.06)" stroke="#AF52DE" stroke-width="0.5"/>
<text x="340" y="50" text-anchor="middle" font-family="Inter,sans-serif" font-size="36" font-weight="700" fill="#AF52DE">38%</text>
<text x="340" y="72" text-anchor="middle" font-family="Inter,sans-serif" font-size="12" fill="#6E6E73">Stimme / Tonfall</text>
<rect x="255" y="88" width="170" height="6" rx="3" fill="#F0F0F5"/><rect x="255" y="88" width="65" height="6" rx="3" fill="#AF52DE"/>
<rect x="460" y="10" width="210" height="110" rx="12" fill="rgba(232,86,122,.06)" stroke="#E8567A" stroke-width="0.5"/>
<text x="565" y="50" text-anchor="middle" font-family="Inter,sans-serif" font-size="36" font-weight="700" fill="#E8567A">55%</text>
<text x="565" y="72" text-anchor="middle" font-family="Inter,sans-serif" font-size="12" fill="#6E6E73">Körpersprache</text>
<rect x="480" y="88" width="170" height="6" rx="3" fill="#F0F0F5"/><rect x="480" y="88" width="94" height="6" rx="3" fill="#E8567A"/>
</svg></div>
<div class="merksatz">Achtung: Nur 7% der Wahrnehmung entfällt auf den Inhalt! Das bedeutet nicht, dass Inhalt unwichtig ist — aber dass Körpersprache und Stimme massgeblich darüber entscheiden, ob Ihr Gegenüber Sie als kompetent, sympathisch und vertrauenswürdig wahrnimmt.</div>
</div></div>

<div class="tl-item"><div class="tl-num tl-num-b">2</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Verbale Kommunikation — Das 4-Ohren-Modell (Schulz von Thun)</div><div class="tl-merksatz">«Sender spricht mit 4 Schnäbeln, Empfänger hört mit 4 Ohren.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body">
Jede Äusserung («Nachricht») kann aus <strong>vier unterschiedlichen Richtungen</strong> angesehen und gedeutet werden:
</div>
<!-- SVG: 4-Ohren -->
<div style="background:var(--s);border:1px solid var(--bd);border-radius:var(--rd2);padding:24px;margin:16px 0;box-shadow:var(--shadow)">
<svg viewBox="0 0 680 120" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block">
<rect x="10" y="10" width="320" height="44" rx="10" fill="rgba(0,122,255,.08)" stroke="#007AFF" stroke-width="0.5"/>
<text x="170" y="38" text-anchor="middle" font-family="Inter,sans-serif" font-size="13" font-weight="600" fill="#005BBF">📄 Sachebene — «Worüber ich informiere»</text>
<rect x="350" y="10" width="320" height="44" rx="10" fill="rgba(255,149,0,.08)" stroke="#FF9500" stroke-width="0.5"/>
<text x="510" y="38" text-anchor="middle" font-family="Inter,sans-serif" font-size="13" font-weight="600" fill="#B36A00">🗣️ Selbstoffenbarung — «Was ich kundgebe»</text>
<rect x="10" y="66" width="320" height="44" rx="10" fill="rgba(52,199,89,.08)" stroke="#34C759" stroke-width="0.5"/>
<text x="170" y="94" text-anchor="middle" font-family="Inter,sans-serif" font-size="13" font-weight="600" fill="#1B7A34">🤝 Beziehungsebene — «Was ich von dir halte»</text>
<rect x="350" y="66" width="320" height="44" rx="10" fill="rgba(232,86,122,.08)" stroke="#E8567A" stroke-width="0.5"/>
<text x="510" y="94" text-anchor="middle" font-family="Inter,sans-serif" font-size="13" font-weight="600" fill="#C44569">📢 Appellebene — «Wozu ich dich veranlassen möchte»</text>
</svg></div>
<div class="tl-body" style="margin-top:8px"><strong>Beispiel im Verkauf:</strong> Ein Firmenkunde sagt: «Ihr Mitbewerber hat mir aber einen besseren Preis angeboten.»<br>— Sachebene: Ein anderes Hotel bietet günstigere Raten.<br>— Selbstoffenbarung: «Ich bin preisbewusst und gut informiert.»<br>— Beziehungsebene: «Ich erwarte, dass Sie mir entgegenkommen.»<br>— Appellebene: «Senken Sie Ihren Preis!»<br>Wer als Verkäufer nur auf der Sachebene reagiert, übersieht die wahre Botschaft.</div>
</div></div>

<div class="tl-item"><div class="tl-num tl-num-b">3</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Nonverbale Kommunikation</div><div class="tl-merksatz">«Die ersten 30 Sekunden entscheiden — der erste Eindruck haftet Jahre.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body">
Nonverbale Kommunikation wird überwiegend durch <strong>Körpersprache</strong> ausgedrückt, aber auch durch <strong>paraverbale Kommunikation</strong> (Stimmeigenschaften, Sprechverhalten, Lachen, Seufzen, Räuspern etc.).<br><br>
Bei Neukund:innen entscheiden bereits die <strong>ersten 30 Sekunden</strong>, ob das Gegenüber Sie spontan mag und ob die Chemie stimmt. Der erste Eindruck ist enorm wichtig und haftet häufig über viele Jahre — die Korrektur einmal abgespeicherter Eindrücke ist sehr schwierig und aufwendig.<br><br>
Die Körpersprache (<strong>Kinesik</strong>) kann nur schwer «lügen», da viele Aspekte unbewusst und unkontrolliert ablaufen. Die wichtigsten Signale: Gestik &amp; Motorik · Körperhaltung · Mimik · Blickkontakt · Räumliches Verhalten · Paraverbale Kommunikation · Kleidung, Frisur, Statussymbole
</div></div></div>

<div class="tl-item"><div class="tl-num tl-num-g">4</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Fragetechniken — «Wer fragt, der führt»</div><div class="tl-merksatz">«Fragen und Zuhören sind Ihre wichtigsten Verkaufsinstrumente — und sie kosten nichts!»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body">
<strong>Offene Fragen (W-Fragen):</strong> Wer, wie, warum. Gewinnen Informationen, halten Gespräche im Fluss, bauen Vertrauen auf. Bsp: «Welche Anforderungen hat Ihre Tagung?»<br><br>
<strong>Geschlossene Fragen:</strong> Ja/Nein-Antwort. Nur bewusst taktisch einsetzen! Bsp: «Haben Sie schon bei uns übernachtet?»<br><br>
<strong>Alternativfragen:</strong> Führt Entscheidung herbei, bietet nur Varianten der Zustimmung. Bsp: «Wollen Sie die VA in der 50. oder 51. KW platzieren?»<br><br>
<strong>Suggestivfragen:</strong> Keine echte Frage — will beeinflussen. Manipulierender Charakter offensichtlich! Sehr vorsichtig einsetzen!<br><br>
<strong>Gegenfragen:</strong> Reagieren auf Einwände, gewinnen Zeit. Bsp: Kunde: «Ist der Preis nicht zu hoch?» — Sie: «Im Verhältnis wozu?»<br><br>
<strong>Ermittlungsfragen:</strong> Offene Frage, wesentlicher Bestandteil der Bedarfsanalyse. Bsp: «Für wie viele Mitarbeitende benötigen Sie Übernachtungen?»<br><br>
<strong>Rhetorische Fragen:</strong> Keine Antwort erwartet. Steuert Richtung Zielerreichung.<br><br>
<strong>Dirigierende Fragen:</strong> Lenkt auf wichtiges Thema. Bsp: «Können wir noch über die Buchungswege sprechen?»<br><br>
<strong>Ja-Fragen:</strong> Aneinandergereiht = <strong>«Ja-Strasse»</strong> als Abschlusstechnik.
</div></div></div>

<div class="tl-item"><div class="tl-num tl-num-g">5</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Verkaufsgespräche — Der Ablauf in 7 Phasen</div><div class="tl-merksatz">«Vorbereitung → Warm-up → Bedarfsanalyse → Präsentation → Preis → Abschluss → Nachbearbeitung»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body">
Ein professionelles Verkaufsgespräch folgt einem schematischen Ablauf. Ein Einwand kann jederzeit auftreten und führt nach seiner Behandlung zum erneuten Abschlussversuch.<br><br>
<strong>Phase 1: Vorbereitung</strong> — Terminvereinbarung, Recherche (Kundenhistorie, Internet, LinkedIn), Gesprächsziele definieren, Rückversicherung am Tag davor.<br><br>
<strong>Phase 2: Begrüssung / Warm-up</strong> — Bei Kaltakquise: ASP finden. Doppelter Aufbau: <strong>Beziehungsaufbau</strong> (sympathisch, freundlich) und <strong>Kompetenzaufbau</strong> (Produkt- &amp; Marktkenntnis). Signale beachten!<br><br>
<strong>Phase 3: Potenzial-/Bedarfsanalyse</strong> — Bedürfnisse herausfinden (bewusste + unbewusste). <strong>Trichtermodell:</strong> Mit breiten Fragen beginnen, schrittweise einschränken. Offene Fragen verwenden!<br><br>
<strong>Phase 4: Produktpräsentation</strong> — Produktmerkmale mit Bedürfnissen verknüpfen. Kern: <strong>Nutzenargumentation: Merkmal → Vorteil → Nutzen (FAB)</strong>. Kaufsignale beachten.<br><br>
<strong>Phase 5: Preisnennung</strong> — Erst unmittelbar vor dem Abschluss. Preis nie ohne Nutzen nennen. <strong>Sandwich-Methode</strong> anwenden.<br><br>
<strong>Phase 6: Verkaufsabschluss</strong> — Muss zwingend durch die Verkäufer:innen eingeleitet werden. Kaufsignale erkennen!<br><br>
<strong>Phase 7: Nachbearbeitung</strong> — Dankesnachricht. Info an alle Abteilungen. Kundenprofil pflegen (PMS, CRM). Follow-ups setzen.
</div>
<!-- SVG: 7 Phasen -->
<div style="background:var(--s);border:1px solid var(--bd);border-radius:var(--rd2);padding:24px;margin:16px 0;box-shadow:var(--shadow)">
<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block">
<defs><marker id="sA2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M2 1L8 5L2 9" fill="none" stroke="#AEAEB2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></marker></defs>
<rect x="10" y="10" width="130" height="56" rx="10" fill="#F0F0F5" stroke="#D1D1D6" stroke-width="0.5"/>
<text x="75" y="33" text-anchor="middle" font-family="Inter,sans-serif" font-size="11" font-weight="700" fill="#AEAEB2">PHASE 1</text>
<text x="75" y="50" text-anchor="middle" font-family="Inter,sans-serif" font-size="12" font-weight="600" fill="#1D1D1F">Vorbereitung</text>
<line x1="140" y1="38" x2="160" y2="38" stroke="#AEAEB2" stroke-width="1.5" marker-end="url(#sA2)"/>
<rect x="165" y="10" width="130" height="56" rx="10" fill="rgba(0,122,255,.08)" stroke="#007AFF" stroke-width="0.5"/>
<text x="230" y="33" text-anchor="middle" font-family="Inter,sans-serif" font-size="11" font-weight="700" fill="#007AFF">PHASE 2</text>
<text x="230" y="50" text-anchor="middle" font-family="Inter,sans-serif" font-size="12" font-weight="600" fill="#005BBF">Warm-up</text>
<line x1="295" y1="38" x2="315" y2="38" stroke="#AEAEB2" stroke-width="1.5" marker-end="url(#sA2)"/>
<rect x="320" y="10" width="150" height="56" rx="10" fill="rgba(0,122,255,.08)" stroke="#007AFF" stroke-width="0.5"/>
<text x="395" y="33" text-anchor="middle" font-family="Inter,sans-serif" font-size="11" font-weight="700" fill="#007AFF">PHASE 3</text>
<text x="395" y="50" text-anchor="middle" font-family="Inter,sans-serif" font-size="12" font-weight="600" fill="#005BBF">Bedarfsanalyse</text>
<line x1="470" y1="38" x2="490" y2="38" stroke="#AEAEB2" stroke-width="1.5" marker-end="url(#sA2)"/>
<rect x="495" y="10" width="170" height="56" rx="10" fill="rgba(175,82,222,.08)" stroke="#AF52DE" stroke-width="0.5"/>
<text x="580" y="33" text-anchor="middle" font-family="Inter,sans-serif" font-size="11" font-weight="700" fill="#AF52DE">PHASE 4</text>
<text x="580" y="50" text-anchor="middle" font-family="Inter,sans-serif" font-size="12" font-weight="600" fill="#7B2FA0">Produktpräsentation</text>
<line x1="580" y1="66" x2="580" y2="90" stroke="#AEAEB2" stroke-width="1.5" marker-end="url(#sA2)"/>
<rect x="460" y="94" width="170" height="56" rx="10" fill="rgba(255,149,0,.08)" stroke="#FF9500" stroke-width="0.5"/>
<text x="545" y="117" text-anchor="middle" font-family="Inter,sans-serif" font-size="11" font-weight="700" fill="#FF9500">PHASE 5</text>
<text x="545" y="134" text-anchor="middle" font-family="Inter,sans-serif" font-size="12" font-weight="600" fill="#B36A00">Preisnennung</text>
<line x1="460" y1="122" x2="440" y2="122" stroke="#AEAEB2" stroke-width="1.5" marker-end="url(#sA2)"/>
<rect x="240" y="94" width="196" height="56" rx="10" fill="rgba(52,199,89,.1)" stroke="#34C759" stroke-width="1"/>
<text x="338" y="117" text-anchor="middle" font-family="Inter,sans-serif" font-size="11" font-weight="700" fill="#34C759">PHASE 6</text>
<text x="338" y="134" text-anchor="middle" font-family="Inter,sans-serif" font-size="14" font-weight="700" fill="#1B7A34">Abschluss ✓</text>
<line x1="240" y1="122" x2="220" y2="122" stroke="#AEAEB2" stroke-width="1.5" marker-end="url(#sA2)"/>
<rect x="30" y="94" width="186" height="56" rx="10" fill="#F0F0F5" stroke="#D1D1D6" stroke-width="0.5"/>
<text x="123" y="117" text-anchor="middle" font-family="Inter,sans-serif" font-size="11" font-weight="700" fill="#AEAEB2">PHASE 7</text>
<text x="123" y="134" text-anchor="middle" font-family="Inter,sans-serif" font-size="12" font-weight="600" fill="#1D1D1F">Nachbearbeitung</text>
<rect x="220" y="180" width="240" height="44" rx="12" fill="rgba(255,59,48,.08)" stroke="#FF3B30" stroke-width="1"/>
<text x="340" y="207" text-anchor="middle" font-family="Inter,sans-serif" font-size="14" font-weight="700" fill="#FF3B30">⚡ Einwand — kann jederzeit auftreten</text>
<line x1="338" y1="150" x2="338" y2="178" stroke="#FF3B30" stroke-width="1" stroke-dasharray="4 3" marker-end="url(#sA2)"/>
<text x="340" y="248" text-anchor="middle" font-family="Inter,sans-serif" font-size="12" font-weight="600" fill="#1D1D1F">5 Schritte: Verständnis → Nachfragen → FAB → Rückversichern → Erneuter Abschluss</text>
<text x="340" y="270" text-anchor="middle" font-family="Inter,sans-serif" font-size="11" fill="#E8567A" font-style="italic">NEIN = «Noch Etwas Input Nötig»</text>
</svg></div>
<div class="merksatz">Fallbeispiel Bellevue — Vollständiges Verkaufsgespräch: Marc trifft die neue Travel Managerin einer Beratungsfirma. 1. Vorbereitung: 200 MA, ca. 400 RNs/Jahr — Ziel: 200 RNs zu CHF 220. 2. Warm-up: «Willkommen! Herzlichen Glückwunsch zur neuen Position!» 3. Bedarfsanalyse mit offenen Fragen. 4. FAB: Express-Check-in → sofortiger Zimmerzugang → keine Zeitverluste. 5. Sandwich: Flexibles Stornierungsrecht + Frühstück → CHF 225 → inkl. City Tax. 6. Abschluss bei Kaufsignal (TM nickt). 7. Dankesnachricht, Vertragsentwurf, alle Abteilungen informiert.</div>
</div></div>

<div class="tl-item"><div class="tl-num tl-num-r">6</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Nutzenargumentation — FAB-Technik (Feature–Advantage–Benefit)</div><div class="tl-merksatz">«Es wird nie das Produkt gekauft — es wird immer der Nutzen/Gewinn erworben.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body">
Kundschaftsorientierte Argumentation ist weit mehr als das Aufzählen positiver Produktmerkmale. Nicht jedes Argument ist für jede Klientel passend! Nennen Sie nur die Argumente, welche die Kundschaft braucht, und schildern Sie gleichzeitig, welchen Nutzen sie davon hat.<br><br>
Wichtig: Immer nur <strong>ein Merkmal, ein Vorteil und ein Nutzen</strong> in einer Kette darstellen.
</div>
<!-- SVG: FAB -->
<div style="background:var(--s);border:1px solid var(--bd);border-radius:var(--rd2);padding:24px;margin:16px 0;box-shadow:var(--shadow)">
<svg viewBox="0 0 680 180" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block">
<defs><marker id="sA3" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M2 1L8 5L2 9" fill="none" stroke="#AEAEB2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></marker></defs>
<rect x="10" y="10" width="200" height="70" rx="12" fill="#F0F0F5" stroke="#D1D1D6" stroke-width="0.5"/>
<text x="110" y="32" text-anchor="middle" font-family="Inter,sans-serif" font-size="10" font-weight="700" fill="#AEAEB2" letter-spacing="1">MERKMAL</text>
<text x="110" y="52" text-anchor="middle" font-family="Inter,sans-serif" font-size="13" font-weight="600" fill="#1D1D1F">Sachliche Eigenschaft</text>
<text x="110" y="68" text-anchor="middle" font-family="Inter,sans-serif" font-size="11" fill="#6E6E73" font-style="italic">«24h-Rezeption»</text>
<line x1="210" y1="45" x2="235" y2="45" stroke="#AEAEB2" stroke-width="1.5" marker-end="url(#sA3)"/>
<rect x="240" y="10" width="200" height="70" rx="12" fill="rgba(232,86,122,.08)" stroke="#E8567A" stroke-width="0.5"/>
<text x="340" y="32" text-anchor="middle" font-family="Inter,sans-serif" font-size="10" font-weight="700" fill="#E8567A" letter-spacing="1">VORTEIL</text>
<text x="340" y="52" text-anchor="middle" font-family="Inter,sans-serif" font-size="13" font-weight="600" fill="#C44569">Allgemeiner Nutzen</text>
<text x="340" y="68" text-anchor="middle" font-family="Inter,sans-serif" font-size="11" fill="#6E6E73" font-style="italic">«Jederzeit anreisen»</text>
<line x1="440" y1="45" x2="465" y2="45" stroke="#AEAEB2" stroke-width="1.5" marker-end="url(#sA3)"/>
<rect x="470" y="10" width="200" height="70" rx="12" fill="rgba(52,199,89,.1)" stroke="#34C759" stroke-width="1"/>
<text x="570" y="32" text-anchor="middle" font-family="Inter,sans-serif" font-size="10" font-weight="700" fill="#34C759" letter-spacing="1">NUTZEN</text>
<text x="570" y="52" text-anchor="middle" font-family="Inter,sans-serif" font-size="13" font-weight="600" fill="#1B7A34">Individueller Kundennutzen</text>
<text x="570" y="68" text-anchor="middle" font-family="Inter,sans-serif" font-size="11" fill="#6E6E73" font-style="italic">«Terminlich flexibel»</text>
<rect x="10" y="100" width="325" height="60" rx="12" fill="rgba(52,199,89,.06)" stroke="#34C759" stroke-width="0.5"/>
<text x="172" y="124" text-anchor="middle" font-family="Inter,sans-serif" font-size="13" font-weight="700" fill="#1B7A34">Sachlich = «Mehr»</text>
<text x="172" y="144" text-anchor="middle" font-family="Inter,sans-serif" font-size="11" fill="#6E6E73">Effizienz · Gewinn · Zeit · Sicherheit</text>
<rect x="345" y="100" width="325" height="60" rx="12" fill="rgba(175,82,222,.06)" stroke="#AF52DE" stroke-width="0.5"/>
<text x="508" y="124" text-anchor="middle" font-family="Inter,sans-serif" font-size="13" font-weight="700" fill="#7B2FA0">Emotional = «Weniger»</text>
<text x="508" y="144" text-anchor="middle" font-family="Inter,sans-serif" font-size="11" fill="#6E6E73">Aufwand · Risiko · Stress · Kosten</text>
</svg></div>
<div class="tl-body" style="margin-top:8px"><strong>Beispiel Bellevue:</strong> Merkmal: «Express-Check-in mit digitalem Zimmerschlüssel via App.» Vorteil: «Ihre Mitarbeitenden können direkt aufs Zimmer — ohne Wartezeit.» Nutzen: «Das spart nach langen Anreisetagen wertvolle Zeit und reduziert den Reisestress.» → Sachlich: «mehr Zeit» + Emotional: «weniger Stress».</div>
</div></div>

<div class="tl-item"><div class="tl-num tl-num-r">7</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Preisnenntechniken — Die Sandwich-Methode</div><div class="tl-merksatz">«Preis nie alleine nennen — immer verpackt in Vorteile. Keine Sprechpause nach dem Preis!»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body">
Das Preisgespräch soll immer erst <strong>unmittelbar vor dem Abschluss</strong> erfolgen. Das Wort «kostet» schafft negative Assoziationen — den reinen Preis ohne Erklärung zu nennen ist fatal!
</div>
<!-- SVG: Sandwich -->
<div style="background:var(--s);border:1px solid var(--bd);border-radius:var(--rd2);padding:24px;margin:16px 0;box-shadow:var(--shadow)">
<svg viewBox="0 0 680 130" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block">
<defs><marker id="sA4" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M2 1L8 5L2 9" fill="none" stroke="#AEAEB2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></marker></defs>
<rect x="30" y="10" width="170" height="56" rx="12" fill="rgba(52,199,89,.1)" stroke="#34C759" stroke-width="1"/>
<text x="115" y="43" text-anchor="middle" font-family="Inter,sans-serif" font-size="13" font-weight="700" fill="#1B7A34">1–3 Vorteile</text>
<line x1="200" y1="38" x2="240" y2="38" stroke="#AEAEB2" stroke-width="1.5" marker-end="url(#sA4)"/>
<rect x="245" y="4" width="190" height="68" rx="14" fill="rgba(255,149,0,.1)" stroke="#FF9500" stroke-width="1.5"/>
<text x="340" y="34" text-anchor="middle" font-family="Inter,sans-serif" font-size="20" fill="#FF9500">💰</text>
<text x="340" y="56" text-anchor="middle" font-family="Inter,sans-serif" font-size="16" font-weight="700" fill="#B36A00">PREIS</text>
<line x1="435" y1="38" x2="475" y2="38" stroke="#AEAEB2" stroke-width="1.5" marker-end="url(#sA4)"/>
<rect x="480" y="10" width="170" height="56" rx="12" fill="rgba(52,199,89,.1)" stroke="#34C759" stroke-width="1"/>
<text x="565" y="43" text-anchor="middle" font-family="Inter,sans-serif" font-size="13" font-weight="700" fill="#1B7A34">1–3 Vorteile</text>
<rect x="180" y="88" width="320" height="32" rx="8" fill="rgba(255,59,48,.06)" stroke="#FF3B30" stroke-width="0.5"/>
<text x="340" y="109" text-anchor="middle" font-family="Inter,sans-serif" font-size="12" font-weight="600" fill="#FF3B30">⚠️ Nie «kostet» sagen — Reizwort!</text>
</svg></div>
<div class="merksatz">Merksatz: Nennen Sie den Preis niemals alleine — sondern immer wohldosiert verpackt in Vorteile. Lassen Sie die Kundschaft spüren: «Ich bekomme etwas für mein Geld» statt «Der will ja nur mein Geld».</div>
</div></div>

<div class="tl-item"><div class="tl-num tl-num-r">8</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Verkaufsabschluss — Kaufsignale &amp; Abschlusstechniken</div><div class="tl-merksatz">«Kaufsignale niemals übersehen! Wer weiter argumentiert, riskiert Rückentwicklung.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body">
Der Abschluss muss <strong>zwingend durch die Verkäufer:innen</strong> eingeleitet werden.<br><br>
<strong>Kaufsignale erkennen:</strong> Direkter Kaufwunsch · Fragen nach dem «Danach» (Garantie, Betreuung) · Beschäftigung mit Details · Immer öftere Zustimmung · Fragen nach Referenzen · Hinzuziehen weiterer Personen · Zustimmendes Nicken<br><br>
<strong>6 Abschlusstechniken:</strong><br>
• <strong>Probeabschluss:</strong> «Angenommen, Sie haben sich entschlossen…» — Testen der Bereitschaft.<br>
• <strong>Zusammenfassung:</strong> Bestätigte Argumente konzentriert zusammenfassen — stärkstes am Schluss.<br>
• <strong>Ja-Fragen-Strasse:</strong> Zusammenfassung + Bestätigungen + abschliessen. Eleganteste Form!<br>
• <strong>Empfehlungstechnik:</strong> «Es ist empfehlenswert, sich schnell zu entscheiden…»<br>
• <strong>Alternativtechnik:</strong> Zwei positive Alternativen zur Wahl stellen.<br>
• <strong>Direkte Bestätigung:</strong> Nur bei eindeutiger Kaufbereitschaft.
</div><div class="merksatz">Warnung: Kaufsignale niemals übersehen! Wer nach erkennbaren Kaufsignalen weiter argumentiert statt zum Abschluss überzugehen, riskiert die Rückentwicklung des Kaufwunsches. Unnötige Argumente können neue Zweifel wecken.</div></div></div>

<div class="tl-item"><div class="tl-num tl-num-p">9</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Einwandbehandlung — 5 Schritte</div><div class="tl-merksatz">«NEIN = Noch Etwas Input Nötig. Einwände fördern die Kommunikation!»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body">
Einwände und Fragen sind normale Bestandteile einer Verhandlung. Begrüssen Sie Einwände — sie signalisieren Interesse!<br><br>
<strong>5 Schritte: 1. Verständnis zeigen → 2. Nachfragen → 3. FAB zum Einwand → 4. Rückversichern → 5. Erneuter Abschluss</strong><br><br>
Mit Schritt 1 und 2 «die Luft herauslassen» und auf die rationale Ebene zurückholen. Erst in Schritt 3 sachliche Klärung. Nach jeder Einwandbehandlung zwingend erneuter Abschlussversuch!<br><br>
<strong>Tipps:</strong> Auf alle Einwände vorbereiten. Aufmerksam zuhören. Nie unterbrechen! Vorwand im Einwand erkennen. Korrekt, höflich, ruhig bleiben. Nicht als Besserwisser auftreten.
</div><div class="merksatz">Fallbeispiel Bellevue: Travel Managerin: «Ihr Hotel hat keinen Pool.» 1. Verständnis: «Das verstehe ich — Entspannung ist wichtig.» 2. Nachfragen: «Zum Schwimmen oder zur Entspannung?» 3. FAB: «Unser Wellnessbereich mit Sauna, Dampfbad und Ruheraum bietet genau diese Entspannung.» 4. Rückversichern: «Wäre das eine gute Alternative?» 5. Abschluss: «Dann lassen Sie uns die Konditionen finalisieren…»</div></div></div>

<div class="tl-item"><div class="tl-num tl-num-p">10</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Preisverhandlung — 5 Strategien</div><div class="tl-merksatz">«Einfach den Preis senken ist kein Verhandeln — es geht um Profitabilität!»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body">
Preisverhandlungen sind ein normaler Bestandteil jedes Verkaufsgesprächs. Kennen Sie Ihren Verhandlungsspielraum und wissen Sie, ab wann Sie auf das Geschäft verzichten.<br><br>
<strong>1. Nutzenargumentation</strong> — Die stärksten FABs wiederholen. Evtl. «Reserve-Nutzen» einsetzen. Kostet nichts — immer zuerst versuchen!<br><br>
<strong>2. Nutzenerhöhung durch Zugaben</strong> — Etwas mit hohem Kundennutzen, wenig Kosten: Late Check-out, Spa-Zugang, Apéro, günstigere Zahlungskonditionen.<br><br>
<strong>3. Preis- und Leistungskürzung</strong> — Preis reduzieren, aber auch Leistung kürzen. Was hat für die Kundschaft weniger Bedeutung?<br><br>
<strong>4. Preissenkung</strong> — Letzte Lösung: Preis bei voller Leistung senken. Nur innerhalb des Verhandlungsspielraums!<br><br>
<strong>5. Das Geschäft kommt nicht zustande</strong> — Vorab einplanen. Sachlich, höflich, professionell bleiben. Kontakt für zukünftiges Geschäft erhalten.
</div></div></div>

</div></div>

<!-- KAP 3: VERKAUFSPLANUNG -->
<div class="sec" id="sales_kap3"><h1>Verkaufsplanung</h1><p class="sub">Kapitel 3 — Verkaufsmassnahmen, Analyse, Pareto, ABC, 6W-Ziele, Strategie, Budget</p>

<div style="background:var(--s2);border-radius:var(--rd);padding:20px 24px;margin:18px 0;font-size:14px"><b style="display:block;font-size:15px;margin-bottom:8px">Lernziele:</b><div style="color:var(--tx2);line-height:2">• Verschiedene Verkaufsmassnahmen passend zu Segmenten korrekt in eine Jahresplanung einordnen<br>• Einen bestehenden Kundenstamm anhand BCG-Matrix, Pareto-Regel und ABC-Klassifizierung analysieren und bewerten<br>• Fünf weitere Kriterien zur Kundenklassifizierung anwenden<br>• Zielsetzungen im Verkauf selbstständig mithilfe der «6W» ausarbeiten und deren Messbarkeit sicherstellen</div></div>

<div style="display:flex;gap:8px;margin:12px 0 4px"><button style="font-size:11px;padding:4px 10px" onclick="this.parentElement.nextElementSibling.querySelectorAll('.tl-item').forEach(i=>i.classList.add('open'))">Alle aufklappen</button><button style="font-size:11px;padding:4px 10px" onclick="this.parentElement.nextElementSibling.querySelectorAll('.tl-item').forEach(i=>i.classList.remove('open'))">Alle schliessen</button></div>
<div class="tl">

<div class="tl-item"><div class="tl-num tl-num-b">1</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Verkaufsmassnahmen — Wege zur Kundschaft</div><div class="tl-merksatz">«Telefonat, Social Media, Pitch, Hausführungen, Messen, Blitze — jede Massnahme hat ihren Platz.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body">
<strong>Telefonat:</strong> Aktiv: Terminvereinbarung, Nachfassen, Einladung zu Events, Neukundengewinnung. Nicht erlaubt bei Privatpersonen auf der Robinsonliste! Passiv/reaktiv: Anrufe der Kund:innen.<br><br>
<strong>Soziale Medien:</strong> Primär Kommunikationskanal. Noch keine direkten Verkaufskanäle. LinkedIn/Xing wichtiger als Facebook. Contentmarketing: Fachartikel bereitstellen — unaufdringlich, langfristig, authentisch.<br><br>
<strong>Pitch / Elevator Pitch:</strong> 30–60 Sekunden: «Für Sie (Zielgruppe) und Ihr (Problem) ist (Produkt) eine (Kategorie) mit (Hauptvorteil). Im Vergleich zum Wettbewerb hebt es sich ab, weil (Einzigartigkeit).»<br><br>
<strong>Hausführungen:</strong> Spontan: Immer vorbereitet! 2–3 Zimmer + 1 VA-Raum bereit. Angemeldet: Umfang absprechen, verschiedene Kategorien, höhere Etage mit Aussicht.<br><br>
<strong>Kundenveranstaltungen:</strong> Jubiläen, Weiterbildungen, kulturelle VAs. Zweck: Kundenbindung + informelle Gespräche.<br><br>
<strong>Fam-Trips:</strong> Kostenlose Studienreisen für Reisebüromitarbeitende. Präsentation muss einprägsam sein!<br><br>
<strong>Sales-Blitz:</strong> Intensive Kurzverkaufskampagne. Max. 5 Min. pro Besuch, eine Kernaussage, Infobeschaffung.<br><br>
<strong>Road Show / Tournee:</strong> Serie von Veranstaltungen in grösseren Städten. Mehrere Anbieter gemeinsam.<br><br>
<strong>Tradeshows / Messen:</strong> IMEX (MICE), IBTM (MICE/Corporate), WTM (Tour Operator), ILTM (Luxus), ITB Berlin (global). Kostspielig — messbare Ziele nötig! Nachbereitung einplanen.
</div><div class="merksatz">Fallbeispiel Bellevue — Jahres-Verkaufsplan: Januar: Sales-Blitz Zürich (Marc, 40 Besuche in 2 Tagen). März: ITB Berlin (Sophie, 15 Termine). Mai: Kundenveranstaltung «Gourmet Evening» (Top-20-Firmenkunden). Juni: RFP-Saison (Marc). September: IMEX Frankfurt (Marc, 12 Termine). November: Fam-Trip Reisebüros Zentralschweiz (Sophie). Laufend: Telemarketing (2h/Woche pro Sales Manager), LinkedIn-Contentmarketing, Hausführungen.</div></div></div>

<div class="tl-item"><div class="tl-num tl-num-g">2</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Planung der Abteilung Verkauf — 5 Schritte</div><div class="tl-merksatz">«Analyse → Ziele → Strategie → Massnahmen → Budget»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body">Zur Leitung einer Verkaufsabteilung gehört die mittel- und langfristige Verkaufsplanung in fünf Schritten:</div>
<div style="background:var(--s);border:1px solid var(--bd);border-radius:var(--rd2);padding:24px;margin:16px 0;box-shadow:var(--shadow)">
<svg viewBox="0 0 680 100" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block">
<defs><marker id="sA5" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M2 1L8 5L2 9" fill="none" stroke="#AEAEB2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></marker></defs>
<rect x="10" y="10" width="110" height="70" rx="10" fill="rgba(232,86,122,.08)" stroke="#E8567A" stroke-width="0.5"/>
<text x="65" y="38" text-anchor="middle" font-family="Inter,sans-serif" font-size="13" font-weight="700" fill="#C44569">1. Analyse</text>
<text x="65" y="56" text-anchor="middle" font-family="Inter,sans-serif" font-size="10" fill="#6E6E73">Pareto, ABC</text>
<line x1="120" y1="45" x2="143" y2="45" stroke="#AEAEB2" stroke-width="1.5" marker-end="url(#sA5)"/>
<rect x="148" y="10" width="110" height="70" rx="10" fill="rgba(52,199,89,.08)" stroke="#34C759" stroke-width="0.5"/>
<text x="203" y="38" text-anchor="middle" font-family="Inter,sans-serif" font-size="13" font-weight="700" fill="#1B7A34">2. Ziele</text>
<text x="203" y="56" text-anchor="middle" font-family="Inter,sans-serif" font-size="10" fill="#6E6E73">6W-Raster</text>
<line x1="258" y1="45" x2="281" y2="45" stroke="#AEAEB2" stroke-width="1.5" marker-end="url(#sA5)"/>
<rect x="286" y="10" width="110" height="70" rx="10" fill="rgba(175,82,222,.08)" stroke="#AF52DE" stroke-width="0.5"/>
<text x="341" y="38" text-anchor="middle" font-family="Inter,sans-serif" font-size="13" font-weight="700" fill="#7B2FA0">3. Strategie</text>
<text x="341" y="56" text-anchor="middle" font-family="Inter,sans-serif" font-size="10" fill="#6E6E73">Marketing-Mix</text>
<line x1="396" y1="45" x2="419" y2="45" stroke="#AEAEB2" stroke-width="1.5" marker-end="url(#sA5)"/>
<rect x="424" y="10" width="120" height="70" rx="10" fill="rgba(0,122,255,.08)" stroke="#007AFF" stroke-width="0.5"/>
<text x="484" y="38" text-anchor="middle" font-family="Inter,sans-serif" font-size="13" font-weight="700" fill="#005BBF">4. Massnahmen</text>
<text x="484" y="56" text-anchor="middle" font-family="Inter,sans-serif" font-size="10" fill="#6E6E73">Blitz, Messen</text>
<line x1="544" y1="45" x2="557" y2="45" stroke="#AEAEB2" stroke-width="1.5" marker-end="url(#sA5)"/>
<rect x="562" y="10" width="110" height="70" rx="10" fill="rgba(255,149,0,.08)" stroke="#FF9500" stroke-width="0.5"/>
<text x="617" y="38" text-anchor="middle" font-family="Inter,sans-serif" font-size="13" font-weight="700" fill="#B36A00">5. Budget</text>
<text x="617" y="56" text-anchor="middle" font-family="Inter,sans-serif" font-size="10" fill="#6E6E73">Kontrolle</text>
</svg></div>
</div></div>

<div class="tl-item"><div class="tl-num tl-num-g">3</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Analyse — Pareto-Regel &amp; ABC-Analyse</div><div class="tl-merksatz">«80% der Ergebnisse mit 20% des Aufwandes. A-Kunden = Top, C = standardisiert.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body">
<strong>Pareto-Regel (80/20):</strong> 80% der Ergebnisse werden mit 20% des Gesamtaufwandes erreicht. Im Verkauf: 20% der Kunden generieren 80% des Umsatzes.<br><br>
<strong>ABC-Analyse:</strong> Teilt Kunden in drei Klassen nach absteigender Bedeutung. A = höchste Bedeutung, intensivste Betreuung. B = mittlere Bedeutung, Potenzial für A. C = geringste Bedeutung, standardisiert.<br><br>
<strong>Weitere Analysekriterien:</strong> F&amp;B-Umsatz · Anreisetag/Saison · Kosten/Ertrag/Buchungsweg · Stornierungen/Wash · Klumpenbildung · Zahlungsdisziplin · Anteil am Gesamtreiseumsatz · Anzahl Mitbewerber · Neukundschaft vs. Bestand
</div>
<!-- SVG: ABC -->
<div style="background:var(--s);border:1px solid var(--bd);border-radius:var(--rd2);padding:24px;margin:16px 0;box-shadow:var(--shadow)">
<svg viewBox="0 0 680 180" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block">
<text x="340" y="20" text-anchor="middle" font-family="Inter,sans-serif" font-size="12" font-weight="700" fill="#AEAEB2" letter-spacing="1">ABC-ANALYSE — HOTEL BELLEVUE (150 FIRMENKUNDEN)</text>
<rect x="10" y="35" width="210" height="135" rx="14" fill="rgba(52,199,89,.08)" stroke="#34C759" stroke-width="1"/>
<text x="115" y="66" text-anchor="middle" font-family="Inter,sans-serif" font-size="32" font-weight="700" fill="#34C759">A</text>
<text x="115" y="86" text-anchor="middle" font-family="Inter,sans-serif" font-size="12" font-weight="600" fill="#1D1D1F">12 Firmen (8%)</text>
<text x="115" y="114" text-anchor="middle" font-family="Inter,sans-serif" font-size="28" font-weight="700" fill="#34C759">65%</text>
<text x="115" y="132" text-anchor="middle" font-family="Inter,sans-serif" font-size="11" fill="#6E6E73">des Umsatzes</text>
<text x="115" y="155" text-anchor="middle" font-family="Inter,sans-serif" font-size="10" fill="#AEAEB2">Pers. Betreuung · Quartals-Reviews</text>
<rect x="235" y="35" width="210" height="135" rx="14" fill="rgba(255,149,0,.08)" stroke="#FF9500" stroke-width="1"/>
<text x="340" y="66" text-anchor="middle" font-family="Inter,sans-serif" font-size="32" font-weight="700" fill="#FF9500">B</text>
<text x="340" y="86" text-anchor="middle" font-family="Inter,sans-serif" font-size="12" font-weight="600" fill="#1D1D1F">28 Firmen (19%)</text>
<text x="340" y="114" text-anchor="middle" font-family="Inter,sans-serif" font-size="28" font-weight="700" fill="#FF9500">25%</text>
<text x="340" y="132" text-anchor="middle" font-family="Inter,sans-serif" font-size="11" fill="#6E6E73">des Umsatzes</text>
<text x="340" y="155" text-anchor="middle" font-family="Inter,sans-serif" font-size="10" fill="#AEAEB2">Halbjährlich · Potenzial für A</text>
<rect x="460" y="35" width="210" height="135" rx="14" fill="#F0F0F5" stroke="#D1D1D6" stroke-width="0.5"/>
<text x="565" y="66" text-anchor="middle" font-family="Inter,sans-serif" font-size="32" font-weight="700" fill="#AEAEB2">C</text>
<text x="565" y="86" text-anchor="middle" font-family="Inter,sans-serif" font-size="12" font-weight="600" fill="#1D1D1F">110 Firmen (73%)</text>
<text x="565" y="114" text-anchor="middle" font-family="Inter,sans-serif" font-size="28" font-weight="700" fill="#AEAEB2">10%</text>
<text x="565" y="132" text-anchor="middle" font-family="Inter,sans-serif" font-size="11" fill="#6E6E73">des Umsatzes</text>
<text x="565" y="155" text-anchor="middle" font-family="Inter,sans-serif" font-size="10" fill="#AEAEB2">Standardisiert · Newsletter</text>
</svg></div>
</div></div>

<div class="tl-item"><div class="tl-num tl-num-r">4</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Verkaufsziele setzen — Das 6W-Raster</div><div class="tl-merksatz">«Was, Wieviel, Wem, Wann, Wo, Wer — Ziele müssen SMART sein.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body">
Zielsetzungen müssen fair, erreichbar, messbar und realisierbar sein (<strong>SMART</strong>). Das <strong>6W-Raster</strong> hilft, Ziele konkret zu definieren. Die 6Ws helfen zur unmissverständlichen Formulierung, besonders bei quantitativen Zielen — die im Verkaufsalltag überwiegen. Qualitative Ziele: Kundenzufriedenheit, Kundenbindung, Image.
</div>
<!-- SVG: 6W -->
<div style="background:var(--s);border:1px solid var(--bd);border-radius:var(--rd2);padding:24px;margin:16px 0;box-shadow:var(--shadow)">
<svg viewBox="0 0 680 120" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block">
<rect x="5" y="10" width="105" height="90" rx="10" fill="rgba(232,86,122,.06)" stroke="#E8567A" stroke-width="0.5"/>
<text x="58" y="40" text-anchor="middle" font-family="Inter,sans-serif" font-size="14" font-weight="700" fill="#C44569">Was</text>
<text x="58" y="58" text-anchor="middle" font-family="Inter,sans-serif" font-size="10" fill="#6E6E73">Zielinhalt</text>
<text x="58" y="74" text-anchor="middle" font-family="Inter,sans-serif" font-size="10" fill="#AEAEB2" font-style="italic">RNs, Umsatz, Gewinn</text>
<rect x="118" y="10" width="105" height="90" rx="10" fill="rgba(175,82,222,.06)" stroke="#AF52DE" stroke-width="0.5"/>
<text x="170" y="40" text-anchor="middle" font-family="Inter,sans-serif" font-size="14" font-weight="700" fill="#7B2FA0">Wieviel</text>
<text x="170" y="58" text-anchor="middle" font-family="Inter,sans-serif" font-size="10" fill="#6E6E73">Quantifizierung</text>
<text x="170" y="74" text-anchor="middle" font-family="Inter,sans-serif" font-size="10" fill="#AEAEB2" font-style="italic">Zahl, CHF, %</text>
<rect x="231" y="10" width="105" height="90" rx="10" fill="rgba(52,199,89,.06)" stroke="#34C759" stroke-width="0.5"/>
<text x="283" y="40" text-anchor="middle" font-family="Inter,sans-serif" font-size="14" font-weight="700" fill="#1B7A34">Wem</text>
<text x="283" y="58" text-anchor="middle" font-family="Inter,sans-serif" font-size="10" fill="#6E6E73">Zielsegment</text>
<text x="283" y="74" text-anchor="middle" font-family="Inter,sans-serif" font-size="10" fill="#AEAEB2" font-style="italic">Corporate, MICE</text>
<rect x="344" y="10" width="105" height="90" rx="10" fill="rgba(0,122,255,.06)" stroke="#007AFF" stroke-width="0.5"/>
<text x="396" y="40" text-anchor="middle" font-family="Inter,sans-serif" font-size="14" font-weight="700" fill="#005BBF">Wann</text>
<text x="396" y="58" text-anchor="middle" font-family="Inter,sans-serif" font-size="10" fill="#6E6E73">Zielperiode</text>
<text x="396" y="74" text-anchor="middle" font-family="Inter,sans-serif" font-size="10" fill="#AEAEB2" font-style="italic">Bis 31.12.</text>
<rect x="457" y="10" width="105" height="90" rx="10" fill="rgba(255,149,0,.06)" stroke="#FF9500" stroke-width="0.5"/>
<text x="509" y="40" text-anchor="middle" font-family="Inter,sans-serif" font-size="14" font-weight="700" fill="#B36A00">Wo</text>
<text x="509" y="58" text-anchor="middle" font-family="Inter,sans-serif" font-size="10" fill="#6E6E73">Geogr. Markt</text>
<text x="509" y="74" text-anchor="middle" font-family="Inter,sans-serif" font-size="10" fill="#AEAEB2" font-style="italic">CH, DE, Luzern</text>
<rect x="570" y="10" width="105" height="90" rx="10" fill="#F0F0F5" stroke="#D1D1D6" stroke-width="0.5"/>
<text x="622" y="40" text-anchor="middle" font-family="Inter,sans-serif" font-size="14" font-weight="700" fill="#6E6E73">Wer</text>
<text x="622" y="58" text-anchor="middle" font-family="Inter,sans-serif" font-size="10" fill="#6E6E73">Verantwortung</text>
<text x="622" y="74" text-anchor="middle" font-family="Inter,sans-serif" font-size="10" fill="#AEAEB2" font-style="italic">Marc Brunner</text>
</svg></div>
<div class="merksatz">Fallbeispiel Bellevue — Verkaufsziel mit 6W: Was: Room Nights im Corporate-Segment. Wieviel: 8'500 RNs (+12% vs. Vorjahr). Wem: Corporate-Transient (managed &amp; unmanaged). Wann: Bis 31. Dezember. Wo: Quellmärkte Schweiz und Deutschland. Wer: Marc Brunner (Sales Manager Corporate).</div>
</div></div>

<div class="tl-item"><div class="tl-num tl-num-r">5</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Verkaufsstrategie, Planung &amp; Budget</div><div class="tl-merksatz">«Primäre Planung = nach aussen. Sekundäre Planung = nach innen.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body">
<strong>Verkaufsstrategie:</strong> Abgestimmt mit Unternehmens- und Marketingzielen. Sales ist Teil der 4 bzw. 7 P. Definiert: Welche Segmente prioritär? Welche Kanäle? Wie wird das Team eingesetzt?<br><br>
<strong>Primäre Planung (nach aussen):</strong> 1. Detaillierte Verkaufsziele nach Produkten, Kundengruppen, Regionen und Zeiträumen. 2. Einsatzplanung: Mitarbeitende, Zeitpläne, Reisen → Sales &amp; Marketingplan.<br><br>
<strong>Sekundäre Planung (nach innen):</strong> Organisation, Personalplanung, Weiterbildung, Entlöhnung, Verkaufs- &amp; Präsentationsmittel.<br><br>
<strong>Budget:</strong> Personal (fixe &amp; variable Kosten, Incentives) · Reisekosten · Büro &amp; CRM-Software · Massnahmen (Messegebühren, Verkaufsaktionen, Verkaufsmittel)
</div><div class="merksatz">Fallbeispiel Bellevue — Sales-Budget: Personal CHF 380'000 (3 Personen + CHF 15'000 Incentive). Reisekosten CHF 25'000. Messen CHF 18'000 (ITB, IMEX). Kundenveranstaltungen CHF 12'000 (2 Events/Jahr). CRM-Software CHF 8'000. Verkaufsmittel CHF 5'000. Gesamt: CHF 448'000 → ca. 3.5% des Gesamtumsatzes.</div></div></div>

</div></div>

<!-- ZUSAMMENFASSUNG -->
<div class="sec" id="sales_mind"><h1>Zusammenfassung</h1><p class="sub">Kompakter Überblick über alle 3 Kapitel</p>
<div class="c" style="padding:20px;margin-bottom:16px"><div class="ct2" style="margin-bottom:10px">Kapitel 1 — Einordnung Verkauf</div><div style="font-size:13px;color:var(--tx2);line-height:1.8">• Sales = Aufbau langfristiger Beziehungen, nicht bloss Zimmer verkaufen<br>• Sales liegt in den <strong>4 Ps</strong> bei <strong>Place</strong> (Vertrieb) und <strong>Promotion</strong> (persönlicher Verkauf, Event-Marketing)<br>• <strong>Direkter Vertrieb:</strong> Reaktiv (Farming) vs. Proaktiv (Hunting). Vorteile: Loyalität, Kontrolle, keine Provisionen. Nachteile: Ressourcenmangel, Schulungsaufwand, Erfolgsrisiko<br>• <strong>Indirekter Vertrieb:</strong> Via Reisebüros, OTAs (Booking.com, Expedia), Tour Operators<br>• <strong>Segmentierung:</strong> Buchungsgrösse · Aufenthaltszweck · Vertragsverhältnis<br>• <strong>Einkaufsprozesse:</strong> Kernfragen = Wie, Wann, Womit, Wer. Corporate (RFP ab Mitte Jahr), Leisure (Kataloge 9–18 Mt., OTAs dynamisch), MICE (Cvent, 48h), Airlines (Crew + Layover)<br>• <strong>4 Kundentypen:</strong> Sicherheit · Wirtschaftlichkeit · Prestige · Bequemlichkeit. Weitere: DISC/DISG, MBTI</div></div>
<div class="c" style="padding:20px;margin-bottom:16px"><div class="ct2" style="margin-bottom:10px">Kapitel 2 — Verkaufsgespräche</div><div style="font-size:13px;color:var(--tx2);line-height:1.8">• <strong>Kommunikation:</strong> 7% Worte, 38% Stimme, 55% Körpersprache. 4-Ohren-Modell (Schulz von Thun)<br>• <strong>Nonverbal:</strong> Erste 30 Sek. entscheidend. Kinesik kann schwer «lügen»<br>• <strong>Fragetechniken:</strong> Offen · Geschlossen · Alternativ · Suggestiv · Gegen · Ermittlung · Rhetorisch · Dirigierend · Ja-Fragen (Ja-Strasse)<br>• <strong>7 Phasen:</strong> Vorbereitung → Warm-up → Bedarfsanalyse (Trichter) → Produktpräsentation (FAB) → Preisnennung (Sandwich) → Abschluss → Nachbearbeitung<br>• <strong>FAB:</strong> Merkmal → Vorteil → Nutzen. Kaufmotivatoren: Sachlich (Mehr) + Emotional (Weniger)<br>• <strong>Sandwich:</strong> Vorteile → PREIS → Vorteile. Nie «kostet» sagen!<br>• <strong>Einwandbehandlung:</strong> Verständnis → Nachfragen → FAB → Rückversichern → Erneuter Abschluss<br>• <strong>5 Preisstrategien:</strong> 1. Nutzenargumentation · 2. Zugaben · 3. Preis+Leistung kürzen · 4. Preissenkung · 5. Kein Abschluss</div></div>
<div class="c" style="padding:20px;margin-bottom:16px"><div class="ct2" style="margin-bottom:10px">Kapitel 3 — Verkaufsplanung</div><div style="font-size:13px;color:var(--tx2);line-height:1.8">• <strong>Massnahmen:</strong> Telefonat · Social Media · Pitch · Hausführungen · Events · Fam-Trips · Sales-Blitz · Road Show · Messen<br>• <strong>5 Schritte:</strong> Analyse → Ziele → Strategie → Massnahmen → Budget<br>• <strong>Pareto:</strong> 80/20. <strong>ABC:</strong> A = Top, B = Mitte, C = standardisiert<br>• <strong>6W-Raster:</strong> Was · Wieviel · Wem · Wann · Wo · Wer → SMART<br>• <strong>Primäre Planung</strong> (aussen): Ziele + Einsatz → Sales &amp; Marketingplan<br>• <strong>Sekundäre Planung</strong> (innen): Organisation, Personal, Weiterbildung, Verkaufsmittel</div></div>
</div>

<!-- KARTEIKARTEN -->
<div class="sec" id="sales_kart"><h1>Karteikarten</h1><p class="sub"><span id="salesfcCount">0</span> Karten — klicke zum Umdrehen</p>
<div class="fcc" id="salesfcc"></div>
<div class="fd"><div class="fc" id="salesfc" onclick="this.classList.toggle('fl')"><div class="ff ffr"><div class="fq" id="salesfcq"></div><div class="fh">Klicke zum Umdrehen</div></div><div class="ff ffb"><div class="fa" id="salesfca"></div></div></div></div>
<div class="fb"><button onclick="fcPrev()">Zurück</button><button onclick="fcShuffle()">Mischen</button><button class="bp1" onclick="fcNext()">Nächste</button></div>
<div style="text-align:center;margin-top:10px;font-size:11px;color:var(--tx3)" id="salesfcPool"></div>
<div id="salesfcList" style="display:none;margin-top:16px"></div>
</div>

<!-- QUIZ -->
<div class="sec" id="sales_quiz"><h1>Quiz</h1><p class="sub">Alle Fragen werden wiederholt bis du sie kannst</p>
<div id="salesqStats" style="margin-bottom:20px">
<div style="display:flex;gap:8px;margin-bottom:14px;flex-wrap:wrap">
<div class="qsc" style="flex:1;min-width:70px"><div class="qsn" id="salesqTotR" style="color:var(--g)">0</div><div class="qsl">Total richtig</div></div>
<div class="qsc" style="flex:1;min-width:70px"><div class="qsn" id="salesqTotW" style="color:var(--r)">0</div><div class="qsl">Total falsch</div></div>
<div class="qsc" style="flex:1;min-width:70px"><div class="qsn" id="salesqTotP" style="color:var(--ac)">0%</div><div class="qsl">Erfolgsquote</div></div></div>
<div style="font-size:12px;color:var(--tx3);margin-bottom:6px">Lernerfolg</div>
<div style="display:flex;gap:4px;margin-bottom:4px;align-items:center"><div style="width:10px;height:10px;border-radius:50%;background:var(--g);flex-shrink:0"></div><div style="font-size:12px;color:var(--tx2);width:70px">Sicher</div><div style="flex:1;height:8px;background:var(--s2);border-radius:4px;overflow:hidden"><div id="salesqBarG" style="height:100%;background:var(--g);border-radius:4px;transition:width .5s;width:0%"></div></div><div style="font-size:12px;color:var(--tx2);width:30px;text-align:right" id="salesqBarGn">0</div></div>
<div style="display:flex;gap:4px;margin-bottom:4px;align-items:center"><div style="width:10px;height:10px;border-radius:50%;background:var(--am);flex-shrink:0"></div><div style="font-size:12px;color:var(--tx2);width:70px">Wackelig</div><div style="flex:1;height:8px;background:var(--s2);border-radius:4px;overflow:hidden"><div id="salesqBarO" style="height:100%;background:var(--am);border-radius:4px;transition:width .5s;width:0%"></div></div><div style="font-size:12px;color:var(--tx2);width:30px;text-align:right" id="salesqBarOn">0</div></div>
<div style="display:flex;gap:4px;margin-bottom:4px;align-items:center"><div style="width:10px;height:10px;border-radius:50%;background:var(--r);flex-shrink:0"></div><div style="font-size:12px;color:var(--tx2);width:70px">Unsicher</div><div style="flex:1;height:8px;background:var(--s2);border-radius:4px;overflow:hidden"><div id="salesqBarR" style="height:100%;background:var(--r);border-radius:4px;transition:width .5s;width:0%"></div></div><div style="font-size:12px;color:var(--tx2);width:30px;text-align:right" id="salesqBarRn">0</div></div>
<div style="display:flex;gap:4px;align-items:center"><div style="width:10px;height:10px;border-radius:50%;background:var(--tx3);flex-shrink:0"></div><div style="font-size:12px;color:var(--tx2);width:70px">Noch offen</div><div style="flex:1;height:8px;background:var(--s2);border-radius:4px;overflow:hidden"><div id="salesqBarX" style="height:100%;background:var(--tx3);border-radius:4px;transition:width .5s;width:100%"></div></div><div style="font-size:12px;color:var(--tx2);width:30px;text-align:right" id="salesqBarXn">0</div></div></div>
<div class="pb"><div class="pf" id="salesqP"></div></div><div class="pt" id="salesqPT">Frage 1</div>
<div id="salesqC"></div>
<div style="text-align:center;margin-top:14px">
<button class="bp1" id="salesqN" onclick="salesqNx()" style="display:none">Nächste Frage</button>
<button class="bp1" id="salesqRS" onclick="salesqSt()" style="display:none">Weiter üben</button>
<button id="salesqReset" onclick="salesqReset()" style="display:none;margin-left:8px">Fortschritt zurücksetzen</button></div>
</div>

<!-- GLOSSAR -->
<div class="sec" id="sales_glossar"><h1>Glossar</h1><p class="sub">Fachbegriffe im Sales</p>
<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:8px">
<div class="c" style="padding:12px 16px"><strong>4 Ps</strong> <span style="color:var(--tx2)">— Product, Price, Place, Promotion. Sales liegt bei Place + Promotion.</span></div>
<div class="c" style="padding:12px 16px"><strong>Farming</strong> <span style="color:var(--tx2)">— Reaktiver Verkauf. Anfragen bearbeiten, die hereinkommen.</span></div>
<div class="c" style="padding:12px 16px"><strong>Hunting</strong> <span style="color:var(--tx2)">— Proaktiver Verkauf. Aktive Neukundenakquise.</span></div>
<div class="c" style="padding:12px 16px"><strong>RFP</strong> <span style="color:var(--tx2)">— Request for Proposal. Elektronische Ausschreibung für Hotelverträge.</span></div>
<div class="c" style="padding:12px 16px"><strong>TMC</strong> <span style="color:var(--tx2)">— Travel Management Company (Amex GBT, BCD Travel, CWT).</span></div>
<div class="c" style="padding:12px 16px"><strong>Konsortium</strong> <span style="color:var(--tx2)">— Weltweit operierendes Reisebüro für Firmenbuchungen.</span></div>
<div class="c" style="padding:12px 16px"><strong>Implant</strong> <span style="color:var(--tx2)">— Reisebüro auf dem Firmengelände, exklusiv.</span></div>
<div class="c" style="padding:12px 16px"><strong>OTA</strong> <span style="color:var(--tx2)">— Online Travel Agency (Booking.com, Expedia, HRS).</span></div>
<div class="c" style="padding:12px 16px"><strong>MICE</strong> <span style="color:var(--tx2)">— Meetings, Incentives, Conventions, Exhibitions.</span></div>
<div class="c" style="padding:12px 16px"><strong>SMERF</strong> <span style="color:var(--tx2)">— Social, Military, Education, Religious, Fraternal.</span></div>
<div class="c" style="padding:12px 16px"><strong>Allotment</strong> <span style="color:var(--tx2)">— Zimmerkontingent für einen Veranstalter.</span></div>
<div class="c" style="padding:12px 16px"><strong>LRA</strong> <span style="color:var(--tx2)">— Last Room Availability. Letztes Zimmer zum Firmenpreis.</span></div>
<div class="c" style="padding:12px 16px"><strong>RN</strong> <span style="color:var(--tx2)">— Room Night. Eine Zimmerbelegung für eine Nacht.</span></div>
<div class="c" style="padding:12px 16px"><strong>Kinesik</strong> <span style="color:var(--tx2)">— Wissenschaft der Körpersprache.</span></div>
<div class="c" style="padding:12px 16px"><strong>4-Ohren-Modell</strong> <span style="color:var(--tx2)">— Schulz von Thun: Sach-, Selbstoffenbarungs-, Beziehungs-, Appellebene.</span></div>
<div class="c" style="padding:12px 16px"><strong>FAB</strong> <span style="color:var(--tx2)">— Feature-Advantage-Benefit. Merkmal → Vorteil → Nutzen.</span></div>
<div class="c" style="padding:12px 16px"><strong>Sandwich-Methode</strong> <span style="color:var(--tx2)">— Vorteile → Preis → Vorteile. Psychologische Preisminimierung.</span></div>
<div class="c" style="padding:12px 16px"><strong>Ja-Strasse</strong> <span style="color:var(--tx2)">— Aneinandergereihte Ja-Fragen als Abschlusstechnik.</span></div>
<div class="c" style="padding:12px 16px"><strong>ABC-Analyse</strong> <span style="color:var(--tx2)">— A = Top, B = Mitte, C = geringste Bedeutung.</span></div>
<div class="c" style="padding:12px 16px"><strong>Pareto-Regel</strong> <span style="color:var(--tx2)">— 80/20. 80% Ergebnisse mit 20% Aufwand.</span></div>
<div class="c" style="padding:12px 16px"><strong>6W-Raster</strong> <span style="color:var(--tx2)">— Was, Wieviel, Wem, Wann, Wo, Wer.</span></div>
<div class="c" style="padding:12px 16px"><strong>Sales-Blitz</strong> <span style="color:var(--tx2)">— Intensive Kurzverkaufskampagne (max. 5 Min./Besuch).</span></div>
<div class="c" style="padding:12px 16px"><strong>Elevator Pitch</strong> <span style="color:var(--tx2)">— 30–60 Sek. Verkaufsvortrag.</span></div>
<div class="c" style="padding:12px 16px"><strong>Fam-Trip</strong> <span style="color:var(--tx2)">— Kostenlose Studienreise für Reisebüro-Mitarbeitende.</span></div>
<div class="c" style="padding:12px 16px"><strong>DISC/DISG</strong> <span style="color:var(--tx2)">— Dominanz, Initiative, Stetigkeit, Gewissenhaftigkeit.</span></div>
<div class="c" style="padding:12px 16px"><strong>Robinsonliste</strong> <span style="color:var(--tx2)">— Sperrliste: kein Telemarketing an diese Privatpersonen.</span></div>
<div class="c" style="padding:12px 16px"><strong>ASP</strong> <span style="color:var(--tx2)">— Ansprechperson. Kontaktperson beim Kunden.</span></div>
<div class="c" style="padding:12px 16px"><strong>Wash</strong> <span style="color:var(--tx2)">— Differenz zwischen gebuchten und genutzten Zimmern.</span></div>
<div class="c" style="padding:12px 16px"><strong>GOP</strong> <span style="color:var(--tx2)">— Gross Operating Profit. Operativer Bruttoertrag.</span></div>
</div></div>
`;

const SALES_CARDS = [
['Was bedeutet Sales im Gastgewerbe?','Aufbau langfristiger Beziehungen zwischen Kundschaft und Dienstleistungsunternehmen — nicht bloss Zimmer verkaufen. Einkaufsprozesse der Kundenseite verstehen.'],
['Welchen 2 Ps des Marketing-Mix wird Sales zugeordnet?','Place (Vertrieb/Distribution) und Promotion (Kommunikation). Place: Kundschaft zum Buchen bringen. Promotion: persönlicher Verkauf und Event-Marketing.'],
['Was ist der Unterschied zwischen direktem und indirektem Vertrieb?','Direkt = ohne Zwischenhändler. Indirekt = via Reisebüros, OTAs (Booking.com etc.).'],
['Was bedeutet «Farming» im Verkauf?','Reaktiver Verkauf — Anfragen bearbeiten, die von aussen kommen (Bankett, Rezeption, Restaurant). Man «erntet».'],
['Was bedeutet «Hunting» im Verkauf?','Proaktiver Verkauf — Aktive Neukundenakquise: Sales-/Account Management, Aussendienst. Man «jagt».'],
['Nenne 3 Vorteile des direkten Vertriebs.','1. Direkte Kommunikation → Loyalität. 2. Unmittelbare Steuerung/Kontrolle. 3. Keine Mittler-Gebühren/Provisionen.'],
['Nenne 3 Nachteile des direkten Vertriebs.','1. Märkte bleiben unbearbeitet (mangels Ressourcen). 2. Sales-MA müssen gefunden/geschult werden. 3. Vertriebskosten vorfinanzieren + Erfolgsrisiko.'],
['Nach welchen 3 Kriterien wird im Gastgewerbe segmentiert?','1. Buchungsgrösse (Einzel/Gruppe). 2. Aufenthaltszweck (Business/Leisure). 3. Vertragsverhältnis (mit/ohne Vertrag).'],
['Welche 4 Kernfragen muss die Verkaufsperson über den Einkaufsprozess beantworten?','1. Wie (Ablauf/Stufen)? 2. Wann (Fristen)? 3. Womit (Tools)? 4. Wer (Entscheidungsträger)?'],
['Was ist ein RFP?','Request for Proposal — elektronische Ausschreibung für Hotelverträge, z.B. über Lanyon, Nexus. Beginnt oft Mitte des Kalenderjahres für das Folgejahr.'],
['Was ist eine TMC?','Travel Management Company — spezialisiertes Firmenreisebüro (z.B. Amex GBT, BCD Travel, CWT).'],
['Was ist ein Konsortium im Hotelvertrieb?','Weltweit operierendes Reisebüro, das Buchungen für Firmen und ihre Geschäftsreisenden abwickelt.'],
['Was ist ein Implant?','Reisebüro auf dem Firmengelände, exklusiv für dieses Unternehmen tätig.'],
['Was unterscheidet Managed Travel von Unmanaged Travel?','Managed: Reiserichtlinien, Firmenvertrag, RFP, TMC. Unmanaged: Freie Hotelwahl, tagesaktueller OTA-Preis.'],
['Wie sieht die touristische Marktstruktur bei Paketreisen aus?','Gäste → Reisebüro (Retailer) → Veranstalter (Tour Operator) → Incoming Operator → Hotel/Restaurant.'],
['Ab wie vielen Zimmern spricht man von einer Gruppe?','Ca. ab 10 Zimmern (je nach Unternehmen).'],
['Was ist MICE?','Meetings, Incentives, Conventions, Exhibitions — Geschäftsreisegruppen/Tagungsgeschäft.'],
['Was sind die zwei Arten von Airline-Geschäft?','1. Crew-Aufenthalte (regelmässig, planbar). 2. Layover (ad-hoc bei Störungen/Wetter).'],
['Beschreibe den Sicherheitstyp.','Sucht Stabilität, Zuverlässigkeit, konstante Qualität. Preis sekundär. Tipp: Zertifikate betonen, persönliche Betreuung, nie enttäuschen.'],
['Beschreibe den Wirtschaftlichkeitstyp.','Preis-Leistung, Best Deal. Geniesst Preisgespräch. Tipp: Hart verhandeln — liebt ebenbürtige Gegenpartei.'],
['Beschreibe den Prestigetyp.','Ansehen, Markenbewusstsein, Status. Tipp: Bewunderung zeigen, Neuheiten zuerst, Events einladen, Titel verwenden.'],
['Beschreibe den Bequemlichkeitstyp.','Alles aus einer Hand, Rundum-Service. Tipp: Arbeit abnehmen, Neues nur bei echtem Vorteil. Referenzen bereithalten.'],
['Wie verteilt sich die Wahrnehmung der Kommunikationsarten?','7% Worte/Inhalt, 38% Stimme/Tonfall, 55% Körpersprache.'],
['Nenne die 4 Ebenen des 4-Ohren-Modells.','1. Sachebene (informieren). 2. Selbstoffenbarung (kundgeben). 3. Beziehungsebene (Haltung). 4. Appellebene (veranlassen).'],
['Warum sind die ersten 30 Sekunden bei Neukunden entscheidend?','Der erste Eindruck haftet Jahre. Korrektur ist sehr schwierig und aufwendig.'],
['Was ist Kinesik?','Die Wissenschaft der Körpersprache. Kann schwer «lügen», da viele Aspekte unbewusst ablaufen.'],
['Was sind offene Fragen und wofür eignen sie sich?','W-Fragen (wer, wie, warum). Info gewinnen, Vertrauen aufbauen. Ideal für Bedarfsanalyse.'],
['Was ist eine Alternativfrage?','Bietet nur Varianten der Zustimmung («KW 50 oder 51?»). Gut für Abschluss.'],
['Was ist eine Gegenfrage?','Reagiert auf Einwände, gewinnt Zeit. «Preis zu hoch?» → «Im Verhältnis wozu?»'],
['Was ist eine Ja-Strasse?','Aneinandergereihte Ja-Fragen als Abschlusstechnik — eleganteste Form ohne Druckgefühl.'],
['Nenne die 7 Phasen des Verkaufsgesprächs.','1. Vorbereitung → 2. Warm-up → 3. Bedarfsanalyse → 4. Produktpräsentation → 5. Preisnennung → 6. Abschluss → 7. Nachbearbeitung.'],
['Was ist das Trichtermodell in der Bedarfsanalyse?','Mit breiten Fragen beginnen, schrittweise einschränken. Bedürfnisse herausfinden (bewusste + unbewusste).'],
['Was ist die FAB-Technik?','Feature-Advantage-Benefit: Merkmal → Vorteil → individueller Kundennutzen. Immer nur eine Kette.'],
['Nenne ein FAB-Beispiel.','Merkmal: 24h-Rezeption. Vorteil: Jederzeit anreisen. Nutzen: Terminlich flexibel, keine Sorgen bei Verspätung.'],
['Was sind sachliche und emotionale Kaufmotivatoren?','Sachlich = «Mehr» (Effizienz, Gewinn, Zeit, Sicherheit). Emotional = «Weniger» (Aufwand, Risiko, Stress, Kosten).'],
['Was ist die Sandwich-Methode?','1–3 Vorteile → PREIS → 1–3 Vorteile. Psychologische Minimierung. Keine Sprechpause nach Preis!'],
['Warum soll man «kostet» vermeiden?','Negative Assoziationen (Telefonkosten, Mietkosten). Reiner Preis wird automatisch als zu teuer empfunden.'],
['Nenne 4 Kaufsignale.','1. Direkter Kaufwunsch. 2. Fragen nach dem «Danach». 3. Beschäftigung mit Details. 4. Zustimmendes Nicken.'],
['Warum darf man Kaufsignale nicht übersehen?','Wer weiter argumentiert statt abzuschliessen, riskiert Rückentwicklung des Kaufwunsches. Neue Zweifel!'],
['Nenne die 6 Abschlusstechniken.','1. Probeabschluss. 2. Zusammenfassung. 3. Ja-Fragen-Strasse. 4. Empfehlungstechnik. 5. Alternativtechnik. 6. Direkte Bestätigung.'],
['Nenne die 5 Schritte der Einwandbehandlung.','1. Verständnis → 2. Nachfragen → 3. FAB zum Einwand → 4. Rückversichern → 5. Erneuter Abschluss.'],
['Was bedeutet NEIN im Verkauf?','«Noch Etwas Input Nötig» — Einwände signalisieren Interesse!'],
['Nenne die 5 Preisverhandlungs-Strategien.','1. Nutzenargumentation (kostet nichts!). 2. Zugaben. 3. Preis+Leistung kürzen. 4. Preissenkung. 5. Kein Abschluss.'],
['Was ist bei der Nachbearbeitung wichtig?','Dankesnachricht. Info an alle Abteilungen. Kundenprofil pflegen. Follow-ups. Dokumentation für Folgegeschäft.'],
['Was ist ein Elevator Pitch?','30–60 Sek.: «Für Sie (Zielgruppe) und Ihr (Problem) ist (Produkt) eine (Kategorie) mit (Hauptvorteil).»'],
['Was ist ein Sales-Blitz?','Intensive Kurzverkaufskampagne. Max. 5 Min./Besuch, eine Kernaussage, Infobeschaffung.'],
['Was ist ein Fam-Trip?','Familiarisation Trip — kostenlose Studienreise für Reisebüromitarbeitende/Travel Manager.'],
['Nenne 5 wichtige Tradeshows im Hotelverkauf.','IMEX (MICE), IBTM (Corporate), WTM (Tour Operator), ILTM (Luxus), ITB Berlin (global).'],
['Nenne die 5 Schritte der Verkaufsplanung.','1. Analyse → 2. Ziele → 3. Strategie → 4. Massnahmen → 5. Budget.'],
['Was besagt die Pareto-Regel im Verkauf?','80% Ergebnisse mit 20% Aufwand. 20% der Kunden = 80% des Umsatzes.'],
['Was ist die ABC-Analyse?','A = Top-Kunden (intensiv). B = Mitte (Potenzial für A). C = geringste Bedeutung (standardisiert).'],
['Was sind die 6Ws im Zielraster?','Was (Zielinhalt), Wieviel (Zahl/%), Wem (Segment), Wann (Frist), Wo (Markt), Wer (Verantwortung).'],
['Was umfasst die primäre Verkaufsplanung?','Nach aussen: Ziele nach Produkten/Kunden/Regionen/Zeiträumen + Einsatzplanung → Sales & Marketingplan.'],
['Was umfasst die sekundäre Verkaufsplanung?','Nach innen: Organisation, Personalplanung, Weiterbildung, Entlöhnung, Verkaufsmittel.'],
['Was ist LRA?','Last Room Availability — Garantie, dass das letzte Zimmer zum Firmenpreis verfügbar ist.'],
['Warum ist die Nachbearbeitung so wichtig?','Entscheidet über das Folgegeschäft! Ohne Dankesnachricht und pünktliches Angebot ist die beste Präsentation wertlos.'],
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
