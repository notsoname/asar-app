import { createAsyncThunk } from "@reduxjs/toolkit";
import UserService from '../../services/userService';

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
    'users/getUserOne',
    async (nickname: string, thunkAPI) => {
        try {
            const response = await UserService.getUser(nickname);
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue("");
        }
    }
)

export const getAllUsers = createAsyncThunk(
    'users/getUser',
    async (_, thunkAPI) => {
        try {
            const response = await UserService.getAllUsers();
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
            await UserService.sendFriendRequest(nickname);
            // const response = await UserService.sendFriendRequest(nickname);
            const response = await UserService.getUser(nickname);
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
            await UserService.acceptFriendRequest(nickname);
            const response = await UserService.getUser(nickname);
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue("");
        }
    }
)

export const deleteFriend = createAsyncThunk(
    'users/friendAccept',
    async (nickname: string, thunkAPI) => {
        try {
            await UserService.deleteFriend(nickname);
            const response = await UserService.getUser(nickname);
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue("");
        }
    }
)
