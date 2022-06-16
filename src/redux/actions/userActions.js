import { ActionTypes } from "../constants/actionTypes";

export const setUsers = users => {
 return {
    type: ActionTypes.SET_USERS,
    payload: users,
  };
};

export const selectedUser = user => {
  return{
    type: ActionTypes.SELECTED_USER,
    payload: user,
  };
};
