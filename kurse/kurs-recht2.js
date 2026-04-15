// ===== KURS: RECHT 2 — SchKG =====
// Auto-generated module for This Is Student
(function() {

// Course config
const courseConfig = {
  id: 'recht2',
  name: 'Recht 2 — SchKG',
  pages: ['grund','einl','ablauf','pfand','pvw','konk','sich','schkg_ueb','mind','kart','quiz','glossar','recht2'],
  subNav: [
  {s:'recht2',l:'Übersicht'},
  {s:'grund',l:'Grundlagen'},{s:'einl',l:'Einleitung'},{s:'ablauf',l:'Ablauf'},{s:'pfand',l:'Pfändung'},
  {s:'pvw',l:'Pfandverwertung'},{s:'konk',l:'Konkurs'},{s:'sich',l:'Sicherung'},
  {s:'schkg_ueb',l:'Übungen'},{s:'mind',l:'Zusammenfassung'},{s:'kart',l:'Karten'},{s:'quiz',l:'Quiz'},{s:'glossar',l:'Glossar'}
],
  navButton: '<button class="nl nl-main" data-s="recht2" onclick="go(\'recht2\')" style="display:none">Recht 2</button>'
};

// HTML Content
const courseHTML = `<!-- RECHT 2 HOME -->
<div class="sec" id="recht2">
<div style="border-radius:24px;padding:36px 32px;margin-bottom:32px;background:linear-gradient(135deg,rgba(232,86,122,.08),rgba(175,82,222,.06));border:1px solid var(--bd);position:relative;overflow:hidden">
<div style="position:absolute;top:-40px;right:-40px;width:160px;height:160px;border-radius:50%;background:linear-gradient(135deg,rgba(232,86,122,.1),rgba(175,82,222,.08))"></div>
<div style="position:relative;z-index:1">
<div style="font-size:12px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:var(--ac);margin-bottom:8px">Recht 2</div>
<h1 style="font-size:32px;letter-spacing:-.6px;margin-bottom:8px">Schuldbetreibung &amp; Konkurs</h1>
<p style="font-size:15px;color:var(--tx2);margin-bottom:0">Dozent: Olivier Dollé · SchKG komplett</p>
</div>
</div>

<div style="font-size:13px;font-weight:600;letter-spacing:1px;text-transform:uppercase;color:var(--tx3);margin-bottom:14px">Theorie · 7 Kapitel</div>
<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:12px;margin-bottom:36px">
<div class="c ck" onclick="go('grund')" style="padding:20px 22px;display:flex;gap:14px;align-items:flex-start">
<div style="width:32px;height:32px;border-radius:10px;background:var(--al);color:var(--ac);display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0">1</div>
<div><div class="ct2">Grundlagen &amp; Organisation</div><div class="cd">Zweck, Betreibungsort, Fristen, Schonzeiten</div></div>
</div>
<div class="c ck" onclick="go('einl')" style="padding:20px 22px;display:flex;gap:14px;align-items:flex-start">
<div style="width:32px;height:32px;border-radius:10px;background:var(--al);color:var(--ac);display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0">2</div>
<div><div class="ct2">Einleitungsverfahren</div><div class="cd">Begehren → Zahlungsbefehl → Rechtsvorschlag</div></div>
</div>
<div class="c ck" onclick="go('ablauf')" style="padding:20px 22px;display:flex;gap:14px;align-items:flex-start">
<div style="width:32px;height:32px;border-radius:10px;background:var(--pl);color:var(--pr);display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0">3</div>
<div><div class="ct2">Ablauf-Diagramme</div><div class="cd">Drei interaktive Flussdiagramme</div></div>
</div>
<div class="c ck" onclick="go('pfand')" style="padding:20px 22px;display:flex;gap:14px;align-items:flex-start">
<div style="width:32px;height:32px;border-radius:10px;background:var(--aml);color:var(--am);display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0">4</div>
<div><div class="ct2">Betreibung auf Pfändung</div><div class="cd">Pfändung, Verwertung, Existenzminimum</div></div>
</div>
<div class="c ck" onclick="go('pvw')" style="padding:20px 22px;display:flex;gap:14px;align-items:flex-start">
<div style="width:32px;height:32px;border-radius:10px;background:var(--pl);color:var(--pr);display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0">5</div>
<div><div class="ct2">Pfandverwertung</div><div class="cd">Grund-/Faustpfand, Pfandausfallschein</div></div>
</div>
<div class="c ck" onclick="go('konk')" style="padding:20px 22px;display:flex;gap:14px;align-items:flex-start">
<div style="width:32px;height:32px;border-radius:10px;background:var(--rl);color:var(--r);display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0">6</div>
<div><div class="ct2">Betreibung auf Konkurs</div><div class="cd">Konkursandrohung, Kollokationsplan</div></div>
</div>
<div class="c ck" onclick="go('sich')" style="padding:20px 22px;display:flex;gap:14px;align-items:flex-start">
<div style="width:32px;height:32px;border-radius:10px;background:var(--aml);color:var(--am);display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0">7</div>
<div><div class="ct2">Sicherungsmittel</div><div class="cd">Arrest, Retentionsrecht, Anfechtungsklagen</div></div>
</div>
</div>

<div style="font-size:13px;font-weight:600;letter-spacing:1px;text-transform:uppercase;color:var(--tx3);margin-bottom:14px">Lerntools</div>
<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(130px,1fr));gap:12px">
<div class="c ck" onclick="go('schkg_ueb')" style="text-align:center;padding:24px 16px">
<div style="font-size:20px;margin-bottom:6px">✍</div>
<div class="ct2">Übungen</div><div class="cd">Mit Antwort-Toggle</div>
</div>
<div class="c ck" onclick="go('mind')" style="text-align:center;padding:24px 16px">
<div style="font-size:24px;font-weight:700;background:var(--grad);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;margin-bottom:6px">6</div>
<div class="ct2">Zusammenfassung</div><div class="cd">Visuelle Übersichten</div>
</div>
<div class="c ck" onclick="go('kart')" style="text-align:center;padding:24px 16px">
<div id="ltSchkgCards" style="font-size:24px;font-weight:700;background:var(--grad);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;margin-bottom:6px">50</div>
<div class="ct2">Karteikarten</div><div class="cd">Klicken &amp; repetieren</div>
</div>
<div class="c ck" onclick="go('quiz')" style="text-align:center;padding:24px 16px">
<div id="ltSchkgQuiz" style="font-size:24px;font-weight:700;background:var(--grad);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;margin-bottom:6px">50</div>
<div class="ct2">Quiz</div><div class="cd">Mit Lernfortschritt</div>
</div>
<div class="c ck" onclick="go('glossar')" style="text-align:center;padding:24px 16px">
<div style="font-size:24px;font-weight:700;background:var(--grad);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;margin-bottom:6px">A–Z</div>
<div class="ct2">Glossar</div><div class="cd">Begriffe &amp; Abkürzungen</div>
</div>
</div>
</div>

<div class="sec" id="grund"><h1>Grundlagen &amp; Organisation</h1><p class="sub">Zweck, Betreibungsarten, Betreibungsort, Fristen, Schonzeiten</p>
<div class="hlbl"><strong>Lernziele:</strong><br>• Sie können Zweck und Funktionsweise des SchKG erläutern<br>• Sie können die verschiedenen Betreibungsarten und deren Zuordnung erklären<br>• Sie können Betreibungsort, Fristen und Schonzeiten korrekt anwenden</div>
<div style="display:flex;gap:8px;margin:12px 0 4px"><button style="font-size:11px;padding:4px 10px" onclick="this.parentElement.nextElementSibling.querySelectorAll('.tl-item').forEach(i=>i.classList.add('open'))">Alle aufklappen</button><button style="font-size:11px;padding:4px 10px" onclick="this.parentElement.nextElementSibling.querySelectorAll('.tl-item').forEach(i=>i.classList.remove('open'))">Alle schliessen</button></div>
<div class="tl">
<div class="tl-item"><div class="tl-num tl-num-b">1</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Zweck des SchKG</div><div class="tl-merksatz">«Recht haben ist nicht Recht bekommen — dafür braucht es das SchKG.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body"><strong>Recht haben ≠ Recht durchsetzen.</strong> Das SchKG dient der zwangsweisen Eintreibung von <strong>Geldforderungen</strong> mithilfe des Staates (Betreibungsorgane + Gerichte). Für nicht-monetäre Ansprüche gilt die ZPO. Vollstreckung nur gegen Vermögen, nie gegen die Person. Bundesgesetz seit 1889, ganze Schweiz einheitlich.</div><div class="merksatz">Merke: Das SchKG greift nur bei Geld. Alles andere läuft über die Zivilprozessordnung.</div></div></div>
<div class="tl-item"><div class="tl-num tl-num-b">2</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Organisation</div><div class="tl-merksatz">«Betreibungskreis = Gemeinde, Konkurskreis = grösser.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body">Durchführung obliegt den Kantonen.</div><div class="tl-sub"><div class="c ca"><div class="ct2">Betreibungskreis <span class="b bb">Artikel 2 Absatz 1</span></div><div class="cd">Meist 1 Gemeinde. Betreibungsbeamte führen alle Betreibungshandlungen durch.</div></div><div class="c ca"><div class="ct2">Konkurskreis <span class="b bb">Artikel 2 Absatz 2</span></div><div class="cd">Mehrere Gemeinden/Bezirke. Konkursbeamte führen Konkurshandlungen durch.</div></div></div><div class="tl-sub"><div class="c"><div class="ct2">Aufsichtsbehörden</div><div class="cd">Bezirksgericht → Kantons-/Obergericht → Bundesgericht (IV. Abteilung). Beschwerde innert <span class="b br">10 Tagen</span> <span class="b bb">Artikel 17</span>.</div></div></div><div class="merksatz">Merke: Beschwerde gegen Betreibungshandlungen immer innert 10 Tagen — bei Rechtsverweigerung jederzeit.</div></div></div>
<div class="tl-item"><div class="tl-num tl-num-b">3</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Die vier Betreibungsarten</div><div class="tl-merksatz">«Nicht im HR = Pfändung. Im HR = Konkurs. Pfand da = Pfandverwertung.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body">Betreibungsamt bestimmt von Amtes wegen die Betreibungsart.</div><div class="tl-sub"><div class="c ca"><div class="ct2">Pfändung <span class="b bb">Spezialexekution</span></div><div class="cd">Nicht im HR. Nur so viel wie nötig. Nur beteiligte Gläubiger.</div></div><div class="c cr"><div class="ct2">Konkurs <span class="b br">Generalexekution</span></div><div class="cd">Im HR — auch für private Schulden! <span class="b br">Artikel 39</span>. Gesamtes Vermögen. Alle Gläubiger.</div></div><div class="c cp"><div class="ct2">Pfandverwertung <span class="b bp">Artikel 151</span></div><div class="cd">Bei bestehendem Pfand. Gläubiger muss im Begehren darauf hinweisen.</div></div><div class="c"><div class="ct2">Wechselbetreibung</div><div class="cd">Praktisch bedeutungslos, nicht prüfungsrelevant.</div></div></div><div class="merksatz">Merke: Pfändung = einzeln, nur das Nötige. Konkurs = alle zusammen, alles weg.</div></div></div>
<div class="tl-item"><div class="tl-num tl-num-a">4</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Betreibungsort <span class="b ba">Artikel 46</span></div><div class="tl-merksatz">«Immer am Wohnsitz betreiben — zwingend, nicht verhandelbar!»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body"><strong>Einheit des Betreibungsortes</strong> — zwingend, vertraglich nicht änderbar!</div><div class="tl-sub"><div class="c"><div class="ct2">Natürliche Personen</div><div class="cd">Wohnsitz (Lebensmittelpunkt). Student: zu Hause.</div></div><div class="c"><div class="ct2">Juristische Personen</div><div class="cd">Hauptsitz. Nie an Zweigniederlassung (BGE 96 III 89).</div></div><div class="c"><div class="ct2">Grundpfand</div><div class="cd">Ort des Grundstücks.</div></div><div class="c"><div class="ct2">Faustpfand</div><div class="cd">Wahlweise: Wohnsitz oder Ort des Pfands.</div></div></div><div class="merksatz">Merke: Falscher Betreibungsort? Beschwerde erheben, nicht Rechtsvorschlag!</div></div></div>
<div class="tl-item"><div class="tl-num tl-num-r">5</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Fristen <span class="b br">Artikel 31</span></div><div class="tl-merksatz">«Tag der Zustellung zählt nie mit — Frist beginnt am Tag danach.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body">Beginn: Tag <strong>nach</strong> Zustellung. Ende: Mitternacht letzter Tag. Poststempel genügt. Samstag/Sonntag/Feiertag → nächster Werktag.</div><div class="merksatz">Merke: Poststempel am letzten Tag reicht — aber lieber einen Tag früher!</div></div></div>
<div class="tl-item"><div class="tl-num tl-num-r">6</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Schonzeiten</div><div class="tl-merksatz">«Samstag ist KEIN Ruhetag im SchKG — aufpassen!»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-sub"><div class="c cr"><div class="ct2">Geschlossene Zeiten <span class="b br">Artikel 56 Ziffer 1+2</span></div><div class="cd">20–7 Uhr. Sonn-/Feiertage. <strong>Samstage NICHT!</strong></div></div><div class="c cm"><div class="ct2">Betreibungsferien <span class="b ba">Artikel 56 Ziffer 2</span></div><div class="cd">7 Tage vor/nach Ostern + Weihnachten. 15.–31. Juli.</div></div><div class="c ca"><div class="ct2">Rechtsstillstand <span class="b bb">Art. 57 OR</span>–<span class="b bb">Art. 62 OR</span></div><div class="cd">Militärdienst, Todesfall, Krankheit, Notzustand. <strong>Gilt nicht bei Unterhalt!</strong></div></div></div><div class="merksatz">Merke: Ferien hemmen Fristen nicht — aber verlängern sie, wenn das Ende reinfällt.</div></div></div>
<div class="tl-item"><div class="tl-num tl-num-x">7</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Kosten, Register &amp; Parteien</div><div class="tl-merksatz">«Gläubiger zahlt vor, Schuldner zahlt am Ende — wenn er kann.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body">Kosten zulasten Schuldner, aber <strong>Gläubiger schiesst vor</strong>. Betreibungsregister: glaubhaftes Interesse <span class="b bb">Artikel 8a</span>. Einträge <span class="b ba">5 Jahre</span> sichtbar.<br><br><strong>Parteien:</strong> Gläubiger = wer behauptet, Gläubiger zu sein (kein Nachweis!). Schuldner = betriebene Person.</div><div class="merksatz">Merke: Jeder kann jeden betreiben — kein Beweis nötig.</div></div></div>
</div></div>

<div class="sec" id="einl"><h1>Einleitungsverfahren</h1><p class="sub">Die 4 Schritte — gleich bei allen drei Betreibungsarten</p>
<div class="hlbl"><strong>Lernziele:</strong><br>• Sie können die 4 Schritte des Einleitungsverfahrens in der richtigen Reihenfolge aufzählen<br>• Sie können den Unterschied zwischen Rechtsvorschlag und Beschwerde erklären<br>• Sie können die Rechtsöffnung (provisorisch und definitiv) korrekt zuordnen</div>
<div class="hl">Klärt ab, ob der Schuldner tatsächlich Geld schuldet. Betreibungsamt prüft <strong>nicht</strong> die Forderung.</div>
<div style="display:flex;gap:8px;margin:12px 0 4px"><button style="font-size:11px;padding:4px 10px" onclick="this.parentElement.nextElementSibling.querySelectorAll('.tl-item').forEach(i=>i.classList.add('open'))">Alle aufklappen</button><button style="font-size:11px;padding:4px 10px" onclick="this.parentElement.nextElementSibling.querySelectorAll('.tl-item').forEach(i=>i.classList.remove('open'))">Alle schliessen</button></div>
<div class="tl">
<div class="tl-item"><div class="tl-num tl-num-b">1</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Betreibungsbegehren <span class="b bb">Artikel 67</span></div><div class="tl-merksatz">«Der Gläubiger startet — kein Beweis nötig.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body">Gläubiger beim Betreibungsamt (schriftlich, mündlich, online). Name, Wohnort, Forderungssumme. Kostenvorschuss. Zahlungsbefehl wird zugestellt <span class="b bb">Artikel 71</span>.</div><div class="merksatz">Merke: Der Gläubiger muss nichts beweisen — jeder kann erstmal jeden betreiben.</div></div></div>
<div class="tl-item"><div class="tl-num tl-num-b">2</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Zahlungsbefehl <span class="b bb">Artikel 69</span></div><div class="tl-merksatz">«Das Amt prüft nie, ob die Forderung stimmt — nur das Formular!»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body"><strong>Keine Prüfung der Forderung!</strong> Persönliche Zustellung (kein Einschreiben — BGE 54 III 251) <span class="b bb">Artikel 72</span>. Doppel an Gläubiger <span class="b bb">Artikel 70</span>.<br><br>Fordert auf: Zahlung innert <span class="b ba">20 Tagen</span> oder Rechtsvorschlag innert <span class="b br">10 Tagen</span>.</div><div class="merksatz">Merke: 20 Tage zum Zahlen, 10 Tage für Rechtsvorschlag — wer nichts tut, verliert.</div></div></div>
<div class="tl-item"><div class="tl-num tl-num-a">3</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Rechtsvorschlag <span class="b ba">Artikel 74</span></div><div class="tl-merksatz">«Der Rechtsvorschlag ist die Notbremse — er stoppt alles.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body">Bringt die Betreibung zum <strong>Stillstand</strong> <span class="b ba">Artikel 78</span>. Muss nicht begründet werden. Teilbestreitung: Betrag genau angeben <span class="b ba">Artikel 74 Absatz 2</span>.</div><div class="tl-sub"><div class="c cr"><div class="ct2">Kein gültiger Rechtsvorschlag:</div><div class="cd">«Werde Rechtsvorschlag erheben» oder Zerreissen des Zahlungsbefehls.</div></div></div><div class="merksatz">Merke: «Schulde nichts» reicht. «Werde Rechtsvorschlag erheben» reicht nicht!</div></div></div>
<div class="tl-item"><div class="tl-num tl-num-p">4</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Rechtsöffnung</div><div class="tl-merksatz">«Kein Beweis = langer Prozess. Vertrag = schnell. Urteil = sofort.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body">Gerichtliche Beseitigung des Rechtsvorschlags.</div><div class="tl-sub"><div class="c ca"><div class="ct2">Provisorische Rechtsöffnung <span class="b bb">Artikel 82</span></div><div class="cd">Bei Schuldanerkennung (Vertrag, Verlustschein). Wird nach <span class="b ba">20 Tagen</span> definitiv <span class="b bb">Artikel 83 Absatz 3</span>.</div></div><div class="c cr"><div class="ct2">Definitive Rechtsöffnung <span class="b br">Artikel 80</span></div><div class="cd">Bei vollstreckbarem Titel (Urteil, Vergleich, Verfügung). Nur noch Zahlung/Stundung/Verjährung <span class="b br">Artikel 81</span>.</div></div></div><div class="merksatz">Merke: Provisorisch wird automatisch definitiv nach 20 Tagen — wenn der Schuldner schläft, verliert er.</div></div></div>
</div>
<div class="tl-highlight">Danach → <strong>Fortsetzungsbegehren</strong> <span class="b bb">Artikel 88</span> (frühestens 20 Tage, spätestens 1 Jahr nach Zahlungsbefehl).</div>
</div>

<div class="sec" id="ablauf"><h1>Ablauf-Diagramme</h1><p class="sub">Klicke dich Schritt für Schritt durch die drei Flussdiagramme</p>
<div style="display:flex;gap:6px;margin-bottom:24px;flex-wrap:wrap"><button class="bp1" onclick="showFlow(0)" id="fb0">1. Einleitungsverfahren</button><button onclick="showFlow(1)" id="fb1">2. Rechtsöffnung</button><button onclick="showFlow(2)" id="fb2">3. Pfändung &amp; Pfandverwertung</button></div>
<div id="flow0" class="flowsec"><div class="sp" id="f0p"></div><div id="f0s"></div><div class="sn"><button onclick="fGo(0,-1)">Zurück</button><button class="bp1" onclick="fGo(0,1)" id="f0n">Weiter</button></div></div>
<div id="flow1" class="flowsec" style="display:none"><div class="sp" id="f1p"></div><div id="f1s"></div><div class="sn"><button onclick="fGo(1,-1)">Zurück</button><button class="bp1" onclick="fGo(1,1)" id="f1n">Weiter</button></div></div>
<div id="flow2" class="flowsec" style="display:none"><div class="sp" id="f2p"></div><div id="f2s"></div><div class="sn"><button onclick="fGo(2,-1)">Zurück</button><button class="bp1" onclick="fGo(2,1)" id="f2n">Weiter</button></div></div>
</div>

<div class="sec" id="pfand"><h1>Betreibung auf Pfändung</h1><p class="sub">Spezialexekution — Artikel 89ff. SchKG</p>
<div class="hlbl"><strong>Lernziele:</strong><br>• Sie können den Ablauf der Pfändungsbetreibung Schritt für Schritt erklären<br>• Sie können die Pfändungsreihenfolge und die Kompetenzstücke benennen<br>• Sie können den Unterschied zwischen Pfändung und Konkurs erläutern</div>
<div class="hl"><strong>Für wen?</strong> Nicht im HR eingetragene Schuldner. Auch bei Unterhaltsbeiträgen <span class="b bb">Artikel 43</span>.</div>
<div style="display:flex;gap:8px;margin:12px 0 4px"><button style="font-size:11px;padding:4px 10px" onclick="this.parentElement.nextElementSibling.querySelectorAll('.tl-item').forEach(i=>i.classList.add('open'))">Alle aufklappen</button><button style="font-size:11px;padding:4px 10px" onclick="this.parentElement.nextElementSibling.querySelectorAll('.tl-item').forEach(i=>i.classList.remove('open'))">Alle schliessen</button></div>
<div class="tl">
<div class="tl-item"><div class="tl-num tl-num-b">1</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Pfändungsankündigung <span class="b bb">Artikel 90</span></div><div class="tl-merksatz">«Mindestens 1 Tag vorher — wer nicht kommt, wird geholt.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body">Mindestens 1 Tag vorher. Schuldner bei Straffolge verpflichtet <span class="b bb">Artikel 91</span>. Polizeiliche Vorführung möglich.</div><div class="merksatz">Merke: Die Pfändung kommt nicht überraschend — aber wer fernbleibt, bekommt Polizeibesuch.</div></div></div>
<div class="tl-item"><div class="tl-num tl-num-b">2</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Pfändung <span class="b bb">Artikel 95</span></div><div class="tl-merksatz">«Erst Lohn, dann Haus, dann das was angeblich dem Nachbarn gehört.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body"><span class="b bb">1.</span> Bewegliches (Lohn!) → <span class="b bb">2.</span> Grundstücke → <span class="b bb">3.</span> Angeblich Dritten gehörendes <span class="b bb">Artikel 106–109</span>. Maximal Forderung + Kosten <span class="b bb">Artikel 97</span>. Wertgegenstände → Amt verwahrt <span class="b bb">Artikel 98</span>.</div><div class="merksatz">Merke: Zuerst wird der Lohn gepfändet — das ist der häufigste Fall.</div></div></div>
<div class="tl-item"><div class="tl-num tl-num-b">3</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Pfändungsurkunde <span class="b bb">Artikel 112</span></div><div class="tl-merksatz">«Kein Vermögen? Dann ist die Urkunde gleich der Verlustschein.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body">Zustellung nach 30 Tagen <span class="b bb">Artikel 114</span>. Kein verwertbares Vermögen → gilt als Verlustschein <span class="b bb">Artikel 115</span>.</div><div class="merksatz">Merke: Pfändungsurkunde ohne Vermögen = automatisch Verlustschein.</div></div></div>
<div class="tl-item"><div class="tl-num tl-num-a">4</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Verwertungsbegehren <span class="b ba">Artikel 116</span></div><div class="tl-merksatz">«Zu spät gestellt? Ganze Betreibung erlischt — alles umsonst!»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body"><span class="b ba">Beweglich:</span> 1 Monat – 1 Jahr. <span class="b ba">Grundstücke:</span> 6 Monate – 2 Jahre. Lohnpfändung: nicht nötig.</div><div class="merksatz">Merke: Lohnpfändung braucht kein Verwertungsbegehren — das Geld fliesst ja schon.</div></div></div>
<div class="tl-item"><div class="tl-num tl-num-g">5</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Verwertung &amp; Verteilung <span class="b bgreen">Artikel 125ff.</span></div><div class="tl-merksatz">«Zum Ersten, zum Zweiten, zum Dritten — verkauft!»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body">Öffentliche Versteigerung <span class="b bgreen">Artikel 126</span>. Keine Mängelhaftung. Freihandverkauf <span class="b bgreen">Artikel 130</span> bei Einverständnis/Marktpreis/Wertverminderung.<br><br>Erlös <span class="b bgreen">Artikel 144</span>: 1. Kosten → 2. Gläubiger → 3. Rest an Schuldner.</div><div class="merksatz">Merke: Kosten zuerst, dann Gläubiger, Rest an Schuldner — falls noch was da ist.</div></div></div>
</div>
<h2>Unpfändbare Gegenstände</h2>
<div style="display:flex;gap:8px;margin:12px 0 4px"><button style="font-size:11px;padding:4px 10px" onclick="this.parentElement.nextElementSibling.querySelectorAll('.tl-item').forEach(i=>i.classList.add('open'))">Alle aufklappen</button><button style="font-size:11px;padding:4px 10px" onclick="this.parentElement.nextElementSibling.querySelectorAll('.tl-item').forEach(i=>i.classList.remove('open'))">Alle schliessen</button></div>
<div class="tl">
<div class="tl-item"><div class="tl-num tl-num-r">A</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Absolut unpfändbar <span class="b br">Artikel 92</span></div><div class="tl-merksatz">«Das Bett und die Kleider darf niemand wegnehmen.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body">Lebensnotwendiges · Berufswerkzeuge · Eigentum Dritter · Religiöse Gegenstände · Haustiere · AHV/IV/EL-Renten · Sold · Genugtuung.</div><div class="tl-highlight"><strong>Auswechslungsrecht</strong> <span class="b ba">Artikel 92 Absatz 3</span>: Gläubiger bietet billigeren Ersatz → pfändet teureres.</div><div class="merksatz">Merke: Teure Uhr? Gläubiger bringt eine Swatch — und pfändet die Rolex.</div></div></div>
<div class="tl-item"><div class="tl-num tl-num-a">B</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Beschränkt pfändbar <span class="b ba">Artikel 93</span></div><div class="tl-merksatz">«Vom Lohn bleibt das Existenzminimum — aber nur das.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body"><strong>Lohnpfändung:</strong> Bis Existenzminimum. Maximal <span class="b ba">1 Jahr</span>. Individuell, kantonal festgelegt.</div><div class="merksatz">Merke: Lohnpfändung maximal 1 Jahr — danach muss der Gläubiger neu betreiben.</div></div></div>
</div>
<h2>Pfändungsverlustschein <span class="b br">Artikel 149</span></h2>
<div style="display:flex;gap:8px;margin:12px 0 4px"><button style="font-size:11px;padding:4px 10px" onclick="this.parentElement.nextElementSibling.querySelectorAll('.tl-item').forEach(i=>i.classList.add('open'))">Alle aufklappen</button><button style="font-size:11px;padding:4px 10px" onclick="this.parentElement.nextElementSibling.querySelectorAll('.tl-item').forEach(i=>i.classList.remove('open'))">Alle schliessen</button></div>
<div class="tl">
<div class="tl-item"><div class="tl-num tl-num-r">!</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Wirkungen</div><div class="tl-merksatz">«Der Verlustschein ist wie ein Bumerang — er kommt immer wieder.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body"><span class="b bb">Schuldanerkennung</span> = provisorischer Rechtsöffnungstitel<br><span class="b bgreen">6-Monate-Privileg</span> = direkt Fortsetzungsbegehren<br><span class="b ba">Verjährung</span> = 20 Jahre (Erben: 1 Jahr)<br><span class="b br">Ehrenfolgen</span> je nach Kanton<br><span class="b bp">Arrestgrund</span> + Anfechtungsklagen</div><div class="merksatz">Merke: 20 Jahre kann der Gläubiger wiederkommen — innert 6 Monaten sogar ohne Zahlungsbefehl.</div></div></div>
</div></div>

<div class="sec" id="pvw"><h1>Betreibung auf Pfandverwertung</h1><p class="sub">Artikel 151ff. SchKG</p>
<div class="hlbl"><strong>Lernziele:</strong><br>• Sie können erklären, wann eine Pfandverwertung stattfindet<br>• Sie können den Ablauf der Pfandverwertungsbetreibung aufzeigen<br>• Sie können die Rolle des Pfands im Betreibungsverfahren erläutern</div>
<div class="hl"><strong>Keine Pfändung</strong> nötig — Pfand wird direkt verwertet. Gläubiger darf nie eigenmächtig verwerten!</div>
<div style="display:flex;gap:8px;margin:12px 0 4px"><button style="font-size:11px;padding:4px 10px" onclick="this.parentElement.nextElementSibling.querySelectorAll('.tl-item').forEach(i=>i.classList.add('open'))">Alle aufklappen</button><button style="font-size:11px;padding:4px 10px" onclick="this.parentElement.nextElementSibling.querySelectorAll('.tl-item').forEach(i=>i.classList.remove('open'))">Alle schliessen</button></div>
<div class="tl">
<div class="tl-item"><div class="tl-num tl-num-p">1</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Begehren mit Pfandangabe <span class="b bp">Artikel 151</span></div><div class="tl-merksatz">«Pfand gleich angeben — sonst wird normal betrieben.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body">Gläubiger muss Pfandgegenstand bereits im Begehren angeben.</div><div class="merksatz">Merke: Wer ein Pfand hat, muss das von Anfang an sagen.</div></div></div>
<div class="tl-item"><div class="tl-num tl-num-p">2</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Längere Zahlungsfristen <span class="b bp">Artikel 152</span></div><div class="tl-merksatz">«Faustpfand = 1 Monat. Grundpfand = 6 Monate.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-sub"><div class="c cp"><div class="ct2">Faustpfand</div><div class="cd"><span class="b bp">1 Monat</span> Zahlungsfrist. Verwertung: maximal <span class="b bp">1 Jahr</span> <span class="b bp">Artikel 154</span>.</div></div><div class="c cp"><div class="ct2">Grundpfand</div><div class="cd"><span class="b bp">6 Monate</span> Zahlungsfrist. Verwertung: maximal <span class="b bp">2 Jahre</span> <span class="b bp">Artikel 154</span>.</div></div></div><div class="merksatz">Merke: Grundpfand = halbes Jahr. Kein Wunder — man verliert potenziell sein Haus.</div></div></div>
<div class="tl-item"><div class="tl-num tl-num-p">3</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Direkt zur Verwertung</div><div class="tl-merksatz">«Keine Pfändung nötig — das Pfand ist ja schon da.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body">Pfand wird direkt durch das Betreibungsamt verwertet. Gläubiger muss sich mit dem Erlös zufriedengeben.</div><div class="merksatz">Merke: Pfandverwertung ist der kürzeste Weg — das Pfand ist schon gesichert.</div></div></div>
<div class="tl-item"><div class="tl-num tl-num-r">!</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Pfandausfallschein <span class="b br">Artikel 158</span></div><div class="tl-merksatz">«Pfand reicht nicht? Dann weiter mit normaler Betreibung.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body">Innert <span class="b br">1 Monat</span> direkt Fortsetzungsbegehren. Gilt als Schuldanerkennung <span class="b br">Artikel 158 Absatz 3</span>. 20 Jahre gültig.</div><div class="merksatz">Merke: Der Pfandausfallschein ist die Brücke zur normalen Betreibung.</div></div></div>
</div></div>

<div class="sec" id="konk"><h1>Betreibung auf Konkurs</h1><p class="sub">Generalexekution — gesamtes Vermögen</p>
<div class="hlbl"><strong>Lernziele:</strong><br>• Sie können den Konkursablauf (Konkurseröffnung bis Schluss) erklären<br>• Sie können die drei Konkursklassen und deren Rangfolge aufzählen<br>• Sie können den Unterschied zwischen ordentlichem und summarischem Konkurs benennen</div>
<div class="sp" id="ksp"></div><div id="kst"></div>
<div class="sn"><button id="kpv" onclick="kG(-1)">Zurück</button><button class="bp1" id="knx" onclick="kG(1)">Weiter</button></div></div>

<div class="sec" id="sich"><h1>Sicherungsmittel</h1><p class="sub">Artikel 163ff. StGB = strafbar!</p>
<div class="hlbl"><strong>Lernziele:</strong><br>• Sie können die verschiedenen Sicherungsmittel (Arrest, Retentionsrecht, Paulianische Anfechtung) erklären<br>• Sie können die strafrechtlichen Konsequenzen von Vermögensverschleierung benennen</div>
<div style="display:flex;gap:8px;margin:12px 0 4px"><button style="font-size:11px;padding:4px 10px" onclick="this.parentElement.nextElementSibling.querySelectorAll('.tl-item').forEach(i=>i.classList.add('open'))">Alle aufklappen</button><button style="font-size:11px;padding:4px 10px" onclick="this.parentElement.nextElementSibling.querySelectorAll('.tl-item').forEach(i=>i.classList.remove('open'))">Alle schliessen</button></div>
<div class="tl">
<div class="tl-item"><div class="tl-num tl-num-r">1</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Arrest <span class="b br">Artikel 271ff.</span></div><div class="tl-merksatz">«Der Arrest kommt überfallartig — sogar nachts und am Wochenende.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body">Beschlagnahme <strong>vor</strong> dem Vollstreckungsverfahren. Auch nachts/Wochenende. Kein «Sucharrest»!</div><div class="tl-sub"><div class="c cr"><div class="ct2">Arrestgründe (einer genügt)</div><div class="cd">1. Kein Wohnsitz · 2. Flucht · 3. Ausländerarrest · 4. Durchreise · 5. Verlustschein · 6. Definitiver Rechtsöffnungstitel</div></div></div><div class="tl-highlight">Innert <span class="b br">10 Tagen</span> Betreibung einleiten <span class="b br">Artikel 279</span>!</div><div class="merksatz">Merke: Arrest = Pfändung vorwegnehmen. Aber 10 Tage zum Betreiben — sonst verfällt er!</div></div></div>
<div class="tl-item"><div class="tl-num tl-num-a">2</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Retentionsrecht <span class="b ba">Artikel 283ff.</span></div><div class="tl-merksatz">«Der Vermieter behält die Möbel — aber nur bei Geschäftsräumen.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body">Nur <strong>Geschäftsräume</strong>. Bewegliche Gegenstände zurückbehalten. Innert <span class="b ba">10 Tagen</span> Pfandverwertung einleiten.</div><div class="merksatz">Merke: Nur Geschäftsräume — bei Privatwohnungen gibt es kein Retentionsrecht!</div></div></div>
<div class="tl-item"><div class="tl-num tl-num-p">3</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Anfechtungsklagen <span class="b bp">Artikel 285ff.</span></div><div class="tl-merksatz">«Geschenke vor dem Konkurs? Bis 5 Jahre zurückholbar.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body">Voraussetzung: Verlustschein nötig.</div><div class="tl-sub"><div class="c ca"><div class="ct2">Schenkung <span class="b bb">Artikel 286</span></div><div class="cd"><span class="b bb">1 Jahr</span> zurück.</div></div><div class="c cm"><div class="ct2">Überschuldung <span class="b ba">Artikel 287</span></div><div class="cd"><span class="b ba">1 Jahr</span> zurück.</div></div><div class="c cr"><div class="ct2">Delikt <span class="b br">Artikel 288</span></div><div class="cd"><span class="b br">5 Jahre</span> zurück!</div></div></div><div class="merksatz">Merke: 1 Jahr bei Schenkungen — aber ganze 5 Jahre bei Absicht!</div></div></div>
</div></div>

<div class="sec" id="schkg_ueb"><h1>Interaktive Übungen</h1><p class="sub">Wähle eine Übung und teste dein Wissen</p>

<div id="schkg_ueb_sel">
<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:12px;margin:16px 0">
<div class="c ck" onclick="schkgShowUeb(1)" style="text-align:center;padding:24px 16px"><div style="font-size:18px;font-weight:700;color:var(--g);margin-bottom:6px">📋</div><div class="ct2">Fallbeispiele</div><div class="cd">Fälle mit Toggle-Lösung</div></div>
<div class="c ck" onclick="schkgShowUeb(2)" style="text-align:center;padding:24px 16px"><div style="font-size:18px;font-weight:700;color:var(--bl);margin-bottom:6px">🔀</div><div class="ct2">Zuordnung</div><div class="cd">Betreibungsart bestimmen</div></div>
<div class="c ck" onclick="schkgShowUeb(3)" style="text-align:center;padding:24px 16px"><div style="font-size:18px;font-weight:700;color:var(--ac);margin-bottom:6px">✓✗</div><div class="ct2">Richtig / Falsch</div><div class="cd">Aussagen beurteilen</div></div>
<div class="c ck" onclick="schkgShowUeb(4)" style="text-align:center;padding:24px 16px"><div style="font-size:18px;font-weight:700;color:var(--pr);margin-bottom:6px">§</div><div class="ct2">Artikel zuordnen</div><div class="cd">Welcher SchKG-Artikel?</div></div>
<div class="c ck" onclick="schkgShowUeb(5)" style="text-align:center;padding:24px 16px"><div style="font-size:18px;font-weight:700;color:var(--am);margin-bottom:6px">🎯</div><div class="ct2">Multiple Choice</div><div class="cd">Wissen testen</div></div>
</div></div>

<div id="schkg_ueb1" style="display:none">
<button onclick="schkgShowUeb(0)" style="margin-bottom:16px;font-size:12px">← Zurück zur Auswahl</button>
<h2>Fallbeispiele</h2><p class="sub">Lies den Fall, schreibe deine Antwort, dann prüfe die Lösung</p>
<div id="schkg_fall_wrap"></div>
<div style="margin:16px 0;display:flex;gap:8px;flex-wrap:wrap">
<button class="bp1" onclick="schkgShowFallSol()">Lösung anzeigen</button>
<button onclick="schkgNextFall()">Nächster Fall →</button>
<button onclick="schkgResetFall()" style="font-size:12px">Zurücksetzen</button>
</div>
<div id="schkg_fall_sol" style="display:none;margin-top:12px"></div>
</div>

<div id="schkg_ueb2" style="display:none">
<button onclick="schkgShowUeb(0)" style="margin-bottom:16px;font-size:12px">← Zurück zur Auswahl</button>
<h2>Zuordnung — Betreibungsart bestimmen</h2><p class="sub">Wähle für jeden Fall die richtige Betreibungsart</p>
<div id="schkg_zuord_wrap"></div>
<div style="margin:16px 0;display:flex;gap:8px;flex-wrap:wrap">
<button class="bp1" onclick="schkgCheckZuord()">Korrigieren</button>
<button onclick="schkgNextZuord()">Neue Aufgaben</button>
<button onclick="schkgResetZuord()" style="font-size:12px">Zurücksetzen</button>
</div>
<div id="schkg_zuord_res" style="margin-top:8px"></div>
</div>

<div id="schkg_ueb3" style="display:none">
<button onclick="schkgShowUeb(0)" style="margin-bottom:16px;font-size:12px">← Zurück zur Auswahl</button>
<h2>Richtig oder Falsch?</h2><p class="sub">Beurteile die Aussagen zum SchKG</p>
<div id="schkg_rf_wrap"></div>
<div style="margin:16px 0;display:flex;gap:8px;flex-wrap:wrap">
<button class="bp1" onclick="schkgCheckRF()">Korrigieren</button>
<button onclick="schkgNextRF()">Neue Aussagen</button>
<button onclick="schkgResetRF()" style="font-size:12px">Zurücksetzen</button>
</div>
<div id="schkg_rf_res" style="margin-top:8px"></div>
</div>

<div id="schkg_ueb4" style="display:none">
<button onclick="schkgShowUeb(0)" style="margin-bottom:16px;font-size:12px">← Zurück zur Auswahl</button>
<h2>Gesetzesartikel zuordnen</h2><p class="sub">Welcher SchKG-Artikel passt?</p>
<div id="schkg_art_wrap"></div>
<div style="margin:16px 0;display:flex;gap:8px;flex-wrap:wrap">
<button class="bp1" onclick="schkgCheckArt()">Korrigieren</button>
<button onclick="schkgNextArt()">Neue Aufgaben</button>
<button onclick="schkgResetArt()" style="font-size:12px">Zurücksetzen</button>
</div>
<div id="schkg_art_res" style="margin-top:8px"></div>
</div>

<div id="schkg_ueb5" style="display:none">
<button onclick="schkgShowUeb(0)" style="margin-bottom:16px;font-size:12px">← Zurück zur Auswahl</button>
<h2>Multiple Choice</h2><p class="sub">Wähle die richtige Antwort</p>
<div id="schkg_mc_wrap"></div>
<div style="margin:16px 0;display:flex;gap:8px;flex-wrap:wrap">
<button class="bp1" onclick="schkgCheckMC()">Korrigieren</button>
<button onclick="schkgNextMC()">Nächste Frage</button>
<button onclick="schkgResetMC()" style="font-size:12px">Zurücksetzen</button>
</div>
<div id="schkg_mc_res" style="margin-top:8px"></div>
</div>

</div>

<div class="sec" id="mind"><h1>Zusammenfassung</h1><p class="sub">Visuelle Übersichten — zum schnellen Repetieren</p>

<!-- MINDMAP 0: Grundlagen & Organisation -->
<h2>Grundlagen &amp; Organisation</h2>
<div class="mm">
<div class="mm-center"><div class="mm-hub" style="border-color:var(--ac);color:var(--ac);background:var(--al)">SchKG — Grundlagen</div></div>
<div class="mm-branches">
<div class="mm-branch" style="background:var(--al);border:1.5px solid var(--ac)">
<h3 style="color:var(--ac)">Zweck</h3>
<ul style="color:var(--ac)">
<li>Zwangsweise Eintreibung von <strong>Geldforderungen</strong></li>
<li>Mithilfe des Staates (Betreibungsorgane + Gerichte)</li>
<li>Nur gegen <strong>Vermögen</strong>, nie gegen die Person</li>
<li>Für nicht-monetäre Ansprüche → ZPO</li>
<li>Bundesgesetz seit 1889, ganze CH einheitlich</li>
</ul>
</div>
<div class="mm-branch" style="background:var(--s2);border:1.5px solid var(--tx3)">
<h3>Organisation</h3>
<ul>
<li><strong>Betreibungskreis</strong> = meist 1 Gemeinde <span class="b bb">Art. 2 Abs. 1</span></li>
<li><strong>Konkurskreis</strong> = mehrere Gemeinden <span class="b bb">Art. 2 Abs. 2</span></li>
<li>Aufsicht: Bezirksgericht → Kantonsgericht → Bundesgericht</li>
<li>Beschwerde innert <strong>10 Tage</strong> <span class="b bb">Art. 17</span></li>
</ul>
</div>
<div class="mm-branch" style="background:var(--aml);border:1.5px solid var(--am)">
<h3 style="color:var(--am)">Betreibungsort</h3>
<ul style="color:var(--am)">
<li>Nat. Personen: <strong>Wohnsitz</strong> <span class="b ba">Art. 46</span></li>
<li>Juristische Personen: <strong>Hauptsitz</strong> (nie Zweigniederlassung!)</li>
<li>Grundpfand: Ort des Grundstücks</li>
<li>Faustpfand: Wohnsitz oder Ort des Pfands</li>
<li><strong>Zwingend</strong>, vertraglich nicht änderbar</li>
</ul>
</div>
</div>
</div>

<div class="mm" style="margin-top:16px">
<div class="mm-branches">
<div class="mm-branch" style="background:var(--rl);border:1.5px solid var(--r)">
<h3 style="color:var(--r)">Schonzeiten</h3>
<ul style="color:var(--r)">
<li><strong>Geschlossene Zeiten:</strong> 20–7 Uhr, So + Feiertage (Sa NICHT!) <span class="b br">Art. 56 Ziff. 1+2</span></li>
<li><strong>Betreibungsferien:</strong> 7 T. vor/nach Ostern + Weihnachten, 15.–31. Juli <span class="b br">Art. 56 Ziff. 2</span></li>
<li><strong>Rechtsstillstand:</strong> Militärdienst <span class="b br">Art. 57</span>, Todesfall <span class="b br">Art. 58–59</span>, Haft <span class="b br">Art. 60</span>, Krankheit <span class="b br">Art. 61</span>, Notzustand <span class="b br">Art. 62</span></li>
<li>Hemmen Fristenlauf <strong>nicht</strong>, aber Fristende in Schonzeit → 3. Werktag</li>
</ul>
</div>
<div class="mm-branch" style="background:var(--gl);border:1.5px solid var(--g)">
<h3 style="color:var(--g)">Kosten &amp; Register</h3>
<ul style="color:var(--g)">
<li>Kosten zulasten Schuldner, <strong>Gläubiger schiesst vor</strong></li>
<li>Gebühren gem. <strong>GebV</strong> (bundesrechtlich)</li>
<li>Betreibungsregister: glaubhaftes Interesse <span class="b bgreen">Art. 8a</span></li>
<li>Einträge <strong>5 Jahre</strong> sichtbar</li>
<li>Fristen: Tag nach Zustellung, Mitternacht <span class="b bgreen">Art. 31</span></li>
</ul>
</div>
</div>
</div>

<!-- MINDMAP: Einleitungsverfahren -->
<h2>Einleitungsverfahren — Die 4 Schritte</h2>
<div class="mm">
<div class="mm-center"><div class="mm-hub" style="border-color:var(--ac);color:var(--ac);background:var(--al)">Einleitungsverfahren</div></div>
<div class="mm-branches">
<div class="mm-branch" style="background:var(--s2);border:1.5px solid var(--tx3)">
<h3>1. Betreibungsbegehren</h3>
<ul>
<li>Gläubiger → Betreibungsamt <span class="b bb">Art. 67</span></li>
<li>Schriftlich / mündlich / online</li>
<li>Name, Wohnort, Forderungssumme</li>
<li>+ Kostenvorschuss</li>
</ul>
</div>
<div class="mm-branch" style="background:var(--al);border:1.5px solid var(--ac)">
<h3 style="color:var(--ac)">2. Zahlungsbefehl</h3>
<ul style="color:var(--ac)">
<li>Amt erlässt (ohne Forderungsprüfung!) <span class="b bb">Art. 69</span></li>
<li>Persönliche Zustellung <span class="b bb">Art. 72</span></li>
<li>Doppel an Gläubiger <span class="b bb">Art. 70</span></li>
<li><strong>20 Tage</strong> zahlen oder <strong>10 Tage</strong> Rechtsvorschlag</li>
</ul>
</div>
<div class="mm-branch" style="background:var(--aml);border:1.5px solid var(--am)">
<h3 style="color:var(--am)">3. Rechtsvorschlag</h3>
<ul style="color:var(--am)">
<li>Innert <strong>10 Tage</strong> <span class="b ba">Art. 74</span></li>
<li>Mündlich oder schriftlich</li>
<li>Keine Begründung nötig</li>
<li>→ Betreibung steht <strong>still</strong> <span class="b ba">Art. 78</span></li>
<li>Einsicht Forderungstitel <span class="b ba">Art. 73</span></li>
</ul>
</div>
<div class="mm-branch" style="background:var(--pl);border:1.5px solid var(--pr)">
<h3 style="color:var(--pr)">4. Rechtsöffnung</h3>
<ul style="color:var(--pr)">
<li><strong>Provisorisch</strong>: Schuldanerkennung <span class="b bp">Art. 82</span></li>
<li>→ wird nach 20 Tage definitiv <span class="b bp">Art. 83 Abs. 3</span></li>
<li><strong>Definitiv</strong>: Urteil/Vergleich/Verfügung <span class="b bp">Art. 80</span></li>
<li>Einwände nur: Zahlung/Stundung/Verjährung <span class="b bp">Art. 81</span></li>
<li>Ohne Urkunden: Anerkennungsklage <span class="b bp">Art. 79</span></li>
</ul>
</div>
</div>
</div>
<div class="hl" style="margin-top:10px"><strong>Danach:</strong> Fortsetzungsbegehren <span class="b bb">Art. 88</span> — frühestens 20 Tage, spätestens 1 Jahr nach Zahlungsbefehl.</div>

<!-- MINDMAP: Betreibungsarten (aus Notiz) -->
<h2>Betreibungsarten — Vergleich</h2>
<div class="mm">
<div class="mm-center"><div class="mm-hub" style="border-color:var(--tx);color:var(--tx);background:var(--s2)">Betreibungsarten</div></div>
<div class="mm-branches">
<div class="mm-branch" style="background:var(--al);border:1.5px solid var(--ac)">
<h3 style="color:var(--ac)">Auf Pfändung</h3>
<ul style="color:var(--ac)">
<li>Natürliche Personen <strong>nicht im HR</strong></li>
<li>Nur so viel gepfändet wie nötig</li>
<li>Jeder Gläubiger geht <strong>einzeln</strong> vor</li>
<li>«Der Schnellere gewinnt»</li>
<li>Auch für Unterhaltsbeiträge <span class="b bb">Art. 43</span></li>
</ul>
<div class="mm-tag" style="background:var(--rl);color:var(--r)">= SPEZIALEXEKUTION</div>
</div>
<div class="mm-branch" style="background:var(--gl);border:1.5px solid var(--g)">
<h3 style="color:var(--g)">Auf Konkurs</h3>
<ul style="color:var(--g)">
<li>Alle (jur. + nat.) Personen <strong>im HR</strong> <span class="b bgreen">Art. 39</span></li>
<li><strong>Gesamtes Vermögen</strong> verwertet</li>
<li>Alle Gläubiger gehen <strong>gemeinsam</strong> vor</li>
<li>HR-Eintrag wird gelöscht</li>
<li>Auch private Schulden!</li>
</ul>
<div class="mm-tag" style="background:var(--rl);color:var(--r)">= GENERALEXEKUTION</div>
</div>
<div class="mm-branch" style="background:var(--pl);border:1.5px solid var(--pr)">
<h3 style="color:var(--pr)">Auf Pfandverwertung</h3>
<ul style="color:var(--pr)">
<li>Wenn schon ein <strong>Pfand</strong> vorhanden <span class="b bp">Art. 151</span></li>
<li>Faust- oder Grundpfand</li>
<li>Nur das Pfand wird verwertet</li>
<li>Nur Pfandgläubiger allein</li>
<li>Längere Zahlungsfristen <span class="b bp">Art. 152</span></li>
</ul>
</div>
</div>
</div>

<!-- MINDMAP: Pfändung vs. Pfandverwertung (aus Notiz) -->
<h2>Pfändung vs. Pfandverwertung — Ablauf</h2>
<div class="mm">
<div class="mm-branches">
<div class="mm-branch" style="background:var(--al);border:1.5px solid var(--ac);flex:1.2">
<h3 style="color:var(--ac)">Pfändung</h3>
<ul style="color:var(--ac)">
<li><strong>Fortsetzungsbegehren</strong> stellen <span class="b bb">Art. 88</span></li>
<li>Pfändungsankündigung <span class="b bb">Art. 90</span></li>
<li><strong>Pfändung</strong> (bewegl. → Grundstücke → Drittes) <span class="b bb">Art. 95</span></li>
<li>Pfändungsurkunde <span class="b bb">Art. 112</span></li>
<li><strong>Verwertungsbegehren</strong> <span class="b bb">Art. 116</span></li>
<li>Verwertung + Verteilung <span class="b bb">Art. 125</span></li>
</ul>
<div class="c cr" style="margin-top:12px;padding:10px 14px"><div class="ct2" style="font-size:13px">Wenn's nicht reicht:</div>
<div class="cd" style="font-size:12px"><strong>Pfändungsverlustschein</strong> <span class="b br">Art. 149</span><br>— gilt als Schuldanerkennung<br>— 20 Jahre gültig<br>— unverzinslich</div></div>
<div class="c" style="margin-top:6px;padding:8px 14px;font-size:12px;color:var(--tx2)"><span class="b ba">6 Monate</span> direkt neues Fortsetzungsbegehren</div>
</div>
<div class="mm-branch" style="background:var(--gl);border:1.5px solid var(--g);flex:1">
<h3 style="color:var(--g)">Pfandverwertung</h3>
<ul style="color:var(--g)">
<li><strong>Direkt</strong> zum Verwertungsbegehren</li>
<li><span class="b bgreen">1 Monat</span> Frist Faustpfand <span class="b bgreen">Art. 152</span></li>
<li><span class="b bgreen">6 Monate</span> Frist Grundpfand</li>
<li>Verwertungsbegehren <span class="b bgreen">Art. 154</span></li>
<li>Verwerten + Verteilen</li>
</ul>
<div class="c cr" style="margin-top:12px;padding:10px 14px"><div class="ct2" style="font-size:13px">Wenn Pfand zu wenig gibt:</div>
<div class="cd" style="font-size:12px"><strong>Pfandausfallschein</strong> <span class="b br">Art. 158</span><br>— Schuldanerkennung<br>— 20 Jahre gültig<br>— unverzinslich<br>— → dann Pfändung oder Konkurs</div></div>
</div>
</div>
</div>

<!-- MINDMAP: Konkurs -->
<h2>Betreibung auf Konkurs</h2>
<div class="mm">
<div class="mm-center"><div class="mm-hub" style="border-color:var(--r);color:var(--r);background:var(--rl)">Konkurs</div></div>
<div class="mm-branches">
<div class="mm-branch" style="background:var(--rl);border:1.5px solid var(--r)">
<h3 style="color:var(--r)">Ablauf (ordentlich)</h3>
<ul style="color:var(--r)">
<li>Konkursandrohung (20 Tage Frist) <span class="b br">Art. 159</span></li>
<li>Eventuell Güterverzeichnis (4 Monate) <span class="b br">Art. 162–165</span></li>
<li>Konkursbegehren (15 Monate) <span class="b br">Art. 166</span></li>
<li>Konkurserkenntnis <span class="b br">Art. 175</span></li>
<li>Konkursverfahren <span class="b br">Art. 221ff.</span></li>
</ul>
</div>
<div class="mm-branch" style="background:var(--aml);border:1.5px solid var(--am)">
<h3 style="color:var(--am)">Ohne Betreibung möglich</h3>
<ul style="color:var(--am)">
<li>Privatkonkurs (Insolvenzerklärung) <span class="b ba">Art. 191</span></li>
<li>Überschuldung AG/GmbH <span class="b ba">Art. 192</span></li>
<li>Gläubigerantrag bei Flucht <span class="b ba">Art. 190</span></li>
<li>Ausgeschlagene Erbschaft <span class="b ba">Art. 193</span></li>
</ul>
</div>
<div class="mm-branch" style="background:var(--pl);border:1.5px solid var(--pr)">
<h3 style="color:var(--pr)">Kollokationsplan <span class="b bp">Art. 219</span></h3>
<ul style="color:var(--pr)">
<li>Zuerst: pfandgesicherte Forderungen</li>
<li><strong>1. Klasse:</strong> Arbeitnehmer, Alimente, PK, UV</li>
<li><strong>2. Klasse:</strong> AHV/IV/ALV, KK</li>
<li><strong>3. Klasse:</strong> alle übrigen</li>
</ul>
</div>
</div>
</div>
<div class="mm" style="margin-top:10px">
<div class="mm-branches">
<div class="mm-branch" style="background:var(--gl);border:1.5px solid var(--g)">
<h3 style="color:var(--g)">Konkursverlustschein <span class="b bgreen">Art. 265</span></h3>
<ul style="color:var(--g)">
<li>Milder als Pfändungsverlustschein!</li>
<li>Schuldanerkennung nur wenn <strong>ausdrücklich anerkannt</strong></li>
<li>Nur betreibbar bei <strong>neuem Vermögen</strong></li>
<li>Verjährung: 20 Jahre</li>
<li>Juristische Personen → gelöscht (nur Verlustausweis)</li>
</ul>
</div>
<div class="mm-branch" style="background:var(--s2);border:1.5px solid var(--tx3)">
<h3>3 Verfahrensarten</h3>
<ul>
<li><strong>Einstellung mangels Aktiven</strong> <span class="b bb">Art. 230</span></li>
<li><strong>Summarisches Verfahren</strong> (1 Monat Frist) <span class="b bb">Art. 231</span></li>
<li><strong>Ordentliches Verfahren</strong> (selten) <span class="b bb">Art. 232ff.</span></li>
<li>Juristische Personen werden immer gelöscht</li>
</ul>
</div>
</div>
</div>

<!-- MINDMAP: Sicherungsmittel (aus Notiz) -->
<h2>Sicherungsmittel im SchKG</h2>
<div class="mm">
<div class="mm-branches">
<div class="mm-branch" style="background:var(--al);border:1.5px solid var(--ac)">
<h3 style="color:var(--ac)">1. Arrest <span class="b bb">Art. 271ff.</span></h3>
<div class="cd" style="margin-bottom:10px">= Eilmässige Beschlagnahme von Vermögen. Wird blockiert bis Pfändung greift.</div>
<div class="c" style="padding:10px 14px;margin-bottom:8px"><div class="ct2" style="font-size:12px">Voraussetzungen:</div>
<div class="cd" style="font-size:12px">— fällige Forderung<br>— kein Pfand<br>— Vermögen in der Schweiz</div></div>
<div class="c" style="padding:10px 14px;margin-bottom:8px"><div class="ct2" style="font-size:12px">Arrestgrund (einer genügt):</div>
<div class="cd" style="font-size:12px">1. Kein fester Wohnsitz<br>2. «Flucht»<br>3. Ausländerarrest<br>4. Auf Durchreise<br>5. Verlustschein<br>6. Definitiver Rechtsöffnungstitel (= Urteil)</div></div>
<div class="hlr" style="padding:10px 14px;font-size:12px"><strong>Arrestvollzug → Arresturkunde</strong><br>Dann innert <span class="b br">10 Tagen</span> betreiben! <span class="b bb">Art. 279</span></div>
</div>
<div class="mm-branch" style="background:var(--gl);border:1.5px solid var(--g)">
<h3 style="color:var(--g)">2. Retentionsrecht <span class="b bgreen">Art. 283ff.</span></h3>
<div class="cd">Bei <strong>Miete von Geschäftsräumen</strong>. Vermieter kann bewegliche Gegenstände zurückbehalten zur Sicherung der Mietzinse.</div>
<div class="hla" style="margin-top:10px;padding:10px 14px;font-size:12px">Innert <span class="b ba">10 Tagen</span> Betreibung auf Pfandverwertung.</div>
</div>
<div class="mm-branch" style="background:var(--pl);border:1.5px solid var(--pr)">
<h3 style="color:var(--pr)">3. Anfechtungsklagen <span class="b bp">Art. 285ff.</span></h3>
<div class="cd" style="margin-bottom:10px">Privat mit Verlustschein oder Konkursverwaltung.</div>
<div class="c" style="padding:10px 14px;margin-bottom:6px"><div class="cd" style="font-size:12px"><span class="b bb">1.</span> <strong>Schenkungsanfechtung</strong> <span class="b ba">Art. 286</span><br>→ <span class="b ba">1 Jahr</span> zurück</div></div>
<div class="c" style="padding:10px 14px;margin-bottom:6px"><div class="cd" style="font-size:12px"><span class="b bb">2.</span> <strong>Überschuldungsanfechtung</strong> <span class="b ba">Art. 287</span><br>→ <span class="b ba">1 Jahr</span> zurück</div></div>
<div class="c cr" style="padding:10px 14px"><div class="cd" style="font-size:12px"><span class="b br">3.</span> <strong>Delikts-/Absichtsanfechtung</strong> <span class="b br">Art. 288</span><br>→ <span class="b br">5 Jahre</span> zurück</div></div>
</div>
</div>
</div>

<!-- MINDMAP: Unpfändbarkeit -->
<h2>Unpfändbare Gegenstände</h2>
<div class="mm">
<div class="mm-branches">
<div class="mm-branch" style="background:var(--rl);border:1.5px solid var(--r);flex:1.3">
<h3 style="color:var(--r)">Absolut unpfändbar — Kompetenzstücke <span class="b br">Art. 92</span></h3>
<ul style="color:var(--r)">
<li>Lebensnotwendiges (Kleider, Bett, Tisch)</li>
<li>Berufswerkzeuge (nicht Unternehmerausrüstung!)</li>
<li>Eigentum Dritter / Eigentumsvorbehalt</li>
<li>Religiöse Gegenstände (wenn benutzt)</li>
<li>Haustiere (nicht Erwerbszweck)</li>
<li>AHV/IV/EL-Renten, Unfall-/Militärversicherung</li>
<li>Sold, Bewaffnung Wehrleute</li>
<li>Genugtuung, Heilungskosten</li>
</ul>
<div class="hla" style="margin-top:8px;padding:8px 12px;font-size:12px"><strong>Auswechslungsrecht</strong> <span class="b ba">Art. 92 Abs. 3</span>: Gläubiger bietet billigeren Ersatz → pfändet teureres</div>
</div>
<div class="mm-branch" style="background:var(--aml);border:1.5px solid var(--am)">
<h3 style="color:var(--am)">Beschränkt pfändbar <span class="b ba">Art. 93</span></h3>
<ul style="color:var(--am)">
<li><strong>Lohn</strong> bis Existenzminimum</li>
<li>Max. <strong>1 Jahr</strong> <span class="b ba">Art. 93 Abs. 2</span></li>
<li>BVG, UVG, ALV, EO-Leistungen</li>
<li>Existenzminimum: individuell, kantonal</li>
<li>= Grundbetrag + Miete + Heizung</li>
<li>Ehepartner-Einkommen wird angerechnet</li>
</ul>
</div>
</div>
</div>

</div>

<div class="sec" id="kart"><h1>Karteikarten</h1><p class="sub"><span id="fcCount">50</span> Karten — klicke zum Umdrehen</p>
<div class="fcc" id="fcc"></div>

<div class="fd"><div class="fc" id="fc" onclick="this.classList.toggle('fl')"><div class="ff ffr"><div class="fq" id="fcq"></div><div class="fh">Klicke zum Umdrehen</div></div><div class="ff ffb"><div class="fa" id="fca"></div></div></div></div>
<div class="fb"><button onclick="fP()">Zurück</button><button onclick="fS()">Mischen</button><button class="bp1" onclick="fN()">Nächste</button></div>
<div style="text-align:center;margin-top:10px;font-size:11px;color:var(--tx3)" id="fcPool"></div>
<div id="fcList" style="display:none;margin-top:16px"></div>
</div>

<div class="sec" id="quiz"><h1>Quiz</h1><p class="sub">Alle Fragen werden wiederholt bis du sie kannst</p>

<div id="qStats" style="margin-bottom:20px">
<div style="display:flex;gap:8px;margin-bottom:14px;flex-wrap:wrap">
<div class="qsc" style="flex:1;min-width:70px"><div class="qsn" id="qTotR" style="color:var(--g)">0</div><div class="qsl">Total richtig</div></div>
<div class="qsc" style="flex:1;min-width:70px"><div class="qsn" id="qTotW" style="color:var(--r)">0</div><div class="qsl">Total falsch</div></div>
<div class="qsc" style="flex:1;min-width:70px"><div class="qsn" id="qTotP" style="color:var(--ac)">0%</div><div class="qsl">Erfolgsquote</div></div>
</div>
<div style="font-size:12px;color:var(--tx3);margin-bottom:6px">Lernerfolg</div>
<div style="display:flex;gap:4px;margin-bottom:4px;align-items:center"><div style="width:10px;height:10px;border-radius:50%;background:var(--g);flex-shrink:0"></div><div style="font-size:12px;color:var(--tx2);width:70px">Sicher</div><div style="flex:1;height:8px;background:var(--s2);border-radius:4px;overflow:hidden"><div id="barG" style="height:100%;background:var(--g);border-radius:4px;transition:width .5s;width:0%"></div></div><div style="font-size:12px;color:var(--tx2);width:30px;text-align:right" id="barGn">0</div></div>
<div style="display:flex;gap:4px;margin-bottom:4px;align-items:center"><div style="width:10px;height:10px;border-radius:50%;background:var(--am);flex-shrink:0"></div><div style="font-size:12px;color:var(--tx2);width:70px">Wackelig</div><div style="flex:1;height:8px;background:var(--s2);border-radius:4px;overflow:hidden"><div id="barO" style="height:100%;background:var(--am);border-radius:4px;transition:width .5s;width:0%"></div></div><div style="font-size:12px;color:var(--tx2);width:30px;text-align:right" id="barOn">0</div></div>
<div style="display:flex;gap:4px;margin-bottom:4px;align-items:center"><div style="width:10px;height:10px;border-radius:50%;background:var(--r);flex-shrink:0"></div><div style="font-size:12px;color:var(--tx2);width:70px">Unsicher</div><div style="flex:1;height:8px;background:var(--s2);border-radius:4px;overflow:hidden"><div id="barR" style="height:100%;background:var(--r);border-radius:4px;transition:width .5s;width:0%"></div></div><div style="font-size:12px;color:var(--tx2);width:30px;text-align:right" id="barRn">0</div></div>
<div style="display:flex;gap:4px;align-items:center"><div style="width:10px;height:10px;border-radius:50%;background:var(--tx3);flex-shrink:0"></div><div style="font-size:12px;color:var(--tx2);width:70px">Noch offen</div><div style="flex:1;height:8px;background:var(--s2);border-radius:4px;overflow:hidden"><div id="barX" style="height:100%;background:var(--tx3);border-radius:4px;transition:width .5s;width:100%"></div></div><div style="font-size:12px;color:var(--tx2);width:30px;text-align:right" id="barXn">0</div></div>
</div>

<div class="pb"><div class="pf" id="qP"></div></div><div class="pt" id="qPT">Frage 1</div>

<div id="qC"></div>
<div style="text-align:center;margin-top:14px">
<button class="bp1" id="qN" onclick="qNx()" style="display:none">Nächste Frage</button>
<button class="bp1" id="qRS" onclick="qSt()" style="display:none">Weiter üben</button>
<button id="qReset" onclick="qReset()" style="display:none;margin-left:8px">Fortschritt zurücksetzen</button>
</div>
<div style="text-align:center;margin-top:12px;font-size:11px;color:var(--tx3)" id="qPoolSize"></div>
<div style="text-align:center;margin-top:8px"><button onclick="togglePoolView()" id="poolToggle" style="font-size:12px;padding:6px 14px">Alle Fragen im Pool anzeigen</button></div>
<div id="qPoolList" style="display:none;margin-top:16px"></div>
</div>

<!-- SchKG GLOSSAR -->
<div class="sec" id="glossar">
<h1>Glossar — Recht 2</h1>
<p class="sub">Begriffe &amp; Abkürzungen im Schuldbetreibungs- und Konkursrecht</p>

<div style="font-size:13px;font-weight:600;letter-spacing:1px;text-transform:uppercase;color:var(--tx3);margin-bottom:14px">Abkürzungen</div>
<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:8px;margin-bottom:32px">
<div class="c" style="padding:12px 16px"><strong style="color:var(--ac)">SchKG</strong> <span style="color:var(--tx2)">— Schuldbetreibungs- und Konkursgesetz</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--ac)">HR</strong> <span style="color:var(--tx2)">— Handelsregister</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--ac)">ZPO</strong> <span style="color:var(--tx2)">— Zivilprozessordnung</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--ac)">BGE</strong> <span style="color:var(--tx2)">— Bundesgerichtsentscheid</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--ac)">AG</strong> <span style="color:var(--tx2)">— Aktiengesellschaft</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--ac)">GmbH</strong> <span style="color:var(--tx2)">— Gesellschaft mit beschränkter Haftung</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--ac)">KoVo</strong> <span style="color:var(--tx2)">— Kostenvorschuss</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--ac)">RÖ</strong> <span style="color:var(--tx2)">— Rechtsöffnung</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--ac)">BV</strong> <span style="color:var(--tx2)">— Bundesverfassung</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--ac)">OR</strong> <span style="color:var(--tx2)">— Obligationenrecht</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--ac)">AHV</strong> <span style="color:var(--tx2)">— Alters- und Hinterlassenenversicherung</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--ac)">IV</strong> <span style="color:var(--tx2)">— Invalidenversicherung</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--ac)">ALV</strong> <span style="color:var(--tx2)">— Arbeitslosenversicherung</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--ac)">BVG</strong> <span style="color:var(--tx2)">— Berufliche Vorsorge (Pensionskasse)</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--ac)">UVG</strong> <span style="color:var(--tx2)">— Unfallversicherungsgesetz</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--ac)">EO</strong> <span style="color:var(--tx2)">— Erwerbsersatzordnung</span></div>
</div>

<div style="font-size:13px;font-weight:600;letter-spacing:1px;text-transform:uppercase;color:var(--tx3);margin-bottom:14px">Fachbegriffe</div>
<div style="display:grid;grid-template-columns:1fr;gap:8px">
<div class="c" style="padding:14px 18px"><strong>Arrest</strong><br><span class="cd">Überfallartige, präventive Beschlagnahme von Vermögenswerten des Schuldners, bevor ein Vollstreckungsverfahren eingeleitet wird. Dient der Sicherung.</span></div>
<div class="c" style="padding:14px 18px"><strong>Betreibungsbegehren</strong><br><span class="cd">Antrag des Gläubigers beim Betreibungsamt, um das Verfahren zu starten. Kein Beweis der Forderung nötig.</span></div>
<div class="c" style="padding:14px 18px"><strong>Existenzminimum</strong><br><span class="cd">Betrag, der dem Schuldner zum Leben bleiben muss (Grundbedarf + Miete + Krankenkasse). Individuell berechnet, kantonal unterschiedlich.</span></div>
<div class="c" style="padding:14px 18px"><strong>Fortsetzungsbegehren</strong><br><span class="cd">Antrag des Gläubigers nach dem Einleitungsverfahren, um die eigentliche Vollstreckung (Pfändung/Konkurs) einzuleiten.</span></div>
<div class="c" style="padding:14px 18px"><strong>Generalexekution</strong><br><span class="cd">= Konkurs. Das gesamte Vermögen wird verwertet und auf alle Gläubiger verteilt.</span></div>
<div class="c" style="padding:14px 18px"><strong>Kollokationsplan</strong><br><span class="cd">Verteilungsplan im Konkurs: Bestimmt, welche Gläubiger in welcher Reihenfolge aus der Konkursmasse bezahlt werden (1.–3. Klasse).</span></div>
<div class="c" style="padding:14px 18px"><strong>Konkursmasse</strong><br><span class="cd">Das gesamte pfändbare Vermögen des Schuldners zum Zeitpunkt der Konkurseröffnung.</span></div>
<div class="c" style="padding:14px 18px"><strong>Pfändungsverlustschein</strong><br><span class="cd">Bescheinigung, dass die Forderung bei der Pfändung nicht gedeckt wurde. Gilt als Schuldanerkennung, 20 Jahre gültig, Arrestgrund.</span></div>
<div class="c" style="padding:14px 18px"><strong>Rechtsöffnung</strong><br><span class="cd">Gerichtliche Beseitigung des Rechtsvorschlags. Provisorisch (bei Schuldanerkennung) oder definitiv (bei Urteil/Verfügung).</span></div>
<div class="c" style="padding:14px 18px"><strong>Rechtsvorschlag</strong><br><span class="cd">Bestreitung der Forderung durch den Schuldner innert 10 Tagen. Stoppt die Betreibung. Keine Begründung nötig.</span></div>
<div class="c" style="padding:14px 18px"><strong>Retentionsrecht</strong><br><span class="cd">Recht des Vermieters von Geschäftsräumen, bewegliche Gegenstände des Mieters als Sicherheit zurückzuhalten.</span></div>
<div class="c" style="padding:14px 18px"><strong>Spezialexekution</strong><br><span class="cd">= Pfändung. Nur so viel Vermögen wird verwertet wie nötig. Nur beteiligte Gläubiger profitieren.</span></div>
<div class="c" style="padding:14px 18px"><strong>Zahlungsbefehl</strong><br><span class="cd">Amtliches Dokument, das den Schuldner auffordert, innert 20 Tagen zu zahlen oder innert 10 Tagen Rechtsvorschlag zu erheben.</span></div>
</div>
</div>


<!-- ======================================== -->`;

// Article Database (SchKG Gesetzesartikel)
const ART={
'2':['Artikel 2 SchKG — Betreibungs- und Konkurskreise','¹ Jeder Kanton bildet für die Zwangsvollstreckung einen oder mehrere Kreise.\n² Für die Konkurse werden besondere Kreise gebildet.','Jeder Kanton hat Betreibungskreise (meist je eine Gemeinde) und Konkurskreise (grössere Gebiete). Die Betreibungsbeamten und Konkursbeamten führen die jeweiligen Verfahren durch.'],
'8a':['Artikel 8a SchKG — Einsichtsrecht','¹ Jede Person, die ein Interesse glaubhaft macht, kann die Protokolle und Register des Betreibungsamtes einsehen und sich Auszüge daraus geben lassen.','Wer ein glaubhaftes Interesse nachweist (z.B. Vermieter vor Mietvertragsabschluss), darf ins Betreibungsregister schauen. Einträge bleiben 5 Jahre sichtbar.'],
'17':['Artikel 17 SchKG — Beschwerde','¹ Mit Ausnahme der Fälle, in denen dieses Gesetz den Weg der gerichtlichen Klage vorschreibt, kann gegen jede Verfügung eines Betreibungs- oder Konkursamtes bei der Aufsichtsbehörde wegen Gesetzesverletzung oder Unangemessenheit Beschwerde geführt werden.','Gegen Handlungen des Betreibungs- oder Konkursamtes kann man innert 10 Tagen bei der Aufsichtsbehörde Beschwerde einreichen.'],
'31':['Artikel 31 SchKG — Fristen','Die Fristen des SchKG können nicht geändert werden. Der Tag, an dem eine Frist zu laufen beginnt, wird nicht mitgezählt.','Fristen beginnen am Tag NACH der Zustellung. Der Zustellungstag selbst zählt nicht. Poststempel am letzten Tag genügt.'],
'38':['Artikel 38 SchKG — Betreibung','² Der Zahlungsbefehl bildet die Grundlage der Betreibung.','Der Zahlungsbefehl ist das zentrale Dokument. Ohne ihn kann keine Betreibung weitergeführt werden.'],
'39':['Artikel 39 SchKG — Konkursbetreibung','Die Betreibung auf Konkurs ist gegen jeden Schuldner zulässig, der als solcher im Handelsregister eingetragen ist.','Alle im Handelsregister eingetragenen Personen werden auf Konkurs betrieben — auch für rein private Schulden!'],
'43':['Artikel 43 SchKG — Betreibung auf Pfändung','Die Betreibung auf Pfändung findet statt, sofern nicht die Betreibung auf Konkurs (Art. 39) oder auf Pfandverwertung (Art. 151) erfolgt. Für familienrechtliche Unterhalts- und Unterstützungsbeiträge findet in jedem Fall die Betreibung auf Pfändung statt.','Wer nicht im HR ist, wird auf Pfändung betrieben. Unterhaltsbeiträge werden IMMER auf Pfändung betrieben, egal wer der Schuldner ist.'],
'46':['Artikel 46 SchKG — Betreibungsort','¹ Der Schuldner ist an seinem Wohnsitze zu betreiben.\n² Juristische Personen und Gesellschaften werden an ihrem Sitze betrieben.','Natürliche Personen betreibt man am Wohnsitz, juristische Personen am Hauptsitz. Dieser Ort ist zwingend — man kann ihn nicht vertraglich ändern.'],
'56':['Artikel 56 SchKG — Geschlossene Zeiten und Ferien','Es dürfen keine Betreibungshandlungen vorgenommen werden:\n1. in der Zeit zwischen 20 Uhr und 7 Uhr sowie an Sonntagen und staatlich anerkannten Feiertagen;\n2. während der Betreibungsferien, d.h. sieben Tage vor und sieben Tage nach Ostern und Weihnachten sowie vom 15. bis zum 31. Juli.','Betreibungshandlungen sind verboten: nachts (20–7 Uhr), an Sonntagen/Feiertagen, und während der Betreibungsferien (Ostern, Weihnachten je 7 Tage, 15.–31. Juli). ACHTUNG: Samstage sind erlaubt!'],
'67':['Artikel 67 SchKG — Betreibungsbegehren','¹ Das Betreibungsbegehren ist schriftlich oder mündlich an das Betreibungsamt zu richten. Dabei sind anzugeben: Name und Wohnort des Gläubigers und des Schuldners, die Forderungssumme, der Forderungsgrund.','Der Gläubiger startet die Betreibung mit einem Begehren beim Betreibungsamt. Braucht: Namen und Wohnort beider Parteien plus Forderungssumme. Geht schriftlich, mündlich oder online.'],
'69':['Artikel 69 SchKG — Zahlungsbefehl','¹ Das Betreibungsamt erlässt den Zahlungsbefehl sofort nach Eingang des Betreibungsbegehrens.\n² Der Zahlungsbefehl enthält die Aufforderung, innert 20 Tagen zu bezahlen, und die Androhung der Betreibungsfolgen bei Nichtbefolgung.','Das Amt erlässt den Zahlungsbefehl OHNE die Forderung zu prüfen. Der Schuldner hat 20 Tage zum Zahlen oder 10 Tage für einen Rechtsvorschlag.'],
'70':['Artikel 70 SchKG — Doppel','Das Betreibungsamt stellt dem Gläubiger ein Doppel des Zahlungsbefehls zu.','Der Gläubiger bekommt eine Kopie des Zahlungsbefehls.'],
'72':['Artikel 72 SchKG — Zustellung','Die Zustellung wird durch einen Angestellten des Amtes oder durch die Polizei vorgenommen.','Persönliche Zustellung — kein Einschreiben! Wird von einem Amtsangestellten oder der Polizei übergeben.'],
'73':['Artikel 73 SchKG — Einsicht in den Forderungstitel','Der Schuldner kann innert 10 Tagen nach Zustellung des Zahlungsbefehls Einsicht in den Forderungstitel verlangen.','Der Schuldner darf den Forderungstitel einsehen. Aber Achtung: Die Frist für den Rechtsvorschlag verlängert sich dadurch NICHT.'],
'74':['Artikel 74 SchKG — Rechtsvorschlag','¹ Will der Betriebene die Forderung bestreiten, so hat er innert 10 Tagen Rechtsvorschlag zu erheben.\n² Wird nur ein Teil der Forderung bestritten, so hat er den bestrittenen Betrag genau anzugeben.','Der Rechtsvorschlag ist die Notbremse des Schuldners. Innert 10 Tagen, mündlich oder schriftlich, ohne Begründung. Stoppt die Betreibung komplett.'],
'78':['Artikel 78 SchKG — Wirkung des Rechtsvorschlags','¹ Der Rechtsvorschlag bewirkt die Einstellung der Betreibung.','Rechtsvorschlag erhoben = Betreibung steht still. Der Gläubiger muss jetzt zum Gericht, um den Rechtsvorschlag beseitigen zu lassen.'],
'79':['Artikel 79 SchKG — Anerkennungsklage','Ein Gläubiger, gegen dessen Betreibung Rechtsvorschlag erhoben worden ist, hat seinen Anspruch im ordentlichen Prozess geltend zu machen.','Wenn der Gläubiger KEINEN Beweis hat (keinen Vertrag, kein Urteil), muss er den mühsamen Weg über einen ordentlichen Zivilprozess gehen.'],
'80':['Artikel 80 SchKG — Definitive Rechtsöffnung','¹ Beruht die Forderung auf einem vollstreckbaren gerichtlichen Entscheid, so kann der Gläubiger beim Richter die Aufhebung des Rechtsvorschlags (Rechtsöffnung) verlangen.','Hat der Gläubiger ein Gerichtsurteil, einen Vergleich oder eine Verwaltungsverfügung, kann er die definitive Rechtsöffnung verlangen. Schnellster und sicherster Weg.'],
'81':['Artikel 81 SchKG — Einwendungen bei definitiver Rechtsöffnung','Der Betriebene kann nur geltend machen, er habe die Schuld bezahlt, es sei ihm Stundung gewährt worden, oder die Schuld sei verjährt.','Bei der definitiven Rechtsöffnung kann der Schuldner fast nichts mehr einwenden — nur noch: bereits bezahlt, gestundet, oder verjährt.'],
'82':['Artikel 82 SchKG — Provisorische Rechtsöffnung','¹ Hat der Gläubiger eine durch Unterschrift bekräftigte Schuldanerkennung, so kann er die provisorische Rechtsöffnung verlangen.','Bei einer unterschriebenen Schuldanerkennung (Vertrag, Darlehensvertrag etc.) kann der Gläubiger die provisorische Rechtsöffnung verlangen. Wird nach 20 Tagen automatisch definitiv.'],
'83':['Artikel 83 SchKG — Aberkennungsklage','³ Unterlässt er dies (Aberkennungsklage innert 20 Tagen), so wird die provisorische Rechtsöffnung endgültig.','Nach der provisorischen Rechtsöffnung hat der Schuldner 20 Tage für eine Aberkennungsklage. Verpasst er die Frist, wird die Rechtsöffnung automatisch definitiv.'],
'85':['Artikel 85 SchKG — Aufhebung der Betreibung','Der Betriebene kann jederzeit vom Gericht feststellen lassen, dass die Schuld nicht besteht, getilgt oder gestundet ist.','Der Schuldner kann jederzeit vor Gericht beweisen, dass er die Schuld bereits bezahlt hat oder dass sie nicht existiert.'],
'86':['Artikel 86 SchKG — Rückforderungsklage','Hat der Betriebene die Forderung bezahlt, obwohl er Rechtsvorschlag hätte erheben können, so kann er innert einem Jahr auf dem Prozesswege den bezahlten Betrag zurückfordern.','Wer irrtümlich gezahlt hat, kann innert 1 Jahr den Betrag zurückfordern.'],
'88':['Artikel 88 SchKG — Fortsetzungsbegehren','¹ Ist die Betreibung nicht durch Rechtsvorschlag eingestellt worden, so kann der Gläubiger frühestens 20 Tage nach der Zustellung des Zahlungsbefehls das Fortsetzungsbegehren stellen.\n² Dieses Recht erlischt ein Jahr nach Zustellung des Zahlungsbefehls.','Das Fortsetzungsbegehren ist der nächste Schritt nach dem Zahlungsbefehl. Frühestens 20 Tage, spätestens 1 Jahr. Verpasst man die Frist, muss man von vorne anfangen.'],
'90':['Artikel 90 SchKG — Pfändungsankündigung','Die Pfändung wird dem Schuldner mindestens einen Tag vorher angekündigt.','Mindestens 1 Tag vorher wird der Schuldner informiert. Er muss anwesend sein — sonst drohen Strafen.'],
'91':['Artikel 91 SchKG — Mitwirkungspflicht','¹ Der Schuldner ist bei Straffolge verpflichtet, bei der Pfändung anwesend zu sein.','Der Schuldner MUSS bei der Pfändung dabei sein. Wer fernbleibt, kann polizeilich vorgeführt werden.'],
'92':['Artikel 92 SchKG — Unpfändbare Vermögensstücke','¹ Unpfändbar sind die dem Schuldner und seiner Familie zum persönlichen Gebrauch dienenden Gegenstände (Kleider, Effekten, Hausgeräte, Möbel oder andere bewegliche Sachen).\n³ Der Gläubiger kann gleichartige Gegenstände von geringerem Wert anbieten.','Lebensnotwendige Gegenstände, Berufswerkzeuge, religiöse Gegenstände, Haustiere und Sozialversicherungsrenten sind absolut unpfändbar. Aber: Auswechslungsrecht — Gläubiger kann billigeren Ersatz anbieten.'],
'93':['Artikel 93 SchKG — Beschränkt pfändbare Einkünfte','¹ Erwerbseinkommen jeder Art kann so weit gepfändet werden, als es nach dem Ermessen des Betreibungsbeamten für den Schuldner und seine Familie nicht unbedingt notwendig ist.\n² Solches Einkommen kann für die Dauer eines Jahres gepfändet werden.','Lohn kann bis zum Existenzminimum gepfändet werden — maximal 1 Jahr lang. Existenzminimum wird individuell berechnet.'],
'95':['Artikel 95 SchKG — Reihenfolge der Pfändung','In erster Linie wird das bewegliche Vermögen gepfändet, und zwar zunächst die Gegenstände des täglichen Verkehrs.','Reihenfolge: 1. Bewegliches (v.a. Lohn) → 2. Grundstücke → 3. Was angeblich Dritten gehört.'],
'97':['Artikel 97 SchKG — Schätzung','Es dürfen nicht mehr Vermögensstücke gepfändet werden, als voraussichtlich nötig sind.','Nur so viel pfänden wie nötig — für die Forderung plus Kosten.'],
'112':['Artikel 112 SchKG — Pfändungsurkunde','Der Beamte fertigt über jede Pfändung eine Urkunde, die Pfändungsurkunde.','Das offizielle Protokoll über die Pfändung. Wird innert 30 Tagen zugestellt.'],
'115':['Artikel 115 SchKG — Verlustschein bei Pfändung','Ergibt sich bei der Pfändung, dass kein pfändbares Vermögen vorhanden ist, so dient die Pfändungsurkunde als Verlustschein.','Findet das Amt bei der Pfändung nichts → die Pfändungsurkunde selbst wird zum Verlustschein.'],
'116':['Artikel 116 SchKG — Verwertungsbegehren','¹ Der Gläubiger kann die Verwertung frühestens einen Monat und spätestens ein Jahr nach der Pfändung verlangen.','Das Verwertungsbegehren muss rechtzeitig gestellt werden. Beweglich: 1 Monat – 1 Jahr. Grundstücke: 6 Monate – 2 Jahre. Zu spät = Betreibung erlischt!'],
'125':['Artikel 125 SchKG — Verwertung','Die Verwertung erfolgt durch öffentliche Versteigerung.','Grundsätzlich öffentliche Versteigerung. Dreimaliger Aufruf, Zuschlag an den Meistbietenden. Keine Mängelhaftung!'],
'130':['Artikel 130 SchKG — Freihandverkauf','Das Betreibungsamt kann Gegenstände freihändig verkaufen, wenn die Beteiligten zustimmen.','Freihandverkauf (ohne Versteigerung) ist möglich bei: Einverständnis aller, Marktpreis vorhanden, oder drohender Wertverlust.'],
'144':['Artikel 144 SchKG — Verteilung','Aus dem Erlös werden vorab die Kosten der Verwertung gedeckt, sodann die Forderungen der Gläubiger befriedigt.','Erlösverteilung: 1. Verfahrenskosten → 2. Gläubigerforderungen → 3. Rest an Schuldner.'],
'149':['Artikel 149 SchKG — Pfändungsverlustschein','¹ Der Gläubiger, der bei der Pfändung oder der Verwertung zu Verlust gekommen ist, erhält einen Verlustschein. Der Verlustschein gilt als Schuldanerkennung.','Der Pfändungsverlustschein hat einschneidende Wirkungen: gilt als Schuldanerkennung (provisorischer Rechtsöffnungstitel), verjährt nach 20 Jahren, und innert 6 Monaten kann direkt mit Fortsetzungsbegehren betrieben werden.'],
'151':['Artikel 151 SchKG — Betreibung auf Pfandverwertung','¹ Der Gläubiger, der ein Faustpfand oder ein Grundpfand beansprucht, muss sein Pfandrecht im Betreibungsbegehren angeben.','Bei Pfandverwertung muss der Gläubiger das Pfand bereits im Begehren angeben. Es gibt dann keine Pfändung — das Pfand wird direkt verwertet.'],
'152':['Artikel 152 SchKG — Zahlungsfrist bei Pfandverwertung','Die Zahlungsfrist beträgt einen Monat bei Faustpfändern und sechs Monate bei Grundpfändern.','Längere Zahlungsfristen als bei normaler Betreibung: 1 Monat (Faustpfand) bzw. 6 Monate (Grundpfand).'],
'158':['Artikel 158 SchKG — Pfandausfallschein','³ Der Pfandausfallschein gilt als Schuldanerkennung.','Wenn der Pfanderlös nicht reicht, erhält der Gläubiger einen Pfandausfallschein. Dieser gilt als Schuldanerkennung und berechtigt zur normalen Betreibung (Pfändung oder Konkurs).'],
'159':['Artikel 159 SchKG — Konkursandrohung','Nach Eingang des Fortsetzungsbegehrens erlässt das Betreibungsamt unverzüglich die Konkursandrohung.','Nach dem Fortsetzungsbegehren droht das Amt dem Schuldner den Konkurs an. Er hat 20 Tage zum Zahlen und wird auf den Nachlassvertrag hingewiesen.'],
'162':['Artikel 162 SchKG — Güterverzeichnis','Der Gläubiger kann beim Konkursgericht die Aufnahme eines Güterverzeichnisses beantragen.','Wenn der Gläubiger befürchtet, dass der Schuldner Vermögen beiseiteschafft, kann er ein Güterverzeichnis beantragen. Wirkung: 4 Monate.'],
'166':['Artikel 166 SchKG — Konkursbegehren','Der Gläubiger kann das Konkursbegehren stellen.','Nach der Konkursandrohung hat der Gläubiger 15 Monate für das Konkursbegehren. Erheblicher Kostenvorschuss nötig.'],
'175':['Artikel 175 SchKG — Konkurserkenntnis','¹ Der Konkurs ist eröffnet.','Das Konkursdekret: Vermögen wird zur Konkursmasse, alle Forderungen werden sofort fällig, hängige Betreibungen fallen dahin.'],
'190':['Artikel 190 SchKG — Konkurs ohne Betreibung (Gläubiger)','¹ Das Gericht kann den Konkurs auf Antrag des Gläubigers ohne vorgängige Betreibung eröffnen.','Bei Flucht, unbekanntem Aufenthalt oder Vermögensverschleierung kann der Gläubiger den Konkurs direkt beim Gericht beantragen — ohne vorherige Betreibung.'],
'191':['Artikel 191 SchKG — Privatkonkurs','¹ Der Schuldner kann die Konkurseröffnung selbst beantragen, indem er sich beim Konkursgericht als zahlungsunfähig erklärt.','Der Privatkonkurs: Der Schuldner erklärt sich selbst zahlungsunfähig. Kostet ca. CHF 4000–5000, aber der Konkursverlustschein ist milder als der Pfändungsverlustschein.'],
'192':['Artikel 192 SchKG — Überschuldungsanzeige','Ergibt sich aus einer Zwischenbilanz, dass die Forderungen der Gesellschaftsgläubiger weder zu Fortführungs- noch zu Veräusserungswerten gedeckt sind, so benachrichtigt der Verwaltungsrat das Gericht.','Bei AG/GmbH/Genossenschaft: Wenn die Schulden grösser sind als das Vermögen, müssen Verwaltungsrat und Kontrollstelle das Gericht informieren (Bilanz deponieren).'],
'193':['Artikel 193 SchKG — Ausgeschlagene Erbschaft','Wird eine Erbschaft von allen nächsten Erben ausgeschlagen, so wird sie durch das Konkursamt liquidiert.','Wenn alle Erben die Erbschaft ausschlagen, wird von Amtes wegen der Konkurs eröffnet.'],
'219':['Artikel 219 SchKG — Kollokationsplan','Die pfandgesicherten Forderungen werden aus dem Pfanderlös befriedigt. Die übrigen werden in drei Klassen eingeteilt.','Der Kollokationsplan bestimmt die Verteilungsreihenfolge: Zuerst pfandgesicherte, dann 1. Klasse (Arbeitnehmer, Alimente), 2. Klasse (AHV/IV/ALV), 3. Klasse (alle übrigen).'],
'230':['Artikel 230 SchKG — Einstellung mangels Aktiven','Ist die Konkursmasse voraussichtlich nicht ausreichend, so stellt das Konkursgericht das Verfahren ein.','Kein Vermögen da? Konkurs wird eingestellt. Juristische Personen werden trotzdem gelöscht!'],
'231':['Artikel 231 SchKG — Summarisches Verfahren','Reicht die Konkursmasse voraussichtlich nicht aus, die Kosten des ordentlichen Verfahrens zu decken, so wird das summarische Verfahren durchgeführt.','Das häufigste Verfahren: 1 Monat Frist für Forderungseingabe, Verwertung ohne Förmlichkeiten.'],
'265':['Artikel 265 SchKG — Konkursverlustschein','¹ Der Gläubiger, der zu Verlust gekommen ist, erhält einen Verlustschein.\n² Die Betreibung kann nur eingeleitet werden, wenn der Schuldner zu neuem Vermögen gekommen ist.','Milder als Pfändungsverlustschein! Schuldner kann nur betrieben werden, wenn er nachweislich zu neuem Vermögen gekommen ist. Ermöglicht den Wiederaufbau einer Existenz.'],
'271':['Artikel 271 SchKG — Arrest','¹ Der Gläubiger kann für eine fällige Forderung das Vermögen des Schuldners mit Arrest belegen lassen.','Der Arrest ist eine überfallartige Beschlagnahme — auch nachts und am Wochenende. Der Schuldner erfährt erst danach davon. Innert 10 Tagen muss die Betreibung eingeleitet werden.'],
'279':['Artikel 279 SchKG — Betreibung nach Arrest','Der Gläubiger muss innert zehn Tagen nach Zustellung der Arresturkunde Betreibung anheben.','10-Tage-Frist! Nach dem Arrest muss der Gläubiger innert 10 Tagen die Betreibung einleiten, sonst verfällt der Arrest.'],
'283':['Artikel 283 SchKG — Retentionsrecht','¹ Der Vermieter von Geschäftsräumen kann für den Mietzins des laufenden und des vorangegangenen Jahres bewegliche Gegenstände retinieren.','Nur Vermieter von Geschäftsräumen können ein Retentionsrecht auf bewegliche Gegenstände (Möbel, Maschinen) ausüben. Dann Pfandverwertung innert 10 Tagen einleiten.'],
'285':['Artikel 285 SchKG — Anfechtungsklagen','¹ Alle Rechtshandlungen, welche der Schuldner vor der Pfändung oder Konkurseröffnung vorgenommen hat, können angefochten werden.','Wenn der Schuldner vor der Betreibung Vermögen verschenkt oder beiseiteschafft hat, können Gläubiger mit Verlustschein diese Geschäfte anfechten.'],
'286':['Artikel 286 SchKG — Schenkungsanfechtung','Anfechtbar sind Schenkungen und unentgeltliche Verfügungen innerhalb des letzten Jahres vor der Pfändung oder Konkurseröffnung.','Schenkungen und gemischte Schenkungen (Missverhältnis Leistung/Gegenleistung) können 1 Jahr zurück angefochten werden. Ausnahme: Gelegenheitsgeschenke.'],
'287':['Artikel 287 SchKG — Überschuldungsanfechtung','Anfechtbar sind Tilgung einer Geldschuld auf ungewohnte Art, Bezahlung einer nicht fälligen Schuld, Begründung eines Pfandrechtes.','Ungewöhnliche Schuldentilgung, Zahlung nicht fälliger Schulden oder Pfandbestellung ohne Pflicht — 1 Jahr zurück anfechtbar.'],
'288':['Artikel 288 SchKG — Absichtsanfechtung','Anfechtbar sind alle Rechtshandlungen, welche der Schuldner innerhalb der letzten fünf Jahre vorgenommen hat in der erkennbaren Absicht, seine Gläubiger zu benachteiligen.','Die schärfste Anfechtungsklage: 5 Jahre zurück! Gilt bei erkennbarer Absicht, Gläubiger zu benachteiligen oder einzelne zu bevorzugen.']
};

// Flashcards
const FC=[
// === GRUNDLAGEN (1-8) ===
['Zweck des SchKG?','Zwangsweise Durchsetzung von Geldforderungen mithilfe des Staates. Nur Vermögen, nie Person.'],
['Wo wird eine natürliche Person betrieben?','Am Wohnsitz (Lebensmittelpunkt). Juristische Personen am Hauptsitz. Zwingend (Art. 46).'],
['Was prüft das Amt beim Zahlungsbefehl?','Nur formelle Gültigkeit — NICHT ob Forderung besteht!'],
['Pfändung vs. Konkurs?','Pfändung = Spezial (nur nötiges, nur Beteiligte). Konkurs = General (alles, alle Gläubiger).'],
['Wer unterliegt dem Konkurs?','Alle im HR Eingetragenen — auch für private Schulden (Art. 39).'],
['Samstag = geschlossene Zeit?','NEIN! Nur Sonntage und Feiertage sind geschlossen (Art. 56).'],
['Betreibungsferien?','7 Tage vor/nach Ostern + Weihnachten. 15.–31. Juli (Art. 56 Ziff. 2).'],
['Fristbeginn im SchKG?','Tag NACH Zustellung. Übergabetag zählt nicht (Art. 31).'],
// === EINLEITUNG (9-16) ===
['Frist Rechtsvorschlag?','10 Tage nach Zustellung. Ohne Begründung. Schriftlich empfohlen (Art. 74).'],
['Provisorische Rechtsöffnung?','Bei Schuldanerkennung (Vertrag, Verlustschein). Wird nach 20 Tagen definitiv (Art. 82/83).'],
['Definitive Rechtsöffnung?','Bei vollstreckbarem Titel (Urteil, Vergleich, Verfügung). Nur noch Zahlung/Stundung/Verjährung (Art. 80/81).'],
['Frist Fortsetzungsbegehren?','Frühestens 20 Tage, spätestens 1 Jahr nach Zahlungsbefehl (Art. 88).'],
['Frist Zahlung nach Zahlungsbefehl?','20 Tage (Art. 69).'],
['Frist Aberkennungsklage?','20 Tage nach provisorischer Rechtsöffnung. Verpasst → automatisch definitiv (Art. 83).'],
['Kein gültiger Rechtsvorschlag?','«Werde Rechtsvorschlag erheben» oder Zerreissen des Zahlungsbefehls.'],
['Einheit des Betreibungsortes?','Nur an einem Ort. Zwingend, nicht vertraglich änderbar (Art. 46).'],
// === PFÄNDUNG (17-26) ===
['Absolut unpfändbar?','Lebensnotwendiges, Berufswerkzeuge, Eigentum Dritter, religiöse Gegenstände, Haustiere, AHV/IV, Sold (Art. 92).'],
['Existenzminimum?','Individuell, kantonal: Grundbetrag + Miete + Heizung. Ehepartner-Einkommen senkt es (Art. 93).'],
['Lohnpfändung — wie lange?','Max. 1 Jahr (Art. 93 Abs. 2).'],
['Reihenfolge der Pfändung?','1. Bewegliches (v.a. Lohn) → 2. Grundstücke → 3. Was angeblich Dritten gehört (Art. 95).'],
['Pfändungsverlustschein — Wirkungen?','Schuldanerkennung, 6 Monate direkt Fortsetzung, 20 Jahre Verjährung, Arrestgrund (Art. 149).'],
['Auswechslungsrecht?','Gläubiger kann billigeren Ersatz anbieten → teureres Stück pfänden (Art. 92 Abs. 3).'],
['Verwertungsfrist beweglich?','Frühestens 1 Monat, spätestens 1 Jahr. Zu spät = Betreibung erlischt! (Art. 116).'],
['Verwertungsfrist Grundstücke?','Frühestens 6 Monate, spätestens 2 Jahre (Art. 116).'],
['Hemmen Betreibungsferien Fristen?','NEIN. Aber Fristende in Ferien → Verlängerung bis 3. Werktag danach.'],
['Kann der Betreibungsort vertraglich geändert werden?','Nein! Zwingend am Wohnsitz/Sitz (Art. 46).'],
// === PFANDVERWERTUNG (27-30) ===
['Pfandverwertung — was fällt weg?','Die Pfändung! Pfand wird direkt verwertet. Schneller als Pfändungsverfahren.'],
['Zahlungsfrist Faustpfand?','1 Monat (Art. 152).'],
['Zahlungsfrist Grundpfand?','6 Monate (Art. 152).'],
['Pfandausfallschein?','Bei ungenügendem Erlös. Innert 1 Monat direkt Fortsetzung → dann normale Pfändung oder Konkurs.'],
// === KONKURS (31-40) ===
['Konkursandrohung?','Nach Fortsetzungsbegehren: 20 Tage Zahlungsfrist + Nachlassvertrag-Hinweis (Art. 159).'],
['Güterverzeichnis?','Optional: Inventar bei Beiseiteschaffen-Gefahr. Wirkung: 4 Monate (Art. 162–165).'],
['Frist Konkursbegehren?','15 Monate nach Konkursandrohung (Art. 166).'],
['Drei Konkursverfahren?','Einstellung mangels Aktiven (Art. 230), summarisch (Art. 231), ordentlich (Art. 232ff., selten).'],
['1. Klasse Kollokationsplan?','Arbeitnehmer (6 Monate), Alimente, Pensionskasse, Unfallversicherung (Art. 219).'],
['2. Klasse Kollokationsplan?','AHV/IV/ALV, Krankenkasse, Unfallversicherung, Kindesvermögen.'],
['Konkursverlustschein vs. Pfändungsverlustschein?','Konkurs: milder — nur bei neuem Vermögen. Pfändung: strenger — jederzeit Lohnpfändung.'],
['Privatkonkurs?','Insolvenzerklärung (Art. 191). CHF 4000–5000. Neuer Start möglich.'],
['AG/GmbH nach Konkurs?','HR gelöscht. Existiert nicht mehr. Gläubiger: nur Verlustausweis.'],
['Überschuldung — wer meldet?','AG/GmbH/Genossenschaft: Verwaltungsrat (Pflicht!) + Kontrollstelle (Art. 192).'],
// === SICHERUNGSMITTEL (41-47) ===
['Was ist der Arrest?','Überfallartige Beschlagnahme vor Vollstreckung. Auch nachts. 10 Tage → betreiben (Art. 271ff.).'],
['Sucharrest?','Unzulässig! Genaue Angaben über Vermögenswert nötig.'],
['Frist nach Arrest → Betreibung?','10 Tage (Art. 279).'],
['Retentionsrecht?','Vermieter Geschäftsräume auf bewegliche Gegenstände. 10 Tage → Pfandverwertung (Art. 283ff.).'],
['Retentionsrecht bei Privatwohnung?','Nein! Nur bei Geschäftsräumen.'],
['Schenkungsanfechtung?','Art. 286: Schenkungen + gemischte, 1 Jahr zurück.'],
['Deliktsanfechtung — wie weit?','5 Jahre! Bei erkennbarer Benachteiligungsabsicht (Art. 288).'],
// === ZUSATZ (48-50) ===
['Prüft das Betreibungsamt die Forderung?','Nein! Nur formelle Gültigkeit. Jeder kann erst mal jeden betreiben.'],
['Beschwerde gegen Betreibungshandlung?','Innert 10 Tagen bei der Aufsichtsbehörde (Art. 17).'],
['Betreibungsregister — Sichtbarkeit?','5 Jahre, auch nach Bezahlung (Art. 8a). Glaubhaftes Interesse nötig.']
];

// Konkurs Slides
const KS=[
{t:'Ausgangslage',s:'Was ist Betreibung auf Konkurs?',h:'<div class="hlr"><strong>Generalexekution</strong> — gesamtes Vermögen (= Konkursmasse) wird verwertet und auf alle Gläubiger verteilt. Juristische Personen werden im HR gelöscht.</div><div class="c"><div class="ct2">Wer unterliegt dem Konkurs?</div><div class="cd">Alle im HR eingetragenen Personen — auch für <strong>private</strong> Schulden (Einzelunternehmer, Kollektivgesellschafter, Art. 39). Zuständig: <span class="b br">Konkursgericht</span> (Eröffnung), <span class="b br">Konkursamt</span> (Verfahren).</div></div>'},
{t:'Konkursandrohung',s:'Art. 159 — nach Fortsetzungsbegehren',h:'<div class="c"><div class="ct2">Unverzüglich durch Betreibungsamt</div><div class="cd">Schuldner: <span class="b ba">20 Tage</span> Zahlungsfrist + Hinweis Nachlassvertrag. Gläubiger erhält Doppel.</div></div>'},
{t:'Güterverzeichnis (optional)',s:'Art. 162–165 — Sicherung',h:'<div class="c"><div class="cd">Wenn Gefahr, dass Schuldner Vermögen beiseiteschafft → Gläubiger beantragt beim Konkursgericht → Inventar. Schuldner muss Werte erhalten.</div></div><div class="hla">Wirkung: <span class="b ba">4 Monate</span> — innert Frist Konkursbegehren stellen!</div>'},
{t:'Konkursbegehren',s:'Art. 166–171',h:'<div class="c"><div class="cd">Innert <span class="b br">15 Monaten</span>. Einreichen: Zahlungsbefehl + Konkursandrohung. Erheblicher Kostenvorschuss (Art. 169). Summarisches Verfahren. Parteien müssen nicht erscheinen. Rechtsmittel möglich (oft genutzt = Zeit gewinnen).</div></div>'},
{t:'Konkurseröffnung',s:'Art. 175 — Konkursdekret',h:'<div class="hlr"><strong>Konkurserkenntnis:</strong> Vermögen → Konkursmasse. Alle Forderungen sofort fällig. Hängige Betreibungen fallen dahin.</div><h3>Auch ohne Betreibung möglich</h3><div class="gr"><div class="c cr"><div class="ct2">Privatkonkurs (Art. 191)</div><div class="cd">Insolvenzerklärung. Kosten ca. CHF 4000–5000. Laufende Lohnpfändung wird gestoppt!</div></div><div class="c cr"><div class="ct2">Überschuldung (Art. 192)</div><div class="cd">AG/GmbH/Genossenschaft: Organe + Kontrollstelle müssen Bilanz deponieren.</div></div><div class="c cr"><div class="ct2">Gläubigerantrag (Art. 190)</div><div class="cd">Schuldner flüchtig / unbekannt / Vermögen verheimlicht.</div></div><div class="c cr"><div class="ct2">Ausgeschlagene Erbschaft (Art. 193)</div><div class="cd">Alle Erben schlagen aus → Konkurs von Amtes wegen.</div></div></div>'},
{t:'Konkursverfahren',s:'Art. 221ff. — Inventar + Verfahrenswahl',h:'<div class="c"><div class="cd">Konkursamt erstellt Inventar, schätzt Werte. Drei Verfahren:</div></div><div class="c cr"><div class="ct2">Einstellung mangels Aktiven (Art. 230)</div><div class="cd">Keine/zu wenig Aktiven. Konkurs nicht durchgeführt. Juristische Personen trotzdem gelöscht! Bisherige Betreibungen leben auf.</div></div><div class="c cm"><div class="ct2">Summarisches Verfahren (Art. 231)</div><div class="cd">1 Monat Forderungseingabe. Verwertung ohne Förmlichkeiten nach Kollokationsklassen.</div></div><div class="c cg"><div class="ct2">Ordentliches Verfahren (Art. 232ff.)</div><div class="cd">Selten. Genug Aktiven. Gläubiger wählen eigene Konkursverwaltung.</div></div>'},
{t:'Kollokationsplan',s:'Art. 219 — Verteilungsregeln',h:'<div class="hl">Zuerst: pfandgesicherte Forderungen aus Pfanderlös. Ungedeckter Rest → 3. Klasse.</div><div class="c cr"><div class="ct2"><span class="b br">1. Klasse</span></div><div class="cd">Arbeitnehmer (6 Monate), Alimente, Pensionskasse, Unfallversicherung</div></div><div class="c cm"><div class="ct2"><span class="b ba">2. Klasse</span></div><div class="cd">AHV/IV/ALV, Krankenkasse, Unfallvers./Arbeitslosenkasse, Kindesvermögen</div></div><div class="c"><div class="ct2">3. Klasse</div><div class="cd">Alle übrigen: Bankdarlehen, Lieferanten, ungesicherte Kredite</div></div>'},
{t:'Konkursverlustschein',s:'Art. 265 — milder als Pfändungsverlustschein!',h:'<div class="c cg"><div class="cd"><span class="b bb">Schuldanerkennung</span> nur wenn im Konkurs ausdrücklich anerkannt<br><br><span class="b bgreen">Neues Vermögen</span> Nur betreibbar wenn nachweislich neues Vermögen (nicht jeder Franken über Existenzminimum — angemessene Lebensweise!)<br><br><span class="b ba">Verjährung</span> 20 Jahre<br><br><span class="b br">Juristische Personen</span> gelöscht → nur Verlustausweis</div></div><div class="hlg"><strong>Vorteil Privatkonkurs:</strong> Neue Existenz aufbauen möglich. Mehr als Existenzminimum verdienen ohne sofortige Pfändung. Oft besser als jahrelange Lohnpfändung!</div>'}
];

// Flow Diagrams
const FL=[
// Flow 0: Einleitungsverfahren (Bild 1)
[
{t:'Betreibungsbegehren',h:'<div class="fw"><div class="fn fn-gray"><b>Betreibungsbegehren</b>Gläubiger stellt es beim Betreibungsamt<br>(schriftlich / mündlich / online)<br>+ Kostenvorschuss</div><div class="flbl">Pfand angeben? → Pfandverwertung</div></div><div class="hl">Der Gläubiger startet das Verfahren. Er braucht <strong>keinen Beweis</strong> — jeder kann erst mal jeden betreiben.</div>'},
{t:'Zahlungsbefehl',h:'<div class="fw"><div class="fn fn-gray"><b>Betreibungsbegehren</b></div><div class="farr">▼</div><div class="fn fn-blue"><b>Zahlungsbefehl</b>Zustellung durch Betreibungsamt<br>(persönlich, kein Einschreiben!)<br>+ Kostenvorschuss (KoVo)</div></div><div class="hlr">Das Amt prüft <strong>NICHT</strong> ob die Forderung besteht — nur die formelle Gültigkeit!</div>'},
{t:'3 Möglichkeiten des Schuldners',h:'<div class="fw"><div class="fn fn-blue" style="max-width:240px"><b>Zahlungsbefehl</b>zugestellt</div><div class="farr">▼ ▼ ▼</div><div class="frow"><div class="fn fn-green"><b>Zahlung</b>Innert 20 Tagen</div><div class="fn fn-amber"><b>Rechtsvorschlag</b>Innert 10 Tagen</div><div class="fn fn-gray"><b>Nichts tun</b>Kein Rechtsvorschlag</div></div></div><div class="hla">Der Schuldner hat drei Optionen. Der Rechtsvorschlag bringt die Betreibung zum <strong>Stillstand</strong>.</div>'},
{t:'Was passiert jeweils?',h:'<div class="fw"><div class="frow"><div class="fn fn-green"><b>Zahlung</b>→ Ende</div><div class="fn fn-amber"><b>Rechtsvorschlag</b>→ STOP<br>Betreibung steht still</div><div class="fn fn-gray"><b>Nichts tun</b>→ Rechtskräftiger<br>Zahlungsbefehl</div></div></div><div class="hl"><strong>Zahlung</strong> = Verfahren beendet. <strong>Rechtsvorschlag</strong> = Gläubiger muss zum Gericht. <strong>Nichts tun</strong> = Zahlungsbefehl wird rechtskräftig → direkt zum Fortsetzungsbegehren.</div>'},
{t:'Welchen Beweis hat der Gläubiger?',h:'<div class="fw"><div class="fn fn-amber" style="max-width:260px"><b>STOP — Rechtsvorschlag</b>Gläubiger muss Rechtsvorschlag beseitigen</div><div class="farr">▼</div><div class="flbl">Welchen Beweis hat der Gläubiger?</div><div class="frow"><div class="fn fn-gray"><b>"Nichts"</b>Kein Dokument</div><div class="fn fn-blue"><b>Schuldanerkennung</b>Unterschriebener Vertrag etc.</div><div class="fn fn-green"><b>Urteil</b>Gerichtsurteil, Verfügung</div></div></div><div class="hl">Je nach Beweislage gibt es <strong>drei verschiedene Wege</strong> zur Beseitigung des Rechtsvorschlags → siehe Diagramm 2.</div>'}
],
// Flow 1: Rechtsöffnung (Bild 2)
[
{t:'Die drei Wege',h:'<div class="fw"><div class="flbl">Welchen Beweis hat der Gläubiger?</div><div class="frow"><div class="fn fn-gray"><b>"Nichts"</b></div><div class="fn fn-blue"><b>Schuldanerkennung</b></div><div class="fn fn-green"><b>Urteil</b></div></div><div class="farr">▼ ▼ ▼</div><div class="frow"><div class="fn fn-gray"><b>Anerkennungsklage</b>Ordentl. Zivilprozess</div><div class="fn fn-blue"><b>Provisorische</b>Rechtsöffnung</div><div class="fn fn-green"><b>Definitive</b>Rechtsöffnung</div></div></div><div class="hl">Je nach Beweis ein anderer Weg. Die <strong>definitive</strong> ist am schnellsten, die <strong>Anerkennungsklage</strong> am aufwendigsten.</div>'},
{t:'Weg 1: Anerkennungsklage',h:'<div class="fw"><div class="fn fn-gray"><b>"Nichts" — kein Beweis</b></div><div class="farr">▼</div><div class="fn fn-gray"><b>Anerkennungsklage</b>Ordentlicher Zivilprozess</div><div class="farr">▼</div><div class="fn fn-gray" style="text-align:left;max-width:300px">Friedensrichter<br>Gericht / Klage<br>Verhandlung<br>Zeugen etc.<br><strong>Lang + teuer!</strong></div><div class="farr">▼</div><div class="fn fn-gray"><b>Urteil</b></div><div class="farr">▼</div><div class="fn fn-green"><b>Definitives Urteil</b></div></div><div class="hlr">Der <strong>mühsamste Weg</strong>. Ohne Dokumente muss der Gläubiger einen vollen Prozess führen.</div>'},
{t:'Weg 2: Provisorische Rechtsöffnung',h:'<div class="fw"><div class="fn fn-blue"><b>Schuldanerkennung</b>z.B. unterschriebener Vertrag</div><div class="farr">▼</div><div class="fn fn-blue"><b>Provisorische Rechtsöffnung</b>Schnelles Verfahren, schriftlich, 1–3 Monate</div><div class="farr">▼</div><div class="fn fn-blue"><b>Urteil</b></div><div class="farr">▼</div><div class="fn fn-amber"><b>Aberkennungsklage?</b>Schuldner hat 20 Tage</div><div class="farr">▼</div><div class="flbl">Wenn keine Aberkennungsklage:</div><div class="fn fn-green"><b>Definitives Urteil</b></div></div><div class="hla">Schuldner hat <span class="b ba">20 Tage</span> für eine Aberkennungsklage. Wenn er nichts tut → wird automatisch definitiv.</div>'},
{t:'Weg 3: Definitive Rechtsöffnung',h:'<div class="fw"><div class="fn fn-green"><b>Urteil / Verwaltungsverfügung</b>Gerichtsurteil, Vergleich, Steuerverfügung etc.</div><div class="farr">▼</div><div class="fn fn-green"><b>Definitive Rechtsöffnung</b>Schnelles Verfahren, schriftlich, 1–3 Monate</div><div class="farr">▼</div><div class="fn fn-green"><b>Definitives Urteil</b></div></div><div class="hlg">Der <strong>schnellste Weg</strong>. Mit einem vollstreckbaren Titel kann der Schuldner kaum noch etwas einwenden.</div>'},
{t:'Alle Wege führen zum selben Ziel',h:'<div class="fw"><div class="frow"><div class="fn fn-gray"><b>Definitives Urteil</b>via Klage</div><div class="fn fn-blue"><b>Definitives Urteil</b>via provisorische Rechtsöffnung</div><div class="fn fn-green"><b>Definitives Urteil</b>via definitive Rechtsöffnung</div></div><div class="farr">▼ ▼ ▼</div><div class="fn fn-red" style="max-width:380px"><b>Rechtskräftiger Zahlungsbefehl</b>Rechtsvorschlag beseitigt → Fortsetzungsbegehren!</div></div><div class="hl">Egal welcher Weg — am Ende steht ein rechtskräftiger Zahlungsbefehl. Jetzt kann der Gläubiger das <strong>Fortsetzungsbegehren</strong> stellen → Vollstreckungsverfahren beginnt.</div>'}
],
// Flow 2: Pfändung vs. Pfandverwertung (Bild 3)
[
{t:'Zwei parallele Wege',h:'<div class="fw"><div class="frow"><div class="fn fn-blue"><b>Pfändung</b>Nicht im HR eingetragen<br>(Spezialexekution)</div><div class="fn fn-green"><b>Pfandverwertung</b>Pfand bereits vorhanden<br>(direkt verwerten)</div></div></div><div class="hl">Nach dem Fortsetzungsbegehren teilt sich der Weg. Die Betreibungsart bestimmt, wie es weitergeht.</div>'},
{t:'Pfändung — Schritt 1–3',h:'<div class="fw"><div class="fn fn-blue"><b>Fortsetzungsbegehren</b></div><div class="farr">▼</div><div class="fn fn-gray"><b>Pfändungsankündigung</b>Mind. 1 Tag vorher</div><div class="farr">▼</div><div class="fn fn-blue"><b>Pfändung</b>Bewegliches → Grundstücke → Drittes</div><div class="farr">▼</div><div class="fn fn-gray"><b>Pfändungsurkunde</b>Protokoll über vollzogene Pfändung</div></div><div class="hl">Der Schuldner ist bei Straffolge zur Anwesenheit verpflichtet. Das Amt pfändet nach gesetzlicher Reihenfolge.</div>'},
{t:'Pfändung — Verwertung',h:'<div class="fw"><div class="fn fn-gray"><b>Pfändungsurkunde</b></div><div class="farr">▼</div><div class="flbl">Frist: beweglich 1 Monat–1 Jahr / Grundstücke 6 Monate–2 Jahre</div><div class="fn fn-blue"><b>Verwertungsbegehren</b></div><div class="farr">▼</div><div class="fn fn-blue"><b>Verwertung + Verteilung</b>Öffentliche Versteigerung<br>Erlös an Gläubiger</div></div><div class="hla"><span class="b br">Zu spät</span> = ganze Betreibung erlischt! Bei Lohnpfändung: kein Verwertungsbegehren nötig.</div>'},
{t:'Pfändung — Wenn es nicht reicht',h:'<div class="fw"><div class="fn fn-blue"><b>Verwertung + Verteilung</b></div><div class="farr">▼</div><div class="flbl">Wenn der Erlös nicht reicht:</div><div class="fn fn-red"><b>Pfändungsverlustschein</b></div><div class="farr">▼</div><div class="fn fn-gray" style="text-align:left;max-width:320px">Gilt als Schuldanerkennung<br>20 Jahre gültig<br>Innert 6 Monate direkt Fortsetzung<br><strong>Unverzichtbar!</strong></div></div><div class="hlr">Der Pfändungsverlustschein hat <strong>einschneidende Wirkungen</strong> — der Gläubiger kann den Schuldner jahrelang bis zum Existenzminimum pfänden.</div>'},
{t:'Pfandverwertung — Ablauf',h:'<div class="fw"><div class="fn fn-green"><b>Direkt zum Verwertungsbegehren</b>Keine Pfändung nötig!</div><div class="farr">▼</div><div class="flbl">Frist: Faustpfand 1 Monat / Grundpfand 6 Monate</div><div class="fn fn-green"><b>Verwertungsbegehren</b></div><div class="farr">▼</div><div class="fn fn-green"><b>Verwertung + Verteilung</b>Erlös an Gläubiger</div></div><div class="hlg">Bei der Pfandverwertung fällt die ganze Pfändung weg — das Pfand wird <strong>direkt</strong> verwertet. Viel schneller!</div>'},
{t:'Pfandverwertung — Wenn es nicht reicht',h:'<div class="fw"><div class="fn fn-green"><b>Verwertung + Verteilung</b></div><div class="farr">▼</div><div class="flbl">Wenn der Pfanderlös nicht reicht:</div><div class="fn fn-red"><b>Pfandausfallschein</b></div><div class="farr">▼</div><div class="fn fn-gray" style="text-align:left;max-width:320px">Gilt als Schuldanerkennung<br>20 Jahre gültig<br>Innert 1 Monat direkt Fortsetzung<br>→ dann normale Pfändung oder Konkurs</div></div><div class="hla">Der Pfandausfallschein berechtigt zur Anhebung einer normalen Betreibung auf Pfändung oder Konkurs.</div>'}
]
];

// Register course
window.TIS = window.TIS || {};
window.TIS.courses = window.TIS.courses || {};
window.TIS.courses.recht2 = {
  config: courseConfig,
  html: courseHTML,
  articles: ART,
  flashcards: FC,
  konkursSlides: KS,
  flowDiagrams: FL
};

// ==========================================
// INTERAKTIVE ÜBUNGEN — SchKG
// ==========================================

window.schkgShowUeb=function(n){
['schkg_ueb_sel','schkg_ueb1','schkg_ueb2','schkg_ueb3','schkg_ueb4','schkg_ueb5'].forEach(function(id){var e=document.getElementById(id);if(e)e.style.display='none';});
if(n===0){document.getElementById('schkg_ueb_sel').style.display='block';}
else{var e=document.getElementById('schkg_ueb'+n);if(e)e.style.display='block';
if(n===1)schkgGenFall();if(n===2)schkgGenZuord();if(n===3)schkgGenRF();if(n===4)schkgGenArt();if(n===5)schkgGenMC();}
};

// --- FALLBEISPIELE (aus Kompendium Kap. 2.11) ---
var SCHKG_FAELLE=[
{t:'Aufgabe 1 — Betreibungsort',q:'Wo ist in den folgenden Fällen die Betreibung einzuleiten?<br><br>a) Carlo Schuster mit Wohnsitz in Bern hat gegen Franz Notz mit Wohnsitz in Winterthur eine Forderung aus Kaufvertrag.<br>b) Peter Züsli mit Wohnsitz in München hat gegen Fridolin Kuster mit Wohnsitz in Rapperswil eine grundpfandgesicherte Forderung aus Darlehensvertrag. Das verpfändete Grundstück liegt in Luzern.',a:'<strong>a) Winterthur</strong> — Betreibungsort ist immer der <strong>Wohnsitz des Schuldners</strong> (Art. 46 SchKG). Nicht der Wohnsitz des Gläubigers, nicht der Vertragsort.<br><strong>b) Luzern</strong> — Bei Grundpfand: <strong>Ort des Grundstücks</strong> (Art. 51 SchKG). Nicht Rapperswil (Wohnsitz Schuldner), nicht München (Wohnsitz Gläubiger).'},
{t:'Aufgabe 2 — Betreibungsort Miete',q:'Dora Schnell wohnt in Chur. Da sie die Miete ihrer Wohnung nicht mehr bezahlen kann, wird sie von ihrem Vermieter mit Sitz in Luzern betrieben. Dora Schnell kündigt den Mietvertrag und zieht nach Zürich.<br><br>Wo ist das Fortsetzungsbegehren zu stellen?',a:'<strong>Es kommt darauf an, wann Dora umzieht (Art. 53 SchKG).</strong><br><br>Nach der <strong>Pfändungsankündigung</strong> bleibt der Betreibungsort fix — egal ob der Schuldner umzieht. Alles was <strong>vorher</strong> passiert (z.B. Fortsetzungsbegehren), muss am aktuellen Wohnsitz gestellt werden. Sobald Dora also vor der Pfändungsankündigung nach Zürich zieht, muss der Gläubiger ihr nachgehen und in <strong>Zürich</strong> weitermachen.'},
{t:'Aufgabe 3 — Zahlungsbefehl',q:'Alexander Knaus wird ein Zahlungsbefehl (ZB) zugestellt. Was muss er in folgenden Fällen tun?<br><br>a) Er ist der Ansicht, er habe in der Schweiz keinen Wohnsitz und könne deshalb nicht betrieben werden.<br>b) Er ist der Ansicht, aus dem ZB sei nicht ersichtlich, für welche Forderung er betrieben werde.<br>c) Er meint, er hätte nicht betrieben werden dürfen, weil die betriebene Forderung nicht fällig ist.',a:'<strong>a) Rechtsvorschlag UND/ODER Beschwerde.</strong> Er kann <strong>Rechtsvorschlag</strong> erheben mit der Begründung, dass er bestreitet, überhaupt in der Schweiz betrieben werden zu können. Zusätzlich <strong>Beschwerde</strong> (Verfahrensfehler, Art. 17 SchKG). Kann man ohne Wohnsitz in der CH betrieben werden? Ja — wenn Vermögen in der CH, Gerichtsstand, oder vorübergehender Aufenthalt. Vorsichtshalber beides machen.<br><strong>b) Beschwerde</strong> — Mangelhafter Zahlungsbefehl (formeller Fehler). Beschwerde innert 10 Tagen.<br><strong>c) Rechtsvorschlag</strong> — Bestreitung der Forderung (nicht fällig = materieller Einwand). Innert 10 Tagen, kein Grund nötig (Art. 74 SchKG).'},
{t:'Aufgabe 4 — Rechtsöffnung',q:'Sarah Müller hat gegen Kurt Gander ein Schuldbetreibungsverfahren eingeleitet. Sie erhält das Doppel des Zahlungsbefehls mit dem Vermerk «Der Betriebene hat Rechtsvorschlag erhoben». Was kann Frau Müller tun, wenn sie die Forderung auf folgende Schriftstücke stützen kann?<br><br>a) Ein Schreiben: «Kurt Gander verpflichtet sich, für die Wohnungsmiete der Vermieterin Sarah Müller monatlich CHF 1\'500.– zu bezahlen, zahlbar jeweils im Voraus auf den Ersten eines jeden Monats.»<br>b) Ein Scheidungsurteil, in dem Kurt Gander verpflichtet wird, Sarah Müller monatlich CHF 3\'500.– Unterhalt zu bezahlen.',a:'<strong>a) Provisorische Rechtsöffnung</strong> — Das Schreiben ist eine <strong>Schuldanerkennung</strong> (provisorischer Rechtsöffnungstitel). Der Schuldner hat 20 Tage für die Aberkennungsklage.<br><strong>b) Definitive Rechtsöffnung</strong> — Ein Gerichtsurteil ist ein <strong>definitiver Rechtsöffnungstitel</strong>. Dagegen kann nur noch eingewendet werden, dass die Schuld bereits beglichen wurde.'},
{t:'Aufgabe 5 — Fortsetzungsbegehren',q:'Konnte Albert Rölli in den folgenden Fällen am 13. Juni 2018 das Fortsetzungsbegehren stellen?<br><br>a) Schuldner Heribert Fuchs wurde am 17. Mai 2018 für CHF 8\'000 betrieben. Er erhob am 24. Mai 2018 einen Teilrechtsvorschlag von CHF 3\'000.<br>b) Heribert Fuchs wurde am 26. Mai 2017 betrieben. Keinen Rechtsvorschlag. Stattdessen bat er um Stundung für 1 Jahr (2. Juni 2017). Nach Ablauf zahlte er nicht.<br>c) Betreibung am 23. Januar 2018. Fortsetzungsbegehren am 28. Februar 2018. Am 1. März 2018 zurückgezogen wegen Stundungsbitte.',a:'<strong>a) Teilweise Ja</strong> — Für den unbestrittenen Teil (CHF 5\'000) kann das Fortsetzungsbegehren gestellt werden (frühestens 20 Tage nach ZB = ab 6. Juni). Für die bestrittenen CHF 3\'000 braucht es zuerst Rechtsöffnung.<br><strong>b) Nein — Frist abgelaufen!</strong> Fortsetzungsbegehren muss innert 1 Jahr nach ZB gestellt werden. 26. Mai 2017 + 1 Jahr = 26. Mai 2018. Am 13. Juni 2018 ist die Frist abgelaufen. Die Stundung hemmt die Frist nicht!<br><strong>c) Problematisch</strong> — Das Zurückziehen des Fortsetzungsbegehrens hat die Betreibung nicht beendet. Ein neues Fortsetzungsbegehren ist möglich, solange die 1-Jahres-Frist noch läuft.'},
{t:'Aufgabe 6 — Paulianische Anfechtung',q:'Alice Schlyfer schenkt kurz vor der drohenden Schuldbetreibung ihre Ferienhäuser ihrem Partner. In der folgenden Betreibung erhält die Gläubigerin, Konstanze Eifrig, nur einen Pfändungsverlustschein.<br><br>Was kann sie unternehmen?',a:'<strong>Paulianische Anfechtung</strong> (Art. 285ff. SchKG).<br><br>Die Schenkung erfolgte kurz vor der Betreibung und ist daher <strong>anfechtbar</strong>:<br>• <strong>Schenkungsanfechtung</strong> (Art. 286 SchKG): Schenkungen innerhalb des letzten Jahres vor der Pfändung/dem Konkurs können angefochten werden.<br>• Konstanze klagt beim Gericht auf Rückgängigmachung der Schenkung.<br>• Bei Erfolg: Die Ferienhäuser werden so behandelt, als wären sie noch im Vermögen der Schuldnerin → können <strong>gepfändet und verwertet</strong> werden.<br>• Voraussetzung: Konstanze hat einen <strong>Verlustschein</strong> — damit ist sie zur Anfechtungsklage legitimiert (Art. 285 Abs. 2 SchKG).'},
{t:'Aufgabe 7 — Betreibungsart bestimmen',q:'Welche Betreibungsart ist zur Vollstreckung folgender Forderungen zu wählen?<br><br>a) Saalmiete gegen den Gesangsverein<br>b) Saalmiete gegen die Stiftung zur Förderung der Jugendkultur<br>c) Büromiete gegen eine einfache Gesellschaft<br>d) Steuern gegen eine Aktiengesellschaft<br>e) Grundpfandgesichertes Darlehen gegen einen Gesellschafter:in einer Kollektivgesellschaft',a:'<strong>a) Pfändung</strong> — Verein: im HR eingetragen oder nicht? Typisch nicht → Pfändung.<br><strong>b) Konkurs</strong> — Stiftungen sind <strong>eintragungspflichtig</strong> (Art. 52 ZGB) → immer im HR → Konkursbetreibung.<br><strong>c) Pfändung</strong> — Einfache Gesellschaft hat keine Rechtspersönlichkeit und kann nicht im HR eingetragen werden. Betreibung gegen die <strong>einzelnen Gesellschafter</strong> → Pfändung.<br><strong>d) Pfändung</strong> — Steuern werden <strong>immer auf Pfändung</strong> betrieben (Art. 43 SchKG), auch wenn die AG im HR eingetragen ist. Steuern sind eine Spezialanforderung!<br><strong>e) Pfandverwertung</strong> — Grundpfandgesichert → immer Pfandverwertung (Art. 151 SchKG), unabhängig von der Person des Schuldners.'},
{t:'Aufgabe 8 — Darlehen & Betreibungsart',q:'Joachim Reich gab der in Basel lebenden Lotti Meier ein Darlehen von CHF 100\'000.–, damit sie in ihrer Heimatstadt eine Boutique eröffnen kann. Die Rückzahlung hat er nicht erhalten. Herr Reich möchte Frau Meier betreiben, weiss aber nicht, ob sie im HR eingetragen ist und demzufolge auf Konkurs oder auf Pfändung zu betreiben ist.<br><br>a) Kann er die Betreibung trotzdem einleiten?<br>b) Wie wäre es, wenn Lotti Meier ihm ihr Auto zur Darlehenssicherung verpfändet hätte?',a:'<strong>a) Ja!</strong> Jeder kann jeden betreiben — ohne Beweis der Forderung. Das Betreibungsamt bestimmt die Betreibungsart <strong>von Amtes wegen</strong> (Art. 38ff. SchKG). Der Gläubiger muss nicht wissen, ob der Schuldner im HR ist.<br><strong>b) Pfandverwertung</strong> — Bei bestehendem <strong>Faustpfand</strong> (Auto) wird auf Pfandverwertung betrieben, unabhängig vom HR-Eintrag. Der Gläubiger muss im Betreibungsbegehren auf das Pfand hinweisen.'},
{t:'Aufgabe 9 — Schuldenberatung',q:'Enzo Rüdig hat soeben eine längere Haftstrafe verbüsst und erfolgreich einen Drogenentzug absolviert. Er arbeitet als Raumpfleger. Betreut wird er von einem Sozialarbeiter. Es sind sieben Betreibungen gegen ihn hängig, da er die Wohnungsmiete und Bankdarlehen nicht bezahlen kann.<br><br>Was raten Sie ihm?',a:'<strong>Privatkonkurs anmelden.</strong> Alle Schulden werden auf einmal geregelt, laufende Lohnpfändungen werden beendet. Danach kann er neu anfangen.<br><br>Voraussetzung: Er muss <strong>zahlungsunfähig</strong> sein (nicht nur zahlungsunwillig). Bei 7 hängigen Betreibungen als Raumpfleger ist das wahrscheinlich gegeben.<br><br>Alternativ: Schuldenberatung aufsuchen (z.B. Caritas), Existenzminimum berechnen (Art. 93 SchKG), mit Gläubigern Ratenzahlung verhandeln.'},
{t:'Aufgabe 10 — Arrest',q:'Andrea Meier bekam 2016 in einem Scheidungsurteil in der Schweiz von ihrem Mann Fritz CHF 500\'000 aus güterrechtlichen Ansprüchen zugesprochen. Fritz zahlte nie. 2017 schlossen sie einen Vergleich: Fritz zahlt CHF 200\'000 per Saldo. Auch das zahlte er nicht und wanderte nach Belgien aus.<br><br>Durch eine Indiskretion erfährt Andrea, dass Fritz bei der X-Bank in Zürich ein Wertschriftendepot über CHF 1.1 Mio. besitzt.<br><br>a) Was kann Frau Meier tun, um rasch und sicher an ihr Geld zu kommen?<br>b) Fritz Meier macht Rechtsvorschlag mit der Begründung «Betreibungsamt nicht zuständig. Habe keinen Wohnsitz in der Schweiz.» Was ist zu unternehmen?',a:'<strong>a) Arrest beantragen!</strong> (Art. 271 SchKG)<br>• Arrestgrund: Schuldner hat keinen festen Wohnsitz in der Schweiz (Art. 271 Abs. 1 Ziff. 4).<br>• Arrestgegenstand: Wertschriftendepot bei X-Bank Zürich (CHF 1.1 Mio.).<br>• Dringend: Sofort handeln, bevor Fritz das Depot räumt!<br>• Dann: Betreibung am Arrestort (Zürich) einleiten.<br><br><strong>b) Definitive Rechtsöffnung beantragen</strong><br>• Der Vergleich von 2017 ist ein <strong>definitiver Rechtsöffnungstitel</strong>.<br>• Die Einrede «kein Wohnsitz» ist irrelevant — bei Arrest wird am Arrestort betrieben.<br>• Zuständig: Gericht am Betreibungsort (Zürich).'},
{t:'Aufgabe 11 — Pfändungsreihenfolge',q:'Sie finden im SchKG eine Regelung, welche Gegenstände dem zahlungsunfähigen Schuldner, der Schuldnerin zuerst gepfändet und verwertet werden.<br><br>a) In welchem Artikel finden Sie diese Reihenfolge?<br>b) Verkäufer:in und Käufer:in vereinbaren in ihrem Kaufvertrag, dass der Verkäufer bei einer allfälligen Betreibung der Kaufpreisforderung auswählen könne, welche Gegenstände aus dem Vermögen des Schuldners verwertet werden sollen. Ist eine solche Abmachung zulässig?',a:'<strong>a) Art. 95 SchKG</strong> — Pfändungsreihenfolge: 1. Bewegliche Sachen (Bargeld, Bankkonto, Wertpapiere), 2. Forderungen, 3. Grundstücke. Innerhalb: leicht verwertbare zuerst.<br><strong>b) Nein, nicht zulässig!</strong> Die Pfändungsreihenfolge ist <strong>zwingend</strong> (Art. 95 SchKG). Der Gläubiger kann sich vertraglich kein Wahlrecht einräumen lassen. Das Betreibungsamt bestimmt die Reihenfolge von Amtes wegen.'},
{t:'Aufgabe 12 — Betreibungsarten bei verschiedenen Forderungen',q:'Welche Betreibungsart(en) ist/sind bei den folgenden Forderungen möglich?<br><br>a) Ungesicherte Darlehensforderung gegen Privatperson<br>b) Ungesicherte Kaufpreisforderung gegen Kollektivgesellschaft<br>c) Hypothekarschuld gegen eine AG<br>d) Durch Faustpfand gesicherte Forderung gegen einen nicht im HR eingetragenen Verein<br>e) Mietzins für die Privatwohnung eines Mitglieds einer Kollektivgesellschaft',a:'<strong>a) Pfändung</strong> — Privatperson, nicht im HR.<br><strong>b) Konkurs</strong> — KolG ist im HR eingetragen (Eintragungspflicht) → Konkursbetreibung.<br><strong>c) Pfandverwertung</strong> — Hypothekarschuld = Grundpfand → immer Pfandverwertung, egal ob AG.<br><strong>d) Pfandverwertung</strong> — Faustpfand vorhanden → Pfandverwertung hat Vorrang, unabhängig vom HR-Status.<br><strong>e) Konkurs</strong> — Ein Mitglied einer KolG ist <strong>im HR eingetragen</strong> und untersteht daher der Konkursbetreibung (Art. 39 SchKG). Auch für <strong>private Schulden</strong> wie Mietzins wird auf Konkurs betrieben, weil die Person im HR haftet.'},
{t:'Aufgabe 13 — Einleitungsverfahren & Ablauf',q:'a) Was bezweckt das Einleitungsverfahren?<br>b) Was ist ein Rechtsvorschlag und wozu dient er?<br>c) Mit was wird nach dem Einleitungsverfahren das eigentliche Vollstreckungsverfahren eingeleitet?<br>d) Versuchen Sie, den groben Ablauf einer Betreibung auf Pfändung zu erklären.<br>e) Wieso findet bei der Betreibung auf Pfandverwertung keine Pfändung statt?',a:'<strong>a)</strong> Das Einleitungsverfahren klärt ab, ob der Schuldner die Forderung <strong>bestreitet oder anerkennt</strong>. Es ist bei allen drei Betreibungsarten gleich (Betreibungsbegehren → Zahlungsbefehl → evtl. Rechtsvorschlag → evtl. Rechtsöffnung → Fortsetzungsbegehren).<br><strong>b)</strong> Der Rechtsvorschlag ist die <strong>Bestreitung der Forderung</strong> durch den Schuldner, innert 10 Tagen nach Zustellung des Zahlungsbefehls. Kein Grund nötig (Art. 74 SchKG). Er hemmt die Betreibung — der Gläubiger muss dann Rechtsöffnung beantragen.<br><strong>c)</strong> Mit dem <strong>Fortsetzungsbegehren</strong> (frühestens 20 Tage, spätestens 1 Jahr nach Zustellung des Zahlungsbefehls).<br><strong>d)</strong> Betreibungsbegehren → Zahlungsbefehl → (evtl. RV → Rechtsöffnung) → Fortsetzungsbegehren → <strong>Pfändung</strong> (Betreibungsamt pfändet Vermögen) → Verwertungsbegehren → <strong>Verwertung</strong> → Verteilung → evtl. Verlustschein.<br><strong>e)</strong> Weil bereits ein <strong>Pfand vorhanden</strong> ist — das Pfand wird direkt verwertet. Eine zusätzliche Pfändung wäre überflüssig.'},
{t:'Aufgabe 14 — Marcel und Kuno',q:'Marcel ist Kuno CHF 2\'000.– aus einem privaten Darlehen schuldig. Die Abmachungen erfolgten alle mündlich. Als Marcel nicht bezahlt, schreibt ihm Kuno — als ehemaliger Student der SHL — einen Brief mit folgendem Inhalt:<br><br>«Lieber Marcel, Wie Du weisst, bist Du mir seit bald einem Jahr CHF 2\'500.– schuldig. Leider habe bis heute keine Zahlung erhalten. Ich bitte Dich ein letztes Mal, diesen Betrag innert zehn Tagen zu überweisen. Nach Ablauf dieser Frist muss ich Dich leider betreiben. Lieber Gruss – Kuno».<br><br>Wie beurteilen Sie die folgenden Reaktionen von Marcel? Was muss/kann Kuno jeweils unternehmen, um zu seinem Geld zu kommen?<br><br>a) Marcel schreibt empört zurück: «Lieber Kuno, das stimmt aber nicht, ich bin Dir nur CHF 2\'000.– schuldig und nicht CHF 2\'500.–!!! Gruss Marcel (Unterschrift).»<br>b) Marcel schreibt nicht zurück und bezahlt auch nicht.',a:'<strong>a)</strong> Marcels Brief ist eine <strong>Schuldanerkennung</strong> über CHF 2\'000! Er anerkennt die Schuld schriftlich mit Unterschrift. Kuno kann nun:<br>1. Betreibung über CHF 2\'000 einleiten (nicht 2\'500!)<br>2. Bei Rechtsvorschlag: <strong>Provisorische Rechtsöffnung</strong> beantragen — der unterschriebene Brief ist ein provisorischer Rechtsöffnungstitel.<br>3. Für die restlichen CHF 500 müsste Kuno eine Anerkennungsklage einreichen (kein Titel vorhanden).<br><br><strong>b)</strong> Marcel schreibt nicht zurück und bezahlt nicht — also auch <strong>kein Rechtsvorschlag</strong>. Kuno leitet die Betreibung ein, Zahlungsbefehl wird zugestellt. Wenn Marcel <strong>nicht reagiert</strong> (kein Rechtsvorschlag innert 10 Tagen), geht die Betreibung <strong>einfach weiter</strong> — Kuno kann das Fortsetzungsbegehren stellen, ohne Rechtsöffnung. Kein Titel nötig, weil kein Rechtsvorschlag erhoben wurde.'},
{t:'Aufgabe 15 — Fast kein verwertbares Vermögen',q:'Bei der Pfändung eines Angestellten einer Angestellten stellt sich heraus, dass fast kein verwertbares Vermögen vorliegt.<br><br>Was ist zu tun?',a:'<strong>Lohnpfändung</strong> (Art. 93 SchKG).<br><br>Wenn kein oder nur wenig pfändbares Vermögen vorhanden ist, wird der <strong>Lohn gepfändet</strong>. Dabei gilt:<br>• Nur der Betrag <strong>über dem Existenzminimum</strong> wird gepfändet<br>• Existenzminimum berechnet nach betreibungsrechtlichen Richtlinien (Grundbetrag + Miete + Krankenkasse + Kinder)<br>• Wenn auch der Lohn das Existenzminimum nicht übersteigt → <strong>Verlustschein</strong> (Art. 149 SchKG)'},
{t:'Aufgabe 16 — Konkurs Einzelfirma',q:'Die im Handelsregister eingetragene Einzelfirma «Bernd Brummer – Unternehmensberatung» wurde betrieben und schliesslich wurde der Konkurs eröffnet. Verschiedene Vermögenswerte erbrachten in der Verwertung einen Reinerlös von CHF 12\'000.–.<br><br>Wer erhält wie viel, wenn folgende Gläubiger:innen mit folgenden Forderungen (inkl. Zinsen und Kosten) beteiligt sind?<br>– Autoleasing AG, Forderung aus Leasingraten, CHF 3\'600.–<br>– Geschiedene Ex-Frau, Alimente für die letzten 9 Monate vor dem Konkursbegehren (9 × CHF 1\'000.–)<br>– Sparbank, Darlehen, CHF 11\'400.–',a:'<strong>Verteilung nach Konkursklassen:</strong><br><br><strong>1. Klasse:</strong> Alimente — aber nur die letzten <strong>6 Monate</strong> vor Konkurseröffnung (Art. 219 SchKG). → CHF 6\'000 (voll gedeckt aus CHF 12\'000).<br><br>Verbleibend: CHF 12\'000 − 6\'000 = <strong>CHF 6\'000</strong><br><br><strong>2. Klasse:</strong> Keine Forderungen vorhanden.<br><br><strong>3. Klasse:</strong> Autoleasing CHF 3\'600 + Sparbank CHF 11\'400 + restliche 3 Monate Alimente CHF 3\'000 = Total <strong>CHF 18\'000</strong>.<br>Vorhanden: CHF 6\'000 → <strong>Dividende: 6\'000 / 18\'000 = 33.3%</strong><br>• Autoleasing: CHF 1\'200<br>• Sparbank: CHF 3\'800<br>• Ex-Frau (3 Mt. Rest): CHF 1\'000<br><br>Für den ungedeckten Rest erhalten alle einen <strong>Verlustschein</strong>.'},
{t:'Aufgabe 17 — Retentionsrecht Hotel',q:'Frau Zwist war Gast im Hotel Krachhof. Sie beschwerte sich über den lausigen Service beim Hoteldirektor und kündigte ihm an, die Hotelrechnung nicht zu bezahlen. Der Hoteldirektor beschlagnahmte daraufhin eigenhändig das sich im Hotelzimmer befindliche Notebook und hinterlegte einen Zettel mit der Bemerkung «Wir behalten das Notebook als Pfand, bis Sie die Hotelrechnung bezahlt haben.»<br><br>Frau Zwist reiste erzürnt ab. Einige Tage später erhielt sie eine Betreibung auf Pfändung oder Konkurs vom zuständigen Betreibungsamt.<br><br>Was kann Frau Zwist alles unternehmen?',a:'<strong>1. Eigenmächtige Beschlagnahme ist widerrechtlich!</strong> Man darf nicht einfach Sachen wegnehmen. Es gibt zwar ein Retentionsrecht des Gastwirts (Art. 491 OR), aber dieses muss <strong>korrekt über das Betreibungsamt</strong> geltend gemacht werden — nicht durch Selbstjustiz. Die eigenmächtige Wegnahme des Notebooks ist <strong>strafbar</strong>.<br><br><strong>2. Frau Zwist kann:</strong><br>• <strong>Strafanzeige</strong> gegen den Hoteldirektor erstatten (man darf nicht einfach Dinge wegnehmen)<br>• <strong>Rechtsvorschlag erheben</strong> (innert 10 Tagen) — stoppt die Betreibung sofort<br>• <strong>Falsche Betreibungsart rügen:</strong> Wenn der Hotelier ein Pfandrecht geltend macht, müsste es <strong>Pfandverwertung</strong> sein, nicht Pfändung/Konkurs<br>• Am Schluss muss sie bezahlen, was sie tatsächlich bezogen hat — aber auf dem <strong>korrekten Rechtsweg</strong>.'},
{t:'Aufgabe 18 — Arrestbegehren',q:'Hat in den folgenden Fällen ein Arrestbegehren Aussicht auf Erfolg?<br><br>a) Frau Zwist ist auf Ferienreise. Unterwegs übernachtet sie für zwei Nächte wieder einmal im Hotel Krachhof. Da sie mit den Leistungen nicht zufrieden ist, erklärt sie am ersten Morgen, sie werde die Hotelrechnung am nächsten Tag nicht bezahlen. Die Rechnung ist gemäss Vereinbarung vor Abreise zu bezahlen.<br>b) Nach dem Tod von Pablo Emilio Escobar Gaviria, einem ehemaligen südamerikanischen Drogenbaron, findet man ein Bankkonto über mehrere Mio. US$ in der Schweiz. In den USA lebende Drogenopfer klagen auf 30 Mio. US$ Schadenersatz. Der Prozess ist noch am Laufen und es gibt noch kein Urteil.<br>c) Ein Fahrender hat in einem Fernseh- und Radiogeschäft einen Fernseher gekauft und nicht bezahlt. Der Fernsehhändler weiss von Kollegen, dass der Fahrende in Sursee einen Lagerschuppen gemietet hat. Er vermutet, dass sich darin Vermögenswerte des Fahrenden befinden.',a:'<strong>a) Nein</strong> — Die Rechnung ist noch <strong>nicht fällig</strong> (erst «vor Abreise», und Frau Zwist ist noch im Hotel). Arrest setzt eine <strong>fällige Forderung</strong> voraus.<br><br><strong>b) Nein</strong> — Der Prozess läuft noch, es gibt <strong>kein Urteil</strong>. Ohne Urteil bzw. fällige Forderung fehlt die Grundlage für einen Arrest.<br><br><strong>c) Nein</strong> — Der Fernsehhändler <strong>vermutet</strong> nur, dass sich Vermögenswerte im Lagerschuppen befinden. Für einen Arrest muss man die Vermögenswerte <strong>kennen</strong> und genau bezeichnen können. Eine blosse Vermutung reicht nicht aus.'},
{t:'Aufgabe 19 — Provisorische Rechtsöffnung & Arrest',q:'Charlotte Brotlos ist im HR des Kantons Zürich als Einzelunternehmerin eingetragen. Balduin Reich wurde dank des Darlehensvertrages provisorische Rechtsöffnung erteilt. Er hat erfahren, dass Charlotte Brotlos daran ist, ihre Boutique zu verschenken, um diese vor dem Konkurs zu retten.<br><br>Was ist wo und bei wem zu unternehmen?',a:'<strong>1. Güterverzeichnis verlangen</strong> (Art. 162 SchKG) als Sicherungsmassnahme — Inventar aufnehmen lassen. Damit werden alle Vermögenswerte von Charlotte erfasst und sie darf bei Straffolge nichts mehr veräussern oder verschenken.<br><br><strong>2. Betreibung weiterführen</strong> — Charlotte ist im HR → Konkursverfahren möglich. Nach provisorischer Rechtsöffnung Konkursbegehren stellen.<br><br><strong>Wichtig: Arrest geht hier NICHT</strong> — Charlotte will die Boutique nur verschenken. Verschenken allein ist kein Arrestgrund im Sinne von Art. 271 SchKG. Das Güterverzeichnis ist das richtige Sicherungsmittel.'},
{t:'Aufgabe 20 — Konkursverhandlung',q:'Nachdem Balduin Reich das Fortsetzungsbegehren gestellt hatte, erhielt Charlotte Brotlos die Konkursandrohung. Sie zahlte daraufhin CHF 20\'000, den Rest blieb sie schuldig. Balduin Reich stellte deshalb das Konkursbegehren beim zuständigen Richter. Wie wird dieser entscheiden, wenn Charlotte Brotlos in der Verhandlung Folgendes geltend macht?<br><br>a) Sie habe den Darlehensvertrag über CHF 100\'000 zwar unterzeichnet, als Darlehenssumme aber nur CHF 20\'000 erhalten. Diese habe sie zurückbezahlt.<br>b) Die Konkursandrohung sei ihr während der Betreibungsferien zugestellt worden und deshalb ungültig.<br>c) Sie sei vor gut einem Jahr aus dem Handelsregister gelöscht worden und unterstehe nicht mehr der Konkursbetreibung.<br>d) Sie habe mit Balduin Reich schriftlich vereinbart, dass dieser die Betreibung nicht fortsetze, wenn sie eine Anzahlung von CHF 20\'000 leiste, was sie getan habe.',a:'<strong>a)</strong> Charlotte hätte diesen Einwand <strong>zu Beginn</strong> geltend machen müssen — nämlich innert 20 Tagen nach der provisorischen Rechtsöffnung mittels <strong>Aberkennungsklage</strong>. Da sie das nicht getan hat, ist die Forderung definitiv. Im Konkursverfahren ist dieser Einwand zu spät.<br><br><strong>b)</strong> Charlotte hätte <strong>selbst Beschwerde erheben</strong> müssen (Art. 17 SchKG, innert 10 Tagen) gegen die Zustellung während der Betreibungsferien. Da sie das nicht getan hat, ist die Konkursandrohung gültig. Beschwerdefrist verpasst.<br><br><strong>c)</strong> Hier ist ein <strong>Fehler im Verfahren</strong> passiert. Wenn Charlotte vor über einem Jahr aus dem HR gelöscht wurde, ist sie nicht mehr konkursfähig. Man ist im <strong>komplett falschen Verfahren</strong>. Konkurs wird <strong>nicht eröffnet</strong>. Prüfung auf Zefix.ch hätte das gezeigt.<br><br><strong>d)</strong> Konkursbegehren wird abgewiesen gestützt auf <strong>Art. 172 SchKG</strong> — Charlotte hat eine schriftliche Stundungsvereinbarung und hat die Anzahlung geleistet.'},
{t:'Aufgabe 21 — Paulianische Anfechtung AG',q:'Der VR der Pleite AG stellt fest, dass er aufgrund der schlechten Vermögenslage verpflichtet wäre, dem Konkursrichter die Bilanz vorzulegen (Art. 725 Abs. 2 OR). Um die drohende Zwangsverwertung zu verhindern, kauft die Pleite AG bei ihrer Muttergesellschaft Flop AG alte, längst abgeschriebene Maschinen. Diese bezahlt sie, indem sie ihre neuen Büromöbel an Zahlung gibt.<br><br>Was kann die Delkredere-Bank unternehmen, die von diesem Handel erfährt und gegen die Pleite AG noch eine grössere Kreditforderung hat, die in zwei Monaten zur Rückzahlung fällig wird?<br><br>a) Wenn die Möbel noch bei der Pleite AG sind?<br>b) Wenn die Möbel bereits an die Flop AG übertragen worden sind?',a:'<strong>a) Arrest</strong> — Die Bank kann einen Arrest auf die Büromöbel beantragen (Art. 271 SchKG), Arrestgrund: Vermögensverschleuderung. Zudem: Konkursanzeige bei der zuständigen Behörde gemäss Art. 725 OR.<br><br><strong>b) Paulianische Anfechtung</strong> (Art. 285ff. SchKG) — Der Verkauf der neuen Büromöbel gegen alte, wertlose Maschinen ist ein <strong>Übervorteilungsgeschäft</strong>. Die Bank kann die Anfechtungsklage erheben und verlangen, dass die Büromöbel in die Konkursmasse zurückkommen.'}
];
var schkgFallIdx=0;

window.schkgGenFall=function(){
var f=SCHKG_FAELLE[schkgFallIdx];var w=document.getElementById('schkg_fall_wrap');if(!w)return;
w.innerHTML='<div class="c" style="padding:20px 24px"><h3 style="color:var(--ac);margin-bottom:8px">'+f.t+'</h3><div class="cd" style="line-height:1.8">'+f.q+'</div><div style="margin-top:12px"><textarea id="schkg_fall_answer" style="width:100%;min-height:100px;padding:12px;border-radius:12px;border:1px solid var(--bd);background:var(--s2);color:var(--tx);font-family:var(--f);font-size:13px;resize:vertical" placeholder="Schreibe deine Antwort hier..."></textarea></div></div>';
document.getElementById('schkg_fall_sol').style.display='none';document.getElementById('schkg_fall_sol').innerHTML='';
};
window.schkgShowFallSol=function(){var f=SCHKG_FAELLE[schkgFallIdx];var s=document.getElementById('schkg_fall_sol');s.style.display='block';s.innerHTML='<div class="c cg" style="padding:16px 20px"><div class="ct2">Lösung</div><div class="cd" style="line-height:1.8">'+f.a+'</div></div>';};
window.schkgNextFall=function(){schkgFallIdx=(schkgFallIdx+1)%SCHKG_FAELLE.length;schkgGenFall();};
window.schkgResetFall=function(){var t=document.getElementById('schkg_fall_answer');if(t)t.value='';document.getElementById('schkg_fall_sol').style.display='none';};

// --- ZUORDNUNG: Betreibungsart ---
var SCHKG_ZUORD=[
{q:'Privatperson, kein HR-Eintrag, offene Handyrechnung',a:'Pfändung',e:'Nicht im HR → Pfändung'},
{q:'AG mit offener Lieferantenrechnung',a:'Konkurs',e:'AG = immer im HR → Konkurs'},
{q:'GmbH zahlt Miete nicht',a:'Konkurs',e:'GmbH = immer im HR → Konkurs'},
{q:'Hypothekarschuld auf Haus',a:'Pfandverwertung',e:'Grundpfand → immer Pfandverwertung'},
{q:'Einzelfirma im HR, offenes Darlehen',a:'Konkurs',e:'Im HR eingetragen → Konkurs'},
{q:'Student hat Kreditkartenschulden',a:'Pfändung',e:'Privatperson → Pfändung'},
{q:'Durch Faustpfand (Auto) gesichertes Darlehen',a:'Pfandverwertung',e:'Pfand vorhanden → Pfandverwertung'},
{q:'KolG zahlt Warenlieferung nicht',a:'Konkurs',e:'KolG im HR → Konkurs'},
{q:'Verein (nicht im HR) schuldet Saalmiete',a:'Pfändung',e:'Nicht im HR → Pfändung'},
{q:'Alimente gegen geschiedenen Ehemann (Privatperson)',a:'Pfändung',e:'Privatperson + Unterhalt → Pfändung (Art. 43 SchKG)'},
{q:'Genossenschaft mit offener Rechnung',a:'Konkurs',e:'Genossenschaft = im HR → Konkurs'},
{q:'Kommanditgesellschaft zahlt nicht',a:'Konkurs',e:'KmG im HR → Konkurs'},
{q:'Einfache Gesellschaft — Mietschulden',a:'Pfändung',e:'eG hat keine Rechtspersönlichkeit, nicht im HR → Betreibung gegen Gesellschafter → Pfändung'},
{q:'Darlehen gesichert durch Grundpfand auf Ferienhaus',a:'Pfandverwertung',e:'Grundpfand → Pfandverwertung, egal wer Schuldner ist'},
{q:'Stiftung im HR, offene Rechnung',a:'Konkurs',e:'Im HR → Konkurs'},
{q:'Steuerforderung gegen eine AG',a:'Pfändung',e:'Steuern = IMMER Pfändung (Art. 43 SchKG), auch wenn AG im HR!'},
{q:'Steuerforderung gegen Privatperson',a:'Pfändung',e:'Steuern = immer Pfändung (Art. 43 SchKG)'}
];
var schkgZuordSet=[];

window.schkgGenZuord=function(){
var pool=SCHKG_ZUORD.slice();for(var i=pool.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1));var t=pool[i];pool[i]=pool[j];pool[j]=t;}
schkgZuordSet=pool.slice(0,6);
var opts=['Pfändung','Konkurs','Pfandverwertung'];
var h='';schkgZuordSet.forEach(function(z,i){
h+='<div class="c" id="schkg_z_'+i+'" style="padding:14px 18px;margin-bottom:8px"><div class="cd" style="margin-bottom:8px">'+z.q+'</div>';
h+='<select id="schkg_zs_'+i+'" style="padding:6px 12px;border-radius:8px;border:1px solid var(--bd);background:var(--s2);color:var(--tx);font-family:var(--f);font-size:13px"><option value="">— Betreibungsart wählen —</option>';
opts.forEach(function(o){h+='<option value="'+o+'">'+o+'</option>';});
h+='</select><div id="schkg_zfb_'+i+'" style="display:none;margin-top:6px;font-size:12px"></div></div>';});
document.getElementById('schkg_zuord_wrap').innerHTML=h;document.getElementById('schkg_zuord_res').innerHTML='';
};
window.schkgCheckZuord=function(){var c=0;schkgZuordSet.forEach(function(z,i){var sel=document.getElementById('schkg_zs_'+i);var fb=document.getElementById('schkg_zfb_'+i);var card=document.getElementById('schkg_z_'+i);if(!sel||!fb||!card)return;fb.style.display='block';if(sel.value===z.a){card.style.borderLeft='3px solid var(--g)';fb.innerHTML='<span style="color:var(--g)">✓ Richtig!</span> '+z.e;c++;}else{card.style.borderLeft='3px solid var(--r)';fb.innerHTML='<span style="color:var(--r)">✗</span> Richtig: <strong>'+z.a+'</strong> — '+z.e;}});document.getElementById('schkg_zuord_res').innerHTML='<div class="'+(c===schkgZuordSet.length?'hlg':'hla')+'">'+c+' von '+schkgZuordSet.length+' richtig</div>';};
window.schkgNextZuord=function(){schkgGenZuord();};
window.schkgResetZuord=function(){schkgZuordSet.forEach(function(z,i){var s=document.getElementById('schkg_zs_'+i);if(s)s.value='';var f=document.getElementById('schkg_zfb_'+i);if(f){f.style.display='none';}var c=document.getElementById('schkg_z_'+i);if(c)c.style.borderLeft='';});document.getElementById('schkg_zuord_res').innerHTML='';};

