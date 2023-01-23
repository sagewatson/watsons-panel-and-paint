import styles from "../styles/Home.module.css";

const BookQuoteCta = () => {
  return (
    <div className={styles.workshopCarsBackground}>
      <div className={styles.bookQuoteContainer}>
        <h2 className={styles.bookQuoteHeading}>Book a free quote</h2>
        <p className={styles.bookQuoteSubHeading}>
          At Watson's Panel & Paint we offer free quotes - book one online now
        </p>
        <button className={styles.btn}>
          <a href="/contact">Book now</a>
        </button>
      </div>
    </div>
  );
};

export default BookQuoteCta;
