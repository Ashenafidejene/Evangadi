import React,{useEffect} from 'react'
import Demo from './Demo'
import Button from 'react-bootstrap/esm/Button'
const FourthSection = () => {
  useEffect(()=>{
    const Button = document.getElementById('first1111');
   
    
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
    <Button className='Forth phase shadow' id="first1111" variant="light">
      <div className=''>
       < Demo title="Phase 3 : React.js,Node.js, Myssql & Express.js"
       description="React is a javaScript library , developed in 2013 by acebook . It is very populay and used on major sites including Facebook, Netflix , Khan Academy and many other .in this phase, we will star t from the fundamentals and go all the way up to building ull application with custom styling . Along the waym you'll also learn about npm , Git ES6 , JSX and more.."/>
    </div>
    </Button>
    <Button className="Button4" variant="primary"> <spam  className='ButtonSpan'>Request to join class</spam></Button>
    </>
  )
}

export default FourthSection