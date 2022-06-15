import { useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../../hooks"
import { createPost, fetchPosts } from "../../../redux/PostsReducer/actionCreators"
import PostItem from "../postItem"

export default function PostItems() {
    const dispatch = useAppDispatch()
    const [name, setName] = useState<string>('')
    const [description, setDescription] = useState<string>('')
    const {posts} = useAppSelector(state => state.PostReducer)
    const create = () => {
        dispatch(createPost({name, description}))
        setName("")
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
        <div>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
            <input type="text" value={description} onChange={e => setDescription(e.target.value)} />
            <button className="btn btn-primary mt-2" onClick={create}>Create</button>
            {posts && posts.map(post => (
                <PostItem 
                    key={post.id} 
                    post={post} 
                    remove={deletePost}
                    update={updatePost}/>
            ))}
        </div>
    )
}
