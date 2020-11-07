import React, { useState } from 'react'
import { useAppState } from './AppContext'
import close from '../assets/images/close.png'
import { showToast } from '../toast'

const Modal = ({ history }) => {
    const [state, dispatch] = useAppState()

    const [note, setNote] = useState({
        userID: state.user.id
    })

    const handleSubmit = e => {
        e.preventDefault()
        fetch('/api/v1/notes/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(note)
        })
        .then(res => res.json()).then(console.log)
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
        
        e.target.reset()
        showToast('success', 'Note added successfully')
        closeModal()
    }

    const handleChange = e => {
        setNote({
            ...note,
            [e.target.name]: e.target.value
        })
    }

    const closeModal = () => {
        history.push('/')
    }


    return (
        <div className='modal'>
            <div className="modal__content">
                <h3>Add Note</h3>
                <img
                onClick={closeModal}
                className='modal__close'
                src={close} 
                alt="Close"/>

                <form onSubmit={handleSubmit}>
                    
                    <input
                    autoComplete='off'
                    autoFocus
                    onChange={handleChange}
                    name='title'
                    className='input'
                    type="text"
                    placeholder='Title'
                    id='title'/>
                    
                    <input
                    autoComplete='off'
                    onChange={handleChange}
                    name='category'
                    className='input'
                    type="text"
                    placeholder='Category'
                    id='category'/>
                    
                    <textarea
                    placeholder='Content'
                    onChange={handleChange}
                    name='content'
                    id="content"
                    rows="6">
                    </textarea>
                    
                    <button type="submit">Add Note</button>
                </form>
            </div>
        </div>
    )
}

export default Modal
