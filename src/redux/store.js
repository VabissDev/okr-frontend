import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import workspaceSlices from "./slices/workspaceSlices";

export const store = configureStore({
  reducer: {
    users: userReducer,
    workspaces: workspaceSlices
  }
});
