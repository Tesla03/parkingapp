import React, { Component } from "react";
import "./App.css";
import { Provider } from "react-redux";
import { rootReducer } from "./store";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import { rootSaga } from "./store/sagas";
import ParkingList from "./components/ParkingList";
import ParkingCounter from "./components/ParkingCounter";
import { createBrowserHistory } from "history";
import { Routes } from "./routes/routes";
import { Router } from "react-router";

const sagaMiddleware = createSagaMiddleware();
const browserHistory = createBrowserHistory();
const parkingStore = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
class App extends Component {
  render() {
    return (
      <Provider store={parkingStore}>
        <Router history={browserHistory}>
          <Routes />
        </Router>
      </Provider>
    );
  }
}

export default App;
