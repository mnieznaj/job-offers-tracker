import React from 'react';

const SingleOffer = (props) => {
    const data = props.offer;

    const deleteOfferHandler = () => {
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
            <td>{data.favorite ? "true" : "false"}</td>
            <td>{data.applied ? "true" : "false"}</td>
            <td>{data.description}</td>
            <td>{data.stage1 ? "true" : "false"}</td>
            <td>{data.stage2 ? "true" : "false"}</td>
            <td>{data.gotTheJob ? "true" : "false"}</td>
            <td onClick={deleteOfferHandler}>x</td>
            <td onClick={() => {
                props.offerFormHandler("edit");
                alert("click edit");
                props.setFormType("edit");
                alert("click id");
                console.log("click id: "+ data._id);
                props.setId(data._id)
                }}>edit</td>
        </tr>
    )
}

export default SingleOffer;