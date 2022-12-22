import styles from "./ContactSlice.module.css";
import Button from "../Button/Button";

export default function ContactSlice() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.title}>Book a call with me</h2>
        <p className={styles.description}>
          I love working with others to create beautiful design solutions. I’ve
          designed everything from brand illustrations to complete mobile apps.
          I’m also handy with a camera!
        </p>
      </div>
      <Button
        text={"Free Consultation"}
        colour={"#eb7565"}
        hoverColour={"#f6a560"}
      />
    </div>
  );
}
