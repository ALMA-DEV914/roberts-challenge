import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
    name: 'member',
    initialState: {
        member: null,
    },
    reducers: {
        login: (state, action) => {
            state.user = action.payload;
        },
        logout: (state) => {
            state.user = null;
        },
    }
});

export const {login, logout} = loginSlice.actions;
export const selectMember = (state) => state.member.member;
export default loginSlice.reducer;