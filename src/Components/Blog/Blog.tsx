import { Footer } from "../GeneralComponents/Footer/Footer";
import { Header } from "../GeneralComponents/Header/Header";
import { Newsletter } from "../GeneralComponents/Newsletter/Newsletter";
import { Pagination } from "../GeneralComponents/Pagination/Pagination";
import { BlogHeader } from "./BlogHeader/BlogHeader";
import { BlogSection } from "./BlogSection/BlogSection";

export const Blog = () => {
  return (
    <>
      <Header />
      <BlogHeader />
      <BlogSection />
      <Pagination />
      <Newsletter />
      <Footer />
    </>
  );
};
