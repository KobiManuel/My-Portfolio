import React, { useContext, useEffect, useRef } from "react";
import ProjectCard from "../../UI/ProjectCard/ProjectCard";
import developer from "./images/A.I.jpg";
import { PortfolioContext } from "../../Context/context";

const DeveloperSection = () => {
  const { firstCard, setFirstCard } = useContext(PortfolioContext);
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
  }, [firstCard]);

  return (
    <div className="developer-section" ref={developerSectionRef}>
      <ProjectCard
        title1="A.I & Developer"
        title2="Tools"
        description="Fullstack development"
        Image={developer}
        hoverColor="#012c3a"
      />
    </div>
  );
};

export default DeveloperSection;
