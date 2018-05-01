import {
    GQL_FETCH_ALL_RESERVATIONS,
    GQL_FETCH_ALL_RECEIVE,
    GQL_FETCH_ALL_FAILURE
} from '../types';

import ApiService from '../../services/ApiService';
import StorageService from '../../services/StorageService';

const requestAllReservations = () => {
    type: GQL_FETCH_ALL_RESERVATIONS
}

const receiveAllReservations = (data) => {
    type: GQL_FETCH_ALL_RECEIVE,
    data
}

const failureAllReservations = () => {
    type: GQL_FETCH_ALL_FAILURE
}

export const gqlFetchAllReservations = (params) => {
    try {
        dispatch(requestAllReservations());
        const params = {};
        const data = await ApiService.getReservation(params);
        dispatch(receiveAllReservations(data));
    }
    catch (e) {
        dispatch(failureAllReservations());
    }
}