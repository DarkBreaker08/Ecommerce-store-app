import { Navigate } from "@tanstack/react-router";
import { useGetCartProductsQuery } from "../../../queries/useGetCartProductsQuery";
import { CartProduct } from "./CartProduct/CartProduct";
import styles from "./styles.module.scss";
import { GlobalError } from "../../GlobalError/GlobalError";

export const CartList = () => {
  const { data, isLoading } = useGetCartProductsQuery();
  if (!data && !isLoading) return <GlobalError />;
  if (!data) return <Navigate to="." />;

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
          {data.map((product) => (
            <CartProduct
              numberOfUnits={product.quantity!}
              name={product.name}
              price={product.price}
              key={product.id}
              id={product.id}
            />
          ))}
        </tbody>
      </table>
    </section>
  );
};
