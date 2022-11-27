import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";

import InsuranceCompanies from "../components/InsuranceCompanies";
import NewFacilities from "../components/NewFacilities";
import MainSlider from "../components/MainSlider";
import Services from "../components/Services";
import BookQuoteCta from "../components/BookQuoteCta";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <Header />
      </Head>

      <main className={styles.main}>
        <MainSlider />
        <Services />
        <BookQuoteCta />
        <div className={styles.insuranceCompanies}>
          <InsuranceCompanies />
        </div>
        <NewFacilities />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
