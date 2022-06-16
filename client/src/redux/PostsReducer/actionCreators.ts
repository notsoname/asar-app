import { IUser } from './../../models/IUser';
import { createAsyncThunk } from "@reduxjs/toolkit";
import AuthService from '../../services/AuthService';
import axios from 'axios';
import { AuthResponse } from '../../models/response/AuthResponse';
import { API_URL } from '../../api';
import PostServise from '../../services/PostService';
import { IPost } from '../../models/IPost';

export const fetchPosts = createAsyncThunk(
    'posts/getPosts',
    async (_, thunkAPI) => {
        try {
            const response = await PostServise.fetchPosts()
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue("")
        }
    }
)

export const createPost = createAsyncThunk(
    'posts/createPost',
    async ({title, description}: IPost, thunkAPI) => {
        try {
            await PostServise.createPost(title, description)
            const response = await PostServise.fetchPosts()
            return response.data;
        } catch (e: any) {
            return thunkAPI.rejectWithValue(e.response.data.message)
        }
    }
)