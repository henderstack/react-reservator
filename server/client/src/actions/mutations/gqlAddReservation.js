import {
    GQL_ADD_RESERVATION,
    GQL_ADD_RESERVATION_RECEIVE,
    GQL_ADD_RESERVATION_FAILURE
} from '../types';

import ApiService from '../../services/ApiService';

const requestAddReservation = () => {
    type: GQL_ADD_RESERVATION
}

const receiveAddReservation = (data) => {
    type: GQL_ADD_RESERVATION_RECEIVE,
    data
}

const failureAddReservation = () => {
    type: GQL_ADD_RESERVATION_FAILURE
}

export const gqlAddReservaton = (params) => {
    try {
        dispatch(requestAddReservation());
        const params = getState().reservationObj;
        const data = await ApiService.addReservation(params);
        dispatch(receiveAddReservation(data));
    }
    catch (e) {
        dispatch(failureAddReservation());
    }
}