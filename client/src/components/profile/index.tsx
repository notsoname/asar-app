import { FC, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { getUserPosts } from "../../redux/postsReducer/actionCreators";
import { acceptFriendRequest, getUser, sendFriendRequest, deleteFriend } from "../../redux/usersReducers/actionCreators";

import Loader from "../loader/loader";
import ProfilePosts from "./profilePosts";

const Profile: FC = () => {
    const dispatch = useAppDispatch()
    const {id} = useParams()
    const {user} = useAppSelector(state => state.UsersRecuder)
    const {userPosts, isLoading} = useAppSelector(state => state.PostReducer)
    const {currentUser} = useAppSelector(state => state.AuthReducer)

    const addFriend = (nickname: string) => {
        dispatch(sendFriendRequest(nickname))
    }

    const acceptFriend = (nickname: string) => {
        dispatch(acceptFriendRequest(nickname))
    }

    const deleteFriendd = (nickname: string) => {
        dispatch(deleteFriend(nickname))
    }

    useEffect(() => {
        if (id) {
            dispatch(getUser(id))
            dispatch(getUserPosts(id))
        } else {
            dispatch(getUser(currentUser.nickname))
            dispatch(getUserPosts(currentUser.nickname))
        }
    }, [])

    if (isLoading) {
        return <Loader/>
    }
    return ( 
        <>
            {user[0] 
                ? <div>
                    <img src={user[0].avatar} alt="avatar"/>
                    <div>{user[0].nickname}</div>
                    {currentUser.nickname === user[0].nickname || currentUser.requests.includes(user[0].nickname) ? "" : 
                        currentUser.friends.includes(user[0].nickname) 
                            ? id && <Button variant="primary" onClick={() => deleteFriendd(id)}>Delete friend</Button> 
                            : id && <Button variant="primary" onClick={() => addFriend(id)}>Add friend</Button>
                    }
                    {currentUser.requests.includes(user[0].nickname) 
                        ? id && <Button variant="primary" onClick={() => acceptFriend(id)}>accept</Button> 
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

