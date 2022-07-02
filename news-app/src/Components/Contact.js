import React from 'react';
import { Container, } from 'react-bootstrap'


const Contact = () => {
    const containerr = {
        textAlign: 'center',
        marginTop:'50px',
        
    }
    return (
        <>
            <Container>
                <div  style={containerr}>
                    <h1 style={{textDecoration:'underline'} } className='display-1'>
                        Contact-Us
                    </h1>
                    <div style={{margin:'30px'}}>
                    <h2 className='display-1'>Phone Number: 123456</h2>
                    <h2 className='display-1'>Gmail: photo@gmail.com</h2>
                    </div>
                </div>
            </Container>
        </>
    )
}
export default Contact