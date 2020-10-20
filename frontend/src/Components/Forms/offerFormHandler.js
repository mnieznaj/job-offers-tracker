import { setAuthHeader } from '../../../utils/setAuthHeader';
import { requestSucceded } from '../../../utils/requestSucceded';

export default function offerFormHandler(event){
    event.preventDefault();
    const data = this.getFormData();
    data.userId = this.props.userId;
    let request, method;
    if(this.id === null){
        request = "/app/add-offer";
        method = "POST"
    } else {
        request = `/app/edit-offer/${this.id}`;
        method = "PUT"
    }

    const token = this.props.token;
    fetch(request, {
        method: method,
        mode: 'cors',
        headers: setAuthHeader(token),
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(response => {
        if(response.error === false){
            requestSucceded(2900);
            setTimeout(() => {
                window.location.href = window.origin + "/app";
            }, 2900)
        }
        return response
    })
    .then(data => console.log(data))
    .catch(err => console.log(err));
};