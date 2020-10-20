import React from 'react';
import {ReactComponent as Heart} from "./heart-icon.svg";
import {ReactComponent as FilledHeart} from "./filled-heart-icon.svg";

const RenderHearts = props => {
    let heartsList = [];
    for(let i = 0; i < 5; i++){
        if(i < (isNaN(props.heartsNo) ? 0 : props.heartsNo)){
            heartsList.push(<FilledHeart key={"heart-" + i} onClick={props.handler ? () => props.handler("favRating", i + 1) : null}/>)
        }else{
            heartsList.push(<Heart key={"heart-" + i} onClick={props.handler ? () => props.handler("favRating", i + 1) : null}/>)
        }
    }
    return (
        <React.Fragment>
            {heartsList}
        </React.Fragment>
    )
}

export default RenderHearts;