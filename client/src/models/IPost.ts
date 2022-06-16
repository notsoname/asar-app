export interface IPost {
<<<<<<< HEAD
    name: string,
    description: string;
    id?: string;
=======
    title: string,
    description: boolean;
    id?: string;
    image: string;
    comments?: Object;
    likes: number;
>>>>>>> bd749e7f0360a2ff3511448de23556fdd8b14048
}