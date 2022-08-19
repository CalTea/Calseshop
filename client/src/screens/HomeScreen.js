import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Row, Col} from 'react-bootstrap'
import Product from '../components/Product'

const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
   const fetchProducts = async () => {
      const result = await axios.get('/api/products');
      setProducts(result.data);
    }
     
    fetchProducts()
  }, [])

  return (
    <>
        <h1> Hottest Products</h1>
        <Row>
            {products.map(product => (
                <Col sm={12} md={6} lg={4} xl={3}>
                    <Product product={product} />
                </Col>
                ))}
        </Row>
    </>
  )
}

export default HomeScreen