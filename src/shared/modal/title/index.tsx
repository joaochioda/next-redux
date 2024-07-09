import styles from "./title.module.scss";

export default function Title({ title }: { title: string }) {
  return <p className={styles.title}>{title}</p>;
}
