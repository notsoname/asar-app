import { IUser } from './../../models/IUser';
import { createAsyncThunk } from "@reduxjs/toolkit";
import AuthService from '../../services/AuthService';
import axios from 'axios';
import { AuthResponse } from '../../models/response/AuthResponse';
import { API_URL } from '../../api';
import PostServise from '../../services/PostService';
import UserService from '../../services/UserService';

export const searchUsers = createAsyncThunk(
    'users/searchUsers',
    async (email: string, thunkAPI) => {
        try {
            const response = await UserService.searchUsers(email)
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue("")
        }
    }
)

export const getUser = createAsyncThunk(
    'users/getUser',
    async (email: string, thunkAPI) => {
        try {
            const response = await UserService.getUser(email)
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue("")
        }
    }
)
