import { IUser } from './../../models/IUser';
import { createAsyncThunk } from "@reduxjs/toolkit";
import AuthService from '../../services/AuthService';

interface ILogin {
    email: string;
    password: string;
}

export const login = createAsyncThunk(
    'auth/login',
    async ({email, password}:ILogin, thunkAPI) => {
        try {
            const response = await AuthService.login(email, password)
            localStorage.setItem('token', response.data.accessToken)
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue("")
        }
    }
)

export const logout = createAsyncThunk(
    'auth/logout',
    async (_, thunkAPI) => {
        try {
            const response = await AuthService.logout()
            localStorage.removeItem('token')
            return response;
        } catch (e) {
            return thunkAPI.rejectWithValue("")
        }
    }
)
export const registration = createAsyncThunk(
    'auth/registration',
    async ({email, password}:ILogin, thunkAPI) => {
        try {
            const response = await AuthService.registration(email, password)
            localStorage.setItem('token', response.data.accessToken)
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue("")
        }
    }
)
