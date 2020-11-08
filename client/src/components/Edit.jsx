import React, { useRef, useState } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import { useAppState } from '../components/AppContext'
import { showToast } from '../toast'

import { format } from 'timeago.js'

import del from '../assets/images/delete.png'
import archive from '../assets/images/archive.png'
import palette from '../assets/images/palette.png'
import photo from '../assets/images/photo.png'

const Edit = () => {
    const el = useRef(null) //modal
    const location = useLocation()
    const history = useHistory()
    
    const close = e => {
        if (e.target === el.current) {
            history.push('/')
        }
    }

    const [note, setNote] = useState({})
    const [state, dispatch] = useAppState()

    
    function updateNote() {
        console.log(note)
        
        fetch(`http://localhost:3000/api/v1/notes/${location.state.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(note)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            dispatch({
                type: 'edit-note',
                payload: {
                    newInfo : data.new_info,
                    id: location.state.id
                }
            })
            history.push('/')
            showToast('success', 'Note updated succesfully')
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
    }

    function editNote(e) {
        setNote({
            ...note,
            [e.target.dataset.name]: e.target.innerText
        })
    }
    return (
        <div className='edit' ref={el} onClick={close}>
            <div className="edit__content">
                <div className='edit__title'
                onInput={editNote}
                data-name="title"
                contentEditable
                suppressContentEditableWarning>
                    { location.state.title }
                </div>
                <div className='edit__note'
                onInput={editNote}
                data-name='content'
                contentEditable
                suppressContentEditableWarning>
                    { location.state.content }
                </div>
                <div className="edit__info">
                    <div className="note__category"
                    onInput={editNote}
                    data-name='category'
                    contentEditable
                    suppressContentEditableWarning>
                        { location.state.category }
                    </div>
                    <div className="note__time">
                        { `Last edit: ${format(location.state.updatedAt)}` }
                    </div>
                </div>
                <div className="edit__controls">
                    <div className="note__icons">
                        <div className="icon">
                            <img src={palette} alt="palette icon"/>
                        </div>
                        <div className="icon">
                            <img src={photo} alt="photo icon"/>
                        </div>
                        <div className="icon">
                            <img src={archive} alt="archive icon"/>
                        </div>
                        <div className="icon">
                            <img src={del} alt="delete icon"/>
                        </div>
                    </div>
                    <button onClick={updateNote}>
                        Edit
                    </button>
                </div>
            </div>
            
        </div>
    )
}

export default Edit
