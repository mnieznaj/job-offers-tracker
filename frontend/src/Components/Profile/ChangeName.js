import React from 'react';
import redirectToProfile from './redirectToProfile';
import { Redirect } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage} from 'formik';
import FormError from '../../utils/FormError';

const validate = values => {
    const errors = {};

    if(!values.newName){
        errors.newName = "Required"
    } else if (values.newName.length > 20){
        errors.message = "Must have 20 or less characters"
    }

    return errors
}

class ChangeName extends React.Component {
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
                    newName: ""
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
                            <ErrorMessage name="newName"/>
                        </FormError>
                        <label className="form-label" htmlFor="newName">New Name</label>
                        <Field type="text" name="newName" className="form-input"/>
                    </span>
                    <button type="submit" className="profile__form-button">Save</button>
                </Form>
            </Formik>
        )
    }

}

export default ChangeName;