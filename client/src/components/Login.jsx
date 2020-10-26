import React, { useRef } from 'react'

const Login = ({history}) => {

    const login = useRef(null)

    const closeLogin = e => {
        if (e.target === login.current) {
            history.push('/')
        }

    }

    return (
        <div className='login' ref={login} onClick={closeLogin}>
            <div className="login__content">
                <h3>Access your account</h3>
                <form action="" className='login__form' method='POST'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email"/>

                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password"/>

                    <button type="submit">Login</button>

                </form>
            </div>
        </div>
    )
}

export default Login
