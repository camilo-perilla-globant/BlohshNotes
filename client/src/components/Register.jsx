import React, { useState, useRef } from 'react'
import {showToast} from '../toast'
import { Link } from 'react-router-dom'

const Register = ({history}) => {
    const register = useRef(null)
    const closeModal = e => {
        console.log(e.target)
        console.log(register.current)
        if (e.target === register.current) {
            history.push('/')
        }
    }

    const handleSubmit = async e => {
        e.preventDefault()
        const res = await fetch('/api/v1/users/sign-up', {
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
            history.push('/login')
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
        <div className='register' ref={register} onClick={closeModal}>
            <div className="register__content">
                <h3>Create an account</h3>
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
                <p className='register__signin'>Already registered?
                    <Link to='/login'>
                        Log in
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default Register
