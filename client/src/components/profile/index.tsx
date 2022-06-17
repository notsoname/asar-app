import { FC } from "react";
import { useAppSelector } from "../../hooks";

const Profile: FC = () => {
    const {user} = useAppSelector(state => state.AuthReducer)
    console.log(user)
    return (
        <div>
            <img src={user.avatar} alt="" />
            <div>{user.email}</div>
        </div>
    )
}

export default Profile;

