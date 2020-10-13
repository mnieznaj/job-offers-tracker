import React from 'react';
import Countries from '../countries.json';
import './Dropdown.css';
import './DropdownCountry.css';
import arrow from './arrow.svg';

class Dropdown extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          listOpen: false,
          headerTitle: "none",
          activeCountry: "",
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
        const list = this.state.itemsList.map(item => {
            return <li className="dropdown__list-item " onClick={() => this.setActiveCountry(item.countryName)}>{item.countryName}</li>
        })
        return list;
    }
    setHeaderTitle(country){
        this.setState({
            headerTitle: country
          });
    }
    setActiveCountry(country){
        this.setHeaderTitle(country);
        this.toggleList();
    }

    render(){
        return(
            <div className={`dropdown`}>
                <div className="dropdown__header">
                    <div className="dropdown__header-title" >
                        <input id="country" name="country" className="dropdown__header-title-text country-input" onChange={this.setHeaderTitle} value={this.state.headerTitle}/>
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

export default Dropdown;