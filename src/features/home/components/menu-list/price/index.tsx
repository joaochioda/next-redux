import styles from "./price.module.scss";
import { FormattedNumber } from "react-intl";

export default function Price({
  price,
  locale,
}: {
  price: string;
  locale: string;
}) {
  const currency = locale === "en" ? "USD" : "BRL";
  return (
    <p className={styles.price}>
      <FormattedNumber
        value={parseFloat(price)}
        style="currency"
        currency={currency}
      />
    </p>
  );
}
