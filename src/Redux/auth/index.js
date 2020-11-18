import initialState from "./initialState";
import { LOGIN, LOGIN_ERROR } from "./types";

export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        userAuth: action.payload,
      };

    case LOGIN_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
}
