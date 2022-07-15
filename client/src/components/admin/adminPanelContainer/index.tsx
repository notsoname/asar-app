import { FC } from "react";
import { useAppSelector } from "../../../hooks";
import style from "./adminPanelContainer.module.scss";

const AdminPanelContainer: FC = () => {
    const {currentTab} = useAppSelector(state => state.AdminPanelReducer)
    return (
        <div className={style.wrapper}>{currentTab}</div>
    )
}

export default AdminPanelContainer;