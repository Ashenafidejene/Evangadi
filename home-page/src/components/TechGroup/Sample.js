import React from 'react'

const Sample = (props) => {
  return (
    <div className='Sample1'>
       < img className='sampleImage' src={props.image} />
       <h5 className='PTitle PhaseTitle'>{props.title}</h5>
       < p className=' PDis'>{props.desc}</p>
    </div>
  )
}

export default Sample