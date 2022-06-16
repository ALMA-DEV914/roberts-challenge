import { ActionTypes } from "../constants/actionTypes";

const intialState = {
  users: [],
  };

export const usersReducer = (state = intialState, { payload, type}) => {
  switch (type) {
    case ActionTypes.SET_USERS:
      return { ...state, 
             users: payload};
    default:
      return state;
  }
};

export const selectedUsersReducer = (state = {}, { payload, type}) => {
   switch (type) {
    case ActionTypes.SELECTED_USER:
      return { ...state, ...payload};
    default:
      return state;
  }
};
