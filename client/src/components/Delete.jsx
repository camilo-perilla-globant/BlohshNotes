import React from 'react'
import Swal from 'sweetalert2'
import { showToast } from '../toast'
const Delete = ({location, history}) => {
    const { id: _id } = location.state
    const deleteNote = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to recover this note",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#e36387',
            confirmButtonText: 'Yes, delete it!'
        })
        .then(result => {
            if (result.isConfirmed) {
                fetch(`/api/v1/notes/${_id}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    }
                }).then(res => res.json()).then(console.log)
                .catch(console.log)
                showToast('info', 'Note deleted successfully')
                history.push('/')
                
            } else if (result.isDismissed) {
                history.push('/')
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
