import styles from "../styles/Spaceship.module.css";

function Spaceship() {
  return (
    <>
      <div className="text-center">
        <body className={styles.background}>
          <div className={styles.container}>
            <div className={styles.moon}>
              <div className={styles.crater1}></div>
              <div className={styles.crater2}></div>
              <div className={styles.crater3}></div>
              <div className={styles.crater4}></div>
              <div className={styles.crater5}></div>
              <div className={styles.shadow}></div>
              <div className={styles.eye1}></div>
              <div className={styles.eye2}></div>
              <div className={styles.mouth}></div>
              <div className={styles.blush1}></div>
              <div className={styles.blush2}></div>
            </div>
            <div className={styles.orbit}>
              <div className={styles.rocket}>
                <div className={styles.window}></div>
              </div>
            </div>
          </div>
        </body>
      </div>
    </>
  );
}

export default Spaceship;
