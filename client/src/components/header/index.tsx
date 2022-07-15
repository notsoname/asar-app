import React, { useState } from "react";
import { CloseButton } from "react-bootstrap";
import { List } from "react-bootstrap-icons";
import { Link, NavLink } from "react-router-dom";
import nav, { adminNav } from "../../constans/navigation";
import { useAppDispatch, useAppSelector, useOutsideClick } from "../../hooks";
import { logout } from "../../redux/authReducers/actionCreators";
import style from "./header.module.scss";

export default function Header() {
  const {auth, currentUser} = useAppSelector(state => state.AuthReducer)
  const dispatch = useAppDispatch()
  const onLogout = () => {
    dispatch(logout())
  }
  
  const [show, setShow] = useState<Boolean>(false)

  const handleShow = () => {
    setShow(!show)
  }

  const createNav = (role: String = "USER", navigation: Array<any>) => {
    return navigation.map((nav) => (
      <li key={nav.name}>
        <NavLink className={`navbar-brand d-flex align-items-center`} to={nav.link}>
            <span>{nav.icon}</span>
            <span className="ms-1">{nav.name}</span>
        </NavLink>
      </li>
    ))
  }

  return (
    <div>
      <List className={`${style.menu} ${show ? "" : style.menuActive}`} onClick={handleShow}/>
      <div className={`${style.header} ${show ? style.active : ""} d-flex justify-content-between align-items-center`}>
        <CloseButton className={style.close} onClick={handleShow}/>
        <ul className="navbar navbar-expand-lg navbar-light d-flex flex-column">
          {currentUser && currentUser.roles[0] == "ADMIN" 
            ? createNav("ADMIN", adminNav)
            : createNav("", nav)
          }
        </ul>
        <div>
          {currentUser && currentUser.requests.length > 0 && <div className="p-2">{currentUser && currentUser.requests.length} freind request</div>}
          <div className="d-flex justify-content-center">
            <Link to={"profile"} className="p-2">{currentUser && currentUser.nickname}</Link>
            {auth && <button className="btn btn-primary" onClick={onLogout}>logout</button>}
          </div>
        </div>
      </div>
    </div>
  );
}
