import { Action } from "redux";
import { Parking } from "../models/Parking";

export const ADD_PARKING = "ADD PARKING";
export const ADD_PARKINGS = "ADD PARKINGS";
export const FETCH_PARKINGS = "FETCH PARKING";
export const DELETE_PARKING = "DELETE PARKING";
export const SELECT_PARKING = "SELECT PARKING";
export const ADD_EMPTY = "ADD EMPTY";

export interface AddParking extends Action {
  parking: Parking;
}
export interface AddEmpty extends Action {
  parking: Parking;
}

export interface AddParkings extends Action {
  parkings: Parking[];
}

export interface SelectParking extends Action {
  parking: Parking;
}

export interface FetchParkings extends Action {}

export interface DeleteParking extends Action {
  parkingId: string;
}

export function addParking(parking: Parking): AddParking {
  return {
    type: ADD_PARKING,
    parking: parking
  };
}
export function addEmpty(parking: Parking): AddEmpty {
  return {
    type: ADD_EMPTY,
    parking: parking
  };
}

export function addParkings(parkings: Parking[]): AddParkings {
  return {
    type: ADD_PARKINGS,
    parkings: parkings
  };
}

export function fetchParkings(): FetchParkings {
  return {
    type: FETCH_PARKINGS
  };
}

export function deleteParking(parkingId: string): DeleteParking {
  return {
    type: DELETE_PARKING,
    parkingId: parkingId
  };
}

export function selectParking(parking: Parking): SelectParking {
  return {
    type: SELECT_PARKING,
    parking: parking
  };
}
