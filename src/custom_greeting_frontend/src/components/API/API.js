import axios from "axios";

const BASE_URL = "http://52.62.174.52:3000/courses/getAllPost"

export const fetchDataFromApi = async () => {
  const { data } = await axios.get(`${BASE_URL}`);
  return data;
}
