import styles from "../styles/Home.module.css";

const Hamburger = () => {
  return (
    <>
      <div>
        <div className={`${styles.burger} ${styles.burger1}`}></div>
        <div className={`${styles.burger} ${styles.burger2}`}></div>
        <div className={`${styles.burger} ${styles.burger3}`}></div>
      </div>
    </>
  );
};

export default Hamburger;
