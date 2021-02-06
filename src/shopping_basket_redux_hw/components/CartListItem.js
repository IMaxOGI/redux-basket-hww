import React from "react";
import PropTypes from "prop-types";
import { Button, Icon, Image, List } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import { addProduct, removeProduct } from "../redux/actions/basketActions";

function CartListItem({ product }) {
  const dispatch = useDispatch();
  const addMoreProducts = () => dispatch(addProduct(product.id));

  const removeProducts = () =>
    product.count === 1
      ? window.confirm("Are you sure you want to remove the product") &&
        dispatch(removeProduct(product.id))
      : dispatch(removeProduct(product.id));

  return (
    <List.Item>
      <List.Content floated="right">
        <Button icon onClick={addMoreProducts}>
          <Icon name="plus" />
        </Button>
        <Button icon onClick={removeProducts}>
          <Icon name="minus" />
        </Button>
      </List.Content>
      <Image avatar src={product.image} />
      <List.Content>
        {product.title} -{" "}
        <span className="muted">
          {product.price}$ x {product.count} ={" "}
          {(product.price * product.count).toFixed(2)}$
        </span>
      </List.Content>
    </List.Item>
  );
}

CartListItem.propTypes = {
  product: {
    img: PropTypes.string,
    title: PropTypes.string,
    type: PropTypes.string,
    price: PropTypes.number,
    count: PropTypes.number,
    id: PropTypes.string,
  },
};

export default CartListItem;
