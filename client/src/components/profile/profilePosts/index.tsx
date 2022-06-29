import { FC } from "react";
import { IPost } from "../../../models/IPost";

interface ProfilePostsProps {
    posts: IPost[];
}
const ProfilePosts: FC<ProfilePostsProps> = ({posts}) => {
    return (
        <div className="d-flex flex-wrap">
            {posts.map(post => (
                <div key={post._id}>  
                    <img className="w-25 p-1" src={post.image} alt="" />
                    <div>{post.title}</div>
                </div>
            ))}
        </div>
    )
}

export default ProfilePosts;