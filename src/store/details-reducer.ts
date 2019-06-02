import { Action } from "redux";
import { AppState } from ".";
import { Parking } from "../models/Parking";
import { SELECT_PARKING, SelectParking } from "./actions";

const initialState: Parking = {
  id: "0",
  vreme: "0",
  popunjeno: false,
  tablice: "tablice",
  vlasnik: ""
};

export function detailsReducer(state: Parking = initialState, action: Action) {
  switch (action.type) {
    case SELECT_PARKING: {
      const { parking } = action as SelectParking;
      return parking;
    }
    default:
      return state;
  }
}
