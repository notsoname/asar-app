import { IUser } from './../../models/IUser';
import { createAsyncThunk } from "@reduxjs/toolkit";
import AuthService from '../../services/AuthService';
import axios from 'axios';
import { AuthResponse } from '../../models/response/AuthResponse';
import { API_URL } from '../../api';

interface ILogin {
    email: string;
    password: string;
}
interface IRegister {
    email: string;
    password: string;
    nickname: string;
}

export const login = createAsyncThunk(
    'auth/login',
    async ({email, password}:ILogin, thunkAPI) => {
        try {
            const response = await AuthService.login(email, password)
            localStorage.setItem('token', response.data.accessToken)
            return response.data;
        } catch (e: any) {
            return thunkAPI.rejectWithValue(e.response.data.message)
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
    async ({email, password, nickname}:IRegister, thunkAPI) => {
        try {
            const response = await AuthService.registration(email, password, nickname)
            localStorage.setItem('token', response.data.accessToken)
            return response.data;
        } catch (e: any) {
            return thunkAPI.rejectWithValue(e.response.data.message)
        }
    }
)

export const checkAuth = createAsyncThunk(
    'auth/checkAuth',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get<AuthResponse>(`${API_URL}/refresh`,{withCredentials: true})
            localStorage.setItem('token', response.data.accessToken)
            return response.data;
        } catch (e: any) {
            return thunkAPI.rejectWithValue(e.response.data.message)
        }
    }
)
