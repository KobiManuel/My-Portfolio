import React, { useContext, useEffect, useRef, useState } from "react";
import developer from "../../Components/DeveloperSection/images/A.I.jpg";
import ProjectCard from "../../UI/ProjectCard/ProjectCard";
import { PortfolioContext } from "../../Context/context";

const DeveloperPage = ({ id }) => {
  const { setFirstCard } = useContext(PortfolioContext);
  const [height, setHeight] = useState("");
  const [width, setWidth] = useState("");
  const [position, setPosition] = useState("");
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

  const handlePageChange = () => {
    setHeight("100%");
    setPosition("absolute");
    setWidth("70%");
  };

  return (
    <section
      id={id}
      className="developer-section"
      ref={developerSectionRef}
      style={{ zIndex: "800000000" }}
    >
      <ProjectCard
        title1="A.I & Developer"
        title2="Tools"
        description="Fullstack development"
        Image={developer}
        hoverColor="#012c3a"
        onClick={handlePageChange}
        height={height}
        width={width}
        position={position}
      />
    </section>
  );
};

export default DeveloperPage;
