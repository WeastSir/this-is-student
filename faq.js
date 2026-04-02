// ===== FAQ =====
(function() {
window.TIS = window.TIS || {};
window.TIS.pages = window.TIS.pages || {};
window.TIS.pages.faq = `<!-- FAQ -->
<div class="sec" id="faq">
<h1>FAQ &amp; Über das Projekt</h1>
<p class="sub">Häufige Fragen und Hintergründe zu This Is Student</p>

<div style="display:flex;gap:8px;margin:12px 0 4px"><button style="font-size:11px;padding:4px 10px" onclick="this.parentElement.nextElementSibling.querySelectorAll('.tl-item').forEach(i=>i.classList.add('open'))">Alle aufklappen</button><button style="font-size:11px;padding:4px 10px" onclick="this.parentElement.nextElementSibling.querySelectorAll('.tl-item').forEach(i=>i.classList.remove('open'))">Alle schliessen</button></div>
<div class="tl">

<div class="tl-item open"><div class="tl-num tl-num-b">?</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Was ist This Is Student?</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body">This Is Student ist eine <strong>interaktive Lernplattform</strong>, die als persönliches Projekt im Rahmen des BWS-Studiums (Semester 5) an der SHL Schweizerische Hotelfachschule Luzern entstanden ist. Die Plattform verwandelt Vorlesungsstoff in visuell aufbereitete, interaktive Lerninhalte — mit Timelines, Mindmaps, Karteikarten, Quiz und klickbaren Gesetzesartikeln.</div></div></div>

<div class="tl-item"><div class="tl-num tl-num-g">?</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Für wen ist die Plattform gedacht?</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body">Primär für <strong>Studierende des BWS-Studiengangs an der SHL</strong>, insbesondere Semester 5. Die Inhalte sind aber für alle nützlich, die sich mit Schweizer Arbeitsrecht (OR, ArG, L-GAV Gastgewerbe) oder SchKG befassen möchten — z.B. auch für Personen in der Gastrobranche, HR-Verantwortliche oder Lernende.</div></div></div>

<div class="tl-item"><div class="tl-num tl-num-a">?</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Ist das eine offizielle SHL-Plattform?</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body"><strong>Nein!</strong> This Is Student ist ein privates Projekt. Es wird nicht von der SHL betrieben, geprüft oder verantwortet. Die Inhalte basieren auf Vorlesungsunterlagen und Gesetzestexten, sind aber eigenständig aufbereitet. Bei Widersprüchen gilt immer der offizielle Vorlesungsstoff bzw. das Gesetz.</div></div></div>

<div class="tl-item"><div class="tl-num tl-num-r">?</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Kann ich mich auf die Inhalte verlassen?</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body">Die Inhalte wurden mit grosser Sorgfalt erstellt und orientieren sich an den aktuellen Gesetzestexten und Vorlesungsunterlagen. Trotzdem: <strong>keine Gewähr</strong> für Richtigkeit und Vollständigkeit. Die Plattform ersetzt weder die Vorlesung noch eine Rechtsberatung. Im Zweifelsfall gilt immer der <strong>Gesetzestext</strong> (via Fedlex) und die <strong>offizielle Vorlesung</strong>.<br><br>Fehler melden hilft allen — vielen Dank!</div></div></div>

<div class="tl-item"><div class="tl-num tl-num-p">?</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Was kann ich mit der Plattform machen?</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body" style="line-height:1.9"><strong>Lernen &amp; Verstehen:</strong> Jedes Kapitel erklärt den Stoff visuell mit Timelines, farbigen Cards und Merksätzen. Klicke auf Gesetzesartikel für den Originaltext + einfache Erklärung. Klicke auf Abkürzungen für eine Definition.<br><br><strong>Repetieren:</strong> Karteikarten zum Durchklicken. Du kannst eigene Karten hinzufügen und bestehende löschen.<br><br><strong>Testen:</strong> Das Quiz-System generiert Fragen aus den Karteikarten. Der Lernfortschritt merkt sich, was du schon kannst (sicher/wackelig/unsicher) und priorisiert schwierige Fragen.<br><br><strong>Nachschlagen:</strong> Glossar mit Abkürzungen, Betriebstypen und Fachbegriffen. Zusammenfassungen als Mindmaps.</div></div></div>

<div class="tl-item"><div class="tl-num tl-num-b">?</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Was bedeuten die klickbaren Elemente?</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-sub">
<div class="c ca"><div class="ct2"><span class="b bb">Art. 319 OR</span> Farbige Badges</div><div class="cd">Klick öffnet ein Popup mit dem Gesetzestext + einfacher Erklärung + Link zu Fedlex.</div></div>
<div class="c cg"><div class="ct2"><span class="abk" style="pointer-events:none">AN</span> Gepunktete Unterstreichung</div><div class="cd">Abkürzung oder Fachbegriff. Klick öffnet ein Popup mit der Erklärung.</div></div>
<div class="c cm"><div class="ct2">Farbige Cards mit Seitenstreifen</div><div class="cd">Wichtige Informationen, farblich gruppiert. Rosa = Schwerpunkt, Rot = Warnung/Wichtig, Grün = Positiv, Orange = Achtung.</div></div>
<div class="c cp"><div class="ct2">Merksätze (violett, kursiv)</div><div class="cd">Eselsbrücken und Prüfungstipps — die solltest du dir besonders merken!</div></div>
</div></div></div>

<div class="tl-item"><div class="tl-num tl-num-g">?</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Welche Fächer gibt es?</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body"><strong>Aktuell verfügbar:</strong><br>• <strong>Controlling 2</strong> — Kennzahlen, Kosten- und Leistungsrechnung, Kalkulation, Investitionsrechnung<br>• <strong>Recht 2 (SchKG)</strong> — Schuldbetreibungs- und Konkursgesetz mit Einleitung, Pfändung, Konkurs, Sicherungsmittel<br>• <strong>Arbeitsrecht</strong> — OR, ArG, L-GAV mit 10 Kapiteln inkl. Mutterschutz, Lohnfortzahlung, Jugendliche, Arbeitszeitrechnen<br><br><strong>Geplant (coming soon):</strong> 16 weitere Fächer des BWS Semester 5, darunter Financial Accounting, HRM, Marketing, Revenue Management und mehr.</div></div></div>

<div class="tl-item"><div class="tl-num tl-num-a">?</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Werden meine Daten gespeichert?</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body"><strong>Nein.</strong> Die Plattform läuft komplett im Browser. Kein Server, keine Datenbank, keine Cookies, kein Tracking, keine Werbung. Eigene Karteikarten und der Lernfortschritt gehen beim Schliessen des Browsers verloren. Der Dark/Light-Mode wird im localStorage des Browsers gespeichert.</div></div></div>

<div class="tl-item"><div class="tl-num tl-num-r">?</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Wie wurde die Plattform erstellt?</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body">Die Plattform ist eine <strong>Single-File HTML-Applikation</strong> — alles (HTML, CSS, JavaScript, Daten) in einer einzigen Datei. Kein Framework, kein Build-Prozess. Kann lokal als .html-Datei geöffnet werden.<br><br>Die technische Umsetzung und Programmierung erfolgte mit Unterstützung von <strong>KI (Claude, Anthropic)</strong>. Die inhaltliche Aufbereitung, Strukturierung und Qualitätskontrolle liegt beim Ersteller.<br><br><strong>Design-Philosophie:</strong> Apple-inspiriert. Glasmorphism, animierte Gradients, Playfair Display + Inter Schriftarten. Dark Mode. Responsive für Desktop und Mobile.</div></div></div>

<div class="tl-item"><div class="tl-num tl-num-p">?</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Darf ich die Plattform teilen?</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body">Die Plattform ist für den <strong>persönlichen Gebrauch</strong> gedacht. Du darfst die .html-Datei gerne mit Mitstudierenden teilen. Eine <strong>kommerzielle Nutzung</strong> oder Weiterverbreitung als eigenes Produkt ist nicht gestattet. Bitte verweise auf die Originalquelle.</div></div></div>

</div>

<div style="text-align:center;padding:24px 0">
<button onclick="go('home')" style="font-size:13px;padding:10px 24px">← Zurück zur Startseite</button>
<button class="bp1" onclick="go('kurse')" style="font-size:13px;padding:10px 24px;margin-left:10px">Zu den Kursen →</button>
</div>
`;
})();
