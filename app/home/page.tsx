import React from "react";
import Navbar from "/components/navbar";
import HeroSection from "/components/heroSection";
import MissionSection from "@/components/mission";
import GoalSection from "@/components/goals";
import Footer from "@/components/footer";

const HomePage = () => {
  return (
    <div>
      <div className="min-h-screen bg-white">
        <Navbar />
        <HeroSection />
      </div>
      <MissionSection />
      <GoalSection />
      <Footer />
    </div>
  );
};

export default HomePage;
