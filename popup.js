document.addEventListener("DOMContentLoaded", function () {
  const titleInput = document.getElementById("title");
  const subjectInput = document.getElementById("subject");
  const contentInput = document.getElementById("content");
  const addButton = document.getElementById("addNote");
  const notesContainer = document.getElementById("notes");

  loadNotes();

  addButton.addEventListener("click", function () {
    const title = titleInput.value.trim();
    const subject = subjectInput.value.trim();
    const content = contentInput.value.trim();

    if (title === "" || content === "") return;

    const note = {
      id: Date.now(),
      title,
      subject,
      content
    };

    chrome.storage.local.get(["notes"], function (result) {
      const notes = result.notes || [];
      notes.push(note);
      chrome.storage.local.set({ notes: notes }, function () {
        displayNote(note);
      });
    });

    titleInput.value = "";
    subjectInput.value = "";
    contentInput.value = "";
  });

  function loadNotes() {
    chrome.storage.local.get(["notes"], function (result) {
      const notes = result.notes || [];
      notes.forEach(displayNote);
    });
  }

  function displayNote(note) {
    const noteDiv = document.createElement("div");
    noteDiv.className = "note";

    noteDiv.innerHTML = `
      <div class="delete" data-id="${note.id}">✖</div>
      <div class="note-title">${note.title}</div>
      <div class="note-subject">${note.subject}</div>
      <div class="note-content">${note.content}</div>
    `;

    notesContainer.prepend(noteDiv);

    noteDiv.querySelector(".delete").addEventListener("click", function () {
      deleteNote(note.id, noteDiv);
    });
  }

  function deleteNote(id, element) {
    chrome.storage.local.get(["notes"], function (result) {
      let notes = result.notes || [];
      notes = notes.filter(note => note.id !== id);
      chrome.storage.local.set({ notes: notes }, function () {
        element.remove();
      });
    });
  }
});
