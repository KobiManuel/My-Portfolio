import React, { useEffect, useRef, useState } from "react";
import "./_Main.scss";

const Hero = () => {
  const heroRef = useRef(null);
  const cardRef1 = useRef(null);
  const cardRef2 = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    observer.observe(heroRef.current);
    observer.observe(cardRef1.current);
    observer.observe(cardRef2.current);

    return () => {
      observer.unobserve(heroRef.current);
      observer.unobserve(cardRef1.current);
      observer.unobserve(cardRef2.current);
    };
  }, [isVisible]);

  return (
    <div className="hero" ref={heroRef}>
      <div
        className={`project-card ${
          isVisible ? "visible" : ""
        } animate-from-left`}
        ref={cardRef1}
      >
        <h3>Kobi</h3>
        <h3>Manuel</h3>
        <span></span>
        <p>Web developer / Visual Artist</p>
      </div>
      <div
        className={`project-card ${
          isVisible ? "visible" : ""
        } animate-from-right`}
        ref={cardRef2}
      >
        <h6>Portfolio</h6>
      </div>
    </div>
  );
};

export default Hero;
