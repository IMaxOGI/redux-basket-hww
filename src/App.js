/* eslint-disable react/react-in-jsx-scope */
import "semantic-ui-css/semantic.min.css";
import "./App.css";
import ShoppingBasketApp from "./shopping_basket_redux_hw/ShoppingBasketApp";
import createStore from "./shopping_basket_redux_hw/redux/createStore";
import { Provider } from "react-redux";

const store = createStore();

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <ShoppingBasketApp />
      </div>
    </Provider>
  );
}

export default App;
