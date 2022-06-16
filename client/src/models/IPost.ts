export interface IPost {
    title: string,
    description: string;
    id?: string;
    image: string;
    comments?: Object;
    likes: number;
}