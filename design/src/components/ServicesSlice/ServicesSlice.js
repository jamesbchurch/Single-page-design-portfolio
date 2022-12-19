import styles from './ServicesSlice.module.css';

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
        <img className={styles.uiImg} src="pattern-ui-ux.svg" alt="ui" />
        <h2 className={styles.uiText}>UI/UX</h2>
      </li>
      <li className={styles.apps}>
        <img className={styles.appsImg} src="pattern-apps.svg" alt="apps" />
        <h2 className={styles.appsText}>Apps</h2>
      </li>
      <li className={styles.ill}>
        <img
          className={styles.illImg}
          src="pattern-illustrations.svg"
          alt="illustrations"
        />
        <h2 className={styles.illText}>Illustrations</h2>
      </li>
      <li className={styles.photo}>
        <img
          className={styles.photoImg}
          src="pattern-photography.svg"
          alt="photos"
        />
        <h2 className={styles.photoText}>Photography</h2>
      </li>
      <li className={styles.motion}>
        <img
          className={styles.motionImg}
          src="pattern-motion-graphics.svg"
          alt="motion"
        />
        <h2 className={styles.motionText}>Motion Graphics</h2>
      </li>
    </ul>
  );
}
