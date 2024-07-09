/* eslint-disable @next/next/no-img-element */
"use client";

import { useAppSelector } from "@/redux/store";
import { Header } from "@/shared/header";
import { Search } from "@/shared/search";
import styles from "./home.module.scss";
import useSWR from "swr";
import { fetcher } from "@/wrappers/intlWrapper";
import { Menu, MenuItem } from "@/pages/api/menu";
import { Section } from "@/features/home/components/Section";
import { MenuList } from "@/features/home/components/menu-list";
import { useState } from "react";
import { Modal } from "@/shared/modal";
import Minus from "@/icons/minus.svg";
import Plus from "@/icons/plus.svg";
import { FormattedMessage } from "react-intl";
import Cart from "../components/cart";
import { useMediaQuery } from "@mui/material";
import X from "@/icons/x.svg";

export interface Cart {
  id: number;
  name: string;
  price: number;
  modifiersName: string;
  modifiersPrice: number;
}

export default function HomePage() {
  const layout = useAppSelector((state) => state.layout);
  const tabletSize = useMediaQuery("(max-width: 768px)");
  const { data, error, isLoading } = useSWR("api/menu", fetcher, {
    revalidateOnFocus: false,
  }) as { data: Menu; error: any; isLoading: boolean };

  const [showCollapse, setShowCollapse] = useState([true, true, true]);
  const [seletedSection, setSelectedSection] = useState(-1);
  const [selectedItemModal, setSelectedItemModal] = useState<MenuItem | null>(
    null
  );
  const [count, setCount] = useState(1);
  const [selectedOption, setSelectedOption] = useState<number>(-1);
  const [order, setOrder] = useState<Cart[]>([]);
  const [showBasket, setShowBasket] = useState(false);

  const style = {
    "--primaryCollor": layout.primaryColour || "black",
  } as React.CSSProperties;

  function handleClickSection(idx: number) {
    setSelectedSection((prev) => (prev === idx ? -1 : idx));
    if (seletedSection === idx) {
      setShowCollapse((prev) => prev.map(() => true));
      return;
    }
    setShowCollapse((prev) => prev.map((_, i) => i === idx));
  }

  function addToOrder() {
    let selectedModifier = null;
    if (selectedOption !== -1) {
      //find selected modifier
      selectedModifier =
        selectedItemModal?.modifiers?.[0].items[selectedOption];
    }
    if (selectedItemModal) {
      const newOrder = [...order];
      for (let i = 0; i < count; i++) {
        newOrder.push({
          id: selectedItemModal.id,
          name: selectedItemModal.name,
          price: selectedItemModal.price,
          modifiersName: selectedModifier?.name || "",
          modifiersPrice: selectedModifier?.price || 0,
        });
      }
      setOrder(newOrder);
      setSelectedItemModal(null);
      setCount(1);
      setSelectedOption(-1);
    }
  }

  return (
    <>
      <Header.Root>
        <Header.Menu backgroundColor={layout.navBackgroundColour}>
          <Header.Link
            name={<FormattedMessage id="home" defaultMessage="HOME" />}
            selected
          />
          <Header.Link
            name={<FormattedMessage id="enter" defaultMessage="enter" />}
          />
          <Header.Link
            name={<FormattedMessage id="contact" defaultMessage="contact" />}
          />
        </Header.Menu>
        <Header.Banner img={layout.bannerImage} />
      </Header.Root>

      <div className={styles["home-searchbar"]}>
        <Search.Root>
          <Search.Input
            value=""
            onChange={() => {}}
            placeholder="Search menu items"
          />
        </Search.Root>
      </div>
      <main className={styles.home}>
        <section className={`${styles.card} ${styles.list}`}>
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            <>
              <ul className={styles["ul-list"]}>
                {data?.sections.map((section, idx) => (
                  <Section.Root
                    key={section.id}
                    selected={seletedSection === idx}
                    primaryColour={layout.primaryColour}
                    setSelectedSection={() => handleClickSection(idx)}
                  >
                    <Section.Image
                      src={section.images[0].image}
                      alt={section.name}
                    />
                    <Section.Label name={section.name} />
                  </Section.Root>
                ))}
              </ul>

              {data?.sections.map((section, idx) =>
                seletedSection !== -1 && seletedSection !== idx ? null : (
                  <MenuList.Root
                    key={section.id}
                    name={section.name}
                    showCollapse={showCollapse}
                    idx={idx}
                    onClick={(idxClicked) => {
                      const newShowCollapse = showCollapse.map((value, idx) =>
                        idx === idxClicked ? !value : value
                      );
                      setShowCollapse(newShowCollapse);
                    }}
                  >
                    {section.items.map((item) => (
                      <MenuList.Container
                        key={item.id}
                        onClick={() => setSelectedItemModal(item)}
                      >
                        <MenuList.Name
                          name={item.name}
                          count={
                            order.filter(
                              (orderItem) => orderItem.id === item.id
                            ).length
                          }
                          color={layout.primaryColour}
                        />
                        <MenuList.Description
                          description={item.description || ""}
                        />
                        <MenuList.Price
                          price={item.price.toString()}
                          locale={layout.locale}
                        />
                        <MenuList.Image
                          src={item.images?.[0]?.image || undefined}
                        />
                      </MenuList.Container>
                    ))}
                  </MenuList.Root>
                )
              )}
            </>
          )}
          {tabletSize && order.length > 0 && (
            <button
              className={styles["add-to"]}
              onClick={() => setShowBasket(true)}
            >
              {`You basket: ${order.length} items`}
            </button>
          )}
        </section>

        <section className={`${styles.card} ${styles.cart}`}>
          <Cart locale={layout.locale} order={order} />
        </section>

        <Modal.Root open={showBasket}>
          <Modal.Container width="768">
            <img
              src={X.src}
              alt="close"
              onClick={() => setShowBasket(false)}
              className={styles.close}
            />
            <Cart locale={layout.locale} order={order} />
          </Modal.Container>
        </Modal.Root>

        <Modal.Root open={selectedItemModal?.id ? true : false}>
          <Modal.Container width="468">
            <Modal.Image
              src={selectedItemModal?.images?.[0].image}
              onClose={() => {
                setSelectedItemModal(null);
                setCount(1);
              }}
            />
            <Modal.Title title={selectedItemModal?.name || ""} />
            <Modal.Description
              description={selectedItemModal?.description || ""}
            />
            {selectedItemModal?.modifiers?.length && (
              <Modal.OptionsContainer
                title={selectedItemModal?.modifiers[0].name}
                minChoices={selectedItemModal?.modifiers[0].minChoices}
              >
                {selectedItemModal?.modifiers[0].items.map((item, idx) => (
                  <Modal.Options
                    key={item.id}
                    selected={selectedOption === idx}
                    name={item.name}
                    price={item.price.toString()}
                    locale={layout.locale}
                    primaryColour={layout.primaryColour}
                    selectedOption={() => setSelectedOption(idx)}
                  />
                ))}
              </Modal.OptionsContainer>
            )}
            <Modal.Footer
              addToOrder={addToOrder}
              canClick={
                !(selectedItemModal?.modifiers?.[0].items.length
                  ? selectedOption !== -1
                  : true)
              }
            >
              <button
                className={styles["footer-buttons"]}
                disabled={count < 2}
                onClick={() => setCount((prev) => prev - 1)}
                style={style}
              >
                <img src={Minus.src} alt="Minus" />
              </button>
              <span className={styles["footer-count"]}>{count}</span>
              <button
                className={styles["footer-buttons"]}
                style={style}
                onClick={() => setCount((prev) => prev + 1)}
              >
                <img src={Plus.src} alt="Plus" />
              </button>
            </Modal.Footer>
          </Modal.Container>
        </Modal.Root>
      </main>
    </>
  );
}
