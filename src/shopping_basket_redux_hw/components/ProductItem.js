import React from "react";
import PropTypes from "prop-types";
import { Button, Card, Image } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/actions/basketActions";

function ProductItem({ product }) {
  const dispatch = useDispatch();
  return (
    <Card>
      <Card.Content>
        <Image style={{ marginBottom: 20 }} src={product.image} />
        <Card.Header>{product.title}</Card.Header>
        <Card.Meta>{product.type}</Card.Meta>
        <Card.Description>Price: {product.price}$</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className="ui two buttons">
          <Button
            basic
            color="green"
            onClick={() => dispatch(addProduct(product.id))}
          >
            Buy
          </Button>
        </div>
      </Card.Content>
    </Card>
  );
}

ProductItem.propTypes = {
  product: {
    img: PropTypes.string,
    title: PropTypes.string,
    type: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.string,
  },
};

export default ProductItem;
