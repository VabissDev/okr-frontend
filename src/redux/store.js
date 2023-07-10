import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import workspaceSlices from "./slices/workspaceSlices";
import accountSlice from "./slices/accountSlice";


export const store = configureStore({
  reducer: {
    account: accountSlice,
    users: userReducer,
    workspaces: workspaceSlices
  }
});
