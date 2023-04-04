import styles from "../styles/Font.module.css";

function Font() {
  return (
    <>
      <div className={styles.root}>
        <div className={styles.background}>
          <h1 className={styles.text}>Welcome Home</h1>
          <div className={styles.text2}>
            <h1 className="text-3xl pt-8 text-gray-200">
              The oppurtunity that comes only once in a blue moon:
            </h1>
            <h1 className="text-xl pt-6 text-gray-200">
              Presenting the professional and personal portfolio for Taylor
              Lepper.
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Font;
