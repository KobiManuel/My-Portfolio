import React, { useContext, useEffect, useRef } from 'react'
import ProjectCard from '../../UI/ProjectCard/ProjectCard';
import banner from './images/banner3.jpg';
import { PortfolioContext } from '../../Context/context';

const FrontendSection = () => {
      const { setSecondCard } = useContext(PortfolioContext);
      const developerSectionRef = useRef(null);

      useEffect(() => {
        const observerOptions = {
          threshold: 0.8, // Set the threshold to 80%
        };

        const observerCallback = (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
             setSecondCard(true);
            } else {
             setSecondCard(false);
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
      }, [setSecondCard]);
  return (
    <div className='frontend-section' ref={developerSectionRef}>
      <ProjectCard
        title1="Frontend Dev"
        title2="Projects"
        description="Frontend development"
        Image={banner}
        hoverColor="#012c5a"
      />
    </div>
  );
}

export default FrontendSection