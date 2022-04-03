import React, { Fragment, useState } from 'react'
import {Container, Form,Row,Col, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import * as SiIcons from 'react-icons/si'
import Lottie from 'react-lottie';
import animationData from '../../Lotties/animation1.json'
export default function SignIn() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const onSubmitHandler = (e)=>{
        e.preventDefault()
              console.log("submit")
              console.log(email,password)
        }
  return <Fragment>

      <Container className='vh-100 p-5 d-flex flex-column justify-content-center align-items-start'>

          <Row className='col-12'>
          <h1 className=' authTitle display-4 mb-4 fw-bold text-center'> <span className='text-primary display-2'><SiIcons.SiShopware/></span>  Tech<span className='text-primary'>N</span>istic</h1>
              <Col className=' d-flex justify-content-center flex-column align-items-start'>
              <h1 className='my-4'>Sign In.</h1 >
                <Form onSubmit={onSubmitHandler} className = "col-12" >
                    <Form.Group>
                        <Form.Label>Enter Email</Form.Label>
                    <Form.Control placeholder='enter email' type='email' onChange={(e)=>setEmail(e.target.value)}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Enter Password</Form.Label>
                    <Form.Control placeholder='enter password' type='password'onChange={(e)=>setPassword(e.target.value)}/>
                    </Form.Group>
                    <Button type='submit' className='mt-4'>Submit</Button>
                </Form>
              </Col>
              <Col className='col-6 p-0'>
             
      <Lottie 
	    options={defaultOptions}
        height={700}
        width={700}
      />
              </Col>
          </Row>
      </Container>
  </Fragment>
}
