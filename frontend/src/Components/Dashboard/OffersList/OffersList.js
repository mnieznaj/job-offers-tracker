import React, { Component } from 'react';
import SingleOffer from './SingleOffer';
import './OffersList.css';

import { connect } from 'react-redux';
import { setOffersList } from '../../../store/actions/dashboardActions';
import { setAuthHeader } from '../../../utils/setAuthHeader';
import SearchBar from '../SearchBar/SearchBar';
import loadingSpinner from '../../Loading/loading-animation.gif';


class OffersList extends Component {
    constructor(props){
        super(props);
        this.state = {
            offers: [],
            sortCategory: this.props.offersFilter,
            isLoading: true
        };
        this.sortByCategoryAsc = this.sortByCategoryAsc.bind(this)
    }

    sortByCategoryAsc(cat){
        if(cat === "title" || cat === "createdAt" || cat === "status" || cat === "paygrade"){
            const sortedOffers = [...this.state.offers];
            // console.log("nieposortowane oferty: " + sortedOffers.map(offer => offer.title));
            sortedOffers.sort((a,b) => {
                if(a[cat] < b[cat]){
                    return -1;
                }else if (a[cat] > b[cat]){
                    return 1;
                }else{
                    return 0;
                }
            });
            // console.log("posortowane oferty: " + sortedOffers.map(offer => offer.title));
            this.setState({offers: sortedOffers})
        }
    }
    
    componentDidMount(){
        const token= localStorage.getItem("token");
        fetch('/app/get-offer-list', {
            method: "GET",
            headers: setAuthHeader(token)})
            .then(response => response.json())
            .then(data => {
                this.props.setOffersList(data);
                this.setState({isLoading: false, offers: data});
                return data
            })
            .catch(err => console.log(err));
    };
    
    render(){
        this.sortByCategoryAsc(this.state.sortCategory);
        // console.log( this.state.offers );
        const list = this.state.offers.map(offer => <SingleOffer offer={offer} key={offer._id} />);
        return (
            // this.state.isloading ? <img src={loadingSpinner} alt="loading animation" className="offers-list-loading"/> 
            // : 
            list.length === 0 ? (
                <React.Fragment>
                    {/* <p className="offers-list__no-offers">No offers.</p> */}
                    <img src={loadingSpinner} alt="loading animation" className="offers-list-loading"/>
                </React.Fragment>
            ) 
            : (
                <React.Fragment>
                    <SearchBar sortBy={this.sortByCategoryAsc}/>
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
        offersList: state.offersList,
        sortingFilter: state.offersFilter
    }
}
const mapDispatchToProps = dispatch => {
    return {
        setOffersList: (offers) => dispatch(setOffersList(offers))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OffersList);