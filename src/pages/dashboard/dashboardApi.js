import axios from "axios";

export function fetchApi() {
  return axios.get("/assets/mock-data/data1.json");
}
