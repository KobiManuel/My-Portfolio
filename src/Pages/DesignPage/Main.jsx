import React, { useContext, useEffect, useRef } from 'react'
import banner from './images/banner.jpg';
import ProjectCard from '../../UI/ProjectCard/ProjectCard';
import { PortfolioContext } from '../../Context/context';

const DesignPage = () => {
    const { setThirdCard } = useContext(PortfolioContext);
    const developerSectionRef = useRef(null);

    useEffect(() => {
      const observerOptions = {
        threshold: 0.8, // Set the threshold to 80%
      };

      const observerCallback = (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setThirdCard(true);
          } else {
            setThirdCard(false);
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
    }, [setThirdCard]);
  return (
    <div>
      <ProjectCard
        title1="Design & Art"
        title2="Portfolio"
        description="Visual Design"
        Image={banner}
        hoverColor="#012c5a"
      />
    </div>
  );
}

export default DesignPage