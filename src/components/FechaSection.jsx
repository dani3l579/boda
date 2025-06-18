"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./FechaSection.module.css";

export default function FechaSection() {
  const [guestName, setGuestName] = useState("");

  useEffect(() => {
    const name = localStorage.getItem("guestName");

    if (name) {
      setGuestName(name);
      // ❌ Si quieres borrar después, puedes usar esto:
      // localStorage.removeItem("guestName");
    } else {
      // Si no hay nombre, redirige al inicio o a error
      window.location.href = "/";
    }
  }, []);

  const boxRef = useRef(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimated(true);
    }, 100); // delay para disparar la animación
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.h2}>NUESTRA BODA</h2>

      <div
        ref={boxRef}
        className={`${styles.boxDates} ${animated ? styles.animate : ""}`}
      >
        <div className={styles.dateW}>
          <h3 className={styles.h3W}>Septiembre</h3>
          <div className={styles.lineW}></div>
          <h4 className={styles.h4W}>14</h4>
        </div>
        <div className={styles.dateW}>
          <h3 className={styles.h3W}>Septiembre</h3>
          <div className={styles.lineW}></div>
          <h4 className={styles.h4W}>15</h4>
        </div>
        <div className={styles.dateW}>
          <h3 className={styles.h3W}>Septiembre</h3>
          <div className={styles.lineW}></div>
          <h4 className={styles.h4W}>16</h4>
        </div>
        <div className={styles.dateW}>
          <h3 className={styles.h3W}>Septiembre</h3>
          <div className={styles.lineW}></div>
          <h4 className={styles.h4W}>17</h4>
        </div>

        <div className={styles.dateW}>
          <h3 className={styles.h3W}>Septiembre</h3>
          <div className={styles.lineW}></div>
          <h4 className={styles.h4W}>18</h4>
        </div>
        <div className={styles.date}>
          <h3 className={styles.h3}>Septiembre</h3>
          <div className={styles.line}></div>
          <h4 className={styles.h4}>19</h4>
        </div>
        <div className={styles.dateW}>
          <h3 className={styles.h3W}>Septiembre</h3>
          <div className={styles.lineW}></div>
          <h4 className={styles.h4W}>20</h4>
        </div>
      </div>
      {guestName && <h4 className={styles.guest}>{guestName}</h4>}
      <p className={styles.parrafo}>
        Nos elegimos para siempre, y queremos festejarlo contigo.
        <br /> ¡Te esperamos en nuestra boda!
      </p>
      <div className={styles.fecha}>Viernes 19 de Septiembre</div>
      <p className={styles.hora}>Inicia a las 2:30 pm</p>
    </div>
  );
}
