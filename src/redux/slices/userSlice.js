import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signup: (state, action) => {
      state.user = action.payload;
    },
    // login: (state, action) => {},
  },
});

export const { login } = userSlice.actions;

export default userSlice.reducer;
