import { createSlice, nanoid } from "@reduxjs/toolkit";
import workspaces from "@/data/members.json";


const initialState = {
    data: workspaces
}

const workspaceSlice = createSlice({
    name: "workspaces",
    initialState,
    reducers: {}
})

export const getAllWorkspaces = state => state.workspaces.data;

export default workspaceSlice.reducer;