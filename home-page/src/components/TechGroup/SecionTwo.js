import React from 'react'
import Sample from './Sample'

const SecionTwo = () => {
  return (
    <div className='TechSection'>
        <Sample image='https://www.evangadi.com/themes/humans//assets/images/misc/icons/salesforce.png' title="SalesForce" desc="Salesforce is a cloud computing service as a software (SaaS) company that specializes in customer relationship management (CRM)." />
        <Sample  image='https://www.evangadi.com/themes/humans//assets/images/misc/icons/js.png' title="JavaScript" desc="JavaScript is a scripting or programming language that allows you to implement complex things on web pages" />
        <Sample image='https://www.evangadi.com/themes/humans//assets/images/misc/icons/dotnet.png'
title=".Net" desc=".NET is a free, cross-platform, open source developer platform for building many different types of applications." />
    </div>
  )
}

export default SecionTwo