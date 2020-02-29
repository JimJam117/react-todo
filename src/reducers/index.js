import {combineReducers} from 'redux';
import clockReducer from './clockReducer';
import todoReducer from './todoReducer';

const rootReducer = combineReducers({
    clock: clockReducer,
    todo: todoReducer
});

export default rootReducer;