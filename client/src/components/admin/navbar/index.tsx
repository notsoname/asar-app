import { FC } from "react";
import { Link } from "react-router-dom";
import nav from "../constans/nav";
import style from "./navbar.module.scss";
import GroupIcon from '@mui/icons-material/Group';
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { selectTab } from "../../../redux/adminReducers/actionCreators";

const NavBar: FC = () => {
    const dispatch = useAppDispatch();
    const onHandleClick = (tab: string = "dashboard") => {
        dispatch(selectTab("dashboard"))
    }

    return (
        <li className={style.wrapper}>
        {nav.map(n => (
            <ul>
                {n.icon}
                <button onClick={() => onHandleClick()}>{n.name}</button>
            </ul>
        ))}
        </li>
    )
}

export default NavBar;