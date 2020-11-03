import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAppState } from './AppContext'
import { showToast } from '../toast'
import Swal from 'sweetalert2'
import Dropdown from './Dropdown'
import arrow from '../assets/images/down-arrow.png'

const Header = () => {
    const [state, dispatch] = useAppState()
    const [showMenu, setShowMenu] = useState(false)

    function logOut() {
        Swal.fire({
            title: 'Log out of Blohsh Notes',
            text: 'Are you sure?',
            showCancelButton: true,
            icon: 'warning',
            cancelButtonText: 'Cancel',
            confirmButtonText: 'Log out'
        }).then(value => {
            if (value.isConfirmed) {
                setShowMenu(false)
                showToast('info', 'You have been logged out')
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

                    <img
                    onClick={() => setShowMenu(!showMenu)}
                    src={arrow}
                    alt="arrow"/>

                    { showMenu && <Dropdown>
                        <div className='header__options'>
                            <a href="#">Options</a>
                            <a href='#' onClick={logOut}>
                                Log out
                            </a>
                        </div>
                    </Dropdown> }
                    
                    </>
                    :
                    <Link to='/login' className='border-basic'>Log in / Register</Link>
                }
            </div>
        </header>
    )
}

export default Header
