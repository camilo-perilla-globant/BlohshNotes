import React, {useEffect, useState} from 'react'
import Note from './Note'
import { useAppState } from './AppContext'

const NoteContainer = () => {
    const [state, dispatch] = useAppState()
    const [notes, setNotes] = useState([])
    
    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:3000/api/v1/notes')
            .then(res => res.json()).then(data => {
                setNotes(data.info)
                dispatch({
                    type: 'set-notes',
                    payload: data.info
                })
                dispatch({
                    type: 'set-categories',
                    payload: data.info
                })
            })
            .catch(console.log)
        }, 250)

    }, [])

    const { searchField, currentCategory, field } = state

    const filteredNotes = notes.filter(note => {
        return note[field].toLowerCase().includes(searchField.toLowerCase())
    })
    .filter(note => note.category.includes(currentCategory))

    return (
        <div className='grid-container'>
            {filteredNotes.map(note => {
                return(
                    <Note {...note} key={note._id}/>
                )
            })}
        </div>
    )
}

export default NoteContainer
