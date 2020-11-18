import axios from "axios";
import { apiRoot } from "./dev";

const api = axios.create({
  baseURL: apiRoot,
});

export default api;
