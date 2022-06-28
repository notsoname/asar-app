import { AxiosResponse } from "axios";
import api from "../api";
import { IUser} from "../models/IUser";
import { UserResponse } from "../models/response/UsersReponse";

export default class UserService {
    static async searchUsers(email: string): Promise<AxiosResponse<IUser[]>> {
        return api.get('/users/search', {
            params: {email}
        })
    }

    static async getUser(nickname: string): Promise<AxiosResponse<UserResponse>> {
        return api.get<UserResponse>('/users/search', {
            params: {nickname}
        })
    }

    static async sendFriendRequest(nickname: string): Promise<AxiosResponse<IUser>> {
        return api.put('/users/friends', {nickname})
    }

    static async acceptFriendRequest(nickname: string): Promise<AxiosResponse<IUser>> {
        return api.put('/users/friends/accept', {nickname})
    }
}