import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { IPost } from "../../../models/IPost";
import { Heart } from "react-bootstrap-icons";
import { HeartFill } from "react-bootstrap-icons";
import { Dropdown, Card, Button, InputGroup, Form } from "react-bootstrap";

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
        <Card className="w-50 m-2">
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
            <Card.Img 
                variant="top" 
                src={image}
                onDoubleClick={() => likes.includes(nickname)
                    ? unlike(_id) 
                    : like(_id)} 
            />
            <Card.Body>
                <Card.Title><Link to={`users/${postedBy}`} className="card-title">{postedBy}</Link></Card.Title>
                <Card.Text>{description}</Card.Text>
                <Card.Text>likes: {likes.length}</Card.Text>
                {likes.includes(nickname)
                    ? <Button variant="primary" onClick={() => unlike(_id)}><HeartFill/></Button>
                    : <Button variant="primary" onClick={() => like(_id)}><Heart/></Button>
                }
                {comments.length > 100 
                    ? <><div>посмотреть все</div>
                    <strong>{comments[0].text}</strong></>
                    : comments?.map(comment => (
                        <div key={comment._id}><strong>{comment.postedBy}</strong> {comment.text}</div>
                    ))
                }
                <InputGroup className="mb-5">
                    <Form.Control
                        placeholder=""
                        aria-label=""
                        aria-describedby=""
                        value={comment} 
                        onChange={e => setComment(e.target.value)}
                    />
                    <Button 
                        variant="primary"
                        disabled={!comment} 
                        onClick={(e) => onCreateComment(e, _id, comment)}
                        >комментировать</Button>
                </InputGroup>
            </Card.Body>
        </Card>
    )
}

export default PostItem;