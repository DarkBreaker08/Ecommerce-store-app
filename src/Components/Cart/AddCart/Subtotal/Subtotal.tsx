import styles from "./styles.module.scss";

export const Subtotal = () => {
  return (
    <div className={styles.subtotal}>
      <h3 className={styles.subtotal__title}>Cart Totals</h3>
      <table className={styles.subtotal__table}>
        <tr>
          <td>Cart Subtotal</td>
          <td>$ 335</td>
        </tr>
        <tr>
          <td>Shipping</td>
          <td>Free</td>
        </tr>
        <tr>
          <td>
            <strong>Total</strong>
          </td>
          <td>
            <strong>$ 335</strong>
          </td>
        </tr>
      </table>
      <button className={styles.subtotal__button}>Procced to checkout</button>
    </div>
  );
};
