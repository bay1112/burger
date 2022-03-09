import React from "react";

import style from "./style.module.css";

const HamburgerMenu = (props) => {
  return (
    <div onClick={props.toggleSideBar} className={style.HamburgerMenu}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default HamburgerMenu;
