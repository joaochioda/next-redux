/* eslint-disable @next/next/no-img-element */
import styles from "./image.module.scss";

export default function Image({ src, alt }: { src: string; alt: string }) {
  return <img className={styles.image} src={src} alt={alt} />;
}
