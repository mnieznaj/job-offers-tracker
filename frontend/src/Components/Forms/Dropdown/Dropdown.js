import React from 'react';
// import arrow from './arrow.svg';
import './Dropdown.css';

import statusList from "./statusList";

class Dropdown extends React.Component {
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
    setHeaderTitle(value){
        this.props.handler("status", value);
        this.toggleList();
    }
    render(){
        const list = statusList.map(item => {
            if(item === this.props.status){
                return <li className="dropdown__list-item dropdown__list-item--active" key={this.props.keyId+"-"+item} onClick={() => this.setHeaderTitle(item)}>{item}</li>
            }else{
                return <li className="dropdown__list-item" key={this.props.keyId+"-"+item} onClick={() => this.setHeaderTitle(item)}>{item}</li>
            }
        });
        return(
            <div className={`${this.props.clss} dropdown`}>
                <div className="dropdown__header" onClick={()=> this.toggleList()}>
                    <div className="dropdown__header-title" >
                        <span className="dropdown__header-title-text">
                            {this.props.status}
                        </span>
                        <button className="dropdown__header-title-button" type="button">
                            <img src="/icons/arrow.svg" alt="arrow icon" className={"dropdown_arrow-icon " + (this.state.listOpen ? "rotate-180" : null)}/>
                        </button>
                    </div>
                </div>
                <ul className={"dropdown__list " + (this.state.listOpen ? null : "hide-element")}>
                    {list}
                </ul>
            </div>
        )
    }
}
export default Dropdown;