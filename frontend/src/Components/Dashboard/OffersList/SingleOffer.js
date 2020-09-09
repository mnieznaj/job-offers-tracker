import React from 'react';

import { connect } from 'react-redux';
import { currentOfferId, displayUpdateOfferForm } from '../../../store/actions/dashboardActions';

import { setAuthHeader } from "../../../utils/setAuthHeader"; 


const SingleOffer = (props) => {
    const data = props.offer;

    const deleteOfferHandler = () => {
        const id = data._id;
        document.getElementById(id).remove();
        
        const token = localStorage.getItem("token");
        fetch(`/app/delete-offer/${id}`, {
            method:'DELETE',
            mode: 'cors',
            headers: setAuthHeader(token),
            body: JSON.stringify({id : data._id})
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.log(err));
    }

    return(
        <tr id={data._id}>
            <td>{data.title}</td>
            <td><a href={data.link} rel="noopener noreferrer" target="_blank">Go to the offer</a></td>
            <td>{data.company}</td>
            <td>{data.country}</td>
            <td>{data.city}</td>
            <td>{data.field}</td>
            <td>{data.paygrade}</td>
            <td>{data.favorite ? "true" : "false"}</td>
            <td>{data.applied ? "true" : "false"}</td>
            <td>{data.description}</td>
            <td>{data.stage1 ? "true" : "false"}</td>
            <td>{data.stage2 ? "true" : "false"}</td>
            <td>{data.gotTheJob ? "true" : "false"}</td>
            <td onClick={deleteOfferHandler}>x</td>
            <td onClick={() => {
                // props.offerFormHandler("edit");
                // alert("click edit");
                // props.setFormType("edit");
                // alert("click id");
                props.showUpdateOffer(true, data._id)
                console.log("click id: "+ data._id);
                props.setOfferId(data._id)
                }}>edit</td>
        </tr>
    )
}

const mapStateToProps = state => {
    return {
        // formType: state.formType,
        currentOfferId: state.currentOfferId
    }
}
const mapDispatchToProps = dispatch => {
    return {
        setOfferId: (id) => dispatch(currentOfferId(id)),
        showUpdateOffer: (show, id) => dispatch(displayUpdateOfferForm(show, id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleOffer);