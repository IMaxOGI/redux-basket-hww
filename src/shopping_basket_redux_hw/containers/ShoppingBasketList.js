import React from "react";
import CartList from "../components/CartList";
import { Header } from "semantic-ui-react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getProducts } from "../redux/selectors/product";

function ShoppingBasketList() {
  const productsInCart = useSelector(getProducts);

  if (productsInCart.length === 0) {
    return (
      <Header as="h2">
        Go and <Link to="/products">buy</Link> something
      </Header>
    );
  }

  return <CartList cartProducts={productsInCart} />;
}

export default ShoppingBasketList;
