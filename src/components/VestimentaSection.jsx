import Image from "next/image";
import styles from "./VestimentaSection.module.css";
export default function VestimentaSection() {
  return (
    <div className={styles.section}>
      <div className={styles.frame}>
        <Image
          className={styles.image}
          src="/assets/flower2.svg"
          alt="Los novios felices"
          width={50}
          height={50}
        ></Image>
        <Image
          className={styles.image2}
          src="/assets/flower2.svg"
          alt="Los novios felices"
          width={50}
          height={50}
        ></Image>
        <h3 className={styles.title}>Vestimenta Sugerida</h3>
        <div className={styles.line}></div>
        <h3 className={styles.subTitle}>Traje y vestido formal</h3>
        <div className={styles.line}></div>
        <div className={styles.nousar}>No usar</div>
        <div className={styles.colorCont}>
          <div className={styles.boxColor}>
            <div className={styles.color}></div>
            <p className={styles.name}>Verdes</p>
          </div>
          <div className={styles.boxColor}>
            <div className={styles.colorW}></div>
            <p className={styles.name}>Blancos</p>
          </div>
        </div>

        <h3 className={styles.des}>Como Trajes o Vestidos Completos</h3>
      </div>
    </div>
  );
}
