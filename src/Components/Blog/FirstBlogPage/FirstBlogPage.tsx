import { Footer } from "../../GeneralComponents/Footer/Footer";
import { Header } from "../../GeneralComponents/Header/Header";
import { Newsletter } from "../../GeneralComponents/Newsletter/Newsletter";
import { Pagination } from "../../GeneralComponents/Pagination/Pagination";
import { BlogHeader } from "../BlogHeader/BlogHeader";
import { FirstBlogSection } from "./FirstBlogSection/FirstBlogSection";

export const FirstBlogPage = () => {
  return (
    <>
      <Header />
      <BlogHeader />
      <FirstBlogSection />
      <Pagination first="." second="/secondBlogPage" />
      <Newsletter />
      <Footer />
    </>
  );
};
