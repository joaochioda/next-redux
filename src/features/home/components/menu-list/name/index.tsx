import styles from "./name.module.scss";

export default function Name({
  name,
  count,
  color,
}: {
  name: string;
  count: number;
  color: string;
}) {
  const style = {
    "--primaryCollor": color || "black",
  } as React.CSSProperties;

  return (
    <div className={styles.container}>
      {count > 0 && (
        <p className={styles.count} style={style}>
          {count}
        </p>
      )}
      <p className={styles.name}>{name}</p>
    </div>
  );
}
