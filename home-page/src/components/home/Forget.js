import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
const Forget = () => {
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
