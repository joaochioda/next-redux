import styles from "./description.module.scss";

export default function Description({ description }: { description: string }) {
  return <p className={styles.description}>{description}</p>;
}
