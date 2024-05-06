import AboutUs from "@/components/Inicio/AboutUs";
import { Hero } from "@/components/Inicio/Hero";
import RecentProyects from "@/components/Inicio/RecentProyects";
import Services from "@/components/Inicio/Services";
import React from "react";

const page = () => {
  return (
    <div>
      <Hero />
      <Services />
      <RecentProyects />
      <AboutUs />
    </div>
  );
};

export default page;
