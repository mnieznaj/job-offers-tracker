import * as actionTypes from '../actions/actionTypes';

const initialState = {
    offersList: [],
    displayAddOffer: false,
    displayUpdateOffer: false,
    // userId: "5f4e08c7d2ef258e7d34b2de",
    userToken: localStorage.getItem("token") ? localStorage.getItem("token") : null,
    currentOfferId: null,
    offersFilter: null
}

const reducer = (state = initialState, action) => {
    switch (action.type){
        case actionTypes.SET_OFFERS_LIST:
            return {
                ...state,
                offersList: action.offers
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
        case actionTypes.CURRENT_OFFER_ID:
            return {
                ...state,
                currentOfferId: action.id
            };
        case actionTypes.SET_USER_TOKEN:
            return {
                ...state,
                userToken: action.token
            }
        case actionTypes.DELETE_USER_TOKEN:
            return {
                ...state,
                userToken: null
            }
        case actionTypes.OFFERS_FILTER:
            return {
                ...state,
                offersFilter: action.filter
            }
        // default:
        //     return state
    }
    return state;
}

export default reducer;