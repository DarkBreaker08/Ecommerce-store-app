import styles from "./styles.module.scss";
import blog1 from "../../../../assets/blog/b1.jpg";
import blog2 from "../../../../assets/blog/b2.jpg";
import blog3 from "../../../../assets/blog/b3.jpg";
import blog4 from "../../../../assets/blog/b4.jpg";
import blog5 from "../../../../assets/blog/b5.jpg";
import { BlogBox } from "../../BlogSection/BlogBox/BlogBox";
import { useGetBlogsQuery } from "../../../../queries/useGetBlogsQuery";
import { Navigate } from "@tanstack/react-router";

export const SecondBlogSection = () => {
  const { data: blogs } = useGetBlogsQuery();

  if (!blogs) return <Navigate to="/globalError" />;

  return (
    <section className={styles.blog}>
      <h2 className={styles.blog__title}>This is the Second Blog Section!</h2>
      <BlogBox imageSource={blog5} blogObj={blogs[4]} />
      <BlogBox imageSource={blog4} blogObj={blogs[3]} />
      <BlogBox imageSource={blog3} blogObj={blogs[2]} />
      <BlogBox imageSource={blog2} blogObj={blogs[1]} />
      <BlogBox imageSource={blog1} blogObj={blogs[0]} />
    </section>
  );
};
