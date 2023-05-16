import React from 'react'
import banner from './images/banner.jpg';
import ProjectCard from '../../UI/ProjectCard/ProjectCard';

const DesignPage = () => {
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