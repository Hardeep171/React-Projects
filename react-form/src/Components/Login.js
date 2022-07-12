import React from 'react';
import './SignUp.css'

import { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const Login = (props) => {

    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [loginDenied, setLoginDenied] = useState()
    const handleEmail = (e) => {
        setUserEmail(e.target.value)
        setLoginDenied(false)
    }

    const handlePassword = (e) => {
        setUserPassword(e.target.value)
        setLoginDenied(false)
    }


    const logIn = () => {
        let val = props.Data.some((element) => element.email === userEmail && element.password === userPassword)
        let username = props.Data.filter((element) => element.email === userEmail && element.password === userPassword)
        if (val) {
            setLoginDenied(false)
            props.handleLogin(val)
            let n = username[0]
            n = String(n.userName)
            
            props.handleUserName(n)
        }
        else {
            setLoginDenied(true)
        }
    }
   
    return (
        <>
            <Container>
                <div className='form-div'>
                    <Row>
                        <Col md={{ span: '5', offset: '4' }}>
                            <h3 className='display-4 text'>Don't Have Account! <Link className='btn  btnbtn' to='/SignUp'>SignUp</Link></h3>
                            <Form>

                                <Form.Group className="mb-3 " controlId="formBasicEmail">
                                    <Form.Label className='form-text'>Email address:</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" autoComplete='off' value={userEmail} onChange={(e) => handleEmail(e)} />

                                </Form.Group>

                                <Form.Group className="mb-3 " controlId="formBasicPassword">
                                    <Form.Label className='form-text'>Password:</Form.Label>
                                    <Form.Control type="password" placeholder="Password" value={userPassword} onChange={(e) => handlePassword(e)} />
                                </Form.Group>
                                {!loginDenied ? <Link to='/'><Button variant="dark" onClick={logIn} >
                                    LogIn
                                </Button></Link> : <Button variant="dark" onClick={logIn} >
                                    LogIn
                                </Button>}

                                {loginDenied && <p className='wrong'>email and password incorrect login access denied <br />
                                    Try Again!
                                </p>}
                            </Form>
                        </Col>
                    </Row>
                </div>
            </Container>
        </>
    )
}

export default Login;