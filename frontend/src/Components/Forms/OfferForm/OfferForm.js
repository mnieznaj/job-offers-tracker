import React from 'react';
import Input from '../Input/Input';
import DropdownCurrency from '../Dropdown/DropdownCurrency';
import DropdownCountry from '../Dropdown/DropdownCountry';
import Dropdown from '../Dropdown/Dropdown';
import RenderHearts from '../RenderHearts/RenderHearts';

import { connect } from 'react-redux';

import '../Form.css';
import '../OfferForm.css';

import offerFormHandler from '../offerFormHandler';
import { setAuthHeader } from '../../../utils/setAuthHeader';

class AddOfferForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: "",
            link: "",
            company: "",
            country: "none",
            city: "",
            paygrade: "0",
            currency: "",
            status: "none",
            favRating: 0,
            description: ""
        }
        this.title = this.props.id ? "Edit offer" : "Add new offer";
        this.btnText = this.props.id ? "Save" : "Add";

        this.handleInputChange = this.handleInputChange.bind(this);
        this.offerFormHandler = offerFormHandler.bind(this);

        this.setStateProperty = this.setStateProperty.bind(this);
    }
    getFormData(){
        const formData = {...this.state};
        return formData;
    }
    handleInputChange(event){
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({
            [name]: value
        })
    }
    setStateProperty(key, value){
        this.setState({
            [key]: value
        })
    }
    componentDidMount(){
        const id = this.props.id;
        if(id){
            const token = this.props.token;
            fetch(`/app/get-offer-list/${id}`,{
                method: "GET",
                headers: setAuthHeader(token)
            })
                .then(response => response.json())
                .then(data => {
                    this.setState({...data});
                })
                .catch(err => console.log(err));  
        }
    }

    render(){
        return(
            <React.Fragment>
            <h2 className="form-title">{this.title}</h2>
                <div className="offer-form">
                    <form className="offer-form__form" onSubmit={this.offerFormHandler}>
                        <Input name="Title" update={this.handleInputChange} value={this.state.title} placeholder="Enter name"/>

                        <Input name="Link" update={this.handleInputChange} value={this.state.link} placeholder="https://"/>

                        <Input name="Company" update={this.handleInputChange} value={this.state.company} placeholder="Company name"/>

                        <label htmlFor="paygrade" className="form-label">Paygrade</label>
                        <DropdownCurrency handler={this.setStateProperty} currency={this.state.currency} paygradeHandler={this.handleInputChange} paygrade={this.state.paygrade}/>

                        <label htmlFor="country" className="form-label">Country</label>
                        <DropdownCountry country={this.state.country} handler={this.setStateProperty} />

                        <Input name="City" update={this.handleInputChange} value={this.state.city} placeholder="City"/>

                        <label htmlFor="favRating" className="form-label">Rating</label>
                        <span className="heart-icons">
                            <RenderHearts handler={this.setStateProperty} heartsNo={this.state.favRating} />
                        </span>

                        <label htmlFor="status" className="form-label">Status</label>
                        <Dropdown status={this.state.status} handler={this.setStateProperty} />

                        <label htmlFor="description" className="form-label">Description</label>
                        <textarea name="description" rows="10" cols="30" className="form-description" onChange={this.handleInputChange} value={this.state.description}></textarea>

                        <button type="submit" className="form-button">{this.btnText}</button>
                    </form>
                </div>
            </React.Fragment>
        )
    }
}
const mapStateToProps = state => {
    return {
        userId: state.userId,
        token: state.userToken
    }
}


export default connect(mapStateToProps)(AddOfferForm);