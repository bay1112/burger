import React from "react";

import style from "./style.module.css";

const BuildControl = (props) => (
  <div className={style.BuildControl}>
    <div className={style.Label}>{props.orts}</div>
    <button
      className={style.Less}
      disabled={props.disabled[props.type]}
      onClick={() => props.ortsHasah(props.type)}
    >
      Хасах
    </button>
    <button className={style.More} onClick={() => props.ortsNemeh(props.type)}>
      Нэмэх
    </button>
  </div>
);

export default BuildControl;
