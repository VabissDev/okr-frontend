import { createSlice } from "@reduxjs/toolkit";
import users from '@/data/users.json';

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
    removeUser: (state, action) => {
      const userId = action.payload;
      state.users = state.users.filter(user => user.id !== userId);
    },
    
  },
});

export const { signup,removeUser } = userSlice.actions;

export const getAllUsers = state => state.users.users

export default userSlice.reducer;
