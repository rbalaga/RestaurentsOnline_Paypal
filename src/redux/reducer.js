import { combineReducers } from "redux";

import {
  RETRIVE_RESTAURENTS_LIST,
  RETRIVE_RESTAURENTS_LIST_FULFILLED,
  FILTER_RESTAURENTS_FULFILLED,
  SORT_RESTAURENTS_FULFILLED,
} from "./actions";

const initialState = {
  restaurents: [],
  filteredRestaurents: [],
  loading: false,
};

const restaurentReducer = (state = initialState, action) => {
  switch (action.type) {
    case RETRIVE_RESTAURENTS_LIST:
      return {
        ...state,
        loading: true,
        err: "",
        restaurents: [],
        filteredRestaurents: [],
      };
    case RETRIVE_RESTAURENTS_LIST_FULFILLED:
      return {
        ...state,
        restaurents: action.restaurents,
        filteredRestaurents: action.restaurents,
        loading: false,
        err: "",
      };
    case FILTER_RESTAURENTS_FULFILLED:
      return { ...state, filteredRestaurents: action.filteredRestaurents };
    case SORT_RESTAURENTS_FULFILLED:
      return {
        ...state,
        restaurents: action.restaurents,
        filteredRestaurents: action.filteredRestaurents,
      };
    default:
      return state;
  }
};

export default combineReducers({
  restaurentReducer,
});
