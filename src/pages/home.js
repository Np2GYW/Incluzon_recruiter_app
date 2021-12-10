import React from "react";
import Layout from "../components/layout/layout";
import Banner from "../components/home/banner_section";
import About from "../components/home/about_us";
import We_do from "../components/home/what_we_do";
import Partners from "../components/home/our_partners";
import Contact from "../components/home/contact_us";

const Home = () => {
  return (
    <>
      <Layout>
          <Banner/>
          <About/>
          <We_do/>
          <Partners/>
          <Contact/>
      </Layout>
    </>
  );
};
export default Home;
