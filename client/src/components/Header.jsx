import React from 'react'
import { Link } from 'react-router-dom'
import { useAppState } from './AppContext'
import { showToast } from '../toast'
import Swal from 'sweetalert2'

const Header = () => {
    const [state, dispatch] = useAppState()

    function logOut() {
        Swal.fire({
            title: 'You are about to log out',
            text: 'Are you sure?',
            showCancelButton: true,
            icon: 'warning',
            cancelButtonText: 'No, go back',
            confirmButtonText: 'Yes, log me out'
        }).then(value => {
            // console.log(value)
            if (value.isConfirmed) {
                showToast('info', 'You have logged out')
                localStorage.clear()
                dispatch({
                    type: 'set-user',
                    payload: undefined
                })
            }
        })

    }
    return (
        <header>
            <div className="header__logo">
                Blohsh Notes.
            </div>

            <div className="header__dropdown">
                { state.user ? <>
                    <Link
                    className='border-basic'
                    to={{
                        pathname:'/add',
                        state: {
                        message: 'Add a Note',
                        method: 'POST',
                        title: null,
                        content: null,
                        category: null,
                        id: ''}
                    }}>Add Note</Link>
                    <a href='#' onClick={logOut}>
                        Log Out
                    </a>
                    </>
                    :
                    <Link to='/login' className='border-basic'>Log In</Link>
                }
            </div>
        </header>
    )
}

export default Header
