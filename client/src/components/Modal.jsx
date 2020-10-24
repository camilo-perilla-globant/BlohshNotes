import React, { useState } from 'react'
import { useAppState } from './AppContext'
import close from '../assets/images/close.png'

const Modal = ({ history, location }) => {

    const [note, setNote] = useState({})
    const [state, dispatch] = useAppState()

    const handleSubmit = e => {
        e.preventDefault()
        fetch(`http://localhost:3000/api/v1/notes${location.state.id}`, {
            method: location.state.method,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(note)
        })
        .then(res => res.json()).then(console.log)
        .catch(console.log)
        
        e.target.reset()
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
                <h3>{location.state.message}</h3>
                <img
                onClick={closeModal}
                className='modal__close'
                src={close} 
                alt="Close"/>

                <form onSubmit={handleSubmit}>
                    <label htmlFor="title">
                        Note Title
                    </label>
                    
                    <input
                    defaultValue={location.state.title}
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
                    defaultValue={location.state.category}
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
                    rows="10"
                    defaultValue={location.state.content}>

                    </textarea>
                    
                    <button type="submit">{location.state.message}</button>
                </form>
            </div>
        </div>
    )
}

export default Modal
