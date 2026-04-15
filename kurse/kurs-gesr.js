// ===== KURS: GESELLSCHAFTSRECHT =====
(function(){
const courseConfig={id:'gesr',name:'Gesellschaftsrecht',
pages:['gesr','gesr_einf','gesr_hr','gesr_firma','gesr_einz','gesr_rg','gesr_gmbh','gesr_ag','gesr_ueb','gesr_mind','gesr_kart','gesr_quiz','gesr_glossar'],
subNav:[{s:'gesr',l:'Übersicht'},{s:'gesr_einf',l:'Einführung'},{s:'gesr_hr',l:'Handelsregister'},{s:'gesr_firma',l:'Firma & Revision'},{s:'gesr_einz',l:'Einzelunternehmung'},{s:'gesr_rg',l:'Rechtsgemeinschaften'},{s:'gesr_gmbh',l:'GmbH'},{s:'gesr_ag',l:'AG'},{s:'gesr_ueb',l:'Übungen'},{s:'gesr_mind',l:'Zusammenfassung'},{s:'gesr_kart',l:'Karten'},{s:'gesr_quiz',l:'Quiz'},{s:'gesr_glossar',l:'Glossar'}],
navButton:'<button class="nl nl-main" data-s="gesr" onclick="go(\'gesr\')" style="display:none">Gesellschaftsrecht</button>'};

const courseHTML=`
<div class="sec" id="gesr">
<div style="border-radius:24px;padding:36px 32px;margin-bottom:32px;background:linear-gradient(135deg,rgba(52,199,89,.08),rgba(0,122,255,.06));border:1px solid var(--bd);position:relative;overflow:hidden">
<div style="position:absolute;top:-40px;right:-40px;width:160px;height:160px;border-radius:50%;background:linear-gradient(135deg,rgba(52,199,89,.1),rgba(0,122,255,.08))"></div>
<div style="position:relative;z-index:1">
<div style="font-size:12px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:var(--g);margin-bottom:8px">Recht 2 — Teil 2</div>
<h1 style="font-size:32px;letter-spacing:-.6px;margin-bottom:8px">Gesellschaftsrecht</h1>
<p style="font-size:15px;color:var(--tx2);margin-bottom:0">Dozent: Olivier Dollé · Semester 5 · SHL Schweizerische Hotelfachschule Luzern</p>
</div></div>
<div style="font-size:13px;font-weight:600;letter-spacing:1px;text-transform:uppercase;color:var(--tx3);margin-bottom:14px">Fallbeispiel</div>
<div class="c" style="margin-bottom:32px"><div class="ct2" style="color:var(--g)">🏨 Hotel Alpenblick — unser roter Faden</div>
<div class="cd">Die Geschwister <strong>Lena und Marco Berger</strong> haben vor drei Jahren das «Hotel Alpenblick» als <strong>GmbH</strong> gegründet. Das Boutique-Hotel mit 30 Zimmern und einem Restaurant läuft gut, doch es gibt immer wieder rechtliche Herausforderungen: Ein Lieferant zahlt nicht, ein ehemaliger Mitarbeiter hat noch offene Forderungen, und die Geschwister überlegen sich, ob sie die GmbH in eine AG umwandeln sollen.</div>
<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-top:14px">
<div class="c" style="padding:14px 16px;margin:0"><div style="font-size:1.4rem;margin-bottom:4px">🏨</div><div class="ct2" style="font-size:13px">Hotel Alpenblick GmbH</div><div class="cd" style="font-size:12px">Boutique-Hotel in Luzern, 30 Zimmer + Restaurant, gegründet 2022</div></div>
<div class="c" style="padding:14px 16px;margin:0"><div style="font-size:1.4rem;margin-bottom:4px">👩‍💼</div><div class="ct2" style="font-size:13px">Lena Berger</div><div class="cd" style="font-size:12px">Geschäftsführerin, Stammanteil CHF 14'000, zuständig für Finanzen</div></div>
<div class="c" style="padding:14px 16px;margin:0"><div style="font-size:1.4rem;margin-bottom:4px">👨‍🍳</div><div class="ct2" style="font-size:13px">Marco Berger</div><div class="cd" style="font-size:12px">Geschäftsführer, Stammanteil CHF 6'000, zuständig für F&amp;B</div></div>
</div></div>
<div style="font-size:13px;font-weight:600;letter-spacing:1px;text-transform:uppercase;color:var(--tx3);margin-bottom:14px">Theorie · 7 Kapitel</div>
<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:12px;margin-bottom:36px">
<div class="c ck" onclick="go('gesr_einf')" style="padding:20px 22px;display:flex;gap:14px;align-items:flex-start"><div style="width:32px;height:32px;border-radius:10px;background:var(--gl);color:var(--g);display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0">1</div><div><div class="ct2">Einführung &amp; Übersicht</div><div class="cd">Gesellschaftsformen, jur. Person, Organe</div></div></div>
<div class="c ck" onclick="go('gesr_hr')" style="padding:20px 22px;display:flex;gap:14px;align-items:flex-start"><div style="width:32px;height:32px;border-radius:10px;background:var(--gl);color:var(--g);display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0">2</div><div><div class="ct2">Handelsregister</div><div class="cd">Funktion, Eintragung, Publizitätswirkung</div></div></div>
<div class="c ck" onclick="go('gesr_firma')" style="padding:20px 22px;display:flex;gap:14px;align-items:flex-start"><div style="width:32px;height:32px;border-radius:10px;background:var(--aml);color:var(--am);display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0">3</div><div><div class="ct2">Firma &amp; Revision</div><div class="cd">Firmenrecht, Firmenbildung, Revisionspflicht</div></div></div>
<div class="c ck" onclick="go('gesr_einz')" style="padding:20px 22px;display:flex;gap:14px;align-items:flex-start"><div style="width:32px;height:32px;border-radius:10px;background:var(--aml);color:var(--am);display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0">4</div><div><div class="ct2">Einzelunternehmung</div><div class="cd">Merkmale, Haftung, Sonderfall</div></div></div>
<div class="c ck" onclick="go('gesr_rg')" style="padding:20px 22px;display:flex;gap:14px;align-items:flex-start"><div style="width:32px;height:32px;border-radius:10px;background:var(--pl);color:var(--pr);display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0">5</div><div><div class="ct2">Rechtsgemeinschaften</div><div class="cd">Einfache Gesellschaft, KlG, KmG</div></div></div>
<div class="c ck" onclick="go('gesr_gmbh')" style="padding:20px 22px;display:flex;gap:14px;align-items:flex-start"><div style="width:32px;height:32px;border-radius:10px;background:var(--al);color:var(--ac);display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0">6</div><div><div class="ct2">GmbH</div><div class="cd">Gründung, Organe, Haftung, Übertragung</div></div></div>
<div class="c ck" onclick="go('gesr_ag')" style="padding:20px 22px;display:flex;gap:14px;align-items:flex-start"><div style="width:32px;height:32px;border-radius:10px;background:var(--rl);color:var(--r);display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0">7</div><div><div class="ct2">Aktiengesellschaft</div><div class="cd">Aktien, VR, GV, Kapitalschutz</div></div></div>
</div>
<div style="font-size:13px;font-weight:600;letter-spacing:1px;text-transform:uppercase;color:var(--tx3);margin-bottom:14px">Lerntools</div>
<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(120px,1fr));gap:12px">
<div class="c ck" onclick="go('gesr_ueb')" style="text-align:center;padding:24px 16px"><div style="font-size:24px;font-weight:700;color:var(--g);margin-bottom:6px">✍</div><div class="ct2">Übungen</div><div class="cd">Mit Lösungs-Toggle</div></div>
<div class="c ck" onclick="go('gesr_mind')" style="text-align:center;padding:24px 16px"><div style="font-size:24px;font-weight:700;background:var(--grad);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;margin-bottom:6px">5</div><div class="ct2">Zusammenfassung</div><div class="cd">Visuelle Übersichten</div></div>
<div class="c ck" onclick="go('gesr_kart')" style="text-align:center;padding:24px 16px"><div id="ltGesrCards" style="font-size:24px;font-weight:700;background:var(--grad);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;margin-bottom:6px">33</div><div class="ct2">Karteikarten</div><div class="cd">Klicken &amp; repetieren</div></div>
<div class="c ck" onclick="go('gesr_quiz')" style="text-align:center;padding:24px 16px"><div id="ltGesrQuiz" style="font-size:24px;font-weight:700;background:var(--grad);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;margin-bottom:6px">33</div><div class="ct2">Quiz</div><div class="cd">Mit Lernfortschritt</div></div>
<div class="c ck" onclick="go('gesr_glossar')" style="text-align:center;padding:24px 16px"><div style="font-size:24px;font-weight:700;background:var(--grad);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;margin-bottom:6px">A–Z</div><div class="ct2">Glossar</div><div class="cd">Begriffe &amp; Abkürzungen</div></div>
</div></div>

<!-- EINFÜHRUNG -->
<div class="sec" id="gesr_einf"><h1>Gesellschaftsrecht — Einführung</h1><p class="sub">Gesellschaftsformen, juristische Person, Organe</p>
<div class="hlbl"><strong>Lernziele:</strong><br>• Sie können die einzelnen Unternehmensformen anhand ihrer wichtigsten Merkmale beschreiben<br>• Sie können die Unternehmensformen hinsichtlich Vor- und Nachteilen analysieren<br>• Sie können begründen, für welche Unternehmensform Sie sich bei einer Selbstständigkeit entscheiden würden<br>• Sie können Gründung und interne Organisation einer AG und GmbH verständlich erläutern<br>• Sie können die Rechte und Pflichten eines Aktionärs korrekt benennen<br>• Sie können AG und GmbH anhand eines Praxisfalls vergleichen</div>
<div style="display:flex;gap:8px;margin:12px 0 4px"><button style="font-size:11px;padding:4px 10px" onclick="this.parentElement.nextElementSibling.querySelectorAll('.tl-item').forEach(i=>i.classList.add('open'))">Alle aufklappen</button><button style="font-size:11px;padding:4px 10px" onclick="this.parentElement.nextElementSibling.querySelectorAll('.tl-item').forEach(i=>i.classList.remove('open'))">Alle schliessen</button></div>
<div class="tl">
<div class="tl-item"><div class="tl-num tl-num-g">1</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Merkmale einer Gesellschaft</div><div class="tl-merksatz">«Vertragsmässige Verbindung + gemeinsamer Zweck + gemeinsame Mittel.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body">Eine Gesellschaft ist die <strong>vertragsmässige Verbindung</strong> von zwei oder mehreren Personen zur Erreichung eines <strong>gemeinsamen Zwecks</strong> mit gemeinsamen Kräften und Mitteln.</div><div class="tl-sub"><div class="c"><div class="ct2">Drei Merkmale</div><div class="cd"><strong>1.</strong> Vereinigung von Personen (natürliche oder juristische)<br><strong>2.</strong> Gemeinsamer Zweck<br><strong>3.</strong> Gesellschaftsvertrag (nicht immer schriftlich nötig)</div></div></div><div class="merksatz">Merke: Schon ein Handschlag kann eine Gesellschaft begründen!</div></div></div>
<div class="tl-item"><div class="tl-num tl-num-g">2</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Übersicht der Gesellschaftsformen</div><div class="tl-merksatz">«Zwei Grundtypen: Rechtsgemeinschaften und Körperschaften.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-sub"><div class="c cr"><div class="ct2">Rechtsgemeinschaften (keine jur. Personen)</div><div class="cd">Einfache Gesellschaft · Kollektivgesellschaft (KlG) · Kommanditgesellschaft (KmG)<br>→ <strong>Personengesellschaften</strong></div></div><div class="c cg"><div class="ct2">Körperschaften (jur. Personen)</div><div class="cd">Aktiengesellschaft (AG) · GmbH · Genossenschaft · Verein · Kommandit-AG<br>→ <strong>Kapitalgesellschaften / Mischformen</strong></div></div></div><div class="merksatz">Merke: Personengesellschaft = persönliche Haftung. Kapitalgesellschaft = Kapital haftet.</div></div></div>
<div class="tl-item"><div class="tl-num tl-num-b">3</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Rechtsgemeinschaft vs. Körperschaft</div><div class="tl-merksatz">«Der Schlüsselunterschied: Wer haftet und wem gehört das Vermögen?»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-sub"><div class="c"><div class="ct2">Vermögen</div><div class="cd"><strong>Rechtsgemeinschaft:</strong> Gemeinschaftliches Eigentum der Gesellschafter<br><strong>Körperschaft:</strong> Alleineigentum der Gesellschaft</div></div><div class="c"><div class="ct2">Haftung</div><div class="cd"><strong>Rechtsgemeinschaft:</strong> Solidarische (subsidiäre) Haftung der Gesellschafter<br><strong>Körperschaft:</strong> Ausschliessliche/primäre Haftung der Gesellschaft</div></div><div class="c"><div class="ct2">Grundlage &amp; Sitz</div><div class="cd"><strong>Rechtsgemeinschaft:</strong> Gesellschaftsvertrag (formfrei) · Sitz am Tätigkeitsschwerpunkt<br><strong>Körperschaft:</strong> Statuten (Schriftlichkeit) · Sitz frei wählbar</div></div></div><div class="merksatz">Merke: Körperschaft = eigene Persönlichkeit, eigenes Vermögen, eigene Haftung.</div></div></div>
<div class="tl-item"><div class="tl-num tl-num-b">4</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Die juristische Person <span class="b bbl">Art. 53 ZGB</span></div><div class="tl-merksatz">«Eine künstliche Person — sie kann klagen, kaufen und haften, aber nicht heiraten.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body">Eine künstlich geschaffene «Person», die fast wie eine natürliche Person behandelt wird. Sie ist <strong>rechtsfähig</strong>, handlungsfähig, partei-, betreibungs- und prozessfähig. Sie kann Verträge schliessen, Vermögen besitzen, klagen und verklagt werden.<br><br><strong>Aber:</strong> Sie kann nicht heiraten (wohl fusionieren), nicht erben etc.</div><div class="merksatz">Merke: Die jur. Person ist fast wie eine natürliche — nur ohne Hochzeit und Erbrecht.</div></div></div>
<div class="tl-item"><div class="tl-num tl-num-a">5</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Organe <span class="b bbl">Art. 55 ZGB</span></div><div class="tl-merksatz">«Organe geben der jur. Person ihren Willen — auch faktische Organe zählen!»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body">Organe geben dem <strong>Willen der juristischen Person Ausdruck</strong>. Sie verpflichten die jur. Person durch Rechtsgeschäfte und sonstiges Verhalten. Als Organ gilt, wer <strong>effektiv und in entscheidender Weise</strong> an der Willensbildung teilhat.</div><div class="tl-sub"><div class="c"><div class="ct2">Beispiele</div><div class="cd">Verwaltungsrat · GV der Aktionäre · Vorstand des Vereins · Revisionsstelle · Direktoren/Sekretäre mit Entscheidungsbefugnissen (= <strong>faktische Organe</strong>)</div></div></div><div class="merksatz">Merke: Wer tatsächlich entscheidet, ist Organ — egal wie sein Titel lautet.</div></div></div>
<div class="tl-item"><div class="tl-num tl-num-a">6</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Wirtschaftliche Zweckverfolgung</div><div class="tl-merksatz">«Nicht jede Gesellschaftsform darf ein kaufmännisches Unternehmen betreiben.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-sub"><div class="c"><div class="ct2">Einfache Gesellschaft</div><div class="cd">Wirtschaftlich oder ideell. Kaufm. Unternehmen: <strong>unzulässig</strong>.</div></div><div class="c"><div class="ct2">KolG, KmG, AG, Kommandit-AG</div><div class="cd">Typisch wirtschaftlich. Kaufm. Unternehmen: <strong>typisch</strong>.</div></div><div class="c"><div class="ct2">GmbH</div><div class="cd">Ausschliesslich wirtschaftlich (umstritten). Kaufm. Unternehmen: <strong>typisch</strong>.</div></div><div class="c"><div class="ct2">Genossenschaft / Verein</div><div class="cd">Genossenschaft: wirtschaftlich (Förderung). Verein: ausschliesslich ideell (Praxis: auch wirtschaftlich).</div></div></div><div class="merksatz">Merke: Wer gemeinsam ein kaufm. Gewerbe betreiben will, braucht KolG, KmG, AG oder GmbH — nie eine eG!</div></div></div>
</div></div>

<!-- HANDELSREGISTER -->
<div class="sec" id="gesr_hr"><h1>Das Handelsregister</h1><p class="sub">Funktion, Eintragung, Wirkung</p>
<div class="hlbl"><strong>Lernziele:</strong><br>• Sie können Zweck und Aufgaben des Handelsregisters ausführlich erläutern<br>• Sie können die Konsequenzen eines HR-Eintrags korrekt benennen<br>• Sie können erklären, wer eintragungspflichtig und wer nur -berechtigt ist</div>
<div style="display:flex;gap:8px;margin:12px 0 4px"><button style="font-size:11px;padding:4px 10px" onclick="this.parentElement.nextElementSibling.querySelectorAll('.tl-item').forEach(i=>i.classList.add('open'))">Alle aufklappen</button><button style="font-size:11px;padding:4px 10px" onclick="this.parentElement.nextElementSibling.querySelectorAll('.tl-item').forEach(i=>i.classList.remove('open'))">Alle schliessen</button></div>
<div class="tl">
<div class="tl-item"><div class="tl-num tl-num-g">1</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Funktion und Öffentlichkeit <span class="b bbl">Art. 930 OR</span></div><div class="tl-merksatz">«Öffentlich, kostenlos einsehbar auf zefix.ch — jedermann, ohne Interesse.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body">Das HR ist ein vom Kanton geführtes <strong>öffentliches Register</strong> — eine «wirtschaftliche Datenbank». Es gibt Auskunft über <strong>Haftungsverhältnisse</strong>, <strong>Vertretungsverhältnisse</strong> und <strong>Individualisierungsmerkmale</strong> (Firma, Zweck, Sitz). Steht <strong>jedermann</strong> zur Einsicht offen — ohne besonderes Interesse. Kostenlos auf <strong>www.zefix.ch</strong>. Veröffentlichung im SHAB (www.shab.ch).</div><div class="merksatz">Merke: Zefix = gratis schauen. SHAB = offizielle Publikation.</div></div></div>
<div class="tl-item"><div class="tl-num tl-num-r">2</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Eintragungspflicht vs. -berechtigung</div><div class="tl-merksatz">«AG/GmbH müssen rein. Die einfache Gesellschaft darf gar nicht rein!»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-sub"><div class="c cr"><div class="ct2">Eintragungspflichtig</div><div class="cd">• Einzelunternehmen mit Roheinnahmen &gt; <strong>CHF 100'000.–</strong><br>• AG, Kommandit-AG, GmbH, Genossenschaft (<strong>konstitutiv!</strong>)<br>• KolG, KmG, kaufm. Verein (<strong>deklaratorisch</strong>)<br>• Stiftungen</div></div><div class="c cg"><div class="ct2">Eintragungsberechtigt</div><div class="cd">• Verein (auch ohne wirtsch. Zweck)<br>• Kaufm. Unternehmen unter CHF 100'000.–</div></div><div class="c"><div class="ct2">Nicht eintragungsfähig</div><div class="cd">Die <strong>einfache Gesellschaft</strong> — weder Pflicht noch Recht!</div></div></div><div class="merksatz">Merke: Die eG kommt nie ins HR. AG/GmbH existieren erst durch den HR-Eintrag!</div></div></div>
<div class="tl-item"><div class="tl-num tl-num-b">3</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Deklaratorisch vs. Konstitutiv</div><div class="tl-merksatz">«Deklaratorisch = beurkundend. Konstitutiv = rechtserzeugend.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-sub"><div class="c"><div class="ct2">Deklaratorisch</div><div class="cd">Nur beurkundend. Gesellschaft besteht <strong>schon vorher</strong> (KolG, KmG).</div></div><div class="c ca"><div class="ct2">Konstitutiv</div><div class="cd"><strong>Rechtserzeugend</strong> — Gesellschaft entsteht erst durch HR-Eintrag (AG, GmbH, Genossenschaft).</div></div></div><div class="tl-highlight"><strong>Folgen des HR-Eintrags:</strong> Buchführungspflicht <span class="b bbl">OR 957</span> · Betreibung auf Konkurs <span class="b br">Art. 39 SchKG</span> · Erhöhter Firmenschutz <span class="b bbl">Art. 956 OR</span></div><div class="merksatz">Merke: HR-Eintrag = Buchführung + Konkurs + Firmenschutz.</div></div></div>
<div class="tl-item"><div class="tl-num tl-num-a">4</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Publizitätswirkung</div><div class="tl-merksatz">«Eingetragen = alle müssen es wissen. Nicht eingetragen = Unkenntnis entschuldigt.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-sub"><div class="c cg"><div class="ct2">Positive Publizität</div><div class="cd">Was eingetragen ist, müssen Dritte kennen (<strong>unwiderlegbare Vermutung</strong>).</div></div><div class="c cr"><div class="ct2">Negative Publizität</div><div class="cd">Was nicht eingetragen ist, müssen Dritte <strong>nicht</strong> kennen (Unkenntnis entschuldbar, ausser bösgläubig).</div></div></div><div class="merksatz">Merke: Steht es im HR, gibt es keine Ausrede!</div></div></div>
</div></div>

<!-- FIRMA & REVISION -->
<div class="sec" id="gesr_firma"><h1>Die Firma &amp; Revisionspflicht</h1><p class="sub">Firmenrecht und Revisionsstelle</p>
<div class="hlbl"><strong>Lernziele:</strong><br>• Sie können die Grundsätze der Firmenbildung korrekt aufzeigen<br>• Sie können erklären, wann welche Revisionsart gilt</div>
<div style="display:flex;gap:8px;margin:12px 0 4px"><button style="font-size:11px;padding:4px 10px" onclick="this.parentElement.nextElementSibling.querySelectorAll('.tl-item').forEach(i=>i.classList.add('open'))">Alle aufklappen</button><button style="font-size:11px;padding:4px 10px" onclick="this.parentElement.nextElementSibling.querySelectorAll('.tl-item').forEach(i=>i.classList.remove('open'))">Alle schliessen</button></div>
<div class="tl">
<div class="tl-item"><div class="tl-num tl-num-b">1</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Die Firma = der Name <span class="b bbl">Art. 944ff. OR</span></div><div class="tl-merksatz">«Firma ist juristisch nur der Name — nicht das Unternehmen!»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body">Juristisch ist «Firma» nur der <strong>Name</strong> einer Unternehmung. Wie er lauten muss, hängt von der Rechtsform ab.</div><div class="tl-sub"><div class="c"><div class="ct2">Firmenwahrheit &amp; -klarheit <span class="b bbl">Art. 944 OR</span></div><div class="cd">Inhalt muss den Tatsachen entsprechen, keine Täuschung.</div></div><div class="c"><div class="ct2">Ausschliesslichkeit <span class="b bbl">Art. 946 OR</span></div><div class="cd">Firmen müssen unterscheidbar sein. AG/GmbH/Genossenschaft mit Fantasienamen: <strong>nur 1× in der ganzen Schweiz!</strong></div></div></div><div class="tl-highlight">Tipp: Vor Gründung auf <strong>www.zefix.ch</strong> und <strong>www.switch.ch</strong> prüfen!</div><div class="merksatz">Merke: Fantasiename bei AG/GmbH = einmalig in der ganzen Schweiz.</div></div></div>
<div class="tl-item"><div class="tl-num tl-num-r">2</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Revisionspflicht <span class="b bbl">Art. 727ff. OR</span></div><div class="tl-merksatz">«Gross = ordentliche Revision. Klein = eingeschränkt. Mini = Opting-out.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body">Gilt für AG, GmbH, Genossenschaften, Kommandit-AG, Vereine, Stiftungen (nicht Personengesellschaften).</div><div class="tl-sub"><div class="c cr"><div class="ct2">Ordentliche (grosse) Revision</div><div class="cd">Börsenkotiert ODER <strong>2 von 3</strong> Schwellen in <strong>2 Jahren</strong>: Bilanzsumme &gt; CHF 20 Mio. · Umsatz &gt; CHF 40 Mio. · &gt; 250 Vollzeitstellen</div></div><div class="c cm"><div class="ct2">Eingeschränkte Revision <span class="b ba">Art. 727a OR</span></div><div class="cd">&gt; <strong>10 Vollzeitstellen</strong>.</div></div><div class="c cg"><div class="ct2">Opting-out (Verzicht)</div><div class="cd">≤ <strong>10 Vollzeitstellen</strong>: Verzicht möglich. In der Praxis <strong>sehr häufig</strong>.</div></div></div><div class="merksatz">Merke: ≤ 10 MA = Opting-out. Das nutzen fast alle KMU.</div></div></div>
</div></div>

<!-- EINZELUNTERNEHMUNG -->
<div class="sec" id="gesr_einz"><h1>Die Einzelunternehmung</h1><p class="sub">Der Sonderfall im Gesellschaftsrecht</p>
<div style="display:flex;gap:8px;margin:12px 0 4px"><button style="font-size:11px;padding:4px 10px" onclick="this.parentElement.nextElementSibling.querySelectorAll('.tl-item').forEach(i=>i.classList.add('open'))">Alle aufklappen</button><button style="font-size:11px;padding:4px 10px" onclick="this.parentElement.nextElementSibling.querySelectorAll('.tl-item').forEach(i=>i.classList.remove('open'))">Alle schliessen</button></div>
<div class="tl">
<div class="tl-item"><div class="tl-num tl-num-a">1</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Merkmale</div><div class="tl-merksatz">«Eine Person, volles Risiko, kein Gründungsakt — die einfachste Form.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body">Eine natürliche Person führt ein kaufmännisches Gewerbe unter einer Firma. Kapital und Leitung liegen <strong>allein bei dieser Person</strong>.</div><div class="tl-sub"><div class="c"><div class="ct2">Merkmale</div><div class="cd">• Kapital und Leitung in einer Hand<br>• Gesamter Gewinn ODER Verlust für den Unternehmer<br>• <strong>Unbeschränkte Haftung</strong> mit dem Privatvermögen<br>• Kein spezieller Gründungsakt nötig<br>• Privat- und Geschäftsvermögen gemeinsam versteuert<br>• HR-Eintragung ab CHF 100'000.– Umsatz<br>• Firma = Familienname (mit/ohne Vornamen, mit/ohne Zusätze)</div></div></div><div class="tl-highlight"><strong>Häufigste Form der Selbstständigkeit</strong> — kaum Gründungskosten, keine Formvorschriften.</div><div class="hlr" style="margin:12px 0;padding:14px 18px;font-size:13px"><strong>⚠️ Betreibung:</strong> Einzelfirma kann <strong>nicht</strong> betrieben werden! Betreibung gegen den <strong>Firmeninhaber persönlich</strong> am Wohnort.</div><div class="merksatz">Merke: Die Einzelfirma gibt es rechtlich nicht — nur den Inhaber.</div></div></div>
</div></div>

<!-- RECHTSGEMEINSCHAFTEN -->
<div class="sec" id="gesr_rg"><h1>Rechtsgemeinschaften</h1><p class="sub">Einfache Gesellschaft, KolG, KmG</p>
<div style="display:flex;gap:8px;margin:12px 0 4px"><button style="font-size:11px;padding:4px 10px" onclick="this.parentElement.nextElementSibling.querySelectorAll('.tl-item').forEach(i=>i.classList.add('open'))">Alle aufklappen</button><button style="font-size:11px;padding:4px 10px" onclick="this.parentElement.nextElementSibling.querySelectorAll('.tl-item').forEach(i=>i.classList.remove('open'))">Alle schliessen</button></div>
<div class="tl">
<div class="tl-item"><div class="tl-num tl-num-b">1</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Einfache Gesellschaft <span class="b bbl">Art. 530ff. OR</span></div><div class="tl-merksatz">«Die Auffangform — man muss sich nicht mal bewusst sein, eine zu bilden!»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body">Zusammenschluss auf Vertragsbasis, <strong>ohne kaufmännisches Unternehmen</strong>, für gemeinsamen Zweck. Die <strong>Auffangform</strong> — liegt vor, wenn nichts anderes gewählt. Vertrag <strong>formfrei</strong>, sogar durch Verhalten möglich.</div><div class="tl-sub"><div class="c cr"><div class="ct2">Haftung</div><div class="cd"><strong>Primär, unbeschränkt und solidarisch</strong> mit dem ganzen Vermögen.</div></div><div class="c"><div class="ct2">Praxis</div><div class="cd">ARGE (Bau), Konkubinat, fortgesetzte Erbengemeinschaften, WG.</div></div></div><div class="tl-highlight">Nicht im HR eintragbar! Keine juristische Person.</div><div class="merksatz">Merke: Gemeinsam etwas machen ohne Form zu wählen → automatisch eG → volle Haftung!</div></div></div>
<div class="tl-item"><div class="tl-num tl-num-r">2</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Kollektivgesellschaft — KlG <span class="b bbl">Art. 552ff. OR</span></div><div class="tl-merksatz">«Zwei Personen, gemeinsame Firma, unbeschränkte Haftung.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body">Mind. 2 <strong>natürliche Personen</strong>, kaufmännisches Gewerbe unter gemeinsamer Firma. <strong>Keine jur. Personen</strong> als Gesellschafter möglich.</div><div class="tl-sub"><div class="c cr"><div class="ct2">Haftung <span class="b bbl">Art. 568 OR</span></div><div class="cd">Persönlich, solidarisch, <strong>unbeschränkt</strong> — aber <strong>subsidiär</strong>: Zuerst muss Gesellschaft erfolglos betrieben werden. Haftung bis <strong>5 Jahre</strong> nach Auflösung.</div></div><div class="c"><div class="ct2">Firma</div><div class="cd">Alle Namen ODER 1 Name + «&amp; Co». Neugründung: Fantasiename + «KlG».</div></div><div class="c"><div class="ct2">Steuer</div><div class="cd">Gesellschaft nicht steuerpflichtig, Gesellschafter <strong>direkt</strong>.</div></div></div><div class="hlr" style="margin:12px 0;padding:14px 18px;font-size:13px"><strong>⚠️ Vorsicht:</strong> Man kann <strong>unwissentlich</strong> eine KolG bilden! Gemeinsam Restaurant führen ohne Formwahl → automatisch KolG → unbeschränkte Haftung!</div><div class="merksatz">Merke: KolG = nur natürliche Personen. Keine Doppelbesteuerung.</div></div></div>
<div class="tl-item"><div class="tl-num tl-num-p">3</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Kommanditgesellschaft — KmG <span class="b bbl">Art. 594ff. OR</span></div><div class="tl-merksatz">«Komplementär haftet voll, Kommanditär nur bis zur eingetragenen Summe.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body">Wie KolG, aber mit <strong>zwei Arten</strong>:</div><div class="tl-sub"><div class="c cr"><div class="ct2">Komplementär:in</div><div class="cd">Mind. 1 natürliche Person. <strong>Haftet voll</strong>, persönlich, unbeschränkt. Führt Geschäfte.</div></div><div class="c cg"><div class="ct2">Kommanditär:in</div><div class="cd">Natürliche oder juristische Person. Haftet nur bis <strong>Kommanditsumme</strong> (im HR!). Darf <strong>nicht</strong> geschäftsführen.</div></div></div><div class="tl-highlight">Firma: Fantasiename + «KmG» zwingend.</div><div class="merksatz">Merke: KmG = einer führt und haftet voll, der andere investiert und haftet begrenzt.</div></div></div>
</div>
<div class="hlg" style="margin-top:16px"><strong>🏨 Hotel Alpenblick:</strong> Lena und Marco hätten als KolG <strong>unbeschränkt mit Privatvermögen</strong> gehaftet. Als GmbH verlieren sie maximal CHF 20'000.– Stammkapital. Zudem profitieren sie vom Arbeitnehmerschutz (ALV, Kinderzulagen).</div>
</div>

<!-- GmbH -->
<div class="sec" id="gesr_gmbh"><h1>Die GmbH (OR 772ff.)</h1><p class="sub">Die «kleine AG» — Mischform</p>
<div class="hl"><strong>Stammkapital min. CHF 20'000.–</strong>, aufgeteilt in Stammanteile (Nennwert &gt; CHF 0.–). Muss zu <strong>100% liberiert</strong> sein.</div>
<div style="display:flex;gap:8px;margin:12px 0 4px"><button style="font-size:11px;padding:4px 10px" onclick="this.parentElement.nextElementSibling.querySelectorAll('.tl-item').forEach(i=>i.classList.add('open'))">Alle aufklappen</button><button style="font-size:11px;padding:4px 10px" onclick="this.parentElement.nextElementSibling.querySelectorAll('.tl-item').forEach(i=>i.classList.remove('open'))">Alle schliessen</button></div>
<div class="tl">
<div class="tl-item"><div class="tl-num tl-num-g">1</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Merkmale</div><div class="tl-merksatz">«Mischform: Kapital + Person. Alle im HR, Treuepflicht gilt.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-sub"><div class="c ca"><div class="ct2">Kapitalbezogen</div><div class="cd">Stammeinlagen · Stimmrecht nach Nennwert · Mitgliedschaft übertragbar</div></div><div class="c cp"><div class="ct2">Personenbezogen</div><div class="cd">Treuepflicht / Konkurrenzverbot · Gesellschafter = meist GF · Alle im HR · Aus-/Ausschluss möglich</div></div></div><div class="merksatz">Merke: Die GmbH ist transparenter als die AG — alle Gesellschafter stehen im HR.</div></div></div>
<div class="tl-item"><div class="tl-num tl-num-g">2</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Gründung</div><div class="tl-merksatz">«Mind. 1 Person → öff. beurkunden → 100% einzahlen → HR-Eintrag.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body">Mind. 1 Person (nat./jur.) → Gesellschaftsvertrag (öff. beurkundet) → Statuten → Stammkapital <strong>100% einzahlen</strong> → Organe wählen → HR-Eintrag (<strong>konstitutiv!</strong>).</div><div class="tl-highlight"><strong>Statuten:</strong> Firma + Sitz, Zweck, Stammkapitalhöhe + Stammanteile, Bekanntmachungsform.</div><div class="merksatz">Merke: 100% Liberierung — keine Teilzahlung wie bei der AG!</div></div></div>
<div class="tl-item"><div class="tl-num tl-num-b">3</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Organe</div><div class="tl-merksatz">«Alle Gesellschafter führen — ausser man regelt es anders.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-sub"><div class="c"><div class="ct2">Gesellschafterversammlung</div><div class="cd">Oberstes Organ. Statuten, GF-Wahl, Revisionsstelle, Jahresrechnung.</div></div><div class="c"><div class="ct2">Geschäftsführung <span class="b bbl">Art. 809ff. OR</span></div><div class="cd">Alle Gesellschafter <strong>berechtigt + verpflichtet</strong>. Übertragung auf Dritte möglich. Mind. 1 Person CH-Wohnsitz.</div></div><div class="c"><div class="ct2">Revisionsstelle <span class="b bbl">Art. 818 OR</span></div><div class="cd">Gesetzlich vorgeschrieben. Opting-out bei &lt; 10 Vollzeitstellen.</div></div></div><div class="merksatz">Merke: GmbH = alle Gesellschafter automatisch GF. AG = Aktionär ≠ VR.</div></div></div>
<div class="tl-item"><div class="tl-num tl-num-r">4</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Haftung &amp; Übertragung</div><div class="tl-merksatz">«Nur Gesellschaftsvermögen haftet — aber Nachschusspflicht möglich!»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-sub"><div class="c"><div class="ct2">Haftung <span class="b bbl">Art. 794 OR</span></div><div class="cd">Nur <strong>Gesellschaftsvermögen</strong>. Nachschusspflicht nur wenn in Statuten (nicht empfohlen).</div></div><div class="c"><div class="ct2">Übertragung <span class="b bbl">Art. 785 OR</span></div><div class="cd"><strong>Schriftlicher Vertrag</strong> + Zustimmung Gesellschafterversammlung nötig.</div></div><div class="c"><div class="ct2">Firma &amp; Steuer</div><div class="cd">Freie Wahl + «GmbH» zwingend. <strong>Doppelbesteuerung</strong> (Gewinn + Einkommen).</div></div></div><div class="merksatz">Merke: Stammanteile übertragen = Vertrag + Zustimmung. Nicht frei wie Aktien.</div></div></div>
</div></div>

<!-- AG -->
<div class="sec" id="gesr_ag"><h1>Die Aktiengesellschaft (OR 620ff.)</h1><p class="sub">Reine Kapitalhaftung</p>
<div class="hl"><strong>AK min. CHF 100'000.–</strong>. Mindestliberierung CHF 50'000.–. HR = konstitutiv. Öff. Beurkundung nötig.</div>
<div style="display:flex;gap:8px;margin:12px 0 4px"><button style="font-size:11px;padding:4px 10px" onclick="this.parentElement.nextElementSibling.querySelectorAll('.tl-item').forEach(i=>i.classList.add('open'))">Alle aufklappen</button><button style="font-size:11px;padding:4px 10px" onclick="this.parentElement.nextElementSibling.querySelectorAll('.tl-item').forEach(i=>i.classList.remove('open'))">Alle schliessen</button></div>
<div class="tl">
<div class="tl-item"><div class="tl-num tl-num-b">1</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Die Aktie</div><div class="tl-merksatz">«Wertpapier. Inhaberaktien abgeschafft — nur noch Namenaktien.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body">Ein <strong>Wertpapier</strong>. Nennwert &gt; CHF 0 (seit 01.01.2023). <strong>Inhaberaktien abgeschafft</strong> (Geldwäscherei). Bis 30.04.2021 umzuwandeln.</div><div class="tl-sub"><div class="c ca"><div class="ct2">Namenaktie (frei übertragbar)</div><div class="cd">Name im Aktienbuch. Übertragung: Indossament + Eintrag. AG kann <strong>nicht verhindern</strong>.</div></div><div class="c cm"><div class="ct2">Vinkulierte Namenaktie</div><div class="cd">Nur mit <strong>VR-Einwilligung</strong>. Börsenkotiert: mengenmässig. Nicht-börsenkotiert: persönliche Bedingungen.</div></div><div class="c"><div class="ct2">Stimmrechtsaktien</div><div class="cd">Tieferer Nennwert (min. 1/10), <strong>gleiche Stimmkraft</strong>. Müssen voll liberierte Namenaktien sein.</div></div><div class="c"><div class="ct2">Partizipationsschein (PS)</div><div class="cd">Aktie <strong>ohne Stimmrecht</strong>. Max. doppeltes AK.</div></div></div><div class="merksatz">Merke: Stimmrechtsaktien = Kontrolle trotz Minderheit. PS = Geld ohne Mitsprache.</div></div></div>
<div class="tl-item"><div class="tl-num tl-num-a">2</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Rechte &amp; Pflichten der Aktionäre</div><div class="tl-merksatz">«Viele Rechte, nur eine Pflicht: Einzahlung.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-sub"><div class="c ca"><div class="ct2">Vermögensrechte</div><div class="cd">Dividende · Liquidationserlös · Bezugsrechte bei Kapitalerhöhung</div></div><div class="c ca"><div class="ct2">Mitwirkungsrechte</div><div class="cd">GV-Teilnahme + Stimmrecht · Einberufung + Traktandierung · Antragsrecht</div></div><div class="c ca"><div class="ct2">Schutzrechte</div><div class="cd">Information/Kontrolle · Sonderprüfung · Anfechtung GV-Beschlüsse · Verantwortlichkeitsklage</div></div></div><div class="tl-highlight"><strong>Einzige Pflicht:</strong> Einzahlung der Aktien <span class="b bbl">Art. 680 OR</span>.</div><div class="merksatz">Merke: Aktionär = bezahlen und mitreden. Sonst keine Pflichten!</div></div></div>
<div class="tl-item"><div class="tl-num tl-num-r">3</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Die drei Organe</div><div class="tl-merksatz">«GV entscheidet, VR führt, RS kontrolliert.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-sub"><div class="c"><div class="ct2">Generalversammlung <span class="b bbl">Art. 698ff. OR</span></div><div class="cd">Oberstes Organ. Alle Aktionäre. Jährlich 1×. Statuten, Wahl VR/RS, Jahresrechnung, Gewinnverteilung, Décharge.</div></div><div class="c"><div class="ct2">Verwaltungsrat <span class="b bbl">Art. 707ff. OR</span></div><div class="cd">Mind. 1 Mitglied. <strong>Kompetenzvermutung</strong>. Kann GL einsetzen. Behält <strong>Oberaufsicht</strong>. Sorgfalts-/Treuepflicht <span class="b bbl">Art. 717 OR</span>!</div></div><div class="c"><div class="ct2">Revisionsstelle <span class="b bbl">Art. 727ff. OR</span></div><div class="cd">Unabhängig. Prüft Buchführung + JR. Meldepflicht bei Überschuldung.</div></div></div><div class="merksatz">Merke: VR behält immer die Oberaufsicht — auch bei eingesetzter GL.</div></div></div>
<div class="tl-item"><div class="tl-num tl-num-r">4</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Kapitalschutz</div><div class="tl-merksatz">«AK = Sicherungsfonds für Gläubiger — nicht antasten!»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-sub"><div class="c"><div class="ct2">Schutzmechanismen</div><div class="cd">• Mindest-AK CHF 100'000 · Verbot Einlagenrückgewähr <span class="b bbl">Art. 680 Abs. 2 OR</span><br>• Ausschüttungsverbot AK + ges. Reserven · Reservenbildung 5% bis 20% AK<br>• Keine Ausgabe unter Nennwert · Beschränkung eigene Aktien</div></div><div class="c cr"><div class="ct2">Kapitalverlust <span class="b bbl">Art. 725 Abs. 1 OR</span></div><div class="cd">Hälfte AK + Reserven nicht gedeckt → VR beruft GV ein + Sanierung.</div></div><div class="c cr"><div class="ct2">Überschuldung <span class="b bbl">Art. 725a OR</span></div><div class="cd">Forderungen &gt; Aktiven → <strong>Gericht</strong> → Konkurs.</div></div></div><div class="hlr" style="margin:12px 0;padding:14px 18px;font-size:13px"><strong>⚠️ Verantwortlichkeitsklage:</strong> Keine absolute Sicherheit! VR haftet <strong>persönlich</strong> bei Absicht/Fahrlässigkeit.</div><div class="merksatz">Merke: Kapitalverlust = Sanierung. Überschuldung = Gericht → Konkurs.</div></div></div>
<div class="tl-item"><div class="tl-num tl-num-g">5</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">AG vs. GmbH</div><div class="tl-merksatz">«GmbH = kleiner, persönlicher. AG = grösser, anonymer, teurer.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-sub"><div class="c cg"><div class="ct2">Vorteile AG</div><div class="cd">Leichtere Kapitalbeschaffung · Anonymere Beteiligung · Aktien frei übertragbar</div></div><div class="c cr"><div class="ct2">Nachteile AG</div><div class="cd">AK CHF 100'000 (statt 20'000) · Mehr Formvorschriften · Höhere Gründungskosten · Doppelbesteuerung (bei beiden!)</div></div></div><div class="hlg" style="margin:12px 0"><strong>🏨 Hotel Alpenblick:</strong> Für das Boutique-Hotel reicht die GmbH. Eine Umwandlung in AG wäre über das <strong>Fusionsgesetz</strong> möglich, lohnt sich aber erst bei grösserem Kapitalbedarf.</div><div class="merksatz">Merke: KMU = GmbH reicht. AG erst bei grösserem Kapitalbedarf.</div></div></div>
</div></div>

<!-- ÜBUNGEN -->
<div class="sec" id="gesr_ueb"><h1>Interaktive Übungen</h1><p class="sub">Wähle eine Übung und teste dein Wissen</p>

<div id="gesr_ueb_sel">
<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:12px;margin:16px 0">
<div class="c ck" onclick="gesrShowUeb(1)" style="text-align:center;padding:24px 16px"><div style="font-size:18px;font-weight:700;color:var(--g);margin-bottom:6px">📋</div><div class="ct2">Fallbeispiele</div><div class="cd">Fälle mit Toggle-Lösung</div></div>
<div class="c ck" onclick="gesrShowUeb(2)" style="text-align:center;padding:24px 16px"><div style="font-size:18px;font-weight:700;color:var(--bl);margin-bottom:6px">🔀</div><div class="ct2">Zuordnung</div><div class="cd">Rechtsform &amp; Betreibungsart</div></div>
<div class="c ck" onclick="gesrShowUeb(3)" style="text-align:center;padding:24px 16px"><div style="font-size:18px;font-weight:700;color:var(--ac);margin-bottom:6px">✓✗</div><div class="ct2">Richtig / Falsch</div><div class="cd">Aussagen beurteilen</div></div>
<div class="c ck" onclick="gesrShowUeb(4)" style="text-align:center;padding:24px 16px"><div style="font-size:18px;font-weight:700;color:var(--pr);margin-bottom:6px">§</div><div class="ct2">Artikel zuordnen</div><div class="cd">Welcher Gesetzesartikel?</div></div>
<div class="c ck" onclick="gesrShowUeb(5)" style="text-align:center;padding:24px 16px"><div style="font-size:18px;font-weight:700;color:var(--am);margin-bottom:6px">🎯</div><div class="ct2">Multiple Choice</div><div class="cd">Wissen testen</div></div>
</div></div>

<!-- ÜBUNG 1: Fallbeispiele -->
<div id="gesr_ueb1" style="display:none">
<button onclick="gesrShowUeb(0)" style="margin-bottom:16px;font-size:12px">← Zurück zur Auswahl</button>
<h2>Fallbeispiele</h2><p class="sub">Lies den Fall, schreibe deine Antwort, dann prüfe die Lösung</p>
<div id="gesr_fall_wrap"></div>
<div style="margin:16px 0;display:flex;gap:8px;flex-wrap:wrap">
<button class="bp1" onclick="gesrShowFallSol()">Lösung anzeigen</button>
<button onclick="gesrNextFall()">Nächster Fall →</button>
<button onclick="gesrResetFall()" style="font-size:12px">Zurücksetzen</button>
</div>
<div id="gesr_fall_sol" style="display:none;margin-top:12px"></div>
</div>

<div id="gesr_ueb2" style="display:none">
<button onclick="gesrShowUeb(0)" style="margin-bottom:16px;font-size:12px">← Zurück zur Auswahl</button>
<h2>Zuordnung — Rechtsform bestimmen</h2><p class="sub">Wähle für jeden Fall die richtige Rechtsform</p>
<div id="gesr_zuord_wrap"></div>
<div style="margin:16px 0;display:flex;gap:8px;flex-wrap:wrap">
<button class="bp1" onclick="gesrCheckZuord()">Korrigieren</button>
<button onclick="gesrNextZuord()">Neue Aufgaben</button>
<button onclick="gesrResetZuord()" style="font-size:12px">Zurücksetzen</button>
</div>
<div id="gesr_zuord_res" style="margin-top:8px"></div>
</div>

<!-- ÜBUNG 3: Richtig/Falsch -->
<div id="gesr_ueb3" style="display:none">
<button onclick="gesrShowUeb(0)" style="margin-bottom:16px;font-size:12px">← Zurück zur Auswahl</button>
<h2>Richtig oder Falsch?</h2><p class="sub">Beurteile die Aussagen</p>
<div id="gesr_rf_wrap"></div>
<div style="margin:16px 0;display:flex;gap:8px;flex-wrap:wrap">
<button class="bp1" onclick="gesrCheckRF()">Korrigieren</button>
<button onclick="gesrNextRF()">Neue Aussagen</button>
<button onclick="gesrResetRF()" style="font-size:12px">Zurücksetzen</button>
</div>
<div id="gesr_rf_res" style="margin-top:8px"></div>
</div>

<!-- ÜBUNG 4: Artikel zuordnen -->
<div id="gesr_ueb4" style="display:none">
<button onclick="gesrShowUeb(0)" style="margin-bottom:16px;font-size:12px">← Zurück zur Auswahl</button>
<h2>Gesetzesartikel zuordnen</h2><p class="sub">Welcher Artikel passt zum Sachverhalt?</p>
<div id="gesr_art_wrap"></div>
<div style="margin:16px 0;display:flex;gap:8px;flex-wrap:wrap">
<button class="bp1" onclick="gesrCheckArt()">Korrigieren</button>
<button onclick="gesrNextArt()">Neue Aufgaben</button>
<button onclick="gesrResetArt()" style="font-size:12px">Zurücksetzen</button>
</div>
<div id="gesr_art_res" style="margin-top:8px"></div>
</div>

<!-- ÜBUNG 5: Multiple Choice -->
<div id="gesr_ueb5" style="display:none">
<button onclick="gesrShowUeb(0)" style="margin-bottom:16px;font-size:12px">← Zurück zur Auswahl</button>
<h2>Multiple Choice</h2><p class="sub">Wähle die richtige(n) Antwort(en)</p>
<div id="gesr_mc_wrap"></div>
<div style="margin:16px 0;display:flex;gap:8px;flex-wrap:wrap">
<button class="bp1" onclick="gesrCheckMC()">Korrigieren</button>
<button onclick="gesrNextMC()">Nächste Frage</button>
<button onclick="gesrResetMC()" style="font-size:12px">Zurücksetzen</button>
</div>
<div id="gesr_mc_res" style="margin-top:8px"></div>
</div>

</div>

<!-- ZUSAMMENFASSUNG -->
<div class="sec" id="gesr_mind"><h1>Zusammenfassung</h1><p class="sub">Visuelle Übersichten</p>
<h2>Gesellschaftsformen</h2>
<div class="mm"><div class="mm-center"><div class="mm-hub" style="border-color:var(--g);color:var(--g);background:var(--gl)">Gesellschaftsrecht</div></div>
<div class="mm-branches">
<div class="mm-branch" style="background:var(--rl);border:1.5px solid var(--r)"><h3 style="color:var(--r)">Personengesellschaften</h3><ul style="color:var(--r)"><li><strong>eG:</strong> Auffangform, formfrei, volle Haftung, nicht im HR</li><li><strong>KlG:</strong> Kaufm. Gewerbe, nur nat. Personen, solidarisch + subsidiär</li><li><strong>KmG:</strong> Komplementär voll, Kommanditär bis Summe</li></ul></div>
<div class="mm-branch" style="background:var(--gl);border:1.5px solid var(--g)"><h3 style="color:var(--g)">Kapitalgesellschaften</h3><ul style="color:var(--g)"><li><strong>GmbH:</strong> CHF 20'000, 100% liberiert, alle im HR</li><li><strong>AG:</strong> CHF 100'000, mind. 50'000 liberiert, anonym</li><li>Beide: konstitutiv, Doppelbesteuerung, Gesellschaftsvermögen haftet</li></ul></div>
<div class="mm-branch" style="background:var(--aml);border:1.5px solid var(--am)"><h3 style="color:var(--am)">Einzelunternehmung</h3><ul style="color:var(--am)"><li>1 Person, kein Gründungsakt, HR ab 100k</li><li>Unbeschränkte Haftung, Firma = Familienname</li><li>Betreibung gegen Inhaber persönlich</li></ul></div>
</div></div>
<h2>AG vs. GmbH</h2>
<div class="mm"><div class="mm-branches">
<div class="mm-branch" style="background:var(--al);border:1.5px solid var(--ac);flex:1"><h3 style="color:var(--ac)">GmbH</h3><ul style="color:var(--ac)"><li>CHF 20'000, 100% liberiert</li><li>Alle im HR, Treuepflicht</li><li>Übertragung: Vertrag + Zustimmung</li><li>Gesellschafter = GF (Standard)</li></ul></div>
<div class="mm-branch" style="background:var(--rl);border:1.5px solid var(--r);flex:1"><h3 style="color:var(--r)">AG</h3><ul style="color:var(--r)"><li>CHF 100'000, mind. 50'000</li><li>Aktionäre nicht im HR</li><li>Namenaktien frei übertragbar</li><li>Aktionär ≠ VR</li></ul></div>
</div></div>
<h2>Handelsregister</h2>
<div class="mm"><div class="mm-branches">
<div class="mm-branch" style="background:var(--gl);border:1.5px solid var(--g)"><h3 style="color:var(--g)">Eintragung</h3><ul style="color:var(--g)"><li>AG/GmbH/Genossenschaft: konstitutiv</li><li>KolG/KmG: deklaratorisch</li><li>eG: nie eintragbar!</li></ul></div>
<div class="mm-branch" style="background:var(--pl);border:1.5px solid var(--pr)"><h3 style="color:var(--pr)">Folgen</h3><ul style="color:var(--pr)"><li>Buchführungspflicht</li><li>Betreibung auf Konkurs</li><li>Firmenschutz</li><li>Positive/negative Publizität</li></ul></div>
</div></div>
<h2>AG-Organe</h2>
<div class="mm"><div class="mm-center"><div class="mm-hub" style="border-color:var(--r);color:var(--r);background:var(--rl)">AG-Organe</div></div>
<div class="mm-branches">
<div class="mm-branch" style="background:var(--al);border:1.5px solid var(--ac)"><h3 style="color:var(--ac)">GV</h3><ul style="color:var(--ac)"><li>Oberstes Organ, jährlich 1×</li><li>Statuten, Wahl VR/RS, Décharge</li></ul></div>
<div class="mm-branch" style="background:var(--rl);border:1.5px solid var(--r)"><h3 style="color:var(--r)">VR</h3><ul style="color:var(--r)"><li>Geschäftsführend, Kompetenzvermutung</li><li>Oberaufsicht, Sorgfaltspflicht</li></ul></div>
<div class="mm-branch" style="background:var(--gl);border:1.5px solid var(--g)"><h3 style="color:var(--g)">RS</h3><ul style="color:var(--g)"><li>Kontrolle, unabhängig</li><li>Meldepflicht bei Überschuldung</li></ul></div>
</div></div>
<h2>Kapitalschutz</h2>
<div class="mm"><div class="mm-branches">
<div class="mm-branch" style="background:var(--rl);border:1.5px solid var(--r)"><h3 style="color:var(--r)">Schutz</h3><ul style="color:var(--r)"><li>Min. AK 100'000, Reserven 5%→20%</li><li>Kein Rückfluss, keine Ausgabe unter Nennwert</li></ul></div>
<div class="mm-branch" style="background:var(--aml);border:1.5px solid var(--am)"><h3 style="color:var(--am)">Schieflage</h3><ul style="color:var(--am)"><li>Kapitalverlust → GV + Sanierung</li><li>Überschuldung → Gericht → Konkurs</li><li>VR haftet persönlich!</li></ul></div>
</div></div>
</div>

<!-- KARTEN -->
<div class="sec" id="gesr_kart"><h1>Karteikarten</h1><p class="sub"><span id="gesrfcCount">33</span> Karten — klicke zum Umdrehen</p>
<div class="fcc" id="gesrfcc"></div>
<div class="fd"><div class="fc" id="gesrfc" onclick="this.classList.toggle('fl')"><div class="ff ffr"><div class="fq" id="gesrfcq"></div><div class="fh">Klicke zum Umdrehen</div></div><div class="ff ffb"><div class="fa" id="gesrfca"></div></div></div></div>
<div class="fb"><button onclick="fcPrev()">Zurück</button><button onclick="fcShuffle()">Mischen</button><button class="bp1" onclick="fcNext()">Nächste</button></div>
<div style="text-align:center;margin-top:10px;font-size:11px;color:var(--tx3)" id="gesrfcPool"></div>
<div id="gesrfcList" style="display:none;margin-top:16px"></div></div>

<!-- QUIZ -->
<div class="sec" id="gesr_quiz"><h1>Quiz</h1><p class="sub">Alle Fragen werden wiederholt bis du sie kannst</p>
<div id="gesrqStats" style="margin-bottom:20px">
<div style="display:flex;gap:8px;margin-bottom:14px;flex-wrap:wrap">
<div class="qsc" style="flex:1;min-width:70px"><div class="qsn" id="gesrqTotR" style="color:var(--g)">0</div><div class="qsl">Total richtig</div></div>
<div class="qsc" style="flex:1;min-width:70px"><div class="qsn" id="gesrqTotW" style="color:var(--r)">0</div><div class="qsl">Total falsch</div></div>
<div class="qsc" style="flex:1;min-width:70px"><div class="qsn" id="gesrqTotP" style="color:var(--ac)">0%</div><div class="qsl">Erfolgsquote</div></div></div>
<div style="font-size:12px;color:var(--tx3);margin-bottom:6px">Lernerfolg</div>
<div style="display:flex;gap:4px;margin-bottom:4px;align-items:center"><div style="width:10px;height:10px;border-radius:50%;background:var(--g);flex-shrink:0"></div><div style="font-size:12px;color:var(--tx2);width:70px">Sicher</div><div style="flex:1;height:8px;background:var(--s2);border-radius:4px;overflow:hidden"><div id="gesrqBarG" style="height:100%;background:var(--g);border-radius:4px;transition:width .5s;width:0%"></div></div><div style="font-size:12px;color:var(--tx2);width:30px;text-align:right" id="gesrqBarGn">0</div></div>
<div style="display:flex;gap:4px;margin-bottom:4px;align-items:center"><div style="width:10px;height:10px;border-radius:50%;background:var(--am);flex-shrink:0"></div><div style="font-size:12px;color:var(--tx2);width:70px">Wackelig</div><div style="flex:1;height:8px;background:var(--s2);border-radius:4px;overflow:hidden"><div id="gesrqBarO" style="height:100%;background:var(--am);border-radius:4px;transition:width .5s;width:0%"></div></div><div style="font-size:12px;color:var(--tx2);width:30px;text-align:right" id="gesrqBarOn">0</div></div>
<div style="display:flex;gap:4px;margin-bottom:4px;align-items:center"><div style="width:10px;height:10px;border-radius:50%;background:var(--r);flex-shrink:0"></div><div style="font-size:12px;color:var(--tx2);width:70px">Unsicher</div><div style="flex:1;height:8px;background:var(--s2);border-radius:4px;overflow:hidden"><div id="gesrqBarR" style="height:100%;background:var(--r);border-radius:4px;transition:width .5s;width:0%"></div></div><div style="font-size:12px;color:var(--tx2);width:30px;text-align:right" id="gesrqBarRn">0</div></div>
<div style="display:flex;gap:4px;align-items:center"><div style="width:10px;height:10px;border-radius:50%;background:var(--tx3);flex-shrink:0"></div><div style="font-size:12px;color:var(--tx2);width:70px">Offen</div><div style="flex:1;height:8px;background:var(--s2);border-radius:4px;overflow:hidden"><div id="gesrqBarX" style="height:100%;background:var(--tx3);border-radius:4px;transition:width .5s;width:100%"></div></div><div style="font-size:12px;color:var(--tx2);width:30px;text-align:right" id="gesrqBarXn">0</div></div></div>
<div class="pb"><div class="pf" id="gesrqP"></div></div><div class="pt" id="gesrqPT">Frage 1</div>
<div id="gesrqC"></div>
<div style="text-align:center;margin-top:14px"><button class="bp1" id="gesrqN" onclick="gesrqNx()" style="display:none">Nächste Frage</button><button class="bp1" id="gesrqRS" onclick="gesrqSt()" style="display:none">Weiter üben</button><button id="gesrqReset" onclick="gesrqReset()" style="display:none;margin-left:8px">Fortschritt zurücksetzen</button></div>
<div style="text-align:center;margin-top:12px;font-size:11px;color:var(--tx3)" id="gesrqPoolSize"></div>
<div style="text-align:center;margin-top:8px"><button onclick="gesrqTogglePool()" id="gesrqPoolToggle" style="font-size:12px;padding:6px 14px">Alle Fragen anzeigen</button></div>
<div id="gesrqPoolList" style="display:none;margin-top:16px"></div></div>

<!-- GLOSSAR -->
<div class="sec" id="gesr_glossar"><h1>Glossar</h1><p class="sub">Begriffe &amp; Abkürzungen</p>
<div style="font-size:13px;font-weight:600;letter-spacing:1px;text-transform:uppercase;color:var(--tx3);margin-bottom:14px">Abkürzungen</div>
<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:8px;margin-bottom:32px">
<div class="c" style="padding:12px 16px"><strong style="color:var(--ac)">AG</strong> <span style="color:var(--tx2)">— Aktiengesellschaft</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--ac)">GmbH</strong> <span style="color:var(--tx2)">— Gesellschaft mit beschränkter Haftung</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--ac)">KlG</strong> <span style="color:var(--tx2)">— Kollektivgesellschaft</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--ac)">KmG</strong> <span style="color:var(--tx2)">— Kommanditgesellschaft</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--ac)">eG</strong> <span style="color:var(--tx2)">— Einfache Gesellschaft</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--ac)">VR</strong> <span style="color:var(--tx2)">— Verwaltungsrat</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--ac)">GV</strong> <span style="color:var(--tx2)">— Generalversammlung</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--ac)">AK</strong> <span style="color:var(--tx2)">— Aktienkapital</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--ac)">HR</strong> <span style="color:var(--tx2)">— Handelsregister</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--ac)">OR</strong> <span style="color:var(--tx2)">— Obligationenrecht</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--ac)">ZGB</strong> <span style="color:var(--tx2)">— Zivilgesetzbuch</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--ac)">SHAB</strong> <span style="color:var(--tx2)">— Schweizerisches Handelsamtsblatt</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--ac)">PS</strong> <span style="color:var(--tx2)">— Partizipationsschein</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--ac)">RS</strong> <span style="color:var(--tx2)">— Revisionsstelle</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--ac)">GL</strong> <span style="color:var(--tx2)">— Geschäftsleitung</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--ac)">GF</strong> <span style="color:var(--tx2)">— Geschäftsführer/in</span></div>
</div>
<div style="font-size:13px;font-weight:600;letter-spacing:1px;text-transform:uppercase;color:var(--tx3);margin-bottom:14px">Fachbegriffe</div>
<div style="display:grid;grid-template-columns:1fr;gap:8px">
<div class="c" style="padding:14px 18px"><strong>Aktie</strong><br><span class="cd">Wertpapier, Anteil am AK einer AG. Nennwert > 0 seit 2023. Inhaberaktien abgeschafft.</span></div>
<div class="c" style="padding:14px 18px"><strong>Décharge</strong><br><span class="cd">Entlastung des VR durch die GV. Befreit von Haftungsansprüchen für das Geschäftsjahr.</span></div>
<div class="c" style="padding:14px 18px"><strong>Deklaratorisch</strong><br><span class="cd">Nur beurkundend. Gesellschaft besteht schon vorher (KolG, KmG).</span></div>
<div class="c" style="padding:14px 18px"><strong>Doppelbesteuerung</strong><br><span class="cd">Gesellschaft: Gewinnsteuer. Gesellschafter: Einkommenssteuer auf Dividenden. Betrifft AG + GmbH.</span></div>
<div class="c" style="padding:14px 18px"><strong>Faktisches Organ</strong><br><span class="cd">Tatsächlich entscheidende Person ohne formelle Organstellung.</span></div>
<div class="c" style="padding:14px 18px"><strong>Juristische Person</strong><br><span class="cd">Künstliches Rechtssubjekt. Kann klagen, Verträge schliessen, Vermögen besitzen (Art. 53 ZGB).</span></div>
<div class="c" style="padding:14px 18px"><strong>Kommanditär</strong><br><span class="cd">KmG-Gesellschafter mit beschränkter Haftung (bis Kommanditsumme). Keine Geschäftsführung.</span></div>
<div class="c" style="padding:14px 18px"><strong>Komplementär</strong><br><span class="cd">Vollhaftender KmG-Gesellschafter. Natürliche Person. Führt die Geschäfte.</span></div>
<div class="c" style="padding:14px 18px"><strong>Konstitutiv</strong><br><span class="cd">Rechtserzeugend. Gesellschaft entsteht erst durch HR-Eintrag (AG, GmbH, Genossenschaft).</span></div>
<div class="c" style="padding:14px 18px"><strong>Opting-out</strong><br><span class="cd">Verzicht auf Revisionsstelle bei ≤ 10 Vollzeitstellen. Sehr häufig bei KMU.</span></div>
<div class="c" style="padding:14px 18px"><strong>Stammanteil</strong><br><span class="cd">Anteil am Stammkapital einer GmbH. Übertragung: schriftl. Vertrag + Zustimmung.</span></div>
<div class="c" style="padding:14px 18px"><strong>Stimmrechtsaktie</strong><br><span class="cd">Tieferer Nennwert (min. 1/10), gleiche Stimmkraft. Kontrolle trotz Minderheit.</span></div>
<div class="c" style="padding:14px 18px"><strong>Vinkulierung</strong><br><span class="cd">Übertragungsbeschränkung bei Namenaktien. VR kann ablehnen.</span></div>
</div></div>
`;

const FC=[
['Was ist eine Gesellschaft (3 Merkmale)?','Vereinigung von Personen + gemeinsamer Zweck + Gesellschaftsvertrag.'],
['Rechtsgemeinschaft vs. Körperschaft — Haftung?','Rechtsgemeinschaft: solidarisch. Körperschaft: nur Gesellschaftsvermögen.'],
['Juristische Person?','Künstliches Rechtssubjekt. Kann klagen, Vermögen besitzen. Aber nicht heiraten/erben (Art. 53 ZGB).'],
['Organe einer jur. Person?','Geben Willen Ausdruck. Formelle (VR, GV) + faktische Organe (Art. 55 ZGB).'],
['Personengesellschaften?','eG, KlG, KmG. Keine jur. Personen. Unbeschränkte Haftung.'],
['Handelsregister — Funktion?','Öffentliches Register. Jedermann einsehbar. Zefix.ch gratis (Art. 930 OR).'],
['Konstitutiv vs. deklaratorisch?','Konstitutiv: entsteht durch Eintrag (AG, GmbH). Deklaratorisch: nur beurkundend (KlG, KmG).'],
['eG und HR?','Nicht eintragungsfähig. Weder Pflicht noch Recht.'],
['Folgen HR-Eintrag?','Buchführung (OR 957) + Konkurs (Art. 39 SchKG) + Firmenschutz (Art. 956 OR).'],
['Positive Publizität?','Eingetragen = alle müssen kennen. Unwiderlegbar.'],
['Negative Publizität?','Nicht eingetragen = Unkenntnis entschuldbar.'],
['Firmenwahrheit?','Firma = Tatsachen, keine Täuschung. Fantasienamen nur 1× in CH (Art. 944 OR).'],
['Opting-out?','Verzicht auf RS bei ≤ 10 Vollzeitstellen. Sehr häufig.'],
['Ordentliche Revision — wann?','Börsenkotiert ODER 2/3: Bilanz > 20 Mio, Umsatz > 40 Mio, > 250 MA.'],
['Einzelunternehmung — Haftung?','Unbeschränkt mit Privatvermögen. HR ab CHF 100k.'],
['Einzelfirma betreiben?','Geht nicht! Betreibung gegen Inhaber persönlich am Wohnort.'],
['Einfache Gesellschaft?','Auffangform. Formfrei. Volle Haftung. Nicht im HR (Art. 530ff.).'],
['KlG — Gesellschafter?','Nur natürliche Personen (Art. 552 OR).'],
['KlG — Haftung?','Solidarisch, unbeschränkt, subsidiär. 5 Jahre nach Auflösung (Art. 568 OR).'],
['KmG — Komplementär vs. Kommanditär?','Komplementär: voll, führt. Kommanditär: bis Summe, nicht GF.'],
['Unwissentlich KolG?','Ja! Gemeinsam Geschäft führen ohne Formwahl = KolG = volle Haftung.'],
['GmbH — Stammkapital?','Min. CHF 20k, 100% liberiert. Nennwert > 0 (OR 773).'],
['GmbH — HR?','Alle Gesellschafter eingetragen. Alle grundsätzlich GF.'],
['GmbH — Übertragung?','Schriftlicher Vertrag + Zustimmung Gesellschafterversammlung (Art. 785 OR).'],
['GmbH — Organe?','Gesellschafterversammlung, Geschäftsführung, Revisionsstelle.'],
['AG — AK?','Min. CHF 100k, mind. 50k liberiert. Nennwert > 0. HR konstitutiv.'],
['Inhaberaktien?','Abgeschafft (Geldwäscherei). Nur Namenaktien.'],
['Stimmrechtsaktien?','Tieferer Nennwert (min. 1/10), gleiche Stimmkraft. Voll liberiert.'],
['Pflicht Aktionär?','Einzahlung der Aktien (Art. 680 OR). Sonst nichts.'],
['Kapitalverlust vs. Überschuldung?','Kapitalverlust: GV + Sanierung. Überschuldung: Gericht → Konkurs.'],
['AG — Organe?','GV (oberstes), VR (geschäftsführend), RS (Kontrolle).'],
['AG vs. GmbH?','AG: 100k, anonym, frei. GmbH: 20k, alle im HR, Treuepflicht, 100% liberiert.'],
['Verantwortlichkeitsklage?','VR haftet persönlich bei Absicht/Fahrlässigkeit.']
];

const ART={
'53':['Art. 53 ZGB — Juristische Person','Juristische Personen sind aller Rechte und Pflichten fähig, die nicht die natürlichen Eigenschaften des Menschen zur Voraussetzung haben.','Jur. Person kann fast alles wie natürliche Person, ausser heiraten, erben etc.','https://www.fedlex.admin.ch/eli/cc/24/233_245_233/de#a53'],
'55':['Art. 55 ZGB — Organe','Die juristischen Personen sind handlungsfähig, sobald die hierfür unentbehrlichen Organe bestellt sind.','Ohne Organe keine Handlungsfähigkeit. Organe verpflichten die jur. Person.','https://www.fedlex.admin.ch/eli/cc/24/233_245_233/de#a55'],
'or530':['Art. 530 OR — Einfache Gesellschaft','Gesellschaft ist die vertragsmässige Verbindung von zwei oder mehreren Personen zur Erreichung eines gemeinsamen Zweckes.','Die Auffangform: Ohne Formwahl → automatisch eG.','https://www.fedlex.admin.ch/eli/cc/27/317_321_377/de#a530'],
'or552':['Art. 552 OR — Kollektivgesellschaft','Zwei oder mehrere natürliche Personen vereinigen sich unter gemeinsamer Firma zum Betrieb eines kaufmännischen Gewerbes.','KolG: nur natürliche Personen, kaufm. Gewerbe, unbeschränkte Haftung.','https://www.fedlex.admin.ch/eli/cc/27/317_321_377/de#a552'],
'or568':['Art. 568 OR — Haftung KolG','Die Gesellschafter haften solidarisch und mit ihrem ganzen Vermögen.','Solidarisch = jeder für alles. Subsidiär + 5 Jahre nach Auflösung.','https://www.fedlex.admin.ch/eli/cc/27/317_321_377/de#a568'],
'or680':['Art. 680 OR — Leistungspflicht','Der Aktionär kann nicht verpflichtet werden, mehr zu leisten als den Ausgabebetrag.','Einzige Pflicht: Einzahlung. Keine Rückforderung möglich.','https://www.fedlex.admin.ch/eli/cc/27/317_321_377/de#a680'],
'or772':['Art. 772 OR — GmbH','Die GmbH ist eine personenbezogene Kapitalgesellschaft.','Mischform: personenbezogen (Treue, HR) + kapitalbezogen (Stammanteile).','https://www.fedlex.admin.ch/eli/cc/27/317_321_377/de#a772'],
'or794':['Art. 794 OR — Haftung GmbH','Für die Verbindlichkeiten haftet nur das Gesellschaftsvermögen.','Gesellschafter verlieren maximal ihre Stammanteile.','https://www.fedlex.admin.ch/eli/cc/27/317_321_377/de#a794'],
'or930':['Art. 930 OR — Öffentlichkeit HR','Jedermann ist berechtigt, das HR einzusehen.','Kein besonderes Interesse nötig. Zefix.ch = gratis.','https://www.fedlex.admin.ch/eli/cc/27/317_321_377/de#a930'],
'or944':['Art. 944 OR — Firmenbildung','Jede Firma muss sich von allen eingetragenen Firmen deutlich unterscheiden.','Eindeutigkeit in der ganzen Schweiz. Fantasienamen nur 1×.','https://www.fedlex.admin.ch/eli/cc/27/317_321_377/de#a944']
};

window.TIS=window.TIS||{};window.TIS.courses=window.TIS.courses||{};
window.TIS.courses.gesr={config:courseConfig,html:courseHTML,articles:ART,flashcards:FC};

// ==========================================
// INTERAKTIVE ÜBUNGEN — Gesellschaftsrecht
// ==========================================

// --- NAVIGATION ---
window.gesrShowUeb=function(n){
['gesr_ueb_sel','gesr_ueb1','gesr_ueb2','gesr_ueb3','gesr_ueb4','gesr_ueb5'].forEach(function(id){var e=document.getElementById(id);if(e)e.style.display='none';});
if(n===0){document.getElementById('gesr_ueb_sel').style.display='block';}
else{var e=document.getElementById('gesr_ueb'+n);if(e)e.style.display='block';
if(n===1)gesrGenFall();if(n===2)gesrGenZuord();if(n===3)gesrGenRF();if(n===4)gesrGenArt();if(n===5)gesrGenMC();}
};

// --- DATEN: FALLBEISPIELE (aus Kompendium + erweitert) ---
var GESR_FAELLE=[
{t:'Fall 1 — Wohngemeinschaft',q:'Ivo und Zeno gründen eine Wohngemeinschaft mit dem Zweck, die Wohnkosten während des Studiums möglichst klein zu halten. Ist die Rechtsform der einfachen Gesellschaft zulässig? Wer führt die Geschäfte? Wer vertritt die Gemeinschaft nach aussen? Wer haftet für die Schulden?',a:'<strong>Rechtsform:</strong> Einfache Gesellschaft — gemeinsamer Zweck (Kosten teilen), kein kaufm. Unternehmen, formfrei.<br><strong>Geschäftsführung:</strong> Gemeinsam, einstimmig (Art. 535 OR).<br><strong>Vertretung:</strong> Grundsätzlich alle gemeinsam.<br><strong>Haftung:</strong> Primär, solidarisch, unbeschränkt (Art. 544 OR).'},
{t:'Fall 2 — Überschuldete KmG',q:'Die KmG «Meier, Müller & CIE» ist überschuldet. Nach dem Gesellschaftsvertrag haftet jeder der drei vollhaftenden Gesellschafter:innen für einen Drittel der Verbindlichkeiten. Von der Kommanditsumme des Kommanditärs sind CHF 30\'000 noch nicht eingezahlt. Ungedeckte Schulden: CHF 120\'000. Meier ist zahlungsunfähig.<br><br>a) Gegen wen richtet sich eine Betreibung?<br>b) Ab wann können die Gesellschafter haftbar gemacht werden?<br>c) Bei wem können die ungedeckten Schulden geltend gemacht werden?',a:'<strong>a)</strong> Zuerst gegen die KmG selbst. Subsidiär gegen die <strong>3 Komplementäre</strong> (solidarisch, unbeschränkt). Kommanditär: max. CHF 30\'000.<br><strong>b)</strong> Erst nach <strong>erfolgloser Betreibung</strong> der Gesellschaft (subsidiäre Haftung).<br><strong>c)</strong> Solidarhaftung: zahlungsfähige Komplementäre (Müller + 3.) tragen Meiers Anteil mit.'},
{t:'Fall 3 — Logos AG',q:'Die Logos AG wird gegründet. Die Gründungsversammlung findet am 20. Mai 2017 statt, dabei werden die Organe bestimmt. Die öffentliche Urkunde wird vom Notar am 25. Mai 2017 ausgefertigt und mit der Anmeldung dem Handelsregisteramt zugesandt. Am 27. Mai 2017 kommt die Anmeldung an und am 22. Juni 2017 wird die Gesellschaft im HR eingetragen. Im SHAB vom 20. August 2017 wird die Gründung veröffentlicht.<br><br>Wann ist die Gesellschaft entstanden?',a:'Am <strong>22. Juni 2017</strong> — dem Tag des <strong>HR-Eintrags</strong>. Bei der AG ist der Eintrag <strong>konstitutiv</strong> = rechtserzeugend. Nicht die GV (20.5.), nicht die Urkunde (25.5.), nicht die SHAB-Publikation (20.8.).'},
{t:'Fall 4 — Ballon GmbH',q:'Aldo und Ingo gründen die «Ballon GmbH» mit einem Stammkapital von CHF 20\'000. Ingo hat einen Stammanteil von CHF 12\'000, Aldo einen solchen von CHF 8\'000. Beide sind Geschäftsführer.<br><br>Wie viele Stimmen hat jeder in der Gesellschafterversammlung und in der Geschäftsführung?',a:'<strong>Gesellschafterversammlung:</strong> Nach Nennwert → Ingo: 12\'000/20\'000 = <strong>60%</strong>, Aldo: 8\'000/20\'000 = <strong>40%</strong>.<br><strong>Geschäftsführung:</strong> Kopfprinzip → jeder hat <strong>1 Stimme</strong>. Ingo und Aldo sind gleichberechtigt.'},
{t:'Fall 5 — Felicitas als Kommanditärin?',q:'Felicitas möchte ihrer Freundin Angelika beim Aufbau eines Geschäftes mit CHF 50\'000 helfen. Dabei ist sich Felicitas nicht im Klaren, ob sie den Betrag als Darlehen gewähren oder sich mit einer Kommanditeinlage beteiligen soll. Beraten Sie Felicitas.',a:'<strong>Darlehen:</strong> Feste Rückzahlung + Zins. Kein Mitspracherecht. Kein Risiko am Geschäftserfolg. Felicitas ist Gläubigerin.<br><strong>Kommanditeinlage:</strong> Haftung bis CHF 50\'000 (Kommanditsumme im HR). Kein Mitspracherecht bei der Geschäftsführung. Aber: Gewinnbeteiligung möglich.<br><strong>Empfehlung:</strong> Darlehen = sicherer (Rückzahlung garantiert). KmG-Beteiligung = mehr Risiko, aber Gewinnchance.'},
{t:'Fall 6 — Einfache Gesellschaft prüfen',q:'Prüfen Sie in den folgenden Fällen, ob eine einfache Gesellschaft besteht:<br><br>a) <em>Gründung einer AG:</em> Anton, Bruno und Christian gründen eine AG. Sie haben das Geld aufgebracht, die Statuten festgelegt, eine konstituierende GV durchgeführt und die Organe bestellt.<br><br>b) <em>Kino Paradiso:</em> Coni und Michel betreiben gemeinsam ein Kino. Coni liefert das Geld, Michel führt den Betrieb. Sie treten als «Kino Paradiso» auf und spielen mit dem Gedanken, ein zweites Kino zu eröffnen.<br><br>c) <em>Erbengemeinschaft:</em> ZGB 602 I und II: Beerben mehrere Erben den Erblasser, so besteht unter ihnen eine Gemeinschaft aller Rechte und Pflichten der Erbschaft.',a:'<strong>a)</strong> <strong>Ja, eG</strong> — im Gründungsstadium (vor HR-Eintrag). Danach: AG. Die Vorgründungsgesellschaft ist eine eG.<br><strong>b)</strong> <strong>Nein → KolG!</strong> Kaufmännisches Gewerbe + gemeinsame Firma → automatisch Kollektivgesellschaft (nicht eG).<br><strong>c)</strong> <strong>Ja, eG</strong> — eine fortgesetzte Erbengemeinschaft ist eine klassische einfache Gesellschaft.'},
{t:'Fall 7 — Konkubinat',q:'Astrid und Roland sind seit vier Jahren ein Paar. Sie ziehen in eine gemeinsame Wohnung. Astrid bringt ihre Einrichtung mit. Roland übernimmt einen grösseren Anteil am Mietzins.<br><br>Teil 1: Besteht eine einfache Gesellschaft?<br>Teil 2: Astrid und Roland beschliessen, keine gemeinsame Kasse zu führen, Kosten strikt hälftig aufzuteilen und den Mietvertrag je für sich abzuschliessen. Ändert sich etwas?',a:'<strong>Teil 1: Ja, eG</strong> — gemeinsamer Zweck (zusammenleben), gemeinsame Mittel (geteilte Kosten). Die Anteile sind ungleich, was nichts ändert.<br><strong>Teil 2: Wahrscheinlich nein</strong> — wenn alles strikt getrennt ist (keine gemeinsame Kasse, separate Mietverträge), fehlt die «gemeinsame Kräfte und Mittel»-Voraussetzung.'},
{t:'Fall 8 — Komitee für Burma',q:'Die einfache Gesellschaft «Komitee für Burma» wollte in Zug eine Demonstration durchführen. Der Zuger Stadtrat und auf Beschwerde hin der Zuger Regierungsrat lehnten das Gesuch jedoch ab. Das Komitee möchte eine Beschwerde wegen Verletzung der Meinungsäusserungs- und Versammlungsfreiheit führen.<br><br>Wie kann das Komitee vorgehen?',a:'<strong>Problem:</strong> Die eG hat <strong>keine eigene Rechtspersönlichkeit</strong> — sie kann nicht selbst klagen!<br><strong>Lösung:</strong> Die einzelnen <strong>Gesellschafter persönlich</strong> müssen die Beschwerde einreichen (z.B. als Privatpersonen). Alternativ: Gründung eines <strong>Vereins</strong> (der hat Rechtspersönlichkeit und kann klagen).'},
{t:'Fall 9 — Pastaland KolG',q:'Das Gebrüderpaar Meier führt einen italienischen Spezialitätenladen namens «Pastaland Meier und Co.». Gesellschaftsform: kaufmännische KolG. Das Ehepaar Müller, deren GmbH die Ladenlokalität vermietet, unterbreitet den Meiers folgendes Angebot: Die GmbH wird als neuer Gesellschafter in die KolG aufgenommen. Als Beitrag wird in Zukunft keine Miete mehr geschuldet.<br><br>Durften die Meiers die GmbH aufnehmen?',a:'<strong>Nein!</strong> Eine KolG darf nur <strong>natürliche Personen</strong> als Gesellschafter haben (Art. 552 OR). Eine GmbH ist eine juristische Person.<br><br><strong>Alternativen:</strong><br>1. Umwandlung in <strong>KmG</strong> (GmbH als Kommanditär)<br>2. Umwandlung in <strong>GmbH oder AG</strong> (alle Rechtsformen als Gesellschafter möglich)'},
{t:'Fall 10 — HR-Eintrag vergessen',q:'Anton, Bruno und Christian wollen ein Hotel eröffnen. Sie gründen eine KolG. Da die drei so beschäftigt sind — Material kaufen, Personal anwerben — vergessen sie, die KolG im Handelsregister einzutragen.<br><br>Hat dies Konsequenzen?',a:'Die KolG <strong>besteht trotzdem</strong> — der HR-Eintrag ist bei der KolG <strong>deklaratorisch</strong> (nur beurkundend), nicht konstitutiv.<br><br><strong>Aber Nachteile:</strong><br>• Kein erhöhter <strong>Firmenschutz</strong> (Art. 956 OR)<br>• Keine formelle <strong>Buchführungspflicht</strong><br>• Weniger <strong>Vertrauen</strong> im Geschäftsverkehr<br>• Mögliche <strong>Busse</strong> wegen Verletzung der Eintragungspflicht'},
{t:'Fall 11 — KolG Gewinn',q:'Die KolG König & Partner besteht seit drei Jahren. Nach grossen Verlusten wird dieses Jahr zum ersten Mal ein kleiner Gewinn erzielt. Gesellschafter König macht geltend:<br>1. Da die Gesellschaft endlich Gewinn erzielt habe, habe er ein Anrecht auf Entgelt für die Tätigkeiten seit Gründung.<br>2. Er verlangt die Auszahlung der Gewinnanteile an die Gesellschafter.',a:'<strong>1. Kein Anrecht auf Entgelt:</strong> Gesellschafter einer KolG haben keinen Lohnanspruch — sie sind keine Arbeitnehmer. Ihre «Entlöhnung» erfolgt über den <strong>Gewinnanteil</strong>.<br><strong>2. Gewinnauszahlung:</strong> Grundsätzlich hat jeder Gesellschafter Anspruch auf seinen <strong>Gewinnanteil</strong> (Art. 558 OR). Ohne andere Vereinbarung: zu gleichen Teilen. Aber: zuerst müssen die Verluste der Vorjahre gedeckt werden!'},
{t:'Fall 12 — Freizeitpark AG',q:'Die Gemeinde Lyss gründet mit der Fun GmbH und der KolG Zeller & Co. eine AG zur Errichtung eines Freizeitparks. AK CHF 100\'000. Die Gemeinde erhält 100 Stimmrechtsaktien zu CHF 500 (50% liberiert), die Fun GmbH und Zeller & Co. erhalten je 25 normale Namenaktien zu CHF 1\'000 (20% liberiert).<br><br>Leidet die AG an einem Mangel?',a:'<strong>Ja, mehrere Mängel:</strong><br>1. <strong>Stimmrechtsaktien müssen voll liberiert sein</strong> — hier nur 50%!<br>2. <strong>Mindestliberierung CHF 50\'000</strong> — Stimmrechtsaktien: 100 × 500 × 50% = 25\'000. Namenaktien: 50 × 1\'000 × 20% = 10\'000. Total: CHF 35\'000 — <strong>unter dem Minimum!</strong><br>3. Stimmrechtsaktien-Nennwert (500) muss mindestens 1/10 des normalen Nennwerts (1\'000) sein → 500 > 100 ✓ (das ist OK)'},
{t:'Fall 13 — Backwarentech AG',q:'Die Backwarentech AG, Zug, ist international tätig. Jahresumsatz CHF 1.35 Mrd. AK CHF 100 Mio., eingeteilt in 1\'000\'000 Namenaktien zu CHF 20 und 800\'000 Namenaktien zu CHF 100. Die CHF-100-Aktien werden an der Börse gehandelt, die CHF-20-Aktien sind vinkuliert. Jede Aktie hat 1 Stimme an der GV.<br><br>a) Ist «AG» im Firmennamen zwingend?<br>b) Warum kennt der VR alle Inhaber der Namenaktien?<br>c) Wie heissen die Aktien zu CHF 20 und welcher Zweck?<br>d) Voraussetzungen für solche Aktien?<br>e) Vinkulierung: Kann der VR ohne Gründe ablehnen?',a:'<strong>a)</strong> Ja, der Zusatz «AG» ist <strong>zwingend vorgeschrieben</strong> (Art. 950 OR).<br><strong>b)</strong> Weil Namenaktien im <strong>Aktienbuch</strong> eingetragen sind — der VR führt dieses Buch und kennt daher alle Aktionäre.<br><strong>c)</strong> <strong>Stimmrechtsaktien</strong> — tieferer Nennwert, gleiche Stimmkraft. Zweck: Kontrolle trotz Minderheitsbeteiligung (Gemeinde behält Kontrolle).<br><strong>d)</strong> Müssen <strong>voll liberierte Namenaktien</strong> sein. Nennwert mind. 1/10 des höchsten Nennwerts.<br><strong>e)</strong> <strong>Nein!</strong> Bei nicht-börsenkotierten: persönliche Gründe nötig. Bei börsenkotierten: nur mengenmässige Beschränkung.'},
{t:'Fall 14 — AG-Aussagen beurteilen',q:'Beurteilen Sie folgende Aussagen zur AG (Richtig/Falsch):<br><br>a) Die AG kann auch für andere als wirtschaftliche Zwecke gegründet werden.<br>b) Jeder Beschluss der GV oder des VR über die Änderung der Statuten muss öffentlich beurkundet werden.<br>c) Ein Aktionär, der den Ausgabebetrag seiner Aktien nicht rechtzeitig einzahlt, ist zur Leistung von Verzugszinsen verpflichtet.<br>d) Bei einer AG ist die Haftung beschränkt auf das Aktienkapital.<br>e) Der Nennwert von Aktien darf nie unter zehn Franken herabgesetzt werden.<br>f) Die Wahl eines Direktors ist Aufgabe der GV.<br>g) Bei vinkulierten Namenaktien kann der VR unerwünschte Aktionäre ohne Angabe von Gründen ablehnen.<br>h) Der Austritt aus einer AG ist unter Einhaltung einer sechsmonatigen Kündigungsfrist möglich.',a:'a) <strong>Richtig</strong> — Art. 620 OR schliesst ideelle Zwecke nicht aus.<br>b) <strong>Richtig</strong> — öffentliche Beurkundung bei Statutenänderungen zwingend.<br>c) <strong>Richtig</strong> — Art. 681 OR: Verzugszinsen geschuldet.<br>d) <strong>Falsch</strong> — auf das <strong>Gesellschaftsvermögen</strong> (nicht nur AK!).<br>e) <strong>Falsch</strong> — seit 2023 nur > CHF 0.<br>f) <strong>Falsch</strong> — Direktor wird vom <strong>VR</strong> bestimmt, nicht der GV.<br>g) <strong>Falsch</strong> — Gründe sind nötig (bei nicht-börsenkotierten: persönliche Gründe).<br>h) <strong>Falsch</strong> — kein Austrittsrecht. Einziger Weg: Aktien verkaufen.'}
];
var gesrFallIdx=0;

window.gesrGenFall=function(){
var f=GESR_FAELLE[gesrFallIdx];
var w=document.getElementById('gesr_fall_wrap');if(!w)return;
w.innerHTML='<div class="c" style="padding:20px 24px"><h3 style="color:var(--g);margin-bottom:8px">'+f.t+'</h3><div class="cd" style="line-height:1.8">'+f.q+'</div><div style="margin-top:12px"><textarea id="gesr_fall_answer" style="width:100%;min-height:100px;padding:12px;border-radius:12px;border:1px solid var(--bd);background:var(--s2);color:var(--tx);font-family:var(--f);font-size:13px;resize:vertical" placeholder="Schreibe deine Antwort hier..."></textarea></div></div>';
document.getElementById('gesr_fall_sol').style.display='none';
document.getElementById('gesr_fall_sol').innerHTML='';
};
window.gesrShowFallSol=function(){
var f=GESR_FAELLE[gesrFallIdx];var s=document.getElementById('gesr_fall_sol');
s.style.display='block';s.innerHTML='<div class="c cg" style="padding:16px 20px"><div class="ct2">Lösung</div><div class="cd" style="line-height:1.8">'+f.a+'</div></div>';
};
window.gesrNextFall=function(){gesrFallIdx=(gesrFallIdx+1)%GESR_FAELLE.length;gesrGenFall();};
window.gesrResetFall=function(){var t=document.getElementById('gesr_fall_answer');if(t)t.value='';document.getElementById('gesr_fall_sol').style.display='none';};

// --- DATEN: ZUORDNUNG ---
var GESR_ZUORD=[
{q:'Zwei Studenten teilen eine WG',a:'eG',e:'Gemeinsamer Zweck, kein kaufm. UN → einfache Gesellschaft'},
{q:'Drei Personen betreiben ein Restaurant unter gemeinsamer Firma',a:'KlG',e:'Kaufm. Gewerbe + nur nat. Personen → Kollektivgesellschaft'},
{q:'Investor haftet nur bis CHF 50\'000, Partner führt Geschäft',a:'KmG',e:'Kommanditär begrenzt, Komplementär voll → Kommanditgesellschaft'},
{q:'Boutique-Hotel, 2 Gesellschafter, Stammkapital CHF 20\'000, beide im HR',a:'GmbH',e:'Stammkapital 20k, alle im HR, personenbezogen'},
{q:'Börsenkotiertes Unternehmen, Aktien frei handelbar',a:'AG',e:'Aktienkapital, Aktien an Börse, anonyme Beteiligung'},
{q:'Freiberuflicher Berater, alleine tätig, HR-Eintrag ab 100k Umsatz',a:'Einzelunternehmung',e:'1 Person, kein Gründungsakt, volle Haftung'},
{q:'Bauarbeitsgemeinschaft (ARGE) für ein Projekt',a:'eG',e:'Temporär, gemeinsamer Zweck, kein kaufm. UN'},
{q:'Gemeinnütziger Sportclub',a:'Verein',e:'Ideeller Zweck, Körperschaft'},
{q:'Hotel mit CHF 100\'000 AK, VR, GV, Revisionsstelle',a:'AG',e:'AK 100k, drei Organe → Aktiengesellschaft'},
{q:'Zwei Schwestern, Restaurant, Stammkapital CHF 20\'000, Treuepflicht',a:'GmbH',e:'Stammkapital, Treuepflicht, personenbezogen'},
{q:'Fortgesetzte Erbengemeinschaft verwaltet gemeinsames Haus',a:'eG',e:'Klassische einfache Gesellschaft'},
{q:'Schreinerei eines einzelnen Meisters, CHF 200\'000 Umsatz',a:'Einzelunternehmung',e:'1 Person, HR-pflichtig ab 100k'},
{q:'Firma «Müller & Co.» — nur natürliche Personen, Handelsgewerbe',a:'KlG',e:'Kaufmännisch + natürliche Personen = KolG'},
{q:'Genossenschaft zur Förderung der Mitgliederinteressen',a:'Genossenschaft',e:'Förderungszweck, variable Mitgliederzahl'}
];
var gesrZuordSet=[];

window.gesrGenZuord=function(){
var pool=GESR_ZUORD.slice();for(var i=pool.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1));var t=pool[i];pool[i]=pool[j];pool[j]=t;}
gesrZuordSet=pool.slice(0,6);
var opts=['eG','KlG','KmG','GmbH','AG','Einzelunternehmung','Verein','Genossenschaft'];
var h='';gesrZuordSet.forEach(function(z,i){
h+='<div class="c" id="gesr_z_'+i+'" style="padding:14px 18px;margin-bottom:8px"><div class="cd" style="margin-bottom:8px">'+z.q+'</div>';
h+='<select id="gesr_zs_'+i+'" style="padding:6px 12px;border-radius:8px;border:1px solid var(--bd);background:var(--s2);color:var(--tx);font-family:var(--f);font-size:13px"><option value="">— Wählen —</option>';
opts.forEach(function(o){h+='<option value="'+o+'">'+o+'</option>';});
h+='</select><div id="gesr_zfb_'+i+'" style="display:none;margin-top:6px;font-size:12px"></div></div>';
});
document.getElementById('gesr_zuord_wrap').innerHTML=h;
document.getElementById('gesr_zuord_res').innerHTML='';
};
window.gesrCheckZuord=function(){
var c=0;gesrZuordSet.forEach(function(z,i){
var sel=document.getElementById('gesr_zs_'+i);var fb=document.getElementById('gesr_zfb_'+i);var card=document.getElementById('gesr_z_'+i);
if(!sel||!fb||!card)return;fb.style.display='block';
if(sel.value===z.a){card.style.borderLeft='3px solid var(--g)';fb.innerHTML='<span style="color:var(--g)">✓ Richtig!</span> '+z.e;c++;}
else{card.style.borderLeft='3px solid var(--r)';fb.innerHTML='<span style="color:var(--r)">✗ Falsch.</span> Richtig: <strong>'+z.a+'</strong> — '+z.e;}
});
document.getElementById('gesr_zuord_res').innerHTML='<div class="'+(c===gesrZuordSet.length?'hlg':'hla')+'">'+c+' von '+gesrZuordSet.length+' richtig</div>';
};
window.gesrNextZuord=function(){gesrGenZuord();};
window.gesrResetZuord=function(){gesrZuordSet.forEach(function(z,i){var s=document.getElementById('gesr_zs_'+i);if(s)s.value='';var f=document.getElementById('gesr_zfb_'+i);if(f){f.style.display='none';f.innerHTML='';}var c=document.getElementById('gesr_z_'+i);if(c)c.style.borderLeft='';});document.getElementById('gesr_zuord_res').innerHTML='';};

