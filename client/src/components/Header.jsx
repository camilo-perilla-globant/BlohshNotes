import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({history}) => {

    return (
        <header>
            <div className="header__logo">
                Blohsh Notes.
            </div>

            <div className="header__dropdown">
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
                            id: null
                        }
                    }}>
                    Add Note
                </Link>
            </div>
        </header>
    )
}

export default Header
