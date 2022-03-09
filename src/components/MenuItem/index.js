import React from "react";
import style from "./style.module.css";
import { NavLink } from "react-router-dom";

const MenuItem = (props) => (
  <li className={style.MenuItem}>
    <NavLink exact={props.exact} activeClassName={style.active} to={props.link}>
      {props.children}
    </NavLink>
  </li>
);

export default MenuItem;
