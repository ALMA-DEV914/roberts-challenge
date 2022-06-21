import { configureStore } from "@reduxjs/toolkit";
import membersReducer from './memberSlice';

 export const store2 = configureStore({
  reducer: {
    members: membersReducer,
  
    
  },
})

