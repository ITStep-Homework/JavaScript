class NoteManager {
    constructor() {
        this.notes = JSON.parse(localStorage.getItem('notes')) || [];
        this.render();
    }

    addNote(title, content) {
        const id = Date.now().toString();
        this.notes.push({ id, title, content });
        this.saveNotes();
        this.render();
    }

    editNote(id, newTitle, newContent) {
        const note = this.notes.find(note => note.id === id);
        if (note) {
            note.title = newTitle;
            note.content = newContent;
            this.saveNotes();
            this.render();
        }
    }

    deleteNote(id) {
        this.notes = this.notes.filter(note => note.id !== id);
        this.saveNotes();
        this.render();
    }

    deleteAllNotes() {
        this.notes = [];
        this.saveNotes();
        this.render();
    }

    saveNotes() {
        localStorage.setItem('notes', JSON.stringify(this.notes));
    }

    render(searchTitle = '') {
        const notesContainer = document.getElementById('notesContainer');
        notesContainer.innerHTML = '';
        const filteredNotes = this.notes.filter(note => note.title.includes(searchTitle));
        filteredNotes.forEach(note => {
            const noteElement = document.createElement('div');
            noteElement.classList.add('note');
            noteElement.innerHTML = `
                <h2>${note.title}</h2>
                <p>${note.content}</p>
                <div class="btnsContainer">
                    <button onclick="noteManager.editNotePrompt('${note.id}')">Редактировать</button>
                    <button onclick="noteManager.deleteNotePrompt('${note.id}')">Удалить</button>
                </div>
            `;
            notesContainer.appendChild(noteElement);
        });
    }

    editNotePrompt(id) {
        const newTitle = prompt('Введите новый заголовок:');
        const newContent = prompt('Введите новое содержимое:');
        if (newTitle && newContent) {
            this.editNote(id, newTitle, newContent);
        }
    }

    deleteNotePrompt(id) {
        if (confirm('Вы уверены, что хотите удалить эту заметку?')) {
            this.deleteNote(id);
        }
    }
}

const noteManager = new NoteManager();

document.getElementById('addBtn').addEventListener('click', () => {
    const title = document.getElementById('noteTitle').value;
    const content = document.getElementById('noteContent').value;
    if (title && content) {
        noteManager.addNote(title, content);
        document.getElementById('noteTitle').value = '';
        document.getElementById('noteContent').value = '';
    }
});

document.getElementById('deleteAllBtn').addEventListener('click', () => {
    if (confirm('Вы уверены, что хотите удалить все заметки?')) {
        noteManager.deleteAllNotes();
    }
});

document.getElementById('searchTitle').addEventListener('input', (event) => {
    noteManager.render(event.target.value);
});