// --- RICHTIG/FALSCH ---
var SCHKG_RF=[
{q:'Das SchKG gilt nur für Geldforderungen.',a:true,e:'Für nicht-monetäre Ansprüche gilt die ZPO.'},
{q:'Samstag ist ein Ruhetag im SchKG.',a:false,e:'Samstag ist KEIN Ruhetag! Nur Sonntage und Feiertage (Art. 56 SchKG).'},
{q:'Jeder kann jeden betreiben — ohne Beweis der Forderung.',a:true,e:'Das Betreibungsamt prüft die Forderung NICHT. Kein Nachweis nötig.'},
{q:'Der Betreibungsort kann vertraglich vereinbart werden.',a:false,e:'Betreibungsort ist ZWINGEND der Wohnsitz (Art. 46 SchKG). Nicht verhandelbar.'},
{q:'Der Rechtsvorschlag muss begründet werden.',a:false,e:'Kein Grund nötig. Einfach innert 10 Tagen erheben (Art. 74 SchKG).'},
{q:'Bei falscher Betreibungsart muss der Schuldner Rechtsvorschlag erheben.',a:false,e:'Nein → BESCHWERDE! Falsche Betreibungsart = Verfahrensfehler.'},
{q:'Betreibungsferien dauern vom 15. bis 31. Juli.',a:true,e:'Plus 7 Tage vor/nach Ostern und Weihnachten (Art. 56 SchKG).'},
{q:'Wer im HR eingetragen ist, wird auf Konkurs betrieben.',a:true,e:'Art. 39 SchKG — auch für private Schulden!'},
{q:'Kompetenzstücke (Existenzminimum) dürfen nicht gepfändet werden.',a:true,e:'Art. 92 SchKG — lebensnotwendige Gegenstände, Berufswerkzeuge etc.'},
{q:'Bei der Pfändung werden alle Gläubiger gleichmässig befriedigt.',a:false,e:'Nur die am Verfahren beteiligten Gläubiger (Pfändunsgruppe). Beim Konkurs: alle.'},
{q:'Ein Verlustschein verjährt nach 20 Jahren.',a:true,e:'Art. 149a SchKG — Verlustschein = neue Forderung mit 20-jähriger Verjährung.'},
{q:'Die provisorische Rechtsöffnung setzt ein Gerichtsurteil voraus.',a:false,e:'Provisorisch = Schuldanerkennung. Definitiv = Gerichtsurteil.'},
{q:'Der Arrest kann nur bei Fluchtgefahr des Schuldners beantragt werden.',a:false,e:'Art. 271 SchKG: auch bei Vermögensverschleuderung, fehlendem Wohnsitz etc.'},
{q:'Im Konkurs gibt es drei Klassen von Gläubigern.',a:true,e:'1. Klasse: Arbeitnehmer, AHV. 2. Klasse: Miete. 3. Klasse: alle übrigen.'},
{q:'Bei der Betreibung auf Pfandverwertung findet keine Pfändung statt.',a:true,e:'Das Pfand wird direkt verwertet — keine Pfändung nötig.'},
{q:'Die Frist für den Rechtsvorschlag beträgt 20 Tage.',a:false,e:'10 Tage! (Art. 74 SchKG). 20 Tage = Frist für Fortsetzungsbegehren.'},
{q:'Beschwerde gegen Betreibungshandlungen: innert 10 Tagen.',a:true,e:'Art. 17 SchKG. Bei Rechtsverweigerung: jederzeit.'},
{q:'Die Betreibung auf Pfändung ist eine Generalexekution.',a:false,e:'Pfändung = Spezialexekution (nur so viel wie nötig). Konkurs = Generalexekution.'},
{q:'Unterhaltsbeiträge unterliegen NICHT dem Rechtsstillstand.',a:true,e:'Art. 57 SchKG — Unterhalt wird immer betrieben, auch bei Militärdienst etc.'},
{q:'Bei Grundpfand wird am Ort des Grundstücks betrieben.',a:true,e:'Art. 51 SchKG — Ausnahme vom Wohnsitzprinzip.'},
{q:'Steuerforderungen gegen eine AG werden auf Konkurs betrieben.',a:false,e:'Steuern werden IMMER auf Pfändung betrieben (Art. 43 SchKG), auch bei im HR eingetragenen Personen!'}
];
var schkgRFSet=[];

