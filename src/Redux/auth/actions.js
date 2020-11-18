import { LOGIN, LOGIN_ERROR } from "./types";
import api from "../../config/api";

export const login = (obj) => async (dispatch) => {
  try {
    const response = await api.post("/auth/login", { ...obj });
    dispatch({ type: LOGIN, payload: response.data });
  } catch (err) {
    dispatch({ type: LOGIN_ERROR, payload: err.response.data.errors });
  }
};
