import React from 'react'
import { Col, Container, Row, Card,  } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NewsList.css'


const NewsList = ({newsList}) => {
    
    return (
        <>
            <Container>
                <Row>
                    {
                      newsList &&  newsList.map((singleNews, index) => (
                            <Col md={4} key={index} className='single-news'>
                                <Card >
                                    <Card.Img variant="top" src={singleNews.urlToImage ? singleNews.urlToImage : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDLLj8f-jePfj-l1zzERnHc3E-LZmnRa0aCx2pxXjrezWHA3KAxv891M6A-3fkXYQmvtA&usqp=CAU'} />
                                    <Card.Body className='cardBody'>
                                        <Card.Title>{
                                            singleNews.title && singleNews.title.length > 80
                                                ? `${singleNews.title.slice(0, 80)}...`
                                                : `${singleNews.title}`
                                        }</Card.Title>
                                        <Card.Text>
                                            {
                                                singleNews.description && singleNews.description.length > 150
                                                    ? `${singleNews.description.slice(0, 120)}...`
                                                    : `${singleNews.description}`
                                            }
                                        </Card.Text>
                                        <Link className='btn btn-dark singleButton' to={`/news/${index}`}>read more</Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </>
    )
}

export default NewsList;

// const news = [
    //     {
    //         author: "Shantonil Nag",
    //         content: "With the increasing number of electric scooters in the Indian market, it seems like Honda is also ready to join the bandwagon. After Honda was spotted testing a new electric scooter – Benly e last ye… [+2266 chars]",
    //         description: "With the increasing number of electric scooters in the Indian market, it seems like Honda is also ready to join the bandwagon. After Honda was spotted testing a new electric scooter – Benly e last year with a test registration number, here is the first instan…",
    //         publishedAt: "2022-07-01T08:26:15Z",
    //         source: {id: null, name: 'CarToq.com'},
    //         id: null,
    //         name: "CarToq.com",
    //         title: "Honda Benly electric scooter spied in Bangalore - CarToq.com",
    //         url: "https://www.cartoq.com/honda-benly-electric-scooter-spied-in-bangalore/",
    //         urlToImage: "https://www.cartoq.com/wp-content/uploads/2022/07/honda-benly-e-scooter-featured.jpeg",
    //     },
    //     {
    //         author: "Rakesh Patil",
    //         content: "July 01, 2022 / 01:52 PM IST\r\nGlobus Spirits to provide various services to distillery assets of Tilaknagar Industries\r\nGlobus Spirits will be providing various services starting from engineering to … [+633 chars]",
    //         description: "Stock Market LIVE Updates: Realty and FMCG indices up 1 percent each, while oil &amp; gas index down 3 percent.",
    //         publishedAt: "2022-07-01T08:22:22Z",
    //         source: { id: null, name: 'Moneycontrol' },
    //         title: "Market LIVE Updates: Nifty around 15,700, Sensex falls; oil & gas stocks drag, realty, FMCG gain - Moneycontrol",
    //         url: "https://www.moneycontrol.com/news/business/markets/share-market-live-updates-stock-market-today-july-1-latest-news-bse-nse-sensex-nifty-covid-coronavirus-phoenix-mills-globus-spirits-tilaknagar-industries-upl-rec-lupin-hul-blue-star-anuroop-packaging-8764331.html",
    //         urlToImage: "https://images.moneycontrol.com/static-mcnews/2021/06/Sensex-1-770x433.jpg",
    //     },
    //     {
    //         author: null,
    //         content: "Indian shares slide as Reliance, ONGC crash on fuel export duties\r\nReliance Industries and ONGC shares were hammered on Friday after the government imposed export taxes on petrol, diesel and a windfa… [+2973 chars]",
    //         description: "Reliance Industries and ONGC shares were hammered on Friday after thegovernment imposed export taxes on petrol, diesel and a windfall tax on domestic crude oil to boost internal supplies.",
    //         publishedAt: "2022-07-01T07:17:52Z",
    //         source: { id: null, name: 'NDTV News' },
    //         title: "Reliance, ONGC Shares Crash On Fuel Export And Windfall Tax - NDTV Profit",
    //         url: "https://www.ndtv.com/business/reliance-ongc-shares-crash-on-fuel-export-and-windfall-tax-3117688",
    //         urlToImage: "https://c.ndtvimg.com/2019-08/ccom784g_reliance-industries-ril-reuters_625x300_06_August_19.jpg",
    //     },
    //     {
    //         author: "Tarun",
    //         content: "The subcompact SUV can be had in four variants LXI, VXI, ZXI, and ZXI + -- just like before\r\nMaruti has launched the new Brezza in India, with prices ranging from Rs 8 lakh to Rs 13.96 lakh (ex-showr… [+5699 chars]",
    //         description: "The subcompact SUV can be had in four variants – LXI, VXI, ZXI, and ZXI + -- just like before  Maruti has launched the new Brezza in India, with prices ranging from Rs 8 lakh to Rs 13.96 lakh (ex-showroom Delhi). It gets a major design overhaul inside and out…",
    //         publishedAt: "2022-07-01T07:01:00Z",
    //         source: { id: null, name: 'Cardekho.com' },
    //         title: "Here’s What Each Variant Of The 2022 Maruti Brezza Offers - CarDekho",
    //         url: "https://www.cardekho.com/india-car-news/herersquos-what-each-variant-of-the-2022-maruti-brezza-offers-29310.htm",
    //         urlToImage: "https://stimg2.cardekho.com/images/carNewsimages/userimages/650X420/29309/1656660684408/GeneralNews.jpg",
    //     },
    //     {
    //         author: "Agencies",
    //         content: "India tightened exports of oil and imports of gold in an all-out effort to rein in the rupee that plunged to a fresh record.\r\nThe Centre raised import taxes on gold, while increasing levies on export… [+2880 chars]",
    //         description: "The rupee has tested a series of record lows, underscoring the economic challenges faced by Prime Minister Narendra Modis government as inflation accelerates and external finances worsen.",
    //         publishedAt: "2022-07-01T06:34:00Z",
    //         source: { id: 'the-times-of-india', name: 'The Times of India' },
    //         title: "An all-out effort to save the Rupee sees tax hikes in oil and gold - Economic Times",
    //         url: "https://economictimes.indiatimes.com/news/economy/indicators/an-all-out-effort-to-save-the-rupee-sees-tax-hikes-in-oil-and-gold/articleshow/92590943.cms",
    //         urlToImage: "https://img.etimg.com/thumb/msid-92590929,width-1070,height-580,imgsize-45598,overlay-economictimes/photo.jpg",

    //     }
    // ]