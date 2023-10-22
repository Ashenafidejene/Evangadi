import React,{useEffect} from 'react'
import Demo from './Demo'
import Button from 'react-bootstrap/esm/Button';
const ThirdSection = () => {
  useEffect(()=>{
    const Button = document.getElementById('first111');
   
    
    let previousButtonStyles={};
    const handleButtonFocus = ()=>{
        previousButtonStyles={
         backgroundColor : Button.style.backgroundColor,
        
         //color:text.style.color,
         width:Button.style.width
        };
        Button.style.backgroundColor="#fe8303";
       
       // text.style.color = "white"
        Button.style.width="95%";
    }
    const handleButtonBlur = ()=>{
        Button.style.backgroundColor= previousButtonStyles.backgroundColor;
       
        Button.style.width=previousButtonStyles.width;
       // text.style.color=previousButtonStyles.color
    }
    if(Button){
        Button.addEventListener('focus',handleButtonFocus);
        Button.addEventListener('blur',handleButtonBlur);
    }
    return()=>{
        Button.removeEventListener('focus',handleButtonFocus);
        Button.removeEventListener('blur',handleButtonBlur);
    }
},[])
  return (
    <>
        <Button className='phase third shadow' id="first111" variant="light">
    <div className=' '>
        <Demo title="Phase 2: Learn coding with javaScript" description="JavaScript os among the most powerful and flexible programming languages of the web . it powers the dynamic behavior on most websites.In this phase, you will learn programming fundamentals using the latest JavaScript syntax. The concepts covered in these lesson lay the foundation for using javaScrips both  for frontEnd and back end development "
        litleDes="..the same discount is applied for this batch too"
        />
    </div>
    </Button>
    <Button className="Button4" variant="primary"> <spam  className='ButtonSpan'>Request to join class</spam></Button>
    </>
  )
}

export default ThirdSection