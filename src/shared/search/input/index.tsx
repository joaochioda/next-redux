import { useState } from "react";
import styles from "./search.module.scss";

export default function Input({
  placeholder,
  onChange,
}: {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  const [value, setValue] = useState("");

  return (
    <input
      className={styles.input}
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
        onChange(e);
      }}
    />
  );
}
