import {GET_COUNTRIES, GET_COUNTRY, DELETE_COUNTRY, SEARCH_COUNTRIES, SET_CONTINENT} from '../actions/actions';
import countriesData from '../data/countries.json';

/*
//ja bym zrobił tak, wówczas state odzwiercidlałby plik z danymi wejściowymi src/data/countries.json
const countriesReducer = (state = countriesData, action) => {
    switch(action.type) {
        case GET_COUNTRIES:
            return state;
        case GET_COUNTRY:
            return state.filter(country => country.id === action.id);
        case DELETE_COUNTRY:
            return state.filter(country => country.id !== action.id);
        case SEARCH_COUNTRIES:
            return state.filter(country => (country.name).toLowerCase().includes((action.searchText).toLowerCase()));
        case SET_CONTINENT:
            return state.filter(country => country.continent === action.continent);
        default:
            return state;
    }
}
*/

const initialState = {
    countries: countriesData
}

const countriesReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_COUNTRIES:
            return state;
        case GET_COUNTRY:
            return state.countries.filter(country => country.id === action.id);
        case DELETE_COUNTRY:
            return state.countries.filter(country => country.id !== action.id);
        case SEARCH_COUNTRIES:
            return state.countries.filter(country => (country.name).toLowerCase().includes((action.searchText).toLowerCase()));
        case SET_CONTINENT:
            return state.countries.filter(country => country.continent === action.continent);
        default:
            return state;
    }
}

export default countriesReducer;