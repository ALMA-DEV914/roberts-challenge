import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const memberSlice = createSlice({
  name: 'members',
  initialState,
  reducers: {
    addMember: (state, action) => {
      state.push(action.payload);
    },
    editMember: (state, action) => {
      const { id, username, email } = action.payload;
      const existingMember = state.find(member => member.id === id);
      if(existingMember) {
        existingMember.username = username;
        existingMember.email = email;
      }
    },
    deleteMember: (state, action) => {
      const { id } = action.payload;
      const existingMember = state.find(member => member.id === id);
      if(existingMember) {
        return state.filter(member => member.id !== id);
      }
    }
  }
});

export const { addMember, editMember, deleteMember } = memberSlice.actions;
export default memberSlice.reducer;
