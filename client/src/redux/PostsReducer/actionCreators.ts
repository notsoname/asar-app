import { IUser } from './../../models/IUser';
import { createAsyncThunk } from "@reduxjs/toolkit";
import AuthService from '../../services/AuthService';
import axios from 'axios';
import { AuthResponse } from '../../models/response/AuthResponse';
import { API_URL } from '../../api';
import PostServise from '../../services/PostService';
import { IPost } from '../../models/IPost';
interface ICreateComment {
    id: string;
    text: string;
}

interface ICreatePost {
    formData: {
        title: FormData;
        description: FormData;
        image: FormData;
    }
}

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

export const getUserPosts = createAsyncThunk(
    'posts/getUserPosts',
    async (nickname: string, thunkAPI) => {
        try {
            const response = await PostServise.getUserPosts(nickname)
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue("")
        }
    }
)

export const createPost = createAsyncThunk(
    'posts/createPost',
    async (formData: FormData, thunkAPI) => {
        try {
            await PostServise.createPost(formData)
            const response = await PostServise.fetchPosts()
            return response.data;
        } catch (e: any) {
            return thunkAPI.rejectWithValue(e.response.data.message)
        }
    }
)
// export const createPost = createAsyncThunk(
//     'posts/createPost',
//     async ({title, description, image}: ICreatePost, thunkAPI) => {
//         try {
//             await PostServise.createPost(title, description, image)
//             const response = await PostServise.fetchPosts()
//             return response.data;
//         } catch (e: any) {
//             return thunkAPI.rejectWithValue(e.response.data.message)
//         }
//     }
// )

export const likePost = createAsyncThunk(
    'posts/likePost',
    async (id: string, thunkAPI) => {
        try {
            await PostServise.likePost(id)
            const response = await PostServise.fetchPosts()
            return response.data;
        } catch (e: any) {
            return thunkAPI.rejectWithValue(e.response.data.message)
        }
    }
)

export const unlikePost = createAsyncThunk(
    'posts/unlikePost',
    async (id: string, thunkAPI) => {
        try {
            await PostServise.unlikePost(id)
            const response = await PostServise.fetchPosts()
            return response.data;
        } catch (e: any) {
            return thunkAPI.rejectWithValue(e.response.data.message)
        }
    }
)

export const createComment = createAsyncThunk(
    'posts/unlikePost',
    async ({id, text}: ICreateComment, thunkAPI) => {
        try {
            await PostServise.createComment(id, text)
            const response = await PostServise.fetchPosts()
            return response.data;
        } catch (e: any) {
            return thunkAPI.rejectWithValue(e.response.data.message)
        }
    }
)
