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
    account: {
      reducer(state, action) {
          state.account= action.payload;
      },
      prepare(id) {

        const account = users.find(user => user.id === id)
        console.log(account)
          return {
              payload: {
                  id
              }
          }
      }
  }, 
    
  },
});

export const { signup } = userSlice.actions;

export const getAllUsers = state => state.users.users
export const login = state => state.users.login
export const account = state => state.users.account

export default userSlice.reducer;
