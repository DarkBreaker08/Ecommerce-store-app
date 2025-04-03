import { Footer } from "../../GeneralComponents/Footer/Footer";
import { Header } from "../../GeneralComponents/Header/Header";
import { Newsletter } from "../../GeneralComponents/Newsletter/Newsletter";
import { Pagination } from "../../GeneralComponents/Pagination/Pagination";
import { PageHeader } from "../PageHeader/PageHeader";
import { FirstShopPageProducts } from "./FirstShopPageProducts/FirstShopPageProducts";

export const FirstShopPage = () => {
  return (
    <>
      <h1>This is First Page of pagination menu!</h1>
      <Header />
      <PageHeader />
      <FirstShopPageProducts />
      <Pagination first="1" second="2" />
      <Newsletter />
      <Footer />
    </>
  );
};
