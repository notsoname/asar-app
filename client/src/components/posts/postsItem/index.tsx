import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { IPost } from "../../../models/IPost";
import { Dropdown, Card, Modal, Button, InputGroup, Form } from "react-bootstrap";
import style from "./postItem.module.scss";
import LikesItem from "../likesItem";
import CommentsItem from "../commentsItem";
import { HeartFill, ThreeDotsVertical } from "react-bootstrap-icons";
import { useAppDispatch } from "../../../hooks";
import { updatePost } from "../../../redux/postsReducer/actionCreators";

interface PostItemProps {
    post: IPost;
    nickname: string;
    like: (_id: string) => void;
    unlike: (_id: string) => void;
    onCreateComment: (e: React.MouseEvent<HTMLButtonElement>, _id: string, text: string) => void;
    deleteP: (_id: string) => void;
    show: Boolean;
}
export const API = "http://localhost:5050"

const PostItem: FC<PostItemProps> = ({post, like, unlike, nickname, onCreateComment, deleteP, show}) => {
    const {_id, image, description, likes, postedBy, comments} = post;
    const dispatch = useAppDispatch();
    const [showEdit, setShow] = useState<boolean>(false);
    const [postTitle, setPostTile] = useState<string>("");
    const [postDescription, setPostDescription] = useState<string>("");

    const handleClose = () => setShow(false);
    const editPost = () => setShow(true);
  
    const saveChanges = (title: string, description: string, _id: string) => {
        dispatch(updatePost({title,description, _id}));
        setShow(false);
    };

    return (
        <>
            <Card className={`w-50 m-2 ${style.card}`}>
                {nickname === postedBy && 
                    <Dropdown className={`d-flex justify-content-end ${style.actions}`}>
                        <Dropdown.Toggle variant="Info" id="dropdown-basic">
                            <ThreeDotsVertical/>
                        </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item onClick={() => deleteP(_id)}>Удалить</Dropdown.Item>
                        <Dropdown.Item onClick={() => editPost()}>Изменить</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                }
                <Card.Img 
                    variant="top" 
                    src={`${API}/${image}`}
                    onDoubleClick={() => like(_id)}
                />
                <HeartFill className={`${style.reaction} ${show ? style.like : ""}`}/>
                <Card.Body>
                    <div className="d-flex">
                        <Card.Title><Link to={`users/${postedBy}`}  className={style.nickname}>{postedBy}</Link></Card.Title>
                        <Card.Text className="ms-1">{ description}</Card.Text>
                    </div>
                    <LikesItem 
                        likes={likes}
                        like={like}
                        unlike={unlike}
                        nickname={nickname}
                        id={_id}
                    />
                    <CommentsItem
                        comments={comments}
                        onCreateComment={onCreateComment}
                        id={_id}
                    />
                </Card.Body>
            </Card>
            <Modal centered show={showEdit} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Edit</Modal.Title>
                </Modal.Header>
                <Modal.Body className="d-flex justify-content-center gap-2">
                    <InputGroup>
                        <Form.Control
                            type="text" 
                            placeholder="Title"
                            value={postTitle}
                            onChange={e => setPostTile(e.target.value)}
                        />
                    </InputGroup>
                    <InputGroup>
                        <Form.Control
                            type="text"
                            placeholder="Description"
                            value={postDescription}
                            onChange={e => setPostDescription(e.target.value)}
                        />
                    </InputGroup>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="primary" onClick={() => saveChanges(postTitle, postDescription, _id)}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default PostItem;