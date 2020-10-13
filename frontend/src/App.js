import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, useRouteMatch, Redirect } from 'react-router-dom';

import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import AddOfferForm from './Components/Dashboard/Forms/AddOfferForm/AddOfferForm';
import EditOfferForm from './Components/Dashboard/Forms/EditOfferForm/EditOfferForm';
import Nav from './Components/Dashboard/Nav/Nav';
import Profile from './Components/Dashboard/Profile/Profile';

const App = (props) => {

    // let form;
    // if(props.displayAddOffer){
    //   form = <AddOfferForm />;
    // } else if (props.displayUpdateOffer){
    //   form = <EditOfferForm />;
    // } else {
    //   form = null;
    // }

    let { path } = useRouteMatch();

    return (
      <div className="App">
        {!localStorage.getItem('token') ? <Redirect to="/"/> : null}
        {/* {form} */}
        <Nav />
        <div className="container" style={{display : "flex", flexDirection : "column"}}>
            <Switch>
                <Route path={`${path}/profile`} component={Profile} />
                <Route path={`${path}/dashboard/edit-offer`}>
                  <EditOfferForm/>
                </Route>
                <Route path={`${path}/dashboard`} component={Dashboard} />
                <Route path={`${path}/add`} component={AddOfferForm} />
                <Route path={`${path}`} exact component={Dashboard} />
                {/* Do the redirect to 404 */}
            </Switch>
        </div>
      </div>
    );
}

const mapStateToProps = state => {
  return {
      displayAddOffer: state.displayAddOffer,
      displayUpdateOffer: state.displayUpdateOffer,
      editOfferId: state.currentOfferId
  }
}

export default connect(mapStateToProps)(App);