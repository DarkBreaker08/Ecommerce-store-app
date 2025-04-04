import { ChangeEvent, useState } from "react";
import img1 from "../../../../assets/products/f1.jpg";
import img2 from "../../../../assets/products/f2.jpg";
import img3 from "../../../../assets/products/f3.jpg";
import img4 from "../../../../assets/products/f4.jpg";
import img5 from "../../../../assets/products/f5.jpg";
import img6 from "../../../../assets/products/f6.jpg";
import img7 from "../../../../assets/products/f7.jpg";
import img8 from "../../../../assets/products/f8.jpg";
import img9 from "../../../../assets/products/n1.jpg";
import img10 from "../../../../assets/products/n2.jpg";
import img11 from "../../../../assets/products/n3.jpg";
import img12 from "../../../../assets/products/n4.jpg";
import img13 from "../../../../assets/products/n5.jpg";
import img14 from "../../../../assets/products/n6.jpg";
import img15 from "../../../../assets/products/n7.jpg";
import img16 from "../../../../assets/products/n8.jpg";
import styles from "./styles.module.scss";
import { useDeleteCartProductQuery } from "../../../../queries/useDeleteCartProductQuery";
import { useModifyCartProductQuery } from "../../../../queries/useModifyCartProductQuery";

type CartProductProps = {
  name: string;
  price: string;
  id: string;
  numberOfUnits: number;
};

export const CartProduct = ({
  name,
  price,
  id,
  numberOfUnits,
}: CartProductProps) => {
  const [quantity, setQuantity] = useState<number>(numberOfUnits);
  const { remove } = useDeleteCartProductQuery();
  const { mutate } = useModifyCartProductQuery(id);

  const getProperImage = () => {
    switch (name) {
      case "Product A":
        return img1;

      case "Product B":
        return img2;

      case "Product C":
        return img3;
      case "Product D":
        return img4;
      case "Product E":
        return img5;
      case "Product F":
        return img6;
      case "Product G":
        return img7;
      case "Product H":
        return img8;
      case "Product I":
        return img9;
      case "Product J":
        return img10;
      case "Product K":
        return img11;
      case "Product L":
        return img12;
      case "Product M":
        return img13;
      case "Product N":
        return img14;
      case "Product O":
        return img15;
      case "Product P":
        return img16;
    }
  };

  const handleQuantityChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (value < 1) return;
    setQuantity(value);
    mutate({
      price,
      name,
      brand: "addidas",
      quantity: value,
    });
  };

  const handleRemoveProduct = () => {
    remove(id);
  };

  return (
    <tr>
      <td>
        <a href="#">
          <i
            className={`far fa-times-circle`}
            onClick={handleRemoveProduct}
          ></i>
        </a>
      </td>
      <td>
        <img
          src={getProperImage()}
          alt="product img"
          className={styles.cartlist__table__product}
        />
      </td>
      <td>{name}</td>
      <td>{price}</td>
      <td>
        <input type="number" value={quantity} onChange={handleQuantityChange} />
      </td>
      <td>
        ${(quantity * Number((price as string).replace("$", ""))).toFixed(2)}
      </td>
    </tr>
  );
};