// --- DATEN: RICHTIG/FALSCH ---
var GESR_RF=[
{q:'Die einfache Gesellschaft kann ins Handelsregister eingetragen werden.',a:false,e:'Die eG ist NICHT eintragungsfähig — weder Pflicht noch Recht.'},
{q:'Bei der KolG haften die Gesellschafter nur subsidiär.',a:true,e:'Subsidiär = zuerst muss die Gesellschaft erfolglos betrieben werden. Dann persönlich, solidarisch, unbeschränkt.'},
{q:'Eine GmbH braucht mindestens CHF 100\'000 Stammkapital.',a:false,e:'GmbH: CHF 20\'000. AG: CHF 100\'000.'},
{q:'Der VR einer AG hat immer die Oberaufsicht, auch wenn er eine GL einsetzt.',a:true,e:'Art. 716a OR: unentziehbare Aufgaben des VR, inkl. Oberaufsicht.'},
{q:'Inhaberaktien sind in der Schweiz noch zulässig.',a:false,e:'Inhaberaktien wurden abgeschafft (Geldwäscherei-Bekämpfung). Nur noch Namenaktien.'},
{q:'Bei der GmbH sind alle Gesellschafter im HR eingetragen.',a:true,e:'Personenbezogenes Merkmal der GmbH — transparenter als die AG.'},
{q:'Die Haftung einer AG ist beschränkt auf das Aktienkapital.',a:false,e:'Auf das GESELLSCHAFTSVERMÖGEN (= alles was die AG besitzt, nicht nur das AK).'},
{q:'Eine KolG kann nur aus natürlichen Personen bestehen.',a:true,e:'Art. 552 OR: ausschliesslich natürliche Personen.'},
{q:'Bei Opting-out verzichtet man auf die Revisionsstelle bei ≤ 10 Vollzeitstellen.',a:true,e:'In der Praxis sehr häufig bei KMU.'},
{q:'Der Nennwert einer Aktie muss mindestens CHF 10 betragen.',a:false,e:'Seit 01.01.2023: Nennwert muss nur > CHF 0 sein.'},
{q:'Die einzige Pflicht eines Aktionärs ist die Einzahlung der übernommenen Aktien.',a:true,e:'Art. 680 OR. Keine Nachschusspflicht, keine Treuepflicht (anders als GmbH).'},
{q:'Ein Verein darf ein kaufmännisches Unternehmen betreiben.',a:false,e:'Nur bei nicht-wirtschaftlichem Hauptzweck. Der Zweck muss ideell sein.'},
{q:'Die Stimmrechtsaktie hat einen tieferen Nennwert aber die gleiche Stimmkraft.',a:true,e:'Min. 1/10 des höchsten Nennwerts. Ermöglicht Kontrolle trotz Minderheit.'},
{q:'Bei Überschuldung einer AG muss der VR das Gericht benachrichtigen.',a:true,e:'Art. 725a OR: Forderungen > Aktiven → Gericht → Konkurs.'},
{q:'Stammanteile einer GmbH sind frei übertragbar wie Aktien.',a:false,e:'Schriftlicher Vertrag + Zustimmung der GV nötig (Art. 785 OR).'},
{q:'Der Austritt aus einer AG ist mit 6-monatiger Frist möglich.',a:false,e:'Kein Austrittsrecht bei der AG. Einziger Weg: Aktien verkaufen.'},
{q:'Die GV ist das oberste Organ der AG.',a:true,e:'Art. 698 OR. Sie wählt VR und RS, genehmigt Jahresrechnung.'},
{q:'Positive Publizität bedeutet: Was im HR steht, müssen alle kennen.',a:true,e:'Unwiderlegbare Vermutung. Keine Ausrede möglich.'},
{q:'Eine Einzelfirma kann betrieben werden.',a:false,e:'Nein! Betreibung gegen den Inhaber PERSÖNLICH am Wohnort.'},
{q:'Die GmbH hat eine Doppelbesteuerung.',a:true,e:'Gesellschaft: Gewinnsteuer. Gesellschafter: Einkommenssteuer auf Dividenden.'}
];
var gesrRFSet=[];

