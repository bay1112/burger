import React, { Component } from "react";
import style from "./style.module.css";

const Button = (props) => (
  <button
    onClick={props.clicked}
    className={`${style.Button} ${style[props.buttonType]}`}
  >
    {props.text}{" "}
  </button>
);

export default Button;
