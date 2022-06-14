import React from "react";
import { Link } from "react-router-dom";
import nav from "../../constans/navigation";
import style from "./header.module.scss";

export default function Header() {
  return (
    <div className={style.header}>
      <ul>
        {nav.map((nav) => (
          <li key={nav.name}>
            <Link to={nav.link}>{nav.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
