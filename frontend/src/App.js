import React from 'react';

import {connect} from 'react-redux';

import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import AddOfferForm from './Components/Dashboard/AddOfferForm/AddOfferForm';
import EditOfferForm from './Components/Dashboard/EditOfferForm/EditOfferForm';

// import Register from './Components/Login/Register';
import Login from './Components/Login/Login';

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


    return (
      <div className="App">
        {form}
        <div style={{display : "flex", flexDirection : "row"}}>
          <Login />
          {/* <Register /> */}
        </div>
        <Dashboard />
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