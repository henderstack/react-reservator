import {
    GQL_SEARCH_RESERVATION,
    GQL_SEARCH_RESERVATION_RECEIVE,
    GQL_SEARCH_RESERVATION_FAILURE
} from '../types';

import ApiService from '../../services/ApiService';

const requestSearchReservation = () => {
    type: GQL_SEARCH_RESERVATION
}

const receiveSearchReservation = (data) => {
    type: GQL_SEARCH_RESERVATION_RECEIVE,
    data
}

const failureSearchReservation = () => {
    type: GQL_SEARCH_RESERVATION_FAILURE
}

export const gqlSearchReservations = (params) => {
    try {
        dispatch(requestSearchReservation());
        const params = getState().searchObj;
        const data = await ApiService.getReservationByNameDates(params);
        dispatch(receiveSearchReservation(data));
    }
    catch (e) {
        dispatch(failureSearchReservation());
    }
}