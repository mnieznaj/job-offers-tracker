import React from 'react';
import Dropdown from '../Forms/Dropdown/Dropdown';

import { connect } from 'react-redux';
import { currentOfferId, displayUpdateOfferForm } from '../../../store/actions/dashboardActions';
import { setAuthHeader } from "../../../utils/setAuthHeader"; 
import './SingleOffer.css';
import {ReactComponent as Heart} from "./heart-icon.svg";
import {ReactComponent as FilledHeart} from "./filled-heart-icon.svg";
import {ReactComponent as LinkIcon} from "./link-icon.svg";


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
    const renderHearts = () => {
        let heartList = [];
        for(let i = 0; i < 5; i++){
            if(i < data.favRating){
                heartList.push(<FilledHeart />)
            }else{
                heartList.push(<Heart />)
            }
        }
        return heartList;
    }

    return(
        <li className="offer-list_item">
            <div id={data._id} className="offer">
                <div className="offer-header">
                    <button className="offer-header__button" onClick={() => {
                        props.showUpdateOffer(true, data._id);
                        props.setOfferId(data._id)
                    }}>Edit</button>
                    <button className="offer-header__button" onClick={deleteOfferHandler}>X</button>
                </div>
                <div className="offer-body">
                    <span className="offer-body__header-section">
                        <h2 className="offer-body__header-section--title">{data.title}</h2>
                        <span className="offer-body__header-section--rating">
                            {renderHearts()}
                        </span>
                        <Dropdown title={data.status} clss="offer-body__header-section--status"/>
                    </span>
                    <span className="offer-body__section-wrap">
                        <span className="offer-body__location-section">
                            <h3 className="offer-body__location-section--company">{data.company}</h3>
                            <p className="offer-body__location-section--paygrade">{data.paygrade}</p>
                            <p className="offer-body__location-section--location">{`${data.country}, ${data.city}`}</p>
                        </span>
                        <span className="offer-body__link-section">
                            <a href={data.link} rel="noopener noreferrer" target="_blank"><LinkIcon /> Link</a>
                        </span>
                    </span>
                    <span className="offer-body__description-section">
                        <p className="offer-body__description-section--description">{data.description}</p>
                    </span>
                </div>
            </div>
        </li>
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