import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPost } from "../../models/IPost";
import { createComment, createPost, deletePost, fetchPosts, getOnePost, getUserPosts, likePost, unlikePost, updatePost } from "./actionCreators";

interface PostsState {
    posts: IPost[];
    userPosts: IPost[];
    post?: IPost;
    allPosts: IPost[];
    isLoading: boolean;
    error: string;
}

const initialState: PostsState = {
    posts: [],
    userPosts: [],
    isLoading: false,
    error: '',
    allPosts: []
}

export const PostsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
    },
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

        [getOnePost.fulfilled.type]: (state, action: PayloadAction<IPost>) => {
            state.isLoading = false;
            state.error = ''
            state.post = action.payload;
        },
        [getOnePost.pending.type]: (state) => {
            state.isLoading = false;
        },
        [getOnePost.rejected.type]: (state,  action: PayloadAction<string>) => {
            state.error = action.payload;
            state.isLoading = false;
        },

        [getUserPosts.fulfilled.type]: (state, action: PayloadAction<IPost[]>) => {
            state.isLoading = false;
            state.error = ''
            state.userPosts = action.payload;
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

        [deletePost.fulfilled.type]: (state, action: PayloadAction<IPost[]>) => {
            state.isLoading = false;
            state.error = ''
            state.posts = action.payload;
        },
        [deletePost.pending.type]: (state) => {
            state.isLoading = true;
        },
        [deletePost.rejected.type]: (state,  action: PayloadAction<string>) => {
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

        [createComment.fulfilled.type]: (state, action: PayloadAction<IPost[]>) => {
            state.isLoading = false;
            state.error = '';
            state.posts = action.payload;
        },
        [createComment.pending.type]: (state) => {
            state.isLoading = true;
        },
        [createComment.rejected.type]: (state,  action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload
        },

        [updatePost.fulfilled.type]: (state, action: PayloadAction<IPost[]>) => {
            state.isLoading = false;
            state.error = '';
            state.posts = action.payload;
        },
        [updatePost.pending.type]: (state) => {
            state.isLoading = true;
        },
        [updatePost.rejected.type]: (state,  action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload
        },
    }
})

export default PostsSlice.reducer;