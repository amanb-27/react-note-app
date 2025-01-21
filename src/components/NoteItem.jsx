import React from 'react'
import "../style/NoteItem.css"

function NoteItem({ note, editNote, deleteNote }) {

  const dateTime = new Date(note.dateTime)
  const noteDateTime = `${dateTime.getDate()}/${dateTime.getMonth() + 1}/${dateTime.getFullYear()} - ${dateTime.getHours()}:${dateTime.getMinutes()}`
  return (
    <div className='note-item-container' >
      <p className='note-title'>{note.title}</p>
      <p className='note-desciption'>{note.description}</p>
      <p className='date-time'>{noteDateTime}<span className='edit' onClick={() => editNote(note)}>Edit</span><span className='delete' onClick={() => deleteNote(note.id)}>Delete</span></p>
    </div>
  )
}

export default NoteItem
