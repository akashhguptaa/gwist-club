import React from "react";
import Navbar from "./components/navbar";
import HeroSection from "./components/heroSection";
import MissionSection from "./components/missionSection";
import Goals from "./components/goals";
import Footer from "./components/footer";

const HomePage = () => {
  return (
    <div>
      <div className="min-h-screen bg-white">
        <Navbar />
        <HeroSection />
      </div>
      <MissionSection />
      <Goals />
      <Footer />
    </div>
  );
};

export default HomePage;
