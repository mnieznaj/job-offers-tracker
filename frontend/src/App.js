import React from 'react';
import { Route, Switch, useRouteMatch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
import OfferList from './Components/OffersList/OffersList';
import OfferForm from './Components/Forms/OfferForm/OfferForm';
import Nav from './Components/Nav/Nav';
import Profile from './Components/Profile/Profile';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';

const App = (props) => {
    let { path } = useRouteMatch();

    return (
      <div className="App">
        {props.token ? <Redirect to="/app/dashboard"/> : <Redirect to="/"/>}
        <ScrollToTop />
        <Nav />
        <div className="container" style={{display : "flex", flexDirection : "column"}}>
            <Switch>
                <Route path={`${path}/add`} exact component={OfferForm} />
                <Route path={`${path}/profile`} component={Profile} />
                <Route path={`${path}/dashboard/edit-offer`} exact>
                  <OfferForm id={props.offerId}/>
                </Route>
                <Route path={`${path}/dashboard`} exact component={OfferList} />
                <Route path='/app/404' render={() => <h2 style={{margin: "100px 0px"}}>404 - page not found</h2>} />
                <Redirect from='/app' to='/app/dashboard' />
                <Redirect from='*' to='/app/404' />
            </Switch>
        </div>
      </div>
    );
}

const mapStateToProps = state => {
  return {
      offerId: state.currentOfferId,
      token: state.userToken
  }
}

export default connect(mapStateToProps)(App);