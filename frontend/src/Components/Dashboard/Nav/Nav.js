import React from 'react';
import { Link, NavLink, useRouteMatch } from 'react-router-dom';

import { connect } from 'react-redux';
import { displayAddOfferForm } from '../../../store/actions/dashboardActions';

import { ReactComponent as Logo } from './icons/jot-logo.svg';
import { ReactComponent as AddIcon } from './icons/plus-icon.svg';
import { ReactComponent as ProfileIcon } from './icons/profile-icon.svg';
import { ReactComponent as SearchIcon } from './icons/search-icon.svg';

import './Nav.css';


const Nav = (props) => {
    let { url } = useRouteMatch();

    const logout = () => {
        localStorage.removeItem("token");
        window.location.reload();
    }

    return(
        <nav className="nav-bar">
            <Link to={`${url}`}><Logo /></Link>
            <ul className="nav-bar__list">
                <NavLink className="nav-bar__list-item" to={`${url}`} onClick={() => props.displayAddOffer(true)}>
                    <AddIcon/>
                </NavLink>
                <NavLink className="nav-bar__list-item" to={`${url}/dashboard`}>
                    <SearchIcon/>
                </NavLink>
                <NavLink className="nav-bar__list-item" to={`${url}/profile`}>
                    <ProfileIcon/>
                </NavLink>
                <button onClick={logout}>Logout</button>
            </ul>
        </nav>
    )
}
const mapDispatchToProps = dispatch => {
    return {
        displayAddOffer: (show) => dispatch(displayAddOfferForm(show))
    }
}

export default connect(null, mapDispatchToProps)(Nav);