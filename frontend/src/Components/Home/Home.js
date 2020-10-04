import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import Login from '../Login/Login';
import Register from '../Login/Register';
import './Home.css';
import homeGif from "./home.gif";

class Home extends Component {
    state = {
        form: "none"
    }

    setForm(formState){
        this.setState(
            {form: formState}
        );
        console.log(this.state.form)
    }
    render(){
        const homeHandler = (
            <React.Fragment>
            <h1 className="lp-info__title">Jot</h1>
            <img src="/icons/jot-logo.svg" alt="jot logo"/>
            <p className="lp-info__p">Jot them down in one place!</p>
            <button onClick={() => this.setForm("login")}>Login</button>
            <button onClick={() => this.setForm("register")}>Register</button>
        </React.Fragment>
        );
        return (
            <div className="landing-page">
                {localStorage.getItem('token') ? <Redirect to="/app/"/> : null}
                <div className="lp-info">
                    <img src={homeGif} alt="animation"/>
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

// const HomeHandler = (props) => {
//     return(
        
//     )
// }

export default Home;