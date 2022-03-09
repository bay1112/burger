import React from "react";
import Shadow from "../General/Shadow";
import Logo from "../Logo";
import Menu from "../Menu";

import style from "./style.module.css";

const SideBar = (props) => {
  let classes = [style.SideBar, style.Close];

  if (props.showSideBar) {
    classes = [style.SideBar, style.Open];
  }

  return (
    <div>
      <Shadow show={props.showSideBar} onClicked={props.toggleSideBar} />
      <div className={classes.join(" ")}>
        <div className={style.Logo}>
          <Logo />
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SideBar;
