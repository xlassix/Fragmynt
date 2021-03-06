import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Nav from "../components/Nav";
import MainSession from "../components/MainSession";
import BackedBy from "../components/BackedBy";
import EveryThingYouNeed from "../components/EveryThingYouNeed";
import TradeAndEarn from "../components/TradeAndEarn";
import Join from "../components/Join";
import Community from "../components/Community";
import Footer from "../components/Footer";


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>fragmynt</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="color-scheme"/>
        <link href="https://uploads-ssl.webflow.com/61f191256d6b9c6bb4d698ec/6206991a899ab248be89d369_Artboard%201.png" rel="shortcut icon" type="image/x-icon"></link>
      </Head>
      <header className={styles.header}>
        <Nav />
      </header>
      <MainSession />
      <BackedBy />
       <EveryThingYouNeed />
      <TradeAndEarn />
      <Join />
      <Community />
      <Footer /> 
    </div>
  );
}
