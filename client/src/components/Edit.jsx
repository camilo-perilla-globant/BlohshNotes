import React, { useRef } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import { format } from 'timeago.js'
import del from '../assets/images/delete.png'
import archive from '../assets/images/archive.png'
import palette from '../assets/images/palette.png'
import photo from '../assets/images/photo.png'

const Edit = () => {
    const el = useRef(null)
    const location = useLocation()
    const history = useHistory()
    
    const close = e => {
        if (e.target === el.current) {
            history.push('/')
        }
    }

    return (
        <div className='edit' ref={el} onClick={close}>
            <div className="edit__content">
                <div className='edit__title' contentEditable suppressContentEditableWarning>
                    { location.state.title }
                </div>
                <div className='edit__note' contentEditable suppressContentEditableWarning>
                    { location.state.content }
                </div>
                <div className="edit__info">
                    <div className="note__category" contentEditable
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
                    <button>Edit</button>
                </div>
            </div>
            
        </div>
    )
}

export default Edit
