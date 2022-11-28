import logo from "../public/images/homepage-images/WATSON-LOGO-STRETCHED-TRANSPARENT.png";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Footer = () => {
  return (
    <>
      <div className={styles.footer}>
        <Image
          src={logo}
          alt="Watson's Panel & Paint logo"
          width={300}
          height={37}
        />
        <p>Footer links</p>
        <p>Opening hours</p>
        <p>Location</p>
        <p>Facebook</p>
      </div>
      <p className={styles.copyright}>
        Watson's Panel & Paint 2022 © Website Developed by Sage Watson
      </p>
    </>
  );
};

export default Footer;
