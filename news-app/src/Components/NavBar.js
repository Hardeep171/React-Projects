
import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
const NavBar = (props) => {
    // console.log(props.check)

    const logout = () => {
        props.handleInput(false)
        props.check = false
    }
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={NavLink} to='/'>News App</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={NavLink} to='/'>News</Nav.Link>
                            <Nav.Link as={NavLink} to='/About'>About-Us</Nav.Link>
                            <Nav.Link as={NavLink} to='/Contact'>Contact-Us</Nav.Link>
                        </Nav>
                        <Nav>
                            {
                                (props.check)
                                    ? <><Nav.Link as={NavLink} to='' >{props.userName}</Nav.Link>
                                        <Nav.Link as={NavLink} to='/signUp' onClick={() => logout()}>Logout</Nav.Link></>
                                    : <><Nav.Link as={NavLink} to='/SignUp' >SignUp</Nav.Link>
                                        <Nav.Link as={NavLink} to='/Login'>Login</Nav.Link></>

                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar;