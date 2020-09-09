import * as actionTypes from '../actions/actionTypes';

const initialState = {
    offersList: [],
    displayAddOffer: false,
    displayUpdateOffer: false,
    userId: "5f4e08c7d2ef258e7d34b2de",
    userToken: localStorage.getItem("token") ? localStorage.getItem("token") : null,
    currentOfferId: null
}

const reducer = (state = initialState, action) => {
    switch (action.type){
        case actionTypes.SET_OFFERS_LIST:
            return {
                ...state,
                offersList: action.offers //TERAZ JUŻ CHYBA DZIAŁA RENDEROWANIE PRZEZ REDUXA TRZEBA SPRAWDZIĆ
            };
        case actionTypes.ADD_OFFER:
            return {
                ...state,
                displayAddOffer: action.display
            };
        case actionTypes.UPDATE_OFFER:
            return {
                ...state,
                displayUpdateOffer: action.display,
                currentOfferId: action.id
            };
        // case actionTypes.DELETE_OFFER:
        //     return 0;
        case actionTypes.CURRENT_OFFER_ID:
            return {
                ...state,
                currentOfferId: action.id
            };
        case actionTypes.SET_FORM_TYPE:
            return {
                ...state,
                formType: action.formType
            };
        case actionTypes.SET_USER_TOKEN:
            return {
                ...state,
                userToken: action.token
            }
        // case actionTypes.SHOW_ADD_OFFER:
        //     return {
        //         ...state,
        //         displayAddOffer: true
        //     }
        // case actionTypes.HIDE_ADD_OFFER:
        //     return {
        //         ...state,
        //         displayAddOffer: false
        //     }
        // case actionTypes.SHOW_UPDATE_OFFER:
        //     return {
        //         ...state,
        //         displayUpdateOffer: true
        //     }
        // case actionTypes.HIDE_UPDATE_OFFER:
        //     return {
        //         ...state,
        //         displayUpdateOffer: false
        //     }
            
    }
    return state;
}

export default reducer;