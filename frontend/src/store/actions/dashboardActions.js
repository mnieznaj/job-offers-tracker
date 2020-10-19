import * as actionTypes from './actionTypes';

export const currentOfferId = (id) => {
    return {
        type: actionTypes.CURRENT_OFFER_ID,
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
export const deleteUserToken = () => {
    return {
        type: actionTypes.DELETE_USER_TOKEN
    }
}
export const setOffersFilter = (filter) => {
    return {
        type: actionTypes.OFFERS_FILTER,
        filter: filter
    }
}
export const setUserId = id => {
    return {
        type: actionTypes.SET_USER_ID,
        id: id
    }
}