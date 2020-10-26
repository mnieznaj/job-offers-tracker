import React from 'react';
import './Login.css';
import '../../Forms/Form.css';

import { connect } from 'react-redux';
import { setUserToken, setUserId } from '../../../store/actions/dashboardActions';
import {Redirect} from 'react-router-dom';

class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            auth: false,
            formData: {
                email: null,
                password: null
            }
        }
        this.setFormData = this.setFormData.bind(this);
    }
    setFormData(event){
        const key = event.target.name;
        const value = event.target.value;
        this.setState({
            formData: {
                ...this.state.formData,
                [key]: value
            }
        })
    }
    login = (event) => {
        event.preventDefault();
        const data = {...this.state.formData};
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
                this.props.setToken(data.token);
                this.props.setUserId(data.userId);
                this.setState({auth: true});
            } else {
                document.getElementById("login-error-msg").textContent = "Incorrect credentials";
            } 
            return data
        })
        .catch(err => console.log(err));
    }
    render(){
        return(
            this.state.auth ? (<Redirect to={"/app"} />) :
            <div className="login">
                <form className="form">
                    <h2 className="form-title">Login</h2>
                    <label className="form-label">E-mail</label>
                    <input type="email" name="email" placeholder="Enter Email" className="form-input form-homepage-input" onChange={this.setFormData}/>
                    <label className="form-label">Password</label>
                    <input type="password" name="password" placeholder="Enter Password" className="form-input form-homepage-input"onChange={this.setFormData} />
                    <p id="login-error-msg" className="form-error-msg"></p>
                    <button type="Submit" onClick={this.login}className="form-button">Login</button>
                </form>
                <p className="form-paragraph">Don't have an acount?<br/><span className="switch-homescreen" onClick={() => this.props.changeForm("register")}>Register Now!</span></p>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setToken: (token) => dispatch(setUserToken(token)),
        setUserId: (id) => dispatch(setUserId(id))
    }
}

export default connect(null, mapDispatchToProps)(Login);