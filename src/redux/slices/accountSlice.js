
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    account: null,
    permissions: null,
}


const accountSlice = createSlice({
    name: "account",
    initialState,
    reducers: {
        login: {
            reducer(state, action) {
                state.account = action.payload ;
            }
        },
    }
})

export const getAccountData = state => state.account.account;
export const getAccountPermissions = state => state.account.permissions;
export const { login } = accountSlice.actions;

export default accountSlice.reducer;