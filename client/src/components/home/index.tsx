import { FC, useState } from "react";
import { useAppDispatch } from "../../hooks";
import { createPost } from "../../redux/postsReducer/actionCreators";
import PostItems from "../posts/postsItems";

const Home: FC = () => {
    return (
        <div>
            <PostItems/>
        </div>
    )
}

export default Home;