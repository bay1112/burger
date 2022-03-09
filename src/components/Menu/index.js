import React from "react";
import MenuItem from "../MenuItem";
import style from "./style.module.css";

const Menu = () => (
  <div>
    <ul className={style.Menu}>
      <MenuItem exact link="/">
        ШИНЭ ЗАХИАЛГА
      </MenuItem>
      <MenuItem link="/orders">ЗАХИАЛГУУД</MenuItem>
    </ul>
  </div>
);

export default Menu;
