import styles from "../styles/Home.module.css";

const AboutUs = () => {
  return (
    <div className={styles.aboutUsContainer} id="about">
      <h2 className={styles.aboutUsHeading}>About us</h2>
      <p className={styles.aboutUsSubHeading}>
        Watson's Panel & Paint is a local, family owned business which has been
        running for over 40 years. Our attention to detail is what we pride
        ourselves on, making sure your car looks and feels exceptional.
      </p>
      <p className={styles.aboutUsSubHeading}>
        Based in Kaitaia, we are the recommended repairer by the leading
        insurance companies around New Zealand. We can take care of any car
        repair, ranging from small to big, and aim to make the process as
        hassle-free as possible. Whether it's body repairs, painting or
        detailing work, we are committed to getting you back on the road
        quickly.
      </p>
      <p className={styles.aboutUsSubHeading}>
        Let us take care of your stress and contact us, or book a free quote
      </p>
      <button className={styles.btn}>Contact Us</button>
      <button className={styles.btn}>Book a Quote</button>
    </div>
  );
};

export default AboutUs;
