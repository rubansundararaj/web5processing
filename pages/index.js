import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";


export default function Home() {
  return (
    <>
      <Head>
        <title>ANYI - Web5 Payment infrastructure for all business needs</title>
        <meta
          name="description"
          content="Web5 Payment infrastructure for all business needs, Best of both the worlds, web2 to keep you compliant and web3 to keep the cost low."
        />
        <link rel="icon" href="/img/vvfivepurple.jpeg" />
      </Head>

      <Navbar />
      <Hero />
      <SectionTitle
        pretitle="ANYI"
        title=" What we do">
        Web5 Payment infrastructure for all business needs, Best of both the worlds, web2 to keep you compliant and web3 infrastructure to keep the cost low.
      </SectionTitle>
      <Benefits data={benefitOne} />
      <SectionTitle
        pretitle="Testimonials"
        title="">
      </SectionTitle>
      <Testimonials />
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
       
      </SectionTitle>
      <Faq />
      {/* <Cta /> */}
      <Footer />
      <PopupWidget />
    </>
  );
}
