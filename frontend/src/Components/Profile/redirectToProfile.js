import { requestSucceded } from '../../utils/requestSucceded';

function redirectToProfile(){
    requestSucceded(2900);
    setTimeout(() => {
        this.setState({redirect: true});
    }, 2900)
}

export default redirectToProfile;