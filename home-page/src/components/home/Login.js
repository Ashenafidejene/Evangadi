import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
const Login = () => {
  return (
    <div className='login page cardPage'>
        <h6>Login to your account</h6>
        <p>Don't have an account?<Link className='a' to="/sign_in"> Create a new account</Link></p>
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <p className='b'><Link className='a' to="/recovery">Forgot password?</Link></p>
        <Button className="Button2" variant="primary" type="submit">
          Login
        </Button>
        </Form>
    </div>
  )
}

export default Login
