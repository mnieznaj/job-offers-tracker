import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, useRouteMatch, NavLink, Link, useParams } from 'react-router-dom';

import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import AddOfferForm from './Components/Dashboard/AddOfferForm/AddOfferForm';
import EditOfferForm from './Components/Dashboard/EditOfferForm/EditOfferForm';
import Nav from './Components/Dashboard/Nav/Nav';
import Profile from './Components/Dashboard/Profile/Profile';

const App = (props) => {


  // useEffect((props) => {
  //   fetch('/get-offer-list')
  //       .then(response => response.json())
  //       .then(data => {
  //           console.log("data from app.js fetch" + data);
  //           props.setOffersList(data);
  //           // props.offersList = data;
  //           // offers = data;
  //       })
  //       .catch(err => console.log(err));
  // },[]);

    let form;
    if(props.displayAddOffer){
      form = <AddOfferForm />;
    } else if (props.displayUpdateOffer){
      form = <EditOfferForm />;
    } else {
      form = null;
    }

    let { path, url } = useRouteMatch();
    console.log("Path: " + path + ". url: " + url);

    return (
      <div className="App">
        
        {form}
        <div style={{display : "flex", flexDirection : "column"}}>
          <nav>
              <Link to={`${url}/app`}><img src="/"/></Link>
              <ul>
                  <NavLink to={`${url}/app`}>Add</NavLink>
                  <NavLink to={`${url}/app/dashboard`}>Dashboard</NavLink>
                  <NavLink to={`${url}/app/profile`}>Profile</NavLink>
                  <Link to={`${url}/`} >Logout</Link>
              </ul>
          </nav>
            <Switch>
                <Route path={`${path}/profile`} component={Profile} />
                <Route path={`${path}/dashboard`} component={Dashboard} />
                <Route path={`${path}`} component={Dashboard} />
            </Switch>
        </div>
      </div>
    );
  // }
}

const mapStateToProps = state => {
  return {
      displayAddOffer: state.displayAddOffer,
      displayUpdateOffer: state.displayUpdateOffer
  }
}

export default connect(mapStateToProps)(App);