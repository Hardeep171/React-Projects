
import React from 'react'
import './SignUp.css'
import { Form, Container, Col, Nav } from 'react-bootstrap'
import {useState} from 'react'
import { NavLink } from 'react-router-dom'
const SignUp = (props) => {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const set_name = (event) => {
          setName(event.target.value)
    }
    const set_email = (event) => {
          setEmail(event.target.value)
    }
    const set_password = (event) => {
          setPassword(event.target.value)
    }


    return (
        <>
            <Container>
                <div className='outer-div'>
                    <h1 className='display-1'>user SignUp</h1>
                    <div className='form-div'>
                        <Col md={{ span: '4', offset: '4' }} >
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">

                                    <Form.Label className='txt' >Name</Form.Label>
                                    <Form.Control type="text" value={name} onChange={(event) => set_name(event)} placeholder="Enter Name" />

                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">

                                    <Form.Label className='txt'>Email address</Form.Label>
                                    <Form.Control type="email" value={email} onChange={(event) => set_email(event)} placeholder="Enter email" />
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label className='txt'>Password</Form.Label>
                                    <Form.Control type="password" value={password} onChange={(event) => set_password(event)} placeholder="Password" />
                                </Form.Group>

                                <Nav.Link as={NavLink} className='btn btn-dark' to='/Login' style={{color:'white'}} onClick={() =>props.handleInput(name,email,password)}>
                                    Submit
                                </Nav.Link>
                            </Form>
                            <br/>
                            <h4>Have Account ?? <Nav.Link as={NavLink} to='/Login' style={{textDecoration:'underline'}}>LogIn</Nav.Link></h4>
                        </Col>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default SignUp