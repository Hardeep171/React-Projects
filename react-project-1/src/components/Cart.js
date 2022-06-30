import React from 'react';
import { Card, Row, Col, Container, Button } from 'react-bootstrap'
import "./Cart.css"
class Products extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            products:
                [
                    {
                        productStatus: true,
                        "id": 1,
                        "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
                        "price": 109.95,
                        "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
                        "category": "men's clothing",
                        "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
                        "rating": {
                            "rate": 3.9,
                            "count": 120
                        }
                    },

                    {
                        productStatus: true,
                        "id": 2,
                        "title": "Mens Casual Premium Slim Fit T-Shirts ",
                        "price": 22.3,
                        "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
                        "category": "men's clothing",
                        "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
                        "rating": {
                            "rate": 4.1,
                            "count": 259
                        }
                    },
                    {
                        productStatus: true,
                        "id": 3,
                        "title": "Mens Cotton Jacket",
                        "price": 55.99,
                        "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
                        "category": "men's clothing",
                        "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
                        "rating": {
                            "rate": 4.7,
                            "count": 500
                        }
                    },
                    {
                        productStatus: true,
                        "id": 4,
                        "title": "Mens Casual Slim Fit",
                        "price": 15.99,
                        "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
                        "category": "men's clothing",
                        "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
                        "rating": {
                            "rate": 2.1,
                            "count": 430
                        }
                    },
                    {
                        productStatus: true,
                        "id": 5,
                        "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
                        "price": 695,
                        "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
                        "category": "jewelery",
                        "image": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
                        "rating": {
                            "rate": 4.6,
                            "count": 400
                        }

                    },
                    {
                        productStatus: true,
                        "id": 6,
                        "title": "Solid Gold Petite Micropave ",
                        "price": 168,
                        "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
                        "category": "jewelery",
                        "image": "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
                        "rating": {
                            "rate": 3.9,
                            "count": 70
                        }
                    },
                    {
                        productStatus: true,
                        "id": 7,
                        "title": "White Gold Plated Princess",
                        "price": 9.99,
                        "description": "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
                        "category": "jewelery",
                        "image": "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
                        "rating": {
                            "rate": 3,
                            "count": 400
                        }
                    },
                ]
        }
    }
    Delete = (id) => {

        const updatedProducts = this.state.products.map(product => {
            if (product.id === id) {
                product.productStatus = false;
            }
            return product
        })
        this.setState({
            products: updatedProducts
        })
    }
    render() {
        let { products } = this.state
        return (
            <>
                <Container>
                    <Row style={{ margin: '10px auto', width: '300px' }}>
                        <h1 style={{textAlign:'center'}}>Cart-Items : {products.filter(product => product.productStatus === true).length}</h1>
                        {products.map((product) => (
                            product.productStatus ? (
                                <Col lg={12} xs={12} key={product.id}>
                                    <Card className="card-outer" >
                                        <Card.Img variant="top" width='100px' src={product.image} className="cart-img"/>
                                        <Card.Body>
                                            <div className='txt'>
                                            <Card.Title>
                                               <b> product:{product.title}</b>
                                            </Card.Title>
                                            <Card.Text>
                                               <b> Amount:${product.price}</b>
                                            </Card.Text>
                                            </div>
                                            <Button
                                                variant="danger"
                                                className='btn'
                                                onClick={() => this.Delete(product.id)}
                                            >Delete</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>)
                                : <h1 className='display-2'>Cart Is Empty!</h1>
                        ))}

                    </Row>
                </Container>
            </>
        )
    }
}
export default Cart