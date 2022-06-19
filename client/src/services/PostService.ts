import { AxiosResponse } from "axios";
import api from "../api";
import { IPost } from "../models/IPost";
import { PostsResponse } from "../models/response/PostsResponse";

export default class PostServise {
    static async fetchPosts(): Promise<AxiosResponse<IPost[]>> {
        return api.get<IPost[]>('/posts')
    }

    static async getUserPosts(nickname: string): Promise<AxiosResponse<IPost[]>> {
        return api.get<IPost[]>('/posts/userPosts', {
            params: {nickname}
        })
    }

    static async createPost(name : string, description: string, image: string): Promise<AxiosResponse<IPost>> {
        return api.post<IPost>('/posts/create', {name, description, image})
    }

    static async likePost(_id: string): Promise<AxiosResponse<IPost>> {
        return api.put<IPost>('/posts/like', {_id})
    }

    static async unlikePost(_id: string): Promise<AxiosResponse<IPost>> {
        return api.put<IPost>('/posts/unlike', {_id})
    }

    static async createComment(_id: string, text: string): Promise<AxiosResponse<IPost>> {
        return api.put<IPost>('/posts/comment', {_id, text})
    }
}
