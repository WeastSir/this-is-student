(function() {

// ==========================================
// 1. KURS-KONFIGURATION
// ==========================================
const courseConfig = {
  id: 'marketing',
  name: 'Marketing',
  pages: [
    'marketing', 'marketing_kap1', 'marketing_kap2', 'marketing_kap3', 'marketing_kap4',
    'marketing_kap5', 'marketing_kap6', 'marketing_kap7', 'marketing_kap8',
    'marketing_ueb', 'marketing_mind', 'marketing_kart', 'marketing_quiz', 'marketing_glossar'
  ],
  subNav: [
    {s:'marketing', l:'Übersicht'},
    {s:'marketing_kap1', l:'1 Einführung'},
    {s:'marketing_kap2', l:'2 Konzept'},
    {s:'marketing_kap3', l:'3 Mix'},
    {s:'marketing_kap4', l:'4 Product'},
    {s:'marketing_kap5', l:'5 Price'},
    {s:'marketing_kap6', l:'6 Place'},
    {s:'marketing_kap7', l:'7 Promotion'},
    {s:'marketing_kap8', l:'8 Online'},
    {s:'marketing_ueb', l:'Übungen'},
    {s:'marketing_mind', l:'Zusammenfassung'},
    {s:'marketing_kart', l:'Karten'},
    {s:'marketing_quiz', l:'Quiz'},
    {s:'marketing_glossar', l:'Glossar'}
  ],
  navButton: '<button class="nl nl-main" data-s="marketing" onclick="go(\'marketing\')" style="display:none">Marketing</button>'
};

// ==========================================
// 2. HTML-CONTENT
// ==========================================
const courseHTML = `

<!-- ===================== ÜBERSICHT ===================== -->
<div class="sec" id="marketing">
<div style="border-radius:24px;padding:36px 32px;margin-bottom:32px;background:linear-gradient(135deg,rgba(232,86,122,.06),rgba(175,82,222,.04));border:1px solid var(--bd)">
<div style="font-size:12px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:var(--ac);margin-bottom:8px">Operatives Marketing</div>
<h1 style="font-size:32px;letter-spacing:-.6px;margin-bottom:8px">Marketing für die Hotellerie</h1>
<p style="font-size:15px;color:var(--tx2)">Dozierende: Sabine Hall & Nicole Martin · Semester 5 BWS · SHL · v8.0 (2025)</p>
</div>

<div class="hl">Durchgängiges Fallbeispiel: <strong>Hotel Alpenstern ★★★★</strong> — Interlaken, 65 Zimmer, inhabergeführt (Familie Brunner, 3. Generation), Panoramablick auf Eiger, Mönch & Jungfrau. Zielgruppe: naturverbundene Paare (25–55 J.) aus dem DACH-Raum.</div>

<div style="font-size:13px;font-weight:600;letter-spacing:1px;text-transform:uppercase;color:var(--tx3);margin-bottom:14px;margin-top:28px">Theorie</div>
<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:12px;margin-bottom:36px">

<div class="c ck" onclick="go('marketing_kap1')" style="padding:20px 22px;display:flex;gap:14px;align-items:flex-start">
<div style="width:32px;height:32px;border-radius:10px;background:var(--al);color:var(--ac);display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0">1</div>
<div><div class="ct2">Einführung ins Marketing</div><div class="cd">Definition, Bedürfnis vs. Wunsch, CRM, Grundformen, Agenturen</div></div></div>

<div class="c ck" onclick="go('marketing_kap2')" style="padding:20px 22px;display:flex;gap:14px;align-items:flex-start">
<div style="width:32px;height:32px;border-radius:10px;background:var(--gl);color:var(--g);display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0">2</div>
<div><div class="ct2">Managementkonzept</div><div class="cd">CI/CD, SWOT-Analyse, Marketingkonzept, Zielgruppen</div></div></div>

<div class="c ck" onclick="go('marketing_kap3')" style="padding:20px 22px;display:flex;gap:14px;align-items:flex-start">
<div style="width:32px;height:32px;border-radius:10px;background:rgba(175,82,222,.08);color:var(--pr);display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0">3</div>
<div><div class="ct2">Der Marketing-Mix</div><div class="cd">4 Ps, 7 Ps, Abhängigkeiten, Integriertes Marketing</div></div></div>

<div class="c ck" onclick="go('marketing_kap4')" style="padding:20px 22px;display:flex;gap:14px;align-items:flex-start">
<div style="width:32px;height:32px;border-radius:10px;background:rgba(255,149,0,.08);color:var(--am);display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0">4</div>
<div><div class="ct2">P Product</div><div class="cd">Leistungsmix, USP, CXM, Produktlebenszyklus, Zielformulierung</div></div></div>

<div class="c ck" onclick="go('marketing_kap5')" style="padding:20px 22px;display:flex;gap:14px;align-items:flex-start">
<div style="width:32px;height:32px;border-radius:10px;background:var(--al);color:var(--ac);display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0">5</div>
<div><div class="ct2">P Price</div><div class="cd">Preisdreieck, Preiselastizität, Preispsychologie, Konditionenpolitik</div></div></div>

<div class="c ck" onclick="go('marketing_kap6')" style="padding:20px 22px;display:flex;gap:14px;align-items:flex-start">
<div style="width:32px;height:32px;border-radius:10px;background:var(--gl);color:var(--g);display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0">6</div>
<div><div class="ct2">P Place</div><div class="cd">Distribution direkt/indirekt, OTAs, Franchise</div></div></div>

<div class="c ck" onclick="go('marketing_kap7')" style="padding:20px 22px;display:flex;gap:14px;align-items:flex-start">
<div style="width:32px;height:32px;border-radius:10px;background:rgba(175,82,222,.08);color:var(--pr);display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0">7</div>
<div><div class="ct2">P Promotion</div><div class="cd">Shannon/Weaver, AIDA, 8 Instrumente, Positionierung, Krise</div></div></div>

<div class="c ck" onclick="go('marketing_kap8')" style="padding:20px 22px;display:flex;gap:14px;align-items:flex-start">
<div style="width:32px;height:32px;border-radius:10px;background:rgba(255,149,0,.08);color:var(--am);display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0">8</div>
<div><div class="ct2">Online-Marketing</div><div class="cd">Website, SEO/SEA, E-Mail, Social Media, Influencer, Datenschutz</div></div></div>

</div>

<div style="font-size:13px;font-weight:600;letter-spacing:1px;text-transform:uppercase;color:var(--tx3);margin-bottom:14px">Lerntools</div>
<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:12px">
<div class="c ck" onclick="go('marketing_ueb')" style="text-align:center;padding:24px 16px">
<div style="font-size:20px;font-weight:700;color:var(--am);margin-bottom:6px">3</div>
<div class="ct2">Übungen</div><div class="cd">Interaktiv mit Korrektur</div></div>
<div class="c ck" onclick="go('marketing_mind')" style="text-align:center;padding:24px 16px">
<div style="font-size:20px;font-weight:700;color:var(--pr);margin-bottom:6px">4</div>
<div class="ct2">Zusammenfassungen</div><div class="cd">Visuelle Übersichten</div></div>
<div class="c ck" onclick="go('marketing_kart')" style="text-align:center;padding:24px 16px">
<div id="ltMKTCards" style="font-size:24px;font-weight:700;color:var(--ac);margin-bottom:6px">0</div>
<div class="ct2">Karteikarten</div><div class="cd">Klicken & repetieren</div></div>
<div class="c ck" onclick="go('marketing_quiz')" style="text-align:center;padding:24px 16px">
<div id="ltMKTQuiz" style="font-size:24px;font-weight:700;color:var(--ac);margin-bottom:6px">0</div>
<div class="ct2">Quiz</div><div class="cd">Mit Lernfortschritt</div></div>
<div class="c ck" onclick="go('marketing_glossar')" style="text-align:center;padding:24px 16px">
<div style="font-size:20px;font-weight:700;color:var(--bl);margin-bottom:6px">A–Z</div>
<div class="ct2">Glossar</div><div class="cd">Begriffe & Definitionen</div></div>
</div>
</div>


<!-- ===================== KAPITEL 1: EINFÜHRUNG ===================== -->
<div class="sec" id="marketing_kap1"><h1>Einführung ins Marketing</h1><p class="sub">Definition, Bedürfnis vs. Wunsch, CRM, Grundformen & Agenturen</p>
<div class="hlbl"><strong>Lernziele:</strong><br>• Mit eigenen Worten erklären, was Marketing ist<br>• Zweck und Aufgabe beschreiben<br>• Bedürfnis vs. Wunsch aufzeigen<br>• Drei Grundformen des Marketings erläutern<br>• Rolle von Marketing im Unternehmen beschreiben<br>• Zusammenarbeit mit Agenturen begründen und Kriterien anwenden</div>

<div style="display:flex;gap:8px;margin:12px 0 4px">
<button style="font-size:11px;padding:4px 10px" onclick="this.parentElement.nextElementSibling.querySelectorAll('.tl-item').forEach(i=>i.classList.add('open'))">Alle aufklappen</button>
<button style="font-size:11px;padding:4px 10px" onclick="this.parentElement.nextElementSibling.querySelectorAll('.tl-item').forEach(i=>i.classList.remove('open'))">Alle schliessen</button>
</div>
<div class="tl">

<div class="tl-item"><div class="tl-num tl-num-b">1</div>
<div class="tl-head" onclick="this.parentElement.classList.toggle('open')">
<div><div class="tl-title">Was ist Marketing?</div>
<div class="tl-merksatz">«Marketing ist eine Denkhaltung — nicht nur Werbung»</div></div>
<div class="tl-arrow">&#9654;</div></div>
<div class="tl-detail">
<div class="tl-body">Marketing ist die <strong>gezielte und zielgruppenorientierte Ausrichtung der Unternehmensaktivitäten an den Bedürfnissen des Marktes</strong>. Dabei muss ein Unternehmen <strong>marktgerecht</strong> (bedürfnisgerechte Leistungen) und <strong>marktgerichtet</strong> (ständige Anpassung) handeln.<br><br>
<strong>Bedürfnis</strong> = Ausdruck eines Mangels (in der Natur verankert: Hunger, Sicherheit, Erholung). <strong>Wunsch</strong> = konkretes Verlangen nach Befriedigung dieses Bedürfnisses. Marketing erkennt Bedürfnisse und formt daraus Wünsche.<br><br>
<strong>Markt</strong> = wirtschaftlicher Ort, wo Anbieter und Nachfrager aufeinandertreffen. Durch Angebot & Nachfrage entsteht ein Preis. Märkte können lokal, national oder international sein.<br><br>
<strong>Zweck:</strong> Unternehmensziele erreichen — Umsatz/Gewinn, Marktposition, Überlebensfähigkeit, Innovationskraft, Sicherheit der Arbeitsplätze.</div>
<div class="tl-sub">
<div class="c ca"><div class="ct2">🏨 Beispiel Bedürfnis vs. Wunsch</div><div class="cd"><strong>Bedürfnis:</strong> Manager will nach stressiger Woche abschalten → Erholung.<br><strong>Wunsch:</strong> Er will im Hotel Alpenstern ein «Alpine Wellness Weekend» buchen → konkretes Produkt.</div></div>
<div class="c cg"><div class="ct2">Marktgerecht & marktgerichtet</div><div class="cd"><strong>Marktgerecht:</strong> Hotel Alpenstern bietet Bio-Küche, weil Zielgruppe Nachhaltigkeit schätzt.<br><strong>Marktgerichtet:</strong> Wenn Workation-Trend aufkommt → prüfen, ob neues Angebot nötig.</div></div>
</div>
<div class="merksatz">Merke: Marketing ist kein Neuland — schon beim ersten Date «vermarkten» wir uns selbst!</div>
</div></div>

<div class="tl-item"><div class="tl-num tl-num-g">2</div>
<div class="tl-head" onclick="this.parentElement.classList.toggle('open')">
<div><div class="tl-title">Die 5 historischen Phasen</div>
<div class="tl-merksatz">«Von Produktion über Verkauf bis CRM — Kundenbindung ist King»</div></div>
<div class="tl-arrow">&#9654;</div></div>
<div class="tl-detail">
<div class="tl-body"><strong>Phase 1 — Produktionsorientierung:</strong> Nachkriegszeit, Nachfrage > Angebot. Einfach produzieren reichte.<br>
<strong>Phase 2 — Verkaufsorientierung:</strong> Marktsättigung → aktiver Verkauf nötig.<br>
<strong>Phase 3 — Marktorientierung:</strong> Wer die Nachfrage besser kannte, war erfolgreicher.<br>
<strong>Phase 4 — Umweltorientierung:</strong> Ab 1970er → ALLE Stakeholder einbeziehen (Mitarbeitende, Staat, Lieferanten).<br>
<strong>Phase 5 — CRM (heute):</strong> Kundenbindung und Loyalität. Neukunden gewinnen = 5–7x teurer als bestehende halten! Begeisterte Gäste empfehlen weiter = günstigstes Marketing.</div>
<div class="merksatz">Merke: Heute stehen wir in Phase 5 — CRM. Bestandskunden pflegen ist profitabler als Neukunden jagen!</div>
</div></div>

<div class="tl-item"><div class="tl-num tl-num-a">3</div>
<div class="tl-head" onclick="this.parentElement.classList.toggle('open')">
<div><div class="tl-title">CRM — Customer Relationship Management</div>
<div class="tl-merksatz">«Systematischer Aufbau und Pflege von Kundenbeziehungen»</div></div>
<div class="tl-arrow">&#9654;</div></div>
<div class="tl-detail">
<div class="tl-body"><span class="b bb">CRM</span> ist eine Strategie zum systematischen Aufbau und zur Pflege von Kundenbeziehungen. Ziele: Loyalität fördern, durch Empfehlungen Neukunden gewinnen, beste Kund:innen identifizieren und binden.<br><br>
<strong>CRM-Systeme</strong> bieten eine 360-Grad-Sicht auf Gäste. Funktionen: Kontaktverwaltung, E-Mail-Automation, Guest History, Notizen/Tasks. Anbieter: Dailypoint, Revinate (Hospitality), Salesforce, HubSpot (allgemein).</div>
<div class="tl-sub">
<div class="c ca"><div class="ct2">🏨 CRM Beispiel Alpenstern</div><div class="cd">Frau Meier ruft an → CRM zeigt: letztes Jahr Weihnachten, Zimmer 301, glutenfrei, Spa gelobt. Rezeptionistin: «Darf ich wieder Zimmer 301 reservieren? Wir haben neue glutenfreie Optionen!» → Personalisierung = Begeisterung.</div></div>
<div class="c cr"><div class="ct2">⚠️ CRM ≠ PMS!</div><div class="cd"><strong>PMS</strong> = operativ (Check-in, Zimmerbelegung, Rechnungen).<br><strong>CRM</strong> = strategisch (Gästebeziehung, Kommunikation vor/während/nach Aufenthalt). Beide ergänzen sich!</div></div>
</div>
</div></div>

<div class="tl-item"><div class="tl-num tl-num-p">4</div>
<div class="tl-head" onclick="this.parentElement.classList.toggle('open')">
<div><div class="tl-title">3 Grundformen des Marketings</div>
<div class="tl-merksatz">«Hotellerie = hauptsächlich Dienstleistungsmarketing»</div></div>
<div class="tl-arrow">&#9654;</div></div>
<div class="tl-detail">
<div class="tl-body"><strong>Konsumgüter-Marketing:</strong> Endverbraucher, grosse Zielgruppe, Massenmedien, indirekte Distribution.<br>
<strong>Investitionsgüter-Marketing:</strong> Firmen, wenige Käufer, kollektive Kaufentscheide, direkte Distribution.<br>
<strong>Dienstleistungs-Marketing:</strong> Abstrakt, immateriell, <strong>nicht lagerfähig, nicht transportfähig</strong>, personalintensiv, schwer standardisierbar.<br><br>
Hotellerie = Dienstleistungsmarketing. Der Gast kauft ein <strong>Versprechen</strong>, das er vorher nicht anfassen kann!</div>
</div></div>

<div class="tl-item"><div class="tl-num tl-num-b">5</div>
<div class="tl-head" onclick="this.parentElement.classList.toggle('open')">
<div><div class="tl-title">Marketing-Organisation & Agenturen</div>
<div class="tl-merksatz">«DOSM → DOM + DOS → Marketing Manager + Digital Manager + Sales»</div></div>
<div class="tl-arrow">&#9654;</div></div>
<div class="tl-detail">
<div class="tl-body">Typisches Hotelteam: <span class="b ba">DOSM</span> (Strategie + Budget) → <span class="b bb">DOM</span> (Marketing operativ) + <span class="b br">DOS</span> (Vertrieb) → Marketing Manager (PR, Events), Digital Marketing Manager (SEO, Social Media), Sales Manager (Akquise).<br><br>
<strong>Agenturen:</strong> Für Grafik, Web, Strategie, Media. Schlüssel = präzises <strong>Briefing</strong> (Projekt, Leistungen, Zielgruppe, Ziel, Budget, Zeitplan). Agenturwahl: Spezialisierung, Budget, Branchenerfahrung, Chemie.<br>
Stundenansätze CH: Account Manager 140–190, Art Director 160–200, Texter 140–180, Stratege 180–240 CHF.</div>
</div></div>

</div>
</div>


<!-- ===================== KAPITEL 2: MANAGEMENTKONZEPT ===================== -->
<div class="sec" id="marketing_kap2"><h1>Marketing als Managementkonzept</h1><p class="sub">Naming, CI/CD, SWOT-Analyse, Marketingkonzept & Zielgruppen</p>
<div class="hlbl"><strong>Lernziele:</strong><br>• Naming-Vorgehensweisen anwenden und analysieren<br>• Corporate Identity erläutern und mit Beispielen untermauern<br>• SWOT-Analyse korrekt erstellen und Fazit ableiten<br>• Zielgruppe korrekt und fallbezogen definieren</div>

<div style="display:flex;gap:8px;margin:12px 0 4px">
<button style="font-size:11px;padding:4px 10px" onclick="this.parentElement.nextElementSibling.querySelectorAll('.tl-item').forEach(i=>i.classList.add('open'))">Alle aufklappen</button>
<button style="font-size:11px;padding:4px 10px" onclick="this.parentElement.nextElementSibling.querySelectorAll('.tl-item').forEach(i=>i.classList.remove('open'))">Alle schliessen</button>
</div>
<div class="tl">

<div class="tl-item"><div class="tl-num tl-num-b">1</div>
<div class="tl-head" onclick="this.parentElement.classList.toggle('open')">
<div><div class="tl-title">Naming & Corporate Identity</div>
<div class="tl-merksatz">«CI = einheitliches Bild nach innen und aussen: CD + CC + CB»</div></div>
<div class="tl-arrow">&#9654;</div></div>
<div class="tl-detail">
<div class="tl-body"><strong>Naming:</strong> Informativ, klar, einfach, kurz, visuell ansprechend. Kann auch ein neues Wort sein.<br><br>
<span class="b bb">CI</span> = Corporate Identity — einheitliches und glaubhaftes Bild (Image). Besteht aus 3 Elementen, die zusammenspielen MÜSSEN:</div>
<div class="tl-sub">
<div class="c ca"><div class="ct2">Corporate Design (CD)</div><div class="cd">Visuelles Erscheinungsbild: Logo, Farben, Schriften, Bildsprache, Jingles. Alles im <strong>CD-Manual</strong> dokumentiert. Alpenstern: Goldener Stern + Bergsilhouette, Dunkelgrün & Gold.</div></div>
<div class="c cg"><div class="ct2">Corporate Communication (CC)</div><div class="cd">Einheitliche Kommunikation intern (Mitarbeitende, VR) + extern (Kunden, Medien, Banken). Welche Kanäle? Welcher Ton? Krisenkommunikation?</div></div>
<div class="c cp"><div class="ct2">Corporate Behaviour (CB)</div><div class="cd">Grundsätze in Handlungen umsetzen. Wenn CD und CC «nachhaltig» sagen, muss CB es beweisen! Sonst → Misstrauen.</div></div>
</div>
<div class="hlr"><strong>⚠️ Wenn CI-Elemente nicht zusammenpassen:</strong> Hotel kommuniziert «Nachhaltigkeit», hat aber Einwegplastik im Bad → CC und CB klaffen auseinander → Glaubwürdigkeit zerstört!</div>
</div></div>

<div class="tl-item"><div class="tl-num tl-num-g">2</div>
<div class="tl-head" onclick="this.parentElement.classList.toggle('open')">
<div><div class="tl-title">Das Marketingkonzept — 6 Schritte</div>
<div class="tl-merksatz">«Analyse → Ziele → Strategie → Mix → Budget → Kontrolle»</div></div>
<div class="tl-arrow">&#9654;</div></div>
<div class="tl-detail">
<div class="tl-body">Das Marketingkonzept ist der strategische und operative <strong>Fahrplan</strong>. Es beinhaltet eine strategische und eine operative Dimension. 6 aufeinander aufbauende Schritte:<br><br>
<strong>1. Analyse</strong> → Externe Analyse (Umwelt, Markt, Branche, Konkurrenz) + Interne Analyse (Stärken, Schwächen) = SWOT<br>
<strong>2. Ziele</strong> → Zielsetzungen mit 6 W-Fragen, Zielgruppen definieren<br>
<strong>3. Strategie</strong> → Positionierung, Segmentierung, Differenzierung<br>
<strong>4. Marketing-Mix</strong> → Product, Price, Place, Promotion (operative Massnahmen)<br>
<strong>5. Budget</strong> → Marketing-Budget planen<br>
<strong>6. Kontrolle</strong> → Audit, Controlling, Soll-Ist-Vergleich</div>
<div class="hlg"><strong>🏨 Marketingkonzept Hotel Alpenstern:</strong><br>
<strong>1.</strong> SWOT (siehe unten) → <strong>2.</strong> Ziel: «Marketing Managerin steigert Direktbuchungsanteil von 25% auf 40% bei naturverbundenen Paaren bis 31.12.2026» → <strong>3.</strong> Positionierung als «authentisches Naturerlebnis-Hotel» → <strong>4.</strong> Product: Wellness Weekend, Price: CHF 580, Place: Website + Booking, Promotion: Instagram + Newsletter → <strong>5.</strong> Budget CHF 45'000/Jahr → <strong>6.</strong> Monatlich: Analytics, CTR, Engagement. Quartalsweise: Direktbuchungsanteil vs. Ziel.</div>
</div></div>

<div class="tl-item"><div class="tl-num tl-num-a">3</div>
<div class="tl-head" onclick="this.parentElement.classList.toggle('open')">
<div><div class="tl-title">SWOT-Analyse</div>
<div class="tl-merksatz">«Stärken/Schwächen = intern · Chancen/Gefahren = extern · Fazit = Königsstück»</div></div>
<div class="tl-arrow">&#9654;</div></div>
<div class="tl-detail">
<div class="tl-body"><span class="b bb">SWOT</span> verbindet <strong>intern</strong> (was WIR beeinflussen: Stärken/Schwächen) mit <strong>extern</strong> (was der MARKT vorgibt: Chancen/Gefahren). Aussagen immer auf belegbare Quellen stützen — nie persönliche Meinungen! Bei jeder Aussage «warum relevant» erklären (→ Konsequenz).<br><br>
<strong>Das Fazit ist der wichtigste Teil</strong> — Auftraggeber lesen oft NUR das Fazit!</div>
<div class="tl-sub">
<div class="c cg"><div class="ct2">S — Stärken (intern)</div><div class="cd">• Panoramalage Eiger/Mönch/Jungfrau → starker Magnet<br>• Inhabergeführt, 3. Generation → persönlich, flexibel<br>• Bio-Küche mit lokalen Produzenten<br>• Loyale Mitarbeitende → hohe Servicequalität<br>• 35% Stammgäste → stabile Basis</div></div>
<div class="c cr"><div class="ct2">W — Schwächen (intern)</div><div class="cd">• Spa klein & veraltet → enttäuscht anspruchsvolle Gäste<br>• Website nicht mobiloptimiert → 72% Absprungrate<br>• Nur 25% Direktbuchungen → hohe OTA-Kommissionen<br>• Kein CRM-System → keine Automatisierung<br>• Begrenzte Parkplätze</div></div>
<div class="c cbl"><div class="ct2">O — Chancen (extern)</div><div class="cd">• Naturtourismus +18% (Schweiz Tourismus)<br>• Jungfrau Region investiert in Infrastruktur<br>• Fernmärkte erholen sich (USA/Asien)<br>• Günstige Digital-Tools verfügbar<br>• Workation-Trend → neue Zielgruppe</div></div>
<div class="c cp"><div class="ct2">T — Gefahren (extern)</div><div class="cd">• Starker CHF → teurer für EU-Touristen<br>• Fachkräftemangel in Hotellerie<br>• Airbnb-Wachstum in der Region<br>• Klimawandel → weniger Schneesicherheit<br>• Steigende Energiekosten</div></div>
</div>
<div class="hlg"><strong>Fazit (Muster):</strong> Das Hotel Alpenstern verfügt mit Panoramalage und inhabergeführtem Service über starke Differenzierungsmerkmale. Der Naturtourismus-Trend (+18%) bietet grosses Potenzial. Dringend nötig: mobile Website + CRM für mehr Direktbuchungen. Spa mittelfristig renovieren. Dem starken Franken mit Wert-Positionierung begegnen.</div>
</div></div>

<div class="tl-item"><div class="tl-num tl-num-p">4</div>
<div class="tl-head" onclick="this.parentElement.classList.toggle('open')">
<div><div class="tl-title">Zielgruppen / Marktsegmentierung</div>
<div class="tl-merksatz">«Je genauer die Segmente, desto gezielter die Ansprache»</div></div>
<div class="tl-arrow">&#9654;</div></div>
<div class="tl-detail">
<div class="tl-body">Marktsegmentierung = Gesamtmarkt in <strong>homogene Kaufgruppen</strong> aufteilen. Kriterien:<br>
<span class="b ba">Demografisch</span> Alter, Geschlecht, Einkommen, Beruf, Nationalität<br>
<span class="b bb">Geografisch</span> Nation, Region, Stadt/Land, Sprache<br>
<span class="b bgreen">Psychografisch</span> Lebensstil, Werte, Temperament, Kontaktfähigkeit<br>
<span class="b br">Verhaltensbezogen</span> Kaufmotive, Markentreue, Medienkonsum, Urlaubsgestaltung</div>
<div class="hlg"><strong>🏨 Zielgruppe Alpenstern:</strong><br>Demo: Paare, 30–55 J., mittleres–hohes Einkommen · Geo: Deutschschweiz, Süddeutschland (≤4h) · Psycho: Naturverbunden, authentisch > luxuriös · Verhalten: 2–3x/Jahr Kurzurlaub, informiert sich via Instagram + Blogs</div>
</div></div>

</div>
</div>

<!-- ===================== KAPITEL 3: MARKETING-MIX ===================== -->
<div class="sec" id="marketing_kap3"><h1>Der Marketing-Mix</h1><p class="sub">4 Ps, 7 Ps, Abhängigkeiten & integriertes Marketing</p>
<div class="hlbl"><strong>Lernziele:</strong><br>• Elemente des Marketing-Mix vollständig aufzählen und anwenden<br>• Beurteilen, welche Punkte bei der Zusammenstellung wichtig sind</div>

<div class="hl"><strong>Der Marketing-Mix</strong> ist die optimale Kombination der Marketinginstrumente. Alle Ps müssen <strong>aufeinander abgestimmt</strong> sein (integriertes Marketing). Es gibt <strong>dominierende Ps</strong> (Hauptfokus) und <strong>flankierende Ps</strong> (unterstützend).</div>

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:12px;margin:16px 0">
<div class="c ca" style="text-align:center;padding:20px"><div style="font-size:28px;margin-bottom:6px">📦</div><div class="ct2">Product</div><div class="cd">Leistungsmix, Qualität, USP, Marke, Verpackung</div></div>
<div class="c cg" style="text-align:center;padding:20px"><div style="font-size:28px;margin-bottom:6px">💰</div><div class="ct2">Price</div><div class="cd">Preisfestlegung, Strategie, Konditionen, Yield</div></div>
<div class="c cbl" style="text-align:center;padding:20px"><div style="font-size:28px;margin-bottom:6px">🏪</div><div class="ct2">Place</div><div class="cd">Distribution direkt/indirekt/elektronisch</div></div>
<div class="c cp" style="text-align:center;padding:20px"><div style="font-size:28px;margin-bottom:6px">📣</div><div class="ct2">Promotion</div><div class="cd">Werbung, PR, Events, Direct Marketing</div></div>
</div>

<h2>Erweiterter Mix: 7 Ps (Dienstleistungen)</h2>
<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:12px;margin:12px 0">
<div class="c ca"><div class="ct2">People</div><div class="cd">Personal = Qualitätsfaktor. Ein unfreundlicher Kellner ruiniert das beste Essen.</div></div>
<div class="c cg"><div class="ct2">Process</div><div class="cd">Standardisierte Abläufe = gleichbleibende Qualität (z.B. Check-in-Prozess).</div></div>
<div class="c cp"><div class="ct2">Physical Evidence</div><div class="cd">Greifbare Beweise: Lobby-Design, Menukarte, Duft. Festigen das Konzept.</div></div>
</div>

<div class="hlg"><strong>🏨 Alle 7 Ps Alpenstern:</strong><br>Product: Wellness Weekend · Price: CHF 580 · Place: Website + Booking · Promotion: Instagram + Newsletter · <strong>People:</strong> Mitarbeitende kennen Wanderwege · <strong>Process:</strong> Check-in mit Willkommensdrink · <strong>Physical Evidence:</strong> Naturholz-Lobby, Bergblumen, Alpenkräuter-Duft</div>
</div>

<!-- ===================== KAPITEL 4: PRODUCT ===================== -->
<div class="sec" id="marketing_kap4"><h1>P Product — Produkteleistungspolitik</h1><p class="sub">Leistungsmix, USP, CXM, Lebenszyklus & Zielformulierung</p>
<div class="hlbl"><strong>Lernziele:</strong><br>• 3 Ebenen des Leistungsmix beschreiben und Beispiele zuordnen<br>• Produktlebenszyklus analysieren<br>• Ziele mit 6 W-Fragen formulieren<br>• USP und CXM erklären</div>

<div style="display:flex;gap:8px;margin:12px 0 4px">
<button style="font-size:11px;padding:4px 10px" onclick="this.parentElement.nextElementSibling.querySelectorAll('.tl-item').forEach(i=>i.classList.add('open'))">Alle aufklappen</button>
<button style="font-size:11px;padding:4px 10px" onclick="this.parentElement.nextElementSibling.querySelectorAll('.tl-item').forEach(i=>i.classList.remove('open'))">Alle schliessen</button>
</div>
<div class="tl">

<div class="tl-item"><div class="tl-num tl-num-b">1</div>
<div class="tl-head" onclick="this.parentElement.classList.toggle('open')">
<div><div class="tl-title">Leistungsmix — 3 Ebenen</div>
<div class="tl-merksatz">«Kernprodukt → Formales Produkt → Erweitertes Produkt»</div></div>
<div class="tl-arrow">&#9654;</div></div>
<div class="tl-detail">
<div class="tl-body">Ein Produkt ist ein ganzes <strong>Leistungsbündel</strong> mit drei Ebenen:</div>
<div class="tl-sub">
<div class="c ca"><div class="ct2">🎯 Kernprodukt</div><div class="cd">Grundlegender Nutzen — das, was der Gast «eigentlich kauft». Z.B. Übernachtung, Spa-Zugang.</div></div>
<div class="c cg"><div class="ct2">📐 Formales Produkt</div><div class="cd">Konkrete Ausgestaltung: Marke, Design, Qualität, Verpackung. Z.B. Naturholz-Zimmer, Bio-Frühstück.</div></div>
<div class="c cp"><div class="ct2">✨ Erweitertes Produkt</div><div class="cd">Emotionale Mehrwerte: persönlicher Empfang, CRM, Flexibilität, After-Sales. <strong>Oft ausschlaggebend für Wiederkehr!</strong></div></div>
</div>
<div class="hlg"><strong>🏨 Leistungsmix Wellness Weekend:</strong><br>Kern: 2 Nächte + Frühstück → Erholung<br>Formal: Panoramafenster, Alpkäse-Frühstück, Kräutersauna, einheitliches CD<br>Erweitert: Willkommenskarte mit Namen, individuelle Wandertipps, Follow-up-Mail nach Abreise, Geburtstagsgruss via CRM</div>
<div class="merksatz">USP Alpenstern: «Einziges inhabergeführtes 4★-Hotel mit Eiger-Panorama und 100% Bio-Küche.»</div>
</div></div>

<div class="tl-item"><div class="tl-num tl-num-g">2</div>
<div class="tl-head" onclick="this.parentElement.classList.toggle('open')">
<div><div class="tl-title">Produktlebenszyklus</div>
<div class="tl-merksatz">«Einführung → Wachstum → Reife → Sättigung → Rückgang»</div></div>
<div class="tl-arrow">&#9654;</div></div>
<div class="tl-detail">
<div class="tl-body">Jedes Produkt durchläuft einen Lebenszyklus. Jede Phase erfordert <strong>andere Marketingmassnahmen</strong>!<br><br>
<strong>Einführung:</strong> Geringes Volumen, negative Gewinne, PR + Kennenlern-Preise<br>
<strong>Wachstum:</strong> Schnell steigend, erste Mitbewerber, Preiskampf beginnt<br>
<strong>Reife:</strong> Maximum, Kampf um Marktanteile, Varianten entwickeln<br>
<strong>Sättigung:</strong> Rückläufig, Überkapazitäten, Rabatte nötig<br>
<strong>Rückgang:</strong> Stark abfallend, Innovation oder Elimination nötig</div>
<div class="hla"><strong>🏨 Beispiel Wellness Weekend:</strong> Einführung (Launch + Kennenlernpreis 480) → Wachstum (gute Bewertungen, Normalpreis 580) → Reife (Varianten: Winter Edition) → Sättigung (Rabatte) → Rückgang (neuer Trend verdrängt → Innovation!)</div>
</div></div>

<div class="tl-item"><div class="tl-num tl-num-a">3</div>
<div class="tl-head" onclick="this.parentElement.classList.toggle('open')">
<div><div class="tl-title">Zielformulierung — 6 W-Fragen</div>
<div class="tl-merksatz">«WAS · WIE VIEL · WEM · WO · WANN · WER — gilt für alle 4 Ps!»</div></div>
<div class="tl-arrow">&#9654;</div></div>
<div class="tl-detail">
<div class="tl-body">Ziele sind IMMER messbar — ökonomisch UND psychologisch. 6 Elemente:<br>
<span class="b ba">WAS</span> = Zielinhalt · <span class="b bb">WIE VIEL</span> = Zielausmass · <span class="b bgreen">WEM</span> = Zielsegment · <span class="b br">WO</span> = Zielgebiet · <span class="b ba">WANN</span> = Zielperiode · <span class="b bb">WER</span> = Verantwortliche:r</div>
<div class="hlg"><strong>Ökonomisch:</strong> «Die Marketing Managerin <strong>(WER)</strong> verkauft das Wellness Weekend <strong>(WAS)</strong> an 200 Paare <strong>(WIE VIEL)</strong> Naturinteressierte <strong>(WEM)</strong> aus Deutschschweiz <strong>(WO)</strong> bis 31.12.2026 <strong>(WANN)</strong>.»</div>
<div class="hla"><strong>Psychologisch:</strong> «Der Digital Mkt Manager <strong>(WER)</strong> steigert Spa-Bekanntheit <strong>(WAS)</strong> bei Hotelgästen <strong>(WEM)</strong> von 15% auf 40% <strong>(WIE VIEL)</strong> in Deutschschweiz <strong>(WO)</strong> bis 30.06.2026 <strong>(WANN)</strong>.»</div>
<div class="merksatz">Merke: Diese 6-W-Systematik gilt einheitlich für ALLE 4 Ps des Marketing-Mix!</div>
</div></div>

</div>
</div>

<!-- ===================== KAPITEL 5: PRICE ===================== -->
<div class="sec" id="marketing_kap5"><h1>P Price — Preispolitik</h1><p class="sub">Preisdreieck, Preiselastizität, Preispsychologie & Konditionenpolitik</p>
<div class="hlbl"><strong>Lernziele:</strong><br>• Strategische vs. taktische Preispolitik unterscheiden<br>• Preiselastizität erklären<br>• Preisdifferenzierungen und Preisbündelungen entwickeln<br>• Preispsychologische Instrumente anwenden</div>

<div style="display:flex;gap:8px;margin:12px 0 4px">
<button style="font-size:11px;padding:4px 10px" onclick="this.parentElement.nextElementSibling.querySelectorAll('.tl-item').forEach(i=>i.classList.add('open'))">Alle aufklappen</button>
<button style="font-size:11px;padding:4px 10px" onclick="this.parentElement.nextElementSibling.querySelectorAll('.tl-item').forEach(i=>i.classList.remove('open'))">Alle schliessen</button>
</div>
<div class="tl">

<div class="tl-item"><div class="tl-num tl-num-b">1</div>
<div class="tl-head" onclick="this.parentElement.classList.toggle('open')">
<div><div class="tl-title">Preisdreieck & Preiselastizität</div>
<div class="tl-merksatz">«Kosten × Konkurrenz × Nachfrage = magisches Preisdreieck»</div></div>
<div class="tl-arrow">&#9654;</div></div>
<div class="tl-detail">
<div class="tl-body"><strong>1. Kostenorientierung:</strong> Fixe + variable Kosten = Preisuntergrenze. Break-even = Erlös deckt Kosten.<br>
<strong>2. Konkurrenzorientierung:</strong> Was verlangen Mitbewerber? Achtung: blindes Kopieren = gefährliche Abhängigkeit!<br>
<strong>3. Nachfrageorientierung:</strong> Was zahlt der Gast? → Preiselastizität.</div>
<div class="tl-sub">
<div class="c cg"><div class="ct2">Elastischer Preis</div><div class="cd">Grosses Angebot, Nachfrage reagiert stark. Hotel im November: Preis ↓ → mehr Gäste. Preis ↑ → Gäste bleiben weg.</div></div>
<div class="c cr"><div class="ct2">Unelastischer Preis</div><div class="cd">Nachfrage bleibt gleich. Silvester in Interlaken: Alle wollen DA sein → hoher Preis möglich, Nachfrage «verschiebt» sich nicht.</div></div>
</div>
<div class="hla"><strong>Strategisch</strong> = langfristig: Hochpreis (Mandarin Oriental) / Mittelpreis / Niedrigpreis (Ibis Budget)<br><strong>Taktisch</strong> = kurzfristig: Last-Minute, Frühbucher, Yield Management</div>
</div></div>

<div class="tl-item"><div class="tl-num tl-num-g">2</div>
<div class="tl-head" onclick="this.parentElement.classList.toggle('open')">
<div><div class="tl-title">Preispsychologie — 6 Instrumente</div>
<div class="tl-merksatz">«Menschen entscheiden bei Preisen nicht rational»</div></div>
<div class="tl-arrow">&#9654;</div></div>
<div class="tl-detail">
<div class="tl-sub">
<div class="c ca"><div class="ct2">Preisbündelung</div><div class="cd">Paket günstiger als Einzelkauf. Wellness Weekend CHF 580 (einzeln 680) → Gast empfindet Schnäppchen.</div></div>
<div class="c cg"><div class="ct2">Gebrochene Preise</div><div class="cd">CHF 189 statt 190 — knapp unter rund = psychologisch günstiger.</div></div>
<div class="c cbl"><div class="ct2">Decoy-Effekt (Köder)</div><div class="cd">Standard 189, Komfort 259, Deluxe 289 → Komfort = Köder → meiste wählen Deluxe!</div></div>
<div class="c cp"><div class="ct2">Anker-Effekt</div><div class="cd">Erst Suite für 450 zeigen, dann DZ für 189 → wirkt super günstig im Vergleich!</div></div>
<div class="c cr"><div class="ct2">Künstliche Verknappung</div><div class="cd">«Nur 2 Zimmer!» → Verlustangst → schnellere Buchung. Verluste wirken 2x stärker als Gewinne!</div></div>
<div class="c ca"><div class="ct2">Signalartikel</div><div class="cd">Kaffee CHF 4.50 → Rückschluss aufs Gesamtniveau. Günstiger Kaffee = «hier ist es bezahlbar».</div></div>
</div>
<div class="tl-body" style="margin-top:12px"><strong>Konditionenpolitik:</strong> <span class="b ba">Zeitrabatt</span> (3 Nächte, 2 zahlen) · <span class="b bgreen">Mengenrabatt</span> (Gruppen) · <span class="b bb">Treuerabatt</span> (Stammgäste)</div>
</div></div>

</div>
</div>

<!-- ===================== KAPITEL 6: PLACE ===================== -->
<div class="sec" id="marketing_kap6"><h1>P Place — Distribution</h1><p class="sub">Distributionskanäle, direkt/indirekt & Franchise</p>
<div class="hlbl"><strong>Lernziele:</strong><br>• Direkte, indirekte und gemischte Distribution erklären mit Vor-/Nachteilen<br>• Partner der indirekten Distribution benennen</div>

<div class="hl"><strong>Kernfrage:</strong> Wie kommt unsere Leistung zum Gast? Im Tourismus v.a. Gestaltung der Kanäle (nicht Logistik, weil Dienstleistungen nicht transportierbar).</div>

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:12px;margin:16px 0">
<div class="c cg"><div class="ct2">Direkte Distribution</div><div class="cd"><strong>Kanäle:</strong> Eigene Website, Telefon, Rezeption, Sales-Team<br><strong>+</strong> Volle Kontrolle, keine Provision, direkter Kontakt, eigene Daten<br><strong>−</strong> Begrenzte Reichweite, hoher Aufwand, geschultes Personal nötig</div></div>
<div class="c cr"><div class="ct2">Indirekte Distribution</div><div class="cd"><strong>Kanäle:</strong> Booking.com, Expedia, Reisebüros, GDS, Tourismusorganisationen<br><strong>+</strong> Weltweite Reichweite, neue Märkte<br><strong>−</strong> 15–25% Kommissionen (!), Kontrollverlust, kurzfristige Storni</div></div>
</div>

<div class="hlg"><strong>🏨 Distribution Alpenstern:</strong><br>Direkt (Ziel 40%): Website + «Book direct = gratis Apéro» · Indirekt (60%): Booking 30%, Expedia 10%, Schweiz Tourismus 10%, Reisebüros 10%<br>→ Ziel: Direktbuchungsanteil maximieren!</div>

<div class="hla"><strong>Franchise</strong> = höchste Bindungsform. Konzept übernehmen nach Spielregeln des Gebers. Vorteile Geber: Expansion ohne Kapital. Vorteile Nehmer: Know-how, geringeres Risiko. Bsp: McDonald's, Starbucks.</div>
</div>

<!-- ===================== KAPITEL 7: PROMOTION ===================== -->
<div class="sec" id="marketing_kap7"><h1>P Promotion — Kommunikationspolitik</h1><p class="sub">Shannon/Weaver, AIDA, 8 Instrumente, Positionierung & Krise</p>
<div class="hlbl"><strong>Lernziele:</strong><br>• Shannon/Weaver + AIDA erklären<br>• 8 Instrumente des Kommunikationsmix anwenden<br>• Integrierte Kommunikation + Positionierung + Botschaft erklären<br>• Krisenkommunikation, Storytelling, Medienmitteilung beherrschen</div>

<div style="display:flex;gap:8px;margin:12px 0 4px">
<button style="font-size:11px;padding:4px 10px" onclick="this.parentElement.nextElementSibling.querySelectorAll('.tl-item').forEach(i=>i.classList.add('open'))">Alle aufklappen</button>
<button style="font-size:11px;padding:4px 10px" onclick="this.parentElement.nextElementSibling.querySelectorAll('.tl-item').forEach(i=>i.classList.remove('open'))">Alle schliessen</button>
</div>
<div class="tl">

<div class="tl-item"><div class="tl-num tl-num-b">1</div>
<div class="tl-head" onclick="this.parentElement.classList.toggle('open')">
<div><div class="tl-title">Kommunikationsmodell Shannon/Weaver</div>
<div class="tl-merksatz">«Sender → Codierung → Kanal → Decodierung → Empfänger → Feedback»</div></div>
<div class="tl-arrow">&#9654;</div></div>
<div class="tl-detail">
<div class="tl-body">Sender (Unternehmen) codiert Botschaft (Wort, Bild, Ton) → sendet via Kanal (Instagram, Print) → Empfänger decodiert → gibt Feedback (Buchung, Like). Wenn Codierung ≠ Decodierung → <strong>Kommunikationsstörung</strong>!<br><br>
Heute zu vereinfacht: Konsument:innen sind nicht nur Empfänger, sondern auch <strong>Sender</strong> (Social Media!).</div>
<div class="hlg"><strong>🏨 Beispiel:</strong> Sender: Alpenstern → Codierung: Drohnenvideo + «Wach auf mit Bergblick» → Kanal: Instagram Reel → Decodierung: Paar aus Zürich: «Da müssen wir hin!» → Feedback: Buchen ✅<br>Störung: Video auf Französisch → Zürcher verstehen nichts ❌</div>
</div></div>

<div class="tl-item"><div class="tl-num tl-num-g">2</div>
<div class="tl-head" onclick="this.parentElement.classList.toggle('open')">
<div><div class="tl-title">AIDA-Modell — 4 Stufen zum Kauf</div>
<div class="tl-merksatz">«Attention → Interest → Desire → Action — verschiedene Massnahmen pro Stufe!»</div></div>
<div class="tl-arrow">&#9654;</div></div>
<div class="tl-detail">
<div class="tl-body"><span class="b ba">A</span>ttention → <span class="b bb">I</span>nterest → <span class="b bgreen">D</span>esire → <span class="b br">A</span>ction. Häufiger Fehler: Alle 4 Stufen in einer Massnahme abdecken wollen!</div>
<div class="hlg"><strong>🏨 AIDA komplett: Anna aus Zürich</strong><br><br>
<strong>A — Attention:</strong> Anna scrollt Instagram, sieht Reel: Drohnenflug, goldenes Licht, «Dein nächstes Abenteuer wartet.» → Stoppt Scrollen ✅<br><em>→ Instagram Reel (Werbung)</em><br><br>
<strong>I — Interest:</strong> Klickt aufs Profil: Bio-Frühstück, Gast-Testimonial, Story über lokale Bäuerin. «Sieht authentisch aus!» ✅<br><em>→ Content Marketing (PR / Online)</em><br><br>
<strong>D — Desire:</strong> Besucht Website, Newsletter-Popup: 10% Erstbucher-Rabatt. Seite «Wellness Weekend» mit Fotos, Google 4.8/5. Zeigt es dem Partner: «Perfekt für unser Jubiläum!» ✅<br><em>→ Website + Verkaufsförderung + Social Proof</em><br><br>
<strong>A — Action:</strong> Bucht direkt mit Rabattcode. Sofort E-Mail: «Liebe Anna, wir freuen uns!» ✅<br><em>→ Online-Buchung (Place) + CRM-E-Mail (Direct Marketing)</em></div>
</div></div>

<div class="tl-item"><div class="tl-num tl-num-a">3</div>
<div class="tl-head" onclick="this.parentElement.classList.toggle('open')">
<div><div class="tl-title">8 Kommunikationsinstrumente</div>
<div class="tl-merksatz">«Werbung, Pers. Verkauf, VKF, PR, Sponsoring, Placement, Events, Direct»</div></div>
<div class="tl-arrow">&#9654;</div></div>
<div class="tl-detail">
<div class="tl-sub">
<div class="c ca"><div class="ct2">Werbung</div><div class="cd">Unpersönlich, bezahlt, Massenmedien. Inserat, Google Ad, Plakat.</div></div>
<div class="c cg"><div class="ct2">Persönlicher Verkauf</div><div class="cd">Direktkontakt. Sales besucht Firmen. Ziel: Verkaufsabschluss.</div></div>
<div class="c cbl"><div class="ct2">Verkaufsförderung</div><div class="cd">Kurzfristige Anreize: Frühbucher-Rabatt, «gratis Apéro bei Buchung».</div></div>
<div class="c cp"><div class="ct2">Public Relations</div><div class="cd">Vertrauen & Image. Medienmitteilung, Journalisten-Einladung. Nicht direkt verkaufsgerichtet.</div></div>
<div class="c cr"><div class="ct2">Sponsoring</div><div class="cd">Leistung + Gegenleistung. Hotel sponsert Bergfest → Logo auf Plakaten.</div></div>
<div class="c ca"><div class="ct2">Product Placement</div><div class="cd">In Film/TV einbinden. Hotel als Drehort für SRF-Doku.</div></div>
<div class="c cg"><div class="ct2">Event-Marketing</div><div class="cd">Emotionale Erlebnisse. «Full Moon Dinner» auf Panoramaterrasse.</div></div>
<div class="c cbl"><div class="ct2">Direct Marketing</div><div class="cd">Individuelle Ansprache. Handgeschriebene Karte, personalisierter Newsletter.</div></div>
</div>
</div></div>

<div class="tl-item"><div class="tl-num tl-num-p">4</div>
<div class="tl-head" onclick="this.parentElement.classList.toggle('open')">
<div><div class="tl-title">Positionierung, Botschaft & Integrierte Kommunikation</div>
<div class="tl-merksatz">«Positionierung = Oberziel · Alle Instrumente systematisch abstimmen»</div></div>
<div class="tl-arrow">&#9654;</div></div>
<div class="tl-detail">
<div class="tl-body"><strong>Integrierte Kommunikation:</strong> Alle Massnahmen auf 5 Ebenen abstimmen: <span class="b ba">Inhaltlich</span> <span class="b bb">Sprachlich</span> <span class="b bgreen">Zeitlich</span> <span class="b br">Formal (CD)</span> <span class="b ba">Instrumentell</span><br><br>
<strong>Positionierung</strong> = Oberziel: Wie hebt sich die Marke ab? Anforderungen: relevant, konzentriert, klar abgegrenzt, zukunftsorientiert, flexibel, operationalisierbar. Darstellung: <strong>Positionierungskreuz</strong> mit 2 polaren Achsen.<br><br>
<strong>Botschaft</strong> = wirksamtes Versprechen + USP + UCP + Consumer Benefit + Reason Why + Tonalität.</div>
<div class="hlg"><strong>🏨 Alpenstern:</strong> Positionierungskreuz: Budget→Premium / Standardisiert→Individuell → Alpenstern = Premium + Individuell<br>Botschaft: «Wo die Berge zum Zuhause werden.» · USP: Inhabergeführt + Panorama + Bio · Tonalität: warm, authentisch</div>
</div></div>

<div class="tl-item"><div class="tl-num tl-num-r">5</div>
<div class="tl-head" onclick="this.parentElement.classList.toggle('open')">
<div><div class="tl-title">Krise, Storytelling, Medienmitteilung & Omnichannel</div>
<div class="tl-merksatz">«Vorbereitung ist alles · Intern vor extern · Geschichten bleiben im Kopf»</div></div>
<div class="tl-arrow">&#9654;</div></div>
<div class="tl-detail">
<div class="tl-body"><strong>Krisenkommunikation:</strong> Sachlich, ehrlich, intern VOR extern, Fehler zugeben. Krisenarten: vorhersehbar, schwelend, Donnerschlag.<br><br>
<strong>Storytelling:</strong> Spannungsbogen: Einstieg → Fakten → Konflikt → Höhepunkt → Fazit. Emotionen > Fakten!<br><br>
<strong>Medienmitteilung:</strong> Max. 2 A4, 3. Person, Wichtigstes zuerst, Lead (W-Fragen), Kontakt + Bild. Versand früh morgens.<br><br>
<strong>Omnichannel</strong> = alle Kanäle vernetzt, einheitlich ≠ <strong>Multichannel</strong> = Kanäle nebeneinander (evtl. widersprüchlich).<br><br>
<strong>Kennzahlen:</strong> <span class="b ba">TKP</span> · <span class="b bb">CPM</span> · <span class="b bgreen">CPC</span> · <span class="b br">CTR</span></div>
</div></div>

</div>
</div>

<!-- ===================== KAPITEL 8: ONLINE-MARKETING ===================== -->
<div class="sec" id="marketing_kap8"><h1>Online-Marketing</h1><p class="sub">Website, SEO/SEA, E-Mail, Social Media, Influencer & Datenschutz</p>
<div class="hlbl"><strong>Lernziele:</strong><br>• Website-Aufbau und Funktionen erklären<br>• SEO und SEA erklären<br>• E-Mail-Marketing und Automation anwenden<br>• Social Media und Influencer Marketing verstehen<br>• Datenschutz beachten (DSGVO/revDSG)</div>

<div style="display:flex;gap:8px;margin:12px 0 4px">
<button style="font-size:11px;padding:4px 10px" onclick="this.parentElement.nextElementSibling.querySelectorAll('.tl-item').forEach(i=>i.classList.add('open'))">Alle aufklappen</button>
<button style="font-size:11px;padding:4px 10px" onclick="this.parentElement.nextElementSibling.querySelectorAll('.tl-item').forEach(i=>i.classList.remove('open'))">Alle schliessen</button>
</div>
<div class="tl">

<div class="tl-item"><div class="tl-num tl-num-b">1</div>
<div class="tl-head" onclick="this.parentElement.classList.toggle('open')">
<div><div class="tl-title">Website & Suchmaschinenmarketing</div>
<div class="tl-merksatz">«Website = Online-Visitenkarte · SEO + SEA = SEM»</div></div>
<div class="tl-arrow">&#9654;</div></div>
<div class="tl-detail">
<div class="tl-body"><strong>Website</strong> = permanenter Prozess, nicht einmaliges Projekt. 3 Funktionen: <span class="b ba">Point of Information</span> (Infos) · <span class="b bb">Point of Interaction</span> (Chat, Kontakt) · <span class="b bgreen">Point of Sale</span> (Buchung). 3 Zielgruppen: Menschen, Suchmaschinen-Bots, KI-Systeme.<br><br>
<strong>Conversion Rate</strong> Hotels: ~2% → 98 von 100 buchen NICHT → riesiges Potenzial!<br>
<strong>Google Analytics:</strong> Woher? Wie lange? Was klicken sie? Wie viele buchen?</div>
<div class="tl-sub">
<div class="c ca"><div class="ct2">SEO (Optimierung)</div><div class="cd">Organische Ergebnisse. Keywords (3–5%), 300+ Wörter/Seite, Alt-Texte, sprechende URLs. KI: SGE, FAQ-Format. <strong>NIE abgeschlossen!</strong></div></div>
<div class="c cg"><div class="ct2">SEA (Werbung)</div><div class="cd">Bezahlte Anzeigen (Google Ads). CPC-Modell. Smart Bidding, Responsive Ads, Performance Max.</div></div>
</div>
<div class="hla"><strong>🏨 Alpenstern:</strong> SEO: Blog «5 schönste Herbstwanderungen Interlaken» · SEA: Google Ads «Hotel Interlaken Bergblick», CHF 800/Mt.</div>
</div></div>

<div class="tl-item"><div class="tl-num tl-num-g">2</div>
<div class="tl-head" onclick="this.parentElement.classList.toggle('open')">
<div><div class="tl-title">E-Mail-Marketing & Automation</div>
<div class="tl-merksatz">«Permission ist Pflicht · Double-Opt-in · Automation fühlt sich persönlich an»</div></div>
<div class="tl-arrow">&#9654;</div></div>
<div class="tl-detail">
<div class="tl-body"><span class="b ba">E-Mailing</span> = einmalig · <span class="b bb">Newsletter</span> = regelmässig. <strong>Permission Pflicht!</strong> (Double-Opt-in).<br><br>
Kennzahlen: <span class="b ba">Zustell-Rate</span> · <span class="b bb">Bounce-Rate</span> · <span class="b bgreen">Öffnungs-Rate</span> · <span class="b br">CTR</span> · <span class="b ba">Click-to-Open</span><br><br>
<strong>Marketing-Automation:</strong> Willkommens-Mail, Buchungsbestätigung, Geburtstag, Zufriedenheitsumfrage, Wiederbuchung — automatisiert aber authentisch!</div>
</div></div>

<div class="tl-item"><div class="tl-num tl-num-a">3</div>
<div class="tl-head" onclick="this.parentElement.classList.toggle('open')">
<div><div class="tl-title">Social Media & Influencer Marketing</div>
<div class="tl-merksatz">«Micro-Influencer ab 1'000 Follower können wertvoller sein als Stars»</div></div>
<div class="tl-arrow">&#9654;</div></div>
<div class="tl-detail">
<div class="tl-body"><strong>Social Media:</strong> Braucht Ressourcen + Strategie. Vorteile: Reichweite, Community, gezielte Ads, günstig. Nachteile: ohne Ads kaum Reichweite, Shitstorm-Risiko, «schläft nie».<br><br>
<strong>Influencer:</strong> Auch <strong>Micro-Influencer ab 1'000 Followern</strong> wertvoll! Kriterien: <span class="b ba">Engagement-Rate</span> · <span class="b bb">Strategy Fit</span> · <span class="b bgreen">Brand Fit</span> · <span class="b br">Professionalität</span> · <span class="b ba">Follower-Demografie</span></div>
<div class="hlg"><strong>🏨 Influencer Alpenstern:</strong> Outdoor-Bloggerin, 12k Follower. 3 Reels + 5 Stories → 340 Profilbesuche, 12 Buchungsanfragen. Kosten: CHF 1'080 → ROI über 4:1!</div>
</div></div>

<div class="tl-item"><div class="tl-num tl-num-p">4</div>
<div class="tl-head" onclick="this.parentElement.classList.toggle('open')">
<div><div class="tl-title">Bewertungen & Datenschutz</div>
<div class="tl-merksatz">«Individuell antworten · Keine Fälschungen · Datenschutz = Qualitätsmerkmal»</div></div>
<div class="tl-arrow">&#9654;</div></div>
<div class="tl-detail">
<div class="tl-body"><strong>Bewertungen:</strong> Individuell antworten (nie Copy-Paste!), sachlich bei Kritik, negative NIE ignorieren, KEINE Fälschungen.<br><br>
<strong>Datenschutz (DSGVO/revDSG):</strong> Permission, Cookie-Opt-in, Double-Opt-in, Recht auf Löschung. <strong>Sauberer Datenschutz = Qualitätsmerkmal!</strong></div>
</div></div>

</div>
</div>


<!-- ===================== ÜBUNGEN ===================== -->
<div class="sec" id="marketing_ueb"><h1>Interaktive Übungen</h1><p class="sub">Wähle eine Übung und teste dein Wissen</p>

<div id="mkt_ueb_sel">
<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:12px;margin:16px 0">
<div class="c ck" onclick="mktShowUeb(1)" style="text-align:center;padding:24px 16px"><div style="font-size:18px;font-weight:700;color:var(--ac);margin-bottom:6px">A–Z</div><div class="ct2">Fachbegriffe zuordnen</div><div class="cd">20 Begriffe — Definition wählen</div></div>
<div class="c ck" onclick="mktShowUeb(2)" style="text-align:center;padding:24px 16px"><div style="font-size:18px;font-weight:700;color:var(--g);margin-bottom:6px">SWOT</div><div class="ct2">SWOT einordnen</div><div class="cd">Aussagen richtig zuordnen</div></div>
<div class="c ck" onclick="mktShowUeb(3)" style="text-align:center;padding:24px 16px"><div style="font-size:18px;font-weight:700;color:var(--pr);margin-bottom:6px">MIX</div><div class="ct2">Marketing-Mix zuordnen</div><div class="cd">Massnahmen den Ps zuordnen</div></div>
</div>
</div>

<!-- ÜBUNG 1: Fachbegriffe -->
<div id="mkt_ueb1" style="display:none">
<button onclick="mktShowUeb(0)" style="margin-bottom:16px;font-size:12px">← Zurück zur Auswahl</button>
<h2>Fachbegriffe zuordnen</h2>
<p class="sub">Wähle die richtige Definition für jeden Begriff</p>
<div id="mkt_begriffe_q"></div>
<div style="margin:16px 0"><button class="bp1" onclick="mktCheckBegriffe()">Alle korrigieren</button> <button onclick="mktResetBegriffe()" style="margin-left:8px">Zurücksetzen</button> <button onclick="mktGenBegriffe()" style="margin-left:8px">Neue Begriffe</button></div>
<div id="mkt_begriffe_result" style="margin-top:12px"></div>
</div>

<!-- ÜBUNG 2: SWOT einordnen -->
<div id="mkt_ueb2" style="display:none">
<button onclick="mktShowUeb(0)" style="margin-bottom:16px;font-size:12px">← Zurück zur Auswahl</button>
<h2>SWOT-Analyse — Richtig einordnen</h2>
<p class="sub">Hotel Alpenstern — Ordne jede Aussage der richtigen SWOT-Kategorie zu</p>
<div id="mkt_swot_q"></div>
<div style="margin:16px 0"><button class="bp1" onclick="mktCheckSwot()">Alle korrigieren</button> <button onclick="mktResetSwot()" style="margin-left:8px">Zurücksetzen</button></div>
<div id="mkt_swot_result" style="margin-top:12px"></div>
</div>

<!-- ÜBUNG 3: Marketing-Mix zuordnen -->
<div id="mkt_ueb3" style="display:none">
<button onclick="mktShowUeb(0)" style="margin-bottom:16px;font-size:12px">← Zurück zur Auswahl</button>
<h2>Marketing-Mix — Massnahmen zuordnen</h2>
<p class="sub">Ordne jede Massnahme dem richtigen P zu</p>
<div id="mkt_mix_q"></div>
<div style="margin:16px 0"><button class="bp1" onclick="mktCheckMix()">Alle korrigieren</button> <button onclick="mktResetMix()" style="margin-left:8px">Zurücksetzen</button></div>
<div id="mkt_mix_result" style="margin-top:12px"></div>
</div>

</div>

<!-- ===================== ZUSAMMENFASSUNG / MINDMAPS ===================== -->
<div class="sec" id="marketing_mind"><h1>Zusammenfassung</h1><p class="sub">Visuelle Übersichten</p>

<h2>Marketingkonzept — 6 Schritte</h2>
<div class="mm"><div class="mm-center"><div class="mm-hub" style="border-color:var(--ac);color:var(--ac);background:var(--al)">Marketing-<br>konzept</div></div>
<div class="mm-branches">
<div class="mm-branch" style="background:var(--al);border:1.5px solid var(--ac)"><h3 style="color:var(--ac)">1. Analyse</h3><ul style="color:var(--ac)"><li>Externe Analyse (Umwelt, Markt)</li><li>Interne Analyse (Stärken, Schwächen)</li><li>= SWOT-Analyse + Fazit</li></ul></div>
<div class="mm-branch" style="background:var(--gl);border:1.5px solid var(--g)"><h3 style="color:var(--g)">2. Ziele</h3><ul style="color:var(--g)"><li>6 W-Fragen</li><li>Ökonomisch + Psychologisch</li><li>Zielgruppen definieren</li></ul></div>
<div class="mm-branch" style="background:rgba(175,82,222,.08);border:1.5px solid var(--pr)"><h3 style="color:var(--pr)">3. Strategie</h3><ul style="color:var(--pr)"><li>Positionierung</li><li>Segmentierung</li><li>Differenzierung</li></ul></div>
<div class="mm-branch" style="background:rgba(255,149,0,.08);border:1.5px solid var(--am)"><h3 style="color:var(--am)">4. Mix (4 Ps)</h3><ul style="color:var(--am)"><li>Product</li><li>Price</li><li>Place</li><li>Promotion</li></ul></div>
<div class="mm-branch" style="background:rgba(0,122,255,.08);border:1.5px solid var(--bl)"><h3 style="color:var(--bl)">5. Budget</h3><ul style="color:var(--bl)"><li>Ressourcenallokation</li><li>Kostenplanung</li></ul></div>
<div class="mm-branch" style="background:rgba(255,59,48,.08);border:1.5px solid var(--r)"><h3 style="color:var(--r)">6. Kontrolle</h3><ul style="color:var(--r)"><li>KPIs messen</li><li>Soll-Ist-Vergleich</li><li>Anpassungen</li></ul></div>
</div></div>

<h2 style="margin-top:32px">AIDA-Modell</h2>
<div class="mm"><div class="mm-center"><div class="mm-hub" style="border-color:var(--g);color:var(--g);background:var(--gl)">AIDA</div></div>
<div class="mm-branches">
<div class="mm-branch" style="background:var(--al);border:1.5px solid var(--ac)"><h3 style="color:var(--ac)">Attention</h3><ul style="color:var(--ac)"><li>Aufmerksamkeit wecken</li><li>Instagram Reel, Plakat</li><li>→ Bekanntheitsgrad ↑</li></ul></div>
<div class="mm-branch" style="background:var(--gl);border:1.5px solid var(--g)"><h3 style="color:var(--g)">Interest</h3><ul style="color:var(--g)"><li>Interesse wecken</li><li>Content, Testimonials</li><li>→ Wissensaufbau</li></ul></div>
<div class="mm-branch" style="background:rgba(175,82,222,.08);border:1.5px solid var(--pr)"><h3 style="color:var(--pr)">Desire</h3><ul style="color:var(--pr)"><li>Wunsch auslösen</li><li>Website, Rabattcode, Bewertungen</li><li>→ Einstellung beeinflussen</li></ul></div>
<div class="mm-branch" style="background:rgba(255,149,0,.08);border:1.5px solid var(--am)"><h3 style="color:var(--am)">Action</h3><ul style="color:var(--am)"><li>Handlung auslösen</li><li>Buchung, Kauf</li><li>→ Verhalten beeinflussen</li></ul></div>
</div></div>

<h2 style="margin-top:32px">7 Ps für Dienstleistungen</h2>
<div class="mm"><div class="mm-center"><div class="mm-hub" style="border-color:var(--pr);color:var(--pr);background:rgba(175,82,222,.08)">7 Ps</div></div>
<div class="mm-branches">
<div class="mm-branch" style="background:var(--al);border:1.5px solid var(--ac)"><h3 style="color:var(--ac)">Product</h3><ul style="color:var(--ac)"><li>Leistungsmix (3 Ebenen)</li><li>USP, CXM</li></ul></div>
<div class="mm-branch" style="background:var(--gl);border:1.5px solid var(--g)"><h3 style="color:var(--g)">Price</h3><ul style="color:var(--g)"><li>Preisdreieck</li><li>Preispsychologie</li></ul></div>
<div class="mm-branch" style="background:rgba(0,122,255,.08);border:1.5px solid var(--bl)"><h3 style="color:var(--bl)">Place</h3><ul style="color:var(--bl)"><li>Direkt / Indirekt</li><li>Elektronisch</li></ul></div>
<div class="mm-branch" style="background:rgba(175,82,222,.08);border:1.5px solid var(--pr)"><h3 style="color:var(--pr)">Promotion</h3><ul style="color:var(--pr)"><li>8 Instrumente</li><li>Integrierte Komm.</li></ul></div>
<div class="mm-branch" style="background:rgba(255,149,0,.08);border:1.5px solid var(--am)"><h3 style="color:var(--am)">People</h3><ul style="color:var(--am)"><li>Personal = Qualitätsfaktor</li></ul></div>
<div class="mm-branch" style="background:rgba(255,59,48,.08);border:1.5px solid var(--r)"><h3 style="color:var(--r)">Process</h3><ul style="color:var(--r)"><li>Standardisierte Abläufe</li></ul></div>
<div class="mm-branch" style="background:var(--al);border:1.5px solid var(--ac)"><h3 style="color:var(--ac)">Physical Ev.</h3><ul style="color:var(--ac)"><li>Greifbare Beweise</li><li>Lobby, Menukarte, Duft</li></ul></div>
</div></div>

<h2 style="margin-top:32px">SWOT-Analyse Aufbau</h2>
<div class="mm"><div class="mm-center"><div class="mm-hub" style="border-color:var(--am);color:var(--am);background:rgba(255,149,0,.08)">SWOT</div></div>
<div class="mm-branches">
<div class="mm-branch" style="background:var(--gl);border:1.5px solid var(--g)"><h3 style="color:var(--g)">Strengths</h3><ul style="color:var(--g)"><li>Intern</li><li>Was wir gut können</li><li>Beeinflussbar</li></ul></div>
<div class="mm-branch" style="background:rgba(255,59,48,.08);border:1.5px solid var(--r)"><h3 style="color:var(--r)">Weaknesses</h3><ul style="color:var(--r)"><li>Intern</li><li>Wo Potenzial fehlt</li><li>Beeinflussbar</li></ul></div>
<div class="mm-branch" style="background:rgba(0,122,255,.08);border:1.5px solid var(--bl)"><h3 style="color:var(--bl)">Opportunities</h3><ul style="color:var(--bl)"><li>Extern</li><li>Marktchancen</li><li>Nicht kontrollierbar</li></ul></div>
<div class="mm-branch" style="background:rgba(175,82,222,.08);border:1.5px solid var(--pr)"><h3 style="color:var(--pr)">Threats</h3><ul style="color:var(--pr)"><li>Extern</li><li>Marktgefahren</li><li>Nicht kontrollierbar</li></ul></div>
</div></div>
</div>

<!-- ===================== KARTEIKARTEN ===================== -->
<div class="sec" id="marketing_kart"><h1>Karteikarten</h1><p class="sub"><span id="mkt_fcCount">0</span> Karten — klicke zum Umdrehen</p>
<div class="fcc" id="mkt_fcc"></div>
<div class="fd"><div class="fc" id="mkt_fc" onclick="this.classList.toggle('fl')"><div class="ff ffr"><div class="fq" id="mkt_fcq"></div><div class="fh">Klicke zum Umdrehen</div></div><div class="ff ffb"><div class="fa" id="mkt_fca"></div></div></div></div>
<div class="fb"><button onclick="fcPrev()">Zurück</button><button onclick="fcShuffle()">Mischen</button><button class="bp1" onclick="fcNext()">Nächste</button></div>
<div style="text-align:center;margin-top:10px;font-size:11px;color:var(--tx3)" id="mkt_fcPool"></div>
<div id="mkt_fcList" style="display:none;margin-top:16px"></div>
</div>

<!-- ===================== QUIZ ===================== -->
<div class="sec" id="marketing_quiz"><h1>Quiz</h1><p class="sub">Alle Fragen werden wiederholt bis du sie kannst</p>
<div id="mkq_Stats" style="margin-bottom:20px">
<div style="display:flex;gap:8px;margin-bottom:14px;flex-wrap:wrap">
<div class="qsc" style="flex:1;min-width:70px"><div class="qsn" id="mkq_TotR" style="color:var(--g)">0</div><div class="qsl">Total richtig</div></div>
<div class="qsc" style="flex:1;min-width:70px"><div class="qsn" id="mkq_TotW" style="color:var(--r)">0</div><div class="qsl">Total falsch</div></div>
<div class="qsc" style="flex:1;min-width:70px"><div class="qsn" id="mkq_TotP" style="color:var(--ac)">0%</div><div class="qsl">Erfolgsquote</div></div>
</div>
<div style="font-size:12px;color:var(--tx3);margin-bottom:6px">Lernerfolg</div>
<div style="display:flex;gap:4px;margin-bottom:4px;align-items:center"><div style="width:10px;height:10px;border-radius:50%;background:var(--g);flex-shrink:0"></div><div style="font-size:12px;color:var(--tx2);width:70px">Sicher</div><div style="flex:1;height:8px;background:var(--s2);border-radius:4px;overflow:hidden"><div id="mkq_BarG" style="height:100%;background:var(--g);border-radius:4px;transition:width .5s;width:0%"></div></div><div style="font-size:12px;color:var(--tx2);width:30px;text-align:right" id="mkq_BarGn">0</div></div>
<div style="display:flex;gap:4px;margin-bottom:4px;align-items:center"><div style="width:10px;height:10px;border-radius:50%;background:var(--am);flex-shrink:0"></div><div style="font-size:12px;color:var(--tx2);width:70px">Wackelig</div><div style="flex:1;height:8px;background:var(--s2);border-radius:4px;overflow:hidden"><div id="mkq_BarO" style="height:100%;background:var(--am);border-radius:4px;transition:width .5s;width:0%"></div></div><div style="font-size:12px;color:var(--tx2);width:30px;text-align:right" id="mkq_BarOn">0</div></div>
<div style="display:flex;gap:4px;margin-bottom:4px;align-items:center"><div style="width:10px;height:10px;border-radius:50%;background:var(--r);flex-shrink:0"></div><div style="font-size:12px;color:var(--tx2);width:70px">Unsicher</div><div style="flex:1;height:8px;background:var(--s2);border-radius:4px;overflow:hidden"><div id="mkq_BarR" style="height:100%;background:var(--r);border-radius:4px;transition:width .5s;width:0%"></div></div><div style="font-size:12px;color:var(--tx2);width:30px;text-align:right" id="mkq_BarRn">0</div></div>
<div style="display:flex;gap:4px;align-items:center"><div style="width:10px;height:10px;border-radius:50%;background:var(--tx3);flex-shrink:0"></div><div style="font-size:12px;color:var(--tx2);width:70px">Noch offen</div><div style="flex:1;height:8px;background:var(--s2);border-radius:4px;overflow:hidden"><div id="mkq_BarX" style="height:100%;background:var(--tx3);border-radius:4px;transition:width .5s;width:100%"></div></div><div style="font-size:12px;color:var(--tx2);width:30px;text-align:right" id="mkq_BarXn">0</div></div>
</div>
<div class="pb"><div class="pf" id="mkq_P"></div></div><div class="pt" id="mkq_PT">Frage 1</div>
<div id="mkq_C"></div>
<div style="text-align:center;margin-top:14px">
<button class="bp1" id="mkq_N" onclick="mkqNx()" style="display:none">Nächste Frage</button>
<button class="bp1" id="mkq_RS" onclick="mkqSt()" style="display:none">Weiter üben</button>
<button id="mkq_Reset" onclick="mkqReset()" style="display:none;margin-left:8px">Fortschritt zurücksetzen</button>
</div>
</div>

<!-- ===================== GLOSSAR ===================== -->
<div class="sec" id="marketing_glossar"><h1>Glossar</h1><p class="sub">Begriffe & Definitionen — Operatives Marketing</p>

<h2>Marketing-Grundbegriffe</h2>
<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:8px">
<div class="c" style="padding:12px 16px"><strong style="color:var(--ac)">Marketing</strong> <span style="color:var(--tx2)">— Gezielte Ausrichtung aller Unternehmensaktivitäten an Marktbedürfnissen</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--ac)">Bedürfnis</strong> <span style="color:var(--tx2)">— Ausdruck eines Mangels an Zufriedenstellung (in der Natur verankert)</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--ac)">Wunsch</strong> <span style="color:var(--tx2)">— Konkretes Verlangen nach Befriedigung eines Bedürfnisses</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--ac)">Markt</strong> <span style="color:var(--tx2)">— Wirtschaftlicher Ort, wo Anbieter und Nachfrager aufeinandertreffen</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--ac)">CRM</strong> <span style="color:var(--tx2)">— Customer Relationship Management (Kundenpflege-Strategie)</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--ac)">PMS</strong> <span style="color:var(--tx2)">— Property Management System (operativer Hotelbetrieb)</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--ac)">USP</strong> <span style="color:var(--tx2)">— Unique Selling Proposition (Alleinstellungsmerkmal)</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--ac)">UCP</strong> <span style="color:var(--tx2)">— Unique Communication Proposition (kommunikative Alleinstellung)</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--ac)">CXM</strong> <span style="color:var(--tx2)">— Customer Experience Management (Gestaltung aller Kontaktpunkte)</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--ac)">CI</strong> <span style="color:var(--tx2)">— Corporate Identity (einheitliches Unternehmensbild)</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--ac)">CD</strong> <span style="color:var(--tx2)">— Corporate Design (visuelles Erscheinungsbild: Logo, Farben, Schriften)</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--ac)">CC</strong> <span style="color:var(--tx2)">— Corporate Communication (einheitliche Unternehmenskommunikation)</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--ac)">CB</strong> <span style="color:var(--tx2)">— Corporate Behaviour (einheitliches Unternehmensverhalten)</span></div>
</div>

<h2 style="margin-top:24px">Marketing-Mix & Instrumente</h2>
<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:8px">
<div class="c" style="padding:12px 16px"><strong style="color:var(--g)">SWOT</strong> <span style="color:var(--tx2)">— Strengths, Weaknesses, Opportunities, Threats (Analyse-Tool)</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--g)">AIDA</strong> <span style="color:var(--tx2)">— Attention, Interest, Desire, Action (Wirkungsstufenmodell)</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--g)">4 Ps</strong> <span style="color:var(--tx2)">— Product, Price, Place, Promotion (klassischer Marketing-Mix)</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--g)">7 Ps</strong> <span style="color:var(--tx2)">— 4 Ps + People, Process, Physical Evidence (erweiterter Mix)</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--g)">Marktsegmentierung</strong> <span style="color:var(--tx2)">— Aufteilung des Gesamtmarktes in homogene Kaufgruppen</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--g)">Positionierung</strong> <span style="color:var(--tx2)">— Wie sich die Marke in den Köpfen der Kund:innen von Konkurrenz abhebt</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--g)">Positionierungskreuz</strong> <span style="color:var(--tx2)">— 2 Achsen mit polaren Kriterien zur Visualisierung der Positionierung</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--g)">Integrierte Kommunikation</strong> <span style="color:var(--tx2)">— Systematische Abstimmung aller Massnahmen (inhaltlich, sprachlich, zeitlich, formal, instrumentell)</span></div>
</div>

<h2 style="margin-top:24px">Preispolitik</h2>
<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:8px">
<div class="c" style="padding:12px 16px"><strong style="color:var(--pr)">Preiselastizität</strong> <span style="color:var(--tx2)">— Wie stark die Nachfrage auf Preisänderungen reagiert</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--pr)">Break-even-Point</strong> <span style="color:var(--tx2)">— Punkt, wo Erlöse = Kosten (Nullergebnis)</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--pr)">Preisbündelung</strong> <span style="color:var(--tx2)">— Produkte als Paket zu Vorteilspreis verkaufen</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--pr)">Decoy-Effekt</strong> <span style="color:var(--tx2)">— Köder-Option macht eine andere attraktiver</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--pr)">Anker-Effekt</strong> <span style="color:var(--tx2)">— Erster Preis «verankert» sich im Kopf und beeinflusst Folgebewertungen</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--pr)">Yield Management</strong> <span style="color:var(--tx2)">— Dynamische Preisgestaltung basierend auf Nachfrage und Auslastung</span></div>
</div>

<h2 style="margin-top:24px">Distribution & Online</h2>
<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:8px">
<div class="c" style="padding:12px 16px"><strong style="color:var(--bl)">OTA</strong> <span style="color:var(--tx2)">— Online Travel Agency (z.B. Booking.com, Expedia)</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--bl)">GDS</strong> <span style="color:var(--tx2)">— Global Distribution System (Amadeus, Sabre, Travelport)</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--bl)">SEO</strong> <span style="color:var(--tx2)">— Search Engine Optimization (organische Suchmaschinenoptimierung)</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--bl)">SEA</strong> <span style="color:var(--tx2)">— Search Engine Advertising (bezahlte Suchmaschinenwerbung)</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--bl)">SEM</strong> <span style="color:var(--tx2)">— Search Engine Marketing (= SEO + SEA)</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--bl)">CPC</strong> <span style="color:var(--tx2)">— Cost per Click (Kosten pro Klick bei Online-Werbung)</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--bl)">CTR</strong> <span style="color:var(--tx2)">— Click-Through-Rate (Klickrate)</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--bl)">TKP</strong> <span style="color:var(--tx2)">— Tausend-Kontakt-Preis (Kosten pro 1000 Kontakte)</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--bl)">CPM</strong> <span style="color:var(--tx2)">— Cost per Mille (= TKP auf Englisch)</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--bl)">Conversion Rate</strong> <span style="color:var(--tx2)">— % der Website-Besucher die eine Aktion ausführen (Hotels ~2%)</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--bl)">Double-Opt-in</strong> <span style="color:var(--tx2)">— Newsletter-Anmeldung mit Bestätigungs-E-Mail (Pflicht!)</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--bl)">Omnichannel</strong> <span style="color:var(--tx2)">— Alle Kanäle vernetzt und einheitlich (≠ Multichannel)</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--bl)">Franchise</strong> <span style="color:var(--tx2)">— Höchste Bindungsform: Betriebskonzept übernehmen nach Regeln des Gebers</span></div>
</div>

<h2 style="margin-top:24px">Rollen & Abkürzungen</h2>
<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:8px">
<div class="c" style="padding:12px 16px"><strong style="color:var(--am)">DOSM</strong> <span style="color:var(--tx2)">— Director of Sales & Marketing (Strategie + Budget)</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--am)">DOM</strong> <span style="color:var(--tx2)">— Director of Marketing (operative Marketing-Umsetzung)</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--am)">DOS</strong> <span style="color:var(--tx2)">— Director of Sales (Vertriebsstrategie)</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--am)">DSGVO</strong> <span style="color:var(--tx2)">— Datenschutz-Grundverordnung (EU-Datenschutzrecht)</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--am)">revDSG</strong> <span style="color:var(--tx2)">— Revidiertes Datenschutzgesetz Schweiz</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--am)">PR</strong> <span style="color:var(--tx2)">— Public Relations (Öffentlichkeitsarbeit)</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--am)">VKF</strong> <span style="color:var(--tx2)">— Verkaufsförderung (kurzfristige Anreize)</span></div>
</div>
</div>

`;

// ==========================================
// 3. KARTEIKARTEN
// ==========================================
const MKT_CARDS = [
  ['Was ist Marketing?', 'Die gezielte und zielgruppenorientierte Ausrichtung der Unternehmensaktivitäten an den Bedürfnissen des Marktes. Eine Denkhaltung, nicht nur Werbung.'],
  ['Was ist der Unterschied zwischen Bedürfnis und Wunsch?', 'Bedürfnis = Ausdruck eines Mangels (in der Natur verankert: Hunger, Erholung). Wunsch = konkretes Verlangen nach Befriedigung (z.B. Hotel Alpenstern buchen).'],
  ['Was bedeutet marktgerecht und marktgerichtet?', 'Marktgerecht = bedürfnisgerechte Leistungen erbringen. Marktgerichtet = ständiger Anpassungsprozess an Marktveränderungen.'],
  ['Welche 5 historischen Phasen hat das Marketing durchlaufen?', '1. Produktionsorientierung → 2. Verkaufsorientierung → 3. Marktorientierung → 4. Umweltorientierung → 5. CRM (Kundenbindung).'],
  ['Was ist CRM und was sind die Ziele?', 'Customer Relationship Management = systematischer Aufbau und Pflege von Kundenbeziehungen. Ziele: Loyalität fördern, durch Empfehlungen Neukunden gewinnen, beste Kund:innen binden.'],
  ['Was ist der Unterschied zwischen CRM und PMS?', 'PMS = operativ (Check-in, Zimmer, Rechnungen). CRM = strategisch (Gästebeziehung, Marketing, Kommunikation vor/während/nach Aufenthalt). Ergänzen sich!'],
  ['Welche 3 Grundformen des Marketings gibt es?', 'Konsumgüter-Marketing (Endverbraucher), Investitionsgüter-Marketing (B2B), Dienstleistungs-Marketing (immateriell, nicht lagerfähig). Hotellerie = hauptsächlich DL-Marketing.'],
  ['Was gehört alles zur Corporate Identity (CI)?', 'CD (Corporate Design: Logo, Farben, Schriften), CC (Corporate Communication: einheitliche Kommunikation), CB (Corporate Behaviour: Verhalten muss zu Kommunikation passen).'],
  ['Aus welchen 6 Schritten besteht ein Marketingkonzept?', '1. Analyse (SWOT) → 2. Ziele (6 W-Fragen) → 3. Strategie (Positionierung) → 4. Marketing-Mix (4 Ps) → 5. Budget → 6. Kontrolle.'],
  ['Was ist eine SWOT-Analyse?', 'Strengths + Weaknesses (intern, beeinflussbar) + Opportunities + Threats (extern, nicht kontrollierbar). Aussagen auf belegbare Quellen stützen! Fazit = wichtigster Teil.'],
  ['Welche Segmentierungskriterien gibt es?', 'Demografisch (Alter, Einkommen), Geografisch (Region, Stadt/Land), Psychografisch (Lebensstil, Werte), Verhaltensbezogen (Kaufmotive, Markentreue, Medienkonsum).'],
  ['Was sind die 4 Ps des Marketing-Mix?', 'Product (Leistungsmix), Price (Preisfestlegung), Place (Distribution), Promotion (Kommunikation). Alle Ps müssen aufeinander abgestimmt sein!'],
  ['Was sind die zusätzlichen 3 Ps im erweiterten Mix?', 'People (Personal = Qualitätsfaktor), Process (standardisierte Abläufe), Physical Evidence (greifbare Beweise: Lobby, Menukarte, Duft).'],
  ['Was sind die 3 Ebenen des Leistungsmix?', 'Kernprodukt (Grundnutzen), Formales Produkt (konkrete Ausgestaltung: Marke, Design, Qualität), Erweitertes Produkt (emotionale Mehrwerte: persönlicher Service, CRM, After-Sales).'],
  ['Was ist ein USP?', 'Unique Selling Proposition = Alleinstellungsmerkmal. Klarer, differenzierender Vorteil gegenüber Wettbewerbern. Kann auf allen 3 Ebenen des Leistungsmix liegen.'],
  ['Welche 5 Phasen hat der Produktlebenszyklus?', 'Einführung (geringe Nachfrage) → Wachstum (schnell steigend) → Reife (Maximum) → Sättigung (rückläufig) → Rückgang (stark abfallend). Jede Phase braucht andere Massnahmen!'],
  ['Wie formuliert man Marketingziele? (6 W-Fragen)', 'WAS (Zielinhalt) · WIE VIEL (Zielausmass) · WEM (Zielsegment) · WO (Zielgebiet) · WANN (Zielperiode) · WER (Verantwortliche:r). Gilt für alle 4 Ps!'],
  ['Was ist CXM?', 'Customer Experience Management = geplante und gezielte Gestaltung aller Kontaktpunkte (vor/während/nach Aufenthalt). Erlebnis schlägt Rabatt!'],
  ['Was sind die 3 Faktoren des Preisdreiecks?', '1. Kostenorientierung (Fixe + variable Kosten = Preisuntergrenze), 2. Konkurrenzorientierung (Was verlangen Mitbewerber?), 3. Nachfrageorientierung (Was zahlt der Gast?).'],
  ['Was ist Preiselastizität?', 'Elastisch = Nachfrage reagiert stark auf Preisänderungen (z.B. Hotel im November). Unelastisch = Nachfrage bleibt gleich (z.B. Silvester in Zermatt — Gäste können nicht ausweichen).'],
  ['Nenne 6 Instrumente der Preispsychologie.', '1. Preisbündelung (Paketpreis), 2. Gebrochene Preise (189 statt 190), 3. Decoy-Effekt (Köder-Option), 4. Anker-Effekt (teuerste Option zuerst zeigen), 5. Künstliche Verknappung, 6. Signalartikel.'],
  ['Was ist der Unterschied zwischen strategischer und taktischer Preispolitik?', 'Strategisch = mittel-/langfristig, Positionierung (Hoch/Mittel/Niedrigpreis). Taktisch = kurzfristig, Auslastung beeinflussen (Last-Minute, Frühbucher, Yield Management).'],
  ['Was sind Vorteile/Nachteile der direkten Distribution?', 'Vorteile: Volle Kontrolle, keine Provisionen, direkter Gästekontakt, eigene Daten. Nachteile: begrenzte Reichweite, hoher Aufwand, geschultes Personal nötig.'],
  ['Was sind Vorteile/Nachteile der indirekten Distribution?', 'Vorteile: weltweite Reichweite, neue Märkte. Nachteile: 15–25% Kommissionen, Kontrollverlust, kurzfristige Storni, Tiefpreis-Garantie.'],
  ['Erkläre das Kommunikationsmodell nach Shannon/Weaver.', 'Sender (Unternehmen) → Codierung (Wort/Bild/Ton) → Kanal (Instagram/Print) → Decodierung → Empfänger (Zielgruppe) → Feedback (Buchung). Wenn Codierung ≠ Decodierung → Kommunikationsstörung!'],
  ['Was ist das AIDA-Modell?', 'Attention (Aufmerksamkeit wecken) → Interest (Interesse wecken) → Desire (Wunsch auslösen) → Action (Handlung auslösen). Oft braucht es verschiedene Massnahmen für verschiedene Stufen!'],
  ['Nenne die 8 Instrumente des Kommunikationsmix.', '1. Werbung, 2. Persönlicher Verkauf, 3. Verkaufsförderung, 4. Public Relations, 5. Sponsoring, 6. Product Placement, 7. Event-Marketing, 8. Direct Marketing.'],
  ['Was ist integrierte Kommunikation?', 'Systematische Abstimmung aller Kommunikationsmassnahmen auf 5 Ebenen: inhaltlich, sprachlich, zeitlich, formal (CD), instrumentell. «Das Ganze ist mehr als die Summe seiner Teile.»'],
  ['Was sind die Anforderungen an eine Positionierung?', 'Relevant (für Kund:innen), konzentriert (wenige Merkmale), klar abgegrenzt (von Konkurrenz), zukunftsorientiert, flexibel, operationalisierbar (in Botschaften übersetzbar).'],
  ['Was gehört zur Hauptbotschaft?', 'Hauptbotschaft (Slogan) + Nebenbotschaft + USP + UCP + Consumer Benefit (Nutzen für Gast) + Reason Why (Beweis) + Tonalität (sachlich, emotional, witzig...).'],
  ['Was ist der Unterschied zwischen Omnichannel und Multichannel?', 'Omnichannel = alle Kanäle vernetzt, reibungsloser Wechsel, einheitliches Erlebnis. Multichannel = mehrere Kanäle nebeneinander, evtl. widersprüchlich.'],
  ['Was sind die 3 Funktionen einer Website?', 'Point of Information (Infos zeigen), Point of Interaction (Chat, Kontakt), Point of Sale (direkt buchen). Conversion Rate Hotels: ~2%.'],
  ['Was ist der Unterschied zwischen SEO und SEA?', 'SEO = Suchmaschinenoptimierung (organisch, unbezahlt, nie abgeschlossen). SEA = Suchmaschinenwerbung (bezahlt, CPC-Modell, Google Ads). Zusammen = SEM.'],
  ['Was ist Marketing-Automation?', 'Automatisierte, aber persönlich wirkende Marketingprozesse: Willkommens-Mail, Buchungsbestätigung, Geburtstag, Zufriedenheitsumfrage, Wiederbuchung. Voraussetzung: CRM + saubere Daten.'],
  ['Worauf achten bei der Influencer-Auswahl?', 'Engagement-Rate, Strategy Fit, Brand Fit, Professionalität, Follower-Demografie, richtiger Kanal. Auch Micro-Influencer (ab 1000 Follower) können sehr wertvoll sein!'],
  ['Was sind die Grundsätze der Krisenkommunikation?', 'Sachlich bleiben, Fehler offen zugeben, intern VOR extern kommunizieren, nicht emotional reagieren, Kanäle definieren, Vorbereitung ist alles!'],
  ['Was ist ein Briefing?', 'Grundlage für Agentur-Zusammenarbeit. Enthält: Projektbeschreibung, gewünschte Leistungen, Zielgruppe, Kommunikationsziel, Budget, Zeitplan, Entscheidungsperson, Kontaktperson.'],
  ['Was ist ein Franchise?', 'Kooperationsform mit höchster Bindungsintensität. Franchise-Nehmer übernimmt Betriebskonzept, muss es nach Spielregeln des Gebers betreiben. Bsp: McDonalds, Starbucks.'],
  ['Was bedeutet DSGVO/revDSG für das Marketing?', 'Permission-Marketing: Gäste müssen einwilligen, Tracking-Cookies nur mit Opt-in, Newsletter nur mit Double-Opt-in, Recht auf Löschung. Sauberer Datenschutz = Qualitätsmerkmal!'],
  ['Was ist Storytelling im Marketing?', 'Geschichten bleiben länger im Kopf als Fakten. Spannungsbogen: packender Einstieg → Orientierung/Fakten → Konflikt/Wende → Höhepunkt → Fazit/Ausblick.'],
];

// ==========================================
// 4. REGISTRIERUNG
// ==========================================
window.TIS = window.TIS || {};
window.TIS.courses = window.TIS.courses || {};
window.TIS.courses.marketing = {
  config: courseConfig,
  html: courseHTML,
  flashcards: MKT_CARDS,
};

// ==========================================
// 5. ÜBUNGS-DATEN
// ==========================================

// Fachbegriffe-Pool: [Begriff, richtige Definition]
const MKT_BEGRIFFE = [
  ['CRM','Systematischer Aufbau und Pflege von Kundenbeziehungen'],
  ['PMS','Operatives System für den täglichen Hotelbetrieb (Check-in, Zimmer, Rechnungen)'],
  ['USP','Einzigartiges Alleinstellungsmerkmal gegenüber Wettbewerbern'],
  ['UCP','Einzigartigkeit durch kommunikative Alleinstellung'],
  ['CXM','Gezielte Gestaltung aller Kontaktpunkte für positives Markenerlebnis'],
  ['Corporate Design','Visuelles Erscheinungsbild: Logo, Farben, Schriften, Bildsprache'],
  ['Corporate Communication','Einheitliche Kommunikation mit internen und externen Anspruchsgruppen'],
  ['Corporate Behaviour','Umsetzung der Unternehmensgrundsätze in konkretes Verhalten'],
  ['SWOT-Analyse','Kombination aus interner Analyse (S/W) und externer Analyse (O/T)'],
  ['AIDA-Modell','Wirkungsstufen: Attention → Interest → Desire → Action'],
  ['Marketing-Mix','Optimale Kombination der Marketinginstrumente (4 Ps)'],
  ['Marktsegmentierung','Aufteilung des Gesamtmarktes in homogene Kaufgruppen'],
  ['Positionierung','Wie sich die Marke in den Köpfen der Kund:innen von der Konkurrenz abhebt'],
  ['Preiselastizität','Wie stark die Nachfrage auf Preisänderungen reagiert'],
  ['Preisbündelung','Mehrere Leistungen als Paket zu einem Vorteilspreis verkaufen'],
  ['Decoy-Effekt','Köder-Option, die eine andere Option attraktiver macht'],
  ['Anker-Effekt','Erster wahrgenommener Preis beeinflusst alle Folgebewertungen'],
  ['Conversion Rate','Prozentsatz der Website-Besucher, die eine gewünschte Aktion ausführen'],
  ['Double-Opt-in','Zweistufige Newsletter-Anmeldung mit Bestätigungs-E-Mail'],
  ['Omnichannel','Alle Kanäle vernetzt mit einheitlichem, reibungslosem Erlebnis'],
  ['SEO','Organische Suchmaschinenoptimierung (unbezahlt, nie abgeschlossen)'],
  ['SEA','Bezahlte Suchmaschinenwerbung (z.B. Google Ads, CPC-Modell)'],
  ['OTA','Online-Reisebüro wie Booking.com oder Expedia (indirekte Distribution)'],
  ['Franchise','Betriebskonzept nach Spielregeln des Gebers übernehmen und betreiben'],
  ['Integrierte Kommunikation','Systematische Abstimmung aller Massnahmen auf 5 Ebenen'],
  ['Kernprodukt','Grundlegender Nutzen — das, was der Gast eigentlich kauft'],
  ['Erweitertes Produkt','Zusätzliche emotionale Mehrwerte über die Standardleistung hinaus'],
  ['Physical Evidence','Greifbare Elemente, die ein Konzept widerspiegeln und festigen'],
  ['Yield Management','Dynamische Preisgestaltung basierend auf Nachfrage und Auslastung'],
  ['Consumer Benefit','Hauptnutzen für die Kundschaft — wie profitiert der Gast?'],
  ['Reason Why','Beweisführung für das Versprechen der Hauptbotschaft'],
  ['Storytelling','Emotionale Geschichten erzählen, die länger im Kopf bleiben als Fakten'],
  ['Marktforschung','Systematische Gewinnung und Verarbeitung von Marktinformationen'],
  ['Primärmarktforschung','Eigens konzipierte Erhebung für eine bestimmte Problemstellung'],
  ['Sekundärmarktforschung','Nutzung bereits vorhandener Informationen (Desk Research)'],
  ['Break-even-Point','Punkt, wo Erlöse genau die Gesamtkosten decken (Nullergebnis)'],
  ['Verkaufsförderung','Kurzfristige, zeitlich begrenzte Anreize zur Absatzsteigerung'],
  ['Direct Marketing','Gezielte Einzelansprache für direkten Kontakt und Dialog'],
  ['Marketing-Automation','Automatisierte aber persönlich wirkende Marketingprozesse'],
  ['Briefing','Präzise Projektbeschreibung als Grundlage für Agentur-Zusammenarbeit'],
];

// SWOT-Übung: [Aussage, richtige Kategorie: S/W/O/T]
const MKT_SWOT = [
  ['Das Hotel hat einen einzigartigen Panoramablick auf Eiger, Mönch und Jungfrau','S'],
  ['Die Website ist nicht mobiloptimiert — 72% Absprungrate auf Smartphones','W'],
  ['Der Trend zu naturnahem Tourismus wächst laut Schweiz Tourismus um 18%','O'],
  ['Der starke Schweizer Franken macht die Schweiz für EU-Touristen teurer','T'],
  ['Das Hotel wird seit 3 Generationen inhabergeführt — persönlich und flexibel','S'],
  ['Es fehlt ein professionelles CRM-System — Gästedaten nur in Excel','W'],
  ['Die Jungfrau Region investiert in neue Wanderwege und Infrastruktur','O'],
  ['Fachkräftemangel in der Hotellerie — gutes Personal schwer zu finden','T'],
  ['35% der Gäste sind Stammgäste — stabile Einnahmebasis','S'],
  ['Der Spa-Bereich ist klein und veraltet','W'],
  ['Günstige digitale Tools für CRM und Marketing-Automation werden verfügbar','O'],
  ['Airbnb-Wachstum in der Region — alternative Unterkünfte nehmen zu','T'],
  ['Die regionale Bio-Küche mit lokalen Produzenten passt zum Nachhaltigkeitstrend','S'],
  ['Nur 25% Direktbuchungen — hohe Abhängigkeit von OTAs mit 15–25% Kommission','W'],
  ['Der Workation-Trend eröffnet eine neue potenzielle Zielgruppe','O'],
  ['Steigende Energiekosten belasten die Marge besonders bei älteren Gebäuden','T'],
];

// Mix-Übung: [Massnahme, richtiges P: product/price/place/promotion]
const MKT_MIX = [
  ['Neues «Alpine Wellness Weekend» Package entwickeln','product'],
  ['CHF 580 pro Paar als Mittelpreis festlegen','price'],
  ['Direktbuchungsanteil über eigene Website steigern','place'],
  ['Instagram-Kampagne mit Micro-Influencern starten','promotion'],
  ['Bio-Frühstück mit lokalen Alpkäse-Produzenten anbieten','product'],
  ['Frühbucher-Rabatt von 15% einführen','price'],
  ['Hotel auf Booking.com mit 30% Kontingent listen','place'],
  ['Medienmitteilung über neuen Spa-Bereich versenden','promotion'],
  ['Handgeschriebene Willkommenskarte auf dem Zimmer platzieren','product'],
  ['«3 Nächte bleiben, 2 bezahlen» Aktion in der Nebensaison','price'],
  ['Partnerschaft mit Schweiz Tourismus für internationale Märkte','place'],
  ['Monatlichen E-Newsletter an 2000 Abonnenten versenden','promotion'],
  ['Kräutersauna und Panorama-Ruheraum im Spa renovieren','product'],
  ['Suite für CHF 450 als Anker-Preis auf der Website zuerst zeigen','price'],
  ['Reisebüros in Süddeutschland als Vertriebspartner gewinnen','place'],
  ['Full Moon Dinner auf der Panoramaterrasse als Event organisieren','promotion'],
  ['Follow-up-E-Mail mit Fotos 3 Tage nach Abreise senden','product'],
  ['Gebrochene Preise verwenden: CHF 189 statt 190','price'],
  ['«Book direct = gratis Willkommens-Apéro» auf der Website bewerben','place'],
  ['Google Ads Kampagne für «Hotel Interlaken Bergblick» schalten','promotion'],
];

// ==========================================
// 6. ÜBUNGS-FUNKTIONEN
// ==========================================
setTimeout(function() {

  // --- ÜBUNG 1: Fachbegriffe ---
  window.mktGenBegriffe = function() {
    var pool = MKT_BEGRIFFE.slice().sort(function(){return Math.random()-.5;}).slice(0,12);
    window._mktBegriffeActive = pool;
    var allDefs = MKT_BEGRIFFE.map(function(b){return b[1];}).sort(function(){return Math.random()-.5;});
    var h = '';
    pool.forEach(function(b, i) {
      var opts = [b[1]];
      var others = allDefs.filter(function(d){return d!==b[1];}).sort(function(){return Math.random()-.5;}).slice(0,3);
      opts = opts.concat(others).sort(function(){return Math.random()-.5;});
      h += '<div class="c" style="padding:14px 16px;margin-bottom:8px" id="mkt_bg_'+i+'">';
      h += '<p style="margin-bottom:8px"><strong>'+(i+1)+'. '+b[0]+'</strong></p>';
      h += '<div style="display:flex;flex-direction:column;gap:4px">';
      opts.forEach(function(o, j) {
        h += '<label style="cursor:pointer;font-size:13px;padding:6px 10px;border-radius:8px;border:1px solid var(--bd);display:block;transition:all .2s" onmouseover="this.style.borderColor=\'var(--ac)\'" onmouseout="this.style.borderColor=\'var(--bd)\'">';
        h += '<input type="radio" name="mkt_bg_'+i+'" value="'+j+'" data-def="'+o.replace(/"/g,'&quot;')+'"> '+o+'</label>';
      });
      h += '</div>';
      h += '<div id="mkt_bg_fb_'+i+'" style="margin-top:6px;display:none"></div>';
      h += '</div>';
    });
    var el = document.getElementById('mkt_begriffe_q');
    if(el) el.innerHTML = h;
    var r = document.getElementById('mkt_begriffe_result');
    if(r) r.innerHTML = '';
  };

  window.mktCheckBegriffe = function() {
    var pool = window._mktBegriffeActive;
    if(!pool) return;
    var correct = 0;
    pool.forEach(function(b, i) {
      var sel = document.querySelector('input[name="mkt_bg_'+i+'"]:checked');
      var fb = document.getElementById('mkt_bg_fb_'+i);
      var card = document.getElementById('mkt_bg_'+i);
      if(!fb || !card) return;
      fb.style.display = 'block';
      if(sel && sel.dataset.def === b[1]) {
        card.style.borderLeft = '3px solid var(--g)';
        fb.innerHTML = '<div style="color:var(--g);font-size:12px">✓ Richtig!</div>';
        correct++;
      } else {
        card.style.borderLeft = '3px solid var(--r)';
        fb.innerHTML = '<div style="color:var(--r);font-size:12px">✗ Falsch</div><div style="font-size:12px;color:var(--tx2);margin-top:2px">Richtig: '+b[1]+'</div>';
      }
    });
    var r = document.getElementById('mkt_begriffe_result');
    if(r) r.innerHTML = '<div class="'+(correct===pool.length?'hlg':'hla')+'">'+correct+' von '+pool.length+' richtig</div>';
  };

  window.mktResetBegriffe = function() {
    mktGenBegriffe();
  };

  // --- ÜBUNG 2: SWOT einordnen ---
  function buildSwot() {
    var pool = MKT_SWOT.slice().sort(function(){return Math.random()-.5;});
    window._mktSwotActive = pool;
    var h = '';
    pool.forEach(function(q, i) {
      h += '<div class="c" style="padding:14px 16px;margin-bottom:8px" id="mkt_sw_'+i+'">';
      h += '<p style="margin-bottom:8px"><strong>'+(i+1)+'.</strong> '+q[0]+'</p>';
      h += '<div style="display:flex;gap:8px;flex-wrap:wrap">';
      h += '<label style="cursor:pointer;font-size:13px"><input type="radio" name="mkt_sw_'+i+'" value="S"> Stärke (intern)</label>';
      h += '<label style="cursor:pointer;font-size:13px"><input type="radio" name="mkt_sw_'+i+'" value="W"> Schwäche (intern)</label>';
      h += '<label style="cursor:pointer;font-size:13px"><input type="radio" name="mkt_sw_'+i+'" value="O"> Chance (extern)</label>';
      h += '<label style="cursor:pointer;font-size:13px"><input type="radio" name="mkt_sw_'+i+'" value="T"> Gefahr (extern)</label>';
      h += '</div>';
      h += '<div id="mkt_sw_fb_'+i+'" style="margin-top:6px;display:none"></div>';
      h += '</div>';
    });
    var el = document.getElementById('mkt_swot_q');
    if(el) el.innerHTML = h;
  }
  buildSwot();

  window.mktCheckSwot = function() {
    var pool = window._mktSwotActive;
    if(!pool) return;
    var correct = 0;
    var labels = {S:'Stärke (intern)',W:'Schwäche (intern)',O:'Chance (extern)',T:'Gefahr (extern)'};
    pool.forEach(function(q, i) {
      var sel = document.querySelector('input[name="mkt_sw_'+i+'"]:checked');
      var fb = document.getElementById('mkt_sw_fb_'+i);
      var card = document.getElementById('mkt_sw_'+i);
      if(!fb || !card) return;
      fb.style.display = 'block';
      if(sel && sel.value === q[1]) {
        card.style.borderLeft = '3px solid var(--g)';
        fb.innerHTML = '<div style="color:var(--g);font-size:12px">✓ Richtig — '+labels[q[1]]+'</div>';
        correct++;
      } else {
        card.style.borderLeft = '3px solid var(--r)';
        fb.innerHTML = '<div style="color:var(--r);font-size:12px">✗ Falsch</div><div style="font-size:12px;color:var(--tx2);margin-top:2px">Richtig: <strong>'+labels[q[1]]+'</strong></div>';
      }
    });
    var r = document.getElementById('mkt_swot_result');
    if(r) r.innerHTML = '<div class="'+(correct===pool.length?'hlg':'hla')+'">'+correct+' von '+pool.length+' richtig</div>';
  };

  window.mktResetSwot = function() {
    buildSwot();
    var r = document.getElementById('mkt_swot_result');
    if(r) r.innerHTML = '';
  };

  // --- ÜBUNG 3: Marketing-Mix zuordnen ---
  function buildMix() {
    var pool = MKT_MIX.slice().sort(function(){return Math.random()-.5;}).slice(0,12);
    window._mktMixActive = pool;
    var h = '';
    pool.forEach(function(q, i) {
      h += '<div class="c" style="padding:14px 16px;margin-bottom:8px" id="mkt_mx_'+i+'">';
      h += '<p style="margin-bottom:8px"><strong>'+(i+1)+'.</strong> '+q[0]+'</p>';
      h += '<div style="display:flex;gap:8px;flex-wrap:wrap">';
      h += '<label style="cursor:pointer;font-size:13px"><input type="radio" name="mkt_mx_'+i+'" value="product"> Product</label>';
      h += '<label style="cursor:pointer;font-size:13px"><input type="radio" name="mkt_mx_'+i+'" value="price"> Price</label>';
      h += '<label style="cursor:pointer;font-size:13px"><input type="radio" name="mkt_mx_'+i+'" value="place"> Place</label>';
      h += '<label style="cursor:pointer;font-size:13px"><input type="radio" name="mkt_mx_'+i+'" value="promotion"> Promotion</label>';
      h += '</div>';
      h += '<div id="mkt_mx_fb_'+i+'" style="margin-top:6px;display:none"></div>';
      h += '</div>';
    });
    var el = document.getElementById('mkt_mix_q');
    if(el) el.innerHTML = h;
  }
  buildMix();

  window.mktCheckMix = function() {
    var pool = window._mktMixActive;
    if(!pool) return;
    var correct = 0;
    var labels = {product:'Product',price:'Price',place:'Place',promotion:'Promotion'};
    pool.forEach(function(q, i) {
      var sel = document.querySelector('input[name="mkt_mx_'+i+'"]:checked');
      var fb = document.getElementById('mkt_mx_fb_'+i);
      var card = document.getElementById('mkt_mx_'+i);
      if(!fb || !card) return;
      fb.style.display = 'block';
      if(sel && sel.value === q[1]) {
        card.style.borderLeft = '3px solid var(--g)';
        fb.innerHTML = '<div style="color:var(--g);font-size:12px">✓ Richtig — P '+labels[q[1]]+'</div>';
        correct++;
      } else {
        card.style.borderLeft = '3px solid var(--r)';
        fb.innerHTML = '<div style="color:var(--r);font-size:12px">✗ Falsch</div><div style="font-size:12px;color:var(--tx2);margin-top:2px">Richtig: <strong>P '+labels[q[1]]+'</strong></div>';
      }
    });
    var r = document.getElementById('mkt_mix_result');
    if(r) r.innerHTML = '<div class="'+(correct===pool.length?'hlg':'hla')+'">'+correct+' von '+pool.length+' richtig</div>';
  };

  window.mktResetMix = function() {
    buildMix();
    var r = document.getElementById('mkt_mix_result');
    if(r) r.innerHTML = '';
  };

  // --- Navigation ---
  window.mktShowUeb = function(n) {
    ['mkt_ueb_sel','mkt_ueb1','mkt_ueb2','mkt_ueb3'].forEach(function(id) {
      var el = document.getElementById(id);
      if(el) el.style.display = 'none';
    });
    if(n === 0) { document.getElementById('mkt_ueb_sel').style.display = 'block'; }
    else {
      document.getElementById('mkt_ueb'+n).style.display = 'block';
      if(n === 1) mktGenBegriffe();
    }
  };

}, 600);

})();
