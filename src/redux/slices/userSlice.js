import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signup: (state, action) => {
      state.users.push(action.payload);
    },
    // login: (state, action) => {},
  },
});

export const { signup } = userSlice.actions;

export default userSlice.reducer;
