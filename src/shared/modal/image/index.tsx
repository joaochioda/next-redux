/* eslint-disable @next/next/no-img-element */
import styles from "./image.module.scss";
import X from "@/icons/x.svg";
export default function Image({
  src,
  onClose,
}: {
  src: string | undefined;
  onClose: () => void;
}) {
  return (
    <div className={styles.image}>
      {src && <img src={src} alt="menu item" />}
      <div onClick={onClose} className={styles.close}>
        <img src={X.src} alt="close" />
      </div>
    </div>
  );
}
