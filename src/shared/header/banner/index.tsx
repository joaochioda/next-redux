import styles from "./banner.module.scss";

export default function Banner({ img }: { img: string }) {
  return (
    <div className={styles["banner-container"]}>
      <img src={img} alt="banner" className={styles.banner} />
    </div>
  );
}
