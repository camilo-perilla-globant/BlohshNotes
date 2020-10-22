import React from 'react'

const Note = (props) => {
    const { title, content, category} = props
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
                    <a href="#" className='note__edit'>Edit</a>
                    <a href="#" className='note__delete'>Delete</a>
                </div>
                <div className="note__timestamps"></div>
            </div>
            
            <div className="note__bg"></div>
        </div>
    )
}

export default Note
