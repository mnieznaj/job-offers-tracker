import React, { Component } from 'react';
import SingleOffer from './SingleOffer';
import './OffersList.css'

class OffersList extends Component {
    state = {offers:[]};

    componentDidMount(){
        fetch('/get-offer-list')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.setState({offers: data})
            })
            .catch(err => console.log(err));
    };

    render(){
        const offers = [...this.state.offers];
        
        const list = offers.map(offer => <SingleOffer offer={offer} key={offer._id} offerFormHandler={this.props.offerFormHandler} setFormType={this.props.setFormType} setId={this.props.setId}/>);
        return (
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
        )
    }
}

export default OffersList;