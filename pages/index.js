import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";

import InsuranceCompanies from "../components/InsuranceCompanies";
import NewFacilities from "../components/NewFacilities";
import MainSlider from "../components/MainSlider";
import Services from "../components/Services";
import BookQuoteCta from "../components/BookQuoteCta";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Watson's Panel & Paint</title>
      </Head>
      <Header />
      <main className={styles.main}>
        <MainSlider />
        <Services />
        <BookQuoteCta />
        <div className={styles.insuranceCompanies}>
          <InsuranceCompanies />
        </div>
        <NewFacilities />
        <AboutUs />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
