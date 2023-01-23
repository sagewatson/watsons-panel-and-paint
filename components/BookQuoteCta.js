import styles from "../styles/Home.module.css";
import Link from "next/link";

const BookQuoteCta = () => {
  return (
    <div className={styles.workshopCarsBackground}>
      <div className={styles.bookQuoteContainer}>
        <h2 className={styles.bookQuoteHeading}>Book a free quote</h2>
        <p className={styles.bookQuoteSubHeading}>
          At Watson's Panel & Paint we offer free quotes - book one online now
        </p>
        <button className={styles.btn}>
          <Link href="/contact">Book now</Link>
        </button>
      </div>
    </div>
  );
};

export default BookQuoteCta;
