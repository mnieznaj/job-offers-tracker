import React, { useState, useEffect } from 'react';
import { Formik } from 'formik';

import validate from './validateForm';
import DropdownCurrency from '../Dropdown/DropdownCurrency';
import DropdownCountry from '../Dropdown/DropdownCountry';
import Dropdown from '../Dropdown/Dropdown';
import RenderHearts from '../RenderHearts/RenderHearts';

import { connect } from 'react-redux';

import '../Form.css';
import '../OfferForm.css';

import offerFormHandler from '../offerFormHandler';
import { setAuthHeader } from '../../../utils/setAuthHeader';

const AddOfferForm = (props) => {
    const id = props.id;
    const title = id ? "Edit offer" : "Add new offer";
    const btnText = id ? "Save" : "Add";
    let [formValues, formValuesHandler] = useState();
    const emptyValues = {
        title: "",
        link: "",
        company: "",
        paygrade: 0,
        currency: "",
        country: "",
        city: "",
        rating: 0,
        status: "none",
        description: ""
    }

    useEffect(() => {
        const fetchData = async () => {
            if(id){
                let result = await fetch(`/app/get-offer-list/${id}`,{
                    method: "GET",
                    headers: setAuthHeader(props.token)
                    }).then(response => response.json())
                    .catch(err => console.log(err));
                formValuesHandler(result);
            } else {
                formValuesHandler(emptyValues)
            }
        };
        fetchData();
    });

        return(
            <React.Fragment>
            <h2 className="form-title">{title}</h2>
                <div className="offer-form">
                    {formValues ? <Formik
                    initialValues={{...formValues}}
                    customChange={(formik, field, value) => {
                        formik.values[field] = value
                    }}
                    validate={validate}
                    onSubmit={values => offerFormHandler(values, props.token, id)}
                    >
                        {formik => (
                        <form className="offer-form__form" onSubmit={formik.handleSubmit}>
                            <label htmlFor="title" className="form-label">Title</label>
                            <input type="text" name="title" className="form-input" placeholder="Enter name" {...formik.getFieldProps('title')}/>

                            <label htmlFor="link" className="form-label">Link</label>
                            <input type="text" name="link" className="form-input" placeholder="https://" {...formik.getFieldProps('link')}/>

                            <label htmlFor="company" className="form-label">Company</label>
                            <input type="text" name="company" className="form-input" placeholder="Company name" {...formik.getFieldProps('company')}/>

                            <label htmlFor="paygrade" className="form-label">Paygrade</label>
                            <DropdownCurrency handler={formik.setFieldValue} currency={formik.values.currency} paygradeHandler={formik.handleChange} paygrade={formik.values.paygrade}/>

                            <label htmlFor="country" className="form-label">Country</label>
                            <DropdownCountry country={formik.values.country} handler={formik.setFieldValue} />

                            <label htmlFor="city" className="form-label">City</label>
                            <input type="text" name="city" className="form-input" placeholder="City name" {...formik.getFieldProps('city')}/>
                            

                            <label htmlFor="favRating" className="form-label">Rating</label>
                            <span className="heart-icons">
                                <RenderHearts handler={formik.setFieldValue} heartsNo={formik.values.favRating} />
                            </span>

                            <label htmlFor="status" className="form-label">Status</label>
                            <Dropdown status={formik.values.status} handler={formik.setFieldValue} />

                            <label htmlFor="description" className="form-label">Description</label>
                            <textarea type="text" name="description" className="form-description" {...formik.getFieldProps('description')}/>

                            <button type="submit" className="form-button">{btnText}</button>
                        </form>
                        )}
                    </Formik> : null}
                </div>
            </React.Fragment>
        )
}
const mapStateToProps = state => {
    return {
        token: state.userToken
    }
}


export default connect(mapStateToProps)(AddOfferForm);