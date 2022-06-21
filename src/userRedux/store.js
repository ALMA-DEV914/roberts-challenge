import { rootReducer } from "./rootReducers";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const initialState = {};

const allMiddlewares = [thunk]
const store = createStore(
    rootReducer, 
    initialState, 
    composeWithDevTools(applyMiddleware(...allMiddlewares)

))
export  {store}