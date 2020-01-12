import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import {reducers, State, initialState} from "./reducers";
import { rootSaga } from "./sagas/index";

const sagaMiddleware = createSagaMiddleware();
export const initStore = ()  => {
  const middlewares = [];

  middlewares.push(sagaMiddleware);
  const rootReducer = reducers;

  const store = createStore(rootReducer, initialState, applyMiddleware(...middlewares));

  sagaMiddleware.run(rootSaga);

  return store;
};


