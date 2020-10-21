import React from 'react'

const Header = () => {
    return (
        <header>
            <div className="header__logo">
                Blohsh Notes.
            </div>

            <div className="header__dropdown">
                <a href="#" className='border-basic'>
                    Add note
                </a>
            </div>
        </header>
    )
}

export default Header
