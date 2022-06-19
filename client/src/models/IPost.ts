export interface IPost {
    title: string,
    description: string;
    _id: string;
    image: string;
    comments: IComments[];
    likes: Array<string>;
    postedBy: string;
}

interface IComments {
    text: string;
    postedBy: string;
    _id: string;
}