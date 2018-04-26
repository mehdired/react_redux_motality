import { combineReducers } from 'redux';
import CountriesReducer from './reducer_countries'
import MortalityReducer from './reducer_mortality'

const rootReducer = combineReducers({
  countries : CountriesReducer,
  mortality: MortalityReducer
});

export default rootReducer;
