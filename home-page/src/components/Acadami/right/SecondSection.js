import React,{useEffect} from 'react'
import Demo from './Demo'
import Button from 'react-bootstrap/esm/Button';
const SecondSection = () => {
  useEffect(()=>{
    const Button = document.getElementById('first11');
   
    
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
    <Button className='Second phase shadow' id="first11" variant="light">
    <div className=''>
        <Demo title="Phase 1 : Building static websites using HTML , CSS & Bootstrap"
        description="In this phase , you'll learn about the underlying structure of the web HTML. You'll also learn how to apply styling to a website through CSS. To help you build websites faster and easier . you will learn the Bootstrap framework. Alont the way , you'll also learn about sublime text editor and browsers Developer Tools."
        litleDes="..the same discount is applied for this batch too"
        />
    </div>
    </Button>
    <Button className="Button4" variant="primary"> <spam  className='ButtonSpan'>Request to join class</spam></Button>
    </>
  )
}

export default SecondSection