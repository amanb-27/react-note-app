import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import './App.css'
import AddNote from './components/AddNote'
import NoteItem from './components/NoteItem'

function App() {

  const [notes, setNotes] = useState([])
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    const noteString = localStorage.getItem("notes");
    if (noteString) {
      const notesList = JSON.parse(noteString);
      setNotes(notesList);
    }

  }, [])


  const saveInLocalStorage = (updatedNotes) => {
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
  };

  const saveNote = () => {
    if (!title || !description) {
      return alert("Note should not be empty.")
    }
    let note = { id: uuidv4(), title, description, dateTime: Date.now() }
    let newNotes = [...notes, note]
    setNotes(newNotes)
    saveInLocalStorage(newNotes); 
    setDescription("")
    setTitle("")
  }

  const editNote = (note) => {
    setTitle(note.title)
    setDescription(note.description)
    deleteNote(note.id)
  }

  const deleteNote = (id) => {
    let newNotes = notes.filter(note => note.id !== id)
    setNotes(newNotes)
    saveInLocalStorage(newNotes);
  }

  return (
    <>
      <h1>Welcome to my note app</h1>
      <AddNote saveNote={saveNote} title={title} setTitle={setTitle} description={description} setDescription={setDescription} />
      <div className='note-list-container'>
        <h2>Your Notes</h2>
        {notes && notes.map((item, index) => <NoteItem key={index} note={item} editNote={editNote} deleteNote={deleteNote} />)}

        {/* <NoteItem note={
          {
            title: "This is note title", description: "This is note description", dateTime: Date.now()
          }
        } /> */}
      </div>
    </>
  )
}

export default App
