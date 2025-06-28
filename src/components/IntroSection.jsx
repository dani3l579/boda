import Image from "next/image";
import styles from "./IntroSection.module.css";
export default function IntroSection() {
  return (
    <div className={styles.cont}>
      {/* <Image
        className={styles.image}
        src="/assets/danibibi.jpg"
        alt="Los novios felices"
        width={1000}
        height={1000}
      ></Image> */}
      <img
        className={styles.image}
        src="/assets/danibibi.jpg"
        alt="Los novios felices"
        width="1000"
        height="1000"
      />
      <img
        className={styles.names}
        src="/assets/DanielyBritney.svg"
        alt="Los novios feices"
        width={320}
        height={320}
      ></img>
      <img
        className={styles.casamos}
        src="/assets/Noscasamos.svg"
        alt="Los novios f"
        width={260}
        height={260}
      ></img>
    </div>
  );
}
