import React from 'react'
import ProjectCard from '../../UI/ProjectCard/ProjectCard';
import banner from './images/pxfuel.jpg';

const FrontendSection = () => {
  return (
    <div>
      <ProjectCard
        title1="A.I & Developer "
        title2="Tools"
        description="Fullstack development"
        Image={banner}
        hoverColor="#012c3a"
      />
    </div>
  );
}

export default FrontendSection