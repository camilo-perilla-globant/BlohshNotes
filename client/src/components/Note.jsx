import React from 'react'
import { Link } from 'react-router-dom'
import {useAppState} from './AppContext'
import { format } from 'timeago.js'
import del from '../assets/images/delete.png'
import archive from '../assets/images/archive.png'
import palette from '../assets/images/palette.png'
import photo from '../assets/images/photo.png'



const Note = (props) => {
    const { title, content, category} = props
    const {_id, createdAt, updatedAt} = props
    const [state, dispatch] = useAppState()

    return (
        <div className='note'>
            <div className="note__body">
                <div className="note__title">
                    {title}
                    <div className="note__options">
                        <Link
                        className='note__edit'
                        to={{
                            pathname:'/edit',
                                state: {
                                    message: 'Edit Note',
                                    method: 'PUT',
                                    title,
                                    content,
                                    category,
                                    id: `/${_id}`
                                }
                            }}>
                            Edit
                        </Link>
                        <Link
                        className='note__delete'
                        to={{
                                pathname:'/delete',
                                state: {
                                    id: _id
                                }
                            }}>
                            Delete
                        </Link>
                    </div>
                </div>

                <div className="note__category">
                    {category}
                </div>

                <div className="note__content">
                    {content}
                </div>
                <div className="note__footer">
                    <div className="note__timestamps">
                        <p>Updated {format(updatedAt)}</p>
                        <p>Created {format(createdAt)}</p>
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
