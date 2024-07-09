import styles from "./optionsContainer.module.scss";

export default function OptionsContainer({
  title,
  minChoices,
  children,
}: {
  title: string;
  minChoices: number;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className={styles["blue-content"]}>
        <p>{title}</p>
        <p>{`Select ${minChoices} option`}</p>
      </div>
      {children}
    </div>
  );
}
