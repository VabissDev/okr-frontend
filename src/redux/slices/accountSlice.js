import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  account:   {
    "id": "146",
    "avatarSource": "https://randomuser.me/api/portraits/med/men/1.jpg",
    "name": "John Doe",
    "email": "johndoe@example.com",
    "password": "12345689",
    "org_name": "ABC Company",
    "teams": ["Team 1", "Team 2", "Team 3"],
    "role": "admin"
  },
  isLoggedIn: true,
  permissions: null,
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    login: {
      reducer(state, action) {
        state.account = action.payload;
        state.isLoggedIn = true;
      },
    },
  },
});

export const isLoggedIn = (state) => state.account.isLoggedIn;
export const getAccountData = (state) => state.account.account;
export const getAccountPermissions = (state) => state.account.permissions;
export const { login } = accountSlice.actions;

export default accountSlice.reducer;
