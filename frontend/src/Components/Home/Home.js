import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import Login from '../Login/Login';
import Register from '../Login/Register';
import './Home.css';
import homeGif from "./home.gif";

class Home extends Component {
    constructor(){
        super();
        this.state = {
            form: "none"
        };
        this.setForm = this.setForm.bind(this);
    }

    setForm(formState){
        this.setState({
            form: formState
        });
        console.log(this.state.form)
    }
    render(){
        const homeHandler = (
            <div className="lp-user-handler__container">
                <h1 className="lp-info__title">Jot</h1>
                <img className="lp-user-handler__logo" src="/icons/jot-logo.svg" alt="jot logo"/>
                <p className="lp-info__p">them down in one place!</p>
                <button onClick={() => this.setForm("login")}>Login</button>
                <button onClick={() => this.setForm("register")}>Register</button>
            </div>
        );
        return (
            <div className="landing-page">
                {localStorage.getItem('token') ? <Redirect to="/app/"/> : null}
                <div className="lp-info">
                    <img className="lp-info__animation" src={homeGif} alt="animation"/>
                    <p className="lp-info__p">Can't keep track of<br/> all job offers you<br/> applied to?</p>
                    <a href="#landingpage-forms" className="lp-goto-forms">V</a>
                </div>
                <div id="landingpage-forms" className="lp-user-handler">
                    {this.state.form === "login" ? <Login changeForm={this.setForm}/> : this.state.form === "register" ? <Register changeForm={this.setForm}/> : homeHandler}
                </div>
            </div>
        )
    }
}

export default Home;