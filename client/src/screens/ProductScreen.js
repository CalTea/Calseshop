import React from 'react'
import {Link} from 'react-router-dom'
import {useParams} from 'react-router-dom'
import {Col, Row, Image, ListGroup, Card, Button} from 'react-bootstrap'
import Rating from '../components/Rating'
import products from '../products'

const ProductScreen = () => {
    const params = useParams()
    const product = products.find(p => p._id === params.id)
    
    return (
    <>
    <Link className='btn btn-dark btn-sm' to='/'>Back to Products</Link>
    <Row>
        <Col md={6}>
            <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={3}>
            <ListGroup variant='flush'>
                <ListGroup.Item>
                    <h2>{product.name}</h2>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Rating value={product.rating} text={`${product.numReviews} Reviews `} />
                </ListGroup.Item>
                <ListGroup.Item>
                    Price: £{product.price}
                </ListGroup.Item>
                <ListGroup.Item>
                    Description: {product.description}
                </ListGroup.Item>
            </ListGroup>
        </Col>
        <Col md={3}>
            <Card>
                <ListGroup variant='flush'>
                    <ListGroup.Item>
                        <Row>
                            <Col>
                                Price:
                            </Col>
                            <Col>
                                <strong>£{product.price}</strong>
                            </Col>
                        </Row>
                    </ListGroup.Item>

                    <ListGroup.Item>
                        <Row>
                            <Col>
                                <strong>Stock:</strong>
                            </Col>
                            <Col>
                                {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                            </Col>
                        </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Button className=' btn-dark' type='button' disabled={product.countInStock === 0 }>Add To Cart</Button>
                    </ListGroup.Item>
                </ListGroup>
            </Card>
        </Col>

    </Row>
    </>
  )
}

export default ProductScreen