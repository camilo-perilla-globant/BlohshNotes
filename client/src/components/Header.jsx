import React from 'react'
import { Link } from 'react-router-dom'
import { useAppState } from './AppContext'
import { showToast } from '../toast'

const Header = () => {
    const [state, dispatch] = useAppState()

    function logOut() {
        localStorage.clear()
        dispatch({
            type: 'set-user',
            payload: undefined
        })
        showToast('info', 'You have logged out')

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
                    <Link onClick={logOut} to='/login'>
                        Log Out
                    </Link>
                    </>
                    :
                    <Link to='/login' className='border-basic'>Log In</Link>
                }
            </div>
        </header>
    )
}

export default Header
