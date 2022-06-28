import React from "react";
import { Link } from "react-router-dom";
import nav from "../../constans/navigation";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { logout } from "../../redux/AuthReducers/actionCreators";
import style from "./header.module.scss";

export default function Header() {
  const {auth, currentUser} = useAppSelector(state => state.AuthReducer)
  const dispatch = useAppDispatch()
  const onLogout = () => {
    dispatch(logout())
  }
  return (
    <div className={`${style.header} d-flex justify-content-between align-items-center`}>
      <ul className="navbar navbar-expand-lg navbar-light">
        {nav.map((nav) => (
          <li key={nav.name}>
            <Link className="navbar-brand" to={nav.link}>{nav.name}</Link>
          </li>
        ))}
      </ul>
      <div>
        {currentUser.requests.length > 0 && <div>{currentUser.requests.length}</div>}
        <Link to={"profile"} className="p-2">{currentUser.nickname}</Link>
        {auth && <button className="btn btn-primary" onClick={onLogout}>logout</button>}
      </div>
    </div>
  );
}
