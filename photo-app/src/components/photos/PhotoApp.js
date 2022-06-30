import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './photoApp.css'
import {Row,Col,Card,Container,Spinner} from 'react-bootstrap';
import {Link} from 'react-router-dom'


const PhotoApp = () => {

    const [ photo, setPhoto ] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('https://picsum.photos/v2/list')
                setPhoto(res.data)
            }
            catch (err) {
                console.log(err)
            }
        }
        fetchData()
    }, [])
   
    return (
        <>
       
            <Container>
                <Row>   
                        {   
                        photo.length ?(
                            photo.map(element => (
                                <Col md={3} className='single-photo' key={element.id}>
                                    <Card>
                                        <Card.Header>{element.author}</Card.Header>
                                        <Card.Img variant="top"  src={element.download_url} className='photo-img' />
                                        <Card.Body>
                                            <div className='btns'>
                                            <a className='btn btn-dark' href={element.url}>View Source</a>
                                            <Link className='btn btn-dark' to={`/photo/${element.id}`} > view Enlarged</Link>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))
                        ):
                        <div className='spinnerr'>
                        <Spinner animation="border" role="status"></Spinner>
                        </div>
                        }   
                </Row>
            </Container>
        </>
    )
}
export default PhotoApp;


// https://picsum.photos/v2/list