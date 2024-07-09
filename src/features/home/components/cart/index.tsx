import { FormattedNumber } from "react-intl";
import styles from "./cart.module.scss";
import { Cart as ICart } from "../../container/HomePage";
import { useEffect } from "react";

export default function Cart({
  locale,
  order,
}: {
  locale: string;
  order: ICart[];
}) {
  const currency = locale === "en" ? "USD" : "BRL";

  const aux_order = [...order];
  const aux_order2 = [...order];
  const total = aux_order
    .reduce((acc, item) => {
      return item.modifiersPrice ? acc + item.modifiersPrice : acc + item.price;
    }, 0)
    .toString();

  //reduce  item with same modifiersName and same id

  const newOrder = aux_order2.reduce((acc: any, item) => {
    const existIndex = acc.findIndex(
      (accItem: any) =>
        accItem.id === item.id && accItem.modifiersName === item.modifiersName
    );

    if (existIndex !== -1) {
      acc[existIndex] = {
        ...acc[existIndex],
        price: acc[existIndex].price + item.price,
        modifiersPrice: acc[existIndex].modifiersPrice + item.modifiersPrice,
      };
    } else {
      acc.push({ ...item });
    }

    return acc;
  }, []);

  return (
    <div className={styles.cart}>
      <div className={styles.header}>
        <p>Carrinho</p>
      </div>
      {newOrder.map((item: ICart, idx: number) => (
        <div className={styles.items} key={idx}>
          <div>
            <p>{item.name}</p>
            <p className={styles.modifiersName}>{item.modifiersName}</p>
          </div>
          <p>
            <FormattedNumber
              value={parseFloat(
                (item.modifiersPrice
                  ? item.modifiersPrice
                  : item.price
                ).toString()
              )}
              style="currency"
              currency={currency}
            />
          </p>
        </div>
      ))}
      <div className={styles["sub-total"]}>
        <p>Sub total</p>
        <p>
          <FormattedNumber
            value={parseFloat(total)}
            style="currency"
            currency={currency}
          />
        </p>
      </div>
      <div className={styles["total"]}>
        <p>Total</p>
        <p>
          <FormattedNumber
            value={parseFloat(total)}
            style="currency"
            currency={currency}
          />
        </p>
      </div>
    </div>
  );
}
