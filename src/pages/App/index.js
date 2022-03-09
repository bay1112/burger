import React, { Component } from "react";

import styles from "./style.module.css";
import Toolbar from "../../components/ToolBar";
import BurgerPage from "../BurgerPage";
import SideBar from "../../components/SideBar";
import OrderPage from "../OrderPage";
import ShippingPage from "../ShippingPage";
import { Route, Switch } from "react-router-dom";

class App extends Component {
  state = {
    showSideBar: false,
  };

  toggleSideBar = () => {
    this.setState((prevState) => {
      return { showSideBar: !prevState.showSideBar };
    });
  };

  render() {
    return (
      <div>
        <Toolbar toggleSideBar={this.toggleSideBar} />
        <SideBar
          showSideBar={this.state.showSideBar}
          toggleSideBar={this.toggleSideBar}
        />
        <main className={styles.Content}>
          <Switch>
            <Route path="/orders" component={OrderPage} />
            <Route path="/" component={BurgerPage} />
            <Route path="/ship" component={ShippingPage} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
