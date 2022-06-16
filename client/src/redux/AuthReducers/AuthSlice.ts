import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../models/IUser";
import { AuthResponse } from "../../models/response/AuthResponse";
import { checkAuth, login, logout, registration } from "./actionCreators";

interface UserState {
    user: IUser;
    isLoading: boolean;
    error: string;
    auth: boolean;
}

const initialState: UserState = {
    user: {} as IUser,
    isLoading: false,
    error: '',
    auth: false,
}

export const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: {
        [login.fulfilled.type]: (state, action: PayloadAction<AuthResponse>) => {
            state.isLoading = false;
            state.error = ''
            state.user = action.payload.user;
            state.auth = true;
        },
        [login.pending.type]: (state) => {
            state.isLoading = true;
        },
        [login.rejected.type]: (state,  action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
            state.auth = false;
        },

        [registration.fulfilled.type]: (state, action: PayloadAction<AuthResponse>) => {
            state.isLoading = false;
            state.error = ''
            state.user = action.payload.user;
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

        [logout.fulfilled.type]: (state, action: PayloadAction<IUser>) => {
            state.isLoading = false;
            state.error = ''
            // state.user = [];
            state.auth = false;
        },
        [logout.pending.type]: (state) => {
            state.isLoading = true;
        },
        [logout.rejected.type]: (state,  action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload
            state.auth = false;
        },

        [checkAuth.fulfilled.type]: (state, action: PayloadAction<AuthResponse>) => {
            console.log(action)
            state.isLoading = false;
            state.error = ''
            state.user = action.payload.user;
            state.auth = true;
        },
        [checkAuth.pending.type]: (state) => {
            state.isLoading = true;
        },
        [checkAuth.rejected.type]: (state,  action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload
        },
        
    }
})

export default AuthSlice.reducer;