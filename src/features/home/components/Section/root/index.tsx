import styles from "./root.module.scss";

export default function Root({
  selected,
  children,
  primaryColour,
  setSelectedSection,
}: {
  selected: boolean;
  children: React.ReactNode;
  primaryColour: string;
  setSelectedSection: () => void;
}) {
  const style = {
    "--colorSelectedSection": primaryColour || "black",
  } as React.CSSProperties;

  return (
    <li
      className={styles.root + (selected ? ` ${styles.selected}` : "")}
      style={style}
      onClick={setSelectedSection}
    >
      {children}
    </li>
  );
}
