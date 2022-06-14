import { AxiosResponse } from "axios";
import api from "../api";
import { IPost } from "../models/IPost";
import { PostsResponse } from "../models/response/PostsResponse";

export default class PostServise {
    static async fetchPosts(): Promise<AxiosResponse<IPost[]>> {
        return api.get<IPost[]>('/posts')
    }

    static async createPost(): Promise<AxiosResponse<IPost>> {
        return api.post<IPost>('/posts/create',)
    }
}
