import styles from "./menu.module.scss";
import useMediaQuery from "@mui/material/useMediaQuery";
import MenuIcon from "../../../icons/hamburger.svg";

export default function Menu({
  backgroundColor,
  children,
}: {
  backgroundColor: string;
  children: React.ReactNode;
}) {
  const tabletSize = useMediaQuery("(max-width: 768px)");

  return tabletSize ? (
    <div className={styles["menu-mobile"]} style={{ backgroundColor }}>
      <p>Menu</p>
      <img
        className={styles["menu-mobile__icon"]}
        src={MenuIcon.src}
        alt="menu-icon"
      />
    </div>
  ) : (
    <ul className={styles.menu} style={{ backgroundColor }}>
      {children}
    </ul>
  );
}
