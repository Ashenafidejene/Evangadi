import React from 'react'
import Demo from './Demo'
import Button from 'react-bootstrap/esm/Button';
const SecondSection = () => {
  return (

    <>
    <div className='Second phase shadow'>
        <Demo title="Phase 1 : Building static websites using HTML , CSS & Bootstrap"
        description="In this phase , you'll learn about the underlying structure of the web HTML. You'll also learn how to apply styling to a website through CSS. To help you build websites faster and easier . you will learn the Bootstrap framework. Alont the way , you'll also learn about sublime text editor and browsers Developer Tools."
        litleDes="..the same discount is applied for this batch too"
        />
    </div>
    <Button className="Button4" variant="primary"> <spam  className='ButtonSpan'>Request to join class</spam></Button>
    </>
  )
}

export default SecondSection