window.gesrGenRF=function(){
var pool=GESR_RF.slice();for(var i=pool.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1));var t=pool[i];pool[i]=pool[j];pool[j]=t;}
gesrRFSet=pool.slice(0,8);
var h='';gesrRFSet.forEach(function(q,i){
h+='<div class="c" id="gesr_rf_'+i+'" style="padding:14px 18px;margin-bottom:8px"><div class="cd" style="margin-bottom:8px">'+q.q+'</div>';
h+='<label style="margin-right:16px;cursor:pointer"><input type="radio" name="gesr_rf_'+i+'" value="true"> Richtig</label>';
h+='<label style="cursor:pointer"><input type="radio" name="gesr_rf_'+i+'" value="false"> Falsch</label>';
h+='<div id="gesr_rffb_'+i+'" style="display:none;margin-top:6px;font-size:12px"></div></div>';
});
document.getElementById('gesr_rf_wrap').innerHTML=h;
document.getElementById('gesr_rf_res').innerHTML='';
};
window.gesrCheckRF=function(){
var c=0;gesrRFSet.forEach(function(q,i){
var sel=document.querySelector('input[name="gesr_rf_'+i+'"]:checked');
var fb=document.getElementById('gesr_rffb_'+i);var card=document.getElementById('gesr_rf_'+i);
if(!fb||!card)return;fb.style.display='block';
if(sel&&sel.value===String(q.a)){card.style.borderLeft='3px solid var(--g)';fb.innerHTML='<span style="color:var(--g)">✓ Richtig!</span> '+q.e;c++;}
else{card.style.borderLeft='3px solid var(--r)';fb.innerHTML='<span style="color:var(--r)">✗ Falsch.</span> '+(q.a?'Richtig':'Falsch')+' — '+q.e;}
});
document.getElementById('gesr_rf_res').innerHTML='<div class="'+(c===gesrRFSet.length?'hlg':'hla')+'">'+c+' von '+gesrRFSet.length+' richtig</div>';
};
window.gesrNextRF=function(){gesrGenRF();};
window.gesrResetRF=function(){gesrRFSet.forEach(function(q,i){document.querySelectorAll('input[name="gesr_rf_'+i+'"]').forEach(function(r){r.checked=false;});var f=document.getElementById('gesr_rffb_'+i);if(f){f.style.display='none';}var c=document.getElementById('gesr_rf_'+i);if(c)c.style.borderLeft='';});document.getElementById('gesr_rf_res').innerHTML='';};

