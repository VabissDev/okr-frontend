import { createSlice } from "@reduxjs/toolkit";
import users from '../../data/users.json';

const initialState = {
  users: [...users],
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    signup: (state, action) => {
      state.users.push(action.payload);
    },
    
  },
});

export const { signup } = userSlice.actions;

export const getAllUsers = state => state.users.users

export default userSlice.reducer;
