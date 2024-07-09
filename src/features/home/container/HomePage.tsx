"use client";

import { useAppSelector } from "@/redux/store";
import { Header } from "@/shared/header";
import { Search } from "@/shared/search";
import styles from "./home.module.scss";
import useSWR from "swr";
import { fetcher } from "@/wrappers/intlWrapper";
import { Menu, MenuItem } from "@/pages/api/menu";
import { Section } from "@/components/Section";
import { MenuList } from "@/components/menu-list";
import { useState } from "react";
import { Modal } from "@/shared/modal";

export default function HomePage() {
  const layout = useAppSelector((state) => state.layout);

  const { data, error, isLoading } = useSWR("api/menu", fetcher, {
    revalidateOnFocus: false,
  }) as { data: Menu; error: any; isLoading: boolean };

  const [showCollapse, setShowCollapse] = useState([true, true, true]);
  const [seletedSection, setSelectedSection] = useState(-1);
  const [selectedItemModal, setSelectedItemModal] = useState<MenuItem | null>(
    null
  );

  function handleClickSection(idx: number) {
    setSelectedSection((prev) => (prev === idx ? -1 : idx));
    if (seletedSection === idx) {
      setShowCollapse((prev) => prev.map(() => true));
      return;
    }
    setShowCollapse((prev) => prev.map((_, i) => i === idx));
  }

  return (
    <>
      <Header.Root>
        <Header.Menu backgroundColor={layout.navBackgroundColour}>
          <Header.Link name="MENU" selected />
          <Header.Link name="ENTRAR" />
          <Header.Link name="CONTATO" />
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
                        <MenuList.Name name={item.name} />
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
        </section>

        <section className={`${styles.card} ${styles.cart}`}>Carrinho</section>
        <Modal.Root open={selectedItemModal?.id ? true : false}>
          <Modal.Container>
            <Modal.Image
              src={selectedItemModal?.images?.[0].image}
              onClose={() => setSelectedItemModal(null)}
            />
          </Modal.Container>
        </Modal.Root>
      </main>
    </>
  );
}
