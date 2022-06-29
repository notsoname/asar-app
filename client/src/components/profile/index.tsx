import { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { getUserPosts } from "../../redux/PostsReducer/actionCreators";
import { acceptFriendRequest, getUser, sendFriendRequest } from "../../redux/UsersReducers/actionCreators";
import Loader from "../loader/loader";
import ProfilePosts from "./profilePosts";

const Profile: FC = () => {
    const dispatch = useAppDispatch()

    const {id} = useParams()
    useEffect(() => {
        if (id) {
            dispatch(getUser(id))
            dispatch(getUserPosts(id))
        }
    }, [])
    const {user} = useAppSelector(state => state.UsersRecuder)
    const {userPosts, isLoading} = useAppSelector(state => state.PostReducer)
    const {currentUser} = useAppSelector(state => state.AuthReducer)

    const addFriend = (nickname: string) => {
        dispatch(sendFriendRequest(nickname))
    }
    const acceptFriend = (nickname: string) => {
        dispatch(acceptFriendRequest(nickname))
    }
    if (isLoading) {
        return <Loader/>
    }

    return ( 
        <>
            {user[0] 
                ? <div>
                    <img src={user[0].avatar} alt="avatar"/>
                    <div>{user[0].nickname}</div>
                    {currentUser.nickname === user[0].nickname ? "" : 
                        currentUser.friends.includes(user[0].nickname) 
                            ? id && <button onClick={() => addFriend(id)}>Delete friend</button> 
                            : id && <button onClick={() => addFriend(id)}>Add friend</button>
                    }
                    {currentUser.requests.includes(user[0].nickname) 
                        ? id && <button onClick={() => acceptFriend(id)}>accept</button> 
                        : ""
                    }
                </div>
                : <div>
                    <img src={currentUser.avatar} alt="avatar"/>
                    <div>{currentUser.nickname}</div>
                </div>
            }
            <ProfilePosts posts={userPosts}/>
        </>
    )
}

export default Profile;

