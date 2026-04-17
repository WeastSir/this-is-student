// ===== KURS: FÜHRUNG & LEADERSHIP =====
// Auto-generated module for This Is Student
(function() {

const courseConfig = {
  id: 'fl',
  name: 'Führung & Leadership',
  pages: ['fl','fl_kap1','fl_kap2','fl_kap3','fl_kap4','fl_kap5','fl_kap6','fl_kap7','fl_kap8','fl_kap9','fl_kap10','fl_kap11','fl_ueb','fl_mind','fl_kart','fl_quiz','fl_glossar'],
  subNav: [
    {s:'fl',l:'Übersicht'},
    {s:'fl_kap1',l:'Definition'},
    {s:'fl_kap2',l:'Rollenwechsel'},
    {s:'fl_kap3',l:'Führungsprozess'},
    {s:'fl_kap4',l:'Insel-Modell'},
    {s:'fl_kap5',l:'Führungsstil'},
    {s:'fl_kap6',l:'Toolbox'},
    {s:'fl_kap7',l:'Motivation'},
    {s:'fl_kap8',l:'Topend-Hotels'},
    {s:'fl_kap9',l:'Konflikte'},
    {s:'fl_kap10',l:'Krise'},
    {s:'fl_kap11',l:'Tipps & Killer'},
    {s:'fl_ueb',l:'Übungen'},
    {s:'fl_mind',l:'Zusammenfassung'},
    {s:'fl_kart',l:'Karten'},
    {s:'fl_quiz',l:'Quiz'},
    {s:'fl_glossar',l:'Glossar'}
  ],
  navButton: '<button class="nl nl-main" data-s="fl" onclick="go(\'fl\')" style="display:none">Führung & Leadership</button>'
};

const courseHTML = `

<!-- FL HOME / ÜBERSICHT -->
<div class="sec" id="fl">
<div style="border-radius:24px;padding:36px 32px;margin-bottom:32px;background:linear-gradient(135deg,rgba(139,44,90,.12),rgba(232,168,56,.08));border:1px solid var(--bd);position:relative;overflow:hidden">
<div style="position:absolute;top:-40px;right:-40px;width:180px;height:180px;border-radius:50%;background:linear-gradient(135deg,rgba(139,44,90,.15),rgba(232,168,56,.1))"></div>
<div style="position:relative;z-index:1">
<div style="font-size:12px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#e89a38;margin-bottom:8px">Semester 5 · BWL · Königsdisziplin</div>
<h1 style="font-size:32px;letter-spacing:-.6px;margin-bottom:8px">Führung &amp; Leadership</h1>
<p style="font-size:15px;color:var(--tx2);margin-bottom:0">Vom Teamplayer zur Führungsperson · Dozent: Marc Aeberhard · SHL Schweizerische Hotelfachschule Luzern</p>
</div>
</div>

<!-- FALLBEISPIEL INTRO -->
<div style="background:linear-gradient(135deg,rgba(56,232,156,.08),rgba(232,168,56,.05));border:2px solid rgba(56,232,156,.3);padding:28px 32px;margin-bottom:32px;border-radius:16px">
<div style="font-size:11px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:var(--g);margin-bottom:10px">🏨 Durchgängiges Fallbeispiel</div>
<h2 style="font-family:var(--se);font-size:24px;margin-bottom:14px;letter-spacing:-.3px">Hotel Alpenblick — Engelberg</h2>
<p style="font-size:14px;color:var(--tx2);line-height:1.7;margin-bottom:12px">Wir begleiten durch dieses Kompendium das fiktive <strong>Hotel Alpenblick</strong> — ein 4-Sterne-Boutique-Hotel mit 42 Zimmern in Engelberg. <strong>Sara Meier (32)</strong> wurde soeben zur General Managerin befördert. Zuvor war sie 5 Jahre F&amp;B-Managerin im gleichen Betrieb. Ihr Team besteht aus 38 Mitarbeitenden aus 12 Nationen. Die Besitzerfamilie Keller erwartet eine Sanierung nach zwei schwierigen Jahren.</p>
<p style="font-size:14px;color:var(--tx2);line-height:1.7;margin-bottom:14px"><strong>Die Herausforderung:</strong> Sara muss nun als Chefin ehemalige Kolleg:innen führen, unpopuläre Entscheide treffen und gleichzeitig das Hotel wirtschaftlich erfolgreich positionieren. In jedem Kapitel sehen wir, wie sie die Konzepte anwendet.</p>
<div style="display:flex;gap:8px;flex-wrap:wrap">
<span style="display:inline-block;padding:4px 12px;border-radius:980px;background:var(--gl);color:var(--g);font-size:11px;font-weight:600">42 Zimmer</span>
<span style="display:inline-block;padding:4px 12px;border-radius:980px;background:var(--gl);color:var(--g);font-size:11px;font-weight:600">38 Mitarbeitende</span>
<span style="display:inline-block;padding:4px 12px;border-radius:980px;background:var(--gl);color:var(--g);font-size:11px;font-weight:600">12 Nationen</span>
<span style="display:inline-block;padding:4px 12px;border-radius:980px;background:var(--gl);color:var(--g);font-size:11px;font-weight:600">Neue GM Sara</span>
<span style="display:inline-block;padding:4px 12px;border-radius:980px;background:var(--gl);color:var(--g);font-size:11px;font-weight:600">Sanierung nötig</span>
<span style="display:inline-block;padding:4px 12px;border-radius:980px;background:var(--gl);color:var(--g);font-size:11px;font-weight:600">Familiengeführt</span>
</div>
</div>

<div style="font-size:13px;font-weight:600;letter-spacing:1px;text-transform:uppercase;color:var(--tx3);margin-bottom:14px">Theorie · 11 Kapitel</div>
<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:12px;margin-bottom:36px">
<div class="c ck" onclick="go('fl_kap1')" style="padding:20px 22px;display:flex;gap:14px;align-items:flex-start">
<div style="width:32px;height:32px;border-radius:10px;background:rgba(139,44,90,.15);color:#8b2c5a;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0">1</div>
<div><div class="ct2">Definition Führung</div><div class="cd">St. Galler Modell, Theorie X/Y, Angst als Triebfeder</div></div>
</div>
<div class="c ck" onclick="go('fl_kap2')" style="padding:20px 22px;display:flex;gap:14px;align-items:flex-start">
<div style="width:32px;height:32px;border-radius:10px;background:rgba(232,168,56,.15);color:#e89a38;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0">2</div>
<div><div class="ct2">Rollenwechsel</div><div class="cd">TZI-Modell, 9 Rollen, Peter-Prinzip</div></div>
</div>
<div class="c ck" onclick="go('fl_kap3')" style="padding:20px 22px;display:flex;gap:14px;align-items:flex-start">
<div style="width:32px;height:32px;border-radius:10px;background:rgba(139,44,90,.15);color:#8b2c5a;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0">3</div>
<div><div class="ct2">Führungsprozess</div><div class="cd">Kompetenzen, Autorität, Wollen/Können/Dürfen</div></div>
</div>
<div class="c ck" onclick="go('fl_kap4')" style="padding:20px 22px;display:flex;gap:14px;align-items:flex-start">
<div style="width:32px;height:32px;border-radius:10px;background:rgba(232,168,56,.15);color:#e89a38;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0">4</div>
<div><div class="ct2">Insel-Modell</div><div class="cd">Birkenbihl, Empathie, Verstehen ≠ Akzeptieren</div></div>
</div>
<div class="c ck" onclick="go('fl_kap5')" style="padding:20px 22px;display:flex;gap:14px;align-items:flex-start">
<div style="width:32px;height:32px;border-radius:10px;background:rgba(139,44,90,.15);color:#8b2c5a;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0">5</div>
<div><div class="ct2">Führungsstil</div><div class="cd">GRID-Modell (Blake/Mouton), MbO, SMART-Ziele</div></div>
</div>
<div class="c ck" onclick="go('fl_kap6')" style="padding:20px 22px;display:flex;gap:14px;align-items:flex-start">
<div style="width:32px;height:32px;border-radius:10px;background:rgba(232,168,56,.15);color:#e89a38;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0">6</div>
<div><div class="ct2">Führungs-Toolbox</div><div class="cd">Delegation, Kommunikation, Feedback, ICH-Botschaften</div></div>
</div>
<div class="c ck" onclick="go('fl_kap7')" style="padding:20px 22px;display:flex;gap:14px;align-items:flex-start">
<div style="width:32px;height:32px;border-radius:10px;background:rgba(139,44,90,.15);color:#8b2c5a;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0">7</div>
<div><div class="ct2">Motivation</div><div class="cd">Maslow, intrinsisch/extrinsisch, Attitude > Aptitude</div></div>
</div>
<div class="c ck" onclick="go('fl_kap8')" style="padding:20px 22px;display:flex;gap:14px;align-items:flex-start">
<div style="width:32px;height:32px;border-radius:10px;background:rgba(232,168,56,.15);color:#e89a38;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0">8</div>
<div><div class="ct2">Topend-Hotels</div><div class="cd">New Luxury, Luxus-Kaskade, "The answer is yes"</div></div>
</div>
<div class="c ck" onclick="go('fl_kap9')" style="padding:20px 22px;display:flex;gap:14px;align-items:flex-start">
<div style="width:32px;height:32px;border-radius:10px;background:rgba(139,44,90,.15);color:#8b2c5a;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0">9</div>
<div><div class="ct2">Konflikte</div><div class="cd">Glasl 9-Stufen, Win/Lose, Mediation, Prävention</div></div>
</div>
<div class="c ck" onclick="go('fl_kap10')" style="padding:20px 22px;display:flex;gap:14px;align-items:flex-start">
<div style="width:32px;height:32px;border-radius:10px;background:rgba(232,168,56,.15);color:#e89a38;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0">10</div>
<div><div class="ct2">Existenzielle Krise</div><div class="cd">Brandfall, Evakuation, Krisenführung</div></div>
</div>
<div class="c ck" onclick="go('fl_kap11')" style="padding:20px 22px;display:flex;gap:14px;align-items:flex-start">
<div style="width:32px;height:32px;border-radius:10px;background:rgba(139,44,90,.15);color:#8b2c5a;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0">11</div>
<div><div class="ct2">Tipps &amp; 7 Führungskiller</div><div class="cd">Kill Enthusiasm, Kill Emotion, Gleichwertigkeit</div></div>
</div>
</div>

<div style="font-size:13px;font-weight:600;letter-spacing:1px;text-transform:uppercase;color:var(--tx3);margin-bottom:14px">Lerntools</div>
<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(155px,1fr));gap:12px">
<div class="c ck" onclick="go('fl_ueb')" style="text-align:center;padding:24px 16px">
<div style="font-size:24px;font-weight:700;background:linear-gradient(135deg,#8b2c5a,#e89a38);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;margin-bottom:6px">6</div>
<div class="ct2">Übungen</div><div class="cd">107 Fälle · Lernziel-orientiert</div>
</div>
<div class="c ck" onclick="go('fl_mind')" style="text-align:center;padding:24px 16px">
<div style="font-size:24px;font-weight:700;background:linear-gradient(135deg,#8b2c5a,#e89a38);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;margin-bottom:6px">4</div>
<div class="ct2">Zusammenfassung</div><div class="cd">Visuelle Übersichten</div>
</div>
<div class="c ck" onclick="go('fl_kart')" style="text-align:center;padding:24px 16px">
<div id="ltFlCards" style="font-size:24px;font-weight:700;background:linear-gradient(135deg,#8b2c5a,#e89a38);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;margin-bottom:6px">77</div>
<div class="ct2">Karteikarten</div><div class="cd">Klicken &amp; repetieren</div>
</div>
<div class="c ck" onclick="go('fl_quiz')" style="text-align:center;padding:24px 16px">
<div id="ltFlQuiz" style="font-size:24px;font-weight:700;background:linear-gradient(135deg,#8b2c5a,#e89a38);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;margin-bottom:6px">77</div>
<div class="ct2">Quiz</div><div class="cd">Mit Lernfortschritt</div>
</div>
<div class="c ck" onclick="go('fl_glossar')" style="text-align:center;padding:24px 16px">
<div style="font-size:24px;font-weight:700;background:linear-gradient(135deg,#8b2c5a,#e89a38);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;margin-bottom:6px">A–Z</div>
<div class="ct2">Glossar</div><div class="cd">Begriffe &amp; Modelle</div>
</div>
</div>
</div>


<!-- KAP 1: DEFINITION FÜHRUNG -->
<div class="sec" id="fl_kap1"><h1>01 · Definition Führung</h1><p class="sub">St. Galler Modell · Theorie X/Y · Menschenbild · Angst als Triebfeder</p>

<div class="hlbl"><strong>LERNZIELE</strong><br>
✓ Den Transformationsprozess vom Teamplayer zur Führungsperson erkennen und gestalten<br>
✓ Persönliche Tendenzen und deren Wirkung in der betrieblichen Personalführung deuten<br>
✓ Wirksame Techniken effektiver Führung und Kommunikation anwenden<br>
✓ In Führungssituationen adäquat, systematisch und lösungsorientiert handeln<br>
✓ Das eigene Reaktionsverhalten in Ausnahmesituationen erproben und reflektieren
</div>

<div style="display:flex;gap:8px;margin:14px 0"><button onclick="document.querySelectorAll('#fl_kap1 .tl-item').forEach(e=>e.classList.add('open'))">Alle aufklappen</button><button onclick="document.querySelectorAll('#fl_kap1 .tl-item').forEach(e=>e.classList.remove('open'))">Alle schliessen</button></div>

<div class="tl">

<div class="tl-item">
<div class="tl-num tl-num-b">1</div>
<div class="tl-head" onclick="this.parentElement.classList.toggle('open')">
<div><div class="tl-title">Die drei Ebenen des St. Galler Management-Modells</div><div class="tl-merksatz">«Führung passiert nicht im leeren Raum — sie ist eingebettet in Betrieb, Markt und Umsystem.»</div></div>
<div class="tl-arrow">▶</div>
</div>
<div class="tl-detail">
<div class="tl-body">Das <strong>St. Galler Management-Modell</strong> zeigt, dass wirtschaftliches Handeln und Führung auf verschiedenen Ebenen stattfindet, die sich gegenseitig beeinflussen — wenn auch unterschiedlich stark. Als Führungsperson muss man alle drei Ebenen gleichzeitig im Blick haben.

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:12px;margin:18px 0">
<div class="c ca" style="padding:16px 18px"><strong>🏢 a) Betriebliche Ebene</strong><br>Diese wird <strong>gänzlich vom Betrieb definiert</strong>. Ziele, Betriebs-DNA, Vision, Mission, USP, Standards und Policies &amp; Procedures — das Hotel hat volle Kontrolle.</div>
<div class="c cm" style="padding:16px 18px"><strong>🤝 b) Marktebene</strong><br>Kompetitives Umfeld mit Mitbewerbenden, Lieferant:innen, Investor:innen, Gästen. Das Hotel kann <strong>Einfluss nehmen</strong>, aber den Markt nicht alleine definieren oder beherrschen.</div>
<div class="c cp" style="padding:16px 18px"><strong>🌍 c) Umsystemische Ebene</strong><br>Betrieb ist <strong>gänzlich ausgesetzt</strong> — technisch, politisch/legal, wirtschaftlich, kulturell/sozial, ökologisch. Kein Einfluss möglich, nur Anpassung.</div>
</div>

<div class="hla"><strong>🏨 Hotel Alpenblick</strong><br>Sara kann ihre <strong>Preispolitik</strong> selbst bestimmen (betriebliche Ebene). Sie kann <strong>versuchen</strong>, durch gutes Employer Branding mehr Bewerbungen zu generieren (Marktebene). Aber die <strong>Wetterlage im Winter</strong> oder neue Schweizer Arbeitsgesetze muss sie hinnehmen — sie kann sich nur anpassen (umsystemische Ebene).</div>
</div>
<div class="merksatz">Merke: Gute Führung erkennt, welche Ebene gerade betroffen ist — und setzt Energie nur dort ein, wo sie tatsächlich wirken kann.</div>
</div>
</div>

<div class="tl-item">
<div class="tl-num tl-num-b">2</div>
<div class="tl-head" onclick="this.parentElement.classList.toggle('open')">
<div><div class="tl-title">Was ist Führung? — Kernaussagen</div><div class="tl-merksatz">«Führung erzielt Resultate durch und mit anderen Menschen.»</div></div>
<div class="tl-arrow">▶</div>
</div>
<div class="tl-detail">
<div class="tl-body">Wo es Führung gibt, muss es <strong>Führende und Geführte</strong> geben. Führung ist eine Form zwischenmenschlicher Beziehung. Sinn: gemeinsames Erreichen von Zielen.

<strong>Wirkungsvolle Führung bedeutet:</strong>
<ul style="margin:10px 0 10px 20px;line-height:1.8">
<li>Mitarbeitende so leiten, dass sie <strong>leistungsbereit und initiativ</strong> auf ein Ziel hin tätig werden — unter bestmöglichem Einsatz ihrer Fähigkeiten</li>
<li>Die Führungsperson trägt die <strong>Verantwortung</strong> für alle Mitarbeitenden und Ressourcen</li>
<li>Die Führungsperson erzielt <strong>Resultate durch und mit anderen Menschen</strong></li>
</ul>

<strong>Gibt es "richtiges" Führungsverhalten?</strong><br>
<strong>Nein</strong> — auch wissenschaftlich nicht. Die Führungsperson muss je nach Aufgabe, Fähigkeiten, Leistungsbereitschaft der Mitarbeitenden sowie wirtschaftlicher, technischer, natürlicher und sozialer Umgebung <strong>verschiedene Führungsbeziehungen gestalten</strong>.

<div class="hlbl" style="margin-top:14px"><strong>DAS FÜHRUNGSVERSTÄNDNIS — 4 Kernsätze</strong><br>
• <strong>Führen ist eine Dienstleistung</strong> an den Mitarbeitenden<br>
• Führung sorgt für <strong>Orientierung</strong> (Ziele, Prozesse, Resultate, Verhalten)<br>
• Führen heisst <strong>Vorsprung schaffen</strong> (vorausdenken, planen)<br>
• Führung fordert die <strong>ganze Persönlichkeit</strong></div>
</div>
<div class="merksatz">Merke: <strong>Klarheit motiviert — Unklarheit desorientiert.</strong> Erfahrung zeigt: Klarheit trägt wesentlich zur Motivation bei, während Unklarheit zu Unsicherheit und De-Motivation führt.</div>
</div>
</div>

<div class="tl-item">
<div class="tl-num tl-num-b">3</div>
<div class="tl-head" onclick="this.parentElement.classList.toggle('open')">
<div><div class="tl-title">Führen ist ein zweiter Beruf</div><div class="tl-merksatz">«Ein guter Koch muss noch lange kein guter Chef sein.»</div></div>
<div class="tl-arrow">▶</div>
</div>
<div class="tl-detail">
<div class="tl-body">Eine Führungsperson übt neben der Tätigkeit als Fachkraft einen <strong>zweiten Beruf</strong> aus. Während es für den Fachberuf umfangreiche Ausbildungen gibt, sind Sachbearbeitende meist ungenügend auf die Führungsrolle vorbereitet.

<div style="font-style:italic;padding:14px 20px;border-left:3px solid var(--ac);background:rgba(232,168,56,.04);margin:14px 0;border-radius:4px">"Ein guter Koch muss noch lange kein guter Chef sein…"</div>

<strong>Fredmund Malik</strong> spricht von einem <strong>"Massenberuf ohne Ausbildung"</strong>. Führung kann bis zu einem gewissen Grad gelernt werden — aber vor allem muss man <strong>führen wollen</strong>.

<div class="hla" style="margin-top:14px"><strong>ZUSAMMENGEFASSTE DEFINITION</strong><br>
Führung ist ein zwischenmenschlicher Prozess, in dem eine legitimierte Person andere Menschen dazu anhält, ein definiertes Ziel innerhalb gegebener Parameter zu erreichen. Dabei ist ein Ziel zu erreichen innerhalb eines Zeit- und Raumhorizontes, unter Berücksichtigung von personellen, materiellen und finanziellen Ressourcen. Die Parameter definieren den kulturellen, sozialen, geographischen, technischen und infrastrukturellen Handlungsrahmen.</div>
</div>
<div class="merksatz">Merke: Fachkompetenz ≠ Führungskompetenz. Die Beförderung zur Chefin erfordert einen Wechsel der Identität — vom Macher zum Ermöglicher.</div>
</div>
</div>

<div class="tl-item">
<div class="tl-num tl-num-b">4</div>
<div class="tl-head" onclick="this.parentElement.classList.toggle('open')">
<div><div class="tl-title">Menschenbild — Theorie X und Y (Douglas McGregor, 1960)</div><div class="tl-merksatz">«Wer Menschen als faul wahrnimmt, führt autoritär — und erzeugt genau jene Passivität, die er befürchtet.»</div></div>
<div class="tl-arrow">▶</div>
</div>
<div class="tl-detail">
<div class="tl-body">Unsere <strong>Vorstellungen und Meinungen über Menschen</strong> prägen unser Führungsverhalten. <strong>Douglas McGregor</strong> schuf 1960 am MIT in seinem Buch <em>"The Human Side of Enterprise"</em> zwei gegensätzliche Menschenbilder. Er lehnte Theorie X ab und bevorzugte Theorie Y.

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:14px;margin:18px 0">
<div class="c cr" style="padding:18px 20px">
<strong>THEORIE X — Der Mensch ist unwillig</strong>
<ul style="margin:10px 0 0 20px;line-height:1.8">
<li>Angeborene Abneigung gegen Arbeit</li>
<li>Muss gezwungen, gelenkt, mit Strafe bedroht werden</li>
<li>Will "an die Hand genommen werden"</li>
<li>Scheut Verantwortung, strebt nach Sicherheit</li>
<li>Entlohnung allein reicht nicht — braucht Kontrolle und Zwang</li>
<li>Entspricht dem <strong>Taylorismus</strong></li>
</ul>
</div>
<div class="c cg" style="padding:18px 20px">
<strong>THEORIE Y — Der Mensch ist engagiert</strong>
<ul style="margin:10px 0 0 20px;line-height:1.8">
<li>Arbeit hat hohen Stellenwert, Quelle der Zufriedenheit</li>
<li>Von Natur aus leistungsbereit und innen motiviert</li>
<li>Ich-Bedürfnisse und Selbstverwirklichung als Anreiz</li>
<li>Identifiziert sich mit Zielen — externe Kontrolle unnötig</li>
<li>Übernimmt Verantwortung, entwickelt Eigeninitiative</li>
<li>Entspricht dem <strong>Human-Relations-Konzept</strong></li>
</ul>
</div>
</div>

<strong>Daraus abgeleitet entstehen unterschiedliche Führungsstile:</strong>
<table style="width:100%;margin-top:12px;border-collapse:collapse;font-size:13px">
<tr><th style="padding:8px 10px;border:1px solid var(--bd);background:rgba(255,107,107,.08);text-align:left">Meinung X → autoritärer Führungsstil</th><th style="padding:8px 10px;border:1px solid var(--bd);background:rgba(76,209,146,.08);text-align:left">Meinung Y → kooperativer Führungsstil</th></tr>
<tr><td style="padding:8px 10px;border:1px solid var(--bd)">Befehl und Gehorsam, Einzelkämpfer</td><td style="padding:8px 10px;border:1px solid var(--bd)">Engagement an Menschen und Aufgaben, Teamarbeit</td></tr>
<tr><td style="padding:8px 10px;border:1px solid var(--bd)">MA reagieren passiv → bestätigt Meinung X</td><td style="padding:8px 10px;border:1px solid var(--bd)">MA reagieren mit Engagement → bestätigt Meinung Y</td></tr>
</table>

<div class="hlr" style="margin-top:14px"><strong>⚠ SELBSTERFÜLLENDE PROPHEZEIUNG</strong><br>
Haltung und Verhalten beider Parteien bedingen sich gegenseitig. Wer Menschen als faul wahrnimmt, führt autoritär — und erzeugt so genau jenes passive Verhalten, das er befürchtet.</div>

<div class="hla" style="margin-top:14px"><strong>🏨 Hotel Alpenblick</strong><br>Saras Vorgänger <strong>Herr Bühler</strong> führte nach <strong>Theorie X</strong>: Er kontrollierte Zimmerreinigung minutiös, misstraute dem Team und schrie bei Fehlern. Resultat: Hohe Fluktuation (<strong>45% pro Jahr</strong>), passive Mitarbeitende, keine Eigeninitiative. Sara setzt auf <strong>Theorie Y</strong>: Sie delegiert das Gästefeedback-Monitoring an die Front Office Managerin <strong>Nadia</strong> — mit voller Verantwortung. Nadia blüht auf, entwickelt ein eigenes Gastgeschenk-Konzept, das den TripAdvisor-Score um <strong>0.6 Punkte</strong> verbessert.</div>
</div>
<div class="merksatz">Merke: <strong>Grundhaltung → Führungsverhalten → Reaktion der MA → Bestätigung der Haltung.</strong> Dieser Kreislauf wirkt immer — in beide Richtungen.</div>
</div>
</div>

<div class="tl-item">
<div class="tl-num tl-num-b">5</div>
<div class="tl-head" onclick="this.parentElement.classList.toggle('open')">
<div><div class="tl-title">Angst als Triebfeder — Die zwei Urängste</div><div class="tl-merksatz">«Die beiden Urängste sind die bedeutendsten Stimulantien für Leistungserbringung.»</div></div>
<div class="tl-arrow">▶</div>
</div>
<div class="tl-detail">
<div class="tl-body"><em>"Fürchtet Euch nicht!"</em> (Jesaja 41,10) — universelle Antwort auf die ultimativste Triebfeder allen Seins: die <strong>Überwindung der Angst</strong>.

<strong>Die historische Entwicklung:</strong>
<ul style="margin:10px 0 10px 20px;line-height:1.8">
<li><strong>Hunger als Triebfeder für Lagerhaltung:</strong> Mit dem Sesshaftwerden entstand wirtschaftlicher Surplus (Vorratshaltung) — und erstmals <strong>freie Zeit</strong>, die nicht zur Lebenserhaltung nötig war.</li>
<li><strong>Rastloses Streben und Haben-wollen:</strong> In der freien Zeit entstanden Kunst, Kultur, Religion — aber auch Macht und die <strong>Zelebration von Macht</strong>. Urinstinkt: Haben-wollen → Noch-mehr-haben-wollen → Maximal-viel-haben-wollen.</li>
<li><strong>Nicht-Haben als Gegenprogramm:</strong> Askese, Eremitentum, monastische Strukturen. In postmateriellen Gesellschaften: Verschiebung vom <strong>"to have" zum "to be"</strong>.</li>
<li><strong>Angst vor sozialer Isolation:</strong> Der Mensch ist ein <strong>Herdentier</strong>. Dazugehören, geschätzt werden, geliebt werden — existenzielle Bedürfnisse.</li>
</ul>

<div class="hlr" style="margin-top:14px"><strong>⚠ DIE BEIDEN FUNDAMENTALEN URÄNGSTE</strong><br>
<strong>1. Gefressen werden</strong> (physische Bedrohung)<br>
<strong>2. Nicht geliebt werden</strong> (soziale Isolation)<br><br>
Diese beiden Urängste sind die <strong>bedeutendsten Stimulantien für Leistungserbringung</strong>. Sie wirken bis heute — von Calvins Prädestinationslehre ("Wie erarbeite ich mir einen gnädigen Gott?") bis zu "The Apprentice" ("Wie mache ich meinen Boss glücklich?").</div>

In hedonistischen Gesellschaften kontrastiert wachsendes Bedürfnis nach <em>"Back-to-the-instincts-roots"</em>-Erlebnissen (Extremsport, Survival Camps, Apnoe-Tauchen). Kathartische Überwindung der Angst als Glücksgefühl.

<div class="hla" style="margin-top:14px"><strong>🏨 Hotel Alpenblick</strong><br>Sara merkt in ihren ersten Wochen: Das Team ist "lähmend vorsichtig". Bei jedem Gast-Beschwerde-Fall holen sie ihre Erlaubnis ein. Ursache: <strong>Angst vor dem Chef</strong> — die alte Kultur hat das tief verankert. Sara erkennt, dass sie aktiv eine <strong>angstfreie Fehlerkultur</strong> etablieren muss, damit Mitarbeitende wieder in die Eigenverantwortung kommen.</div>
</div>
<div class="merksatz">Merke: Wer durch Angst führt, erntet Passivität. Wer Vertrauen schenkt, erntet Eigeninitiative.</div>
</div>
</div>

</div>
</div>

<!-- KAP 2: ROLLENWECHSEL -->
<div class="sec" id="fl_kap2"><h1>02 · Führungsperson werden — Rollenwechsel</h1><p class="sub">TZI-Modell · 9 Rollen · Peter-Prinzip · Führungstrends</p>

<div class="hlbl"><strong>KERNBOTSCHAFT</strong><br>
✓ Ständiger Auftrag der Führungsverantwortlichen: <strong>"get things done!"</strong><br>
✓ Aufenthalt in permanenten Spannungsfeldern bewältigen<br>
✓ Eigenen Standpunkt entwickeln und kommunizieren<br>
✓ Mit Nähe und Distanz zum Team klug umgehen
</div>

<div style="display:flex;gap:8px;margin:14px 0"><button onclick="document.querySelectorAll('#fl_kap2 .tl-item').forEach(e=>e.classList.add('open'))">Alle aufklappen</button><button onclick="document.querySelectorAll('#fl_kap2 .tl-item').forEach(e=>e.classList.remove('open'))">Alle schliessen</button></div>

<div class="tl">

<div class="tl-item">
<div class="tl-num tl-num-b">1</div>
<div class="tl-head" onclick="this.parentElement.classList.toggle('open')">
<div><div class="tl-title">Das TZI-Modell nach Ruth Cohn — Vier Pole gleichzeitig</div><div class="tl-merksatz">«Ein GM lebt auf dem Silbertablett — Vorbildfunktion 24/7, zero tolerance.»</div></div>
<div class="tl-arrow">▶</div>
</div>
<div class="tl-detail">
<div class="tl-body">Führungspersonen werden <strong>aufmerksam beobachtet</strong>, haben Vorbildfunktion und sind vielseitigen Erwartungen ausgesetzt.

<div class="hlr" style="margin:14px 0"><strong>⚠ GM ALS INHOUSE-CELEBRITY</strong><br>
Ein GM lebt auf dem "Silbertablett". <strong>Vorbildfunktion 24/7, zero tolerance</strong> — auch in der Freizeit! Mit Social Media sind Fehltritte rasch via Facebook, Instagram oder Twitter unlöschbar verbreitet.</div>

Das <strong>TZI-Modell (Themenzentrierte Interaktion)</strong> von <strong>Ruth Cohn</strong> bildet die vier Bezugspunkte ab, in denen eine Führungsperson gleichzeitig navigiert:

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:12px;margin:18px 0">
<div class="c ca" style="padding:16px 18px"><strong>ES</strong><br><em>Ziel / Auftrag / Sache</em><br>Unternehmen setzt Ziele. Führungsperson soll loyal sein zu Unternehmen und Zielen. Wichtig: keine Fantasie-Ziele — ambitioniert, aber erreichbar!</div>
<div class="c cg" style="padding:16px 18px"><strong>ICH</strong><br><em>Person / Beitrag / MA</em><br>MA erwarten, als Individuum wahrgenommen zu werden. Einfühlungsvermögen, Respekt, wertschätzende Kommunikation. <strong>Privates und Berufliches trennen!</strong></div>
<div class="c cm" style="padding:16px 18px"><strong>WIR</strong><br><em>Gruppe / Team</em><br>Bietet Sicherheit, Zugehörigkeit, Ausgleich. 1+1=3. Führungsperson bildet leistungsfähiges Team, vertritt es nach aussen. Nicht mehr "Teammitglied"!</div>
<div class="c cp" style="padding:16px 18px"><strong>KONTEXT</strong><br><em>Umsystem</em><br>Unternehmenskultur, wirtschaftliche Lage, Image, Arbeitsmarkt, Medien. Wirkt von aussen auf alle drei Achsen ein.</div>
</div>

<div class="hla"><strong>🏨 Hotel Alpenblick</strong><br>In ihrer ersten Managementsitzung erlebt Sara alle vier Pole gleichzeitig: <strong>ES</strong> = Die Besitzerfamilie fordert 8% EBITDA-Steigerung. <strong>ICH</strong> = Ihre beste Freundin <strong>Laura (Housekeeping)</strong> bittet um Urlaub zur Hauptsaison. <strong>WIR</strong> = Das Team wartet auf ihre erste richtungsweisende Entscheidung. <strong>KONTEXT</strong> = Presseberichte über Arbeitskräftemangel in der Hotellerie. Sara muss in jedem dieser Felder gleichzeitig navigieren.</div>
</div>
<div class="merksatz">Merke: Führungsqualität zeigt sich daran, ob du alle vier Pole gleichzeitig bedienen kannst — ohne einen zu vernachlässigen.</div>
</div>
</div>

<div class="tl-item">
<div class="tl-num tl-num-b">2</div>
<div class="tl-head" onclick="this.parentElement.classList.toggle('open')">
<div><div class="tl-title">Die 9 Rollen der Führungsperson (Schulz von Thun)</div><div class="tl-merksatz">«Die Betonung liegt auf SEIN, nicht auf WERDEN.»</div></div>
<div class="tl-arrow">▶</div>
</div>
<div class="tl-detail">
<div class="tl-body">In jeder Lebenssituation sind Menschen in einer selbst gewählten oder zugewiesenen Rolle (wie im Theater). Rollen sind durch <strong>Normen und Erwartungen</strong> geprägte Verhaltensmuster — eigene wie fremde, ausgesprochene wie unausgesprochene.

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:12px;margin:18px 0">
<div class="c ca" style="padding:14px 16px"><strong>🧠 Fachperson</strong><br><span style="font-size:13px;color:var(--tx2)">Kennt die Materie</span></div>
<div class="c ca" style="padding:14px 16px"><strong>📋 Manager:in</strong><br><span style="font-size:13px;color:var(--tx2)">Leitet und koordiniert</span></div>
<div class="c cg" style="padding:14px 16px"><strong>🤝 Coach</strong><br><span style="font-size:13px;color:var(--tx2)">Zuhört und berät</span></div>
<div class="c cg" style="padding:14px 16px"><strong>👥 Teamentwickler:in</strong><br><span style="font-size:13px;color:var(--tx2)">Verbessert Zusammenarbeit</span></div>
<div class="c cm" style="padding:14px 16px"><strong>⚖ Verantwortliche:r</strong><br><span style="font-size:13px;color:var(--tx2)">Trägt Last für Entscheidungen</span></div>
<div class="c cr" style="padding:14px 16px"><strong>🦁 Löwenbändiger:in</strong><br><span style="font-size:13px;color:var(--tx2)">Spricht Machtworte</span></div>
<div class="c cp" style="padding:14px 16px"><strong>🧭 Leitperson</strong><br><span style="font-size:13px;color:var(--tx2)">Vorbild, zeigt Wege</span></div>
<div class="c cp" style="padding:14px 16px"><strong>💼 Angestellte:r</strong><br><span style="font-size:13px;color:var(--tx2)">Gegenüber Vorgesetzten</span></div>
<div class="c cg" style="padding:14px 16px"><strong>❤ Mensch</strong><br><span style="font-size:13px;color:var(--tx2)">Mit Herz, Gefühl, Verstand</span></div>
</div>

<div class="hla"><strong>WICHTIG: Die Betonung liegt auf "SEIN"</strong><br>
<strong>Führungspersönlichkeit ist in vielen Fällen aneigenbar</strong>, der individuelle Nährboden führt aber zu unterschiedlichen Profilen. Nicht jeder ist geschaffen, General Manager oder CEO zu <em>sein</em>. Die Betonung liegt auf <em>sein</em>, nicht auf <em>werden</em>.</div>

<strong>Bedenken Sie:</strong> Bei jedem neuen Führungsjob hat der <strong>Schatten des Vorgängers</strong> Erwartungen und Verhalten der Mitarbeitenden geprägt. Dort muss man die Beteiligten abholen.
</div>
<div class="merksatz">Merke: Rollen sind situativ. Im Brandschutz-Drill bist du Löwenbändiger, beim Todesfall im Team bist du Coach. Wer nur eine Rolle kennt, führt schlecht.</div>
</div>
</div>

<div class="tl-item">
<div class="tl-num tl-num-b">3</div>
<div class="tl-head" onclick="this.parentElement.classList.toggle('open')">
<div><div class="tl-title">Das Peter-Prinzip</div><div class="tl-merksatz">«Jede Position wird mit der Zeit von Menschen besetzt, die sie nicht erfüllen können.»</div></div>
<div class="tl-arrow">▶</div>
</div>
<div class="tl-detail">
<div class="tl-body"><strong>Laurence J. Peter</strong> (kanadische Schulverwaltung) konstatierte provokant: <em>"Nach einer gewissen Zeit wird jede Position von Mitarbeitenden besetzt, die unfähig sind, ihre Aufgaben zu erfüllen."</em>

<div class="hlr" style="margin:14px 0"><strong>DIE PETER-THESE</strong><br>
Jedes Mitglied einer ausreichend komplexen Hierarchie wird befördert, <strong>solange es auf seiner Position erfolgreich ist</strong>. Übersteigen die Anforderungen die Fähigkeiten, bleiben Beförderungen aus. Dadurch markiert das persönliche Maximum der Karriereleiter das Mass der <strong>maximalen Unfähigkeit</strong> innerhalb der Hierarchie.</div>

<strong>Wer leistet dann die Arbeit?</strong><br>
Peter: <em>"Die Arbeit wird von Mitarbeitenden erledigt, die ihre Stufe der Inkompetenz noch nicht erreicht haben."</em>

Sein Fazit: Man sollte seine Energie vielleicht sinnvoller auf die <strong>Vermeidung einer Karriere</strong> verwenden.
</div>
<div class="merksatz">Merke: Beförderung ist keine Belohnung — sie ist eine Frage, ob die Person für die neue Rolle gemacht ist. Gute Fachkraft ≠ gute Führungskraft.</div>
</div>
</div>

<div class="tl-item">
<div class="tl-num tl-num-b">4</div>
<div class="tl-head" onclick="this.parentElement.classList.toggle('open')">
<div><div class="tl-title">Führungstrends — Sinn statt Zuckerbrot</div><div class="tl-merksatz">«Wer Leistung fordert, muss Sinn bieten.» — Walter Böckmann</div></div>
<div class="tl-arrow">▶</div>
</div>
<div class="tl-detail">
<div class="tl-body">Führungsmodelle unterliegen den Trends ihrer Zeit. Die Modelle von <strong>"Befehl und Gehorsam"</strong> oder <strong>"Zuckerbrot und Peitsche"</strong> haben ausgedient. Ersetzt werden sie durch Modelle, die den <strong>eigenverantwortlichen, mündigen Menschen</strong> in den Mittelpunkt stellen.

<div style="text-align:center;font-family:var(--se);font-size:20px;color:var(--ac);padding:20px;margin:18px 0;font-style:italic;border-top:1px solid var(--bd);border-bottom:1px solid var(--bd)">
"Wer Leistung fordert, muss Sinn bieten."<br>
<span style="font-size:13px;color:var(--tx3);font-style:normal">— Walter Böckmann, Psychologe</span>
</div>

<strong>Situativ richtig führen</strong><br>
Es gibt nicht DEN Führungsstil. Der Kontext entscheidet — kulturell, sozial, wirtschaftlich. Führung in Thailand oder auf den Malediven ist komplett anders als in Zypern oder Deutschland.

<div class="hla" style="margin-top:14px"><strong>🌊 Aeberhards Praxisbeispiel: Maledivengenerator</strong><br>Das Maintenance-Team auf einer Hotelinsel ist normalerweise <strong>straff, routiniert mit Wartungsprotokollen</strong> zu führen. Wenn aber eine <strong>Tsunami-Welle</strong> die Luftfilter der Dieselgeneratoren mit Salzwasser vollsaugt, nützen alle P&amp;Ps und SOPs nichts. Jetzt gilt: improvisieren! Aus dem streng überprüften Senior Generator Operator wird plötzlich <em>Daniel Düsentrieb</em>. <strong>Führungsstil-Mix</strong> ist entscheidend.</div>
</div>
<div class="merksatz">Merke: Der Führungsstil muss sich der Situation anpassen — nicht umgekehrt. Starrheit ist der grösste Feind guter Führung.</div>
</div>
</div>

</div>
</div>

<!-- KAP 3: FÜHRUNGSPROZESS -->
<div class="sec" id="fl_kap3"><h1>03 · Führungsprozess</h1><p class="sub">Kreislauf · 6 Kompetenzen · 3 Säulen der Autorität · Wollen/Können/Dürfen</p>

<div style="display:flex;gap:8px;margin:14px 0"><button onclick="document.querySelectorAll('#fl_kap3 .tl-item').forEach(e=>e.classList.add('open'))">Alle aufklappen</button><button onclick="document.querySelectorAll('#fl_kap3 .tl-item').forEach(e=>e.classList.remove('open'))">Alle schliessen</button></div>

<div class="tl">

<div class="tl-item">
<div class="tl-num tl-num-b">1</div>
<div class="tl-head" onclick="this.parentElement.classList.toggle('open')">
<div><div class="tl-title">Der Führungskreislauf (nach Marianne Grobner)</div><div class="tl-merksatz">«Führung ist ein sich wiederholender Kreislauf — nicht eine einmalige Aktion.»</div></div>
<div class="tl-arrow">▶</div>
</div>
<div class="tl-detail">
<div class="tl-body">Die Führungsarbeit ist ein sich wiederholender Kreislauf mit verschiedenen Tätigkeiten in logischer Abfolge:

<div style="display:flex;flex-wrap:wrap;gap:8px;align-items:center;justify-content:center;margin:18px 0;padding:18px;background:rgba(139,44,90,.04);border-radius:12px">
<div style="padding:10px 16px;background:var(--s2);border-radius:8px;font-weight:600;font-size:13px">1. Ziele setzen → SOLL</div>
<div style="color:var(--ac)">→</div>
<div style="padding:10px 16px;background:var(--s2);border-radius:8px;font-weight:600;font-size:13px">2. Planen</div>
<div style="color:var(--ac)">→</div>
<div style="padding:10px 16px;background:var(--s2);border-radius:8px;font-weight:600;font-size:13px">3. Entscheiden</div>
<div style="color:var(--ac)">→</div>
<div style="padding:10px 16px;background:var(--s2);border-radius:8px;font-weight:600;font-size:13px">4. Realisieren</div>
<div style="color:var(--ac)">→</div>
<div style="padding:10px 16px;background:var(--s2);border-radius:8px;font-weight:600;font-size:13px">5. Kontrollieren</div>
<div style="color:var(--ac)">→</div>
<div style="padding:10px 16px;background:var(--s2);border-radius:8px;font-weight:600;font-size:13px">6. Analysieren</div>
<div style="color:var(--ac);font-size:20px">↻</div>
</div>

Der Kreislauf beginnt nach dem Analysieren wieder von vorne — mit neuen, überarbeiteten Zielen. Das ist der Kern von <strong>Controlling als Steuerung</strong>.
</div>
<div class="merksatz">Merke: Ohne Kontrolle und Analyse ist Führung blind. Ohne Planung und Entscheidung ist sie reaktiv. Alle 6 Schritte gehören zusammen.</div>
</div>
</div>

<div class="tl-item">
<div class="tl-num tl-num-b">2</div>
<div class="tl-head" onclick="this.parentElement.classList.toggle('open')">
<div><div class="tl-title">Die 6 Führungskompetenzen</div><div class="tl-merksatz">«Jede Führungsperson braucht alle sechs Kompetenzen in unterschiedlicher Ausprägung.»</div></div>
<div class="tl-arrow">▶</div>
</div>
<div class="tl-detail">
<div class="tl-body"><div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:12px;margin:14px 0">
<div class="c ca" style="padding:16px 18px"><strong>🎓 Fachkompetenz</strong><br>Aktuelles Fachwissen zur Beherrschung konkreter Sachaufgaben (Küche, Service, Front Office, Kalkulation, Marketing, Logistik). <strong>Aufgabenbezogenes Fachwissen, fachübergreifende Kenntnisse.</strong></div>
<div class="c cg" style="padding:16px 18px"><strong>🤝 Sozialkompetenz</strong><br>Fähigkeiten im Umgang mit anderen Menschen, Gruppen oder gesellschaftlichen Fragen. <strong>Kommunikation, Kooperation, Identifikation schaffen, Umgang mit Spannungen, sozialer Mut.</strong></div>
<div class="c cp" style="padding:16px 18px"><strong>👑 Führungskompetenz</strong><br>MA so führen, dass sie ihre Aufgaben einzeln oder im Team wirkungsvoll erledigen. <strong>Fordern und Fördern, Führungsverantwortung, Überzeugungskraft, Durchsetzungsvermögen, Sinngebung.</strong></div>
<div class="c cm" style="padding:16px 18px"><strong>🛠 Methodenkompetenz</strong><br>Beherrschen von Instrumenten, Technik und Methoden. <strong>Prozess- und Projektkompetenz, betriebliche Software, Planung, Abläufe.</strong></div>
<div class="c ca" style="padding:16px 18px"><strong>🔗 Systemkompetenz</strong><br>Zusammenhänge im Unternehmen, zwischen Fachbereichen und Abläufen verstehen. <strong>Schnittstellen, gesellschaftliche/wirtschaftliche/politische Entwicklungen.</strong></div>
<div class="c cg" style="padding:16px 18px"><strong>✨ Natürliche Kompetenz</strong><br>Selbstsicherheit, rasche Auffassungsgabe, klare Botschaften, ruhiges Auftreten vor Menschen, respektvolle Würde. <strong>Wesenszüge, die erfolgreiches Führen ermöglichen.</strong></div>
</div>
</div>
<div class="merksatz">Merke: Je höher die Position, desto mehr verschiebt sich das Gewicht von Fach- zu Sozial- und Systemkompetenz.</div>
</div>
</div>

<div class="tl-item">
<div class="tl-num tl-num-b">3</div>
<div class="tl-head" onclick="this.parentElement.classList.toggle('open')">
<div><div class="tl-title">Autorität — Die drei Säulen</div><div class="tl-merksatz">«Autorität wird zuerkannt — sie findet freiwillige Nachfolge.»</div></div>
<div class="tl-arrow">▶</div>
</div>
<div class="tl-detail">
<div class="tl-body"><strong>Autorität</strong> (lat. <em>auctoritas</em> = Urheber, Massgebender) ist das Ansehen und Gewicht, das einer Führungsperson von ihren Mitarbeitenden <strong>zuerkannt</strong> wird. Sie findet <strong>freiwillige Nachfolge</strong>.

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:12px;margin:18px 0">
<div class="c cr" style="padding:16px 18px"><strong>🏛 Stellung / Position</strong><br>Positionsautorität steht heute <strong>nicht mehr im Vordergrund</strong>. Früher reichte der Titel — heute nicht mehr.</div>
<div class="c cg" style="padding:16px 18px"><strong>👤 Persönlichkeit / Sozialkompetenz</strong><br>Selbstsicherheit und Beziehungsfähigkeit sind heute <strong>besonders bedeutsam</strong>.</div>
<div class="c ca" style="padding:16px 18px"><strong>📚 Fach- und Führungskönnen</strong><br>Nachweisbare Kompetenz in Sache und Führung.</div>
</div>
</div>
<div class="merksatz">Merke: Du kannst jemandem den Titel "Chefin" geben. Aber Autorität musst du dir verdienen — jeden Tag neu.</div>
</div>
</div>

<div class="tl-item">
<div class="tl-num tl-num-b">4</div>
<div class="tl-head" onclick="this.parentElement.classList.toggle('open')">
<div><div class="tl-title">Führungsinstrumente</div><div class="tl-merksatz">«Werkzeuge, mit denen Führung Orientierung schafft.»</div></div>
<div class="tl-arrow">▶</div>
</div>
<div class="tl-detail">
<div class="tl-body">Eine Auswahl von Werkzeugen für Führende:
<ul style="margin:10px 0 10px 20px;line-height:1.8">
<li><strong>Unternehmensleitbild</strong> — beschreibt Vision (Was wollen wir sein?), Werte (Was ist uns wichtig?), Strategie (Wie kommen wir dorthin?), die "Hausordnung" (Policies &amp; Procedures, P&amp;Ps)</li>
<li><strong>Unternehmenskultur</strong> — anerkannte Werte, Normen, Zielvorstellungen</li>
<li><strong>Führungsgrundsätze</strong> — geförderter Führungsstil des Unternehmens</li>
<li><strong>Ziele, Zielsetzungen, Zielvereinbarungen</strong> — Orientierung und Prioritätensetzung</li>
<li><strong>Stellenbeschrieb</strong> — Aufgaben und Erfolgskriterien</li>
<li><strong>Standardbeschreibungen qualitätsdefinierender Arbeitsprozesse (SOP)</strong></li>
</ul>
</div>
<div class="merksatz">Merke: Werkzeuge allein führen nicht. Erst die richtige Anwendung durch eine Person mit Führungsqualität macht sie wirksam.</div>
</div>
</div>

<div class="tl-item">
<div class="tl-num tl-num-b">5</div>
<div class="tl-head" onclick="this.parentElement.classList.toggle('open')">
<div><div class="tl-title">Wollen · Können · Dürfen — Leistung hat 3 Dimensionen</div><div class="tl-merksatz">«Are you a manager or are you a leader?»</div></div>
<div class="tl-arrow">▶</div>
</div>
<div class="tl-detail">
<div class="tl-body">Führen bedeutet <strong>beeinflussen</strong>. Verantwortung für die Leistung ist <strong>geteilt</strong>:

<table style="width:100%;margin-top:12px;border-collapse:collapse;font-size:13px">
<tr><th style="padding:10px 12px;border:1px solid var(--bd);background:rgba(139,44,90,.08);text-align:left">Verantwortung Führungsperson</th><th style="padding:10px 12px;border:1px solid var(--bd);background:rgba(232,168,56,.08);text-align:left">Leistungsdimension</th><th style="padding:10px 12px;border:1px solid var(--bd);background:rgba(56,199,89,.08);text-align:left">Verantwortung Mitarbeitende</th></tr>
<tr><td style="padding:10px 12px;border:1px solid var(--bd)">Umfeld schaffen, motivieren</td><td style="padding:10px 12px;border:1px solid var(--bd)"><strong>Leistungs-Bereitschaft = WOLLEN</strong></td><td style="padding:10px 12px;border:1px solid var(--bd)">Motivation, Einsatz</td></tr>
<tr><td style="padding:10px 12px;border:1px solid var(--bd)">Schulung, Entwicklung</td><td style="padding:10px 12px;border:1px solid var(--bd)"><strong>Leistungs-Fähigkeit = KÖNNEN</strong></td><td style="padding:10px 12px;border:1px solid var(--bd)">Lernbereitschaft, Kompetenz</td></tr>
<tr><td style="padding:10px 12px;border:1px solid var(--bd)">Ressourcen, Rahmen, Kompetenzen</td><td style="padding:10px 12px;border:1px solid var(--bd)"><strong>Leistungs-Möglichkeit = DÜRFEN</strong></td><td style="padding:10px 12px;border:1px solid var(--bd)">Eigeninitiative, Nutzung</td></tr>
</table>

<div class="hla" style="margin-top:16px"><strong>DIE GRUNDFRAGE</strong><br>
<em>Are you a manager or are you a leader?</em></div>
</div>
<div class="merksatz">Merke: Fehlt eines der drei — Wollen, Können, Dürfen — entsteht keine Leistung. Die Führungsperson muss alle drei ermöglichen.</div>
</div>
</div>

</div>
</div>

<!-- KAP 4: INSEL-MODELL -->
<div class="sec" id="fl_kap4"><h1>04 · Menschen verstehen — Das Insel-Modell</h1><p class="sub">Birkenbihl · Empathie · Verstehen ≠ Akzeptieren</p>

<div style="display:flex;gap:8px;margin:14px 0"><button onclick="document.querySelectorAll('#fl_kap4 .tl-item').forEach(e=>e.classList.add('open'))">Alle aufklappen</button><button onclick="document.querySelectorAll('#fl_kap4 .tl-item').forEach(e=>e.classList.remove('open'))">Alle schliessen</button></div>

<div class="tl">

<div class="tl-item">
<div class="tl-num tl-num-b">1</div>
<div class="tl-head" onclick="this.parentElement.classList.toggle('open')">
<div><div class="tl-title">Das Insel-Modell nach Vera Birkenbihl</div><div class="tl-merksatz">«Vielfach reden wir haarscharf aneinander vorbei!»</div></div>
<div class="tl-arrow">▶</div>
</div>
<div class="tl-detail">
<div class="tl-body">Spannungen zwischen Menschen entstehen oft aus Missverständnissen. <strong>Vielfach reden wir haarscharf aneinander vorbei!</strong> Eine entscheidende soziale Kompetenz ist das Interesse und der Versuch, Mitarbeitende zu verstehen.

<strong>Das Bild:</strong> Stellen Sie sich vor, jeder Mensch lebt auf <strong>seiner eigenen Insel</strong>. Dort gelten unterschiedliche Werte, Einstellungen, Haltungen, Bedingungen, Sprachen, Begrifflichkeiten, Erfahrungen und Meinungen. Alles hat sich dort angesammelt und zeigt sich im persönlichen Kontakt.

<div class="hlbl" style="margin-top:14px"><strong>🌉 Mit Empathie Brücken bauen</strong><br>
Um Andersartiges zu erkennen, müssen wir unsere <strong>Wahrnehmungsfilter reinigen</strong> — z.B. indem wir uns "in die Schuhe des Andern" stellen. Empathie ist von überragender Bedeutung, wenn das Arbeitsumfeld in einem anderen kulturellen Raum ist.</div>

<div style="font-style:italic;padding:14px 20px;border-left:3px solid var(--ac);background:rgba(232,168,56,.04);margin:14px 0;border-radius:4px">Führung in Thailand oder auf den Malediven ist komplett anders als in Zypern oder Deutschland.</div>
</div>
<div class="merksatz">Merke: Wer die Insel des anderen nicht betritt, wird ihn nie wirklich verstehen. Empathie ist kein Soft-Skill — sie ist Führungs-Grundlage.</div>
</div>
</div>

<div class="tl-item">
<div class="tl-num tl-num-b">2</div>
<div class="tl-head" onclick="this.parentElement.classList.toggle('open')">
<div><div class="tl-title">Gemeinsame Arbeitsinsel — Verstehen ≠ Akzeptieren</div><div class="tl-merksatz">«Let's agree to disagree — und trotzdem an einem gemeinsamen Ziel arbeiten.»</div></div>
<div class="tl-arrow">▶</div>
</div>
<div class="tl-detail">
<div class="tl-body">Auf der gemeinsamen Arbeitsinsel klären wir Meinungen, Standpunkte und suchen <strong>gemeinsame Lösungen</strong>. Verstehen ist das Ziel — die andere Person auf ihrer Insel abholen und auf die gemeinsame Plattform begleiten.

<div class="hlr" style="margin:14px 0"><strong>⚠ WICHTIG: Verstehen ≠ Akzeptieren</strong><br>
Gleichzeitig bedeutet verstehen <strong>nicht akzeptieren</strong>! Wie der Engländer sagt: <em>"Let's agree to disagree"</em> — und dann trotzdem an einem gemeinsamen Ziel arbeiten.</div>

Als Führungsperson müssen Qualitäts- und Verhaltensmassstäbe durchgesetzt werden, auch wenn das Mitarbeitenden manchmal schwerfällt. Das eigene <strong>Harmonie-Bedürfnis</strong> wird oft auf eine harte Probe gestellt. Wer sinnvolle Dinge durchsetzt, wird eine Zeit lang vielleicht nicht mehr gemocht. <strong>Das gilt es auszuhalten.</strong>

<div class="hla" style="margin-top:14px"><strong>🏨 Hotel Alpenblick</strong><br>Sara verordnet neue Hygiene-Standards in der Küche. Souschef <strong>Marco</strong> (aus Italien, seit 8 Jahren im Haus) reagiert giftig: "Bei uns macht man das so und so!" Sara bemüht sich zu <strong>verstehen</strong> (seine Insel = italienische Küchenkultur, Stolz auf Handwerk), <strong>akzeptiert aber nicht</strong>: Die Schweizer Lebensmittelhygiene-Verordnung ist nicht verhandelbar. Sie sagt: <em>"Marco, ich verstehe deine Sicht — und trotzdem führen wir die neuen Standards ein."</em> Marco grollt zwei Wochen. Sara hält das aus. Nach einem Monat akzeptiert er die neuen Prozesse.</div>
</div>
<div class="merksatz">Merke: Die Liebe der Mitarbeitenden ist nicht deine Aufgabe. Ihre Entwicklung und das Erreichen der Ziele ist sie.</div>
</div>
</div>

</div>
</div>

<!-- KAP 5: FÜHRUNGSSTIL -->
<div class="sec" id="fl_kap5"><h1>05 · Führungsstil</h1><p class="sub">GRID-Modell · MbO · SMART-Ziele · Situativ führen</p>

<div style="display:flex;gap:8px;margin:14px 0"><button onclick="document.querySelectorAll('#fl_kap5 .tl-item').forEach(e=>e.classList.add('open'))">Alle aufklappen</button><button onclick="document.querySelectorAll('#fl_kap5 .tl-item').forEach(e=>e.classList.remove('open'))">Alle schliessen</button></div>

<div class="tl">

<div class="tl-item">
<div class="tl-num tl-num-b">1</div>
<div class="tl-head" onclick="this.parentElement.classList.toggle('open')">
<div><div class="tl-title">Einflussfaktoren auf den Führungsstil</div><div class="tl-merksatz">«Es gibt nicht DEN Führungsstil — der Kontext entscheidet.»</div></div>
<div class="tl-arrow">▶</div>
</div>
<div class="tl-detail">
<div class="tl-body">Jede Führungskraft führt aufgrund von:
<ul style="margin:10px 0 10px 20px;line-height:1.8">
<li><strong>Persönlichkeit, Überzeugungen, Fähigkeiten</strong></li>
<li><strong>Mitarbeitenden</strong> (Motivation, Bildungsniveau, Befähigung)</li>
<li><strong>Aufgaben</strong> (repetitiv, kreativ, einfach, komplex)</li>
<li><strong>Betrieblichem Umfeld</strong> (Werkstatt, Küche, Service, Büro, Bank)</li>
<li><strong>Situation</strong> (normal, Umbruch, Krise, Stress)</li>
<li><strong>Umsystemischem Kontext</strong> (Kultur, Gesellschaft, Natur, Technik, Politik)</li>
</ul>

Es gibt <strong>eindeutige Zusammenhänge</strong> zwischen Teamleistung, Arbeitsklima und Führungsstil.
</div>
<div class="merksatz">Merke: Führungsstil ist kein Charakterzug — er ist ein Instrument, das situativ angepasst werden muss.</div>
</div>
</div>

<div class="tl-item">
<div class="tl-num tl-num-b">2</div>
<div class="tl-head" onclick="this.parentElement.classList.toggle('open')">
<div><div class="tl-title">GRID-Modell (Blake und Mouton) — 4 Führungsstile</div><div class="tl-merksatz">«Zwei Dimensionen: Sache und Mensch — vier Kombinationen.»</div></div>
<div class="tl-arrow">▶</div>
</div>
<div class="tl-detail">
<div class="tl-body"><strong>Zwei Dimensionen der Führung:</strong>
<ul style="margin:10px 0 10px 20px;line-height:1.8">
<li><strong style="color:var(--r)">Betonung der Sachziele und Leistung</strong></li>
<li><strong style="color:var(--ac)">Betonung der zwischenmenschlichen Aspekte</strong></li>
</ul>

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:12px;margin:18px 0">
<div class="c cr" style="padding:16px 18px">
<strong>Stil 1 — LENKEN (autoritär)</strong><br>
<em>hoch Sache / tief Mensch</em> · Diktieren und kontrollieren. Hohe Ziele, hart mit sich selbst, vertraut eigenen Fähigkeiten mehr als denen der MA. Knappe Anordnungen, strenge Kontrolle, kritisiert Abweichungen. <em>Kümmert sich mehr um die Sache.</em>
</div>
<div class="c cg" style="padding:16px 18px">
<strong>Stil 2 — ANLEITEN (partizipativ)</strong><br>
<em>hoch Sache / hoch Mensch</em> · Überzeugen und trainieren. Hohe Ziele UND Bedürfnisse der MA wichtig. Vertraut in Fähigkeiten, hört Meinungen, klare Aufträge mit Handlungsspielraum. Erlaubt Fehler als Lernchance. <em>Kümmert sich um Sache UND Mensch.</em>
</div>
<div class="c cm" style="padding:16px 18px">
<strong>Stil 3 — UNTERSTÜTZEN (karitativ)</strong><br>
<em>tief Sache / hoch Mensch</em> · Ermutigen und zusammenarbeiten. Ruhig, freundlich, wohlwollend. Erarbeitet Ziele gemeinsam. Grosse Freiräume, kaum Kontrolle, viel Anerkennung. <em>Kümmert sich mehr um Beziehung und Motivation als um speditive Sachziele.</em>
</div>
<div class="c cp" style="padding:16px 18px">
<strong>Stil 4 — DELEGIEREN (laisser faire)</strong><br>
<em>tief Sache / tief Mensch</em> · Übertragen und bevollmächtigen. An eigener Entlastung orientiert. Vertraut in Fähigkeiten/Motivation der MA, delegiert ganze Aufgaben mit Kompetenz und Verantwortung. Kontrolliert nur Ergebnisse. <em>Machen lassend.</em>
</div>
</div>

<div class="hla"><strong>🏨 Hotel Alpenblick — Alle vier Stile im Einsatz</strong><br>
<strong>Stil 1 (Lenken):</strong> Beim Brandschutz-Drill — keine Diskussion, klare Anweisungen<br>
<strong>Stil 2 (Anleiten):</strong> Einarbeitung der neuen Rezeptionistin Anna — Training mit Feedback<br>
<strong>Stil 3 (Unterstützen):</strong> Nach Todesfall im Team — viel Zeit, Empathie, gemeinsame Entscheide<br>
<strong>Stil 4 (Delegieren):</strong> Erfahrener F&amp;B-Manager Thomas plant Weihnachtsgala komplett eigenständig</div>

<strong>Situativ führen</strong><br>
Der Führungsstil muss an die Arbeitssituation angepasst werden. Faktoren:
<ul style="margin:10px 0 10px 20px;line-height:1.8">
<li>Schwierigkeitsgrad der Arbeit</li>
<li>Fähigkeit der Mitarbeitenden</li>
<li>Motivation der Mitarbeitenden</li>
<li>Umsystemische Einflüsse (Wetter, Kultur, Herkunft)</li>
<li>Eigene Fähigkeit, führungsrelevante Tools korrekt anzuwenden</li>
</ul>
</div>
<div class="merksatz">Merke: Die beste Führungskraft ist die, die alle vier Stile beherrscht und weiss, welcher wann passt.</div>
</div>
</div>

<div class="tl-item">
<div class="tl-num tl-num-b">3</div>
<div class="tl-head" onclick="this.parentElement.classList.toggle('open')">
<div><div class="tl-title">Management by Objectives (MbO) — Peter Drucker, 1954</div><div class="tl-merksatz">«Management by Objectives AND Self-Control.»</div></div>
<div class="tl-arrow">▶</div>
</div>
<div class="tl-detail">
<div class="tl-body">Führung durch Zielvereinbarung. Eine Form <strong>transaktionaler Führung</strong>. Strategische Ziele des Gesamtunternehmens werden mit den Mitarbeitenden umgesetzt, indem Ziele für jede Organisationseinheit gemeinsam festgelegt werden.

<strong>SMART-Ziele</strong>
<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:10px;margin:14px 0">
<div class="c ca" style="padding:14px 16px;text-align:center"><div style="font-size:28px">🎯</div><strong>S — Spezifisch</strong><br><span style="font-size:12px">Eindeutig, präzise, passend</span></div>
<div class="c ca" style="padding:14px 16px;text-align:center"><div style="font-size:28px">📏</div><strong>M — Messbar</strong><br><span style="font-size:12px">Oder beobachtbar — klare Vorgaben</span></div>
<div class="c ca" style="padding:14px 16px;text-align:center"><div style="font-size:28px">💪</div><strong>A — Aktiv beeinflussbar</strong><br><span style="font-size:12px">Erreichbar, attraktiv, anspruchsvoll</span></div>
<div class="c ca" style="padding:14px 16px;text-align:center"><div style="font-size:28px">✅</div><strong>R — Realistisch</strong><br><span style="font-size:12px">Umsetzbar mit Ressourcen</span></div>
<div class="c ca" style="padding:14px 16px;text-align:center"><div style="font-size:28px">⏰</div><strong>T — Terminiert</strong><br><span style="font-size:12px">Definiertes Zeitlimit</span></div>
</div>

<strong>Vorgehen im Zielvereinbarungsgespräch (10 Schritte):</strong>
<ol style="margin:10px 0 10px 20px;line-height:1.8">
<li>Zeitliche Wirkung (lang-, mittel-, kurzfristig)</li>
<li>Inhalt (strategische/operative Ziele)</li>
<li>Gültigkeitsbereich (Gesamt-, Bereichs-, persönliche Ziele)</li>
<li>Konkretheitsgrad</li>
<li>Absichten kommunizieren</li>
<li>Vorhersehbare Probleme diskutieren</li>
<li>Rahmenbedingungen vereinbaren (Quantität, Qualität, Kosten, Termine)</li>
<li>Ressourcen klären</li>
<li>Schriftlich dokumentieren</li>
<li>Am Ende der Laufzeit: Ergebnisse und neue Ziele besprechen</li>
</ol>

<strong>Voraussetzungen:</strong>
<ul style="margin:10px 0 10px 20px;line-height:1.8">
<li>Verständnis als Management-Aufgabe jeder Führungskraft</li>
<li>Gute Unternehmenskultur</li>
<li>Funktionierendes Informations- und Kommunikationssystem</li>
<li>Ziele müssen realistisch und erreichbar sein</li>
</ul>

<div class="hlr" style="margin-top:14px"><strong>⚠ HÄUFIGE PROBLEME BEI MbO</strong>
<ul style="margin:6px 0 0 20px;line-height:1.7">
<li>Führen über Zielvereinbarung wird ungenau verstanden</li>
<li>Ziele werden unklar formuliert</li>
<li>Ziele sind nicht stufengerecht</li>
<li>Aufwendig und arbeitsintensiv</li>
<li>Entartet zu bürokratischem System mit hohem Verwaltungsaufwand</li>
<li>Ziele werden als Kontrollmittel statt als Selbststeuerung verstanden</li>
</ul>
Peter Drucker nennt seine Theorie bewusst <strong>"Management by Objectives and Self-Control"</strong>.
</div>

<div class="hla" style="margin-top:14px"><strong>🏨 Hotel Alpenblick — SMART-Ziel für F&amp;B</strong><br>
Sara vereinbart mit F&amp;B-Manager <strong>Thomas</strong>:<br>
<strong>S</strong> — Den Umsatz im Frühstücksrestaurant steigern<br>
<strong>M</strong> — Von durchschnittlich <strong>CHF 28 auf CHF 35 pro Gast</strong><br>
<strong>A</strong> — Durch neue À-la-carte-Optionen (Thomas hat Entscheidungsmacht)<br>
<strong>R</strong> — Budget <strong>CHF 8'000</strong> für Konzept und Marketing steht zur Verfügung<br>
<strong>T</strong> — Bis Ende Q2, also <strong>30. Juni</strong><br>
Zwischenreview: <strong>15. Mai</strong>. Schriftlich dokumentiert in der Zielvereinbarung.</div>
</div>
<div class="merksatz">Merke: Ohne SMART wird aus einem Ziel ein Wunsch. Gute Ziele motivieren, schlechte frustrieren.</div>
</div>
</div>

</div>
</div>

<!-- KAP 6: FÜHRUNGS-TOOLBOX -->
<div class="sec" id="fl_kap6"><h1>06 · Führungs-Toolbox</h1><p class="sub">Planen · Kommunikation · Fragen · Delegation · Kontrolle · Feedback · ICH-Botschaften · Entscheiden</p>

<div style="display:flex;gap:8px;margin:14px 0"><button onclick="document.querySelectorAll('#fl_kap6 .tl-item').forEach(e=>e.classList.add('open'))">Alle aufklappen</button><button onclick="document.querySelectorAll('#fl_kap6 .tl-item').forEach(e=>e.classList.remove('open'))">Alle schliessen</button></div>

<div class="tl">

<div class="tl-item">
<div class="tl-num tl-num-b">1</div>
<div class="tl-head" onclick="this.parentElement.classList.toggle('open')">
<div><div class="tl-title">Planen & Führungskommunikation</div><div class="tl-merksatz">«Wesentlich ist nicht, was ich sage, sondern was der andere Mensch versteht.»</div></div>
<div class="tl-arrow">▶</div>
</div>
<div class="tl-detail">
<div class="tl-body"><strong>6.1 Planen</strong>
<ul style="margin:10px 0 10px 20px;line-height:1.8">
<li>Ziel- und Zeitplanungsinstrumente, Aktivitätenlisten, Einsatz- und Projektpläne</li>
<li>Problemlösungstechniken</li>
<li>Klares Verständnis der Ressourcen: <strong>materiell, personell, finanziell</strong></li>
<li>Entscheidungen innerhalb der Dimensionen <strong>Zeit und Raum</strong></li>
</ul>

<strong>6.2 Führungskommunikation</strong><br>
Die wichtigsten, alltäglichen Führungsaufgaben sind Kommunikationsaufgaben:
<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:8px;margin:14px 0">
<div class="c ca" style="padding:12px 14px"><strong>Delegation</strong><br><span style="font-size:12px;color:var(--tx2)">Auftragserteilung</span></div>
<div class="c ca" style="padding:12px 14px"><strong>Gespräche</strong><br><span style="font-size:12px;color:var(--tx2)">Persönlich, MAG</span></div>
<div class="c cg" style="padding:12px 14px"><strong>Feedback</strong><br><span style="font-size:12px;color:var(--tx2)">Lob und Kritik</span></div>
<div class="c cm" style="padding:12px 14px"><strong>Klärungen</strong><br><span style="font-size:12px;color:var(--tx2)">Verständnis sichern</span></div>
<div class="c cp" style="padding:12px 14px"><strong>Berichterstattung</strong><br><span style="font-size:12px;color:var(--tx2)">P&amp;L, Vollzugsmeldungen</span></div>
<div class="c cp" style="padding:12px 14px"><strong>Verhandlungen</strong><br><span style="font-size:12px;color:var(--tx2)">Gemeinsame Lösungen</span></div>
</div>

<div class="hla"><strong>DAS FUNDAMENTALE KOMMUNIKATIONSPRINZIP</strong><br>
<strong>Wesentlich ist nicht, was ich sage, sondern was der andere Mensch versteht.</strong> Es liegt in meiner Verantwortung, wie andere mich erleben und verstehen. Gute Kommunikation ist empathische Kommunikation — rückfragen und sicherstellen!</div>

<strong>Grundsätze der Führungskommunikation:</strong>
<ul style="margin:10px 0 10px 20px;line-height:1.8">
<li>Sicherstellen, dass Ruhe und Ordnung herrschen</li>
<li>Es spricht immer nur einer</li>
<li><strong>ICH-Botschaften</strong> verwenden</li>
<li>Kurze Sätze. Kein Blabla…</li>
<li>Wer fragt, führt das Gespräch</li>
<li>Aktiv zuhören</li>
<li>Verständnis klären (Feedback-Kultur)</li>
<li>Eigenverantwortung einfordern: <em>"Was schlagen Sie vor?"</em></li>
</ul>

<div class="hlr" style="margin-top:14px"><strong>⚠ EMOTIONEN VS. FAKTEN</strong><br>
Im Führungsprozess geht es immer nur um <strong>Facts</strong>. Persönliches ist wichtig, passiert aber <strong>separat und ausserhalb des Plenums</strong>. Die Mitarbeitenden müssen wissen, dass sie bei der vorgesetzten Person auf offenes Ohr und offene Tür stossen.</div>
</div>
<div class="merksatz">Merke: Im Plenum Fakten — unter vier Augen Emotionen. Nie umgekehrt.</div>
</div>
</div>

<div class="tl-item">
<div class="tl-num tl-num-b">2</div>
<div class="tl-head" onclick="this.parentElement.classList.toggle('open')">
<div><div class="tl-title">Wer fragt, führt — Die 8 Fragearten</div><div class="tl-merksatz">«Nicht wer antwortet, sondern wer fragt, führt das Gespräch!»</div></div>
<div class="tl-arrow">▶</div>
</div>
<div class="tl-detail">
<div class="tl-body">Fragen <strong>aktivieren</strong>, fördern den Dialog und verhindern Monologe.

<table style="width:100%;margin-top:12px;border-collapse:collapse;font-size:13px">
<tr><th style="padding:8px 10px;border:1px solid var(--bd);background:rgba(139,44,90,.08);text-align:left">Frageart</th><th style="padding:8px 10px;border:1px solid var(--bd);background:rgba(139,44,90,.08);text-align:left">Ziel</th><th style="padding:8px 10px;border:1px solid var(--bd);background:rgba(139,44,90,.08);text-align:left">Merkmale</th></tr>
<tr><td style="padding:8px 10px;border:1px solid var(--bd)"><strong>offen</strong></td><td style="padding:8px 10px;border:1px solid var(--bd)">Informationen sammeln</td><td style="padding:8px 10px;border:1px solid var(--bd)">W-Fragen (Was, Wie, Warum, Wer, Wo, Wann)</td></tr>
<tr><td style="padding:8px 10px;border:1px solid var(--bd)"><strong>geschlossen</strong></td><td style="padding:8px 10px;border:1px solid var(--bd)">Entscheid Ja/Nein</td><td style="padding:8px 10px;border:1px solid var(--bd)">mit Verb beginnend</td></tr>
<tr><td style="padding:8px 10px;border:1px solid var(--bd)"><strong>alternativ</strong></td><td style="padding:8px 10px;border:1px solid var(--bd)">Entscheid erleichtern</td><td style="padding:8px 10px;border:1px solid var(--bd)">zwei Alternativen mit "oder"</td></tr>
<tr><td style="padding:8px 10px;border:1px solid var(--bd)"><strong>Klärungs-/Verständnisfragen</strong></td><td style="padding:8px 10px;border:1px solid var(--bd)">Verständnis klären</td><td style="padding:8px 10px;border:1px solid var(--bd)">"Habe ich dich richtig verstanden…"</td></tr>
<tr><td style="padding:8px 10px;border:1px solid var(--bd)"><strong>Gegenfragen</strong></td><td style="padding:8px 10px;border:1px solid var(--bd)">Klären, Zeit gewinnen</td><td style="padding:8px 10px;border:1px solid var(--bd)">Zusätzliche Zeit und Informationen</td></tr>
<tr><td style="padding:8px 10px;border:1px solid var(--bd)"><strong>zirkulär</strong></td><td style="padding:8px 10px;border:1px solid var(--bd)">Perspektivenwechsel</td><td style="padding:8px 10px;border:1px solid var(--bd)">"Wenn Sie Ihr eigener Kunde wären…"</td></tr>
<tr><td style="padding:8px 10px;border:1px solid var(--bd)"><strong>hypothetisch</strong></td><td style="padding:8px 10px;border:1px solid var(--bd)">Lösungsorientierung</td><td style="padding:8px 10px;border:1px solid var(--bd)">"Nehmen wir an, dass…"</td></tr>
<tr><td style="padding:8px 10px;border:1px solid var(--bd)"><strong>rhetorisch</strong></td><td style="padding:8px 10px;border:1px solid var(--bd)">Interesse wecken, Spannung</td><td style="padding:8px 10px;border:1px solid var(--bd)">Fragesteller beantwortet selbst</td></tr>
</table>

<div class="hla" style="margin-top:14px"><strong>REMINDER</strong><br>
<strong>Information ist eine Holschuld!</strong></div>
</div>
<div class="merksatz">Merke: Wer nur Antworten gibt, verliert die Gesprächsführung. Wer die richtigen Fragen stellt, behält die Regie.</div>
</div>
</div>

<div class="tl-item">
<div class="tl-num tl-num-b">3</div>
<div class="tl-head" onclick="this.parentElement.classList.toggle('open')">
<div><div class="tl-title">Delegieren — Die 5 Schritte der Auftragserteilung</div><div class="tl-merksatz">«Rückfragen JETZT — sonst landet die Aufgabe zurück bei der Führungskraft!»</div></div>
<div class="tl-arrow">▶</div>
</div>
<div class="tl-detail">
<div class="tl-body">Mitarbeitende werden durch Delegation <strong>systematisch an erweiterte, höherwertige Aufgaben</strong> herangeführt. Alle gewinnen: Fordern und Fördern der MA, Entlastung und Zeitgewinn der Führung, bessere Verteilung von Wissen, organisierte Stellvertretung.

<strong>Delegieren bedeutet:</strong>
<ul style="margin:10px 0 10px 20px;line-height:1.8">
<li>Selbstentlastung und Ausgleich der Belastungen</li>
<li>Effizienzsteigerung</li>
<li>Mit gutem Beispiel vorangehen</li>
<li>Wissen und Können verteilen</li>
<li>Mitarbeitende nach Stärken einsetzen</li>
<li>Stellvertretungen sichern</li>
<li>Mitarbeitende aufwerten und Entwicklungschancen bieten</li>
<li>Stufengerecht kommunizieren (Ausbildung, Sprache, Erfahrung)</li>
<li>Bewältigbarkeit sicherstellen</li>
</ul>

<div class="hla" style="margin:14px 0"><strong>DIE ENTSCHEIDENDE FRAGE</strong><br>
Was muss ich den Mitarbeitenden vermitteln, damit diese <strong>fähig und bereit</strong> sind, die delegierten Aufgaben zielgerichtet auszuführen?</div>

<strong>Die 5 Schritte der Auftragserteilung:</strong>
<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:12px;margin:18px 0">
<div class="c ca" style="padding:16px 18px">
<strong>1️⃣ WARUM? — Orientierung (IST)</strong>
<ul style="margin:8px 0 0 18px;line-height:1.6;font-size:13px">
<li>Aufgabe/Situation beschreiben</li>
<li>Auftrag begründen</li>
<li>Zusammenhänge und Sinn aufzeigen</li>
</ul>
</div>
<div class="c ca" style="padding:16px 18px">
<strong>2️⃣ WAS? — Zielsetzung (SOLL)</strong>
<ul style="margin:8px 0 0 18px;line-height:1.6;font-size:13px">
<li>Was ist das Ziel?</li>
<li>Worauf kommt es an?</li>
<li>Wann ist die Aufgabe gut gelöst?</li>
<li>Was danach (Verhalten am Ziel)?</li>
</ul>
</div>
<div class="c cm" style="padding:16px 18px">
<strong>3️⃣ WER? — Verantwortung &amp; Kompetenzen</strong>
<ul style="margin:8px 0 0 18px;line-height:1.6;font-size:13px">
<li>Wer ist wofür verantwortlich?</li>
<li>Welche Hilfsmittel?</li>
<li>Welche Informationen wo?</li>
<li>Welches Budget, Personen?</li>
<li>Rahmenbedingungen?</li>
<li>Koordination mit wem?</li>
</ul>
</div>
<div class="c cm" style="padding:16px 18px">
<strong>4️⃣ WANN? — Termin</strong>
<ul style="margin:8px 0 0 18px;line-height:1.6;font-size:13px">
<li>Anfangs-, Zwischen-, Endtermin</li>
<li>Fortschrittskontrolle planen</li>
<li>Vollzugsmeldung/Berichterstattung</li>
</ul>
</div>
<div class="c cg" style="padding:16px 18px;grid-column:1/-1">
<strong>5️⃣ VERSTANDEN? — Verständnis klären</strong>
<ul style="margin:8px 0 0 18px;line-height:1.6;font-size:13px">
<li>Klären, ob der Auftrag verstanden wurde</li>
<li><strong>Rückfragen JETZT</strong> (sonst landet die Aufgabe wieder bei der Führungskraft!)</li>
<li>Begleitung definieren: Wo gibt es Hilfe?</li>
<li>Wo ist der Chef, wie erreichbar?</li>
</ul>
</div>
</div>

<div class="hlr"><strong>⚠ RÜCKDELEGATION VERMEIDEN</strong><br>
Wenn Rückfragen <strong>nicht jetzt im Moment der Auftragserteilung</strong> gestellt werden, kommt die Aufgabe zurück zur Führungskraft. Das ist der häufigste Fehler!</div>

<div class="hla" style="margin-top:14px"><strong>🏨 Hotel Alpenblick — Delegation Teamevent</strong><br>
Sara delegiert die Organisation eines Teamevents an die Rezeptionistin <strong>Anna</strong>:<br>
<strong>1. Warum:</strong> Wir hatten seit 2 Jahren kein Teamevent — das Miteinander leidet.<br>
<strong>2. Was:</strong> Ein Anlass für alle <strong>38 MA am 14. September</strong>, der Zusammenhalt fördert.<br>
<strong>3. Wer:</strong> Anna hat <strong>CHF 3'500 Budget</strong>, Jessica (HR) hilft mit Einladungen, Thomas mit F&amp;B.<br>
<strong>4. Wann:</strong> Konzept bis <strong>10. Juli</strong>, Zwischenstand <strong>15. August</strong>, Event <strong>14. September</strong>.<br>
<strong>5. Verstanden?</strong> <em>"Anna, fass mal zusammen, was du jetzt tust."</em> — Anna erklärt — Sara korrigiert ein Missverständnis bzgl. Budget-Verwendung.</div>
</div>
<div class="merksatz">Merke: Delegieren ohne Schritt 5 ist Zufallsarbeit. Der letzte Schritt entscheidet, ob du dir Zeit sparst — oder doppelt arbeitest.</div>
</div>
</div>

<div class="tl-item">
<div class="tl-num tl-num-b">4</div>
<div class="tl-head" onclick="this.parentElement.classList.toggle('open')">
<div><div class="tl-title">Kontrolle — Aufmerksamkeit statt Misstrauen</div><div class="tl-merksatz">«Erwischen Sie die Mitarbeitenden bei guten Leistungen!»</div></div>
<div class="tl-arrow">▶</div>
</div>
<div class="tl-detail">
<div class="tl-body">In unserer Kultur ist "Kontrolle" oft negativ besetzt (Eltern, Schule, Verkehr — Angst, "erwischt" zu werden). Grundannahme: <strong>Wer kontrolliert, misstraut.</strong> Das stimmt so nicht!

Als Führungskraft ist die Zielerreichung zu überprüfen (<strong>Controlling = Steuerung</strong>). Blind vertrauen ist naiv.

<div class="hla" style="margin:14px 0"><strong>KONTROLLE IST AUFMERKSAMKEIT</strong><br>
Wer nicht kontrolliert, signalisiert <strong>Desinteresse</strong>. Gute Kontrolle wirkt motivierend: Sie erlaubt Lob für Over-Performance und kann zum <em>dynamischen Akzelerator</em> werden (z.B. TripAdvisor-Score als Bonus-Ziel).</div>

<div class="hla"><strong>DENKANSATZ</strong><br>
<em>"Erwischen Sie die Mitarbeitenden bei guten Leistungen!"</em></div>

<strong>Paradigmenwechsel: 20. vs. 21. Jahrhundert</strong>
<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:12px;margin:14px 0">
<div class="c cr" style="padding:18px 20px;text-align:center">
<div style="font-size:11px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:var(--r);margin-bottom:8px">20. Jahrhundert — 3K</div>
<strong style="font-size:16px">Kommandieren — Kontrollieren — Korrigieren</strong>
</div>
<div class="c cg" style="padding:18px 20px;text-align:center">
<div style="font-size:11px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:var(--g);margin-bottom:8px">21. Jahrhundert — 3F</div>
<strong style="font-size:16px">Fordern — Fördern — Feedback</strong>
</div>
</div>
</div>
<div class="merksatz">Merke: Kontrolle ohne Aufmerksamkeit ist Schikane. Aufmerksamkeit ohne Kontrolle ist Leichtsinn. Beides zusammen ist Führung.</div>
</div>
</div>

<div class="tl-item">
<div class="tl-num tl-num-b">5</div>
<div class="tl-head" onclick="this.parentElement.classList.toggle('open')">
<div><div class="tl-title">Feedback & ICH-Botschaften</div><div class="tl-merksatz">«Lob vor allen — Kritik im Einzelgespräch!»</div></div>
<div class="tl-arrow">▶</div>
</div>
<div class="tl-detail">
<div class="tl-body"><strong>Informationsquellen für Feedback:</strong>
<table style="width:100%;margin-top:12px;border-collapse:collapse;font-size:13px">
<tr><th style="padding:8px 10px;border:1px solid var(--bd);background:rgba(139,44,90,.08);text-align:left">Informationsquelle</th><th style="padding:8px 10px;border:1px solid var(--bd);background:rgba(139,44,90,.08);text-align:left">Bitte beachten</th></tr>
<tr><td style="padding:8px 10px;border:1px solid var(--bd)">Fakten (Statistiken, Zahlen)</td><td style="padding:8px 10px;border:1px solid var(--bd)">Absolut verlässlich, aber historisch (ex-post)</td></tr>
<tr><td style="padding:8px 10px;border:1px solid var(--bd)">Rückmeldungen von Kund:innen</td><td style="padding:8px 10px;border:1px solid var(--bd)">Beide Sichtweisen von Kund:innen UND MA klären</td></tr>
<tr><td style="padding:8px 10px;border:1px solid var(--bd)">Eigene Beobachtungen</td><td style="padding:8px 10px;border:1px solid var(--bd)">"Meine" Wahrheit, mit Ich-Botschaften erläutern</td></tr>
<tr><td style="padding:8px 10px;border:1px solid var(--bd)">Rückmeldungen von Teammitgliedern</td><td style="padding:8px 10px;border:1px solid var(--bd)"><strong>Vorsicht: Sprengstoff!</strong> Mit eigenen Wahrnehmungen klären</td></tr>
</table>

<div class="hla" style="margin:14px 0"><strong>DIE GOLDENE FEEDBACK-REGEL</strong><br>
<strong>Lob vor allen — Kritik im Einzelgespräch!</strong></div>

<strong>Kritik ist im Grunde wertfrei</strong><br>
Das Wort <em>Kritik</em> (gr. κριτική / lat. <em>critique</em>) bedeutet eigentlich "scheiden, urteilen, unterscheiden".
<ul style="margin:10px 0 10px 20px;line-height:1.8">
<li>Kritisieren Sie <strong>die Sache</strong> (Resultate) — niemals den Menschen!</li>
<li>"Erwischen" Sie Mitarbeitende auch bei <strong>guten Leistungen</strong></li>
<li>Kritisieren Sie aktuell und präzise</li>
<li>Anerkennen Sie bewusst und aktuell</li>
<li>Kritik umfasst drei Komponenten: <strong>Lob — Was war nicht gut? — Verbesserungsmöglichkeit</strong></li>
<li>Empfehlung: Begriff "Kritik" durch <strong>"Würdigung"</strong> ersetzen</li>
</ul>

<div class="hla" style="margin-top:14px"><strong>MERKSATZ</strong><br>
<em>"C'est le ton qui fait la musique."</em> Höflichkeit und gegenseitiger Respekt sind selbstverständlich!</div>

<strong>Die 4 Bausteine der Rückmeldung:</strong>
<div style="display:flex;flex-wrap:wrap;gap:8px;align-items:center;justify-content:center;margin:14px 0">
<div style="padding:10px 16px;background:var(--s2);border-radius:8px;font-weight:600;font-size:13px">1. Gesamteindruck</div>
<div style="color:var(--ac)">→</div>
<div style="padding:10px 16px;background:var(--s2);border-radius:8px;font-weight:600;font-size:13px">2. Detaillierte Begründung (+ und −)</div>
<div style="color:var(--ac)">→</div>
<div style="padding:10px 16px;background:var(--s2);border-radius:8px;font-weight:600;font-size:13px">3. Handlungsanweisung</div>
<div style="color:var(--ac)">→</div>
<div style="padding:10px 16px;background:var(--s2);border-radius:8px;font-weight:600;font-size:13px">4. Umsetzung sicherstellen</div>
</div>

<strong>ICH-Botschaften — 3 Komponenten</strong>
<ul style="margin:10px 0 10px 20px;line-height:1.8">
<li><strong style="color:var(--r)">Vermeiden:</strong> Sprachhülsen in "man"-Form</li>
<li><strong style="color:var(--r)">Vermeiden:</strong> "Wir"-Formulierungen (wirken überheblich, pluralis majestatis)</li>
<li><strong style="color:var(--g)">Richtig:</strong> Ich-Botschaft mit drei Komponenten:
<ul style="margin:6px 0 0 20px">
<li>Vorwurfslose, klare Beschreibung der <strong>Situation</strong></li>
<li>Beschreibung der <strong>Folgen</strong> und Auswirkungen</li>
<li>Evtl. die eigene, aktuelle <strong>Gefühlslage</strong></li>
</ul>
</li>
</ul>

<div class="hla" style="margin-top:14px"><strong>🏨 ICH-Botschaft vs. DU-Vorwurf im Hotel</strong><br>
<strong style="color:var(--r)">❌ DU-Vorwurf:</strong> "Du bist schon wieder zu spät!"<br><br>
<strong style="color:var(--g)">✅ ICH-Botschaft:</strong> "Ich sehe, dass du heute um 7:15 gekommen bist <em>(Situation)</em>. Dadurch konnten wir das Morgenbriefing nicht pünktlich starten und zwei Gäste mussten beim Check-out warten <em>(Folgen)</em>. Das ärgert mich und stresst mich <em>(Gefühl)</em>."</div>
</div>
<div class="merksatz">Merke: Der DU-Vorwurf greift den Menschen an. Die ICH-Botschaft beschreibt das Problem. Nur Letzteres öffnet Lösungsräume.</div>
</div>
</div>

<div class="tl-item">
<div class="tl-num tl-num-b">6</div>
<div class="tl-head" onclick="this.parentElement.classList.toggle('open')">
<div><div class="tl-title">Entscheiden — Mut beweisen</div><div class="tl-merksatz">«Es ist besser, eine falsche Entscheidung zu treffen, als gar keine.» — Winston Churchill</div></div>
<div class="tl-arrow">▶</div>
</div>
<div class="tl-detail">
<div class="tl-body"><div style="text-align:center;font-family:var(--se);font-size:18px;color:var(--ac);padding:14px;margin:14px 0;font-style:italic;border-top:1px solid var(--bd);border-bottom:1px solid var(--bd)">
"Fait nous la paix — conduit!"<br>
<span style="font-size:13px;color:var(--tx3);font-style:normal">— Soldat zu Leutnant, Schützengraben Verdun 1916</span>
</div>

Zum Kern der Führungskompetenz gehört die Fähigkeit, <strong>Entscheidungen zu treffen</strong> und Orientierung zu geben. Nichts ist frustrierender als aufgeschobene Entscheide.

Entscheidungen müssen oft auf Basis <strong>ungenügender Informationen</strong> und unter <strong>Zeitdruck</strong> getroffen werden. Das liegt in der Natur des Prozesses.

<div class="hla" style="margin:14px 0"><strong>ZITAT ANTHONY ROBBINS (2014)</strong><br>
<em>"Erfolg ist das Ergebnis richtiger Entscheidungen. Richtige Entscheidungen sind das Ergebnis von Erfahrung. Erfahrung ist das Ergebnis von falschen Entscheidungen."</em></div>

<div class="hla"><strong>WINSTON CHURCHILL</strong><br>
<em>"Es ist besser, eine falsche Entscheidung zu treffen, als gar keine."</em></div>

<strong>Partizipieren oder selbst entscheiden?</strong><br>
Die Partizipation reicht von <strong>alleinigem Entscheid</strong> bis zu <strong>Einfluss und Beiträgen der MA</strong>. Partizipation nur dann, wenn sie <strong>Vorteile für alle</strong> bringt. Unnötige Diskussionen frustrieren.

<div class="hlr" style="margin-top:14px"><strong>⚠ GEFAHR</strong><br>
Zögerliche Entscheidungen werden als <strong>Schwäche</strong> ausgelegt! Formulierungen im Konjunktiv ("hätte, wäre, könnte") sind unangebracht.</div>

<div class="hla" style="margin-top:14px"><strong>ENTSCHEIDEN-MANTRA</strong><br>
<strong>Entscheiden heisst wagen! Entscheiden heisst bewegen! Entscheiden heisst Mut beweisen.</strong></div>
</div>
<div class="merksatz">Merke: Eine zeitig getroffene "gute" Entscheidung ist besser als eine verspätete "perfekte". Die Qualität eines Entscheids bemisst sich auch an seiner Geschwindigkeit.</div>
</div>
</div>

</div>
</div>

<!-- KAP 7: MOTIVATION -->
<div class="sec" id="fl_kap7"><h1>07 · Motivation</h1><p class="sub">Maslow · Intrinsisch/Extrinsisch · Attitude > Aptitude · Grundsätze</p>

<div style="display:flex;gap:8px;margin:14px 0"><button onclick="document.querySelectorAll('#fl_kap7 .tl-item').forEach(e=>e.classList.add('open'))">Alle aufklappen</button><button onclick="document.querySelectorAll('#fl_kap7 .tl-item').forEach(e=>e.classList.remove('open'))">Alle schliessen</button></div>

<div class="tl">

<div class="tl-item">
<div class="tl-num tl-num-b">1</div>
<div class="tl-head" onclick="this.parentElement.classList.toggle('open')">
<div><div class="tl-title">Die Bedürfnispyramide nach Abraham Maslow (1943)</div><div class="tl-merksatz">«Aus Bedürfnissen leiten sich Motive ab, aus Motiven Motivation, aus Motivation Handlung.»</div></div>
<div class="tl-arrow">▶</div>
</div>
<div class="tl-detail">
<div class="tl-body">Motive sind <strong>Beweggründe des Handelns</strong>, Bedürfnisse wie Hunger oder der Wunsch nach Prestige. Sie sind nicht immer bewusst.

<div style="display:flex;flex-direction:column;align-items:center;margin:20px 0;gap:4px">
<div style="width:35%;padding:12px 20px;text-align:center;font-weight:700;font-size:13px;border-radius:6px;background:#b838e8;color:#fff">5. Selbstverwirklichung (Wachstum)</div>
<div style="width:52%;padding:12px 20px;text-align:center;font-weight:700;font-size:13px;border-radius:6px;background:#38e89c;color:#0f1117">4. Anerkennung und Wertschätzung</div>
<div style="width:70%;padding:12px 20px;text-align:center;font-weight:700;font-size:13px;border-radius:6px;background:#38b6e8;color:#0f1117">3. Sozialbedürfnis</div>
<div style="width:85%;padding:12px 20px;text-align:center;font-weight:700;font-size:13px;border-radius:6px;background:#e8a838;color:#0f1117">2. Sicherheit</div>
<div style="width:100%;padding:12px 20px;text-align:center;font-weight:700;font-size:13px;border-radius:6px;background:#e84f38;color:#fff">1. Grund- oder Existenzbedürfnisse</div>
</div>
<p style="text-align:center;color:var(--tx3);font-size:13px;margin-top:-8px"><em>Stufen 1–4: Defizitbedürfnisse · Stufe 5: Wachstumsbedürfnis</em></p>

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:12px;margin:14px 0">
<div class="c cr" style="padding:14px 16px"><strong>1. Physiologische Bedürfnisse</strong><br><span style="font-size:13px;color:var(--tx2)">Atmung, Wasser, Nahrung, Schlaf, Fortpflanzung, Homöostase, sensorischer Genuss.</span></div>
<div class="c cm" style="padding:14px 16px"><strong>2. Sicherheitsbedürfnisse</strong><br><span style="font-size:13px;color:var(--tx2)">Körperliche/seelische Sicherheit, materielle Grundsicherung, Arbeit, Wohnung, Gesundheit.</span></div>
<div class="c ca" style="padding:14px 16px"><strong>3. Soziale Bedürfnisse</strong><br><span style="font-size:13px;color:var(--tx2)">Familie, Freundschaft, Zugehörigkeit, Kommunikation, Gemeinschaft, Liebe.</span></div>
<div class="c cg" style="padding:14px 16px"><strong>4. Individualbedürfnisse</strong><br><span style="font-size:13px;color:var(--tx2)">Vertrauen, Wertschätzung, Erfolg, Freiheit. (a) Stärke/Erfolg/Unabhängigkeit, (b) Ansehen/Prestige/Achtung.</span></div>
<div class="c cp" style="padding:14px 16px;grid-column:1/-1"><strong>5. Selbstverwirklichung</strong><br><span style="font-size:13px;color:var(--tx2)">Neue Unruhe: Talente, Potenziale und Kreativität entfalten. Persönlichkeit weiterentwickeln. <strong>Das eigene Potenzial ausschöpfen — Leben gestalten und Sinn geben.</strong></span></div>
</div>
</div>
<div class="merksatz">Merke: Höhere Ebenen werden erst wichtig, wenn die tieferen befriedigt sind. Wer hungert, sucht keinen Sinn.</div>
</div>
</div>

<div class="tl-item">
<div class="tl-num tl-num-b">2</div>
<div class="tl-head" onclick="this.parentElement.classList.toggle('open')">
<div><div class="tl-title">Kein Verhalten ohne Motiv — Intrinsisch vs. Extrinsisch</div><div class="tl-merksatz">«Geld allein macht nicht glücklich — schon gar nicht in der Hotellerie.»</div></div>
<div class="tl-arrow">▶</div>
</div>
<div class="tl-detail">
<div class="tl-body"><strong>Motivation</strong> = positive innere Antriebskraft. <strong>Motive und äussere Anreize</strong> lösen sie aus. <strong>Ängste oder Konflikte</strong> hemmen sie.

<strong>Arbeitszufriedenheit:</strong> Mitarbeitende sind zufrieden, wenn sie ihren Arbeitsbeitrag als <strong>gerechten Austausch</strong> empfinden. Gute Leistung → Erfolg → Arbeitszufriedenheit.

<strong>Grundmotive menschlichen Handelns:</strong>
<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin:14px 0">
<div class="c ca" style="padding:14px 16px"><strong>Lust ↔ Unlust</strong><br><span style="font-size:13px;color:var(--tx2)">Lust erleben — Unlust vermeiden</span></div>
<div class="c cm" style="padding:14px 16px"><strong>Angenehmes ↔ Unangenehmes</strong><br><span style="font-size:13px;color:var(--tx2)">Angenehmes erfahren — Unangenehmes vermeiden</span></div>
<div class="c cg" style="padding:14px 16px"><strong>Erfolg ↔ Misserfolg</strong><br><span style="font-size:13px;color:var(--tx2)">Erfolg anstreben — Misserfolg ausweichen</span></div>
</div>

<div class="hla"><strong>MERKSATZ</strong><br>
<strong>Es gibt kein Verhalten ohne Motiv!</strong></div>

"Zuckerbrot und Peitsche" war das Konzept der Vergangenheit. Erfolgreiche Führungspersonen schaffen Voraussetzungen, Umfeld und Klima, damit Mitarbeitende <strong>ihre eigenen Antriebe</strong> finden.

<strong>Zwei Arten der Motivation:</strong>
<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:12px;margin:14px 0">
<div class="c cg" style="padding:18px 20px">
<div style="font-size:11px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:var(--g);margin-bottom:8px">Intrinsisch / Primär</div>
<strong>Sachbezogene Motivation</strong><br>
<span style="font-size:13px">Befriedigung aus der Arbeit selbst. Arbeit ist Selbstzweck. → Freude, Dienstleistung, Hilfe</span>
</div>
<div class="c ca" style="padding:18px 20px">
<div style="font-size:11px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:var(--ac);margin-bottom:8px">Extrinsisch / Sekundär</div>
<strong>Sachfremde Motivation</strong><br>
<span style="font-size:13px">Befriedigung aus den Folgen der Arbeit. Arbeit ist Mittel zum Zweck. → Geld, Belohnung</span>
</div>
</div>

<div class="hla"><strong>WICHTIG FÜR DIE HOTELLERIE</strong><br>
<strong>Geld allein macht nicht glücklich!</strong> Mitarbeitende sind in der Hotellerie nur dann richtig, wenn sie <strong>primär motiviert</strong> sind — wenn ihnen das Helfen und Lösen von Kundenbedürfnissen Freude macht. Wer in der Hotellerie ausschliesslich des Geldes wegen arbeitet, ist falsch.</div>

<div class="hlr" style="margin-top:14px"><strong>⚠ ATTITUDE &gt; APTITUDE</strong><br>
Bei der Selektion ist die <strong>Aptitude (Fähigkeits-Mix)</strong> Grundvoraussetzung — aber die <strong>Attitude (Verhaltens-Mix)</strong> ist das entscheidende Kriterium. Der Michelin-gesternte Küchenchef taugt in der Game Lodge wenig, wenn er wild schreit, weil Gourmet-Zutaten im Busch nicht verfügbar sind. Gefragt ist die Person, die an den Aufgaben <em>wächst</em>.</div>

<strong>Motivationsbarrieren:</strong>
<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:12px;margin:14px 0">
<div class="c cr" style="padding:16px 18px">
<strong>Barrieren von innen</strong>
<ul style="margin:8px 0 0 18px;line-height:1.7;font-size:13px">
<li>Unsicherheit</li>
<li>Ängste</li>
<li>Frühere Misserfolge</li>
<li>Mangelndes Können</li>
<li>Hemmungen</li>
<li>Wenig Selbstvertrauen</li>
</ul>
</div>
<div class="c cr" style="padding:16px 18px">
<strong>Barrieren von aussen</strong>
<ul style="margin:8px 0 0 18px;line-height:1.7;font-size:13px">
<li>Wegnehmen beliebter Arbeiten</li>
<li>Unzureichende Kommunikation/Information</li>
<li>Kränkung</li>
<li>Nicht erhaltene Belohnung</li>
<li>Strenge Vorschriften, wenig Spielraum</li>
<li>Unterforderung</li>
</ul>
</div>
</div>
</div>
<div class="merksatz">Merke: In der Hotellerie zählt die Haltung mehr als der Lebenslauf. «Menschen mögen» ist Job-Voraussetzung Nr. 1.</div>
</div>
</div>

<div class="tl-item">
<div class="tl-num tl-num-b">3</div>
<div class="tl-head" onclick="this.parentElement.classList.toggle('open')">
<div><div class="tl-title">Motivations-Grundsätze</div><div class="tl-merksatz">«Wichtiger als Fremdmotivation ist das Vermeiden von Demotivation.»</div></div>
<div class="tl-arrow">▶</div>
</div>
<div class="tl-detail">
<div class="tl-body"><ul style="margin:10px 0 10px 20px;line-height:1.9">
<li>Wichtiger als Fremdmotivation ist das <strong>Vermeiden von Demotivation</strong></li>
<li>Motivation braucht Orientierung, Information, Anerkennung</li>
<li>Bedeutung von Arbeit/Leistung aufzeigen wirkt motivierend</li>
<li>Leistungsziele motivieren, wenn sie <strong>herausfordernd UND realistisch</strong> sind</li>
<li>Leistungsverhalten und Vorbild der Führungspersonen wirken antreibend</li>
<li>Kommunikation: Aktuell informieren</li>
<li>Mitarbeitende in Gestaltung und Zielformulierung einbeziehen</li>
<li>Führungs- und Fachkompetenz motivieren</li>
<li>Sichtbare Resultate geben Antrieb</li>
<li><strong>Erfolg ist der beste Motivator</strong></li>
<li>Motivation aus wertschätzenden sozialen Kontakten und Rückmeldungen</li>
<li>Starken MA Erfolge ermöglichen (Karrieren bauen)</li>
<li>Schwächere MA fördern und Fortschritte ermöglichen</li>
<li>Leistungsunwillige MA zu Erfolgen "nötigen"</li>
</ul>

<div class="hla" style="margin-top:14px"><strong>DIE KERNAUFGABE VON FÜHRUNG</strong><br>
Motivation führt zurück zur Kernaufgabe: <strong>die Ermöglichung einer optimalen Verbindung von Anliegen und Interessen des Unternehmens mit denjenigen des Individuums</strong>.</div>

<div class="hla" style="margin-top:14px"><strong>🏨 Hotel Alpenblick — Motivation</strong><br>
Marco (Souschef) klagt über zu wenig Wertschätzung. Sara analysiert: <strong>Sicherheit ✓, Soziales ✓</strong>, aber <strong>Wertschätzung (Stufe 4) fehlt</strong>. Sie delegiert ihm die Menü-Entwicklung für die Gala (Anerkennung + Eigenverantwortung) und erwähnt seine Kochkunst vor dem Team. Marcos Motivation steigt messbar — und intrinsisch: Er liebt seine Arbeit wieder, nicht wegen des Gehalts.</div>
</div>
<div class="merksatz">Merke: Erfolg ist der beste Motivator. Gib deinen Mitarbeitenden Gelegenheit, Erfolge zu haben — und sie werden dich dafür lieben.</div>
</div>
</div>

</div>
</div>

<!-- KAP 8: TOPEND-HOTELS -->
<div class="sec" id="fl_kap8"><h1>08 · Exkurs: Führung von Topend-Hotels</h1><p class="sub">New Luxury · Luxus-Kaskade · "The answer is yes" · Gast ist König</p>

<div style="text-align:center;font-family:var(--se);font-size:22px;color:var(--ac);padding:20px;margin:14px 0;font-style:italic;border-top:1px solid var(--bd);border-bottom:1px solid var(--bd)">
"The Answer is yes. What is the Question?"
</div>

<div style="display:flex;gap:8px;margin:14px 0"><button onclick="document.querySelectorAll('#fl_kap8 .tl-item').forEach(e=>e.classList.add('open'))">Alle aufklappen</button><button onclick="document.querySelectorAll('#fl_kap8 .tl-item').forEach(e=>e.classList.remove('open'))">Alle schliessen</button></div>

<div class="tl">

<div class="tl-item">
<div class="tl-num tl-num-b">1</div>
<div class="tl-head" onclick="this.parentElement.classList.toggle('open')">
<div><div class="tl-title">Grundhaltung & Abgrenzung — Was ist Topend?</div><div class="tl-merksatz">«Vom materiellen "to have" zum immateriellen "to be".»</div></div>
<div class="tl-arrow">▶</div>
</div>
<div class="tl-detail">
<div class="tl-body">Die Luxushotellerie unterscheidet heute <strong>Highend-</strong> und <strong>Topend-Betriebe</strong>. Topend-Hotels sind definiert durch:

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin:14px 0">
<div class="c cm" style="padding:16px 18px;text-align:center"><div style="font-size:28px">🏨</div><strong>Grösse</strong><br><span style="font-size:13px">Klein: <strong>&lt; 30 Units</strong> (Tendenz sinkend) — maximale Privatsphäre</span></div>
<div class="c cm" style="padding:16px 18px;text-align:center"><div style="font-size:28px">💰</div><strong>ADR (Zimmerpreis)</strong><br><span style="font-size:13px"><strong>&gt; EUR 1'500</strong> Average Daily Rate im Jahresdurchschnitt</span></div>
<div class="c cm" style="padding:16px 18px;text-align:center"><div style="font-size:28px">🌟</div><strong>Luxus-Fokus</strong><br><span style="font-size:13px"><strong>New &amp; Hidden Luxury</strong> — immaterielle Dimensionen</span></div>
</div>

<strong>Die Dimensionen des New Luxury</strong>
<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:8px;margin:14px 0">
<div class="c ca" style="padding:12px 14px;text-align:center"><div style="font-size:24px">🌌</div><strong>Raum</strong><br><span style="font-size:12px">Natur</span></div>
<div class="c ca" style="padding:12px 14px;text-align:center"><div style="font-size:24px">⏳</div><strong>Zeit</strong><br><span style="font-size:12px">Kostbares Gut</span></div>
<div class="c cg" style="padding:12px 14px;text-align:center"><div style="font-size:24px">👤</div><strong>Service</strong><br><span style="font-size:12px">Persönlich &amp; personifiziert</span></div>
<div class="c cp" style="padding:12px 14px;text-align:center"><div style="font-size:24px">🔒</div><strong>Sicherheit</strong><br><span style="font-size:12px">Daten &amp; Privatsphäre</span></div>
<div class="c cm" style="padding:12px 14px;text-align:center"><div style="font-size:24px">💎</div><strong>Exklusivität</strong><br><span style="font-size:12px">Beschränkte Verfügbarkeit</span></div>
<div class="c cg" style="padding:12px 14px;text-align:center"><div style="font-size:24px">🌿</div><strong>Gesundheit</strong><br><span style="font-size:12px">Holistisches Wohlbefinden</span></div>
</div>

<div class="hla"><strong>PARADIGMENWECHSEL</strong><br>
<strong>Vom materiellen "to have" zum immateriellen "to be"</strong><br>
Der Bling-Bling-Luxus (goldene Badewannen, Kristallleuchter) hat ausgedient. Der Topend-Gast setzt <strong>untadelige Hotel-Hardware voraus</strong> — sein Zuhause ist oft ebenbürtig oder überlegen. Differenzierung erfolgt über Destination, Geschmack und <em>intangible Ziele</em>.</div>

<strong>Die Luxus-Kaskade (nach Aeberhard)</strong>
<ol style="margin:10px 0 10px 20px;line-height:1.8">
<li><strong>Tangible Luxury / Physiological Needs</strong> — Traditional look &amp; feel</li>
<li><strong>Safety Needs</strong> — Sicherheit &amp; Schutz</li>
<li><strong>Intangible Luxury / Love &amp; Belonging</strong> — Hedonistisches Erleben: Space &amp; Time, personalisierter Service, Exklusivität</li>
<li><strong>Sensual Luxury / Esteem</strong> — Holistische Erfahrung: Haptik, Sensorik, Olfaktorik</li>
<li><strong>Spiritual Luxury / Self-actualisation</strong> — Reise zu sich selbst, Mind-Body-Soul-Balance</li>
</ol>
</div>
<div class="merksatz">Merke: Topend-Luxus ist nicht Hardware — er ist Haltung. Der beste Beweis: Der Gast merkt die Grandezza, ohne sie zu sehen.</div>
</div>
</div>

<div class="tl-item">
<div class="tl-num tl-num-b">2</div>
<div class="tl-head" onclick="this.parentElement.classList.toggle('open')">
<div><div class="tl-title">Führungsvoraussetzungen — Menschen mögen</div><div class="tl-merksatz">«Nur dem ist es vergönnt, eine gute Hotelfachperson zu sein, die Menschen mag.»</div></div>
<div class="tl-arrow">▶</div>
</div>
<div class="tl-detail">
<div class="tl-body"><strong>8.2.1 Menschen mögen</strong><br>
In keiner anderen Branche ist der wichtigste Produktionsfaktor so sehr <strong>der Mensch</strong>. Technologie kann die Kardinalsdienstleistung <strong>Mensch-zu-Mensch-Interaktion</strong> nicht ersetzen.

<div class="hla" style="margin:14px 0"><strong>KERNPRINZIP</strong><br>
<strong>Nur dem ist es vergönnt, eine gute Hotelfachperson zu sein, die Menschen mag.</strong> Die Essenz: zu jeder Zeit sein Bestes geben, eigene Bedürfnisse zurückstellen, Dienste mit Freude leisten — beseelt vom Gedanken, beim Gegenüber Glück zu provozieren.</div>

<strong>8.2.2 Der Mensch macht den Unterschied</strong><br>
Bei der Selektion: <strong>Charakter und Attitude</strong> entscheiden — nicht das Diplom.
<ul style="margin:10px 0 10px 20px;line-height:1.8">
<li>Bringt die Person <em>feu sacré</em> (Leidenschaft) mit?</li>
<li>Kann sie unter komplizierten Umständen pragmatische Lösungen finden?</li>
<li>Erkennt sie Liebe zum Detail?</li>
<li>Ist sie bereit, den Extra-Aufwand zu leisten?</li>
</ul>

<div class="hla"><strong>PRAXISBEISPIEL AEBERHARD</strong><br>
Der <strong>Air Traffic Controller als Guest Relations Officer</strong> rettet Priority-Handlings am Flughafen. Der <strong>Automechaniker als Butler</strong> repariert die liegengebliebene Limousine mit Hollywood-VIP-Gästen. Indirekt fachliche Fähigkeiten im Betrieb haben Platz!</div>

<strong>8.2.3 Lob und Tadel</strong><br>
Empowerment funktioniert nur mit <strong>Vertrauenskultur</strong>. Motivation durch Lob und Tadel ist wichtiger als monetäre Anreize. Wer gelobt wird, erbringt Top-Leistungen.

<strong>8.2.4 Vorbild leben</strong><br>
Die Hotelleitung legitimiert ihre Funktion durch das <strong>Vorleben des guten Beispiels</strong> auf allen Stufen. <strong style="color:var(--r)">Kein Entschweben in den Elfenbeinturm!</strong> Fürsorge, Behutsamkeit, aufrichtige Wertschätzung — mit Argusaugen von MA und Gästen wahrgenommen.

<strong>Permanenter Handlungsbedarf:</strong>
<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:8px;margin:14px 0">
<div class="c ca" style="padding:12px 14px"><strong>✨ Qualität</strong><br><span style="font-size:12px">Attention to Detail, Perfektion</span></div>
<div class="c cg" style="padding:12px 14px"><strong>👁 Gästeperspektive</strong><br><span style="font-size:12px">Nach 1½–2 Jahren Betriebsblindheit</span></div>
<div class="c cm" style="padding:12px 14px"><strong>🌐 Über den Tellerrand</strong><br><span style="font-size:12px">Trends weltweit verfolgen</span></div>
<div class="c ca" style="padding:12px 14px"><strong>📋 Planung</strong><br><span style="font-size:12px">Checklisten, vorbehaltene Entschlüsse</span></div>
<div class="c cg" style="padding:12px 14px"><strong>🎯 Vorbereitung</strong><br><span style="font-size:12px">Mise-en-Place, einen Schritt voraus</span></div>
<div class="c cr" style="padding:12px 14px"><strong>🚨 Notfall-Pläne</strong><br><span style="font-size:12px">Brände, Tsunami, Piraten</span></div>
<div class="c cp" style="padding:12px 14px"><strong>🕸 Netzwerk</strong><br><span style="font-size:12px">Borrow &amp; Replace</span></div>
<div class="c cm" style="padding:12px 14px"><strong>👂 Alle Sinne</strong><br><span style="font-size:12px">Aura, Erdung, Olfaktorik</span></div>
<div class="c ca" style="padding:12px 14px"><strong>📝 Nachbereitung</strong><br><span style="font-size:12px">Living &amp; Learning, Guest Profiles</span></div>
<div class="c cg" style="padding:12px 14px"><strong>🎭 Offenheit</strong><br><span style="font-size:12px"><em>Always expect the unexpected</em></span></div>
</div>

<div class="hla"><strong>DAS CREDO: "The answer is yes. What is the question?"</strong>
<ul style="margin:8px 0 0 20px;line-height:1.7">
<li>Positive Grundhaltung</li>
<li>Bedingungslosigkeit</li>
<li>Vertrauen, Herausforderungen lösen zu können</li>
<li>Bewusstsein: Für jede Aufgabe gibt es eine Antwort</li>
<li>Dienstleistungskette mit nachgelagerten Dienstleistern</li>
<li>Teamgefühl steigern</li>
<li>Erfolg als Motivator</li>
<li>Klare Positionierung nach aussen</li>
<li>Gesunde, sportliche Haltung: Wer ist der Beste?</li>
</ul>
</div>

<strong>8.2.5 Vom König darf man königliches Verhalten erwarten</strong>
<div class="hlr" style="margin:14px 0"><strong>⚠ WICHTIGE ABGRENZUNG</strong><br>
<strong>"Der Gast ist König — solange er sich königlich aufführt."</strong><br><br>
Dienste leisten ≠ dienen. Missbrauch reicht von Diebstahl über flegelhaftes Benehmen bis zu physischen/psychischen Übergriffen auf MA und Erpressungen auf Meinungsportalen. Der Hotelier hat zudem die Rolle des <strong>Mediators, Richters, Fürsprechers, Opinionleaders</strong>.</div>

Und: Es ist nicht falsch, wenn ein Hotelier auch einmal beherzt <strong>"Nein"</strong> sagt — um allen anderen Gästen gegenüber das "Yes"-Versprechen umso mehr einlösen zu können.
</div>
<div class="merksatz">Merke: Das "Yes" gegenüber einem missbrauchenden Gast ist ein "Nein" gegenüber allen anderen Gästen und MA. Ein gelegentliches "Nein" schützt das "Yes".</div>
</div>
</div>

</div>
</div>

<!-- KAP 9: KONFLIKTE -->
<div class="sec" id="fl_kap9"><h1>09 · Konflikte</h1><p class="sub">Glasl 9-Stufen-Modell · Win-Win/Lose · Prävention · Konfliktgespräche</p>

<div class="hlbl"><strong>LERNZIELE</strong><br>
✓ Konflikte im Arbeitsumfeld frühzeitig ansprechen<br>
✓ Konfliktgespräche vorbereiten und Gesprächstechniken bewusst einsetzen
</div>

<div style="display:flex;gap:8px;margin:14px 0"><button onclick="document.querySelectorAll('#fl_kap9 .tl-item').forEach(e=>e.classList.add('open'))">Alle aufklappen</button><button onclick="document.querySelectorAll('#fl_kap9 .tl-item').forEach(e=>e.classList.remove('open'))">Alle schliessen</button></div>

<div class="tl">

<div class="tl-item">
<div class="tl-num tl-num-b">1</div>
<div class="tl-head" onclick="this.parentElement.classList.toggle('open')">
<div><div class="tl-title">Definition "Konflikte" — 4 Merkmale</div><div class="tl-merksatz">«Ein Konflikt ist nie ein Problem einer einzigen Person — es braucht immer mindestens zwei.»</div></div>
<div class="tl-arrow">▶</div>
</div>
<div class="tl-detail">
<div class="tl-body">Konflikte sind <strong>Spannungssituationen</strong>, in denen zwei oder mehr Parteien mit Nachdruck versuchen, scheinbar oder tatsächlich unvereinbare Handlungspläne zu verwirklichen. Sie sind sich der Gegnerschaft bewusst.

<strong>Merkmale von Konflikten:</strong>
<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:12px;margin:14px 0">
<div class="c cm" style="padding:14px 16px"><strong>🚧 Störungen</strong><br><span style="font-size:13px;color:var(--tx2)">Unterbrechen den Handlungsablauf, zwingen zur Neuorientierung</span></div>
<div class="c cr" style="padding:14px 16px"><strong>⚖ Belastung</strong><br><span style="font-size:13px;color:var(--tx2)">Angespannt, unter Druck, unfrei — können zu Stress führen</span></div>
<div class="c cm" style="padding:14px 16px"><strong>📈 Eskalationstendenz</strong><br><span style="font-size:13px;color:var(--tx2)">Weiten sich aus, steigern Intensität, beziehen mehr Menschen/Themen ein</span></div>
<div class="c ca" style="padding:14px 16px"><strong>⚡ Lösungsdruck</strong><br><span style="font-size:13px;color:var(--tx2)">Verlangen Bewältigung — reife oder unreife Form</span></div>
</div>

<strong>Grundhaltung zu Konflikten:</strong>
<ul style="margin:10px 0 10px 20px;line-height:1.8">
<li>Aggressionen und Konflikte sind <strong>normale Bestandteile</strong> menschlicher Beziehungen</li>
<li>Gelöste Konflikte erzeugen Zufriedenheit, Stärke, manchmal Vertiefung der Beziehung</li>
<li>Gut gelöste Konflikte sind <strong>Chancen</strong> — positive Auswirkung möglich</li>
<li>Menschen sind verschieden — jeder hat Recht auf eigene Wünsche</li>
<li>Ein Konflikt ist <strong>nie ein Problem einer einzigen Person</strong> — für einen Konflikt braucht es immer mindestens zwei</li>
</ul>
</div>
<div class="merksatz">Merke: Konflikt ≠ Katastrophe. Gut geführte Konflikte sind Motor der Entwicklung. Nur unbearbeitete Konflikte werden gefährlich.</div>
</div>
</div>

<div class="tl-item">
<div class="tl-num tl-num-b">2</div>
<div class="tl-head" onclick="this.parentElement.classList.toggle('open')">
<div><div class="tl-title">Das 9-Stufen-Modell nach Friedrich Glasl</div><div class="tl-merksatz">«Win-Win (1-3) · Win-Lose (4-6) · Lose-Lose (7-9)»</div></div>
<div class="tl-arrow">▶</div>
</div>
<div class="tl-detail">
<div class="tl-body"><strong>Konfliktdynamik in neun Stufen:</strong>

<div style="display:grid;grid-template-columns:auto 1fr;gap:10px 16px;margin:16px 0">
<div style="background:#34c759;color:#fff;padding:8px 14px;border-radius:6px;font-weight:700;text-align:center;align-self:start;min-width:40px">1</div>
<div><strong>Verhärtung</strong><br><span style="font-size:13px;color:var(--tx2)">Kaum beobachtbar. Kommunikation alltäglich, aber zäher. Positionsbedingte Erstarrungen, gelegentliche Kurzattacken. Noch Überzeugung: Gutes Gespräch löst alles.</span></div>

<div style="background:#34c759;color:#fff;padding:8px 14px;border-radius:6px;font-weight:700;text-align:center;align-self:start;min-width:40px">2</div>
<div><strong>Debatten und Polemik</strong><br><span style="font-size:13px;color:var(--tx2)">Angriffslustige Debatten. Klima wird frostiger. Polarisierungen, Beeinflussung der Öffentlichkeit, taktische Manöver.</span></div>

<div style="background:#34c759;color:#fff;padding:8px 14px;border-radius:6px;font-weight:700;text-align:center;align-self:start;min-width:40px">3</div>
<div><strong>Taten statt Worte</strong><br><span style="font-size:13px;color:var(--tx2)">"Der Worte sind genug gewechselt…" Konkurrenzverhalten, Selbstsicherheit demonstrieren, Parteien formieren sich. Nonverbale Kommunikation wichtig.</span></div>

<div style="background:#e8a838;color:#0f1117;padding:8px 14px;border-radius:6px;font-weight:700;text-align:center;align-self:start;min-width:40px">4</div>
<div><strong>Images und Koalitionen</strong><br><span style="font-size:13px;color:var(--tx2)">Rigorosität. Stereotype, Schwarz/Weiss-Denken. Unterstellungen. Bündnispartner werben, Unbeteiligte hineinziehen. Provokationen.</span></div>

<div style="background:#e8a838;color:#0f1117;padding:8px 14px;border-radius:6px;font-weight:700;text-align:center;align-self:start;min-width:40px">5</div>
<div><strong>Gesichtsverlust</strong><br><span style="font-size:13px;color:var(--tx2)">Demaskierung des Gegners, Angriff auf Ansehen. Klima wird giftig. "Wir können nicht mehr zurück." Bedrohung der Identität.</span></div>

<div style="background:#e8a838;color:#0f1117;padding:8px 14px;border-radius:6px;font-weight:700;text-align:center;align-self:start;min-width:40px">6</div>
<div><strong>Drohstrategien</strong><br><span style="font-size:13px;color:var(--tx2)">Geringe Hemmungen mehr. Ultimaten. Handlungsspielraum dramatisch eingeschränkt. Gegner wird zur "Organisation", nicht mehr Person.</span></div>

<div style="background:#ff3b30;color:#fff;padding:8px 14px;border-radius:6px;font-weight:700;text-align:center;align-self:start;min-width:40px">7</div>
<div><strong>Begrenzte Vernichtungsschläge</strong><br><span style="font-size:13px;color:var(--tx2)">Gegner wird entseelt, als Sache behandelt. Schaden zufügen wichtiger als eigener Vorteil (Schadenfreude). Kriegsrecht proklamiert.</span></div>

<div style="background:#ff3b30;color:#fff;padding:8px 14px;border-radius:6px;font-weight:700;text-align:center;align-self:start;min-width:40px">8</div>
<div><strong>Zersplitterung</strong><br><span style="font-size:13px;color:var(--tx2)">Destruktive Einstellungen überhand. Zentrales Nervensystem des Feindes angreifen. Grosse Opfer — aber eigenes Überleben noch Ziel.</span></div>

<div style="background:#ff3b30;color:#fff;padding:8px 14px;border-radius:6px;font-weight:700;text-align:center;align-self:start;min-width:40px">9</div>
<div><strong>Gemeinsam in den Abgrund</strong><br><span style="font-size:13px;color:var(--tx2)">Grenze zum Selbstopfer überschritten. Totale Gewalt. Einziger Gewinn: Feind mitgerissen zu haben.</span></div>
</div>

<strong>Lösungsmechanismen pro Phase:</strong>
<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:12px;margin:14px 0">
<div class="c cg" style="padding:16px 18px">
<div style="font-size:11px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:var(--g);margin-bottom:8px">Stufen 1–3: Win-Win</div>
Lösung <strong>durch die Beteiligten</strong> möglich. Selbsthilfe, Moderation. Das Gemeinsame hat noch starke Bedeutung.
</div>
<div class="c cm" style="padding:16px 18px">
<div style="font-size:11px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:var(--am);margin-bottom:8px">Stufen 4–6: Win-Lose</div>
Lösung nur mithilfe eines <strong>Mediators</strong>. Gewinner-Verlierer-Strategie. Externe Prozessberatung/-begleitung oder Vermittlung/Schiedsverfahren.
</div>
<div class="c cr" style="padding:16px 18px">
<div style="font-size:11px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:var(--r);margin-bottom:8px">Stufen 7–9: Lose-Lose</div>
Ausser Vernichtung des Feindes (auch um eigenen Preis) keine Ziele mehr. Nur noch <strong>Machteingriff</strong> möglich — strukturelle Intervention.
</div>
</div>
</div>
<div class="merksatz">Merke: Je früher du eingreifst, desto kleiner der Schaden. Ab Stufe 4 brauchst du Hilfe — ab Stufe 7 nur noch Machteingriff.</div>
</div>
</div>

<div class="tl-item">
<div class="tl-num tl-num-b">3</div>
<div class="tl-head" onclick="this.parentElement.classList.toggle('open')">
<div><div class="tl-title">Konfliktprävention & Konfliktlösung</div><div class="tl-merksatz">«Der einfachste Konflikt ist der, der gar nicht entsteht.»</div></div>
<div class="tl-arrow">▶</div>
</div>
<div class="tl-detail">
<div class="tl-body">Viele Konflikte wirken <strong>leistungs- und motivationshemmend</strong>. Führungspersonen müssen sich um intakte Beziehungen und Lösungen kümmern. Aber nicht immer …

<strong>Konfliktprävention</strong><br>
Meiste Konflikte entstehen aus <strong>Missverständnissen</strong> oder einseitig gelebten Machtansprüchen.

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:12px;margin:14px 0">
<div class="c ca" style="padding:16px 18px">
<strong>Persönliche Massnahmen</strong>
<ul style="margin:8px 0 0 18px;line-height:1.7;font-size:13px">
<li>Offene, ehrliche Kommunikation</li>
<li>Beobachtung von Verhaltensveränderungen</li>
<li>Mut zur korrekten, konstruktiven Kritik</li>
<li>Klares Setzen von Grenzen</li>
<li>Persönliches Engagement, Neutralität</li>
<li>Bewusstsein für Konflikt-Auslöser</li>
<li>Bereitschaft zu vermitteln</li>
<li>Fähigkeit zur Selbstzurücknahme</li>
</ul>
</div>
<div class="c cg" style="padding:16px 18px">
<strong>Organisationale Voraussetzungen</strong>
<ul style="margin:8px 0 0 18px;line-height:1.7;font-size:13px">
<li>Klare Führungsstrukturen</li>
<li>Klare Erwartungen an MA</li>
<li>Klar verständliche Ziele</li>
<li>Nachvollziehbare Hierarchien</li>
<li>Regelwerk von Do's &amp; Don'ts</li>
<li>Klare Hilfestellungen bei Problemen</li>
</ul>
</div>
</div>

<div class="hla"><strong>GRUNDSATZ</strong><br>
<strong>Der einfachste Konflikt ist der, der gar nicht entsteht.</strong></div>

<strong>Konfliktlösungen ohne Verlierer — 3 Phasen</strong>
<table style="width:100%;margin-top:12px;border-collapse:collapse;font-size:13px">
<tr><th style="padding:10px 12px;border:1px solid var(--bd);background:rgba(139,44,90,.08);text-align:left">Phase</th><th style="padding:10px 12px;border:1px solid var(--bd);background:rgba(139,44,90,.08);text-align:left">Schritte</th></tr>
<tr><td style="padding:10px 12px;border:1px solid var(--bd)"><strong>Vorbereiten</strong></td><td style="padding:10px 12px;border:1px solid var(--bd)">1. Analyse der persönlichen Situation · 2. Analyse der Situation des Gegenübers</td></tr>
<tr><td style="padding:10px 12px;border:1px solid var(--bd)"><strong>Gespräch</strong></td><td style="padding:10px 12px;border:1px solid var(--bd)">1. Schildern der eigenen Sichtweise · 2. Einbezug der Beteiligten · 3. Klären der Standpunkte</td></tr>
<tr><td style="padding:10px 12px;border:1px solid var(--bd)"><strong>Lösung</strong></td><td style="padding:10px 12px;border:1px solid var(--bd)">1. Lösungsfindung · 2. Sicherstellen der Umsetzung</td></tr>
</table>

<strong>Grundsätze:</strong>
<ul style="margin:10px 0 10px 20px;line-height:1.8">
<li>Grundkonflikt aufspüren</li>
<li>Direkte Klärung suchen</li>
<li>Keine Vorwürfe und Anschuldigungen</li>
<li>Von sich selbst reden (Ich-Botschaften)</li>
<li>Zuhören und verstehen wollen</li>
<li>Gemeinsame Lösung anstreben</li>
<li>Wiederholungen von Konflikten beachten</li>
</ul>

<div class="hla" style="margin-top:14px"><strong>DAS REINIGENDE GEWITTER</strong><br>
Eine <strong>bewusst gelebte Streitkultur</strong> in klaren Grenzen kann entspannend und entwicklungsfördernd sein — wenn Parteien bewusst in den "Ring" steigen, gecoacht werden und der Konflikt fachliche Dimensionen hat. Am Ende stehen besseres Verständnis, bessere Kommunikation, behutsamer Umgang.</div>

<div class="hla" style="margin-top:14px"><strong>🏨 Hotel Alpenblick — Konflikt</strong><br>
Im Front Office eskaliert der Konflikt zwischen <strong>Nadia (Managerin) und David (Rezeptionist)</strong>. Anfangs nur gereizte Stimmung (<strong>Stufe 1</strong>), dann offene Debatten vor anderen (<strong>Stufe 2</strong>), schliesslich Koalitionen im Team (<strong>Stufe 4</strong>). Sara erkennt: Selbsthilfe reicht nicht mehr — sie holt externe Mediation (Personalberaterin) hinzu, bevor es <strong>Stufe 5 (Gesichtsverlust)</strong> erreicht. Nach zwei Mediationsterminen ist klar: Unterschiedliche Kommunikationsstile — Lösung: klare SOPs für Übergaben.</div>
</div>
<div class="merksatz">Merke: Ein Konfliktgespräch ohne Vorbereitung ist ein Gespräch ohne Chance. Die Analyse der eigenen UND der fremden Situation ist Pflicht.</div>
</div>
</div>

</div>
</div>

<!-- KAP 10: EXISTENZIELLE KRISE -->
<div class="sec" id="fl_kap10"><h1>10 · Führungsverhalten in existenzieller Krise</h1><p class="sub">Brandereignis · Evakuation · Krisenkommunikation · Rettungspriorisierung</p>

<div class="hlbl"><strong>LERNZIELE</strong><br>
✓ Risiken erkennen, einschätzen und lösungsgerecht handeln<br>
✓ Zweckmässige Schlussfolgerungen für den Krisenfall ziehen
</div>

<div style="display:flex;gap:8px;margin:14px 0"><button onclick="document.querySelectorAll('#fl_kap10 .tl-item').forEach(e=>e.classList.add('open'))">Alle aufklappen</button><button onclick="document.querySelectorAll('#fl_kap10 .tl-item').forEach(e=>e.classList.remove('open'))">Alle schliessen</button></div>

<div class="tl">

<div class="tl-item">
<div class="tl-num tl-num-b">1</div>
<div class="tl-head" onclick="this.parentElement.classList.toggle('open')">
<div><div class="tl-title">Das Brandereignis — Herausforderung Nr. 1</div><div class="tl-merksatz">«Stellt Führungsfähigkeiten, physische und psychische Belastbarkeit auf die härteste Probe.»</div></div>
<div class="tl-arrow">▶</div>
</div>
<div class="tl-detail">
<div class="tl-body">Ein Brandereignis ist eine der <strong>herausforderndsten Situationen</strong> für einen Hotelier. Es stellt Führungsfähigkeiten, physische und psychische Belastbarkeit auf die härteste Probe.

<strong>Die drei Kernfragen:</strong>
<ul style="margin:10px 0 10px 20px;line-height:1.8">
<li>Wie vermeidet man Chaos, Panik, Gefährdungen und Schäden?</li>
<li>Was tut die Hotelleitung zwischen Notruf und Eintreffen der Rettung?</li>
<li>Wie geht sie mit Tod, Verletzung, Verwüstung, Stress um?</li>
</ul>
</div>
<div class="merksatz">Merke: In der Krise wird jede Führungskraft auf ihre Substanz geprüft. Vorbereitung ist der einzige Weg, diese Prüfung zu bestehen.</div>
</div>
</div>

<div class="tl-item">
<div class="tl-num tl-num-b">2</div>
<div class="tl-head" onclick="this.parentElement.classList.toggle('open')">
<div><div class="tl-title">Was muss die Führungskraft können?</div><div class="tl-merksatz">«Menschen → Tier → Umwelt → Sachwerte — in dieser Reihenfolge.»</div></div>
<div class="tl-arrow">▶</div>
</div>
<div class="tl-detail">
<div class="tl-body"><div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:12px;margin:14px 0">
<div class="c cr" style="padding:14px 16px"><strong>🔥 Verhalten im Brandfall</strong><br><span style="font-size:13px;color:var(--tx2)">Welche Sofortmassnahmen sind getroffen?</span></div>
<div class="c cr" style="padding:14px 16px"><strong>⚠ Gefahren erkennen</strong><br><span style="font-size:13px;color:var(--tx2)">Explosion, Rauchgase, Verbrennungen, Dehydration</span></div>
<div class="c cm" style="padding:14px 16px"><strong>👁 Lage im Griff</strong><br><span style="font-size:13px;color:var(--tx2)">Überblick behalten, nicht kopflos agieren</span></div>
<div class="c cm" style="padding:14px 16px"><strong>📢 Organisieren &amp; Kommunizieren</strong><br><span style="font-size:13px;color:var(--tx2)">Delegieren, koordinieren am Ereignisort</span></div>
<div class="c ca" style="padding:14px 16px"><strong>📋 Vorausschauende Planung</strong><br><span style="font-size:13px;color:var(--tx2)">Eventualszenarien, vorbehaltene Entschlüsse</span></div>
<div class="c cg" style="padding:14px 16px"><strong>🆘 Rettung priorisieren</strong><br><span style="font-size:13px;color:var(--tx2)"><strong>Menschen → Tier → Umwelt → Sachwerte</strong></span></div>
<div class="c ca" style="padding:14px 16px"><strong>🚒 Kooperation mit Rettung</strong><br><span style="font-size:13px;color:var(--tx2)">Welche Aufgaben nach Eintreffen der Profis?</span></div>
<div class="c cp" style="padding:14px 16px"><strong>⏱ Einsatzende</strong><br><span style="font-size:13px;color:var(--tx2)">Wann beendet, was folgt danach?</span></div>
</div>

<strong>Wichtige Aspekte der Krisenbewältigung:</strong>
<ul style="margin:10px 0 10px 20px;line-height:1.8">
<li><strong>Begegnung mit Feuer:</strong> Gefahr erkennen, richtige Massnahmen ergreifen, Löschmittel korrekt einsetzen — <strong style="color:var(--r)">Selbstschutz niemals vergessen</strong></li>
<li><strong>Verletzte im Brandherd:</strong> Retten oder warten? Richtige Einschätzung ist entscheidend — sonst gefährdet man sich selbst und andere</li>
<li><strong>Evakuation ohne Panik:</strong> Ruhiges Auftreten, klare Anweisungen. <strong>Wie viele Menschen befinden sich im Gebäude?</strong> Wie bekomme ich Gewissheit, dass alle in Sicherheit sind? (Ohnmächtiger Haustechniker im Heizungskeller? Gast in Toilette?)</li>
<li><strong>Versteckte Gefahrgüter:</strong> Fettbrand, Gasflaschen-Explosion, Spraydosen, CO/CO2-Übersättigung, Glimm-/Elektrobrände, Rauchgase, toxische Entwicklung</li>
<li><strong>Debriefing:</strong> Lernen aus dem Ereignis</li>
</ul>

<div class="hlr" style="margin-top:14px"><strong>⚠ WEITERE KRISENTYPEN</strong><br>
Brandfall ist nur ein Beispiel. Weitere existenzielle Krisen: <strong>Tsunami, Piratenbedrohung, Terrorattacke, Bürgerkrieg, Diebstahl, Meuterei, Streiks, Todesfälle, Sturmschäden, Lawinen, Verletzungen, Wildtier-Bedrohung, Havarien, Unfälle, Totalausfall von Verbindungen, Haustechnik-Ausfall, Ungezieferbefall, Mafia-Übergriffe, Korruptionsfälle.</strong></div>

<div class="hla" style="margin-top:14px"><strong>DAS FÜHRUNGSVERHALTEN IN KRISEN</strong><br>
<strong>Dezidiert, zielgerichtet, sauber kommuniziert</strong> — nach oben, unten, innen, aussen. Entscheidet über <em>Panik oder Ruhe</em>, über den Ruf des Hauses. In Ausnahmesituationen Gästen und MA das Gefühl vermitteln: <strong>alles kommt in Ordnung, Sorgen sind unnötig, Geborgenheit und Diskretion sind gewährleistet</strong>.</div>
</div>
<div class="merksatz">Merke: In der Krise ist Ruhe die grösste Autorität. Wer panisch schreit, verliert die Führung. Wer leise anordnet, behält sie.</div>
</div>
</div>

</div>
</div>

<!-- KAP 11: TIPPS & FÜHRUNGSKILLER -->
<div class="sec" id="fl_kap11"><h1>11 · Tipps & Tricks · Die 7 Führungskiller</h1><p class="sub">Vademecum · Kill-7 · Das Schlussplädoyer</p>

<div style="display:flex;gap:8px;margin:14px 0"><button onclick="document.querySelectorAll('#fl_kap11 .tl-item').forEach(e=>e.classList.add('open'))">Alle aufklappen</button><button onclick="document.querySelectorAll('#fl_kap11 .tl-item').forEach(e=>e.classList.remove('open'))">Alle schliessen</button></div>

<div class="tl">

<div class="tl-item">
<div class="tl-num tl-num-b">1</div>
<div class="tl-head" onclick="this.parentElement.classList.toggle('open')">
<div><div class="tl-title">Tipps & Tricks für den Alltag — Das Vademecum</div><div class="tl-merksatz">«Führung ist keine On-Off-Aktion — sondern eine Lebenshaltung.»</div></div>
<div class="tl-arrow">▶</div>
</div>
<div class="tl-detail">
<div class="tl-body">Ein <strong>Vademecum</strong> — Führung ist keine einmalige On-Off-Aktion, sondern eine <strong>Lebenshaltung</strong>. Eine Berufung, in die man wächst.

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:10px;margin:14px 0">
<div class="c ca" style="padding:14px 16px"><strong>📋 Vorbereitung</strong><br><span style="font-size:13px;color:var(--tx2)">Je höher in der Hierarchie, desto höher der Planungsaufwand. <strong>Gut geplant ist halb geführt.</strong></span></div>
<div class="c cr" style="padding:14px 16px"><strong>⚠ order + contra-order = disorder!</strong><br><span style="font-size:13px;color:var(--tx2)">Widersprüchliche Befehle erzeugen Chaos</span></div>
<div class="c cm" style="padding:14px 16px"><strong>⏱ Keine Blabla-Sessions</strong><br><span style="font-size:13px;color:var(--tx2)">Gute Meetings sind <strong>nie länger als 60 Min.</strong></span></div>
<div class="c cg" style="padding:14px 16px"><strong>👣 An der Front führen</strong><br><span style="font-size:13px;color:var(--tx2)">Ein Hotel führt man nicht vom Schreibtisch aus</span></div>
<div class="c ca" style="padding:14px 16px"><strong>👀 Körpersprache</strong><br><span style="font-size:13px;color:var(--tx2)">Zunge, Herz, Augen, Ausstrahlung — alles kommuniziert</span></div>
<div class="c cp" style="padding:14px 16px"><strong>😴 Pausen und Schlaf</strong><br><span style="font-size:13px;color:var(--tx2)">Ein GM ist ein Mensch. Übermüdete Führung macht Fehler</span></div>
<div class="c cm" style="padding:14px 16px"><strong>🧠 "Hirne vor horne"</strong><br><span style="font-size:13px;color:var(--tx2)">Erst denken, dann sprechen. Kein Kopfloses-Huhn!</span></div>
<div class="c ca" style="padding:14px 16px"><strong>⛰ Feldherrenhügel</strong><br><span style="font-size:13px;color:var(--tx2)">Überblick behalten — jederzeit</span></div>
<div class="c cg" style="padding:14px 16px"><strong>➕ 1+1=3</strong><br><span style="font-size:13px;color:var(--tx2)">Ein Team kann immer mehr</span></div>
<div class="c cg" style="padding:14px 16px"><strong>🤝 Vertrauen</strong><br><span style="font-size:13px;color:var(--tx2)">Gutes Delegieren + Controlling = Schlüssel zum Erfolg</span></div>
<div class="c cg" style="padding:14px 16px"><strong>✅ Follow-up³</strong><br><span style="font-size:13px;color:var(--tx2)">Die drei wichtigsten Grundsätze</span></div>
<div class="c ca" style="padding:14px 16px"><strong>💬 Klare Sprache</strong><br><span style="font-size:13px;color:var(--tx2)">Keine ähms, kurze Sätze, stufengerecht</span></div>
<div class="c cr" style="padding:14px 16px"><strong>🐟 Der Fisch…</strong><br><span style="font-size:13px;color:var(--tx2)">…beginnt am Kopf zu stinken</span></div>
<div class="c cm" style="padding:14px 16px"><strong>🌟 Loben stimuliert</strong><br><span style="font-size:13px;color:var(--tx2)">Im Kleinen wie im Grossen</span></div>
<div class="c cr" style="padding:14px 16px"><strong>🚫 Keine Kritik vor Publikum</strong><br><span style="font-size:13px;color:var(--tx2)">Face-lose ist unverzeihlich</span></div>
<div class="c cg" style="padding:14px 16px"><strong>🎄 Kein Management by Christmas-Tree</strong><br><span style="font-size:13px;color:var(--tx2)">Nicht mit goldenen Namensschildern führen</span></div>
</div>

<div style="text-align:center;font-family:var(--se);font-size:20px;color:var(--ac);padding:14px;margin:14px 0;font-style:italic;border-top:1px solid var(--bd);border-bottom:1px solid var(--bd)">
Cogito ergo sum princeps? — Sind Sie fit für Leadership?
</div>
</div>
<div class="merksatz">Merke: Führungspersönlichkeit zeigt sich in vielen kleinen Gesten jeden Tag — nicht im einmaligen grossen Statement.</div>
</div>
</div>

<div class="tl-item">
<div class="tl-num tl-num-b">2</div>
<div class="tl-head" onclick="this.parentElement.classList.toggle('open')">
<div><div class="tl-title">Die 7 Führungskiller — Was du vermeiden musst</div><div class="tl-merksatz">«MA kündigen nicht dem Unternehmen — sondern ihren direkten Vorgesetzten.»</div></div>
<div class="tl-arrow">▶</div>
</div>
<div class="tl-detail">
<div class="tl-body">Führungskräfte machen Fehler — jeden Tag, oft unbewusst. Sieben davon sollten auf jeden Fall vermieden werden.

<div class="hla"><strong>GRUNDPRINZIP</strong><br>
<strong>Führen heisst, andere emporheben.</strong> Unmotivierte und frustrierte Mitarbeitende sind unproduktiv. Sie kündigen nicht dem Unternehmen, sondern <strong>ihren direkten Vorgesetzten</strong>.</div>

<div class="hlr" style="margin-top:12px"><strong>KILLER 1 — KILL ENTHUSIASM</strong><br>
<strong>Der Chef untergräbt die Begeisterung und Motivation.</strong> Kein Lob, keine Anerkennung, Ideen werden ignoriert oder gestohlen, Problemzentrierung, fehlendes Feedback.<br>
<strong style="color:var(--g)">✅ Besser:</strong> Wertschätzung und aufmerksame Kommunikation. Bedenken ernst nehmen, mit MA befassen.</div>

<div class="hlr" style="margin-top:10px"><strong>KILLER 2 — KILL EMOTION</strong><br>
<strong>Gefühle verboten — keine Herzlichkeit.</strong> "Dort wird gearbeitet, nicht wohlgefühlt." Doch: beste Arbeitgeber sind wirtschaftlich überdurchschnittlich erfolgreich, haben niedrigen Krankenstand.<br>
<strong style="color:var(--g)">✅ Besser:</strong> <em>"Ein Lächeln öffnet Herzen."</em> Menschen erreicht man im Herzen, nicht im Kopf.</div>

<div class="hlr" style="margin-top:10px"><strong>KILLER 3 — KILL EXPLANATION</strong><br>
<strong>Mitarbeitende erhalten wenig Information</strong> — vieles bleibt undurchsichtig. "Herrschaftswissen" als Machtfaktor. Paul Watzlawick: <em>"Man kann nicht nicht kommunizieren"</em> — aber manche schaffen es, verbale Kommunikation zu vermeiden.<br>
<strong style="color:var(--g)">✅ Besser:</strong> Transparenz. Team-Meetings, MAG, Personalzeitung, Intranet, Befragungen. Persönliche Kommunikation wirkt vertrauensbildend.</div>

<div class="hlr" style="margin-top:10px"><strong>KILLER 4 — KILL ENGAGEMENT</strong><br>
<strong>Unverbindlichkeit und fehlendes Vertrauen.</strong> Meetings ohne konkrete Massnahmen: <em>"Wir sollten uns mal darum kümmern."</em> Schwache Führungskräfte sitzen Themen aus, verweisen auf "die da oben", drücken sich vor Entscheidungen. MA werden für Versäumnisse der Vorgesetzten geopfert.<br>
<strong style="color:var(--g)">✅ Besser:</strong> Werte <strong>Verantwortung und Verbindlichkeit</strong>. Zum Wort stehen, Zusagen einhalten, hinter MA stehen.</div>

<div class="hlr" style="margin-top:10px"><strong>KILLER 5 — KILL ENVIRONMENT</strong><br>
<strong>Angstkultur.</strong> Fehler als Schande, MA gegeneinander ausspielen, Mobbing, Ja-Sager, Anbiederung statt Leistung, Profilneurotiker und Blender. Markige Sprüche: <em>"Das hätte ja sogar mein Dreijähriger gesehen."</em> <em>"Wer nichts tut, kann nichts falsch machen."</em><br>
<strong style="color:var(--g)">✅ Besser:</strong> <strong>Positive Kultur, in der Fehler erlaubt sind</strong>, wenn man daraus lernt. Offenheit, Lernen, Verantwortung, Vertrauen.</div>

<div class="hlr" style="margin-top:10px"><strong>KILLER 6 — KILL ENTICEMENT</strong><br>
<strong>Weder Lob noch Dank.</strong> <em>"Nichts gesagt ist Lob genug."</em> Persönliche Anerkennung ist unersetzlich — auch für alltägliche Leistungen.<br>
<strong style="color:var(--g)">✅ Besser:</strong> Kleine Gesten, persönliches Interesse, Versprechen einhalten. Gelobte Menschen fühlen sich wichtig genommen. Aber: Lob nur dann authentisch, wenn es einen erkennbaren Grund gibt.</div>

<div class="hlr" style="margin-top:10px"><strong>KILLER 7 — KILL EQUITY</strong><br>
<strong>Lieblings-Mitarbeitende werden bevorzugt.</strong> Oft unbewusst. Im Privatleben ist das okay — beruflich müssen Führungskräfte <strong>Gleichwertigkeit herstellen</strong>.<br>
<strong style="color:var(--g)">✅ Besser:</strong> Regelmässige Mitarbeitendengespräche, Stärken erkennen, mit negativen Gefühlen bewusst umgehen. <em>"Ich bin okay, du bist okay."</em> Positive Vorstellung wählen (das Gehirn unterscheidet nicht zwischen Realität und Vorstellung!).</div>

<div class="hla" style="margin-top:14px"><strong>GRÖSSE ZEIGEN</strong><br>
Führungskräfte müssen Mitarbeitenden <strong>dieselbe Aufmerksamkeit</strong> wie allen anderen widmen — auch jenen, die man persönlich nicht besonders mag. Schiebt man einen Teil aufs Abstellgleis, reihen sie sich in die Demotivierten und innerlich Gekündigten ein.</div>
</div>
<div class="merksatz">Merke: Die 7 E-Killer merken: <strong>E</strong>nthusiasm, <strong>E</strong>motion, <strong>E</strong>xplanation, <strong>E</strong>ngagement, <strong>E</strong>nvironment, <strong>E</strong>nticement, <strong>E</strong>quity. Vermeiden — und die MA bleiben.</div>
</div>
</div>

<div class="tl-item">
<div class="tl-num tl-num-b">3</div>
<div class="tl-head" onclick="this.parentElement.classList.toggle('open')">
<div><div class="tl-title">Das Schlussplädoyer — Cogito ergo sum princeps!</div><div class="tl-merksatz">«Nicht die Unternehmensleitung entscheidet, wer eine gute Führungskraft ist — sondern die Mitarbeitenden.»</div></div>
<div class="tl-arrow">▶</div>
</div>
<div class="tl-detail">
<div class="tl-body"><strong>Führende brauchen Folgende.</strong> Nicht die Unternehmensleitung entscheidet, wer eine gute Führungskraft ist, sondern <strong>allein die Mitarbeitenden</strong>.

<div style="text-align:center;font-family:var(--se);font-size:20px;color:var(--ac);padding:24px 20px;margin:20px 0;font-style:italic;background:linear-gradient(135deg,rgba(139,44,90,.06),rgba(232,168,56,.04));border-radius:16px;border:2px solid rgba(232,168,56,.25)">
Gute Führungskräfte haben geschafft, was echte Führungskräfte<br>
von Vorgesetzten unterscheidet:<br><br>
<strong style="font-size:24px;color:var(--tx)">Die Mitarbeitenden wollen ihnen folgen.</strong><br><br>
<span style="font-size:26px;font-weight:700;background:linear-gradient(135deg,#8b2c5a,#e89a38);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text">Cogito ergo sum princeps!</span>
</div>
</div>
<div class="merksatz">Merke: Titel und Position machen niemanden zur Führungspersönlichkeit. Erst wenn andere dir freiwillig folgen, bist du es.</div>
</div>
</div>

</div>
</div>

<!-- FL: ÜBUNGEN -->
<div class="sec" id="fl_ueb"><h1>Interaktive Übungen</h1><p class="sub">6 Übungen · 107 Fälle · An allen 5 Lernzielen orientiert</p>

<div id="fl_ueb_sel">
<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin:16px 0">

<div class="c ck" onclick="flShowUeb(1)" style="padding:24px 16px;position:relative;overflow:hidden">
<div style="position:absolute;top:-20px;right:-20px;width:80px;height:80px;border-radius:50%;background:rgba(139,44,90,.08)"></div>
<div style="position:relative;z-index:1">
<div style="font-size:28px;margin-bottom:10px">👑</div>
<div class="ct2">Führungsstil zuordnen</div>
<div class="cd" style="margin-top:4px">20 Szenarien · GRID-Modell · Lernziel 3 & 4</div>
</div></div>

<div class="c ck" onclick="flShowUeb(2)" style="padding:24px 16px;position:relative;overflow:hidden">
<div style="position:absolute;top:-20px;right:-20px;width:80px;height:80px;border-radius:50%;background:rgba(232,168,56,.08)"></div>
<div style="position:relative;z-index:1">
<div style="font-size:28px;margin-bottom:10px">⚡</div>
<div class="ct2">Konflikt-Eskalationsstufe</div>
<div class="cd" style="margin-top:4px">18 Fälle · Glasl 9 Stufen · Lernziel 4</div>
</div></div>

<div class="c ck" onclick="flShowUeb(3)" style="padding:24px 16px;position:relative;overflow:hidden">
<div style="position:absolute;top:-20px;right:-20px;width:80px;height:80px;border-radius:50%;background:rgba(56,199,89,.08)"></div>
<div style="position:relative;z-index:1">
<div style="font-size:28px;margin-bottom:10px">🎯</div>
<div class="ct2">SMART-Ziele prüfen</div>
<div class="cd" style="margin-top:4px">15 Ziele · 5 Kriterien · Lernziel 3</div>
</div></div>

<div class="c ck" onclick="flShowUeb(4)" style="padding:24px 16px;position:relative;overflow:hidden">
<div style="position:absolute;top:-20px;right:-20px;width:80px;height:80px;border-radius:50%;background:rgba(255,107,107,.08)"></div>
<div style="position:relative;z-index:1">
<div style="font-size:28px;margin-bottom:10px">🎭</div>
<div class="ct2">Theorie X oder Y?</div>
<div class="cd" style="margin-top:4px">18 Aussagen · Menschenbild · Lernziel 2</div>
</div></div>

<div class="c ck" onclick="flShowUeb(5)" style="padding:24px 16px;position:relative;overflow:hidden">
<div style="position:absolute;top:-20px;right:-20px;width:80px;height:80px;border-radius:50%;background:rgba(184,56,232,.08)"></div>
<div style="position:relative;z-index:1">
<div style="font-size:28px;margin-bottom:10px">💡</div>
<div class="ct2">Maslow-Stufe erkennen</div>
<div class="cd" style="margin-top:4px">18 Fälle · Motivationspyramide · Lernziel 3</div>
</div></div>

<div class="c ck" onclick="flShowUeb(6)" style="padding:24px 16px;position:relative;overflow:hidden">
<div style="position:absolute;top:-20px;right:-20px;width:80px;height:80px;border-radius:50%;background:rgba(232,79,56,.08)"></div>
<div style="position:relative;z-index:1">
<div style="font-size:28px;margin-bottom:10px">🚨</div>
<div class="ct2">7 Führungskiller</div>
<div class="cd" style="margin-top:4px">18 Szenarien · E-Wörter · Lernziel 4 & 5</div>
</div></div>

</div>
</div>

<!-- Ü1: FÜHRUNGSSTIL -->
<div id="fl_ueb1" style="display:none">
<button onclick="flShowUeb(0)" style="margin-bottom:16px;font-size:12px">← Zurück zur Auswahl</button>
<h2>Führungsstil zuordnen</h2>
<p class="sub">Lies das Szenario und wähle den passenden GRID-Führungsstil · Pool: 20 Fälle</p>
<div style="padding:16px 20px;border-radius:12px;background:linear-gradient(135deg,rgba(139,44,90,.06),rgba(232,168,56,.04));border:1px solid var(--bd);margin-bottom:16px;font-size:14px;line-height:1.7" id="fl_u1_scen"></div>
<div id="fl_u1_options"></div>
<div style="margin:20px 0;display:flex;gap:8px;flex-wrap:wrap">
<button class="bp1" onclick="flCheckU1()" style="padding:10px 28px;font-size:14px">Korrigieren</button>
<button onclick="flGenU1()" style="padding:10px 28px;font-size:14px">Neue Aufgabe</button>
</div>
<div id="fl_u1_res"></div>
</div>

<!-- Ü2: KONFLIKT-ESKALATION -->
<div id="fl_ueb2" style="display:none">
<button onclick="flShowUeb(0)" style="margin-bottom:16px;font-size:12px">← Zurück zur Auswahl</button>
<h2>Konflikt-Eskalationsstufe erkennen</h2>
<p class="sub">Nach dem Glasl-Modell — wo steht dieser Konflikt? · Pool: 18 Fälle</p>
<div style="display:flex;gap:8px;margin-bottom:16px;flex-wrap:wrap">
<div style="padding:5px 12px;border-radius:8px;background:rgba(56,199,89,.1);border:1px solid rgba(56,199,89,.3);font-size:11px;font-weight:600;color:var(--g)">Stufen 1-3: Win-Win</div>
<div style="padding:5px 12px;border-radius:8px;background:rgba(232,168,56,.1);border:1px solid rgba(232,168,56,.3);font-size:11px;font-weight:600;color:var(--am)">Stufen 4-6: Win-Lose (Mediator)</div>
<div style="padding:5px 12px;border-radius:8px;background:rgba(255,59,48,.1);border:1px solid rgba(255,59,48,.3);font-size:11px;font-weight:600;color:var(--r)">Stufen 7-9: Lose-Lose (Machteingriff)</div>
</div>
<div style="padding:16px 20px;border-radius:12px;background:linear-gradient(135deg,rgba(232,168,56,.06),rgba(255,107,107,.04));border:1px solid var(--bd);margin-bottom:16px;font-size:14px;line-height:1.7" id="fl_u2_case"></div>
<div id="fl_u2_options"></div>
<div style="margin:20px 0;display:flex;gap:8px;flex-wrap:wrap">
<button class="bp1" onclick="flCheckU2()" style="padding:10px 28px;font-size:14px">Korrigieren</button>
<button onclick="flGenU2()" style="padding:10px 28px;font-size:14px">Neuer Fall</button>
</div>
<div id="fl_u2_res"></div>
</div>

<!-- Ü3: SMART-ZIEL -->
<div id="fl_ueb3" style="display:none">
<button onclick="flShowUeb(0)" style="margin-bottom:16px;font-size:12px">← Zurück zur Auswahl</button>
<h2>SMART-Ziele prüfen</h2>
<p class="sub">Prüfe jedes der 5 SMART-Kriterien · Pool: 15 Ziele</p>
<div style="padding:16px 20px;border-radius:12px;background:linear-gradient(135deg,rgba(56,199,89,.06),rgba(139,44,90,.04));border:1px solid var(--bd);margin-bottom:16px;font-size:15px;line-height:1.7;font-style:italic" id="fl_u3_ziel"></div>
<div id="fl_u3_krit"></div>
<div style="margin:20px 0;display:flex;gap:8px;flex-wrap:wrap">
<button class="bp1" onclick="flCheckU3()" style="padding:10px 28px;font-size:14px">Korrigieren</button>
<button onclick="flGenU3()" style="padding:10px 28px;font-size:14px">Neues Ziel</button>
</div>
<div id="fl_u3_res"></div>
</div>

<!-- Ü4: THEORIE X/Y -->
<div id="fl_ueb4" style="display:none">
<button onclick="flShowUeb(0)" style="margin-bottom:16px;font-size:12px">← Zurück zur Auswahl</button>
<h2>Theorie X oder Theorie Y?</h2>
<p class="sub">Welches Menschenbild zeigt die Aussage? · Pool: 18 Aussagen</p>
<div style="padding:16px 20px;border-radius:12px;background:linear-gradient(135deg,rgba(255,107,107,.06),rgba(56,199,89,.04));border:1px solid var(--bd);margin-bottom:16px;font-size:15px;line-height:1.7;font-style:italic" id="fl_u4_text"></div>
<div id="fl_u4_options"></div>
<div style="margin:20px 0;display:flex;gap:8px;flex-wrap:wrap">
<button class="bp1" onclick="flCheckU4()" style="padding:10px 28px;font-size:14px">Korrigieren</button>
<button onclick="flGenU4()" style="padding:10px 28px;font-size:14px">Neue Aussage</button>
</div>
<div id="fl_u4_res"></div>
</div>

<!-- Ü5: MASLOW -->
<div id="fl_ueb5" style="display:none">
<button onclick="flShowUeb(0)" style="margin-bottom:16px;font-size:12px">← Zurück zur Auswahl</button>
<h2>Maslow-Stufe erkennen</h2>
<p class="sub">Welches Bedürfnis zeigt dieser MA? · Pool: 18 Fälle</p>
<div style="padding:16px 20px;border-radius:12px;background:linear-gradient(135deg,rgba(184,56,232,.06),rgba(56,182,232,.04));border:1px solid var(--bd);margin-bottom:16px;font-size:14px;line-height:1.7" id="fl_u5_case"></div>
<div id="fl_u5_options"></div>
<div style="margin:20px 0;display:flex;gap:8px;flex-wrap:wrap">
<button class="bp1" onclick="flCheckU5()" style="padding:10px 28px;font-size:14px">Korrigieren</button>
<button onclick="flGenU5()" style="padding:10px 28px;font-size:14px">Neuer Fall</button>
</div>
<div id="fl_u5_res"></div>
</div>

<!-- Ü6: 7 FÜHRUNGSKILLER -->
<div id="fl_ueb6" style="display:none">
<button onclick="flShowUeb(0)" style="margin-bottom:16px;font-size:12px">← Zurück zur Auswahl</button>
<h2>7 Führungskiller erkennen</h2>
<p class="sub">Welcher der 7 Killer zeigt sich hier? · Pool: 18 Szenarien</p>
<div style="padding:16px 20px;border-radius:12px;background:linear-gradient(135deg,rgba(232,79,56,.06),rgba(139,44,90,.04));border:1px solid var(--bd);margin-bottom:16px;font-size:14px;line-height:1.7" id="fl_u6_scen"></div>
<div id="fl_u6_options"></div>
<div style="margin:20px 0;display:flex;gap:8px;flex-wrap:wrap">
<button class="bp1" onclick="flCheckU6()" style="padding:10px 28px;font-size:14px">Korrigieren</button>
<button onclick="flGenU6()" style="padding:10px 28px;font-size:14px">Neues Szenario</button>
</div>
<div id="fl_u6_res"></div>
</div>

</div>

<!-- ZUSAMMENFASSUNG / MIND -->
<div class="sec" id="fl_mind"><h1>Zusammenfassung</h1><p class="sub">Visuelle Übersichten der wichtigsten Modelle</p>

<div style="font-size:13px;font-weight:600;letter-spacing:1px;text-transform:uppercase;color:var(--tx3);margin:20px 0 12px">1. Führungskreislauf nach Grobner</div>
<div class="c" style="padding:24px 20px;background:linear-gradient(135deg,rgba(139,44,90,.04),rgba(232,168,56,.03))">
<div style="display:flex;flex-wrap:wrap;gap:10px;align-items:center;justify-content:center">
<div style="padding:14px 20px;background:var(--s2);border-radius:12px;font-weight:600;text-align:center;border:2px solid rgba(139,44,90,.3)">Ziele setzen<br><span style="font-size:11px;color:var(--tx3);font-weight:400">SOLL</span></div>
<div style="font-size:22px;color:#e89a38">→</div>
<div style="padding:14px 20px;background:var(--s2);border-radius:12px;font-weight:600;text-align:center;border:2px solid rgba(139,44,90,.3)">Planen</div>
<div style="font-size:22px;color:#e89a38">→</div>
<div style="padding:14px 20px;background:var(--s2);border-radius:12px;font-weight:600;text-align:center;border:2px solid rgba(139,44,90,.3)">Entscheiden</div>
<div style="font-size:22px;color:#e89a38">→</div>
<div style="padding:14px 20px;background:var(--s2);border-radius:12px;font-weight:600;text-align:center;border:2px solid rgba(139,44,90,.3)">Realisieren</div>
<div style="font-size:22px;color:#e89a38">→</div>
<div style="padding:14px 20px;background:var(--s2);border-radius:12px;font-weight:600;text-align:center;border:2px solid rgba(139,44,90,.3)">Kontrollieren<br><span style="font-size:11px;color:var(--tx3);font-weight:400">SOLL-IST</span></div>
<div style="font-size:22px;color:#e89a38">→</div>
<div style="padding:14px 20px;background:var(--s2);border-radius:12px;font-weight:600;text-align:center;border:2px solid rgba(139,44,90,.3)">Analysieren</div>
<div style="font-size:22px;color:#e89a38">↻</div>
</div>
</div>

<div style="font-size:13px;font-weight:600;letter-spacing:1px;text-transform:uppercase;color:var(--tx3);margin:20px 0 12px">2. GRID-Modell (Blake & Mouton) — 4 Führungsstile</div>
<div class="c" style="padding:24px 20px">
<div style="display:grid;grid-template-columns:60px repeat(2,1fr);grid-template-rows:auto repeat(2,1fr);gap:8px">
<div></div>
<div style="text-align:center;font-size:11px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:var(--tx3);padding:6px 0">tief Sache</div>
<div style="text-align:center;font-size:11px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:var(--tx3);padding:6px 0">hoch Sache</div>
<div style="writing-mode:vertical-rl;transform:rotate(180deg);text-align:center;font-size:11px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:var(--tx3);padding:0 4px">hoch Mensch</div>
<div style="padding:16px;background:rgba(155,89,182,.08);border-radius:12px;border:2px solid rgba(155,89,182,.3)"><strong>STIL 3 — UNTERSTÜTZEN</strong><br><span style="font-size:12px">(karitativ)</span><br><span style="font-size:12px;color:var(--tx2)">Ermutigen, zusammenarbeiten. Beziehung &amp; Motivation.</span></div>
<div style="padding:16px;background:rgba(56,199,89,.1);border-radius:12px;border:2px solid rgba(56,199,89,.4)"><strong>STIL 2 — ANLEITEN</strong><br><span style="font-size:12px">(partizipativ)</span><br><span style="font-size:12px;color:var(--tx2)">Überzeugen, trainieren. Sache UND Mensch.</span></div>
<div style="writing-mode:vertical-rl;transform:rotate(180deg);text-align:center;font-size:11px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:var(--tx3);padding:0 4px">tief Mensch</div>
<div style="padding:16px;background:rgba(142,142,147,.1);border-radius:12px;border:2px solid rgba(142,142,147,.4)"><strong>STIL 4 — DELEGIEREN</strong><br><span style="font-size:12px">(laisser faire)</span><br><span style="font-size:12px;color:var(--tx2)">Übertragen, bevollmächtigen. Eigene Entlastung.</span></div>
<div style="padding:16px;background:rgba(255,107,107,.1);border-radius:12px;border:2px solid rgba(255,107,107,.4)"><strong>STIL 1 — LENKEN</strong><br><span style="font-size:12px">(autoritär)</span><br><span style="font-size:12px;color:var(--tx2)">Diktieren, kontrollieren. Mehr Sache.</span></div>
</div>
</div>

<div style="font-size:13px;font-weight:600;letter-spacing:1px;text-transform:uppercase;color:var(--tx3);margin:20px 0 12px">3. Maslow — Bedürfnispyramide (1943)</div>
<div class="c" style="padding:24px 20px;background:linear-gradient(135deg,rgba(139,44,90,.04),rgba(232,168,56,.03))">
<div style="display:flex;flex-direction:column;align-items:center;gap:5px">
<div style="width:35%;padding:14px 20px;text-align:center;font-weight:700;font-size:13px;border-radius:6px;background:#b838e8;color:#fff">5. Selbstverwirklichung <span style="font-weight:400;font-size:11px">(Wachstum)</span></div>
<div style="width:52%;padding:14px 20px;text-align:center;font-weight:700;font-size:13px;border-radius:6px;background:#38e89c;color:#0f1117">4. Anerkennung &amp; Wertschätzung</div>
<div style="width:70%;padding:14px 20px;text-align:center;font-weight:700;font-size:13px;border-radius:6px;background:#38b6e8;color:#0f1117">3. Sozialbedürfnis</div>
<div style="width:85%;padding:14px 20px;text-align:center;font-weight:700;font-size:13px;border-radius:6px;background:#e8a838;color:#0f1117">2. Sicherheit</div>
<div style="width:100%;padding:14px 20px;text-align:center;font-weight:700;font-size:13px;border-radius:6px;background:#e84f38;color:#fff">1. Grund- oder Existenzbedürfnisse</div>
</div>
<p style="text-align:center;color:var(--tx3);font-size:12px;margin-top:14px"><em>Stufen 1–4: Defizitbedürfnisse · Stufe 5: Wachstumsbedürfnis</em></p>
</div>

<div style="font-size:13px;font-weight:600;letter-spacing:1px;text-transform:uppercase;color:var(--tx3);margin:20px 0 12px">4. Glasl-Konflikteskalation (9 Stufen)</div>
<div class="c" style="padding:24px 20px">
<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:6px">
<div style="padding:10px;text-align:center;background:#34c759;color:#fff;border-radius:8px"><strong>1</strong> Verhärtung</div>
<div style="padding:10px;text-align:center;background:#34c759;color:#fff;border-radius:8px"><strong>2</strong> Debatten</div>
<div style="padding:10px;text-align:center;background:#34c759;color:#fff;border-radius:8px"><strong>3</strong> Taten statt Worte</div>
<div style="padding:10px;text-align:center;background:#e8a838;color:#0f1117;border-radius:8px"><strong>4</strong> Images &amp; Koalitionen</div>
<div style="padding:10px;text-align:center;background:#e8a838;color:#0f1117;border-radius:8px"><strong>5</strong> Gesichtsverlust</div>
<div style="padding:10px;text-align:center;background:#e8a838;color:#0f1117;border-radius:8px"><strong>6</strong> Drohstrategien</div>
<div style="padding:10px;text-align:center;background:#ff3b30;color:#fff;border-radius:8px"><strong>7</strong> Begrenzte Vernichtung</div>
<div style="padding:10px;text-align:center;background:#ff3b30;color:#fff;border-radius:8px"><strong>8</strong> Zersplitterung</div>
<div style="padding:10px;text-align:center;background:#ff3b30;color:#fff;border-radius:8px"><strong>9</strong> Gemeinsam Abgrund</div>
</div>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-top:14px;text-align:center;font-size:12px">
<div style="padding:10px;background:rgba(56,199,89,.1);border-radius:8px;border:1px solid rgba(56,199,89,.3)"><strong style="color:var(--g)">WIN-WIN</strong><br>Selbsthilfe/Moderation</div>
<div style="padding:10px;background:rgba(232,168,56,.1);border-radius:8px;border:1px solid rgba(232,168,56,.3)"><strong style="color:var(--am)">WIN-LOSE</strong><br>Mediator nötig</div>
<div style="padding:10px;background:rgba(255,59,48,.1);border-radius:8px;border:1px solid rgba(255,59,48,.3)"><strong style="color:var(--r)">LOSE-LOSE</strong><br>Machteingriff</div>
</div>
</div>

</div>

<!-- KARTEIKARTEN -->
<div class="sec" id="fl_kart"><h1>Karteikarten</h1><p class="sub"><span id="flfcCount">0</span> Karten — klicke zum Umdrehen</p>
<div class="fcc" id="flfcc"></div>
<div class="fd"><div class="fc" id="flfc" onclick="this.classList.toggle('fl')"><div class="ff ffr"><div class="fq" id="flfcq"></div><div class="fh">Klicke zum Umdrehen</div></div><div class="ff ffb"><div class="fa" id="flfca"></div></div></div></div>
<div class="fb"><button onclick="fcPrev()">Zurück</button><button onclick="fcShuffle()">Mischen</button><button class="bp1" onclick="fcNext()">Nächste</button></div>
<div style="text-align:center;margin-top:10px;font-size:11px;color:var(--tx3)" id="flfcPool"></div>
<div id="flfcList" style="display:none;margin-top:16px"></div>
</div>

<!-- QUIZ -->
<div class="sec" id="fl_quiz"><h1>Quiz</h1><p class="sub">Alle Fragen werden wiederholt bis du sie kannst</p>
<div id="flqStats" style="margin-bottom:20px">
<div style="display:flex;gap:8px;margin-bottom:14px;flex-wrap:wrap">
<div class="qsc" style="flex:1;min-width:70px"><div class="qsn" id="flqTotR" style="color:var(--g)">0</div><div class="qsl">Total richtig</div></div>
<div class="qsc" style="flex:1;min-width:70px"><div class="qsn" id="flqTotW" style="color:var(--r)">0</div><div class="qsl">Total falsch</div></div>
<div class="qsc" style="flex:1;min-width:70px"><div class="qsn" id="flqTotP" style="color:var(--ac)">0%</div><div class="qsl">Erfolgsquote</div></div>
</div>
<div style="font-size:12px;color:var(--tx3);margin-bottom:6px">Lernerfolg</div>
<div style="display:flex;gap:4px;margin-bottom:4px;align-items:center"><div style="width:10px;height:10px;border-radius:50%;background:var(--g);flex-shrink:0"></div><div style="font-size:12px;color:var(--tx2);width:70px">Sicher</div><div style="flex:1;height:8px;background:var(--s2);border-radius:4px;overflow:hidden"><div id="flqBarG" style="height:100%;background:var(--g);border-radius:4px;transition:width .5s;width:0%"></div></div><div style="font-size:12px;color:var(--tx2);width:30px;text-align:right" id="flqBarGn">0</div></div>
<div style="display:flex;gap:4px;margin-bottom:4px;align-items:center"><div style="width:10px;height:10px;border-radius:50%;background:var(--am);flex-shrink:0"></div><div style="font-size:12px;color:var(--tx2);width:70px">Wackelig</div><div style="flex:1;height:8px;background:var(--s2);border-radius:4px;overflow:hidden"><div id="flqBarO" style="height:100%;background:var(--am);border-radius:4px;transition:width .5s;width:0%"></div></div><div style="font-size:12px;color:var(--tx2);width:30px;text-align:right" id="flqBarOn">0</div></div>
<div style="display:flex;gap:4px;margin-bottom:4px;align-items:center"><div style="width:10px;height:10px;border-radius:50%;background:var(--r);flex-shrink:0"></div><div style="font-size:12px;color:var(--tx2);width:70px">Unsicher</div><div style="flex:1;height:8px;background:var(--s2);border-radius:4px;overflow:hidden"><div id="flqBarR" style="height:100%;background:var(--r);border-radius:4px;transition:width .5s;width:0%"></div></div><div style="font-size:12px;color:var(--tx2);width:30px;text-align:right" id="flqBarRn">0</div></div>
<div style="display:flex;gap:4px;align-items:center"><div style="width:10px;height:10px;border-radius:50%;background:var(--tx3);flex-shrink:0"></div><div style="font-size:12px;color:var(--tx2);width:70px">Noch offen</div><div style="flex:1;height:8px;background:var(--s2);border-radius:4px;overflow:hidden"><div id="flqBarX" style="height:100%;background:var(--tx3);border-radius:4px;transition:width .5s;width:100%"></div></div><div style="font-size:12px;color:var(--tx2);width:30px;text-align:right" id="flqBarXn">0</div></div>
</div>
<div class="pb"><div class="pf" id="flqP"></div></div><div class="pt" id="flqPT">Frage 1</div>
<div id="flqC"></div>
<div style="text-align:center;margin-top:14px">
<button class="bp1" id="flqN" onclick="flqNx()" style="display:none">Nächste Frage</button>
<button class="bp1" id="flqRS" onclick="flqSt()" style="display:none">Weiter üben</button>
<button id="flqReset" onclick="flqReset()" style="display:none;margin-left:8px">Fortschritt zurücksetzen</button>
</div>
</div>

<!-- GLOSSAR -->
<div class="sec" id="fl_glossar"><h1>Glossar</h1><p class="sub">Alphabetische Übersicht aller Modelle und Begriffe</p>

<div class="glo">

<div class="gle"><div class="gl-term">ADR — Average Daily Rate</div><div class="gl-def">Durchschnittlicher Zimmerpreis pro verkaufter Nacht. Topend-Hotels: ADR &gt; EUR 1'500 im Jahresdurchschnitt (nicht einzelne Suiten!).</div></div>

<div class="gle"><div class="gl-term">Angst (2 Urängste)</div><div class="gl-def">Nach Aeberhard die bedeutendsten Stimulantien für Leistungserbringung: (1) <strong>Gefressen werden</strong> (physische Bedrohung), (2) <strong>Nicht geliebt werden</strong> (soziale Isolation).</div></div>

<div class="gle"><div class="gl-term">Aptitude vs. Attitude</div><div class="gl-def">Aptitude = Fähigkeits-Mix (Grundvoraussetzung). Attitude = Verhaltens-Mix (entscheidend). <strong>Attitude &gt; Aptitude</strong> — bei der Selektion zählt Charakter mehr als Diplom.</div></div>

<div class="gle"><div class="gl-term">Assessment-Center</div><div class="gl-def">Praxissimulationsverfahren zur Personalauswahl. Kombination von Tests, Interviews und Gruppenarbeiten. Zählt zu den T-Daten.</div></div>

<div class="gle"><div class="gl-term">Autorität — 3 Säulen</div><div class="gl-def">Ansehen, das zuerkannt wird: (1) <strong>Stellung/Position</strong>, (2) <strong>Persönlichkeit/Sozialkompetenz</strong>, (3) <strong>Fach- und Führungskönnen</strong>. Autorität findet freiwillige Nachfolge.</div></div>

<div class="gle"><div class="gl-term">Böckmann, Walter</div><div class="gl-def">Psychologe. Zitat: <em>"Wer Leistung fordert, muss Sinn bieten."</em> Kern der modernen Führung — Sinn statt Zuckerbrot.</div></div>

<div class="gle"><div class="gl-term">Churchill-Zitat</div><div class="gl-def">Winston Churchill: <em>"Es ist besser, eine falsche Entscheidung zu treffen, als gar keine."</em> Entscheidungsmantra: Entscheiden heisst wagen, bewegen, Mut beweisen.</div></div>

<div class="gle"><div class="gl-term">Cogito ergo sum princeps</div><div class="gl-def">Lateinisch: <em>"Ich denke, also bin ich Fürst/Führungskraft."</em> Schlussfrage Aeberhards: Sind Sie fit für Leadership? Führungspersönlichkeit ist selbst definiert.</div></div>

<div class="gle"><div class="gl-term">Drucker, Peter F.</div><div class="gl-def">Management-Vordenker. Entwickelte 1954 <strong>Management by Objectives</strong>. Nennt seine Theorie bewusst <em>"MbO and Self-Control"</em>.</div></div>

<div class="gle"><div class="gl-term">Feu sacré</div><div class="gl-def">Französisch: "heiliges Feuer" — Leidenschaft, intrinsische Motivation für den Beruf. Entscheidendes Selektionskriterium in der Hotellerie.</div></div>

<div class="gle"><div class="gl-term">Führung — Definition</div><div class="gl-def">Zwischenmenschlicher Prozess, in dem eine legitimierte Person andere Menschen dazu anhält, ein definiertes Ziel innerhalb gegebener Parameter zu erreichen. Führung ist eine <strong>Dienstleistung an den Mitarbeitenden</strong>.</div></div>

<div class="gle"><div class="gl-term">Führungskiller (7 E-Wörter)</div><div class="gl-def">Nach Aeberhard zu vermeiden: Kill <strong>Enthusiasm</strong>, <strong>Emotion</strong>, <strong>Explanation</strong>, <strong>Engagement</strong>, <strong>Environment</strong>, <strong>Enticement</strong>, <strong>Equity</strong>. MA kündigen dem Vorgesetzten, nicht dem Unternehmen.</div></div>

<div class="gle"><div class="gl-term">Führungskompetenzen (6)</div><div class="gl-def">(1) Fach-, (2) Sozial-, (3) Führungs-, (4) Methoden-, (5) System-, (6) Natürliche Kompetenz. In unterschiedlicher Ausprägung.</div></div>

<div class="gle"><div class="gl-term">Führungskreislauf (Grobner)</div><div class="gl-def">6 Schritte: Ziele setzen → Planen → Entscheiden → Realisieren → Kontrollieren (SOLL-IST) → Analysieren ↻. Führung ist ein Kreislauf, nicht eine einmalige Aktion.</div></div>

<div class="gle"><div class="gl-term">Glasl, Friedrich</div><div class="gl-def">Konfliktforscher. Entwickelte das <strong>9-Stufen-Eskalationsmodell</strong> (1-3 Win-Win, 4-6 Win-Lose, 7-9 Lose-Lose). Ab Stufe 4 Mediator nötig.</div></div>

<div class="gle"><div class="gl-term">GRID-Modell</div><div class="gl-def">Führungsmodell von <strong>Blake &amp; Mouton</strong>. Zwei Dimensionen: Sache × Mensch. Vier Stile: <strong>Lenken</strong> (autoritär), <strong>Anleiten</strong> (partizipativ), <strong>Unterstützen</strong> (karitativ), <strong>Delegieren</strong> (laisser faire).</div></div>

<div class="gle"><div class="gl-term">Holschuld</div><div class="gl-def">Grundsatz: <strong>"Information ist eine Holschuld!"</strong> Mitarbeitende sind verantwortlich, sich aktiv zu informieren — nicht nur zu warten bis jemand informiert.</div></div>

<div class="gle"><div class="gl-term">Human-Relations-Konzept</div><div class="gl-def">Menschenbild Y. Mensch ist leistungsbereit, engagiert, selbstverwirklichend. Gegensatz zum Taylorismus. Führt zu kooperativem Führungsstil.</div></div>

<div class="gle"><div class="gl-term">ICH-Botschaft</div><div class="gl-def">Klare, vorwurfslose Aussage aus sich heraus. <strong>3 Komponenten:</strong> (1) Situation, (2) Folgen, (3) Gefühl. Gegensatz zu DU-Vorwurf oder unpersönlichen "man"-Formulierungen.</div></div>

<div class="gle"><div class="gl-term">Inhouse-Celebrity</div><div class="gl-def">Aeberhards Begriff für GM: Lebt auf dem "Silbertablett" — <strong>Vorbildfunktion 24/7, zero tolerance</strong>. Social Media macht Fehltritte unauslöschbar.</div></div>

<div class="gle"><div class="gl-term">Insel-Modell</div><div class="gl-def">Nach <strong>Vera Birkenbihl</strong>. Jeder Mensch lebt auf seiner eigenen Insel mit eigenen Werten, Sprachen, Erfahrungen. Ziel: gemeinsame Arbeitsinsel. <strong>Verstehen ≠ Akzeptieren.</strong></div></div>

<div class="gle"><div class="gl-term">Kaskade (Luxus-Kaskade)</div><div class="gl-def">Aeberhard-Modell: 5-stufige Luxus-Hierarchie — (1) Tangible, (2) Safety, (3) Intangible (Love/Belonging), (4) Sensual (Esteem), (5) Spiritual (Self-actualisation).</div></div>

<div class="gle"><div class="gl-term">Kinesik</div><div class="gl-def">Wissenschaft der Körpersprache. Nonverbaler Teil der Kommunikation — kann schwer "lügen", da viele Aspekte unbewusst ablaufen.</div></div>

<div class="gle"><div class="gl-term">MAG — Mitarbeitergespräch</div><div class="gl-def">Strukturiertes, regelmässiges Gespräch zwischen Führungsperson und MA. Teil der Führungskommunikation. Meist 1× jährlich.</div></div>

<div class="gle"><div class="gl-term">Malik, Fredmund</div><div class="gl-def">Management-Vordenker. Prägte den Begriff <strong>"Führung — Massenberuf ohne Ausbildung"</strong>. Führung kann bis zu einem gewissen Grad gelernt werden — aber man muss führen <em>wollen</em>.</div></div>

<div class="gle"><div class="gl-term">Maslow-Pyramide (1943)</div><div class="gl-def">5 Ebenen: (1) Physiologisch, (2) Sicherheit, (3) Sozial, (4) Anerkennung/Individual, (5) Selbstverwirklichung. <strong>Stufen 1-4 = Defizit, Stufe 5 = Wachstum.</strong> Höhere Stufen erst relevant, wenn tiefere befriedigt.</div></div>

<div class="gle"><div class="gl-term">MbO — Management by Objectives</div><div class="gl-def">Führung durch Zielvereinbarung. <strong>Peter Drucker, 1954.</strong> Gemeinsames Festlegen von SMART-Zielen. Auch: <em>"and Self-Control"</em>.</div></div>

<div class="gle"><div class="gl-term">McGregor, Douglas</div><div class="gl-def">MIT, 1960. Buch <em>"The Human Side of Enterprise"</em>. Entwickelte <strong>Theorie X</strong> (Mensch unwillig) und <strong>Theorie Y</strong> (Mensch engagiert). Bevorzugte Y.</div></div>

<div class="gle"><div class="gl-term">Motivation — intrinsisch/extrinsisch</div><div class="gl-def"><strong>Intrinsisch (primär):</strong> sachbezogen, Arbeit als Selbstzweck. <strong>Extrinsisch (sekundär):</strong> sachfremd, Arbeit als Mittel zum Zweck (Geld). In der Hotellerie zählt primär!</div></div>

<div class="gle"><div class="gl-term">New Luxury</div><div class="gl-def">Aeberhard-Begriff: Topend-Luxus als immaterielle Dimension. 6 Dimensionen: Raum, Zeit, Service, Sicherheit, Exklusivität, Gesundheit. <strong>"to have" → "to be"</strong>.</div></div>

<div class="gle"><div class="gl-term">order + contra-order = disorder</div><div class="gl-def">Führungsgrundsatz: Widersprüchliche Befehle erzeugen Chaos. Eine Führungsperson muss klar und konsistent kommunizieren.</div></div>

<div class="gle"><div class="gl-term">P&amp;P / SOP</div><div class="gl-def">Policies &amp; Procedures (P&amp;P) bzw. Standard Operating Procedures (SOP). Betriebliche Regelwerke, die Abläufe standardisieren.</div></div>

<div class="gle"><div class="gl-term">Peter-Prinzip</div><div class="gl-def">Laurence J. Peter: <em>"Jedes Mitglied einer Hierarchie wird befördert, solange es erfolgreich ist — bis zur Stufe seiner maximalen Unfähigkeit."</em> Arbeit wird von jenen erledigt, die ihre Inkompetenz noch nicht erreicht haben.</div></div>

<div class="gle"><div class="gl-term">Reinigendes Gewitter</div><div class="gl-def">Bewusst gelebte Streitkultur in klaren Grenzen. Wenn Parteien "in den Ring" steigen und gecoacht werden, kann am Ende besseres Verständnis stehen.</div></div>

<div class="gle"><div class="gl-term">Rettungs-Priorisierung</div><div class="gl-def">In Krisen: <strong>Menschen → Tier → Umwelt → Sachwerte</strong> — in dieser Reihenfolge. Selbstschutz niemals vergessen!</div></div>

<div class="gle"><div class="gl-term">Schulz von Thun, Friedemann</div><div class="gl-def">Kommunikationspsychologe. Entwickelte u.a. die <strong>9 Rollen der Führungsperson</strong>: Fachperson, Manager:in, Coach, Teamentwickler:in, Verantwortliche:r, Löwenbändiger:in, Leitperson, Angestellte:r, Mensch.</div></div>

<div class="gle"><div class="gl-term">Selbsterfüllende Prophezeiung</div><div class="gl-def">Phänomen: Die eigene Grundhaltung (X oder Y) erzeugt Verhalten, das die Haltung bestätigt. Wer MA als faul sieht, führt autoritär — und erzeugt so Passivität.</div></div>

<div class="gle"><div class="gl-term">SMART-Ziele</div><div class="gl-def">Nach Drucker/MbO: <strong>S</strong>pezifisch, <strong>M</strong>essbar, <strong>A</strong>ktiv beeinflussbar, <strong>R</strong>ealistisch, <strong>T</strong>erminiert.</div></div>

<div class="gle"><div class="gl-term">St. Galler Management-Modell</div><div class="gl-def">3 Ebenen der Führung: (1) <strong>Betrieblich</strong> (volle Kontrolle), (2) <strong>Markt</strong> (Einflussnahme möglich), (3) <strong>Umsystemisch</strong> (nur Anpassung).</div></div>

<div class="gle"><div class="gl-term">Taylorismus</div><div class="gl-def">Frederick Taylor: Wissenschaftliche Betriebsführung, Zerlegung der Arbeit in kleinste Schritte, strenge Kontrolle. Entspricht Menschenbild X.</div></div>

<div class="gle"><div class="gl-term">Theorie X / Theorie Y</div><div class="gl-def">McGregor 1960. <strong>X:</strong> Mensch unwillig, scheut Verantwortung → autoritäre Führung. <strong>Y:</strong> Mensch engagiert, selbstmotiviert → kooperative Führung.</div></div>

<div class="gle"><div class="gl-term">Topend-Hotel</div><div class="gl-def">Aeberhard-Definition: &lt;30 Units, ADR &gt; EUR 1'500, Fokus auf New/Hidden Luxury. Abgrenzung zu Highend.</div></div>

<div class="gle"><div class="gl-term">TZI-Modell</div><div class="gl-def"><strong>Themenzentrierte Interaktion</strong> nach Ruth Cohn. 4 Pole: <strong>ES</strong> (Sache/Ziel), <strong>ICH</strong> (Person/MA), <strong>WIR</strong> (Team), <strong>KONTEXT</strong> (Umsystem). Führung navigiert in allen vier Polen gleichzeitig.</div></div>

<div class="gle"><div class="gl-term">Vademecum</div><div class="gl-def">Lat. "geh mit mir" — Handbuch, das man immer bei sich trägt. Aeberhards 16 Tipps &amp; Tricks sind ein Führungs-Vademecum.</div></div>

<div class="gle"><div class="gl-term">Wollen · Können · Dürfen</div><div class="gl-def">Die drei Leistungs-Dimensionen. <strong>Wollen</strong> = Motivation/Bereitschaft, <strong>Können</strong> = Fähigkeit, <strong>Dürfen</strong> = Rahmen/Kompetenzen. Fehlt eines, fehlt die Leistung.</div></div>

</div>
</div>

`;

// KARTEIKARTEN
const FL_CARDS = [
// Kap 1: Definition Führung
['Welches Modell beschreibt die drei Ebenen der Führung?','Das St. Galler Management-Modell. Ebenen: (1) Betriebliche (volle Kontrolle), (2) Markt (Einflussnahme möglich), (3) Umsystemische (nur Anpassung).'],
['Wer hat Theorie X und Y aufgestellt und wann?','Douglas McGregor, 1960, am MIT in seinem Buch "The Human Side of Enterprise". Er lehnte Theorie X ab und bevorzugte Theorie Y.'],
['Was besagt Theorie X?','Der Mensch ist unwillig: angeborene Abneigung gegen Arbeit, muss gezwungen/kontrolliert/bedroht werden, scheut Verantwortung, strebt nach Sicherheit. Entspricht dem Taylorismus.'],
['Was besagt Theorie Y?','Der Mensch ist engagiert: Arbeit hat hohen Stellenwert, von Natur leistungsbereit, identifiziert sich mit Zielen, übernimmt Verantwortung. Entspricht dem Human-Relations-Konzept.'],
['Was bedeutet "selbsterfüllende Prophezeiung" bei X/Y?','Wer Menschen als faul wahrnimmt, führt autoritär — und erzeugt so genau jenes passive Verhalten, das er befürchtet. Haltung → Verhalten → Reaktion → Bestätigung.'],
['Welche zwei Urängste nennt Aeberhard?','(1) Gefressen werden (physische Bedrohung), (2) Nicht geliebt werden (soziale Isolation). Bedeutendste Stimulantien für Leistungserbringung.'],
['Warum bezeichnet Malik Führung als "Massenberuf ohne Ausbildung"?','Weil Führung bis zu einem gewissen Grad lernbar ist, aber meist nicht ausgebildet wird — im Gegensatz zu Fachberufen. Und: man muss führen wollen.'],
['Welche 4 Kernaussagen bestimmen das Führungsverständnis?','(1) Führen ist Dienstleistung an MA, (2) Führung schafft Orientierung, (3) Führen heisst Vorsprung schaffen, (4) Führung fordert die ganze Persönlichkeit.'],
['Was unterscheidet "to have" von "to be"?','"to have": materieller Besitz-Fokus. "to be": immateriell, Sinn, Entschleunigung. Paradigmenwechsel in postmateriellen westlichen Gesellschaften.'],
// Kap 2: Rollenwechsel
['Was bedeuten ES, ICH, WIR, KONTEXT im TZI-Modell?','Ruth Cohn: ES=Ziel/Auftrag/Sache, ICH=Person/MA, WIR=Gruppe/Team, KONTEXT=Umsystem. Führung navigiert in allen vier Polen gleichzeitig.'],
['Nenne 5 der 9 Rollen einer Führungsperson nach Schulz von Thun.','Fachperson, Manager:in, Coach, Teamentwickler:in, Verantwortliche:r, Löwenbändiger:in, Leitperson, Angestellte:r, Mensch.'],
['Erkläre das Peter-Prinzip in einem Satz.','Jedes Mitglied einer Hierarchie wird befördert, solange es erfolgreich ist — bis zur Stufe seiner maximalen Unfähigkeit (Laurence J. Peter).'],
['Wer leistet laut Peter die Arbeit in einer Hierarchie?','"Die Arbeit wird von Mitarbeitenden erledigt, die ihre Stufe der Inkompetenz noch nicht erreicht haben."'],
['Was bedeutet "situativ führen"?','Der Führungsstil muss je nach Aufgabe, Fähigkeiten der MA, Umfeld, Situation und Kultur angepasst werden. Es gibt nicht DEN Führungsstil.'],
['Was bedeutet "GM als Inhouse-Celebrity"?','Ein GM lebt auf dem Silbertablett — Vorbildfunktion 24/7, zero tolerance, auch in der Freizeit. Social Media macht Fehltritte unlöschbar.'],
['Wer sagte: "Wer Leistung fordert, muss Sinn bieten"?','Walter Böckmann, Psychologe. Kernsatz moderner Führung — ersetzt "Zuckerbrot und Peitsche".'],
// Kap 3: Führungsprozess
['Nenne die 6 Schritte des Führungskreislaufs (Grobner).','Ziele setzen (SOLL) → Planen → Entscheiden → Realisieren → Kontrollieren (SOLL-IST) → Analysieren ↻.'],
['Auf welchen 3 Säulen beruht Autorität?','(1) Stellung/Position, (2) Persönlichkeit/Sozialkompetenz, (3) Fach- und Führungskönnen. Autorität wird zuerkannt und findet freiwillige Nachfolge.'],
['Nenne die 6 Führungskompetenzen.','(1) Fach-, (2) Sozial-, (3) Führungs-, (4) Methoden-, (5) System-, (6) Natürliche Kompetenz. In unterschiedlicher Ausprägung je nach Position.'],
['Was bedeuten Wollen, Können und Dürfen?','Wollen = Leistungsbereitschaft (Motivation). Können = Leistungsfähigkeit (Kompetenz). Dürfen = Leistungsmöglichkeit (Rahmen/Ressourcen). Fehlt eines, fehlt die Leistung.'],
['Nenne 4 Führungsinstrumente.','Unternehmensleitbild, Unternehmenskultur, Führungsgrundsätze, Zielvereinbarungen, Stellenbeschrieb, SOPs.'],
['Was beschreibt das Unternehmensleitbild?','Vision (Was wollen wir sein?), Werte (Was ist uns wichtig?), Strategie (Wie kommen wir dorthin?) und die "Hausordnung" (P&Ps).'],
// Kap 4: Insel-Modell
['Wer hat das Insel-Modell entwickelt?','Vera Birkenbihl. Jeder Mensch lebt auf seiner eigenen Insel mit eigenen Werten, Sprachen, Erfahrungen. Ziel: gemeinsame Arbeitsinsel.'],
['Warum ist "Verstehen ≠ Akzeptieren" wichtig?','Als Führungsperson müssen Qualitäts- und Verhaltensmassstäbe durchgesetzt werden, auch wenn man die Sicht des Gegenübers versteht. Harmonie-Bedürfnis muss man aushalten.'],
['Wie lautet die englische Entsprechung?','"Let us agree to disagree" — und dann trotzdem an einem gemeinsamen Ziel arbeiten.'],
['Was gilt es als Führungsperson auszuhalten?','Wer sinnvolle Dinge durchsetzt, wird eine Zeit lang vielleicht nicht mehr gemocht. Das gilt es auszuhalten — das eigene Harmonie-Bedürfnis wird auf eine harte Probe gestellt.'],
// Kap 5: Führungsstil
['Welche zwei Dimensionen bildet das GRID-Modell ab?','Betonung der Sachziele/Leistung × Betonung der zwischenmenschlichen Aspekte. Nach Blake und Mouton.'],
['Beschreibe die 4 Führungsstile im GRID.','(1) LENKEN (autoritär): hoch Sache/tief Mensch. (2) ANLEITEN (partizipativ): hoch Sache/hoch Mensch. (3) UNTERSTÜTZEN (karitativ): tief Sache/hoch Mensch. (4) DELEGIEREN (laisser faire): tief Sache/tief Mensch.'],
['Wer hat MbO entwickelt und wann?','Peter Ferdinand Drucker, 1954. Er nennt seine Theorie bewusst "Management by Objectives and Self-Control".'],
['Wofür steht SMART?','Spezifisch · Messbar · Aktiv beeinflussbar · Realistisch · Terminiert.'],
['Nenne 3 häufige Probleme bei MbO.','Unklare Formulierung, nicht stufengerecht, aufwendig/bürokratisch, Ziele als Kontrollmittel missverstanden, aufwendige Verwaltung.'],
['Welche 4 Voraussetzungen braucht MbO?','Verständnis als Management-Aufgabe jeder Führungskraft, gute Unternehmenskultur, funktionierendes Kommunikationssystem, realistische und erreichbare Ziele.'],
// Kap 6: Toolbox
['Wie lautet das fundamentale Kommunikationsprinzip?','"Wesentlich ist nicht, was ich sage, sondern was der andere Mensch versteht." — Verantwortung der Führungsperson, sich verständlich zu machen.'],
['Was bedeutet "Information ist eine Holschuld"?','MA sind selbst verantwortlich, sich aktiv zu informieren — nicht nur darauf zu warten, bis die Führung informiert. Eigenverantwortung.'],
['Nenne 5 Fragearten und ihre Ziele.','Offen (Informationen sammeln), geschlossen (Ja/Nein), alternativ (Entscheid erleichtern), Klärungsfragen (Verständnis), zirkulär (Perspektivenwechsel), hypothetisch, rhetorisch, Gegenfragen.'],
['Was bedeutet "Wer fragt, führt"?','Nicht wer antwortet, sondern wer fragt, führt das Gespräch. Fragen aktivieren, fördern Dialog, verhindern Monologe.'],
['Nenne die 5 Schritte der Auftragserteilung.','(1) WARUM (Orientierung/IST), (2) WAS (Zielsetzung/SOLL), (3) WER (Verantwortung/Kompetenzen), (4) WANN (Termin), (5) VERSTANDEN? (Verständnis klären).'],
['Warum ist Schritt 5 "Verstanden?" so wichtig?','Wenn Rückfragen nicht JETZT gestellt werden, kommt die Aufgabe zurück zur Führungskraft. Rückdelegation vermeiden — der häufigste Fehler!'],
['Welche Regel gilt bei Lob und Kritik?','"Lob vor allen — Kritik im Einzelgespräch!" Goldene Feedback-Regel.'],
['Nenne die 4 Bausteine der Rückmeldung.','(1) Gesamteindruck → (2) Detaillierte Begründung (+ und −) → (3) Handlungsanweisung → (4) Umsetzung sicherstellen.'],
['Wie lautet der Paradigmenwechsel 20. → 21. Jhd. bei Kontrolle?','20. Jhd. = 3K: Kommandieren, Kontrollieren, Korrigieren. 21. Jhd. = 3F: Fordern, Fördern, Feedback.'],
['Welche 3 Komponenten hat eine ICH-Botschaft?','(1) Vorwurfslose Beschreibung der Situation, (2) Beschreibung der Folgen/Auswirkungen, (3) Evtl. die eigene Gefühlslage.'],
['Warum sollte "Kritik" durch "Würdigung" ersetzt werden?','Kritik ist meist negativ belegt, obwohl es eigentlich "scheiden, urteilen, unterscheiden" bedeutet. "Würdigung" betont die wertfreie Analyse und umfasst 3 Komponenten: Lob — Was war nicht gut — Verbesserungsmöglichkeit.'],
['Was ist laut Robbins das Ergebnis von falschen Entscheidungen?','Erfahrung. Zitat: "Erfolg ist das Ergebnis richtiger Entscheidungen. Richtige Entscheidungen sind das Ergebnis von Erfahrung. Erfahrung ist das Ergebnis von falschen Entscheidungen." (Anthony Robbins, 2014)'],
['Welches Churchill-Zitat gilt als Entscheidungsmantra?','"Es ist besser, eine falsche Entscheidung zu treffen, als gar keine." — Winston Churchill.'],
// Kap 7: Motivation
['Nenne die 5 Ebenen der Maslow-Pyramide.','(1) Physiologische Bedürfnisse, (2) Sicherheit, (3) Soziales/Anschluss, (4) Anerkennung/Individual, (5) Selbstverwirklichung. Veröffentlicht 1943.'],
['Welche Ebenen sind Defizit-, welche Wachstumsbedürfnisse?','Stufen 1-4 = Defizitbedürfnisse (müssen gestillt werden). Stufe 5 (Selbstverwirklichung) = Wachstumsbedürfnis.'],
['Was unterscheidet intrinsische von extrinsischer Motivation?','Intrinsisch (primär): sachbezogen, Arbeit als Selbstzweck, Freude an der Tätigkeit. Extrinsisch (sekundär): sachfremd, Arbeit als Mittel zum Zweck (Geld, Belohnung).'],
['Welche Motivationsform ist in der Hotellerie entscheidend?','Intrinsische (primäre) Motivation. Geld allein macht nicht glücklich — wer in der Hotellerie ausschliesslich des Geldes wegen arbeitet, ist falsch.'],
['Was ist Attitude, was Aptitude — und was zählt mehr?','Aptitude = Fähigkeits-Mix (Grundvoraussetzung). Attitude = Verhaltens-Mix (entscheidend). Attitude > Aptitude bei der Selektion.'],
['Nenne 3 Barrieren von innen und 3 von aussen.','Innen: Unsicherheit, Ängste, frühere Misserfolge, mangelndes Können, Hemmungen, wenig Selbstvertrauen. Aussen: Wegnehmen beliebter Arbeiten, unzureichende Kommunikation, Kränkung, nicht erhaltene Belohnung, strenge Vorschriften, Unterforderung.'],
['Was ist laut Aeberhard der beste Motivator?','Erfolg ist der beste Motivator. Mitarbeitenden Gelegenheiten für Erfolgserlebnisse geben.'],
['Wie lautet die Kernaufgabe von Führung bzgl. Motivation?','Die Ermöglichung einer optimalen Verbindung von Anliegen und Interessen des Unternehmens mit denjenigen des Individuums.'],
// Kap 8: Topend-Hotels
['Was definiert ein Topend-Hotel?','Grösse < 30 Units, ADR > EUR 1.500 im Jahresdurchschnitt, Fokus auf New & Hidden Luxury (immaterielle Dimensionen).'],
['Nenne die 6 Dimensionen des New Luxury.','Raum (Natur), Zeit (kostbares Gut), Individualisierter Service, Sicherheit (Daten/Privatsphäre), Exklusivität (beschränkte Verfügbarkeit), Gesundheit (holistisch).'],
['Beschreibe die 5-stufige Luxus-Kaskade von Aeberhard.','(1) Tangible (Physiological), (2) Safety, (3) Intangible (Love/Belonging), (4) Sensual (Esteem), (5) Spiritual (Self-actualisation).'],
['Was ist das Credo von Topend-Hotels?','"The answer is yes. What is the question?" — Positive Grundhaltung, Bedingungslosigkeit, Vertrauen, dass für jede Aufgabe eine Antwort existiert.'],
['Wann und wie sollte ein Hotelier "Nein" sagen?','Wenn ein Gast sich nicht königlich aufführt. Das "Nein" gegenüber missbrauchendem Gast ist ein "Yes" gegenüber allen anderen. Der Gast ist König — solange er sich königlich aufführt.'],
['Wann setzt laut Aeberhard Betriebsblindheit ein?','Nach 1½–2 Jahren. Führung muss bewusst zurücktreten und die Gästeperspektive einnehmen.'],
// Kap 9: Konflikte
['Wer hat das 9-Stufen-Eskalationsmodell entwickelt?','Friedrich Glasl. Klassisches Konfliktmodell der Organisationsentwicklung.'],
['Welche 3 Lösungsmechanismen passen zu welchen Stufen?','Stufen 1-3: WIN-WIN (Selbsthilfe/Moderation). Stufen 4-6: WIN-LOSE (Mediator nötig). Stufen 7-9: LOSE-LOSE (nur Machteingriff möglich).'],
['Ab welcher Stufe wird externe Mediation nötig?','Ab Stufe 4 (Images und Koalitionen) — die Parteien können sich selbst nicht mehr einigen.'],
['Nenne die 4 Merkmale von Konflikten.','(1) Störungen, (2) Belastung, (3) Eskalationstendenz, (4) Lösungsdruck.'],
['Was sind die 3 Phasen der Konfliktlösung?','(1) Vorbereiten (Analyse eigene und fremde Situation), (2) Gespräch (Sichtweisen schildern, Standpunkte klären), (3) Lösung (Lösungsfindung, Umsetzung sicherstellen).'],
['Was bedeutet "Reinigendes Gewitter"?','Bewusst gelebte Streitkultur in klaren Grenzen — kann entspannend und entwicklungsfördernd sein. Am Ende: besseres Verständnis, bessere Kommunikation.'],
// Kap 10: Krise
['Welche Priorisierung gilt bei der Rettung?','Menschen → Tier → Umwelt → Sachwerte. In dieser Reihenfolge. Selbstschutz niemals vergessen!'],
['Nenne 5 existenzielle Krisen im Hotel.','Brand, Tsunami, Piratenbedrohung, Terrorattacke, Diebstahl, Meuterei, Streiks, Todesfälle, Sturmschäden, Lawinen, Haustechnik-Ausfall.'],
['Welches Führungsverhalten ist in Krisen entscheidend?','Dezidiert, zielgerichtet, sauber kommuniziert — nach oben, unten, innen, aussen. Ruhe vermitteln: alles kommt in Ordnung, Geborgenheit und Diskretion gewährleistet.'],
['Nenne 3 "versteckte" Gefahrgüter im Hotel.','Fettbrand, Gasflaschen-Explosion, Spraydosen, CO/CO2-Übersättigung, Glimm-/Elektrobrände, Rauchgase, toxische Entwicklung.'],
// Kap 11: Tipps & Killer
['Was bedeutet "order + contra-order = disorder"?','Widersprüchliche Befehle erzeugen Chaos. Eine Führungsperson muss klar und konsistent kommunizieren.'],
['Wie lange sollten Meetings maximal dauern?','Nie länger als 60 Minuten. Keine Blabla-Sessions.'],
['Was bedeutet "Hirne vor horne"?','Erst denken, dann sprechen. Kein Kopfloses-Huhn-Verhalten — auch in Stress-Situationen.'],
['Nenne die 7 Führungskiller (E-Wörter).','Kill Enthusiasm · Kill Emotion · Kill Explanation · Kill Engagement · Kill Environment · Kill Enticement · Kill Equity.'],
['Warum ist "Kill Equity" (Lieblings-MA) gefährlich?','Lieblings-MA werden bevorzugt, andere aufs Abstellgleis geschoben. Führungskräfte müssen Gleichwertigkeit herstellen — beruflich reicht Privatsympathie nicht als Massstab.'],
['Wem kündigen MA laut Text?','Mitarbeitende kündigen nicht dem Unternehmen, sondern ihrem direkten Vorgesetzten. Führen heisst, andere emporheben.'],
['Was bedeutet das Schlusszitat "Cogito ergo sum princeps"?','Lateinisch: "Ich denke, also bin ich Fürst/Führungskraft." Führungspersönlichkeit ist selbst definiert — nicht die Unternehmensleitung entscheidet, wer Führungskraft ist, sondern die Mitarbeitenden.'],
['Was unterscheidet echte Führungskräfte von Vorgesetzten?','Die Mitarbeitenden wollen ihnen FREIWILLIG folgen. Führende brauchen Folgende — und nur diese entscheiden, wer eine gute Führungskraft ist.'],
];

// REGISTRIERUNG
window.TIS = window.TIS || {};
window.TIS.courses = window.TIS.courses || {};
window.TIS.courses.fl = {
  config: courseConfig,
  html: courseHTML,
  flashcards: FL_CARDS,
};


// ==========================================
// ÜBUNGEN — JavaScript-Logik (6 Übungen, 107 Fälle)
// ==========================================

window.flShowUeb = function(n) {
  ['fl_ueb_sel','fl_ueb1','fl_ueb2','fl_ueb3','fl_ueb4','fl_ueb5','fl_ueb6'].forEach(function(id){
    var el=document.getElementById(id); if(el) el.style.display='none';
  });
  if(n===0) { document.getElementById('fl_ueb_sel').style.display='block'; }
  else {
    var target=document.getElementById('fl_ueb'+n);
    if(target) target.style.display='block';
    if(n===1) flGenU1();
    if(n===2) flGenU2();
    if(n===3) flGenU3();
    if(n===4) flGenU4();
    if(n===5) flGenU5();
    if(n===6) flGenU6();
  }
};

// Helper: kein sofortiger Wiederhol-Wurf
function flPickNew(array, currentIndex) {
  if (array.length < 2) return 0;
  var idx;
  do { idx = Math.floor(Math.random() * array.length); } while (idx === currentIndex);
  return idx;
}

// ======================================================
// Ü1: FÜHRUNGSSTIL ZUORDNEN (GRID — Blake & Mouton)
// ======================================================
var FL_STIL_SZEN = [
  {scen:'<strong>Brandschutz-Übung.</strong> Sara muss morgens 6:00 mit allen MA einen Evakuationsdrill durchführen. Es geht um Sicherheit, die Reihenfolge ist vorgegeben, Zeit ist knapp. Niemand diskutiert — alle müssen genau wissen, was sie tun.',ans:'1',ansE:'LENKEN (Stil 1 — autoritär): Bei Sicherheitsthemen mit klaren SOPs keine Diskussion. Klare Anweisungen, strenge Ausführung.'},
  {scen:'<strong>Neue Rezeptionistin Anna.</strong> Anna ist seit zwei Wochen im Hotel. Sara setzt sich täglich 30 Minuten mit ihr hin, erklärt die PMS-Abläufe, beobachtet sie beim Check-in, gibt Feedback und lässt Anna zunehmend eigenständig arbeiten.',ans:'2',ansE:'ANLEITEN (Stil 2 — partizipativ): Einarbeitung mit hoher Aufmerksamkeit für Sache UND Mensch. Training mit Feedback, schrittweise Übergabe der Verantwortung.'},
  {scen:'<strong>Todesfall im Team.</strong> Marco (Souschef) hat plötzlich seine Mutter verloren. Das Team ist emotional getroffen. Sara plant mit den betroffenen Kolleg:innen eine einfache Küchenwoche, nimmt Rücksicht auf Stimmungen, hört zu.',ans:'3',ansE:'UNTERSTÜTZEN (Stil 3 — karitativ): Nach emotionalen Ereignissen stehen Beziehung, Empathie und Zeit im Vordergrund — nicht die Effizienz.'},
  {scen:'<strong>Weihnachtsgala.</strong> F&B-Manager Thomas (erfahren, bewährt, kennt alle Abläufe) plant die Gala komplett selbst — Menü, Dekoration, Musik, Personal. Sara bekommt nur die fertige Planung zur Abnahme.',ans:'4',ansE:'DELEGIEREN (Stil 4 — laisser faire): Bei erfahrenen, motivierten MA mit klarer Kompetenz — ganze Aufgabe übertragen, nur Ergebnisse kontrollieren.'},
  {scen:'<strong>Neuer Budget-Prozess.</strong> Sara entwickelt mit allen Abteilungsleitenden gemeinsam den neuen Quartalsforecast. Alle bringen Zahlen, Annahmen und Ideen ein. Sara moderiert, hinterfragt, entscheidet gemeinsam mit dem Team.',ans:'2',ansE:'ANLEITEN (Stil 2 — partizipativ): Hoher Sach-Fokus (Forecast muss stimmen) + hoher Mensch-Fokus (Team-Involvement). Klassisches partizipatives Führen.'},
  {scen:'<strong>Hygiene-Verstoss in Küche.</strong> Sara entdeckt, dass grundlegende Hygienestandards nicht eingehalten werden. Die Schweizer Lebensmittelverordnung ist nicht verhandelbar. Sie ordnet sofortige Änderungen an und kontrolliert täglich.',ans:'1',ansE:'LENKEN (Stil 1 — autoritär): Bei gesetzlichen Pflichten ohne Verhandlungsspielraum — klare Ansage, strenge Kontrolle.'},
  {scen:'<strong>Laura hat Burnout-Symptome.</strong> Saras langjährige Freundin Laura klagt über Erschöpfung. Sara setzt sich privat mit ihr zusammen, hört zu, schlägt eine Auszeit vor, prüft gemeinsam Entlastungsoptionen.',ans:'3',ansE:'UNTERSTÜTZEN (Stil 3 — karitativ): Persönliche Krise einer MA — Fokus liegt auf Mensch, Empathie, gemeinsame Lösungsfindung.'},
  {scen:'<strong>HR-Managerin Jessica.</strong> Jessica hat 12 Jahre HR-Erfahrung und erledigt Rekrutierungen für das Frühjahr selbstständig. Sara sagt: "Mach das so, wie du es für richtig hältst. Am 31. März besprechen wir die Ergebnisse."',ans:'4',ansE:'DELEGIEREN (Stil 4 — laisser faire): Erfahrene Fachkraft mit eigener Expertise — volle Delegation mit klarem Endpunkt.'},
  {scen:'<strong>Feueralarm mitten in der Nacht.</strong> 23:47 Uhr — Rauchmelder im Haustechnikraum. Sara gibt über die Zentrale sofortige Evakuations-Anweisungen: "Nachtpersonal an Position 1, Notausgänge öffnen, Zählung auf Sammelplatz."',ans:'1',ansE:'LENKEN (Stil 1 — autoritär): In der Krise muss eine Person entscheiden. Schnelle, klare, ungefragte Anordnungen. Partizipation wäre fatal.'},
  {scen:'<strong>Lehrling Simon vor der Abschlussprüfung.</strong> Simon (2. Lehrjahr Koch) soll erstmals den Mittagsservice als Posten-Chef machen. Marco (Souschef) steht daneben, lässt ihn machen, aber greift sofort ein wenn etwas schiefläuft — erklärt was warum falsch war.',ans:'2',ansE:'ANLEITEN (Stil 2 — partizipativ): Entwicklungs-Situation — Simon muss selbst üben, aber mit Sicherheitsnetz. Hoher Fokus auf beide Dimensionen.'},
  {scen:'<strong>Abschied einer langjährigen Mitarbeiterin.</strong> Frau Schneider verlässt nach 22 Jahren das Hotel wegen Pensionierung. Sara plant mit einer kleinen Gruppe von Kollegen eine persönliche Abschiedsfeier — es gibt keine harte Agenda, sondern Zeit für Geschichten, Emotionen, Dank.',ans:'3',ansE:'UNTERSTÜTZEN (Stil 3 — karitativ): Menschlicher Anlass, keine Sachziele. Zeit, Beziehung, Wertschätzung im Vordergrund.'},
  {scen:'<strong>IT-Infrastruktur-Upgrade.</strong> Der externe IT-Partner (seit 10 Jahren zuverlässig) plant das Upgrade des PMS-Systems komplett selbst, inkl. Zeitplan und Migration. Sara gibt das Budget frei und erwartet den finalen Report.',ans:'4',ansE:'DELEGIEREN (Stil 4 — laisser faire): Externe Expertise mit jahrelanger Vertrauensbasis — volle Übertragung, nur Ergebniskontrolle.'},
  {scen:'<strong>Akute Lebensmittelvergiftung.</strong> Ein Gast hat sich vergiftet. Sara ordnet sofort an: Küche sperren, Lebensmittelproben sichern, Ärztin rufen, Rechtsabteilung informieren. Keine Diskussion, keine "aber".',ans:'1',ansE:'LENKEN (Stil 1 — autoritär): Krisenfall mit Rechtsfolgen — sofortige, klare Anweisungen ohne Debatte.'},
  {scen:'<strong>Service-Workshop zum Upselling.</strong> Sara hat einen Trainer engagiert. Gemeinsam mit dem Restaurant-Team werden Rollenspiele gemacht, die Ergebnisse diskutiert, Lösungen entwickelt. Jeder darf und soll beitragen.',ans:'2',ansE:'ANLEITEN (Stil 2 — partizipativ): Lernsituation für alle, gemeinsame Entwicklung. Hoher Fokus auf Sache UND Mensch.'},
  {scen:'<strong>MA mit schwerer Familiensituation.</strong> Jonas (Rezeption) hat einen kranken Vater zuhause. Sara ändert flexibel seine Dienstpläne, bietet unbezahlten Urlaub an, fragt regelmässig wie es geht.',ans:'3',ansE:'UNTERSTÜTZEN (Stil 3 — karitativ): Private Ausnahmesituation — Flexibilität, Empathie, Person vor Arbeit.'},
  {scen:'<strong>Housekeeping-Supervisor Daniela.</strong> Daniela leitet 12 MA, Sara hat volles Vertrauen. Sara sagt bei der Monatsreview: "Ihr kennt euren Bereich. Macht eure Planung, meldet die Zahlen, wir sehen uns nächsten Monat."',ans:'4',ansE:'DELEGIEREN (Stil 4 — laisser faire): Langjährige, kompetente Supervisorin — Vertrauen, klares Reporting, keine Mikro-Führung.'},
  {scen:'<strong>Neue Rechnungslegungsrichtlinie Swiss GAAP.</strong> Sara gibt die neue Vorgabe vom Wirtschaftsprüfer im Meeting bekannt: "Ab 1. Januar setzen wir auf Swiss GAAP FER um. Das ist vom VR entschieden — Umsetzung bis 31. März."',ans:'1',ansE:'LENKEN (Stil 1 — autoritär): Vorgabe von oben, nicht verhandelbar — klare Ansage. Die WAS-Frage ist gesetzt, offen ist nur das WIE.'},
  {scen:'<strong>Service-Akademie mit Azubis.</strong> Fünf Lehrlinge aus verschiedenen Abteilungen machen gemeinsam eine Ausbildung zum Thema "Gästeerlebnis". Sara ist dabei — sie übt mit ihnen, gibt Feedback, lässt sie selbst kreative Lösungen finden.',ans:'2',ansE:'ANLEITEN (Stil 2 — partizipativ): Ausbildungssituation mit Raum für Kreativität — hoher Lernfokus, hoher Menschenfokus.'},
  {scen:'<strong>Valentinstag-Deko im Wellness.</strong> Sara fragt das Wellness-Team: "Ihr kennt eure Gäste am besten. Wie möchtet ihr Valentinstag gestalten? Zeigt mir eure Idee — Budget CHF 500, Deadline 10. Februar."',ans:'4',ansE:'DELEGIEREN (Stil 4 — laisser faire): Kreativ-Freiraum mit klaren Rahmenbedingungen. Team hat Expertise und Motivation — Sara vertraut.'},
  {scen:'<strong>Trauerkarten-Stapel auf Saras Schreibtisch.</strong> Der langjährige Barchef ist überraschend verstorben. Sara sagt der Barbrigade: "Heute Abend bleibt die Bar zu. Wir gehen zusammen Essen, reden, erinnern uns."',ans:'3',ansE:'UNTERSTÜTZEN (Stil 3 — karitativ): Trauer und Gemeinschaft sind wichtiger als Umsatz. Menschliche Führung.'}
];
var flCurStilIdx = -1;

window.flGenU1 = function() {
  flCurStilIdx = flPickNew(FL_STIL_SZEN, flCurStilIdx);
  var f = FL_STIL_SZEN[flCurStilIdx];
  document.getElementById('fl_u1_scen').innerHTML = f.scen;
  document.getElementById('fl_u1_options').innerHTML =
    '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:10px">' +
    '<label style="display:flex;align-items:center;gap:10px;cursor:pointer;padding:14px 16px;border-radius:10px;border:1px solid var(--bd);background:var(--s)"><input type="radio" name="fl_u1" value="1" style="accent-color:#ff6b6b"> <div><strong style="color:#ff6b6b">Stil 1 — LENKEN</strong><br><span style="font-size:12px;color:var(--tx2)">autoritär · hoch Sache, tief Mensch</span></div></label>' +
    '<label style="display:flex;align-items:center;gap:10px;cursor:pointer;padding:14px 16px;border-radius:10px;border:1px solid var(--bd);background:var(--s)"><input type="radio" name="fl_u1" value="2" style="accent-color:#38c759"> <div><strong style="color:#38c759">Stil 2 — ANLEITEN</strong><br><span style="font-size:12px;color:var(--tx2)">partizipativ · hoch Sache, hoch Mensch</span></div></label>' +
    '<label style="display:flex;align-items:center;gap:10px;cursor:pointer;padding:14px 16px;border-radius:10px;border:1px solid var(--bd);background:var(--s)"><input type="radio" name="fl_u1" value="3" style="accent-color:#9b59b6"> <div><strong style="color:#9b59b6">Stil 3 — UNTERSTÜTZEN</strong><br><span style="font-size:12px;color:var(--tx2)">karitativ · tief Sache, hoch Mensch</span></div></label>' +
    '<label style="display:flex;align-items:center;gap:10px;cursor:pointer;padding:14px 16px;border-radius:10px;border:1px solid var(--bd);background:var(--s)"><input type="radio" name="fl_u1" value="4" style="accent-color:#8e8e93"> <div><strong style="color:#8e8e93">Stil 4 — DELEGIEREN</strong><br><span style="font-size:12px;color:var(--tx2)">laisser faire · tief Sache, tief Mensch</span></div></label>' +
    '</div>';
  document.getElementById('fl_u1_res').innerHTML = '';
};

window.flCheckU1 = function() {
  var sel = document.querySelector('input[name="fl_u1"]:checked');
  var f = FL_STIL_SZEN[flCurStilIdx];
  if (!sel) { document.getElementById('fl_u1_res').innerHTML = '<div style="padding:12px;border-radius:10px;background:rgba(232,168,56,.1);color:var(--am);font-size:13px">Bitte wähle zuerst einen Führungsstil aus.</div>'; return; }
  var ok = sel.value === f.ans;
  var h = '<div style="padding:16px 20px;border-radius:12px;background:' + (ok?'rgba(56,199,89,.1)':'rgba(255,107,107,.1)') + ';border:1px solid ' + (ok?'rgba(56,199,89,.3)':'rgba(255,107,107,.3)') + '">';
  h += '<div style="font-weight:700;color:' + (ok?'var(--g)':'var(--r)') + ';margin-bottom:8px;font-size:15px">' + (ok?'✓ Richtig!':'✗ Nicht ganz richtig.') + '</div>';
  h += '<div style="font-size:14px;line-height:1.6;color:var(--tx)">' + f.ansE + '</div>';
  h += '</div>';
  document.getElementById('fl_u1_res').innerHTML = h;
};

// ======================================================
// Ü2: KONFLIKT-ESKALATION (Glasl 9 Stufen)
// ======================================================
var FL_KONF_FAELLE = [
  {case:'<strong>Nadia & David.</strong> Nadia (Managerin) sagt beim Schichtwechsel: "Du hast vergessen, das Handover-Protokoll auszufüllen." David knapp: "Mach ich nachher." Die Zusammenarbeit ist funktional, aber spürbar angespannt. Beide glauben, ein Gespräch könnte alles lösen.',ans:'1',ansE:'Stufe 1 — Verhärtung. Kaum beobachtbare Spannung, zähe Kommunikation. Noch die Überzeugung, ein gutes Gespräch löst alles.'},
  {case:'<strong>Küchen-Streit vor Publikum.</strong> Marco und Alex (Kochlehrling) streiten sich während der Mittagsservice offen vor Gästen. Marco zieht Alex durch den Kakao. Alex droht mit E-Mail an GL. Team ist gespalten — manche halten zu Marco, andere zu Alex.',ans:'4',ansE:'Stufe 4 — Images und Koalitionen. Team spaltet sich, Koalitionen werden geschmiedet. Mediator nötig (Win-Lose).'},
  {case:'<strong>Housekeeping-Konflikt öffentlich.</strong> Laura und Maria streiten seit Monaten. Maria hat behauptet, Laura würde Lieblinge bevorzugen. Lauras Ansehen ist beschädigt. Sie sagt: "Ich kann nicht mehr zurück."',ans:'5',ansE:'Stufe 5 — Gesichtsverlust. Identität und Ansehen sind bedroht. Klar Win-Lose, Mediation unumgänglich.'},
  {case:'<strong>Ex-Angestellter vs. Hotel.</strong> Raphael wurde gekündigt. Er schreibt vernichtende Google-Rezensionen, droht mit Klage, zeigt sich vor Hotel, filmt heimlich. Will das Hotel ruinieren — auch wenn es ihn selbst belastet.',ans:'7',ansE:'Stufe 7 — Begrenzte Vernichtungsschläge. Schaden zufügen wichtiger als eigener Vorteil. Lose-Lose. Machteingriff (Anwalt, Polizei).'},
  {case:'<strong>Rezeptionsteam — gereizte Stimmung.</strong> Seit zwei Wochen ist die Stimmung merklich kühler. Alle arbeiten zusammen, aber keiner spricht mehr privat. Das Lachen fehlt. Operativ läuft alles.',ans:'1',ansE:'Stufe 1 — Verhärtung. Klassische Frühwarnphase. Ideale Zeit zum Intervenieren durch Moderation.'},
  {case:'<strong>Heftige Besprechung.</strong> Thomas wirft Nadia im Monatsmeeting vor, die Reservationen nicht an Küche zu kommunizieren. Lautes Wortgefecht, Anschuldigungen hin und her. Beide beharren demonstrativ auf ihrer Position.',ans:'2',ansE:'Stufe 2 — Debatten und Polemik. Angriffslustige Diskussionen, aber Sachebene noch da. Moderation kann noch greifen.'},
  {case:'<strong>Chef-Konflikt in GL.</strong> Sara und Finanzchef Peter haben sich gedroht: Peter: "Wenn du die Investition durchziehst, ziehe ich meine Konsequenzen." Sara: "Und ich erwarte deinen Rücktritt." Ultimaten, Gegner nur noch als Rolle wahrgenommen.',ans:'6',ansE:'Stufe 6 — Drohstrategien. Ultimaten, Drohungen, Gegner ist "Organisation". VR/Aufsichtsrat muss eingreifen.'},
  {case:'<strong>Bar-Team — kalter Krieg.</strong> Zwei Bartender reden seit drei Monaten nicht mehr miteinander ausser über die nötigsten Absprachen. Sie "vergessen" sich gegenseitig bei Bestellungen. Gespräche werden ignoriert, Bitten übersehen. Aktionen statt Worte.',ans:'3',ansE:'Stufe 3 — Taten statt Worte. "Der Worte sind genug gewechselt." Konkurrenzverhalten, nonverbale Kommunikation dominiert. Noch Win-Win möglich.'},
  {case:'<strong>Servicebrigade gegen Rezeption.</strong> Der Restaurant-Service hat eine geheime WhatsApp-Gruppe "Rezeption-Bullshit". Sie leiten absichtlich falsche Info an die Rezeption weiter, damit diese dumm dasteht. Die Rezeption hat Gegen-Koalition mit Housekeeping geschlossen.',ans:'4',ansE:'Stufe 4 — Images und Koalitionen. Bündnispartner werben, provozieren. Rigorosität, Schwarz-Weiss-Denken. Mediator nötig.'},
  {case:'<strong>Chef entlassen will die ganze Abteilung liquidieren.</strong> Der ehemalige HR-Chef (nach Kündigung) schickt Massen-E-Mails mit vertraulichen Personalinfos an externe Partner, offenbart Gehälter, spricht mit allen Ex-Kollegen. Hauptziel: HR-Abteilung zerstören, Familie Keller diskreditieren.',ans:'8',ansE:'Stufe 8 — Zersplitterung. Zentrales Nervensystem des Feindes angreifen. Vertrauliche Daten als Waffe. Polizei/Anwalt zwingend.'},
  {case:'<strong>Souschef vs. Chefkoch.</strong> Marco (Souschef) hat Chefkoch Bernhard in einer Sitzung scharf widersprochen: "Bernhard, mit Verlaub — deine Kalkulation ergibt keinen Sinn, und ich sage dir auch warum." Bernhard sagt nichts, wirkt aber betroffen.',ans:'2',ansE:'Stufe 2 — Debatten und Polemik. Offener Widerspruch, Polarisierung. Sachebene noch klar erkennbar, aber Ton wird scharf.'},
  {case:'<strong>F&B-Management: Totale Verweigerung.</strong> Der F&B-Manager hat Saras neue Menu-Strategie abgelehnt. Er beruft sich auf "historische Praxis" und setzt einfach die alten Menüs ein — ohne Diskussion, ohne Konfrontation. Er tut, als hätte das Meeting nie stattgefunden.',ans:'3',ansE:'Stufe 3 — Taten statt Worte. Verweigerung, Konkurrenzverhalten, aber keine offene Konfrontation. Letzte Chance für Selbsthilfe.'},
  {case:'<strong>Housekeeping verlässt kollektiv das Hotel.</strong> Das gesamte Housekeeping-Team (12 Personen) hat sich organisiert und kündigt geschlossen zum selben Datum. Alle beziehen sich auf "die unmenschlichen Arbeitsbedingungen" und haben dies mit einem gemeinsamen Anwalt koordiniert.',ans:'6',ansE:'Stufe 6 — Drohstrategien. Kollektive Ultimaten, koordiniertes Handeln. Massive Eskalation — externe Mediation + Krisenmanagement nötig.'},
  {case:'<strong>Sabotage in der Küche.</strong> Nach einer Auseinandersetzung mit dem Chefkoch wird "zufällig" schlechtes Fleisch bestellt, werden Preise falsch kalkuliert. Gast-Beschwerden häufen sich. Der Chefkoch will den Souschef loswerden — und ist bereit, Reputationsschaden zu akzeptieren.',ans:'7',ansE:'Stufe 7 — Begrenzte Vernichtungsschläge. Der Gegner soll entfernt werden, auch um den Preis eigener Schäden. Machteingriff unumgänglich.'},
  {case:'<strong>Gastronomie-Konflikt total eskaliert.</strong> Zwei Familienmitglieder der Besitzerfamilie (Keller vs. Keller) haben sich so zerstritten, dass beide das Hotel lieber geschlossen sehen, als es dem anderen zu überlassen. Sie sabotieren Entscheidungen bewusst, bringen den Betrieb in Existenznöte.',ans:'9',ansE:'Stufe 9 — Gemeinsam in den Abgrund. Selbstopfer ist akzeptiert — Hauptsache Feind geht unter. Nur Gerichts-/Eigentumsentscheidung hilft.'},
  {case:'<strong>Serviceteam nach Gruppen-Event.</strong> Nach einer chaotischen Hochzeit mit 180 Gästen haben einige im Service das Gefühl, dass andere zu wenig geholfen haben. Es gibt Getuschel, manche sind "nicht mehr so freundlich" miteinander. Aber alle reden noch normal, es gibt keine offenen Angriffe.',ans:'1',ansE:'Stufe 1 — Verhärtung. Schwelender Unmut, noch kommunikativ lösbar. Selbsthilfe/Moderation.'},
  {case:'<strong>Marco will Bernhard demütigen.</strong> Marco (Souschef) hat öffentlich bei einem Branchentreff einen Bloginartikel geteilt: "Die grössten kulinarischen Fehltritte in Engelberg — Hotel Alpenblick führt die Liste an." Er will Bernhards Ruf gezielt zerstören, verlinkt seinen persönlichen Namen.',ans:'5',ansE:'Stufe 5 — Gesichtsverlust. Direkte Demaskierung in der Öffentlichkeit. Win-Lose Zone, Mediation + ggf. arbeitsrechtliche Schritte.'},
  {case:'<strong>Rezeption und Sales.</strong> Der Sales Manager hat Nadia (Rezeption) in einem E-Mail-Verkehr cc Geschäftsleitung beschuldigt, sie würde "absichtlich Firmenkunden nicht richtig behandeln, um die Corporate-Rates zu boykottieren". Nadia bestreitet das vehement. Öffentliche Beschuldigung.',ans:'4',ansE:'Stufe 4 — Images und Koalitionen. Dritte (GL) werden involviert, Anschuldigungen in den Raum gestellt. Mediator einschalten.'}
];
var flCurKonfIdx = -1;

window.flGenU2 = function() {
  flCurKonfIdx = flPickNew(FL_KONF_FAELLE, flCurKonfIdx);
  var f = FL_KONF_FAELLE[flCurKonfIdx];
  document.getElementById('fl_u2_case').innerHTML = f.case;
  var h = '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(110px,1fr));gap:6px">';
  var titles = ['Verhärtung','Debatten','Taten statt Worte','Images + Koalitionen','Gesichtsverlust','Drohstrategien','Begrenzte Vernichtung','Zersplitterung','Gemeinsam Abgrund'];
  for (var i = 1; i <= 9; i++) {
    var color = i <= 3 ? '#38c759' : i <= 6 ? '#e8a838' : '#ff3b30';
    var bgcolor = i <= 3 ? 'rgba(56,199,89,.08)' : i <= 6 ? 'rgba(232,168,56,.08)' : 'rgba(255,59,48,.08)';
    h += '<label style="cursor:pointer;padding:12px 10px;border-radius:8px;border:1.5px solid var(--bd);background:' + bgcolor + ';text-align:center;transition:all .2s">';
    h += '<input type="radio" name="fl_u2" value="' + i + '" style="display:none">';
    h += '<div style="font-weight:700;color:' + color + ';font-size:18px">' + i + '</div>';
    h += '<div style="font-size:11px;color:var(--tx2);margin-top:2px">' + titles[i-1] + '</div>';
    h += '</label>';
  }
  h += '</div>';
  document.getElementById('fl_u2_options').innerHTML = h;
  document.querySelectorAll('#fl_u2_options label').forEach(function(lbl){
    lbl.addEventListener('click', function(){
      document.querySelectorAll('#fl_u2_options label').forEach(function(l){ l.style.borderColor='var(--bd)'; l.style.boxShadow='none'; });
      lbl.style.borderColor='var(--ac)';
      lbl.style.boxShadow='0 0 0 2px rgba(232,86,122,.2)';
      var inp = lbl.querySelector('input'); if(inp) inp.checked=true;
    });
  });
  document.getElementById('fl_u2_res').innerHTML = '';
};

window.flCheckU2 = function() {
  var sel = document.querySelector('input[name="fl_u2"]:checked');
  var f = FL_KONF_FAELLE[flCurKonfIdx];
  if (!sel) { document.getElementById('fl_u2_res').innerHTML = '<div style="padding:12px;border-radius:10px;background:rgba(232,168,56,.1);color:var(--am);font-size:13px">Bitte wähle zuerst eine Stufe aus.</div>'; return; }
  var ok = sel.value === f.ans;
  var h = '<div style="padding:16px 20px;border-radius:12px;background:' + (ok?'rgba(56,199,89,.1)':'rgba(255,107,107,.1)') + ';border:1px solid ' + (ok?'rgba(56,199,89,.3)':'rgba(255,107,107,.3)') + '">';
  h += '<div style="font-weight:700;color:' + (ok?'var(--g)':'var(--r)') + ';margin-bottom:8px;font-size:15px">' + (ok?'✓ Richtig!':'✗ Nicht ganz richtig. Korrekt wäre Stufe ' + f.ans + '.') + '</div>';
  h += '<div style="font-size:14px;line-height:1.6;color:var(--tx)">' + f.ansE + '</div>';
  h += '</div>';
  document.getElementById('fl_u2_res').innerHTML = h;
};

// ======================================================
// Ü3: SMART-ZIELE PRÜFEN
// ======================================================
var FL_SMART_ZIELE = [
  {ziel:'"Wir werden den Umsatz irgendwann steigern."',krit:[{l:'S',n:'Spezifisch',a:'nein',e:'Kein spezifisches Gebiet, keine Abteilung — "Umsatz" ist zu allgemein.'},{l:'M',n:'Messbar',a:'nein',e:'Keine Zahl, kein Prozentwert.'},{l:'A',n:'Aktiv beeinflussbar',a:'teilweise',e:'Wer ist konkret verantwortlich? Ohne Klarheit bleibt es passiv.'},{l:'R',n:'Realistisch',a:'teilweise',e:'Ohne Zahlen nicht beurteilbar.'},{l:'T',n:'Terminiert',a:'nein',e:'"Irgendwann" ist Gegenteil von terminiert.'}]},
  {ziel:'"Thomas steigert den Frühstücksumsatz von CHF 28 auf CHF 35 pro Gast durch neue À-la-carte-Optionen bis Ende Q2 (30. Juni), Budget CHF 8000."',krit:[{l:'S',n:'Spezifisch',a:'ja',e:'Sehr spezifisch: Frühstücksumsatz, À-la-carte, pro Gast.'},{l:'M',n:'Messbar',a:'ja',e:'CHF 28 → CHF 35 — eindeutige Zahlen.'},{l:'A',n:'Aktiv beeinflussbar',a:'ja',e:'Thomas hat als F&B-Manager vollen Handlungsspielraum.'},{l:'R',n:'Realistisch',a:'ja',e:'CHF 8000 Budget, Q2 ausreichend Zeit.'},{l:'T',n:'Terminiert',a:'ja',e:'Klares Enddatum: 30. Juni.'}]},
  {ziel:'"Das Team soll den Betrieb exzellent führen — wir wollen alle glücklich sein."',krit:[{l:'S',n:'Spezifisch',a:'nein',e:'"Exzellent" und "glücklich" sind undefiniert.'},{l:'M',n:'Messbar',a:'nein',e:'Keine Kennzahlen, subjektive Begriffe.'},{l:'A',n:'Aktiv beeinflussbar',a:'nein',e:'"Das Team" ist zu diffus.'},{l:'R',n:'Realistisch',a:'nein',e:'Ohne Messgrössen nicht prüfbar.'},{l:'T',n:'Terminiert',a:'nein',e:'Kein Zeitrahmen.'}]},
  {ziel:'"Nadia reduziert Gästebeschwerden an Réception von 8 auf max. 3 pro Monat, indem sie die Check-in-Zeit durch neue Templates auf unter 4 Min. bringt — bis Ende September."',krit:[{l:'S',n:'Spezifisch',a:'ja',e:'Réception, Beschwerden, Check-in-Zeit — alles klar.'},{l:'M',n:'Messbar',a:'ja',e:'8 → max. 3 Beschwerden/Monat, Check-in < 4 Min.'},{l:'A',n:'Aktiv beeinflussbar',a:'ja',e:'Nadia kann Templates direkt umsetzen.'},{l:'R',n:'Realistisch',a:'ja',e:'Halbierung durch Prozessoptimierung machbar.'},{l:'T',n:'Terminiert',a:'ja',e:'Ende September als klares Enddatum.'}]},
  {ziel:'"Die Fluktuation muss unbedingt in den nächsten 10 Minuten halbiert werden."',krit:[{l:'S',n:'Spezifisch',a:'teilweise',e:'Fluktuation klar, aber ohne Abteilung zu pauschal.'},{l:'M',n:'Messbar',a:'ja',e:'"Halbiert" ist klare Messgrösse.'},{l:'A',n:'Aktiv beeinflussbar',a:'teilweise',e:'Fluktuation wird von vielen Faktoren beeinflusst.'},{l:'R',n:'Realistisch',a:'nein',e:'10 Minuten ist absurd — braucht Monate.'},{l:'T',n:'Terminiert',a:'ja',e:'Zeitlich definiert, aber unrealistisch.'}]},
  {ziel:'"Das Housekeeping-Team erhöht die TripAdvisor-Zimmerwertung bis 31.12. von 4.1 auf mindestens 4.5 durch neue Reinigungsstandards und 2-stündiges Pre-Check der Hausdame bei Abreise-Zimmern — Budget 2h/Tag, Schulungen im Februar."',krit:[{l:'S',n:'Spezifisch',a:'ja',e:'Housekeeping, TripAdvisor-Zimmer, neue Standards, Pre-Check — sehr klar.'},{l:'M',n:'Messbar',a:'ja',e:'4.1 → 4.5 TripAdvisor-Score — messbar.'},{l:'A',n:'Aktiv beeinflussbar',a:'ja',e:'Team kann Prozesse direkt ändern.'},{l:'R',n:'Realistisch',a:'ja',e:'0.4 Punkte Steigerung in 12 Monaten mit Massnahmen — ambitioniert aber möglich.'},{l:'T',n:'Terminiert',a:'ja',e:'31. Dezember ist konkret.'}]},
  {ziel:'"Wir müssen dringend besser werden."',krit:[{l:'S',n:'Spezifisch',a:'nein',e:'Weder Thema noch Dimension definiert.'},{l:'M',n:'Messbar',a:'nein',e:'Kein Messwert für "besser".'},{l:'A',n:'Aktiv beeinflussbar',a:'nein',e:'"Wir" ist diffus.'},{l:'R',n:'Realistisch',a:'teilweise',e:'Theoretisch ja, aber kein Bezugsrahmen.'},{l:'T',n:'Terminiert',a:'nein',e:'"Dringend" ist keine Deadline.'}]},
  {ziel:'"Marco verbessert die Küchen-Kostenquote von 32% auf 28% durch optimierte Bestellmengen und 20% Reduktion von Food-Waste bis Ende Q3, Budget CHF 1500 für neue Lagersoftware."',krit:[{l:'S',n:'Spezifisch',a:'ja',e:'Küchen-Kostenquote, Bestellmengen, Food-Waste — alles klar.'},{l:'M',n:'Messbar',a:'ja',e:'32% → 28%, -20% Food-Waste.'},{l:'A',n:'Aktiv beeinflussbar',a:'ja',e:'Marco als Souschef kontrolliert Bestellung und Wastage.'},{l:'R',n:'Realistisch',a:'ja',e:'4%-Punkte Kostenreduktion in 9 Monaten plus Software.'},{l:'T',n:'Terminiert',a:'ja',e:'Ende Q3 ist klar.'}]},
  {ziel:'"Es wäre schön, wenn wir mehr zahlende Gäste hätten."',krit:[{l:'S',n:'Spezifisch',a:'nein',e:'"Mehr" ist undefiniert, kein Segment, keine Dimension.'},{l:'M',n:'Messbar',a:'nein',e:'Kein Zahlenwert.'},{l:'A',n:'Aktiv beeinflussbar',a:'nein',e:'"Wir" und "hätten" ist passiv formuliert — Wunsch, kein Ziel.'},{l:'R',n:'Realistisch',a:'nein',e:'Konjunktiv im Wunsch, keine Grundlage.'},{l:'T',n:'Terminiert',a:'nein',e:'Kein Datum.'}]},
  {ziel:'"Anna organisiert bis zum 14.9. ein Teamevent für 38 MA mit Budget CHF 3500. Jessica unterstützt bei Einladungen, Thomas bei F&B. Konzept bis 10.7., Zwischenstand 15.8."',krit:[{l:'S',n:'Spezifisch',a:'ja',e:'Teamevent, 38 MA, Orchestrierung mit Jessica+Thomas.'},{l:'M',n:'Messbar',a:'ja',e:'CHF 3500 Budget, 38 Teilnehmer.'},{l:'A',n:'Aktiv beeinflussbar',a:'ja',e:'Anna führt mit klarem Team.'},{l:'R',n:'Realistisch',a:'ja',e:'2 Monate Vorlauf, genug Ressourcen.'},{l:'T',n:'Terminiert',a:'ja',e:'3 Deadlines definiert: 10.7., 15.8., 14.9.'}]},
  {ziel:'"Die Rezeption soll freundlicher werden."',krit:[{l:'S',n:'Spezifisch',a:'teilweise',e:'Rezeption klar, aber "freundlicher" ist subjektiv.'},{l:'M',n:'Messbar',a:'nein',e:'Freundlichkeit ohne Kriterien nicht messbar.'},{l:'A',n:'Aktiv beeinflussbar',a:'teilweise',e:'Nadia könnte, aber keine klare Verantwortung.'},{l:'R',n:'Realistisch',a:'teilweise',e:'Ohne Massgrössen nicht prüfbar.'},{l:'T',n:'Terminiert',a:'nein',e:'Kein Datum.'}]},
  {ziel:'"Sara reduziert ihre wöchentliche Arbeitsstundenzahl von 68 auf unter 55h bis Ende März, indem sie drei konkrete Aufgaben delegiert: (1) F&B-Zahlen an Thomas, (2) Rekrutierung an Jessica, (3) Housekeeping-Qualität an Laura."',krit:[{l:'S',n:'Spezifisch',a:'ja',e:'Arbeitsstunden, 3 konkrete Delegationen — maximal spezifisch.'},{l:'M',n:'Messbar',a:'ja',e:'68h → <55h, 3 delegierte Aufgaben.'},{l:'A',n:'Aktiv beeinflussbar',a:'ja',e:'Sara entscheidet selbst über Delegation.'},{l:'R',n:'Realistisch',a:'ja',e:'13h Reduktion über 3 Aufgaben — ambitioniert, machbar.'},{l:'T',n:'Terminiert',a:'ja',e:'Ende März als Zielpunkt.'}]},
  {ziel:'"Mehr Gäste von Google Business."',krit:[{l:'S',n:'Spezifisch',a:'teilweise',e:'Google Business als Kanal klar, aber kein Ziel-Gastsegment.'},{l:'M',n:'Messbar',a:'nein',e:'"Mehr" ohne Zahl nicht messbar.'},{l:'A',n:'Aktiv beeinflussbar',a:'teilweise',e:'Google-SEO beeinflussbar, aber Ergebnis nicht garantiert.'},{l:'R',n:'Realistisch',a:'teilweise',e:'Generell ja, aber ohne Basis-Werte nicht prüfbar.'},{l:'T',n:'Terminiert',a:'nein',e:'Kein Datum.'}]},
  {ziel:'"Jessica führt bis Ende Mai mit jedem der 38 MA ein strukturiertes Mitarbeitergespräch (Vorlage HRM2, Protokollpflicht). Zwischenstand am 30.4. — mindestens 20 MAG abgehalten."',krit:[{l:'S',n:'Spezifisch',a:'ja',e:'38 MAG, strukturierte Vorlage, Protokoll — präzise.'},{l:'M',n:'Messbar',a:'ja',e:'38 Gespräche total, Meilenstein 20 bis 30.4.'},{l:'A',n:'Aktiv beeinflussbar',a:'ja',e:'Jessica führt selbst durch.'},{l:'R',n:'Realistisch',a:'ja',e:'38 MAG in 4-5 Monaten — machbar.'},{l:'T',n:'Terminiert',a:'ja',e:'30.4. Meilenstein, Ende Mai Deadline.'}]},
  {ziel:'"Das Hotel muss digitaler werden — wir investieren in Technologie."',krit:[{l:'S',n:'Spezifisch',a:'nein',e:'"Digitaler" und "Technologie" sind Buzzwords ohne Substanz.'},{l:'M',n:'Messbar',a:'nein',e:'Keine Zahlen, keine Bereiche.'},{l:'A',n:'Aktiv beeinflussbar',a:'teilweise',e:'Mit Zahlen wäre es, so zu vage.'},{l:'R',n:'Realistisch',a:'nein',e:'Ohne Bezugsrahmen nicht prüfbar.'},{l:'T',n:'Terminiert',a:'nein',e:'Kein Datum.'}]}
];
var flCurSmartIdx = -1;

window.flGenU3 = function() {
  flCurSmartIdx = flPickNew(FL_SMART_ZIELE, flCurSmartIdx);
  var f = FL_SMART_ZIELE[flCurSmartIdx];
  document.getElementById('fl_u3_ziel').innerHTML = f.ziel;
  var h = '<div style="display:grid;gap:8px">';
  f.krit.forEach(function(k,i){
    h += '<div class="c" style="padding:14px 18px">';
    h += '<div style="display:flex;align-items:center;gap:14px;margin-bottom:8px">';
    h += '<div style="width:32px;height:32px;border-radius:8px;background:rgba(139,44,90,.12);color:#8b2c5a;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:18px;flex-shrink:0">' + k.l + '</div>';
    h += '<div style="flex:1;font-weight:600">' + k.n + '</div>';
    h += '</div>';
    h += '<div style="display:flex;gap:8px;flex-wrap:wrap">';
    h += '<label style="display:flex;align-items:center;gap:6px;cursor:pointer;padding:6px 14px;border-radius:10px;border:1px solid var(--bd);background:var(--s);font-size:13px"><input type="radio" name="fl_u3_k' + i + '" value="ja" style="accent-color:var(--g)"> <strong style="color:var(--g)">Ja</strong></label>';
    h += '<label style="display:flex;align-items:center;gap:6px;cursor:pointer;padding:6px 14px;border-radius:10px;border:1px solid var(--bd);background:var(--s);font-size:13px"><input type="radio" name="fl_u3_k' + i + '" value="teilweise" style="accent-color:var(--am)"> <strong style="color:var(--am)">Teilweise</strong></label>';
    h += '<label style="display:flex;align-items:center;gap:6px;cursor:pointer;padding:6px 14px;border-radius:10px;border:1px solid var(--bd);background:var(--s);font-size:13px"><input type="radio" name="fl_u3_k' + i + '" value="nein" style="accent-color:var(--r)"> <strong style="color:var(--r)">Nein</strong></label>';
    h += '</div>';
    h += '<div id="fl_u3_ffb' + i + '" style="display:none;margin-top:8px;padding:10px 12px;border-radius:8px;font-size:13px;line-height:1.5"></div>';
    h += '</div>';
  });
  h += '</div>';
  document.getElementById('fl_u3_krit').innerHTML = h;
  document.getElementById('fl_u3_res').innerHTML = '';
};

window.flCheckU3 = function() {
  var f = FL_SMART_ZIELE[flCurSmartIdx];
  var correct = 0, total = f.krit.length;
  f.krit.forEach(function(k,i){
    var sel = document.querySelector('input[name="fl_u3_k' + i + '"]:checked');
    var fb = document.getElementById('fl_u3_ffb' + i);
    if (!sel) { fb.style.display='block'; fb.style.background='rgba(232,168,56,.1)'; fb.style.color='var(--am)'; fb.innerHTML='⚠ Bitte auswählen'; return; }
    var ok = sel.value === k.a;
    if (ok) correct++;
    fb.style.display = 'block';
    fb.style.background = ok ? 'rgba(56,199,89,.1)' : 'rgba(255,107,107,.1)';
    fb.style.color = ok ? 'var(--g)' : 'var(--r)';
    fb.innerHTML = '<strong>' + (ok ? '✓ Richtig' : '✗ Falsch — richtig: ' + k.a) + '</strong> — ' + k.e;
  });
  var pct = Math.round(correct/total*100);
  var ok = correct === total;
  var h = '<div style="padding:16px 20px;border-radius:12px;background:' + (ok?'rgba(56,199,89,.1)':'rgba(232,168,56,.1)') + ';border:1px solid ' + (ok?'rgba(56,199,89,.3)':'rgba(232,168,56,.3)') + ';margin-top:14px">';
  h += '<div style="font-weight:700;color:' + (ok?'var(--g)':'var(--am)') + ';font-size:16px">' + correct + ' / ' + total + ' richtig (' + pct + '%)</div>';
  h += '</div>';
  document.getElementById('fl_u3_res').innerHTML = h;
};

// ======================================================
// Ü4: THEORIE X ODER Y? (Menschenbild McGregor)
// ======================================================
var FL_XY_AUSSAGEN = [
  {text:'Herr Bühler (Saras Vorgänger) sagt: "Wenn ich die nicht jeden Tag kontrolliere, machen die nur halb so viel Arbeit. Das liegt einfach in der menschlichen Natur."',ans:'X',ansE:'Theorie X: Annahme, Menschen seien von Natur arbeitsfaul und müssten durch Kontrolle zur Leistung gezwungen werden. Klassische X-Haltung.'},
  {text:'Sara (zu Nadia): "Du kennst deine Gäste — entwickle das Gastgeschenk-Konzept so, wie du es für sinnvoll hältst. Budget 1500 CHF, Deadline Ende Februar."',ans:'Y',ansE:'Theorie Y: Sara vertraut Nadia Verantwortung und Eigeninitiative zu. Delegation mit Kompetenzrahmen — klassische Y-Führung.'},
  {text:'Der Chefkoch (in der Küche zum Team): "Ich muss hier jeden Handgriff selber machen, sonst wird nichts gescheit. Lehrlinge taugen heute nichts mehr."',ans:'X',ansE:'Theorie X: Misstrauen gegenüber Kompetenz anderer, Einzelkämpfer-Haltung, Abwertung anderer. Reinste X-Wahrnehmung.'},
  {text:'Jessica (HR) sagt im Meeting: "Unsere Lehrlinge haben beim Probe-Tag riesige Kreativität gezeigt. Ich schlage vor, wir richten eine Lehrlings-AG für neue Service-Standards ein — die machen das super."',ans:'Y',ansE:'Theorie Y: Glaube an Kreativität, Engagement und Selbstverwirklichung junger MA. Klassische Y-Perspektive.'},
  {text:'"Wer nicht alle zwei Wochen eine schriftliche Verwarnung bekommt, der hat den Chef nicht hart genug. Das gehört in einer Führungsrolle dazu."',ans:'X',ansE:'Theorie X: Zwang, Strafe und Drohungen als zentrale Führungsinstrumente. Menschen reagieren nach X-Sicht nur auf Druck.'},
  {text:'Laura (Housekeeping): "Mein Team hat selbst den Vorschlag gemacht, die Zimmerkontrolle zu verdoppeln. Sie sagen, sie fühlen sich verantwortlich für die Gästezufriedenheit."',ans:'Y',ansE:'Theorie Y: Mitarbeitende übernehmen Eigeninitiative, identifizieren sich mit Zielen. Klassische Selbststeuerung in Y-Kultur.'},
  {text:'Der Finanzchef: "Man muss die Mitarbeitenden an der kurzen Leine halten. Gibst du ihnen einen Millimeter, nehmen sie einen Meter. Alles andere ist naiv."',ans:'X',ansE:'Theorie X: Generalisiertes Misstrauen, Kontrollzwang, "kurze Leine"-Mentalität. Klassische X-Grundhaltung.'},
  {text:'Marco (Souschef): "Wir haben zusammen das neue Menü entwickelt. Jeder Koch durfte ein Gericht einbringen. Die Leute sind jetzt mit vollem Herzen dabei."',ans:'Y',ansE:'Theorie Y: Mitbestimmung, intrinsische Motivation durch Sinn und Identifikation. Klassische Y-Haltung.'},
  {text:'"Die Jungen heute wollen doch nur noch Work-Life-Balance. Keiner will mehr richtig anpacken. Früher war das anders."',ans:'X',ansE:'Theorie X: Verallgemeinerte Abwertung der Arbeitsmoral junger Generation. Klassischer X-Reflex.'},
  {text:'Anna (Rezeption): "Ich habe ohne dass jemand es verlangt hat, am Samstag früher angefangen — der Check-out-Stoß war voraussehbar. Ich wollte helfen."',ans:'Y',ansE:'Theorie Y: Freiwillige Eigeninitiative, Mitdenken ohne Aufforderung. Klassisches Y-Verhalten engagierter MA.'},
  {text:'Herr Keller (Besitzer, alt): "Das Personal muss man durchschütteln, sonst werden sie faul. Ein guter Betrieb braucht Angst — nicht vor dem Chef, sondern vor dem Verlust des Jobs."',ans:'X',ansE:'Theorie X: Angst als Motivationsinstrument. "Fressangst" wird bewusst geschürt. Klassische X-Theorie in Reinform.'},
  {text:'Saras neuer Führungsleitsatz: "Menschen wachsen an Verantwortung. Unsere Aufgabe ist, ihnen die Rahmenbedingungen zu bieten und sie zu entfalten."',ans:'Y',ansE:'Theorie Y: Selbstverwirklichung und Wachstum durch Verantwortung. Klassischer Y-Leitsatz.'},
  {text:'Der Verwaltungsrat: "Wir müssen eine Stempeluhr einführen. Sonst betrügen uns die Leute bei der Arbeitszeit. Das wird Pflicht für alle — CEO auch, damit es gerecht ist."',ans:'X',ansE:'Theorie X: Misstrauen als Grundannahme, Kontrolle als Standard. X-Position.'},
  {text:'Jonas (Rezeption): "Wenn ich weiss WARUM etwas wichtig ist, dann mache ich es gerne. Diese sinnlosen Vorschriften ohne Erklärung — das frustriert mich."',ans:'Y',ansE:'Theorie Y: Sinn statt Kontrolle, intrinsische Motivation durch Verständnis. Klassische Y-Einstellung.'},
  {text:'"Die meisten MA hassen ihren Job. Wer ein bisschen ehrlich ist, gibt das zu. Sie arbeiten nur fürs Geld, und wir müssen dafür sorgen, dass sie trotzdem Leistung bringen."',ans:'X',ansE:'Theorie X: Grundannahme "Arbeit = Unlust". Geld als einziger Motivator. Taylorismus-Mentalität.'},
  {text:'Thomas (F&B): "Ich habe bemerkt — wenn ich den Leuten zeige, welche Wirkung ihr Service auf Gäste hat (via TripAdvisor-Feedback-Runden), blühen sie auf. Keine Peitsche nötig."',ans:'Y',ansE:'Theorie Y: Wirkung sehen, Sinn erleben — das motiviert. Klassische Y-Beobachtung in der Praxis.'},
  {text:'Der GM aus dem Nachbarhotel: "In meinem Haus gibt es klare Regeln. Verstoss = Verwarnung. Drei Verwarnungen = raus. So einfach ist das. Wer nicht spurt, ist weg."',ans:'X',ansE:'Theorie X: Regeln und Strafen als einziges Führungskonzept. Unflexibel, kontrollorientiert.'},
  {text:'Sara (beim Jahresgespräch mit Marco): "Was möchtest du dieses Jahr erreichen? Wo willst du dich entwickeln? Wie kann ich dir dabei helfen?"',ans:'Y',ansE:'Theorie Y: Fragen statt Ansagen. Entwicklung und Potenzialentfaltung im Vordergrund. Klassische Y-Führung.'}
];
var flCurXYIdx = -1;

window.flGenU4 = function() {
  flCurXYIdx = flPickNew(FL_XY_AUSSAGEN, flCurXYIdx);
  var f = FL_XY_AUSSAGEN[flCurXYIdx];
  document.getElementById('fl_u4_text').innerHTML = f.text;
  document.getElementById('fl_u4_options').innerHTML =
    '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px">' +
    '<label style="display:flex;align-items:center;gap:12px;cursor:pointer;padding:18px 22px;border-radius:12px;border:2px solid var(--bd);background:var(--s);transition:all .2s"><input type="radio" name="fl_u4" value="X" style="accent-color:#ff6b6b"><div><strong style="color:#ff6b6b;font-size:17px">Theorie X</strong><br><span style="font-size:12px;color:var(--tx2)">Mensch ist unwillig · Taylorismus</span></div></label>' +
    '<label style="display:flex;align-items:center;gap:12px;cursor:pointer;padding:18px 22px;border-radius:12px;border:2px solid var(--bd);background:var(--s);transition:all .2s"><input type="radio" name="fl_u4" value="Y" style="accent-color:#38c759"><div><strong style="color:#38c759;font-size:17px">Theorie Y</strong><br><span style="font-size:12px;color:var(--tx2)">Mensch ist engagiert · Human-Relations</span></div></label>' +
    '</div>';
  document.getElementById('fl_u4_res').innerHTML = '';
};

window.flCheckU4 = function() {
  var sel = document.querySelector('input[name="fl_u4"]:checked');
  var f = FL_XY_AUSSAGEN[flCurXYIdx];
  if (!sel) { document.getElementById('fl_u4_res').innerHTML = '<div style="padding:12px;border-radius:10px;background:rgba(232,168,56,.1);color:var(--am);font-size:13px">Bitte wähle X oder Y.</div>'; return; }
  var ok = sel.value === f.ans;
  var h = '<div style="padding:16px 20px;border-radius:12px;background:' + (ok?'rgba(56,199,89,.1)':'rgba(255,107,107,.1)') + ';border:1px solid ' + (ok?'rgba(56,199,89,.3)':'rgba(255,107,107,.3)') + '">';
  h += '<div style="font-weight:700;color:' + (ok?'var(--g)':'var(--r)') + ';margin-bottom:8px;font-size:15px">' + (ok?'✓ Richtig!':'✗ Korrekt wäre: Theorie ' + f.ans) + '</div>';
  h += '<div style="font-size:14px;line-height:1.6;color:var(--tx)">' + f.ansE + '</div>';
  h += '</div>';
  document.getElementById('fl_u4_res').innerHTML = h;
};

// ======================================================
// Ü5: MASLOW-STUFE (Motivation)
// ======================================================
var FL_MASLOW = [
  {case:'<strong>Anna (Rezeption, 19, im ersten Job).</strong> Sie bittet Sara um einen unbefristeten Arbeitsvertrag, weil sie sich die Wohnung in Engelberg nur so leisten kann und Planungssicherheit braucht.',ans:'2',ansE:'Stufe 2 — Sicherheitsbedürfnisse: Arbeit, Wohnung, materielle Grundsicherung.'},
  {case:'<strong>Marco (Souschef).</strong> Er klagt, dass das Team ihn nicht genug wertschätzt. Er hätte gerne mehr Anerkennung für seine Gerichte — im Meeting-Protokoll, beim Team, beim Gast.',ans:'4',ansE:'Stufe 4 — Anerkennung/Wertschätzung. Marco braucht Prestige, Achtung, Ansehen vom Team.'},
  {case:'<strong>Laura (Housekeeping).</strong> Sie kommt in Saras Büro und sagt: "Ich habe das Gefühl, ich könnte mehr. Ich möchte eine Weiterbildung machen — vielleicht in Richtung Revenue Management. Ich will mich entfalten."',ans:'5',ansE:'Stufe 5 — Selbstverwirklichung. Laura möchte ihr Potenzial ausschöpfen, sich selbst entwickeln.'},
  {case:'<strong>Jonas (Rezeption, neu).</strong> Er fragt Sara, ob er beim gemeinsamen Mittagessen dabei sein darf. Er sagt: "Ich kenne noch niemanden hier — ich würde mich freuen, dazuzugehören."',ans:'3',ansE:'Stufe 3 — Soziale Bedürfnisse/Anschluss. Dazugehören, Teil der Gruppe sein, Gemeinschaft.'},
  {case:'<strong>Küchenhilfe Mahmoud.</strong> In der Spätschicht beschwert er sich, dass kein Essen für die MA da ist. "Ich arbeite 9 Stunden und habe Hunger — das geht einfach nicht."',ans:'1',ansE:'Stufe 1 — Physiologische Bedürfnisse. Nahrung, Grundversorgung. Muss vor allem anderen erfüllt sein.'},
  {case:'<strong>Nadia (Front Office Managerin).</strong> Sie hat sich um die offene Stelle der stv. Geschäftsführung beworben. "Ich fühle, dass ich bereit bin für den nächsten Karriereschritt — ich will mich weiterentwickeln."',ans:'5',ansE:'Stufe 5 — Selbstverwirklichung. Wachstum, Potenzialentfaltung, neue Herausforderungen.'},
  {case:'<strong>Thomas (F&B) nach einer schwierigen Entlassungs-Situation.</strong> "Ich mache mir Sorgen — sind unsere Arbeitsplätze sicher? Wenn der Laden schliesst, was dann?"',ans:'2',ansE:'Stufe 2 — Sicherheit. Arbeitsplatzsicherheit, existenzielle Grundsicherung.'},
  {case:'<strong>Team-Event-Vorschlag von mehreren MA.</strong> "Wir würden gern regelmässiger zusammen etwas unternehmen — das Grillen letzten Sommer war super. Wir möchten uns als Team fühlen."',ans:'3',ansE:'Stufe 3 — Soziale Bedürfnisse. Zugehörigkeit, Teambindung, Gemeinschaft.'},
  {case:'<strong>Frau Schneider vor der Pensionierung.</strong> "Ich möchte noch vor meinem Abschied den Goldenen Gast-Award gewinnen — das wäre die Krönung meiner Karriere."',ans:'4',ansE:'Stufe 4 — Anerkennung. Prestige, Ansehen, Auszeichnung als Höhepunkt des Berufslebens.'},
  {case:'<strong>Saisonarbeiter in der Unterkunft.</strong> Die Personalzimmer haben Schimmelspuren, die Heizung funktioniert nicht richtig. Die MA beschweren sich: "So können wir nicht wohnen — wir brauchen einen anständigen Schlafplatz."',ans:'1',ansE:'Stufe 1 — Physiologisch. Witterungsschutz, Schlafplatz, Grundversorgung.'},
  {case:'<strong>Marco nach Menü-Entwicklung.</strong> "Wenn die Gala ein Erfolg wird, steht mein Name als Chefkoch im Programm — ich will, dass alle wissen, dass ICH das entwickelt habe."',ans:'4',ansE:'Stufe 4 — Anerkennung. Individuelles Prestige, öffentliche Achtung, Namensnennung.'},
  {case:'<strong>Junger Lehrling Simon.</strong> "Die anderen Lehrlinge treffen sich nach Feierabend und ich werde nie gefragt. Ich weiss nicht, ob ich dazu gehöre."',ans:'3',ansE:'Stufe 3 — Soziale Bedürfnisse. Zugehörigkeit, Integration in die Peer-Group.'},
  {case:'<strong>Zimmermädchen Maria vom Jobverlust bedroht.</strong> Maria hat Familie, 2 Kinder. Die Gerüchte um Stellenabbau machen ihr Existenzangst: "Was soll aus uns werden? Wir brauchen das Gehalt."',ans:'2',ansE:'Stufe 2 — Sicherheit. Familien-Existenzsicherung, Angst vor Verlust der Grundlage.'},
  {case:'<strong>Bernhard (Chefkoch, 52).</strong> "Ich habe 35 Jahre in dieser Branche gearbeitet. Ich möchte jetzt das MA-Wochenbuch schreiben — mein Vermächtnis für die nächste Generation Köche."',ans:'5',ansE:'Stufe 5 — Selbstverwirklichung. Das eigene Werk hinterlassen, Sinnstiftung, Selbstverwirklichung.'},
  {case:'<strong>Azubi im Brandfall.</strong> Simon kommt panisch zur Rezeption: "Ich hab den Rauch gerochen! Ich muss raus, sofort — wo ist der Notausgang?"',ans:'1',ansE:'Stufe 1 — Physiologisch (Überleben). In akuter Gefahr zählt nur das Grundbedürfnis Leben.'},
  {case:'<strong>Nach einem Konflikt.</strong> "Ich will einfach wieder Teil des Teams sein. Dieses Aussen-vor-Gefühl macht mich kaputt. Können wir das Kriegsbeil begraben?"',ans:'3',ansE:'Stufe 3 — Soziale Bedürfnisse. Nach Konflikt die Zugehörigkeit zurückgewinnen.'},
  {case:'<strong>Saras Jahresgespräch mit sich selbst.</strong> "Ich bin jetzt GM. Ich habe das Maximum an Titel. Aber ich möchte noch einen Unterschied machen — ein eigenes Buch über Leadership schreiben, andere inspirieren."',ans:'5',ansE:'Stufe 5 — Selbstverwirklichung. Über Titel hinausgehen, Wirkung hinterlassen.'},
  {case:'<strong>Thomas nach erfolgreicher Gala.</strong> Er kommt strahlend zu Sara: "Hast du gesehen — der CEO der Besitzerfamilie hat mich vor allen gelobt! Das war das beste Feedback seit Jahren."',ans:'4',ansE:'Stufe 4 — Anerkennung. Öffentliches Lob des obersten Chefs — klassische Anerkennung.'}
];
var flCurMasIdx = -1;

window.flGenU5 = function() {
  flCurMasIdx = flPickNew(FL_MASLOW, flCurMasIdx);
  var f = FL_MASLOW[flCurMasIdx];
  document.getElementById('fl_u5_case').innerHTML = f.case;
  var h = '<div style="display:grid;gap:8px">';
  var stufen = [
    {n:1, t:'Physiologische Bedürfnisse', d:'Atmung, Wasser, Nahrung, Schlaf, Obdach', c:'#e84f38'},
    {n:2, t:'Sicherheitsbedürfnisse', d:'Arbeit, Wohnung, materielle Grundsicherung', c:'#e8a838'},
    {n:3, t:'Soziale Bedürfnisse', d:'Familie, Freundschaft, Zugehörigkeit', c:'#38b6e8'},
    {n:4, t:'Anerkennung & Wertschätzung', d:'Prestige, Ansehen, Erfolg, Achtung', c:'#38e89c'},
    {n:5, t:'Selbstverwirklichung', d:'Potenzial ausschöpfen, Sinn, Kreativität', c:'#b838e8'}
  ];
  stufen.forEach(function(s){
    h += '<label style="display:flex;align-items:center;gap:12px;cursor:pointer;padding:14px 18px;border-radius:10px;border:1.5px solid var(--bd);background:var(--s);transition:all .2s">';
    h += '<input type="radio" name="fl_u5" value="' + s.n + '" style="accent-color:' + s.c + '">';
    h += '<div style="width:36px;height:36px;border-radius:50%;background:' + s.c + ';color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:16px;flex-shrink:0">' + s.n + '</div>';
    h += '<div style="flex:1"><strong>' + s.t + '</strong><br><span style="font-size:12px;color:var(--tx2)">' + s.d + '</span></div>';
    h += '</label>';
  });
  h += '</div>';
  document.getElementById('fl_u5_options').innerHTML = h;
  document.getElementById('fl_u5_res').innerHTML = '';
};

window.flCheckU5 = function() {
  var sel = document.querySelector('input[name="fl_u5"]:checked');
  var f = FL_MASLOW[flCurMasIdx];
  if (!sel) { document.getElementById('fl_u5_res').innerHTML = '<div style="padding:12px;border-radius:10px;background:rgba(232,168,56,.1);color:var(--am);font-size:13px">Bitte wähle zuerst eine Stufe aus.</div>'; return; }
  var ok = sel.value === f.ans;
  var h = '<div style="padding:16px 20px;border-radius:12px;background:' + (ok?'rgba(56,199,89,.1)':'rgba(255,107,107,.1)') + ';border:1px solid ' + (ok?'rgba(56,199,89,.3)':'rgba(255,107,107,.3)') + '">';
  h += '<div style="font-weight:700;color:' + (ok?'var(--g)':'var(--r)') + ';margin-bottom:8px;font-size:15px">' + (ok?'✓ Richtig!':'✗ Korrekt wäre: Stufe ' + f.ans) + '</div>';
  h += '<div style="font-size:14px;line-height:1.6;color:var(--tx)">' + f.ansE + '</div>';
  h += '</div>';
  document.getElementById('fl_u5_res').innerHTML = h;
};

// ======================================================
// Ü6: 7 FÜHRUNGSKILLER ERKENNEN
// ======================================================
var FL_KILLER = [
  {scen:'<strong>Marco bringt einen kreativen Menüvorschlag.</strong> Der Küchenchef sagt im Meeting: "Lassen wir doch mal das jetzt ausrufen..." — und der Vorschlag ist durchgegangen. Marco hört nichts mehr davon. In der nächsten Sitzung wird der Vorschlag vom Chef als seine Idee präsentiert.',ans:'E1',ansE:'KILL ENTHUSIASM. Ideen werden ignoriert oder gestohlen, Wertschätzung bleibt aus. Das tötet jegliche Motivation, weitere Ideen einzubringen.'},
  {scen:'<strong>Saras neuer GL-Kollege.</strong> Er lehnt es ab, mit MA auf Du zu sein. Kein gemeinsames Mittagessen, keine Teilnahme an Events. Sein Spruch: "Gefühle haben auf der Arbeit nichts verloren. Hier wird gearbeitet, nicht gefühlt."',ans:'E2',ansE:'KILL EMOTION. Herzlichkeit und menschliche Wärme werden verboten. Doch Menschen erreicht man im Herzen, nicht im Kopf.'},
  {scen:'<strong>Monatszahlen.</strong> Die MA erfahren erst über Gerüchte, dass das Hotel einen Verlust macht. Die GL kommuniziert nichts transparent. Der Finanzchef hat eine Tabelle, die er niemandem zeigt — "Herrschaftswissen".',ans:'E3',ansE:'KILL EXPLANATION. Information als Machtfaktor zurückhalten. "Herrschaftswissen" tötet Vertrauen und macht MA handlungsunfähig.'},
  {scen:'<strong>Meeting ohne Ende.</strong> Im Monatsmeeting sagt der Chef: "Ja, wir sollten uns mal darum kümmern, wer könnte das machen?" — Niemand antwortet, das Thema verschwindet ins Protokoll. Nächsten Monat: dasselbe Problem, gleiche Sätze.',ans:'E4',ansE:'KILL ENGAGEMENT. Unverbindlichkeit, keine klaren Entscheidungen, keine Verantwortungsübernahme. MA lernen: "Reden bringt nichts."'},
  {scen:'<strong>Küchen-Lehrling Simon.</strong> Der Chefkoch schreit vor allen Köchen: "Das hätte ja sogar mein Dreijähriger gesehen! Die Nudeln sind zu weich! Bist du zu blöd zum Pasta kochen?"',ans:'E5',ansE:'KILL ENVIRONMENT. Angstkultur, öffentliche Demütigung, Fehler als Schande. Schafft Angst statt Lernen. Killer-Sprüche vermeiden.'},
  {scen:'<strong>Frau Schneider — 22 Dienstjahre.</strong> Sie hat über die Jahre nie ein Wort des Dankes bekommen. Der GM meint: "Nichts gesagt ist Lob genug — wenn ich kritisiere, weiss sie eh dass sie gut ist."',ans:'E6',ansE:'KILL ENTICEMENT. Weder Lob noch Dank. "Nichts gesagt ist Lob genug" — ein verhängnisvoller Irrtum. Persönliche Anerkennung ist unersetzlich.'},
  {scen:'<strong>Saras Vorgänger Bühler.</strong> Er lud seinen Lieblingsmitarbeiter (Chefkoch) regelmässig zum Abendessen ein, bei Weihnachtsgeld gab es zwei Level — "Marco bekommt 50% mehr, er ist schliesslich mein Rechter Arm." Die anderen wurden öffentlich hinter Marco gestellt.',ans:'E7',ansE:'KILL EQUITY. Lieblingsmitarbeitende werden bevorzugt, andere aufs Abstellgleis geschoben. Die Verbleibenden reihen sich in die "innerlich Gekündigten" ein.'},
  {scen:'<strong>Nadias Jahresgespräch.</strong> "Nadia, du hast das Jahr geschafft. Hier ist deine Bonuszahlung. Gleich Anfang nächstes Jahr gibt es neue Ziele — morgen um 8 Uhr im Meetingraum."',ans:'E6',ansE:'KILL ENTICEMENT. Auch die Bonuszahlung wird transaktional reduziert — keine persönliche Anerkennung, kein Dank, kein Erkennen der Leistung als Mensch.'},
  {scen:'<strong>Saras Entscheidungsverhalten.</strong> Bei schwierigen Themen sagt sie stets: "Das muss ich noch mit dem VR klären. Warten wir ab, was der VR entscheidet..." — Obwohl sie die Kompetenz hat, zu entscheiden.',ans:'E4',ansE:'KILL ENGAGEMENT. Entscheidungen werden nicht getroffen, Verantwortung wird nach oben delegiert. MA werden für Versäumnisse geopfert.'},
  {scen:'<strong>Küchen-Brief.</strong> Die neuen Hygienerichtlinien werden nicht erklärt. Die MA finden einen Aushang: "Ab sofort gelten folgende Regeln. Verstösse werden sanktioniert." Kein Warum, kein Briefing, keine Schulung.',ans:'E3',ansE:'KILL EXPLANATION. Vorschriften ohne Erklärung — die MA wissen nicht, warum sie etwas tun sollen. Kommunikation fehlt.'},
  {scen:'<strong>Der neue F&B-Manager.</strong> Er liefert geniale Ideen, bekommt aber nie Feedback, weder positiv noch negativ. Nach 6 Monaten fragt er Sara: "Bin ich auf dem richtigen Weg?" Sara: "Ja, alles okay." Nach einem Jahr kündigt er.',ans:'E1',ansE:'KILL ENTHUSIASM. Kein Feedback, keine Bestätigung, keine Entwicklung. Motivation stirbt langsam durch Ignoranz.'},
  {scen:'<strong>Frau Keller von der Besitzerfamilie.</strong> "Ich habe den GM-Posten bewusst an meinen Neffen vergeben, obwohl Sara besser qualifiziert wäre. Familie geht vor Qualifikation — das ist schon immer so bei uns."',ans:'E7',ansE:'KILL EQUITY. Günstlingswirtschaft, nicht Leistung zählt. Andere werden demotiviert, weil Leistung nicht belohnt wird.'},
  {scen:'<strong>Ein MA macht einen Fehler.</strong> Der Chef: "Wer nichts tut, kann nichts falsch machen. Aber du — du solltest lieber gar nichts mehr machen, dann spart man sich das." Der MA traut sich danach nie mehr eine eigene Entscheidung.',ans:'E5',ansE:'KILL ENVIRONMENT. Fehlerkultur wird zur Angstkultur. MA lernen: "Nichts tun ist sicherer." Blockiert jede Initiative.'},
  {scen:'<strong>Anna — engagierte Rezeptionistin.</strong> Sie bringt zwei kreative Prozess-Verbesserungsvorschläge. Der Chef sagt: "Mach deinen Job, nicht den von anderen." Anna zieht sich zurück, macht nur noch Dienst nach Vorschrift.',ans:'E1',ansE:'KILL ENTHUSIASM. Engagement und Initiative werden bestraft statt belohnt. Die Message: "Halt die Klappe und mach deine Arbeit."'},
  {scen:'<strong>Social-Media-Kommunikation.</strong> Der Chef verbietet dem Team, sich beim Mittagessen zu unterhalten: "Pausenzeit ist zum Essen da, nicht zum Plaudern. Wer reden will, macht das nach Feierabend in seiner Freizeit."',ans:'E2',ansE:'KILL EMOTION. Menschliche Nähe und Gespräche werden unterbunden. Aber ein Lächeln öffnet Herzen — Gemeinschaft am Arbeitsplatz ist Erfolgsfaktor.'},
  {scen:'<strong>Monatsmeeting.</strong> Der Chef eröffnet mit: "Wir haben gerade wieder schlechte Zahlen — das ist deine Schuld, Thomas. Und, Nadia, wieviel Beschwerden hatten wir diesen Monat?" Vor allen, vor jedem Lob.',ans:'E5',ansE:'KILL ENVIRONMENT. Kritik vor Publikum — "face-lose" ist unverzeihlich. Vertrauen wird zerstört, Angstkultur aufgebaut.'},
  {scen:'<strong>Personalversammlung.</strong> "Die Umsätze sind deutlich gesunken, aber ich kann euch nichts Genaues sagen — die GL prüft noch die Strategie. Bleibt ruhig, wartet ab. Keine Nachfragen."',ans:'E3',ansE:'KILL EXPLANATION. Information zurückhalten verursacht Unsicherheit, Gerüchte, Vertrauensverlust. Transparenz ist Pflicht.'},
  {scen:'<strong>Der Chef delegiert eine Aufgabe.</strong> "Mach das — ich komme erst nächsten Monat zurück." Der MA fragt: "Aber wenn etwas schief geht?" Chef: "Dann bist du halt der Depp." — Der MA hat Angst, Fehler zu machen und macht deshalb gar nichts.',ans:'E4',ansE:'KILL ENGAGEMENT (+ E5 teilweise). Keine Rückendeckung, der Chef steht nicht hinter seinem MA. Unverbindlichkeit in der Verantwortung.'}
];
var flCurKillIdx = -1;

window.flGenU6 = function() {
  flCurKillIdx = flPickNew(FL_KILLER, flCurKillIdx);
  var f = FL_KILLER[flCurKillIdx];
  document.getElementById('fl_u6_scen').innerHTML = f.scen;
  var killer = [
    {id:'E1', t:'1 — Kill Enthusiasm', d:'Ideen ignorieren, kein Lob, keine Motivation'},
    {id:'E2', t:'2 — Kill Emotion', d:'Herzlichkeit verboten, kein Miteinander'},
    {id:'E3', t:'3 — Kill Explanation', d:'Herrschaftswissen, wenig Infos'},
    {id:'E4', t:'4 — Kill Engagement', d:'Unverbindlichkeit, keine Entscheidungen'},
    {id:'E5', t:'5 — Kill Environment', d:'Angstkultur, Fehler = Schande'},
    {id:'E6', t:'6 — Kill Enticement', d:'Weder Lob noch Dank'},
    {id:'E7', t:'7 — Kill Equity', d:'Lieblings-MA bevorzugen'}
  ];
  var h = '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:8px">';
  killer.forEach(function(k){
    h += '<label style="display:flex;align-items:flex-start;gap:10px;cursor:pointer;padding:12px 14px;border-radius:10px;border:1.5px solid var(--bd);background:var(--s);font-size:13px;transition:all .2s">';
    h += '<input type="radio" name="fl_u6" value="' + k.id + '" style="accent-color:#e84f38;margin-top:2px">';
    h += '<div><strong>' + k.t + '</strong><br><span style="font-size:12px;color:var(--tx2)">' + k.d + '</span></div>';
    h += '</label>';
  });
  h += '</div>';
  document.getElementById('fl_u6_options').innerHTML = h;
  document.getElementById('fl_u6_res').innerHTML = '';
};

window.flCheckU6 = function() {
  var sel = document.querySelector('input[name="fl_u6"]:checked');
  var f = FL_KILLER[flCurKillIdx];
  if (!sel) { document.getElementById('fl_u6_res').innerHTML = '<div style="padding:12px;border-radius:10px;background:rgba(232,168,56,.1);color:var(--am);font-size:13px">Bitte wähle zuerst einen Killer aus.</div>'; return; }
  var ok = sel.value === f.ans;
  var h = '<div style="padding:16px 20px;border-radius:12px;background:' + (ok?'rgba(56,199,89,.1)':'rgba(255,107,107,.1)') + ';border:1px solid ' + (ok?'rgba(56,199,89,.3)':'rgba(255,107,107,.3)') + '">';
  h += '<div style="font-weight:700;color:' + (ok?'var(--g)':'var(--r)') + ';margin-bottom:8px;font-size:15px">' + (ok?'✓ Richtig!':'✗ Nicht ganz richtig.') + '</div>';
  h += '<div style="font-size:14px;line-height:1.6;color:var(--tx)">' + f.ansE + '</div>';
  h += '</div>';
  document.getElementById('fl_u6_res').innerHTML = h;
};

})();
