import React, {Component} from 'react';
import './App.css';
import OffersList from './Components/OffersList/OffersList';
import AddOfferForm from './Components/AddOfferForm/AddOfferForm';

class App extends Component {
  state = {
    showAddOffer : false
  }
  
  render(){
    const showAddOfferHandler = () => {
      const showAddOffer = !this.state.showAddOffer;
      this.setState({showAddOffer: showAddOffer});
    }
    return (
      <div className="App">
        {this.state.showAddOffer ? <AddOfferForm hide={showAddOfferHandler}/> : null}
        <button onClick={showAddOfferHandler}>Add new offer</button>
  
        <OffersList />
      </div>
    );
  }
}

export default App;
