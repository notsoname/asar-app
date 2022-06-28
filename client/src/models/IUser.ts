export interface IUser {
    email: string;
    id: string;
    nickname: string;
    avatar: string;
    friends: Array<string>;
    requests: Array<string>;
}