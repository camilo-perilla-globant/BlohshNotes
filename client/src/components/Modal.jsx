import React, { useState } from 'react'
import { useAppState } from './AppContext'

const Modal = ({ history }) => {

    const [note, setNote] = useState({})
    const [state, dispatch] = useAppState()

    const handleSubmit = e => {
        console.log(note)
        e.preventDefault()
        fetch('http://localhost:3000/api/v1/notes', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(note)
        })
        .then(res => res.json()).then(console.log)
        .catch(console.log)
        
        e.target.reset()
        closeModal()

        dispatch({
            type: 'add-note',
            payload: ''
        })
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
                <h3>Add a Note</h3>
                <img
                onClick={closeModal}
                className='modal__close'
                src="https://uploads-ssl.webflow.com/5ea8febebff98adb1065a861/5eaf6bb700e6c65c4ff4a691_Close%20Outline.1.png" alt="Close"/>

                <form onSubmit={handleSubmit}>
                    <label htmlFor="title">
                        Note Title
                    </label>
                    
                    <input
                    onChange={handleChange}
                    name='title'
                    className='input'
                    type="text"
                    placeholder='Enter the title of the note'
                    id='title'/>
                    

                    <label htmlFor="category">
                        Category
                    </label>
                    
                    <input
                    onChange={handleChange}
                    name='category'
                    className='input'
                    type="text"
                    placeholder='i.e JavaScript, Habits, Series to watch'
                    id='category'/>
                    

                    <label htmlFor="content">Content</label>
                    <textarea
                    onChange={handleChange}
                    name='content'
                    id="content"
                    rows="10">
                    </textarea>
                    
                    <button type="submit">Add Note</button>
                </form>
            </div>
        </div>
    )
}

export default Modal
