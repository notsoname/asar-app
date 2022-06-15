export interface IPost {
    title: string,
    description: boolean;
    id?: string;
    image: string;
    comments?: Object;
    likes: number;
}