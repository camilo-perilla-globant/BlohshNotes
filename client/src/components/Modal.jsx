import React, { useState } from 'react'
import { useAppState } from './AppContext'
import close from '../assets/images/close.png'
import { showToast } from '../toast'

const Modal = ({ history, location }) => {
    const [state, dispatch] = useAppState()

    const [note, setNote] = useState({
        userID: state.user.id
    })

    const handleSubmit = e => {
        e.preventDefault()
        fetch(`/api/v1/notes${location.state.id}`, {
            method: location.state.method, //PUSH / POST
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
        if (location.state.message === 'Add a Note') {
            showToast('success', 'Note added successfully')
        } else {
            showToast('success', 'Note edited successfully')
        }
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
                    {/* <label htmlFor="title">
                        Note Title
                    </label> */}
                    
                    <input
                    autoComplete='off'
                    autoFocus
                    defaultValue={location.state.title}
                    onChange={handleChange}
                    name='title'
                    className='input'
                    type="text"
                    placeholder='Title'
                    id='title'/>
                    

                    {/* <label htmlFor="category">
                        Category
                    </label> */}
                    
                    <input
                    autoComplete='off'
                    defaultValue={location.state.category}
                    onChange={handleChange}
                    name='category'
                    className='input'
                    type="text"
                    placeholder='Category'
                    id='category'/>
                    

                    {/* <label htmlFor="content">Content</label> */}
                    <textarea
                    placeholder='Content'
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
