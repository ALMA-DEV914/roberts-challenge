import { configureStore } from "@reduxjs/toolkit";
import membersReducer from './memberSlice';


 export const store = configureStore({
  reducer: {
    members:membersReducer
  },
})

