import React, { Fragment, useEffect,useState } from 'react'
import { Container, Row,Col, Card,Button } from 'react-bootstrap'
import { useNavigate } from 'react-router';
import LoadingScreen from '../LoadingScreen/LoadingScreen';
import ProductServices from '../Services/ProductServices' 


export default function ViewProducts() {
    const [products,setProducts] = useState([]);
    const [isLoaded,setIsLoaded] = useState(false)
    const navigate = useNavigate()
    useEffect(()=>{
        getAllProducts()
    },[])
    const getAllProducts = async()=>{
        const {docs} = await ProductServices.getAllProducts();
        console.log(docs)
        setProducts(docs.map((doc)=>({...doc.data(),id: doc.id})))
        console.log(products)
        setIsLoaded(true)
    }
    const gotoDetails = (id)=>{
        navigate(`/productDetails/${id}`)
    }
  return isLoaded? <Fragment>
      <Container className='p-5'>
          <h1 className='mb-4'>Products</h1>
          <Row className='flex-start'>
          {products.map((product)=>{
              return<Col>
              <Card style={{ width: '18rem' }} className = "mb-4">
  <Card.Img variant="top" src={product.productImgUrl} className = "img-fluid" />
  <Card.Body>
    <Card.Title>{product.productName}</Card.Title>
    <Card.Text>
      Description: {product.productDetails}
    </Card.Text>
    <Card.Text>
      Price: {product.productPrice}$
    </Card.Text>
    <Button variant="primary" onClick={()=>gotoDetails(product.id)}>Check Details</Button>
  </Card.Body>
</Card>
              </Col>
          })}
          </Row>
         

      </Container>
  </Fragment>:<LoadingScreen/>
}
