import React from 'react'
import Swal from 'sweetalert2'
import { showToast } from '../toast'
import { useAppState } from './AppContext'
import { useLocation, useHistory } from 'react-router-dom'

const Delete = () => {

    const location = useLocation()
    const history = useHistory()
    const [state, dispatch] = useAppState()
    const { id } = location.state

    const deleteNote = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to recover this note",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#e36387',
            confirmButtonText: 'Yes, delete it'
        })
        .then(result => {
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/api/v1/notes/${id}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    }
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    dispatch({
                        type: 'delete-note',
                        payload: id
                    })
                    dispatch({
                        type: 'set-categories'
                    })
                    showToast('info', 'Note deleted successfully')
                })
                .catch(console.log)
                location.state.wasEditing ? 
                    history.push('/')
                    :
                    history.goBack()
            } else if (result.isDismissed){
                history.goBack()
            }
        })
    }
    return (
        <div>
            {deleteNote()}
        </div>
    )
}

export default Delete
