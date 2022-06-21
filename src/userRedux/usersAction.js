import {
  LOAD_DATA_REQUEST,
  LOAD_DATA_SUCCESS,
  LOAD_DATA_FAILURE,
} from "./actionTypes.js";

import Axios from "axios";

export const loadData = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: LOAD_DATA_REQUEST });
      const dataURL = "https://randomuser.me/api/";
      const response = await Axios.get(dataURL);

      dispatch({ type: LOAD_DATA_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: LOAD_DATA_FAILURE, payload: error });
    }
  };
};
