import React from "react";
import style from "./style.module.css";

const Order = (props) => {
  console.log(props.Order);
  return (
    <div className={style.Order}>
      <p>Орц : Гахайн мах {props.order.orts.bacon}</p>
      <p>Хаяг: {props.order.hayag.city}</p>
      <strong>
        <p>Үнийн дүн: {props.order.dun}</p>
      </strong>
    </div>
  );
};

export default Order;
