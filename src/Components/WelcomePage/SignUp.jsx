import React, { Fragment, useState } from 'react'
import {Container, Form,Row,Col, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import * as SiIcons from 'react-icons/si'

export default function SignUp() {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [firstName,setFirstName] = useState("")
    const [lastName,setLastName] = useState("")


    const onSubmitHandler = (e)=>{
        e.preventDefault()
              console.log("submit")
              console.log(email,password)
        }
  return <Fragment>

      <Container className='vh-100 p-5 d-flex flex-column justify-content-center align-items-start'>
      <h1 className=' authTitle display-4 mb-4 fw-bold text-center'> <span className='text-primary display-2'><SiIcons.SiShopware/></span>  Tech<span className='text-primary'>N</span>istic</h1>
          <h4>Sign Up</h4>
          <Row>
              <Col>
                <Form onSubmit={onSubmitHandler}>
                <Form.Group>
                        <Form.Label>First Name</Form.Label>
                    <Form.Control placeholder='enter first name' type='email' onChange={(e)=>setFirstName(e.target.value)}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Last Name</Form.Label>
                    <Form.Control placeholder='enter last name' type='email' onChange={(e)=>setLastName(e.target.value)}/>
                    </Form.Group>
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
          </Row>
      </Container>
  </Fragment>
}
