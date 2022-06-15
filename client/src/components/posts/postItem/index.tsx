import { FC } from "react";
import { IPost } from "../../../models/IPost";

interface PostItemProps {
    post: IPost;
    remove: (post: IPost) => void;
    update: (post: IPost) => void;
}



const PostItem: FC<PostItemProps> = ({post, update, remove}) => {

    return (
        <div>{post.name}</div>
    )
}

export default PostItem;