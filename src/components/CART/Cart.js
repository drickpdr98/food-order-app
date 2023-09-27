import styles from "./Cart.module.css";

import Modal from "../UI/Modal";

export default function Cart({ onCloseCart }) {
  const cartIems = (
    <ul className={styles["cart-items"]}>
      {[{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal onCloseCart={onCloseCart}>
      {cartIems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>35.67</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={onCloseCart}>
          Close
        </button>
        <button className={styles.button}>Order</button>
      </div>
    </Modal>
  );
}
