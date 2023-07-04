import { createSlice } from "@reduxjs/toolkit";
import users from '../../data/users.json';

const initialState = {
  users: [...users],
  login: false,
  account: {}

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
export const login = state => state.users.login
export const account = state => state.users.account

export default userSlice.reducer;
