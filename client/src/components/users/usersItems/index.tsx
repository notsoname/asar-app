import { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { fetchUsers } from "../../../redux/UsersReducers/actionCreators";
import UsersItem from "../usersItem";

const UsersItems: FC = () => {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    const {users} = useAppSelector(state => state.UsersRecuder)
    console.log(users)
    return (
        <div>
            {users.map(user => (
                <UsersItem key={user.id} user={user}/>
            ))}
        </div>
    )
}

export default UsersItems;