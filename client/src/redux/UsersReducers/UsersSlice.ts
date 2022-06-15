import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../models/IUser";
import { fetchUsers } from "./actionCreators";


interface UsersState {
    users: IUser[];
    isLoading: boolean;
    error: string;
}

const initialState: UsersState = {
    users: [],
    isLoading: false,
    error: '',
}

export const UsersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchUsers.fulfilled.type]: (state, action: PayloadAction<IUser[]>) => {
            state.isLoading = false;
            state.error = ''
            state.users = action.payload;
        },
        [fetchUsers.pending.type]: (state) => {
            state.isLoading = true;
        },
        [fetchUsers.rejected.type]: (state,  action: PayloadAction<string>) => {
            console.log(action)
            state.isLoading = false;
            state.error = action.payload
        },
    }
})

export default UsersSlice.reducer;