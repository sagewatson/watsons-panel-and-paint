import styles from "../styles/Home.module.css";

const MainSlider = () => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroOverlay}>
        <h1 className={styles.mainHeading}>
          Far North's smash repair specialists
        </h1>
        <p className={styles.subHeading}>
          Our expert panel beaters and painters take pride in restoring your
          vehicle to its original state. Skill technique, finish artistry is
          reflected in how smooth the body of your car will look and the fine
          paint job that will be applied to it{" "}
        </p>
        <button className={styles.btn}>Services</button>
        <button className={styles.btn}>Contact</button>
      </div>
    </div>
  );
};

export default MainSlider;
