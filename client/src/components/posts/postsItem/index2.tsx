import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { IPost } from "../../../models/IPost";
import { Heart } from "react-bootstrap-icons";
import { HeartFill } from "react-bootstrap-icons";
import { Dropdown } from "react-bootstrap";

interface PostItemProps {
    post: IPost;
    nickname: string;
    like: (_id: string) => void
    unlike: (_id: string) => void
    onCreateComment: (e: React.MouseEvent<HTMLButtonElement>, _id: string, text: string) => void
    deleteP: (_id: string) => void
}

const PostItem: FC<PostItemProps> = ({post, like, unlike, nickname, onCreateComment, deleteP}) => {
    const {_id, image, description, likes, postedBy, comments} = post;
    const [comment, setComment] = useState<string>("");

    return (
        <div className="card w-50 m-2">
            {nickname === postedBy && 
                <Dropdown className="d-flex justify-content-end">
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Dropdown Button
                    </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item onClick={() => deleteP(_id)}>Delete</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            }
             <img 
                className="card-img-top"     
                onDoubleClick={() =>likes.includes(nickname)
                    ? unlike(_id) 
                    : like(_id)} 
                src={image} 
                alt="">
            </img>
             <div className="card-body">
                <Link to={`users/${postedBy}`} className="card-title">{postedBy}</Link>
                <span className="card-text"> {description}</span>
                <p>likes: {likes.length}</p>
                {likes.includes(nickname)
                        ? <button onClick={() => unlike(_id)} className="btn btn-primary"><HeartFill/></button>
                        : <button onClick={() => like(_id)} className="btn btn-primary"><Heart/></button>
                }
                {comments.length > 5 
                    ? <><div>посмотреть все</div>
                      <strong>{comments[0].text}</strong></>
                    : comments?.map(comment => (
                        <div key={comment._id}><strong>{comment.postedBy}</strong> {comment.text}</div>
                    ))
                }
                <div className="d-flex">
                    <input className="form-control" type="text" value={comment} onChange={e => setComment(e.target.value)}/>
                    <button className="btn btn-primary" disabled={!comment} onClick={(e) => onCreateComment(e, _id, comment)}>комментировать</button>
                </div>
            </div>
        </div>
    )
}

export default PostItem;