import React from 'react';
import {ReactComponent as Heart} from "../heart-icon.svg";
import {ReactComponent as FilledHeart} from "../filled-heart-icon.svg";
import DropdownCurrency from '../Dropdown/DropdownCurrency';
import DropdownCountry from '../Dropdown/DropdownCountry';
import Dropdown from '../Dropdown/Dropdown';

import { connect } from 'react-redux';

import '../Form.css';
import '../OfferForm.css';

import { setAuthHeader } from '../../../../utils/setAuthHeader';
import { requestSucceded } from '../../../../utils/requestSucceded';

class AddOfferForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            hearts: 0,
            status: "none",
            currency: "",
            country: "none"
        }
        this.setStatus = this.setStatus.bind(this);
        this.setCurrency = this.setCurrency.bind(this);
        this.setCountry = this.setCountry.bind(this);
    }
    
    setStatus(input){
        this.setState({
            status: input
        })
    }
    setCurrency(input){
        this.setState({
            currency: input
        })
    }
    setCountry(input){
        this.setState({
            country: input
        })
    }

    getFormData(){
        const formData = {};
        formData.title = document.getElementById('title').value;
        formData.link = document.getElementById('link').value;
        formData.company = document.getElementById('company').value;
        formData.country = this.state.country;
        formData.city = document.getElementById('city').value;
        formData.paygrade = document.getElementById('paygrade').value;
        formData.currency = this.state.currency;
        formData.status = this.state.status;
        formData.favRating = this.state.hearts + 1;
        formData.description = document.getElementById('description').value;
        return formData;
    }

    submitFormHandler(event){
        event.preventDefault();
        const data = this.getFormData();
        data.userId = this.props.userId;
        console.log(data);

        const token = localStorage.getItem("token");
        fetch("/app/add-offer", {
            method:'POST',
            mode: 'cors',
            headers: setAuthHeader(token),
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(response => {
            if(response.error === false){
                requestSucceded(2900);
                setTimeout(() => {
                    window.location.href = window.origin + "/app";
                }, 2900)

            }
            return response
        })
        .then(data => console.log(data))
        .catch(err => console.log(err));
    }

    setRating(ratingValue){
        this.setState({
            hearts: ratingValue
        })
        document.getElementById('favRating').options[ratingValue].selected = true;
    };
    renderHearts(heartsNo){
        let heartList = [];
        for(let i = 0; i < 5; i++){
            if(i < (isNaN(heartsNo) ? 0 : heartsNo)){
                heartList.push(<FilledHeart key={"heart-" + i} onClick={() => this.setRating(i)}/>)
            }else{
                heartList.push(<Heart key={"heart-" + i} onClick={() => this.setRating(i)}/>)
            }
        }
        return heartList;
    }

    render(){
        return(
            <React.Fragment>
            <h2 className="form-title">Add new offer</h2>
                <div className="offer-form">
                    <form className="offer-form__form" onSubmit={this.submitFormHandler.bind(this)}>
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" id="title" name="title" required className="form-input" placeholder="Enter name"/>
                        <label htmlFor="link" className="form-label">Link</label>
                        <input type="text" id="link" name="link" required className="form-input" placeholder="https:// "/>
                        <label htmlFor="company" className="form-label">Company</label>
                        <input type="text" id="company" name="company" className="form-input" placeholder="Company name"/>
                        <label htmlFor="paygrade" className="form-label">Paygrade</label>
                        <DropdownCurrency currency={this.setCurrency}/>
                        <label htmlFor="country" className="form-label">Country</label>
                        <DropdownCountry country={this.state.country} setCountry={this.setCountry}>{this.state.country}</DropdownCountry>
                        <label htmlFor="city" className="form-label">City</label>
                        <input type="text" id="city" name="city" required className="form-input" placeholder="City"/>
                        <label htmlFor="favRating" className="form-label">Rating</label>
                        <span className="heart-icons">
                            {this.renderHearts(this.state.hearts + 1)}
                        </span>
                        <label htmlFor="status" className="form-label">Status</label>
                        <Dropdown status={this.setStatus}>{this.state.status}</Dropdown>
                        <label htmlFor="description" className="form-label">Description</label>
                        <textarea id="description" name="description" rows="10" cols="30" className="form-description"></textarea>
                        <button type="submit" className="form-button">Add</button>
                    </form>
                </div>
            </React.Fragment>
        )
}
}
const mapStateToProps = state => {
    return {
        userId: state.userId
    }
}

export default connect(mapStateToProps)(AddOfferForm);