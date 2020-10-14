import React from 'react';
import { Route, Switch, useRouteMatch, Redirect } from 'react-router-dom';

import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import AddOfferForm from './Components/Dashboard/Forms/AddOfferForm/AddOfferForm';
import EditOfferForm from './Components/Dashboard/Forms/EditOfferForm/EditOfferForm';
import Nav from './Components/Dashboard/Nav/Nav';
import Profile from './Components/Dashboard/Profile/Profile';

const App = () => {
    let { path } = useRouteMatch();

    return (
      <div className="App">
        {!localStorage.getItem('token') ? <Redirect to="/"/> : <Redirect to="/app/dashboard"/>}
        <Nav />
        <div className="container" style={{display : "flex", flexDirection : "column"}}>
            <Switch>
                <Route path={`${path}/profile`} component={Profile} />
                <Route path={`${path}/dashboard/edit-offer`} exact>
                  <EditOfferForm/>
                </Route>
                <Route path={`${path}/dashboard`} exact component={Dashboard} />
                <Route path={`${path}/add`} exact component={AddOfferForm} />
                {/* <Route path={`${path}`} exact component={Dashboard} /> */}
                <Route path='/app/404' render={() => <h2 style={{margin: "100px 0px"}}>404 - page not found</h2>} />
                <Redirect from='/app' to='/app/dashboard' />
                <Redirect from='*' to='/app/404' />
            </Switch>
        </div>
      </div>
    );
}

export default App;