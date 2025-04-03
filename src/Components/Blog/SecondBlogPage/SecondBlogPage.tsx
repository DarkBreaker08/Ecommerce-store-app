import { Footer } from "../../GeneralComponents/Footer/Footer";
import { Header } from "../../GeneralComponents/Header/Header";
import { Newsletter } from "../../GeneralComponents/Newsletter/Newsletter";
import { Pagination } from "../../GeneralComponents/Pagination/Pagination";
import { BlogHeader } from "../BlogHeader/BlogHeader";
import { SecondBlogSection } from "./SecondBlogSection/SecondBlogSection";

export const SecondBlogPage = () => {
  return (
    <>
      <Header />
      <BlogHeader />
      <SecondBlogSection />
      <Pagination first="/firstBlogPage" second="." />
      <Newsletter />
      <Footer />
    </>
  );
};
