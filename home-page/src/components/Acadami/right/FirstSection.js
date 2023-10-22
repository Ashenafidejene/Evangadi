import React from 'react'
import Button from 'react-bootstrap/esm/Button'
const FirstSection = () => {
  return (
<>

<Button className='firstSection shadow phase' variant="light"><div >
         <h4 className="white h4">
        Next class will start on Aug 21 , 2003
    </h4 >
       <div className='container1 '>
   
    <h5 className='PTitle'>
        Name of the course:
    </h5>
    <p className=' PDis'>Fullstack Web Development (MERN Stack) </p>
    <h5 className='PTitle'>
        Discussion on the lecture videos:
    </h5>
    <p className='white PDis'>Mon & Tue7:00pm-9:00pm (DC Time) </p>
    <h5 className='PTitle'>
        Practice hours(Exercises & Checklist):
    </h5>
    <p className=' PDis'>Group1: Thu & Fri <br/> 10:00am - 12:00pm EST</p>
    <p className=' PDis'>Group 2: Thu & Fri <br/> 1:00pm - 3:00pm EST</p>
    <p className=' PDis'>Group 3: Thu & Fri <br/> 7:00pm - 9:00pm EST</p>
    <p className=' PDis'>Group 4: Thu & Fri <br/> 9:00pm - 11:00pm EST</p>
    <h5 className='PTitle'>
        Price per phase
    </h5>
     <h5 className='PTitle' >$600 <del className=' PDis'>/ $800</del></h5>
     <h5 className='PTitle'>
       Total price
    </h5>
    <h5 className='PTitle' >$1800 <del className=' PDis'>/ $2400</del></h5>
    </div>
   
    </div></Button>
     <Button className="Button4" variant="primary"> <spam  className='ButtonSpan'>Request to join class</spam></Button>
     </>
  )
}

export default FirstSection