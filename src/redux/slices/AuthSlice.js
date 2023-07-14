import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const signupUser = createAsyncThunk(
  "users/signupUser",
  async ({ fullName, organizationName, email, password }, thunkAPI) => {
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
            organizationName,
            email,
            password,
          }),
        }
      );
      let data = await response.json();
      console.log("data", data);

      if (response.status === 200) {
        localStorage.setItem("token", data.token);
        return { ...data, fullName, organizationName, email };
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (e) {
      console.log("Error", e.response.data);
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

export const loginUser = createAsyncThunk(
  "users/login",
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await fetch(
        "https://okr-backend-vabiss-c66783e088f5.herokuapp.com/auth/login",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );
      let data = await response.json();
      console.log("response", data);
      if (response.status === 200) {
        localStorage.setItem("token", data.token);
        return data;
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (e) {
      console.log("Error", e.response.data);
      thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

export const fetchUserBytoken = createAsyncThunk(
  "users/fetchUserByToken",
  async ({ token }, thunkAPI) => {
    try {
      const response = await fetch(
        "https://okr-backend-vabiss-c66783e088f5.herokuapp.com/auth/save",
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            Authorization: token,
            "Content-Type": "application/json",
          },
        }
      );
      let data = await response.json();
      console.log("data", data, response.status);

      if (response.status === 200) {
        return { ...data };
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (e) {
      console.log("Error", e.response.data);
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

export const authSlice = createSlice({
  name: "user",
  initialState: {
    fullName: "",
    organizationName: "",
    email: "",
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
    [signupUser.fulfilled]: (state, { payload }) => {
      console.log("payload", payload);
      state.isFetching = false;
      state.isSuccess = true;
      state.email = payload.user.email;
      state.fullName = payload.user.fullName;
      state.organizationName = payload.user.organizationName;
    },
    [signupUser.pending]: (state) => {
      state.isFetching = true;
    },
    [signupUser.rejected]: (state, { payload }) => {
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload.error;
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      state.email = payload.email;
      state.fullName = payload.fullName;
      state.organizationName = payload.organizationName;
      state.isFetching = false;
      state.isSuccess = true;
      return state;
    },
    [loginUser.rejected]: (state, { payload }) => {
      console.log("payload", payload);
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload.error;
    },
    [loginUser.pending]: (state) => {
      state.isFetching = true;
    },
    [fetchUserBytoken.pending]: (state) => {
      state.isFetching = true;
    },
    [fetchUserBytoken.fulfilled]: (state, { payload }) => {
      state.isFetching = false;
      state.isSuccess = true;

      state.email = payload.email;
      state.username = payload.name;
    },
    [fetchUserBytoken.rejected]: (state) => {
      console.log("fetchUserBytoken");
      state.isFetching = false;
      state.isError = true;
    },
  },
});

export const { clearState } = authSlice.actions;

export const userSelector = (state) => state.auth;
