import { combineReducers } from 'redux';
import countriesReducer from './countries-reducer';

const reducers = combineReducers({
    countriesReducer
});

/*
//ja bym zrobił tak, wówczas state odzwiercidlałby plik z danymi wejściowymi src/data/countries.json
const reducers = combineReducers([
    countriesReducer
]);
*/

export default reducers;