window.schkgGenRF=function(){var pool=SCHKG_RF.slice();for(var i=pool.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1));var t=pool[i];pool[i]=pool[j];pool[j]=t;}schkgRFSet=pool.slice(0,8);var h='';schkgRFSet.forEach(function(q,i){h+='<div class="c" id="schkg_rf_'+i+'" style="padding:14px 18px;margin-bottom:8px"><div class="cd" style="margin-bottom:8px">'+q.q+'</div><label style="margin-right:16px;cursor:pointer"><input type="radio" name="schkg_rf_'+i+'" value="true"> Richtig</label><label style="cursor:pointer"><input type="radio" name="schkg_rf_'+i+'" value="false"> Falsch</label><div id="schkg_rffb_'+i+'" style="display:none;margin-top:6px;font-size:12px"></div></div>';});document.getElementById('schkg_rf_wrap').innerHTML=h;document.getElementById('schkg_rf_res').innerHTML='';};
window.schkgCheckRF=function(){var c=0;schkgRFSet.forEach(function(q,i){var sel=document.querySelector('input[name="schkg_rf_'+i+'"]:checked');var fb=document.getElementById('schkg_rffb_'+i);var card=document.getElementById('schkg_rf_'+i);if(!fb||!card)return;fb.style.display='block';if(sel&&sel.value===String(q.a)){card.style.borderLeft='3px solid var(--g)';fb.innerHTML='<span style="color:var(--g)">✓</span> '+q.e;c++;}else{card.style.borderLeft='3px solid var(--r)';fb.innerHTML='<span style="color:var(--r)">✗</span> '+(q.a?'Richtig':'Falsch')+' — '+q.e;}});document.getElementById('schkg_rf_res').innerHTML='<div class="'+(c===schkgRFSet.length?'hlg':'hla')+'">'+c+' von '+schkgRFSet.length+' richtig</div>';};
window.schkgNextRF=function(){schkgGenRF();};
window.schkgResetRF=function(){schkgRFSet.forEach(function(q,i){document.querySelectorAll('input[name="schkg_rf_'+i+'"]').forEach(function(r){r.checked=false;});var f=document.getElementById('schkg_rffb_'+i);if(f)f.style.display='none';var c=document.getElementById('schkg_rf_'+i);if(c)c.style.borderLeft='';});document.getElementById('schkg_rf_res').innerHTML='';};

