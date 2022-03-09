import React from "react";

import style from "./style.module.css";

const BurgerIngredient = (props) => {
  if (props.type === "salad") return <div className={style.Salad}></div>;
  if (props.type === "bacon") return <div className={style.Bacon}></div>;
  if (props.type === "meat") return <div className={style.Meat}></div>;
  if (props.type === "cheese") return <div className={style.Cheese}></div>;
  if (props.type === "bread-bottom")
    return <div className={style.BreadBottom}></div>;
  if (props.type === "bread-top")
    return (
      <div className={style.BreadTop}>
        <div className={style.Seed}></div>
        <div className={`${style.Seed} ${style.Second}`}></div>
        <div className={`${style.Seed} ${style.Third}`}></div>
        <div className={`${style.Seed} ${style.Fourth}`}></div>
      </div>
    );
  return <div></div>;
};

export default BurgerIngredient;
