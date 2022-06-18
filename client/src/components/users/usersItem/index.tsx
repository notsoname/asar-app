import { FC } from "react";
import { Link } from "react-router-dom";
import { IUser } from "../../../models/IUser";

interface UsersItemProps {
    user: IUser;
}


const UsersItem: FC<UsersItemProps> = ({user}) => {
    return (
        <Link to={user.nickname}>{user.email}</Link>
    )
}

export default UsersItem;