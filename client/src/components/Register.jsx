import React, { useState } from 'react'
import {showToast} from '../toast'

const Register = () => {

    const handleSubmit = async e => {
        e.preventDefault()
        const res = await fetch('http://localhost:3000/api/v1/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        })
        const data = await res.json()
        if (data.errors) {
            data.errors.forEach(error => {
                showToast('error', error.info)
            })
        } else if (data.resolution) {
            showToast('success', data.resolution)
        }
    }


    const [user, setUser] = useState({})
    const handleInputChange = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className='register'>
            <div className="register__content">

                <form onSubmit={handleSubmit} className='register__form'>
                
                    <label htmlFor="username">Username</label>
                    <input type="text" placeholder='Username' name='username'
                    onChange={handleInputChange}/>
                    
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder='Email' name='email'
                    onChange={handleInputChange}/>

                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder='Password'
                    name='password'
                    onChange={handleInputChange}/>

                    <label htmlFor="password2">Confirm Password</label>
                    <input type="password" placeholder='Password' name='confirm_password'
                    onChange={handleInputChange}/>
                    
                    <button type="submit">Register</button>
                </form>
            </div>
        </div>
    )
}

export default Register
