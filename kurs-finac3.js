(function() {

// ==========================================
// 1. KURS-KONFIGURATION
// ==========================================
const courseConfig = {
  id: 'fa3',
  name: 'Financial Accounting 3',
  pages: [
    'fa3', 'fa3_kap1', 'fa3_kap2', 'fa3_kap3', 'fa3_kap4', 'fa3_kap5', 'fa3_kap6', 'fa3_kap7', 'fa3_kap8',
    'fa3_ueb', 'fa3_mind', 'fa3_kart', 'fa3_quiz', 'fa3_glossar'
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
<div style="font-size:20px;font-weight:700;color:var(--am);margin-bottom:6px">4</div>
<div class="ct2">Übungen</div><div class="cd">Interaktiv mit Korrektur</div></div>
<div class="c ck" onclick="go('fa3_mind')" style="text-align:center;padding:24px 16px">
<div style="font-size:20px;font-weight:700;color:var(--pr);margin-bottom:6px">2</div>
<div class="ct2">Mindmaps</div><div class="cd">Visuelle Übersichten</div></div>
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
<div class="sec" id="fa3_kap4"><h1>Warenaufwand & Renditen</h1><p class="sub">Bestandesänderung, Inventar & Branchenvergleich</p>
<div class="hl">Der Warenaufwand ergibt sich nicht nur aus dem Einkauf — die Bestandesänderung des Inventars muss berücksichtigt werden.</div>
<div class="hlbl"><strong>Lernziele:</strong><br>• Einfluss der Bestandesänderung auf den Warenaufwand verstehen<br>• Warenaufwand je Sparte berechnen und mit Branchenkennzahlen vergleichen</div>

<div style="display:flex;gap:8px;margin:12px 0 4px">
<button style="font-size:11px;padding:4px 10px" onclick="this.parentElement.nextElementSibling.querySelectorAll('.tl-item').forEach(i=>i.classList.add('open'))">Alle aufklappen</button>
<button style="font-size:11px;padding:4px 10px" onclick="this.parentElement.nextElementSibling.querySelectorAll('.tl-item').forEach(i=>i.classList.remove('open'))">Alle schliessen</button>
</div>
<div class="tl">

<div class="tl-item"><div class="tl-num tl-num-b">1</div>
<div class="tl-head" onclick="this.parentElement.classList.toggle('open')">
<div><div class="tl-title">Formel Warenaufwand</div>
<div class="tl-merksatz">«Warenaufwand = Wareneinkauf ± Bestandesänderung»</div></div>
<div class="tl-arrow">&#9654;</div></div>
<div class="tl-detail">
<div class="tl-body"><strong>Warenaufwand = Wareneinkauf + Bestandesabnahme − Bestandeszunahme</strong><br><br>
<strong>Bestandesabnahme</strong> = Lager wurde abgebaut → Aufwand steigt (wir haben mehr verbraucht als eingekauft)<br>
<strong>Bestandeszunahme</strong> = Lager wurde aufgebaut → Aufwand sinkt (wir haben mehr eingekauft als verbraucht)</div>
<div class="tl-sub">
<div class="c cr"><div class="ct2">Buchung Bestandesabnahme</div><div class="cd">Warenaufwand / Warenbestand<br>(Aufwand nimmt zu, Bestand nimmt ab)</div></div>
<div class="c cg"><div class="ct2">Buchung Bestandeszunahme</div><div class="cd">Warenbestand / Warenaufwand<br>(Bestand nimmt zu, Aufwand nimmt ab)</div></div>
</div>
<div class="merksatz">Merke: Bestandesabnahme erhöht den Warenaufwand, Bestandeszunahme reduziert ihn.</div>
</div></div>

<div class="tl-item"><div class="tl-num tl-num-g">2</div>
<div class="tl-head" onclick="this.parentElement.classList.toggle('open')">
<div><div class="tl-title">Warenrenditen & Branchenkennzahlen</div>
<div class="tl-merksatz">«Warenaufwand in % des Warenertrags = die wichtigste Sparten-Kennzahl»</div></div>
<div class="tl-arrow">&#9654;</div></div>
<div class="tl-detail">
<div class="tl-body"><strong>Warenkosten-% = Warenaufwand / Warenertrag × 100</strong><br><br>Branchenkennzahlen (Richtwerte Gastrosuisse):</div>
<div class="tl-sub">
<div class="c ca"><div class="ct2">Wein</div><div class="cd">Richtwert: ca. 40.3%</div></div>
<div class="c cbl"><div class="ct2">Bier</div><div class="cd">Richtwert: ca. 31.5%</div></div>
<div class="c cp"><div class="ct2">Spirituosen</div><div class="cd">Richtwert: ca. 20.3%</div></div>
<div class="c cg"><div class="ct2">Mineral</div><div class="cd">Richtwert: ca. 21.7%</div></div>
<div class="c cm"><div class="ct2">Kaffee</div><div class="cd">Richtwert: ca. 7.7%</div></div>
<div class="c cr"><div class="ct2">Küche</div><div class="cd">Richtwert: ca. 30.9%</div></div>
</div>
<div class="merksatz">Merke: Liegt dein Warenaufwand über dem Branchenwert, verbrauchst du zu viel — liegt er darunter, bist du effizient (oder die Qualität leidet).</div>
</div></div>

</div>
</div>

<!-- ===================== KAPITEL 5: PERSONAL ===================== -->
<div class="sec" id="fa3_kap5"><h1>Personalaufwand</h1><p class="sub">Dreisäulenprinzip, Lohnverbuchung & Sozialversicherungen</p>
<div class="hl">Die Lohnzahlung ist nicht gleich der Personalaufwand — Sozialversicherungsbeiträge des Arbeitgebers kommen noch dazu.</div>
<div class="hlbl"><strong>Lernziele:</strong><br>• Buchungstatsachen der Lohnverbuchung kennen und erklären<br>• Löhne inkl. Sozialabgaben, Rückstellungen und übrige Aufwände verbuchen</div>

<div style="display:flex;gap:8px;margin:12px 0 4px">
<button style="font-size:11px;padding:4px 10px" onclick="this.parentElement.nextElementSibling.querySelectorAll('.tl-item').forEach(i=>i.classList.add('open'))">Alle aufklappen</button>
<button style="font-size:11px;padding:4px 10px" onclick="this.parentElement.nextElementSibling.querySelectorAll('.tl-item').forEach(i=>i.classList.remove('open'))">Alle schliessen</button>
</div>
<div class="tl">

<div class="tl-item"><div class="tl-num tl-num-b">1</div>
<div class="tl-head" onclick="this.parentElement.classList.toggle('open')">
<div><div class="tl-title">Dreisäulenprinzip</div>
<div class="tl-merksatz">«1. Säule = Existenz, 2. Säule = Lebensstandard, 3. Säule = Ergänzung»</div></div>
<div class="tl-arrow">&#9654;</div></div>
<div class="tl-detail">
<div class="tl-sub">
<div class="c ca"><div class="ct2">1. Säule — Staatliche Vorsorge</div><div class="cd"><strong>Ziel: Existenzsicherung</strong><br>AHV (Alters- und Hinterlassenenversicherung)<br>IV (Invalidenversicherung)<br>EO (Erwerbsersatzordnung)</div></div>
<div class="c cg"><div class="ct2">2. Säule — Berufliche Vorsorge</div><div class="cd"><strong>Ziel: Sicherung gewohnte Lebenshaltung</strong><br>BVG (Pensionskasse)<br>UVG: Berufsunfall (BU) + Nichtberufsunfall (NBU)</div></div>
<div class="c cbl"><div class="ct2">3. Säule — Private Vorsorge</div><div class="cd"><strong>Ziel: Individuelle Ergänzung</strong><br>3a: Mit Steuervorteil<br>3b: Ohne Steuervorteil</div></div>
</div>
<div class="merksatz">Merke: Die 3 Säulen schützen bei Alter, Invalidität, Tod, Unfall, Krankheit, Militärdienst und Mutterschaft.</div>
</div></div>

<div class="tl-item"><div class="tl-num tl-num-g">2</div>
<div class="tl-head" onclick="this.parentElement.classList.toggle('open')">
<div><div class="tl-title">Lohnkomponenten & Kontenklasse 5</div>
<div class="tl-merksatz">«Bruttolohn − AN-Beiträge = Nettolohn + AG-Beiträge = Gesamtpersonalaufwand»</div></div>
<div class="tl-arrow">&#9654;</div></div>
<div class="tl-detail">
<div class="tl-body"><strong>Bruttolohn</strong> = im Arbeitsvertrag vereinbarter Lohn<br><strong>Nettolohn</strong> = Bruttolohn − Arbeitnehmerbeiträge (wird ausbezahlt)<br><strong>Gesamtpersonalaufwand</strong> = Bruttolohn + AG-Beiträge + übriger Personalaufwand</div>
<div class="tl-sub">
<div class="c ca"><div class="ct2">KG 510 — Lohnaufwand</div><div class="cd">Nettolohn + AN-Beiträge = zeigt den <strong>Bruttolohn</strong></div></div>
<div class="c cg"><div class="ct2">KG 520 — Sozialversicherungsaufwand</div><div class="cd">Arbeitgeberbeiträge (inkl. Verwaltungskosten)</div></div>
<div class="c cbl"><div class="ct2">KG 530 — Übriger Personalaufwand</div><div class="cd">Stelleninserate, Personalanlässe, Weiterbildung, Spesen, Geschenke</div></div>
</div>
<div class="merksatz">Merke: AG-Beiträge separat auf Konto 520, damit auf Konto 510 die Bruttolohnsumme steht — wichtig für Prämienberechnungen!</div>
</div></div>

<div class="tl-item"><div class="tl-num tl-num-a">3</div>
<div class="tl-head" onclick="this.parentElement.classList.toggle('open')">
<div><div class="tl-title">Standardbuchungen Personal</div>
<div class="tl-merksatz">«Bruttolohn, AN-Beiträge, AG-Beiträge, Akonto, Lohnvorschuss»</div></div>
<div class="tl-arrow">&#9654;</div></div>
<div class="tl-detail">
<div class="tl-body">
<table style="width:100%;border-collapse:collapse;font-size:12px;margin:8px 0">
<tr style="background:var(--s2)"><th style="padding:6px;border:1px solid var(--bd)">Vorgang</th><th style="padding:6px;border:1px solid var(--bd)">Soll</th><th style="padding:6px;border:1px solid var(--bd)">Haben</th></tr>
<tr><td style="padding:6px;border:1px solid var(--bd)">Bruttolohn</td><td style="padding:6px;border:1px solid var(--bd)">Lohnaufwand</td><td style="padding:6px;border:1px solid var(--bd)">Lohndurchlaufkonto</td></tr>
<tr><td style="padding:6px;border:1px solid var(--bd)">AN-Beiträge (Abzug)</td><td style="padding:6px;border:1px solid var(--bd)">Lohndurchlaufkonto</td><td style="padding:6px;border:1px solid var(--bd)">Verb. Sozialversicherungen</td></tr>
<tr><td style="padding:6px;border:1px solid var(--bd)">Kinder-/Familienzulagen</td><td style="padding:6px;border:1px solid var(--bd)">Verb. Sozialversicherungen</td><td style="padding:6px;border:1px solid var(--bd)">Lohndurchlaufkonto</td></tr>
<tr><td style="padding:6px;border:1px solid var(--bd)">AG-Beiträge</td><td style="padding:6px;border:1px solid var(--bd)">Sozialvers.aufwand</td><td style="padding:6px;border:1px solid var(--bd)">Verb. Sozialversicherungen</td></tr>
<tr><td style="padding:6px;border:1px solid var(--bd)">Akonto-Rechnung SV</td><td style="padding:6px;border:1px solid var(--bd)">Verb. Sozialversicherungen</td><td style="padding:6px;border:1px solid var(--bd)">Verb. aus LL</td></tr>
<tr><td style="padding:6px;border:1px solid var(--bd)">Zahlung Akonto SV</td><td style="padding:6px;border:1px solid var(--bd)">Verb. aus LL</td><td style="padding:6px;border:1px solid var(--bd)">Bank</td></tr>
<tr><td style="padding:6px;border:1px solid var(--bd)">EO-Entschädigung</td><td style="padding:6px;border:1px solid var(--bd)">Bank</td><td style="padding:6px;border:1px solid var(--bd)">Lohnaufwand</td></tr>
<tr><td style="padding:6px;border:1px solid var(--bd)">Lohnvorschuss</td><td style="padding:6px;border:1px solid var(--bd)">Lohnvorschuss (Aktiv)</td><td style="padding:6px;border:1px solid var(--bd)">Bank</td></tr>
</table>
</div>
<div class="merksatz">Merke: Spesen sind nicht sozialversicherungspflichtig — sie werden über «Übriger Personalaufwand» gebucht.</div>
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
  ['fa3_ueb_sel','fa3_ueb1','fa3_ueb2','fa3_ueb3','fa3_ueb4'].forEach(function(id){
    var el=document.getElementById(id); if(el) el.style.display='none';
  });
  if(n===0) { document.getElementById('fa3_ueb_sel').style.display='block'; }
  else { 
    document.getElementById('fa3_ueb'+n).style.display='block';
    if(n===1) fa3GenER(); // generate random numbers
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

})();
