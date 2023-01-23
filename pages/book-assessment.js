import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.css";

export default function BookAssessment() {
  return (
    <div className={styles.container}>
      <Header />

      <p>Coming soon. Contact us at admin@watsonspp.co.nz</p>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
