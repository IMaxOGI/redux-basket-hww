import { createSelector } from "reselect";

export const getProducts = createSelector(
  (state) => state.products.list,
  (state) => state.basket,
  (products, basket) => {
    const result = basket.map((cartItem) => {
      const { id, image, title, price } = products.find(
        (product) => product.id === cartItem.id
      );
      return {
        id,
        count: cartItem.count,
        image,
        price,
        title,
      };
    });
    return result;
  }
);

export const getTotalCount = createSelector(getProducts, (products) => {
  return products.reduce((sum, product) => {
    return sum + 1 * product.count;
  }, 0);
});

export const getTotalPrice = createSelector(getProducts, (prducts) => {
  const result = prducts.reduce((sum, product) => {
    return sum + product.price * product.count;
  }, 0);
  return result.toFixed(2);
});
