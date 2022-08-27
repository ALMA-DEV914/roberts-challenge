import {
  LOAD_DATA_REQUEST,
  LOAD_DATA_SUCCESS,
  LOAD_DATA_FAILURE,
} from "./actionTypes.js";
import axios from "axios";

export const loadData = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: LOAD_DATA_REQUEST });
      const dataURL = 'https://randomuser.me/api/';
      const {data} = await axios.get(dataURL);
      dispatch({ type: LOAD_DATA_SUCCESS, payload: data });
      

    } catch (error) {
      dispatch({ type: LOAD_DATA_FAILURE, payload: error });
    }
  };
};


