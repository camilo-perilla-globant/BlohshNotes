import React from 'react'
import { useHistory } from 'react-router-dom'
import {useAppState} from './AppContext'
import { format } from 'timeago.js'
import del from '../assets/images/delete.png'
import archive from '../assets/images/archive.png'
import palette from '../assets/images/palette.png'
import photo from '../assets/images/photo.png'



const Note = (props) => {
    const { title, content, category} = props
    const {_id, createdAt, updatedAt} = props
    const history = useHistory()
    

    const editNote = () => {
        history.push({
            pathname: '/edit',
            state: {
                title,
                content,
                category,
                updatedAt,
                id: _id
            }
        })
    }

    return (
        <div className='note'>
            <div className="note__body" onClick={editNote}>
                <div className="note__header">
                    <div className="note__title">
                        {title}
                    </div>

                    <div className="note__category">
                        {category}
                    </div>
                </div>

                <div className="note__content">
                    {content}
                </div>
                <div className="note__footer">
                    <div className="note__timestamps">
                        <p>Updated {format(updatedAt)}</p>
                        {/* <p>Created {format(createdAt)}</p> */}
                    </div>
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
                </div>
            </div>
            
            <div className="note__bg"></div>
        </div>
    )
}

export default Note
