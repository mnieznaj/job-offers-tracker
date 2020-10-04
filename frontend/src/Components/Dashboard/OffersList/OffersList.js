import React, { Component } from 'react';
import SingleOffer from './SingleOffer';
import './OffersList.css';

import { connect } from 'react-redux';
import { setOffersList } from '../../../store/actions/dashboardActions';
import { setAuthHeader } from '../../../utils/setAuthHeader';
import SearchBar from '../SearchBar/SearchBar';

// class OffersList extends Component {
    // state = {offers:[]};
class OffersList extends Component {
    constructor(props){
        super(props);
        this.state = {
            offers: [],
            sortCategory: null
        };
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
    // Dac oferty do stanu (może nawet stanu reduxa), jak będa w stanie to można je sortować
    // rodzaj posortowania można by zachowywać w stanie
    sortByCategoryAsc(cat){
        if(cat === "city" || cat === "country" || cat === "title" || cat === "createdAt" || cat === "expires" || cat === "status" || cat === "paygrade"){
            const sortedOffers = [...this.state.offers.data];
            sortedOffers.sort((a,b) => {
                if(a.cat < b.cat){
                    return -1;
                }else if (a.cat > b.cat){
                    return 1;
                }else{
                    return 0;
                }
            })
            this.setState({offers: sortedOffers})
        }
    }
    sortByCategoryDesc(cat){
        if(cat === "city" || cat === "country" || cat === "title" || cat === "createdAt" || cat === "expires" || cat === "status" || cat === "paygrade"){
            const sortedOffers = [...this.state.offers.data];
            sortedOffers.sort((a,b) => {
                if(a.cat < b.cat){
                    return 1;
                }else if (a.cat > b.cat){
                    return -1;
                }else{
                    return 0;
                }
            })
            this.setState({offers: sortedOffers})
        }
    } //can make it more reusable function with input being a field to sort by
    
    componentDidMount(){
        this.fetchOffers()
    };

    render(){

        const list = this.state.offers.map(offer => <SingleOffer offer={offer} key={offer._id} />);
        return (
            list.length === 0 ? (
                <React.Fragment>
                    <button onClick={this.fetchOffers} className="offers-list__button">Pobierz oferty</button>
                    <p>No offers.</p>
                </React.Fragment>
            ) : (
                <React.Fragment>
                    {/* <button onClick={this.fetchOffers}>Pobierz oferty</button> */}
                    <SearchBar />
                    <ul className="offers-list">
                        {list}
                    </ul>
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