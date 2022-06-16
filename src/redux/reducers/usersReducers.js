import { ActionTypes } from "../constants/actionTypes";

const intialState = {
  users: [],
};

export const usersReducer = (state = intialState, { payload, type}) => {
  switch (type) {
    case ActionTypes.SET_USERS:
      return { ...state, 
        users: payload };
    default:
      return state;
  }
};

export const selectedUsersReducer = (state = {}, { type, payload}) => {
 
  switch (type) {
    case ActionTypes.SELECTED_USER:
      return { ...state, ...payload};
    case ActionTypes.REMOVE_SELECTED_USER:
      return {};
    default:
      return state;
  }
};
