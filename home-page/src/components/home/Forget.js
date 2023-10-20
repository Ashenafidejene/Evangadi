import React, { useEffect } from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
const Forget = () => {
  useEffect(()=>{
    const passwordInput = document.getElementById('formBasicEmail');
    let previousPasswordStyles = {};
    const handlePasswordFocus = () => {
        previousPasswordStyles = {
        border: passwordInput.style.border,
        borderBottom: passwordInput.style.borderBottom
      };

      passwordInput.style.border = '0.5px solid black';
      passwordInput.style.boxShadow='none';
      passwordInput.style.borderBottom = '3px solid #fe8303';
    };
    const handlePasswordBlur = () => {
      passwordInput.style.border = previousPasswordStyles.border;
      passwordInput.style.borderBottom = previousPasswordStyles.borderBottom;
    };
    if(passwordInput) {
      passwordInput.addEventListener('focus', handlePasswordFocus);
      passwordInput.addEventListener('blur', handlePasswordBlur);
    }
    return () => {
      if ( passwordInput) {
        passwordInput.removeEventListener('focus', handlePasswordFocus);
        passwordInput.removeEventListener('blur', handlePasswordBlur);
      }
    }
  })
  return (
    <div className="page cardPage">
        <h5 className="c">Reset your password</h5>
        <p className="c">Fill in your e-mail address below and we will send you an email with further instructions.</p>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Button className="Button2" variant="primary" type="submit">
          Reset your password
        </Button>
      </Form>
      <p className="c"><Link className='a' to='/'>Already have an account?</Link></p>
      <p className="c"><Link className='a' to='/sign_in' >Don’t have an account?</Link></p>
    </div>
  );
};

export default Forget;
