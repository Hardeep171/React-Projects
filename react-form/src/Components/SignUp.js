import React from 'react';
import './SignUp.css'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
const SignUp = (props) => {

    const [userInput, setUserInput] = useState({})
    const [usersData, setUsersData] = useState([]);

    const handleInput = (e) => {
        const { name, value } = e.target;
        setUserInput({ ...userInput, [name]: value })
    }
    const [formErrors, setFormErrors] = useState({})
    const [isSubmit,setIsSubmit] = useState(false)

    const submit = (e) => {
        e.preventDefault();
        setFormErrors(isValidate(userInput));
        if(Object.keys(formErrors).length === 0){
            setIsSubmit(true);
            setUsersData([...usersData, userInput])
        props.handleUserData(userInput)
        setUserInput({
            userName: '',
            email: '',
            password: ''
        })
        }
    }
    useEffect(() => {
    //     console.log(formErrors)
    //    if(Object.keys(formErrors).length === 0 && isSubmit){
    //     console.log(userInput)
    //    }
    }, [formErrors])
    const isValidate = (values) => {
        const errors = {}
        
        //const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        const {userName,email,password} = values;
        if (!userName) {
            errors.userName = 'Please enter  name'
        }

        if (!email) {
            errors.email = 'Please enter email address'
        }
        else if(!email.includes('@') || email.startsWith('@') ||
        !email.includes('.') || email.slice(email.lastIndexOf('.')).length
        < 3){
            errors.email = 'This is not a valid email'
        }

        if (!password) {
            errors.password = 'Please enter a password'
        }
       else if (password.length < 4 ) {
            errors.password = 'password must be more than 4 characters'
        }else if (password.length > 10) {
            errors.password = 'password cannot not exceed more than 10 characters'
        }
        return errors
    }

    return (
        <>
            <Container>
                <div className='form-div'>
                    <Row>
                        <Col md={{ span: '5', offset: '3' }}>
                            {Object.keys(formErrors).length === 0 && isSubmit?'':<h3 className='display-4 text'>Already Have Account! <Link className='btn  btnbtn' to='/Login'>LogIn</Link></h3>}
                            <Form>
                                <Form.Group className="mb-3 " controlId="formBasicName">
                                    <Form.Label className='form-text'>Name:</Form.Label>
                                    <Form.Control type="text" placeholder="Enter name" autoComplete='off' name="userName" value={userInput.userName || ''} onChange={(e) => handleInput(e)} />
                                    <p className='wrong'>{formErrors.userName}</p>
                                </Form.Group>
                                <Form.Group className="mb-3 " controlId="formBasicEmail">
                                    <Form.Label className='form-text'>Email address:</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" autoComplete='off' name="email" value={userInput.email || ''} onChange={(e) => handleInput(e)} />
                                    <p className='wrong'>{formErrors.email}</p>
                                </Form.Group>
                                <Form.Group className="mb-3 " controlId="formBasicPassword">
                                    <Form.Label className='form-text'>Password:</Form.Label>
                                    <Form.Control type="password" placeholder="Password" autoComplete='off' name="password" value={userInput.password || ''} onChange={(e) => handleInput(e)} />
                                    <p className='wrong'>{formErrors.password}</p>
                                </Form.Group>
                                <Button variant="dark" type="submit" onClick={(e) => submit(e)}>
                                    SignUp
                                </Button>
                            </Form>
                            { Object.keys(formErrors).length === 0 && isSubmit? <h3 className='display-4 text'>Signed Up successfully! <Link className='btn  btnbtn' to='/Login'>LogIn</Link></h3>:'' }
                        </Col>
                    </Row>
                 
                </div>
            </Container>
        </>
    )
}

export default SignUp;