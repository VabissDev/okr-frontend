import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const token = localStorage.getItem("token");

export const createWorkspace = createAsyncThunk(
  "workspaces/createWorkspace",
  async (
    { name, owner, description, level, status, organizationId },
    thunkAPI
  ) => {
    try {
      const response = await fetch(
        "https://okr-backend-vabiss-c66783e088f5.herokuapp.com/workspaces",
        {
          method: "POST",
          headers: {
            "Accept": "application/json",
            "mode": "no-cors",
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify({
            name,
            owner,
            description,
            level,
            status,
            organizationId,
          }),
        }
      );
      let data = await response.json();
      console.log("data", data);

      if (response.status === 200) {
        // localStorage.setItem("token", data.token);
        return {
          ...data,
          name,
          owner,
          description,
          level,
          status,
          organizationId,
        };
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (e) {
      console.log("Error", e.response.data);
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

const initialState = {
  workspace: {},
  isFetching: false,
  isSuccess: false,
  isError: false,
  errorMessage: "",
};

const workspaceSlice = createSlice({
  name: "workspaces",
  initialState,
  reducers: {
    clearState: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.isFetching = false;

      return state;
    },
  },
  extraReducers: {
    [createWorkspace.fulfilled]: (state, { payload }) => {
      console.log("payload", payload);
      state.isFetching = false;
      state.isSuccess = true;
      state.workspace = payload.workspace;
    },
    [createWorkspace.pending]: (state) => {
      state.isFetching = true;
    },
    [createWorkspace.rejected]: (state, { payload }) => {
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload; // payload.message || payload.error;
    },
  },
});

// export const getAllWorkspaces = (state) => state.workspaces.data;

export default workspaceSlice.reducer;
