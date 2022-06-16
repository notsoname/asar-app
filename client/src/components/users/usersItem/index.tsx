import { FC } from "react";
import { IUser } from "../../../models/IUser";

interface UsersItemProps {
    user: IUser
}


const UsersItem: FC<UsersItemProps> = ({user}) => {
    return (
        <div>{user.email}</div>
    )
}

export default UsersItem;