import styles from "./SobreSection.module.css";
export default function SobreSection() {
  return (
    <div className={styles.section}>
      <h2 className={styles.title}>SOBRE CERRADO</h2>
      <div className={styles.line}></div>
      <div className={styles.sobre}>
        <div className={styles.tapa}></div>
      </div>
      <p className={styles.p}>
        El mejor regalo es tenerte con nosotros en este día tan especial
      </p>
      <p className={styles.p2}>
        Si deseas compartir con el sobre, puedes dejarlo anónimo en la cajita
        designada.
      </p>
    </div>
  );
}