// --- DATEN: ARTIKEL ZUORDNEN ---
var GESR_ARTQ=[
{q:'Juristische Personen sind aller Rechte und Pflichten fähig...',a:'Art. 53 ZGB',opts:['Art. 53 ZGB','Art. 55 ZGB','Art. 530 OR','Art. 620 OR']},
{q:'Die Organe geben der juristischen Person ihren Willen.',a:'Art. 55 ZGB',opts:['Art. 53 ZGB','Art. 55 ZGB','Art. 717 OR','Art. 698 OR']},
{q:'Vertragsmässige Verbindung für gemeinsamen Zweck = Gesellschaft.',a:'Art. 530 OR',opts:['Art. 530 OR','Art. 552 OR','Art. 594 OR','Art. 620 OR']},
{q:'Nur natürliche Personen, kaufmännisches Gewerbe, gemeinsame Firma.',a:'Art. 552 OR',opts:['Art. 530 OR','Art. 552 OR','Art. 594 OR','Art. 772 OR']},
{q:'Solidarische Haftung mit ganzem Vermögen (KolG).',a:'Art. 568 OR',opts:['Art. 544 OR','Art. 568 OR','Art. 680 OR','Art. 794 OR']},
{q:'Aktiengesellschaft: eigene Firma, Aktienkapital, nur Gesellschaftsvermögen haftet.',a:'Art. 620 OR',opts:['Art. 552 OR','Art. 620 OR','Art. 772 OR','Art. 930 OR']},
{q:'Einzige Pflicht des Aktionärs: Einzahlung.',a:'Art. 680 OR',opts:['Art. 620 OR','Art. 680 OR','Art. 717 OR','Art. 725 OR']},
{q:'VR muss Aufgaben mit aller Sorgfalt erfüllen.',a:'Art. 717 OR',opts:['Art. 698 OR','Art. 707 OR','Art. 717 OR','Art. 727 OR']},
{q:'Hälfte des AK nicht gedeckt → VR beruft GV ein.',a:'Art. 725 OR',opts:['Art. 717 OR','Art. 725 OR','Art. 680 OR','Art. 794 OR']},
{q:'GmbH: personenbezogene Kapitalgesellschaft.',a:'Art. 772 OR',opts:['Art. 620 OR','Art. 772 OR','Art. 794 OR','Art. 552 OR']},
{q:'Für GmbH-Verbindlichkeiten haftet nur das Gesellschaftsvermögen.',a:'Art. 794 OR',opts:['Art. 680 OR','Art. 772 OR','Art. 794 OR','Art. 568 OR']},
{q:'Das Handelsregister steht jedermann zur Einsicht offen.',a:'Art. 930 OR',opts:['Art. 930 OR','Art. 944 OR','Art. 956 OR','Art. 727 OR']}
];
var gesrArtSet=[];

