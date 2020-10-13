import React, { Component } from 'react';
import SingleOffer from './SingleOffer';
import './OffersList.css';

import { connect } from 'react-redux';
import { setOffersList } from '../../../store/actions/dashboardActions';
import { setAuthHeader } from '../../../utils/setAuthHeader';
import SearchBar from '../SearchBar/SearchBar';

class OffersList extends Component {
    constructor(props){
        super(props);
        this.state = {
            offers: [],
            sortCategory: this.props.offersFilter
        };
    }
    fetchOffers = () => {
        const token= localStorage.getItem("token");
        fetch('/app/get-offer-list', {
            method: "GET",
            headers: setAuthHeader(token)})
            .then(response => response.json())
            .then(data => {
                console.log("data w fetchu:" + data);
                this.setState({offers: data});
                this.props.setOffersList(data);
                return data
            })
            // .then(data => {
            //         this.setState({offers: this.props.offersList});
            //     })
            .catch(err => console.log(err));
    }

    sortByCategoryAsc(cat){
        if(cat === "title" || cat === "createdAt" || cat === "status" || cat === "paygrade"){
            const sortedOffers = [...this.state.offers];
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
    } //może zmieniać w css order?

    // sortByCategoryDesc(cat){
    //     if(cat === "city" || cat === "country" || cat === "title" || cat === "createdAt" || cat === "expires" || cat === "status" || cat === "paygrade"){
    //         const sortedOffers = [...this.state.offers.data];
    //         sortedOffers.sort((a,b) => {
    //             if(a.cat < b.cat){
    //                 return 1;
    //             }else if (a.cat > b.cat){
    //                 return -1;
    //             }else{
    //                 return 0;
    //             }
    //         })
    //         this.setState({offers: sortedOffers})
    //     }
    // }
    
    componentDidMount(){
        console.log(this.state.sortCategory);
    };
    
    render(){
        console.log("Stan lista ofert: " + this.state.offersList);
        if(this.state.offersList === [] || this.state.offersList === undefined){
            // this.fetchOffers();
            console.log("Stan listy ofert po fetchu: " + this.state.offersList);
        }
            this.sortByCategoryAsc(this.state.sortCategory);

        const list = this.state.offers.map(offer => <SingleOffer offer={offer} key={offer._id} />);
        return (
            list.length === 0 ? (
                <React.Fragment>
                    <button onClick={this.fetchOffers} className="offers-list__button">Pobierz oferty</button>
                    <p>No offers.</p>
                </React.Fragment>
            ) : (
                <React.Fragment>
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