// --- ARTIKEL ZUORDNEN ---
var SCHKG_ARTQ=[
{q:'Betreibung ist am Wohnsitz des Schuldners einzuleiten.',a:'Art. 46 SchKG',opts:['Art. 17 SchKG','Art. 39 SchKG','Art. 46 SchKG','Art. 56 SchKG']},
{q:'Wer im HR eingetragen ist, unterliegt der Konkursbetreibung.',a:'Art. 39 SchKG',opts:['Art. 39 SchKG','Art. 46 SchKG','Art. 56 SchKG','Art. 74 SchKG']},
{q:'Beschwerde innert 10 Tagen bei der Aufsichtsbehörde.',a:'Art. 17 SchKG',opts:['Art. 17 SchKG','Art. 46 SchKG','Art. 74 SchKG','Art. 93 SchKG']},
{q:'Rechtsvorschlag innert 10 Tagen, ohne Begründung.',a:'Art. 74 SchKG',opts:['Art. 17 SchKG','Art. 56 SchKG','Art. 74 SchKG','Art. 82 SchKG']},
{q:'Geschlossene Zeiten: 20–7 Uhr, Sonn- und Feiertage.',a:'Art. 56 SchKG',opts:['Art. 46 SchKG','Art. 56 SchKG','Art. 74 SchKG','Art. 93 SchKG']},
{q:'Lohnpfändung: nur über dem Existenzminimum.',a:'Art. 93 SchKG',opts:['Art. 89 SchKG','Art. 92 SchKG','Art. 93 SchKG','Art. 95 SchKG']},
{q:'Nicht pfändbare Gegenstände (Kompetenzstücke).',a:'Art. 92 SchKG',opts:['Art. 89 SchKG','Art. 92 SchKG','Art. 93 SchKG','Art. 95 SchKG']},
{q:'Pfandverwertung bei bestehendem Pfand.',a:'Art. 151 SchKG',opts:['Art. 89 SchKG','Art. 151 SchKG','Art. 271 SchKG','Art. 285 SchKG']},
{q:'Arrest zur Sicherung von Vermögenswerten.',a:'Art. 271 SchKG',opts:['Art. 151 SchKG','Art. 271 SchKG','Art. 285 SchKG','Art. 56 SchKG']},
{q:'Paulianische Anfechtung (Rückgängigmachung von Rechtshandlungen).',a:'Art. 285 SchKG',opts:['Art. 271 SchKG','Art. 285 SchKG','Art. 149 SchKG','Art. 39 SchKG']},
{q:'Betreibungsregister: Einsicht bei glaubhaftem Interesse.',a:'Art. 8a SchKG',opts:['Art. 2 SchKG','Art. 8a SchKG','Art. 17 SchKG','Art. 39 SchKG']},
{q:'Verlustschein: 20 Jahre Verjährung.',a:'Art. 149a SchKG',opts:['Art. 93 SchKG','Art. 149 SchKG','Art. 149a SchKG','Art. 271 SchKG']}
];
var schkgArtSet=[];

