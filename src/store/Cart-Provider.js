import { useReducer } from "react";
import CartContext from "./Cart-context";

const defaultCartState = { items: [], amount: 0 };

const cartReducer = function (state, action) {
  if (action.type === "ADD") {
    const updatedItems = state.items.concat(action.item);
    const updatedAmount = state.amount + action.item.price * action.item.amount;

    return {
      items: updatedItems,
      amount: updatedAmount,
    };
  }

  return defaultCartState;
};

export default function CartProvider({ children }) {
  const [cartState, dispatchCartState] = useReducer(
    cartReducer,
    defaultCartState
  );
  const addItemToCartHandler = function (item) {
    dispatchCartState({ type: "ADD", item: item });
  };

  const removeItemFromCartHandler = function (id) {
    dispatchCartState({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.amount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
}
