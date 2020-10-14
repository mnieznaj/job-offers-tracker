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

class EditOfferForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            id: this.props.id,
            hearts: 0,
            status: "none",
            currency: "",
            country: ""
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
    setCountry(input){
        this.setState({
            country: input
        })
    }
    setCurrency(input){
        this.setState({
            currency: input
        })
    }
    setFormData(){
        const id = this.state.id;
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
                console.log(data);
                formData = {...data}
            }).then(() => {
                document.getElementById('title').value = formData.title;
                document.getElementById('link').value = formData.link;
                document.getElementById('company').value = formData.company;
                this.setState({country: formData.country});
                document.getElementById('city').value = formData.city;
                document.getElementById('paygrade').value = formData.paygrade;
                this.setState({currency: formData.currency});
                this.setStatus(formData.status);
                this.setRating(formData.favRating);
                document.getElementById('description').value = formData.description;
            })
            .catch(err => console.log(err));  
    }

    getFormData(){
        const formData = {};
        formData.title = document.getElementById('title').value;
        formData.link = document.getElementById('link').value;
        formData.company = document.getElementById('company').value;
        formData.country = document.getElementById('country').value;
        formData.city = document.getElementById('city').value;
        formData.paygrade = document.getElementById('paygrade').value;
        formData.currency = this.state.currency;
        formData.status = this.state.status;
        formData.favRating = this.state.hearts + 1;
        formData.description = document.getElementById('description').value;
        return formData;
    }

    editOfferHandler(event){
        event.preventDefault();
        const data = this.getFormData();

        const token= localStorage.getItem("token");
        fetch(`/app/edit-offer/${this.state.id}`, {
            method:'PUT',
            mode: 'cors',
            headers: setAuthHeader(token),
            body: JSON.stringify({...data})
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
    };

    componentDidMount(){
        this.setFormData();
    }
    
    render(){
        console.log("current edit form country" + this.state.country);
        return(
            <React.Fragment>
                <h2 className="form-title">Edit offer</h2>
                <div className="offer-form">
                    <form className="offer-form__form" onSubmit={this.editOfferHandler.bind(this)}>
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" id="title" name="title" required className="form-input"/>
                        <label htmlFor="link" className="form-label">Link</label>
                        <input type="text" id="link" name="link" required className="form-input"/>
                        <label htmlFor="company" className="form-label">Company</label>
                        <input type="text" id="company" name="company" className="form-input"/>
                        <label htmlFor="paygrade" className="form-label">Paygrade</label>
                        <DropdownCurrency currency={this.setCurrency}>{this.state.currency}</DropdownCurrency>
                        <label htmlFor="country" className="form-label">Country</label>
                        <DropdownCountry country={this.state.country} setCountry={this.setCountry}>{this.state.country}</DropdownCountry>
                        <label htmlFor="city" className="form-label">City</label>
                        <input type="text" id="city" name="city" required className="form-input"/>
                        <label htmlFor="favRating" className="form-label">Rating</label>
                        <span className="heart-icons">
                            {this.renderHearts(this.state.hearts + 1)}
                        </span>
                        <label htmlFor="status" className="form-label">Status</label>
                        <Dropdown status={this.setStatus}>{this.state.status}</Dropdown>
                        <label htmlFor="description" className="form-label">Description</label>
                        <textarea id="description" name="description" rows="10" cols="30" className="form-description"></textarea>
                        <button type="submit" className="form-button">Save</button>
                    </form>
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        id: state.currentOfferId
    }
}

export default connect(mapStateToProps)(EditOfferForm);