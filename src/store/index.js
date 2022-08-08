import {createStore} from 'redux';
import stateReducer from './reducer';
const store = createStore(stateReducer);

export default store;