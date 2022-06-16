import { combineReducers } from "redux";
import { usersReducer, selectedUsersReducer } from "./usersReducers";

const reducers = combineReducers({
  allUsers: usersReducer,
  user: selectedUsersReducer,
});
export default reducers;