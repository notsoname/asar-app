import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../../hooks"
import { fetchPosts } from "../../../redux/PostsReducer/actionCreators"

export default function PostItems() {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(fetchPosts())
    }, [])

    const {posts} = useAppSelector(state => state.PostReducer)
    console.log(posts)
    return (
        <div>
            Posts
        </div>
    )
}
