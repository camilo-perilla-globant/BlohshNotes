import React, {useEffect, useState} from 'react'
import Note from './Note'
import { useAppState } from './AppContext'
import { useHistory } from 'react-router-dom'

const NoteContainer = () => {
    const [state, dispatch] = useAppState()
    const [notes, setNotes] = useState([])
    const history = useHistory()
    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:3000/api/v1/notes/' + state.user.id, {
                headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}`}
            })
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
            .catch(err => {
                console.log(err)
                console.log('Token is no longer valid')
                dispatch({
                    type: 'set-user',
                    payload: undefined
                })
                localStorage.clear()
                history.push('/login')
            })
        }, 250)

    }, [])

    const { searchTerm, currentCategory, query } = state

    const filteredNotes = state.notes.filter(note => {
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
