import { select, put, takeLatest, all } from "redux-saga/effects";
import restaurentsList from "../restaurents.json";

import {
  FILTER_RESTAURENTS_FULFILLED,
  RETRIVE_RESTAURENTS_LIST,
  RETRIVE_RESTAURENTS_LIST_FULFILLED,
  FILTER_RESTAURENTS,
  SORT_RESTAURENTS_FULFILLED,
  SORT_RESTAURENTS,
} from "./actions";

function* fetchRestaurents(action) {
  yield put({
    type: RETRIVE_RESTAURENTS_LIST_FULFILLED,
    restaurents: restaurentsList,
    err: "",
  });
}

const getRestaurentsFromStore = (state) => state.restaurentReducer.restaurents;
const getFilteredRestaurents = (state) =>
  state.restaurentReducer.filteredRestaurents;

function* filterRestaurentsFromStore(action) {
  const restaurentsList = yield select(getRestaurentsFromStore);
  const filteredRestaurents = restaurentsList.filter(
    (restaurent) =>
      restaurent["Restaurant Name"]
        .toUpperCase()
        .indexOf(action.searchText.toUpperCase().trim()) >= 0 ||
      restaurent["Cuisines"]
        .toUpperCase()
        .indexOf(action.searchText.toUpperCase().trim()) >= 0
  );
  yield put({
    type: FILTER_RESTAURENTS_FULFILLED,
    filteredRestaurents,
    err: "",
  });
}

function* sortRestaurentsInStore(action) {
  const { field, sortType = "ASC" } = action;
  console.log("got saga", field, sortType);
  const filteredRestaurentsList = yield select(getFilteredRestaurents);
  const restaurentsList = yield select(getRestaurentsFromStore);
  const sortedFilteredRestaurents = filteredRestaurentsList.sort(
    (current, next) =>
      sortType === "ASC"
        ? current[field] - next[field]
        : next[field] - current[field]
  );
  const sortedRestaurents = restaurentsList.sort((cur, next) =>
    sortType === "ASC" ? cur[field] - next[field] : next[field] - cur[field]
  );
  yield put({
    type: SORT_RESTAURENTS_FULFILLED,
    restaurents: sortedRestaurents,
    filteredRestaurents: sortedFilteredRestaurents,
    err: "",
  });
}

function* apiWatcher() {
  yield takeLatest(RETRIVE_RESTAURENTS_LIST, fetchRestaurents);
}
function* filterWatcher() {
  yield takeLatest(FILTER_RESTAURENTS, filterRestaurentsFromStore);
}
function* sortWatcher() {
  yield takeLatest(SORT_RESTAURENTS, sortRestaurentsInStore);
}

export default function* rootSaga(state) {
  yield all([apiWatcher(), filterWatcher(), sortWatcher()]);
}
