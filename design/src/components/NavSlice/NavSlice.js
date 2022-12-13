import styles from "./NavSlice.module.css";

export default function NavSlice() {
  return (
    <div className={styles.navList}>
      <img src="logo.svg" alt="logo" width="42" height="42" />
      <button className={styles.button}>Free Consultation </button>
    </div>
  );
}
