import React from 'react';
import './Register.css';
import '../Dashboard/Forms/Form.css'

const Register = (props) => {
    const register = (event) => {
        event.preventDefault();
        const name = document.getElementById("reg-name").value;
        const email = document.getElementById("reg-email").value;
        const password = document.getElementById("reg-password").value;
        const repeatPassword = document.getElementById("repeat-reg-password").value;
        
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
            <form className="form">
                <h2>Register</h2>
                <label className="form-label">Name</label>
                <input type="text" id="reg-name" name="reg-name" placeholder="Enter Name" className="form-input" required></input>
                <label className="form-label">Email</label>
                <input type="email" id="reg-email" name="reg-email" placeholder="Enter Email" className="form-input" required></input>
                <label className="form-label">Password</label>
                <input type="password" id="reg-password" name="reg-password" placeholder="Enter Password" className="form-input" required></input>
                <label className="form-label">Repeat Password</label>
                <input type="password" id="repeat-reg-password" name="repeat-reg-password" placeholder="Repeat Password" className="form-input" required></input>
                <button type="submit" onClick={(event) => register(event)} className="form-button">Register</button>
            </form>
            <p>Already have an acount? <a onClick={() => props.setForm("login")}>Log in!</a></p>
        </div>
    )
}

export default Register;