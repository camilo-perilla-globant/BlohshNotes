import React from 'react'
import {useAppState} from './AppContext'

const Note = (props) => {
    const { title, content, category} = props
    const {_id, createdAt, updatedAt} = props
    const [state, dispatch] = useAppState()

    const editNote = () => {
        dispatch({
            type: 'open-modal',
            payload: 'Edit Note'
        })
    }
    const deleteNote = () => {
        fetch(`http://localhost:3000/api/v1/notes/${_id}`, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'}
        }).then(res => res.json()).then(console.log)
        .catch(console.log)

        dispatch({
            type: 'delete-note',
            payload: ''
        })
    }

    return (
        <div className='note'>
            <div className="note__body">
                <div className="note__title">
                    {title}
                </div>
                <div className="note__category">
                    {category}
                </div>
                <div className="note__content">
                    {content}
                </div>
                <div className="note__options">
                    <a
                    onClick={editNote}
                    href="#"
                    className='note__edit'>
                        Edit
                    </a>
                    <a
                    onClick={deleteNote}
                    href="#"
                    className='note__delete'>
                        Delete
                    </a>
                </div>
                <div className="note__timestamps"></div>
            </div>
            
            <div className="note__bg"></div>
        </div>
    )
}

export default Note
