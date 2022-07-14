import { FC } from "react";
import AdminPanelContainer from "./adminPanelContainer";
import NavBar from "./navbar";
import style from "./admin.module.scss"
import { useAppSelector } from "../../hooks";

const AdminPanel: FC = () => {
    const {currentUser} = useAppSelector(state => state.AuthReducer);

    if (currentUser.roles[0] !== "ADMIN") {
        return <h1>У вас нет доступа</h1>
    }

    return (
        <div className={style.container}>
            <NavBar/>
            <AdminPanelContainer/>
        </div>
    )
}

export default AdminPanel;