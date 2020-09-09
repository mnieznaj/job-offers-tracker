import React from 'react';
import './Register.css';

const Register = () => {
    const register = (event) => {
        event.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const repeatPassword = document.getElementById("repeat-password").value;
        
        if(password === repeatPassword){
            const data = {
                name,
                email,
                password,
                repeatPassword
            }
            console.log(data);
            fetch("/users/register-user", {
                method:'POST',
                mode: 'cors',
                headers: {'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "cors"},
                body: JSON.stringify(data)
            })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(err => console.log(err));
        } else {
            console.log("wrong data. add more specific validation")
        }
    }
    return(
        <div className="register">
            <h2>Register</h2>
            <form className="register-form">
                <label>Name</label>
                <input type="text" id="name" name="name" placeholder="Enter Name" required></input>
                <label>Email</label>
                <input type="email" id="email" name="email" placeholder="Enter Email" required></input>
                <label>Password</label>
                <input type="password" id="password" name="password" placeholder="Enter Password" required></input>
                <label>Repeat Password</label>
                <input type="password" id="repeat-password" name="repeat-password" placeholder="Repeat Password" required></input>
                <button type="submit" onClick={(event) => register(event)}>Register</button>
            </form>
            <p>Already have an acount? <a href="/#">Log in!</a></p>
        </div>
    )
}

export default Register;