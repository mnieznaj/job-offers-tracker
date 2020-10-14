import React from 'react';
import Countries from '../countries.json';
import './Dropdown.css';
import './DropdownCountry.css';
import arrow from './arrow.svg';

class DropdownCountry extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          listOpen: false,
          itemsList: Countries
        }
    }
      
    toggleList(){
        this.setState(prevState => ({
          listOpen: !prevState.listOpen
        }))
    }
    setListItems(){
        const list = this.state.itemsList.map((item, index) => {
            return <li key={"country-" + index} className="dropdown__list-item " onClick={() => this.setActiveCountry(item.countryName)}>{item.countryName}</li>
        })
        return list;
    }
    
    setActiveCountry(country){
        this.props.setCountry(country);
        this.toggleList();
    }

    render(){
        return(
            <div className={`dropdown`}>
                <div className="dropdown__header">
                    <div className="dropdown__header-title" >
                        {/* <input id="country" name="country" className="dropdown__header-title-text country-input" onChange={this.setHeaderTitle} value={this.state.headerTitle}/> */}
                        <span id="country" name="country" className="dropdown__header-title-text">
                            {this.props.children}
                        </span>
                        <button className="dropdown__header-title-button country-list-btn" type="button" onClick={()=> this.toggleList()}>
                            <img src={arrow} alt="arrow icon"/>
                        </button>
                    </div>
                </div>
                <ul className={"dropdown__list dropdown-country__list " + (this.state.listOpen ? null : "hide-element")}>
                    {this.setListItems()}
                </ul>
            </div>
        )
    }
}

export default DropdownCountry;