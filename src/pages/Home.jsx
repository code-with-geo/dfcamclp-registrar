import React from "react";
import Banner from "../components/Banner";
import Intro from "../components/Intro";
import Enrollment from "../components/Enrollment";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import Announcement from "../components/Announcement";

function Home() {
  return (
    <>
      <Banner />
      <Intro />
      <Announcement />
      <Enrollment />
      <FAQ />
      <Footer />
    </>
  );
}

export default Home;
