import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Login from './Login';
import SignIn from './SignIn';
import Forget from './Forget';
import './card.css'; // Import the CSS file with animation classes

const Card = () => {
  const location = useLocation();

  return (
    <div className="card shadow">
      <div className="card-content">
        <TransitionGroup>
          <CSSTransition
            key={location.key}
            classNames="fade"
            timeout={200}
            appear
          >
            <Routes location={location}>
              <Route path="/" element={<Login />} />
              <Route path="/recovery" element={<Forget />} />
              <Route path="/sign_in" element={<SignIn />} />
              <Route path="/*" element={<Login />} />
            </Routes>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </div>
  );
};

export default Card;