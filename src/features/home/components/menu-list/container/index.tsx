import styles from "./container.module.scss";

export default function Container({
  children,
  onClick,
}: {
  onClick: () => void;

  children: React.ReactNode;
}) {
  return (
    <div className={styles.container} onClick={onClick}>
      {children}
    </div>
  );
}
