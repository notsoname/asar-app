import { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { getUserPosts } from "../../redux/PostsReducer/actionCreators";
import { getUser, searchUsers } from "../../redux/UsersReducers/actionCreators";
import ProfilePosts from "./profilePosts";



const Profile: FC = () => {
    const dispatch = useAppDispatch()
    const {id} = useParams()
    useEffect(() => {
        if (id) {
            dispatch(searchUsers(id))
            dispatch(getUserPosts(id))
        }
        dispatch(getUserPosts(user.nickname))
    }, [])
    const {users} = useAppSelector(state => state.UsersRecuder)
    const {posts} = useAppSelector(state => state.PostReducer)
    const {user} = useAppSelector(state => state.AuthReducer)
    return ( 
        <>
            {users.length > 0 ? <div>
                <img src={users[0].avatar} alt="avatar"/>
            <div>{users[0].nickname}</div></div>
                            :
                <div>
                    <img src={user.avatar} alt="avatar"/>
                    <div>{user.nickname}</div>
                </div>
            }
            <ProfilePosts posts={posts}/>
        </>
    )
}

export default Profile;

