import { 
    GQL_FETCH_ALL_RESERVATIONS,
    GQL_FETCH_ALL_RECEIVE,
    GQL_FETCH_ALL_FAILURE,
    GQL_FETCH_RESERVATION_ID,
    GQL_FETCH_RESERVATION_ID_RECEIVE,
    GQL_FETCH_RESERVATION_ID_FAILURE,
    GQL_SEARCH_RESERVATION,
    GQL_SEARCH_RESERVATION_RECEIVE,
    GQL_SEARCH_RESERVATION_FAILURE, 
    GQL_ADD_RESERVATION,
    GQL_ADD_RESERVATION_RECEIVE,
    GQL_ADD_RESERVATION_FAILURE
} from '../actions/types';

const reservationsInitialState = {
    isLoading: false,
    isFailure: false,
    reservations: null,
    reservation: null
}

const reservationsReducer = (state = reservationsInitialState, action) => {
    switch(action.type) {
        case GQL_FETCH_ALL_RESERVATIONS:
            return {
                ...state,
                isLoading: true,
                isFailure: false
            }
        case GQL_FETCH_ALL_RECEIVE:
            return {
                ...state,
                isLoading: false,
                isFailure: false,
                reservations: action.data
            }
        case GQL_FETCH_ALL_FAILURE:
            return {
                ...state,
                isLoading:false,
                isFailure: true
            }
        case GQL_FETCH_RESERVATION_ID:
            return {
                ...state,
                isLoading: true,
                isFailure: false
            }
        case GQL_FETCH_RESERVATION_ID_RECEIVE:
            return {
                ...state,
                isLoading: false,
                isFailure: false,
                reservation: action.data
            }
        case GQL_FETCH_RESERVATION_ID_FAILURE:
            return {
                ...state,
                isLoading: false,
                isFailure: true
            }
        case GQL_SEARCH_RESERVATION:
            return {
                ...state,
                isLoading: true,
                isFailure: false
            }
        case GQL_SEARCH_RESERVATION_RECEIVE:
            return {
                ...state,
                isLoading: false,
                isFailure: false,
                reservations: action.data
            }
        case GQL_SEARCH_RESERVATION_FAILURE:
            return {
                ...state,
                isLoading: false,
                isFailure: true
            }
        case GQL_ADD_RESERVATION:
            return {
                ...state,
                isLoading: true,
                isFailure: false
            }
        case GQL_ADD_RESERVATION_RECEIVE:
            return {
                ...state,
                isLoading: false,
                isFailure: false,
                reservation: action.data
            }
        case GQL_ADD_RESERVATION_FAILURE:
            return {
                ...state,
                isLoading: false,
                isFailure: true
            }
        default:
            return state;
    }
}

export default reservationsReducer;