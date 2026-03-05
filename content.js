(function () {

if (document.getElementById("smpp-notes-panel")) return;

const panel = document.createElement("div");
panel.id = "smpp-notes-panel";

panel.innerHTML = `
<div id="smpp-header">
  <span>Notities</span>
  <div class="smpp-actions">
    <button id="smpp-min">–</button>
  </div>
</div>

<div id="smpp-notes"></div>

<div id="smpp-input">
  <input id="note-title" placeholder="Titel">
  <input id="note-subject" placeholder="Vak">
  <textarea id="note-text" placeholder="Schrijf hier..."></textarea>
  <button id="add-note">+ Nieuwe notitie</button>
</div>
`;

document.body.appendChild(panel);

const notesContainer = document.getElementById("smpp-notes");
const titleInput = document.getElementById("note-title");
const subjectInput = document.getElementById("note-subject");
const textInput = document.getElementById("note-text");
const addBtn = document.getElementById("add-note");

loadNotes();

addBtn.onclick = () => {

if (!textInput.value.trim()) return;

const note = {
id: Date.now(),
title: titleInput.value,
subject: subjectInput.value,
text: textInput.value
};

chrome.storage.local.get(["smppNotes"], res => {

let notes = res.smppNotes || [];
notes.push(note);

chrome.storage.local.set({ smppNotes: notes });

createNote(note);

});

titleInput.value = "";
subjectInput.value = "";
textInput.value = "";

};

function createNote(note) {

const div = document.createElement("div");
div.className = "smpp-note";

div.innerHTML = `
<div class="note-delete">✕</div>
<div class="note-title">${note.title}</div>
<div class="note-subject">${note.subject}</div>
<div class="note-text">${note.text}</div>
`;

div.querySelector(".note-delete").onclick = () => {

chrome.storage.local.get(["smppNotes"], res => {

let notes = res.smppNotes || [];
notes = notes.filter(n => n.id !== note.id);

chrome.storage.local.set({ smppNotes: notes });

div.remove();

});

};

notesContainer.prepend(div);

}

function loadNotes() {

chrome.storage.local.get(["smppNotes"], res => {

const notes = res.smppNotes || [];

notes.forEach(n => createNote(n));

});

}

document.getElementById("smpp-min").onclick = () => {

panel.classList.toggle("minimized");

};

})();
