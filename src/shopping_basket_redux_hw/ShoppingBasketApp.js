import React from "react";
import { Container, Menu, Header, Icon } from "semantic-ui-react";
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";
import Products from "./containers/Products";
import CartIcon from "./components/CartIcon";
import ShoppingBasketList from "./containers/ShoppingBasketList";

export default function WishListApp() {
  return (
    <BrowserRouter>
      <Container>
        <Header>
          <NavLink to="/">Shop</NavLink>
        </Header>
        <Menu>
          <NavLink to="/products" className="item">
            Product
          </NavLink>
          <NavLink to="/shoppingbasketlist" className="item">
            <CartIcon />
          </NavLink>
        </Menu>
        <Switch>
          <Route path="/products" exact>
            <Products />
          </Route>
          <Route path="/shoppingbasketlist" exact>
            <ShoppingBasketList />
          </Route>
        </Switch>
      </Container>
    </BrowserRouter>
  );
}
