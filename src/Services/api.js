import axios from "axios";

const api = axios.create({
  baseURL: "https://aonde-tem-backend.herokuapp.com",
});

export default api;
