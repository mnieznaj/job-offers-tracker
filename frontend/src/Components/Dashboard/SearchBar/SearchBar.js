import React from 'react';
import FilterDropdown from './FilterDropdown';
import './SearchBar.css';

const SearchBar = (props) => {
    return(
        <form className="search-bar">
            <input className="search-bar__input" type="text" id="search-bar"/>
            <FilterDropdown cls="search-bar__sorter" />
        </form>
    )
}

export default SearchBar;