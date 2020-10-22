import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({history}) => {

    return (
        <header>
            <div className="header__logo">
                Blohsh Notes.
            </div>

            <div className="header__dropdown">
                <Link to='/add' className='border-basic'>
                    Add Note
                </Link>
            </div>
        </header>
    )
}

export default Header
