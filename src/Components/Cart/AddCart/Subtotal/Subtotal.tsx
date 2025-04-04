import { Navigate } from "@tanstack/react-router";
import { useGetCartProductsQuery } from "../../../../queries/useGetCartProductsQuery";
import styles from "./styles.module.scss";

export const Subtotal = () => {
  const { data } = useGetCartProductsQuery();

  if (!data) return <Navigate to="/globalError" />;

  const getTotalPrice = () => {
    let totalPrice = 0;

    data.forEach((product) => {
      const price = Number(product.price.replace("$", ""));

      totalPrice += price * product.quantity!;
    });

    return totalPrice;
  };

  return (
    <div className={styles.subtotal}>
      <h3 className={styles.subtotal__title}>Cart Totals</h3>
      <table className={styles.subtotal__table}>
        <tr>
          <td>Cart Subtotal</td>
          <td>$ {getTotalPrice()}</td>
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
            <strong>$ {getTotalPrice()}</strong>
          </td>
        </tr>
      </table>
      <button className={styles.subtotal__button}>Procced to checkout</button>
    </div>
  );
};
