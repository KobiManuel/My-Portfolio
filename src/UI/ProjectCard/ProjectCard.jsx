import React, { useEffect, useRef, useState } from "react";
import "./_ProjectCard.scss";
import { Link } from "react-router-dom";

const ProjectCard = ({ title1, title2, description, Image, hoverColor }) => {
  const heroRef = useRef(null);
  const cardRef1 = useRef(null);
  const cardRef2 = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const buttonStyle = {
    backgroundColor: isHovered && hoverColor
  };

  useEffect(() => {
    const heroNode = heroRef.current;
    const cardNode1 = cardRef1.current;
    const cardNode2 = cardRef2.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    observer.observe(heroNode);
    observer.observe(cardNode1);
    observer.observe(cardNode2);

    return () => {
      observer.unobserve(heroNode);
      observer.unobserve(cardNode1);
      observer.unobserve(cardNode2);
    };
  }, [isVisible]);

  return (
    <div className="card" ref={heroRef}>
      <div
        className={`project-card ${
          isVisible ? "visible" : ""
        } animate-from-left`}
        ref={cardRef1}
      >
        <span>
          <h3>{title1}</h3>
          <h3>{title2}</h3>
        </span>
        <span></span>
        <p>{description}</p>
        <Link
          to="#"
          style={buttonStyle}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Show Me More
        </Link>
      </div>
      <div
        className={`project-card ${
          isVisible ? "visible" : ""
        } animate-from-right`}
        ref={cardRef2}
      >
        <img src={Image} alt="project background" />
      </div>
    </div>
  );
};

export default ProjectCard;
