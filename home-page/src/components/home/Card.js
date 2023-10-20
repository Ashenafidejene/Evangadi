import React from 'react'
import Login from './Login'
import SignIn from './SignIn'
import Forget from './Forget'
import { Routes,Route } from 'react-router-dom';
const Card = () => {
  return (
    <div className='card shadow'>
        <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/recovery" element={<Forget/>}/>
        <Route path="/sign_in" element = {<SignIn/>}/>
        <Route path="/*"element={<Login/>}/>
        </Routes>
       
        
    </div>
  )
}

export default Card