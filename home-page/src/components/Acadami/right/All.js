import React from 'react'
import FirstSection from './FirstSection'
import SecondSection from './SecondSection'
import ThirdSection from './ThirdSection'
import FourthSection from './FourthSection'
import '../acadami.css';

const All = () => {
  return (
    <div className='All'>
        <FirstSection/>
        <SecondSection/>
        <ThirdSection/>
        <FourthSection/>
    </div>
  );
}

export default All