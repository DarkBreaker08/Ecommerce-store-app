import { Header } from "../GeneralComponents/Header/Header";
import { PageHeader } from "./PageHeader/PageHeader";
import { Pagination } from "./Pagination/Pagination";
import { Products } from "./Products/Products";

export const Shop = () => {
  return (
    <>
      <Header />
      <PageHeader />
      <Products />
      <Pagination />
    </>
  );
};
