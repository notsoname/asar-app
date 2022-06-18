import { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { searchUsers } from "../../redux/UsersReducers/actionCreators";

const Profile: FC = () => {
    const dispatch = useAppDispatch()
    const {id} = useParams()
    useEffect(() => {
        if (id) {
            dispatch(searchUsers(id))
        }
    }, [])
    const {users} = useAppSelector(state => state.UsersRecuder)
    console.log(users)
    return (
        <div>
            <img src={users[0].avatar} alt="avatar"/>
            <div>{users[0].nickname}</div>
        </div>
    )
}

export default Profile;

