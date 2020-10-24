import React from 'react'
import { Link } from 'react-router-dom'
import {useAppState} from './AppContext'
import Swal from 'sweetalert2'


const Note = (props) => {
    const { title, content, category} = props
    const {_id, createdAt, updatedAt} = props
    const [state, dispatch] = useAppState()

    const deleteNote = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to recover this note!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#e36387',
            confirmButtonText: 'Yes, delete it!'
        })
        .then(result => {
            if (result.isConfirmed) {

                fetch(`http://localhost:3000/api/v1/notes/${_id}`, {
                    method: 'DELETE',
                    headers: {'Content-Type': 'application/json'}
                }).then(res => res.json()).then(console.log)
                .catch(console.log)

                Swal.fire(
                    'Deleted!',
                    'Your note has been deleted.',
                    'success'
                )
            }
        })
        
        
        
    }

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
                    <a
                    onClick={deleteNote}
                    href="#"
                    className='note__delete'>
                        Delete
                    </a>
                </div>
                <div className="note__timestamps"></div>
            </div>
            
            <div className="note__bg"></div>
        </div>
    )
}

export default Note
