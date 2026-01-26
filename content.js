function init() {
  const topnav = document.querySelector("nav.topnav");
  if (!topnav || document.querySelector(".ss-notes-btn")) return;

  const startBtn = topnav.querySelector(".js-btn-home");
  const shortcuts = topnav.querySelector('[data-shortcuts]');
  if (!startBtn || !shortcuts) return;

  const btnWrap = document.createElement("div");
  btnWrap.className = "topnav__btn-wrapper";

  const btn = document.createElement("button");
  btn.className = "topnav__btn ss-notes-btn";
  btn.textContent = "Notities";

  btnWrap.appendChild(btn);
  startBtn.parentNode.insertBefore(btnWrap, shortcuts);

  createPanel();
  btn.onclick = togglePanel;
}

function createPanel() {
  const panel = document.createElement("div");
  panel.id = "ss-notes-panel";
  panel.innerHTML = `
    <div class="notes-header">
      <span>Notities</span>
      <div>
        <button id="exportBtn">Export</button>
        <button id="examBtn">Examen</button>
        <button id="closeBtn">✕</button>
      </div>
    </div>

    <div class="notes-body">
      <div class="notes-sidebar">
        <button id="newNote">+ Nieuwe notitie</button>
        <ul id="notesList"></ul>
      </div>

      <div class="notes-editor">
        <div class="editor-header">
          <input id="noteTitle" placeholder="Titel">
          <input id="noteSubject" placeholder="Vak">
          <button id="deleteNote">✕</button>
        </div>

        <div class="color-bar">
          <span data-color="#3b82f6"></span>
          <span data-color="#22c55e"></span>
          <span data-color="#f97316"></span>
          <span data-color="#ef4444"></span>
        </div>

        <textarea id="noteContent" placeholder="Schrijf hier..."></textarea>
        <div class="timestamp" id="timestamp"></div>
      </div>
    </div>
  `;
  document.body.appendChild(panel);

  document.getElementById("closeBtn").onclick = togglePanel;
}

function togglePanel() {
  document.getElementById("ss-notes-panel")
    .classList.toggle("open");
}

init();