import styles from "./styles.module.scss";

type BlogBoxProps = {
  imageSource: string;
  blogTitle: string;
};

export const BlogBox = ({ blogTitle, imageSource }: BlogBoxProps) => {
  return (
    <div className={styles.blog__box}>
      <div className={styles.blog__image}>
        <img src={imageSource} alt="blog image" />
      </div>
      <div className={styles.blog__details}>
        <h4>{blogTitle}</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
          obcaecati dolorum sequi dolor repellendus ab accusantium possimus,
          commodi quis distinctio eveniet alias natus ad corrupti! Architecto
          obcaecati commodi maxime necessitatibus.
        </p>
        <a href="#" className={styles.blog__button}>
          CONTINUE READING
        </a>
      </div>
      <h1 className={styles.blog__date}>13/01</h1>
    </div>
  );
};
