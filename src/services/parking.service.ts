const url = "http://localhost:3001/parkings";

export function getAllParkings() {
  return fetch(url).then(response => response.json());
}
