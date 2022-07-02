import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap'
import appPhoto from '../assets/Images/social-icon.jpg'


const NavBar = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    
                            <Navbar.Brand href="#home">
                                <img
                                    src={appPhoto}
                                    width="30"
                                    height="30"
                                    className="d-inline-block align-top p-1"
                                    alt="React Bootstrap logo"
                                />Social App</Navbar.Brand>
                            <Nav className="me-auto">
                                <Nav.Link >Home</Nav.Link>
                                
                                <Nav.Link >About-Us</Nav.Link>
                                <Nav.Link >Contact-Us</Nav.Link>
                            </Nav>
                            <Nav >
                                <Nav.Link ></Nav.Link>
                                <Nav.Link ></Nav.Link>

                            </Nav>
                        </Container>
                    </Navbar>
                </>
                )
}
                export default NavBar;