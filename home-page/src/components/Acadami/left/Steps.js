import React,{useEffect,useState} from 'react';
import Button from 'react-bootstrap/esm/Button';
const Steps = () => {
    const [datas,setData]=useState([]);
    useEffect(()=>{
        fetch(
            "/evangadi.json"
        ).then((response)=>response.json())
        .then((data)=>{
            setData(data.evangadi);
        })
        .catch((error)=>{
          console.error("Error fetching data:", error)
        })
    },[]);
  return (
    <div className='steps'>
        <h2><center>Before you join this course</center></h2>
       < div> 
       {datas?.map((singleData,i)=>{
        const THeader = singleData.header3;
        const brifedescription=singleData.description;
        const vidLink = singleData.url;
        const image = singleData.image;
        const vidTitle = singleData.videoTitle;
        const vidDescription= singleData.videoDes;
        return(
         <div>
          <h5 className='PTitle PhaseTitle' >{THeader}</h5>
          <p className=' PDiss' > {brifedescription}</p>
          <div className='contain'>
          <a href={vidLink}target="_blank" rel="noopener noreferrer"><img className='forSize' src={image}/></a>
          <a className=' PDiss' href={vidLink} target="_blank" rel="noopener noreferrer"><p className=' PDis' >{vidTitle}</p></a>
          <p className=' PDis amharic' >{vidDescription}</p>
          </div>
          </div>
        );
       })
       }
          
         </div>
         <h5 className='PTitle PhaseTitle'>Step 5: Contact us to register</h5>
         <p className=' PDis'>If you understand what we are trying to teach and you decide to take the course, you can contact us at 202-386-2702 for further questions. We will also finalize the registration once we address all of your questions. You can also request to join the class below. We will contact you to finalize the registration.</p>
         <Button className="Button4" variant="primary"> <spam  className='ButtonSpan'>Request to join class</spam></Button>
</div>
  )
}

export default Steps