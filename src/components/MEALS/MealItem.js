import styles from "./MealItem.module.css";

export default function MealItem({ meal }) {
  const price = `$${meal.price.toFixed(2)}`;
  return (
    <li className={styles.meal}>
      <div>
        <h3>{meal.name}</h3>
        <div className={styles.description}>{meal.description}</div>
        <div className={styles.price}>{price}</div>
      </div>
      <div></div>
    </li>
  );
}
