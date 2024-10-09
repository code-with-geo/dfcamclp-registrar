import React from "react";
import Banner from "../components/Banner";
import Intro from "../components/Intro";
import Enrollment from "../components/Enrollment";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Banner />
      <Intro />
      <Enrollment />
      <FAQ />
      <Footer />
    </>
  );
}

export default Home;
