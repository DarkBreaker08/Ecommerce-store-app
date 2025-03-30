import styles from "./styles.module.scss";

type OfferBoxProps = {
  imgSource: string;
  background: string;
  title: string;
};

export const OfferBox = ({ title, imgSource, background }: OfferBoxProps) => {
  return (
    <div className={styles.box}>
      <img src={imgSource} alt="offer" className={styles.box__image} />
      <h6 style={{ backgroundColor: background }} className={styles.box__title}>
        {title}
      </h6>
    </div>
  );
};
