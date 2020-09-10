import React from 'react';
import { Link } from 'react-router-dom';

import Login from '../Login/Login';
import Register from '../Login/Register';

const Home = () => {
    const link = localStorage.getItem('token') ? <button><Link to="/app">Go to Dashboard</Link></button> : null;

    return (
        <React.Fragment>
            {link}
            <h1>Home</h1>
            <Login />
            <Register />
        </React.Fragment>
    )
}

export default Home;