import { SET_COORDINATES, SET_VIEWPORT } from "./types";

export const setCoordinates = (coordinates) => (dispatch) => {
  dispatch({ type: SET_COORDINATES, payload: coordinates });
};

export const setViewPort = (viewPort) => (dispatch) => {
  dispatch({ type: SET_VIEWPORT, payload: viewPort });
};
