import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './socialApp.css';
import { Row, Col, Card, Container, Spinner, Button, Badge, ListGroup } from 'react-bootstrap';
import { FaRegComments, } from 'react-icons/fa'
import { AiOutlineLike, AiFillLike } from 'react-icons/ai'
import dummyText from '../util/dummyTextPost.json'
import dummTime from '../util/dummyTime.json'
import dummyChatList from '../util/dummyChatList.json'
// import ActiveMembersList from './ActiveMembersList';
// import ChatList from './ChatList';

const PostApp = () => {

    const [post, setPost] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('https://picsum.photos/v2/list')
                let resPosts = [...res.data]
                let randomLikesAndComments = resPosts.map(post => {
                    let like = Math.ceil(Math.random() * 1000)
                    let comment = Math.ceil(Math.random() * 50)
                    let postTime = dummTime[Math.ceil(Math.random() * 10)]
                    let postText = dummyText[Math.ceil(Math.random() * 5)]
                    let dummyChat = dummyChatList[Math.ceil(Math.random() * 10)]
                    let isLikedByCurrUser = false
                    return {
                        ...post,
                        like,
                        isLikedByCurrUser,
                        comment,
                        postText,
                        postTime,
                        dummyChat
                    }
                })
                // console.log(randomLikesAndComments)
                setPost(randomLikesAndComments)
            }
            catch (err) {
                console.log(err)
            }
        }
        fetchData()
    }, [])
    let incrementLike = (element) => {

        let updatedPost = post.map(postt => {
            if (postt.id === element) {
                if (postt.isLikedByCurrUser) {
                    postt.like -= 1
                    postt.isLikedByCurrUser = false
                }
                else {
                    postt.like += 1
                    postt.isLikedByCurrUser = true
                }

            }
            return postt
        })
        setPost(updatedPost)
    }


    const incrementComment = (element) => {
        let updatedPost = post.map(postt => {
            if (postt.id === element)
                postt.comment += 1
            return postt
        })
        setPost(updatedPost)
    }
    return (
        <>
            <Container className='post-container'>
                <Row className='main-row'>

                    <Col md={3}>
                        <ListGroup as="ol" numbered>
                            {post.filter(element => (element.id % 3) !== 0).map((element) => (
                                <ListGroup.Item
                                    as="li"
                                    className="d-flex justify-content-between align-items-start"
                                    key={element.id}
                                >
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">{element.author}</div>

                                    </div>
                                    <Badge bg="success" pill>
                                        Active
                                    </Badge>
                                </ListGroup.Item>
                            ))}

                        </ListGroup>
                    </Col>


                        <Col md={6}>
                            <Row>
                            <div className='over'>
                                {post.length ? (
                                    post.map(element => (
                                        <Col lg={12} key={element.id}>
                                            
                                            
                                            <Card style={{ marginBottom: '20px' }}>
                                            
                                                <Card.Header className='card-header-div'>
                                                    <div className='mb0'>
                                                        <span>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="25" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                                                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                                                <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                                                            </svg>
                                                        </span>
                                                        {' '}
                                                        <span className='text'>
                                                            {element.author}
                                                        </span>
                                                    </div>
                                                    <p className='mb0'>{element.postTime}</p>
                                                </Card.Header>
                                                <Card.Img variant="top" width='100px' src={element.download_url} className='photo-img' />
                                                <Card.Body>
                                                    {element.postText}
                                                    <Row>
                                                        <Col md={{ span: 6, offset: 6 }} className='action-btn-outer'>
                                                            <Button variant='light' onClick={() => incrementLike(element.id)}>{element.isLikedByCurrUser ? (<AiFillLike />) : (<AiOutlineLike />)}<Badge pill bg="dark" text="light">
                                                                {element.like}
                                                            </Badge></Button>{''}
                                                            <Button variant='light' onClick={() => incrementComment(element.id)}><FaRegComments /><Badge pill bg="dark" text="light">
                                                                {element.comment}
                                                            </Badge></Button>{''}
                                                        </Col>
                                                    </Row>
                                                </Card.Body>
                                            </Card>
                                        
                                            
                                        </Col>
                                    ))
                                ) :
                                    <div className='spinnerr'>
                                        <Spinner animation="border" role="status"></Spinner>
                                    </div>
                                }
                                </div>
                            </Row>
                        </Col>
                    
                    <Col md={3}>
                        <ListGroup as="ol" numbered>

                            {post.filter(element => (element.id % 2) !== 0).map((element) => (
                                <ListGroup.Item
                                    as="li"
                                    className="d-flex justify-content-between align-items-start"
                                    key={element.id}
                                >
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">{element.author}</div>
                                        {element.dummyChat.message}
                                    </div>
                                    <Badge bg="info" pill>
                                        {element.dummyChat.count}
                                    </Badge>
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    </Col>

                </Row>
            </Container>
        </>
    )
}
export default PostApp;