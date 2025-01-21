import React from 'react'
import '../style/AddNote.css'

function AddNote({ saveNote, title,description,setTitle,setDescription }) {

  return (
    <div className='container'>
      <input
        type='text'
        name='title'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder='Note Title'
      /><br />
      <input
        type='text'
        name='description'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder='Note Description'
      />
      {/* <div className='btn'> */}
      <button onClick={()=>saveNote()}>
        Save Note
      </button>
      {/* </div> */}
    </div>
  )
  
}

export default AddNote
