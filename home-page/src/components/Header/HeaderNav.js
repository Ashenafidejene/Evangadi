import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './img/evangadi-logo-home.png'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import '../../css/bootstrap.css'
import './nav.css'
const HeaderNav = () => {
    return (
        <header>
        <Navbar expand="lg" className="bg-body fixed-top white shadow">
          <Container>
            <Navbar.Brand as="a" href="#home">
              <img src={logo} alt="Evangadi Logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto end"> {/* Apply ml-auto class */}
                <Nav.Link className='Nav_title'  href="/"><Link to='/' className='Nav_title'>Home</Link></Nav.Link>
                <Nav.Link span className='Nav_title'  href="/how_it_works"><span className='Nav_title'>How It Works</span></Nav.Link>
                <Nav.Link href="/sign_In">
                  <Button className="Button1" variant="primary"> <spam  className='ButtonSpan'>SIGN IN</spam></Button>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        </header>
      );
  
}

export default HeaderNav
