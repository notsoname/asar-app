import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../models/IUser";
import { login, logout, registration } from "./actionCreators";

interface UserState {
    users: IUser[];
    isLoading: boolean;
    error: string;
    auth: boolean;
}

const initialState: UserState = {
    users: [],
    isLoading: false,
    error: '',
    auth: false,
}

export const AuthSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {},
    extraReducers: {
        [login.fulfilled.type]: (state, action: PayloadAction<IUser[]>) => {
            state.isLoading = false;
            state.error = ''
            state.users = action.payload;
            state.auth = true;
        },
        [login.pending.type]: (state) => {
            state.isLoading = true;
        },
        [login.rejected.type]: (state,  action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload
            state.auth = false;
        },
        [registration.fulfilled.type]: (state, action: PayloadAction<IUser[]>) => {
            state.isLoading = false;
            state.error = ''
            state.users = action.payload;
            state.auth = true;
        },
        [registration.pending.type]: (state) => {
            state.isLoading = true;
        },
        [registration.rejected.type]: (state,  action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload
            state.auth = false;
        },
        [logout.fulfilled.type]: (state, action: PayloadAction<IUser[]>) => {
            state.isLoading = false;
            state.error = ''
            state.users = action.payload;
            state.auth = true;
        },
        [logout.pending.type]: (state) => {
            state.isLoading = true;
        },
        [logout.rejected.type]: (state,  action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload
            state.auth = false;
        },
    }
})

export default AuthSlice.reducer;