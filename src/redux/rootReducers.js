import { userReducer, USER_KEY } from "./reducers/usersReducers";
import { combineReducers } from "redux";

let rootReducer = combineReducers({
  [USER_KEY]: userReducer,
});

export { rootReducer };
