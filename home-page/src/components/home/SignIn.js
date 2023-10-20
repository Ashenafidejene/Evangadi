import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Link } from 'react-router-dom';
const SignIn = () => {
  return (
    <div className='signIn page cardPage'>
        <h6>Join the network</h6>
        <p>Already have an account?<Link className='a'to='/'> Sign in</Link></p>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Enter email" />
      
      </Form.Group>
      <InputGroup className="mb-3">
  <Form.Control
    placeholder="First Name"
    aria-label="First Name"
    aria-describedby="basic-addon1"
    style={{ marginRight: '10px' }} // Add inline style for right margin
  />
  <Form.Control
    placeholder="Last Name"
    aria-label="Last Name"
    aria-describedby="basic-addon1"
  />
</InputGroup>
      <Form.Group className="mb-3" controlId="formBasicPassword">
       
        <Form.Control type="password" placeholder="Password" />
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
      </Form.Group>
      <Button className="Button2" variant="primary" type="submit">
        Agree and Join
      </Button>
    </Form>
    <p ><Link className='a' to='/'>Already have an account?</Link></p>
    </div>
  )
}

export default SignIn
