import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAppState } from './AppContext'
import { showToast } from '../toast'
import Swal from 'sweetalert2'
import Dropdown from './Dropdown'
import more from '../assets/images/more.png'

const Header = () => {
    const [state, dispatch] = useAppState()
    const [showMenu, setShowMenu] = useState(false)

    async function logOut() {
        const result = await Swal.fire({
            title: 'Log out of Blohsh Notes',
            text: 'Are you sure?',
            showCancelButton: true,
            icon: 'warning',
            cancelButtonText: 'Cancel',
            confirmButtonText: 'Log out'
        })

        if (result.isConfirmed) {
            setShowMenu(false)
            showToast('info', 'You have been logged out')
            localStorage.clear()
            dispatch({
                type: 'set-user',
                payload: undefined
            })
        }
    }

    return (
        <header>
            <div className="header__logo">
                Blohsh Notes.
            </div>

            <div className="header__dropdown">
                { state.user ? <>
                    <Link to='/add'>
                        Add Note
                    </Link>
                    <div onClick={() => setShowMenu(!showMenu)} className='btn'>
                        <img
                        src={more}
                        alt="more options"/>
                    </div>

                    { showMenu &&
                    <Dropdown>
                        <div className='header__options'>
                            <a href="#">Collaborators</a>
                            <a href="#">Archive</a>
                            <a href='#' onClick={logOut}>
                                Log out
                            </a>
                        </div>
                    </Dropdown> }
                    
                    </>
                    :
                    <Link to='/login' className='header__login'>
                        Log in / Register
                    </Link>
                }
            </div>
        </header>
    )
}

export default Header
