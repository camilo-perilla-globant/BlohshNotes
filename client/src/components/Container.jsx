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

    const { searchTerm, currentCategory, query } = state

    const filteredNotes = notes.filter(note => {
        return note[query].toLowerCase().includes(searchTerm.toLowerCase())
    })
    .filter(note => note.category.includes(currentCategory))
    .map(note => ({...note, date: Date.parse(note.updatedAt)}))
    .sort((a, b) => b.date - a.date)

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
