import styles from "../styles/Home.module.css";

const BookQuoteCta = () => {
  return (
    <div className={styles.workshopCarsBackground}>
      <div className={styles.bookQuoteContainer}>
        <h2>Book a free quote</h2>
        <p>
          At Watson's Panel & Paint we offer free quotes - book one online now
        </p>
        <button>Book now</button>
      </div>
    </div>
  );
};

export default BookQuoteCta;
