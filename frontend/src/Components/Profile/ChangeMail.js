import React from 'react';
import redirectToProfile from './redirectToProfile';
import {Redirect} from 'react-router-dom';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import FormError from '../../utils/FormError';

const validate = values => {
    const errors = {};

    if(!values.currEmail){
        errors.currEmail = "Required"
    } else if (values.currEmail.lenght > 30){
        errors.currEmail = "Email must have less than 30 characters"
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.currEmail)){
        errors.currEmail = "Invalid email format"
    }
    if(!values.newEmail){
        errors.newEmail = "Required"
    } else if (values.newEmail.lenght > 30){
        errors.newEmail = "Email must have less than 30 characters"
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.newEmail)){
        errors.newEmail = "Invalid email format"
    }
    if(!values.repeatNewEmail){
        errors.repeatNewEmail = "Required"
    } else if (values.repeatNewEmail.lenght > 30){
        errors.repeatNewEmail = "Email must have less than 30 characters"
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.repeatNewEmail)){
        errors.repeatNewEmail = "Invalid email format"
    } else if (values.newEmail !== values.repeatNewEmail){
        errors.repeatNewEmail = "Emails do not match"
    }

    return errors;
}

class ChangeMail extends React.Component {
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
                    currEmail: "",
                    newEmail: "",
                    repeatNewEmail: ""
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
                            <ErrorMessage className="form-error-msg" name="currEmail" />
                        </FormError>
                        <label className="form-label" htmlFor="currEmail">Current email</label>
                        <Field type="email" name="currEmail" className="form-input"/>
                        <FormError>
                            <ErrorMessage className="form-error-msg" name="newEmail" />
                        </FormError>
                        <label className="form-label" htmlFor="newEmail">New email</label>
                        <Field type="email" name="newEmail" className="form-input"/>
                        <FormError>
                            <ErrorMessage className="form-error-msg" name="repeatNewEmail" />
                        </FormError>
                        <label className="form-label" htmlFor="repeatNewEmail">Repeat new email</label>
                        <Field type="email" name="repeatNewEmail" className="form-input"/>
                        <button type="submit" className="profile__form-button" onClick={this.redirectToProfile}>Save</button>
                    </span>
                </Form>
            </Formik>
        )
    }
}

export default ChangeMail;