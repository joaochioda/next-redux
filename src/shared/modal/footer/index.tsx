import styles from "./footer.module.scss";

export default function Footer({
  addToOrder,
  canClick,
  children,
}: {
  addToOrder: () => void;
  children?: React.ReactNode;
  canClick: boolean;
}) {
  return (
    <div className={styles.container}>
      <div className={styles.footer}>{children}</div>
      <button
        className={styles["add-to"]}
        onClick={() => addToOrder()}
        disabled={canClick}
      >
        Add to Order
      </button>
    </div>
  );
}
