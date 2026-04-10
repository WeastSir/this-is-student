// ===== KURS: HRM 2 — Human Resources Management =====
// Auto-generated module for This Is Student
(function() {

const courseConfig = {
  id: 'hrm2',
  name: 'HRM 2',
  pages: ['hrm2','hrm2_kap1','hrm2_kap2','hrm2_kap3','hrm2_kap4','hrm2_kap5','hrm2_kap6','hrm2_dossier','hrm2_ueb','hrm2_kart','hrm2_quiz','hrm2_glossar'],
  subNav: [
    {s:'hrm2',l:'Übersicht'},
    {s:'hrm2_kap1',l:'Einführung HRM'},
    {s:'hrm2_kap2',l:'Personalbeschaffung'},
    {s:'hrm2_kap3',l:'Einstellungsprozesse'},
    {s:'hrm2_kap4',l:'Onboarding'},
    {s:'hrm2_kap5',l:'Personalplanung'},
    {s:'hrm2_kap6',l:'Austritt'},
    {s:'hrm2_dossier',l:'Dossier-Analyse'},
    {s:'hrm2_ueb',l:'Übungen'},
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
<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:12px">
<div class="c ck" onclick="go('hrm2_dossier')" style="text-align:center;padding:24px 16px">
<div style="font-size:24px;font-weight:700;background:var(--grad);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;margin-bottom:6px">📋</div>
<div class="ct2">Dossier-Analyse</div><div class="cd">Schritt für Schritt</div>
</div>
<div class="c ck" onclick="go('hrm2_ueb')" style="text-align:center;padding:24px 16px">
<div style="font-size:24px;font-weight:700;background:var(--grad);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;margin-bottom:6px">4</div>
<div class="ct2">Übungen</div><div class="cd">Interaktiv mit Korrektur</div>
</div>
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

<!-- ===================== DOSSIER-ANALYSE ===================== -->
<div class="sec" id="hrm2_dossier"><h1>Bewerbungsdossier analysieren</h1><p class="sub">Schritt für Schritt durch ein komplettes Dossier — Lea Brunner (25)</p>

<div class="c" style="border-color:rgba(88,166,255,.2);padding:20px;display:flex;gap:16px;align-items:center;flex-wrap:wrap">
<div style="width:52px;height:52px;border-radius:50%;background:linear-gradient(135deg,var(--ac),var(--pr));display:flex;align-items:center;justify-content:center;font-size:20px;font-weight:700;color:#fff;flex-shrink:0">LB</div>
<div><div style="font-size:17px;font-weight:700">Lea Brunner, 25 Jahre</div><div style="font-size:13px;color:var(--tx2)">Bewirbt sich als <strong style="color:var(--ac)">Réceptionistin</strong> im Hotel & Spa Lenkerhof ★★★★★, Lenk</div><div style="font-size:12px;color:var(--tx3)">Schweizerin · Hotel-Kommunikationsfachfrau EFZ · 4 Jahre Berufserfahrung</div></div>
</div>

<div style="display:flex;gap:4px;margin:16px 0;flex-wrap:wrap" id="hrm2DosNav">
<div class="c ck" style="padding:6px 14px;font-size:12px;font-weight:600;background:var(--ac);color:#fff;border-color:var(--ac)" onclick="hrm2DosStep(0)">Übersicht</div>
<div class="c ck" style="padding:6px 14px;font-size:12px;font-weight:600" onclick="hrm2DosStep(1)">1. Begleitschreiben</div>
<div class="c ck" style="padding:6px 14px;font-size:12px;font-weight:600" onclick="hrm2DosStep(2)">2. Lebenslauf</div>
<div class="c ck" style="padding:6px 14px;font-size:12px;font-weight:600" onclick="hrm2DosStep(3)">3. Diplome</div>
<div class="c ck" style="padding:6px 14px;font-size:12px;font-weight:600" onclick="hrm2DosStep(4)">4. Zeugnis Lehre</div>
<div class="c ck" style="padding:6px 14px;font-size:12px;font-weight:600" onclick="hrm2DosStep(5)">5. Zwischenzeugnis</div>
<div class="c ck" style="padding:6px 14px;font-size:12px;font-weight:600" onclick="hrm2DosStep(6)">6. Vergleich</div>
<div class="c ck" style="padding:6px 14px;font-size:12px;font-weight:600" onclick="hrm2DosStep(7)">7. Entscheid</div>
</div>

<!-- Step 0: Übersicht -->
<div id="hrm2Dos0">
<h2 style="font-family:var(--se);font-size:20px;margin:20px 0 10px">Wie analysiert man ein Bewerbungsdossier?</h2>
<p style="color:var(--tx2);margin-bottom:16px">Ein vollständiges Dossier besteht aus mehreren Dokumenten. Jedes gibt andere Informationen preis — zusammen ergeben sie ein Gesamtbild.</p>
<div style="display:grid;gap:10px;margin:12px 0">
<div style="display:flex;gap:14px;align-items:flex-start"><div style="width:32px;height:32px;border-radius:50%;background:rgba(88,166,255,.1);color:var(--ac);display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0">1</div><div><strong>Begleitschreiben</strong><div style="font-size:13px;color:var(--tx2)">Warum diese Stelle? Individuell oder Standard? Verbindung zum Unternehmen?</div></div></div>
<div style="display:flex;gap:14px;align-items:flex-start"><div style="width:32px;height:32px;border-radius:50%;background:rgba(63,185,80,.1);color:var(--g);display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0">2</div><div><strong>Lebenslauf</strong><div style="font-size:13px;color:var(--tx2)">Chronologischer Werdegang. Lücken? Häufige Wechsel? Aufstieg erkennbar?</div></div></div>
<div style="display:flex;gap:14px;align-items:flex-start"><div style="width:32px;height:32px;border-radius:50%;background:rgba(210,153,34,.1);color:var(--am);display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0">3</div><div><strong>Diplome & Zertifikate</strong><div style="font-size:13px;color:var(--tx2)">Formale Qualifikationen. Stimmen CV-Angaben mit Belegen überein?</div></div></div>
<div style="display:flex;gap:14px;align-items:flex-start"><div style="width:32px;height:32px;border-radius:50%;background:rgba(188,140,255,.1);color:var(--pr);display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0">4</div><div><strong>Arbeitszeugnisse</strong><div style="font-size:13px;color:var(--tx2)">Das Herzstück. Wer unterschreibt? Zeugniscodes? Vollzeugnis oder nur Bestätigung?</div></div></div>
<div style="display:flex;gap:14px;align-items:flex-start"><div style="width:32px;height:32px;border-radius:50%;background:rgba(248,81,73,.1);color:var(--r);display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0">5</div><div><strong>Gesamtbeurteilung</strong><div style="font-size:13px;color:var(--tx2)">Abgleich mit Anforderungsprofil: A-, B- oder C-Kandidat:in?</div></div></div>
</div>
<div style="background:var(--aml);border:1px solid rgba(210,153,34,.3);border-radius:10px;padding:12px 16px;font-size:13px;color:var(--am);margin:16px 0">Klicke oben auf die einzelnen Schritte, um das Dossier von <strong>Lea Brunner</strong> durchzugehen.</div>
</div>

<!-- Step 1: Begleitschreiben -->
<div id="hrm2Dos1" style="display:none">
<h2 style="font-family:var(--se);font-size:18px;margin:16px 0 10px">Schritt 1 — Das Begleitschreiben</h2>
<div style="background:var(--s2);border:1px solid var(--bd);border-radius:14px;padding:24px;margin:12px 0;font-size:13px;color:var(--tx2);line-height:1.9">
<strong>Lea Brunner</strong><br>Seestrasse 12, 3600 Thun<br>076 445 23 18 · lea.brunner@outlook.com<br><br>
<div style="text-align:right;color:var(--tx3)">Hotel & Spa Lenkerhof<br>z.Hd. Frau Andrea Lüthi, HR-Leiterin<br>Badstrasse 20, 3775 Lenk im Simmental<br><br>Thun, 12. Januar 2026</div><br>
<strong style="font-size:14px">Bewerbung als Réceptionistin</strong><br><br>
Sehr geehrte Frau Lüthi<br><br>
Auf der Karriereseite des Lenkerhofs bin ich auf die ausgeschriebene Stelle als Réceptionistin gestossen. Der Lenkerhof ist für mich nicht irgendein Hotel — ich bin im Simmental aufgewachsen und kenne Ihr Haus seit meiner Kindheit. Die Verbindung aus Luxushotellerie und authentischer Berner Oberländer Gastfreundschaft fasziniert mich.<br><br>
Nach meiner Lehre als Hotel-Kommunikationsfachfrau im Hotel Bellevue Palace in Bern und drei Jahren an der Réception des Victoria-Jungfrau in Interlaken bringe ich solide 5-Sterne-Erfahrung mit. In Interlaken war ich zuletzt als Senior Réceptionistin für das Training neuer Mitarbeitender und die VIP-Betreuung verantwortlich.<br><br>
Was mich besonders am Lenkerhof reizt: Ihr ganzheitliches Konzept, bei dem Spa und Gastronomie nicht getrennt vom Hotelbetrieb gedacht werden, sondern als Gesamterlebnis. Genau diese Philosophie möchte ich an der Réception verkörpern und weitertragen.<br><br>
Ich spreche fliessend Deutsch, Englisch und Französisch und verfüge über fundierte Kenntnisse in Opera PMS. Auch zeitlich bin ich flexibel — Schichtarbeit und Wochenenddienste sind für mich selbstverständlich.<br><br>
Über eine Einladung zum persönlichen Gespräch würde ich mich sehr freuen.<br><br>
Freundliche Grüsse<br><br>Lea Brunner<br><br><em style="color:var(--tx3)">Beilagen: Lebenslauf, Arbeitszeugnisse, Kopien Diplome und Zertifikate</em>
</div>
<div style="font-family:var(--se);font-size:15px;margin:18px 0 8px;color:var(--ac)">Worauf achten?</div>
<div class="c" style="font-size:13px;color:var(--tx2);padding:14px 18px;line-height:1.8">
<strong style="color:var(--tx);display:inline-block;min-width:150px">Individuell?</strong> Ja — Bezug zum Lenkerhof, persönliche Verbindung (Simmental). Kein Standardbrief.<br>
<strong style="color:var(--tx);display:inline-block;min-width:150px">Schlüsselbegriffe?</strong> 5★-Erfahrung, VIP-Betreuung, Opera PMS, Schichtbereitschaft — alles relevant.<br>
<strong style="color:var(--tx);display:inline-block;min-width:150px">Motivation klar?</strong> Ja — Rückkehr ins Simmental, Begeisterung fürs Konzept, Karriereschritt.<br>
<strong style="color:var(--tx);display:inline-block;min-width:150px">Form & Sprache?</strong> Korrekte Anrede (Name HR-Leiterin), saubere Struktur, keine Fehler.<br>
<strong style="color:var(--tx);display:inline-block;min-width:150px">Rote Flaggen?</strong> Keine erkennbar.
</div>
</div>

<!-- Step 2: Lebenslauf -->
<div id="hrm2Dos2" style="display:none">
<h2 style="font-family:var(--se);font-size:18px;margin:16px 0 10px">Schritt 2 — Der Lebenslauf</h2>
<div style="background:var(--s2);border:1px solid var(--bd);border-radius:14px;padding:24px;margin:12px 0;font-size:13px;color:var(--tx2);line-height:1.9">
<div style="text-align:center;margin-bottom:14px;padding-bottom:10px;border-bottom:1px solid var(--bd)"><strong style="font-size:18px;color:var(--tx)">Lebenslauf</strong></div>
<strong style="font-size:16px;color:var(--tx)">Lea Brunner</strong><br>Seestrasse 12, 3600 Thun · 076 445 23 18 · lea.brunner@outlook.com<br>Schweizerin · 08.03.2001 · Ledig<br>Hobbys: Yoga, Wandern, Fotografie, Kochen, Reisen<br><br>
<strong style="color:var(--tx)">Berufserfahrung</strong><br><br>
<div style="display:flex;gap:12px;margin-bottom:12px"><div style="min-width:120px;color:var(--tx3);font-size:12px">Jan 2023 – heute</div><div><strong style="color:var(--tx)">Victoria-Jungfrau Grand Hotel & Spa, Interlaken ★★★★★</strong><br>Senior Réceptionistin<br><span style="font-size:12px;color:var(--tx3)">Seit Okt 2024: zusätzlich Einarbeitung neuer MA + VIP-Betreuung</span></div></div>
<div style="display:flex;gap:12px;margin-bottom:12px"><div style="min-width:120px;color:var(--tx3);font-size:12px">Aug 2019 – Dez 2022</div><div><strong style="color:var(--tx)">Hotel Bellevue Palace, Bern ★★★★★</strong><br>Lehrling Hotel-Kommunikationsfachfrau (2019–2022)<br>Réceptionistin (Okt–Dez 2022, nach Lehrabschluss)</div></div>
<div style="display:flex;gap:12px;margin-bottom:12px"><div style="min-width:120px;color:var(--tx3);font-size:12px">Jul – Aug 2018</div><div><strong style="color:var(--tx)">Restaurant Alpenblick, Lenk</strong><br>Ferienjob Service (Sommersaison)</div></div>
<strong style="color:var(--tx)">Ausbildung</strong><br>
• Hotel-Kommunikationsfachfrau EFZ, Hotel Bellevue Palace Bern, Profil E — Abschluss 2022 (Note 5.2)<br>
• Sekundarschule, Oberstufenzentrum Zweisimmen — 2015–2019<br><br>
<strong style="color:var(--tx)">Weiterbildung & Zertifikate</strong><br>
• Cambridge Advanced Certificate (C1) — 2023<br>• DELF B2 Französisch — 2022<br>• Opera PMS Anwender-Zertifikat — 2023<br>• Erste-Hilfe BLS-AED — 2024<br><br>
<strong style="color:var(--tx)">IT</strong><br>• Opera PMS V5 (3 Jahre) · Protel (Grundkenntnisse) · MS Office · Canva<br><br>
<strong style="color:var(--tx)">Sprachen</strong><br>• Deutsch: Muttersprache · Englisch: C1 · Französisch: B2 · Spanisch: A2<br><br>
<strong style="color:var(--tx)">Referenzen</strong><br>• Herr Thomas Gerber, FOM, Victoria-Jungfrau Interlaken<br>• Frau Kathrin Moser, Ausbildungsverantwortliche, Bellevue Palace Bern
</div>
<div style="font-family:var(--se);font-size:15px;margin:18px 0 8px;color:var(--ac)">Worauf achten?</div>
<div class="c" style="font-size:13px;color:var(--tx2);padding:14px 18px;line-height:1.8">
<strong style="color:var(--tx);display:inline-block;min-width:150px">Lücken?</strong> Keine — nahtlos von Lehre (Dez 2022) zu Victoria-Jungfrau (Jan 2023).<br>
<strong style="color:var(--tx);display:inline-block;min-width:150px">Karriereverlauf?</strong> Aufsteigend: Lehrling → Réceptionistin → Senior mit Zusatzverantwortung.<br>
<strong style="color:var(--tx);display:inline-block;min-width:150px">Konsistenz?</strong> CV bestätigt alle Angaben aus dem Motivationsschreiben.<br>
<strong style="color:var(--tx);display:inline-block;min-width:150px">Auffälligkeiten?</strong> Nur 3 Monate nach Lehrabschluss im Bellevue geblieben — warum? Im Zeugnis prüfen.
</div>
</div>

<!-- Step 3: Diplome -->
<div id="hrm2Dos3" style="display:none">
<h2 style="font-family:var(--se);font-size:18px;margin:16px 0 10px">Schritt 3 — Diplome & Zertifikate</h2>
<div style="background:var(--s2);border:1px solid var(--bd);border-radius:14px;padding:24px;margin:12px 0;font-size:13px;color:var(--tx2);line-height:1.9">
<div style="text-align:center;margin-bottom:14px;padding-bottom:10px;border-bottom:1px solid var(--bd)"><strong style="font-size:15px;color:var(--tx)">EIDGENÖSSISCHES FÄHIGKEITSZEUGNIS</strong><br>Hotel-Kommunikationsfachfrau EFZ</div>
Frau <strong style="color:var(--tx)">Lea Brunner</strong>, geboren am 08.03.2001, von Lenk im Simmental BE, hat die Abschlussprüfung der beruflichen Grundbildung als Hotel-Kommunikationsfachfrau bestanden.<br><br>
Erfahrungsnote Betrieb: <strong style="color:var(--tx)">5.3</strong> · Erfahrungsnote Schule: <strong style="color:var(--tx)">5.1</strong> · Prüfung praktisch: <strong style="color:var(--tx)">5.5</strong> · Prüfung schriftlich: <strong style="color:var(--tx)">5.0</strong> · <strong style="color:var(--g)">Gesamtnote: 5.2</strong><br>
Schwerpunkt: Hotelempfang & Administration · Profil E (erweitert) · Berufsfachschule: Wirtschaftsschule Bern<br><br><em style="color:var(--tx3)">Bern, 10. Juli 2022 — SBFI</em>
</div>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:12px 0">
<div style="background:var(--s2);border:1px solid var(--bd);border-radius:14px;padding:18px;font-size:13px;color:var(--tx2);line-height:1.8">
<strong style="color:var(--tx)">Cambridge Advanced (C1)</strong><br>Grade: B (Score: 186)<br>Reading: 188 · Writing: 180 · Listening: 192 · Speaking: 184<br><em style="color:var(--tx3)">November 2023</em>
</div>
<div style="background:var(--s2);border:1px solid var(--bd);border-radius:14px;padding:18px;font-size:13px;color:var(--tx2);line-height:1.8">
<strong style="color:var(--tx)">DELF B2 Französisch</strong><br>Note globale: 72/100<br>CO: 18/25 · CE: 19/25 · PO: 17/25 · PE: 18/25<br><em style="color:var(--tx3)">Juni 2022, Alliance Française Berne</em>
</div>
</div>
<div class="c" style="font-size:13px;color:var(--tx2);padding:14px 18px;line-height:1.8">
<strong style="color:var(--tx);display:inline-block;min-width:150px">EFZ bestätigt?</strong> Ja — Note 5.2, Profil E. Überdurchschnittlich.<br>
<strong style="color:var(--tx);display:inline-block;min-width:150px">Sprachzertifikate?</strong> Beide vorhanden und aktuell. C1 Englisch, B2 Französisch.<br>
<strong style="color:var(--tx);display:inline-block;min-width:150px">Konsistenz?</strong> Alle Angaben stimmen mit CV überein.
</div>
</div>

<!-- Step 4: Arbeitszeugnis Lehre -->
<div id="hrm2Dos4" style="display:none">
<h2 style="font-family:var(--se);font-size:18px;margin:16px 0 10px">Schritt 4 — Arbeitszeugnis Lehrbetrieb</h2>
<div style="background:var(--s);border:1px solid var(--bd);border-radius:14px;padding:24px;margin:12px 0;font-size:13px;color:var(--tx2);line-height:1.9">
<div style="text-align:center;margin-bottom:16px;padding-bottom:12px;border-bottom:1px solid var(--bd)"><div style="font-size:11px;color:var(--tx3);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px">Hotel Bellevue Palace · Bern</div><strong style="font-size:16px;color:var(--tx)">ARBEITSZEUGNIS</strong><br><br>Frau Lea Brunner, geboren am 08.03.2001, von Lenk im Simmental BE,<br>war vom 01.08.2019 bis 31.12.2022 in unserem Haus tätig.</div>
Frau Brunner absolvierte vom 1. August 2019 bis 9. Juli 2022 ihre berufliche Grundbildung als Hotel-Kommunikationsfachfrau EFZ in unserem Betrieb. Während der Lehrzeit durchlief sie folgende Abteilungen:<br><br>
• Réception & Front Office (12 Monate)<br>• Réservation & Revenue Support (6 Monate)<br>• Back Office & Administration (6 Monate)<br>• Housekeeping & Guest Relations (4 Monate)<br>• Concierge & Telefon (4 Monate)<br><br>
Nach dem erfolgreichen Abschluss ihrer Lehre mit der Gesamtnote 5.2 wurde Frau Brunner ab Oktober 2022 als Réceptionistin in unser Front-Office-Team übernommen. In dieser Funktion war sie verantwortlich für:<br><br>
• Empfang und Betreuung unserer nationalen und internationalen Gäste<br>• Check-in und Check-out inkl. Abrechnung<br>• Telefonzentrale und E-Mail-Korrespondenz<br>• Reservationsbearbeitung im Protel-System<br>• Unterstützung bei der VIP-Betreuung und bei Bankettanlässen<br><br>
Frau Brunner hat während ihrer Lehrzeit eine bemerkenswerte Entwicklung durchlaufen. Sie zeigte von Beginn an grosses Interesse und eine hohe Lernbereitschaft. Ihre Abschlussprüfung bestand sie mit einer ausgezeichneten Note, was unsere Einschätzung ihrer Fähigkeiten bestätigte.<br><br>
In ihrer anschliessenden Tätigkeit als Réceptionistin hat Frau Brunner die ihr übertragenen Aufgaben stets zu unserer vollen Zufriedenheit erfüllt. Sie arbeitete speditiv, zuverlässig und zeigte auch in anspruchsvollen Situationen eine ruhige und professionelle Haltung.<br><br>
Im Umgang mit Vorgesetzten, Mitarbeitenden und Gästen war Frau Brunner stets freundlich, zuvorkommend und korrekt. Sie war im Team beliebt und trug aktiv zu einem positiven Arbeitsklima bei.<br><br>
Frau Brunner verlässt unser Haus auf eigenen Wunsch, um sich beruflich weiterzuentwickeln. Wir bedauern ihren Abgang und danken ihr für ihren engagierten Einsatz während mehr als drei Jahren. Für ihre berufliche und persönliche Zukunft wünschen wir ihr alles Gute.<br><br>
<em style="color:var(--tx3)">Bern, 31. Dezember 2022<br>Kathrin Moser, Ausbildungsverantwortliche · Philippe Hugentobler, Direktor</em>
</div>
<div style="font-family:var(--se);font-size:15px;margin:18px 0 8px;color:var(--ac)">Analyse</div>
<div class="c" style="font-size:13px;color:var(--tx2);padding:14px 18px;line-height:1.8">
<strong style="color:var(--tx);display:inline-block;min-width:150px">Leistung?</strong> «Stets zu unserer vollen Zufriedenheit» = Gut (nicht «vollsten» = sehr gut).<br>
<strong style="color:var(--tx);display:inline-block;min-width:150px">Verhalten?</strong> «Stets freundlich, zuvorkommend und korrekt» + «im Team beliebt» = gutes bis sehr gutes Verhalten.<br>
<strong style="color:var(--tx);display:inline-block;min-width:150px">Schlussformel?</strong> «Auf eigenen Wunsch» + «Wir bedauern» (ohne «sehr» oder «ausserordentlich»).<br>
<strong style="color:var(--tx);display:inline-block;min-width:150px">Unterschrift?</strong> Ausbildungsverantwortliche + Direktor — korrekt.<br>
<strong style="color:var(--tx);display:inline-block;min-width:150px">Frage fürs Interview?</strong> Warum nur 3 Monate nach Lehrabschluss gewechselt?
</div>
</div>

<!-- Step 5: Zwischenzeugnis -->
<div id="hrm2Dos5" style="display:none">
<h2 style="font-family:var(--se);font-size:18px;margin:16px 0 10px">Schritt 5 — Zwischenzeugnis Victoria-Jungfrau</h2>
<div style="background:var(--s);border:1px solid var(--bd);border-radius:14px;padding:24px;margin:12px 0;font-size:13px;color:var(--tx2);line-height:1.9">
<div style="text-align:center;margin-bottom:16px;padding-bottom:12px;border-bottom:1px solid var(--bd)"><div style="font-size:11px;color:var(--tx3);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px">Victoria-Jungfrau Grand Hotel & Spa · Interlaken</div><strong style="font-size:16px;color:var(--tx)">ZWISCHENZEUGNIS</strong><br><br>Frau Lea Brunner, geboren am 08.03.2001, von Lenk im Simmental BE,<br>ist seit dem 01.01.2023 als <strong style="color:var(--tx)">Réceptionistin / Senior Réceptionistin</strong> tätig.</div>
Frau Brunner wurde per 1. Januar 2023 als Réceptionistin aufgenommen. Aufgrund ihrer hervorragenden Leistungen und ihres Engagements wurde sie per 1. Oktober 2024 zur Senior Réceptionistin befördert.<br><br>
Ihr aktuelles Aufgabengebiet umfasst:<br><br>
• Eigenständige Durchführung aller Front-Office-Prozesse<br>• VIP-Gästebetreuung und persönliche Betreuung von Stammgästen<br>• Bearbeitung von Gästewünschen, Reklamationen und Sonderwünschen<br>• Upselling und Revenue-orientierte Zimmerzuweisung<br>• Einarbeitung und Coaching neuer Mitarbeitender und Praktikant:innen<br>• Bedienung und Administration von Opera PMS V5<br>• Nacht-Audit (Stellvertretung) und Monatsabschlüsse<br>• Enge Zusammenarbeit mit Concierge, Housekeeping, Spa und F&B<br><br>
Frau Brunner erfüllt sämtliche ihr übertragenen Aufgaben stets zu unserer vollsten Zufriedenheit. Sie zeichnet sich durch ein ausgezeichnetes Fachwissen aus, das sie auch in komplexen Situationen souverän und lösungsorientiert einsetzt. Ihr Upselling-Erfolg liegt konstant über dem Teamdurchschnitt.<br><br>
Besonders hervorzuheben ist Frau Brunners Fähigkeit, neue Mitarbeitende professionell einzuarbeiten. Sie vermittelt Wissen geduldig und strukturiert und wird von den Lernenden und Praktikant:innen als Mentorin sehr geschätzt.<br><br>
Im Umgang mit Vorgesetzten, Mitarbeitenden und Gästen ist Frau Brunner stets zuvorkommend, freundlich und korrekt. Ihre ruhige, herzliche und professionelle Art wird von unserer anspruchsvollen internationalen Kundschaft besonders geschätzt. Im Team ist sie eine verlässliche und beliebte Kollegin.<br><br>
Frau Brunner wird dieses Zwischenzeugnis auf ihren Wunsch hin ausgestellt, da sie sich beruflich verändern möchte. Wir würden Frau Brunner sehr ungern verlieren und unterstützen sie gleichwohl in ihrem Vorhaben. Für ihre weitere berufliche und persönliche Zukunft wünschen wir ihr von Herzen alles Gute und viel Erfolg.<br><br>
<em style="color:var(--tx3)">Interlaken, 6. Januar 2026<br>Thomas Gerber, Front Office Manager · Christian Oesch, General Manager</em>
</div>
<div style="font-family:var(--se);font-size:15px;margin:18px 0 8px;color:var(--ac)">Analyse</div>
<div class="c" style="font-size:13px;color:var(--tx2);padding:14px 18px;line-height:1.8">
<strong style="color:var(--tx);display:inline-block;min-width:150px">Leistung?</strong> «Stets zu unserer vollsten Zufriedenheit» = Sehr gut. Steigerung zum Lehrzeugnis!<br>
<strong style="color:var(--tx);display:inline-block;min-width:150px">Verhalten?</strong> «Stets zuvorkommend, freundlich und korrekt» + «ruhig, herzlich, professionell» = Sehr gut.<br>
<strong style="color:var(--tx);display:inline-block;min-width:150px">Beförderung?</strong> Zur Senior Réceptionistin nach 21 Monaten — zeigt Leistungsentwicklung.<br>
<strong style="color:var(--tx);display:inline-block;min-width:150px">Schlussformel?</strong> «Sehr ungern verlieren» = starkes Bedauern. Positiver als nur «bedauern».<br>
<strong style="color:var(--tx);display:inline-block;min-width:150px">Unterschrift?</strong> FOM + GM = höchste Ebene. Zeigt Wertschätzung.
</div>
</div>

<!-- Step 6: Vergleich -->
<div id="hrm2Dos6" style="display:none">
<h2 style="font-family:var(--se);font-size:18px;margin:16px 0 10px">Schritt 6 — Zeugnisse vergleichen</h2>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;margin:16px 0">
<div class="c" style="border-color:rgba(88,166,255,.3);padding:18px">
<div style="font-size:11px;font-weight:700;color:var(--ac);text-transform:uppercase;letter-spacing:1px;margin-bottom:8px">Bellevue Palace (Lehre)</div>
<div style="font-size:13px;color:var(--tx2);line-height:1.8"><strong style="color:var(--tx)">Leistung:</strong> «vollen Zufriedenheit»<br><strong style="color:var(--tx)">Verhalten:</strong> «freundlich, zuvorkommend, korrekt»<br><strong style="color:var(--tx)">Abgang:</strong> «bedauern»<br><strong style="color:var(--tx)">Dauer:</strong> 3 Jahre 5 Monate<br><strong style="color:var(--tx)">Note:</strong> Gut</div>
</div>
<div class="c" style="border-color:rgba(63,185,80,.3);padding:18px">
<div style="font-size:11px;font-weight:700;color:var(--g);text-transform:uppercase;letter-spacing:1px;margin-bottom:8px">Victoria-Jungfrau (aktuell)</div>
<div style="font-size:13px;color:var(--tx2);line-height:1.8"><strong style="color:var(--tx)">Leistung:</strong> «vollsten Zufriedenheit»<br><strong style="color:var(--tx)">Verhalten:</strong> «zuvorkommend, freundlich, korrekt»<br><strong style="color:var(--tx)">Abgang:</strong> «sehr ungern verlieren»<br><strong style="color:var(--tx)">Dauer:</strong> 3+ Jahre (laufend)<br><strong style="color:var(--tx)">Note:</strong> Sehr gut</div>
</div>
</div>
<div style="background:var(--gl);border:1px solid rgba(63,185,80,.3);border-radius:10px;padding:14px 18px;font-size:13px;color:var(--g);margin:12px 0"><strong>Positive Entwicklung:</strong> Von «gut» zu «sehr gut». Beförderung. Zusatzverantwortung. «Sehr ungern verlieren» vs. «bedauern» — deutliche Steigerung.</div>
<div style="background:rgba(88,166,255,.06);border:1px solid rgba(88,166,255,.2);border-radius:10px;padding:14px 18px;font-size:13px;color:var(--ac);margin:12px 0"><strong>Konsistenz:</strong> Motivationsschreiben, CV, Diplome und Zeugnisse erzählen die gleiche Geschichte — solides Fundament, kontinuierliche Weiterentwicklung. Keine Widersprüche.</div>
</div>

<!-- Step 7: Entscheid -->
<div id="hrm2Dos7" style="display:none">
<h2 style="font-family:var(--se);font-size:18px;margin:16px 0 10px">Schritt 7 — Gesamtbeurteilung & Entscheid</h2>
<div class="c" style="padding:20px;overflow-x:auto">
<div style="font-size:11px;font-weight:700;color:var(--tx3);text-transform:uppercase;letter-spacing:1px;margin-bottom:10px">Anforderungsprofil: Réceptionistin ★★★★★ Lenkerhof</div>
<table style="font-size:12px;width:100%">
<tr style="background:var(--s2)"><th style="padding:8px 10px;border:1px solid var(--bd)">Kriterium</th><th style="padding:8px 10px;border:1px solid var(--bd);width:50px;text-align:center">Typ</th><th style="padding:8px 10px;border:1px solid var(--bd);width:30px;text-align:center">?</th><th style="padding:8px 10px;border:1px solid var(--bd)">Beleg im Dossier</th></tr>
<tr><td style="padding:8px 10px;border:1px solid var(--bd)">Hotel-KV oder equiv.</td><td style="padding:8px 10px;border:1px solid var(--bd);text-align:center"><span class="badge" style="background:var(--rl);color:var(--r)">Muss</span></td><td style="padding:8px 10px;border:1px solid var(--bd);text-align:center;color:var(--g)">✓</td><td style="padding:8px 10px;border:1px solid var(--bd)">EFZ Hotel-Kommunikationsfachfrau, Note 5.2</td></tr>
<tr><td style="padding:8px 10px;border:1px solid var(--bd)">Deutsch Muttersprache</td><td style="padding:8px 10px;border:1px solid var(--bd);text-align:center"><span class="badge" style="background:var(--rl);color:var(--r)">Muss</span></td><td style="padding:8px 10px;border:1px solid var(--bd);text-align:center;color:var(--g)">✓</td><td style="padding:8px 10px;border:1px solid var(--bd)">Schweizerin aus dem Simmental</td></tr>
<tr><td style="padding:8px 10px;border:1px solid var(--bd)">Englisch C1</td><td style="padding:8px 10px;border:1px solid var(--bd);text-align:center"><span class="badge" style="background:var(--rl);color:var(--r)">Muss</span></td><td style="padding:8px 10px;border:1px solid var(--bd);text-align:center;color:var(--g)">✓</td><td style="padding:8px 10px;border:1px solid var(--bd)">Cambridge Advanced C1, Zertifikat vorliegend</td></tr>
<tr><td style="padding:8px 10px;border:1px solid var(--bd)">Französisch B2</td><td style="padding:8px 10px;border:1px solid var(--bd);text-align:center"><span class="badge" style="background:var(--aml);color:var(--am)">Soll</span></td><td style="padding:8px 10px;border:1px solid var(--bd);text-align:center;color:var(--g)">✓</td><td style="padding:8px 10px;border:1px solid var(--bd)">DELF B2, Zertifikat vorliegend</td></tr>
<tr><td style="padding:8px 10px;border:1px solid var(--bd)">Réception mind. 2 Jahre 5★</td><td style="padding:8px 10px;border:1px solid var(--bd);text-align:center"><span class="badge" style="background:var(--rl);color:var(--r)">Muss</span></td><td style="padding:8px 10px;border:1px solid var(--bd);text-align:center;color:var(--g)">✓</td><td style="padding:8px 10px;border:1px solid var(--bd)">3+ Jahre Victoria-Jungfrau 5★</td></tr>
<tr><td style="padding:8px 10px;border:1px solid var(--bd)">Opera PMS</td><td style="padding:8px 10px;border:1px solid var(--bd);text-align:center"><span class="badge" style="background:var(--rl);color:var(--r)">Muss</span></td><td style="padding:8px 10px;border:1px solid var(--bd);text-align:center;color:var(--g)">✓</td><td style="padding:8px 10px;border:1px solid var(--bd)">Opera V5, 3 Jahre + Zertifikat</td></tr>
<tr><td style="padding:8px 10px;border:1px solid var(--bd)">VIP-Betreuung</td><td style="padding:8px 10px;border:1px solid var(--bd);text-align:center"><span class="badge" style="background:var(--aml);color:var(--am)">Soll</span></td><td style="padding:8px 10px;border:1px solid var(--bd);text-align:center;color:var(--g)">✓</td><td style="padding:8px 10px;border:1px solid var(--bd)">Zwischenzeugnis: VIP + Stammgäste</td></tr>
<tr><td style="padding:8px 10px;border:1px solid var(--bd)">Spa-/Wellness-Affinität</td><td style="padding:8px 10px;border:1px solid var(--bd);text-align:center"><span class="badge" style="background:var(--pl);color:var(--pr)">Kann</span></td><td style="padding:8px 10px;border:1px solid var(--bd);text-align:center;color:var(--am)">~</td><td style="padding:8px 10px;border:1px solid var(--bd)">Yoga als Hobby, keine direkte Spa-Erfahrung</td></tr>
<tr><td style="padding:8px 10px;border:1px solid var(--bd)">Lokale Vernetzung</td><td style="padding:8px 10px;border:1px solid var(--bd);text-align:center"><span class="badge" style="background:var(--pl);color:var(--pr)">Kann</span></td><td style="padding:8px 10px;border:1px solid var(--bd);text-align:center;color:var(--g)">✓</td><td style="padding:8px 10px;border:1px solid var(--bd)">Aufgewachsen im Simmental, Ferienjob Lenk</td></tr>
</table>
</div>
<div style="background:var(--gl);border:1px solid rgba(63,185,80,.3);border-radius:10px;padding:16px 20px;font-size:14px;color:var(--g);margin:16px 0"><strong>Entscheid: A-Kandidatin — Einladen!</strong><br><br><span style="font-size:13px">Alle Muss-Kriterien erfüllt. Soll-Kriterien ebenfalls. Positive Leistungsentwicklung. Beförderung und Zusatzverantwortung zeigen Potenzial. Lokale Verbundenheit ist Bonus.</span></div>
<div style="background:var(--aml);border:1px solid rgba(210,153,34,.3);border-radius:10px;padding:14px 18px;font-size:13px;color:var(--am);margin:12px 0"><strong>Nächste Schritte:</strong><br>1. Einladung zum Vorstellungsgespräch (innert 5 Arbeitstagen)<br>2. Im Interview klären: Warum Wechsel nach 3 Monaten Bellevue? Spa-Affinität? Langfristige Ziele?<br>3. Referenzgespräch mit Thomas Gerber (FOM Victoria-Jungfrau) vorbereiten</div>
</div>

</div>

<!-- ===================== ÜBUNGEN ===================== -->
<div class="sec" id="hrm2_ueb"><h1>Interaktive Übungen</h1><p class="sub">Wähle eine Übung und teste dein Wissen</p>

<div id="hrm2_ueb_sel">
<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:12px;margin:16px 0">
<div class="c ck" onclick="hrm2ShowUeb(1)" style="padding:24px 16px;position:relative;overflow:hidden">
<div style="position:absolute;top:-20px;right:-20px;width:80px;height:80px;border-radius:50%;background:rgba(88,166,255,.06)"></div>
<div style="position:relative;z-index:1">
<div style="font-size:28px;margin-bottom:10px">📋</div>
<div class="ct2">Vorselektion</div>
<div class="cd" style="margin-top:4px">Komplettes Bewerbungsdossier analysieren — Motivationsschreiben, Lebenslauf &amp; Arbeitszeugnisse lesen und Kriterien beurteilen</div>
</div></div>
<div class="c ck" onclick="hrm2ShowUeb(2)" style="padding:24px 16px;position:relative;overflow:hidden">
<div style="position:absolute;top:-20px;right:-20px;width:80px;height:80px;border-radius:50%;background:rgba(63,185,80,.06)"></div>
<div style="position:relative;z-index:1">
<div style="font-size:28px;margin-bottom:10px">🚀</div>
<div class="ct2">Onboarding</div>
<div class="cd" style="margin-top:4px">Massnahmen der richtigen Onboarding-Phase zuordnen — von der Vorbereitung bis zum Probezeitgespräch</div>
</div></div>
<div class="c ck" onclick="hrm2ShowUeb(3)" style="padding:24px 16px;position:relative;overflow:hidden">
<div style="position:absolute;top:-20px;right:-20px;width:80px;height:80px;border-radius:50%;background:rgba(188,140,255,.06)"></div>
<div style="position:relative;z-index:1">
<div style="font-size:28px;margin-bottom:10px">💬</div>
<div class="ct2">Probezeitgespräch</div>
<div class="cd" style="margin-top:4px">Schwierige Fälle lösen — pro Phase die richtige Handlung wählen und begründen</div>
</div></div>
<div class="c ck" onclick="hrm2ShowUeb(4)" style="padding:24px 16px;position:relative;overflow:hidden">
<div style="position:absolute;top:-20px;right:-20px;width:80px;height:80px;border-radius:50%;background:rgba(210,153,34,.06)"></div>
<div style="position:relative;z-index:1">
<div style="font-size:28px;margin-bottom:10px">💰</div>
<div class="ct2">Personalbudget</div>
<div class="cd" style="margin-top:4px">Bruttolöhne, Sozialleistungen und Gesamtkosten berechnen — mit neuen Zahlen bei jedem Versuch</div>
</div></div>
</div>
</div>

<!-- Ü1: VORSELEKTION -->
<div id="hrm2_ueb1" style="display:none">
<button onclick="hrm2ShowUeb(0)" style="margin-bottom:16px;font-size:12px">← Zurück zur Auswahl</button>
<h2>Vorselektion — Bewerbungsdossier beurteilen</h2>
<p class="sub">Lies das Dossier sorgfältig und beurteile jedes Kriterium</p>
<div style="padding:16px 20px;border-radius:12px;background:linear-gradient(135deg,rgba(88,166,255,.06),rgba(188,140,255,.04));border:1px solid var(--bd);margin-bottom:16px" id="hrm2_u1_stelle"></div>
<div style="display:flex;gap:4px;margin:12px 0;flex-wrap:wrap" id="hrm2_u1_tabs"></div>
<div id="hrm2_u1_tabcontent"></div>
<div style="margin:24px 0 12px;display:flex;align-items:center;gap:10px"><div style="height:1px;flex:1;background:var(--bd)"></div><div style="font-size:12px;font-weight:700;color:var(--tx3);text-transform:uppercase;letter-spacing:1.5px;white-space:nowrap">Kriterien beurteilen</div><div style="height:1px;flex:1;background:var(--bd)"></div></div>
<div id="hrm2_u1_qs"></div>
<div class="c" style="padding:18px;border:1px solid rgba(88,166,255,.2)">
<div style="font-weight:600;margin-bottom:10px;font-size:15px">Gesamtbeurteilung: A-, B- oder C-Kandidat:in?</div>
<div style="display:flex;gap:10px;flex-wrap:wrap"><label style="display:flex;align-items:center;gap:6px;cursor:pointer;font-size:14px;padding:8px 18px;border-radius:10px;border:1px solid var(--bd);background:var(--s);color:var(--tx2);transition:all .2s"><input type="radio" name="hrm2_u1_cat" value="A" style="accent-color:var(--g)"> <strong style="color:var(--g)">A</strong> — Einladen</label><label style="display:flex;align-items:center;gap:6px;cursor:pointer;font-size:14px;padding:8px 18px;border-radius:10px;border:1px solid var(--bd);background:var(--s);color:var(--tx2);transition:all .2s"><input type="radio" name="hrm2_u1_cat" value="B" style="accent-color:var(--am)"> <strong style="color:var(--am)">B</strong> — Evtl. einladen</label><label style="display:flex;align-items:center;gap:6px;cursor:pointer;font-size:14px;padding:8px 18px;border-radius:10px;border:1px solid var(--bd);background:var(--s);color:var(--tx2);transition:all .2s"><input type="radio" name="hrm2_u1_cat" value="C" style="accent-color:var(--r)"> <strong style="color:var(--r)">C</strong> — Absage</label></div>
<div id="hrm2_u1_ffb" style="display:none;margin-top:10px;padding:10px 14px;border-radius:10px;font-size:13px"></div>
</div>
<div style="margin:20px 0;display:flex;gap:8px;flex-wrap:wrap"><button class="bp1" onclick="hrm2CheckU1()" style="padding:10px 28px;font-size:14px">Korrigieren</button><button onclick="hrm2GenU1()" style="padding:10px 28px;font-size:14px">Neue Aufgabe</button></div>
<div id="hrm2_u1_res"></div>
</div>

<!-- Ü2: ONBOARDING -->
<div id="hrm2_ueb2" style="display:none">
<button onclick="hrm2ShowUeb(0)" style="margin-bottom:16px;font-size:12px">← Zurück zur Auswahl</button>
<h2>Onboarding — Massnahmen zuordnen</h2>
<p class="sub">Ordne jede Massnahme der richtigen Phase zu</p>
<div style="display:flex;gap:8px;margin-bottom:16px;flex-wrap:wrap">
<div style="padding:5px 12px;border-radius:8px;background:rgba(88,166,255,.08);border:1px solid rgba(88,166,255,.2);font-size:11px;font-weight:600;color:var(--ac)">Vor dem 1. Tag</div>
<div style="padding:5px 12px;border-radius:8px;background:rgba(63,185,80,.08);border:1px solid rgba(63,185,80,.2);font-size:11px;font-weight:600;color:var(--g)">1. Arbeitstag</div>
<div style="padding:5px 12px;border-radius:8px;background:rgba(210,153,34,.08);border:1px solid rgba(210,153,34,.2);font-size:11px;font-weight:600;color:var(--am)">Einarbeitung</div>
<div style="padding:5px 12px;border-radius:8px;background:rgba(188,140,255,.08);border:1px solid rgba(188,140,255,.2);font-size:11px;font-weight:600;color:var(--pr)">Probezeitgespräch</div>
</div>
<div id="hrm2_u2_qs"></div>
<div style="margin:20px 0;display:flex;gap:8px"><button class="bp1" onclick="hrm2CheckU2()">Korrigieren</button><button onclick="hrm2GenU2()">Neue Aufgabe</button></div>
<div id="hrm2_u2_res"></div>
</div>

<!-- Ü3: PROBEZEITGESPRÄCH -->
<div id="hrm2_ueb3" style="display:none">
<button onclick="hrm2ShowUeb(0)" style="margin-bottom:16px;font-size:12px">← Zurück zur Auswahl</button>
<h2>Probezeitgespräch — Phasen &amp; Handlung</h2>
<p class="sub">Lies den Fall und wähle pro Phase die richtige Handlung</p>
<div style="padding:16px 20px;border-radius:12px;background:linear-gradient(135deg,rgba(188,140,255,.06),rgba(248,81,73,.04));border:1px solid var(--bd);margin-bottom:16px;font-size:14px;line-height:1.7" id="hrm2_u3_case"></div>
<div id="hrm2_u3_qs"></div>
<div style="margin:20px 0;display:flex;gap:8px"><button class="bp1" onclick="hrm2CheckU3()">Korrigieren</button><button onclick="hrm2GenU3()">Neuer Fall</button></div>
<div id="hrm2_u3_res"></div>
</div>

<!-- Ü4: PERSONALBUDGET -->
<div id="hrm2_ueb4" style="display:none">
<button onclick="hrm2ShowUeb(0)" style="margin-bottom:16px;font-size:12px">← Zurück zur Auswahl</button>
<h2>Personalbudget berechnen</h2>
<p class="sub">Berechne die monatlichen und jährlichen Personalkosten</p>
<div style="padding:16px 20px;border-radius:12px;background:linear-gradient(135deg,rgba(210,153,34,.06),rgba(63,185,80,.04));border:1px solid var(--bd);margin-bottom:16px;font-size:13px;line-height:1.8" id="hrm2_u4_info"></div>
<div id="hrm2_u4_tbl"></div>
<div style="margin:20px 0;display:flex;gap:8px"><button class="bp1" onclick="hrm2CheckU4()">Korrigieren</button><button onclick="hrm2GenU4()">Neue Zahlen</button></div>
<div id="hrm2_u4_res"></div>
</div>

</div>

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

// ==========================================
// ÜBUNGEN — JAVASCRIPT LOGIK
// ==========================================

// Dossier-Analyse Navigation
window.hrm2DosStep = function(n) {
  for(var i=0;i<8;i++){var p=document.getElementById('hrm2Dos'+i);if(p)p.style.display=i===n?'block':'none'}
  var nav=document.getElementById('hrm2DosNav');
  if(nav){var btns=nav.children;for(var i=0;i<btns.length;i++){btns[i].style.background=i===n?'var(--ac)':'var(--s)';btns[i].style.color=i===n?'#fff':'var(--tx3)';btns[i].style.borderColor=i===n?'var(--ac)':'var(--bd)'}}
};

// Navigation
window.hrm2ShowUeb = function(n) {
  ['hrm2_ueb_sel','hrm2_ueb1','hrm2_ueb2','hrm2_ueb3','hrm2_ueb4'].forEach(function(id){
    var el=document.getElementById(id); if(el) el.style.display='none';
  });
  if(n===0) { document.getElementById('hrm2_ueb_sel').style.display='block'; }
  else {
    document.getElementById('hrm2_ueb'+n).style.display='block';
    if(n===1) hrm2GenU1();
    if(n===2) hrm2GenU2();
    if(n===3) hrm2GenU3();
    if(n===4) hrm2GenU4();
  }
};

// ---- Ü1: VORSELEKTION — 6 Fälle mit kompletten Dossiers ----
var HRM2_VS=[
{stelle:{hotel:'Sporthotel La Tgioma ★★★★, Arosa (Saisonbetrieb Winter)',pos:'Leitung Front Office',anf:'Hotel-KV/Handelsschule (Soll), Deutsch Muttersprache (Muss), Englisch sehr gut W+S (Muss), Italienisch Kenntnisse (Kann), Front Office 4★+ (Muss), mind. 2 Jahre (Soll), Fidelio V8 (Soll), Debitorenbuchhaltung (Kann), Belastbarkeit (Muss), Führungskompetenz (Muss), Verkaufsgeschick (Muss)'},name:'Susanne Loser',
motiv:'<h4 style="font-family:var(--se);border-bottom:1px solid var(--bd);padding-bottom:6px;margin-bottom:12px">Motivationsschreiben</h4><strong>Susanne Loser</strong><br>Obstbaumgartenstrasse 34, 8640 Rapperswil SG<br>079 455 10 35 · mir.Loser@bluewin.ch<br><br><div style="text-align:right;color:var(--tx3)">Sporthotel La Tgioma<br>Personalverantwortlicher<br>7050 Arosa<br><br>8640 Rapperswil, 30. August 2025</div><br><strong>Betreff: Bewerbung Front Office Manager</strong><br><br>Grüezi Herr Mischler<br><br>Mit grossem Interesse habe ich auf www.htr.ch gesehen, dass für die kommende Wintersaison in Ihrem Betrieb die Stelle «Front Office Manager» vakant ist. Für mich stand unverzüglich fest, dass ich mich für diese Stelle bewerben werde, aus folgenden Gründen:<br><br><strong>Ich tausche die Stadt gegen die Berge…</strong><br>Seit meiner Kindheit lebe ich in der kleinen Stadt Rapperswil und gehe seit 6 Jahren nach Zürich zur Arbeit. Obwohl ich das pulsierende Leben der Stadt schätzen gelernt habe, zieht es mich in meiner Freizeit je länger je mehr in die Berge. Jetzt will ich dort arbeiten.<br><br><strong>Ich lerne die Ferienhotellerie kennen…</strong><br>Business-, Seminar- und Kongresskunden waren meine Ansprechpartner in den vergangenen Jahren. Was diese mit den Ferienkunden gemeinsam haben und was sie voneinander unterscheidet, das will ich jetzt wissen.<br><br><strong>Ich will Führungsaufgaben übernehmen…</strong><br>Nach meiner Ausbildung zur Hotelhandelsfachfrau habe ich mich kontinuierlich von der Praktikantin zur Shiftleaderin hochgearbeitet. Die Reise muss weitergehen und ich fühle mich nun bereit, Verantwortung für ein Team zu übernehmen.<br><br>Die Vorstellung, in Arosa zu arbeiten und zu leben, beflügelt mich sehr und ich hoffe ganz fest, dass meine Unterlagen Sie überzeugen und ich mich bei einem gemeinsamen Gespräch noch besser erklären und vorstellen kann.<br><br>Freundliche Grüsse<br><br>Susanne Loser<br><br><em style="color:var(--tx3)">Beilagen: Lebenslauf, Arbeitszeugnisse, Diplome</em>',
cv:'<h4 style="font-family:var(--se);border-bottom:1px solid var(--bd);padding-bottom:6px;margin-bottom:12px">Lebenslauf</h4><strong style="font-size:16px">Susanne Loser</strong><br>Obstbaumgartenstrasse 34, 8640 Rapperswil SG<br>079 455 10 35 · mir.Loser@bluewin.ch<br>Schweizerin · 07.07.1991 · Ledig<br>Hobbys: Skifahren, Snowboarden, Hiking, Klettern, Kino<br><br><strong>Berufserfahrung</strong><br>• <strong>Hotel Sunstar Oerlikon ★★★★</strong>, Juni 2021 – heute<br>&nbsp;&nbsp;&nbsp;Stv. Leiterin Réception<br>• <strong>Swissôtel Zürich ★★★★★</strong>, April 2020 – Februar 2021<br>&nbsp;&nbsp;&nbsp;Shiftleaderin Front Office<br>• <strong>Swissôtel Zürich ★★★★★</strong>, Juni 2018 – März 2020<br>&nbsp;&nbsp;&nbsp;Front Office Mitarbeitende<br>• <strong>Best Western Glockenhof Zürich ★★★★</strong>, Aug 2015 – Aug 2017<br>&nbsp;&nbsp;&nbsp;Front Office Mitarbeitende<br>• <strong>Hotel Senator Zürich ★★★★</strong>, Aug 2012 – Juli 2015<br>&nbsp;&nbsp;&nbsp;Praktikum Hotelhandelsschule<br><br><strong>Ausbildung</strong><br>• Hotelhandelsschule, Juventus Schulen Zürich — Abschluss Juli 2012<br>• First Certificate in English, Swiss Merchantile School London — Dez 2014<br><br><strong>Referenzen</strong><br>• Herr Michael Forster, Direktor, Best Western Glockenhof Zürich<br>• Frau Mathilde Mürner, Personalverantwortliche, Hotel Senator Zürich<br>• Herr Stefan Eichmann, Rooms Division Manager, Swissôtel Zürich',
zeug:'<h4 style="font-family:var(--se);border-bottom:1px solid var(--bd);padding-bottom:6px;margin-bottom:12px">Arbeitszeugnisse</h4><div style="background:var(--s);border:1px solid var(--bd);border-radius:12px;padding:20px;margin-bottom:14px;line-height:1.9"><div style="text-align:center;margin-bottom:14px;padding-bottom:10px;border-bottom:1px solid var(--bd)"><strong style="font-size:16px">ZEUGNIS</strong><br><br>Für Frau Susanne Loser, geb. 07.07.1991, aus Rapperswil SG, Schweizerin<br>Praktikantin Hotelhandelsschule, 01.08.2012 – 31.07.2015</div>Frau Susanne Loser hat ihre Stelle als Praktikantin der Hotelhandelsschule Juventus im Hotel Senator in Zürich im August 2012 angetreten. Sie besuchte während 2 Tagen in der Woche die Hotelhandelsschule und war die restliche Zeit bei uns als Praktikantin Front Office in der Ausbildung. Ihre Tätigkeit und Ausbildung umfasste folgende Inhalte:<br><br>• Inkasso, Tagesabschlüsse, Gästerechnungen<br>• Handhabung des Fidelio Front Office Systems Version 6.3<br>• Check-in sowie Check-out<br>• Korrespondenz (Windows Office)<br>• Statistiken<br>• Telefonbedienung<br><br>Wir lernten Susanne Loser als pflichtbewusste und zuverlässige Mitarbeiterin kennen, welche ihre Arbeiten stets präzis und mit grossem Interesse erledigte. Sie hat ihr Fachwissen im Bereich Front Office stets ausgebaut und dieses auch kontinuierlich im Betrieb angewandt. Ihre Freude an der Tätigkeit und ihr Fleiss, sich ständig zu verbessern, machten sie zu einer wertvollen und vollwertigen Mitarbeiterin am Front Office unseres Hauses.<br><br>Ihr natürliches und fröhliches Wesen wurde von den Vorgesetzten, den Mitarbeitenden sowie von den Kunden sehr geschätzt, sie war äusserst beliebt.<br><br>Wir gratulieren Frau Loser zum erfolgreichen Bestehen der Hotelhandelsschule und wünschen ihr für die Zukunft alles Gute. Sie verlässt uns, um ihre Erfahrungen in der Hotellerie zu erweitern. In unserem Hause ist Frau Loser stets willkommen.<br><br><em>Zürich, Juli 2015 — Mathilde Mürner, Personalverantwortliche</em></div><div style="background:var(--s);border:1px solid var(--bd);border-radius:12px;padding:20px;margin-bottom:14px;line-height:1.9"><div style="text-align:center;margin-bottom:14px;padding-bottom:10px;border-bottom:1px solid var(--bd)"><strong style="font-size:16px">ZEUGNIS</strong><br><br>Frau Susanne Loser, geboren am 07.07.1991, von Rapperswil SG,<br>war vom 15.08.2015 bis 31.08.2017 in unserem Best Western Hotel Glockenhof als<br><strong>Front Office Mitarbeiterin</strong> tätig.</div>Frau Loser war mitverantwortlich für die Ausführung aller Aufgaben an unserem Front Office. Ihr Tätigkeitsfeld bestand hauptsächlich aus folgenden Tätigkeiten:<br><br>• Allgemeine Korrespondenz (Anfragen, Offerten, Reservationsbestätigungen)<br>• Check-in und Check-out<br>• Gästebetreuung<br>• Reservationsplanung, Fidelio 6.1<br>• Tagesabschluss<br>• Bedienung der Telefonzentrale<br>• Mahnwesen<br><br>Frau Loser hat die obengenannten Aufgaben stets pflichtbewusst, exakt und zuverlässig erledigt. Sie zeigte stets grosses Interesse an ihrer Tätigkeit und vergrösserte ihre Kenntnisse im Bereich Front Office stetig.<br><br>Als Persönlichkeit schätzten die Vorgesetzten, Kollegen und Kunden Frau Losers Offenheit, Heiterkeit und Freundlichkeit. Sie verstand es ausgezeichnet, auf die Bedürfnisse unserer anspruchsvollen Geschäftskunden einzugehen und war daher allseits sehr beliebt.<br><br>Frau Loser verlässt uns auf eigenen Wunsch, um ihre englischen Sprachkenntnisse zu verbessern. Wir bedauern ihren Austritt sehr und wünschen ihr für die Zukunft alles Gute.<br><br><em>Zürich, August 2017 — Michael Forster, Direktor</em></div><div style="background:var(--s);border:1px solid var(--bd);border-radius:12px;padding:20px;line-height:1.9"><div style="text-align:center;margin-bottom:14px;padding-bottom:10px;border-bottom:1px solid var(--bd)"><strong style="font-size:16px">ZWISCHENZEUGNIS</strong><br><br>Susanne Loser, geb. 07.07.1991, aus Rapperswil SG<br><strong>Front Office Mitarbeitende / Shiftleaderin</strong></div>Wir bestätigen, dass Frau Loser im Swissôtel Zürich vom 01.06.2018 bis 31.03.2020 als Front Office Mitarbeitende tätig war und aufgrund ihrer Leistungen und ihres Verhaltens per 01.04.2020 zur Shiftleaderin befördert werden konnte.<br><br>Frau Loser erledigt alle anfallenden Arbeiten am Front Office wie Inkasso, Korrespondenz, Telefonverkehr, Empfang, Reservation usw. zu unserer vollsten Zufriedenheit. Sie zeigt ein sehr gutes Fachwissen, das sie bei schwierigen Aufgaben sicher einsetzt.<br><br>Wir kennen und schätzen Frau Loser als eine äusserst einsatzfreudige Mitarbeiterin, die die gestellten Aufgaben mit Genauigkeit und Engagement erledigt. Sie geniesst unser absolutes Vertrauen.<br><br>Frau Loser ist eine sehr angesehene und beliebte Mitarbeiterin bei ihren Teammitgliedern, bei ihren Vorgesetzten und bei unseren Kunden. Sie pflegt einen professionellen persönlichen Arbeitsstil geprägt von viel Teamfähigkeit zum Nutzen des gesamten Unternehmens.<br><br>Frau Susanne Loser wird dieses Zwischenzeugnis auf ihren Wunsch hin ausgestellt, da sie auf den kommenden Winter die Stadt verlassen möchte und in der Ferienhotellerie Erfahrungen sammeln will. Wir unterstützen sie gerne in ihrem beruflichen Werdegang und wünschen ihr viel Erfolg sowohl in ihrer beruflichen wie auch privaten Zukunft. Unser Haus steht ihr jederzeit offen.<br><br><em>Zürich-Oerlikon, Oktober 2020 — Maja Brunner, Personalverantwortliche / Stephan Eichmann, Rooms Division Manager</em></div>',
krit:[{n:'Ausbildung Hotel-KV/Handelsschule',t:'Soll',a:'ja',e:'Hotelhandelsschule Juventus = erfüllt.'},{n:'Deutsch Muttersprache (W&S)',t:'Muss',a:'ja',e:'Schweizerin, Muttersprache Deutsch.'},{n:'Englisch sehr gut (W), gut (S)',t:'Muss',a:'teilweise',e:'First Certificate = B2. «Sehr gut» wäre C1. Knapp — im Interview prüfen.'},{n:'Italienisch Kenntnisse (W)',t:'Kann',a:'nein',e:'Keine Italienisch-Kenntnisse im CV.'},{n:'Front Office 4★+ Erfahrung',t:'Muss',a:'ja',e:'Swissôtel 5★ und Best Western 4★.'},{n:'Mind. 2 Jahre Erfahrung',t:'Soll',a:'ja',e:'10+ Jahre Front Office.'},{n:'Fidelio V8',t:'Soll',a:'teilweise',e:'Fidelio V6.1/6.3 ja, aber nicht V8.'},{n:'Debitorenbuchhaltung',t:'Kann',a:'nein',e:'Nur Mahnwesen — keine Debitorenbuchhaltung.'},{n:'Belastbarkeit',t:'Muss',a:'ja',e:'Swissôtel: «Genauigkeit und Engagement», «absolutes Vertrauen».'},{n:'Führungskompetenz',t:'Muss',a:'teilweise',e:'Shiftleaderin ≠ Leitung. Potenzial, aber noch keine volle Leitungsrolle.'},{n:'Verkaufsgeschick',t:'Muss',a:'ja',e:'Glockenhof: «verstand es ausgezeichnet, auf Bedürfnisse einzugehen».'}],
ans:'B',ansE:'B-Kandidatin: Englisch knapp (B2 statt C1), Führung nur Shiftlead. Starkes Profil, aber Lücken bei Fidelio V8 und keine Ferienhotellerie. Einladung empfohlen.'},

{stelle:{hotel:'ibis Budget Zürich Airport',pos:'Night Auditor',anf:'Kaufm. Ausbildung / Réception-Erfahrung (Soll), Deutsch B2 (Muss), Englisch B2 (Muss), Nachtarbeit (Muss), PMS (Soll), Selbstständig (Muss), Buchhaltung (Kann), Stressresistenz (Muss)'},name:'Kevin Schmid',
motiv:'<h4 style="font-family:var(--se);border-bottom:1px solid var(--bd);padding-bottom:6px;margin-bottom:12px">Motivationsschreiben</h4><strong>Kevin Schmid</strong><br>Industriestrasse 5, 8152 Glattbrugg<br>079 200 11 34 · k.schmid88@gmail.com<br><br><div style="text-align:right;color:var(--tx3)">ibis Budget Zürich Airport<br>HR-Abteilung<br>8058 Zürich-Flughafen<br><br>Glattbrugg, 8. Dezember 2025</div><br><strong>Betreff: Bewerbung Night Auditor</strong><br><br>Hallo zusammen<br><br>Ich habe Ihre Stellenausschreibung auf Jobs.ch gesehen und bin interessiert. Aktuell arbeite ich als Security-Mitarbeiter am Flughafen Zürich im Nachtdienst und bin daher an Nachtarbeit gewöhnt.<br><br>Ich suche einen Wechsel in die Hotellerie, da mich der Gästekontakt mehr interessiert als die Sicherheitsbranche. Ich habe keine direkte Hotel-Erfahrung, aber bin zuverlässig, selbstständig und lerne schnell. Die Arbeit am Flughafen kenne ich bestens und könnte mir vorstellen, dass viele Gäste des ibis Budget ebenfalls Flugreisende sind.<br><br>Grüsse<br>Kevin Schmid',
cv:'<h4 style="font-family:var(--se);border-bottom:1px solid var(--bd);padding-bottom:6px;margin-bottom:12px">Lebenslauf</h4><strong style="font-size:16px">Kevin Schmid</strong><br>Industriestrasse 5, 8152 Glattbrugg<br>079 200 11 34 · k.schmid88@gmail.com<br>Schweizer · 22.12.1988 · Geschieden<br><br><strong>Berufserfahrung</strong><br>• <strong>Securitas AG, Flughafen Zürich</strong>, Juni 2021 – heute<br>&nbsp;&nbsp;&nbsp;Security-Mitarbeiter (Nachtschicht)<br>• <strong>Coop Filiale Glattbrugg</strong>, Jan 2019 – Mai 2021<br>&nbsp;&nbsp;&nbsp;Kassierer / Abenddienst<br>• <strong>DHL Express, Kloten</strong>, März 2015 – Dez 2018<br>&nbsp;&nbsp;&nbsp;Kurier / Paketzusteller<br>• <strong>Planzer Transport AG</strong>, Aug 2012 – Feb 2015<br>&nbsp;&nbsp;&nbsp;Lagermitarbeiter<br>• Lehre Logistiker EBA — abgebrochen Nov 2009<br><br><strong>Ausbildung</strong><br>• Kein Lehrabschluss<br>• Interne Weiterbildungen Securitas (Erste Hilfe, Brandschutz)<br><br><strong>Sprachen</strong><br>• Deutsch: Muttersprache · Englisch: Grundkenntnisse (Selbststudium mit App)<br><br><strong>IT</strong><br>• MS Office Grundkenntnisse<br><br><strong>Referenzen</strong><br>• Herr Patrick Meier, Teamleiter Nachtschicht, Securitas AG',
zeug:'<h4 style="font-family:var(--se);border-bottom:1px solid var(--bd);padding-bottom:6px;margin-bottom:12px">Arbeitszeugnisse</h4><div style="background:var(--s);border:1px solid var(--bd);border-radius:12px;padding:20px;margin-bottom:14px;line-height:1.9"><div style="text-align:center;margin-bottom:14px;padding-bottom:10px;border-bottom:1px solid var(--bd)"><strong style="font-size:16px">ZWISCHENZEUGNIS</strong><br><br>Herr Kevin Schmid, geb. 22.12.1988, von Glattbrugg,<br>ist seit dem 01.06.2021 bei der Securitas AG als<br><strong>Security-Mitarbeiter</strong> am Flughafen Zürich tätig.</div>Herr Schmid wird im Nachtdienst eingesetzt und ist verantwortlich für die Überwachung zugewiesener Bereiche, die Durchführung von Kontrollrundgängen sowie die Bedienung der Überwachungssysteme. Bei Zwischenfällen erstattet er pflichtgemäss Rapport an die Einsatzleitung.<br><br>Herr Schmid hat die ihm übertragenen Aufgaben zu unserer Zufriedenheit erledigt. Er ist pünktlich und zuverlässig.<br><br>Im Umgang mit Kollegen war er korrekt.<br><br>Dieses Zwischenzeugnis wird auf Wunsch von Herrn Schmid ausgestellt.<br><br><em>Kloten, November 2025 — Patrick Meier, Teamleiter Nachtschicht</em></div><div style="background:var(--s);border:1px solid var(--bd);border-radius:12px;padding:20px;line-height:1.9"><div style="text-align:center;margin-bottom:14px;padding-bottom:10px;border-bottom:1px solid var(--bd)"><strong style="font-size:16px">ARBEITSBESTÄTIGUNG</strong></div>Wir bestätigen, dass Herr Kevin Schmid, geboren am 22.12.1988, vom 15. Januar 2019 bis 31. Mai 2021 als Kassierer in unserer Coop-Filiale Glattbrugg tätig war.<br><br><em>Glattbrugg, Mai 2021 — Filialleitung Coop Glattbrugg</em></div>',
krit:[{n:'Kaufm. Ausbildung / Réception-Erfahrung',t:'Soll',a:'nein',e:'Lehre abgebrochen, keine kaufm. Ausbildung, keine Réception.'},{n:'Deutsch B2',t:'Muss',a:'ja',e:'Muttersprache Deutsch.'},{n:'Englisch B2',t:'Muss',a:'nein',e:'Nur Grundkenntnisse (App-Selbststudium) — weit unter B2.'},{n:'Nachtarbeit-Bereitschaft',t:'Muss',a:'ja',e:'Nachtschicht Securitas seit 4 Jahren.'},{n:'PMS-Kenntnisse',t:'Soll',a:'nein',e:'Keine Hotel-Systemerfahrung.'},{n:'Selbstständiges Arbeiten',t:'Muss',a:'ja',e:'Security Nachtdienst = allein, eigenständig.'},{n:'Buchhaltung Grundkenntnisse',t:'Kann',a:'nein',e:'Keine Buchhaltungserfahrung.'},{n:'Stressresistenz',t:'Muss',a:'teilweise',e:'Flughafen-Security stressig, aber Hotel-Gästekontakt ist anders.'}],
ans:'C',ansE:'C-Kandidat: Englisch nicht B2. Keine Ausbildung, keine Hotelerfahrung. Securitas-Zeugnis schwach. Coop nur Arbeitsbestätigung. Absage.'},

// FALL 3 — Thomas Berger
{stelle:{hotel:'Grand Hotel Bellevue ★★★★★, Gstaad (Saisonbetrieb)',pos:'Chef de Réception',anf:'Höhere Fachausbildung (Muss), Deutsch Muttersprache (Muss), Französisch fliessend (Muss), Englisch C1 (Muss), Chef de Réception 5★ (Muss), Saisonbetrieb (Soll), Opera/Fidelio V8 (Soll), Debitorenbuchhaltung (Soll), Teamführung mind. 5 MA (Muss), Italienisch (Kann)'},name:'Thomas Berger',
motiv:'<h4 style="font-family:var(--se);border-bottom:1px solid var(--bd);padding-bottom:6px;margin-bottom:12px">Motivationsschreiben</h4><strong>Thomas Berger</strong><br>Kramgasse 18, 3011 Bern<br>076 312 44 87 · t.berger@gmx.ch<br><br><div style="text-align:right;color:var(--tx3)">Grand Hotel Bellevue<br>HR-Abteilung<br>3780 Gstaad<br><br>Bern, 15. September 2025</div><br><strong>Betreff: Bewerbung Chef de Réception</strong><br><br>Sehr geehrte Damen und Herren<br><br>Als langjähriger Chef de Réception im Swissôtel Zürich suche ich eine neue Herausforderung in der Luxus-Ferienhotellerie. Gstaad als internationale Destination fasziniert mich besonders, da ich meine Dreisprachigkeit optimal einsetzen kann.<br><br>In meiner aktuellen Position führe ich ein Team von 8 Réceptionistinnen und Réceptionisten und bin verantwortlich für Umsatzoptimierung, Gästezufriedenheit und die Einführung neuer digitaler Prozesse. Die Kombination aus operativer Exzellenz und persönlicher Gastfreundschaft ist mein Antrieb.<br><br>Ich würde mich freuen, Ihnen im persönlichen Gespräch aufzuzeigen, wie ich das Bellevue-Erlebnis an der Réception weiter stärken kann.<br><br>Freundliche Grüsse<br><br>Thomas Berger<br><br><em style="color:var(--tx3)">Beilagen: Lebenslauf, Arbeitszeugnisse, Diplome</em>',
cv:'<h4 style="font-family:var(--se);border-bottom:1px solid var(--bd);padding-bottom:6px;margin-bottom:12px">Lebenslauf</h4><strong style="font-size:16px">Thomas Berger</strong><br>Kramgasse 18, 3011 Bern<br>076 312 44 87 · t.berger@gmx.ch<br>Schweizer · 14.03.1988 · Verheiratet, 1 Kind<br>Hobbys: Golf, Wandern, Wein, Reisen<br><br><strong>Berufserfahrung</strong><br>• <strong>Swissôtel Zürich ★★★★★</strong>, Jan 2022 – heute<br>&nbsp;&nbsp;&nbsp;Chef de Réception (8 MA)<br>• <strong>Victoria-Jungfrau Grand Hotel Interlaken ★★★★★</strong>, Apr 2019 – Dez 2021<br>&nbsp;&nbsp;&nbsp;Stv. Chef de Réception<br>• <strong>Gstaad Palace ★★★★★</strong>, Nov 2016 – Mär 2019<br>&nbsp;&nbsp;&nbsp;Front Office Supervisor (Saisonbetrieb, 6 MA)<br>• <strong>Hôtel Beau-Rivage Genève ★★★★★</strong>, Jun 2014 – Okt 2016<br>&nbsp;&nbsp;&nbsp;Réceptionist<br>• <strong>Hotel Schweizerhof Bern ★★★★★</strong>, Aug 2011 – Mai 2014<br>&nbsp;&nbsp;&nbsp;Lehrling / Front Office MA<br><br><strong>Ausbildung</strong><br>• HFP Hotelkaufmann, Hotel & Gastro formation — 2018<br>• Hotel-Kommunikationsfachmann EFZ — 2014<br>• Cambridge Advanced Certificate (C1) — 2015<br>• DELF B2 Französisch — 2013<br><br><strong>IT</strong><br>• Opera PMS V5 (Experte), Fidelio V8 (Experte), Protel, MS Office, IDeaS, Duetto<br><br><strong>Sprachen</strong><br>• Deutsch: Muttersprache · Französisch: B2 · Englisch: C1 · Italienisch: A2<br><br><strong>Referenzen</strong><br>• Frau Nicole Bühler, HR Director, Swissôtel Zürich<br>• Herr Jean-Marc Tissot, Directeur, Victoria-Jungfrau Interlaken',
zeug:'<h4 style="font-family:var(--se);border-bottom:1px solid var(--bd);padding-bottom:6px;margin-bottom:12px">Arbeitszeugnisse</h4><div style="background:var(--s);border:1px solid var(--bd);border-radius:12px;padding:20px;margin-bottom:14px;line-height:1.9"><div style="text-align:center;margin-bottom:14px;padding-bottom:10px;border-bottom:1px solid var(--bd)"><strong style="font-size:16px">ARBEITSZEUGNIS</strong><br><br>Herr Thomas Berger, geboren am 14.03.1988, von Bern,<br>war vom 01.11.2016 bis 31.03.2019 in unserem Gstaad Palace als<br><strong>Front Office Supervisor</strong> tätig.</div>Herr Berger war als Front Office Supervisor für die Leitung des Tagesbetriebs und die Koordination des 6-köpfigen Réception-Teams verantwortlich. Zu seinen Hauptaufgaben gehörten:<br><br>• Operative Führung des Front-Office-Teams im Schichtbetrieb<br>• Sicherstellung eines reibungslosen Check-in und Check-out Ablaufs<br>• VIP-Betreuung und Handling von Sonderwünschen<br>• Schulung und Einarbeitung neuer Mitarbeitender<br>• Tagesabschlüsse, Kassenführung und Reporting<br>• Enge Zusammenarbeit mit Housekeeping, Concierge und F&B<br><br>Herr Berger hat sämtliche Aufgaben stets zu unserer vollsten Zufriedenheit erfüllt. Sein Fachwissen und seine Führungsqualitäten waren vorbildlich. Er verstand es, sein Team zu motivieren und auch in hektischen Phasen einen hohen Qualitätsstandard sicherzustellen.<br><br>Im Umgang mit Vorgesetzten, Mitarbeitenden und unserer anspruchsvollen internationalen Kundschaft war Herr Berger stets zuvorkommend, freundlich und korrekt. Er wurde von allen Seiten sehr geschätzt.<br><br>Herr Berger verlässt uns auf eigenen Wunsch, was wir ausserordentlich bedauern. Wir danken ihm für seinen grossen Einsatz und wünschen ihm für die berufliche und private Zukunft alles Gute und viel Erfolg.<br><br><em>Gstaad, März 2019 — Andrea Scherz, General Manager</em></div><div style="background:var(--s);border:1px solid var(--bd);border-radius:12px;padding:20px;line-height:1.9"><div style="text-align:center;margin-bottom:14px;padding-bottom:10px;border-bottom:1px solid var(--bd)"><strong style="font-size:16px">ARBEITSZEUGNIS</strong><br><br>Herr Thomas Berger, geboren am 14.03.1988, von Bern,<br>war vom 01.04.2019 bis 31.12.2021 in unserem Victoria-Jungfrau Grand Hotel & Spa als<br><strong>Stv. Chef de Réception</strong> tätig.</div>In seiner Funktion unterstützte Herr Berger den Chef de Réception in der operativen und strategischen Leitung der Réception unseres 224-Zimmer-Hauses. Zu seinen Verantwortungsbereichen gehörten:<br><br>• Stellvertretende Leitung des 10-köpfigen Front-Office-Teams<br>• Erstellung und Optimierung von Arbeitsplänen<br>• Qualitätskontrolle und Sicherstellung der Leading-Hotels-Standards<br>• Revenue-orientiertes Upselling und Ratenmanagement<br>• Debitorenbuchhaltung und monatliches Reporting<br>• Bearbeitung von Gästereklamationen und Eskalationsmanagement<br>• Einarbeitung und Coaching neuer Teammitglieder<br><br>Herr Berger hat die anspruchsvolle Position stets zu unserer vollsten Zufriedenheit ausgeübt. Er überzeugte durch exzellentes Revenue-Verständnis, strukturierte Arbeitsweise und hervorragende Gästeorientierung. Auch unter hoher Belastung behielt er stets den Überblick und handelte umsichtig.<br><br>Die Zusammenarbeit mit allen Abteilungen war stets vorbildlich. Herr Berger war bei Vorgesetzten, Teammitgliedern und Gästen gleichermassen geschätzt und beliebt. Sein professionelles Auftreten und seine Diskretion im Umgang mit unserer internationalen Klientel waren beispielhaft.<br><br>Herr Berger verlässt uns auf eigenen Wunsch, was wir sehr bedauern. Wir danken ihm herzlich für seinen wertvollen Beitrag und wünschen ihm für seine weitere Karriere viel Erfolg.<br><br><em>Interlaken, Dezember 2021 — Jean-Marc Tissot, Directeur Général</em></div>',
krit:[{n:'Höhere Fachausbildung',t:'Muss',a:'ja',e:'HFP Hotelkaufmann.'},{n:'Deutsch Muttersprache',t:'Muss',a:'ja',e:'Schweizer, Muttersprache.'},{n:'Französisch fliessend',t:'Muss',a:'ja',e:'DELF B2 + Erfahrung Beau-Rivage Genève.'},{n:'Englisch C1',t:'Muss',a:'ja',e:'Cambridge Advanced = C1.'},{n:'Chef de Réception 5★',t:'Muss',a:'ja',e:'Aktuell Chef de Réception Swissôtel 5★ seit 3+ Jahren.'},{n:'Saisonbetrieb',t:'Soll',a:'ja',e:'Gstaad Palace = Saisonbetrieb.'},{n:'Opera/Fidelio V8',t:'Soll',a:'ja',e:'Opera V5 + Fidelio V8 Experte.'},{n:'Debitorenbuchhaltung',t:'Soll',a:'ja',e:'Victoria-Jungfrau: Debitorenbuchhaltung und Reporting.'},{n:'Teamführung mind. 5 MA',t:'Muss',a:'ja',e:'Aktuell 8, vorher 6 (Palace), 10 stv. (V-J).'},{n:'Italienisch',t:'Kann',a:'ja',e:'A2 Grundkenntnisse.'}],
ans:'A',ansE:'A-Kandidat: Alle Muss + Soll erfüllt. Zeugnisse «vollste Zufriedenheit», «ausserordentlich bedauern». Sofortige Einladung.'},

// FALL 4 — Maria Kovacs
{stelle:{hotel:'Boutique Hotel Rosengarten ★★★, Luzern (Jahresbetrieb)',pos:'Réceptionistin',anf:'Abgeschlossene Berufsausbildung (Muss), Deutsch mind. B2 (Muss), Englisch gut (Soll), Réception-Erfahrung (Muss), PMS Fidelio/Protel (Soll), CH-Arbeitsmarkt (Kann), Gastorientierung (Muss), Flexibilität (Soll), Zusatzsprachen (Kann), Teamfähigkeit (Soll)'},name:'Maria Kovacs',
motiv:'<h4 style="font-family:var(--se);border-bottom:1px solid var(--bd);padding-bottom:6px;margin-bottom:12px">Motivationsschreiben</h4><strong>Maria Kovacs</strong><br>Pilatusstrasse 42, 6003 Luzern<br>078 921 33 10 · m.kovacs@outlook.com<br><br><div style="text-align:right;color:var(--tx3)">Boutique Hotel Rosengarten<br>z.Hd. Frau Meier<br>6003 Luzern<br><br>Luzern, 20. Oktober 2025</div><br><strong>Betreff: Bewerbung als Réceptionistin</strong><br><br>Sehr geehrte Frau Meier<br><br>Ich bewerbe mich auf Ihre ausgeschriebene Stelle als Réceptionistin. Seit 6 Monaten lebe ich in der Schweiz und möchte meine Karriere in der Schweizer Hotellerie fortsetzen.<br><br>In Budapest habe ich 2 Jahre an der Réception eines 3-Sterne-Hotels gearbeitet und Erfahrung in Check-in/out, Reservationsmanagement und Gästebetreuung gesammelt. Ich bin motiviert, fleissig und lerne schnell — mein Deutsch verbessere ich täglich durch Kurse und den Alltag in Luzern.<br><br>Ich würde mich über ein persönliches Gespräch sehr freuen.<br><br>Mit freundlichen Grüssen<br><br>Maria Kovacs<br><br><em style="color:var(--tx3)">Beilagen: Lebenslauf, Arbeitszeugnis, Diplom</em>',
cv:'<h4 style="font-family:var(--se);border-bottom:1px solid var(--bd);padding-bottom:6px;margin-bottom:12px">Lebenslauf</h4><strong style="font-size:16px">Maria Kovacs</strong><br>Pilatusstrasse 42, 6003 Luzern<br>078 921 33 10 · m.kovacs@outlook.com<br>Ungarin (Aufenthaltsbewilligung B) · 12.09.1997 · Ledig<br><br><strong>Berufserfahrung</strong><br>• <strong>Café Rossi, Luzern</strong>, Mai 2025 – heute<br>&nbsp;&nbsp;&nbsp;Service-Aushilfe (Teilzeit, ca. 40%)<br>• <strong>Hotel Astoria Budapest ★★★</strong>, Jan 2023 – Apr 2025<br>&nbsp;&nbsp;&nbsp;Réceptionistin<br>• <strong>Hotel Astoria Budapest ★★★</strong>, Aug 2021 – Dez 2022<br>&nbsp;&nbsp;&nbsp;Réception-Praktikantin<br><br><strong>Ausbildung</strong><br>• Hotelfachausbildung, Budapest Tourism Academy — 2021 (ungarisch)<br>• Goethe-Zertifikat B1 Deutsch — März 2025<br>• Cambridge First Certificate (B2) Englisch — 2020<br><br><strong>IT</strong><br>• Protel PMS (2 Jahre), MS Office<br><br><strong>Sprachen</strong><br>• Ungarisch: Muttersprache · Deutsch: B1 · Englisch: B2 · Rumänisch: A2<br><br><strong>Referenzen</strong><br>• Herr László Németh, Direktor, Hotel Astoria Budapest',
zeug:'<h4 style="font-family:var(--se);border-bottom:1px solid var(--bd);padding-bottom:6px;margin-bottom:12px">Arbeitszeugnisse</h4><div style="background:var(--s);border:1px solid var(--bd);border-radius:12px;padding:20px;line-height:1.9"><div style="text-align:center;margin-bottom:14px;padding-bottom:10px;border-bottom:1px solid var(--bd)"><strong style="font-size:16px">ARBEITSZEUGNIS</strong><br><br>Frau Maria Kovacs, geboren am 12.09.1997, ungarische Staatsangehörige,<br>war vom 01.08.2021 bis 30.04.2025 im Hotel Astoria Budapest als<br><strong>Réception-Praktikantin und Réceptionistin</strong> tätig.</div>Frau Kovacs begann ihre Tätigkeit in unserem Hotel als Praktikantin im Rahmen ihrer Ausbildung an der Budapest Tourism Academy. Nach erfolgreichem Abschluss der Ausbildung im Dezember 2022 übernahm sie ab Januar 2023 die Position als Réceptionistin in Vollzeit.<br><br>Zu ihren Aufgaben gehörten:<br><br>• Check-in und Check-out der Gäste<br>• Telefonische und schriftliche Reservationsannahme<br>• Bearbeitung von Gästeanfragen und Reklamationen<br>• Bedienung des Protel Property Management Systems<br>• Erstellung von Tagesabrechnungen<br>• Zusammenarbeit mit Housekeeping und Technik<br><br>Frau Kovacs hat ihre Aufgaben zu unserer Zufriedenheit erledigt. Sie war freundlich und korrekt im Umgang mit Gästen und Kollegen.<br><br>Frau Kovacs verlässt unser Hotel auf eigenen Wunsch, um in der Schweiz zu arbeiten. Wir wünschen ihr für die Zukunft alles Gute.<br><br><em>Budapest, April 2025 — László Németh, Hoteldirektor</em></div>',
krit:[{n:'Abgeschlossene Berufsausbildung',t:'Muss',a:'teilweise',e:'Ungarischer Abschluss — nicht in CH anerkannt.'},{n:'Deutsch mind. B2',t:'Muss',a:'nein',e:'Goethe B1 — unter Mindestanforderung.'},{n:'Englisch gut',t:'Soll',a:'ja',e:'Cambridge First = B2.'},{n:'Réception-Erfahrung',t:'Muss',a:'ja',e:'2+ Jahre Hotel Astoria Budapest.'},{n:'PMS Fidelio/Protel',t:'Soll',a:'teilweise',e:'Protel ja, Fidelio nein.'},{n:'CH-Arbeitsmarkt',t:'Kann',a:'nein',e:'6 Monate CH, keine Hotel-Erfahrung hier.'},{n:'Gastorientierung',t:'Muss',a:'teilweise',e:'Zeugnis nur «zu unserer Zufriedenheit» und «freundlich und korrekt».'},{n:'Flexibilität',t:'Soll',a:'ja',e:'Aktuell Teilzeit-Aushilfe.'},{n:'Zusatzsprachen',t:'Kann',a:'ja',e:'Ungarisch.'},{n:'Teamfähigkeit',t:'Soll',a:'teilweise',e:'Im Zeugnis nicht hervorgehoben.'}],
ans:'C',ansE:'C-Kandidatin: Deutsch nur B1 (Muss nicht erfüllt). Ausbildung nicht CH-anerkannt. Zeugnis durchschnittlich. Absage — Deutsch auf B2 verbessern.'},

// FALL 5 — Elena Petrovic
{stelle:{hotel:'Kongresshotel Allegra ★★★★, Bern (Jahresbetrieb)',pos:'Front Office Supervisor',anf:'Hotel-KV oder HF (Muss), Deutsch Muttersprache (Muss), Englisch C1 (Muss), Französisch B1 (Soll), Front Office mind. 3 Jahre (Muss), Supervisory (Soll), Opera PMS (Muss), Kongresshotellerie (Kann), Stressresistenz (Muss), Schichtbereitschaft (Muss)'},name:'Elena Petrovic',
motiv:'<h4 style="font-family:var(--se);border-bottom:1px solid var(--bd);padding-bottom:6px;margin-bottom:12px">Motivationsschreiben</h4><strong>Elena Petrovic</strong><br>Länggassstrasse 55, 3012 Bern<br>079 844 22 16 · elena.petrovic@gmail.com<br><br><div style="text-align:right;color:var(--tx3)">Kongresshotel Allegra<br>HR-Abteilung<br>3001 Bern<br><br>Bern, 5. November 2025</div><br><strong>Betreff: Bewerbung Front Office Supervisor</strong><br><br>Sehr geehrte Damen und Herren<br><br>Als gebürtige Bernerin mit 7 Jahren Erfahrung im Front Office von 4- und 5-Sterne-Hotels bewerbe ich mich auf die ausgeschriebene Position als Front Office Supervisor.<br><br>In meiner aktuellen Rolle als Shiftleaderin im Hotel Bern habe ich Erfahrung in der Schichtleitung gesammelt und bin verantwortlich für Check-in/out bei Kongressgruppen bis 200 Personen. Der Umgang mit dem Opera PMS ist mein tägliches Werkzeug.<br><br>Was mich besonders am Allegra reizt: Ihr Ruf als führendes Kongresshotel in Bern und die Möglichkeit, mein Team-Leadership weiterzuentwickeln.<br><br>Freundliche Grüsse<br><br>Elena Petrovic<br><br><em style="color:var(--tx3)">Beilagen: Lebenslauf, Arbeitszeugnisse, Diplome</em>',
cv:'<h4 style="font-family:var(--se);border-bottom:1px solid var(--bd);padding-bottom:6px;margin-bottom:12px">Lebenslauf</h4><strong style="font-size:16px">Elena Petrovic</strong><br>Länggassstrasse 55, 3012 Bern<br>079 844 22 16 · elena.petrovic@gmail.com<br>Schweizerin (Doppelbürgerin CH/RS) · 22.11.1995 · Ledig<br>Hobbys: Laufen, Reisen, Sprachen, Fotografie<br><br><strong>Berufserfahrung</strong><br>• <strong>Hotel Bern ★★★★</strong>, März 2023 – heute<br>&nbsp;&nbsp;&nbsp;Shiftleaderin Front Office (4 MA)<br>• <strong>Swissôtel Zürich ★★★★★</strong>, Sep 2020 – Feb 2023<br>&nbsp;&nbsp;&nbsp;Front Office Mitarbeitende<br>• <strong>Hotel Innere Enge Bern ★★★★</strong>, Aug 2018 – Aug 2020<br>&nbsp;&nbsp;&nbsp;Front Office / Réception<br>• <strong>Hotel Schweizerhof Bern ★★★★★</strong>, Aug 2015 – Jul 2018<br>&nbsp;&nbsp;&nbsp;Lehre Hotel-Kommunikationsfachfrau<br><br><strong>Ausbildung</strong><br>• Hotel-Kommunikationsfachfrau EFZ — 2018<br>• Cambridge Advanced Certificate (C1) — 2019<br>• DELF B1 Französisch — 2020<br><br><strong>IT</strong><br>• Opera PMS V5 (Experte), Protel, Mews, MS Office, Canva<br><br><strong>Sprachen</strong><br>• Deutsch: Muttersprache · Serbisch: Muttersprache · Englisch: C1 · Französisch: B1<br><br><strong>Referenzen</strong><br>• Frau Sandra Müller, Front Office Manager, Hotel Bern<br>• Herr Daniel Aebersold, HR, Swissôtel Zürich',
zeug:'<h4 style="font-family:var(--se);border-bottom:1px solid var(--bd);padding-bottom:6px;margin-bottom:12px">Arbeitszeugnisse</h4><div style="background:var(--s);border:1px solid var(--bd);border-radius:12px;padding:20px;margin-bottom:14px;line-height:1.9"><div style="text-align:center;margin-bottom:14px;padding-bottom:10px;border-bottom:1px solid var(--bd)"><strong style="font-size:16px">ARBEITSZEUGNIS</strong><br><br>Frau Elena Petrovic, geboren am 22.11.1995, von Bern,<br>war vom 01.09.2020 bis 28.02.2023 in unserem Swissôtel Zürich als<br><strong>Front Office Mitarbeitende</strong> tätig.</div>Frau Petrovic war in unserem Front Office für sämtliche Aufgaben rund um den Gästeempfang verantwortlich. Dazu gehörten:<br><br>• Check-in und Check-out inkl. Gruppenabwicklung<br>• Telefonzentrale und E-Mail-Korrespondenz<br>• Reservationsmanagement und Zimmerzuweisung<br>• Bearbeitung von Gästewünschen und Reklamationen<br>• Kassenabschluss und Debitorenkontrolle<br>• Bedienung von Opera PMS und internen Reporting-Tools<br><br>Frau Petrovic hat die ihr übertragenen Aufgaben stets zu unserer vollen Zufriedenheit ausgeführt. Sie zeichnete sich durch Zuverlässigkeit, Pünktlichkeit und ein freundliches Auftreten aus.<br><br>Im Umgang mit Vorgesetzten, Mitarbeitenden und Gästen war sie stets freundlich und korrekt.<br><br>Frau Petrovic verlässt uns auf eigenen Wunsch, was wir bedauern. Wir wünschen ihr für die Zukunft alles Gute.<br><br><em>Zürich, Februar 2023 — Daniel Aebersold, Human Resources Manager</em></div><div style="background:var(--s);border:1px solid var(--bd);border-radius:12px;padding:20px;line-height:1.9"><div style="text-align:center;margin-bottom:14px;padding-bottom:10px;border-bottom:1px solid var(--bd)"><strong style="font-size:16px">ZWISCHENZEUGNIS</strong><br><br>Frau Elena Petrovic, geboren am 22.11.1995, von Bern,<br>ist seit dem 01.03.2023 im Hotel Bern als<br><strong>Shiftleaderin Front Office</strong> tätig.</div>Frau Petrovic hat sich in ihrer Funktion als Shiftleaderin bestens bewährt. Sie leitet ihr Team von 4 Personen kompetent und motiviert. Zu ihren erweiterten Verantwortlichkeiten gehören:<br><br>• Operative Schichtleitung und Tagesplanung<br>• Kongress-Check-ins mit bis zu 200 Gästen<br>• Einarbeitung und Coaching neuer Mitarbeitender<br>• Qualitätssicherung und Einhaltung der Hotelstandards<br>• Enge Zusammenarbeit mit Bankett und Kongressorganisation<br><br>Auch in Stresssituationen — insbesondere bei gleichzeitigen Kongress-Arrivals — behält Frau Petrovic stets die Übersicht und handelt umsichtig. Ihre Kommunikation mit Gästen und dem Team ist professionell und wertschätzend.<br><br>Wir schätzen Frau Petrovic als engagierte und wertvolle Mitarbeiterin und stellen ihr dieses Zwischenzeugnis gerne auf ihren Wunsch hin aus.<br><br><em>Bern, Oktober 2025 — Sandra Müller, Front Office Manager</em></div>',
krit:[{n:'Hotel-KV oder HF',t:'Muss',a:'ja',e:'Hotel-Kommunikationsfachfrau EFZ.'},{n:'Deutsch Muttersprache',t:'Muss',a:'ja',e:'Aufgewachsen in Bern.'},{n:'Englisch C1',t:'Muss',a:'ja',e:'Cambridge Advanced = C1.'},{n:'Französisch B1',t:'Soll',a:'ja',e:'DELF B1.'},{n:'Front Office mind. 3 Jahre',t:'Muss',a:'ja',e:'7+ Jahre (seit 2018).'},{n:'Supervisory-Erfahrung',t:'Soll',a:'ja',e:'Shiftleaderin seit 2023.'},{n:'Opera PMS',t:'Muss',a:'ja',e:'Opera V5 Experte.'},{n:'Kongresshotellerie',t:'Kann',a:'ja',e:'Hotel Bern: Kongress-Check-ins 200 Gäste.'},{n:'Stressresistenz',t:'Muss',a:'ja',e:'Zwischenzeugnis: «behält stets die Übersicht».'},{n:'Schichtbereitschaft',t:'Muss',a:'ja',e:'Shiftleaderin = Schichtbetrieb.'}],
ans:'A',ansE:'A-Kandidatin: Alle Muss erfüllt. Solide bis gute Zeugnisse. Kongresserfahrung. Einladen.'},

// FALL 6 — Amir Hassan
{stelle:{hotel:'Jugendherberge Interlaken',pos:'Réceptionist:in (Saisonstelle Sommer)',anf:'Kaufm. Ausbildung / Réception-Erfahrung (Muss), Deutsch B2 (Muss), Englisch B2 (Muss), Weitere Sprache (Soll), PMS (Kann), Flexibilität (Muss), Teamplayer (Muss), Outdoor-Affinität (Kann)'},name:'Amir Hassan',
motiv:'<h4 style="font-family:var(--se);border-bottom:1px solid var(--bd);padding-bottom:6px;margin-bottom:12px">Motivationsschreiben</h4><strong>Amir Hassan</strong><br>Bundesplatz 3, 3011 Bern<br>078 612 33 90 · amir.hassan@students.hesso.ch<br><br><div style="text-align:right;color:var(--tx3)">Jugendherberge Interlaken<br>HR-Team<br>3800 Interlaken<br><br>Bern, 10. März 2026</div><br><strong>Betreff: Bewerbung Réceptionist Sommer 2026</strong><br><br>Guten Tag<br><br>Ich studiere im 4. Semester Tourismus an der HES-SO Wallis und suche eine Saisonstelle für den Sommer 2026. Die Jugendherberge Interlaken ist für mich der perfekte Ort: jung, international und mitten in der Outdoor-Hauptstadt der Schweiz.<br><br>Letzten Sommer habe ich an der Réception des Bern Backpackers gearbeitet und bin es gewohnt, mit Backpackern aus aller Welt umzugehen — auf Deutsch, Englisch, Französisch und Arabisch. Paragliding, Canyoning und Wandern sind meine Leidenschaft, und ich berate Gäste gerne zu Outdoor-Aktivitäten in der Region.<br><br>Ich freue mich auf Ihre Rückmeldung!<br><br>Sportliche Grüsse<br><br>Amir Hassan<br><br><em style="color:var(--tx3)">Beilagen: Lebenslauf, Arbeitszeugnis</em>',
cv:'<h4 style="font-family:var(--se);border-bottom:1px solid var(--bd);padding-bottom:6px;margin-bottom:12px">Lebenslauf</h4><strong style="font-size:16px">Amir Hassan</strong><br>Bundesplatz 3, 3011 Bern<br>078 612 33 90 · amir.hassan@students.hesso.ch<br>Schweizer (eingebürgert 2020) · 15.05.2001 · Ledig<br>Hobbys: Paragliding, Canyoning, Wandern, Fotografie<br><br><strong>Berufserfahrung</strong><br>• <strong>Bern Backpackers (Hostel)</strong>, Mai – Sep 2025<br>&nbsp;&nbsp;&nbsp;Réceptionist (Saisonstelle)<br>• <strong>Manor Bern</strong>, Dez 2024 – Mär 2025<br>&nbsp;&nbsp;&nbsp;Weihnachts-Aushilfe Verkauf<br>• Diverse Aushilfen, 2020 – 2024<br>&nbsp;&nbsp;&nbsp;Gastro-Service, Event-Helfer<br><br><strong>Ausbildung</strong><br>• BSc Tourismus, HES-SO Wallis (4. Semester, laufend)<br>• Kaufm. Berufsmatura, WMS Bern — 2021<br>• Cambridge Advanced Certificate (C1) — 2022<br><br><strong>Sprachen</strong><br>• Deutsch: C1 (aufgewachsen in Bern) · Arabisch: Muttersprache · Englisch: C1 · Französisch: B2<br><br><strong>Zertifikate</strong><br>• J+S Leiter Bergsport · Erste-Hilfe BLS-AED · Rettungsschwimmer Brevet 1<br><br><strong>Referenzen</strong><br>• Frau Kim Gerber, Managerin, Bern Backpackers',
zeug:'<h4 style="font-family:var(--se);border-bottom:1px solid var(--bd);padding-bottom:6px;margin-bottom:12px">Arbeitszeugnisse</h4><div style="background:var(--s);border:1px solid var(--bd);border-radius:12px;padding:20px;line-height:1.9"><div style="text-align:center;margin-bottom:14px;padding-bottom:10px;border-bottom:1px solid var(--bd)"><strong style="font-size:16px">ARBEITSZEUGNIS</strong><br><br>Herr Amir Hassan, geboren am 15.05.2001, von Bern,<br>war vom 01.05.2025 bis 30.09.2025 in unserem Hostel Bern Backpackers als<br><strong>Réceptionist</strong> (Saisonstelle) tätig.</div>Herr Hassan war während der Sommersaison 2025 an unserer Réception tätig. Zu seinen Aufgaben gehörten:<br><br>• Check-in und Check-out der Gäste (Einzel- und Gruppenreisende)<br>• Telefonische und persönliche Beratung zu Aktivitäten und Ausflügen<br>• Zimmerzuweisung und Bettenverwaltung im Buchungssystem<br>• Kassenabschluss am Tagesende<br>• Organisation von Hostel-Events (Grillabende, Wanderausflüge)<br>• Pflege der Social-Media-Kanäle des Hostels<br><br>Herr Hassan hat seine vielfältigen Aufgaben stets zu unserer vollen Zufriedenheit erfüllt. Dank seiner Mehrsprachigkeit war er besonders wertvoll im Umgang mit unserem internationalen Publikum. Sein Enthusiasmus für Outdoor-Aktivitäten machte ihn zu einem authentischen Ansprechpartner für unsere Gäste.<br><br>Im Umgang mit Gästen und im Team war Herr Hassan stets zuvorkommend, hilfsbereit und fröhlich. Er war bei allen äusserst beliebt.<br><br>Herr Hassan verlässt uns saisonbedingt. Wir würden ihn jederzeit wieder einstellen und wünschen ihm für sein Studium und seine Zukunft alles Gute.<br><br><em>Bern, September 2025 — Kim Gerber, Hostel Manager</em></div>',
krit:[{n:'Kaufm. Ausbildung / Réception',t:'Muss',a:'ja',e:'Kaufm. Berufsmatura + 1 Saison Réception.'},{n:'Deutsch B2',t:'Muss',a:'ja',e:'C1 — aufgewachsen in Bern.'},{n:'Englisch B2',t:'Muss',a:'ja',e:'Cambridge Advanced = C1.'},{n:'Weitere Sprache',t:'Soll',a:'ja',e:'Arabisch Muttersprache + Französisch B2.'},{n:'PMS',t:'Kann',a:'teilweise',e:'Hostel-Buchungssystem ≠ Hotel-PMS.'},{n:'Flexibilität',t:'Muss',a:'ja',e:'Student, Saisonerfahrung, diverse Aushilfen.'},{n:'Teamplayer',t:'Muss',a:'ja',e:'Zeugnis: «äusserst beliebt», «jederzeit wieder einstellen».'},{n:'Outdoor-Affinität',t:'Kann',a:'ja',e:'Paragliding, Canyoning, J+S Leiter.'}],
ans:'A',ansE:'A-Kandidat: 4 Sprachen, Outdoor-affin, top Zeugnis, perfekter Fit für Jugendherberge.'}
];

var hrm2CurCase=0;
window.hrm2GenU1 = function() {
  hrm2CurCase=Math.floor(Math.random()*HRM2_VS.length);
  var c=HRM2_VS[hrm2CurCase];
  document.getElementById('hrm2_u1_stelle').innerHTML='<div style="font-size:11px;font-weight:700;color:var(--tx3);text-transform:uppercase;letter-spacing:1.5px;margin-bottom:6px">Stellenausschreibung</div><strong style="font-size:16px">'+c.stelle.hotel+'</strong><br>Position: <strong>'+c.stelle.pos+'</strong><br><span style="font-size:12px;color:var(--tx3)">'+c.stelle.anf+'</span>';
  var tabs=['Motivationsschreiben','Lebenslauf','Arbeitszeugnisse'],contents=[c.motiv,c.cv,c.zeug];
  var th='',tc='';
  tabs.forEach(function(t,i){
    th+='<div style="padding:7px 16px;border-radius:9px;font-size:12px;font-weight:600;cursor:pointer;border:1px solid var(--bd);background:'+(i===0?'var(--ac)':'var(--s)')+';color:'+(i===0?'#fff':'var(--tx3)')+';transition:all .2s" onclick="hrm2SwitchTab('+i+')">'+t+'</div>';
    tc+='<div style="display:'+(i===0?'block':'none')+';background:var(--s2);border:1px solid var(--bd);border-radius:14px;padding:22px;margin:10px 0;font-size:13px;color:var(--tx2);line-height:1.8" id="hrm2_u1_tp'+i+'">'+contents[i]+'</div>';
  });
  document.getElementById('hrm2_u1_tabs').innerHTML=th;
  document.getElementById('hrm2_u1_tabcontent').innerHTML=tc;
  var h='';
  c.krit.forEach(function(k,i){
    var col=k.t==='Muss'?'var(--rl);color:var(--r)':k.t==='Soll'?'var(--aml);color:var(--am)':'var(--pl);color:var(--pr)';
    h+='<div class="c" id="hrm2_u1q'+i+'" style="padding:12px 16px"><div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px"><div><strong>'+k.n+'</strong> <span style="display:inline-block;padding:3px 10px;border-radius:980px;font-size:10px;font-weight:700;letter-spacing:.5px;background:'+col+'">'+k.t+'</span></div><div style="display:flex;gap:8px;flex-wrap:wrap;margin:4px 0"><label style="display:flex;align-items:center;gap:5px;cursor:pointer;font-size:12px;padding:4px 12px;border-radius:8px;border:1px solid var(--bd);background:var(--s);color:var(--tx2)"><input type="radio" name="hrm2_u1k'+i+'" value="ja" style="accent-color:var(--ac)"> Erfüllt</label><label style="display:flex;align-items:center;gap:5px;cursor:pointer;font-size:12px;padding:4px 12px;border-radius:8px;border:1px solid var(--bd);background:var(--s);color:var(--tx2)"><input type="radio" name="hrm2_u1k'+i+'" value="teilweise" style="accent-color:var(--ac)"> Teilweise</label><label style="display:flex;align-items:center;gap:5px;cursor:pointer;font-size:12px;padding:4px 12px;border-radius:8px;border:1px solid var(--bd);background:var(--s);color:var(--tx2)"><input type="radio" name="hrm2_u1k'+i+'" value="nein" style="accent-color:var(--ac)"> Nicht erfüllt</label></div></div><div id="hrm2_u1fb'+i+'" style="display:none;margin-top:6px;padding:8px 12px;border-radius:8px;font-size:12px"></div></div>';
  });
  document.getElementById('hrm2_u1_qs').innerHTML=h;
  document.getElementById('hrm2_u1_res').innerHTML='';
  document.querySelectorAll('input[name="hrm2_u1_cat"]').forEach(function(r){r.checked=false});
  var ff=document.getElementById('hrm2_u1_ffb');if(ff){ff.style.display='none';ff.innerHTML=''}
};
window.hrm2SwitchTab = function(n) {
  var tabs=document.getElementById('hrm2_u1_tabs').children;
  for(var i=0;i<tabs.length;i++){tabs[i].style.background=i===n?'var(--ac)':'var(--s)';tabs[i].style.color=i===n?'#fff':'var(--tx3)'}
  for(var i=0;i<3;i++){var p=document.getElementById('hrm2_u1_tp'+i);if(p)p.style.display=i===n?'block':'none'}
};
window.hrm2CheckU1 = function() {
  var c=HRM2_VS[hrm2CurCase],cor=0;
  c.krit.forEach(function(k,i){
    var sel=document.querySelector('input[name="hrm2_u1k'+i+'"]:checked');
    var fb=document.getElementById('hrm2_u1fb'+i),card=document.getElementById('hrm2_u1q'+i);
    if(!fb||!card)return;fb.style.display='block';
    if(sel&&sel.value===k.a){card.style.borderLeft='3px solid var(--g)';fb.innerHTML='<span style="color:var(--g)">✓ Richtig!</span> <span style="color:var(--tx2)">'+k.e+'</span>';fb.style.background='rgba(63,185,80,.06)';cor++}
    else{card.style.borderLeft='3px solid var(--r)';fb.innerHTML='<span style="color:var(--r)">✗ Richtig wäre: '+(k.a==='ja'?'Erfüllt':k.a==='teilweise'?'Teilweise':'Nicht erfüllt')+'</span> <span style="color:var(--tx2)">'+k.e+'</span>';fb.style.background='rgba(248,81,73,.06)'}
  });
  var fs=document.querySelector('input[name="hrm2_u1_cat"]:checked'),ff=document.getElementById('hrm2_u1_ffb');
  if(ff){ff.style.display='block';
    if(fs&&fs.value===c.ans){ff.innerHTML='<span style="color:var(--g)">✓ Richtig!</span> '+c.ansE;ff.style.background='rgba(63,185,80,.08)';ff.style.color='var(--tx2)'}
    else{ff.innerHTML='<span style="color:var(--r)">✗ Richtig: '+c.ans+'-Kandidat:in.</span> '+c.ansE;ff.style.background='rgba(248,81,73,.08)';ff.style.color='var(--tx2)'}
  }
  document.getElementById('hrm2_u1_res').innerHTML='<div style="background:'+(cor===c.krit.length?'var(--gl);color:var(--g)':'rgba(88,166,255,.08);color:var(--ac)')+';border-radius:10px;padding:12px 16px;font-size:13px">'+cor+' von '+c.krit.length+' Kriterien richtig beurteilt</div>';
};

// ---- Ü2: ONBOARDING ----
var HRM2_OB=[
{m:'Arbeitsvertrag und rechtliche Dokumente bereitstellen',p:'Vorbereitung'},{m:'Buddy/Götti bestimmen',p:'Vorbereitung'},{m:'Willkommenspaket zusammenstellen',p:'Vorbereitung'},{m:'Team über neue Person informieren',p:'Vorbereitung'},{m:'Willkommens-E-Mail mit Infos zum 1. Tag senden',p:'Vorbereitung'},{m:'Uniformen, Laptop, Telefon, Badge bereitstellen',p:'Vorbereitung'},{m:'Arbeitsplatz einrichten',p:'Vorbereitung'},{m:'Zugangsrechte für Systeme einrichten',p:'Vorbereitung'},{m:'AHV-Ausgleichskasse und Pensionskasse anmelden',p:'Vorbereitung'},{m:'Einführungsprogramm erstellen',p:'Vorbereitung'},
{m:'Persönliches Willkommen durch Vorgesetzte',p:'Eintrittstag'},{m:'Rundgang durch den Betrieb',p:'Eintrittstag'},{m:'Gemeinsames Mittagessen mit Buddy',p:'Eintrittstag'},{m:'Vorstellung im Team',p:'Eintrittstag'},{m:'Werte und Unternehmenskultur vermitteln',p:'Eintrittstag'},{m:'5-10 Min. Resümee am Abend (Chefsache)',p:'Eintrittstag'},{m:'Arbeitskleider und Schlüssel übergeben',p:'Eintrittstag'},
{m:'Schulung interne Systeme und Tools',p:'Einarbeitung'},{m:'Detaillierte Einführung in Aufgaben',p:'Einarbeitung'},{m:'Abwechslung Praxis und Theorie planen',p:'Einarbeitung'},{m:'Mentor zusätzlich zum Buddy einsetzen',p:'Einarbeitung'},{m:'Kurzfristige Ziele definieren',p:'Einarbeitung'},{m:'Netzwerkaufbau fördern',p:'Einarbeitung'},{m:'Regelmässige Feedbackgespräche führen',p:'Einarbeitung'},{m:'Teambuilding-Aktivitäten organisieren',p:'Einarbeitung'},{m:'HACCP-/Hygiene-Schulung durchführen',p:'Einarbeitung'},
{m:'Erfolge hervorheben und Zielerreichung prüfen',p:'Probezeitgespräch'},{m:'Feedback AG + Selbstreflexion MA einholen',p:'Probezeitgespräch'},{m:'Weiterentwicklung und Schulungsbedarf besprechen',p:'Probezeitgespräch'},{m:'Entscheid: Festanstellung, Verlängerung oder Trennung',p:'Probezeitgespräch'},{m:'Gesprächsprotokoll unterschreiben',p:'Probezeitgespräch'},{m:'Realistische Ziele für nächste Phase setzen',p:'Probezeitgespräch'}
];
var hrm2CurOB=[];
window.hrm2GenU2 = function() {
  var s=HRM2_OB.slice().sort(function(){return Math.random()-.5});hrm2CurOB=s.slice(0,14);
  var h='';hrm2CurOB.forEach(function(it,i){
    h+='<div class="c" id="hrm2_u2q'+i+'" style="padding:10px 16px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px"><div style="flex:1;min-width:200px;font-size:13px">'+it.m+'</div><select id="hrm2_u2s'+i+'" style="min-width:180px;font-family:var(--f);font-size:12px;padding:6px 10px;border-radius:8px;border:1px solid var(--bd);background:var(--s2);color:var(--tx)"><option value="">— Phase wählen —</option><option value="Vorbereitung">Vor dem 1. Tag</option><option value="Eintrittstag">1. Arbeitstag</option><option value="Einarbeitung">Einarbeitung</option><option value="Probezeitgespräch">Probezeitgespräch</option></select><div id="hrm2_u2fb'+i+'" style="display:none;width:100%;margin-top:4px;padding:6px 12px;border-radius:8px;font-size:12px"></div></div>';
  });
  document.getElementById('hrm2_u2_qs').innerHTML=h;document.getElementById('hrm2_u2_res').innerHTML='';
};
window.hrm2CheckU2 = function() {
  var cor=0;hrm2CurOB.forEach(function(it,i){
    var sel=document.getElementById('hrm2_u2s'+i),fb=document.getElementById('hrm2_u2fb'+i),card=document.getElementById('hrm2_u2q'+i);
    if(!sel||!fb||!card)return;fb.style.display='block';
    if(sel.value===it.p){card.style.borderLeft='3px solid var(--g)';fb.innerHTML='<span style="color:var(--g)">✓</span>';fb.style.background='rgba(63,185,80,.06)';cor++}
    else{card.style.borderLeft='3px solid var(--r)';fb.innerHTML='<span style="color:var(--r)">✗ Richtig: '+it.p+'</span>';fb.style.background='rgba(248,81,73,.06)'}
  });
  document.getElementById('hrm2_u2_res').innerHTML='<div style="background:'+(cor===hrm2CurOB.length?'var(--gl);color:var(--g)':'rgba(88,166,255,.08);color:var(--ac)')+';border-radius:10px;padding:12px 16px;font-size:13px">'+cor+' von '+hrm2CurOB.length+' richtig zugeordnet</div>';
};

// ---- Ü3: PROBEZEITGESPRÄCH ----
var HRM2_PZ=[
{sit:'<strong>Hotel Sonnenberg ★★★★, Davos.</strong> Sous-Chefin Laura (28), 2.5 Monate. Fachlich top — Food Cost gesenkt, neue Saisonkarte eingeführt. Mehrere Beschwerden vom Service-Team über «herablassenden» Kommunikationsstil. Kein formelles Gespräch bisher. Probezeitgespräch in 2 Wochen.',qs:[
{ph:'1. Vorbereitung',q:'Wichtigster Schritt?',opts:['Kündigungsschreiben vorbereiten','Feedback vom Service sammeln, Fakten dokumentieren','Lauras Freundin im Team befragen'],a:1,ex:'Dokumentierte Fakten sind die Basis für ein faires Gespräch.'},
{ph:'2. Rückblick',q:'Wie starten?',opts:['Sofort Beschwerden ansprechen','Fachliche Erfolge anerkennen, dann Teamthema','Fragen ob Laura glücklich ist'],a:1,ex:'Zuerst Positives = konstruktive Gesprächsbasis.'},
{ph:'3. Feedback',q:'Wie Verhalten ansprechen?',opts:['«Das Team mag dich nicht»','Konkrete Situationen + Wirkung beschreiben, ohne zu verurteilen','«Ändere dich oder geh»'],a:1,ex:'Konkret + Wirkung, nicht Bewertung ist professionell.'},
{ph:'4. Zukunft',q:'Massnahme?',opts:['6-Wochen-Zielvereinbarung mit Check-ins','Teamwechsel','Abwarten'],a:0,ex:'Messbare Ziele + Begleitung = faire Chance.'},
{ph:'5. Entscheidung',q:'Entscheid?',opts:['Kündigung','Verlängerung mit dokumentierten Erwartungen','Festanstellung'],a:1,ex:'Fachlich gut + Verhaltenslücke = Verlängerung mit klaren Zielen.'},
{ph:'6. Abschluss',q:'Dokumentation?',opts:['Nichts — mündlich reicht','Protokoll mit Zielen, beidseitig unterschrieben','E-Mail'],a:1,ex:'Schriftlich + Unterschrift = verbindlich und rechtssicher.'}]},
{sit:'<strong>Stadthotel Central ★★★, Basel.</strong> Réceptionist Jan (22), 3 Monate. Pünktlich, freundlich, bei Gästen beliebt. Problem: Regelmässige Fehler bei der Rechnungsstellung (falsche MWST-Sätze, vergessene Minibar-Posten). Zwei informelle Hinweise, keine Besserung. Buddy: «Jan versteht das System einfach nicht.»',qs:[
{ph:'1. Vorbereitung',q:'Was vorbereiten?',opts:['Fehlerliste mit Datum und Betrag','Buddy nochmal hinschicken','Direkt kündigen'],a:0,ex:'Datierte, konkrete Beispiele = faire Grundlage.'},
{ph:'2. Rückblick',q:'Kommunikation?',opts:['Nur Fehler auflisten','Stärken anerkennen + Fehlerquote sachlich darstellen','«Alles super, mach weiter so»'],a:1,ex:'Ausgewogen: Stärken würdigen + Verbesserungsfeld benennen.'},
{ph:'3. Feedback',q:'Ursache finden?',opts:['Jan fragen, wie er sich einschätzt und wo Schwierigkeiten liegen','Sagen er sei faul','Buddy beschuldigen'],a:0,ex:'Selbstreflexion einfordern = wahre Ursache finden.'},
{ph:'4. Zukunft',q:'Massnahme?',opts:['Versetzung Housekeeping','PMS-Nachschulung + tägliche Rechnungskontrolle für 4 Wochen','Mehr üben ohne Hilfe'],a:1,ex:'Gezielte Schulung + engmaschige Kontrolle = Lücke beheben.'},
{ph:'5. Entscheidung',q:'Entscheid?',opts:['Festanstellung — Gäste lieben ihn','Verlängerung mit Schulungsplan, Fehlerrate unter 5% in 4 Wochen','Kündigung'],a:1,ex:'Potenzial + behebbare Lücke = Verlängerung mit messbarem Ziel.'},
{ph:'6. Abschluss',q:'Am Ende?',opts:['Händeschütteln, fertig','Protokoll + Schulungsplan unterschreiben, Check-in-Termin','«Mal schauen»'],a:1,ex:'Schriftlich + nächster Termin = Verbindlichkeit.'}]},
{sit:'<strong>Resort Alpenblick ★★★★, Adelboden.</strong> Neue Spa-Managerin Tanja (35), 2 Monate. 8 Jahre Wellness-Hotel Österreich. Behandlungsangebot sofort erweitert. Problem: Ignoriert interne Prozesse — bestellt Produkte ohne Freigabe, ändert Dienstpläne ohne HR, passt Preise eigenmächtig an. Argument: «In Österreich haben wir das immer so gemacht.»',qs:[
{ph:'1. Vorbereitung',q:'Wie vorbereiten?',opts:['Interne Richtlinien + konkrete Verstösse auflisten','Abwarten und hoffen','Sofort verwarnen'],a:0,ex:'Fakten + Richtlinien dokumentieren.'},
{ph:'2. Rückblick',q:'Reflexion?',opts:['Nur Regelverstösse','Fachstärken würdigen, dann Prozess-Thema sachlich','Ignorieren — sie macht gute Arbeit'],a:1,ex:'Anerkennung + klare Benennung der Verstösse.'},
{ph:'3. Feedback',q:'Umgang mit «In Österreich»-Argument?',opts:['«Hier ist Schweiz, Punkt.»','Verständnis zeigen für andere Erfahrung, aber klar: Prozesse sind verbindlich','Ihr recht geben — vielleicht Prozesse veraltet'],a:1,ex:'Empathie für Kulturwechsel + Klarheit über nicht-verhandelbare Regeln.'},
{ph:'4. Zukunft',q:'Massnahme?',opts:['Alle Kompetenzen entziehen','Kompetenzmatrix erstellen: Was darf sie allein, was braucht Freigabe — wöchentliche Check-ins','Richtlinien zum Lesen geben'],a:1,ex:'Kompetenzmatrix = Klarheit und Autonomie innerhalb definierter Grenzen.'},
{ph:'5. Entscheidung',q:'Entscheid?',opts:['Kündigung','Verlängerung mit Kompetenzregelung und Prozess-Schulung','Festanstellung — fachlich grossartig'],a:1,ex:'Fachlich stark + Prozess-Lücke behebbar = Verlängerung.'},
{ph:'6. Abschluss',q:'Dokumentation?',opts:['Kompetenzmatrix + Schulungstermine, unterschrieben','Mündliche Abmachung','Freundliche E-Mail'],a:0,ex:'Kompetenzmatrix schriftlich = klare Erwartungen für beide Seiten.'}]}
];
var hrm2CurPZ=0;
window.hrm2GenU3 = function() {
  hrm2CurPZ=Math.floor(Math.random()*HRM2_PZ.length);var c=HRM2_PZ[hrm2CurPZ];
  document.getElementById('hrm2_u3_case').innerHTML=c.sit;
  var h='';c.qs.forEach(function(q,i){
    h+='<div class="c" id="hrm2_u3q'+i+'" style="padding:16px"><div style="font-size:11px;font-weight:700;color:var(--pr);text-transform:uppercase;letter-spacing:1.5px;margin-bottom:6px">'+q.ph+'</div><div style="font-weight:600;margin-bottom:10px;font-size:14px">'+q.q+'</div><div style="display:flex;flex-direction:column;gap:6px">';
    q.opts.forEach(function(o,j){h+='<label style="display:flex;align-items:flex-start;gap:8px;cursor:pointer;font-size:13px;padding:8px 14px;border-radius:10px;border:1px solid var(--bd);background:var(--s);color:var(--tx2);transition:all .2s;line-height:1.5"><input type="radio" name="hrm2_u3q'+i+'" value="'+j+'" style="accent-color:var(--ac);margin-top:3px;flex-shrink:0"> '+o+'</label>'});
    h+='</div><div id="hrm2_u3fb'+i+'" style="display:none;margin-top:8px;padding:8px 14px;border-radius:10px;font-size:12px;line-height:1.6"></div></div>';
  });
  document.getElementById('hrm2_u3_qs').innerHTML=h;document.getElementById('hrm2_u3_res').innerHTML='';
};
window.hrm2CheckU3 = function() {
  var c=HRM2_PZ[hrm2CurPZ],cor=0;
  c.qs.forEach(function(q,i){
    var sel=document.querySelector('input[name="hrm2_u3q'+i+'"]:checked');
    var fb=document.getElementById('hrm2_u3fb'+i),card=document.getElementById('hrm2_u3q'+i);
    if(!fb||!card)return;fb.style.display='block';
    if(sel&&parseInt(sel.value)===q.a){card.style.borderLeft='3px solid var(--g)';fb.innerHTML='<span style="color:var(--g)">✓ Richtig!</span> <span style="color:var(--tx2)">'+q.ex+'</span>';fb.style.background='rgba(63,185,80,.06)';cor++}
    else{card.style.borderLeft='3px solid var(--r)';fb.innerHTML='<span style="color:var(--r)">✗ Falsch.</span> <span style="color:var(--tx2)">'+q.ex+'</span>';fb.style.background='rgba(248,81,73,.06)'}
  });
  document.getElementById('hrm2_u3_res').innerHTML='<div style="background:'+(cor===c.qs.length?'var(--gl);color:var(--g)':'rgba(88,166,255,.08);color:var(--ac)')+';border-radius:10px;padding:12px 16px;font-size:13px">'+cor+' von '+c.qs.length+' Phasen richtig</div>';
};

// ---- Ü4: PERSONALBUDGET (randomisiert) ----
var hrm2U4D={};
function hrm2Rnd(a,b){return Math.round((a+Math.random()*(b-a))/100)*100}
function hrm2Fmt(n){return Math.round(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g,"'")}

window.hrm2GenU4 = function() {
  var sc=['Restaurant Seeblick (Jahresbetrieb)','Hotel Alpina Restaurant (Saisonbetrieb)','Bergrestaurant Panorama (Saisonbetrieb)','Brasserie Central (Stadthotel)'][Math.floor(Math.random()*4)];
  var lRL=hrm2Rnd(6200,7200),lStv=hrm2Rnd(4800,5500),lCdS=hrm2Rnd(4400,4900),nSvc=4+Math.floor(Math.random()*5),lSvc=hrm2Rnd(4000,4400);
  var nBuf=2+Math.floor(Math.random()*3),lBuf=hrm2Rnd(3600,3900),aStd=hrm2Rnd(150,400),aLohn=22+Math.floor(Math.random()*4);
  var agb=14,besch=hrm2Rnd(3000,6000),schul=hrm2Rnd(4000,12000),verm=hrm2Rnd(3000,8000),fest=hrm2Rnd(2000,5000);
  var brutto=lRL+lStv+(2*lCdS)+(nSvc*lSvc)+(nBuf*lBuf);
  var aush=aStd*aLohn,m13=Math.round(brutto/12),bInkl=brutto+m13,soz=Math.round(bInkl*agb/100);
  var direkt=bInkl+soz+aush,indJ=besch+schul+verm+fest,jahT=(direkt*12)+indJ,minU=Math.round(jahT/43*100);
  hrm2U4D={brutto:brutto,aush:aush,m13:m13,bInkl:bInkl,soz:soz,direkt:direkt,indJ:indJ,jahT:jahT,minU:minU};
  document.getElementById('hrm2_u4_info').innerHTML='<div style="font-size:11px;font-weight:700;color:var(--tx3);text-transform:uppercase;letter-spacing:1.5px;margin-bottom:8px">Betriebsdaten</div><strong style="font-size:15px">'+sc+'</strong><br><br>• Restaurantleiter:in: CHF '+hrm2Fmt(lRL)+'/Mt.<br>• Stv.: CHF '+hrm2Fmt(lStv)+'/Mt.<br>• 2× Chef de Service: je CHF '+hrm2Fmt(lCdS)+'/Mt.<br>• '+nSvc+'× Service (EFZ): je CHF '+hrm2Fmt(lSvc)+'/Mt.<br>• '+nBuf+'× Buffet: je CHF '+hrm2Fmt(lBuf)+'/Mt.<br>• Aushilfen: '+hrm2Fmt(aStd)+' Std./Mt. à CHF '+hrm2Fmt(aLohn)+' (inkl. Ferien/Feiertage)<br><br>• AGB: '+agb+'% · Beschaffung: CHF '+hrm2Fmt(besch)+'/J · Schulung: CHF '+hrm2Fmt(schul)+'/J · Vermittlung: CHF '+hrm2Fmt(verm)+'/J · Personalfest: CHF '+hrm2Fmt(fest)+'/J · Max. PK-Quote: 43%';
  var td='padding:10px 14px;border:1px solid var(--bd)',inp='style="width:130px;text-align:right;padding:6px 10px;border-radius:8px;border:1px solid var(--bd);background:var(--s2);color:var(--tx);font-family:var(--f);font-size:13px"';
  var h='<table style="margin:16px 0"><tr style="background:var(--s2)"><th style="'+td+'">Position</th><th style="'+td+';text-align:right;width:170px">CHF</th></tr>';
  h+='<tr><td style="'+td+'">Bruttolohnsumme (ohne Aushilfen)</td><td style="'+td+';text-align:right"><input type="text" id="hrm2_u4b" '+inp+' placeholder="?"></td></tr>';
  h+='<tr><td style="'+td+'">+ Aushilfen / Monat</td><td style="'+td+';text-align:right"><input type="text" id="hrm2_u4a" '+inp+' placeholder="?"></td></tr>';
  h+='<tr><td style="'+td+'">+ 13. Monatslohn (1/12 Brutto)</td><td style="'+td+';text-align:right"><input type="text" id="hrm2_u413" '+inp+' placeholder="?"></td></tr>';
  h+='<tr style="background:rgba(63,185,80,.04)"><td style="'+td+'"><strong>= Brutto inkl. 13. ML</strong></td><td style="'+td+';text-align:right"><input type="text" id="hrm2_u4bi" '+inp+' placeholder="?"></td></tr>';
  h+='<tr><td style="'+td+'">+ AGB ('+agb+'%)</td><td style="'+td+';text-align:right"><input type="text" id="hrm2_u4s" '+inp+' placeholder="?"></td></tr>';
  h+='<tr style="background:rgba(88,166,255,.04)"><td style="'+td+'"><strong>= Direkte PK / Monat</strong></td><td style="'+td+';text-align:right"><input type="text" id="hrm2_u4d" '+inp+' placeholder="?"></td></tr>';
  h+='<tr><td style="'+td+'">Indirekte PK / Jahr</td><td style="'+td+';text-align:right"><input type="text" id="hrm2_u4i" '+inp+' placeholder="?"></td></tr>';
  h+='<tr style="background:rgba(210,153,34,.04)"><td style="'+td+'"><strong>= Total PK / Jahr</strong></td><td style="'+td+';text-align:right"><input type="text" id="hrm2_u4t" '+inp+' placeholder="?"></td></tr>';
  h+='<tr style="background:rgba(188,140,255,.04)"><td style="'+td+'"><strong>Min. Jahresumsatz (43%)</strong></td><td style="'+td+';text-align:right"><input type="text" id="hrm2_u4u" '+inp+' placeholder="?"></td></tr>';
  h+='</table>';
  document.getElementById('hrm2_u4_tbl').innerHTML=h;document.getElementById('hrm2_u4_res').innerHTML='';
};
window.hrm2CheckU4 = function() {
  var d=hrm2U4D,sols=[{id:'hrm2_u4b',v:d.brutto},{id:'hrm2_u4a',v:d.aush},{id:'hrm2_u413',v:d.m13},{id:'hrm2_u4bi',v:d.bInkl},{id:'hrm2_u4s',v:d.soz},{id:'hrm2_u4d',v:d.direkt},{id:'hrm2_u4i',v:d.indJ},{id:'hrm2_u4t',v:d.jahT},{id:'hrm2_u4u',v:d.minU}];
  var cor=0;sols.forEach(function(s){var el=document.getElementById(s.id);if(!el)return;var v=parseFloat(el.value.replace(/'/g,'').replace(/CHF/gi,'').trim());var tol=Math.max(200,Math.abs(s.v)*0.02);if(!isNaN(v)&&Math.abs(v-s.v)<=tol){el.style.border='2px solid var(--g)';el.style.background='rgba(63,185,80,.08)';cor++}else{el.style.border='2px solid var(--r)';el.style.background='rgba(248,81,73,.08)'}});
  var r=document.getElementById('hrm2_u4_res');
  if(cor===sols.length)r.innerHTML='<div style="background:var(--gl);color:var(--g);border-radius:10px;padding:12px 16px;font-size:13px">Alles richtig!</div>';
  else r.innerHTML='<div style="background:var(--rl);color:var(--r);border-radius:10px;padding:12px 16px;font-size:13px">'+cor+' von '+sols.length+' richtig</div><div style="margin-top:8px;font-size:12px;color:var(--tx2)">Lösungen: Brutto '+hrm2Fmt(d.brutto)+' · Aushilfen '+hrm2Fmt(d.aush)+' · 13.ML '+hrm2Fmt(d.m13)+' · inkl. '+hrm2Fmt(d.bInkl)+' · AGB '+hrm2Fmt(d.soz)+' · Direkt/Mt '+hrm2Fmt(d.direkt)+' · Indirekt/J '+hrm2Fmt(d.indJ)+' · Total/J '+hrm2Fmt(d.jahT)+' · Umsatz '+hrm2Fmt(d.minU)+'</div>';
};

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
