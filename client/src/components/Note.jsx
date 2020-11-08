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
    
    const delegateClick = e => {
        switch (e.target.className) {
            case 'delete':
            case 'icon delete':
                deleteNote()
                break
            case 'image':
            case 'icon image':
                console.log('Add image')
                break
            case 'archive':
            case 'icon archive':
                console.log('Archive note')
                break
            case 'color':
            case 'icon color':
                console.log('Change color')
                break
            default:
                editNote()
        }

    }

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

    const deleteNote = () => {
        history.push({
            pathname: '/delete',
            state: {
                id: _id
            }
        })
    }

    return (
        <div className='note'>
            <div className="note__body" onClick={delegateClick}>
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
                        <div className="icon color">
                            <img src={palette} alt="palette icon"
                            className='color'/>
                        </div>
                        <div className="icon image">
                            <img src={photo} alt="photo icon"
                            className='image'/>
                        </div>
                        <div className="icon archive">
                            <img src={archive} alt="archive icon"
                            className='archive'/>
                        </div>
                        <div className="icon delete">
                            <img src={del} alt="delete icon" className='delete'/>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="note__bg"></div>
        </div>
    )
}

export default Note
