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

export const login = createAsyncThunk(
    'auth/login',
    async ({email, password}:ILogin, thunkAPI) => {
        try {
            const response = await AuthService.login(email, password)
            console.log(response)
            localStorage.setItem('token', response.data.accessToken)
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue("Не правильный логин/пароль")
        }
    }
)

export const logout = createAsyncThunk(
    'auth/logout',
    async (_, thunkAPI) => {
        try {
            const response = await AuthService.logout()
            localStorage.removeItem('token')
            console.log(response)
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
            console.log(response)
            localStorage.setItem('token', response.data.accessToken)
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue("Введены не ввалидные данные")
        }
    }
)

export const checkAuth = createAsyncThunk(
    'auth/checkAuth',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get<AuthResponse>(`${API_URL}/refresh`,{withCredentials: true})
            console.log(response)
            localStorage.setItem('token', response.data.accessToken)
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue("Не удалось загрузить пользователей")
        }
    }
)
