import styles from "./label.module.scss";

export default function Label({ name }: { name: string }) {
  return <label className={styles.label}>{name}</label>;
}
