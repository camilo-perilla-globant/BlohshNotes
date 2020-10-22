import React from 'react'
import { useAppState } from './AppContext'

const Header = () => {
    const [state, dispatch] = useAppState()

const openModal = () => {
    dispatch({
        type: 'open-modal',
        payload: 'Add Note'
    })
}

    return (
        <header>
            <div className="header__logo">
                Blohsh Notes.
            </div>

            <div className="header__dropdown">
                <a
                onClick={openModal}
                href="#"
                className='border-basic'>
                    Add note
                </a>
            </div>
        </header>
    )
}

export default Header
