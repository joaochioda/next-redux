import styles from "./link.module.scss";

export default function Link({
  name,
  selected,
}: {
  name: string;
  selected?: boolean;
}) {
  return (
    <li className={styles.link + (selected ? ` ${styles.selected}` : "")}>
      <a>{name}</a>
    </li>
  );
}
