import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import workspaceSlices from "./slices/workspaceSlices";
import accountSlice from "./slices/accountSlice";
import { authSlice } from "./slices/AuthSlice";
import organizationsSlice from "./slices/organizationsSlice";

export const store = configureStore({
  reducer: {
    account: accountSlice,
    users: userReducer,
    workspaces: workspaceSlices,
    auth: authSlice.reducer,
    organization: organizationsSlice,
  },
});
