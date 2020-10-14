import React from 'react';
import { connect } from 'react-redux';

import { setOffersFilter } from '../../../store/actions/dashboardActions';
import { ReactComponent as Arrow } from './arrow.svg';

import './FilterDropdown.css';

class FilterDropdown extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            listOpen: false
        }
    }
    toggleList(){
        this.setState(prevState => ({
          listOpen: !prevState.listOpen
        }))
    }

    render(){
        return(
            <div className={`${this.props.cls} filter-dropdown`}>
                <div className="filter-dropdown__header" onClick={()=> this.toggleList()}>
                    <div className="filter-dropdown__header-title" >
                        <span className="filter-dropdown__header-title-text">
                            sort
                            <button className={"filter-dropdown__header-title-btn " + (this.state.listOpen ? "filter-dropdown__header-title-btn--rotate": "")} type="button"><Arrow /></button>
                        </span>
                    </div>
                </div>
                <ul className={"filter-dropdown__list " + (this.state.listOpen ? "" : "hide-element")}>
                    <li className="filter-dropdown__list-item" onClick={() => {this.props.setFilter("title"); this.props.sortBy("title"); this.toggleList()}}>
                        Title
                    </li>
                    <li className="filter-dropdown__list-item" onClick={() => {this.props.setFilter("createdAt"); this.props.sortBy("createdAt"); this.toggleList()}}>
                        Date
                    </li>
                    <li className="filter-dropdown__list-item" onClick={() => {this.props.setFilter("paygrade"); this.props.sortBy("paygrade"); this.toggleList()}}>
                        Paygrade
                    </li>
                    <li className="filter-dropdown__list-item" onClick={() => {this.props.setFilter("status"); this.props.sortBy("status"); this.toggleList()}}>
                        Status
                    </li>
                </ul>
            </div>
        )
    }
        
}

const mapDispatchToProps = dispatch => {
    return {
        setFilter: filter => dispatch(setOffersFilter(filter))
    }
}

export default connect(null, mapDispatchToProps)(FilterDropdown);