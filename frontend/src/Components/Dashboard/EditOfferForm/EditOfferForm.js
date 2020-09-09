import React from 'react';

import { connect } from 'react-redux';
import { displayUpdateOfferForm } from '../../../store/actions/dashboardActions';

import { setAuthHeader } from '../../../utils/setAuthHeader';

const EditOfferForm = (props) => {
    const id = props.id;
    console.log("id from component input: "+id);

    const setFormData = (id) => {
        let formData;
        console.log(id);
        const token= localStorage.getItem("token");
        fetch(`/app/get-offer-list/${id}`,{
            method: "GET",
            headers: setAuthHeader(token)
        })
            .then(response => response.json())
            .then(data => {
                console.log("data from get offer by id: " + data);
                formData = {...data}
            }).then(() => {
                document.getElementById('title').value = formData.title;
                document.getElementById('link').value = formData.link;
                document.getElementById('company').value = formData.company;
                document.getElementById('country').value = formData.country;
                document.getElementById('city').value = formData.city;
                document.getElementById('field').value = formData.field;
                document.getElementById('paygrade').value = formData.paygrade;
                formData.favorite ? document.getElementById('favorite').checked = true :  document.getElementById('favorite').checked = false;
                formData.applied ? document.getElementById('applied').checked = true : document.getElementById('applied').checked = false;
                document.getElementById('description').value = formData.description;
            })
            .catch(err => console.log(err));  
    }

    const getFormData = () => {
        const formData = {};
        formData.title = document.getElementById('title').value;
        formData.link = document.getElementById('link').value;
        formData.company = document.getElementById('company').value;
        formData.country = document.getElementById('country').value;
        formData.city = document.getElementById('city').value;
        formData.field = document.getElementById('field').value;
        formData.paygrade = document.getElementById('paygrade').value;
        formData.favorite = document.getElementById('favorite').checked ? true : false;
        formData.applied = document.getElementById('applied').checked ? true : false;
        formData.description = document.getElementById('description').value;
        return formData;
    }

    const editOfferHandler = (event) => {
        event.preventDefault();
        const data = getFormData();

        const token= localStorage.getItem("token");
        fetch(`/app/edit-offer/${id}`, {
            method:'PUT',
            mode: 'cors',
            headers: setAuthHeader(token),
            body: JSON.stringify({...data})
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.log(err));
    }

    setFormData(id);

    return(
        <div className="offer-form">
            <div className="offer-form__background" onClick={() => props.showUpdateOffer(false)}></div>
            <form className="offer-form__form" onSubmit={editOfferHandler.bind(this)}>
                <label htmlFor="title">Title:</label>
                <input type="text" id="title" name="title" required />
                <label htmlFor="link">Link:</label>
                <input type="text" id="link" name="link" required />
                <label htmlFor="company">Company:</label>
                <input type="text" id="company" name="company" />
                <label htmlFor="country">Country:</label>
                <input type="text" id="country" name="country" required />
                <label htmlFor="city">City:</label>
                <input type="text" id="city" name="city" required />
                <label htmlFor="field">Field:</label>
                <input type="text" id="field" name="field" />
                <label htmlFor="paygrade">Paygrade:</label>
                <input type="text" id="paygrade" name="paygrade"  />
                <label htmlFor="favorite">Favorite:</label>
                <input type="checkbox" id="favorite" name="favorite" />
                <label htmlFor="applied">Applied:</label>
                <input type="checkbox" id="applied" name="applied" />
                <label htmlFor="description">Description:</label>
                <textarea id="description" name="description" rows="10" cols="30"></textarea>
                <button type="submit">Update Offer</button>
            </form>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        id: state.currentOfferId
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        showUpdateOffer: (show) => dispatch(displayUpdateOfferForm(show))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditOfferForm);