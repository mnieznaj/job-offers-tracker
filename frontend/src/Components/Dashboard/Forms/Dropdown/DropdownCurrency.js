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
          headerTitle: 0,
          activeCurrency: "",
          itemsList: Countries
        }
        this.setHeaderTitle = this.setHeaderTitle.bind(this)
    }
      
    toggleList(){
        this.setState(prevState => ({
          listOpen: !prevState.listOpen
        }))
    }
    setListItems(){
        const list = this.state.itemsList.map((item, index) => {
            return <li key={"currency" + index} className="dropdown__list-item " onClick={() => this.setActiveCurrency(item.currencyCode)}>{item.currencyCode}</li>
        })
        return list;
    }
    setActiveCurrency(input){
        this.setState({
            activeCurrency: input
        });
        this.props.currency(input);
        this.toggleList();
    }
    setHeaderTitle(input){
        this.setState({
            headerTitle: input.target.value
          })
    }

    render(){
        return(
            <div className={`dropdown`}>
                <div className="dropdown__header">
                    <div className="dropdown__header-title" >
                        <input id="paygrade" name="paygrade" className="dropdown__header-title-text currency-input" onChange={this.setHeaderTitle} placeholder="0"/>
                        <button className="dropdown__header-title-button currency-list-btn" type="button" onClick={()=> this.toggleList()}>
                            {this.state.activeCurrency !== "" ? this.state.activeCurrency : <img src={arrow} alt=""/>}
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