import styles from "../recordItems.module.css";

export const Wpm = () => {
  return (
    <div className={styles.recordItem}>
      <p>WPM</p>
      <h1>
        35 <span>/ min</span>
      </h1>
    </div>
  );
};
