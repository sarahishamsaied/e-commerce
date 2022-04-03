import React, { Fragment, useEffect, useState } from 'react'
import { Alert, Button, Col, Container, Form, Row } from 'react-bootstrap'
import {getDownloadURL, ref,uploadBytesResumable} from 'firebase/storage'
import { storage } from '../../Firebase';
import ProductServices from '../Services/ProductServices';
export default function AddProduct() {
    const [url,setUrl] = useState(null)
    const [productName,setProductName] = useState("")
    const [productPrice,setProductPrice] = useState(0)
    const [progress,setProgress] = useState(0);
    const [productCompany,setProductCompany] = useState("")
    const [productCategory,setProductCategory] = useState("")
    const [productDetails,setProductDetails] = useState("")
    const [productQuantity,setProductQuantity] =useState(0)
    const [isAdded,setIsAdded] = useState(false)
    const [image,setImage] = useState(null);
    const handleFile = (e)=>{
        if(e.target.files[0]){
            console.log(e.target.files[0].size)
            setImage(e.target.files[0])
        }
    };

    const uploadImage = async(file)=>{
        if(!file)
        return;
        const storageRef = ref(storage,`imgs/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef,file);
        uploadTask.on("state_changed",
        (snapshot)=>{
            const progress = Math.round((snapshot.bytesTransferred/snapshot.totalBytes))*100
            setProgress(progress)
        })
        await getDownloadURL(storageRef).then((img)=>{
            setUrl(img)
        })
    }
    const handleSubmit = async(e)=>{
        e.preventDefault();
        const addedProduct = {
            productName,
            productCategory,
            productDetails,
            productPrice,
            productQuantity,
            productCompany,
            productImgUrl:url,
            productComments:[]
        }
        await ProductServices.addProduct(addedProduct)
        setIsAdded(true)
    }
    const clearInputs = ()=>{
        
    }
   
    console.log("image",image)
  return <Fragment>
      <Container className='p-5'>
          <div className="addProductContainer d-flex justify-content-center align-items-start flex-column">
          <h1 className='mt-4'>Add Product</h1>
              <Form>
                   <Row>
              <Col className='col-6'>
                <Form.Group>
                    <Form.Label>
                        Product Name:
                    </Form.Label>
                    <Form.Control type='text' onChange={(e)=>setProductName(e.target.value)}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>
                        Product Price:
                    </Form.Label>
                    <Form.Control type='text'onChange={(e)=>setProductPrice(e.target.value)} />
                </Form.Group>
                </Col>
                <Col className='col-6'>
               <Form.Group>
                    <Form.Label>
                        Product Supplier:
                    </Form.Label>
                    <Form.Control type='text' onChange={(e)=>setProductCompany(e.target.value)} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>
                        Product Category:
                    </Form.Label>
                    <Form.Select className='form-control' onChange={(e)=>setProductCategory(e.target.value)}>
                        <option value="computer">Computer</option>
                        <option value="computerAcc">Computer Accessories</option>
                        <option value="mobileAcc">Mobile Accessories</option>
                    </Form.Select>
                </Form.Group>

               </Col>
               <Form.Group className='col-6'>
                    <Form.Label>
                        Product Details:
                    </Form.Label>
                    <Form.Control type='text' onChange={(e)=>setProductDetails(e.target.value)}/>
                </Form.Group>
                <Form.Group className='col-6'>
                    <Form.Label>
                        Product Quantity:
                    </Form.Label>
                    <Form.Control type='text' onChange={(e)=>setProductQuantity(e.target.value)}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>
                        Product Photo
                    </Form.Label>
                    <Form.Control type='file' onChange={handleFile}/>
                    <Button  variant = "primary" onClick={(e)=>uploadImage(image)}>Upload Image</Button>
                    <Button variant='primary' onClick={handleSubmit}>Add Product</Button>
                </Form.Group>
                {isAdded&&<Alert variant='success'>Product added successfully!</Alert>}
                <h1>{progress}%</h1>
                {url&&<img src={url} className = "w-50"alt="" />}
               </Row>
              </Form>
          </div>
         
          
      </Container>
  </Fragment>
}
