import { AxiosResponse } from "axios";
import api from "../api";
import { IPost } from "../models/IPost";

export default class PostServise {
    static async fetchPosts(): Promise<AxiosResponse<IPost[]>> {
        return api.get<IPost[]>('/posts')
    }

    static async getOnePost(_id: string): Promise<AxiosResponse<IPost[]>> {
        return api.get<IPost[]>(`/posts/${_id}`)
    }

    static async getUserPosts(nickname: string): Promise<AxiosResponse<IPost[]>> {
        return api.get<IPost[]>('/posts/userPosts', {
            params: {nickname}
        })
    }

    static async createPost(formData: FormData): Promise<AxiosResponse<IPost>> {
        return api.post<IPost>('/posts/create', formData)
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

    static async deletePost(_id: string): Promise<AxiosResponse<IPost>> {
        return api.delete(`/posts/${_id}/`)
    }

    static async updatePost(post: Object,): Promise<AxiosResponse<IPost>> {
        return api.put(`/posts/update`, post)
    }
}
