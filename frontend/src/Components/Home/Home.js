import React from 'react';
import { Redirect } from 'react-router-dom';

import Login from '../Login/Login';
import Register from '../Login/Register';

const Home = (props) => {

    return (
        <React.Fragment>
            {localStorage.getItem('token') ? <Redirect to="/app/"/> : null}
            <h1>Home</h1>
            <Login />
            <Register />
        </React.Fragment>
    )
}

export default Home;