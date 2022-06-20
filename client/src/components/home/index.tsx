import { FC, useState } from "react";
import { useAppDispatch } from "../../hooks";
import { createPost } from "../../redux/PostsReducer/actionCreators";
import PostItems from "../posts/postsItems";

const Home: FC = () => {
    const dispatch = useAppDispatch()
    const [title, setTitle] = useState<string>('Hello')
    const [description, setDescription] = useState<string>('posts')
    const [fileSelected, setFileSelected] = useState<File>()
    const create = () => {
        // dispatch(createPost({title, description, image}))
        setTitle("")
        setDescription("")
    }

    const handleImageChange = function (e: React.ChangeEvent<HTMLInputElement>) {
        const fileList = e.target.files;
        if (!fileList) return;
        setFileSelected(fileList[0]);
    };

    const uploadFile = function (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) {
        if (fileSelected) {
            const formData = new FormData();
            formData.append("image", fileSelected, fileSelected.name);
            // dispatch(createPost({title, description, image}))
            console.log(formData)
        }
    };

    return (
        <div>
            <input type="file" onChange={handleImageChange} />
            <button onClick={uploadFile}>create</button>
            <PostItems/>
        </div>
    )
}

export default Home;