import styles from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import { useContext } from "react";
import cartContext from "../../store/Cart-context";

export default function MealItem(props) {
  const price = `$${props.meal.price.toFixed(2)}`;

  const cartCtx = useContext(cartContext);

  const addToCartHandler = function (amount) {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: props.amount,
      price: props.price,
    });
  };
  return (
    <li className={styles.meal}>
      <div>
        <h3>{meal.name}</h3>
        <div className={styles.description}>{meal.description}</div>
        <div className={styles.price}>{price}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
}
