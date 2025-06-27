import Image from "next/image";
import styles from "./Section1.module.css";
import Countdown from "./CountDown";
import AudioPlayer from "./AudioPlayer";
export default function Section1() {
  return (
    <div className={styles.cont}>
      <AudioPlayer></AudioPlayer>
      <Image
        className={styles.image}
        src="/assets/Estasinvitado.svg"
        alt="Los novios felices"
        width={350}
        height={350}
      ></Image>
      <p className={styles.parr}>
        Nos elegimos para siempre, y queremos festejarlo contigo. ¡Te esperamos
        en nuestra boda!
      </p>
      <div className={styles.date}>
        <h3 className={styles.viernes}>Viernes</h3>
        <div className={styles.vertical1}></div>
        <h3 className={styles.number}>19</h3>
        <div className={styles.vertical2}></div>
        <h3 className={styles.septiembre}>Septiembre</h3>
      </div>
      <h3 className={styles.falta}>Falta solo</h3>
      <Countdown></Countdown>
      <div className={styles.contHora}>
        <h3 className={styles.inicia}>Inicia</h3>
        <div className={styles.vertical3}></div>
        <h2 className={styles.hour}>
          2:30 <span className={styles.pm}>PM</span>
        </h2>
      </div>
    </div>
  );
}
