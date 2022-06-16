import { useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../../hooks"
<<<<<<< HEAD
import { createPost, fetchPosts } from "../../../redux/PostsReducer/actionCreators"
import PostItem from "../postItem"
=======
import { fetchPosts } from "../../../redux/PostsReducer/actionCreators"
import PostItem from "../postsItem"
>>>>>>> bd749e7f0360a2ff3511448de23556fdd8b14048

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
<<<<<<< HEAD
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
=======
        <div className="d-flex flex-wrap justify-content-center">
            {posts.map(post => (
                <PostItem post={post} key={post.id}/>
>>>>>>> bd749e7f0360a2ff3511448de23556fdd8b14048
            ))}
        </div>
    )
}
