import { createSlice, nanoid } from "@reduxjs/toolkit";
import workspaces from "@/data/workspaces.json";

const initialState = {
  data: workspaces.data,
};

const workspaceSlice = createSlice({
  name: "workspaces",
  initialState,
  reducers: {
    createWorkspace: (state, action) => {
      state.data.push(action.payload);
    },
  },
});

export const getAllWorkspaces = (state) => state.workspaces.data;

export const { createWorkspace } = workspaceSlice.actions;

export default workspaceSlice.reducer;