window.gesrGenArt=function(){
var pool=GESR_ARTQ.slice();for(var i=pool.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1));var t=pool[i];pool[i]=pool[j];pool[j]=t;}
gesrArtSet=pool.slice(0,5);
var h='';gesrArtSet.forEach(function(q,i){
var opts=q.opts.slice();for(var k=opts.length-1;k>0;k--){var j=Math.floor(Math.random()*(k+1));var t=opts[k];opts[k]=opts[j];opts[j]=t;}
h+='<div class="c" id="gesr_aq_'+i+'" style="padding:14px 18px;margin-bottom:8px"><div class="cd" style="margin-bottom:8px;font-style:italic">«'+q.q+'»</div>';
h+='<select id="gesr_as_'+i+'" style="padding:6px 12px;border-radius:8px;border:1px solid var(--bd);background:var(--s2);color:var(--tx);font-family:var(--f);font-size:13px"><option value="">— Artikel wählen —</option>';
opts.forEach(function(o){h+='<option value="'+o+'">'+o+'</option>';});
h+='</select><div id="gesr_afb_'+i+'" style="display:none;margin-top:6px;font-size:12px"></div></div>';
});
document.getElementById('gesr_art_wrap').innerHTML=h;
document.getElementById('gesr_art_res').innerHTML='';
};
window.gesrCheckArt=function(){
var c=0;gesrArtSet.forEach(function(q,i){
var sel=document.getElementById('gesr_as_'+i);var fb=document.getElementById('gesr_afb_'+i);var card=document.getElementById('gesr_aq_'+i);
if(!sel||!fb||!card)return;fb.style.display='block';
if(sel.value===q.a){card.style.borderLeft='3px solid var(--g)';fb.innerHTML='<span style="color:var(--g)">✓ Richtig!</span>';c++;}
else{card.style.borderLeft='3px solid var(--r)';fb.innerHTML='<span style="color:var(--r)">✗ Falsch.</span> Richtig: <strong>'+q.a+'</strong>';}
});
document.getElementById('gesr_art_res').innerHTML='<div class="'+(c===gesrArtSet.length?'hlg':'hla')+'">'+c+' von '+gesrArtSet.length+' richtig</div>';
};
window.gesrNextArt=function(){gesrGenArt();};
window.gesrResetArt=function(){gesrArtSet.forEach(function(q,i){var s=document.getElementById('gesr_as_'+i);if(s)s.value='';var f=document.getElementById('gesr_afb_'+i);if(f){f.style.display='none';}var c=document.getElementById('gesr_aq_'+i);if(c)c.style.borderLeft='';});document.getElementById('gesr_art_res').innerHTML='';};

