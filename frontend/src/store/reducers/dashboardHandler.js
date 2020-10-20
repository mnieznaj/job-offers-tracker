import * as actionTypes from '../actions/actionTypes';

const initialState = {
    offersList: [],
    userId: null,
    // userToken: localStorage.getItem("token") ? localStorage.getItem("token") : null,
    userToken: null,
    currentOfferId: null,
    offersFilter: "title"
}

const reducer = (state = initialState, action) => {
    switch (action.type){
        case actionTypes.SET_OFFERS_LIST:
            return {
                ...state,
                offersList: action.offers
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
        case actionTypes.SET_USER_ID:
            return {
                ...state,
                userId: action.id
            }
        // no default
    }
    return state;
}

export default reducer;