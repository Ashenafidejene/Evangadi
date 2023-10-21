import React from 'react'
import Steps from './left/Steps'
import All from './right/All'
import '../../css/bootstrap.css'
import './acadami.css'
const Acadami = () => {
  return (
    <>
    <h2 className='titleName'> Evangadi Academy</h2>
    <div className='Acadami'>
    <All/> 
    <Steps/>
    </div>
    </>
  )
}

export default Acadami;