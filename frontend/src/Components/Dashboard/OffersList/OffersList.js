import React, { Component } from 'react';
import SingleOffer from './SingleOffer';
import './OffersList.css';

import { connect } from 'react-redux';
import { setOffersList } from '../../../store/actions/dashboardActions';

import { setAuthHeader } from '../../../utils/setAuthHeader';

// class OffersList extends Component {
    // state = {offers:[]};
class OffersList extends Component {
    constructor(props){
        super(props);
        this.state = {offers: []};
        this.fetchOffers = () => {
            const token= localStorage.getItem("token");
            fetch('/app/get-offer-list', {
                method: "GET",
                headers: setAuthHeader(token)})
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    this.setState({offers: data});
                })
                .catch(err => console.log(err));
        }
    }

    
    componentDidMount(){
            this.fetchOffers()
        };
        
    // if(typeof offers === []){
        // list = offers.map(offer => <SingleOffer offer={offer} key={offer._id} />);
    // }
    render(){

        const list = this.state.offers.map(offer => <SingleOffer offer={offer} key={offer._id} />);
        return (
            list.length === 0 ? (
                <React.Fragment>
                    <button onClick={this.fetchOffers}>Pobierz oferty</button>
                    <p>No offers.</p>
                </React.Fragment>
            ) : (
                <React.Fragment>
                    <button onClick={this.fetchOffers}>Pobierz oferty</button>
                    <table>
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Link</th>
                                <th>Company</th>
                                <th>Country</th>
                                <th>City</th>
                                <th>Field</th>
                                <th>Paygrade</th>
                                <th>Favorite</th>
                                <th>Applied</th>
                                <th>Description</th>
                                <th>Stage 1</th>
                                <th>Stage 2</th>
                                <th>Got the job</th>
                            </tr>
                        </thead>
                        <tbody>
                            {list}
                        </tbody>
                    </table>
                </React.Fragment>
            )
        )
            } 
}

const mapStateToProps = state => {
    return {
        offersList: state.offersList
    }
}
const mapDispatchToProps = dispatch => {
    return {
        setOffersList: (offers) => dispatch(setOffersList(offers))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OffersList);