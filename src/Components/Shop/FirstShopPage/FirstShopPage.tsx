import { Footer } from "../../GeneralComponents/Footer/Footer";
import { Header } from "../../GeneralComponents/Header/Header";
import { Newsletter } from "../../GeneralComponents/Newsletter/Newsletter";
import { Pagination } from "../../GeneralComponents/Pagination/Pagination";
import { PageHeader } from "../PageHeader/PageHeader";
import { FirstShopPageProducts } from "./FirstShopPageProducts/FirstShopPageProducts";

export const FirstShopPage = () => {
  return (
    <>
      <Header />
      <PageHeader />
      <FirstShopPageProducts />
      <Pagination first="." second="/secondShopPage" />
      <Newsletter />
      <Footer />
    </>
  );
};
