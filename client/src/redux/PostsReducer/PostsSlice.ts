import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPost } from "../../models/IPost";
import { createPost, fetchPosts, getUserPosts, likePost, unlikePost } from "./actionCreators";

interface PostsState {
    posts: IPost[];
    post?: IPost;
    isLoading: boolean;
    error: string;
}

const initialState: PostsState = {
    posts: [],
    isLoading: false,
    error: '',
}

export const PostsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchPosts.fulfilled.type]: (state, action: PayloadAction<IPost[]>) => {
            state.isLoading = false;
            state.error = ''
            state.posts = action.payload;
        },
        [fetchPosts.pending.type]: (state) => {
            state.isLoading = true;
        },
        [fetchPosts.rejected.type]: (state,  action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload
        },

        [getUserPosts.fulfilled.type]: (state, action: PayloadAction<IPost[]>) => {
            console.log(action.payload)
            state.isLoading = false;
            state.error = ''
            state.posts = action.payload;
        },
        [getUserPosts.pending.type]: (state) => {
            state.isLoading = true;
        },
        [getUserPosts.rejected.type]: (state,  action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload
        },

        [createPost.fulfilled.type]: (state, action: PayloadAction<IPost[]>) => {
            state.isLoading = false;
            state.error = ''
            state.posts = action.payload;
        },
        [createPost.pending.type]: (state) => {
            state.isLoading = true;
        },
        [createPost.rejected.type]: (state,  action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload
        },

        [likePost.fulfilled.type]: (state, action: PayloadAction<IPost[]>) => {
            state.isLoading = false;
            state.error = ''
            state.posts = action.payload;
        },
        [likePost.pending.type]: (state) => {
            state.isLoading = true;
        },
        [likePost.rejected.type]: (state,  action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload
        },

        [unlikePost.fulfilled.type]: (state, action: PayloadAction<IPost[]>) => {
            state.isLoading = false;
            state.error = ''
            state.posts = action.payload;
        },
        [unlikePost.pending.type]: (state) => {
            state.isLoading = true;
        },
        [unlikePost.rejected.type]: (state,  action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload
        },
    }
})

export default PostsSlice.reducer;