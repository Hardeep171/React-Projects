
import React from 'react'
import './SignUp.css'
import { Form,  Container, Col, Nav } from 'react-bootstrap'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
const Login = (props) => {

    
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    
    const set_email = (event) => {
          setEmail(event.target.value)
    }
    const set_password = (event) => {
          setPassword(event.target.value)
    }

const submit = () => {
    // console.log('hello login')
   
    let status = false;
    console.log(" props:",props.email, " ", props.password)
        if(props.email === email && props.password === password) 
        status = true

        // console.log("email : ",email, " "," pass: ",password)
        // console.log("status: ",status)
    
    props.check(status)
}
    return (
        <>
            <Container>
                <div className='outer-div'>
                    <h1 className='display-1'>user Login</h1>
                    <div className='form-div'>
                        <Col md={{ span: '4', offset: '4' }} >
                        <h4>Don't Have Account ?? <Nav.Link as={NavLink} to='/SignUp' style={{textDecoration:'underline'}}>SignUp</Nav.Link></h4>
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">

                                    <Form.Label className='txt'>Email address</Form.Label>
                                    <Form.Control type="email" value={email} onChange={(event) => set_email(event)} placeholder="Enter email" />
                                    <Form.Text className="text-muted">
                                        
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label className='txt'>Password</Form.Label>
                                    <Form.Control type="password" value={password} onChange={(event) => set_password(event)} placeholder="Password" />
                                </Form.Group>

                                <Nav.Link as={NavLink} to='/' className='btn btn-dark' style={{color:'white'}} onClick={() => submit()}>
                                    Submit
                                </Nav.Link>
                            </Form>
                        </Col>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Login