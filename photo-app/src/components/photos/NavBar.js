import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap'
import appPhoto from '../assets/Images/appImage.png'
import {NavLink} from 'react-router-dom'

const NavBar = () => {
    return (
        <>
         <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={NavLink} to='/'>
                        <img
                            src={appPhoto}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />PhotoApp</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} to='/'>Photos</Nav.Link>
                        <Nav.Link as={NavLink} to='/About' >About-Us</Nav.Link>
                        <Nav.Link as={NavLink} to='/Contact'>Contact-Us</Nav.Link>
                    </Nav>
                    <Nav >
                        <Nav.Link >SignUp</Nav.Link>
                        <Nav.Link >LogIn</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}
export default NavBar;