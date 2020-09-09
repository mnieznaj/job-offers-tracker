import * as actionTypes from './actionTypes';

// export const setFormType = (formType) => {
//     return {
//         type: actionTypes.SET_FORM_TYPE,
//         formType: formType
//     }
// }

export const currentOfferId = (id) => {
    return {
        type: actionTypes.CURRENT_OFFER_ID,
        id: id
    }
}

export const displayAddOfferForm = (display) => {
    return {
        type: actionTypes.ADD_OFFER,
        display: display
    }
}

export const displayUpdateOfferForm = (display, id) => {
    return {
        type: actionTypes.UPDATE_OFFER,
        display: display,
        id: id
    }
}

export const setOffersList = (offers) => {
    return {
        type: actionTypes.SET_OFFERS_LIST,
        offers: offers
    }
}

export const setUserToken = (token) => {
    return {
        type: actionTypes.SET_USER_TOKEN,
        token: token
    }
}