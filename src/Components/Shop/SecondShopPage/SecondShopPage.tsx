import { Footer } from "../../GeneralComponents/Footer/Footer";
import { Header } from "../../GeneralComponents/Header/Header";
import { Newsletter } from "../../GeneralComponents/Newsletter/Newsletter";
import { Pagination } from "../../GeneralComponents/Pagination/Pagination";
import { PageHeader } from "../PageHeader/PageHeader";
import { SecondShopPageProducts } from "./SecondShopProducts/SecondShopProducts";

export const SecondShopPage = () => {
  return (
    <>
      <Header />
      <PageHeader />
      <SecondShopPageProducts />
      <Pagination first="/firstShopPage" second="." />
      <Newsletter />
      <Footer />
    </>
  );
};
