// ===== BENUTZER-VERWALTUNG =====
// Um einen neuen Benutzer hinzuzufügen:
// 1. Füge eine neue Zeile unten hinzu
// 2. Format: addUser('benutzername', 'passwort', 'Anzeigename', 'Rolle');
// 3. Lade die Datei auf GitHub hoch
// 4. Fertig!
//
// Rollen: 'Master', 'Developer', 'Tester', 'Student'
// Benutzername ist case-insensitive (gross/klein egal)
// Passwörter werden beim Laden automatisch gehasht (nie im Klartext gespeichert im Browser)

(function() {
  window.TIS = window.TIS || {};
  window.TIS.userList = [];
  
  function addUser(username, password, displayName, role) {
    window.TIS.userList.push({
      user: username.toLowerCase(),
      pw: password,
      name: displayName || username,
      role: role || 'Student'
    });
  }

  // ==========================================
  // BENUTZER HIER EINTRAGEN:
  // ==========================================
  
  // Master
  addUser('G_Mattiello', 'Ctrl!2026$Mstr', 'G. Mattiello', 'Master');
  
  // Developer
  addUser('Developer', 'Dev#TiS!2026x', 'Developer', 'Developer');
  
  // Tester
  addUser('Tester1', 'Test!SHL#01', 'Tester 1', 'Tester');
  addUser('Tester2', 'Test!SHL#02', 'Tester 2', 'Tester');
  addUser('Tester3', 'Test!SHL#03', 'Tester 3', 'Tester');
  addUser('Tester4', 'Test!SHL#04', 'Tester 4', 'Tester');
  addUser('Tester5', 'Test!SHL#05', 'Tester 5', 'Tester');
  
  // Studenten (hier neue User einfach hinzufügen)
  // addUser('MaxMuster', 'Passwort123!', 'Max Muster', 'Student');
  // addUser('AnnaB', 'MeinPasswort$', 'Anna Beispiel', 'Student');

})();
