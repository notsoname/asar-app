import { FC, useState } from "react"
import { Button, Form, InputGroup, Modal } from "react-bootstrap";
import { PlusCircleFill } from "react-bootstrap-icons";
import { useAppDispatch } from "../../../hooks";
import { createPost } from "../../../redux/postsReducer/actionCreators";

const CreatePost:FC = () => {
    const dispatch = useAppDispatch()

    const createUserPost = () => {
        const formData = new FormData;
        formData.append("title", title);
        formData.append("description", description);
        formData.append('file', selectedFile);
        formData.append('fileName', selectedFile.name);
        dispatch(createPost(formData));
        setShow(false);
        setTitle("");
        setDescription("");
    }

    const [selectedFile, setSelectedFile] = useState<any>();
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const changeHandler = (event: any) => {
		setSelectedFile(event.target.files[0]);
	};

    return (
        <div className="d-flex justify-content-center">
            <Button className="w-50" variant="primary" onClick={handleShow}>
                <PlusCircleFill/>
            </Button>

            <Modal centered show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>New post</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                        <InputGroup className="mb-3">
                            <Form.Control
                                placeholder="Title"
                                aria-label="Title"
                                aria-describedby="title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                            <Form.Control
                                placeholder="description"
                                aria-label="Description"
                                aria-describedby="description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </InputGroup>
                </Modal.Body>
                <Modal.Footer>
                    <input type="file" name="file" onChange={changeHandler} />
                    <Button 
                        disabled={!title || !description}
                        variant="primary" 
                        onClick={createUserPost}>
                        create
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default CreatePost;