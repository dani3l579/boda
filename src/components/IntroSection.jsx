import Image from "next/image";
import styles from "./IntroSection.module.css";
export default function IntroSection() {
  return (
    <div className={styles.cont}>
      <Image
        className={styles.image}
        src="/public/assets/danibibi.jpg"
        alt="Los novios felices"
        width={1000}
        height={1000}
      ></Image>
      <Image
        className={styles.names}
        src="/assets/DanielyBritney.svg"
        alt="Los novios feices"
        width={320}
        height={320}
      ></Image>
      <Image
        className={styles.casamos}
        src="/assets/Noscasamos.svg"
        alt="Los novios f"
        width={260}
        height={260}
      ></Image>
    </div>
  );
}
