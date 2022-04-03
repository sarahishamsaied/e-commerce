import React, { Fragment, useEffect, useState } from 'react'
import { Col,Row,Container, Alert,Form, Button } from 'react-bootstrap'
import { useParams } from 'react-router'
import ProductServices from '../Services/ProductServices';

export default function ProductDetails() {
  
    const params = useParams();
    const [product,setProduct] = useState({});
    const [comments,setComments] = useState([])
    const id = params.id;
    const getProductDetails = async()=>{
        const data = await ProductServices.getProduct(id);
        setProduct(data.data());
        setComments(data.data().productComments)
        console.log(comments)
        console.log("wahjit")
    }
    useEffect(()=>{
        getProductDetails()
    },[])
  return <Fragment>
      <Container className='p-5'>
    
          <Row className='justify-content-between'>
              <Col className='col-7'>
                  <Row classname = "bg-danger">
                      <Col className = " col-12">
                      <h1>{product.productName}</h1>
                        <p> <span className='fw-bold'>Description</span> : {product.productDetails}</p>
                        <p><span className='fw-bold'>Category</span>: <span className='category'>{product.productCategory}</span></p>
                        <h2 className='my-4'>Reviews</h2>
                        <div className="comments">
                        {comments? comments.map((comment)=>{
                            
                               return <Alert className='shadow-lg  border-0 text-white comment'><p className='fw-bold d-inline'><h5 className='text-warning'>{comment.username}</h5>  </p>{comment.comment} <p className='  text-end'>posted at {new Date(comment.datePosted.seconds*1000).toLocaleString()}</p> </Alert>

                            }):''}
                        </div>
                            <div className="writeAComment">
                                <h4>Write a comment</h4>
                                <Form>
                                <Form.Control as="textarea" rows={3}  cols = {12} placeholder = "Write a review"/>
                                <Button variant = "primary my-4">Post</Button>
                                </Form>

                            </div>
                            
                        
                      </Col>
                      <Col>
                      <h3>Price:  <span className=' border-rounded p-1'>${product.productPrice}</span>  </h3>
                      </Col>
                  </Row>
             
              </Col>
              <Col className='col-5 border-white  d-flex justify-content-center align-items-center'>
              <img src={product.productImgUrl} className = "img-fluid shadow-lg" alt="" />
              </Col>
          </Row>
      </Container>
  </Fragment>
}
