import React, {Component} from 'react';
import './Dashboard.css';
import OffersList from './OffersList/OffersList';
import AddOfferForm from './AddOfferForm/AddOfferForm';
import EditOfferForm from './EditOfferForm/EditOfferForm';

class Dashboard extends Component{
    state = {
        showAddOffer : false,
        formType: "none",
        offerId: "none"
      }
    
      setId = (id) => {
        this.setState({offerId: id});
      }
    
      offerFormHandler = (type) => {
        const showAddOffer = !this.state.showAddOffer;
        this.setState({showAddOffer: showAddOffer});
        this.setFormType(type);
      }
    
      setFormType = (type) => {
        if(type === "add"){
          const formType = "add";
          this.setState({formType: formType});
        }else if(type === "edit"){
          const formType = "edit";
          this.setState({formType: formType});
        }else{
          const formType = "none";
          this.setState({formType: formType});
        }
      }
      render(){
    
        
        // switch for add, edit and default that is not showng at all
        // or Offer form state that changes based on clicks with state passed
    
        let form;
        if(this.state.showAddOffer){
          form = (this.state.formType === "add" ? <AddOfferForm hide={this.offerFormHandler} type={this.state.formType}/> : this.state.formType === "edit" ? <EditOfferForm hide={this.offerFormHandler} type={this.state.formType} id={this.state.offerId}/> : alert("smth went wrong please refresh the page"))
        }
    
        return (
          <div className="App">
            {form}
            {/* {this.state.showAddOffer ? <AddOfferForm hide={offerFormHandler} type={this.state.formType}/> : null} */}
            <button onClick={() => this.offerFormHandler("add")}>Add new offer</button>
      
            <OffersList offerFormHandler={this.offerFormHandler} setFormType={this.setFormType} setId={this.setId} />
            <span>{this.state.showAddOffer.toString()}</span><br/>
            <span>{this.state.formType}</span><br/>
            <span>{this.state.offerId}</span>
          </div>
        );
    }
}

export default Dashboard;