import {
  combineReducers,
  applyMiddleware,
  compose,
  legacy_createStore as createStore,
} from 'redux';
import thunk from 'redux-thunk';

const reducers = combineReducers({});
const middleware = [thunk];

const store = createStore(reducers, compose(applyMiddleware(...middleware)));

export default store;
