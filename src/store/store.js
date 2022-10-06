import { applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";
import rootReducer from "../reducer/_index";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "../saga/_index";

const logger = createLogger();

const sagaMiddleware = createSagaMiddleware();

export const createConfigure = () => {
  const store = createStore(
    rootReducer,
    process.env.NODE_ENV === "development"
      ? composeWithDevTools(applyMiddleware(logger, sagaMiddleware))
      : applyMiddleware(sagaMiddleware)
  );

  sagaMiddleware.run(rootSaga);

  return store;
};

