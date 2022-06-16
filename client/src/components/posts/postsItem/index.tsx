import { FC } from "react";
import { IPost } from "../../../models/IPost";

interface PostItemProps {
    post: IPost;
}

const PostItem: FC<PostItemProps> = ({post}) => {
    return (
        <div className="card w-50 m-2">
             <img className="card-img-top" src={post.image} alt="Card image cap"></img>
             <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.description}</p>
                <p>likes: {post.likes}</p>
                <button className="btn btn-primary">like</button>
            </div>
        </div>
    )
}

export default PostItem;