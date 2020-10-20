import React from 'react';
import './Register.css';
import '../../Dashboard/Forms/Form.css';

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
            document.getElementById("error-message").textContent = "Incorrect password";
        }
    }
    return(
        <div className="register">
            <form className="form">
                <h2 className="form-title">Register</h2>
                <label className="form-label">Name</label>
                <input type="text" id="reg-name" name="reg-name" placeholder="Enter Name" className="form-input form-homepage-input" required></input>
                <label className="form-label">E-mail</label>
                <input type="email" id="reg-email" name="reg-email" placeholder="Enter Email" className="form-input form-homepage-input" required></input>
                <label className="form-label">Password</label>
                <input type="password" id="reg-password" name="reg-password" placeholder="Enter Password" className="form-input form-homepage-input" required></input>
                <label className="form-label">Repeat Password</label>
                <input type="password" id="repeat-reg-password" name="repeat-reg-password" placeholder="Repeat Password" className="form-input form-homepage-input" required></input>
                <p className="form-error-msg" id="error-message"> </p>
                <button type="submit" onClick={(event) => register(event)} className="form-button">Register</button>
            </form>
            <p className="form-paragraph">Already have an acount?<br/><span className="switch-homescreen" onClick={() => props.changeForm("login")}>Log in!</span></p>
        </div>
    )
}

export default Register;