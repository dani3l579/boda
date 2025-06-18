import Image from "next/image";
import styles from "./LugarSection.module.css";
export default function LugarSection() {
  return (
    <div className={styles.section}>
      <Image
        className={styles.image}
        src="/assets/lights.svg"
        alt="Los novios felices"
        width={130}
        height={130}
      ></Image>
      <Image
        className={styles.image2}
        src="/assets/lights.svg"
        alt="Los novios felices"
        width={130}
        height={130}
      ></Image>
      <h2 className={styles.title}>Dónde?</h2>
      <h3 className={styles.h3}>En nuestra casa!</h3>
      <div className={styles.line}> </div>
      <p className={styles.dir}>Dirección:</p>
      <p className={styles.dir2}>
        Baños - Barrio Pititg <br />a pocos pasos de Casa Dorada. Ingreso
        Callejón.
      </p>
      <div className={styles.mapa}>Mapa</div>
    </div>
  );
}
