import React from 'react'

const Header = () => {
    return (
        <header>
            <div className="header__logo">
                Blohsh Notes.
            </div>

            <div className="header__dropdown">
                <a href="#">
                    Add note
                </a>
            </div>
        </header>
    )
}

export default Header
