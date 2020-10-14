import React from 'react';
import FilterDropdown from './FilterDropdown';
import searchIcon from './search_icon.svg';
import './SearchBar.css';

const SearchBar = (props) => {
    const filterResults = () => {
        const search = document.getElementById("search-bar");
        const term = search.value.trim().toLowerCase();
        const results = document.querySelector(".offers-list");
        console.log(results);

        Array.from(results.children)
        .filter((result) => !result.querySelector(".offer-body__header-section--title").textContent.toLowerCase().includes(term))
        .forEach((result) => result.classList.add('filtered'));

        console.log("results filtered" + results);

        Array.from(results.children)
            .filter((result) => {
                console.log(result);
                return result.querySelector(".offer-body__header-section--title").textContent.toLowerCase().includes(term)}
            )
            .forEach((result) => result.classList.remove('filtered'));
    }
    return(
        <form className="search-bar">
            <img src={searchIcon} alt="search icon" className="search-bar__icon"/>
            <input className="search-bar__input" type="text" id="search-bar" onChange={filterResults}/>
            <FilterDropdown cls="search-bar__sorter" sortBy={props.sortBy}/>
        </form>
    )
}

export default SearchBar;