// --- DATEN: MULTIPLE CHOICE ---
var GESR_MC=[
{q:'Welche Gesellschaftsform darf KEIN kaufmännisches Unternehmen betreiben?',opts:['KolG','Einfache Gesellschaft','GmbH','AG'],a:1,e:'Die eG darf nie ein kaufm. UN betreiben — sonst wird sie automatisch KolG.'},
{q:'Was passiert, wenn die Hälfte des Aktienkapitals einer AG nicht mehr gedeckt ist?',opts:['Sofortige Auflösung','VR beruft GV ein + Sanierung','Konkurs wird eröffnet','Nichts — kein Handlungsbedarf'],a:1,e:'Art. 725 OR: Kapitalverlust → VR muss GV einberufen und Sanierungsmassnahmen vorschlagen.'},
{q:'Wie viele Personen braucht es mindestens zur Gründung einer GmbH?',opts:['2','3','1','5'],a:2,e:'Seit der Revision braucht es mind. 1 Person (nat. oder jur.).'},
{q:'Welches Organ der AG hat die Kompetenzvermutung?',opts:['Generalversammlung','Revisionsstelle','Verwaltungsrat','Geschäftsleitung'],a:2,e:'Im Zweifel ist der VR zuständig — er hat die Kompetenzvermutung.'},
{q:'Was bedeutet «konstitutiver» HR-Eintrag?',opts:['Nur beurkundend','Rechtserzeugend — Gesellschaft entsteht erst dadurch','Freiwillig','Rückwirkend'],a:1,e:'Konstitutiv = AG/GmbH existieren erst ab HR-Eintrag.'},
{q:'Wie hoch muss das Stammkapital einer GmbH mindestens sein?',opts:['CHF 100\'000','CHF 50\'000','CHF 20\'000','CHF 10\'000'],a:2,e:'CHF 20\'000, muss zu 100% liberiert sein.'},
{q:'Wer kann Gesellschafter einer KolG sein?',opts:['Nur natürliche Personen','Nur juristische Personen','Natürliche und juristische Personen','Nur Schweizer Staatsbürger'],a:0,e:'Art. 552 OR: ausschliesslich natürliche Personen.'},
{q:'Was ist die Folge eines HR-Eintrags? (Alle zutreffenden)',opts:['Buchführungspflicht','Betreibung auf Konkurs','Firmenschutz','Alle genannten'],a:3,e:'HR-Eintrag = Buchführung (OR 957) + Konkurs (Art. 39 SchKG) + Firmenschutz (Art. 956 OR).'},
{q:'Welche Aktienart wurde in der Schweiz abgeschafft?',opts:['Namenaktie','Inhaberaktie','Stimmrechtsaktie','Partizipationsschein'],a:1,e:'Inhaberaktien abgeschafft (Geldwäscherei-Bekämpfung, bis 30.04.2021 umzuwandeln).'},
{q:'Was ist die Mindestliberierung bei der AG?',opts:['CHF 20\'000','CHF 50\'000','CHF 100\'000','100% des AK'],a:1,e:'Mind. CHF 50\'000 müssen bei Gründung einbezahlt sein (bei AK von CHF 100\'000).'},
{q:'Wer haftet bei der KmG unbeschränkt?',opts:['Kommanditär','Komplementär','Beide','Keiner'],a:1,e:'Komplementär: volle Haftung. Kommanditär: nur bis Kommanditsumme.'},
{q:'Was braucht es für die Übertragung von GmbH-Stammanteilen?',opts:['Nur mündliche Absprache','Schriftlicher Vertrag + GV-Zustimmung','Nur GV-Beschluss','Notarielle Beurkundung'],a:1,e:'Art. 785 OR: schriftlicher Vertrag + Zustimmung der Gesellschafterversammlung.'}
];
var gesrMCIdx=0;

