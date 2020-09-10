import React from 'react';
import { Link, NavLink, useRouteMatch } from 'react-router-dom';

import { connect } from 'react-redux';
import { deleteUserToken } from '../../../store/actions/dashboardActions';

const Nav = (props) => {

    // let { path, url } = useRouteMatch();

    const logout = () => {
        localStorage.removeItem("token");
        props.removeTokenFromState();
    }

    return(
        <nav>
            <Link to={`/app`}><img src="/"/></Link>
            <ul>
                <NavLink to={`/app`}>Add</NavLink>
                <NavLink to={`/app/dashboard`}>Dashboard</NavLink>
                <NavLink to={`/app/profile`}>Profile</NavLink>
                <Link to={``} >Logout</Link>
            </ul>
        </nav>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeTokenFromState : () => dispatch(deleteUserToken)
    }
}

export default connect(null, mapDispatchToProps)(Nav);