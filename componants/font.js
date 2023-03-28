import styles from "../styles/Font.module.css";

function Font() {
  return (
    <>
      <div className={styles.root}>
        <div className={styles.background}>
          <h1 className={styles.text}>Welcome Home</h1>
        </div>
        <div className={styles.text2}>
        <h1 className="text-2xl pt-4 text-gray-200">
            Please fasten your seatbelts for the journey ahead
          </h1>
          <h1 className="text-xl text-gray-200">
           This oppurtunity only comes once in a blue moon
          </h1>
        </div>

      </div>
    </>
  );
}

export default Font;
