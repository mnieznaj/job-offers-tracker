import React from 'react';
// import Dropdown from '../Forms/Dropdown/DropdownSinglePageStatus';
import editIcon from './edit-icon.svg';
import closeIcon from './close-icon.svg'

import { Link, useRouteMatch } from 'react-router-dom';
import { connect } from 'react-redux';
import { currentOfferId } from '../../store/actions/dashboardActions';
import { setAuthHeader } from "../../utils/setAuthHeader"; 
import './SingleOffer.css';

import RenderHearts from '../Forms/RenderHearts/RenderHearts';

import {ReactComponent as LinkIcon} from "./link-icon.svg";

const SingleOffer = (props) => {
    const data = props.offer;
    let { url } = useRouteMatch();

    const deleteOfferHandler = () => {
        const id = data._id;
        document.getElementById(id).remove();
        
        const token = props.token;
        fetch(`/app/delete-offer/${id}`, {
            method:'DELETE',
            mode: 'cors',
            headers: setAuthHeader(token),
            body: JSON.stringify({id : data._id})
        })
        .then(response => response.json())
        .then(data => console.log("offer deleted" + data))
        .catch(err => console.log(err));
    }

    return(
        <li className="offer-list_item">
            <div id={data._id} className="offer">
                <div className="offer-header">
                    <Link to={`${url}/edit-offer`}><button className="offer-header__button" onClick={() => {
                        props.setOfferId(data._id)
                    }}>
                        <img src={editIcon} alt="edit icon"/>
                    </button></Link>
                    <button className="offer-header__button" onClick={deleteOfferHandler}><img src={closeIcon} alt="close icon" /></button>
                </div>
                <div className="offer-body">
                    <span className="offer-body__header-section">
                        <h2 className="offer-body__header-section--title">{data.title}</h2>
                        <span className="offer-body__header-section--rating heart-icons">
                            <RenderHearts heartsNo={data.favRating} />
                        </span>
                        <div className="offer-body__header-section-status">{data.status}</div>
                    </span>
                    <span className="offer-body__section-wrap">
                        <span className="offer-body__location-section">
                            <h3 className="offer-body__location-section--company">{data.company}</h3>
                            <p className="offer-body__location-section--paygrade">{data.paygrade} {data.currency}</p>
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
        currentOfferId: state.currentOfferId,
        token: state.userToken
    }
}
const mapDispatchToProps = dispatch => {
    return {
        setOfferId: (id) => dispatch(currentOfferId(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleOffer);