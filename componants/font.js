import styles from "../styles/Font.module.css";

function Font() {
  return (
    <>
      <div className={styles.root}>
        <div className={styles.background}>
          <h1 className={styles.text}>Welcome Home</h1>
          <div className={styles.text2}>
        <h1 className="text-2xl pt-8 text-gray-200">
          This oppurtunity comes only once in a blue moon:
          </h1>
          <h1 className="text-xl pt-4 text-gray-200">
          the professional and personal portfolio for Taylor Lepper.
          </h1>
          <h1 className="text-xl pt-8 text-gray-200">
        Enjoy :)
          </h1>
        </div>
        </div>
      

      </div>
    </>
  );
}

export default Font;
