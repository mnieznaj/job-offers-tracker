import React from 'react';
import arrow from './arrow.svg';
import './Dropdown.css';

class Dropdown extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          listOpen: false,
          headerTitle: this.props.title,
          itemsList: [
              "none",
              "applied",
              "rejected",
              "succeded"
          ]
        }
    }
    toggleList(){
        this.setState(prevState => ({
          listOpen: !prevState.listOpen
        }))
    }
    setListItems(){
        const list = this.state.itemsList.map(item => {
            if(item === this.state.headerTitle){
                return <li className="dropdown__list-item dropdown__list-item--active" key={this.props.keyId+"-"+item} onClick={() => this.setHeaderTitle(item)}>{item}</li>
            }else{
                return <li className="dropdown__list-item" key={this.props.keyId+"-"+item} onClick={() => this.setHeaderTitle(item)}>{item}</li>
            }
        })
        return list;
    }
    setHeaderTitle(input){
        this.setState({
            headerTitle: input
        });
        this.props.status(input);
        this.toggleList();
    }

    render(){
        return(
            <div className={`${this.props.clss} dropdown`}>
                <div className="dropdown__header" onClick={()=> this.toggleList()}>
                    <div className="dropdown__header-title" >
                        <span className="dropdown__header-title-text">
                            {this.state.headerTitle}
                        </span>
                        <button className="dropdown__header-title-button" type="button">
                            <img src={arrow} alt="arrow icon" className={this.state.listOpen ? "rotate-180" : ""}/>
                        </button>
                    </div>
                </div>
                <ul className={"dropdown__list " + (this.state.listOpen ? null : "hide-element")}>
                    {this.setListItems()}
                </ul>
            </div>
        )
    }
}

export default Dropdown;