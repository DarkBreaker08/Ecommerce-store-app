import styles from "./styles.module.scss";
import blog1 from "../../../assets/blog/b1.jpg";
import blog2 from "../../../assets/blog/b2.jpg";
import blog3 from "../../../assets/blog/b3.jpg";
import blog4 from "../../../assets/blog/b4.jpg";
import blog5 from "../../../assets/blog/b6.jpg";
import { BlogBox } from "./BlogBox/BlogBox";

export const BlogSection = () => {
  return (
    <section className={styles.blog}>
      <BlogBox
        imageSource={blog1}
        blogTitle="The Cotton-Jersey Zip-Up Hoodie"
      />
      <BlogBox imageSource={blog2} blogTitle="How to Style a Quiff" />
      <BlogBox imageSource={blog3} blogTitle="Must-Have Skater Girl Items" />
      <BlogBox imageSource={blog4} blogTitle="Runway-Inspited Trends" />
      <BlogBox imageSource={blog5} blogTitle="AW20 Menswear Trends" />
    </section>
  );
};
