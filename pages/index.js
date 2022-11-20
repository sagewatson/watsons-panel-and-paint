import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";

import InsuranceCompanies from "../components/InsuranceCompanies";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <Header />
      </Head>

      <main className={styles.main}>
        <div className={styles.heroContainer}>
          <div className={styles.heroOverlay}>
            <h2>Watson's Panel and Paint</h2>
          </div>
        </div>
        <div className={styles.insuranceCompanies}>
          <InsuranceCompanies />
        </div>
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
