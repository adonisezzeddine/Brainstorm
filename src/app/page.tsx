// src/app/page.tsx
'use client';

import { useState } from 'react';

// Type for a note
type Note = {
  id: number;
  content: string;
};

export default function Home() {
  // State for managing notes
  const [notes, setNotes] = useState<Note[]>([]);
  const [newNote, setNewNote] = useState<string>('');

  // Add a new note
  const handleAddNote = () => {
    if (newNote.trim()) {
      const newId = notes.length ? notes[notes.length - 1].id + 1 : 1;
      const newNoteObj = { id: newId, content: newNote };
      setNotes((prevNotes) => [...prevNotes, newNoteObj]);
      setNewNote(''); // Clear the input after adding the note
    }
  };

  // Delete a note
  const handleDeleteNote = (id: number) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', color: 'teal' }}>Simple Note-Taking App</h1>

      {/* Input for new note */}
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          placeholder="Write a new note..."
          style={{ width: '100%', padding: '10px', fontSize: '16px' }}
        />
        <button
          onClick={handleAddNote}
          style={{
            backgroundColor: 'teal',
            color: 'white',
            padding: '10px 20px',
            fontSize: '16px',
            marginTop: '10px',
            width: '100%',
          }}
        >
          Add Note
        </button>
      </div>

      {/* Display existing notes */}
      <div>
        <h3>Your Notes:</h3>
        {notes.length === 0 ? (
          <p>No notes yet. Add one above!</p>
        ) : (
          <ul style={{ paddingLeft: '0' }}>
            {notes.map((note) => (
              <li
                key={note.id}
                style={{
                  backgroundColor: '#f4f4f4',
                  padding: '10px',
                  marginBottom: '10px',
                  borderRadius: '5px',
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                <span>{note.content}</span>
                <button
                  onClick={() => handleDeleteNote(note.id)}
                  style={{
                    backgroundColor: 'red',
                    color: 'white',
                    border: 'none',
                    padding: '5px 10px',
                    cursor: 'pointer',
                    borderRadius: '5px',
                  }}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
