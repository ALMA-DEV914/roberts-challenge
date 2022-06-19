import { userReducer, USER_KEY } from "./usersReducer";
import { combineReducers } from "redux";


let rootReducer = combineReducers({
    [USER_KEY]: userReducer
})

export {rootReducer}