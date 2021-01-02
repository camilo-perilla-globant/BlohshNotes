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

    const deleteNote = async () => {
        const result = await Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to recover this note",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#e36387',
            confirmButtonText: 'Yes, delete it'
        })

        if (result.isConfirmed) {
            try {
                const token = localStorage.getItem('token') || undefined
                const api = '/api/v1/notes/'
                const res = await fetch(api + id, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    } 
                })
                const data = await res.json()
                console.log(data)
                dispatch({
                    type: 'delete-note',
                    payload: id
                })
                dispatch({
                    type: 'set-categories'
                })
                showToast('info', 'Note deleted successfully')
                
                location.state.wasEditing 
                ? history.push('/') : history.goBack()

            } catch (err) {
                console.log(err)
            }
            
        }
        else {
            history.goBack()
        }
        return result
    }

    function showDelete() {
        deleteNote()
        .then(x => {
            console.log(x)
            return 
        })
    }

    return (
        <div>
            {showDelete()}
        </div>
    )
}

export default Delete
