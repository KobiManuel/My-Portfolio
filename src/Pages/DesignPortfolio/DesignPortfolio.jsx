import React from "react";
import "./_DesignPortfolio.scss";
import Hero from "./Hero/Main";

const DesignPortfolio = () => {
  return (
    <section className="dev-tools" >
      <div className="devtool-pages">
        <Hero />
        <LunaCodex />
        <SynthSpeak />
        <SvgConverter />
      </div>
    </section>
  );
};

export default DesignPortfolio;
