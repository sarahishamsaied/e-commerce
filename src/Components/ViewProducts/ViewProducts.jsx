import React, { Fragment } from 'react'
import { Container, Row } from 'react-bootstrap'
import ProductServices from '../Services/ProductServices'

export default function ViewProducts() {
    const getAllProducts = async()=>{
        const {docs} = await ProductServices.getAllProducts();
        console.log(docs)
    }
  return <Fragment>
      <Container>
          <Row>

          </Row>
      </Container>
  </Fragment>
}
