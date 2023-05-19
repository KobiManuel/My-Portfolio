import React from "react";
import Hero from "../../Components/Hero/Main";
import DeveloperSection from "../../Components/DeveloperSection/Main";
import FrontendSection from "../../Components/FrontendSection/Main";
import DesignPage from "../DesignPage/Main";
import "./_Main.scss";
import AboutMe from "../../Components/AboutMe/Main";
import ContactMe from "../../Components/ContactMe/Main";

const MainPage = () => {
  return (
    <div className="main_page">
      <div className="pages">
        <Hero />
        <DeveloperSection />
        <FrontendSection />
        <DesignPage />
        <AboutMe />
        <ContactMe />
      </div>
    </div>
  );
};

export default MainPage;
