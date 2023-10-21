import React from 'react'
import SectionOne from './SectionOne'
import SecionTwo from './SecionTwo'
import './tech.css'

const Tech = () => {
  return (
    <div className='Tech'>
        <h2 className="titleNames">
        Tech Groups
        </h2>
        <p  >It is our priority to help our members grow in the tech field. Here are some of the tech fields we<br/> are focused on for now.</p>
        <SectionOne />
        <SecionTwo />
    </div>
  )
}

export default Tech