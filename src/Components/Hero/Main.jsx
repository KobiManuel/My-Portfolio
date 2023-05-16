import React, { useEffect, useRef, useState } from "react";
import "./_Main.scss";

const Hero = () => {
  const heroRef = useRef(null);
  const cardRef1 = useRef(null);
  const cardRef2 = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

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
    <section className="hero" ref={heroRef}>
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
    </section>
  );
};

export default Hero;