window.schkgGenArt=function(){var pool=SCHKG_ARTQ.slice();for(var i=pool.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1));var t=pool[i];pool[i]=pool[j];pool[j]=t;}schkgArtSet=pool.slice(0,5);var h='';schkgArtSet.forEach(function(q,i){var opts=q.opts.slice();for(var k=opts.length-1;k>0;k--){var j=Math.floor(Math.random()*(k+1));var t=opts[k];opts[k]=opts[j];opts[j]=t;}h+='<div class="c" id="schkg_aq_'+i+'" style="padding:14px 18px;margin-bottom:8px"><div class="cd" style="margin-bottom:8px;font-style:italic">«'+q.q+'»</div><select id="schkg_as_'+i+'" style="padding:6px 12px;border-radius:8px;border:1px solid var(--bd);background:var(--s2);color:var(--tx);font-family:var(--f);font-size:13px"><option value="">— Artikel wählen —</option>';opts.forEach(function(o){h+='<option value="'+o+'">'+o+'</option>';});h+='</select><div id="schkg_afb_'+i+'" style="display:none;margin-top:6px;font-size:12px"></div></div>';});document.getElementById('schkg_art_wrap').innerHTML=h;document.getElementById('schkg_art_res').innerHTML='';};
window.schkgCheckArt=function(){var c=0;schkgArtSet.forEach(function(q,i){var sel=document.getElementById('schkg_as_'+i);var fb=document.getElementById('schkg_afb_'+i);var card=document.getElementById('schkg_aq_'+i);if(!sel||!fb||!card)return;fb.style.display='block';if(sel.value===q.a){card.style.borderLeft='3px solid var(--g)';fb.innerHTML='<span style="color:var(--g)">✓</span>';c++;}else{card.style.borderLeft='3px solid var(--r)';fb.innerHTML='<span style="color:var(--r)">✗</span> Richtig: <strong>'+q.a+'</strong>';}});document.getElementById('schkg_art_res').innerHTML='<div class="'+(c===schkgArtSet.length?'hlg':'hla')+'">'+c+' von '+schkgArtSet.length+' richtig</div>';};
window.schkgNextArt=function(){schkgGenArt();};
window.schkgResetArt=function(){schkgArtSet.forEach(function(q,i){var s=document.getElementById('schkg_as_'+i);if(s)s.value='';var f=document.getElementById('schkg_afb_'+i);if(f)f.style.display='none';var c=document.getElementById('schkg_aq_'+i);if(c)c.style.borderLeft='';});document.getElementById('schkg_art_res').innerHTML='';};

