import React, { Component } from "react";
import "./App.css";
import { Provider } from "react-redux";
import { rootReducer } from "./store";
import ParkingList from "./components/ParkingList";
import { createStore } from "redux";

const parkingStore = createStore(rootReducer);
class App extends Component {
  render() {
    return (
      <Provider store={parkingStore}>
        <ParkingList />
      </Provider>
    );
  }
}

export default App;
