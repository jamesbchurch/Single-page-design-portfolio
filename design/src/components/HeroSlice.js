import styles from "./HeroSlice.module.css";

export default function HeroSlice() {
  return (
    <div className={styles.flexContainer}>
      <img src="image-amy.webp" alt="amy" width="350" height="350" />
      <span className={styles.ctaFlex}>
        <h2 className={styles.headline}>
          I’m Amy, and I’d love to work on your next project
        </h2>

        <p className={styles.description}>
          I love working with others to create beautiful design solutions. I’ve
          designed everything from brand illustrations to complete mobile apps.
          I’m also handy with a camera!{" "}
        </p>

        <button className={styles.button}>Free Consultation </button>
      </span>
    </div>
  );
}
