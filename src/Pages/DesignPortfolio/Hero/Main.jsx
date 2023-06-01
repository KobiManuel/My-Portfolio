import React, { useContext, useEffect, useRef } from "react";
import { PortfolioContext } from "../../../Context/context";
import banner from "./images/AI post blog.jpg";
import PageHeader from "../../../UI/PageHeader/PageHeader";

const Hero = ({ id }) => {
  return (
    <section
      id={id}
      className="Design-portfolio__hero"
      style={{ zIndex: "800000000" }}
    >
      <PageHeader
        title1={"A.I & Developer"}
        title2={"Tools"}
        stack={"Artificial Intelligence & Developer tools"}
        banner={banner}
      />
    </section>
  );
};

export default Hero;
