import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthResponse } from "../../models/response/AuthResponse";
import { selectTab } from "./actionCreators";

interface AdminPanelState {
    currentTab: string;
}

const initialState: AdminPanelState = {
    currentTab: ""
}

export const AdminSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: {
        [selectTab.fulfilled.type]: (state, action: PayloadAction<any>) => {
            state.currentTab = action.payload;
        },
        [selectTab.pending.type]: (state) => {
            
        },
        [selectTab.rejected.type]: (state,  action: PayloadAction<string>) => {
        },
        
    }
})

export default AdminSlice.reducer;