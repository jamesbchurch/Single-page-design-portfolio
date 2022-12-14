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
        <h2 className={styles.graphicsText}>Graphic Design</h2>
      </li>
      <li className={styles.ui}>
        <img src="pattern-ui-ux.svg" alt="ui" />
        <h2>UI/UX</h2>
      </li>
      <li className={styles.apps}>
        <img src="pattern-apps.svg" alt="apps" />
        <h2>Apps</h2>
      </li>
      <li className={styles.spanRow}>
        <img src="pattern-illustrations.svg" alt="illustrations" />
        <h2>Illustrations</h2>
      </li>
      <li className={styles.spanRow}>
        <img src="pattern-photography.svg" alt="photos" />
        <h2>Photography</h2>
      </li>
      <li className={styles.spanRow}>
        <img src="pattern-motion-graphics.svg" alt="motion" />
        <h2>Motion Graphics</h2>
      </li>
    </ul>
  );
}
