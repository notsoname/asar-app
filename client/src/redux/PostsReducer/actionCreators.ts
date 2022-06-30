import { createAsyncThunk } from "@reduxjs/toolkit";
import PostServise from '../../services/PostService';
interface ICreateComment {
    id: string;
    text: string;
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

export const deletePost = createAsyncThunk(
    'posts/deletePost',
    async (id: string, thunkAPI) => {
        try {
            await PostServise.deletePost(id)
            const response = await PostServise.fetchPosts()
            // const response = await PostServise.deletePost(id)
            return response.data;
        } catch (e: any) {
            return thunkAPI.rejectWithValue(e.response.data.message)
        }
    }
)

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
    'posts/createComment',
    async ({id, text}: ICreateComment, thunkAPI) => {
        try {
            await PostServise.createComment(id, text)
            const response = await PostServise.fetchPosts()
            // const response = await PostServise.createComment(id, text)
            // console.log(response)
            return response.data;
        } catch (e: any) {
            return thunkAPI.rejectWithValue(e.response.data.message)
        }
    }
)
