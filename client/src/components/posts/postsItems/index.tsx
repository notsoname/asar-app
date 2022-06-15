import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../../hooks"
import { fetchPosts } from "../../../redux/PostsReducer/actionCreators"
import PostItem from "../postsItem"

export default function PostItems() {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(fetchPosts())
    }, [])

    const {posts} = useAppSelector(state => state.PostReducer)
    console.log(posts)
    return (
        <div className="d-flex flex-wrap justify-content-center">
            {posts.map(post => (
                <PostItem post={post} key={post.id}/>
            ))}
        </div>
    )
}
