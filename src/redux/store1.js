import { configureStore } from "@reduxjs/toolkit";
import membersReducer from './memberSlice';


 export const store1 = configureStore({
  reducer: {
    members: membersReducer,
    
  },
})

