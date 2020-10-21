import React from 'react'

const Note = () => {
    return (
        <div className='note'>
            <div className="note__body">
                <div className="note__title">
                    Billie Eilish
                </div>
                <div className="note__category">
                    Blohsh
                </div>
                <div className="note__content">
                    So you are tought guy, like a really rought guy
                </div>
                <div className="note__options">
                    <div className="note__delete">Delete</div>
                    <div className="note__edit">Edit</div>
                </div>
                <div className="note__timestamps"></div>
            </div>
            
            <div className="note__bg"></div>
        </div>
    )
}

export default Note
