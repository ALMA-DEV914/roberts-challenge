import { rootReducer } from "./rootReducers";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const allMiddlewares = [thunk];

const store = createStore(
    rootReducer, 
    composeWithDevTools(applyMiddleware(...allMiddlewares)

))
export  {store}