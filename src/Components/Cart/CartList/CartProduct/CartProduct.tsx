import styles from "./styles.module.scss";

type CartProductProps = {
  image: string;
  name: string;
  price: string | number;
  total: string | number;
  quantity: number;
};

export const CartProduct = ({
  image,
  name,
  price,
  total,
  quantity,
}: CartProductProps) => {
  return (
    <tr>
      <td>
        <a href="#">
          <i className={`far fa-times-circle`}></i>
        </a>
      </td>
      <td>
        <img
          src={image}
          alt="product img"
          className={styles.cartlist__table__product}
        />
      </td>
      <td>{name}</td>
      <td>{price}</td>
      <td>
        <input type="number" value={quantity} />
      </td>
      <td>{total}</td>
    </tr>
  );
};
