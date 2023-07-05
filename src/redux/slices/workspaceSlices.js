import { createSlice, nanoid } from "@reduxjs/toolkit";
import workspaces from "@/data/workspaces.json";


const initialState = {
    data: workspaces.data
}

const workspaceSlice = createSlice({
    name: "workspaces",
    initialState,
    reducers: {
       
    }
})

export const getAllWorkspaces = state => state.workspaces.data;

export default workspaceSlice.reducer;