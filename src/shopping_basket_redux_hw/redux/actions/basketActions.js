import axios from "axios";
export const ADD_PRODUCT = "ADD_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";
export const FETCH_PRODUCT_PENDING = "FETCH_PRODUCT_PENDING";
export const FETCH_PRODUCT_SUCCESS = "FETCH_PRODUCT_SUCCESS";
export const FETCH_PRODUCT_ERROR = "FETCH_PRODUCT_ERROR";

export const addProduct = (productId) => ({
  type: ADD_PRODUCT,
  payload: productId,
});

export const removeProduct = (productId) => ({
  type: REMOVE_PRODUCT,
  payload: productId,
});

export const fetchProducts = () => (dispatch, getState) => {
  const currentState = getState();
  if (currentState.products && currentState.products.list.lenght > 0) return;
  dispatch({ type: FETCH_PRODUCT_PENDING });
  axios
    .get("https://fakestoreapi.com/products")
    .then((response) => {
      dispatch({ type: FETCH_PRODUCT_SUCCESS, payload: response.data });
    })
    .catch((err) => {
      dispatch({
        type: FETCH_PRODUCT_ERROR,
        payload: err.response.message,
      });
    });
};

export default fetchProducts;
