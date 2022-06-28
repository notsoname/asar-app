import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../models/IUser";
import { UserResponse } from "../../models/response/UsersReponse";
import { acceptFriendRequest, getUser, searchUsers, sendFriendRequest } from "./actionCreators";


interface UsersState {
    users: IUser[];
    isLoading: boolean;
    error: string;
    user: IUser[];
}

const initialState: UsersState = {
    users: [],
    isLoading: false,
    error: '',
    user: []
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

        [sendFriendRequest.fulfilled.type]: (state, action: PayloadAction<IUser[]>) => {
            state.isLoading = false;
            state.error = ''
            state.users = action.payload;
        },
        [sendFriendRequest.pending.type]: (state) => {
            state.isLoading = true;
        },
        [sendFriendRequest.rejected.type]: (state,  action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload
        },

        [acceptFriendRequest.fulfilled.type]: (state, action: PayloadAction<IUser[]>) => {
            state.isLoading = false;
            state.error = ''
            state.users = action.payload;
        },
        [acceptFriendRequest.pending.type]: (state) => {
            state.isLoading = true;
        },
        [acceptFriendRequest.rejected.type]: (state,  action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload
        },

        [getUser.fulfilled.type]: (state, action: PayloadAction<IUser[]>) => {
            console.log(action.payload)
            state.isLoading = false;
            state.error = '';
            state.user = action.payload;
        },
        [getUser.pending.type]: (state) => {
            state.isLoading = true;
        },
        [getUser.rejected.type]: (state,  action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload
        },
    }
})

export default UsersSlice.reducer;