import product1 from "../../../assets/products/n1.jpg";
import product2 from "../../../assets/products/n2.jpg";
import product3 from "../../../assets/products/n3.jpg";
import product4 from "../../../assets/products/n4.jpg";
import product5 from "../../../assets/products/n5.jpg";
import product6 from "../../../assets/products/n6.jpg";
import product7 from "../../../assets/products/n7.jpg";
import product8 from "../../../assets/products/n8.jpg";
import { Products } from "../../../types";
import { Product2 } from "../../GeneralComponents/Product/Product2";

type SecondProductsColumnProps = {
  productsObj: Products;
};

export const SecondProductsColumn = ({
  productsObj,
}: SecondProductsColumnProps) => {
  return (
    <>
      <Product2 imgSource={product1} productObject={productsObj[8]} />
      <Product2 imgSource={product2} productObject={productsObj[9]} />
      <Product2 imgSource={product3} productObject={productsObj[10]} />
      <Product2 imgSource={product4} productObject={productsObj[11]} />
      <Product2 imgSource={product5} productObject={productsObj[12]} />
      <Product2 imgSource={product6} productObject={productsObj[13]} />
      <Product2 imgSource={product7} productObject={productsObj[14]} />
      <Product2 imgSource={product8} productObject={productsObj[15]} />
    </>
  );
};
