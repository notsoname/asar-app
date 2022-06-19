import { type } from "os";
import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { IPost } from "../../../models/IPost";

interface PostItemProps {
    post: IPost;
    nickname: string;
    like: (_id: string) => void
    unlike: (_id: string) => void
    onCreateComment: (e: React.MouseEvent<HTMLButtonElement>, _id: string, text: string) => void
}

const PostItem: FC<PostItemProps> = ({post, like, unlike, nickname, onCreateComment}) => {
    const {_id, image, title, description, likes, postedBy, comments} = post;
    const [comment, setComment] = useState<string>("");

    return (
        <div className="card w-50 m-2">
             <img 
                className="card-img-top"         
                onDoubleClick={() =>likes.includes(nickname)
                                            ? unlike(_id) 
                                            : like(_id)} 
                src={image} alt="Card image cap">
            </img>
             <div className="card-body">
                <Link to={`users/${postedBy}`} className="card-title">{postedBy}</Link>
                <span className="card-text"> {description}</span>
                <p>likes: {likes.length}</p>
                {likes.includes(nickname)
                        ? <button onClick={() => unlike(_id)} className="btn btn-primary">unlike</button>
                        : <button onClick={() => like(_id)} className="btn btn-primary">like</button>
                }
                {comments?.map(comment => (
                    <div key={comment._id}><strong>{comment.postedBy}</strong> {comment.text}</div>
                ))}
                <input className="form-control" type="text" value={comment} onChange={e => setComment(e.target.value)}/>
                <button className="btn btn-primary" onClick={(e) => onCreateComment(e, _id, comment)}>комментировать</button>
            </div>
        </div>
    )
}

export default PostItem;