import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducer";
import rootSaga from "./sagas";

export const sagaMiddleware = createSagaMiddleware();

const initialState = {
  restaurentReducer: {
    restaurents: [],
    filteredRestaurents: [],
    loading: false,
  },
};

export default createStore(
  rootReducer,
  initialState,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);
