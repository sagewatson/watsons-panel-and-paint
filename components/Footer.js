import logo from "../public/images/homepage-images/watsons-logo.png";
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
        <div>
          <p>Privacy Policy</p>
          <p>Contact</p>
          <p></p>
        </div>
        <div>
          <h3>Opening hours</h3>
          <p className={styles.openingHours}>
            Monday to Friday - 8am – 5pm <br /> Saturday & Sunday - Closed{" "}
          </p>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13057.754957872088!2d173.2568444!3d-35.0957539!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3efdf2ab12afe867!2sWatsons%20Panel%20%26%20Paint!5e0!3m2!1sen!2snz!4v1669598320166!5m2!1sen!2snz"
          width="250"
          height="200"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <p className={styles.copyright}>
        Watson's Panel & Paint 2022 © Website Developed by Sage Watson
      </p>
    </>
  );
};

export default Footer;
