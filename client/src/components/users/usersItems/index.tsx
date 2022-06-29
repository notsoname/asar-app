import { FC, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { searchUsers } from "../../../redux/UsersReducers/actionCreators";
import UsersItem from "../usersItem";

const UsersItems: FC = () => {
    const dispatch = useAppDispatch()
    const [search, setSearch] = useState<string>('')
    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        dispatch(searchUsers(search))
    }
    const {users} = useAppSelector(state => state.UsersRecuder)
    return (
        <div>
            <form>
                <input type="text" className="form-control" value={search} onChange={e => setSearch(e.target.value)}/>
                <button className="btn btn-primary" onClick={handleSubmit}>Поиск пользователей</button>
            </form>
            {users && users.map(user => (
                <UsersItem
                    user={user}  
                />
            ))}
        </div>
    )
}

export default UsersItems;