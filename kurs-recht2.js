// ===== KURS: RECHT 2 — SchKG =====
// Auto-generated module for This Is Student
(function() {

// Course config
const courseConfig = {
  id: 'recht2',
  name: 'Recht 2 — SchKG',
  pages: ['grund','einl','ablauf','pfand','pvw','konk','sich','mind','kart','quiz','glossar','recht2'],
  subNav: [
  {s:'recht2',l:'Übersicht'},
  {s:'grund',l:'Grundlagen'},{s:'einl',l:'Einleitung'},{s:'ablauf',l:'Ablauf'},{s:'pfand',l:'Pfändung'},
  {s:'pvw',l:'Pfandverwertung'},{s:'konk',l:'Konkurs'},{s:'sich',l:'Sicherung'},
  {s:'mind',l:'Zusammenfassung'},{s:'kart',l:'Karten'},{s:'quiz',l:'Quiz'},{s:'glossar',l:'Glossar'}
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
<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:12px">
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
<div class="hl"><strong>Keine Pfändung</strong> nötig — Pfand wird direkt verwertet. Gläubiger darf nie eigenmächtig verwerten!</div>
<div style="display:flex;gap:8px;margin:12px 0 4px"><button style="font-size:11px;padding:4px 10px" onclick="this.parentElement.nextElementSibling.querySelectorAll('.tl-item').forEach(i=>i.classList.add('open'))">Alle aufklappen</button><button style="font-size:11px;padding:4px 10px" onclick="this.parentElement.nextElementSibling.querySelectorAll('.tl-item').forEach(i=>i.classList.remove('open'))">Alle schliessen</button></div>
<div class="tl">
<div class="tl-item"><div class="tl-num tl-num-p">1</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Begehren mit Pfandangabe <span class="b bp">Artikel 151</span></div><div class="tl-merksatz">«Pfand gleich angeben — sonst wird normal betrieben.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body">Gläubiger muss Pfandgegenstand bereits im Begehren angeben.</div><div class="merksatz">Merke: Wer ein Pfand hat, muss das von Anfang an sagen.</div></div></div>
<div class="tl-item"><div class="tl-num tl-num-p">2</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Längere Zahlungsfristen <span class="b bp">Artikel 152</span></div><div class="tl-merksatz">«Faustpfand = 1 Monat. Grundpfand = 6 Monate.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-sub"><div class="c cp"><div class="ct2">Faustpfand</div><div class="cd"><span class="b bp">1 Monat</span> Zahlungsfrist. Verwertung: maximal <span class="b bp">1 Jahr</span> <span class="b bp">Artikel 154</span>.</div></div><div class="c cp"><div class="ct2">Grundpfand</div><div class="cd"><span class="b bp">6 Monate</span> Zahlungsfrist. Verwertung: maximal <span class="b bp">2 Jahre</span> <span class="b bp">Artikel 154</span>.</div></div></div><div class="merksatz">Merke: Grundpfand = halbes Jahr. Kein Wunder — man verliert potenziell sein Haus.</div></div></div>
<div class="tl-item"><div class="tl-num tl-num-p">3</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Direkt zur Verwertung</div><div class="tl-merksatz">«Keine Pfändung nötig — das Pfand ist ja schon da.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body">Pfand wird direkt durch das Betreibungsamt verwertet. Gläubiger muss sich mit dem Erlös zufriedengeben.</div><div class="merksatz">Merke: Pfandverwertung ist der kürzeste Weg — das Pfand ist schon gesichert.</div></div></div>
<div class="tl-item"><div class="tl-num tl-num-r">!</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Pfandausfallschein <span class="b br">Artikel 158</span></div><div class="tl-merksatz">«Pfand reicht nicht? Dann weiter mit normaler Betreibung.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body">Innert <span class="b br">1 Monat</span> direkt Fortsetzungsbegehren. Gilt als Schuldanerkennung <span class="b br">Artikel 158 Absatz 3</span>. 20 Jahre gültig.</div><div class="merksatz">Merke: Der Pfandausfallschein ist die Brücke zur normalen Betreibung.</div></div></div>
</div></div>

<div class="sec" id="konk"><h1>Betreibung auf Konkurs</h1><p class="sub">Generalexekution — gesamtes Vermögen</p>
<div class="sp" id="ksp"></div><div id="kst"></div>
<div class="sn"><button id="kpv" onclick="kG(-1)">Zurück</button><button class="bp1" id="knx" onclick="kG(1)">Weiter</button></div></div>

<div class="sec" id="sich"><h1>Sicherungsmittel</h1><p class="sub">Artikel 163ff. StGB = strafbar!</p>
<div style="display:flex;gap:8px;margin:12px 0 4px"><button style="font-size:11px;padding:4px 10px" onclick="this.parentElement.nextElementSibling.querySelectorAll('.tl-item').forEach(i=>i.classList.add('open'))">Alle aufklappen</button><button style="font-size:11px;padding:4px 10px" onclick="this.parentElement.nextElementSibling.querySelectorAll('.tl-item').forEach(i=>i.classList.remove('open'))">Alle schliessen</button></div>
<div class="tl">
<div class="tl-item"><div class="tl-num tl-num-r">1</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Arrest <span class="b br">Artikel 271ff.</span></div><div class="tl-merksatz">«Der Arrest kommt überfallartig — sogar nachts und am Wochenende.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body">Beschlagnahme <strong>vor</strong> dem Vollstreckungsverfahren. Auch nachts/Wochenende. Kein «Sucharrest»!</div><div class="tl-sub"><div class="c cr"><div class="ct2">Arrestgründe (einer genügt)</div><div class="cd">1. Kein Wohnsitz · 2. Flucht · 3. Ausländerarrest · 4. Durchreise · 5. Verlustschein · 6. Definitiver Rechtsöffnungstitel</div></div></div><div class="tl-highlight">Innert <span class="b br">10 Tagen</span> Betreibung einleiten <span class="b br">Artikel 279</span>!</div><div class="merksatz">Merke: Arrest = Pfändung vorwegnehmen. Aber 10 Tage zum Betreiben — sonst verfällt er!</div></div></div>
<div class="tl-item"><div class="tl-num tl-num-a">2</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Retentionsrecht <span class="b ba">Artikel 283ff.</span></div><div class="tl-merksatz">«Der Vermieter behält die Möbel — aber nur bei Geschäftsräumen.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body">Nur <strong>Geschäftsräume</strong>. Bewegliche Gegenstände zurückbehalten. Innert <span class="b ba">10 Tagen</span> Pfandverwertung einleiten.</div><div class="merksatz">Merke: Nur Geschäftsräume — bei Privatwohnungen gibt es kein Retentionsrecht!</div></div></div>
<div class="tl-item"><div class="tl-num tl-num-p">3</div><div class="tl-head" onclick="this.parentElement.classList.toggle('open')"><div><div class="tl-title">Anfechtungsklagen <span class="b bp">Artikel 285ff.</span></div><div class="tl-merksatz">«Geschenke vor dem Konkurs? Bis 5 Jahre zurückholbar.»</div></div><div class="tl-arrow">&#9654;</div></div><div class="tl-detail"><div class="tl-body">Voraussetzung: Verlustschein nötig.</div><div class="tl-sub"><div class="c ca"><div class="ct2">Schenkung <span class="b bb">Artikel 286</span></div><div class="cd"><span class="b bb">1 Jahr</span> zurück.</div></div><div class="c cm"><div class="ct2">Überschuldung <span class="b ba">Artikel 287</span></div><div class="cd"><span class="b ba">1 Jahr</span> zurück.</div></div><div class="c cr"><div class="ct2">Delikt <span class="b br">Artikel 288</span></div><div class="cd"><span class="b br">5 Jahre</span> zurück!</div></div></div><div class="merksatz">Merke: 1 Jahr bei Schenkungen — aber ganze 5 Jahre bei Absicht!</div></div></div>
</div></div>

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

})();
