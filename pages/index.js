import { Hero } from "../components/Hero";
import Head from "next/head";
import Review from "../components/Review";
import { ReviewData } from "../components/ReviewData";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hotel Sala Sarand</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero heading="Hotel SALA" message="Discover Hotel Sala, ideally situated in Saranda's bustling city center,just a leisurely stroll from the picturesque Saranda City Beach."/>
      <Review reviews={ReviewData}/>
      <Gallery/>
      <Contact/>
    </div>
  );
}
