import { Action } from "redux";
import { Parking } from "../models/Parking";
import { ADD_PARKING, AddParking, ADD_PARKINGS, AddParkings, DELETE_PARKING, DeleteParking, ADD_EMPTY, AddEmpty } from "./actions";

const initialState: Parking[] = [
  {
    id: "0",
    vreme: "0",
    popunjeno: false,
    tablice: "",
    vlasnik: ""
  }
];

export function parkingReducer(
  state: Parking[] = initialState,
  action: Action
) {
  switch (action.type) {
    case ADD_PARKING: {
      const { parking } = action as AddParking;
      let pom = state.findIndex(parking => parking.popunjeno === false);
      state.fill(parking, pom, pom + 1);

      return state.map((parking: Parking) => parking);
    }
    case DELETE_PARKING: {
      const { parkingId } = action as DeleteParking;
      if (parkingId !== "")
        return state.filter(
          (parking: Parking) => parking.tablice !== parkingId
        );
      else return state;
    }
    case ADD_PARKINGS: {
      const { parkings } = action as AddParkings;
      return [...state, ...parkings];
    }
    case ADD_EMPTY: {
      const { parking } = action as AddEmpty;
      return [...state, parking];
    }
    default:
      return state;
  }
}
