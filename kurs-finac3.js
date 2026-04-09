(function() {

// ==========================================
// 1. KURS-KONFIGURATION
// ==========================================
const courseConfig = {
  id: 'fa3',
  name: 'Financial Accounting 3',
  pages: [
    'fa3', 'fa3_kap1', 'fa3_kap2', 'fa3_kap3', 'fa3_kap4', 'fa3_kap5', 'fa3_kap6', 'fa3_kap7', 'fa3_kap8',
    'fa3_kplan', 'fa3_ueb', 'fa3_mind', 'fa3_kart', 'fa3_quiz', 'fa3_glossar'
  ],
  subNav: [
    {s:'fa3', l:'Übersicht'},
    {s:'fa3_kap1', l:'1 Repetition'},
    {s:'fa3_kap2', l:'2 Rechnungswesen'},
    {s:'fa3_kap3', l:'3 Erfolgsrechnung'},
    {s:'fa3_kap4', l:'4 Warenaufwand'},
    {s:'fa3_kap5', l:'5 Personal'},
    {s:'fa3_kap6', l:'6 MWST'},
    {s:'fa3_kap7', l:'7 Abschlüsse'},
    {s:'fa3_kap8', l:'8 Gewinnverwendung'},
    {s:'fa3_kplan', l:'Kontenplan SHL'},
    {s:'fa3_ueb', l:'Übungen'},
    {s:'fa3_mind', l:'Zusammenfassung'},
    {s:'fa3_kart', l:'Karten'},
    {s:'fa3_quiz', l:'Quiz'},
    {s:'fa3_glossar', l:'Glossar'}
  ],
  navButton: '<button class="nl nl-main" data-s="fa3" onclick="go(\'fa3\')" style="display:none">Financial Accounting 3</button>'
};

// ==========================================
// 2. HTML-CONTENT
// ==========================================
const courseHTML = `

<!-- ===================== ÜBERSICHT ===================== -->
<div class="sec" id="fa3">
<div style="border-radius:24px;padding:36px 32px;margin-bottom:32px;background:linear-gradient(135deg,rgba(232,86,122,.06),rgba(175,82,222,.04));border:1px solid var(--bd)">
<div style="font-size:12px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:var(--ac);margin-bottom:8px">Financial Accounting 3</div>
<h1 style="font-size:32px;letter-spacing:-.6px;margin-bottom:8px">Finanzbuchhaltung für die Hotellerie</h1>
<p style="font-size:15px;color:var(--tx2)">Dozent: Dario Furger · Semester 5 Betriebswirtschaft · SHL</p>
</div>

<div style="font-size:13px;font-weight:600;letter-spacing:1px;text-transform:uppercase;color:var(--tx3);margin-bottom:14px">Theorie</div>
<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:12px;margin-bottom:36px">

<div class="c ck" onclick="go('fa3_kap1')" style="padding:20px 22px;display:flex;gap:14px;align-items:flex-start">
<div style="width:32px;height:32px;border-radius:10px;background:var(--al);color:var(--ac);display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0">1</div>
<div><div class="ct2">Repetition Grundlagen</div><div class="cd">Bilanz, ER, Kontenarten, Buchungssätze</div></div></div>

<div class="c ck" onclick="go('fa3_kap2')" style="padding:20px 22px;display:flex;gap:14px;align-items:flex-start">
<div style="width:32px;height:32px;border-radius:10px;background:var(--gl);color:var(--g);display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0">2</div>
<div><div class="ct2">Grundlagen Rechnungswesen</div><div class="cd">GoB, GoR, OR, Standards, Kontenrahmen</div></div></div>

<div class="c ck" onclick="go('fa3_kap3')" style="padding:20px 22px;display:flex;gap:14px;align-items:flex-start">
<div style="width:32px;height:32px;border-radius:10px;background:rgba(175,82,222,.08);color:var(--pr);display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0">3</div>
<div><div class="ct2">Mehrstufige Erfolgsrechnung</div><div class="cd">3- und 7-stufige ER, GOI, GOP, EBITDA, EBIT</div></div></div>

<div class="c ck" onclick="go('fa3_kap4')" style="padding:20px 22px;display:flex;gap:14px;align-items:flex-start">
<div style="width:32px;height:32px;border-radius:10px;background:rgba(255,149,0,.08);color:var(--am);display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0">4</div>
<div><div class="ct2">Warenaufwand & Renditen</div><div class="cd">Bestandesänderung, Inventar, Branchenwerte</div></div></div>

<div class="c ck" onclick="go('fa3_kap5')" style="padding:20px 22px;display:flex;gap:14px;align-items:flex-start">
<div style="width:32px;height:32px;border-radius:10px;background:var(--al);color:var(--ac);display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0">5</div>
<div><div class="ct2">Personalaufwand</div><div class="cd">3-Säulen, Lohnverbuchung, Sozialversicherungen</div></div></div>

<div class="c ck" onclick="go('fa3_kap6')" style="padding:20px 22px;display:flex;gap:14px;align-items:flex-start">
<div style="width:32px;height:32px;border-radius:10px;background:var(--gl);color:var(--g);display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0">6</div>
<div><div class="ct2">Mehrwertsteuer</div><div class="cd">Steuersätze, Nettomethode, MWST-Abrechnung</div></div></div>

<div class="c ck" onclick="go('fa3_kap7')" style="padding:20px 22px;display:flex;gap:14px;align-items:flex-start">
<div style="width:32px;height:32px;border-radius:10px;background:rgba(175,82,222,.08);color:var(--pr);display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0">7</div>
<div><div class="ct2">Abschlüsse & Reports</div><div class="cd">Monats-/Quartals-/Jahresabschluss, Kennzahlen</div></div></div>

<div class="c ck" onclick="go('fa3_kap8')" style="padding:20px 22px;display:flex;gap:14px;align-items:flex-start">
<div style="width:32px;height:32px;border-radius:10px;background:rgba(255,149,0,.08);color:var(--am);display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0">8</div>
<div><div class="ct2">Gewinnverwendung</div><div class="cd">Reserven, Dividenden, Bilanzgewinn</div></div></div>

</div>

<div style="font-size:13px;font-weight:600;letter-spacing:1px;text-transform:uppercase;color:var(--tx3);margin-bottom:14px">Lerntools</div>
<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:12px">
<div class="c ck" onclick="go('fa3_ueb')" style="text-align:center;padding:24px 16px">
<div style="font-size:20px;font-weight:700;color:var(--am);margin-bottom:6px">6</div>
<div class="ct2">Übungen</div><div class="cd">Interaktiv mit Korrektur</div></div>
<div class="c ck" onclick="go('fa3_mind')" style="text-align:center;padding:24px 16px">
<div style="font-size:20px;font-weight:700;color:var(--pr);margin-bottom:6px">2</div>
<div class="ct2">Zusammenfassungen</div><div class="cd">Visuelle Übersichten</div></div>
<div class="c ck" onclick="go('fa3_kart')" style="text-align:center;padding:24px 16px">
<div id="ltFA3Cards" style="font-size:24px;font-weight:700;color:var(--ac);margin-bottom:6px">0</div>
<div class="ct2">Karteikarten</div><div class="cd">Klicken & repetieren</div></div>
<div class="c ck" onclick="go('fa3_quiz')" style="text-align:center;padding:24px 16px">
<div id="ltFA3Quiz" style="font-size:24px;font-weight:700;color:var(--ac);margin-bottom:6px">0</div>
<div class="ct2">Quiz</div><div class="cd">Mit Lernfortschritt</div></div>
<div class="c ck" onclick="go('fa3_glossar')" style="text-align:center;padding:24px 16px">
<div style="font-size:20px;font-weight:700;color:var(--bl);margin-bottom:6px">A–Z</div>
<div class="ct2">Glossar</div><div class="cd">Begriffe & Formeln</div></div>
</div>
</div>

<!-- ===================== KAPITEL 1: REPETITION ===================== -->
<div class="sec" id="fa3_kap1"><h1>Repetition Grundlagen</h1><p class="sub">Bilanz, Erfolgsrechnung, Kontenarten & Buchungssätze</p>
<div class="hl">Die doppelte Buchhaltung ist das Fundament: Jeder Geschäftsfall wird im Soll des einen und im Haben des anderen Kontos erfasst.</div>
<div class="hlbl"><strong>Lernziele:</strong><br>• Bilanz und Erfolgsrechnung selbständig erstellen und erklären<br>• T-Kreuze erstellen, saldieren und verbuchen<br>• Buchungssätze korrekt formulieren und deren Erfolgswirksamkeit beurteilen</div>

<div style="display:flex;gap:8px;margin:12px 0 4px">
<button style="font-size:11px;padding:4px 10px" onclick="this.parentElement.nextElementSibling.querySelectorAll('.tl-item').forEach(i=>i.classList.add('open'))">Alle aufklappen</button>
<button style="font-size:11px;padding:4px 10px" onclick="this.parentElement.nextElementSibling.querySelectorAll('.tl-item').forEach(i=>i.classList.remove('open'))">Alle schliessen</button>
</div>
<div class="tl">

<div class="tl-item"><div class="tl-num tl-num-b">1</div>
<div class="tl-head" onclick="this.parentElement.classList.toggle('open')">
<div><div class="tl-title">Bilanz</div>
<div class="tl-merksatz">«Die Bilanz zeigt Vermögen und Kapital zu einem Stichtag»</div></div>
<div class="tl-arrow">&#9654;</div></div>
<div class="tl-detail">
<div class="tl-body"><strong>Bilanz</strong> = Gegenüberstellung von Aktiven (Vermögen) und Passiven (Kapital) zu einem bestimmten Zeitpunkt.<br><br>Grundformel: <strong>Eigenkapital = Aktiven − Fremdkapital</strong></div>
<div class="tl-sub">
<div class="c ca"><div class="ct2">Aktiven (links / Soll)</div><div class="cd"><strong>Umlaufvermögen</strong> = Flüssige Mittel, Forderungen, Vorräte (< 1 Jahr verfügbar)<br><strong>Anlagevermögen</strong> = Sachanlagen, Finanzanlagen (> 1 Jahr genutzt)<br>Gliederung nach <strong>Liquidität</strong> (flüssigste oben)</div></div>
<div class="c cg"><div class="ct2">Passiven (rechts / Haben)</div><div class="cd"><strong>Kurzfristiges FK</strong> = Verb. aus LL, kfr. Bankschulden (< 1 Jahr fällig)<br><strong>Langfristiges FK</strong> = Hypotheken, Darlehen, Rückstellungen<br><strong>Eigenkapital</strong> = Aktienkapital, Reserven, Gewinnvortrag<br>Gliederung nach <strong>Fälligkeit</strong> (dringendste oben)</div></div>
</div>
<div class="merksatz">Merke: Aktiven nach Liquidität, Passiven nach Fälligkeit gliedern. Die Bilanz ist immer ausgeglichen (Aktiven = Passiven).</div>
</div></div>

<div class="tl-item"><div class="tl-num tl-num-g">2</div>
<div class="tl-head" onclick="this.parentElement.classList.toggle('open')">
<div><div class="tl-title">Erfolgsrechnung</div>
<div class="tl-merksatz">«Die ER zeigt Aufwand und Ertrag über einen Zeitraum»</div></div>
<div class="tl-arrow">&#9654;</div></div>
<div class="tl-detail">
<div class="tl-body"><strong>Erfolgsrechnung</strong> = Gegenüberstellung von Aufwand (Wertverzehr) und Ertrag (Wertzuwachs) für eine Periode.<br><br>Ertrag > Aufwand → <strong>Gewinn</strong><br>Ertrag < Aufwand → <strong>Verlust</strong></div>
<div class="tl-sub">
<div class="c cbl"><div class="ct2">Aufwand (links / Soll)</div><div class="cd">Warenaufwand, Personalaufwand, übriger Betriebsaufwand, Abschreibungen, Finanzaufwand</div></div>
<div class="c cg"><div class="ct2">Ertrag (rechts / Haben)</div><div class="cd">Nettoerlöse aus Lieferungen & Leistungen, Finanzertrag, betriebsfremder Ertrag</div></div>
</div>
<div class="merksatz">Merke: Die ER hat im Gegensatz zur Bilanz keinen Anfangsbestand — sie beginnt jedes Jahr bei Null.</div>
</div></div>

<div class="tl-item"><div class="tl-num tl-num-a">3</div>
<div class="tl-head" onclick="this.parentElement.classList.toggle('open')">
<div><div class="tl-title">Vier Kontenarten</div>
<div class="tl-merksatz">«Aktiv und Aufwand nehmen im Soll zu, Passiv und Ertrag im Haben»</div></div>
<div class="tl-arrow">&#9654;</div></div>
<div class="tl-detail">
<div class="tl-body">Die vier Kontenarten unterscheiden sich in der Soll-/Haben-Logik:</div>
<div class="tl-sub">
<div class="c ca"><div class="ct2">Aktivkonto</div><div class="cd">AB + Zunahme im <strong>Soll</strong>, Abnahme im Haben<br>Saldo auf Haben-Seite (= Schlussbestand)<br>Beispiel: Kasse, Bank, Forderungen</div></div>
<div class="c cg"><div class="ct2">Passivkonto</div><div class="cd">AB + Zunahme im <strong>Haben</strong>, Abnahme im Soll<br>Saldo auf Soll-Seite<br>Beispiel: Verb. aus LL, Darlehen, Eigenkapital</div></div>
<div class="c cr"><div class="ct2">Aufwandkonto</div><div class="cd">Zunahme im <strong>Soll</strong>, Abnahme im Haben<br>Kein Anfangsbestand!<br>Beispiel: Warenaufwand, Lohnaufwand</div></div>
<div class="c cp"><div class="ct2">Ertragskonto</div><div class="cd">Zunahme im <strong>Haben</strong>, Abnahme im Soll<br>Kein Anfangsbestand!<br>Beispiel: Warenertrag, Beherbergungsertrag</div></div>
</div>
<div class="merksatz">Merke: Eselsbrücke — «Aktiv und Aufwand sind Soll-Freunde» (beide nehmen im Soll zu).</div>
</div></div>

<div class="tl-item"><div class="tl-num tl-num-r">4</div>
<div class="tl-head" onclick="this.parentElement.classList.toggle('open')">
<div><div class="tl-title">Buchungssätze bilden</div>
<div class="tl-merksatz">«4 Schritte: Konten bestimmen → Kontenart → Zu-/Abnahme → Buchungssatz»</div></div>
<div class="tl-arrow">&#9654;</div></div>
<div class="tl-detail">
<div class="tl-body">
<strong>4 Schritte zur Bildung eines Buchungssatzes:</strong><br>
1. Welche zwei Konten sind betroffen?<br>
2. Welche Kontenart (Aktiv/Passiv/Aufwand/Ertrag)?<br>
3. Nimmt das Konto zu oder ab? → Soll oder Haben?<br>
4. Buchungssatz: Links = Soll, Rechts = Haben<br><br>
<strong>Bestandteile einer Buchung:</strong> Datum/Beleg-Nr., Buchungstext, Soll-Konto, Haben-Konto, Betrag
</div>
<div class="tl-sub">
<div class="c cg"><div class="ct2">Erfolgswirksam</div><div class="cd">Bilanzkonto / Erfolgskonto → mehr Gewinn<br>Erfolgskonto / Bilanzkonto → weniger Gewinn<br>Gewinn oder Verlust ändert sich!</div></div>
<div class="c cbl"><div class="ct2">Nicht erfolgswirksam</div><div class="cd">Bilanzkonto / Bilanzkonto → kein Einfluss<br>Erfolgskonto / Erfolgskonto → kein Einfluss<br>Nur Umschichtung, kein Effekt auf Gewinn</div></div>
</div>
<div class="merksatz">Merke: Keine Buchung ohne Beleg! Jeder Geschäftsfall wird doppelt erfasst — einmal im Soll, einmal im Haben.</div>
</div></div>

<div class="tl-item"><div class="tl-num tl-num-p">5</div>
<div class="tl-head" onclick="this.parentElement.classList.toggle('open')">
<div><div class="tl-title">Aktiven oder Aufwand?</div>
<div class="tl-merksatz">«Gebrauchsgut = Aktive, Verbrauchsgut = Aufwand»</div></div>
<div class="tl-arrow">&#9654;</div></div>
<div class="tl-detail">
<div class="tl-body">
<table style="width:100%;border-collapse:collapse;font-size:13px;margin:8px 0">
<tr style="background:var(--s2)"><th style="padding:8px;text-align:left;border:1px solid var(--bd)">Kriterium</th><th style="padding:8px;text-align:left;border:1px solid var(--bd)">Aktiven</th><th style="padding:8px;text-align:left;border:1px solid var(--bd)">Aufwand</th></tr>
<tr><td style="padding:8px;border:1px solid var(--bd)">Art des Gutes</td><td style="padding:8px;border:1px solid var(--bd)">Gebrauchsgut</td><td style="padding:8px;border:1px solid var(--bd)">Verbrauchsgut</td></tr>
<tr><td style="padding:8px;border:1px solid var(--bd)">Nutzungsdauer</td><td style="padding:8px;border:1px solid var(--bd)">Mehr als 1 Jahr</td><td style="padding:8px;border:1px solid var(--bd)">Weniger als 1 Jahr</td></tr>
<tr><td style="padding:8px;border:1px solid var(--bd)">Restwert Ende Jahr?</td><td style="padding:8px;border:1px solid var(--bd)">Ja</td><td style="padding:8px;border:1px solid var(--bd)">Nein</td></tr>
<tr><td style="padding:8px;border:1px solid var(--bd)">Beispiele</td><td style="padding:8px;border:1px solid var(--bd)">Computer, Kaffeemaschine</td><td style="padding:8px;border:1px solid var(--bd)">Farbpatronen, Kaffeebohnen</td></tr>
</table>
</div>
<div class="merksatz">Merke: In der Praxis gilt oft ein Schwellenwert von CHF 1'000 — darunter wird als Aufwand gebucht, auch wenn es langfristig nutzbar ist.</div>
</div></div>

</div>
</div>

<!-- ===================== KAPITEL 2: GRUNDLAGEN RECHNUNGSWESEN ===================== -->
<div class="sec" id="fa3_kap2"><h1>Grundlagen des Rechnungswesens</h1><p class="sub">Buchführungsvorschriften, Standards & Kontenrahmen</p>
<div class="hl">Das Rechnungswesen ist ein Planungs-, Steuerungs- und Kontrollinstrument — es liefert Informationen für interne und externe Stellen.</div>
<div class="hlbl"><strong>Lernziele:</strong><br>• Kontenplan/-rahmen für Gastronomiebetriebe selbständig anwenden<br>• Grundsätze der Buchführung (GoB) und Rechnungslegung (GoR) kennen<br>• Rechnungslegungsstandards (OR, Swiss GAAP FER, IFRS, US GAAP) unterscheiden</div>

<div style="display:flex;gap:8px;margin:12px 0 4px">
<button style="font-size:11px;padding:4px 10px" onclick="this.parentElement.nextElementSibling.querySelectorAll('.tl-item').forEach(i=>i.classList.add('open'))">Alle aufklappen</button>
<button style="font-size:11px;padding:4px 10px" onclick="this.parentElement.nextElementSibling.querySelectorAll('.tl-item').forEach(i=>i.classList.remove('open'))">Alle schliessen</button>
</div>
<div class="tl">

<div class="tl-item"><div class="tl-num tl-num-b">1</div>
<div class="tl-head" onclick="this.parentElement.classList.toggle('open')">
<div><div class="tl-title">Rechnungswesen im Überblick</div>
<div class="tl-merksatz">«Finanzbuchhaltung + Betriebsbuchhaltung + ergänzende Bereiche»</div></div>
<div class="tl-arrow">&#9654;</div></div>
<div class="tl-detail">
<div class="tl-body">Das Rechnungswesen besteht aus drei Bereichen:</div>
<div class="tl-sub">
<div class="c ca"><div class="ct2">Finanzbuchhaltung (FiBu)</div><div class="cd">Erfassung Geschäftsverkehr, Bilanz, Erfolgsrechnung, Anhang, evtl. Lagebericht</div></div>
<div class="c cg"><div class="ct2">Betriebsbuchhaltung (BeBu)</div><div class="cd">Kostenartenrechnung, Kostenstellenrechnung, Kostenträgerrechnung, Kalkulation</div></div>
<div class="c cbl"><div class="ct2">Ergänzende Bereiche</div><div class="cd">Mittelflussrechnung, Bilanz- und Erfolgsanalyse, Planungsrechnung (Budget)</div></div>
</div>
<div class="merksatz">Merke: Die FiBu ist die Pflicht, die BeBu die Kür — aber beide zusammen ergeben erst das vollständige Bild.</div>
</div></div>

<div class="tl-item"><div class="tl-num tl-num-g">2</div>
<div class="tl-head" onclick="this.parentElement.classList.toggle('open')">
<div><div class="tl-title">Rechnungslegungsstandards</div>
<div class="tl-merksatz">«OR = Gläubigerschutz, Swiss GAAP FER / IFRS / US GAAP = Anlegerschutz»</div></div>
<div class="tl-arrow">&#9654;</div></div>
<div class="tl-detail">
<div class="tl-body">
<table style="width:100%;border-collapse:collapse;font-size:12px;margin:8px 0">
<tr style="background:var(--s2)"><th style="padding:6px;border:1px solid var(--bd)">Kriterium</th><th style="padding:6px;border:1px solid var(--bd)">OR</th><th style="padding:6px;border:1px solid var(--bd)">Swiss GAAP FER</th><th style="padding:6px;border:1px solid var(--bd)">IFRS</th><th style="padding:6px;border:1px solid var(--bd)">US GAAP</th></tr>
<tr><td style="padding:6px;border:1px solid var(--bd)"><strong>Schutz</strong></td><td style="padding:6px;border:1px solid var(--bd)">Gläubiger</td><td style="padding:6px;border:1px solid var(--bd)">Anleger</td><td style="padding:6px;border:1px solid var(--bd)">Anleger</td><td style="padding:6px;border:1px solid var(--bd)">Anleger</td></tr>
<tr><td style="padding:6px;border:1px solid var(--bd)"><strong>Umfang</strong></td><td style="padding:6px;border:1px solid var(--bd)">~15 Seiten</td><td style="padding:6px;border:1px solid var(--bd)">~250 Seiten</td><td style="padding:6px;border:1px solid var(--bd)">~3'500 Seiten</td><td style="padding:6px;border:1px solid var(--bd)">10'000+ Seiten</td></tr>
<tr><td style="padding:6px;border:1px solid var(--bd)"><strong>Fokus</strong></td><td style="padding:6px;border:1px solid var(--bd)">Vorsicht</td><td style="padding:6px;border:1px solid var(--bd)">True and fair view</td><td style="padding:6px;border:1px solid var(--bd)">True and fair view</td><td style="padding:6px;border:1px solid var(--bd)">Fair presentation</td></tr>
<tr><td style="padding:6px;border:1px solid var(--bd)"><strong>Stille Reserven</strong></td><td style="padding:6px;border:1px solid var(--bd)">Zulässig</td><td style="padding:6px;border:1px solid var(--bd)">Nicht zulässig</td><td style="padding:6px;border:1px solid var(--bd)">Nicht zulässig</td><td style="padding:6px;border:1px solid var(--bd)">Nicht zulässig</td></tr>
<tr><td style="padding:6px;border:1px solid var(--bd)"><strong>Börse</strong></td><td style="padding:6px;border:1px solid var(--bd)">Nein</td><td style="padding:6px;border:1px solid var(--bd)">Nur Nebensegment</td><td style="padding:6px;border:1px solid var(--bd)">Ja</td><td style="padding:6px;border:1px solid var(--bd)">Ja</td></tr>
<tr><td style="padding:6px;border:1px solid var(--bd)"><strong>Steuerrelevanz</strong></td><td style="padding:6px;border:1px solid var(--bd)">Ja</td><td style="padding:6px;border:1px solid var(--bd)">Nein</td><td style="padding:6px;border:1px solid var(--bd)">Nein</td><td style="padding:6px;border:1px solid var(--bd)">Nein</td></tr>
</table>
</div>
<div class="merksatz">Merke: Nur der OR-Abschluss ist steuerrechtlich relevant. Unternehmen mit IFRS-Abschluss müssen zusätzlich einen OR-Abschluss erstellen.</div>
</div></div>

<div class="tl-item"><div class="tl-num tl-num-a">3</div>
<div class="tl-head" onclick="this.parentElement.classList.toggle('open')">
<div><div class="tl-title">Detaillierungsgrad nach Unternehmensgrösse</div>
<div class="tl-merksatz">«Kleinstunternehmen = Milchbüchlein, KMU = doppelte FiBu, Grössere = plus Anhang/Geldfluss»</div></div>
<div class="tl-arrow">&#9654;</div></div>
<div class="tl-detail">
<div class="tl-sub">
<div class="c cbl"><div class="ct2">Kleinstunternehmen</div><div class="cd">EU & Pers.gesellschaften < CHF 500'000 Umsatz<br>→ Einnahmen-/Ausgabenrechnung genügt<br><span class="b bb">OR 957 Abs. 2</span></div></div>
<div class="c cg"><div class="ct2">KMU</div><div class="cd">EU/Pers.ges. ≥ 500k oder jur. Personen (AG, GmbH)<br>→ Doppelte Buchhaltung + Bilanz + ER + Anhang<br><span class="b bb">OR 957 Abs. 1</span></div></div>
<div class="c ca"><div class="ct2">Grössere Gesellschaften</div><div class="cd">Kurzformel: <strong>«2 in 2 — 20/40/250»</strong><br>2 der 3 Kriterien in 2 aufeinanderfolgenden Jahren:<br>• Bilanzsumme ≥ 20 Mio.<br>• Umsatz ≥ 40 Mio.<br>• > 250 Vollzeitstellen<br>→ zusätzlich Geldflussrechnung + Lagebericht<br><span class="b bb">OR 961</span></div></div>
<div class="c cr"><div class="ct2">Börsenkotiert</div><div class="cd">→ Abschluss nach IFRS oder US GAAP (Main Standard)<br>→ Swiss GAAP FER für Domestic Standard<br><span class="b bb">OR 962</span></div></div>
</div>
<div class="merksatz">Merke: Die Formel «2 in 2 — 20/40/250» ist prüfungsrelevant für grössere Gesellschaften!</div>
</div></div>

<div class="tl-item"><div class="tl-num tl-num-r">4</div>
<div class="tl-head" onclick="this.parentElement.classList.toggle('open')">
<div><div class="tl-title">Grundsätze ordnungsmässiger Buchführung (GoB)</div>
<div class="tl-merksatz">«Vollständig, wahr, mit Beleg, klar und nachprüfbar»</div></div>
<div class="tl-arrow">&#9654;</div></div>
<div class="tl-detail">
<div class="tl-body">Die GoB (<span class="b bb">OR 957a Abs. 2</span>) regeln das Erfassen der Geschäftsfälle während der Periode:</div>
<div class="tl-sub">
<div class="c cg"><div class="ct2">Vollständigkeit & Wahrheit</div><div class="cd">Alle Geschäftsfälle müssen chronologisch, lückenlos und wahrheitsgetreu im Journal erfasst werden.</div></div>
<div class="c ca"><div class="ct2">Belegnachweis</div><div class="cd"><strong>Keine Buchung ohne Beleg!</strong> Jede Buchung muss durch einen Papierbeleg oder elektronischen Datenträger belegt sein.</div></div>
<div class="c cbl"><div class="ct2">Klarheit & Nachprüfbarkeit</div><div class="cd">Kontenbezeichnungen müssen klar sein, Abläufe nachvollziehbar (Reproduzierbarkeit).</div></div>
</div>
<div class="merksatz">Merke: «Keine Buchung ohne Beleg» — der wichtigste Grundsatz der GoB!</div>
</div></div>

<div class="tl-item"><div class="tl-num tl-num-p">5</div>
<div class="tl-head" onclick="this.parentElement.classList.toggle('open')">
<div><div class="tl-title">Grundsätze ordnungsmässiger Rechnungslegung (GoR)</div>
<div class="tl-merksatz">«Klar, vollständig, wahr, wesentlich, vorsichtig, stetig, nicht verrechnet»</div></div>
<div class="tl-arrow">&#9654;</div></div>
<div class="tl-detail">
<div class="tl-body">Die GoR (<span class="b bb">OR 958c Abs. 1</span>) bilden die Grundlage für den Geschäftsbericht:</div>
<div class="tl-sub">
<div class="c cbl"><div class="ct2">Klarheit / Verständlichkeit</div><div class="cd">Übersichtliche Gliederung, eindeutige Bezeichnungen, keine Zusammenfassung unterschiedlicher Posten.</div></div>
<div class="c cg"><div class="ct2">Vollständigkeit</div><div class="cd">Alle wesentlichen Aktiven, Passiven, Aufwände und Erträge müssen enthalten sein. Vorjahreszahlen angeben.</div></div>
<div class="c ca"><div class="ct2">Wahrheit / Verlässlichkeit</div><div class="cd">Keine nicht existierenden Aktiven. Sachgerechte Bewertung. Zahlen stimmen mit Belegen überein.</div></div>
<div class="c cm"><div class="ct2">Wesentlichkeit</div><div class="cd">Qualitativ: Beeinflusst es Entscheide?<br>Quantitativ: > 10% Beeinflussung = wesentlich (→ Anhang)</div></div>
<div class="c cp"><div class="ct2">Vorsicht</div><div class="cd">Chancen zurückhaltend, Risiken hinreichend berücksichtigen. Stille Reserven erlaubt. Aber Pro-memoria-Franken beachten!</div></div>
<div class="c cr"><div class="ct2">Stetigkeit</div><div class="cd"><strong>Formell:</strong> Gleiche Gliederung jedes Jahr<br><strong>Materiell:</strong> Gleiche Bewertungsgrundsätze<br>Wechsel Abschreibungsverfahren = Verstoss!</div></div>
<div class="c cm"><div class="ct2">Verrechnungsverbot</div><div class="cd"><strong>Nicht erlaubt:</strong> Warenertrag mit Warenaufwand verrechnen, Aktive mit Passiven RA verrechnen<br><strong>Erlaubt:</strong> Forderungen LL mit Delkredere, Sachanlagen mit kum. Abschreibungen</div></div>
</div>
<div class="merksatz">Merke: Die 7 GoR-Grundsätze sind ein Prüfungsklassiker — lerne sie auswendig!</div>
</div></div>

<div class="tl-item"><div class="tl-num tl-num-b">6</div>
<div class="tl-head" onclick="this.parentElement.classList.toggle('open')">
<div><div class="tl-title">Kontenrahmen & Kontenplan</div>
<div class="tl-merksatz">«Kontenrahmen = Auswahl, Kontenplan = individuelle Zusammenstellung»</div></div>
<div class="tl-arrow">&#9654;</div></div>
<div class="tl-detail">
<div class="tl-body"><strong>Kontenrahmen</strong> = Systematische Zusammenstellung möglicher Konten für eine Branche (z.B. KMU oder SKHG).<br><strong>Kontenplan</strong> = Die vom einzelnen Unternehmen tatsächlich verwendeten Konten.<br><br>In der Hotellerie: <strong>SKHG</strong> (Schweizer Kontenrahmen für die Hotellerie und Gastronomie)</div>
<div class="tl-sub">
<div class="c cbl"><div class="ct2">Kontenklassen (1-stellig)</div><div class="cd">1 Aktiven, 2 Passiven, 3 Ertrag, 4 Direkter Aufwand, 5 Personalaufwand, 6 Übriger Aufwand, 7 Unternehmensergebnis, 9 Abschluss</div></div>
<div class="c cg"><div class="ct2">Kontentiefe</div><div class="cd">1-stellig: Kontenklasse (z.B. 1)<br>2-stellig: Kontenhauptgruppe (z.B. 10)<br>3-stellig: Kontengruppe (z.B. 100)<br>4-/5-stellig: Konto (z.B. 1000 Kasse)</div></div>
</div>
<div class="merksatz">Merke: Der Kontenrahmen ist wie ein Menü im Restaurant — der Kontenplan ist deine persönliche Bestellung.</div>
</div></div>

</div>
</div>

<!-- ===================== KAPITEL 3: MEHRSTUFIGE ERFOLGSRECHNUNG ===================== -->
<div class="sec" id="fa3_kap3"><h1>Mehrstufige Erfolgsrechnung</h1><p class="sub">Dreistufig und Siebenstufig — GOI, GOP, EBITDA, EBIT</p>
<div class="hl">Die mehrstufige Erfolgsrechnung gliedert den Gesamterfolg in aussagekräftige Teilergebnisse — von der Bruttomarge bis zum Unternehmensergebnis.</div>
<div class="hlbl"><strong>Lernziele:</strong><br>• Siebenstufige Erfolgsrechnung aufstellen und alle Zwischenergebnisse berechnen<br>• GOI, GOP, EBITDA, EBIT korrekt benennen und deren Bedeutung erklären<br>• Prozentangaben berechnen und interpretieren</div>

<div style="display:flex;gap:8px;margin:12px 0 4px">
<button style="font-size:11px;padding:4px 10px" onclick="this.parentElement.nextElementSibling.querySelectorAll('.tl-item').forEach(i=>i.classList.add('open'))">Alle aufklappen</button>
<button style="font-size:11px;padding:4px 10px" onclick="this.parentElement.nextElementSibling.querySelectorAll('.tl-item').forEach(i=>i.classList.remove('open'))">Alle schliessen</button>
</div>
<div class="tl">

<div class="tl-item"><div class="tl-num tl-num-b">1</div>
<div class="tl-head" onclick="this.parentElement.classList.toggle('open')">
<div><div class="tl-title">Dreistufige Erfolgsrechnung</div>
<div class="tl-merksatz">«Bruttogewinn → Betriebsgewinn → Unternehmensgewinn»</div></div>
<div class="tl-arrow">&#9654;</div></div>
<div class="tl-detail">
<div class="tl-body">
<table style="width:100%;border-collapse:collapse;font-size:13px;margin:8px 0">
<tr style="background:var(--s2)"><th style="padding:8px;text-align:left;border:1px solid var(--bd)">Stufe</th><th style="padding:8px;text-align:left;border:1px solid var(--bd)">Berechnung</th></tr>
<tr><td style="padding:8px;border:1px solid var(--bd)"><strong>1. Bruttogewinn</strong></td><td style="padding:8px;border:1px solid var(--bd)">KK 3 (Ertrag) − KK 4 (Warenaufwand)</td></tr>
<tr><td style="padding:8px;border:1px solid var(--bd)"><strong>2. Betriebsgewinn</strong></td><td style="padding:8px;border:1px solid var(--bd)">Bruttogewinn − KK 5 (Personal) − KK 6 (Übriger Aufwand)</td></tr>
<tr><td style="padding:8px;border:1px solid var(--bd)"><strong>3. Unternehmensgewinn</strong></td><td style="padding:8px;border:1px solid var(--bd)">Betriebsgewinn ± KK 7 ± KK 8</td></tr>
</table>
</div>
<div class="merksatz">Merke: Die dreistufige ER zeigt Brutto-, Betriebs- und Unternehmenserfolg.</div>
</div></div>

<div class="tl-item"><div class="tl-num tl-num-g">2</div>
<div class="tl-head" onclick="this.parentElement.classList.toggle('open')">
<div><div class="tl-title">Siebenstufige Erfolgsrechnung (SKHG)</div>
<div class="tl-merksatz">«7 Stufen von GOI bis Unternehmensergebnis — der Standard in der Hotellerie»</div></div>
<div class="tl-arrow">&#9654;</div></div>
<div class="tl-detail">
<div class="tl-body">
<table style="width:100%;border-collapse:collapse;font-size:12px;margin:8px 0">
<tr style="background:var(--s2)"><th style="padding:6px;border:1px solid var(--bd)">Stufe</th><th style="padding:6px;border:1px solid var(--bd)">Bezeichnung</th><th style="padding:6px;border:1px solid var(--bd)">Berechnung</th></tr>
<tr style="background:rgba(52,199,89,.06)"><td style="padding:6px;border:1px solid var(--bd)"><strong>1</strong></td><td style="padding:6px;border:1px solid var(--bd)"><strong>GOI</strong> (Gross Operating Income)</td><td style="padding:6px;border:1px solid var(--bd)">Umsatz − Warenaufwand − dir. Personalaufwand</td></tr>
<tr style="background:rgba(52,199,89,.06)"><td style="padding:6px;border:1px solid var(--bd)"><strong>2</strong></td><td style="padding:6px;border:1px solid var(--bd)"><strong>GOP</strong> (Gross Operating Profit)</td><td style="padding:6px;border:1px solid var(--bd)">GOI − übriger Betriebsaufwand</td></tr>
<tr style="background:rgba(0,122,255,.06)"><td style="padding:6px;border:1px solid var(--bd)"><strong>3</strong></td><td style="padding:6px;border:1px solid var(--bd)"><strong>EBITDA</strong></td><td style="padding:6px;border:1px solid var(--bd)">GOP − Liegenschafts-/Miet-/Managementaufwand</td></tr>
<tr style="background:rgba(0,122,255,.06)"><td style="padding:6px;border:1px solid var(--bd)"><strong>4</strong></td><td style="padding:6px;border:1px solid var(--bd)"><strong>EBIT</strong></td><td style="padding:6px;border:1px solid var(--bd)">EBITDA − Abschreibungen</td></tr>
<tr style="background:rgba(175,82,222,.06)"><td style="padding:6px;border:1px solid var(--bd)"><strong>5</strong></td><td style="padding:6px;border:1px solid var(--bd)">Betriebserfolg vor Nebeneffekten</td><td style="padding:6px;border:1px solid var(--bd)">EBIT − Zinsaufwand + Zinsertrag</td></tr>
<tr style="background:rgba(175,82,222,.06)"><td style="padding:6px;border:1px solid var(--bd)"><strong>6</strong></td><td style="padding:6px;border:1px solid var(--bd)"><strong>EBT</strong> (Earnings before Taxes)</td><td style="padding:6px;border:1px solid var(--bd)">Betriebserfolg ± a.o./betriebsfremder Erfolg</td></tr>
<tr style="background:rgba(232,86,122,.06)"><td style="padding:6px;border:1px solid var(--bd)"><strong>7</strong></td><td style="padding:6px;border:1px solid var(--bd)"><strong>Unternehmensergebnis</strong></td><td style="padding:6px;border:1px solid var(--bd)">EBT − direkte Steuern</td></tr>
</table>
</div>
<div class="merksatz">Merke: Die Prozentangaben werden immer in % des Umsatzerlöses berechnet (z.B. EBITDA-Marge = EBITDA / Umsatz × 100).</div>
</div></div>

<div class="tl-item"><div class="tl-num tl-num-a">3</div>
<div class="tl-head" onclick="this.parentElement.classList.toggle('open')">
<div><div class="tl-title">EBITDA & EBIT erklärt</div>
<div class="tl-merksatz">«Earnings Before Interest, Taxes, Depreciation & Amortization»</div></div>
<div class="tl-arrow">&#9654;</div></div>
<div class="tl-detail">
<div class="tl-body"><strong>EBITDA</strong> = Earnings before Interest, Taxes, Depreciation, Amortization<br>= Erfolg vor Zinsen, Steuern und Abschreibungen<br><br>Warum ist EBITDA so beliebt?</div>
<div class="tl-sub">
<div class="c cg"><div class="ct2">Klammert Verfälschungen aus</div><div class="cd"><strong>Abschreibungen:</strong> Je nach Nutzungsdauer manipulierbar<br><strong>Zinsen:</strong> Abhängig von Kapitalstruktur<br><strong>Steuern:</strong> Je nach Standort unterschiedlich</div></div>
<div class="c ca"><div class="ct2">Vergleichbarkeit</div><div class="cd">Ideal für innerbetrieblichen Vergleich (Entwicklung) und zwischenbetrieblichen Vergleich (Benchmark)</div></div>
<div class="c cbl"><div class="ct2">EBIT zusätzlich</div><div class="cd">Berücksichtigt Abschreibungen = Ersatzinvestitionen. Zeigt die Wertschöpfung der operativen Tätigkeit.</div></div>
</div>
<div class="merksatz">Merke: EBITDA = die operative «Rohleistung» des Unternehmens, unverfälscht durch Finanzierung, Steuern und Abschreibungspolitik.</div>
</div></div>

<div class="tl-item"><div class="tl-num tl-num-r">4</div>
<div class="tl-head" onclick="this.parentElement.classList.toggle('open')">
<div><div class="tl-title">GOI und GOP — Hotellerie-Kennzahlen</div>
<div class="tl-merksatz">«GOI für Bereichsleiter, GOP für Geschäftsleitung»</div></div>
<div class="tl-arrow">&#9654;</div></div>
<div class="tl-detail">
<div class="tl-sub">
<div class="c ca"><div class="ct2">GOI (Gross Operating Income)</div><div class="cd">= Brutto-Betriebserfolg nach direkten Aufwänden<br>Wichtig für <strong>Bereichsleiter</strong> (Restaurant, Beherbergung, Wellness)<br>Richtwert: ca. 39.1% (4* Ferien)</div></div>
<div class="c cg"><div class="ct2">GOP (Gross Operating Profit)</div><div class="cd">= Brutto-Betriebsgewinn vor anlagebedingten Kosten<br>Zeigt <strong>operative Leistungsfähigkeit</strong> des gesamten Betriebs<br>Richtwert: ca. 15.9% (4* Ferien)<br>Ideal als Vergleichswert zwischen Betrieben</div></div>
</div>
<div class="merksatz">Merke: GOI = «Was bringt meine Abteilung?», GOP = «Was bringt der ganze Betrieb operativ?»</div>
</div></div>

</div>
</div>

<!-- ===================== KAPITEL 4: WARENAUFWAND ===================== -->
<div class="sec" id="fa3_kap4"><h1>Warenaufwand & Renditen</h1><p class="sub">Bestandesänderung, Inventar, Warenrendite & Branchenvergleich</p>
<div class="hl">Der Warenaufwand ergibt sich nicht nur aus dem Einkauf — die Bestandesänderung des Inventars muss berücksichtigt werden. Die Warenrendite zeigt, wie viel vom Verkaufspreis nach Abzug der Warenkosten übrig bleibt.</div>
<div class="hlbl"><strong>Lernziele:</strong><br>• Einfluss der Bestandesänderung auf den Warenaufwand verstehen und berechnen<br>• Warenaufwand je Sparte berechnen und mit Branchenkennzahlen vergleichen<br>• Warenrendite und Warenaufwand in % korrekt berechnen und interpretieren<br>• Fehlerhafte Aussagen zum Warenaufwand erkennen (z.B. «Lieferung = Aufwand»)</div>

<div style="display:flex;gap:8px;margin:12px 0 4px">
<button style="font-size:11px;padding:4px 10px" onclick="this.parentElement.nextElementSibling.querySelectorAll('.tl-item').forEach(i=>i.classList.add('open'))">Alle aufklappen</button>
<button style="font-size:11px;padding:4px 10px" onclick="this.parentElement.nextElementSibling.querySelectorAll('.tl-item').forEach(i=>i.classList.remove('open'))">Alle schliessen</button>
</div>
<div class="tl">

<div class="tl-item"><div class="tl-num tl-num-b">1</div>
<div class="tl-head" onclick="this.parentElement.classList.toggle('open')">
<div><div class="tl-title">Warenvorrat als Bilanzkonto</div>
<div class="tl-merksatz">«Warenvorrat = Bilanz (Konto 12000, Umlaufvermögen) — nicht Aufwand!»</div></div>
<div class="tl-arrow">&#9654;</div></div>
<div class="tl-detail">
<div class="tl-body">Der Warenvorrat ist ein <strong>Aktivkonto</strong> auf der Bilanz (Konto 12000, Umlaufvermögen). Wenn Ware eingekauft wird, wandert sie zuerst ins Lager. Erst wenn die Ware <strong>verbraucht oder verkauft</strong> wird, entsteht Aufwand in der Erfolgsrechnung.</div>
<div class="tl-sub">
<div class="c cbl"><div class="ct2">Einkauf auf Kredit</div><div class="cd"><strong>Soll:</strong> Warenaufwand (KK 4)<br><strong>Haben:</strong> Kreditoren (KK 20)<br>→ Aufwand und Schulden steigen</div></div>
<div class="c cg"><div class="ct2">Bezahlung Lieferant</div><div class="cd"><strong>Soll:</strong> Kreditoren (KK 20)<br><strong>Haben:</strong> Bank (KK 10)<br>→ Schulden und Geld sinken</div></div>
</div>
<div class="merksatz">Merke: Eine grosse Warenlieferung Ende Monat erhöht nur den Lagerbestand (Bilanz), NICHT den Warenaufwand. Aufwand entsteht erst beim Verbrauch!</div>
</div></div>

<div class="tl-item"><div class="tl-num tl-num-g">2</div>
<div class="tl-head" onclick="this.parentElement.classList.toggle('open')">
<div><div class="tl-title">Formel Warenaufwand</div>
<div class="tl-merksatz">«Warenaufwand = Wareneinkauf ± Bestandesänderung»</div></div>
<div class="tl-arrow">&#9654;</div></div>
<div class="tl-detail">
<div class="tl-body"><strong>Warenaufwand = Wareneinkauf + Bestandesabnahme − Bestandeszunahme</strong><br><br>
Alternativ: <strong>Anfangsbestand + Einkäufe (netto) − Schlussbestand (Inventur) = Warenaufwand</strong><br><br>
<strong>Bestandesabnahme</strong> = Lager wurde abgebaut → Aufwand steigt (wir haben mehr verbraucht als eingekauft)<br>
<strong>Bestandeszunahme</strong> = Lager wurde aufgebaut → Aufwand sinkt (wir haben mehr eingekauft als verbraucht)</div>
<div class="tl-sub">
<div class="c cr"><div class="ct2">Buchung Bestandesabnahme</div><div class="cd"><strong>Soll:</strong> Warenaufwand<br><strong>Haben:</strong> Warenbestand<br>(Aufwand ↑, Bestand ↓)</div></div>
<div class="c cg"><div class="ct2">Buchung Bestandeszunahme</div><div class="cd"><strong>Soll:</strong> Warenbestand<br><strong>Haben:</strong> Warenaufwand<br>(Bestand ↑, Aufwand ↓)</div></div>
</div>
<div class="merksatz">Merke: Bestandesabnahme erhöht den Warenaufwand, Bestandeszunahme reduziert ihn. Das Inventar (Zählung) am Periodenende ist entscheidend!</div>
</div></div>

<div class="tl-item"><div class="tl-num tl-num-a">3</div>
<div class="tl-head" onclick="this.parentElement.classList.toggle('open')">
<div><div class="tl-title">Warenrendite berechnen</div>
<div class="tl-merksatz">«Warenrendite = Bruttoergebnis / Warenertrag × 100»</div></div>
<div class="tl-arrow">&#9654;</div></div>
<div class="tl-detail">
<div class="tl-body">
<strong>Schritt für Schritt:</strong><br>
1. <strong>Warenertrag</strong> bestimmen (= Verkaufsumsatz netto, ohne MWST)<br>
2. <strong>Warenaufwand</strong> bestimmen (= Einkaufskosten netto ± Bestandesänderung)<br>
3. <strong>Bruttoergebnis</strong> = Warenertrag − Warenaufwand<br>
4. <strong>Warenrendite</strong> = Bruttoergebnis / Warenertrag × 100<br><br>
<strong>Gegenprobe:</strong> Warenaufwand in % = Warenaufwand / Warenertrag × 100<br>
→ Warenrendite + Warenaufwand in % = immer 100%
</div>
<div class="tl-sub">
<div class="c cg"><div class="ct2">Zahlenbeispiel</div><div class="cd">Warenertrag: CHF 160'000 (100%)<br>Warenaufwand: CHF 40'000 (25%)<br><strong>Bruttoergebnis: CHF 120'000 (75%)</strong><br>Warenrendite = 120'000 / 160'000 × 100 = <strong>75%</strong></div></div>
<div class="c ca"><div class="ct2">Praxis-Beispiel</div><div class="cd">Flasche Wein: Einkauf CHF 10, Verkauf CHF 40<br>Bruttoergebnis = 30<br>Warenrendite = 30/40 × 100 = <strong>75%</strong><br>Warenaufwand in % = 10/40 × 100 = <strong>25%</strong></div></div>
</div>
<div class="merksatz">Merke: Je höher die Warenrendite, desto mehr bleibt für Personal, Miete und Gewinn übrig. Getränke haben typischerweise eine höhere Rendite als Küche.</div>
</div></div>

<div class="tl-item"><div class="tl-num tl-num-r">4</div>
<div class="tl-head" onclick="this.parentElement.classList.toggle('open')">
<div><div class="tl-title">Warenrenditen & Branchenkennzahlen</div>
<div class="tl-merksatz">«Warenaufwand in % des Warenertrags = die wichtigste Sparten-Kennzahl»</div></div>
<div class="tl-arrow">&#9654;</div></div>
<div class="tl-detail">
<div class="tl-body"><strong>Warenkosten-% = Warenaufwand / Warenertrag × 100</strong><br><br>Branchenkennzahlen (Richtwerte Gastrosuisse/Gastroconsult):<br>Im Gastgewerbe machen Warenkosten (inkl. direkte Dienstleistungen) ca. <strong>27.1%</strong> des Umsatzes aus.</div>
<div class="tl-sub">
<div class="c ca"><div class="ct2">Wein</div><div class="cd">Richtwert: ca. <strong>40.3%</strong><br>Höchster Warenaufwand der Getränke</div></div>
<div class="c cbl"><div class="ct2">Bier</div><div class="cd">Richtwert: ca. <strong>31.5%</strong></div></div>
<div class="c cp"><div class="ct2">Spirituosen</div><div class="cd">Richtwert: ca. <strong>20.3%</strong><br>Gute Marge</div></div>
<div class="c cg"><div class="ct2">Mineral</div><div class="cd">Richtwert: ca. <strong>21.7%</strong></div></div>
<div class="c cm"><div class="ct2">Kaffee</div><div class="cd">Richtwert: ca. <strong>7.7%</strong><br>Höchste Warenrendite!</div></div>
<div class="c cr"><div class="ct2">Küche</div><div class="cd">Richtwert: ca. <strong>30.9%</strong></div></div>
</div>
<div class="merksatz">Merke: Liegt dein Warenaufwand über dem Branchenwert, verbrauchst du zu viel — liegt er darunter, bist du effizient (oder die Qualität leidet). Kaffee hat mit ~7.7% den tiefsten Warenaufwand = höchste Rendite!</div>
</div></div>

<div class="tl-item"><div class="tl-num tl-num-p">5</div>
<div class="tl-head" onclick="this.parentElement.classList.toggle('open')">
<div><div class="tl-title">Häufiger Fehler: Lieferung ≠ Aufwand</div>
<div class="tl-merksatz">«Eine grosse Lieferung Ende Monat erhöht den Lagerbestand, nicht den Aufwand!»</div></div>
<div class="tl-arrow">&#9654;</div></div>
<div class="tl-detail">
<div class="tl-body">Ein typischer Fehler in der Praxis: Ein Mitarbeiter sagt «Der Warenaufwand ist so hoch, weil wir am 30.03. noch eine grosse Lieferung erhalten haben.»<br><br>
<strong>Das ist falsch!</strong> Eine Warenlieferung erhöht zunächst nur den <strong>Lagerbestand</strong> (Bilanz). Der Warenaufwand wird erst durch den tatsächlichen <strong>Verbrauch</strong> oder Verkauf der Ware beeinflusst.<br><br>
<strong>Korrekter Zusammenhang:</strong><br>
• Lieferung erhalten → Lagerbestand ↑ (Bilanz)<br>
• Ware verbraucht/verkauft → Warenaufwand ↑ (Erfolgsrechnung)<br>
• Am Periodenende: Inventur → Bestandesänderung → korrekter Warenaufwand</div>
<div class="merksatz">Merke: Einkauf ≠ Aufwand! Erst die Bestandesänderung (Inventur) zeigt den wahren Warenaufwand der Periode.</div>
</div></div>

</div>
</div>

<!-- ===================== KAPITEL 5: PERSONAL ===================== -->
<div class="sec" id="fa3_kap5"><h1>Personalaufwand</h1><p class="sub">Dreisäulenprinzip, Lohnverbuchung, Sozialversicherungen & Buchungsbeispiele</p>
<div class="hl">Die Lohnzahlung ist nicht gleich der Personalaufwand — Sozialversicherungsbeiträge des Arbeitgebers kommen noch dazu. Personalkosten machen im Gastgewerbe ca. <strong>51.1%</strong> des Umsatzes aus — der grösste Kostenfaktor!</div>
<div class="hlbl"><strong>Lernziele:</strong><br>• Grundprinzip der Lohnverbuchung über das Lohndurchlaufkonto erklären<br>• Lohnabrechnungen mit allen Bestandteilen (Privatanteil FZ, Kinderzulagen, Verpflegungsabzug, Spesen, Vorschuss) verbuchen<br>• Sozialversicherungsbeiträge (AN- und AG-Anteil) kennen und korrekt zuordnen<br>• Abrechnung der Sozialversicherungsbeiträge mit der Ausgleichskasse verstehen<br>• Kontenklasse 5 (510, 520, 530) und die relevanten Bilanzkonten erklären</div>

<div style="display:flex;gap:8px;margin:12px 0 4px">
<button style="font-size:11px;padding:4px 10px" onclick="this.parentElement.nextElementSibling.querySelectorAll('.tl-item').forEach(i=>i.classList.add('open'))">Alle aufklappen</button>
<button style="font-size:11px;padding:4px 10px" onclick="this.parentElement.nextElementSibling.querySelectorAll('.tl-item').forEach(i=>i.classList.remove('open'))">Alle schliessen</button>
</div>
<div class="tl">

<div class="tl-item"><div class="tl-num tl-num-b">1</div>
<div class="tl-head" onclick="this.parentElement.classList.toggle('open')">
<div><div class="tl-title">Bedeutung des Personalaufwands</div>
<div class="tl-merksatz">«Personalkosten = ca. 51% des Umsatzes im Gastgewerbe — der grösste Kostenblock!»</div></div>
<div class="tl-arrow">&#9654;</div></div>
<div class="tl-detail">
<div class="tl-body">Laut Branchenspiegel 2025 der GastroSuisse / Gastroconsult sind die Kostenfaktoren:<br><br>
<strong>Kostenfaktoren Gastgewerbe (2023):</strong></div>
<div class="tl-sub">
<div class="c cr"><div class="ct2">Personalkosten: 51.1%</div><div class="cd">Inkl. Unternehmerlohn von 7.7%<br>→ Grösster Kostenblock!<br>«Personaleinsatz muss mit Tageszeitenumsätzen korrelieren»</div></div>
<div class="c ca"><div class="ct2">Warenkosten: 27.1%</div><div class="cd">Inkl. direkte Dienstleistungen</div></div>
<div class="c cbl"><div class="ct2">Übriger Betriebsaufwand: 25.7%</div><div class="cd">Miete, Energie, Versicherungen, Unterhalt etc.</div></div>
<div class="c cm"><div class="ct2">Finanzierung/Abschr./Steuern: 3.4%</div><div class="cd">Inkl. Eigenkapitalverzinsung von 0.6%</div></div>
</div>
<div class="merksatz">Merke: Nur professionell geführten Betrieben mit optimaler Kostenstruktur gelingt es, positive Geschäftsergebnisse zu erzielen — die Personalkosten sind dabei im Zentrum!</div>
</div></div>

<div class="tl-item"><div class="tl-num tl-num-g">2</div>
<div class="tl-head" onclick="this.parentElement.classList.toggle('open')">
<div><div class="tl-title">Dreisäulenprinzip</div>
<div class="tl-merksatz">«1. Säule = Existenz, 2. Säule = Lebensstandard, 3. Säule = Ergänzung»</div></div>
<div class="tl-arrow">&#9654;</div></div>
<div class="tl-detail">
<div class="tl-sub">
<div class="c ca"><div class="ct2">1. Säule — Staatliche Vorsorge</div><div class="cd"><strong>Ziel: Existenzsicherung</strong><br>AHV (Alters- und Hinterlassenenversicherung)<br>IV (Invalidenversicherung)<br>EO (Erwerbsersatzordnung)<br>+ Ergänzungsleistungen (EL)</div></div>
<div class="c cg"><div class="ct2">2. Säule — Berufliche Vorsorge</div><div class="cd"><strong>Ziel: Sicherung gewohnte Lebenshaltung</strong><br>BVG (Pensionskasse) — obligatorisch<br>UVG: Berufsunfall (BU) + Nichtberufsunfall (NBU)<br>+ überobligatorische Vorsorge</div></div>
<div class="c cbl"><div class="ct2">3. Säule — Private Vorsorge</div><div class="cd"><strong>Ziel: Individuelle Ergänzung</strong><br>3a: Gebundene Vorsorge (mit Steuervorteil)<br>3b: Freie Vorsorge (ohne Steuervorteil)</div></div>
</div>
<div class="merksatz">Merke: Die 3 Säulen schützen bei Alter, Invalidität, Tod, Unfall, Krankheit, Militärdienst und Mutterschaft. Nur 1. und 2. Säule sind für die Lohnverbuchung relevant!</div>
</div></div>

<div class="tl-item"><div class="tl-num tl-num-a">3</div>
<div class="tl-head" onclick="this.parentElement.classList.toggle('open')">
<div><div class="tl-title">Lohnkomponenten & Kontenklasse 5</div>
<div class="tl-merksatz">«Bruttolohn − AN-Beiträge = Nettolohn · AG-Beiträge = zusätzlicher Aufwand»</div></div>
<div class="tl-arrow">&#9654;</div></div>
<div class="tl-detail">
<div class="tl-body"><strong>Bruttolohn</strong> = im Arbeitsvertrag vereinbarter Lohn (inkl. Gehaltsnebenleistungen wie Privatanteil FZ, Verpflegung/Unterkunft)<br><strong>Nettolohn</strong> = Bruttolohn − Arbeitnehmerbeiträge (wird ausbezahlt)<br><strong>Gesamtpersonalaufwand</strong> = Bruttolohn + AG-Beiträge + übriger Personalaufwand<br><br>
<strong>Was gehört zum Bruttolohn?</strong> (Lohnausweis)<br>
1. Lohn (Monatslohn, Stundenlohn)<br>
2. Gehaltsnebenleistungen (Verpflegung/Unterkunft, Privatanteil Geschäftswagen)<br>
3. Unregelmässige Leistungen, Gratifikationen<br>
4–7. Kapitalleistungen, VR-Entschädigungen etc.<br>
8. = <strong>Bruttolohn</strong></div>
<div class="tl-sub">
<div class="c ca"><div class="ct2">510 — Gehälter</div><div class="cd">Bruttolöhne, 13. Monatslohn, Erfolgsbeteiligung<br>→ Zeigt die <strong>Bruttolohnsumme</strong></div></div>
<div class="c cg"><div class="ct2">520 — Sozialaufwand (AG-Anteil)</div><div class="cd">AHV/IV/EO/FAK/ALV (AG-Anteil)<br>Pensionskasse BVG (AG-Anteil)<br>Unfallversicherung BU<br>Krankentaggeldversicherung KTG (AG-Anteil)<br>→ Ca. <strong>13–14% auf Bruttolöhne</strong></div></div>
<div class="c cbl"><div class="ct2">530 — Übriger Personalaufwand</div><div class="cd">Personalbeschaffung (Stelleninserate)<br>Personalschulung / Weiterbildung<br>Berufskleider<br>Spesen (effektiv)</div></div>
</div>
<div class="merksatz">Merke: AG-Beiträge separat auf Konto 520, damit auf Konto 510 die Bruttolohnsumme steht — wichtig für Prämienberechnungen!</div>
</div></div>

<div class="tl-item"><div class="tl-num tl-num-r">4</div>
<div class="tl-head" onclick="this.parentElement.classList.toggle('open')">
<div><div class="tl-title">Sozialversicherungsbeiträge im Detail</div>
<div class="tl-merksatz">«AN-Beiträge = kein Aufwand (Umbuchung), AG-Beiträge = echter Aufwand (Konto 52010)»</div></div>
<div class="tl-arrow">&#9654;</div></div>
<div class="tl-detail">
<div class="tl-body">
<table style="width:100%;border-collapse:collapse;font-size:12px;margin:8px 0">
<tr style="background:var(--s2)"><th style="padding:6px;border:1px solid var(--bd)">Versicherung</th><th style="padding:6px;text-align:right;border:1px solid var(--bd)">AN-Anteil</th><th style="padding:6px;text-align:right;border:1px solid var(--bd)">AG-Anteil</th><th style="padding:6px;border:1px solid var(--bd)">Bemerkung</th></tr>
<tr><td style="padding:6px;border:1px solid var(--bd)"><strong>AHV/IV/EO</strong></td><td style="padding:6px;text-align:right;border:1px solid var(--bd)">5.30%</td><td style="padding:6px;text-align:right;border:1px solid var(--bd)">5.30%</td><td style="padding:6px;border:1px solid var(--bd)">Paritätisch (je 50/50)</td></tr>
<tr><td style="padding:6px;border:1px solid var(--bd)"><strong>FAK</strong></td><td style="padding:6px;text-align:right;border:1px solid var(--bd)">0.00%</td><td style="padding:6px;text-align:right;border:1px solid var(--bd)">1.50%</td><td style="padding:6px;border:1px solid var(--bd)">Variiert, nur AG</td></tr>
<tr><td style="padding:6px;border:1px solid var(--bd)"><strong>ALV</strong></td><td style="padding:6px;text-align:right;border:1px solid var(--bd)">1.10%</td><td style="padding:6px;text-align:right;border:1px solid var(--bd)">1.10%</td><td style="padding:6px;border:1px solid var(--bd)">Paritätisch</td></tr>
<tr><td style="padding:6px;border:1px solid var(--bd)"><strong>BU</strong> (Berufsunfall)</td><td style="padding:6px;text-align:right;border:1px solid var(--bd)">0.00%</td><td style="padding:6px;text-align:right;border:1px solid var(--bd)">0.80%</td><td style="padding:6px;border:1px solid var(--bd)">Variiert, nur AG</td></tr>
<tr><td style="padding:6px;border:1px solid var(--bd)"><strong>NBU</strong> (Nichtberufsunfall)</td><td style="padding:6px;text-align:right;border:1px solid var(--bd)">1.30%</td><td style="padding:6px;text-align:right;border:1px solid var(--bd)">0.00%</td><td style="padding:6px;border:1px solid var(--bd)">Variiert, nur AN</td></tr>
<tr><td style="padding:6px;border:1px solid var(--bd)"><strong>KTG</strong> (Krankentaggeld)</td><td style="padding:6px;text-align:right;border:1px solid var(--bd)">1.00%</td><td style="padding:6px;text-align:right;border:1px solid var(--bd)">1.00%</td><td style="padding:6px;border:1px solid var(--bd)">Pflicht gem. L-GAV</td></tr>
<tr><td style="padding:6px;border:1px solid var(--bd)"><strong>PK</strong> (Pensionskasse)</td><td style="padding:6px;text-align:right;border:1px solid var(--bd)">7.00%</td><td style="padding:6px;text-align:right;border:1px solid var(--bd)">7.00%</td><td style="padding:6px;border:1px solid var(--bd)">Fix gem. L-GAV, Koordinationsabzug beachten</td></tr>
<tr style="background:var(--s2)"><td style="padding:6px;border:1px solid var(--bd)"><strong>Total</strong></td><td style="padding:6px;text-align:right;border:1px solid var(--bd)"><strong>15.70%</strong></td><td style="padding:6px;text-align:right;border:1px solid var(--bd)"><strong>16.70%</strong></td><td style="padding:6px;border:1px solid var(--bd)"><strong>= Sozialversicherungsaufwand AG</strong></td></tr>
</table>
</div>
<div class="tl-sub">
<div class="c cbl"><div class="ct2">AN-Beiträge (15.70%)</div><div class="cd"><strong>Kein Aufwand</strong> für die Firma!<br>Nur Umbuchung: 22010 Durchlauf → 22020 KK Sozialversicherungen<br>Werden dem AN vom Bruttolohn abgezogen</div></div>
<div class="c cr"><div class="ct2">AG-Beiträge (16.70%)</div><div class="cd"><strong>Echter Aufwand!</strong> Konto 52010 Soziallasten<br>Buchung: 52010 / 22020 KK Sozialversicherungen<br>Für Budgetierung: ca. <strong>13–14%</strong> auf Bruttolöhne</div></div>
</div>
<div class="merksatz">Merke: AN-Beiträge sind im Bruttolohn enthalten und werden bei Lohnauszahlung abgezogen — kein Sozialversicherungsaufwand! Nur AG-Beiträge belasten die Erfolgsrechnung über Konto 52010.</div>
</div></div>

<div class="tl-item"><div class="tl-num tl-num-p">5</div>
<div class="tl-head" onclick="this.parentElement.classList.toggle('open')">
<div><div class="tl-title">Bilanz- und Erfolgsrechnungskonten Personal</div>
<div class="tl-merksatz">«Lohndurchlaufkonto = Hilfskonto, KK Sozialversicherungen = kurzfristige Schuld»</div></div>
<div class="tl-arrow">&#9654;</div></div>
<div class="tl-detail">
<div class="tl-body"><strong>Konten zur Verarbeitung des Personalaufwands:</strong></div>
<div class="tl-sub">
<div class="c cr"><div class="ct2">Erfolgsrechnung (Aufwand)</div><div class="cd"><strong>51010</strong> Gehälter Sammelkonto<br><strong>52010</strong> Soziallasten Sammelkonto<br><strong>53010</strong> Übriger Personalaufwand Sammelkonto</div></div>
<div class="c cg"><div class="ct2">Bilanz (Aktiven)</div><div class="cd"><strong>11400</strong> Kfr. Forderungen Personal (Lohnvorschüsse)</div></div>
<div class="c cbl"><div class="ct2">Bilanz (Passiven)</div><div class="cd"><strong>22010</strong> Kfr. Schulden Personal — Lohndurchlaufkonto (Abrechnungskonto)<br><strong>22020</strong> KK Sozialversicherungen (kurzfristige Schuld an AHV-Kasse etc.)</div></div>
</div>
<div class="merksatz">Merke: Das Lohndurchlaufkonto (22010) ist ein Hilfskonto — nach vollständiger Verbuchung inkl. Lohnzahlung muss sein Saldo immer 0 sein!</div>
</div></div>

<div class="tl-item"><div class="tl-num tl-num-b">6</div>
<div class="tl-head" onclick="this.parentElement.classList.toggle('open')">
<div><div class="tl-title">Lohndurchlaufkonto — Grundprinzip</div>
<div class="tl-merksatz">«Alle Lohnbestandteile sammeln, nach Lohnzahlung = Saldo 0»</div></div>
<div class="tl-arrow">&#9654;</div></div>
<div class="tl-detail">
<div class="tl-body"><strong>22010 Lohndurchlaufkonto</strong> = Hilfskonto zur Verarbeitung der Löhne.<br>Wird verwendet, da Lohnaufbereitung und Lohnauszahlung zeitlich unabhängig voneinander erfolgen.<br><br>
<table style="width:100%;border-collapse:collapse;font-size:12px;margin:8px 0">
<tr style="background:var(--s2)"><th style="padding:6px;border:1px solid var(--bd);width:50%">Soll (Beträge zulasten MA)</th><th style="padding:6px;border:1px solid var(--bd);width:50%">Haben (Beträge zugunsten MA)</th></tr>
<tr><td style="padding:6px;border:1px solid var(--bd)">AN-Beiträge an Sozialversicherungen</td><td style="padding:6px;border:1px solid var(--bd)">Löhne (Bruttolohn)</td></tr>
<tr><td style="padding:6px;border:1px solid var(--bd)">Verpflegungsabzug</td><td style="padding:6px;border:1px solid var(--bd)">Kinderzulagen</td></tr>
<tr><td style="padding:6px;border:1px solid var(--bd)">Lohnvorschuss (Verrechnung)</td><td style="padding:6px;border:1px solid var(--bd)">Spesen effektiv</td></tr>
<tr><td style="padding:6px;border:1px solid var(--bd)"><strong>Lohnzahlung (Bank)</strong></td><td style="padding:6px;border:1px solid var(--bd)"></td></tr>
</table>
→ Nach Verbuchung der Lohnzahlung: <strong>Saldo = 0</strong></div>
<div class="merksatz">Merke: Haben = was der MA bekommt (Bruttolohn, Zulagen, Spesen). Soll = was dem MA abgezogen wird (AN-Beiträge, Verpflegung, Vorschuss) + die Bankzahlung.</div>
</div></div>

<div class="tl-item"><div class="tl-num tl-num-g">7</div>
<div class="tl-head" onclick="this.parentElement.classList.toggle('open')">
<div><div class="tl-title">Buchungsbeispiel 1 — Einfache Lohnverbuchung</div>
<div class="tl-merksatz">«Bruttolohn 7'000, AN 1'000, AG 1'300 → Nettolohn 6'000»</div></div>
<div class="tl-arrow">&#9654;</div></div>
<div class="tl-detail">
<div class="tl-body"><strong>Gegeben:</strong> Bruttolohn CHF 7'000 · AN-Beiträge CHF 1'000 · AG-Beiträge CHF 1'300<br>→ Nettolohn = 7'000 − 1'000 = CHF 6'000<br><br>
<table style="width:100%;border-collapse:collapse;font-size:12px;margin:8px 0">
<tr style="background:var(--s2)"><th style="padding:6px;border:1px solid var(--bd)">Lohnart</th><th style="padding:6px;border:1px solid var(--bd)">Soll</th><th style="padding:6px;border:1px solid var(--bd)">Haben</th><th style="padding:6px;text-align:right;border:1px solid var(--bd)">Betrag</th></tr>
<tr><td style="padding:6px;border:1px solid var(--bd)">Bruttolohn</td><td style="padding:6px;border:1px solid var(--bd)">51010 Gehälter</td><td style="padding:6px;border:1px solid var(--bd)">22010 Durchlauf</td><td style="padding:6px;text-align:right;border:1px solid var(--bd)"><strong>7'000</strong></td></tr>
<tr><td style="padding:6px;border:1px solid var(--bd)">AN-Beiträge</td><td style="padding:6px;border:1px solid var(--bd)">22010 Durchlauf</td><td style="padding:6px;border:1px solid var(--bd)">22020 KK SozVers</td><td style="padding:6px;text-align:right;border:1px solid var(--bd)"><strong>1'000</strong></td></tr>
<tr><td style="padding:6px;border:1px solid var(--bd)">AG-Beiträge</td><td style="padding:6px;border:1px solid var(--bd)">52010 Soziallasten</td><td style="padding:6px;border:1px solid var(--bd)">22020 KK SozVers</td><td style="padding:6px;text-align:right;border:1px solid var(--bd)"><strong>1'300</strong></td></tr>
<tr style="background:rgba(52,199,89,.06)"><td style="padding:6px;border:1px solid var(--bd)"><strong>Lohnzahlung</strong></td><td style="padding:6px;border:1px solid var(--bd)">22010 Durchlauf</td><td style="padding:6px;border:1px solid var(--bd)">10200 Bank</td><td style="padding:6px;text-align:right;border:1px solid var(--bd)"><strong>6'000</strong></td></tr>
</table>
<strong>Ergebnis:</strong> Lohndurchlauf = 0 ✓ · KK SozVers = 2'300 (Schuld) · Aufwand ER = 7'000 + 1'300 = CHF 8'300</div>
<div class="merksatz">Merke: Nur CHF 8'300 belasten die Erfolgsrechnung (7'000 Gehälter + 1'300 AG-Beiträge). Die AN-Beiträge sind kein zusätzlicher Aufwand — sie werden nur vom Lohn umgeleitet!</div>
</div></div>

<div class="tl-item"><div class="tl-num tl-num-a">8</div>
<div class="tl-head" onclick="this.parentElement.classList.toggle('open')">
<div><div class="tl-title">Buchungsbeispiel 2 — Erweiterte Lohnabrechnung (Franziska Frisch)</div>
<div class="tl-merksatz">«Privatanteil FZ, Kinderzulagen, Verpflegung, Spesen, Vorschuss»</div></div>
<div class="tl-arrow">&#9654;</div></div>
<div class="tl-detail">
<div class="tl-body">
<strong>Lohnabrechnung Franziska Frisch:</strong><br>
<table style="width:100%;border-collapse:collapse;font-size:12px;margin:8px 0">
<tr><td style="padding:4px;border:1px solid var(--bd)">Monatslohn</td><td style="padding:4px;text-align:right;border:1px solid var(--bd)">6'000</td></tr>
<tr><td style="padding:4px;border:1px solid var(--bd)">+ Privatanteil Geschäftsauto</td><td style="padding:4px;text-align:right;border:1px solid var(--bd)">200</td></tr>
<tr><td style="padding:4px;border:1px solid var(--bd)">+ Kinderzulagen</td><td style="padding:4px;text-align:right;border:1px solid var(--bd)">250</td></tr>
<tr style="background:var(--s2)"><td style="padding:4px;border:1px solid var(--bd)"><strong>= Bruttolohn</strong></td><td style="padding:4px;text-align:right;border:1px solid var(--bd)"><strong>6'450</strong></td></tr>
<tr><td style="padding:4px;border:1px solid var(--bd)">− AN-Beiträge (Basis 6'200)</td><td style="padding:4px;text-align:right;border:1px solid var(--bd)">−880</td></tr>
<tr style="background:var(--s2)"><td style="padding:4px;border:1px solid var(--bd)"><strong>= Nettolohn</strong></td><td style="padding:4px;text-align:right;border:1px solid var(--bd)"><strong>5'570</strong></td></tr>
<tr><td style="padding:4px;border:1px solid var(--bd)">− Privatanteil Geschäftsauto</td><td style="padding:4px;text-align:right;border:1px solid var(--bd)">−200</td></tr>
<tr><td style="padding:4px;border:1px solid var(--bd)">− Verpflegungsabzug</td><td style="padding:4px;text-align:right;border:1px solid var(--bd)">−396</td></tr>
<tr><td style="padding:4px;border:1px solid var(--bd)">+ Spesenentschädigung</td><td style="padding:4px;text-align:right;border:1px solid var(--bd)">+190</td></tr>
<tr style="background:var(--s2)"><td style="padding:4px;border:1px solid var(--bd)"><strong>= Auszahlungstotal</strong></td><td style="padding:4px;text-align:right;border:1px solid var(--bd)"><strong>5'164</strong></td></tr>
<tr><td style="padding:4px;border:1px solid var(--bd)">− Lohnvorschuss</td><td style="padding:4px;text-align:right;border:1px solid var(--bd)">−1'000</td></tr>
<tr style="background:rgba(52,199,89,.06)"><td style="padding:4px;border:1px solid var(--bd)"><strong>= Restzahlung (Bank)</strong></td><td style="padding:4px;text-align:right;border:1px solid var(--bd)"><strong>4'164</strong></td></tr>
</table>
<br><strong>Buchungssätze:</strong>
<table style="width:100%;border-collapse:collapse;font-size:11px;margin:8px 0">
<tr style="background:var(--s2)"><th style="padding:5px;border:1px solid var(--bd)">Lohnart</th><th style="padding:5px;border:1px solid var(--bd)">Soll</th><th style="padding:5px;border:1px solid var(--bd)">Haben</th><th style="padding:5px;text-align:right;border:1px solid var(--bd)">CHF</th></tr>
<tr><td style="padding:5px;border:1px solid var(--bd)">Monatslohn</td><td style="padding:5px;border:1px solid var(--bd)">51010 Gehälter</td><td style="padding:5px;border:1px solid var(--bd)">22010 Durchlauf</td><td style="padding:5px;text-align:right;border:1px solid var(--bd)">6'000</td></tr>
<tr><td style="padding:5px;border:1px solid var(--bd)">Privatanteil FZ</td><td style="padding:5px;border:1px solid var(--bd)">51010 Gehälter</td><td style="padding:5px;border:1px solid var(--bd)">49055 Privatant. FZ</td><td style="padding:5px;text-align:right;border:1px solid var(--bd)">200</td></tr>
<tr><td style="padding:5px;border:1px solid var(--bd)">Kinderzulagen</td><td style="padding:5px;border:1px solid var(--bd)">22020 KK SozVers</td><td style="padding:5px;border:1px solid var(--bd)">22010 Durchlauf</td><td style="padding:5px;text-align:right;border:1px solid var(--bd)">250</td></tr>
<tr><td style="padding:5px;border:1px solid var(--bd)">AN-Beiträge</td><td style="padding:5px;border:1px solid var(--bd)">22010 Durchlauf</td><td style="padding:5px;border:1px solid var(--bd)">22020 KK SozVers</td><td style="padding:5px;text-align:right;border:1px solid var(--bd)">880</td></tr>
<tr><td style="padding:5px;border:1px solid var(--bd)">Verpflegungsabzug</td><td style="padding:5px;border:1px solid var(--bd)">22010 Durchlauf</td><td style="padding:5px;border:1px solid var(--bd)">45070 WA Personalverpfl.</td><td style="padding:5px;text-align:right;border:1px solid var(--bd)">396</td></tr>
<tr><td style="padding:5px;border:1px solid var(--bd)">Spesen effektiv</td><td style="padding:5px;border:1px solid var(--bd)">53010 Übr. PA</td><td style="padding:5px;border:1px solid var(--bd)">22010 Durchlauf</td><td style="padding:5px;text-align:right;border:1px solid var(--bd)">190</td></tr>
<tr><td style="padding:5px;border:1px solid var(--bd)">Lohnvorschuss</td><td style="padding:5px;border:1px solid var(--bd)">22010 Durchlauf</td><td style="padding:5px;border:1px solid var(--bd)">11400 Vorschüsse</td><td style="padding:5px;text-align:right;border:1px solid var(--bd)">1'000</td></tr>
<tr style="background:rgba(52,199,89,.06)"><td style="padding:5px;border:1px solid var(--bd)"><strong>Lohnzahlung</strong></td><td style="padding:5px;border:1px solid var(--bd)">22010 Durchlauf</td><td style="padding:5px;border:1px solid var(--bd)">10200 Bank</td><td style="padding:5px;text-align:right;border:1px solid var(--bd)"><strong>4'164</strong></td></tr>
</table>
</div>
<div class="tl-sub">
<div class="c cbl"><div class="ct2">Privatanteil Geschäftsauto</div><div class="cd">Erhöht den Bruttolohn (AHV-pflichtig!), wird aber wieder abgezogen → kein Geldfluss, nur steuerlich relevant</div></div>
<div class="c cg"><div class="ct2">Kinderzulagen (KIZU)</div><div class="cd"><strong>Nicht AHV-pflichtig!</strong> Werden von der Ausgleichskasse finanziert → Buchung über 22020 KK SozVers<br>Basis AN-Beiträge = 6'450 − 250 = CHF 6'200</div></div>
<div class="c ca"><div class="ct2">Verpflegungsabzug</div><div class="cd">Gegenkonto: <strong>45070 Warenaufwand Personalverpflegung</strong><br>Reduziert den Warenaufwand (Personal isst auf Kosten des Betriebs)</div></div>
<div class="c cm"><div class="ct2">Lohnvorschuss</div><div class="cd">Wurde Mitte Monat bereits per Bank überwiesen → Forderung (11400)<br>Wird bei Lohnabrechnung verrechnet</div></div>
</div>
<div class="merksatz">Merke: Lohndurchlaufkonto prüfen! Haben: 6'000 + 250 + 190 = 6'440. Soll: 880 + 396 + 1'000 + 4'164 = 6'440. → Saldo = 0 ✓</div>
</div></div>

<div class="tl-item"><div class="tl-num tl-num-r">9</div>
<div class="tl-head" onclick="this.parentElement.classList.toggle('open')">
<div><div class="tl-title">Standardbuchungen Personal (Übersicht)</div>
<div class="tl-merksatz">«Bruttolohn, AN-Beiträge, AG-Beiträge, Akonto, Lohnvorschuss, EO»</div></div>
<div class="tl-arrow">&#9654;</div></div>
<div class="tl-detail">
<div class="tl-body">
<table style="width:100%;border-collapse:collapse;font-size:12px;margin:8px 0">
<tr style="background:var(--s2)"><th style="padding:6px;border:1px solid var(--bd)">Vorgang</th><th style="padding:6px;border:1px solid var(--bd)">Soll</th><th style="padding:6px;border:1px solid var(--bd)">Haben</th></tr>
<tr><td style="padding:6px;border:1px solid var(--bd)">Bruttolohn</td><td style="padding:6px;border:1px solid var(--bd)">Lohnaufwand (51010)</td><td style="padding:6px;border:1px solid var(--bd)">Lohndurchlaufkonto (22010)</td></tr>
<tr><td style="padding:6px;border:1px solid var(--bd)">AN-Beiträge (Abzug)</td><td style="padding:6px;border:1px solid var(--bd)">Lohndurchlaufkonto (22010)</td><td style="padding:6px;border:1px solid var(--bd)">Verb. Sozialversicherungen (22020)</td></tr>
<tr><td style="padding:6px;border:1px solid var(--bd)">Kinder-/Familienzulagen</td><td style="padding:6px;border:1px solid var(--bd)">Verb. Sozialversicherungen (22020)</td><td style="padding:6px;border:1px solid var(--bd)">Lohndurchlaufkonto (22010)</td></tr>
<tr><td style="padding:6px;border:1px solid var(--bd)">AG-Beiträge</td><td style="padding:6px;border:1px solid var(--bd)">Sozialvers.aufwand (52010)</td><td style="padding:6px;border:1px solid var(--bd)">Verb. Sozialversicherungen (22020)</td></tr>
<tr><td style="padding:6px;border:1px solid var(--bd)">Verpflegungsabzug</td><td style="padding:6px;border:1px solid var(--bd)">Lohndurchlaufkonto (22010)</td><td style="padding:6px;border:1px solid var(--bd)">WA Personalverpflegung (45070)</td></tr>
<tr><td style="padding:6px;border:1px solid var(--bd)">Spesen effektiv</td><td style="padding:6px;border:1px solid var(--bd)">Übr. Personalaufwand (53010)</td><td style="padding:6px;border:1px solid var(--bd)">Lohndurchlaufkonto (22010)</td></tr>
<tr><td style="padding:6px;border:1px solid var(--bd)">Lohnvorschuss (Auszahlung)</td><td style="padding:6px;border:1px solid var(--bd)">Lohnvorschuss Aktiv (11400)</td><td style="padding:6px;border:1px solid var(--bd)">Bank (10200)</td></tr>
<tr><td style="padding:6px;border:1px solid var(--bd)">Lohnvorschuss (Verrechnung)</td><td style="padding:6px;border:1px solid var(--bd)">Lohndurchlaufkonto (22010)</td><td style="padding:6px;border:1px solid var(--bd)">Lohnvorschuss Aktiv (11400)</td></tr>
<tr><td style="padding:6px;border:1px solid var(--bd)">Akonto-Rechnung SV</td><td style="padding:6px;border:1px solid var(--bd)">Verb. Sozialversicherungen (22020)</td><td style="padding:6px;border:1px solid var(--bd)">Verb. aus LL</td></tr>
<tr><td style="padding:6px;border:1px solid var(--bd)">Zahlung Akonto SV</td><td style="padding:6px;border:1px solid var(--bd)">Verb. aus LL</td><td style="padding:6px;border:1px solid var(--bd)">Bank (10200)</td></tr>
<tr><td style="padding:6px;border:1px solid var(--bd)">EO-Entschädigung</td><td style="padding:6px;border:1px solid var(--bd)">Bank (10200)</td><td style="padding:6px;border:1px solid var(--bd)">Lohnaufwand (51010)</td></tr>
<tr><td style="padding:6px;border:1px solid var(--bd)"><strong>Lohnzahlung</strong></td><td style="padding:6px;border:1px solid var(--bd)">Lohndurchlaufkonto (22010)</td><td style="padding:6px;border:1px solid var(--bd)">Bank (10200)</td></tr>
</table>
</div>
<div class="merksatz">Merke: Spesen sind nicht sozialversicherungspflichtig — sie werden über «Übriger Personalaufwand» (53010) gebucht, nicht über Gehälter!</div>
</div></div>

</div>
</div>

<!-- ===================== KAPITEL 6: MWST ===================== -->
<div class="sec" id="fa3_kap6"><h1>Mehrwertsteuer</h1><p class="sub">Steuersätze, Nettomethode & MWST-Abrechnung</p>
<div class="hl">Die MWST ist eine Allphasensteuer mit Vorsteuerabzug — jeder Umsatzfranken wird beim Endverbraucher genau einmal besteuert.</div>
<div class="hlbl"><strong>Lernziele:</strong><br>• MWST-Steuersätze korrekt anwenden und verbuchen (Nettomethode)<br>• Selbständig eine MWST-Abrechnung für ein Quartal erstellen</div>

<div style="display:flex;gap:8px;margin:12px 0 4px">
<button style="font-size:11px;padding:4px 10px" onclick="this.parentElement.nextElementSibling.querySelectorAll('.tl-item').forEach(i=>i.classList.add('open'))">Alle aufklappen</button>
<button style="font-size:11px;padding:4px 10px" onclick="this.parentElement.nextElementSibling.querySelectorAll('.tl-item').forEach(i=>i.classList.remove('open'))">Alle schliessen</button>
</div>
<div class="tl">

<div class="tl-item"><div class="tl-num tl-num-b">1</div>
<div class="tl-head" onclick="this.parentElement.classList.toggle('open')">
<div><div class="tl-title">Eigenschaften der MWST</div>
<div class="tl-merksatz">«Fiskalsteuer, Verbrauchssteuer, Allphasensteuer»</div></div>
<div class="tl-arrow">&#9654;</div></div>
<div class="tl-detail">
<div class="tl-sub">
<div class="c ca"><div class="ct2">Fiskalsteuer</div><div class="cd">Dient der Finanzierung der Staatsausgaben — ca. 1/3 der Bundeseinnahmen (> CHF 75 Mrd.)</div></div>
<div class="c cg"><div class="ct2">Verbrauchssteuer</div><div class="cd">Der Konsum von Waren und Dienstleistungen wird besteuert</div></div>
<div class="c cbl"><div class="ct2">Allphasensteuer</div><div class="cd">Wird auf allen Stufen erhoben (Produktion, Handel, Dienstleistung) — aber mit Vorsteuerabzug!</div></div>
</div>
<div class="merksatz">Merke: Der Endverbraucher trägt die volle MWST — die Unternehmen sind nur «Steuersammler».</div>
</div></div>

<div class="tl-item"><div class="tl-num tl-num-g">2</div>
<div class="tl-head" onclick="this.parentElement.classList.toggle('open')">
<div><div class="tl-title">Steuersätze & Steuerpflicht</div>
<div class="tl-merksatz">«8.1% Normal, 2.6% Reduziert, 3.8% Beherbergung»</div></div>
<div class="tl-arrow">&#9654;</div></div>
<div class="tl-detail">
<div class="tl-sub">
<div class="c cr"><div class="ct2">Normalsatz: 8.1%</div><div class="cd">Gilt für alle Leistungen ohne Sonderregelung (z.B. Restaurant-Umsatz)</div></div>
<div class="c cg"><div class="ct2">Reduzierter Satz: 2.6%</div><div class="cd">Nahrungsmittel (nicht Gastro!), Wasser, Medikamente, Bücher, Zeitungen</div></div>
<div class="c cbl"><div class="ct2">Sondersatz: 3.8%</div><div class="cd">Nur für Beherbergung (Übernachtung inkl. Frühstück)</div></div>
<div class="c cm"><div class="ct2">Befreit (0%)</div><div class="cd">Exporte — Vorsteuerabzug trotzdem möglich!</div></div>
<div class="c cp"><div class="ct2">Ausgenommen</div><div class="cd">Bildung, Sport, Versicherungen, Geld-/Kapitalverkehr — kein Vorsteuerabzug!</div></div>
</div>
<div class="merksatz">Merke: Steuerpflichtig ab CHF 100'000 Jahresumsatz (Vereine: CHF 250'000). Der Sondersatz 3.8% ist eine Hotellerie-Besonderheit!</div>
</div></div>

<div class="tl-item"><div class="tl-num tl-num-a">3</div>
<div class="tl-head" onclick="this.parentElement.classList.toggle('open')">
<div><div class="tl-title">MWST-Konten & Nettomethode</div>
<div class="tl-merksatz">«Vorsteuer = Guthaben (Aktiv), Umsatzsteuer = Schuld (Passiv)»</div></div>
<div class="tl-arrow">&#9654;</div></div>
<div class="tl-detail">
<div class="tl-body">
<strong>3 besondere Konten:</strong><br>
<strong>11460</strong> Vorsteuer Waren/dir. Betriebsaufwand (Aktivkonto = Guthaben) — für KK 4<br>
<strong>11470</strong> Vorsteuer Investitionen/Betriebsaufwand (Aktivkonto) — für KK 1, 6<br>
<strong>22080</strong> MWST auf Umsatz (Passivkonto = Schuld) — für alle Erträge<br><br>
<strong>Nettomethode:</strong> Jeder MWST-Geschäftsfall wird mit 2 Buchungen erfasst:<br>
1. Nettobetrag (ohne MWST) auf das eigentliche Konto<br>
2. MWST-Betrag auf das entsprechende MWST-Konto
</div>
<div class="merksatz">Merke: Die 2 Vorsteuerkonten sind getrennt, weil die ESTV die Verhältnisse prüft — bei auffälligen Werten droht eine Revision!</div>
</div></div>

<div class="tl-item"><div class="tl-num tl-num-r">4</div>
<div class="tl-head" onclick="this.parentElement.classList.toggle('open')">
<div><div class="tl-title">MWST-Abrechnung (effektive Methode)</div>
<div class="tl-merksatz">«Quartalsweise Selbstdeklaration — innert 60 Tagen nach Quartalsende»</div></div>
<div class="tl-arrow">&#9654;</div></div>
<div class="tl-detail">
<div class="tl-body"><strong>Umsatzsteuer − Vorsteuer = Steuerschuld an ESTV</strong> (Normalfall)<br><br>
<strong>3 Teile des Formulars:</strong><br>
I. Vereinbarte/vereinnahmte Entgelte + Abzüge<br>
II. Steuerberechnung (Umsatzsteuer − Vorsteuer = Steuerforderung)<br>
III. Nicht-Entgelte (Vorsteuerkürzung)<br><br>
<strong>Wichtige Ziffern:</strong> 200 (Total Entgelte), 301/311/341 (Umsatzsteuer nach Satz), 400/405 (Vorsteuer), 500 (Steuerschuld)</div>
<div class="merksatz">Merke: Bei verspäteter Zahlung wird ein Verzugszins fällig. Steuerhinterziehung: Busse bis zum 5-fachen der hinterzogenen Steuer!</div>
</div></div>

</div>
</div>

<!-- ===================== KAPITEL 7: ABSCHLÜSSE ===================== -->
<div class="sec" id="fa3_kap7"><h1>Abschlüsse & Reports</h1><p class="sub">Monats-, Quartals-, Jahresabschluss & Kennzahlen</p>
<div class="hl">Je genauer die kurzfristigen Abschlüsse, desto einfacher und schneller der Jahresabschluss.</div>
<div class="hlbl"><strong>Lernziele:</strong><br>• Monats-, Quartals- und Jahresabschluss selbständig durchführen<br>• Kennzahlen berechnen und mit Branchenwerten vergleichen<br>• Rechnungsabgrenzungen und Rückstellungen korrekt verbuchen</div>

<div style="display:flex;gap:8px;margin:12px 0 4px">
<button style="font-size:11px;padding:4px 10px" onclick="this.parentElement.nextElementSibling.querySelectorAll('.tl-item').forEach(i=>i.classList.add('open'))">Alle aufklappen</button>
<button style="font-size:11px;padding:4px 10px" onclick="this.parentElement.nextElementSibling.querySelectorAll('.tl-item').forEach(i=>i.classList.remove('open'))">Alle schliessen</button>
</div>
<div class="tl">

<div class="tl-item"><div class="tl-num tl-num-b">1</div>
<div class="tl-head" onclick="this.parentElement.classList.toggle('open')">
<div><div class="tl-title">Abschlussarten im Vergleich</div>
<div class="tl-merksatz">«Vom Tagesabschluss bis zum Jahresabschluss — je tiefer, desto detaillierter»</div></div>
<div class="tl-arrow">&#9654;</div></div>
<div class="tl-detail">
<div class="tl-sub">
<div class="c cbl"><div class="ct2">Monatsabschluss</div><div class="cd">Bilanz: Kasse, Bank, FLL, Vorräte<br>ER: bis Stufe GOP<br>Zusätzlich: Lohnverbuchung inkl. Rückstellungen</div></div>
<div class="c cg"><div class="ct2">Quartalsabschluss</div><div class="cd">Wie Monat + MWST-Abrechnung, QST-Abrechnung, Abstimmung Sozialversicherungen, ER bis EBITDA</div></div>
<div class="c ca"><div class="ct2">Jahresabschluss</div><div class="cd">Wie Quartal + Bewertung aller Bilanzkonten, Bestandesnachweis, Anhang, Unternehmensergebnis, definitive SV-Abrechnung</div></div>
</div>
<div class="merksatz">Merke: Monat = GOP, Quartal = EBITDA + MWST, Jahr = alles inkl. Bewertung und Anhang.</div>
</div></div>

<div class="tl-item"><div class="tl-num tl-num-g">2</div>
<div class="tl-head" onclick="this.parentElement.classList.toggle('open')">
<div><div class="tl-title">Rechnungsabgrenzungen (ARA & PRA)</div>
<div class="tl-merksatz">«ARA = vorausbezahlt/noch nicht erhalten, PRA = noch nicht bezahlt/voraus erhalten»</div></div>
<div class="tl-arrow">&#9654;</div></div>
<div class="tl-detail">
<div class="tl-body"><strong>Gegenkonto ist IMMER ein Erfolgskonto!</strong></div>
<div class="tl-sub">
<div class="c ca"><div class="ct2">Aktive RA (Aktivkonto, UV)</div><div class="cd"><strong>Ende Periode:</strong> ARA / Aufwand- oder Ertragskonto<br><strong>Beginn neue Periode:</strong> Aufwand- oder Ertragskonto / ARA<br>Beispiel: Versicherungsprämie vorausbezahlt</div></div>
<div class="c cg"><div class="ct2">Passive RA (Passivkonto, kfr. FK)</div><div class="cd"><strong>Ende Periode:</strong> Aufwand- oder Ertragskonto / PRA<br><strong>Beginn neue Periode:</strong> PRA / Aufwand- oder Ertragskonto<br>Beispiel: Ferienguthaben Mitarbeiter</div></div>
</div>
<div class="merksatz">Merke: ARA steht Ende Periode im Soll, PRA im Haben. Zu Beginn der neuen Periode wird immer zurückgebucht!</div>
</div></div>

<div class="tl-item"><div class="tl-num tl-num-a">3</div>
<div class="tl-head" onclick="this.parentElement.classList.toggle('open')">
<div><div class="tl-title">Wichtige Kennzahlen</div>
<div class="tl-merksatz">«Rendite, Sicherheit, Liquidität — das Magische Dreieck»</div></div>
<div class="tl-arrow">&#9654;</div></div>
<div class="tl-detail">
<div class="tl-body">
<table style="width:100%;border-collapse:collapse;font-size:11px;margin:8px 0">
<tr style="background:var(--s2)"><th style="padding:6px;border:1px solid var(--bd)">Kennzahl</th><th style="padding:6px;border:1px solid var(--bd)">Formel</th><th style="padding:6px;border:1px solid var(--bd)">Richtwert</th></tr>
<tr><td style="padding:6px;border:1px solid var(--bd)">Eigenfinanzierungsgrad</td><td style="padding:6px;border:1px solid var(--bd)">EK / Gesamtkapital × 100</td><td style="padding:6px;border:1px solid var(--bd)">25–50%</td></tr>
<tr><td style="padding:6px;border:1px solid var(--bd)">Liquiditätsgrad I</td><td style="padding:6px;border:1px solid var(--bd)">Flüssige Mittel / kfr. FK × 100</td><td style="padding:6px;border:1px solid var(--bd)">10–35%</td></tr>
<tr><td style="padding:6px;border:1px solid var(--bd)">Liquiditätsgrad II</td><td style="padding:6px;border:1px solid var(--bd)">(Flüssige Mittel + Ford.) / kfr. FK × 100</td><td style="padding:6px;border:1px solid var(--bd)">ca. 100%</td></tr>
<tr><td style="padding:6px;border:1px solid var(--bd)">Liquiditätsgrad III</td><td style="padding:6px;border:1px solid var(--bd)">UV / kfr. FK × 100</td><td style="padding:6px;border:1px solid var(--bd)">150–200%</td></tr>
<tr><td style="padding:6px;border:1px solid var(--bd)">Anlagedeckungsgrad II</td><td style="padding:6px;border:1px solid var(--bd)">(EK + lfr. FK) / AV × 100</td><td style="padding:6px;border:1px solid var(--bd)">> 100%</td></tr>
<tr><td style="padding:6px;border:1px solid var(--bd)">Eigenkapitalrendite</td><td style="padding:6px;border:1px solid var(--bd)">Reingewinn / EK × 100</td><td style="padding:6px;border:1px solid var(--bd)">8%</td></tr>
<tr><td style="padding:6px;border:1px solid var(--bd)">Umsatzrentabilität</td><td style="padding:6px;border:1px solid var(--bd)">Reingewinn / Umsatz × 100</td><td style="padding:6px;border:1px solid var(--bd)">1.5–2.5%</td></tr>
<tr><td style="padding:6px;border:1px solid var(--bd)">REVPAR</td><td style="padding:6px;border:1px solid var(--bd)">Beherbergungsertrag / (Zimmer × Betriebstage)</td><td style="padding:6px;border:1px solid var(--bd)">CHF 154 (4*)</td></tr>
<tr><td style="padding:6px;border:1px solid var(--bd)">Geldumschlag</td><td style="padding:6px;border:1px solid var(--bd)">Lagerdauer + Debitorenfrist − Kreditorenfrist</td><td style="padding:6px;border:1px solid var(--bd)">—</td></tr>
</table>
</div>
<div class="merksatz">Merke: Liquidität II (Quick Ratio) ≈ 100% ist die wichtigste — kann das Unternehmen seine kurzfristigen Schulden ohne Lagerverkauf bezahlen?</div>
</div></div>

</div>
</div>

<!-- ===================== KAPITEL 8: GEWINNVERWENDUNG ===================== -->
<div class="sec" id="fa3_kap8"><h1>Gewinnverwendung</h1><p class="sub">Reserven, Dividenden & Bilanzgewinn bei AG/GmbH</p>
<div class="hl">Nach dem Jahresabschluss entscheidet die GV über den Bilanzgewinn: Reserven bilden, Dividende ausschütten oder vortragen.</div>

<div style="display:flex;gap:8px;margin:12px 0 4px">
<button style="font-size:11px;padding:4px 10px" onclick="this.parentElement.nextElementSibling.querySelectorAll('.tl-item').forEach(i=>i.classList.add('open'))">Alle aufklappen</button>
<button style="font-size:11px;padding:4px 10px" onclick="this.parentElement.nextElementSibling.querySelectorAll('.tl-item').forEach(i=>i.classList.remove('open'))">Alle schliessen</button>
</div>
<div class="tl">

<div class="tl-item"><div class="tl-num tl-num-b">1</div>
<div class="tl-head" onclick="this.parentElement.classList.toggle('open')">
<div><div class="tl-title">Bilanzgewinn & Gewinnverteilungsplan</div>
<div class="tl-merksatz">«Bilanzgewinn = Gewinnvortrag + Jahresgewinn − Reservenzuweisung»</div></div>
<div class="tl-arrow">&#9654;</div></div>
<div class="tl-detail">
<div class="tl-body">
<strong>Schrittweise Berechnung:</strong><br>
1. <strong>Gesetzliche Reserve:</strong> 5% des Jahresgewinns (minus allfälligen Verlustvortrag), bis Reserve = 50% des Aktien-/Stammkapitals (<span class="b bb">Art. 671/672 OR</span>)<br>
2. <strong>Freiwillige Reserve:</strong> Optional, gemäss <span class="b bb">Art. 673 OR</span><br>
3. <strong>Dividende:</strong> Bruttodividende = 65% Nettodividende + 35% Verrechnungssteuer<br>
4. <strong>Gewinnvortrag:</strong> Rest wird ins nächste Jahr vorgetragen<br><br>
<strong>Gewinnverteilungsplan:</strong><br>
Jahresgewinn<br>
± Gewinn-/Verlustvortrag Vorjahre<br>
− Reservenzuweisung (5%)<br>
= Bilanzgewinn zur Verfügung der GV<br>
− Bruttodividende<br>
= Vortrag ins nächste Geschäftsjahr
</div>
<div class="merksatz">Merke: Verlustvortrag wird zuerst verrechnet — Reserve nur auf dem Restgewinn! Sind Reserven bereits ≥ 50% AK → keine Zuweisung nötig.</div>
</div></div>

</div>
</div>

<!-- ===================== ÜBUNGEN ===================== -->
<div class="sec" id="fa3_ueb"><h1>Interaktive Übungen</h1><p class="sub">Wähle eine Übung und teste dein Wissen</p>

<div id="fa3_ueb_sel">
<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:12px;margin:16px 0">
<div class="c ck" onclick="fa3ShowUeb(1)" style="text-align:center;padding:24px 16px"><div style="font-size:18px;font-weight:700;color:var(--g);margin-bottom:6px">ER</div><div class="ct2">Siebenstufige ER</div><div class="cd">Alle 7 Stufen berechnen</div></div>
<div class="c ck" onclick="fa3ShowUeb(2)" style="text-align:center;padding:24px 16px"><div style="font-size:18px;font-weight:700;color:var(--bl);margin-bottom:6px">GoR</div><div class="ct2">GoR Beurteilung</div><div class="cd">10 Fälle beurteilen</div></div>
<div class="c ck" onclick="fa3ShowUeb(3)" style="text-align:center;padding:24px 16px"><div style="font-size:18px;font-weight:700;color:var(--am);margin-bottom:6px">WA%</div><div class="ct2">Warenrenditen</div><div class="cd">Bestandesänderung berechnen</div></div>
<div class="c ck" onclick="fa3ShowUeb(4)" style="text-align:center;padding:24px 16px"><div style="font-size:18px;font-weight:700;color:var(--ac);margin-bottom:6px">8.1%</div><div class="ct2">MWST Prinzip</div><div class="cd">Allphasensteuer verstehen</div></div>
<div class="c ck" onclick="fa3ShowUeb(5)" style="text-align:center;padding:24px 16px"><div style="font-size:18px;font-weight:700;color:var(--pr);margin-bottom:6px">BS</div><div class="ct2">Monatsabschluss</div><div class="cd">Buchungssätze → T-Konten → Bilanz → ER</div></div>
<div class="c ck" onclick="fa3ShowUeb(6)" style="text-align:center;padding:24px 16px"><div style="font-size:18px;font-weight:700;color:var(--am);margin-bottom:6px">LV</div><div class="ct2">Lohnverbuchung</div><div class="cd">Grundprinzip & Hauptbuchkonten</div></div>
</div>
</div>

<!-- ÜBUNG 1: Siebenstufige ER (randomisiert) -->
<div id="fa3_ueb1" style="display:none">
<button onclick="fa3ShowUeb(0)" style="margin-bottom:16px;font-size:12px">← Zurück zur Auswahl</button>
<h2>Siebenstufige Erfolgsrechnung</h2>
<p class="sub" id="fa3_er_sub">Berechne alle 7 Stufen</p>
<div class="hl" id="fa3_er_info"></div>

<div style="margin:16px 0"><button class="bp1" onclick="fa3CheckER()">Alle korrigieren</button> <button onclick="fa3ResetER()" style="margin-left:8px">Zurücksetzen</button> <button onclick="fa3GenER()" style="margin-left:8px">Neue Zahlen</button></div>

<div id="fa3_er_tableWrap"></div>
<div id="fa3_er_result" style="margin-top:12px"></div>
</div>

<!-- ÜBUNG 2: GoR -->
<div id="fa3_ueb2" style="display:none">
<button onclick="fa3ShowUeb(0)" style="margin-bottom:16px;font-size:12px">← Zurück zur Auswahl</button>
<h2>Grundsätze ordnungsmässiger Rechnungslegung</h2>
<p class="sub">Muster AG — Beurteile ob die GoR eingehalten wurden</p>

<div id="fa3_gor_questions"></div>
<div style="margin:16px 0"><button class="bp1" onclick="fa3CheckGoR()">Alle korrigieren</button> <button onclick="fa3ResetGoR()" style="margin-left:8px">Zurücksetzen</button></div>
<div id="fa3_gor_result" style="margin-top:12px"></div>
</div>

<!-- ÜBUNG 3: Warenrenditen -->
<div id="fa3_ueb3" style="display:none">
<button onclick="fa3ShowUeb(0)" style="margin-bottom:16px;font-size:12px">← Zurück zur Auswahl</button>
<h2>Warenaufwand & Warenrenditen</h2>
<p class="sub">Berechne den effektiven Warenaufwand nach Bestandesänderung</p>
<div class="hl">Gegeben: Wareneinkauf und Bestandesänderung je Sparte. Berechne den effektiven Warenaufwand und den Warenaufwand in % des Warenertrags.</div>

<table style="width:100%;border-collapse:collapse;font-size:12px;margin:8px 0">
<tr style="background:var(--s2)"><th style="padding:6px;border:1px solid var(--bd)">Sparte</th><th style="padding:6px;text-align:right;border:1px solid var(--bd)">Ertrag</th><th style="padding:6px;text-align:right;border:1px solid var(--bd)">Einkauf</th><th style="padding:6px;text-align:right;border:1px solid var(--bd)">Bestandesänd.</th><th style="padding:6px;text-align:right;border:1px solid var(--bd)">Eff. Aufwand</th><th style="padding:6px;text-align:right;border:1px solid var(--bd)">WA %</th><th style="padding:6px;text-align:right;border:1px solid var(--bd)">Branche %</th></tr>
<tr><td style="padding:6px;border:1px solid var(--bd)">Wein</td><td style="padding:6px;text-align:right;border:1px solid var(--bd)">4'300</td><td style="padding:6px;text-align:right;border:1px solid var(--bd)">1'000</td><td style="padding:6px;text-align:right;border:1px solid var(--bd)">Abn. 500</td><td style="padding:6px;border:1px solid var(--bd)"><input type="text" id="fa3_wa_w" style="width:60px;text-align:right;padding:3px" placeholder="?"></td><td style="padding:6px;border:1px solid var(--bd)"><input type="text" id="fa3_wap_w" style="width:50px;text-align:right;padding:3px" placeholder="%"></td><td style="padding:6px;text-align:right;border:1px solid var(--bd)">40.3%</td></tr>
<tr><td style="padding:6px;border:1px solid var(--bd)">Bier</td><td style="padding:6px;text-align:right;border:1px solid var(--bd)">1'200</td><td style="padding:6px;text-align:right;border:1px solid var(--bd)">1'500</td><td style="padding:6px;text-align:right;border:1px solid var(--bd)">Zun. 1'100</td><td style="padding:6px;border:1px solid var(--bd)"><input type="text" id="fa3_wa_b" style="width:60px;text-align:right;padding:3px" placeholder="?"></td><td style="padding:6px;border:1px solid var(--bd)"><input type="text" id="fa3_wap_b" style="width:50px;text-align:right;padding:3px" placeholder="%"></td><td style="padding:6px;text-align:right;border:1px solid var(--bd)">31.5%</td></tr>
<tr><td style="padding:6px;border:1px solid var(--bd)">Spirituosen</td><td style="padding:6px;text-align:right;border:1px solid var(--bd)">500</td><td style="padding:6px;text-align:right;border:1px solid var(--bd)">800</td><td style="padding:6px;text-align:right;border:1px solid var(--bd)">Zun. 670</td><td style="padding:6px;border:1px solid var(--bd)"><input type="text" id="fa3_wa_s" style="width:60px;text-align:right;padding:3px" placeholder="?"></td><td style="padding:6px;border:1px solid var(--bd)"><input type="text" id="fa3_wap_s" style="width:50px;text-align:right;padding:3px" placeholder="%"></td><td style="padding:6px;text-align:right;border:1px solid var(--bd)">20.3%</td></tr>
<tr><td style="padding:6px;border:1px solid var(--bd)">Mineral</td><td style="padding:6px;text-align:right;border:1px solid var(--bd)">2'500</td><td style="padding:6px;text-align:right;border:1px solid var(--bd)">200</td><td style="padding:6px;text-align:right;border:1px solid var(--bd)">Abn. 200</td><td style="padding:6px;border:1px solid var(--bd)"><input type="text" id="fa3_wa_m" style="width:60px;text-align:right;padding:3px" placeholder="?"></td><td style="padding:6px;border:1px solid var(--bd)"><input type="text" id="fa3_wap_m" style="width:50px;text-align:right;padding:3px" placeholder="%"></td><td style="padding:6px;text-align:right;border:1px solid var(--bd)">21.7%</td></tr>
<tr><td style="padding:6px;border:1px solid var(--bd)">Kaffee</td><td style="padding:6px;text-align:right;border:1px solid var(--bd)">800</td><td style="padding:6px;text-align:right;border:1px solid var(--bd)">400</td><td style="padding:6px;text-align:right;border:1px solid var(--bd)">Zun. 350</td><td style="padding:6px;border:1px solid var(--bd)"><input type="text" id="fa3_wa_k" style="width:60px;text-align:right;padding:3px" placeholder="?"></td><td style="padding:6px;border:1px solid var(--bd)"><input type="text" id="fa3_wap_k" style="width:50px;text-align:right;padding:3px" placeholder="%"></td><td style="padding:6px;text-align:right;border:1px solid var(--bd)">7.7%</td></tr>
<tr><td style="padding:6px;border:1px solid var(--bd)">Küche</td><td style="padding:6px;text-align:right;border:1px solid var(--bd)">10'000</td><td style="padding:6px;text-align:right;border:1px solid var(--bd)">2'000</td><td style="padding:6px;text-align:right;border:1px solid var(--bd)">Abn. 1'600</td><td style="padding:6px;border:1px solid var(--bd)"><input type="text" id="fa3_wa_ku" style="width:60px;text-align:right;padding:3px" placeholder="?"></td><td style="padding:6px;border:1px solid var(--bd)"><input type="text" id="fa3_wap_ku" style="width:50px;text-align:right;padding:3px" placeholder="%"></td><td style="padding:6px;text-align:right;border:1px solid var(--bd)">30.9%</td></tr>
</table>
<div style="margin:12px 0"><button class="bp1" onclick="fa3CheckWA()">Alle korrigieren</button> <button onclick="fa3ResetWA()" style="margin-left:8px">Zurücksetzen</button></div>
<div id="fa3_wa_result" style="margin-top:12px"></div>
</div>

<!-- ÜBUNG 4: MWST Prinzip -->
<div id="fa3_ueb4" style="display:none">
<button onclick="fa3ShowUeb(0)" style="margin-bottom:16px;font-size:12px">← Zurück zur Auswahl</button>
<h2>Prinzip der Mehrwertsteuer</h2>
<p class="sub">Wertschöpfungskette eines Rucksacks (MWST-Satz: 10%)</p>
<div class="hl">Import exkl. MWST: CHF 30 · Verkauf an Händler exkl.: CHF 50 · Verkauf an Endkunde exkl.: CHF 90</div>

<p style="margin-top:12px"><strong>1. MWST-Beträge berechnen:</strong></p>
<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:8px;margin:8px 0">
<div class="c cbl" style="padding:12px"><strong>Import</strong><br>MWST (10% von 30): <input type="text" id="fa3_mw_i" style="width:50px;text-align:right;padding:3px" placeholder="?"><br>Total inkl.: <input type="text" id="fa3_mw_it" style="width:50px;text-align:right;padding:3px" placeholder="?"></div>
<div class="c cg" style="padding:12px"><strong>Victoria AG → Händler</strong><br>MWST (10% von 50): <input type="text" id="fa3_mw_v" style="width:50px;text-align:right;padding:3px" placeholder="?"><br>Total inkl.: <input type="text" id="fa3_mw_vt" style="width:50px;text-align:right;padding:3px" placeholder="?"></div>
<div class="c ca" style="padding:12px"><strong>Bergsport AG → Endkunde</strong><br>MWST (10% von 90): <input type="text" id="fa3_mw_b" style="width:50px;text-align:right;padding:3px" placeholder="?"><br>Total inkl.: <input type="text" id="fa3_mw_bt" style="width:50px;text-align:right;padding:3px" placeholder="?"></div>
</div>

<p><strong>2. Geschuldete MWST je Unternehmen:</strong></p>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin:8px 0">
<div class="c cg" style="padding:12px"><strong>Victoria AG</strong><br>Umsatzsteuer − Vorsteuer = <input type="text" id="fa3_mw_gv" style="width:50px;text-align:right;padding:3px" placeholder="?"></div>
<div class="c ca" style="padding:12px"><strong>Bergsport AG</strong><br>Umsatzsteuer − Vorsteuer = <input type="text" id="fa3_mw_gb" style="width:50px;text-align:right;padding:3px" placeholder="?"></div>
</div>

<p><strong>3. Total MWST für ESTV:</strong> <input type="text" id="fa3_mw_total" style="width:50px;text-align:right;padding:3px" placeholder="?"></p>

<div style="margin:12px 0"><button class="bp1" onclick="fa3CheckMWST()">Alle korrigieren</button> <button onclick="fa3ResetMWST()" style="margin-left:8px">Zurücksetzen</button></div>
<div id="fa3_mw_result" style="margin-top:12px"></div>
</div>

<!-- ÜBUNG 5: Monatsabschluss (4 Stufen) -->
<div id="fa3_ueb5" style="display:none">
<button onclick="fa3ShowUeb(0)" style="margin-bottom:16px;font-size:12px">← Zurück zur Auswahl</button>
<h2>Monatsabschluss — Buchungssätze, T-Konten, Bilanz & ER</h2>
<p class="sub">Vom Geschäftsfall bis zum Abschluss — alles selbst erarbeiten</p>

<div id="fa3_bs_aufgabe" class="hlbl" style="margin-bottom:16px"></div>
<div id="fa3_bs_konten" style="margin-bottom:8px"></div>
<div id="fa3_bs_gfList" style="margin-bottom:20px"></div>

<div style="margin:12px 0;display:flex;gap:8px;flex-wrap:wrap">
<button class="bp1" onclick="fa3GenBS()">Neue Aufgabe generieren</button>
</div>

<!-- AUFGABE 1: Buchungsjournal -->
<div class="c" style="padding:16px 20px;margin-bottom:20px">
<h3 style="margin-bottom:4px;color:var(--ac)">Aufgabe 1 — Buchungsjournal</h3>
<p style="font-size:13px;color:var(--tx2);margin-bottom:12px">Erstellen Sie anhand der Geschäftsfälle die Buchungssätze. Tragen Sie Buchungstext, Soll-Konto (Nr.), Haben-Konto (Nr.) und Betrag ein.</p>
<div id="fa3_bs_journal"></div>
<div style="margin:12px 0;display:flex;gap:8px;flex-wrap:wrap">
<button class="bp1" onclick="fa3CheckBS(1)">Korrigieren</button>
<button onclick="fa3ShowSol(1)" id="fa3_bs_sol1btn" style="display:none">Lösung anzeigen</button>
<button onclick="fa3ResetBS(1)" style="font-size:12px">Zurücksetzen</button>
</div>
<div id="fa3_bs_res1" style="margin-top:8px"></div>
</div>

<!-- AUFGABE 2: T-Konten (Kontoauszüge) -->
<div class="c" style="padding:16px 20px;margin-bottom:20px">
<h3 style="margin-bottom:4px;color:var(--g)">Aufgabe 2 — Kontoauszüge (T-Konten)</h3>
<p style="font-size:13px;color:var(--tx2);margin-bottom:12px">Führen Sie die Konten parallel. Tragen Sie in jedes T-Konto die Beträge auf der richtigen Seite (Soll/Haben) ein und berechnen Sie den Saldo.</p>
<div id="fa3_bs_tkonten"></div>
<div style="margin:12px 0;display:flex;gap:8px;flex-wrap:wrap">
<button class="bp1" onclick="fa3CheckBS(2)">Korrigieren</button>
<button onclick="fa3ShowSol(2)" id="fa3_bs_sol2btn" style="display:none">Lösung anzeigen</button>
<button onclick="fa3ResetBS(2)" style="font-size:12px">Zurücksetzen</button>
</div>
<div id="fa3_bs_res2" style="margin-top:8px"></div>
</div>

<!-- AUFGABE 3: Bilanz -->
<div class="c" style="padding:16px 20px;margin-bottom:20px">
<h3 style="margin-bottom:4px;color:var(--bl)">Aufgabe 3 — Bilanz</h3>
<p style="font-size:13px;color:var(--tx2);margin-bottom:12px">Erstellen Sie die Bilanz per Monatsende. Ordnen Sie jedes Bilanzkonto einer Position zu und übertragen Sie den Saldo. Berechnen Sie die Totale.</p>
<div id="fa3_bs_bilanz"></div>
<div style="margin:12px 0;display:flex;gap:8px;flex-wrap:wrap">
<button class="bp1" onclick="fa3CheckBS(3)">Korrigieren</button>
<button onclick="fa3ShowSol(3)" id="fa3_bs_sol3btn" style="display:none">Lösung anzeigen</button>
<button onclick="fa3ResetBS(3)" style="font-size:12px">Zurücksetzen</button>
</div>
<div id="fa3_bs_res3" style="margin-top:8px"></div>
</div>

<!-- AUFGABE 4: Erfolgsrechnung -->
<div class="c" style="padding:16px 20px;margin-bottom:20px">
<h3 style="margin-bottom:4px;color:var(--pr)">Aufgabe 4 — Erfolgsrechnung</h3>
<p style="font-size:13px;color:var(--tx2);margin-bottom:12px">Erstellen Sie die Erfolgsrechnung für den Monat. Ordnen Sie die Erfolgskonten zu und berechnen Sie das Monatsergebnis.</p>
<div id="fa3_bs_er"></div>
<div style="margin:12px 0;display:flex;gap:8px;flex-wrap:wrap">
<button class="bp1" onclick="fa3CheckBS(4)">Korrigieren</button>
<button onclick="fa3ShowSol(4)" id="fa3_bs_sol4btn" style="display:none">Lösung anzeigen</button>
<button onclick="fa3ResetBS(4)" style="font-size:12px">Zurücksetzen</button>
</div>
<div id="fa3_bs_res4" style="margin-top:8px"></div>
</div>

<!-- AUFGABE 5: Lohnverbuchung -->
<div class="c" style="padding:16px 20px;margin-bottom:20px">
<h3 style="margin-bottom:4px;color:var(--am)">Aufgabe 5 — Lohnverbuchung</h3>
<p style="font-size:13px;color:var(--tx2);margin-bottom:12px">Verbuchen Sie die Lohnabrechnung über das Lohndurchlaufkonto. Tragen Sie die Buchungssätze ein und prüfen Sie, ob das Lohndurchlaufkonto ausgeglichen ist.</p>
<div id="fa3_bs_lohn_info" class="hl" style="margin-bottom:12px"></div>
<div id="fa3_bs_lohn"></div>
<div style="margin:12px 0;display:flex;gap:8px;flex-wrap:wrap">
<button class="bp1" onclick="fa3CheckBS(5)">Korrigieren</button>
<button onclick="fa3ShowSol(5)" id="fa3_bs_sol5btn" style="display:none">Lösung anzeigen</button>
<button onclick="fa3ResetBS(5)" style="font-size:12px">Zurücksetzen</button>
</div>
<div id="fa3_bs_res5" style="margin-top:8px"></div>
</div>

</div>

<!-- ÜBUNG 6: Lohnverbuchung (wie PDF-Übungen) -->
<div id="fa3_ueb6" style="display:none">
<button onclick="fa3ShowUeb(0)" style="margin-bottom:16px;font-size:12px">← Zurück zur Auswahl</button>
<h2>Lohnverbuchung — Grundprinzip & Hauptbuchkonten</h2>
<p class="sub">Löhne über das Lohndurchlaufkonto verbuchen</p>

<div id="fa3_lv_aufgabe" class="hlbl" style="margin-bottom:12px"></div>
<div id="fa3_lv_konten" style="margin-bottom:12px"></div>
<div id="fa3_lv_info" class="hl" style="margin-bottom:16px"></div>

<div style="margin:12px 0"><button class="bp1" onclick="fa3GenLV()">Neue Aufgabe generieren</button></div>

<!-- Teil 1: Buchungssätze -->
<div class="c" style="padding:16px 20px;margin-bottom:20px">
<h3 style="margin-bottom:4px;color:var(--ac)">1. Buchungssätze erstellen</h3>
<p style="font-size:13px;color:var(--tx2);margin-bottom:12px">Verbuchen Sie die Geschäftsfälle über das Lohndurchlaufkonto.</p>
<div id="fa3_lv_journal"></div>
<div style="margin:12px 0;display:flex;gap:8px;flex-wrap:wrap">
<button class="bp1" onclick="fa3CheckLV(1)">Korrigieren</button>
<button onclick="fa3ShowLVSol(1)" id="fa3_lv_sol1btn" style="display:none">Lösung anzeigen</button>
<button onclick="fa3ResetLV(1)" style="font-size:12px">Zurücksetzen</button>
</div>
<div id="fa3_lv_res1" style="margin-top:8px"></div>
</div>

<!-- Teil 2: Hauptbuchkonten -->
<div class="c" style="padding:16px 20px;margin-bottom:20px">
<h3 style="margin-bottom:4px;color:var(--g)">2. Hauptbuchkonten führen</h3>
<p style="font-size:13px;color:var(--tx2);margin-bottom:12px">Tragen Sie die Buchungen in die Hauptbuchkonten ein und berechnen Sie die Salden.</p>
<div id="fa3_lv_hbk"></div>
<div style="margin:12px 0;display:flex;gap:8px;flex-wrap:wrap">
<button class="bp1" onclick="fa3CheckLV(2)">Korrigieren</button>
<button onclick="fa3ShowLVSol(2)" id="fa3_lv_sol2btn" style="display:none">Lösung anzeigen</button>
<button onclick="fa3ResetLV(2)" style="font-size:12px">Zurücksetzen</button>
</div>
<div id="fa3_lv_res2" style="margin-top:8px"></div>
</div>

<!-- Teil 3: Verständnisfragen -->
<div class="c" style="padding:16px 20px;margin-bottom:20px">
<h3 style="margin-bottom:4px;color:var(--pr)">3. Verständnisfragen</h3>
<div id="fa3_lv_fragen"></div>
<div style="margin:12px 0;display:flex;gap:8px;flex-wrap:wrap">
<button class="bp1" onclick="fa3CheckLV(3)">Korrigieren</button>
<button onclick="fa3ShowLVSol(3)" id="fa3_lv_sol3btn" style="display:none">Lösung anzeigen</button>
</div>
<div id="fa3_lv_res3" style="margin-top:8px"></div>
</div>

</div>

</div>

<!-- ===================== KONTENPLAN SHL ===================== -->
<div class="sec" id="fa3_kplan"><h1>Kontenplan SHL</h1><p class="sub">Schweizer Kontenrahmen für die Hotellerie und Gastronomie (SKHG)</p>
<div class="hl">Der Kontenplan ist die Grundlage jeder Buchhaltung. Hier findest du alle relevanten Konten des SHL-Kontenplans, gegliedert nach Kontenklassen mit Erklärungen.</div>

<div style="display:flex;gap:8px;margin:12px 0 4px">
<button style="font-size:11px;padding:4px 10px" onclick="this.parentElement.nextElementSibling.querySelectorAll('.tl-item').forEach(i=>i.classList.add('open'))">Alle aufklappen</button>
<button style="font-size:11px;padding:4px 10px" onclick="this.parentElement.nextElementSibling.querySelectorAll('.tl-item').forEach(i=>i.classList.remove('open'))">Alle schliessen</button>
</div>
<div class="tl">

<div class="tl-item"><div class="tl-num tl-num-b">1</div>
<div class="tl-head" onclick="this.parentElement.classList.toggle('open')">
<div><div class="tl-title">Klasse 1 — Aktiven</div>
<div class="tl-merksatz">«Vermögen des Unternehmens — von flüssig bis fest»</div></div>
<div class="tl-arrow">&#9654;</div></div>
<div class="tl-detail">
<div class="tl-body"><strong>Umlaufvermögen (10–13)</strong> — innerhalb 1 Jahr verfügbar<br><strong>Anlagevermögen (14–18)</strong> — langfristig genutzt</div>
<div class="tl-sub">
<div class="c cbl"><div class="ct2">100 Flüssige Mittel</div><div class="cd">10000 Kasse · 10010 Stockgelder · 10020 Durchlaufkonto Tageseinnahmen · 10100 Postkonto · 10200 Banken aktiv<br><em>→ Das sofort verfügbare Geld</em></div></div>
<div class="c cbl"><div class="ct2">105 Kurzfristige Geldanlagen</div><div class="cd">10510 Wertschriften, leicht realisierbar<br><em>→ Schnell zu Geld machbare Anlagen</em></div></div>
<div class="c ca"><div class="ct2">110/114 Forderungen</div><div class="cd">11000 Forderungen aus L. und L. · 11060 Delkredere (Wertberichtigung)<br>11400 Kfr. Forderungen Personal (Lohnvorschüsse)<br>11410 AHV-Ausgleichskasse Aktiv · 11420 PK/BVG Aktiv<br>11460 Vorsteuer Waren · 11470 Vorsteuer Investitionen<br><em>→ Geld das uns jemand schuldet (Debitoren, Vorsteuer, Vorschüsse)</em></div></div>
<div class="c ca"><div class="ct2">120 Warenvorräte</div><div class="cd">12000 Warenvorräte Sammelkonto · 12010 Vorräte Keller · 12020 Vorräte Küche<br>12050 Vorräte Betriebsmaterial · 12090 Wertberichtigung Vorräte<br><em>→ Lager: Getränke, Lebensmittel, Material</em></div></div>
<div class="c ca"><div class="ct2">130 Aktive Rechnungsabgrenzung</div><div class="cd">13000 ARA · 13020 ARA für KER<br><em>→ Vorausbezahlte Aufwände / noch nicht erhaltene Erträge</em></div></div>
<div class="c cg"><div class="ct2">140 Sachanlagen</div><div class="cd">14000 Immobilien · 14100 Installationen · 14200 Mobilien<br>14300 Maschinen/Apparate · 14350 EDV-Anlagen · 14400 Kleininventar · 14500 Fahrzeuge<br><em>→ Langfristige Güter die genutzt und abgeschrieben werden</em></div></div>
<div class="c cg"><div class="ct2">150–180 Finanz-/Immaterielles AV</div><div class="cd">15000 Beteiligungen · 15020 Darlehen aktiv lfr. · 17000 Immaterielle Anlagen · 17030 Goodwill<br><em>→ Nicht-physisches Vermögen, langfristige Forderungen</em></div></div>
</div>
<div class="merksatz">Merke: Aktivkonten nehmen im Soll zu. Je flüssiger das Konto, desto weiter oben in der Bilanz.</div>
</div></div>

<div class="tl-item"><div class="tl-num tl-num-g">2</div>
<div class="tl-head" onclick="this.parentElement.classList.toggle('open')">
<div><div class="tl-title">Klasse 2 — Passiven</div>
<div class="tl-merksatz">«Woher kommt das Geld? Schulden und Eigenkapital»</div></div>
<div class="tl-arrow">&#9654;</div></div>
<div class="tl-detail">
<div class="tl-body"><strong>Kurzfristiges FK (20–23)</strong> — innerhalb 1 Jahr fällig<br><strong>Langfristiges FK (24–26)</strong> — nach 1 Jahr fällig<br><strong>Eigenkapital (28)</strong> — gehört den Eigentümern</div>
<div class="tl-sub">
<div class="c cr"><div class="ct2">200 Verbindlichkeiten aus L. und L.</div><div class="cd">20000 VLL Sammelkonto (Kreditoren)<br><em>→ Was wir Lieferanten schulden</em></div></div>
<div class="c cr"><div class="ct2">220 Übrige kfr. Verbindlichkeiten</div><div class="cd">22010 Lohndurchlaufkonto · 22020 AHV-Ausgleichskasse (KK SozVers)<br>22030 Pensionskasse · 22040 Quellensteuer · 22055 L-GAV<br>22060 Direkte Steuern · 22061 Verrechnungssteuer · 22070 Anzahlungen Kunden<br>22080 MWST auf Umsatz<br><em>→ Personal, Sozialversicherungen, Steuern, MWST</em></div></div>
<div class="c cr"><div class="ct2">230 Passive Rechnungsabgrenzung</div><div class="cd">23000 PRA · 23700 Zeitguthaben Mitarbeitende<br><em>→ Noch zu bezahlende Aufwände / voraus erhaltene Erträge</em></div></div>
<div class="c cm"><div class="ct2">240–260 Langfristiges FK</div><div class="cd">24000 Hypotheken · 24060 Darlehen passiv lfr. · 24030 Leasing lfr.<br>26000 Rückstellungen · 26030/26040 Rückstellungen Personal<br><em>→ Langfristige Schulden und Rückstellungen</em></div></div>
<div class="c cp"><div class="ct2">280 Eigenkapital</div><div class="cd">28000 EK Einzelfirma · 28020 Aktienkapital · 28050 Stammkapital GmbH<br>28100 Gesetzliche Kapitalreserve · 28160 Gesetzliche Gewinnreserve<br>28170 Freiwillige Gewinnreserve · 28200 Gewinn-/Verlustvortrag · 28280 Unternehmensergebnis<br><em>→ Das Kapital der Eigentümer</em></div></div>
</div>
<div class="merksatz">Merke: Passivkonten nehmen im Haben zu. Die Passivseite zeigt die Finanzierung: Wessen Geld steckt im Unternehmen?</div>
</div></div>

<div class="tl-item"><div class="tl-num tl-num-a">3</div>
<div class="tl-head" onclick="this.parentElement.classList.toggle('open')">
<div><div class="tl-title">Klasse 3 — Betriebsertrag</div>
<div class="tl-merksatz">«Was verdienen wir? Umsätze aus Restaurant, Küche, Beherbergung»</div></div>
<div class="tl-arrow">&#9654;</div></div>
<div class="tl-detail">
<div class="tl-sub">
<div class="c cg"><div class="ct2">30 Ertrag Restauration</div><div class="cd">31010 Keller Ertrag (Getränke) · 32010 Küche Ertrag (Food)<br><em>→ Umsatz aus dem Restaurant (F&B Revenue)</em></div></div>
<div class="c cg"><div class="ct2">34 Ertrag Beherbergung</div><div class="cd">34000 Beherbergung Ertrag (Zimmerumsatz)<br><em>→ Revenue from Rooms</em></div></div>
<div class="c cg"><div class="ct2">35 Ertrag Nebenleistungen</div><div class="cd">35013 Diverser Hotelertrag · 35071 Personalverpflegung Ertrag<br>35081 Übrige Dienstleistungen · 35101 Wellness · 35111 Seminar/Bankett<br>35301 Personalunterkunft Ertrag<br><em>→ Alles ausser F&B und Zimmer</em></div></div>
</div>
<div class="merksatz">Merke: Ertragskonten nehmen im Haben zu. Die Klasse 3 bildet die erste Zeile der Erfolgsrechnung: den Nettoerlös.</div>
</div></div>

<div class="tl-item"><div class="tl-num tl-num-r">4</div>
<div class="tl-head" onclick="this.parentElement.classList.toggle('open')">
<div><div class="tl-title">Klasse 4 — Direkter Betriebsaufwand</div>
<div class="tl-merksatz">«Was kostet die Ware? Einkauf, Personal direkt, Material → GOI»</div></div>
<div class="tl-arrow">&#9654;</div></div>
<div class="tl-detail">
<div class="tl-sub">
<div class="c cr"><div class="ct2">40 Direkter Warenaufwand</div><div class="cd">41010 Keller Warenaufwand · 42010 Küche Warenaufwand<br>45071 Personalverpflegung Warenaufwand<br><em>→ Was die verkaufte Ware im Einkauf kostet</em></div></div>
<div class="c cr"><div class="ct2">46 Direkter Personalaufwand</div><div class="cd">46110 Gehälter Restauration · 46120 Sozialleistungen Restauration<br>46410 Gehälter Beherbergung · 46531 Gehälter Nebenleistungen<br><em>→ Personal das direkt an der Leistung arbeitet (Service, Küche, Rezeption)</em></div></div>
<div class="c cr"><div class="ct2">47–49 Direkter Betriebsaufwand</div><div class="cd">47010 Betriebsmaterial Restauration · 48000 Beherbergung dir. Aufwand<br>49052 Fahrzeugaufwand · 49055 Privatanteil Fahrzeug<br><em>→ Material und Aufwand direkt für die Leistungserstellung</em></div></div>
</div>
<div class="merksatz">Merke: Ertrag (KK 3) minus direkter Aufwand (KK 4) = GOI (Gross Operating Income). Das ist die Kennzahl für Bereichsleiter!</div>
</div></div>

<div class="tl-item"><div class="tl-num tl-num-p">5</div>
<div class="tl-head" onclick="this.parentElement.classList.toggle('open')">
<div><div class="tl-title">Klasse 5 — Personalaufwand (Verwaltung)</div>
<div class="tl-merksatz">«Gehälter + Soziallasten + Übriges — der grösste Kostenblock»</div></div>
<div class="tl-arrow">&#9654;</div></div>
<div class="tl-detail">
<div class="tl-sub">
<div class="c cp"><div class="ct2">510 Gehälter</div><div class="cd">51010 Gehälter Sammelkonto<br><em>→ Bruttolöhne der Verwaltung/übergreifend (nicht direkt zugeordnet)</em></div></div>
<div class="c cp"><div class="ct2">520 Sozialaufwand</div><div class="cd">52010 Soziallasten Sammelkonto<br>52020 AHV/FAK/ALV · 52030 Pensionsversicherungen<br>52040 Unfall-/Krankenvers. · 52050 Übrige Soziallasten<br><em>→ Nur Arbeitgeberanteile! Ca. 13–14% auf Bruttolöhne</em></div></div>
<div class="c cp"><div class="ct2">530 Übriger Personalaufwand</div><div class="cd">53010 Übriger PA Sammelkonto<br><em>→ Schulung, Berufskleider, Stelleninserate, Spesen, Personalanlässe</em></div></div>
<div class="c cm"><div class="ct2">590 Umlagen</div><div class="cd">59010 Umlagen Gehälter · 59020 Umlagen Sozialleistungen<br><em>→ Verteilung auf Kostenstellen (nur in BeBu relevant)</em></div></div>
</div>
<div class="merksatz">Merke: KK 5 plus KK 46 (dir. PA aus KK 4) = Gesamtpersonalaufwand. Im Gastgewerbe ca. 51% vom Umsatz!</div>
</div></div>

<div class="tl-item"><div class="tl-num tl-num-b">6</div>
<div class="tl-head" onclick="this.parentElement.classList.toggle('open')">
<div><div class="tl-title">Klasse 6 — Übriger Betriebsaufwand</div>
<div class="tl-merksatz">«Verwaltung, Marketing, Unterhalt, Energie, Miete → GOP bis EBITDA»</div></div>
<div class="tl-arrow">&#9654;</div></div>
<div class="tl-detail">
<div class="tl-sub">
<div class="c cbl"><div class="ct2">61 Verwaltung</div><div class="cd">61110 Gehälter Verwaltung · 61530 Verwaltungsaufwand · 61550 Kreditkartenorg.<br><em>→ Büro, Beratung, Organe</em></div></div>
<div class="c cbl"><div class="ct2">62 Marketing</div><div class="cd">62500 Werbung/Verkaufsförderung · 62540 Repräsentation/PR<br><em>→ Alles was Gäste bringt</em></div></div>
<div class="c cbl"><div class="ct2">63 Unterhalt</div><div class="cd">63500 Unterhalt Immobilien · 63510 Installationen · 63532 Maschinen/Apparate · 63550 Fahrzeuge<br><em>→ Reparaturen und Instandhaltung</em></div></div>
<div class="c cbl"><div class="ct2">64–66 Energie, Übriges, Liegenschaft</div><div class="cd">64020 Elektrizität · 64030 Wasser · 64040 Heizung · 65010 Debitorenverluste<br>66000 Sachversicherung · 66050 Liegenschaftsaufwand<br><em>→ GOP minus KK 6 = EBITDA (ohne Miete/Abschreibungen)</em></div></div>
<div class="c cbl"><div class="ct2">67–69 Miete, Management, Abschreibungen</div><div class="cd">67010 Mietzinsaufwand · 68000 Managementhonorare<br>69200–69310 Abschreibungen (Immobilien bis Goodwill)<br><em>→ EBITDA minus Miete = EBITDA · minus Abschreibungen = EBIT</em></div></div>
</div>
<div class="merksatz">Merke: GOI − KK 5/6 (ohne Miete/Abschr.) = GOP. GOP − Miete/Mgmt = EBITDA. EBITDA − Abschreibungen = EBIT.</div>
</div></div>

<div class="tl-item"><div class="tl-num tl-num-g">7</div>
<div class="tl-head" onclick="this.parentElement.classList.toggle('open')">
<div><div class="tl-title">Klasse 7 — Finanzerfolg, a.o. Erfolg & Steuern</div>
<div class="tl-merksatz">«Zinsen, betriebsfremdes, ausserordentliches → zum Unternehmensergebnis»</div></div>
<div class="tl-arrow">&#9654;</div></div>
<div class="tl-detail">
<div class="tl-sub">
<div class="c cg"><div class="ct2">70 Finanzerfolg</div><div class="cd">71050 Zinsertrag · 72050 Zinsaufwand<br><em>→ EBIT ± Finanzerfolg = Betriebserfolg vor Nebeneffekten</em></div></div>
<div class="c cg"><div class="ct2">75–78 Betriebsfremd & a.o.</div><div class="cd">75010 Betriebsfremder Ertrag · 76010 Betriebsfremder Aufwand<br>77010 A.o. Ertrag · 78010 A.o. Aufwand<br><em>→ Was nicht zum normalen Betrieb gehört (z.B. Härtefallgelder)</em></div></div>
<div class="c cg"><div class="ct2">79 Steuern</div><div class="cd">79000 Ertragssteuern<br><em>→ EBT minus Steuern = Unternehmensergebnis (Reingewinn/-verlust)</em></div></div>
</div>
<div class="merksatz">Merke: Die Klasse 7 enthält alles was «neben dem Betrieb» anfällt. EBT − Steuern = das finale Unternehmensergebnis.</div>
</div></div>

</div>
</div>

<!-- ===================== ZUSAMMENFASSUNG / MINDMAPS ===================== -->
<div class="sec" id="fa3_mind"><h1>Zusammenfassung</h1><p class="sub">Visuelle Übersichten</p>

<h2>Financial Accounting 3 — Gesamtübersicht</h2>
<div class="mm"><div class="mm-center"><div class="mm-hub" style="border-color:var(--ac);color:var(--ac);background:var(--al)">Financial<br>Accounting 3</div></div>
<div class="mm-branches">
<div class="mm-branch" style="background:var(--al);border:1.5px solid var(--ac)"><h3 style="color:var(--ac)">Grundlagen</h3><ul style="color:var(--ac)"><li>Bilanz & ER</li><li>4 Kontenarten</li><li>Buchungssätze</li><li>Kontenrahmen KMU/SKHG</li><li>GoB & GoR</li></ul></div>
<div class="mm-branch" style="background:var(--gl);border:1.5px solid var(--g)"><h3 style="color:var(--g)">Erfolgsrechnung</h3><ul style="color:var(--g)"><li>Dreistufig</li><li>Siebenstufig (SKHG)</li><li>GOI & GOP</li><li>EBITDA & EBIT</li><li>Unternehmensergebnis</li></ul></div>
<div class="mm-branch" style="background:rgba(175,82,222,.06);border:1.5px solid var(--pr)"><h3 style="color:var(--pr)">Personal & MWST</h3><ul style="color:var(--pr)"><li>3-Säulen-Prinzip</li><li>Brutto/Nettolohn</li><li>MWST-Sätze (8.1/2.6/3.8%)</li><li>Nettomethode</li><li>Quartalsabrechnung</li></ul></div>
<div class="mm-branch" style="background:rgba(255,149,0,.06);border:1.5px solid var(--am)"><h3 style="color:var(--am)">Abschlüsse</h3><ul style="color:var(--am)"><li>Monats-/Quartals-/Jahresabschluss</li><li>ARA & PRA</li><li>Kennzahlen (Magisches Dreieck)</li><li>Warenrenditen</li><li>Gewinnverwendung</li></ul></div>
</div></div>

<h2 style="margin-top:32px">Siebenstufige ER — Schema</h2>
<div class="mm"><div class="mm-center"><div class="mm-hub" style="border-color:var(--g);color:var(--g);background:var(--gl)">7-stufige ER</div></div>
<div class="mm-branches">
<div class="mm-branch" style="background:var(--gl);border:1.5px solid var(--g)"><h3 style="color:var(--g)">Stufe 1-2</h3><ul style="color:var(--g)"><li>1. GOI = Umsatz − WA − dir. PA</li><li>2. GOP = GOI − übr. BA</li></ul></div>
<div class="mm-branch" style="background:rgba(0,122,255,.06);border:1.5px solid #007AFF"><h3 style="color:#007AFF">Stufe 3-4</h3><ul style="color:#007AFF"><li>3. EBITDA = GOP − Miete/Mgmt</li><li>4. EBIT = EBITDA − Abschreibungen</li></ul></div>
<div class="mm-branch" style="background:rgba(175,82,222,.06);border:1.5px solid var(--pr)"><h3 style="color:var(--pr)">Stufe 5-7</h3><ul style="color:var(--pr)"><li>5. Betriebserf. = EBIT ± Zinsen</li><li>6. EBT = ± a.o. Erfolg</li><li>7. UE = EBT − Steuern</li></ul></div>
</div></div>

</div>

<!-- ===================== KARTEIKARTEN ===================== -->
<div class="sec" id="fa3_kart"><h1>Karteikarten</h1><p class="sub"><span id="fa3_fcCount">0</span> Karten — klicke zum Umdrehen</p>
<div class="fcc" id="fa3_fcc"></div>
<div class="fd"><div class="fc" id="fa3_fc" onclick="this.classList.toggle('fl')"><div class="ff ffr"><div class="fq" id="fa3_fcq"></div><div class="fh">Klicke zum Umdrehen</div></div><div class="ff ffb"><div class="fa" id="fa3_fca"></div></div></div></div>
<div class="fb"><button onclick="fcPrev()">Zurück</button><button onclick="fcShuffle()">Mischen</button><button class="bp1" onclick="fcNext()">Nächste</button></div>
<div style="text-align:center;margin-top:10px;font-size:11px;color:var(--tx3)" id="fa3_fcPool"></div>
<div id="fa3_fcList" style="display:none;margin-top:16px"></div>
</div>

<!-- ===================== QUIZ ===================== -->
<div class="sec" id="fa3_quiz"><h1>Quiz</h1><p class="sub">Alle Fragen werden wiederholt bis du sie kannst</p>
<div id="fqStats" style="margin-bottom:20px">
<div style="display:flex;gap:8px;margin-bottom:14px;flex-wrap:wrap">
<div class="qsc" style="flex:1;min-width:70px"><div class="qsn" id="fqTotR" style="color:var(--g)">0</div><div class="qsl">Total richtig</div></div>
<div class="qsc" style="flex:1;min-width:70px"><div class="qsn" id="fqTotW" style="color:var(--r)">0</div><div class="qsl">Total falsch</div></div>
<div class="qsc" style="flex:1;min-width:70px"><div class="qsn" id="fqTotP" style="color:var(--ac)">0%</div><div class="qsl">Erfolgsquote</div></div>
</div>
<div style="font-size:12px;color:var(--tx3);margin-bottom:6px">Lernerfolg</div>
<div style="display:flex;gap:4px;margin-bottom:4px;align-items:center"><div style="width:10px;height:10px;border-radius:50%;background:var(--g);flex-shrink:0"></div><div style="font-size:12px;color:var(--tx2);width:70px">Sicher</div><div style="flex:1;height:8px;background:var(--s2);border-radius:4px;overflow:hidden"><div id="fqBarG" style="height:100%;background:var(--g);border-radius:4px;transition:width .5s;width:0%"></div></div><div style="font-size:12px;color:var(--tx2);width:30px;text-align:right" id="fqBarGn">0</div></div>
<div style="display:flex;gap:4px;margin-bottom:4px;align-items:center"><div style="width:10px;height:10px;border-radius:50%;background:var(--am);flex-shrink:0"></div><div style="font-size:12px;color:var(--tx2);width:70px">Wackelig</div><div style="flex:1;height:8px;background:var(--s2);border-radius:4px;overflow:hidden"><div id="fqBarO" style="height:100%;background:var(--am);border-radius:4px;transition:width .5s;width:0%"></div></div><div style="font-size:12px;color:var(--tx2);width:30px;text-align:right" id="fqBarOn">0</div></div>
<div style="display:flex;gap:4px;margin-bottom:4px;align-items:center"><div style="width:10px;height:10px;border-radius:50%;background:var(--r);flex-shrink:0"></div><div style="font-size:12px;color:var(--tx2);width:70px">Unsicher</div><div style="flex:1;height:8px;background:var(--s2);border-radius:4px;overflow:hidden"><div id="fqBarR" style="height:100%;background:var(--r);border-radius:4px;transition:width .5s;width:0%"></div></div><div style="font-size:12px;color:var(--tx2);width:30px;text-align:right" id="fqBarRn">0</div></div>
<div style="display:flex;gap:4px;align-items:center"><div style="width:10px;height:10px;border-radius:50%;background:var(--tx3);flex-shrink:0"></div><div style="font-size:12px;color:var(--tx2);width:70px">Noch offen</div><div style="flex:1;height:8px;background:var(--s2);border-radius:4px;overflow:hidden"><div id="fqBarX" style="height:100%;background:var(--tx3);border-radius:4px;transition:width .5s;width:100%"></div></div><div style="font-size:12px;color:var(--tx2);width:30px;text-align:right" id="fqBarXn">0</div></div>
</div>
<div class="pb"><div class="pf" id="fqP"></div></div><div class="pt" id="fqPT">Frage 1</div>
<div id="fqC"></div>
<div style="text-align:center;margin-top:14px">
<button class="bp1" id="fqN" onclick="fqNx()" style="display:none">Nächste Frage</button>
<button class="bp1" id="fqRS" onclick="fqSt()" style="display:none">Weiter üben</button>
<button id="fqReset" onclick="fqReset()" style="display:none;margin-left:8px">Fortschritt zurücksetzen</button>
</div>
</div>

<!-- ===================== GLOSSAR ===================== -->
<div class="sec" id="fa3_glossar"><h1>Glossar</h1><p class="sub">Begriffe, Formeln & Abkürzungen</p>

<h2>Wichtige Abkürzungen</h2>
<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:8px">
<div class="c" style="padding:12px 16px"><strong style="color:var(--ac)">GoB</strong> <span style="color:var(--tx2)">— Grundsätze ordnungsmässiger Buchführung (OR 957a)</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--ac)">GoR</strong> <span style="color:var(--tx2)">— Grundsätze ordnungsmässiger Rechnungslegung (OR 958c)</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--ac)">GOI</strong> <span style="color:var(--tx2)">— Gross Operating Income (Brutto-Betriebserfolg)</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--ac)">GOP</strong> <span style="color:var(--tx2)">— Gross Operating Profit (Brutto-Betriebsgewinn)</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--ac)">EBITDA</strong> <span style="color:var(--tx2)">— Earnings before Interest, Taxes, Depreciation & Amortization</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--ac)">EBIT</strong> <span style="color:var(--tx2)">— Earnings before Interest and Taxes</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--ac)">EBT</strong> <span style="color:var(--tx2)">— Earnings before Taxes</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--ac)">SKHG</strong> <span style="color:var(--tx2)">— Schweizer Kontenrahmen Hotellerie & Gastronomie</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--ac)">KMU</strong> <span style="color:var(--tx2)">— Kleine und mittlere Unternehmen</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--ac)">MWST</strong> <span style="color:var(--tx2)">— Mehrwertsteuer</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--ac)">ESTV</strong> <span style="color:var(--tx2)">— Eidgenössische Steuerverwaltung</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--ac)">AHV</strong> <span style="color:var(--tx2)">— Alters- und Hinterlassenenversicherung (1. Säule)</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--ac)">BVG</strong> <span style="color:var(--tx2)">— Berufliche Vorsorge / Pensionskasse (2. Säule)</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--ac)">UVG</strong> <span style="color:var(--tx2)">— Unfallversicherungsgesetz (BU + NBU)</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--ac)">EO</strong> <span style="color:var(--tx2)">— Erwerbsersatzordnung (Militär, Mutterschaft)</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--ac)">FLL</strong> <span style="color:var(--tx2)">— Forderungen aus Lieferungen und Leistungen</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--ac)">VLL</strong> <span style="color:var(--tx2)">— Verbindlichkeiten aus Lieferungen und Leistungen</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--ac)">ARA</strong> <span style="color:var(--tx2)">— Aktive Rechnungsabgrenzung</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--ac)">PRA</strong> <span style="color:var(--tx2)">— Passive Rechnungsabgrenzung</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--ac)">REVPAR</strong> <span style="color:var(--tx2)">— Revenue per Available Room</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--ac)">ERP</strong> <span style="color:var(--tx2)">— Enterprise Resource Planning</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--ac)">FAK</strong> <span style="color:var(--tx2)">— Familienausgleichskasse (Kinderzulagen)</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--ac)">ALV</strong> <span style="color:var(--tx2)">— Arbeitslosenversicherung</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--ac)">KTG</strong> <span style="color:var(--tx2)">— Krankentaggeldversicherung (Pflicht gem. L-GAV)</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--ac)">L-GAV</strong> <span style="color:var(--tx2)">— Landes-Gesamtarbeitsvertrag Gastgewerbe</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--ac)">BU/NBU</strong> <span style="color:var(--tx2)">— Berufsunfall / Nichtberufsunfall</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--ac)">KIZU</strong> <span style="color:var(--tx2)">— Kinderzulagen (nicht AHV-pflichtig)</span></div>
</div>

<h2 style="margin-top:24px">Wichtige Formeln</h2>
<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:8px">
<div class="c" style="padding:12px 16px"><strong style="color:var(--g)">Eigenkapital</strong> <span style="color:var(--tx2)">= Aktiven − Fremdkapital</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--g)">Warenaufwand</strong> <span style="color:var(--tx2)">= Einkauf + Abn. − Zun.</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--g)">Eigenfinanzierungsgrad</strong> <span style="color:var(--tx2)">= EK/GK×100 (Richtwert: 25–50%)</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--g)">Liquiditätsgrad II</strong> <span style="color:var(--tx2)">= (FM+Ford.)/kfr.FK×100 (Richtwert: ~100%)</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--g)">Anlagedeckung II</strong> <span style="color:var(--tx2)">= (EK+lfr.FK)/AV×100 (Richtwert: >100%)</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--g)">Gesetzl. Reserve</strong> <span style="color:var(--tx2)">= 5% vom Jahresgewinn, max. 50% AK</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--g)">Bruttodividende</strong> <span style="color:var(--tx2)">= 65% Netto + 35% Verrechnungssteuer</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--g)">MWST-Schuld</strong> <span style="color:var(--tx2)">= Umsatzsteuer − Vorsteuer</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--g)">Warenrendite</strong> <span style="color:var(--tx2)">= Bruttoergebnis / Warenertrag × 100</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--g)">Warenaufwand in %</strong> <span style="color:var(--tx2)">= Warenaufwand / Warenertrag × 100 (+ Warenrendite = 100%)</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--g)">Nettolohn</strong> <span style="color:var(--tx2)">= Bruttolohn − AN-Beiträge Sozialversicherungen</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--g)">Personalaufwand total</strong> <span style="color:var(--tx2)">= Bruttolohn + AG-Beiträge (~13-14%) + Übriger PA</span></div>
<div class="c" style="padding:12px 16px"><strong style="color:var(--g)">AG-Beiträge Budget</strong> <span style="color:var(--tx2)">= ca. 13–14% auf Bruttolöhne (Konto 52010)</span></div>
</div>

<h2 style="margin-top:24px">MWST-Steuersätze</h2>
<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:8px">
<div class="c cr" style="padding:12px 16px"><strong>8.1%</strong> Normalsatz</div>
<div class="c cg" style="padding:12px 16px"><strong>2.6%</strong> Reduzierter Satz</div>
<div class="c cbl" style="padding:12px 16px"><strong>3.8%</strong> Sondersatz Beherbergung</div>
</div>

</div>

`;

// ==========================================
// 3. KARTEIKARTEN
// ==========================================
const FA3_CARDS = [
  ['Was zeigt die Bilanz?', 'Die Bilanz zeigt Aktiven (Vermögen) und Passiven (Kapital) zu einem bestimmten Zeitpunkt (Stichtag).'],
  ['Wie wird das Eigenkapital berechnet?', 'Eigenkapital = Aktiven (Vermögen) − Fremdkapital'],
  ['Was zeigt die Erfolgsrechnung?', 'Die ER zeigt Aufwand und Ertrag für einen bestimmten Zeitraum. Ertrag > Aufwand = Gewinn, umgekehrt = Verlust.'],
  ['Wie funktioniert ein Aktivkonto?', 'Anfangsbestand und Zunahme im Soll (+), Abnahme im Haben (−). Saldo steht auf der Haben-Seite.'],
  ['Wie funktioniert ein Passivkonto?', 'Anfangsbestand und Zunahme im Haben (+), Abnahme im Soll (−). Saldo steht auf der Soll-Seite.'],
  ['Was sind die 4 Schritte zur Bildung eines Buchungssatzes?', '1. Betroffene Konten bestimmen, 2. Kontenart bestimmen, 3. Zu-/Abnahme + Soll/Haben festlegen, 4. Buchungssatz bilden (links = Soll, rechts = Haben).'],
  ['Wann ist ein Geschäftsfall erfolgswirksam?', 'Wenn er aus einem Bilanzkonto und einem Erfolgskonto besteht. Zwei Bilanzkonten oder zwei Erfolgskonten = nicht erfolgswirksam.'],
  ['Was ist der Unterschied zwischen Kontenrahmen und Kontenplan?', 'Kontenrahmen = alle möglichen Konten einer Branche. Kontenplan = die vom Unternehmen tatsächlich gewählten Konten.'],
  ['Was sind die GoB?', 'Grundsätze ordnungsmässiger Buchführung (OR 957a): Vollständigkeit & Wahrheit, Belegnachweis, Klarheit & Nachprüfbarkeit.'],
  ['Nenne die 7 GoR-Grundsätze.', 'Klarheit, Vollständigkeit, Wahrheit, Wesentlichkeit, Vorsicht, Stetigkeit, Verrechnungsverbot.'],
  ['Was erlaubt das Vorsichtsprinzip?', 'Bildung stiller Reserven (Unterbewertung Aktiven / Überbewertung Verbindlichkeiten). Aber: Pro-memoria-Franken beachten!'],
  ['Was bedeutet «2 in 2 — 20/40/250»?', 'Formel für grössere Gesellschaften: 2 von 3 Kriterien in 2 aufeinanderfolgenden Jahren erfüllt: Bilanzsumme ≥ 20 Mio., Umsatz ≥ 40 Mio., > 250 Vollzeitstellen.'],
  ['OR vs. Swiss GAAP FER: Hauptunterschied?', 'OR = Gläubigerschutz, Vorsichtsprinzip, stille Reserven erlaubt. Swiss GAAP FER = Anlegerschutz, True and Fair View, keine stillen Reserven.'],
  ['Was ist der GOI?', 'Gross Operating Income = Umsatz − Warenaufwand − direkter Personalaufwand. Wichtig für Bereichsleiter. Richtwert: ca. 39.1% (4* Ferien).'],
  ['Was ist der GOP?', 'Gross Operating Profit = GOI − übriger Betriebsaufwand. Zeigt operative Leistungsfähigkeit. Richtwert: ca. 15.9% (4* Ferien).'],
  ['Wofür steht EBITDA?', 'Earnings Before Interest, Taxes, Depreciation and Amortization = Erfolg vor Zinsen, Steuern und Abschreibungen.'],
  ['Warum ist EBITDA eine beliebte Kennzahl?', 'Klammert Abschreibungen (manipulierbar), Zinsen (kapitalstrukturabhängig) und Steuern (standortabhängig) aus → gute Vergleichbarkeit.'],
  ['Wie wird der Warenaufwand berechnet?', 'Warenaufwand = Wareneinkauf + Bestandesabnahme − Bestandeszunahme'],
  ['Was sind die MWST-Sätze in der Schweiz?', '8.1% Normalsatz, 2.6% reduzierter Satz (Nahrungsmittel, Bücher etc.), 3.8% Sondersatz für Beherbergung.'],
  ['Ab wann ist ein Unternehmen MWST-pflichtig?', 'Ab CHF 100\'000 Jahresumsatz aus steuerbaren Leistungen (Vereine: CHF 250\'000).'],
  ['Was ist Vorsteuer? Was ist Umsatzsteuer?', 'Vorsteuer = MWST auf Einkäufen (Guthaben, Aktivkonto 11460/11470). Umsatzsteuer = MWST auf Verkäufen (Schuld, Passivkonto 22080).'],
  ['Was sind die 3 Säulen der Vorsorge?', '1. Säule: Staatlich (AHV/IV/EO) = Existenz. 2. Säule: Beruflich (BVG/UVG) = Lebensstandard. 3. Säule: Privat (3a/3b) = Ergänzung.'],
  ['Bruttolohn vs. Nettolohn?', 'Bruttolohn = vereinbarter Lohn. Nettolohn = Bruttolohn − Arbeitnehmerbeiträge (AHV, IV, BVG, NBU etc.) = wird ausbezahlt.'],
  ['Was ist eine ARA? Buchung Ende Periode?', 'Aktive Rechnungsabgrenzung = vorausbezahlter Aufwand oder noch nicht erhaltener Ertrag. Buchung: ARA / Aufwand- oder Ertragskonto.'],
  ['Was ist eine PRA? Buchung Ende Periode?', 'Passive Rechnungsabgrenzung = noch nicht bezahlter Aufwand oder voraus erhaltener Ertrag. Buchung: Aufwand- oder Ertragskonto / PRA.'],
  ['Was beinhaltet ein Monatsabschluss?', 'Bilanz: Kasse, Bank, FLL, Vorräte. ER bis Stufe GOP. Plus: Lohnverbuchung inkl. Rückstellungen.'],
  ['Was kommt beim Quartalsabschluss dazu?', 'Zusätzlich zum Monat: MWST-Abrechnung, QST-Abrechnung, Abstimmung Sozialversicherungen. ER bis EBITDA.'],
  ['Richtwert Liquiditätsgrad II?', 'Ca. 100% — das bedeutet, die flüssigen Mittel plus Forderungen decken die kurzfristigen Schulden.'],
  ['Richtwert Eigenfinanzierungsgrad?', '25–50%. Zeigt den Anteil des Eigenkapitals am Gesamtkapital.'],
  ['Wie hoch ist die gesetzliche Reservenzuweisung?', '5% des Jahresgewinns (minus Verlustvortrag), bis die Reserve 50% des eingetragenen Aktien-/Stammkapitals erreicht.'],
  ['Was ist der Geldumschlag?', 'Geldumschlag = Lagerdauer + Debitorenfrist − Kreditorenfrist. Zeigt, wie lange das Geld im Betrieb gebunden ist.'],
  ['Was ist REVPAR?', 'Revenue per Available Room = Beherbergungsertrag / (Zimmerzahl × Betriebstage). Richtwert: CHF 154 (4* Ferien).'],
  ['Was darf beim Verrechnungsverbot NICHT verrechnet werden?', 'Warenertrag mit Warenaufwand, Immobilienertrag mit -aufwand, aktive mit passiven RA. ERLAUBT: Forderungen mit Delkredere, Sachanlagen mit kum. Abschreibungen.'],
  ['Was ist ein Kontierungsstempel?', 'Stempel auf dem Beleg mit Eingangsdatum, Buchungsanweisung (Soll-/Haben-Konto, Betrag), Belegnummer und Visum.'],
  ['Was ist der Anhang einer Jahresrechnung?', 'Dritter Bestandteil neben Bilanz und ER. Ergänzt und erläutert (z.B. verpfändete Aktiven, Nettoauflösung stiller Reserven, Beteiligungen).'],
  ['Was ist das Lohndurchlaufkonto (22010)?', 'Hilfskonto zur Verarbeitung der Löhne. Sammelt alle Lohnbestandteile. Muss nach Verbuchung der Lohnzahlung den Saldo 0 haben.'],
  ['Wie wird der Bruttolohn verbucht?', 'Soll: 51010 Gehälter Sammelkonto / Haben: 22010 Lohndurchlaufkonto. Der Bruttolohn belastet die ER als Aufwand.'],
  ['Wie werden AN-Beiträge verbucht?', 'Soll: 22010 Lohndurchlaufkonto / Haben: 22020 KK Sozialversicherungen. Kein Aufwand für die Firma — nur Umbuchung!'],
  ['Wie werden AG-Beiträge verbucht?', 'Soll: 52010 Soziallasten / Haben: 22020 KK Sozialversicherungen. Echter Aufwand! Ca. 13–14% auf Bruttolöhne.'],
  ['Was ist der Unterschied AN-Beiträge vs. AG-Beiträge?', 'AN-Beiträge: Im Bruttolohn enthalten, werden abgezogen = kein zusätzlicher Aufwand. AG-Beiträge: Zusätzlich zum Bruttolohn = echter Sozialversicherungsaufwand auf Konto 52010.'],
  ['Wie hoch sind die AHV/IV/EO-Beiträge?', 'Je 5.30% für AN und AG (paritätisch). Total: 10.60% auf dem Bruttolohn.'],
  ['Was sind Kinderzulagen (KIZU) und wie werden sie verbucht?', 'KIZU sind nicht AHV-pflichtig! Buchung: Soll 22020 KK Sozialversicherungen / Haben 22010 Durchlauf. Sie reduzieren die Schuld an die Ausgleichskasse.'],
  ['Wie wird der Privatanteil Geschäftswagen verbucht?', 'Erhöht den Bruttolohn (AHV-pflichtig!), wird aber vom Nettolohn wieder abgezogen. Buchung: 51010 Gehälter / 49055 Privatanteil FZ-Aufwand. Kein Geldfluss.'],
  ['Wie wird der Verpflegungsabzug verbucht?', 'Soll: 22010 Lohndurchlaufkonto / Haben: 45070 Warenaufwand Personalverpflegung. Reduziert den Warenaufwand.'],
  ['Wie werden effektive Spesen verbucht?', 'Soll: 53010 Übriger Personalaufwand / Haben: 22010 Lohndurchlaufkonto. Spesen sind nicht sozialversicherungspflichtig!'],
  ['Was ist die Warenrendite? Formel?', 'Warenrendite = Bruttoergebnis / Warenertrag × 100. Oder: (Warenertrag − Warenaufwand) / Warenertrag × 100. Zusammen mit Warenaufwand in % = immer 100%.'],
  ['Warum ist «grosse Lieferung = hoher Aufwand» falsch?', 'Eine Warenlieferung erhöht nur den Lagerbestand (Bilanz), nicht den Aufwand. Aufwand entsteht erst durch den tatsächlichen Verbrauch/Verkauf der Ware.'],
  ['Welche Sparte hat die höchste Warenrendite?', 'Kaffee mit ca. 7.7% Warenaufwand = ca. 92.3% Warenrendite. Am tiefsten ist Wein mit ca. 40.3% Warenaufwand.'],
  ['Wie hoch sind die Personalkosten im Gastgewerbe?', 'Ca. 51.1% des Umsatzes (inkl. Unternehmerlohn von 7.7%) — der grösste Kostenfaktor laut Gastroconsult/GastroSuisse 2023.'],
  ['Was sind die 3 Kontengruppen des Personalaufwands?', '510 Gehälter (Bruttolöhne), 520 Sozialaufwand (AG-Beiträge, ca. 13–14%), 530 Übriger Personalaufwand (Schulung, Berufskleider, Spesen).'],
  ['Wie hoch ist der PK-Beitrag gem. L-GAV?', 'Je 7.00% für AN und AG (fix gem. L-GAV). Koordinationsabzug beachten!'],
];

// ==========================================
// 4. ÜBUNGS-LOGIK (als Script im HTML)
// ==========================================

// GoR Fragen + Lösungen
const FA3_GOR = [
  {q:'In der ER wurde Warenertrag (7 Mio.) und Warenaufwand (4 Mio.) nicht separat ausgewiesen, sondern nur die Differenz von 3 Mio. als Bruttogewinn.',a:'verstoss',g:'Verrechnungsverbot',e:'Verstoss gegen das Verrechnungsverbot (OR 958c Abs. 1 Ziff. 7). Aufwand und Ertrag müssen separat ausgewiesen werden.'},
  {q:'Liegenschaften (800k) und Patente (100k) werden unter «Übriges AV» zusammengefasst (900k).',a:'verstoss',g:'Klarheit',e:'Verstoss gegen die Klarheit (OR 958c Abs. 1 Ziff. 1). Sachanlagen und immaterielle Werte müssen separat ausgewiesen werden (OR 959a).'},
  {q:'Sachanlagen wurden bisher linear, neu degressiv abgeschrieben.',a:'verstoss',g:'Stetigkeit',e:'Verstoss gegen die Stetigkeit (OR 958c Abs. 1 Ziff. 6). Wechsel des Abschreibungsverfahrens muss im Anhang offengelegt werden.'},
  {q:'Ausstehende Ferienguthaben (~100k) wurden nicht abgegrenzt, da sie sich «künftig im selben Rahmen bewegen».',a:'verstoss',g:'Vollständigkeit',e:'Verstoss gegen die Vollständigkeit (OR 958c Abs. 1 Ziff. 2). Verbindlichkeiten müssen vollständig aufgeführt werden.'},
  {q:'Ein Gewinn von CHF 300 aus Veräusserung einer Sachanlage wurde mit den Abschreibungen verrechnet.',a:'kein_verstoss',g:'Wesentlichkeit',e:'Kein Verstoss — CHF 300 ist ein unwesentlicher Betrag (Wesentlichkeit, OR 958c Abs. 1 Ziff. 4).'},
  {q:'Vorräte werden unter Einstandswert bilanziert, obwohl keine Wertbeeinträchtigung vorliegt.',a:'kein_verstoss',g:'Vorsicht',e:'Kein Verstoss — das Vorsichtsprinzip erlaubt eine Unterbewertung von Aktiven (OR 958c Abs. 1 Ziff. 5). Stille Reserven sind zulässig.'},
  {q:'Bilanz und ER werden nur auf ganze CHF angegeben (ohne Rappen).',a:'kein_verstoss',g:'Klarheit',e:'Kein Verstoss — das Weglassen von Rappen ist sogar wünschenswert für bessere Übersichtlichkeit.'},
  {q:'Forderungen LL (500k) und Verbindlichkeiten LL (460k) werden verrechnet → nur 40k Ford. LL ausgewiesen.',a:'verstoss',g:'Verrechnungsverbot',e:'Verstoss gegen das Verrechnungsverbot (OR 958c Abs. 1 Ziff. 7). Aktiven und Passiven dürfen nicht verrechnet werden.'},
  {q:'Trotz hängiger Schadenersatzklage (~60k) wird auf Rückstellungen verzichtet.',a:'verstoss',g:'Vollständigkeit',e:'Verstoss gegen die Vollständigkeit (OR 958c Abs. 1 Ziff. 2) und OR 960e Abs. 2 (Rückstellungspflicht bei erwartetem Mittelabfluss).'},
  {q:'Gewinn laut ER ist um 50k höher als Gewinn gemäss Bilanz.',a:'verstoss',g:'Verlässlichkeit',e:'Verstoss gegen die Verlässlichkeit (OR 958c Abs. 1 Ziff. 3). Die Jahresrechnung enthält einen wesentlichen Fehler.'},
];

// ==========================================
// 4. OR ARTIKEL-DATENBANK
// ==========================================
const FA3_ART = {
  'or957': ['Art. 957 OR — Buchführungspflicht', 'Wer verpflichtet ist, sein Unternehmen im Handelsregister einzutragen, ist zur Buchführung und Rechnungslegung verpflichtet.', 'Regelt, wer Bücher führen muss. EU und Pers.ges. unter 500k → nur Milchbüchleinrechnung.', 'https://www.fedlex.admin.ch/eli/cc/27/317_321_377/de#a957'],
  'or957a': ['Art. 957a OR — Grundsätze ordnungsmässiger Buchführung', 'Die Buchführung bildet die Grundlage der Rechnungslegung.', 'GoB: Vollständigkeit, Wahrheit, Belegnachweis, Klarheit, Nachprüfbarkeit. Keine Buchung ohne Beleg!', 'https://www.fedlex.admin.ch/eli/cc/27/317_321_377/de#a957a'],
  'or958': ['Art. 958 OR — Rechnungslegung', 'Die Rechnungslegung soll die wirtschaftliche Lage so darstellen, dass sich Dritte ein zuverlässiges Urteil bilden können.', 'Bilanz + ER + Anhang: jährlich, innert 6 Monaten, unterzeichnet vom VR-Präsident + Buchhalter.', 'https://www.fedlex.admin.ch/eli/cc/27/317_321_377/de#a958'],
  'or958a': ['Art. 958a OR — Fortführungsgrundsatz (Going Concern)', 'Bei der Rechnungslegung ist von der Fortführung des Unternehmens auszugehen.', 'Bilanzposten zum Fortführungswert, nicht zum Veräusserungswert — solange Unternehmen weiterbesteht.', 'https://www.fedlex.admin.ch/eli/cc/27/317_321_377/de#a958a'],
  'or958b': ['Art. 958b OR — Zeitliche und sachliche Abgrenzung', 'Aufwände und Erträge sind zeitlich und sachlich abzugrenzen.', 'Periodengerechte Erfassung. Ausnahme: ≤ 100k Nettoerlöse → Abgrenzung nicht nötig.', 'https://www.fedlex.admin.ch/eli/cc/27/317_321_377/de#a958b'],
  'or958c': ['Art. 958c OR — Grundsätze ordnungsmässiger Rechnungslegung (GoR)', 'Klarheit, Vollständigkeit, Verlässlichkeit, Wesentlichkeit, Vorsicht, Stetigkeit, Verrechnungsverbot.', 'Die 7 GoR — das Herzstück der Rechnungslegung. Prüfungsklassiker!', 'https://www.fedlex.admin.ch/eli/cc/27/317_321_377/de#a958c'],
  'or958d': ['Art. 958d OR — Darstellung und Währung', 'Rechnungslegung in CHF oder wesentlicher Geschäftswährung.', 'Bei Fremdwährung: zusätzlich CHF-Werte angeben. Texte in Landessprache oder Englisch.', 'https://www.fedlex.admin.ch/eli/cc/27/317_321_377/de#a958d'],
  'or958f': ['Art. 958f OR — Aufbewahrungspflicht', 'Geschäftsbücher und Buchungsbelege sind 10 Jahre aufzubewahren.', '10 Jahre Aufbewahrungspflicht — schriftlich und unterzeichnet.', 'https://www.fedlex.admin.ch/eli/cc/27/317_321_377/de#a958f'],
  'or959a': ['Art. 959a OR — Mindestgliederung Bilanz', 'Aktiven nach Liquidität, Passiven nach Fälligkeit.', 'UV + AV | kfr. FK + lfr. FK + EK. Verbindliche Reihenfolge.', 'https://www.fedlex.admin.ch/eli/cc/27/317_321_377/de#a959a'],
  'or959b': ['Art. 959b OR — Mindestgliederung Erfolgsrechnung', 'Produktions- oder Absatzerfolgsrechnung.', 'Betriebsertrag − Betriebsaufwand ± betriebsfremder/a.o. Erfolg = Jahresergebnis.', 'https://www.fedlex.admin.ch/eli/cc/27/317_321_377/de#a959b'],
  'or959c': ['Art. 959c OR — Anhang', 'Ergänzende Angaben für die Beurteilung der Vermögens-, Finanzierungs- und Ertragslage.', 'Dritter Teil der Jahresrechnung. Enthält z.B. stille Reserven, Beteiligungen, Eventualverbindlichkeiten.', 'https://www.fedlex.admin.ch/eli/cc/27/317_321_377/de#a959c'],
  'or960e': ['Art. 960e OR — Rückstellungen', 'Bei erwartetem Mittelabfluss aus vergangenen Ereignissen sind Rückstellungen zu bilden.', 'Rückstellungspflicht — auch wenn Betrag und Fälligkeit unsicher sind.', 'https://www.fedlex.admin.ch/eli/cc/27/317_321_377/de#a960e'],
  'or961': ['Art. 961 OR — Grössere Unternehmen', 'Zusätzlich: Geldflussrechnung + Lagebericht + mehr Angaben im Anhang.', 'Kurzformel: «2 in 2 — 20/40/250» (Bilanzsumme ≥ 20 Mio., Umsatz ≥ 40 Mio., > 250 Stellen).', 'https://www.fedlex.admin.ch/eli/cc/27/317_321_377/de#a961'],
  'or962': ['Art. 962 OR — Anerkannte Standards', 'Börsenkotierte müssen nach anerkanntem Standard abschliessen.', 'Main Standard: IFRS/US GAAP. Domestic Standard: Swiss GAAP FER.', 'https://www.fedlex.admin.ch/eli/cc/27/317_321_377/de#a962'],
  'or671': ['Art. 671 OR — Gesetzliche Gewinnreserve', '5% des Jahresgewinns zuweisen, bis Reserve = 50% des Aktienkapitals.', 'Neues Recht ab 2023: Einstufig. Verlustvortrag zuerst verrechnen, dann 5% auf Restgewinn.', 'https://www.fedlex.admin.ch/eli/cc/27/317_321_377/de#a671'],
  'or673': ['Art. 673 OR — Freiwillige Gewinnreserven', 'GV kann zusätzliche Zuweisungen beschliessen.', 'Freiwillige Reserven als Sicherheitspuffer. Sinnvoll, aber in der Praxis selten.', 'https://www.fedlex.admin.ch/eli/cc/27/317_321_377/de#a673'],
};

// ==========================================
// 5. REGISTRIERUNG
// ==========================================
window.TIS = window.TIS || {};
window.TIS.courses = window.TIS.courses || {};
window.TIS.courses.fa3 = {
  config: courseConfig,
  html: courseHTML,
  flashcards: FA3_CARDS,
  articles: FA3_ART,
};

// ==========================================
// 6. ÜBUNGS-FUNKTIONEN (nach DOM-Injection)
// ==========================================
setTimeout(function() {
  // Build GoR questions
  var gorDiv = document.getElementById('fa3_gor_questions');
  if(gorDiv) {
    var h = '';
    FA3_GOR.forEach(function(q, i) {
      h += '<div class="c" style="padding:14px 16px;margin-bottom:8px" id="fa3_gor_'+i+'">';
      h += '<p style="margin-bottom:8px"><strong>'+(i+1)+'.</strong> '+q.q+'</p>';
      h += '<div style="display:flex;gap:8px;flex-wrap:wrap">';
      h += '<label style="cursor:pointer"><input type="radio" name="fa3_gor_'+i+'" value="verstoss"> Verstoss</label>';
      h += '<label style="cursor:pointer"><input type="radio" name="fa3_gor_'+i+'" value="kein_verstoss"> Kein Verstoss</label>';
      h += '</div>';
      h += '<div id="fa3_gor_fb_'+i+'" style="margin-top:8px;display:none"></div>';
      h += '</div>';
    });
    gorDiv.innerHTML = h;
  }
}, 500);

// Show/hide exercises
window.fa3ShowUeb = function(n) {
  ['fa3_ueb_sel','fa3_ueb1','fa3_ueb2','fa3_ueb3','fa3_ueb4','fa3_ueb5','fa3_ueb6'].forEach(function(id){
    var el=document.getElementById(id); if(el) el.style.display='none';
  });
  if(n===0) { document.getElementById('fa3_ueb_sel').style.display='block'; }
  else { 
    document.getElementById('fa3_ueb'+n).style.display='block';
    if(n===1) fa3GenER();
    if(n===5) fa3GenBS();
    if(n===6) fa3GenLV();
  }
};

// ---- RANDOMIZED ER EXERCISE ----
var fa3ERData = {};
function rnd(min,max){ return Math.round((min+Math.random()*(max-min))/100)*100; }

window.fa3GenER = function() {
  var umsatz = rnd(4000000, 9000000);
  var waPct = 28 + Math.random()*8; // 28-36%
  var wa = Math.round(umsatz * waPct/100 / 100)*100;
  var paPct = 42 + Math.random()*10; // 42-52%
  var pa = Math.round(umsatz * paPct/100 / 100)*100;
  var ubaPct = 8 + Math.random()*6; // 8-14%
  var uba = Math.round(umsatz * ubaPct/100 / 100)*100;
  var mietPct = 5 + Math.random()*6; // 5-11%
  var miet = Math.round(umsatz * mietPct/100 / 1000)*1000;
  var abschr = rnd(20000, 80000);
  var zins = rnd(10000, 50000);
  var steuer = rnd(5000, 20000);
  
  var goi=umsatz-wa-pa, gop=goi-uba, ebitda=gop-miet, ebit=ebitda-abschr;
  var bvn=ebit-zins, ebt=bvn, ue=ebt-steuer;
  
  fa3ERData = {umsatz:umsatz,wa:wa,pa:pa,uba:uba,miet:miet,abschr:abschr,zins:zins,steuer:steuer,
    goi:goi,gop:gop,ebitda:ebitda,ebit:ebit,bvn:bvn,ebt:ebt,ue:ue};
  
  function fmt(n){return n.toString().replace(/\\B(?=(\\d{3})+(?!\\d))/g,"'");}
  function pct(n){return (n/umsatz*100).toFixed(1);}
  
  document.getElementById('fa3_er_info').innerHTML = 'Finanzinformationen: Umsatzerlös CHF '+fmt(umsatz)+' · Warenaufwand CHF '+fmt(wa)+' · Dir. Personalaufwand CHF '+fmt(pa)+' · Übriger Betriebsaufwand CHF '+fmt(uba)+' · Mietaufwand CHF '+fmt(miet)+' · Abschreibungen CHF '+fmt(abschr)+' · Zinsaufwand CHF '+fmt(zins)+' · Steuern CHF '+fmt(steuer);
  
  var td='padding:8px;border:1px solid var(--bd)';
  var h='<table style="width:100%;border-collapse:collapse;font-size:13px">';
  h+='<tr style="background:var(--s2)"><th style="'+td+';text-align:left">Bezeichnung</th><th style="'+td+';text-align:right;width:140px">CHF</th><th style="'+td+';text-align:right;width:80px">%</th></tr>';
  h+='<tr><td style="'+td+'">Umsatzerlös</td><td style="'+td+';text-align:right">'+fmt(umsatz)+'</td><td style="'+td+';text-align:right">100.0%</td></tr>';
  h+='<tr><td style="'+td+'">− Warenaufwand</td><td style="'+td+';text-align:right">'+fmt(wa)+'</td><td style="'+td+';text-align:right">'+pct(wa)+'%</td></tr>';
  h+='<tr><td style="'+td+'">− Dir. Personalaufwand</td><td style="'+td+';text-align:right">'+fmt(pa)+'</td><td style="'+td+';text-align:right">'+pct(pa)+'%</td></tr>';
  h+='<tr style="background:rgba(52,199,89,.08)"><td style="'+td+'"><strong>= GOI</strong></td><td style="'+td+';text-align:right"><input type="text" id="fa3_er_goi" style="width:100px;text-align:right;padding:4px" placeholder="CHF?"></td><td style="'+td+';text-align:right"><input type="text" id="fa3_er_goip" style="width:50px;text-align:right;padding:4px" placeholder="%?"></td></tr>';
  h+='<tr><td style="'+td+'">− Übriger Betriebsaufwand</td><td style="'+td+';text-align:right">'+fmt(uba)+'</td><td style="'+td+';text-align:right">'+pct(uba)+'%</td></tr>';
  h+='<tr style="background:rgba(52,199,89,.08)"><td style="'+td+'"><strong>= GOP</strong></td><td style="'+td+';text-align:right"><input type="text" id="fa3_er_gop" style="width:100px;text-align:right;padding:4px" placeholder="CHF?"></td><td style="'+td+';text-align:right"><input type="text" id="fa3_er_gopp" style="width:50px;text-align:right;padding:4px" placeholder="%?"></td></tr>';
  h+='<tr><td style="'+td+'">− Mietaufwand</td><td style="'+td+';text-align:right">'+fmt(miet)+'</td><td style="'+td+';text-align:right">'+pct(miet)+'%</td></tr>';
  h+='<tr style="background:rgba(0,122,255,.08)"><td style="'+td+'"><strong>= EBITDA</strong></td><td style="'+td+';text-align:right"><input type="text" id="fa3_er_ebitda" style="width:100px;text-align:right;padding:4px" placeholder="CHF?"></td><td style="'+td+';text-align:right"><input type="text" id="fa3_er_ebitdap" style="width:50px;text-align:right;padding:4px" placeholder="%?"></td></tr>';
  h+='<tr><td style="'+td+'">− Abschreibungen</td><td style="'+td+';text-align:right">'+fmt(abschr)+'</td><td style="'+td+';text-align:right">'+pct(abschr)+'%</td></tr>';
  h+='<tr style="background:rgba(0,122,255,.08)"><td style="'+td+'"><strong>= EBIT</strong></td><td style="'+td+';text-align:right"><input type="text" id="fa3_er_ebit" style="width:100px;text-align:right;padding:4px" placeholder="CHF?"></td><td style="'+td+';text-align:right"><input type="text" id="fa3_er_ebitp" style="width:50px;text-align:right;padding:4px" placeholder="%?"></td></tr>';
  h+='<tr><td style="'+td+'">− Zinsaufwand</td><td style="'+td+';text-align:right">'+fmt(zins)+'</td><td style="'+td+';text-align:right">'+pct(zins)+'%</td></tr>';
  h+='<tr style="background:rgba(175,82,222,.08)"><td style="'+td+'"><strong>= Betriebserfolg v. Nebeneff.</strong></td><td style="'+td+';text-align:right"><input type="text" id="fa3_er_bvn" style="width:100px;text-align:right;padding:4px" placeholder="CHF?"></td><td style="'+td+';text-align:right"><input type="text" id="fa3_er_bvnp" style="width:50px;text-align:right;padding:4px" placeholder="%?"></td></tr>';
  h+='<tr><td style="'+td+'">± a.o. Erfolg</td><td style="'+td+';text-align:right">0</td><td style="'+td+';text-align:right">0.0%</td></tr>';
  h+='<tr style="background:rgba(175,82,222,.08)"><td style="'+td+'"><strong>= EBT</strong></td><td style="'+td+';text-align:right"><input type="text" id="fa3_er_ebt" style="width:100px;text-align:right;padding:4px" placeholder="CHF?"></td><td style="'+td+';text-align:right"><input type="text" id="fa3_er_ebtp" style="width:50px;text-align:right;padding:4px" placeholder="%?"></td></tr>';
  h+='<tr><td style="'+td+'">− Steuern</td><td style="'+td+';text-align:right">'+fmt(steuer)+'</td><td style="'+td+';text-align:right">'+pct(steuer)+'%</td></tr>';
  h+='<tr style="background:rgba(232,86,122,.08)"><td style="'+td+'"><strong>= Unternehmensergebnis</strong></td><td style="'+td+';text-align:right"><input type="text" id="fa3_er_ue" style="width:100px;text-align:right;padding:4px" placeholder="CHF?"></td><td style="'+td+';text-align:right"><input type="text" id="fa3_er_uep" style="width:50px;text-align:right;padding:4px" placeholder="%?"></td></tr>';
  h+='</table>';
  document.getElementById('fa3_er_tableWrap').innerHTML = h;
  document.getElementById('fa3_er_result').innerHTML = '';
};

window.fa3CheckER = function() {
  var d=fa3ERData, u=d.umsatz;
  function pct(n){return Math.round(n/u*1000)/10;}
  var sols=[
    {id:'fa3_er_goi',v:d.goi},{id:'fa3_er_goip',v:pct(d.goi)},
    {id:'fa3_er_gop',v:d.gop},{id:'fa3_er_gopp',v:pct(d.gop)},
    {id:'fa3_er_ebitda',v:d.ebitda},{id:'fa3_er_ebitdap',v:pct(d.ebitda)},
    {id:'fa3_er_ebit',v:d.ebit},{id:'fa3_er_ebitp',v:pct(d.ebit)},
    {id:'fa3_er_bvn',v:d.bvn},{id:'fa3_er_bvnp',v:pct(d.bvn)},
    {id:'fa3_er_ebt',v:d.ebt},{id:'fa3_er_ebtp',v:pct(d.ebt)},
    {id:'fa3_er_ue',v:d.ue},{id:'fa3_er_uep',v:pct(d.ue)}
  ];
  var correct=0;
  sols.forEach(function(s){
    var el=document.getElementById(s.id);if(!el)return;
    var v=parseFloat(el.value.replace(/'/g,'').replace(/,/g,'.').replace(/%/g,'').trim());
    var tol=Math.abs(s.v)>100?Math.max(100,Math.abs(s.v)*0.005):0.15;
    if(!isNaN(v)&&Math.abs(v-s.v)<=tol){el.style.border='2px solid var(--g)';el.style.background='rgba(52,199,89,.08)';correct++;}
    else{el.style.border='2px solid var(--r)';el.style.background='rgba(255,59,48,.08)';}
  });
  function fmt(n){return n.toString().replace(/\\B(?=(\\d{3})+(?!\\d))/g,"'");}
  var res=document.getElementById('fa3_er_result');
  if(res){
    if(correct===sols.length) res.innerHTML='<div class="hlg">Alles richtig! ✓</div>';
    else res.innerHTML='<div class="hlr">'+Math.floor(correct/2)+' von 7 Stufen korrekt.</div><div style="margin-top:8px;font-size:12px;color:var(--tx2)">Lösungen: GOI '+fmt(d.goi)+' ('+pct(d.goi)+'%), GOP '+fmt(d.gop)+' ('+pct(d.gop)+'%), EBITDA '+fmt(d.ebitda)+' ('+pct(d.ebitda)+'%), EBIT '+fmt(d.ebit)+' ('+pct(d.ebit)+'%), Betriebserf. '+fmt(d.bvn)+' ('+pct(d.bvn)+'%), EBT '+fmt(d.ebt)+' ('+pct(d.ebt)+'%), UE '+fmt(d.ue)+' ('+pct(d.ue)+'%)</div>';
  }
};
window.fa3ResetER = function() {
  document.querySelectorAll('#fa3_er_tableWrap input').forEach(function(e){e.value='';e.style.border='';e.style.background='';});
  var r=document.getElementById('fa3_er_result');if(r)r.innerHTML='';
};

window.fa3CheckGoR = function() {
  var correct=0;
  FA3_GOR.forEach(function(q,i) {
    var sel=document.querySelector('input[name="fa3_gor_'+i+'"]:checked');
    var fb=document.getElementById('fa3_gor_fb_'+i);
    var card=document.getElementById('fa3_gor_'+i);
    if(!fb||!card) return;
    fb.style.display='block';
    if(sel && sel.value===q.a) {
      card.style.borderLeft='3px solid var(--g)';
      fb.innerHTML='<div style="color:var(--g)">✓ Richtig!</div><div style="font-size:12px;color:var(--tx2);margin-top:4px">'+q.e+'</div>';
      correct++;
    } else {
      card.style.borderLeft='3px solid var(--r)';
      fb.innerHTML='<div style="color:var(--r)">✗ Falsch</div><div style="font-size:12px;color:var(--tx2);margin-top:4px">'+q.e+'</div>';
    }
  });
  var res=document.getElementById('fa3_gor_result');
  if(res) res.innerHTML='<div class="'+(correct===FA3_GOR.length?'hlg':'hla')+'">'+correct+' von '+FA3_GOR.length+' richtig</div>';
};
window.fa3ResetGoR = function() {
  FA3_GOR.forEach(function(q,i) {
    document.querySelectorAll('input[name="fa3_gor_'+i+'"]').forEach(function(r){r.checked=false;});
    var fb=document.getElementById('fa3_gor_fb_'+i);if(fb){fb.style.display='none';fb.innerHTML='';}
    var card=document.getElementById('fa3_gor_'+i);if(card)card.style.borderLeft='';
  });
  var r=document.getElementById('fa3_gor_result');if(r)r.innerHTML='';
};

window.fa3CheckWA = function() {
  var sols=[{id:'fa3_wa_w',v:1500,pid:'fa3_wap_w',pv:34.9},{id:'fa3_wa_b',v:400,pid:'fa3_wap_b',pv:33.3},{id:'fa3_wa_s',v:130,pid:'fa3_wap_s',pv:26.0},{id:'fa3_wa_m',v:400,pid:'fa3_wap_m',pv:16.0},{id:'fa3_wa_k',v:50,pid:'fa3_wap_k',pv:6.3},{id:'fa3_wa_ku',v:3600,pid:'fa3_wap_ku',pv:36.0}];
  var correct=0;
  sols.forEach(function(s) {
    var el=document.getElementById(s.id);var pel=document.getElementById(s.pid);
    if(el){var v=parseFloat(el.value.replace(/'/g,'').trim());if(!isNaN(v)&&Math.abs(v-s.v)<=5){el.style.border='2px solid var(--g)';correct++;}else{el.style.border='2px solid var(--r)';}}
    if(pel){var pv=parseFloat(pel.value.replace(/%/g,'').replace(/,/g,'.').trim());if(!isNaN(pv)&&Math.abs(pv-s.pv)<=0.5){pel.style.border='2px solid var(--g)';correct++;}else{pel.style.border='2px solid var(--r)';}}
  });
  var res=document.getElementById('fa3_wa_result');
  if(res) res.innerHTML='<div class="'+(correct>=10?'hlg':'hla')+'">'+correct+' von 12 Werte korrekt.</div><div style="margin-top:8px;font-size:12px;color:var(--tx2)">Lösungen: Wein 1\'500 (34.9%), Bier 400 (33.3%), Spirituosen 130 (26.0%), Mineral 400 (16.0%), Kaffee 50 (6.3%), Küche 3\'600 (36.0%)</div>';
};
window.fa3ResetWA = function() {
  ['fa3_wa_w','fa3_wap_w','fa3_wa_b','fa3_wap_b','fa3_wa_s','fa3_wap_s','fa3_wa_m','fa3_wap_m','fa3_wa_k','fa3_wap_k','fa3_wa_ku','fa3_wap_ku'].forEach(function(id){var e=document.getElementById(id);if(e){e.value='';e.style.border='';}});
  var r=document.getElementById('fa3_wa_result');if(r)r.innerHTML='';
};

window.fa3CheckMWST = function() {
  var sols=[{id:'fa3_mw_i',v:3},{id:'fa3_mw_it',v:33},{id:'fa3_mw_v',v:5},{id:'fa3_mw_vt',v:55},{id:'fa3_mw_b',v:9},{id:'fa3_mw_bt',v:99},{id:'fa3_mw_gv',v:2},{id:'fa3_mw_gb',v:4},{id:'fa3_mw_total',v:9}];
  var correct=0;
  sols.forEach(function(s) {
    var el=document.getElementById(s.id);if(!el)return;
    var v=parseFloat(el.value.replace(/'/g,'').replace(/,/g,'.').trim());
    if(!isNaN(v)&&Math.abs(v-s.v)<=0.05){el.style.border='2px solid var(--g)';el.style.background='rgba(52,199,89,.08)';correct++;}
    else{el.style.border='2px solid var(--r)';el.style.background='rgba(255,59,48,.08)';}
  });
  var res=document.getElementById('fa3_mw_result');
  if(res) res.innerHTML='<div class="'+(correct===sols.length?'hlg':'hla')+'">'+correct+' von '+sols.length+' richtig.</div><div style="margin-top:8px;font-size:12px;color:var(--tx2)">Lösungen: Import MWST 3.00, Total 33.00 | Victoria MWST 5.00, Total 55.00 | Bergsport MWST 9.00, Total 99.00 | Geschuldet Victoria 2.00, Bergsport 4.00 | Total ESTV: 9.00</div>';
};
window.fa3ResetMWST = function() {
  ['fa3_mw_i','fa3_mw_it','fa3_mw_v','fa3_mw_vt','fa3_mw_b','fa3_mw_bt','fa3_mw_gv','fa3_mw_gb','fa3_mw_total'].forEach(function(id){var e=document.getElementById(id);if(e){e.value='';e.style.border='';e.style.background='';}});
  var r=document.getElementById('fa3_mw_result');if(r)r.innerHTML='';
};

// ==========================================
// ÜBUNG 5: MONATSABSCHLUSS + LOHNVERBUCHUNG
// ==========================================
var fa3BS={};
var FA3_BS_POOL=[
  {name:'Soul Food',type:'Restaurant',month:'Januar 2025',day:'01.01.2025',end:'31.01.2025'},
  {name:'Alpenstube',type:'Bergrestaurant',month:'Februar 2025',day:'01.02.2025',end:'28.02.2025'},
  {name:'Lago Blu',type:'Restaurant & Bar',month:'März 2025',day:'01.03.2025',end:'31.03.2025'},
  {name:'Brasserie Central',type:'Brasserie',month:'April 2025',day:'01.04.2025',end:'30.04.2025'},
  {name:'Gasthaus Hirschen',type:'Gasthaus',month:'Mai 2025',day:'01.05.2025',end:'31.05.2025'},
  {name:'Ristorante Bella',type:'Ristorante',month:'Juni 2025',day:'01.06.2025',end:'30.06.2025'},
];
// GF pool: each has multiple text variants
var FA3_GF_POOL=[
  {id:'ak',texts:['Die Eigentümer:innen zahlen das Aktienkapital von CHF {v} auf der Bank ein.','Das Aktienkapital von CHF {v} wird am {day} auf das Bankkonto eingezahlt.','Die Gesellschafter:innen leisten die Einlage des Aktienkapitals von CHF {v} per Banküberweisung.'],soll:'1020',haben:'2802',btext:'Einzahlung Aktienkapital',min:50000,max:200000,step:10000},
  {id:'dar',texts:['Sie erhalten von einer Privatperson CHF {v} in Bar als langfristiges Darlehen.','Ein Bekannter gewährt dem Betrieb ein Darlehen über CHF {v} in bar. Rückzahlung in 3 Jahren.','Es wird ein langfristiges Darlehen über CHF {v} aufgenommen. Der Betrag wird bar ausbezahlt.'],soll:'1000',haben:'2406',btext:'Darlehen bar erhalten',min:5000,max:30000,step:1000},
  {id:'inv',texts:['Sie verbuchen eine Rechnung für gekaufte Küchenmaschinen über CHF {v}.','Neue Küchengeräte und Maschinen werden für CHF {v} auf Rechnung gekauft.','Der Betrieb erhält eine Rechnung über CHF {v} für eine neue Gastro-Einrichtung (Maschinen).'],soll:'1430',haben:'2000',btext:'Kauf Maschinen auf Rechnung',min:10000,max:60000,step:5000},
  {id:'wk',texts:['Sie verbuchen die Monatsrechnung der Lebensmittellieferungen (Küche), CHF {v}.','Die Monatsrechnung des Gemüse- und Fleischlieferanten beträgt CHF {v}.','Küchen-Wareneinkauf im {month}: CHF {v}, Rechnungsdatum {end}.'],soll:'4201',haben:'2000',btext:'Wareneinkauf Küche auf Rechnung',min:2000,max:8000,step:500},
  {id:'wg',texts:['Sie verbuchen die Monatsrechnung der Getränkelieferungen, CHF {v}.','Die Getränkelieferantin stellt CHF {v} für den {month} in Rechnung.','Keller-Wareneinkauf {month}: CHF {v}, auf Rechnung.'],soll:'4101',haben:'2000',btext:'Wareneinkauf Keller auf Rechnung',min:1000,max:5000,step:500},
  {id:'uk',texts:['Monatsumsatz Küche gemäss Kassensystem: CHF {v}. Noch keine Zahlungen eingegangen.','Laut POS-Bericht wurden im {month} Menüs im Wert von CHF {v} verkauft. Die Gäste haben auf Rechnung gegessen.','Der Küchenumsatz beträgt gemäss Kassensystem CHF {v}. Zahlungseingang steht aus.'],soll:'1100',haben:'3201',btext:'Umsatz Küche auf Rechnung',min:5000,max:18000,step:500},
  {id:'ug',texts:['Monatsumsatz Getränke gemäss Kassensystem: CHF {v}. Noch keine Zahlungen eingegangen.','Im Keller wurden CHF {v} umgesetzt (Kassenbericht {month}). Zahlungen stehen noch aus.','Getränkeumsatz {month}: CHF {v} auf Rechnung.'],soll:'1100',haben:'3101',btext:'Umsatz Keller auf Rechnung',min:3000,max:14000,step:500},
  {id:'lohn',texts:['Laut Lohnprogramm: Bruttolöhne {month} CHF {v}. Verbuchen Sie den Personalaufwand.','Der Monatsbericht des Lohnprogramms weist Bruttolöhne von CHF {v} aus.','Gehälter für den {month}: CHF {v} gemäss Lohnabrechnung.'],soll:'5101',haben:'2201',btext:'Bruttolöhne',min:8000,max:25000,step:1000},
  {id:'sv',texts:['Sozialversicherungsbeiträge (Arbeitgeberanteil): CHF {v}.','Der AG-Anteil Sozialversicherungen beträgt laut Lohnprogramm CHF {v}.','Arbeitgeber-Sozialversicherungsbeiträge {month}: CHF {v}.'],soll:'5201',haben:'2202',btext:'AG-Beiträge Sozialversicherungen',min:1000,max:4000,step:500},
  {id:'rep',texts:['Eine Küchenmaschine musste repariert werden. Kosten: CHF {v}, auf Rechnung.','Der Pacojet wurde repariert — Rechnung über CHF {v}.','Reparatur einer Kaffeemaschine: CHF {v}, in Rechnung gestellt.'],soll:'6353',haben:'2000',btext:'Reparatur Maschine auf Rechnung',min:200,max:1500,step:50},
  {id:'mat',texts:['Betriebsmaterial (Servietten, Kerzen) für CHF {v} geliefert und in Rechnung gestellt.','Papierservietten und Tischtücher im Wert von CHF {v} werden auf Rechnung geliefert.','Restaurationsmaterial für CHF {v} auf Rechnung bezogen.'],soll:'4701',haben:'2000',btext:'Betriebsmaterial auf Rechnung',min:100,max:800,step:50},
];
var FA3_BS_KTO={
  '1000':{n:'Kasse',t:'A'},'1020':{n:'Bank',t:'A'},'1100':{n:'Forderungen aus L. und L.',t:'A'},'1430':{n:'Maschinen und Apparate',t:'A'},
  '2000':{n:'Verbindlichkeiten aus L. und L.',t:'P'},'2201':{n:'Kfr. Schulden ggü. Personal',t:'P'},'2202':{n:'Kfr. Schulden ggü. Sozialvers.',t:'P'},'2406':{n:'Darlehen langfristig',t:'P'},'2802':{n:'Aktienkapital',t:'P'},
  '3101':{n:'Keller Ertrag',t:'E'},'3201':{n:'Küche Ertrag',t:'E'},
  '4101':{n:'Keller Warenaufwand',t:'W'},'4201':{n:'Küche Warenaufwand',t:'W'},'4701':{n:'Betriebsmaterial Restauration',t:'W'},
  '5101':{n:'Gehälter',t:'W'},'5201':{n:'Sozialversicherungen',t:'W'},'6353':{n:'Unterhalt Maschinen/Apparate',t:'W'},
};
// Lohn pool
var FA3_LOHN_POOL=[
  {name:'Franziska Frisch',lohn:6000,privat:200,kizu:250,anPct:0.142,verpfl:396,spesen:190,vorschuss:1000},
  {name:'Karl Huber',lohn:8000,privat:180,kizu:0,anPct:0.116,verpfl:0,spesen:220,vorschuss:0},
  {name:'Maria Keller',lohn:5500,privat:0,kizu:250,anPct:0.142,verpfl:330,spesen:0,vorschuss:500},
  {name:'Peter Meier',lohn:7000,privat:200,kizu:500,anPct:0.140,verpfl:396,spesen:150,vorschuss:2000},
  {name:'Laura Bianchi',lohn:4800,privat:0,kizu:250,anPct:0.138,verpfl:264,spesen:80,vorschuss:0},
];

function fa3r(min,max,step){return Math.round((min+Math.random()*(max-min))/step)*step;}
function fa3f(n){return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g,"'");}
function fa3p(v){return parseFloat((v+'').replace(/'/g,'').replace(/,/g,'.').replace(/%/g,'').replace(/CHF/gi,'').trim());}

window.fa3GenBS=function(){
  var sc=FA3_BS_POOL[Math.floor(Math.random()*FA3_BS_POOL.length)];
  // Pick 7-9 random GFs from pool
  var pool=FA3_GF_POOL.slice();
  var count=7+Math.floor(Math.random()*4); // 7 to 10
  if(count>pool.length)count=pool.length;
  // Always include ak, one ware, one umsatz, lohn
  var must=['ak','lohn','uk','wk'];
  var chosen=[];var usedIds={};
  must.forEach(function(mid){
    var idx=pool.findIndex(function(p){return p.id===mid;});
    if(idx>=0){chosen.push(pool[idx]);usedIds[mid]=true;}
  });
  // Fill rest randomly
  var rest=pool.filter(function(p){return!usedIds[p.id];});
  while(chosen.length<count&&rest.length>0){
    var ri=Math.floor(Math.random()*rest.length);
    chosen.push(rest[ri]);rest.splice(ri,1);
  }
  // Shuffle (but keep ak first)
  var akItem=chosen.splice(chosen.findIndex(function(c){return c.id==='ak';}),1)[0];
  for(var i=chosen.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1));var tmp=chosen[i];chosen[i]=chosen[j];chosen[j]=tmp;}
  chosen.unshift(akItem);
  // Generate values and pick text variant
  var gfs=[];
  chosen.forEach(function(t,idx){
    var v=fa3r(t.min,t.max,t.step);
    var ti=Math.floor(Math.random()*t.texts.length);
    var txt=t.texts[ti].replace(/\{v\}/g,fa3f(v)).replace(/\{day\}/g,sc.day).replace(/\{end\}/g,sc.end).replace(/\{month\}/g,sc.month);
    gfs.push({id:t.id,text:txt,soll:t.soll,haben:t.haben,btext:t.btext,v:v,nr:idx+1});
  });
  // Calc salden
  var sal={};Object.keys(FA3_BS_KTO).forEach(function(k){sal[k]=0;});
  gfs.forEach(function(g){
    var st=FA3_BS_KTO[g.soll].t,ht=FA3_BS_KTO[g.haben].t;
    if(st==='A'||st==='W')sal[g.soll]+=g.v;else sal[g.soll]-=g.v;
    if(ht==='P'||ht==='E')sal[g.haben]+=g.v;else sal[g.haben]-=g.v;
  });
  // T-Konto detail: which amounts land on which side
  var tkDetail={};Object.keys(FA3_BS_KTO).forEach(function(k){tkDetail[k]={s:[],h:[]};});
  gfs.forEach(function(g){tkDetail[g.soll].s.push(g.v);tkDetail[g.haben].h.push(g.v);});
  var tA=0,tE=0;
  Object.keys(sal).forEach(function(k){if(FA3_BS_KTO[k].t==='W')tA+=sal[k];if(FA3_BS_KTO[k].t==='E')tE+=sal[k];});
  var erg=tE-tA;
  // Lohn
  var lp=FA3_LOHN_POOL[Math.floor(Math.random()*FA3_LOHN_POOL.length)];
  var lohnBasis=lp.lohn+lp.privat; // KIZU not AHV-pflichtig
  var anBeitr=Math.round(lohnBasis*lp.anPct);
  var netto=lp.lohn+lp.privat+lp.kizu-anBeitr;
  var auszahl=netto-lp.privat-lp.verpfl+lp.spesen;
  var restzahl=auszahl-lp.vorschuss;
  var agBeitr=Math.round(lohnBasis*0.167/10)*10; // ~16.7%
  var lohnData={name:lp.name,lohn:lp.lohn,privat:lp.privat,kizu:lp.kizu,anBeitr:anBeitr,verpfl:lp.verpfl,spesen:lp.spesen,vorschuss:lp.vorschuss,brutto:lp.lohn+lp.privat+lp.kizu,netto:netto,auszahl:auszahl,restzahl:restzahl,agBeitr:agBeitr,
    buchungen:[]};
  // Build lohn buchungen list
  var lb=[];
  lb.push({text:'Monatslohn',soll:'5101',haben:'2201',v:lp.lohn});
  if(lp.privat>0)lb.push({text:'Privatanteil Geschäftsauto',soll:'5101',haben:'4905',v:lp.privat});
  if(lp.kizu>0)lb.push({text:'Kinderzulagen',soll:'2202',haben:'2201',v:lp.kizu});
  lb.push({text:'AN-Beiträge',soll:'2201',haben:'2202',v:anBeitr});
  if(lp.verpfl>0)lb.push({text:'Verpflegungsabzug',soll:'2201',haben:'4507',v:lp.verpfl});
  if(lp.spesen>0)lb.push({text:'Spesenentschädigung',soll:'5301',haben:'2201',v:lp.spesen});
  if(lp.vorschuss>0)lb.push({text:'Lohnvorschuss verrechnen',soll:'2201',haben:'1140',v:lp.vorschuss});
  lb.push({text:'Lohnzahlung',soll:'2201',haben:'1020',v:restzahl});
  lohnData.buchungen=lb;

  fa3BS={sc:sc,gfs:gfs,sal:sal,tkDetail:tkDetail,tA:tA,tE:tE,erg:erg,lohn:lohnData};
  [1,2,3,4,5].forEach(function(i){var b=document.getElementById('fa3_bs_sol'+i+'btn');if(b)b.style.display='none';var r=document.getElementById('fa3_bs_res'+i);if(r)r.innerHTML='';});

  // === RENDER AUFGABESTELLUNG ===
  var ah='<strong>Ausgangslage:</strong> Monatsabschluss '+sc.type+' «'+sc.name+'»<br>';
  ah+='Das '+sc.type+' «'+sc.name+'» wurde am '+sc.day+' eröffnet. Sie erhalten den Auftrag, die Buchhaltung des ersten Monats ('+sc.month+') zu führen.<br><br>';
  ah+='<strong>Aufgabe:</strong> Erstellen Sie anhand der Geschäftsfälle die Buchungssätze (Buchungsjournal), führen Sie parallel die T-Konten, und erstellen Sie die Bilanz per '+sc.end+' sowie die Erfolgsrechnung '+sc.month+'.';
  document.getElementById('fa3_bs_aufgabe').innerHTML=ah;

  // Kontenliste
  var kh='<div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;font-size:12px;margin-bottom:12px">';
  kh+='<div class="c" style="padding:10px 14px"><strong>Konten Bilanz</strong><br>';
  Object.keys(FA3_BS_KTO).forEach(function(k){var ki=FA3_BS_KTO[k];if(ki.t==='A'||ki.t==='P')kh+='<span>'+k+' '+ki.n+'</span><br>';});
  kh+='</div><div class="c" style="padding:10px 14px"><strong>Konten Erfolgsrechnung</strong><br>';
  Object.keys(FA3_BS_KTO).forEach(function(k){var ki=FA3_BS_KTO[k];if(ki.t==='W'||ki.t==='E')kh+='<span>'+k+' '+ki.n+'</span><br>';});
  kh+='</div></div>';
  document.getElementById('fa3_bs_konten').innerHTML=kh;

  // Geschäftsfälle als nummerierte Liste
  var gl='<div style="font-size:13px;margin-bottom:8px"><strong>Geschäftsfälle '+sc.month+':</strong></div>';
  gfs.forEach(function(g){gl+='<div style="font-size:13px;margin-bottom:6px;padding:6px 0;border-bottom:1px solid var(--bd)"><strong>'+g.nr+'.</strong> '+g.text+'</div>';});
  document.getElementById('fa3_bs_gfList').innerHTML=gl;

  // === AUFGABE 1: BUCHUNGSJOURNAL (komplett leer) ===
  var is='style="width:100%;padding:4px 6px;font-size:12px;box-sizing:border-box"';
  var td='padding:5px;border:1px solid var(--bd);font-size:12px;vertical-align:top';
  var jh='<table style="width:100%;border-collapse:collapse">';
  jh+='<tr style="background:var(--s2)"><th style="'+td+';width:30px">Nr.</th><th style="'+td+'">Buchungstext</th><th style="'+td+';width:70px">Soll</th><th style="'+td+';width:70px">Haben</th><th style="'+td+';width:85px">Betrag</th></tr>';
  gfs.forEach(function(g,i){
    jh+='<tr id="fa3_bsr'+i+'"><td style="'+td+';text-align:center">'+(i+1)+'</td>';
    jh+='<td style="'+td+'"><input type="text" id="fa3_bs_bt'+i+'" '+is+' placeholder="Buchungstext eingeben…"></td>';
    jh+='<td style="'+td+'"><input type="text" id="fa3_bs_s'+i+'" style="width:55px;text-align:center;padding:4px;font-size:12px" placeholder="Kto"></td>';
    jh+='<td style="'+td+'"><input type="text" id="fa3_bs_h'+i+'" style="width:55px;text-align:center;padding:4px;font-size:12px" placeholder="Kto"></td>';
    jh+='<td style="'+td+'"><input type="text" id="fa3_bs_v'+i+'" style="width:70px;text-align:right;padding:4px;font-size:12px" placeholder="CHF"></td></tr>';
  });
  jh+='</table>';
  document.getElementById('fa3_bs_journal').innerHTML=jh;

  // === AUFGABE 2: T-KONTEN (echte T-Form, alles leer) ===
  var used={};gfs.forEach(function(g){used[g.soll]=true;used[g.haben]=true;});
  var maxSlots=0;
  Object.keys(used).forEach(function(k){var n=Math.max(tkDetail[k].s.length,tkDetail[k].h.length);if(n>maxSlots)maxSlots=n;});
  if(maxSlots<3)maxSlots=3;
  var th='<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px">';
  Object.keys(FA3_BS_KTO).forEach(function(k){
    if(!used[k])return;
    th+='<div style="border:1px solid var(--bd);border-radius:8px;overflow:hidden">';
    th+='<div style="background:var(--s2);padding:6px 10px;font-size:12px;font-weight:600;text-align:center;border-bottom:1px solid var(--bd)">'+k+' '+FA3_BS_KTO[k].n+'</div>';
    th+='<div style="display:grid;grid-template-columns:1fr 1fr">';
    th+='<div style="border-right:1px solid var(--bd);padding:4px"><div style="font-size:11px;font-weight:600;text-align:center;padding:2px 0;border-bottom:1px solid var(--bd);margin-bottom:4px">Soll</div>';
    for(var si=0;si<maxSlots;si++) th+='<input type="text" id="fa3_tk_'+k+'_s'+si+'" style="width:100%;text-align:right;padding:3px;font-size:11px;box-sizing:border-box;margin-bottom:2px" placeholder="">';
    th+='</div>';
    th+='<div style="padding:4px"><div style="font-size:11px;font-weight:600;text-align:center;padding:2px 0;border-bottom:1px solid var(--bd);margin-bottom:4px">Haben</div>';
    for(var hi=0;hi<maxSlots;hi++) th+='<input type="text" id="fa3_tk_'+k+'_h'+hi+'" style="width:100%;text-align:right;padding:3px;font-size:11px;box-sizing:border-box;margin-bottom:2px" placeholder="">';
    th+='</div></div>';
    th+='<div style="border-top:1px solid var(--bd);padding:6px 10px;display:flex;justify-content:space-between;align-items:center"><span style="font-size:11px;font-weight:600">Saldo:</span><input type="text" id="fa3_tk_'+k+'_sal" style="width:80px;text-align:right;padding:3px;font-size:12px;font-weight:600" placeholder="CHF"></div>';
    th+='</div>';
  });
  th+='</div>';
  document.getElementById('fa3_bs_tkonten').innerHTML=th;

  // === AUFGABE 3: BILANZ (echte Bilanz-Form, alles leer) ===
  var bi='<table style="width:100%;border-collapse:collapse;font-size:12px">';
  bi+='<tr style="background:var(--s2)"><th style="'+td+'" colspan="2">AKTIVEN</th><th style="'+td+'" colspan="2">PASSIVEN</th></tr>';
  // UV | kFK
  bi+='<tr><td style="'+td+';font-weight:600" colspan="2">Umlaufvermögen</td><td style="'+td+';font-weight:600" colspan="2">Kurzfristiges Fremdkapital</td></tr>';
  for(var row=0;row<3;row++){
    bi+='<tr><td style="'+td+'"><input type="text" id="fa3_bil_an'+row+'" style="width:100%;padding:3px;font-size:11px;box-sizing:border-box" placeholder="Konto"></td>';
    bi+='<td style="'+td+';width:80px"><input type="text" id="fa3_bil_av'+row+'" style="width:65px;text-align:right;padding:3px;font-size:11px" placeholder="CHF"></td>';
    bi+='<td style="'+td+'"><input type="text" id="fa3_bil_pn'+row+'" style="width:100%;padding:3px;font-size:11px;box-sizing:border-box" placeholder="Konto"></td>';
    bi+='<td style="'+td+';width:80px"><input type="text" id="fa3_bil_pv'+row+'" style="width:65px;text-align:right;padding:3px;font-size:11px" placeholder="CHF"></td></tr>';
  }
  bi+='<tr style="background:var(--s2)"><td style="'+td+'">Total UV</td><td style="'+td+'"><input type="text" id="fa3_bil_tuv" style="width:65px;text-align:right;padding:3px;font-size:11px;font-weight:700" placeholder="CHF"></td>';
  bi+='<td style="'+td+'">Total kfr. FK</td><td style="'+td+'"><input type="text" id="fa3_bil_tkfk" style="width:65px;text-align:right;padding:3px;font-size:11px;font-weight:700" placeholder="CHF"></td></tr>';
  // AV | lFK
  bi+='<tr><td style="'+td+';font-weight:600" colspan="2">Anlagevermögen</td><td style="'+td+';font-weight:600" colspan="2">Langfristiges Fremdkapital</td></tr>';
  bi+='<tr><td style="'+td+'"><input type="text" id="fa3_bil_avn" style="width:100%;padding:3px;font-size:11px;box-sizing:border-box" placeholder="Konto"></td>';
  bi+='<td style="'+td+'"><input type="text" id="fa3_bil_avv" style="width:65px;text-align:right;padding:3px;font-size:11px" placeholder="CHF"></td>';
  bi+='<td style="'+td+'"><input type="text" id="fa3_bil_lfn" style="width:100%;padding:3px;font-size:11px;box-sizing:border-box" placeholder="Konto"></td>';
  bi+='<td style="'+td+'"><input type="text" id="fa3_bil_lfv" style="width:65px;text-align:right;padding:3px;font-size:11px" placeholder="CHF"></td></tr>';
  bi+='<tr style="background:var(--s2)"><td style="'+td+'">Total AV</td><td style="'+td+'"><input type="text" id="fa3_bil_tav" style="width:65px;text-align:right;padding:3px;font-size:11px;font-weight:700" placeholder="CHF"></td>';
  bi+='<td style="'+td+'">Total lfr. FK</td><td style="'+td+'"><input type="text" id="fa3_bil_tlfk" style="width:65px;text-align:right;padding:3px;font-size:11px;font-weight:700" placeholder="CHF"></td></tr>';
  // EK
  bi+='<tr><td style="'+td+'" colspan="2"></td><td style="'+td+';font-weight:600" colspan="2">Eigenkapital</td></tr>';
  bi+='<tr><td style="'+td+'" colspan="2"></td><td style="'+td+'"><input type="text" id="fa3_bil_ekn" style="width:100%;padding:3px;font-size:11px;box-sizing:border-box" placeholder="Konto"></td>';
  bi+='<td style="'+td+'"><input type="text" id="fa3_bil_ekv" style="width:65px;text-align:right;padding:3px;font-size:11px" placeholder="CHF"></td></tr>';
  bi+='<tr><td style="'+td+'" colspan="2"></td><td style="'+td+'">Monatsergebnis</td><td style="'+td+'"><input type="text" id="fa3_bil_erg" style="width:65px;text-align:right;padding:3px;font-size:11px" placeholder="CHF"></td></tr>';
  bi+='<tr style="background:var(--s2)"><td style="'+td+'" colspan="2"></td><td style="'+td+'">Total EK</td><td style="'+td+'"><input type="text" id="fa3_bil_tek" style="width:65px;text-align:right;padding:3px;font-size:11px;font-weight:700" placeholder="CHF"></td></tr>';
  // Totals
  bi+='<tr style="background:rgba(175,82,222,.06)"><td style="'+td+';font-weight:700">Total AKTIVEN</td><td style="'+td+'"><input type="text" id="fa3_bil_ta" style="width:65px;text-align:right;padding:3px;font-size:12px;font-weight:700" placeholder="CHF"></td>';
  bi+='<td style="'+td+';font-weight:700">Total PASSIVEN</td><td style="'+td+'"><input type="text" id="fa3_bil_tp" style="width:65px;text-align:right;padding:3px;font-size:12px;font-weight:700" placeholder="CHF"></td></tr>';
  bi+='</table>';
  document.getElementById('fa3_bs_bilanz').innerHTML=bi;

  // === AUFGABE 4: ERFOLGSRECHNUNG (alles leer) ===
  var eh='<table style="width:100%;border-collapse:collapse;font-size:12px">';
  eh+='<tr style="background:var(--s2)"><th style="'+td+'" colspan="2">AUFWAND</th><th style="'+td+'" colspan="2">ERTRAG</th></tr>';
  for(var er=0;er<6;er++){
    eh+='<tr><td style="'+td+'"><input type="text" id="fa3_er_an'+er+'" style="width:100%;padding:3px;font-size:11px;box-sizing:border-box" placeholder="Konto"></td>';
    eh+='<td style="'+td+';width:80px"><input type="text" id="fa3_er_av'+er+'" style="width:65px;text-align:right;padding:3px;font-size:11px" placeholder="CHF"></td>';
    if(er<2){
      eh+='<td style="'+td+'"><input type="text" id="fa3_er_en'+er+'" style="width:100%;padding:3px;font-size:11px;box-sizing:border-box" placeholder="Konto"></td>';
      eh+='<td style="'+td+'"><input type="text" id="fa3_er_ev'+er+'" style="width:65px;text-align:right;padding:3px;font-size:11px" placeholder="CHF"></td>';
    }else{eh+='<td style="'+td+'" colspan="2"></td>';}
    eh+='</tr>';
  }
  eh+='<tr style="background:var(--s2)"><td style="'+td+';font-weight:700">Total Aufwand</td><td style="'+td+'"><input type="text" id="fa3_er_ta" style="width:65px;text-align:right;padding:3px;font-weight:700" placeholder="CHF"></td>';
  eh+='<td style="'+td+';font-weight:700">Total Ertrag</td><td style="'+td+'"><input type="text" id="fa3_er_te" style="width:65px;text-align:right;padding:3px;font-weight:700" placeholder="CHF"></td></tr>';
  eh+='<tr style="background:rgba(175,82,222,.06)"><td style="'+td+'" colspan="2"><strong>Monatsergebnis:</strong></td><td style="'+td+'" colspan="2"><input type="text" id="fa3_er_res" style="width:80px;text-align:right;padding:4px;font-weight:700" placeholder="Gewinn/Verlust CHF"></td></tr>';
  eh+='</table>';
  document.getElementById('fa3_bs_er').innerHTML=eh;

  // === AUFGABE 5: LOHNVERBUCHUNG ===
  var ld=lohnData;
  var li='<strong>Lohnabrechnung '+ld.name+' ('+sc.month+'):</strong><br>';
  li+='Monatslohn: CHF '+fa3f(ld.lohn);
  if(ld.privat>0)li+=' · Privatanteil Geschäftsauto: CHF '+fa3f(ld.privat);
  if(ld.kizu>0)li+=' · Kinderzulagen: CHF '+fa3f(ld.kizu);
  li+=' · AN-Beiträge: CHF '+fa3f(ld.anBeitr);
  if(ld.verpfl>0)li+=' · Verpflegungsabzug: CHF '+fa3f(ld.verpfl);
  if(ld.spesen>0)li+=' · Spesenentschädigung (effektiv): CHF '+fa3f(ld.spesen);
  if(ld.vorschuss>0)li+=' · Lohnvorschuss (bereits ausbezahlt): CHF '+fa3f(ld.vorschuss);
  li+='<br><br>Konten: 5101 Gehälter · 5201 Soziallasten · 5301 Übriger PA · 2201 Lohndurchlauf · 2202 KK Sozialvers. · 4507 WA Personalverpfl. · 4905 Privatanteil FZ · 1140 Lohnvorschüsse · 1020 Bank';
  document.getElementById('fa3_bs_lohn_info').innerHTML=li;

  var lh='<table style="width:100%;border-collapse:collapse;font-size:12px">';
  lh+='<tr style="background:var(--s2)"><th style="'+td+'">Lohnart</th><th style="'+td+';width:70px">Soll</th><th style="'+td+';width:70px">Haben</th><th style="'+td+';width:80px">Betrag</th></tr>';
  var lohnRows=ld.buchungen.length;
  for(var lr=0;lr<lohnRows;lr++){
    lh+='<tr><td style="'+td+'"><input type="text" id="fa3_lt'+lr+'" style="width:100%;padding:3px;font-size:11px;box-sizing:border-box" placeholder="Lohnart"></td>';
    lh+='<td style="'+td+'"><input type="text" id="fa3_ls'+lr+'" style="width:55px;text-align:center;padding:3px;font-size:11px" placeholder="Kto"></td>';
    lh+='<td style="'+td+'"><input type="text" id="fa3_lh'+lr+'" style="width:55px;text-align:center;padding:3px;font-size:11px" placeholder="Kto"></td>';
    lh+='<td style="'+td+'"><input type="text" id="fa3_lv'+lr+'" style="width:65px;text-align:right;padding:3px;font-size:11px" placeholder="CHF"></td></tr>';
  }
  // Extra empty rows for user
  for(var ex=0;ex<2;ex++){
    lh+='<tr><td style="'+td+'"><input type="text" id="fa3_lt'+(lohnRows+ex)+'" style="width:100%;padding:3px;font-size:11px;box-sizing:border-box" placeholder=""></td>';
    lh+='<td style="'+td+'"><input type="text" id="fa3_ls'+(lohnRows+ex)+'" style="width:55px;text-align:center;padding:3px;font-size:11px" placeholder=""></td>';
    lh+='<td style="'+td+'"><input type="text" id="fa3_lh'+(lohnRows+ex)+'" style="width:55px;text-align:center;padding:3px;font-size:11px" placeholder=""></td>';
    lh+='<td style="'+td+'"><input type="text" id="fa3_lv'+(lohnRows+ex)+'" style="width:65px;text-align:right;padding:3px;font-size:11px" placeholder=""></td></tr>';
  }
  lh+='</table>';
  document.getElementById('fa3_bs_lohn').innerHTML=lh;
};

// === CHECK FUNCTIONS ===
function fa3chk(id,exp,tol){
  var el=document.getElementById(id);if(!el||!el.value.trim())return-1;
  var v=fa3p(el.value);tol=tol||Math.max(1,Math.abs(exp)*0.01);
  if(!isNaN(v)&&Math.abs(v-exp)<=tol){el.style.border='2px solid var(--g)';el.style.background='rgba(52,199,89,.08)';return 1;}
  el.style.border='2px solid var(--r)';el.style.background='rgba(255,59,48,.08)';return 0;
}
function fa3chkTxt(id,expected){
  var el=document.getElementById(id);if(!el||!el.value.trim())return-1;
  var v=el.value.trim();
  if(v===expected){el.style.border='2px solid var(--g)';el.style.background='rgba(52,199,89,.08)';return 1;}
  el.style.border='2px solid var(--r)';el.style.background='rgba(255,59,48,.08)';return 0;
}

window.fa3CheckBS=function(stufe){
  var d=fa3BS,c=0,t=0,wrong=false;
  if(stufe===1){
    d.gfs.forEach(function(g,i){
      t+=2;// soll+haben+betrag, text is bonus
      var rs=fa3chkTxt('fa3_bs_s'+i,g.soll);if(rs===1)c++;else if(rs===0)wrong=true;
      var rh=fa3chkTxt('fa3_bs_h'+i,g.haben);if(rh===1)c++;else if(rh===0)wrong=true;
      t++;var rv=fa3chk('fa3_bs_v'+i,g.v);if(rv===1)c++;else if(rv===0)wrong=true;
    });
    var res=document.getElementById('fa3_bs_res1');
    if(c===t)res.innerHTML='<div class="hlg">Alle Buchungssätze korrekt! ✓</div>';
    else{res.innerHTML='<div class="hlr">'+c+' von '+t+' Felder korrekt. Falsche Antworten sind rot markiert.</div>';document.getElementById('fa3_bs_sol1btn').style.display='inline-block';}
  }
  if(stufe===2){
    Object.keys(d.sal).forEach(function(k){
      if(!document.getElementById('fa3_tk_'+k+'_sal'))return;
      if(d.sal[k]===0&&!document.getElementById('fa3_tk_'+k+'_sal').value.trim())return;
      t++;var r=fa3chk('fa3_tk_'+k+'_sal',d.sal[k]);if(r===1)c++;else if(r===0)wrong=true;
    });
    var res=document.getElementById('fa3_bs_res2');
    if(c===t)res.innerHTML='<div class="hlg">Alle Salden korrekt! ✓</div>';
    else{res.innerHTML='<div class="hlr">'+c+' von '+t+' Salden korrekt.</div>';document.getElementById('fa3_bs_sol2btn').style.display='inline-block';}
  }
  if(stufe===3){
    // Check totals and ergebnis
    var totalA=0,totalP=0;
    Object.keys(d.sal).forEach(function(k){if(FA3_BS_KTO[k].t==='A')totalA+=d.sal[k];if(FA3_BS_KTO[k].t==='P')totalP+=d.sal[k];});
    totalP+=d.erg;
    t+=4;
    if(fa3chk('fa3_bil_ta',totalA)===1)c++;else wrong=true;
    if(fa3chk('fa3_bil_tp',totalP)===1)c++;else wrong=true;
    if(fa3chk('fa3_bil_erg',d.erg)===1)c++;else wrong=true;
    if(fa3chk('fa3_bil_tek',d.sal['2802']+d.erg)===1)c++;else wrong=true;
    var res=document.getElementById('fa3_bs_res3');
    if(c===t)res.innerHTML='<div class="hlg">Bilanz korrekt! ✓</div>';
    else{res.innerHTML='<div class="hlr">'+c+' von '+t+' Totalwerte korrekt.</div>';document.getElementById('fa3_bs_sol3btn').style.display='inline-block';}
  }
  if(stufe===4){
    t+=3;
    if(fa3chk('fa3_er_ta',d.tA)===1)c++;else wrong=true;
    if(fa3chk('fa3_er_te',d.tE)===1)c++;else wrong=true;
    if(fa3chk('fa3_er_res',d.erg)===1)c++;else wrong=true;
    var res=document.getElementById('fa3_bs_res4');
    if(c===t)res.innerHTML='<div class="hlg">Erfolgsrechnung korrekt! ✓</div>';
    else{res.innerHTML='<div class="hlr">'+c+' von '+t+' Totalwerte korrekt.</div>';document.getElementById('fa3_bs_sol4btn').style.display='inline-block';}
  }
  if(stufe===5){
    var lb=d.lohn.buchungen;
    lb.forEach(function(b,i){
      t+=2;
      var rs=fa3chkTxt('fa3_ls'+i,b.soll);if(rs===1)c++;else if(rs===0)wrong=true;
      var rh=fa3chkTxt('fa3_lh'+i,b.haben);if(rh===1)c++;else if(rh===0)wrong=true;
      t++;if(fa3chk('fa3_lv'+i,b.v)===1)c++;else wrong=true;
    });
    var res=document.getElementById('fa3_bs_res5');
    if(c===t)res.innerHTML='<div class="hlg">Lohnverbuchung korrekt! Lohndurchlaufkonto = 0 ✓</div>';
    else{res.innerHTML='<div class="hlr">'+c+' von '+t+' Felder korrekt.</div>';document.getElementById('fa3_bs_sol5btn').style.display='inline-block';}
  }
};

window.fa3ShowSol=function(stufe){
  var d=fa3BS;
  if(stufe===1){
    var s='<div style="font-size:12px;color:var(--tx2);margin-top:8px;padding:10px;background:var(--s2);border-radius:6px"><strong>Lösung Buchungsjournal:</strong><br>';
    d.gfs.forEach(function(g){s+=g.nr+'. '+g.btext+': <strong>'+g.soll+' / '+g.haben+' CHF '+fa3f(g.v)+'</strong><br>';});
    s+='</div>';document.getElementById('fa3_bs_res1').innerHTML+=s;
  }
  if(stufe===2){
    var s='<div style="font-size:12px;color:var(--tx2);margin-top:8px;padding:10px;background:var(--s2);border-radius:6px"><strong>Lösung Salden:</strong><br>';
    Object.keys(d.sal).forEach(function(k){if(d.sal[k]!==0)s+=k+' '+FA3_BS_KTO[k].n+': <strong>CHF '+fa3f(d.sal[k])+'</strong><br>';});
    s+='</div>';document.getElementById('fa3_bs_res2').innerHTML+=s;
  }
  if(stufe===3){
    var tA=0,tP=0;Object.keys(d.sal).forEach(function(k){if(FA3_BS_KTO[k].t==='A')tA+=d.sal[k];if(FA3_BS_KTO[k].t==='P')tP+=d.sal[k];});tP+=d.erg;
    var s='<div style="font-size:12px;color:var(--tx2);margin-top:8px;padding:10px;background:var(--s2);border-radius:6px"><strong>Lösung Bilanz:</strong><br>';
    Object.keys(d.sal).forEach(function(k){if((FA3_BS_KTO[k].t==='A'||FA3_BS_KTO[k].t==='P')&&d.sal[k]!==0)s+=k+' '+FA3_BS_KTO[k].n+': <strong>CHF '+fa3f(d.sal[k])+'</strong><br>';});
    s+='Monatsergebnis: <strong>CHF '+fa3f(d.erg)+'</strong><br>Total Aktiven: <strong>'+fa3f(tA)+'</strong> = Total Passiven: <strong>'+fa3f(tP)+'</strong></div>';
    document.getElementById('fa3_bs_res3').innerHTML+=s;
  }
  if(stufe===4){
    var s='<div style="font-size:12px;color:var(--tx2);margin-top:8px;padding:10px;background:var(--s2);border-radius:6px"><strong>Lösung ER:</strong><br>';
    Object.keys(d.sal).forEach(function(k){if((FA3_BS_KTO[k].t==='W'||FA3_BS_KTO[k].t==='E')&&d.sal[k]!==0)s+=k+' '+FA3_BS_KTO[k].n+': <strong>CHF '+fa3f(d.sal[k])+'</strong><br>';});
    s+='Total Aufwand: <strong>'+fa3f(d.tA)+'</strong> · Total Ertrag: <strong>'+fa3f(d.tE)+'</strong><br>Ergebnis: <strong>CHF '+fa3f(d.erg)+'</strong> '+(d.erg>=0?'(Gewinn)':'(Verlust)')+'</div>';
    document.getElementById('fa3_bs_res4').innerHTML+=s;
  }
  if(stufe===5){
    var s='<div style="font-size:12px;color:var(--tx2);margin-top:8px;padding:10px;background:var(--s2);border-radius:6px"><strong>Lösung Lohnverbuchung:</strong><br>';
    d.lohn.buchungen.forEach(function(b){s+=b.text+': <strong>'+b.soll+' / '+b.haben+' CHF '+fa3f(b.v)+'</strong><br>';});
    s+='Restzahlung (Bank): <strong>CHF '+fa3f(d.lohn.restzahl)+'</strong></div>';
    document.getElementById('fa3_bs_res5').innerHTML+=s;
  }
};

window.fa3ResetBS=function(stufe){
  var wrap;
  if(stufe===1)wrap=document.getElementById('fa3_bs_journal');
  if(stufe===2)wrap=document.getElementById('fa3_bs_tkonten');
  if(stufe===3)wrap=document.getElementById('fa3_bs_bilanz');
  if(stufe===4)wrap=document.getElementById('fa3_bs_er');
  if(stufe===5)wrap=document.getElementById('fa3_bs_lohn');
  if(wrap)wrap.querySelectorAll('input').forEach(function(e){e.value='';e.style.border='';e.style.background='';});
  var b=document.getElementById('fa3_bs_sol'+stufe+'btn');if(b)b.style.display='none';
  var r=document.getElementById('fa3_bs_res'+stufe);if(r)r.innerHTML='';
};

// ==========================================
// ÜBUNG 6: LOHNVERBUCHUNG (wie PDF-Übungen)
// ==========================================
var fa3LV={};

var FA3_LV_POOL=[
  {type:'basic',title:'Grundprinzip der Lohnverbuchung',
   konten:['10200 Bank','22010 Lohndurchlaufkonto','22020 KK Sozialversicherung','51010 Gehälter Sammelkonto','52010 Soziallasten Sammelkonto'],
   bankAB:{min:80,max:300,step:10},lohnM:{min:50,max:200,step:10},anPct:0.10,agPct:0.12,
   extra:[],
   fragen:[
     {q:'Was bedeutet ein Saldo auf dem Lohndurchlaufkonto nach Verbuchung der Bankzahlung?',a:'Ein Saldo von 0 bedeutet, dass alle Lohnbestandteile korrekt verbucht wurden. Ein Saldo ≠ 0 weist auf einen Buchungsfehler hin.'},
     {q:'Weshalb werden nur die Arbeitgeber-Beiträge als Sozialversicherungsaufwand (52010) gebucht?',a:'Die AN-Beiträge sind bereits im Bruttolohn enthalten — sie werden nur vom Lohn abgezogen und an die Sozialversicherungen weitergeleitet. Es entsteht kein zusätzlicher Aufwand. Die AG-Beiträge hingegen sind eine zusätzliche Belastung für das Unternehmen.'},
     {q:'Weshalb erfolgt das Inkasso der AN-Beiträge über den Arbeitgeber?',a:'Aus Effizienzgründen: Der Arbeitgeber zieht die AN-Beiträge direkt vom Lohn ab und überweist sie zusammen mit den AG-Beiträgen an die Ausgleichskasse. So muss die AHV nicht jeden einzelnen Arbeitnehmer kontaktieren.'},
   ]},
  {type:'quartal',title:'Lohnverbuchung mit Vorauszahlung SV',
   konten:['10200 Bank','22010 Lohndurchlaufkonto','22020 KK Sozialversicherung','51010 Gehälter Sammelkonto','52010 Soziallasten Sammelkonto'],
   bankAB:{min:200,max:500,step:10},lohnM:{min:100,max:300,step:10},anPct:0.10,agPct:0.12,
   extra:['vorauszahlung'],vorazPct:0.18,
   fragen:[
     {q:'Was bedeutet der Saldo auf dem Konto KK Sozialversicherungen nach allen Buchungen?',a:'Der Saldo zeigt die Differenz zwischen den geschuldeten Beiträgen (AN+AG) und der bereits geleisteten Vorauszahlung. Ein Haben-Saldo = wir schulden noch Geld. Ein Soll-Saldo = wir haben zu viel vorausbezahlt (Guthaben).'},
     {q:'Weshalb werden nur die AG-Beiträge als Sozialversicherungsaufwand gebucht?',a:'Die AN-Beiträge sind Teil des Bruttolohns und werden nur umgeleitet (22010→22020). Sie belasten die Erfolgsrechnung nicht zusätzlich. Die AG-Beiträge sind ein echter zusätzlicher Aufwand des Unternehmens (52010→22020).'},
   ]},
  {type:'erweitert',title:'Erweiterte Lohnabrechnung',
   konten:['10200 Bank','11400 Lohnvorschüsse','22010 Lohndurchlaufkonto','22020 KK Sozialversicherung','45070 WA Personalverpflegung','49055 Privatanteil Fahrzeug','51010 Gehälter Sammelkonto','52010 Soziallasten Sammelkonto','53010 Übriger Personalaufwand'],
   bankAB:{min:200,max:500,step:10},lohnM:{min:60,max:120,step:5},anPct:0.142,agPct:0.167,
   extra:['privat','kizu','verpfl','spesen','vorschuss'],
   privatV:{min:150,max:250,step:10},kizuV:{min:200,max:350,step:50},verpflV:{min:250,max:500,step:10},spesenV:{min:100,max:300,step:10},vorschussV:{min:500,max:2000,step:100},
   fragen:[
     {q:'Warum erhöht der Privatanteil Geschäftswagen den Bruttolohn?',a:'Der Privatanteil ist ein geldwerter Vorteil (Naturallohn) und muss auf dem Lohnausweis deklariert werden. Er ist AHV-pflichtig, wird aber beim Nettolohn wieder abgezogen, da kein Geld fliesst.'},
     {q:'Warum sind Kinderzulagen nicht AHV-pflichtig?',a:'Kinderzulagen werden von der Familienausgleichskasse (FAK) finanziert und über den Arbeitgeber ausbezahlt. Sie sind kein Lohnbestandteil im engeren Sinn und daher nicht AHV-pflichtig. Deshalb Basis AN-Beiträge = Bruttolohn minus KIZU.'},
     {q:'Über welches Konto wird der Verpflegungsabzug verbucht?',a:'45070 Warenaufwand Personalverpflegung (Haben). Der Abzug reduziert den Warenaufwand, weil das Personal auf Kosten des Betriebs isst — der Betrieb bekommt quasi einen Teil zurück.'},
   ]},
];

// Name pool for employees
var FA3_LV_NAMES=['Anna Müller','Marco Rossi','Lena Fischer','Thomas Weber','Sara Brunetti','Jan Kowalski','Elena Popov','David Schmid','Julia Meier','Fabio Costa'];

window.fa3GenLV=function(){
  var tpl=FA3_LV_POOL[Math.floor(Math.random()*FA3_LV_POOL.length)];
  var name=FA3_LV_NAMES[Math.floor(Math.random()*FA3_LV_NAMES.length)];
  var bankAB=fa3r(tpl.bankAB.min,tpl.bankAB.max,tpl.bankAB.step);
  var lohnBrutto=fa3r(tpl.lohnM.min,tpl.lohnM.max,tpl.lohnM.step);

  // Build buchungen and info
  var buchungen=[];
  var infoLines=[];
  var privat=0,kizu=0,verpfl=0,spesen=0,vorschuss=0,voraz=0;
  var anBasis=lohnBrutto;

  if(tpl.extra.indexOf('vorauszahlung')>=0){
    voraz=Math.round(lohnBrutto*tpl.vorazPct/10)*10;
    buchungen.push({label:'Vorauszahlung Sozialversicherung',soll:'22020',haben:'10200',v:voraz});
    infoLines.push('Vorauszahlung an die Sozialversicherungen: CHF '+fa3f(voraz));
  }
  if(tpl.extra.indexOf('privat')>=0){
    privat=fa3r(tpl.privatV.min,tpl.privatV.max,tpl.privatV.step);
    infoLines.push('Privatanteil Geschäftsauto: CHF '+fa3f(privat));
    anBasis=lohnBrutto+privat;
  }
  if(tpl.extra.indexOf('kizu')>=0){
    kizu=fa3r(tpl.kizuV.min,tpl.kizuV.max,tpl.kizuV.step);
    infoLines.push('Kinderzulagen: CHF '+fa3f(kizu)+' (nicht AHV-pflichtig)');
    // anBasis bleibt ohne kizu
  }

  var anBeitr=Math.round(anBasis*tpl.anPct);
  var agBeitr=Math.round(anBasis*tpl.agPct);

  if(tpl.extra.indexOf('verpfl')>=0){verpfl=fa3r(tpl.verpflV.min,tpl.verpflV.max,tpl.verpflV.step);infoLines.push('Verpflegungsabzug: CHF '+fa3f(verpfl));}
  if(tpl.extra.indexOf('spesen')>=0){spesen=fa3r(tpl.spesenV.min,tpl.spesenV.max,tpl.spesenV.step);infoLines.push('Spesenentschädigung (effektiv): CHF '+fa3f(spesen));}
  if(tpl.extra.indexOf('vorschuss')>=0){vorschuss=fa3r(tpl.vorschussV.min,tpl.vorschussV.max,tpl.vorschussV.step);infoLines.push('Lohnvorschuss (bereits ausbezahlt): CHF '+fa3f(vorschuss));}

  // Buchungen aufbauen
  buchungen.push({label:'Monatslohn Brutto',soll:'51010',haben:'22010',v:lohnBrutto});
  if(privat>0)buchungen.push({label:'Privatanteil Geschäftsauto',soll:'51010',haben:'49055',v:privat});
  if(kizu>0)buchungen.push({label:'Kinderzulagen',soll:'22020',haben:'22010',v:kizu});
  buchungen.push({label:'Arbeitnehmer-Beiträge',soll:'22010',haben:'22020',v:anBeitr});
  buchungen.push({label:'Arbeitgeber-Beiträge',soll:'52010',haben:'22020',v:agBeitr});
  if(verpfl>0)buchungen.push({label:'Verpflegungsabzug',soll:'22010',haben:'45070',v:verpfl});
  if(spesen>0)buchungen.push({label:'Spesenentschädigung',soll:'53010',haben:'22010',v:spesen});
  if(vorschuss>0)buchungen.push({label:'Lohnvorschuss verrechnen',soll:'22010',haben:'11400',v:vorschuss});

  // Calc netto/restzahlung via Durchlaufkonto
  var dlHaben=lohnBrutto+(kizu>0?kizu:0)+(spesen>0?spesen:0);
  var dlSoll=anBeitr+(verpfl>0?verpfl:0)+(vorschuss>0?vorschuss:0);
  var restzahl=dlHaben-dlSoll;
  buchungen.push({label:'Lohnzahlung',soll:'22010',haben:'10200',v:restzahl});

  // Calc Hauptbuchkonten salden
  var hbk={'10200':bankAB,'22010':0,'22020':0,'51010':0,'52010':0};
  if(tpl.extra.indexOf('vorschuss')>=0)hbk['11400']=vorschuss;
  if(tpl.extra.indexOf('verpfl')>=0)hbk['45070']=0;
  if(tpl.extra.indexOf('privat')>=0)hbk['49055']=0;
  if(tpl.extra.indexOf('spesen')>=0)hbk['53010']=0;
  // Process buchungen
  var hbkBuch={};Object.keys(hbk).forEach(function(k){hbkBuch[k]=[];});
  buchungen.forEach(function(b){
    if(!hbkBuch[b.soll])hbkBuch[b.soll]=[];
    if(!hbkBuch[b.haben])hbkBuch[b.haben]=[];
    hbkBuch[b.soll].push({side:'s',v:b.v,label:b.label});
    hbkBuch[b.haben].push({side:'h',v:b.v,label:b.label});
  });
  // Calc final salden (simplified: A/W increase on S, P/E increase on H)
  var kTyp={'10200':'A','11400':'A','22010':'P','22020':'P','45070':'W','49055':'W','51010':'W','52010':'W','53010':'W'};
  var hbkSal={};
  Object.keys(hbk).forEach(function(k){
    var ab=hbk[k],sSum=0,hSum=0;
    if(hbkBuch[k])hbkBuch[k].forEach(function(e){if(e.side==='s')sSum+=e.v;else hSum+=e.v;});
    var t=kTyp[k];
    if(t==='A'||t==='W')hbkSal[k]=ab+sSum-hSum;
    else hbkSal[k]=ab+hSum-sSum; // P/E
  });

  fa3LV={tpl:tpl,name:name,bankAB:bankAB,lohnBrutto:lohnBrutto,privat:privat,kizu:kizu,anBeitr:anBeitr,agBeitr:agBeitr,verpfl:verpfl,spesen:spesen,vorschuss:vorschuss,voraz:voraz,restzahl:restzahl,buchungen:buchungen,hbk:hbk,hbkBuch:hbkBuch,hbkSal:hbkSal};

  [1,2,3].forEach(function(i){var b=document.getElementById('fa3_lv_sol'+i+'btn');if(b)b.style.display='none';var r=document.getElementById('fa3_lv_res'+i);if(r)r.innerHTML='';});

  // RENDER Aufgabestellung
  document.getElementById('fa3_lv_aufgabe').innerHTML='<strong>'+tpl.title+'</strong><br>Verwenden Sie für Buchungen die nachstehenden Konten. Die Mehrwertsteuer wird vernachlässigt.';

  var kh='<div style="font-size:12px;margin-bottom:8px"><table style="border-collapse:collapse"><tr style="background:var(--s2)"><th style="padding:4px 10px;border:1px solid var(--bd)">Kontonummer</th><th style="padding:4px 10px;border:1px solid var(--bd)">Kontobezeichnung</th></tr>';
  tpl.konten.forEach(function(k){var p=k.split(' ');kh+='<tr><td style="padding:4px 10px;border:1px solid var(--bd)">'+p[0]+'</td><td style="padding:4px 10px;border:1px solid var(--bd)">'+p.slice(1).join(' ')+'</td></tr>';});
  kh+='</table></div>';
  document.getElementById('fa3_lv_konten').innerHTML=kh;

  var ih='Es liegen folgende Informationen vor (Mitarbeiter:in <strong>'+name+'</strong>):<br>';
  ih+='Monatslohn brutto: <strong>CHF '+fa3f(lohnBrutto)+'</strong><br>';
  infoLines.forEach(function(l){ih+=l+'<br>';});
  ih+='Arbeitnehmer-Beiträge: <strong>CHF '+fa3f(anBeitr)+'</strong> · Arbeitgeber-Beiträge: <strong>CHF '+fa3f(agBeitr)+'</strong>';
  document.getElementById('fa3_lv_info').innerHTML=ih;

  // RENDER Journal (komplett leer)
  var td='padding:5px;border:1px solid var(--bd);font-size:12px;vertical-align:top';
  var jh='<table style="width:100%;border-collapse:collapse"><tr style="background:var(--s2)"><th style="'+td+'">Buchungstext</th><th style="'+td+';width:65px">Soll</th><th style="'+td+';width:65px">Haben</th><th style="'+td+';width:80px">Betrag</th></tr>';
  for(var ji=0;ji<buchungen.length+2;ji++){
    jh+='<tr><td style="'+td+'"><input type="text" id="fa3_lvjt'+ji+'" style="width:100%;padding:3px;font-size:11px;box-sizing:border-box" placeholder=""></td>';
    jh+='<td style="'+td+'"><input type="text" id="fa3_lvjs'+ji+'" style="width:50px;text-align:center;padding:3px;font-size:11px" placeholder=""></td>';
    jh+='<td style="'+td+'"><input type="text" id="fa3_lvjh'+ji+'" style="width:50px;text-align:center;padding:3px;font-size:11px" placeholder=""></td>';
    jh+='<td style="'+td+'"><input type="text" id="fa3_lvjv'+ji+'" style="width:65px;text-align:right;padding:3px;font-size:11px" placeholder=""></td></tr>';
  }
  jh+='</table>';
  document.getElementById('fa3_lv_journal').innerHTML=jh;

  // RENDER Hauptbuchkonten (Tabelle wie PDF: Zeilen für jeden Buchungsfall)
  var ktoOrder=Object.keys(hbk);
  var maxRows=buchungen.length+2; // AB + buchungen + Salden
  var hh='<div style="overflow-x:auto"><table style="border-collapse:collapse;font-size:11px;width:100%"><tr style="background:var(--s2)">';
  hh+='<th style="'+td+';width:140px"></th>';
  ktoOrder.forEach(function(k){hh+='<th style="'+td+';text-align:center;min-width:65px">'+k+'</th>';});
  hh+='</tr>';
  // Anfangsbestände row
  hh+='<tr><td style="'+td+';font-weight:600">Anfangsbestände</td>';
  ktoOrder.forEach(function(k){
    if(hbk[k]!==0)hh+='<td style="'+td+';text-align:right">'+fa3f(hbk[k])+'</td>';
    else hh+='<td style="'+td+';text-align:right;color:var(--tx3)">0</td>';
  });
  hh+='</tr>';
  // Buchungszeilen (leer)
  for(var bi=0;bi<buchungen.length+1;bi++){
    hh+='<tr><td style="'+td+'"><input type="text" id="fa3_lvhn'+bi+'" style="width:100%;padding:2px;font-size:10px;box-sizing:border-box" placeholder=""></td>';
    ktoOrder.forEach(function(k,ki){
      hh+='<td style="'+td+'"><input type="text" id="fa3_lvhv'+bi+'_'+ki+'" style="width:50px;text-align:right;padding:2px;font-size:10px" placeholder=""></td>';
    });
    hh+='</tr>';
  }
  // Salden row
  hh+='<tr style="background:var(--s2)"><td style="'+td+';font-weight:700">Salden</td>';
  ktoOrder.forEach(function(k,ki){
    hh+='<td style="'+td+'"><input type="text" id="fa3_lvhsal'+ki+'" style="width:50px;text-align:right;padding:2px;font-size:11px;font-weight:700" placeholder=""></td>';
  });
  hh+='</tr></table></div>';
  document.getElementById('fa3_lv_hbk').innerHTML=hh;

  // RENDER Verständnisfragen
  var fh='';
  tpl.fragen.forEach(function(f,i){
    fh+='<div style="margin-bottom:12px"><p style="font-size:13px;margin-bottom:6px"><strong>'+(i+1)+'.</strong> '+f.q+'</p>';
    fh+='<textarea id="fa3_lvf'+i+'" style="width:100%;min-height:60px;padding:8px;font-size:12px;border:1px solid var(--bd);border-radius:6px;box-sizing:border-box;resize:vertical" placeholder="Ihre Antwort…"></textarea></div>';
  });
  document.getElementById('fa3_lv_fragen').innerHTML=fh;
};

window.fa3CheckLV=function(teil){
  var d=fa3LV,c=0,t=0;
  if(teil===1){
    d.buchungen.forEach(function(b,i){
      t+=2;
      var s=document.getElementById('fa3_lvjs'+i),h=document.getElementById('fa3_lvjh'+i);
      if(s){if(s.value.trim()===b.soll){s.style.border='2px solid var(--g)';s.style.background='rgba(52,199,89,.08)';c++;}else{s.style.border='2px solid var(--r)';s.style.background='rgba(255,59,48,.08)';}}
      if(h){if(h.value.trim()===b.haben){h.style.border='2px solid var(--g)';h.style.background='rgba(52,199,89,.08)';c++;}else{h.style.border='2px solid var(--r)';h.style.background='rgba(255,59,48,.08)';}}
      t++;if(fa3chk('fa3_lvjv'+i,b.v)===1)c++;
    });
    var r=document.getElementById('fa3_lv_res1');
    if(c===t)r.innerHTML='<div class="hlg">Alle Buchungssätze korrekt! ✓</div>';
    else{r.innerHTML='<div class="hlr">'+c+' von '+t+' Felder korrekt.</div>';document.getElementById('fa3_lv_sol1btn').style.display='inline-block';}
  }
  if(teil===2){
    var ktoOrder=Object.keys(d.hbk);
    ktoOrder.forEach(function(k,ki){
      t++;if(fa3chk('fa3_lvhsal'+ki,d.hbkSal[k])===1)c++;
    });
    var r=document.getElementById('fa3_lv_res2');
    if(c===t)r.innerHTML='<div class="hlg">Alle Salden korrekt! ✓</div>';
    else{r.innerHTML='<div class="hlr">'+c+' von '+t+' Salden korrekt.</div>';document.getElementById('fa3_lv_sol2btn').style.display='inline-block';}
  }
  if(teil===3){
    document.getElementById('fa3_lv_sol3btn').style.display='inline-block';
    document.getElementById('fa3_lv_res3').innerHTML='<div class="hla">Vergleiche deine Antworten mit der Lösung.</div>';
  }
};

window.fa3ShowLVSol=function(teil){
  var d=fa3LV;
  if(teil===1){
    var s='<div style="font-size:12px;color:var(--tx2);margin-top:8px;padding:10px;background:var(--s2);border-radius:6px"><strong>Lösung Buchungssätze:</strong><br>';
    d.buchungen.forEach(function(b){s+=b.label+': <strong>'+b.soll+' / '+b.haben+' CHF '+fa3f(b.v)+'</strong><br>';});
    s+='</div>';document.getElementById('fa3_lv_res1').innerHTML+=s;
  }
  if(teil===2){
    var ktoOrder=Object.keys(d.hbk);
    var s='<div style="font-size:12px;color:var(--tx2);margin-top:8px;padding:10px;background:var(--s2);border-radius:6px"><strong>Lösung Salden:</strong><br>';
    ktoOrder.forEach(function(k){s+=k+': <strong>CHF '+fa3f(d.hbkSal[k])+'</strong><br>';});
    s+='Lohndurchlaufkonto Saldo: <strong>'+fa3f(d.hbkSal['22010'])+'</strong> '+(d.hbkSal['22010']===0?'✓ (ausgeglichen)':'⚠ Fehler!')+'</div>';
    document.getElementById('fa3_lv_res2').innerHTML+=s;
  }
  if(teil===3){
    var s='<div style="font-size:12px;color:var(--tx2);margin-top:8px;padding:10px;background:var(--s2);border-radius:6px"><strong>Musterantworten:</strong><br>';
    d.tpl.fragen.forEach(function(f,i){s+='<strong>'+(i+1)+'.</strong> '+f.a+'<br><br>';});
    s+='</div>';document.getElementById('fa3_lv_res3').innerHTML+=s;
  }
};

window.fa3ResetLV=function(teil){
  var wrap;
  if(teil===1)wrap=document.getElementById('fa3_lv_journal');
  if(teil===2)wrap=document.getElementById('fa3_lv_hbk');
  if(wrap)wrap.querySelectorAll('input').forEach(function(e){e.value='';e.style.border='';e.style.background='';});
  if(teil===3)document.querySelectorAll('[id^="fa3_lvf"]').forEach(function(e){e.value='';});
  var b=document.getElementById('fa3_lv_sol'+teil+'btn');if(b)b.style.display='none';
  var r=document.getElementById('fa3_lv_res'+teil);if(r)r.innerHTML='';
};

})();
