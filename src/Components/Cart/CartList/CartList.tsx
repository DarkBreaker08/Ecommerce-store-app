import img1 from "../../../assets/products/f1.jpg";
import { CartProduct } from "./CartProduct/CartProduct";
import styles from "./styles.module.scss";

export const CartList = () => {
  return (
    <section className={styles.cartlist}>
      <table width={`100%`} className={styles.cartlist__table}>
        <thead className={styles.cartlist__table__head}>
          <tr>
            <td>Remove</td>
            <td>Image</td>
            <td>Product</td>
            <td>Price</td>
            <td>Quantity</td>
            <td>Subtotal</td>
          </tr>
        </thead>
        <tbody className={styles.cartlist__table__body}>
          <CartProduct
            image={img1}
            name="Cartoon Astronaut T-Shirt"
            quantity={1}
            price={"$118.99"}
            total={"$118.99"}
          />
        </tbody>
      </table>
    </section>
  );
};
