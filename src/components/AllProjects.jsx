import React from 'react'
import { useSelector } from 'react-redux';
import ProjectCard from './ProjectCard';

const AllProjects = () => {
  const allProjects = useSelector(state => state?.projects?.projects);
  // console.log(allProjects);


  return (
    <div className='w-full py-6 flex items-center justify-center gap-6 flex-wrap'>
      {allProjects && allProjects.map((item, index) => (
        <ProjectCard key={item.id} proj={item} index={index} />
      ))}
    </div>
  )
}

export default AllProjects