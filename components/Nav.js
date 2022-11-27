import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/Home.module.css";

const Nav = () => {
  return (
    <div className={styles.menuContainer}>
      <ul className={styles.menuList}>
        <li>Home</li>
        <li>Book an Assessment</li>
        <li>About</li>
        <li>Insurers</li>
        <li>Contact</li>
        <li className={styles.phoneContact}>
          <span className={styles.phoneIcon}>
            <FontAwesomeIcon icon={faPhone} />
          </span>
          094082199
        </li>
      </ul>
    </div>
  );
};

export default Nav;
