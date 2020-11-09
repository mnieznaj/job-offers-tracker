import React from 'react';
import './Register.css';
import '../../Forms/Form.css';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import FormError from '../../../utils/FormError';

const Register = props => {
    const register = (values) => {
            fetch("/users/register-user", {
                method:'POST',
                mode: 'cors',
                headers: {'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "cors"},
                body: JSON.stringify(values)
            })
            .then(response => response.json())
            .then(data => {
                props.changeForm("login");
                console.log(data);
            })
            .catch(err => console.log(err));
    }
    const validate = values => {
        const errors= {};
        if (!values.name) {
            errors.name = 'Required';
          } else if (values.name.length > 15) {
            errors.name = 'Must be 15 characters or less';
          }
        
          if (!values.email) {
            errors.email = 'Required';
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
          }
          if (!values.password) {
            errors.password = 'Required';
          } else if (values.password.length > 20 || values.password.length < 8) {
            errors.password = 'Must be between 8 and 20 characters';
          }
          if (!values.repeatPassword) {
            errors.repeatPassword = 'Required';
          } else if (values.repeatPassword.length > 20 || values.repeatPassword.length < 8) {
            errors.repeatPassword = 'Must be between 8 and 20 characters';
          } else if (values.password !== values.repeatPassword){
              errors.repeatPassword = "Passwords do not match"
          }

        return errors;
    }
        return(
            <div className="register">
                <Formik
                    initialValues= {{
                        name: "",
                        email: "",
                        password: "",
                        repeatPassword: ""
                    }}
                    validate={validate}

                    onSubmit={(values) => {
                        register(values);
                        props.changeForm("login")
                }}>

                    <Form className="form">
                        <h2 className="form-title">Register</h2>
                        <FormError>
                            <ErrorMessage name="name" />
                        </FormError>
                        <label className="form-label" htmlFor="name">Name</label>
                        <Field type="text" name="name" placeholder="Enter Name" className="form-input form-homepage-input"/>

                        <FormError>
                            <ErrorMessage name="email"/>
                        </FormError>
                        <label className="form-label" htmlFor="email">E-mail</label>
                        <Field type="email" name="email" placeholder="Enter Email" className="form-input form-homepage-input"/>

                        <FormError>
                            <ErrorMessage name="password"/>
                        </FormError>
                        <label className="form-label" htmlFor="password">Password</label>
                        <Field type="password" name="password" placeholder="Enter Password" className="form-input form-homepage-input"/>

                        <FormError>
                            <ErrorMessage name="repeatPassword"/>
                        </FormError>
                        <label className="form-label" htmlFor="repeatPassword">Repeat Password</label>
                        <Field type="password" name="repeatPassword" placeholder="Repeat Password" className="form-input form-homepage-input"/>

                        <button type="submit" className="form-button">Register</button>
                    </Form>
                </Formik>
                <p className="form-paragraph">Already have an acount?<br/><span className="switch-homescreen" onClick={() => props.changeForm("login")}>Log in!</span></p>
            </div>
        )
}

export default Register;