import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/Home.module.css";
import Link from "next/link";

const Nav = () => {
  return (
    <div className={styles.menuContainer}>
      <ul className={`${styles.menuList} navigation`}>
        <li>
          {" "}
          <Link href="/">Home</Link>
        </li>
        <li className={styles.bookAssessmentLi}>
          <Link href="/book-assessment">Book an Assessment</Link>
        </li>
        <li className={styles.aboutLi}>
          {" "}
          <Link href="#about">About</Link>
        </li>
        <li className={styles.insurersLi}>
          {" "}
          <Link href="#insurers">Insurers</Link>
        </li>
        <li>
          {" "}
          <Link href="/contact">Contact</Link>
        </li>
        <li className={styles.phoneContact}>
          <span className={styles.phoneIcon}>
            <FontAwesomeIcon icon={faPhone} />
          </span>
          094082520
        </li>
      </ul>
    </div>
  );
};

export default Nav;
