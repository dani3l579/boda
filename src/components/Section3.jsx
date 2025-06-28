import Image from "next/image";
import styles from "./Section3.module.css";
export default function Section3() {
  return (
    <section className={styles.cont}>
      <div className={styles.dottedLine}></div>
      <div className={styles.bulletsAbs}>
        <div className={styles.b1}></div>
        <div className={styles.b2}></div>
        <div className={styles.b3}></div>
        <div className={styles.b4}></div>
        <div className={styles.b5}></div>
        <div className={styles.b6}></div>
      </div>
      <img
        className={styles.flower}
        src="/assets/f1.png"
        alt="Los novios felices"
        width={70}
        height={70}
      ></img>
      <div className={styles.boxL}>
        <img
          className={styles.img1}
          src="/assets/car.png"
          alt="Los novios felices"
          width={70}
          height={70}
        ></img>

        <div>
          <h3 className={styles.hora}>14:30</h3>
          <h4 className={styles.descrip}>Bienvenida</h4>
        </div>
      </div>

      <div className={styles.boxR}>
        <div className={styles.ceremoniaText}>
          <h3 className={styles.hora}>15:00</h3>
          <h4 className={styles.descrip}>Ceremonia</h4>
        </div>

        <img
          className={styles.img1}
          src="/assets/firma.png"
          alt="Los novios felices"
          width={50}
          height={50}
        ></img>
      </div>
      <div className={styles.boxL}>
        <img
          className={styles.img1}
          src="/assets/discurso.png"
          alt="Los novios felices"
          width={50}
          height={50}
        ></img>

        <div>
          <h3 className={styles.hora}>15:30</h3>
          <h4 className={styles.descrip}>Discurso</h4>
        </div>
      </div>

      <div className={styles.boxR}>
        <div>
          <h3 className={styles.hora}>16:10</h3>
          <h4 className={styles.descrip}>Fotos</h4>
        </div>

        <img
          className={styles.img1}
          src="/assets/camara.png"
          alt="Los novios felices"
          width={50}
          height={50}
        ></img>
      </div>
      <div className={styles.boxL}>
        <img
          className={styles.img1}
          src="/assets/cena.png"
          alt="Los novios felices"
          width={50}
          height={50}
        ></img>

        <div>
          <h3 className={styles.hora}>17:40</h3>
          <h4 className={styles.descrip}>Cena</h4>
        </div>
      </div>
      <div className={styles.boxR}>
        <div>
          <h3 className={styles.hora}>18:45</h3>
          <h4 className={styles.descrip}>A bailar!</h4>
        </div>

        <img
          className={styles.img1}
          src="/assets/baile.png"
          alt="Los novios felices"
          width={50}
          height={50}
        ></img>
      </div>
    </section>
  );
}
