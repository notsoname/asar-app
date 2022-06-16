import { useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../../hooks"
import { createPost, fetchPosts } from "../../../redux/PostsReducer/actionCreators"
import PostItem from "../postsItem"

export default function PostItems() {
    const dispatch = useAppDispatch()
    const [title, setTitle] = useState<string>('')
    const [description, setDescription] = useState<string>('')
    const [image, setImg] = useState<string>('')
    const [likes, setLikes] = useState<number>(0)

    const {posts} = useAppSelector(state => state.PostReducer)

    const create = () => {
        dispatch(createPost({title, description, image, likes}))
        setTitle("")
        setDescription("")
    }
    const deletePost = () => {

    }
    const updatePost = () => {

    }

    useEffect(() => {
        dispatch(fetchPosts())
    }, [])

    return (
        <>
            {/* <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
            <input type="text" value={description} onChange={e => setDescription(e.target.value)} />
            <button className="btn btn-primary mt-2" onClick={create}>Create</button> */}
        <div className="d-flex justify-content-center flex-wrap">
            {posts && posts.map(post => (
                    <PostItem
                        post={post} 
                        remove={deletePost}
                        update={updatePost}    
                    />
                ))}
        </div>
        </>
    )
}