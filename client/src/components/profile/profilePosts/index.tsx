import { FC } from "react";
import { IPost } from "../../../models/IPost";

interface ProfilePostsProps {
    posts: IPost[];
}
const ProfilePosts: FC<ProfilePostsProps> = ({posts}) => {
    return (
        <div className="d-flex flex-wrap">
            {posts.map(post => (
                <img className="w-25 p-1" key={post._id} src={post.image} alt="" />
            ))}
        </div>
    )
}

export default ProfilePosts;