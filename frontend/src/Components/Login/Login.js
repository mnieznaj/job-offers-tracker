import React from 'react';
import './Login.css';
import '../Dashboard/Forms/Form.css'

import { connect } from 'react-redux';
import { setUserToken, setDbId, setUserId } from '../../store/actions/dashboardActions';

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
            console.log(data);
            props.setToken(data.token);
            props.setUserId(data.userId);
            props.setDbId(data.dbId);
            return data
        })
        .then(data => {
            if(!localStorage.getItem("token") || localStorage.getItem("token") === undefined){
                localStorage.setItem("token", data.token);
                localStorage.setItem("userId", data.userId);
                localStorage.setItem("dbId", data.dbId);
            }
            
            window.location.href = window.location + "app";
            return data
        })
        .catch(err => console.log(err));
    }
    return(
        <div className="login">
            <form className="form">
                <h2>Login</h2>
                <label className="form-label">Email</label>
                <input type="email" id="email" name="email" placeholder="Enter Email" className="form-input"></input>
                <label className="form-label">Password</label>
                <input type="password" id="password" name="password" placeholder="Enter Password" className="form-input"></input>
                <button type="Submit" onClick={(event) => login(event)}className="form-button">Login</button>
            </form>
            <p>You do not have an acount? <a onClick={() => props.changeForm("register")}>Register Now!</a></p>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        setToken: (token) => dispatch(setUserToken(token)),
        setUserId: (id) => dispatch(setUserId(id)),
        setDbId: (id) => dispatch(setDbId(id))
    }
}

export default connect(null, mapDispatchToProps)(Login);