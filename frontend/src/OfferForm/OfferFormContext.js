import React from 'react';

export const FormUse = React.createContext({
    addOffer: {
        httpRequest: submitFormHandler = (event, data) => {
            event.preventDefault();
            const data = getFormData();
            console.log(data);
            fetch("/add-offer", {
                method:'POST',
                mode: 'cors',
                headers: {'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "cors"},
                body: JSON.stringify(data)
            })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(err => console.log(err));
        }
    },
    editOffer: {
        httpRequest: editOfferHandler = (data) => {
            const id = data._id;
            document.getElementById(id).remove();
            
            fetch(`/edit-offer/${id}`, {
                method:'PUT',
                mode: 'cors',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({...data})
            })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(err => console.log(err));
        }
    }
  });