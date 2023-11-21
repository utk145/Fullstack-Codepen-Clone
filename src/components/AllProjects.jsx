import React from 'react'
import { useSelector } from 'react-redux';

const AllProjects = () => {
  const allProjects = useSelector(state => state?.projects?.projects);
  console.log(allProjects);


  return (
    <div className=''>

    </div>
  )
}

export default AllProjects