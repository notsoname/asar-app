import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../models/IUser";
import { getUser, searchUsers } from "./actionCreators";


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
        [searchUsers.fulfilled.type]: (state, action: PayloadAction<IUser[]>) => {
            state.isLoading = false;
            state.error = ''
            state.users = action.payload;
        },
        [searchUsers.pending.type]: (state) => {
            state.isLoading = true;
        },
        [searchUsers.rejected.type]: (state,  action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload
        },

        // [getUser.fulfilled.type]: (state, action: PayloadAction<IUser>) => {
        //     state.isLoading = false;
        //     state.error = ''
        //     state.users = action.payload;
        // },
        // [getUser.pending.type]: (state) => {
        //     state.isLoading = true;
        // },
        // [getUser.rejected.type]: (state,  action: PayloadAction<string>) => {
        //     state.isLoading = false;
        //     state.error = action.payload
        // },
    }
})

export default UsersSlice.reducer;