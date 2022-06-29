import { FC, useState } from "react";
import { useAppDispatch } from "../../hooks";
import { createPost } from "../../redux/PostsReducer/actionCreators";
import PostItems from "../posts/postsItems";

const Home: FC = () => {
    const dispatch = useAppDispatch()
    const [file, setFile] = useState<File>()
    const handleImageChange = function (e: React.ChangeEvent<HTMLInputElement>) {
        const fileList = e.target.files;
        if (!fileList) return;
        setFile(fileList[0]);
    };

    const uploadFile = function (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) {
        if (file) {
            const formData = new FormData();
            formData.append("image", file, file.name);
            formData.append("title", "hello")
            formData.append("description", "description")
            dispatch(createPost(formData))
        }
    };

    return (
        <div>
            <PostItems/>
        </div>
    )
}

export default Home;