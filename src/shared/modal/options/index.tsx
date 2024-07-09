import { FormattedNumber } from "react-intl";
import styles from "./options.module.scss";

export default function Options({
  name,
  price,
  locale,
  primaryColour,
  selected,
  selectedOption,
}: {
  name: string;
  price: string;
  locale: string;
  primaryColour: string;
  selected: boolean;
  selectedOption: () => void;
}) {
  const currency = locale === "en" ? "USD" : "BRL";
  const style = {
    "--buttonBorderColor": primaryColour || "black",
  } as React.CSSProperties;

  return (
    <div
      className={
        selected ? `${styles.container} ${styles.selected}` : styles.container
      }
      style={style}
    >
      <div className={styles.options}>
        <p>{name}</p>
        <p>
          <FormattedNumber
            value={parseFloat(price)}
            style="currency"
            currency={currency}
          />
        </p>
      </div>
      <button onClick={selectedOption} />
    </div>
  );
}
