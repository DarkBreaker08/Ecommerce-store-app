import { Blog } from "../../../../types";
import styles from "./styles.module.scss";

type BlogBoxProps = {
  imageSource: string;
  blogObj: Blog;
};

export const BlogBox = ({ blogObj, imageSource }: BlogBoxProps) => {
  return (
    <div className={styles.blog__box}>
      <div className={styles.blog__image}>
        <img src={imageSource} alt="blog image" />
      </div>
      <div className={styles.blog__details}>
        <h4>{blogObj.title}</h4>
        <p>{blogObj.text}</p>
        <a href="#" className={styles.blog__button}>
          CONTINUE READING
        </a>
      </div>
      <h1 className={styles.blog__date}>13/01</h1>
    </div>
  );
};
