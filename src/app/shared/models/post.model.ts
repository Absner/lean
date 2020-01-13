export interface IPost {

    userId: number;
    id: number;
    title: string;
    body: string;

}

export class Post {

    userId: number;
    id: number;
    title: string;
    body: string;

}

export interface IComments {

    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;

}

export class Comments {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
}
