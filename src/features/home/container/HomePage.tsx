import { Collapse } from "@mui/material";
import Banner from "../../../shared/header/banner";
import { useAppSelector } from "@/redux/store";
import Menu from "../../../shared/header/menu";
import Link from "../../../shared/header/link";
import Header from "@/shared/header";
import Search from "@/shared/search";
import styles from "./home.module.scss";
import Input from "@/shared/search/input";

export default function HomePage() {
  const layout = useAppSelector((state) => state.layout);

  return (
    <>
      <Header>
        <Menu backgroundColor={layout.navBackgroundColour}>
          <Link name="MENU" selected />
          <Link name="ENTRAR" />
          <Link name="CONTATO" />
        </Menu>
        <Banner img={layout.bannerImage} />
      </Header>

      <main className={styles.home}>
        <Search>
          <Input value="" onChange={() => {}} placeholder="Search menu items" />
        </Search>
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
