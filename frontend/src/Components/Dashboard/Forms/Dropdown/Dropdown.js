import React from 'react';
import './Dropdown.css';

class Dropdown extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          listOpen: false,
          headerTitle: this.props.title,
          itemsList: [
              "None",
              "Appllied",
              "Rejected",
              "Succeded"
          ]
        }
    }
    handleClickOutside(){
        this.setState({
          listOpen: false
        })
    }
      
    toggleList(){
        this.setState(prevState => ({
          listOpen: !prevState.listOpen
        }))
    }
    setListItems(){
        const list = this.state.itemsList.map(item => {
            if(item === this.state.headerTitle){
                return <li className="dropdown__list-item dropdown__list-item--active" onClick={() => this.setHeaderTitle(item)}>{item}</li>
            }else{
                return <li className="dropdown__list-item" onClick={() => this.setHeaderTitle(item)}>{item}</li>
            }
        })
        return list;
    }
    setHeaderTitle(input){
        this.setState({
            headerTitle: input
          })
    } //dodać do apki
    // dodać synchro z bazą danych

    render(){
        return(
            <div className={`${this.props.clss} dropdown`}>
                <div className="dropdown__header" onClick={()=> this.toggleList()}>
                    <div className="dropdown__header-title" >
                        <span className="dropdown__header-title-text">
                            {this.state.headerTitle}
                        </span>
                        <button className="dropdown__header-title-button"></button>
                    </div>
                </div>
                <ul className={"dropdown__list " + (this.state.listOpen ? null : "hide-element")}>
                    <li className="dropdown__list-item">None</li>
                    <li className="dropdown__list-item">Appllied</li>
                    <li className="dropdown__list-item">Rejected</li>
                    <li className="dropdown__list-item">Succeded</li>
                </ul>
            </div>
        )
    }
}

export default Dropdown;