import Image from "next/image";
import styles from "./Section4.module.css";
export default function Section4() {
  return (
    <section className={styles.cont}>
      <h3 className={styles.sobre}>SOBRE CERRADO</h3>
      <img
        className={styles.image}
        src="/assets/f4.png"
        alt="Los novios felices"
        width={80}
        height={80}
      ></img>
      <p className={styles.parr}>
        El mejor regalo es tenerte con nosotros en este día tan especial.
      </p>
      <p className={styles.parr2}>
        Si deseas continuar con la tradición del sobre, puedes dejarlo anónimo
        en la cajita designada.
      </p>

      <img
        className={styles.image2}
        src="/assets/DyBfinal.svg"
        alt="Los novios felices"
        width={290}
        height={290}
      ></img>
      <h3 className={styles.esperamos}>TE ESPERAMOS</h3>
      <div className={styles.fotosCont}>
        <img
          className={styles.fotos}
          src="/assets/foto1.png"
          alt="Los novios felices"
          width={120}
          height={120}
        ></img>
        <img
          className={styles.fotos}
          src="/assets/foto2.png"
          alt="Los novios felices"
          width={120}
          height={120}
        ></img>
        <img
          className={styles.fotos}
          src="/assets/foto3.png"
          alt="Los novios felices"
          width={120}
          height={120}
        ></img>
        <img
          className={styles.fotos}
          src="/assets/foto4.png"
          alt="Los novios felices"
          width={120}
          height={120}
        ></img>
        <img
          className={styles.fotos}
          src="/assets/foto5.png"
          alt="Los novios felices"
          width={120}
          height={550}
        ></img>
        <img
          className={styles.fotos}
          src="/assets/foto6.png"
          alt="Los novios felices"
          width={500}
          height={500}
        ></img>
      </div>
    </section>
  );
}
