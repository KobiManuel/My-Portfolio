import React from 'react'
import ProjectCard from '../../UI/ProjectCard/ProjectCard';
import developer from './images/A.I.jpg';

const DeveloperSection = () => {
  return (
    <div>
      <ProjectCard
        title1="A.I & Developer "
        title2="Tools"
        description="Fullstack development"
        Image={developer}
        hoverColor="#012c3a"
      />
    </div>
  );
}

export default DeveloperSection