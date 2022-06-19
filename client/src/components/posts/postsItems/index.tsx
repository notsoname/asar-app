import { useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../../hooks"
import { createComment, createPost, fetchPosts, likePost, unlikePost } from "../../../redux/PostsReducer/actionCreators"
import PostItem from "../postsItem"

export default function PostItems() {
    const dispatch = useAppDispatch()
    const [title, setTitle] = useState<string>('')
    const [description, setDescription] = useState<string>('')
    const [image, setImg] = useState<string>('')
    const [likes, setLikes] = useState<number>(0)

    const {posts} = useAppSelector(state => state.PostReducer)
    const {user} = useAppSelector(state => state.AuthReducer)
    const create = () => {
        dispatch(createPost({title, description, image}))
        setTitle("")
        setDescription("")
    }

    const onLike = (_id: string) => {
        dispatch(likePost(_id))
    }
    const onUnlike = (_id: string) => {
        dispatch(unlikePost(_id))
    }

    const onCreateComment = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, id: string, text: string) => {
        e.preventDefault();
        dispatch(createComment({id, text}))
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
                        like={(_id) => onLike(_id)}
                        unlike={(_id) => onUnlike(_id)}
                        nickname={user.nickname}
                        onCreateComment={(e, id, text) => onCreateComment(e,id, text)}
                    />
                ))}
        </div>
        </>
    )
}