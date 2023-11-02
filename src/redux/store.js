// store.js
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk'; // You can use Redux Thunk for async actions

// Import your reducers
import locationReducer from './reducers/locationReducer';

// Combine reducers if you have multiple
const rootReducer = combineReducers({
  location: locationReducer,
});

// Create the store
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
