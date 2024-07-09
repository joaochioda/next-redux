/* eslint-disable @next/next/no-img-element */
import styles from "./root.module.scss";
import { Collapse } from "@mui/material";
import Arrow from "@/icons/arrow.svg";

export default function Root({
  name,
  showCollapse,
  idx,
  onClick,
  children,
}: {
  name: string;
  showCollapse: boolean[];
  idx: number;
  children: React.ReactNode;
  onClick: (idx: number) => void;
}) {
  return (
    <div className={styles.root}>
      <div className={styles.collapse} onClick={() => onClick(idx)}>
        <label>{name}</label>
        <img
          src={Arrow.src}
          alt="arrow-down"
          className={`${styles.arrow} ${
            showCollapse[idx] ? styles.rotateUp : styles.rotateDown
          }`}
        />
      </div>
      <Collapse in={showCollapse[idx]}>{children}</Collapse>
    </div>
  );
}
