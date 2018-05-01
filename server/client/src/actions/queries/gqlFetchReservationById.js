import {
    GQL_FETCH_RESERVATION_ID,
    GQL_FETCH_RESERVATION_ID_RECEIVE,
    GQL_FETCH_RESERVATION_ID_FAILURE
} from '../types';

import ApiService from '../../services/ApiService';

const requestReservationById = () => {
    type: GQL_FETCH_RESERVATION_ID
}

const receiveReservationById = (data) => {
    type: GQL_FETCH_RESERVATION_ID_RECEIVE,
    data
}

const failureReservationById = () => {
    type: GQL_FETCH_RESERVATION_ID_FAILURE
}

export const gqlFetchReservationById = (params) => {
    try {
        dispatch(requestReservationById());
        const params = getState().reservationId;
        const data = await ApiService.getReservation(params);
        dispatch(receiveRaservationById(data));
    }
    catch (e) {
        dispatch(failureReservationById());
    }
}