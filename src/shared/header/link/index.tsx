import styles from "./link.module.scss";
import { ReactNode } from "react";

export default function Link({
  name,
  selected,
}: {
  name: ReactNode;
  selected?: boolean;
}) {
  return (
    <li className={styles.link + (selected ? ` ${styles.selected}` : "")}>
      <a>{name}</a>
    </li>
  );
}
