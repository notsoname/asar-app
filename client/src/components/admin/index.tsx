import { FC } from "react";
import AdminPanelContainer from "./adminPanelContainer";
import NavBar from "./navbar";
import style from "./admin.module.scss"

const AdminPanel: FC = () => {
    return (
        <div className={style.container}>
            <NavBar/>
            <AdminPanelContainer/>
        </div>
    )
}

export default AdminPanel;