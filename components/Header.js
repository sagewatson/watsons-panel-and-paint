import Nav from "./Nav";
import Logo from "./Logo";
import styles from "../styles/Home.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <div className={styles.navMenu}>
        <Nav />
      </div>
    </div>
  );
};

export default Header;
