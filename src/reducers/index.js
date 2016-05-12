import { combineReducers } from 'redux';
import navigator from './navigator';
import pokemon from './pokemon';

const rootReducer = combineReducers({
  navigator,
  pokemon,
});

export default rootReducer;
