import styles from "./search.module.scss";

export default function Input({
  placeholder,
  value,
  onChange,
}: {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <input
      className={styles.input}
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}
