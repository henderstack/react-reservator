import { CombineReducers, combineReducers } from 'redux';
import reservationsReducer from './reservationsReducer';

export default combineReducers({
    reservations: reservationsReducer
});