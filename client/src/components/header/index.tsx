import React from "react";
import { Link } from "react-router-dom";
import nav from "../../constans/navigation";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { logout } from "../../redux/AuthReducers/actionCreators";
import style from "./header.module.scss";

export default function Header() {
  const {auth} = useAppSelector(state => state.AuthReducer)
  const dispatch = useAppDispatch()

  const onLogout = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    dispatch(logout())
  }

  return (
    <div className={style.header}>
      <ul>
        {nav.map((nav) => (
          <li key={nav.name}>
            <Link to={nav.link}>{nav.name}</Link>
          </li>
        ))}
        <li>{auth ? <button onClick={onLogout}>logout</button> : ''}</li>
      </ul>
    </div>
  );
}
