import React from 'react';
import './Register.css';
import '../../Forms/Form.css';

class Register extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: null,
            email: null,
            password: null,
            repeatPassword: null
        }
        this.setFormData = this.setFormData.bind(this);
    }
    setFormData(event){
        const key = event.target.name;
        const value = event.target.value;
        this.setState({
            [key]: value
        });
    } 
    register = (event) => {
        event.preventDefault();
        
        if(this.state.password === this.state.repeatPassword){
            const data = {...this.state};
            fetch("/users/register-user", {
                method:'POST',
                mode: 'cors',
                headers: {'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "cors"},
                body: JSON.stringify(data)
            })
            .then(response => response.json())
            .catch(err => console.log(err));
        } else {
            document.getElementById("error-message").textContent = "Passwords do not match";
        }
    }
    render(){
        return(
            <div className="register">
                <form className="form">
                    <h2 className="form-title">Register</h2>
                    <label className="form-label">Name</label>
                    <input type="text" name="name" placeholder="Enter Name" className="form-input form-homepage-input" required onChange={this.setFormData}/>
                    <label className="form-label">E-mail</label>
                    <input type="email" name="email" placeholder="Enter Email" className="form-input form-homepage-input" required onChange={this.setFormData}/>
                    <label className="form-label">Password</label>
                    <input type="password" name="password" placeholder="Enter Password" className="form-input form-homepage-input" required onChange={this.setFormData}/>
                    <label className="form-label">Repeat Password</label>
                    <input type="password" name="repeatPassword" placeholder="Repeat Password" className="form-input form-homepage-input" required onChange={this.setFormData}/>
                    <p className="form-error-msg" id="error-message"> </p>
                    <button type="submit" onClick={this.register} className="form-button">Register</button>
                </form>
                <p className="form-paragraph">Already have an acount?<br/><span className="switch-homescreen" onClick={() => this.props.changeForm("login")}>Log in!</span></p>
            </div>
        )
    }
}

export default Register;