import React from 'react';
import Countries from '../countries.json';
import './Dropdown.css';
import './DropdownCurrency.css';
import arrow from './arrow.svg';

class Dropdown extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          listOpen: false,
          itemsList: Countries
        }
        this.toggleList = this.toggleList.bind(this)
    }
      
    toggleList(){
        this.setState(prevState => ({
          listOpen: !prevState.listOpen
        }))
    }
    setListItems(){
        const list = this.state.itemsList.map((item, index) => {
            return <li key={"currency" + index} className="dropdown__list-item " onClick={() => this.setActiveCurrency("currency", item.currencyCode)}>{item.currencyCode}</li>
        })
        return list;
    }
    setActiveCurrency(key, value){
        this.props.handler(key, value);
        this.toggleList();
    }

    render(){
        return(
            <div className={`dropdown`}>
                <div className="dropdown__header">
                    <div className="dropdown__header-title" >
                        <input value={this.props.value} name="paygrade" className="dropdown__header-title-text currency-input" onChange={this.props.paygradeHandler} placeholder={this.props.paygrade}/>
                        <button className="dropdown__header-title-button currency-list-btn" type="button" onClick={this.toggleList}>
                            {this.props.currency !== "" ? this.props.currency : <img src={arrow} alt=""/>}
                        </button>
                    </div>
                </div>
                <ul className={"dropdown__list dropdown-currency__list " + (this.state.listOpen ? null : "hide-element")}>
                    {this.setListItems()}
                </ul>
            </div>
        )
    }
}

export default Dropdown;