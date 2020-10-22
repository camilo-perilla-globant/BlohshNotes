import React, {useEffect, useState} from 'react'
import Note from './Note'

const NoteContainer = () => {
    const [notes, setNotes] = useState([])
    useEffect(() => {
        fetch('http://localhost:3000/api/v1/notes')
        .then(res => res.json()).then(data => {
            setNotes(data.data)
        })
        .catch(console.log)
    }, [])

    return (
        <div className='grid-container'>
            {notes.map(note => {
                return(
                    <Note {...note} key={note._id}/>
                )
            })}
        </div>
    )
}

export default NoteContainer
