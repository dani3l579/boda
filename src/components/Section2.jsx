import Image from "next/image";
import styles from "./Section2.module.css";
export default function Section2() {
  return (
    <section className={styles.cont}>
      <img
        className={styles.flower}
        src="/assets/ramas.png"
        alt="Los novios feices"
        width={320}
        height={320}
      ></img>

      <h3 className={styles.ubicacion}>Ubicación</h3>
      <p className={styles.dir1}>
        Baños <br />
        Holiday Homes
      </p>
      <p className={styles.dir2}>
        Barrio Pititg <br />a pocos pasos de Casa Dorada. Ingreso Callejón.
      </p>
      <div className={styles.bullets}>
        <div className={styles.bullet0}></div>
        <div className={styles.bullet1}></div>
        <div className={styles.bullet2}></div>
        <div className={styles.bullet3}></div>
        <div className={styles.bullet4}></div>
      </div>
      <img
        className={styles.shoes}
        src="/assets/shoes.png"
        alt="Los novios feices"
        width={320}
        height={320}
      ></img>
      <h3 className={styles.vestimenta}>Vestimenta sugerida</h3>
      <h3 className={styles.traje}>Traje y vestido elegante</h3>
      <div className={styles.nousar}>No usar</div>
      <div className={styles.contColores}>
        <div className={styles.verde}>
          <div className={styles.circle}></div>
          <p className={styles.colorG}>Verdes</p>
        </div>
        <div className={styles.blanco}>
          <div className={styles.circleW}></div>
          <p className={styles.color}>Blanco</p>
        </div>
      </div>
    </section>
  );
}