window.gesrGenMC=function(){
var q=GESR_MC[gesrMCIdx];var w=document.getElementById('gesr_mc_wrap');if(!w)return;
var h='<div class="c" style="padding:20px 24px"><div class="ct2" style="margin-bottom:12px">'+q.q+'</div>';
q.opts.forEach(function(o,i){
h+='<label style="display:block;padding:10px 14px;margin:4px 0;border-radius:10px;border:1px solid var(--bd);cursor:pointer;transition:all .2s" onmouseover="this.style.background=\'var(--s2)\'" onmouseout="this.style.background=\'\'"><input type="radio" name="gesr_mc" value="'+i+'" style="margin-right:8px"> '+o+'</label>';
});
h+='</div>';
w.innerHTML=h;
document.getElementById('gesr_mc_res').innerHTML='';
};
window.gesrCheckMC=function(){
var q=GESR_MC[gesrMCIdx];var sel=document.querySelector('input[name="gesr_mc"]:checked');
var res=document.getElementById('gesr_mc_res');if(!sel){res.innerHTML='<div class="hla">Bitte wähle eine Antwort.</div>';return;}
if(parseInt(sel.value)===q.a){res.innerHTML='<div class="hlg">✓ Richtig! '+q.e+'</div>';}
else{res.innerHTML='<div class="hlr">✗ Falsch. Richtig: <strong>'+q.opts[q.a]+'</strong><br>'+q.e+'</div>';}
};
window.gesrNextMC=function(){gesrMCIdx=(gesrMCIdx+1)%GESR_MC.length;gesrGenMC();};
window.gesrResetMC=function(){document.querySelectorAll('input[name="gesr_mc"]').forEach(function(r){r.checked=false;});document.getElementById('gesr_mc_res').innerHTML='';};

})();
