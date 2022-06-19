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

    static async getUser(email: string): Promise<AxiosResponse<IUser>> {
        return api.get('/users/search', {
            params: {email}
        })
    }
}