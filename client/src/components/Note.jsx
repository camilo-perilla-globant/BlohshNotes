import React from 'react'
import { Link } from 'react-router-dom'
import {useAppState} from './AppContext'
import { format } from 'timeago.js'


const Note = (props) => {
    const { title, content, category} = props
    const {_id, createdAt, updatedAt} = props
    const [state, dispatch] = useAppState()

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
                <div className="note__timestamps">
                    <p>Updated {format(updatedAt)}</p>
                    <p>Created {format(createdAt)}</p>
                </div>
            </div>
            
            <div className="note__bg"></div>
        </div>
    )
}

export default Note
