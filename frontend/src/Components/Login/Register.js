import React from 'react';

const Register = () => {
    return(
        <div>
            <h2>Register</h2>
            <form className="register-form">
                <label>Name</label>
                <input type="text" id="name" name="name" placeholder="Enter Name"></input>
                <label>Email</label>
                <input type="email" id="email" name="email" placeholder="Enter Email"></input>
                <label>Password</label>
                <input type="password" id="password" name="password" placeholder="Enter Password"></input>
                <label>Repeat Password</label>
                <input type="password" id="repeat-password" name="repeat-password" placeholder="Repeat Password"></input>
                <button type="Submit">Register</button>
            </form>
            <p>Already have an acount? <a>Log in!</a></p>
        </div>
    )
}

export default Register;