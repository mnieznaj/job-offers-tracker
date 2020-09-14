import React from 'react';
import './Login.css';

import { connect } from 'react-redux';
import { setUserToken } from '../../store/actions/dashboardActions';

const Login = (props) => {
    const login = (event) => {
        event.preventDefault();
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        
        const data = {
            email,
            password
        }
        console.log(data);
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
            return data
        })
        .then(data => {
            if(!localStorage.getItem("token") || localStorage.getItem("token") === undefined){
                localStorage.setItem("token", data.token);
            }
            window.location.href = window.location + "app";
            return data
        })
        .catch(err => console.log(err));
    }
    return(
        <div className="login">
            <h2>Login</h2>
            <form className="login-form">
                <label>Email</label>
                <input type="email" id="email" name="email" placeholder="Enter Email"></input>
                <label>Password</label>
                <input type="password" id="password" name="password" placeholder="Enter Password"></input>
                <button type="Submit" onClick={(event) => login(event)}>Login</button>
            </form>
            <p>Don't have an acount? <a href="/#">Register Now!</a></p>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        setToken: (token) => dispatch(setUserToken(token))
    }
}

export default connect(null, mapDispatchToProps)(Login);