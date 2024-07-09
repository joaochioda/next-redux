import styles from "./name.module.scss";

export default function Name({ name }: { name: string }) {
  return <p className={styles.name}>{name}</p>;
}
