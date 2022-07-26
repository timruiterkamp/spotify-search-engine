import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import Homepage from "../components/pages/Homepage";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Spotify Search engine</title>
        <meta name="description" content="Spotify search engine assesment" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Homepage />
      </main>
    </div>
  );
};

export default Home;
