import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Card } from "semantic-ui-react";
import ProductItem from "../components/ProductItem";
import fetchProducts from "../redux/actions/basketActions";

function Products() {
  const products = useSelector((state) => state.products.list);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <Container>
      <Card.Group>
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </Card.Group>
    </Container>
  );
}

export default Products;
