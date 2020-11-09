import { setAuthHeader } from '../../utils/setAuthHeader';
import { requestSucceded } from '../../utils/requestSucceded';

export default function offerFormHandler(values, token, id){
    let request, method;
    if(id === undefined){
        request = "/app/add-offer";
        method = "POST"
    } else {
        request = `/app/edit-offer/${id}`;
        method = "PUT"
    }

    fetch(request, {
        method: method,
        mode: 'cors',
        headers: setAuthHeader(token),
        body: JSON.stringify(values)
    })
    .then(response => response.json())
    .then(response => {
        if(response.error === false){
            requestSucceded(2900);
            setTimeout(() => {
                window.location= window.origin + "/app";
            }, 2900)
        }
        return response
    })
    .then(data => console.log(data))
    .catch(err => console.log(err));
};