import React from 'react'

const Register = () => {
    return (
        <div>
            <form
            action="http://localhost:8080/api/v1/users"
            method="post">

                <label htmlFor="username">Username</label>
                <input type="text" placeholder='Username'/>
                
                <label htmlFor="email">Email</label>
                <input type="email" placeholder='Email'/>

                <label htmlFor="password">Password</label>
                <input type="password" placeholder='Password'/>

                <label htmlFor="password2">Confirm Password</label>
                <input type="password" placeholder='Password'/>
                
                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default Register
