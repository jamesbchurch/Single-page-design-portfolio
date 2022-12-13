import styles from "./ServicesSlice.module.css";

export default function ServicesSlice() {
  return (
    <ul className={styles.gridContainer}>
      <li className={styles.graphics}>
        <img
          className={styles.graphicsImg}
          src="pattern-graphic-design.svg"
          alt="graphics"
        />
      </li>
      <li className={styles.ui}>
        <img src="pattern-ui-ux.svg" alt="ui" />
      </li>
      <li className={styles.apps}>
        <img src="pattern-apps.svg" alt="apps" />
      </li>
      <li className={styles.spanRow}>
        <img src="pattern-illustrations.svg" alt="illustrations" />
      </li>
      <li className={styles.spanRow}>
        <img src="pattern-photography.svg" alt="photos" />
      </li>
      <li className={styles.spanRow}>
        <img src="pattern-motion-graphics.svg" alt="motion" />
      </li>
    </ul>
  );
}
