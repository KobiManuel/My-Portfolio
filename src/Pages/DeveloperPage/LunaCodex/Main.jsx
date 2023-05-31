import React, { useContext, useEffect, useRef, useState } from "react";
import { PortfolioContext } from "../../../Context/context";
import codex from "../../../Components/DeveloperSection/images/A.I.jpg";
import ProjectCard from "../../../UI/ProjectCard/ProjectCard";

const LunaCodex = ({ id }) => {
  const { setFirstCard } = useContext(PortfolioContext);
  const developerSectionRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.8, // Set the threshold to 80%
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setFirstCard(true);
        } else {
          setFirstCard(false);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );
    const target = developerSectionRef.current;

    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, [setFirstCard]);

  return (
    <section
      id={id}
      className="developer-section"
      ref={developerSectionRef}
      style={{ zIndex: "800000000" }}
    >
      <ProjectCard
        title1="L.U.N.A"
        title2="Neural Assistant"
        description="Fullstack development"
        Image={codex}
        hoverColor="#012c3a"
        link={
          "https://cuseum.com/blog/22/6/1/top-technology-trends-in-2022-and-what-they-mean-for-associations-membership-organizations"
        }
      />
    </section>
  );
};

export default LunaCodex;
