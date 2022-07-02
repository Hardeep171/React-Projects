import React from 'react'
import { Row, Col, Container, Card} from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './NewsList.css'

const SingleNews = ({ newsList }) => {
    const id = useParams()
    const idx = Object.values(id)
    // console.log(newsList)

    let singleNews = newsList.filter((news, index) => {
        let newwss;
        if (idx === index) {
            newwss = news;
        }
        // console.log(idx ,'  index=   ', index)
        return newwss;
    }
    )
    console.log(singleNews)
    return (
        <>
            <Container>
                <Row className='scrolll'>
                    {
                        singleNews.filter(element => element !== false).map((singleNews) => (
                            <Col md={{ span: '12', offset: '12' }} className='single-news'>
                                <Card >
                                    <Card.Img
                                        variant="top"
                                        src={
                                            singleNews.urlToImage
                                                ? singleNews.urlToImage
                                                : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDLLj8f-jePfj-l1zzERnHc3E-LZmnRa0aCx2pxXjrezWHA3KAxv891M6A-3fkXYQmvtA&usqp=CAU'
                                        }
                                        style={{ height: '500px',}} />
                                    <Card.Body>
                                        <Card.Title>
                                            { singleNews.title }
                                        </Card.Title>
                                        <Card.Text>
                                            {singleNews.description}
                                        </Card.Text>
                                        
                                    </Card.Body>
                                </Card>
                            </Col>

                        ))
                    }
                </Row>
            </Container >
        </>
    )
}

export default SingleNews;