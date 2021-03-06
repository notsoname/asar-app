import { AxiosResponse } from "axios";
import api from "../api";
import { AuthResponse } from "../models/response/AuthResponse";

export default class AuthService {
    static async registration(email: string, password: string, nickname: string): Promise<AxiosResponse<AuthResponse>> {
        return api.post<AuthResponse>('/registration', {email, password, nickname})
    }

    static async login(nickname: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        return api.post<AuthResponse>('/login', {nickname, password})
    }

    static async logout(): Promise<void> {
        return api.post('/logout')
    }
}