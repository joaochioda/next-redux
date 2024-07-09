/* eslint-disable @next/next/no-img-element */
import styles from "./image.module.scss";

export default function Image({ src, alt }: { src?: string; alt?: string }) {
  return (
    src && (
      <div className={styles.container}>
        <img className={styles.image} src={src} alt={alt} />
      </div>
    )
  );
}
