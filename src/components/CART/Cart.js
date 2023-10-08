import { useContext } from "react";
import styles from "./Cart.module.css";

import CartItem from "../CART/CartItem";

import cartContext from "../../store/Cart-context";

import Modal from "../UI/Modal";

export default function Cart({ onCloseCart }) {
  const cartCtx = useContext(cartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

  const hasItems = cartCtx.items > 0;

  const cartItemRemoveHandler = function (id) { }
  
  onst cartItemAddHandler = function(item){}

  const cartIems = (
    <ul className={styles["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler}
          onAdd={cartItemAddHandler}
        />
      ))}
    </ul>
  );
  return (
    <Modal onCloseCart={onCloseCart}>
      {cartIems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={onCloseCart}>
          Close
        </button>
        {hasItems && <button className={styles.button}>Order</button>}
      </div>
    </Modal>
  );
}
