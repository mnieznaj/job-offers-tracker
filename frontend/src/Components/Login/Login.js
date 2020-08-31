import React from 'react';

const Login = () => {
    return(
        <div>
            <form className="login-form">
                <label>Email</label>
                <input type="email" id="email" name="email" placeholder="Enter Email"></input>
                <label>Password</label>
                <input type="password" id="password" name="password" placeholder="Enter Password"></input>
                <button type="Submit">Login</button>
            </form>
            <p>Don't have an acount? <a>Register Now!</a></p>
        </div>
    )
}

export default Login;