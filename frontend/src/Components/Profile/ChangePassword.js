import React from 'react';
import redirectToProfile from './redirectToProfile';
import {Redirect} from 'react-router-dom';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import FormError from '../../utils/FormError';

const validate = values => {
    const errors = {};

    if(!values.currPassword){
        errors.currPassword = "Required"
    } else if (values.currPassword.lenght < 8){
        errors.currPassword = "Password must have more than 8 characters"
    } else if (values.currPassword.lenght > 20){
        errors.currPassword = "Password must have less than 20 characters"
    }

    if(!values.newPassword){
        errors.newPassword = "Required"
    } else if (values.newPassword.lenght < 8){
        errors.newPassword = "Password must have more than 8 characters"
    } else if (values.newPassword.lenght > 20){
        errors.newPassword = "Password must have less than 20 characters"
    }

    if(!values.repeatNewPassword){
        errors.repeatNewPassword = "Required"
    } else if (values.repeatNewPassword.lenght < 8){
        errors.repeatNewPassword = "Password must have more than 8 characters"
    } else if (values.repeatNewPassword.lenght > 20){
        errors.repeatNewPassword = "Password must have less than 20 characters"
    } else if (values.newPassword !== values.repeatNewPassword){
        errors.repeatNewPassword = "Passwords do not match"
    }

    return errors
}

class ChangePassword extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            redirect: false
        }
        this.redirectToProfile = redirectToProfile.bind(this);
    }

    render(){
        return(
            this.state.redirect ? (<Redirect to={"/app"} />) :
            <Formik
                initialValues={{
                    currPassword: "",
                    newPassword: "",
                    repeatNewPassword: ""
                }}
                validate={validate}
                onSubmit={values => {
                    console.log("here would be a request with this data: " + JSON.toString(values));
                    setTimeout(this.redirectToProfile(), 1000);
                }}
            >
                <Form className="profile profile__form">
                    <span className="form-section">
                        <FormError>
                            <ErrorMessage name="currPassword" />
                        </FormError>
                        <label className="form-label" htmlFor="currPassword">Current password</label>
                        <Field type="password" name="currPassword" className="form-input"/>
                        <FormError>
                            <ErrorMessage name="newPassword" />
                        </FormError>
                        <label className="form-label" htmlFor="newPassword">New password</label>
                        <Field type="password" name="newPassword" className="form-input"/>
                        <FormError>
                            <ErrorMessage name="repeatNewPassword" />
                        </FormError>
                        <label className="form-label" htmlFor="reapeatNewPassword">Repeat new password</label>
                        <Field type="password" name="repeatNewPassword" className="form-input"/>
                        <button type="submit" className="profile__form-button" >Save</button>
                    </span>
                </Form>
            </Formik>
        )
    }
}

export default ChangePassword;