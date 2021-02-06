// const initialState = [
//   {
//     id: "1",
//     title: "Samsung Galaxy S10",
//     type: "device",
//     price: 800,
//     quantity: "10",
//     img:
//       "https://i.citrus.ua/imgcache/size_800/uploads/shop/e/8/e80e6d491b7dcba4895ec62b3c67e061.jpg",
//   },
//   {
//     id: "2",
//     title: "IPhone X",
//     type: "device",
//     price: 600,
//     quantity: "10",
//     img:
//       "https://luxmobile.com.ua/image/cache/catalog/foto/iphonex/03-1000x1340.jpg",
//   },
//   {
//     id: "3",
//     title: "Платье",
//     type: "clothes",
//     price: 120,
//     quantity: "5",
//     img:
//       "https://krasota-ua.com/image/import_files/fb/fb30e08b3e7d11ea81b6fa163e3f7418_fb30e08c3e7d11ea81b6fa163e3f7418.jpg",
//   },
// ];
// export default (state = initialState, action) => {
//   return state;
// };

import {
  FETCH_PRODUCT_PENDING,
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_ERROR,
} from "../actions/basketActions";

const initialState = {
  list: [],
  loading: false,
  error: null,
};

function productsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCT_PENDING:
      return {
        ...state,
        loading: true,
      };
    case FETCH_PRODUCT_SUCCESS:
      return { ...state, loading: false, list: action.payload, error: null };
    case FETCH_PRODUCT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
export default productsReducer;
