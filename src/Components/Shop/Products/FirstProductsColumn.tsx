import product1 from "../../../assets/products/f1.jpg";
import product2 from "../../../assets/products/f2.jpg";
import product3 from "../../../assets/products/f3.jpg";
import product4 from "../../../assets/products/f4.jpg";
import product5 from "../../../assets/products/f5.jpg";
import product6 from "../../../assets/products/f6.jpg";
import product7 from "../../../assets/products/f7.jpg";
import product8 from "../../../assets/products/f8.jpg";
import { Products } from "../../../types";
import { Product2 } from "../../GeneralComponents/Product/Product2";

type FirstProductsColumnProps = {
  productsObj: Products;
};

export const FirstProductsColumn = ({
  productsObj,
}: FirstProductsColumnProps) => {
  return (
    <>
      <Product2 productObject={productsObj[0]} imgSource={product1} />
      <Product2 productObject={productsObj[1]} imgSource={product2} />
      <Product2 productObject={productsObj[2]} imgSource={product3} />
      <Product2 productObject={productsObj[3]} imgSource={product4} />
      <Product2 productObject={productsObj[4]} imgSource={product5} />
      <Product2 productObject={productsObj[5]} imgSource={product6} />
      <Product2 productObject={productsObj[6]} imgSource={product7} />
      <Product2 productObject={productsObj[7]} imgSource={product8} />
    </>
  );
};
