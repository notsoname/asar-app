import { FC } from "react";
import { Link } from "react-router-dom";
import nav from "../constans/nav";
import style from "./navbar.module.scss";
import GroupIcon from '@mui/icons-material/Group';

const NavBar: FC = () => {
    return (
        <div className={style.wrapper}>
            <li>
            {nav.map(n => (
                <ul>
                    {n.icon}
                    <Link to={n.link}>{n.name}</Link>
                </ul>
            ))}
            </li>
        </div>
    )
}

export default NavBar;