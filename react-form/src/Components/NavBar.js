import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
const NavBar = (props) => {
    // console.log('nav un=',props.userName)
    const logout = () => {
        props.userName = false;
    }
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} to='/' >Home</Nav.Link>

                    </Nav>
                    <Nav>
                        {props.userBoolVal ? <>
                        
                            <Nav.Link to=''>{props.userName}</Nav.Link>
                            <Nav.Link as={NavLink} to='/SignUp' onClick={() => logout()}>Logout</Nav.Link>
                        </>
                            : <><Nav.Link as={NavLink} to='/SignUp' >SignUp</Nav.Link>
                                <Nav.Link as={NavLink} to='/Login' >Login</Nav.Link>
                            </>}
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar;