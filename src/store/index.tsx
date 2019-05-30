import { combineReducers } from "redux";
import { Parking } from "../models/Parking";
import { parkingReducer } from "./parking-reducer";

export interface AppState {
  parkings: Parking[];
}

export const rootReducer = combineReducers({
  parkings: parkingReducer
});
