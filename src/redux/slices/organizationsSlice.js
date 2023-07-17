import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getOrganization = createAsyncThunk(
  "organization",
  async (id, thunkAPI) => {
    try {
      const response = await fetch(
        `https://okr-backend-vabiss-c66783e088f5.herokuapp.com/organizations/${id}`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          }
        }
      );
      let data = await response.json();
      console.log("data", data);

      if (response.status === 200) {
        return { ...data };
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (error) {
      console.error(error.response.data);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);


const orgSlice = createSlice({
  name: "organization",
  initialState: {
    organization: {},
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
    [getOrganization.fulfilled]: (state, { payload }) => {
      console.log("payload", payload);
      state.isFetching = false;
      state.isSuccess = true;
      state.organization = payload;
    },
    [getOrganization.pending]: (state) => {
      state.isFetching = true;
    },
    [getOrganization.rejected]: (state, { payload }) => {
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload.error;
    }
  },
});

export const { clearState } = orgSlice.actions;

export const organization = (state) => state;

export default orgSlice.reducer;
