// script.js - Levoria simple frontend logic (local storage)

// Save journal entry locally
function saveJournal() {
  const el = document.getElementById('journalText');
  if(!el) return;
  const text = el.value.trim();
  localStorage.setItem('levoria_journal', text);
  showToast('Journal saved locally');
}

// Load journal on page load
function loadJournal() {
  const el = document.getElementById('journalText');
  if(!el) return;
  const saved = localStorage.getItem('levoria_journal') || '';
  el.value = saved;
}

// Mood functions
function setMood(mood) {
  localStorage.setItem('levoria_mood', mood);
  const cur = document.getElementById('currentMood');
  if(cur) cur.innerText = mood;
  showToast(`Mood set: ${mood}`);
}
function loadMood() {
  const cur = document.getElementById('currentMood');
  if(!cur) return;
  const m = localStorage.getItem('levoria_mood') || 'No mood selected yet.';
  cur.innerText = m;
}

// Simple toast (non-blocking)
function showToast(msg) {
  const id = 'levoria_toast';
  let t = document.getElementById(id);
  if(!t){
    t = document.createElement('div');
    t.id = id;
    t.style.position = 'fixed';
    t.style.right = '18px';
    t.style.bottom = '18px';
    t.style.background = 'rgba(20,20,30,0.9)';
    t.style.color = '#fff';
    t.style.padding = '10px 14px';
    t.style.borderRadius = '8px';
    t.style.boxShadow = '0 8px 24px rgba(4,8,12,0.25)';
    t.style.zIndex = 9999;
    t.style.fontSize = '14px';
    document.body.appendChild(t);
  }
  t.innerText = msg;
  t.style.opacity = '1';
  setTimeout(()=>{ t.style.opacity = '0'; }, 2200);
}

// Run on load
window.addEventListener('DOMContentLoaded', () => {
  loadJournal();
  loadMood();
});