// --- MULTIPLE CHOICE ---
var SCHKG_MC=[
{q:'Was prüft das Betreibungsamt bei einem Betreibungsbegehren?',opts:['Ob die Forderung berechtigt ist','Ob der Schuldner zahlungsfähig ist','Ob formelle Voraussetzungen erfüllt sind','Ob der Gläubiger gutgläubig ist'],a:2,e:'Das Betreibungsamt prüft NUR die formellen Voraussetzungen — nie die Forderung selbst.'},
{q:'Welche Betreibungsart ist eine Generalexekution?',opts:['Pfändung','Pfandverwertung','Konkurs','Wechselbetreibung'],a:2,e:'Konkurs = Generalexekution (gesamtes Vermögen, alle Gläubiger).'},
{q:'Wie lange ist der Rechtsvorschlag zu erheben?',opts:['5 Tage','10 Tage','20 Tage','30 Tage'],a:1,e:'10 Tage ab Zustellung des Zahlungsbefehls (Art. 74 SchKG).'},
{q:'Wann beginnt die Frist nach Zustellung?',opts:['Am Tag der Zustellung','Am Tag nach der Zustellung','2 Tage nach Zustellung','Am Montag danach'],a:1,e:'Fristbeginn = Tag NACH Zustellung. Tag der Zustellung zählt nicht mit.'},
{q:'Was ist ein Verlustschein?',opts:['Eine Strafanzeige','Ein Schuldenerlass','Eine neue Forderung mit 20 Jahren Verjährung','Ein Zahlungsbefehl'],a:2,e:'Verlustschein = Bescheinigung über die ungedeckte Forderung. Gilt als neue Forderung mit 20-jähriger Verjährung (Art. 149a SchKG).'},
{q:'In welche Konkursklasse fallen Arbeitnehmerforderungen?',opts:['1. Klasse','2. Klasse','3. Klasse','Keine Klasse'],a:0,e:'1. Klasse: Arbeitnehmerforderungen (letzte 6 Monate), AHV/IV/Suva-Beiträge.'},
{q:'Was ist der Unterschied zwischen provisorischer und definitiver Rechtsöffnung?',opts:['Keine — beides ist gleich','Provisorisch = Schuldanerkennung, Definitiv = Urteil','Provisorisch = Urteil, Definitiv = Schuldanerkennung','Provisorisch = gratis, Definitiv = kostenpflichtig'],a:1,e:'Provisorisch: Schuldanerkennung (z.B. unterschriebener Vertrag). Definitiv: rechtskräftiges Urteil.'},
{q:'Was ist ein Arrestgrund nach Art. 271 SchKG?',opts:['Schuldner ist krank','Schuldner hat keinen festen Wohnsitz in der CH','Schuldner hat wenig Geld','Schuldner ist im Ausland geboren'],a:1,e:'Arrestgründe: kein fester Wohnsitz in CH, Vermögensverschleuderung, Fluchtgefahr, Durchreise.'},
{q:'Wer bestimmt die Betreibungsart?',opts:['Der Gläubiger','Der Schuldner','Das Betreibungsamt von Amtes wegen','Das Gericht'],a:2,e:'Das Betreibungsamt bestimmt die Betreibungsart von Amtes wegen (Art. 38ff. SchKG).'},
{q:'Was passiert bei Betreibung am falschen Ort?',opts:['Rechtsvorschlag erheben','Beschwerde erheben','Nichts — ist egal','Strafanzeige erstatten'],a:1,e:'Falscher Betreibungsort = Verfahrensfehler → Beschwerde (Art. 17 SchKG), NICHT Rechtsvorschlag!'},
{q:'Wie lange sind Betreibungsregister-Einträge sichtbar?',opts:['1 Jahr','3 Jahre','5 Jahre','10 Jahre'],a:2,e:'5 Jahre nach Zustellung des Zahlungsbefehls (Art. 8a SchKG).'},
{q:'Was bedeutet «subsidiäre Haftung» im Betreibungsrecht?',opts:['Haftung nur bei Vorsatz','Erst nach erfolgloser Betreibung der Gesellschaft','Haftung nur bis CHF 10\'000','Haftung nur für eigene Schulden'],a:1,e:'Subsidiär = zuerst muss die Gesellschaft erfolglos betrieben werden, dann die Gesellschafter persönlich.'}
];
var schkgMCIdx=0;

