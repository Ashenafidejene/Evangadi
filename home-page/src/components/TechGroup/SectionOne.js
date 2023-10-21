import React from 'react'
import Sample from './Sample'

const SectionOne = () => {
  return (
    <div className='TechSection'>
      <Sample image='https://www.evangadi.com/themes/humans//assets/images/misc/icons/sharepoint.png'  title="SharePoint" desc="Organizations use SharePoint to create websites. You can use it as a secure place to store, organize, share, and access information from any device." />
      <Sample image='https://www.evangadi.com/themes/humans//assets/images/misc/icons/csharp.png' title="C#" desc="It is a general-purpose language designed for developing apps on the Microsoft platform and requires the .NET framework on Windows to work." />
      <Sample Image='https://www.evangadi.com/themes/humans//assets/images/misc/icons/pyton.png' title="Python" desc="Python is an object-oriented, high-level programming language with integrated dynamic semantics primarily for web and app development." />
    </div>
  )
}

export default SectionOne