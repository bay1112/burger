import React, { Component } from "react";
import Burger from "../../components/Burger";

class ShippingPage extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      meat: 2,
      cheese: 2,
    },
  };
  render() {
    return (
      <div>
        <Burger orts={this.state.ingredients} />
      </div>
    );
  }
}
export default ShippingPage;
