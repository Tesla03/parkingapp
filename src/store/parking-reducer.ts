import { Action } from "redux";
import { Parking } from "../models/Parking";

const initialState: Parking[] = [
  {
    id: 1,
    selected: false,
    car: ""
  },
  {
    id: 2,
    selected: true,
    car: "golf"
  }
];

export function parkingReducer(
  state: Parking[] = initialState,
  action: Action
) {
  return state;
  // switch(action.type)
  // {
  //     default:
  //         return state;
  // }
}
