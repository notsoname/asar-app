import { FC, useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { IPost } from "../../../models/IPost";
import { getOnePost } from "../../../redux/postsReducer/actionCreators";
import { API } from "../../posts/postsItem";

interface ProfilePostsProps {
    posts: IPost[];
}
const ProfilePosts: FC<ProfilePostsProps> = ({posts}) => {
    const [show, setShow] = useState(false);
    const dispatch = useAppDispatch();
    const {post} = useAppSelector(state => state.PostReducer);

    const handleClose = () => setShow(false);
    const handleShow = (id: string) => {
        dispatch(getOnePost(id))
        setShow(true)
    };

    return (
        <>
            <div className="d-flex flex-wrap mt-2">
                {posts.map(post => (
                    <div className="w-25 h-25" key={post._id}>  
                        <img 
                            className="w-100 p-1 h-100" 
                            onClick={() => handleShow(post._id)} 
                            src={`${API}/${post.image}`}
                            alt="" />
                        <div>{post.title}</div>
                    </div>
                ))}
            </div>
            {post &&             
                <Modal 
                    show={show} 
                    centered	
                    onHide={handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>{post.postedBy}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {post.description}
                        <img 
                            className="w-100"
                            src={`${API}/${post.image}`}
                            alt="photo" />
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    </Modal.Footer>
                </Modal>}
        </>

    )
}

export default ProfilePosts;