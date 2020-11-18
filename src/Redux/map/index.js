import initialState from "./initialState";
import { SET_COORDINATES, SET_VIEWPORT } from "./types";

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_COORDINATES:
      return {
        ...state,
        viewPort: {
          ...state.viewPort,
          longitude: action.payload.longitude,
          latitude: action.payload.latitude,
          zoom: 10,
        },
      };

    case SET_VIEWPORT:
      return {
        ...state,
        viewPort: {
          ...action.payload,
        },
      };

    default:
      return {
        ...state,
      };
  }
}
