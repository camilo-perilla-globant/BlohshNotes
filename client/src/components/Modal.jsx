import React from 'react'

const Modal = () => {
    return (
        <div className='modal'>
            <div className="modal__content">
                <h3>Add a Note</h3>
                <img
                className='modal__close'
                src="https://uploads-ssl.webflow.com/5ea8febebff98adb1065a861/5eaf6bb700e6c65c4ff4a691_Close%20Outline.1.png" alt="Close"/>

                <form >
                    <label htmlFor="title">
                        Note Title
                    </label>
                    
                    <input
                    className='input'
                    type="text"
                    placeholder='Enter the title of the note'
                    id='title'/>
                    

                    <label htmlFor="category">
                        Category
                    </label>
                    
                    <input
                    className='input'
                    type="text"
                    placeholder='i.e JavaScript, Habits, Series to watch'
                    id='category'/>
                    

                    <label htmlFor="content">Content</label>
                    <textarea id="content"rows="10">
                    </textarea>
                    
                    <button type="submit">Add Note</button>
                </form>
            </div>
        </div>
    )
}

export default Modal
