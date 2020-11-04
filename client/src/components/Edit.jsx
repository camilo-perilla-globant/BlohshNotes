import React, {useRef } from 'react'

const Edit = ({location, history}) => {
    const el = useRef(null)

    const close = e => {
        if (e.target === el.current) {
            history.push('/')
        }
    }

    return (
        <div className='edit' ref={el} onClick={close}>
            <div className="edit__content">
                <div className='edit__title' contentEditable suppressContentEditableWarning>
                    { location.state.title}
                </div>
                <div className='edit__note' contentEditable suppressContentEditableWarning>
                    { location.state.content}
                </div>
                <div className="edit__controls">
                    <button>Edit</button>
                </div>
            </div>
            
        </div>
    )
}

export default Edit
