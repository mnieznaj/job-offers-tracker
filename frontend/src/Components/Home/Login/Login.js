import React from 'react';
import './Login.css';
import '../../Forms/Form.css';

import { connect } from 'react-redux';
import { setUserToken, setUserId, setAuth } from '../../../store/actions/dashboardActions';
import { Redirect } from 'react-router-dom';
import { Formik, Field, Form } from 'formik';

const validate = values => {
    const errors = {}

    if(!values.email){
        errors.email = "Required"
    } else if (values.email.lenght > 30){
        errors.email = "Email must have less than 30 characters"
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
        errors.email = "Invalid email format"
    }

    if(!values.password){
        errors.password = "Required"
    }

    return errors;
}

const Login = (props) => {
    
    const login = (values) => {
        const data = {...values};
        fetch("/users/login-user", {
            method:'POST',
            mode: 'cors',
            headers: {'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*"},
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            if(data.token){
                props.setToken(data.token);
                props.setUserId(data.userId);
                props.setAuth(true);
            } else {
                document.getElementById("login-error-msg").textContent = "Incorrect credentials";
            } 
            return data
        })
        .catch(err => console.log(err));
    }
        return(
            props.auth ? (<Redirect to={"/app"} />) :
            <div className="login">
                <Formik
                    initialValues= {{
                        email: "",
                        password: ""
                    }}
                    validate={validate}
                    onSubmit={
                        values => {
                            login(values)
                        }
                    }>
                    <Form className="form">
                        <h2 className="form-title">Login</h2>
                        <label className="form-label" htmlFor="email">E-mail</label>
                        <Field type="email" name="email" placeholder="Enter Email" className="form-input form-homepage-input" />

                        <label className="form-label" htmlFor="password">Password</label>
                        <Field type="password"  placeholder="Enter Password" className="form-input form-homepage-input" name="password"/>

                        <p id="login-error-msg" className="form-error-msg"></p>
                        <button type="submit" className="form-button">Login</button>
                    </Form>
                </Formik>
                <p className="form-paragraph">Don't have an acount?<br/><span className="switch-homescreen" onClick={() => props.changeForm("register")}>Register Now!</span></p>
            </div>
        )
}

const mapStatetoProps = state => {
    return {
        auth: state.auth
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setToken: (token) => dispatch(setUserToken(token)),
        setUserId: (id) => dispatch(setUserId(id)),
        setAuth: (bool) => dispatch(setAuth(bool))
    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(Login);