import React from "react";

import style from "./style.module.css";
import logoImg from "../../assets/imgs/burgerLogo.png";

const Logo = () => (
  <div className={style.Logo}>
    <img src={logoImg} />
  </div>
);

export default Logo;
