import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.css";
import { useForm, ValidationError } from "@formspree/react";

export default function Contact() {
  const [state, handleSubmit] = useForm("mnqrykzv");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <>
      <Header />
      <div className={styles.contactTextSection}>
        <h1>Contact us</h1>
        <h2>
          Need to get in touch? We can answer any of your questions. Complete
          this form or contact us on
          <a href="tel:+64094082520"> 094082520</a>, or via email
          <a href="mailto:admin@watsonspp.co.nz"> admin@watsonspp.co.nz</a>
        </h2>
      </div>
      <div className={styles.contactContainer}>
        <h2 className={styles.sendAMessage}>Send us a message</h2>
        <form onSubmit={handleSubmit} className={styles.mainForm}>
          <label htmlFor="name">Full Name</label>
          <input
            id="name"
            type="text"
            name="name"
            className={styles.formAreas}
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            type="email"
            name="email"
            className={styles.formAreas}
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            className={styles.formAreas}
            rows="4"
            cols="50"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button
            type="submit"
            disabled={state.submitting}
            className={styles.btn}
          >
            Submit
          </button>
        </form>
      </div>
      <h1 className={styles.findUsText}>Need to find us?</h1>
      <div className={styles.contactLocation}>
        <iframe
          className={styles.locationIframe}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3264.4387402553393!2d173.2546557152429!3d-35.09575388033503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0974b5d59acb63%3A0x3efdf2ab12afe867!2sWatsons%20Panel%20%26%20Paint!5e0!3m2!1sen!2snz!4v1669683881970!5m2!1sen!2snz"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className={styles.addressOpeningHours}>
          <p>Find us at:</p>
          <address>
            145 North Road <br /> Kaitaia 0482 <br />
            Far North
          </address>
          <p>We are open from 8am - 5pm Monday through Friday</p>
          <p>Closed on weekends</p>
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
