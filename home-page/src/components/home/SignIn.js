import React, { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Link } from 'react-router-dom';

const SignIn = () => {
  useEffect(() => {
    const emailInput = document.getElementById('formBasicEmail');
    const firstNameInput = document.getElementById('formBasicFirstName');
    const lastNameInput = document.getElementById('formBasicLastName');
    const passwordInput = document.getElementById('formBasicPassword');
  
    const handleFocus = (inputElement) => {
      inputElement.style.border = '0.5px solid black';
      inputElement.style.boxShadow = 'none';
      inputElement.style.borderBottom = '3px solid #fe8303';
    };
  
    const handleBlur = (inputElement, previousStyles) => {
      inputElement.style.border = previousStyles.border;
      inputElement.style.borderBottom = previousStyles.borderBottom;
    };
  
    const addFocusBlurStyles = (inputElement) => {
      let previousStyles = {
        border: inputElement.style.border,
        borderBottom: inputElement.style.borderBottom
      };
  
      const handleInputFocus = () => {
        handleFocus(inputElement);
      };
  
      const handleInputBlur = () => {
        handleBlur(inputElement, previousStyles);
      };
  
      inputElement.addEventListener('focus', handleInputFocus);
      inputElement.addEventListener('blur', handleInputBlur);
  
      return () => {
        inputElement.removeEventListener('focus', handleInputFocus);
        inputElement.removeEventListener('blur', handleInputBlur);
      };
    };
  
    if (emailInput) {
      addFocusBlurStyles(emailInput);
    }
  
    if (firstNameInput) {
      addFocusBlurStyles(firstNameInput);
    }
  
    if (lastNameInput) {
      addFocusBlurStyles(lastNameInput);
    }
  
    if (passwordInput) {
      addFocusBlurStyles(passwordInput);
    }
  
    return () => {
      if (emailInput) {
        emailInput.removeEventListener('focus', handleFocus);
        emailInput.removeEventListener('blur', handleBlur);
      }
  
      if (firstNameInput) {
        firstNameInput.removeEventListener('focus', handleFocus);
        firstNameInput.removeEventListener('blur', handleBlur);
      }
  
      if (lastNameInput) {
        lastNameInput.removeEventListener('focus', handleFocus);
        lastNameInput.removeEventListener('blur', handleBlur);
      }
  
      if (passwordInput) {
        passwordInput.removeEventListener('focus', handleFocus);
        passwordInput.removeEventListener('blur', handleBlur);
      }
    };
  }, []);
  
  return (
    <div className='signIn page cardPage'>
      <h6>Join the network</h6>
      <p>Already have an account?<Link className='a' to='/'> Sign in</Link></p>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="First Name"
            aria-label="First Name"
            aria-describedby="basic-addon1"
            id="formBasicFirstName"
            style={{ marginRight: '10px' }} // Add inline style for right margin
          />
          <Form.Control
            placeholder="Last Name"
            aria-label="Last Name"
            aria-describedby="basic-addon1"
            id="formBasicLastName"
          />
        </InputGroup>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button className="Button2" variant="primary" type="submit">
          Agree and Join
        </Button>
      </Form>
      <p>
        <Link className='a' to='/'>Already have an account?</Link>
      </p>
    </div>
  );
};

export default SignIn;