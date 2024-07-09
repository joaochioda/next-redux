import { Collapse } from "@mui/material";
import { useAppSelector } from "@/redux/store";
import { Header } from "@/shared/header";
import { Search } from "@/shared/search";
import styles from "./home.module.scss";

export default function HomePage() {
  const layout = useAppSelector((state) => state.layout);

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

      <main className={styles.home}>
        <Search.Root>
          <Search.Input
            value=""
            onChange={() => {}}
            placeholder="Search menu items"
          />
        </Search.Root>
        <section>
          <ul>
            <li>Burguers</li>
            <li>Drinks</li>
            <li>Desserts</li>
          </ul>
          <Collapse in={true} timeout="auto" unmountOnExit>
            Burguers
          </Collapse>

          <Collapse in={false} timeout="auto" unmountOnExit>
            Drinks
          </Collapse>
        </section>

        <section>Carrinho</section>
      </main>
    </>
  );
}
