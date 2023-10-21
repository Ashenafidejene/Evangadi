import React from 'react'

const Demo = (props) => {
  return (
    <div className='container1'>
     <h5 className='PTitle PhaseTitle'>{props.title}</h5>
     <p className=' PDis' >{props.description}</p>
     <h5 className='PTitle '>
        Discounted price
     </h5>
     <p className=' PDis PMore'>{props.litleDes}</p>
     <h5 className='PTitle' >$600 <del className=' PDis'>/ $800</del></h5>
     <h5 className='PTitle'>
       Class dates:
    </h5>
    <p className=' PDis PMore ' > Mon & Tue (7:00pm - 9:00pm EST-lecture sessions)</p>
    </div>
  )
}

export default Demo