import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPost } from "../../models/IPost";
import { fetchPosts } from "./actionCreators";

interface PostsState {
    posts: IPost[];
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
            console.log(action)
            state.isLoading = false;
            state.error = action.payload
        },
    }
})

export default PostsSlice.reducer;