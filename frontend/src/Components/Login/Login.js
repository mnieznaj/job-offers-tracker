import React from 'react';
import './Login.css';
import '../Dashboard/Forms/Form.css'

import { connect } from 'react-redux';
import { setUserToken, setUserId } from '../../store/actions/dashboardActions';

const Login = (props) => {
    const login = (event) => {
        event.preventDefault();
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        
        const data = {
            email,
            password
        }
        fetch("/users/login-user", {
            method:'POST',
            mode: 'cors',
            headers: {'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*"},
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            props.setToken(data.token);
            props.setUserId(data.userId);
            return data
        })
        .then(data => {
            if(data.token && (!localStorage.getItem("token") || localStorage.getItem("token") === undefined)){
                localStorage.setItem("token", data.token);
                localStorage.setItem("userId", data.userId);
                
                window.location.href = window.location + "app";
            } else {
                document.getElementById("login-error-msg").textContent = "Incorrect credentials";
            }  
            return data
        })
        .catch(err => console.log(err));
    }
    return(
        <div className="login">
            <form className="form">
                <h2 className="form-title">Login</h2>
                <label className="form-label">E-mail</label>
                <input type="email" id="email" name="email" placeholder="Enter Email" className="form-input form-homepage-input"></input>
                <label className="form-label">Password</label>
                <input type="password" id="password" name="password" placeholder="Enter Password" className="form-input form-homepage-input"></input>
                <p id="login-error-msg" className="form-error-msg"></p>
                <button type="Submit" onClick={(event) => login(event)}className="form-button">Login</button>
            </form>
            <p className="form-paragraph">Don't have an acount?<br/><span className="switch-homescreen" onClick={() => props.changeForm("register")}>Register Now!</span></p>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        setToken: (token) => dispatch(setUserToken(token)),
        setUserId: (id) => dispatch(setUserId(id))
    }
}

export default connect(null, mapDispatchToProps)(Login);