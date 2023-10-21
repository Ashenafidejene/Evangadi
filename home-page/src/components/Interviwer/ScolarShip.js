import React from 'react'

const ScolarShip = () => {
  return (
    <div className='ScholarShip'>
        <h2 className="titleNames">
        Scholarship Opportunity
        </h2>
        <h3 className='subtitle'>Only for those who live in Ethiopia</h3>
        <div className='forClarification '>
        <h5 className='PTitle PhaseTitle'>Who is this for?</h5>
       < p className=' PDis'>If you live in Ethiopia, we provide free scholarship opportunities for 30 students on every batch.</p>
       <h5 className='PTitle PhaseTitle'>How can I apply?</h5>
       < p className=' PDis'>Please use <a href="https://www.evangadi.com/files/misc/GuidanceOnScholarshipLetterUpdated.pdf">this guidelines</a> to structure your essay. As these spots are very competitive, please follow the instructions well.</p>
       <h5 className='PTitle PhaseTitle'> Application deadline</h5>
       <p p className=' PDis'>Application deadline for the Aug 21st, 2023 batch is on Aug 10th, 2023.</p>
        </div>
    </div>
  )
}

export default ScolarShip