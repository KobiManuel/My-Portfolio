import React from 'react'
import ProjectCard from '../../UI/ProjectCard/ProjectCard';
import developer from './images/A.I.jpg';

const DeveloperSection = () => {
  return (
    <div>
      <ProjectCard
        title1="A.I &"
        title2="Developer Tools"
        description="Fullstack development"
        Image={developer}
      />
    </div>
  );
}

export default DeveloperSection