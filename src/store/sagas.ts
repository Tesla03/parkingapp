import { all, takeEvery, put } from "redux-saga/effects";
import { getAllParkings } from "../services/parking.service";
import { addParkings, FETCH_PARKINGS } from "./actions";

function* fetchParkings() {
  const parkings = yield getAllParkings();
  yield put(addParkings(parkings));
}

export function* rootSaga() {
  yield all([takeEvery(FETCH_PARKINGS, fetchParkings)]);
}
