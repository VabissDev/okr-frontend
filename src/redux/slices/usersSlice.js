import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const createUser = createAsyncThunk(
  "user/createUser",
  async ({ fullName, organizationId, email, password }, thunkAPI) => {
    try {
      const response = await fetch(
        "https://okr-backend-vabiss-c66783e088f5.herokuapp.com/auth/save",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fullName,
            organizationId,
            email,
            password,
          }),
        }
      );
      let data = await response.json();
      console.log("data", data);

    //   if (response.status === 200) {
    //     localStorage.setItem("token", data.token);
    //     return { ...data, fullName, organizationName, email };
    //   } else {
    //     return thunkAPI.rejectWithValue(data);
    //   }
    } catch (e) {
      console.log("Error", e.response.data);
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);


export const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    isFetching: false,
    isSuccess: false,
    isError: false,
    errorMessage: "",
  },
  reducers: {
    clearState: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.isFetching = false;
      return state;
    },
  },
  extraReducers: {
    [createUser.fulfilled]: (state, { payload }) => {
      console.log("payload", payload);
      state.isFetching = false;
      state.isSuccess = true;
      state.users.push(payload);
    },
    [createUser.pending]: (state) => {
      state.isFetching = true;
    },
    [createUser.rejected]: (state, { payload }) => {
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload.error;
    },


  },
});

export const { clearState } = usersSlice.actions;

export const getUsersList = state => state.users;

export default usersSlice.reducer