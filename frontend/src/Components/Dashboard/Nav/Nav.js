import React from 'react';
import { Link, NavLink, useRouteMatch } from 'react-router-dom';

import { ReactComponent as Logo } from './icons/jot-logo.svg';
import { ReactComponent as AddIcon } from './icons/plus-icon.svg';
import { ReactComponent as ProfileIcon } from './icons/profile-icon.svg';
import { ReactComponent as SearchIcon } from './icons/search-icon.svg';

import './Nav.css';

const Nav = () => {
    let { url } = useRouteMatch();

    return(
        <nav className="nav-bar">
            <span className="nav-bar-width">
                <Link to={`${url}`}><Logo /></Link>
                <ul className="nav-bar__list">
                    <NavLink className="nav-bar__list-link" activeStyle={{color:"#131C48"}} to={`${url}/add`} /*onClick={() => props.displayAddOffer(true)}*/>
                        <li className="nav-bar__list-item"><AddIcon/> <span>add</span></li>
                    </NavLink>
                    <NavLink className="nav-bar__list-link" activeStyle={{color:"#131C48"}} to={`${url}/dashboard`}>
                        <li className="nav-bar__list-item"><SearchIcon/> <span>search</span></li>
                    </NavLink>
                    <NavLink className="nav-bar__list-link" activeStyle={{color:"#131C48"}} to={`${url}/profile`}>
                        <li className="nav-bar__list-item"><ProfileIcon/> <span>profile</span></li>
                    </NavLink>
                </ul>
            </span>
        </nav>
    )
}

export default Nav;