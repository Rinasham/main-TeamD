import styles from "./GamePage.module.css";
import "react-simple-keyboard/build/css/index.css";
import { GameArea } from "./gameArea/GameArea";
import { RecordArea } from "./recordArea/RecordArea";

export const GamePage = () => {
  return (
    <div className={styles.gamePageWrapper}>
      <GameArea />
      <RecordArea />
    </div>
  );
};
