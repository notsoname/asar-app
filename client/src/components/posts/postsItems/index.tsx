import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../../hooks"
import { createComment, deletePost, fetchPosts, likePost, unlikePost } from "../../../redux/PostsReducer/actionCreators"
import PostItem from "../postsItem"

export default function PostItems() {
    const dispatch = useAppDispatch()

    const {posts} = useAppSelector(state => state.PostReducer)
    const {currentUser} = useAppSelector(state => state.AuthReducer)
    console.log(posts)
    const onLike = (_id: string) => {
        dispatch(likePost(_id))
    }

    const onUnlike = (_id: string) => {
        dispatch(unlikePost(_id))
    }

    const deleteP = (_id: string) => {
        dispatch(deletePost(_id))
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
            <div className="d-flex justify-content-center flex-wrap">
                {posts && posts.map(post => (
                        <PostItem
                            key={post._id}
                            post={post} 
                            like={(_id) => onLike(_id)}
                            unlike={(_id) => onUnlike(_id)}
                            nickname={currentUser.nickname}
                            onCreateComment={(e, id, text) => onCreateComment(e,id, text)}
                            deleteP={(_id) => deleteP(_id)}
                        />
                    ))}
            </div>
        </>
    )
}