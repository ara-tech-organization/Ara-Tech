import React from "react";
import Hero from "../components/Home/Hero";
import SolutionsSection from "../components/Home/SolutionsSection";
import EaseValueCard from "../components/Home/EaseValueCard";
import InsightsSection from "../components/Home/InsightsSection";


const Home = () => {
  return (
    <>
      <Hero />
      <SolutionsSection/>
      <EaseValueCard/>
      <InsightsSection/>
    </>
  );
};

export default Home;
