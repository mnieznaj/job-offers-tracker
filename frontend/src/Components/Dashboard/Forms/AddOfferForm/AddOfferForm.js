import React from 'react';

import { connect } from 'react-redux';
import { displayAddOfferForm } from '../../../../store/actions/dashboardActions';

import { setAuthHeader } from '../../../../utils/setAuthHeader';
import '../Form.css';

const AddOfferForm = (props) => {

    const getFormData = () => {
        const formData = {};
        formData.title = document.getElementById('title').value;
        formData.link = document.getElementById('link').value;
        formData.company = document.getElementById('company').value;
        formData.country = document.getElementById('country').value;
        formData.city = document.getElementById('city').value;
        formData.field = document.getElementById('field').value;
        formData.paygrade = document.getElementById('paygrade').value;
        const status = document.getElementById('status');
        formData.status = status.options[status.selectedIndex].value;
        console.log(formData.status);
        const favRating = document.getElementById('favRating');
        formData.favRating = favRating.options[favRating.selectedIndex].value;
        console.log(formData.favRating);
        formData.description = document.getElementById('description').value;
        return formData;
    }

    const submitFormHandler = event => {
        event.preventDefault();
        const data = getFormData();
        data.userId = props.userId;
        console.log(data);

        const token = localStorage.getItem("token");
        fetch("/app/add-offer", {
            method:'POST',
            mode: 'cors',
            headers: setAuthHeader(token),
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.log(err));
    }

    return(
            <div className="offer-form">
                <div className="offer-form__background" onClick={() => props.displayAddOffer(false)}></div>
                <form className="offer-form__form" onSubmit={submitFormHandler.bind(this)}>
                    <h2 className="form-title">Add new offer</h2>
                    <label htmlFor="title" className="form-label">Title:</label>
                    <input type="text" id="title" name="title" required className="form-input"/>
                    <label htmlFor="link" className="form-label">Link:</label>
                    <input type="text" id="link" name="link" required className="form-input"/>
                    <label htmlFor="company" className="form-label">Company:</label>
                    <input type="text" id="company" name="company" className="form-input"/>
                    <label htmlFor="country" className="form-label">Country:</label>
                    <input type="text" id="country" name="country" required className="form-input"/>
                    <label htmlFor="city" className="form-label">City:</label>
                    <input type="text" id="city" name="city" required className="form-input"/>
                    <label htmlFor="field" className="form-label">Field:</label>
                    <input type="text" id="field" name="field" className="form-input"/>
                    <label htmlFor="paygrade" className="form-label">Paygrade:</label>
                    <input type="text" id="paygrade" name="paygrade"  className="form-input"/>
                    <label htmlFor="favRating" className="form-label">Rate offer:</label>
                    <select id="favRating" name="favRating" className="form-input">
                        <option value="1" name="1" selected>1</option>
                        <option value="2" name="2">2</option>
                        <option value="3" name="3">3</option>
                        <option value="4" name="4">4</option>
                        <option value="5" name="5">5</option>
                    </select>
                    <label htmlFor="status" className="form-label">Status:</label>
                    <select id="status" name="status" className="form-input">
                        <option value="none" name="none">none</option>
                        <option value="applied" name="applied">applied</option>
                        <option value="rejected" name="rejected">rejected</option>
                        <option value="succeded" name="succeded">succeded</option>
                    </select>
                    <label htmlFor="description" className="form-label">Description:</label>
                    <textarea id="description" name="description" rows="10" cols="30" className="form-description"></textarea>
                    <button type="submit" className="form-button">Add Offer</button>
                </form>
            </div>
    )
}

const mapStateToProps = state => {
    return {
        userId: state.userId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        displayAddOffer: (hide) => dispatch(displayAddOfferForm(hide))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddOfferForm);