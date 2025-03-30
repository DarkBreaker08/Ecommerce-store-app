import video from "../../../assets/about/1.mp4";
import styles from "./styles.module.scss";

export const DownloadAbout = () => {
  return (
    <section className={styles.download}>
      <h1>
        Download Our <a href="#">App</a>
      </h1>
      <div className="vid">
        <video
          autoPlay
          muted
          loop
          className={styles.download__advertisement}
          src={video}
        ></video>
      </div>
    </section>
  );
};
