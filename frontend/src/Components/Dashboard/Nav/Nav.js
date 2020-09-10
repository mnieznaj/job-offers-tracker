import React from 'react';
import { Link, NavLink, useRouteMatch } from 'react-router-dom';

import { connect } from 'react-redux';
import { deleteUserToken } from '../../../store/actions/dashboardActions';

const Nav = (props) => {

    let { path, url } = useRouteMatch();

    // const logout = () => {
    //     localStorage.removeItem("token");
    //     props.removeTokenFromState();
    // }

    return(
        <nav>
            <Link to={`${url}/app`}><img src="/"/></Link>
            <ul>
                <NavLink to={`${url}/app`}>Add</NavLink>
                <NavLink to={`${url}/app/dashboard`}>Dashboard</NavLink>
                <NavLink to={`${url}/app/profile`}>Profile</NavLink>
                <Link to={`${url}/`} >Logout</Link>
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