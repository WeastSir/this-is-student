// ===== LERNKARTEN-SYNC v2 — Supabase Custom Flashcards =====
// Separates Modul für This Is Student
// - Eigene Lernkarten erstellen (Modal), bearbeiten, löschen
// - Supabase Sync (geräteübergreifend)
// - "Alle Karten anzeigen" mit Suchfunktion
// - Nutzerabhängig (tis_user)
// ============================================================

(function () {
  'use strict';

  // --- CONFIG ---
  const SUPABASE_URL = 'https://wgfuxttruwsvfhxsgybz.supabase.co';
  const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndnZnV4dHRydXdzdmZoeHNneWJ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUxMzEzNzgsImV4cCI6MjA5MDcwNzM3OH0.Cf4sNB3arHbCar7nujsQs1-770Jz0QC_dWi4R8E1d5A';
  const TABLE = 'custom_flashcards';

  // --- SUPABASE REST HELPERS ---
  function sbHeaders() {
    return {
      'apikey': SUPABASE_KEY,
      'Authorization': 'Bearer ' + SUPABASE_KEY,
      'Content-Type': 'application/json',
      'Prefer': 'return=representation'
    };
  }

  async function sbSelect(params) {
    const url = SUPABASE_URL + '/rest/v1/' + TABLE + '?select=*&' + params;
    const res = await fetch(url, { headers: sbHeaders() });
    if (!res.ok) throw new Error('Supabase GET ' + res.status);
    return res.json();
  }

  async function sbInsert(row) {
    const url = SUPABASE_URL + '/rest/v1/' + TABLE;
    const res = await fetch(url, {
      method: 'POST',
      headers: sbHeaders(),
      body: JSON.stringify(row)
    });
    if (!res.ok) {
      const err = await res.text();
      throw new Error('Supabase INSERT ' + res.status + ': ' + err);
    }
    return res.json();
  }

  async function sbDelete(id) {
    const url = SUPABASE_URL + '/rest/v1/' + TABLE + '?id=eq.' + id;
    const res = await fetch(url, {
      method: 'DELETE',
      headers: sbHeaders()
    });
    if (!res.ok) throw new Error('Supabase DELETE ' + res.status);
  }

  async function sbUpdate(id, fields) {
    const url = SUPABASE_URL + '/rest/v1/' + TABLE + '?id=eq.' + id;
    const res = await fetch(url, {
      method: 'PATCH',
      headers: { ...sbHeaders(), 'Prefer': 'return=representation' },
      body: JSON.stringify(fields)
    });
    if (!res.ok) throw new Error('Supabase PATCH ' + res.status);
    return res.json();
  }

  // --- STATE ---
  var customCards = {}; // courseId -> [ {id, question, answer, topic, ...} ]
  var currentUser = null;

  function getUser() {
    return localStorage.getItem('tis_user') || null;
  }

  // --- LOAD ---
  async function loadCustomCards(courseId) {
    currentUser = getUser();
    if (!currentUser) { customCards[courseId] = []; return; }
    try {
      var rows = await sbSelect(
        'user_id=eq.' + encodeURIComponent(currentUser) +
        '&course_id=eq.' + encodeURIComponent(courseId) +
        '&order=created_at.asc'
      );
      customCards[courseId] = rows;
    } catch (e) {
      console.warn('[LernkartenSync] Laden fehlgeschlagen:', e);
      customCards[courseId] = [];
    }
  }

  async function loadAllCustomCards() {
    currentUser = getUser();
    if (!currentUser) return;
    try {
      var rows = await sbSelect('user_id=eq.' + encodeURIComponent(currentUser) + '&order=created_at.asc');
      customCards = {};
      rows.forEach(function (r) {
        if (!customCards[r.course_id]) customCards[r.course_id] = [];
        customCards[r.course_id].push(r);
      });
    } catch (e) {
      console.warn('[LernkartenSync] Laden fehlgeschlagen:', e);
    }
  }

  // --- MERGE CUSTOM CARDS INTO COURSE ---
  var originalCards = {};

  function mergeCards(courseId) {
    var c = window.TIS && window.TIS.courses && window.TIS.courses[courseId];
    if (!c) return;
    if (!originalCards[courseId]) {
      originalCards[courseId] = c.flashcards ? c.flashcards.slice() : [];
    }
    var orig = originalCards[courseId];
    var custom = customCards[courseId] || [];
    var existing = new Set(orig.map(function (card) { return card[0].trim().toLowerCase(); }));
    var merged = orig.slice();
    custom.forEach(function (card) {
      var q = card.question.trim().toLowerCase();
      if (!existing.has(q)) {
        merged.push([card.question, card.answer]);
        existing.add(q);
      }
    });
    c.flashcards = merged;
  }

  // --- ADD ---
  async function addCard(courseId, question, answer, topic) {
    currentUser = getUser();
    if (!currentUser) { alert('Bitte zuerst einloggen.'); return false; }
    if (!question.trim() || !answer.trim()) { alert('Frage und Antwort dürfen nicht leer sein.'); return false; }
    var c = window.TIS.courses[courseId];
    if (c && c.flashcards) {
      var qLow = question.trim().toLowerCase();
      if (c.flashcards.some(function (card) { return card[0].trim().toLowerCase() === qLow; })) {
        alert('Eine Karte mit dieser Frage existiert bereits.');
        return false;
      }
    }
    try {
      var rows = await sbInsert({
        user_id: currentUser,
        course_id: courseId,
        question: question.trim(),
        answer: answer.trim(),
        topic: topic ? topic.trim() : null
      });
      if (!customCards[courseId]) customCards[courseId] = [];
      customCards[courseId].push(rows[0]);
      mergeCards(courseId);
      return true;
    } catch (e) {
      console.error('[LernkartenSync] Speichern fehlgeschlagen:', e);
      alert('Fehler beim Speichern. Bitte versuche es erneut.');
      return false;
    }
  }

  // --- DELETE ---
  async function deleteCard(courseId, cardId) {
    try {
      await sbDelete(cardId);
      customCards[courseId] = (customCards[courseId] || []).filter(function (c) { return c.id !== cardId; });
      mergeCards(courseId);
      return true;
    } catch (e) {
      console.error('[LernkartenSync] Löschen fehlgeschlagen:', e);
      alert('Fehler beim Löschen.');
      return false;
    }
  }

  // --- EDIT ---
  async function editCard(courseId, cardId, question, answer, topic) {
    if (!question.trim() || !answer.trim()) { alert('Frage und Antwort dürfen nicht leer sein.'); return false; }
    try {
      var updated = await sbUpdate(cardId, {
        question: question.trim(),
        answer: answer.trim(),
        topic: topic ? topic.trim() : null
      });
      var list = customCards[courseId] || [];
      var idx = list.findIndex(function (c) { return c.id === cardId; });
      if (idx !== -1) list[idx] = updated[0];
      mergeCards(courseId);
      return true;
    } catch (e) {
      console.error('[LernkartenSync] Bearbeiten fehlgeschlagen:', e);
      alert('Fehler beim Bearbeiten.');
      return false;
    }
  }

  // --- CARD PAGE MAP ---
  var CARD_PAGE_MAP = {
    'recht2': { pageId: 'kart', prefix: 'fc' },
    'arb': { pageId: 'arb_kart', prefix: 'afc' },
    'ctrl': { pageId: 'ctrl_kart', prefix: 'cfc' }
  };

  function getCardPageInfo(courseId) {
    return CARD_PAGE_MAP[courseId] || { pageId: courseId + '_kart', prefix: courseId + 'fc' };
  }

  function escHtml(str) {
    var d = document.createElement('div');
    d.textContent = str;
    return d.innerHTML;
  }

  // ==========================================
  // UI: "ALLE KARTEN ANZEIGEN" BUTTON + LIST
  // ==========================================
  function buildAllCardsButton(courseId) {
    var pageInfo = getCardPageInfo(courseId);
    var sec = document.getElementById(pageInfo.pageId);
    if (!sec) return;
    var btnId = 'tis-allcards-btn-' + courseId;
    if (document.getElementById(btnId)) return;

    // Find the pool element and insert after it
    var poolEl = document.getElementById(pageInfo.prefix + 'Pool');
    var anchor = poolEl || sec.querySelector('.fb');
    if (!anchor) return;

    var wrapper = document.createElement('div');
    wrapper.style.cssText = 'text-align:center;margin-top:8px';
    wrapper.innerHTML = '<button id="' + btnId + '" onclick="window._TIS_LC.toggleAllCards(\'' + courseId + '\')" style="font-size:12px;padding:6px 14px">Alle Karten anzeigen</button>';
    anchor.parentNode.insertBefore(wrapper, anchor.nextSibling);

    // Create the list container
    var listDiv = document.createElement('div');
    listDiv.id = 'tis-allcards-list-' + courseId;
    listDiv.style.cssText = 'display:none;margin-top:16px';
    wrapper.parentNode.insertBefore(listDiv, wrapper.nextSibling);
  }

  function toggleAllCards(courseId) {
    var listEl = document.getElementById('tis-allcards-list-' + courseId);
    var btnEl = document.getElementById('tis-allcards-btn-' + courseId);
    if (!listEl) return;

    if (listEl.style.display === 'none') {
      renderAllCardsList(courseId);
      listEl.style.display = 'block';
      if (btnEl) btnEl.textContent = 'Alle Karten ausblenden';
    } else {
      listEl.style.display = 'none';
      if (btnEl) btnEl.textContent = 'Alle Karten anzeigen';
    }
  }

  function renderAllCardsList(courseId) {
    var listEl = document.getElementById('tis-allcards-list-' + courseId);
    if (!listEl) return;

    var c = window.TIS && window.TIS.courses && window.TIS.courses[courseId];
    if (!c || !c.flashcards || !c.flashcards.length) {
      listEl.innerHTML = '<div style="text-align:center;padding:20px;color:var(--tx3)">Keine Karten vorhanden.</div>';
      return;
    }

    var cards = c.flashcards;
    var customSet = new Set();
    (customCards[courseId] || []).forEach(function (cc) {
      customSet.add(cc.question.trim().toLowerCase());
    });

    // Build custom card ID lookup for delete/edit
    var customLookup = {};
    (customCards[courseId] || []).forEach(function (cc) {
      customLookup[cc.question.trim().toLowerCase()] = cc.id;
    });

    var h = '';
    // Search field
    h += '<div style="margin-bottom:14px">';
    h += '<input type="text" id="tis-allcards-search-' + courseId + '" oninput="window._TIS_LC.filterAllCards(\'' + courseId + '\')" placeholder="Karten durchsuchen…" style="width:100%;padding:10px 16px;border:1.5px solid var(--bd);border-radius:12px;font-family:var(--f);font-size:13px;background:var(--s2);color:var(--tx);outline:none;box-sizing:border-box">';
    h += '</div>';

    h += '<div id="tis-allcards-items-' + courseId + '">';
    cards.forEach(function (card, i) {
      var isCustom = customSet.has(card[0].trim().toLowerCase());
      var cardDbId = customLookup[card[0].trim().toLowerCase()] || '';
      h += '<div class="tis-allcard-item" data-q="' + escHtml(card[0].toLowerCase()) + '" data-a="' + escHtml(card[1].toLowerCase()) + '" style="padding:14px 18px;margin-bottom:6px;background:var(--s);border:1px solid var(--bd);border-radius:var(--rd);display:flex;justify-content:space-between;align-items:flex-start;gap:12px">';
      h += '<div style="flex:1;min-width:0">';
      h += '<div style="display:flex;align-items:center;gap:8px;margin-bottom:3px">';
      h += '<span style="font-size:10px;color:var(--tx3);font-weight:600">' + (i + 1) + '</span>';
      if (isCustom) h += '<span style="font-size:9px;padding:2px 8px;border-radius:6px;background:var(--al);color:var(--ac);font-weight:700;letter-spacing:.3px">EIGENE</span>';
      h += '</div>';
      h += '<div style="font-weight:600;font-size:13.5px;color:var(--tx);margin-bottom:2px">' + escHtml(card[0]) + '</div>';
      h += '<div style="font-size:12.5px;color:var(--tx2);line-height:1.5">' + escHtml(card[1]) + '</div>';
      h += '</div>';
      if (isCustom && cardDbId) {
        h += '<div style="display:flex;gap:4px;flex-shrink:0">';
        h += '<button onclick="window._TIS_LC.openEdit(\'' + courseId + '\',\'' + cardDbId + '\')" style="padding:5px 10px;font-size:10px;border-radius:8px" title="Bearbeiten">✏️</button>';
        h += '<button onclick="window._TIS_LC.confirmDelete(\'' + courseId + '\',\'' + cardDbId + '\')" style="padding:5px 10px;font-size:10px;border-radius:8px;color:var(--r)" title="Löschen">🗑️</button>';
        h += '</div>';
      }
      h += '</div>';
    });
    h += '</div>';

    h += '<div style="text-align:center;padding:10px;font-size:11px;color:var(--tx3)">' + cards.length + ' Karten total</div>';
    listEl.innerHTML = h;
  }

  function filterAllCards(courseId) {
    var input = document.getElementById('tis-allcards-search-' + courseId);
    if (!input) return;
    var term = input.value.trim().toLowerCase();
    var items = document.querySelectorAll('#tis-allcards-items-' + courseId + ' .tis-allcard-item');
    items.forEach(function (el) {
      var q = el.getAttribute('data-q') || '';
      var a = el.getAttribute('data-a') || '';
      el.style.display = (!term || q.indexOf(term) !== -1 || a.indexOf(term) !== -1) ? 'flex' : 'none';
    });
  }

  // ==========================================
  // UI: "EIGENE KARTEN" SECTION
  // ==========================================
  function buildCustomUI(courseId) {
    var containerId = 'tis-custom-cards-' + courseId;
    if (document.getElementById(containerId)) return;

    var pageInfo = getCardPageInfo(courseId);
    var sec = document.getElementById(pageInfo.pageId);
    if (!sec) return;

    var courseName = (window.TIS.courses[courseId] && window.TIS.courses[courseId].config)
      ? window.TIS.courses[courseId].config.name : courseId;

    var html = '<div id="' + containerId + '" style="margin-top:36px;padding-top:28px;border-top:2px solid var(--bd)">' +
      '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:18px;flex-wrap:wrap;gap:10px">' +
      '<div>' +
      '<h2 style="margin:0 0 4px;font-size:22px">Eigene Karten</h2>' +
      '<p style="font-size:13px;color:var(--tx2);margin:0">Erstelle deine eigenen Lernkarten für ' + escHtml(courseName) + '</p>' +
      '</div>' +
      '<button class="bp1" onclick="window._TIS_LC.openForm(\'' + courseId + '\')" style="font-size:13px;padding:10px 20px">+ Neue Karte</button>' +
      '</div>' +
      '<div id="' + containerId + '-list" style="margin-bottom:16px"></div>' +
      '<div id="' + containerId + '-empty" style="display:none;text-align:center;padding:28px;color:var(--tx3);font-size:14px;background:var(--s2);border-radius:var(--rd);border:1px dashed var(--bd)">' +
      'Noch keine eigenen Karten erstellt.<br><span style="font-size:12px">Klicke auf «+ Neue Karte» um loszulegen.</span>' +
      '</div></div>';
    sec.insertAdjacentHTML('beforeend', html);
  }

  function renderCustomList(courseId) {
    var containerId = 'tis-custom-cards-' + courseId;
    var listEl = document.getElementById(containerId + '-list');
    var emptyEl = document.getElementById(containerId + '-empty');
    if (!listEl) return;

    var cards = customCards[courseId] || [];
    if (cards.length === 0) {
      listEl.innerHTML = '';
      if (emptyEl) emptyEl.style.display = 'block';
      return;
    }
    if (emptyEl) emptyEl.style.display = 'none';

    var grouped = {};
    cards.forEach(function (c) {
      var t = c.topic || 'Ohne Thema';
      if (!grouped[t]) grouped[t] = [];
      grouped[t].push(c);
    });

    var h = '';
    for (var topic in grouped) {
      if (Object.keys(grouped).length > 1 || topic !== 'Ohne Thema') {
        h += '<div style="font-size:11px;font-weight:600;letter-spacing:1px;text-transform:uppercase;color:var(--tx3);margin:18px 0 8px;padding-left:4px">' + escHtml(topic) + '</div>';
      }
      grouped[topic].forEach(function (card) {
        h += '<div class="c" style="padding:16px 20px;margin-bottom:8px">' +
          '<div style="display:flex;justify-content:space-between;align-items:flex-start;gap:12px">' +
          '<div style="flex:1;min-width:0">' +
          '<div style="font-weight:600;font-size:14px;margin-bottom:4px;color:var(--tx)">' + escHtml(card.question) + '</div>' +
          '<div style="font-size:13px;color:var(--tx2);line-height:1.6">' + escHtml(card.answer) + '</div>' +
          '</div>' +
          '<div style="display:flex;gap:6px;flex-shrink:0">' +
          '<button onclick="window._TIS_LC.openEdit(\'' + courseId + '\',\'' + card.id + '\')" style="padding:6px 12px;font-size:11px;border-radius:8px" title="Bearbeiten">✏️</button>' +
          '<button onclick="window._TIS_LC.confirmDelete(\'' + courseId + '\',\'' + card.id + '\')" style="padding:6px 12px;font-size:11px;border-radius:8px;color:var(--r)" title="Löschen">🗑️</button>' +
          '</div></div></div>';
      });
    }
    listEl.innerHTML = h;
  }

  // ==========================================
  // MODAL FORM
  // ==========================================
  var modalEl = null;

  function ensureModal() {
    if (modalEl) return;
    var div = document.createElement('div');
    div.id = 'tis-lc-modal';
    div.style.display = 'none';
    div.innerHTML =
      '<div style="position:fixed;inset:0;z-index:10001;background:rgba(0,0,0,.55);-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px);padding:20px;overflow-y:auto;display:flex;align-items:center;justify-content:center" onclick="if(event.target===this)window._TIS_LC.closeForm()">' +
      '<div style="max-width:520px;width:100%;background:var(--s);border-radius:var(--rd2);border:1px solid var(--bd);padding:36px;box-shadow:var(--shadow-lg);position:relative;backdrop-filter:blur(20px)">' +
      '<button onclick="window._TIS_LC.closeForm()" style="position:absolute;top:16px;right:18px;font-size:22px;cursor:pointer;color:var(--tx3);border:none;background:var(--s2);font-family:var(--f);width:36px;height:36px;border-radius:50%;display:flex;align-items:center;justify-content:center;transition:all .2s">&times;</button>' +
      '<div id="tis-lc-modal-title" style="font-family:var(--se);font-size:22px;margin-bottom:20px;letter-spacing:-.3px">Neue Lernkarte</div>' +
      '<div style="margin-bottom:14px">' +
      '<label style="display:block;font-size:11px;font-weight:600;letter-spacing:1px;text-transform:uppercase;color:var(--tx3);margin-bottom:6px">Frage *</label>' +
      '<textarea id="tis-lc-q" rows="3" style="width:100%;padding:12px 16px;border:1.5px solid var(--bd);border-radius:12px;font-family:var(--f);font-size:14px;background:var(--s2);color:var(--tx);resize:vertical;outline:none;transition:border .3s;box-sizing:border-box" placeholder="z.B. Was ist der Deckungsbeitrag?"></textarea>' +
      '</div>' +
      '<div style="margin-bottom:14px">' +
      '<label style="display:block;font-size:11px;font-weight:600;letter-spacing:1px;text-transform:uppercase;color:var(--tx3);margin-bottom:6px">Antwort *</label>' +
      '<textarea id="tis-lc-a" rows="4" style="width:100%;padding:12px 16px;border:1.5px solid var(--bd);border-radius:12px;font-family:var(--f);font-size:14px;background:var(--s2);color:var(--tx);resize:vertical;outline:none;transition:border .3s;box-sizing:border-box" placeholder="Umsatz minus variable Kosten..."></textarea>' +
      '</div>' +
      '<div style="margin-bottom:20px">' +
      '<label style="display:block;font-size:11px;font-weight:600;letter-spacing:1px;text-transform:uppercase;color:var(--tx3);margin-bottom:6px">Thema <span style="font-weight:400;text-transform:none">(optional)</span></label>' +
      '<input id="tis-lc-t" type="text" style="width:100%;padding:12px 16px;border:1.5px solid var(--bd);border-radius:12px;font-family:var(--f);font-size:14px;background:var(--s2);color:var(--tx);outline:none;transition:border .3s;box-sizing:border-box" placeholder="z.B. Kostenrechnung">' +
      '</div>' +
      '<input type="hidden" id="tis-lc-course">' +
      '<input type="hidden" id="tis-lc-editid">' +
      '<div style="display:flex;gap:10px;justify-content:flex-end">' +
      '<button onclick="window._TIS_LC.closeForm()" style="font-size:13px;padding:10px 20px">Abbrechen</button>' +
      '<button class="bp1" id="tis-lc-save" onclick="window._TIS_LC.saveForm()" style="font-size:13px;padding:10px 24px">Speichern</button>' +
      '</div></div></div>';
    document.body.appendChild(div);
    modalEl = div;

    ['tis-lc-q', 'tis-lc-a', 'tis-lc-t'].forEach(function (id) {
      var el = document.getElementById(id);
      if (el) {
        el.addEventListener('focus', function () { this.style.borderColor = 'rgba(232,86,122,.5)'; });
        el.addEventListener('blur', function () { this.style.borderColor = 'var(--bd)'; });
      }
    });
  }

  function openForm(courseId) {
    if (!getUser()) { alert('Bitte zuerst einloggen.'); return; }
    ensureModal();
    document.getElementById('tis-lc-modal-title').textContent = 'Neue Lernkarte';
    document.getElementById('tis-lc-q').value = '';
    document.getElementById('tis-lc-a').value = '';
    document.getElementById('tis-lc-t').value = '';
    document.getElementById('tis-lc-course').value = courseId;
    document.getElementById('tis-lc-editid').value = '';
    document.getElementById('tis-lc-save').textContent = 'Speichern';
    modalEl.style.display = 'block';
    document.body.style.overflow = 'hidden';
    setTimeout(function () { document.getElementById('tis-lc-q').focus(); }, 100);
  }

  function openEdit(courseId, cardId) {
    var card = (customCards[courseId] || []).find(function (c) { return c.id === cardId; });
    if (!card) return;
    ensureModal();
    document.getElementById('tis-lc-modal-title').textContent = 'Karte bearbeiten';
    document.getElementById('tis-lc-q').value = card.question;
    document.getElementById('tis-lc-a').value = card.answer;
    document.getElementById('tis-lc-t').value = card.topic || '';
    document.getElementById('tis-lc-course').value = courseId;
    document.getElementById('tis-lc-editid').value = cardId;
    document.getElementById('tis-lc-save').textContent = 'Aktualisieren';
    modalEl.style.display = 'block';
    document.body.style.overflow = 'hidden';
    setTimeout(function () { document.getElementById('tis-lc-q').focus(); }, 100);
  }

  function closeForm() {
    if (modalEl) modalEl.style.display = 'none';
    document.body.style.overflow = '';
  }

  async function saveForm() {
    var courseId = document.getElementById('tis-lc-course').value;
    var editId = document.getElementById('tis-lc-editid').value;
    var q = document.getElementById('tis-lc-q').value;
    var a = document.getElementById('tis-lc-a').value;
    var t = document.getElementById('tis-lc-t').value;

    var btn = document.getElementById('tis-lc-save');
    btn.disabled = true;
    btn.textContent = 'Speichern…';

    var ok;
    if (editId) {
      ok = await editCard(courseId, editId, q, a, t);
    } else {
      ok = await addCard(courseId, q, a, t);
    }

    btn.disabled = false;
    btn.textContent = editId ? 'Aktualisieren' : 'Speichern';

    if (ok) {
      closeForm();
      refreshUI(courseId);
    }
  }

  async function confirmDelete(courseId, cardId) {
    if (!confirm('Möchtest du diese Karte wirklich löschen?')) return;
    var ok = await deleteCard(courseId, cardId);
    if (ok) {
      refreshUI(courseId);
    }
  }

  // --- REFRESH ALL UI AFTER CHANGE ---
  function refreshUI(courseId) {
    renderCustomList(courseId);
    updateCardCount(courseId);
    // Re-render "Alle Karten" list if it's open
    var listEl = document.getElementById('tis-allcards-list-' + courseId);
    if (listEl && listEl.style.display !== 'none') {
      renderAllCardsList(courseId);
    }
    // Re-init flashcards so changes appear immediately
    if (typeof initFlashcards === 'function') initFlashcards(courseId);
  }

  // --- UPDATE CARD COUNTS ---
  function updateCardCount(courseId) {
    var c = window.TIS.courses[courseId];
    if (!c || !c.flashcards) return;
    var count = c.flashcards.length;
    var pageInfo = getCardPageInfo(courseId);
    var countEl = document.getElementById(pageInfo.prefix + 'Count');
    if (countEl) countEl.textContent = count;
    var poolEl = document.getElementById(pageInfo.prefix + 'Pool');
    if (poolEl) poolEl.textContent = count + ' Karten im Stapel';
    var capId = courseId.charAt(0).toUpperCase() + courseId.slice(1);
    var ltCards = document.getElementById('lt' + capId + 'Cards');
    if (ltCards) ltCards.textContent = count;
    var ltQuiz = document.getElementById('lt' + capId + 'Quiz');
    if (ltQuiz) ltQuiz.textContent = count;
  }

  // --- INIT CUSTOM SECTION FOR A COURSE ---
  async function initCustomSection(courseId) {
    if (!getUser()) return;
    if (!customCards[courseId]) {
      await loadCustomCards(courseId);
    }
    mergeCards(courseId);
    buildAllCardsButton(courseId);
    buildCustomUI(courseId);
    renderCustomList(courseId);
    updateCardCount(courseId);
  }

  // ESC to close modal
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modalEl && modalEl.style.display === 'block') {
      closeForm();
    }
  });

  // --- PATCH go() ---
  window.addEventListener('load', function () {
    if (typeof window.go === 'function') {
      var originalGo = window.go;
      window.go = function (id) {
        originalGo(id);
        for (var courseId in CARD_PAGE_MAP) {
          if (CARD_PAGE_MAP[courseId].pageId === id) {
            initCustomSection(courseId);
            return;
          }
        }
        if (id === 'kart') { initCustomSection('recht2'); return; }
        if (id.endsWith('_kart') && window.TIS && window.TIS.courses) {
          var cid = id.replace('_kart', '');
          if (window.TIS.courses[cid]) {
            if (!CARD_PAGE_MAP[cid]) CARD_PAGE_MAP[cid] = { pageId: id, prefix: cid + 'fc' };
            initCustomSection(cid);
          }
        }
      };
    }

    // Pre-load all custom cards
    if (getUser()) {
      loadAllCustomCards().then(function () {
        if (window.TIS && window.TIS.courses) {
          for (var cid in window.TIS.courses) {
            mergeCards(cid);
          }
        }
      });
    }
  });

  // --- PUBLIC API ---
  window._TIS_LC = {
    openForm: openForm,
    openEdit: openEdit,
    closeForm: closeForm,
    saveForm: saveForm,
    confirmDelete: confirmDelete,
    toggleAllCards: toggleAllCards,
    filterAllCards: filterAllCards,
    loadCustomCards: loadCustomCards,
    getCustomCards: function (courseId) { return customCards[courseId] || []; }
  };

})();
