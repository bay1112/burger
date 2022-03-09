import React, { Component } from "react";

import Burger from "../../components/Burger";
import BuildControls from "../../components/BuildControls";
import Modal from "../../components/General/Modal";
import OrderSummary from "../../components/OrderSummary";
import axios from "../../axios-orders";
import Spinner from "../../components/General/Spinner";

const INGREDIENT_PRICES = { salad: 150, cheese: 250, bacon: 500, meat: 800 };

const INGREDIENT_NAMES = {
  bacon: "Гахайн мах",
  cheese: "Бяслаг",
  meat: "Үхрийн мах",
  salad: " Салад",
};

class BurgerPage extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      meat: 0,
      cheese: 0,
    },
    totalPrice: 1000,
    purchasing: false,
    confirmOrder: false,
    lastCustomerName: "N/A",
  };

  continueOrder = () => {
    // const order = {
    //   orts: this.state.ingredients,
    //   dun: this.state.totalPrice,
    //   hayag: {
    //     name: "Bayar",
    //     city: "ub",
    //     street: "ulaanbaatar",
    //   },
    // };
    // this.setState({ loading: true });
    // axios
    //   .post("/orders.json", order)
    //   .then((response) => {})
    //   .finally(() => {
    //     this.setState({ loading: false });
    //   });
    // const params = [];
    // for (let orts in this.state.ingredients) {
    //   console.log(orts);
    // }

    this.props.history.push({
      path: "/ship",
    });
    //this.closeConfirmModal();
  };

  showConfirmModal = () => {
    this.setState({ confirmOrder: true });
  };

  closeConfirmModal = () => {
    this.setState({ confirmOrder: false });
  };

  ortsNemeh = (type) => {
    const newIngredients = { ...this.state.ingredients };
    newIngredients[type]++;

    const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
    this.setState({
      totalPrice: newPrice,
      ingredients: newIngredients,
      purchasing: true,
    });
  };

  ortsHasah = (type) => {
    if (this.state.ingredients[type] > 0) {
      const newIngredients = { ...this.state.ingredients };
      newIngredients[type]--;

      const newPrice = this.state.totalPrice - INGREDIENT_PRICES[type];

      this.setState({
        purchasing: newPrice > 1000,
        totalPrice: newPrice,
        ingredients: newIngredients,
      });
    }
  };

  render() {
    const disabledIngredients = { ...this.state.ingredients };

    for (let key in disabledIngredients) {
      disabledIngredients[key] = disabledIngredients[key] <= 0;
    }
    console.log(this.props);
    return (
      <div>
        <Modal
          closeConfirmModal={this.closeConfirmModal}
          show={this.state.confirmOrder}
        >
          {this.state.loading ? (
            <Spinner />
          ) : (
            <OrderSummary
              onCancel={this.closeConfirmModal}
              onContinue={this.continueOrder}
              price={this.state.totalPrice}
              ingredients={this.state.ingredients}
              ingredientsNames={INGREDIENT_NAMES}
            />
          )}
        </Modal>
        <Burger orts={this.state.ingredients} />
        <BuildControls
          showConfirmModal={this.showConfirmModal}
          ingredientsNames={INGREDIENT_NAMES}
          price={this.state.totalPrice}
          ortsNemeh={this.ortsNemeh}
          ortsHasah={this.ortsHasah}
          disabledIngredients={disabledIngredients}
          disabled={!this.state.purchasing}
        />
      </div>
    );
  }
}

export default BurgerPage;
