import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IContact } from "../../models/IContact";
import { IUser } from "../../models/IUser";
import { acceptFriendRequest, getAllUsers, getUser, searchUsers, sendFriendRequest } from "./actionCreators";

interface UsersState {
    users: IUser[];
    isLoading: boolean;
    error: string;
    user: IUser[];
    contacts: IContact[];
}

const initialState: UsersState = {
    users: [],
    isLoading: false,
    error: '',
    user: [],
    contacts: []
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

        [getAllUsers.fulfilled.type]: (state, action: PayloadAction<IUser[]>) => {
            state.isLoading = false;
            state.error = '';
            state.contacts = action.payload;
        },
        [getAllUsers.pending.type]: (state) => {
            state.isLoading = true;
        },
        [getAllUsers.rejected.type]: (state,  action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload
        },
    }
})

export default UsersSlice.reducer;