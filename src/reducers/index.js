import {combineReducers} from 'redux';
import clockReducer from './clockReducer';

const rootReducer = combineReducers({
    Clock: clockReducer
});

export default rootReducer;