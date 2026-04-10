// ===== KURS: HRM 2 — Human Resources Management =====
// Auto-generated module for This Is Student
(function() {

const courseConfig = {
  id: 'hrm2',
  name: 'HRM 2',
  pages: ['hrm2','hrm2_kap1','hrm2_kap2','hrm2_kap3','hrm2_kap4','hrm2_kap5','hrm2_kap6','hrm2_kart','hrm2_quiz','hrm2_glossar'],
  subNav: [
    {s:'hrm2',l:'Übersicht'},
    {s:'hrm2_kap1',l:'Einführung HRM'},
    {s:'hrm2_kap2',l:'Personalbeschaffung'},
    {s:'hrm2_kap3',l:'Einstellungsprozesse'},
    {s:'hrm2_kap4',l:'Onboarding'},
    {s:'hrm2_kap5',l:'Personalplanung'},
    {s:'hrm2_kap6',l:'Austritt'},
    {s:'hrm2_kart',l:'Karten'},
    {s:'hrm2_quiz',l:'Quiz'},
    {s:'hrm2_glossar',l:'Glossar'}
  ],
  navButton: '<button class="nl nl-main" data-s="hrm2" onclick="go(\'hrm2\')" style="display:none">HRM 2</button>'
};

const courseHTML = `

<!-- HRM2 HOME / ÜBERSICHT -->
<div class="sec" id="hrm2">
<div style="border-radius:24px;padding:36px 32px;margin-bottom:32px;background:linear-gradient(135deg,rgba(184,56,232,.08),rgba(232,79,56,.06));border:1px solid var(--bd);position:relative;overflow:hidden">
<div style="position:absolute;top:-40px;right:-40px;width:160px;height:160px;border-radius:50%;background:linear-gradient(135deg,rgba(184,56,232,.1),rgba(232,79,56,.08))"></div>
<div style="position:relative;z-index:1">
<div style="font-size:12px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:var(--pr);margin-bottom:8px">Semester 5 · BWL</div>
<h1 style="font-size:32px;letter-spacing:-.6px;margin-bottom:8px">HRM 2 — Human Resources Management</h1>
<p style="font-size:15px;color:var(--tx2);margin-bottom:0">Dozentin: Simone Rogge · SHL Schweizerische Hotelfachschule Luzern</p>
</div>
</div>

<div style="font-size:13px;font-weight:600;letter-spacing:1px;text-transform:uppercase;color:var(--tx3);margin-bottom:14px">Theorie · 6 Kapitel</div>
<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:12px;margin-bottom:36px">
<div class="c ck" onclick="go('hrm2_kap1')" style="padding:20px 22px;display:flex;gap:14px;align-items:flex-start">
<div style="width:32px;height:32px;border-radius:10px;background:var(--aml);color:var(--am);display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0">1</div>
<div><div class="ct2">Einführung HRM</div><div class="cd">HR-Prozesse, Kreislauf operatives Personalmanagement</div></div>
</div>
<div class="c ck" onclick="go('hrm2_kap2')" style="padding:20px 22px;display:flex;gap:14px;align-items:flex-start">
<div style="width:32px;height:32px;border-radius:10px;background:var(--gl);color:var(--g);display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0">2</div>
<div><div class="ct2">Personalbeschaffung</div><div class="cd">Intern vs. extern, E-Recruiting, Recruiting-Kanäle</div></div>
</div>
<div class="c ck" onclick="go('hrm2_kap3')" style="padding:20px 22px;display:flex;gap:14px;align-items:flex-start">
<div style="width:32px;height:32px;border-radius:10px;background:var(--pl);color:var(--pr);display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0">3</div>
<div><div class="ct2">Einstellungsprozesse</div><div class="cd">A-/I-/T-Daten, Interview, STAR-Methode, Selektion</div></div>
</div>
<div class="c ck" onclick="go('hrm2_kap4')" style="padding:20px 22px;display:flex;gap:14px;align-items:flex-start">
<div style="width:32px;height:32px;border-radius:10px;background:rgba(56,182,232,.1);color:var(--ac);display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0">4</div>
<div><div class="ct2">Onboarding</div><div class="cd">Einführungsprozess, Buddy, Probezeitgespräch</div></div>
</div>
<div class="c ck" onclick="go('hrm2_kap5')" style="padding:20px 22px;display:flex;gap:14px;align-items:flex-start">
<div style="width:32px;height:32px;border-radius:10px;background:var(--rl);color:var(--r);display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0">5</div>
<div><div class="ct2">Personalplanung</div><div class="cd">Bottom-up/Top-down, Budget, Fluktuation, Controlling</div></div>
</div>
<div class="c ck" onclick="go('hrm2_kap6')" style="padding:20px 22px;display:flex;gap:14px;align-items:flex-start">
<div style="width:32px;height:32px;border-radius:10px;background:var(--aml);color:var(--am);display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0">6</div>
<div><div class="ct2">Austritt</div><div class="cd">Kündigung, Freistellung, Arbeitszeugnisse, Referenzen</div></div>
</div>
</div>

<div style="font-size:13px;font-weight:600;letter-spacing:1px;text-transform:uppercase;color:var(--tx3);margin-bottom:14px">Lerntools</div>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px">
<div class="c ck" onclick="go('hrm2_kart')" style="text-align:center;padding:24px 16px">
<div id="ltHrm2Cards" style="font-size:24px;font-weight:700;background:var(--grad);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;margin-bottom:6px">59</div>
<div class="ct2">Karteikarten</div><div class="cd">Klicken &amp; repetieren</div>
</div>
<div class="c ck" onclick="go('hrm2_quiz')" style="text-align:center;padding:24px 16px">
<div id="ltHrm2Quiz" style="font-size:24px;font-weight:700;background:var(--grad);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;margin-bottom:6px">59</div>
<div class="ct2">Quiz</div><div class="cd">Mit Lernfortschritt</div>
</div>
<div class="c ck" onclick="go('hrm2_glossar')" style="text-align:center;padding:24px 16px">
<div style="font-size:24px;font-weight:700;background:var(--grad);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;margin-bottom:6px">A–Z</div>
<div class="ct2">Glossar</div><div class="cd">Begriffe &amp; Definitionen</div>
</div>
</div>
</div>

<!-- ===================== KAPITEL 1: EINFÜHRUNG HRM ===================== -->
<div class="sec" id="hrm2_kap1"><h1>Einführung in das HR Management</h1><p class="sub">Kapitel 1 — HR-Prozesse, Aufgabenbereiche, Kreislauf</p>
<div class="hl">Die HR-Leitung sollte <strong>Mitglied der Geschäftsleitung</strong> sein und in sämtlichen strategischen Entscheidungen mitbestimmen dürfen.</div>
<div style="display:flex;gap:8px;margin:12px 0 4px"><button style="font-size:11px;padding:4px 10px" onclick="this.parentElement.nextElementSibling.querySelectorAll('.tl-item').forEach(i=>i.classList.add('open'))">Alle aufklappen</button><button style="font-size:11px;padding:4px 10px" onclick="this.parentElement.nextElementSibling.querySelectorAll('.tl-item').forEach(i=>i.classList.remove('open'))">Alle schliessen</button></div>
<div class="tl">

<div class="tl-item"><div class="tl-num tl-num-b">1</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Einflüsse auf die Personalarbeit</div><div class="tl-merksatz">«Interne &amp; externe Einflüsse — Wertewandel, Technologie, Arbeitsmarkt.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body">Die Personalarbeit wird von <strong>internen und externen Einflüssen</strong> geprägt.<br><br><strong>Interne Einflüsse:</strong> Leitbild/Strategie, Menschenbild der Führungskräfte, Mitarbeiterpotenzial, Stellenwert der Personalarbeit, Werte &amp; Normen.<br><br><strong>Externe Einflüsse:</strong> Gesetze/Verträge, Arbeitsmarkt, Technologie, gesellschaftlicher Wandel, wirtschaftlicher Wandel.<br><br>Veränderte Dienstleistungsbereitschaft, Individualisierung der Arbeitszeiten und der Wunsch nach Work-Life-Balance beeinflussen den Planungshorizont. Neue Technologien bringen neue Qualifikationen und Berufsbilder.</div><div class="merksatz">Merke: Work-Life-Balance ist heute ein Muss — nicht mehr nice-to-have!</div></div></div>

<div class="tl-item"><div class="tl-num tl-num-g">2</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Kreislauf operatives Personalmanagement</div><div class="tl-merksatz">«7 Kernbereiche: Planung → Gewinnung → Betreuung → Honorierung → Entwicklung → Trennung.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body">Das operative Personalmanagement folgt einem <strong>Kreislauf mit 7 Kernbereichen</strong>:</div><div class="tl-sub">
<div class="c ca"><div class="ct2">1. Personalplanung</div><div class="cd">Organigramme, Stellenpläne, Stellenbeschreibungen, Personalbedarf (quantitativ &amp; qualitativ), Personaleinsatz (Arbeitspläne), Personalbudgetierung.</div></div>
<div class="c cg"><div class="ct2">2. Personalgewinnung</div><div class="cd">Vakanzen-Übersicht, Anforderungsprofile, Stellenausschreibungen, Personalwerbung, Personalauswahl (A-/B-/C-Stapel), Referenzen.</div></div>
<div class="c cm"><div class="ct2">3. Personaleinstellung/-eintritt</div><div class="cd">Verträge erstellen, Personaldaten erfassen, Einführungspläne, Welcome-Veranstaltungen, Götti/Gotti zuteilen, AHV/PK-Anmeldung.</div></div>
<div class="c cp"><div class="ct2">4. Personalbetreuung/-erhaltung</div><div class="cd">Absenzenwesen, Mutationen (Beförderungen, Lohnerhöhungen), Jubiläen, Probezeit, Feedbackgespräche, BGM.</div></div>
<div class="c ca"><div class="ct2">5. Personalhonorierung</div><div class="cd">Lohnmutationen im System, Vorschüsse, Tresorverwaltung, Gutscheine.</div></div>
<div class="c cg"><div class="ct2">6. Personalentwicklung</div><div class="cd">Qualifikationsbogen, Aus- und Weiterbildung, Bildungscontrolling, MbO-Zielvereinbarungen, Potenzialanalyse, Karriereplanung.</div></div>
<div class="c cr"><div class="ct2">7. Personaltrennung/-austritt</div><div class="cd">Kündigungen, Arbeitszeugnisse, Austrittsgespräche, Freistellungen, Pensionierungen, Todesfälle.</div></div>
</div><div class="merksatz">Merke: Das Austrittsgespräch liefert wertvolle Informationen über Führung, Arbeitsbedingungen und Organisationsklima.</div></div></div>

<div class="tl-item"><div class="tl-num tl-num-a">3</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Personalbetreuung &amp; BGM</div><div class="tl-merksatz">«Personalbetreuung ist Fürsorgepflicht — nicht nur Aufgabe der HR-Abteilung!»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body">Personalbetreuung ist eine <strong>Dienstleistungsfunktion</strong> und umfasst Beratung und Begleitung. Sie ist nicht nur Aufgabe der Personalabteilung, sondern auch <strong>Fürsorgepflicht der vorgesetzten Person</strong>.<br><br>Das <strong>BGM (Betriebliches Gesundheitsmanagement)</strong> ist ein zentraler Punkt geworden. Open-Door-Politik und geschulte Führungskräfte sind essenziell — gerade in der Hotellerie, wo zu wenig Fachkräfte den Beruf weiterhin ausleben möchten.</div></div></div>

</div></div>

<!-- ===================== KAPITEL 2: PERSONALBESCHAFFUNG ===================== -->
<div class="sec" id="hrm2_kap2"><h1>Personalgewinnung — Personalbeschaffung</h1><p class="sub">Kapitel 2 — Personalwerbung, E-Recruiting, Recruiting-Kanäle, neue Instrumente</p>
<div class="hl">Jedes Inserat ist ein Auftritt in der Öffentlichkeit — die Stellenausschreibung ist gleichzeitig <strong>Werbung für den Betrieb</strong>.</div>
<div style="display:flex;gap:8px;margin:12px 0 4px"><button style="font-size:11px;padding:4px 10px" onclick="this.parentElement.nextElementSibling.querySelectorAll('.tl-item').forEach(i=>i.classList.add('open'))">Alle aufklappen</button><button style="font-size:11px;padding:4px 10px" onclick="this.parentElement.nextElementSibling.querySelectorAll('.tl-item').forEach(i=>i.classList.remove('open'))">Alle schliessen</button></div>
<div class="tl">

<div class="tl-item"><div class="tl-num tl-num-b">1</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Personalwerbung — Grundlagen</div><div class="tl-merksatz">«Bewerberorientiertes Denken — intern oder extern besetzen?»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body">Im Zentrum stehen die <strong>Bedürfnisse, Erwartungen und Zielsetzungen</strong> der vorhandenen und potenziellen Mitarbeitenden. Dies verlangt ein bewerberorientiertes Denken — verknüpft mit Unternehmensleitbild, Betriebsphilosophie und Corporate Identity.<br><br>Zuerst: <strong>Soll die Stelle intern oder extern besetzt werden?</strong><br><br>Wichtige Grundlagen (Implementierungsmittel): Stellenbeschreibung, Pflichtenheft, Job Contract, Arbeitsbeschrieb, Funktionendiagramm, Anforderungsprofil.<br><br><strong>Inseratgestaltung:</strong> Grösse in Relation zur Position. Platzierung im <strong>linken oberen Winkel</strong> oder auf der <strong>Diagonallinie</strong> ist wirkungsvoll. Zielgruppe kennen — Instrument unterscheidet sich zwischen LinkedIn, TikTok, Jobs.ch usw.</div><div class="hlr"><strong>ACHTUNG:</strong> Unprofessionelle Inserate schaden dem Image des Betriebs!</div></div></div>

<div class="tl-item"><div class="tl-num tl-num-g">2</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">E-Recruiting</div><div class="tl-merksatz">«6 Hauptziele: Mehrwert, Prozessoptimierung, Informationsfluss, Kosteneinsparung, Standardisierung, Effizienz.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body">Beim E-Recruiting läuft die gesamte Personalrekrutierung elektronisch ab.<br><br><strong>6 Hauptziele:</strong><br>1. Mehrwert für Personalverantwortliche, Führungskräfte und potenzielle MA<br>2. Prozessoptimierung mithilfe digitaler Systeme<br>3. Optimaler Informationsfluss auf allen Ebenen<br>4. Kosteneinsparung und weniger Admin-Aufwand<br>5. Hohe Standardisierung der Abläufe<br>6. Höhere Flexibilität und Effizienz<br><br><strong>Kriterien Homepage:</strong> Leichte Auffindbarkeit, logische Navigation, Informationsgehalt, Interaktivität, Sicherheit (DSG), direkter Hinweis auf Stellenangebote.<br><br><strong>Informationssicherheit:</strong> Bewerberdaten müssen verschlüsselt übertragen werden. Intranet: nur Befugte. Grundlage = Vertrauen durch Sicherheit.</div></div></div>

<div class="tl-item"><div class="tl-num tl-num-a">3</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Recruiting-Kanäle im Überblick</div><div class="tl-merksatz">«Multi-Channel-Ansatz: intern, Jobbörsen, Social Media, Netzwerk, Vermittlung, Events, Behörden, Talentpool.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body"><strong>8 Recruiting-Kanäle:</strong></div><div class="tl-sub">
<div class="c ca"><div class="ct2">1. Intern</div><div class="cd">Interne Ausschreibungen, ehemalige MA-Datenbank, MA-werben-MA-Programme.</div></div>
<div class="c cg"><div class="ct2">2. Jobbörsen</div><div class="cd">Jobs.ch, hotelcareer.ch, Indeed, LinkedIn, XING.</div></div>
<div class="c cm"><div class="ct2">3. Social Media</div><div class="cd">Facebook, LinkedIn, Instagram, TikTok — Active Sourcing und Social Recruiting.</div></div>
<div class="c cp"><div class="ct2">4. Netzwerk</div><div class="cd">Persönliche Kontakte, Hochschulmarketing, Beziehungen zu Schulen.</div></div>
<div class="c ca"><div class="ct2">5. Vermittlung</div><div class="cd">Headhunter (Executive Search), Personalvermittlung, Temporärunternehmen.</div></div>
<div class="c cg"><div class="ct2">6. Events</div><div class="cd">Job-Fachmessen, Recruiting-Events an Unis, Betriebswettbewerbe.</div></div>
<div class="c cr"><div class="ct2">7. Behörden</div><div class="cd">RAV, Arbeitsmarktservices.</div></div>
<div class="c cm"><div class="ct2">8. Talentpool</div><div class="cd">Aufbau und Nutzung von Talentpools, Initiativbewerbungen, Praktikanten-Programme.</div></div>
</div></div></div>

<div class="tl-item"><div class="tl-num tl-num-r">4</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Neue Instrumente im Recruiting</div><div class="tl-merksatz">«Active Sourcing, Mobile Recruiting, People Analytics, Video, Employer Branding, Candidate Experience.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body"><strong>9 moderne Instrumente:</strong><br>1. <strong>Active Sourcing</strong> — Proaktive Suche nach Kandidaten in Netzwerken<br>2. <strong>Mobile Recruiting</strong> — Bewerbungsprozesse für Mobilgeräte optimiert<br>3. <strong>People Analytics</strong> — Einsatz von Big Data für datenbasiertes Recruiting<br>4. <strong>Algorithmen</strong> — Algorithmengestützte Entscheidungen und Matching<br>5. <strong>Video Recruiting</strong> — Video-Interviews und Virtual Interviewing<br>6. <strong>Job Speed Dating</strong> — Schnelle Kurzgespräche mit vielen Kandidaten<br>7. <strong>Employer Branding</strong> — Steigende Bedeutung der Arbeitgebermarke<br>8. <strong>Candidate Experience</strong> — Optimierung des Bewerbererlebnisses<br>9. <strong>Peer Recruiting</strong> — Personalauswahl im, mit und durch das Team</div></div></div>

</div></div>

<!-- ===================== KAPITEL 3: EINSTELLUNGSPROZESSE ===================== -->
<div class="sec" id="hrm2_kap3"><h1>Personalgewinnung — Einstellungsprozesse</h1><p class="sub">Kapitel 3 — Bewerbungskorrespondenz, A-/I-/T-Daten, STAR-Methode</p>
<div class="hl">Das Ziel der Personalauslese: die grösstmögliche Übereinstimmung von <strong>Eignungsprofil</strong> und <strong>Anforderungsprofil</strong>.</div>
<div style="display:flex;gap:8px;margin:12px 0 4px"><button style="font-size:11px;padding:4px 10px" onclick="this.parentElement.nextElementSibling.querySelectorAll('.tl-item').forEach(i=>i.classList.add('open'))">Alle aufklappen</button><button style="font-size:11px;padding:4px 10px" onclick="this.parentElement.nextElementSibling.querySelectorAll('.tl-item').forEach(i=>i.classList.remove('open'))">Alle schliessen</button></div>
<div class="tl">

<div class="tl-item"><div class="tl-num tl-num-b">1</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Bewerbungskorrespondenz</div><div class="tl-merksatz">«Jedes Schreiben ist eine Visitenkarte — schnelle Reaktionszeit ist entscheidend!»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body">Jede Stellenausschreibung trägt zum <strong>Image</strong> des Betriebes bei. Jedes Schreiben gibt dem Bewerbenden Informationen über Unternehmenskultur und Professionalität.<br><br><strong>Mögliche Rückmeldungen:</strong><br>• <strong>Eingangsbestätigung</strong> — sofort versenden (automatisiert)<br>• <strong>Zwischenbescheid</strong> — wenn Prüfung länger dauert<br>• <strong>Einladung zum Vorstellungsgespräch</strong> — evtl. mit Bewerbungsformular<br>• <strong>Absage</strong> — immer mit Begründung</div><div class="hlr"><strong>FEHLER:</strong> Lange Reaktionszeiten sind der häufigste Grund, warum gute Kandidat:innen abspringen!</div></div></div>

<div class="tl-item"><div class="tl-num tl-num-g">2</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Die 3 Instrumente der Personalauslese: A-, I-, T-Daten</div><div class="tl-merksatz">«A-Daten (Vorselektion) → I-Daten (Endauswahl) → T-Daten (Überprüfung).»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body"><strong>A-Daten (Anamnese-Daten)</strong> — aus Bewerbungsunterlagen zur Vorselektion:<br>1. Prüfung auf Vollständigkeit (Begleitschreiben, CV, Foto, Zeugnisse)<br>2. Abgleich mit Anforderungsprofil (Muss-Kriterien erfüllt?)<br>3. Lesen der Arbeitszeugnisse (Wer hat verfasst? Zeitdauer? Gründe?)<br>4. Entscheid: Einladung, Abwarten oder Absage<br><br><strong>I-Daten (Interviewdaten)</strong> — aus Interviews und Referenzgesprächen zur Endauswahl. Drei Grundfragen: Können? Wollen? Passen/Dürfen?<br><br><strong>T-Daten (Testdaten)</strong> — aus Tests zur Überprüfung. In der Schweizer Hotellerie höchstens graphologische Gutachten. Tests = Bestätigung, nicht Entscheidungsgrundlage!</div><div class="tl-sub">
<div class="c ca"><div class="ct2">Können? (Fachkompetenz)</div><div class="cd">Berufliche Qualifikation, intellektuelle Fähigkeiten, Leistungsfähigkeit, Fertigkeit, Belastbarkeit, Produktivität.</div></div>
<div class="c cg"><div class="ct2">Wollen? (Motivation)</div><div class="cd">Arbeitsverhalten, Energie, Wille, Selbstständigkeit, Motivation, Leistungsbereitschaft, Erwartungen, Ziele.</div></div>
<div class="c cm"><div class="ct2">Passen/Dürfen? (Persönlichkeit)</div><div class="cd">Persönliche Eigenart, Erscheinung, Auftreten, Sprache, Sozialverhalten, Selbsteinschätzung.</div></div>
</div></div></div>

<div class="tl-item"><div class="tl-num tl-num-a">3</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Interviewvorbereitung &amp; Verhaltensdreieck</div><div class="tl-merksatz">«Situation → Verhalten → Ergebnis — plus 4. Dimension: Was gelernt?»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body"><strong>5 Schritte der Interviewvorbereitung:</strong><br>1. Anforderungsprofil bestimmen (geistig, fachlich, sozial, persönlich)<br>2. Seriöses Studium der Bewerbungsunterlagen (Fragen formulieren)<br>3. Fragenkatalog zusammenstellen (gleiche Fragen für alle)<br>4. Verhaltensorientierte Fragetechnik anwenden<br>5. Organisatorisches (Zeit, Raum, Führungskraft informieren)<br><br><strong>Verhaltensdreieck:</strong> Situation → Verhalten → Ergebnis<br>+ 4. Dimension: «Was haben Sie gelernt? Was würden Sie anders machen?»<br><br><strong>STAR-Methode:</strong> Situation → Task → Action → Result (Variante aus den USA).</div></div></div>

<div class="tl-item"><div class="tl-num tl-num-r">4</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Interviewverlauf — 8 Phasen</div><div class="tl-merksatz">«Begrüssung → Gesprächsaufnahme → Rahmen → Fachlich → Persönlichkeit → Info → Erwartung → Vorgehen.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body"><strong>8 Phasen des Interviews:</strong><br>1. <strong>Begrüssung</strong> — Mit Namen ansprechen, sich vorstellen, individuellen Punkt erwähnen<br>2. <strong>Gesprächsaufnahme</strong> — Kurze Konversation, erster Eindruck<br>3. <strong>Rahmen abstecken</strong> — Ziel, Dauer, Aufbau erklären<br>4. <strong>Fachliche Kompetenzen</strong> — Offene Fragen, Zeugnisse, Aufgabenstellungen<br>5. <strong>Persönlichkeit</strong> — Soziale/persönliche Kompetenzen, Verhaltensdreieck<br>6. <strong>Informationen</strong> — Stellenbeschreibung, Team, Firma, Entwicklungsmöglichkeiten<br>7. <strong>Erwartungsrahmen</strong> — Gehalt, Eintrittstermin, Probezeit, Arbeitszeit<br>8. <strong>Weiteres Vorgehen</strong> — Klären wer was tut, Bewerber:in auffordern sich zu melden</div></div></div>

<div class="tl-item"><div class="tl-num tl-num-p">5</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">T-Daten: Testverfahren</div><div class="tl-merksatz">«Tests bringen meist neue Fragen, keine endgültigen Antworten — nur Bestätigung!»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body"><strong>Testverfahren:</strong><br>• <strong>Graphologische Gutachten</strong> — Gesamtcharakter und Teilaspekte der Eignung<br>• <strong>Persönlichkeitstests</strong> — Selbst-/Fremdbeurteilung (ACUMEN, DISC, INSIGHTS)<br>• <strong>Assessment-Centers</strong> — Praxissimulation: Tests + Interviews + Gruppenarbeiten (gründlich aber kostspielig)<br>• <strong>Medizinische Untersuchung</strong> — nur bei speziellen Aufgaben (z.B. Auslandeinsatz)</div><div class="merksatz">Merke: Tests nicht überschätzen — sie sollen als Bestätigung der Eignung eingesetzt werden.</div></div></div>

</div></div>

<!-- ===================== KAPITEL 4: ONBOARDING ===================== -->
<div class="sec" id="hrm2_kap4"><h1>Mitarbeitendeneinführung / Onboarding</h1><p class="sub">Kapitel 4 — Einführungsprozess, Buddy-System, Probezeitgespräch</p>
<div class="hl">Ziel: Neue MA sollen sich <strong>innert kurzer Zeit integriert fühlen</strong> und der Firma über längere Zeit erhalten bleiben.</div>
<div style="display:flex;gap:8px;margin:12px 0 4px"><button style="font-size:11px;padding:4px 10px" onclick="this.parentElement.nextElementSibling.querySelectorAll('.tl-item').forEach(i=>i.classList.add('open'))">Alle aufklappen</button><button style="font-size:11px;padding:4px 10px" onclick="this.parentElement.nextElementSibling.querySelectorAll('.tl-item').forEach(i=>i.classList.remove('open'))">Alle schliessen</button></div>
<div class="tl">

<div class="tl-item"><div class="tl-num tl-num-b">1</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Vorteile eines guten Onboardings</div><div class="tl-merksatz">«Kürzere Einarbeitung, höhere Qualität, Identifikation, besseres Klima.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body">Neueintretende reagieren besonders <strong>sensibel</strong> auf alle Eindrücke — in dieser Phase bilden sich oft Urteile.<br><br><strong>6 Vorteile:</strong><br>1. Verkürzte Einarbeitungszeit und schnellere Produktivität<br>2. Steigerung der Arbeitsqualität und -quantität<br>3. Schnelle und gute Identifikation mit dem Unternehmen<br>4. Abnahme von Kontrollarbeiten<br>5. Verbesserung des Betriebsklimas<br>6. Bessere Vorbereitung für höhere Funktionen</div></div></div>

<div class="tl-item"><div class="tl-num tl-num-g">2</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Leitfaden Onboarding: 5 Phasen</div><div class="tl-merksatz">«Vor dem 1. Tag → 1. Tag → 1. Woche → 1. Monat → 3 &amp; 6 Monate.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body"><strong>Vor dem 1. Tag:</strong> Arbeitsvertrag bereit, Willkommenspaket, Buddy bestimmen, Technische Ausstattung, Team informieren, Willkommens-E-Mail.<br><br><strong>1. Arbeitstag:</strong> Persönliches Willkommen durch Vorgesetzte, Rundgang, Arbeitsplatz einrichten, Werte/Kultur vermitteln, gemeinsames Mittagessen, Resümee am Abend (Chefsache!).<br><br><strong>1. Woche:</strong> Schulungen interne Systeme, Einarbeitung in Aufgaben, Mentor + Buddy, Abwechslung Praxis/Theorie.<br><br><strong>1. Monat:</strong> Regelmässige Feedbackgespräche, kurz- und langfristige Ziele setzen, Teambuilding, Netzwerkaufbau.<br><br><strong>3 &amp; 6 Monate:</strong> Probezeitgespräch, formelle Leistungsbewertung, Weiterentwicklung besprechen.</div><div class="hlr"><strong>FEHLER:</strong> Viele Betriebe investieren nur in den ersten Tag und vergessen die folgenden Wochen!</div></div></div>

<div class="tl-item"><div class="tl-num tl-num-a">3</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Probezeitgespräch — 6 Phasen</div><div class="tl-merksatz">«Vorbereitung → Rückblick → Feedback → Zukunft → Entscheidung → Abschluss.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body"><strong>6 Phasen des Probezeitgesprächs:</strong><br>1. <strong>Vorbereitung &amp; Einstieg</strong> — Termin frühzeitig, warme Atmosphäre, Zweck erklären<br>2. <strong>Rückblick</strong> — Erfolge hervorheben, Zielerreichung, Herausforderungen<br>3. <strong>Feedbackgespräch</strong> — Feedback AG, Selbstreflexion MA, Fragen &amp; Anliegen<br>4. <strong>Zukunftsperspektiven</strong> — Weiterentwicklung, Schulungsbedarf, realistische Ziele<br>5. <strong>Entscheidung</strong> — Festanstellung, Verlängerung oder Trennung, Dokumentation<br>6. <strong>Abschluss</strong> — Unklarheiten bereinigen, Verpflichtungen festhalten, danken, unterschreiben</div><div class="merksatz">Merke: Das Probezeitgespräch bildet den Abschluss der Einführung und das Ende des Onboarding-Prozesses.</div></div></div>

</div></div>

<!-- ===================== KAPITEL 5: PERSONALPLANUNG ===================== -->
<div class="sec" id="hrm2_kap5"><h1>Personalplanung &amp; Personalbudget</h1><p class="sub">Kapitel 5 — Planung, Bottom-up/Top-down, Budget, Fluktuation, Controlling</p>
<div class="hl">Für viele Unternehmen ist die Personalkostenplanung der <strong>wichtigste Teilplan im Gesamtbudget</strong>.</div>
<div style="display:flex;gap:8px;margin:12px 0 4px"><button style="font-size:11px;padding:4px 10px" onclick="this.parentElement.nextElementSibling.querySelectorAll('.tl-item').forEach(i=>i.classList.add('open'))">Alle aufklappen</button><button style="font-size:11px;padding:4px 10px" onclick="this.parentElement.nextElementSibling.querySelectorAll('.tl-item').forEach(i=>i.classList.remove('open'))">Alle schliessen</button></div>
<div class="tl">

<div class="tl-item"><div class="tl-num tl-num-b">1</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Bedeutung &amp; Ziele der Personalplanung</div><div class="tl-merksatz">«Richtiges Personal, richtige Qualifikation, richtige Anzahl, richtiger Zeitpunkt.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body"><strong>Warum Personalplanung wichtig:</strong> Personalkostenintensivierung, gesetzliche Einschränkungen, Arbeitsplatzsicherheit, veränderte Anforderungen, Arbeitszeitverkürzung.<br><br><strong>Kernziel:</strong> Erforderliches Personal mit der richtigen Qualifikation in der richtigen Anzahl zum richtigen Zeitpunkt.<br><br><strong>Betriebsperspektive:</strong> Frühzeitiges Erkennen von Engpässen, anforderungsgerechter Einsatz, Vermeidung teurer kurzfristiger Massnahmen.<br><strong>MA-Perspektive:</strong> Erhöhte Arbeitsplatzsicherheit, bessere Arbeitsmarktfähigkeit, mehr Transparenz, weniger Kündigungen.<br><br><strong>Planungsdimensionen:</strong><br>• <strong>Individuell:</strong> Laufbahnplanung, Einarbeitung, Entwicklung, Pensionierung<br>• <strong>Kollektiv:</strong> Einsatz-, Bedarfs-, Bestands-, Beschaffungs-, Entwicklungs-, Freisetzungsplanung</div></div></div>

<div class="tl-item"><div class="tl-num tl-num-g">2</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Bottom-up vs. Top-down</div><div class="tl-merksatz">«Nur eine Methode allein = unrealistisch — Bottom-up &amp; Top-down müssen einander angepasst werden!»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body"><strong>Bottom-up ↑:</strong> Von unten nach oben — Abteilungsleitende erstellen Dienstpläne und ermitteln den MA-Bedarf für die geforderte Leistung.<br><br><strong>Top-down ↓:</strong> Von oben nach unten — Aus dem Umsatzbudget wird der Personalaufwand abgeleitet und auf Abteilungen verteilt.<br><br><strong>Anpassungspunkte:</strong> Öffnungszeiten, Qualitätsstandards, Anforderungskriterien, Produktionsarten, Gewinnungspolitik, Lohnpolitik, Synergien, Fluktuationsrate.<br><br><strong>Zu beachten:</strong> Gesetzliche Bestimmungen (Frei-/Ferien-/Feiertagsregelungen, Arbeitszeit, Lernende) und betriebliche Anforderungen (Standards, Öffnungszeiten, Saisonalität).</div></div></div>

<div class="tl-item"><div class="tl-num tl-num-a">3</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Personalbudget — 8 Schritte</div><div class="tl-merksatz">«Personalbestand → Bruttolöhne → Sozialleistungen → Beschaffung → Entwicklung → Freisetzung → PeNeKo → L-GAV.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body"><strong>8 Schritte zum Personalbudget:</strong><br>1. Personalbestand auflisten<br>2. Bruttolöhne + 13. Monatslohn berechnen<br>3. Sozialleistungen berechnen (AGB ca. 14%)<br>4. Beschaffungskosten (Inserate, Vermittlung)<br>5. Entwicklungskosten (Aus-/Weiterbildung)<br>6. Freisetzungskosten<br>7. Weitere Personalnebenkosten (PeNeKo)<br>8. L-GAV Vollzugskosten<br><br><strong>= Total Personalkosten in CHF und in % vom Umsatz</strong><br><br><strong>Direkte Personalkosten:</strong> Lohn, Gehalt, variable Bestandteile, Sozialabgaben.<br><strong>Indirekte Personalkosten (Lohnnebenkosten):</strong> Freiwillige Sozialbeiträge, Entgeltfortzahlung, Urlaubsgeld, Weihnachtsgeld, Aus-/Weiterbildung.</div></div></div>

<div class="tl-item"><div class="tl-num tl-num-r">4</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Personalfluktuation &amp; Controlling</div><div class="tl-merksatz">«Hotellerie = eine der höchsten Fluktuationsraten aller Branchen!»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body"><strong>Direkte Fluktuationskosten:</strong> Werbekosten, Bewerbungsbearbeitung, Vorstellungskosten, Einarbeitungskosten.<br><strong>Indirekte Fluktuationskosten:</strong> Auswirkung auf MA (Kettenreaktionen), Kundschaft (Umsatzeinbussen), Umwelt (Image-Verlust).<br><br><strong>Personalcontrolling</strong> = Planungs-, Kontroll- und Evaluationsdenken. Besonderheit: Neben quantitativen auch qualitative Aspekte (Motivation, Identifikation, Führungskultur).<br><br><strong>Strategisches Controlling:</strong> Personal-/Unternehmensplanung koordinieren, Personalkostenstruktur.<br><strong>Operatives Controlling:</strong> Personaleinsatz, Fehlzeiten, Fluktuationsraten, Kündigungsarten, Unfallhäufigkeit, Krankheitsquote, Weiterbildungszeit.<br><br><strong>Personalforschung:</strong> Arbeitsmarktforschung (extern) + Betriebsuntersuchungen (intern).</div></div></div>

</div></div>

<!-- ===================== KAPITEL 6: AUSTRITT ===================== -->
<div class="sec" id="hrm2_kap6"><h1>Personalaustritt / Freistellung</h1><p class="sub">Kapitel 6 — Kündigung, Freistellung, Arbeitszeugnisse, Referenzen</p>
<div class="hl">Nur schriftlich festgehaltene Kritik inkl. Zielsetzung ist verbindlich! <strong>So früh wie möglich nach einem Vorfall.</strong></div>
<div style="display:flex;gap:8px;margin:12px 0 4px"><button style="font-size:11px;padding:4px 10px" onclick="this.parentElement.nextElementSibling.querySelectorAll('.tl-item').forEach(i=>i.classList.add('open'))">Alle aufklappen</button><button style="font-size:11px;padding:4px 10px" onclick="this.parentElement.nextElementSibling.querySelectorAll('.tl-item').forEach(i=>i.classList.remove('open'))">Alle schliessen</button></div>
<div class="tl">

<div class="tl-item"><div class="tl-num tl-num-b">1</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Weisungsrecht &amp; Eskalationsstufen</div><div class="tl-merksatz">«Gesprächsnotiz → Verwarnung → Verwarnung mit Kündigungsandrohung.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body"><strong>Eskalationsstufen:</strong><br>1. <strong>Gesprächsnotiz / Verweis</strong> — Kleinere, einmalige Vergehen → direkte Vorgesetzte<br>2. <strong>Verwarnung</strong> — Grössere oder wiederholte Vergehen → Vorgesetzte + HR/GL<br>3. <strong>Verwarnung mit Kündigungsandrohung</strong> — Nach mind. einer ordentlichen Verwarnung → Personalchef + GL</div></div></div>

<div class="tl-item"><div class="tl-num tl-num-g">2</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Die Kündigung</div><div class="tl-merksatz">«Einseitige, empfangsbedürftige Willenserklärung — missbräuchlich = bis 6 Monatslöhne Entschädigung.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body">In der Schweiz können Arbeitsverhältnisse praktisch jederzeit aufgelöst werden — einen triftigen Grund braucht es nicht. Aber: Kündigung aus unfairen Gründen = <strong>missbräuchlich</strong> (OR 336). Entschädigung bis zu 6 Monatslöhne.<br><br><strong>Ordentliche Kündigung — Checkliste:</strong><br>• Kein Grund für missbräuchliche Kündigung? (OR 336)<br>• Sperrfrist abgelaufen? (OR 336c, d)<br>• Kündigungsfrist? Mündlich + schriftlich oder per Post?<br>• Wer spricht aus? Auf welchen Termin?<br>• Stichhaltige, belegbare Argumente?<br>• Guthaben (Ferien, Feiertage, Überstunden)? Letzter Arbeitstag?<br><br><strong>Fristlose Kündigung — Gründe:</strong> Vermögensschädigung, Finanzbetrug, krasse Anstandsverletzung, Arbeitsverweigerung, mehrmalige Nichteinhaltung der Arbeitszeit (mit Verwarnung).</div><div class="hlr"><strong>ACHTUNG:</strong> Schlechte Arbeitsleistung ist KEIN Grund für fristlose Entlassung — dafür braucht es den ordentlichen Weg!</div></div></div>

<div class="tl-item"><div class="tl-num tl-num-a">3</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Freistellung</div><div class="tl-merksatz">«Nicht verwechseln mit fristloser Kündigung! Voller Lohnanspruch läuft weiter.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body">Bei der Freistellung verzichtet der Betrieb freiwillig auf die Leistung — das Anstellungsverhältnis läuft bis Ablauf der Kündigungsfrist weiter. Voller Lohnanspruch inkl. aller Zulagen.<br><br><strong>Zu regeln:</strong><br>• Dauer und Lohnanspruch<br>• Restpflichten<br>• Ferienguthaben (grundsätzlich während Freistellung zu beziehen)<br>• Überstunden (ohne Vereinbarung: Auszahlung mit 25% Zuschlag möglich)</div></div></div>

<div class="tl-item"><div class="tl-num tl-num-r">4</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Arbeitszeugnisse — 3 Arten</div><div class="tl-merksatz">«Vollzeugnis (Leistung &amp; Verhalten), Arbeitsbestätigung (nur Dauer/Funktion), Zwischenzeugnis.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body">Gemäss <strong>OR Art. 330a</strong> hat die angestellte Person jederzeit Anspruch auf ein Zeugnis.<br><br><strong>5 Grundprinzipien:</strong> Wahrheit, Wohlwollen, Vollständigkeit, Klarheit, Individuell.<br><br><strong>Haftung:</strong> Zu schlechtes Zeugnis → schadenersatzpflichtig. Zu gutes Zeugnis → neuer AG könnte klagen!</div><div class="tl-sub">
<div class="c ca"><div class="ct2">Vollzeugnis / Arbeitszeugnis</div><div class="cd">Art, Dauer, Leistung und Verhalten. Bewertet Arbeitsqualität, -menge, -bereitschaft. Kündigungsgrund kann aufgenommen werden.</div></div>
<div class="c cg"><div class="ct2">Arbeitsbestätigung</div><div class="cd">Nur Dauer und Funktion — keine Bewertung. In der Praxis: Betrieb war mit Leistung/Verhalten nicht zufrieden.</div></div>
<div class="c cm"><div class="ct2">Zwischenzeugnis</div><div class="cd">Wie Vollzeugnis, aber Beginn statt Dauer und kein Kündigungsgrund. Anlass: Versetzung, Wechsel Vorgesetzte/Direktion.</div></div>
</div></div></div>

<div class="tl-item"><div class="tl-num tl-num-p">5</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Zeugniscodes</div><div class="tl-merksatz">«Stets zu unserer vollsten Zufriedenheit = sehr gut. Hat sich stets bemüht = ungenügend!»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body"><strong>Leistungscodes:</strong><br>• «stets zu unserer <strong>vollsten</strong> Zufriedenheit» = <strong>Sehr gut</strong><br>• «stets zu unserer <strong>vollen</strong> Zufriedenheit» = <strong>Gut</strong><br>• «stets zu unserer Zufriedenheit» = Befriedigend<br>• «zu unserer Zufriedenheit» = Genügend<br>• «hat sich stets bemüht» = <strong>Ungenügend</strong><br>• «ordnungsgemäss erledigt» = Keine Initiative<br><br><strong>Verhaltenscodes:</strong><br>• «stets zuvorkommend, freundlich und korrekt» = Menschlich sehr wertvoll<br>• «stets freundlich und korrekt» = Korrekt und beliebt<br>• «korrekt» (ohne stets/freundlich) = Korrekt, aber nicht beliebt<br><br><strong>Beendigungscodes:</strong><br>• «was wir ausserordentlich bedauern» = Empfindliche Lücke<br>• «was wir sehr bedauern» = Gerne behalten<br>• «auf eigenen Wunsch» (ohne Bedauern) = Keine grosse Lücke<br>• «im gegenseitigen Einverständnis» = MA wurde gekündigt</div></div></div>

<div class="tl-item"><div class="tl-num tl-num-a">6</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Aufbau Arbeitszeugnis &amp; Referenzen</div><div class="tl-merksatz">«8 Bausteine — Baustein 6 (Leistung &amp; Verhalten) ist der wichtigste!»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body"><strong>8 Bausteine des Arbeitszeugnisses:</strong><br>1. Überschrift<br>2. Unternehmung<br>3. Personalien<br>4. Funktion<br>5. Aufgaben/Fachwissen<br>6. <strong>Leistung &amp; Verhalten ⭐</strong> (= Wichtigster Teil!)<br>7. Austrittsgrund<br>8. Schluss/Datum/Unterschrift<br><br><strong>Referenzen einholen:</strong> Sachlich bleiben, konkrete Fragen, Diskretion zusichern, am Schluss Empfehlung erfragen.<br><strong>Referenzen erteilen:</strong> Ehrliche Auskünfte (Stärken UND Schwächen), nur sachbezogen, Privatsphäre respektieren.<br><br><strong>WICHTIG:</strong> Nie direkt telefonisch Auskunft geben — immer Rückruf vereinbaren!</div></div></div>

</div></div>

<!-- KARTEIKARTEN -->
<div class="sec" id="hrm2_kart"><h1>Karteikarten</h1><p class="sub"><span id="hrm2fcCount">0</span> Karten — klicke zum Umdrehen</p>
<div class="fcc" id="hrm2fcc"></div>
<div class="fd"><div class="fc" id="hrm2fc" onclick="this.classList.toggle('fl')"><div class="ff ffr"><div class="fq" id="hrm2fcq"></div><div class="fh">Klicke zum Umdrehen</div></div><div class="ff ffb"><div class="fa" id="hrm2fca"></div></div></div></div>
<div class="fb"><button onclick="fcPrev()">Zurück</button><button onclick="fcShuffle()">Mischen</button><button class="bp1" onclick="fcNext()">Nächste</button></div>
<div style="text-align:center;margin-top:10px;font-size:11px;color:var(--tx3)" id="hrm2fcPool"></div>
<div id="hrm2fcList" style="display:none;margin-top:16px"></div>
</div>

<!-- QUIZ -->
<div class="sec" id="hrm2_quiz"><h1>Quiz</h1><p class="sub">Alle Fragen werden wiederholt bis du sie kannst</p>
<div id="hrm2qStats" style="margin-bottom:20px">
<div style="display:flex;gap:8px;margin-bottom:14px;flex-wrap:wrap">
<div class="qsc" style="flex:1;min-width:70px"><div class="qsn" id="hrm2qTotR" style="color:var(--g)">0</div><div class="qsl">Total richtig</div></div>
<div class="qsc" style="flex:1;min-width:70px"><div class="qsn" id="hrm2qTotW" style="color:var(--r)">0</div><div class="qsl">Total falsch</div></div>
<div class="qsc" style="flex:1;min-width:70px"><div class="qsn" id="hrm2qTotP" style="color:var(--ac)">0%</div><div class="qsl">Erfolgsquote</div></div>
</div>
<div style="font-size:12px;color:var(--tx3);margin-bottom:6px">Lernerfolg</div>
<div style="display:flex;gap:4px;margin-bottom:4px;align-items:center"><div style="width:10px;height:10px;border-radius:50%;background:var(--g);flex-shrink:0"></div><div style="font-size:12px;color:var(--tx2);width:70px">Sicher</div><div style="flex:1;height:8px;background:var(--s2);border-radius:4px;overflow:hidden"><div id="hrm2qBarG" style="height:100%;background:var(--g);border-radius:4px;transition:width .5s;width:0%"></div></div><div style="font-size:12px;color:var(--tx2);width:30px;text-align:right" id="hrm2qBarGn">0</div></div>
<div style="display:flex;gap:4px;margin-bottom:4px;align-items:center"><div style="width:10px;height:10px;border-radius:50%;background:var(--am);flex-shrink:0"></div><div style="font-size:12px;color:var(--tx2);width:70px">Wackelig</div><div style="flex:1;height:8px;background:var(--s2);border-radius:4px;overflow:hidden"><div id="hrm2qBarO" style="height:100%;background:var(--am);border-radius:4px;transition:width .5s;width:0%"></div></div><div style="font-size:12px;color:var(--tx2);width:30px;text-align:right" id="hrm2qBarOn">0</div></div>
<div style="display:flex;gap:4px;margin-bottom:4px;align-items:center"><div style="width:10px;height:10px;border-radius:50%;background:var(--r);flex-shrink:0"></div><div style="font-size:12px;color:var(--tx2);width:70px">Unsicher</div><div style="flex:1;height:8px;background:var(--s2);border-radius:4px;overflow:hidden"><div id="hrm2qBarR" style="height:100%;background:var(--r);border-radius:4px;transition:width .5s;width:0%"></div></div><div style="font-size:12px;color:var(--tx2);width:30px;text-align:right" id="hrm2qBarRn">0</div></div>
<div style="display:flex;gap:4px;align-items:center"><div style="width:10px;height:10px;border-radius:50%;background:var(--tx3);flex-shrink:0"></div><div style="font-size:12px;color:var(--tx2);width:70px">Noch offen</div><div style="flex:1;height:8px;background:var(--s2);border-radius:4px;overflow:hidden"><div id="hrm2qBarX" style="height:100%;background:var(--tx3);border-radius:4px;transition:width .5s;width:100%"></div></div><div style="font-size:12px;color:var(--tx2);width:30px;text-align:right" id="hrm2qBarXn">0</div></div>
</div>
<div class="pb"><div class="pf" id="hrm2qP"></div></div><div class="pt" id="hrm2qPT">Frage 1</div>
<div id="hrm2qC"></div>
<div style="text-align:center;margin-top:14px">
<button class="bp1" id="hrm2qN" onclick="hrm2qNx()" style="display:none">Nächste Frage</button>
<button class="bp1" id="hrm2qRS" onclick="hrm2qSt()" style="display:none">Weiter üben</button>
<button id="hrm2qReset" onclick="hrm2qReset()" style="display:none;margin-left:8px">Fortschritt zurücksetzen</button>
</div>
</div>

<!-- GLOSSAR -->
<div class="sec" id="hrm2_glossar"><h1>Glossar</h1><p class="sub">Begriffe &amp; Definitionen im Human Resources Management</p>
<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:8px">
<div class="c" style="padding:12px 16px"><strong style="color:var(--pr)">HRM</strong> <span style="color:var(--tx2)">— Human Resources Management (Personalmanagement als strategische Funktion)</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--pr)">BGM</strong> <span style="color:var(--tx2)">— Betriebliches Gesundheitsmanagement (zentral in der Hotellerie)</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--am)">A-Daten</strong> <span style="color:var(--tx2)">— Anamnese-Daten aus Bewerbungsunterlagen (Vorselektion)</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--am)">I-Daten</strong> <span style="color:var(--tx2)">— Interviewdaten aus Gesprächen und Referenzen (Endauswahl)</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--am)">T-Daten</strong> <span style="color:var(--tx2)">— Testdaten aus Persönlichkeitstests, Assessment-Centers (Überprüfung)</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--ac)">STAR-Methode</strong> <span style="color:var(--tx2)">— Situation, Task, Action, Result (verhaltensorientierte Fragetechnik)</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--ac)">Verhaltensdreieck</strong> <span style="color:var(--tx2)">— Situation → Verhalten → Ergebnis (+ 4. Dimension: Lerneffekt)</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--g)">Onboarding</strong> <span style="color:var(--tx2)">— Strukturierter Einführungsprozess für neue Mitarbeitende</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--g)">Buddy-System</strong> <span style="color:var(--tx2)">— Erfahrene:r MA begleitet Neueintretende als Ansprechperson</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--g)">Probezeitgespräch</strong> <span style="color:var(--tx2)">— Abschlussgespräch der Einführung mit 6 Phasen</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--r)">Active Sourcing</strong> <span style="color:var(--tx2)">— Proaktive Suche nach Kandidaten in sozialen Netzwerken</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--r)">E-Recruiting</strong> <span style="color:var(--tx2)">— Elektronische Personalrekrutierung (6 Hauptziele)</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--am)">Employer Branding</strong> <span style="color:var(--tx2)">— Aufbau und Pflege der Arbeitgebermarke</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--am)">Candidate Experience</strong> <span style="color:var(--tx2)">— Gesamterlebnis der Bewerbenden über alle Touchpoints</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--ac)">Bottom-up</strong> <span style="color:var(--tx2)">— Personalplanung von unten: Abteilungen ermitteln Bedarf</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--ac)">Top-down</strong> <span style="color:var(--tx2)">— Personalplanung von oben: Umsatzbudget bestimmt Personalkosten</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--r)">PeNeKo</strong> <span style="color:var(--tx2)">— Personalnebenkosten (indirekte Personalkosten)</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--r)">Personalfluktuation</strong> <span style="color:var(--tx2)">— Rate der Personalwechsel (direkte &amp; indirekte Kosten)</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--pr)">Vollzeugnis</strong> <span style="color:var(--tx2)">— Arbeitszeugnis mit Leistungs- und Verhaltensbewertung</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--pr)">Arbeitsbestätigung</strong> <span style="color:var(--tx2)">— Nur Dauer und Funktion, keine Bewertung</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--pr)">Zwischenzeugnis</strong> <span style="color:var(--tx2)">— Wie Vollzeugnis, aber während laufendem Arbeitsverhältnis</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--am)">Freistellung</strong> <span style="color:var(--tx2)">— Ordentliche Kündigung ohne Arbeitspflicht, voller Lohnanspruch</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--am)">Personalcontrolling</strong> <span style="color:var(--tx2)">— Planungs-, Kontroll- und Evaluationsdenken in der Personalarbeit</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--g)">MbO</strong> <span style="color:var(--tx2)">— Management by Objectives (Führen durch Zielvereinbarungen)</span></div>
</div>
</div>

`;

// KARTEIKARTEN
const HRM2_CARDS = [
// Kap 1: Einführung HRM
['Nenne 3 interne Einflüsse auf die Personalarbeit.','Leitbild/Strategie, Menschenbild der Führungskräfte, Mitarbeiterpotenzial, Stellenwert der Personalarbeit, Werte & Normen.'],
['Nenne 3 externe Einflüsse auf die Personalarbeit.','Gesetze/Verträge, Arbeitsmarkt, Technologie, gesellschaftlicher Wandel, wirtschaftlicher Wandel.'],
['Welche 7 Kernbereiche hat das operative Personalmanagement?','1. Personalplanung, 2. Personalgewinnung, 3. Personaleinstellung, 4. Personalbetreuung, 5. Personalhonorierung, 6. Personalentwicklung, 7. Personaltrennung.'],
['Was umfasst die Personalplanung?','Organigramme/Stellenpläne, Stellenbeschreibungen, Personalbedarfsabschätzung (quantitativ & qualitativ), Personaleinsatz (Arbeitspläne), Personalbudgetierung.'],
['Was gehört zur Personalgewinnung?','Vakanzen-Übersicht, Anforderungsprofile erstellen, Stellenausschreibungen, Zusammenarbeit mit Vermittlern, Bewerbungen sortieren (A-/B-/C-Stapel), Referenzen klären.'],
['Was gehört zur Personaleinstellung/zum Eintritt?','Verträge erstellen, Personaldaten erfassen, Einführungspläne, Welcome-Veranstaltungen, Götti/Gotti zuteilen, AHV/Pensionskasse anmelden, Zugangsrechte, Willkommensgeschenk.'],
['Was ist BGM und warum ist es wichtig?','Betriebliches Gesundheitsmanagement. Zentraler Punkt, da in der Hotellerie zu wenig Fachkräfte den Beruf weiterhin ausleben möchten. Open-Door-Politik und geschulte Führungskräfte sind essenziell.'],
['Warum sollte die HR-Leitung Mitglied der Geschäftsleitung sein?','Um in sämtlichen strategischen Entscheidungen mitbestimmen zu können. Personalarbeit ist nicht nur administrativ, sondern strategisch.'],
['Was ist ein Austrittsgespräch und warum ist es wichtig?','Gespräch beim Austritt eines MA. Liefert wertvolle Informationen über Führung, Arbeitsbedingungen und Organisationsklima.'],
// Kap 2: Personalbeschaffung
['Was verlangt bewerberorientiertes Denken in der Personalwerbung?','Die Bedürfnisse, Erwartungen und Zielsetzungen der vorhandenen und potenziellen MA stehen im Zentrum. Verknüpft mit Leitbild, Betriebsphilosophie und Corporate Identity.'],
['Welche Frage steht am Anfang jeder Stellenbesetzung?','Soll die Stelle intern oder extern besetzt werden?'],
['Nenne 4 Implementierungsmittel aus HRM1 (Grundlagen der Stellenbesetzung).','Stellenbeschreibung, Pflichtenheft, Job Contract, Arbeitsbeschrieb, Funktionendiagramm, Anforderungsprofil.'],
['Warum ist jedes Stelleninserat auch Werbung?','Die Stellenausschreibung ist gleichzeitig ein Auftritt in der Öffentlichkeit und trägt zum Image des Betriebs bei. Unprofessionelle Inserate schaden dem Image.'],
['Nenne die 6 Hauptziele des E-Recruitings.','1. Mehrwert schaffen, 2. Prozessoptimierung, 3. Optimaler Informationsfluss, 4. Kosteneinsparung, 5. Hohe Standardisierung, 6. Effizienzsteigerung.'],
['Welche Kriterien muss eine gute Karriere-Homepage erfüllen?','Leichte Auffindbarkeit, logische Navigation, umfangreicher Informationsgehalt, Interaktivität, Sicherheit (DSG beachten), direkter Hinweis auf Stellenangebote.'],
['Nenne die 8 Recruiting-Kanäle.','1. Intern, 2. Jobbörsen, 3. Social Media, 4. Netzwerk, 5. Vermittlung, 6. Events, 7. Behörden (RAV), 8. Talentpool.'],
['Was ist Active Sourcing?','Proaktive Suche nach Kandidaten in sozialen Netzwerken und Plattformen — das Unternehmen geht auf potenzielle MA zu, statt auf Bewerbungen zu warten.'],
['Was ist Peer Recruiting?','Personalauswahl im, mit und durch das Team — bestehende MA sind am Auswahlprozess beteiligt.'],
['Was ist Employer Branding?','Der Aufbau und die Pflege der Arbeitgebermarke. Ziel: als attraktiver Arbeitgeber wahrgenommen werden, um die besten Talente zu gewinnen.'],
// Kap 3: Einstellungsprozesse
['Was sind A-Daten in der Personalauslese?','Anamnese-Daten aus den Bewerbungsunterlagen zur Vorselektion. Schritt: Vollständigkeit prüfen, Anforderungsprofil abgleichen, Zeugnisse lesen, Entscheid treffen.'],
['Was sind I-Daten?','Interviewdaten aus Bewerberinterviews und Referenzgesprächen zur Endauswahl. 3 Grundfragen: Können? Wollen? Passen/Dürfen?'],
['Was sind T-Daten?','Testdaten aus Tests zur Überprüfung: graphologische Gutachten, Persönlichkeitstests, Assessment-Centers, medizinische Untersuchungen. Tests = nur Bestätigung!'],
['Was bedeuten die 3 Grundfragen im Interview: Können, Wollen, Passen?','Können = Fachkompetenz, Qualifikation, Leistungsfähigkeit. Wollen = Motivation, Energie, Leistungsbereitschaft. Passen = Persönlichkeit, Auftreten, Sozialverhalten.'],
['Nenne die 5 Schritte der Interviewvorbereitung.','1. Anforderungsprofil bestimmen, 2. Bewerbungsunterlagen studieren, 3. Fragenkatalog zusammenstellen, 4. Verhaltensorientierte Fragetechnik, 5. Organisatorisches (Zeit, Raum).'],
['Erkläre das Verhaltensdreieck.','Fragetechnik: Situation (Wie war die Situation?) → Verhalten (Was wurde getan?) → Ergebnis (Welches Ergebnis?). 4. Dimension: Was gelernt? Was anders machen?'],
['Was ist die STAR-Methode?','Situation → Task → Action → Result. Variante des Verhaltensdreiecks aus den USA für verhaltensorientierte Interviewfragen.'],
['Nenne die 8 Phasen des Interviewverlaufs.','1. Begrüssung, 2. Gesprächsaufnahme, 3. Rahmen abstecken, 4. Fachliche Kompetenzen, 5. Persönlichkeit, 6. Informationen, 7. Erwartungsrahmen, 8. Weiteres Vorgehen.'],
['Was wird in Phase 5 des Interviews (Persönlichkeit) geprüft?','Soziale und persönliche Kompetenzen: Selbsteinschätzung, Wertvorstellungen, Verhaltensdreieck-Technik anwenden.'],
['Was passiert in der A-Daten Selektion bei Schritt 3 (Arbeitszeugnisse lesen)?','Wer hat das Zeugnis verfasst? Zeitdauer der Anstellung? Gründe für Beendigung? Qualität (einfach/qualifiziert)? Unterschiede zu anderen Zeugnissen?'],
// Kap 4: Onboarding
['Nenne 4 Vorteile eines guten Onboardings.','Kürzere Einarbeitungszeit, höhere Arbeitsqualität, schnelle Identifikation mit dem Unternehmen, besseres Betriebsklima, weniger Kontrolle nötig, Vorbereitung für höhere Funktionen.'],
['Was ist das Ziel des Onboardings?','Neue MA sollen sich innert kurzer Zeit integriert fühlen, im Betrieb zweckmässig handeln und entscheiden können sowie der Firma über längere Zeit erhalten bleiben.'],
['Was gehört zur Vorbereitung vor dem 1. Arbeitstag?','Arbeitsvertrag bereit, Dossier erstellt, Willkommenspaket, Buddy bestimmen, Technische Ausstattung, Team informieren, Willkommens-E-Mail mit Infos zum ersten Tag.'],
['Was passiert am 1. Arbeitstag?','Persönliches Willkommen durch Vorgesetzte, Vorstellung im Team, Rundgang, Arbeitsplatz einrichten, Werte/Kultur vermitteln, gemeinsames Mittagessen, Resümee am Abend (Chefsache!).'],
['Warum ist das Resümee am Ende des 1. Arbeitstags wichtig?','Es ist Chefsache! 5–10 Minuten einfach nur zuhören. Zeigt Wertschätzung und gibt neuen MA das Gefühl, dass ihre Eindrücke wichtig sind.'],
['Was ist ein Buddy im Onboarding?','Eine erfahrene Mitarbeiterin oder ein erfahrener Mitarbeiter, die/der als Ansprechperson den Neueintretenden durch die ersten Wochen begleitet.'],
['Nenne die 6 Phasen des Probezeitgesprächs.','1. Vorbereitung & Einstieg, 2. Rückblick auf Probezeit, 3. Feedbackgespräch, 4. Zukunftsperspektiven, 5. Entscheidung & nächste Schritte, 6. Abschluss.'],
['Welche 3 Entscheidungen sind am Ende des Probezeitgesprächs möglich?','Festanstellung, begründete Verlängerung der Probezeit oder Trennung. Alles muss dokumentiert werden.'],
['Was ist der häufigste Fehler beim Onboarding?','Fehlende Betreuung nach den ersten Tagen. Viele Betriebe investieren nur in den ersten Tag und vergessen die folgenden Wochen und Monate.'],
// Kap 5: Personalplanung
['Was ist das Kernziel der Personalplanung?','Erforderliches Personal mit der richtigen Qualifikation in der richtigen Anzahl zum richtigen Zeitpunkt.'],
['Warum hat Personalplanung an Bedeutung gewonnen? (4 Gründe)','Personalkostenintensivierung, steigende gesetzliche Einschränkungen, Bedürfnis nach Arbeitsplatzsicherheit, Veränderung der Arbeitsplatzanforderungen, Trend zur Arbeitszeitverkürzung.'],
['Was ist der Unterschied zwischen individueller und kollektiver Personalplanung?','Individuell = Einzelperson (Laufbahn, Einarbeitung, Entwicklung, Pensionierung). Kollektiv = Gesamtheit (Einsatz, Bedarf, Bestand, Beschaffung, Entwicklung, Freisetzung).'],
['Erkläre Bottom-up Personalplanung.','Von unten nach oben: Abteilungsleitende erstellen Dienstpläne und ermitteln, wie viele MA sie für die geforderte Leistung benötigen.'],
['Erkläre Top-down Personalplanung.','Von oben nach unten: Aus dem Umsatzbudget wird der Personalaufwand abgeleitet und auf die Abteilungen verteilt.'],
['Warum sind Bottom-up und Top-down allein unzureichend?','Nur eine Methode führt zu unrealistischen Ergebnissen. Beide müssen einander angepasst werden (Abgleich zwischen Abteilungsbedarf und Budgetvorgaben).'],
['Nenne die 8 Schritte zum Personalbudget.','1. Personalbestand, 2. Bruttolöhne + 13. ML, 3. Sozialleistungen (AGB ~14%), 4. Beschaffungskosten, 5. Entwicklungskosten, 6. Freisetzungskosten, 7. Weitere PeNeKo, 8. L-GAV Vollzugskosten.'],
['Was sind direkte vs. indirekte Personalkosten?','Direkt: Lohn, Gehalt, variable Bestandteile, Sozialabgaben. Indirekt (PeNeKo): Freiwillige Sozialbeiträge, Entgeltfortzahlung, Urlaubsgeld, Aus-/Weiterbildung.'],
['Nenne direkte und indirekte Fluktuationskosten.','Direkt: Werbekosten, Bewerbungsbearbeitung, Vorstellungs- und Einarbeitungskosten. Indirekt: Kettenreaktionen bei MA, Umsatzeinbussen bei Kunden, Image-Verlust.'],
['Was ist Personalcontrolling?','Planungs-, Kontroll- und Evaluationsdenken in der Personalarbeit. Untersucht ob Planungsarbeiten umgesetzt wurden und die erwünschte Wirkung erzielt haben. Quantitativ + qualitativ.'],
// Kap 6: Austritt
['Nenne die 3 Eskalationsstufen vor einer Kündigung.','1. Gesprächsnotiz/Verweis (einmalige Vergehen), 2. Verwarnung (grössere/wiederholte Vergehen), 3. Verwarnung mit Kündigungsandrohung (nach mind. 1 Verwarnung).'],
['Was ist eine missbräuchliche Kündigung?','Kündigung aus unfairen Gründen (OR 336). Entschädigung bis zu 6 Monatslöhne möglich. In der Schweiz braucht es keinen triftigen Grund, aber unfaire Gründe sind verboten.'],
['Ist schlechte Arbeitsleistung ein Grund für fristlose Kündigung?','NEIN! Dafür braucht es den ordentlichen Weg mit Verwarnungen. Fristlose Kündigung nur bei: Vermögensschädigung, Betrug, krasser Anstandsverletzung, Arbeitsverweigerung.'],
['Was ist eine Freistellung? (Abgrenzung zur fristlosen Kündigung)','Betrieb verzichtet freiwillig auf Leistung — Anstellungsverhältnis läuft bis Ablauf der Kündigungsfrist weiter. Voller Lohnanspruch. ≠ fristlose Kündigung!'],
['Nenne die 3 Zeugnisarten.','1. Vollzeugnis/Arbeitszeugnis (Art, Dauer, Leistung & Verhalten), 2. Arbeitsbestätigung (nur Dauer & Funktion), 3. Zwischenzeugnis (wie Vollzeugnis, aber während Anstellung).'],
['Nenne die 5 Grundprinzipien des Arbeitszeugnisses.','Wahrheit, Wohlwollen, Vollständigkeit, Klarheit, Individuell.'],
['Was bedeutet «stets zu unserer vollsten Zufriedenheit» im Zeugnis?','Sehr gut — überwiegend sehr gute Leistungen.'],
['Was bedeutet «hat sich stets bemüht» im Zeugnis?','Ungenügend — Fähigkeiten beschränkt, aber willig. Sehr negativ!'],
['Was bedeutet «im gegenseitigen Einverständnis» im Zeugnis?','Dem MA wurde gekündigt (oder der Betrieb war froh über den Abgang).'],
['Nenne die 8 Bausteine eines Arbeitszeugnisses.','1. Überschrift, 2. Unternehmung, 3. Personalien, 4. Funktion, 5. Aufgaben/Fachwissen, 6. Leistung & Verhalten (wichtigster!), 7. Austrittsgrund, 8. Schluss/Datum/Unterschrift.'],
['Warum nie direkt telefonisch Referenzen erteilen?','Sicherheitsregel: Immer Rückruf vereinbaren! So kann verifiziert werden, wer anruft, und die Aussagen können vorbereitet werden.'],
];

// REGISTRIERUNG
window.TIS = window.TIS || {};
window.TIS.courses = window.TIS.courses || {};
window.TIS.courses.hrm2 = {
  config: courseConfig,
  html: courseHTML,
  flashcards: HRM2_CARDS,
};

})();
