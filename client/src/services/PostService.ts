import { AxiosResponse } from "axios";
import api from "../api";
import { IPost } from "../models/IPost";

export default class UserService {
    static async fetchUsers(): Promise<AxiosResponse<IPost[]>> {
        return api.get<IPost[]>('/posts')
    }
}