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
            currency: ""
        }
        this.setStatus = this.setStatus.bind(this);
        this.setCurrency = this.setCurrency.bind(this);
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
                document.getElementById('country').value = formData.country;
                document.getElementById('city').value = formData.city;
                document.getElementById('paygrade').value = formData.paygrade;
                document.getElementById('status').selectedIndex = formData.status;
                document.getElementById('favRating').selectedIndex = formData.favRating -1;
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
        console.log(formData.status);
        // const favRating = document.getElementById('favRating');
        // formData.favRating = favRating.options[favRating.selectedIndex].value;
        console.log(formData.favRating);
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
                requestSucceded();
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
                heartList.push(<FilledHeart onClick={() => this.setRating(i)}/>)
            }else{
                heartList.push(<Heart onClick={() => this.setRating(i)}/>)
            }
        }
        return heartList;
    };

    
    
    render(){
        this.setFormData();
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
                        <DropdownCurrency currency={this.setCurrency}/>
                        <label htmlFor="country" className="form-label">Country</label>
                        <DropdownCountry />
                        <label htmlFor="city" className="form-label">City</label>
                        <input type="text" id="city" name="city" required className="form-input"/>
                        <label htmlFor="favRating" className="form-label">Rating</label>
                        <select id="favRating" name="favRating" className="hide">
                                <option value="1" name="1" selected>1</option>
                                <option value="2" name="2">2</option>
                                <option value="3" name="3">3</option>
                                <option value="4" name="4">4</option>
                                <option value="5" name="5">5</option>
                        </select>
                        <span className="heart-icons">
                            {this.renderHearts(this.state.hearts + 1)}
                        </span>
                        <label htmlFor="status" className="form-label">Status</label>
                        <select id="status" name="status" className="hide">
                                <option value="none" name="none">none</option>
                                <option value="applied" name="applied">applied</option>
                                <option value="rejected" name="rejected">rejected</option>
                                <option value="succeded" name="succeded">succeded</option>
                        </select>
                        <Dropdown title={this.state.status} status={this.setStatus}/>
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