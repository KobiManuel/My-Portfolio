import React, { useEffect, useRef, useState } from 'react'
import './_Main.scss'

const Hero = () => {
    const cardRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        },
        { threshold: 0.5 }
      );

      observer.observe(cardRef.current);

      return () => observer.unobserve(cardRef.current);
    }, [isVisible]);
  return (
    <div
      className={`project-card ${isVisible ? "visible hero" : "hero"}`}
      ref={cardRef}
    >
      <div>
        <h3>Kobi</h3>
        <h3>Manuel</h3>
        <span></span>
        <p>Web developer / Visual Artist</p>
      </div>
      <div>
        <h6>Portfolio</h6>
      </div>
    </div>
  );
}

export default Hero