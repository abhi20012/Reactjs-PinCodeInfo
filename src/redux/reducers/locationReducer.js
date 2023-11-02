// reducers/locationReducer.js
import {
	FETCH_LOCATION_REQUEST,
	FETCH_LOCATION_SUCCESS,
	FETCH_LOCATION_FAILURE,
  } from '../actions/locationAction';
  
  const initialState = {
	isLoading: false,
	location: null,
	error: null,
  };
  
  const locationReducer = (state = initialState, action) => {
	switch (action.type) {
	  case FETCH_LOCATION_REQUEST:
		return {
		  ...state,
		  isLoading: true,
		  error: null,
		};
	  case FETCH_LOCATION_SUCCESS:
		return {
		  ...state,
		  isLoading: false,
		  location: action.payload,
		};
	  case FETCH_LOCATION_FAILURE:
		return {
		  ...state,
		  isLoading: false,
		  error: action.payload,
		};
	  default:
		return state;
	}
  };
  
  export default locationReducer;
  