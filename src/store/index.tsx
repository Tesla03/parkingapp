import { combineReducers } from "redux";
import { Parking } from "../models/Parking";
import { parkingReducer } from "./parking-reducer";
import { detailsReducer } from "./details-reducer";

export interface AppState {
  parkings: Parking[];
  selected?: Parking;
}

export const rootReducer = combineReducers({
  parkings: parkingReducer,
  selected: detailsReducer
});
