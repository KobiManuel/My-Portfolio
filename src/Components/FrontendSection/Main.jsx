import React from 'react'
import ProjectCard from '../../UI/ProjectCard/ProjectCard';
import banner from './images/banner.jpg';

const FrontendSection = () => {
  return (
    <div>
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