window.schkgGenMC=function(){var q=SCHKG_MC[schkgMCIdx];var w=document.getElementById('schkg_mc_wrap');if(!w)return;var h='<div class="c" style="padding:20px 24px"><div class="ct2" style="margin-bottom:12px">'+q.q+'</div>';q.opts.forEach(function(o,i){h+='<label style="display:block;padding:10px 14px;margin:4px 0;border-radius:10px;border:1px solid var(--bd);cursor:pointer;transition:all .2s" onmouseover="this.style.background=\'var(--s2)\'" onmouseout="this.style.background=\'\'"><input type="radio" name="schkg_mc" value="'+i+'" style="margin-right:8px"> '+o+'</label>';});h+='</div>';w.innerHTML=h;document.getElementById('schkg_mc_res').innerHTML='';};
window.schkgCheckMC=function(){var q=SCHKG_MC[schkgMCIdx];var sel=document.querySelector('input[name="schkg_mc"]:checked');var res=document.getElementById('schkg_mc_res');if(!sel){res.innerHTML='<div class="hla">Bitte wähle eine Antwort.</div>';return;}if(parseInt(sel.value)===q.a){res.innerHTML='<div class="hlg">✓ Richtig! '+q.e+'</div>';}else{res.innerHTML='<div class="hlr">✗ Falsch. Richtig: <strong>'+q.opts[q.a]+'</strong><br>'+q.e+'</div>';}};
window.schkgNextMC=function(){schkgMCIdx=(schkgMCIdx+1)%SCHKG_MC.length;schkgGenMC();};
window.schkgResetMC=function(){document.querySelectorAll('input[name="schkg_mc"]').forEach(function(r){r.checked=false;});document.getElementById('schkg_mc_res').innerHTML='';};

})();
