import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import BurgerIngredient from "../BurgerIngredient";
import style from "./style.module.css";

const Burger = (props) => {
  //props.orts;
  const items = Object.entries(props.orts);
  let content = [];

  items.map((el) => {
    for (let i = 0; i < el[1]; i++)
      content.push(<BurgerIngredient key={`${el[0]}${i + 1}`} type={el[0]} />);
  });

  if (content.length === 0)
    content = <p>Хачиртай талхны орцоо сонгоно уу...</p>;
  console.log(props);
  return (
    <div className={style.Burger}>
      <BurgerIngredient type="bread-top" />
      {content}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default withRouter(Burger);
