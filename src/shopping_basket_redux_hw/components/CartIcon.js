import React from "react";
import "../styles/CartIcon.css";
import { Icon } from "semantic-ui-react";
import { useSelector } from "react-redux";
import { getTotalCount, getTotalPrice } from "../redux/selectors/product";

function CartIcon() {
  const count = useSelector(getTotalCount);
  const totalAmount = useSelector(getTotalPrice);

  return (
    <div className="cart-icon">
      <Icon link name="shopping basket" />
      {count > 0 && <span className="badge">{count}</span>}
      {totalAmount > 0 && <span>Total: {totalAmount}$</span>}
    </div>
  );
}

export default CartIcon;
