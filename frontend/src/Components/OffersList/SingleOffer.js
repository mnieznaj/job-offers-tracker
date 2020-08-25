import React from 'react';

const SingleOffer = (props) => {
    const data = props.offer;

    const deleteOfferHandler = () => {
        // event.preventDefault();
        const id = data._id;
        document.getElementById(id).remove();
        
        fetch(`/delete-offer/${id}`, {
            method:'DELETE',
            mode: 'cors',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({id : data._id})
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.log(err));
    }

    return(
        <tr id={data._id}>
            <td>{data.title}</td>
            <td><a href={data.link} rel="noopener noreferrer" target="_blank">Go to the offer</a></td>
            <td>{data.company}</td>
            <td>{data.country}</td>
            <td>{data.city}</td>
            <td>{data.field}</td>
            <td>{data.paygrade}</td>
            <td>{data.favorite}</td>
            <td>{data.applied}</td>
            <td>{data.description}</td>
            <td>{data.stage1}</td>
            <td>{data.stage2}</td>
            <td>{data.gotTheJob}</td>
            <td onClick={deleteOfferHandler}>x</td>
        </tr>
    )
}

export default SingleOffer;