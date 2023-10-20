import React, { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

const Login = () => {
  useEffect(() => {
    const emailInput = document.getElementById('formBasicEmail');
    const passwordInput = document.getElementById('formBasicPassword');
    let previousEmailStyles = {};
    let previousPasswordStyles = {};

    const handleEmailFocus = () => {
      previousEmailStyles = {
        border: emailInput.style.border,
        borderBottom: emailInput.style.borderBottom
      };

      emailInput.style.border = '0.5px solid black';
      emailInput.style.boxShadow='none'
      emailInput.style.borderBottom = '3px solid #fe8303';
    };

    const handleEmailBlur = () => {
      emailInput.style.border = previousEmailStyles.border;
      emailInput.style.borderBottom = previousEmailStyles.borderBottom;
    };

    const handlePasswordFocus = () => {
      previousPasswordStyles = {
        border: passwordInput.style.border,
        borderBottom: passwordInput.style.borderBottom
      };

      passwordInput.style.border = '0.5px solid black';
      passwordInput.style.boxShadow='none'
      passwordInput.style.borderBottom = '3px solid #fe8303';
    };

    const handlePasswordBlur = () => {
      passwordInput.style.border = previousPasswordStyles.border;
      passwordInput.style.borderBottom = previousPasswordStyles.borderBottom;
    };

    if (emailInput && passwordInput) {
      emailInput.addEventListener('focus', handleEmailFocus);
      emailInput.addEventListener('blur', handleEmailBlur);
      passwordInput.addEventListener('focus', handlePasswordFocus);
      passwordInput.addEventListener('blur', handlePasswordBlur);
    }

    return () => {
      if (emailInput && passwordInput) {
        emailInput.removeEventListener('focus', handleEmailFocus);
        emailInput.removeEventListener('blur', handleEmailBlur);
        passwordInput.removeEventListener('focus', handlePasswordFocus);
        passwordInput.removeEventListener('blur', handlePasswordBlur);
      }
    };
  }, []);

  return (
    <div className="login page cardPage">
      <CSSTransition
        in={true}
        appear={true}
        timeout={300}
        classNames="login"
        unmountOnExit
      >
        <div className="login-content">
          <h6>Login to your account</h6>
          <p>
            Don't have an account?
            <Link className="a" to="/sign_in">
              Create a new account
            </Link>
          </p>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <p className="b">
              <Link className="a" to="/recovery">
                Forgot password?
              </Link>
            </p>
            <Button className="Button2" variant="primary" type="submit">
              Login
            </Button>
          </Form>
        </div>
      </CSSTransition>
    </div>
  );
};

export default Login;