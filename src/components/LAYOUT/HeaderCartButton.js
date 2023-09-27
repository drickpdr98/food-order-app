import { useContext, useReducer } from "react";
import styles from "./HeaderCartButton.module.css";

import CartIcon from "../CART/CartIcon";
import cartContext from "../../store/Cart-context";

export default function HeaderCartButton({ onShowCart }) {
  const cartCtx = useContext(cartContext);

  const numberOfItems = cartCtx.items.reduce((current, items) => {
    return current + items.amount;
  }, 0);

  return (
    <button className={styles.button} onClick={onShowCart}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numberOfItems}</span>
    </button>
  );
}
