import { combineReducers } from 'redux';
import providers from './providers.js';

const rootReducer = combineReducers({
  providers: providers
});

export default rootReducer;
