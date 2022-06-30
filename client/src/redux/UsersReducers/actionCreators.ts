import { createAsyncThunk } from "@reduxjs/toolkit";
import UserService from '../../services/UserService';

export const searchUsers = createAsyncThunk(
    'users/searchUsers',
    async (nickname: string, thunkAPI) => {
        try {
            const response = await UserService.searchUsers(nickname);
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue("");
        }
    }
)

export const getUser = createAsyncThunk(
    'users/getUser',
    async (email: string, thunkAPI) => {
        try {
            const response = await UserService.getUser(email);
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue("");
        }
    }
)

export const sendFriendRequest = createAsyncThunk(
    'users/friendsend',
    async (nickname: string, thunkAPI) => {
        try {
            const response = await UserService.sendFriendRequest(nickname);
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue("");
        }
    }
)

export const acceptFriendRequest = createAsyncThunk(
    'users/friendAccept',
    async (nickname: string, thunkAPI) => {
        try {
            const response = await UserService.acceptFriendRequest(nickname);
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue("");
        }
    }
)
