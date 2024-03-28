import React from 'react'
import { Col, Container, Row,Button } from 'react-bootstrap'
import watermelon from '../assets/fruits-watermelons.jpg'
import apple from '../assets/apple.jpg'
import mango from '../assets/mango.jpeg'
import banana from '../assets/banana-1025109_1280.jpg'
import pomegarante from '../assets/pomegranate-1558625011.jpg'
import orange from '../assets/Orange-Fruit-Pieces.jpg'
import {useCart} from 'react-use-cart'
import Card from 'react-bootstrap/Card';


const Adddata = () => {
  
  const {addItem} = useCart();

    const data = [
        {
            id : '1',
            img : watermelon,
            title : 'watermelon',
            price : '60'
        },
        {
            id : '2',
            img : apple,
            title : 'apple',
            price : '100',
            quantity:'1'

        },
        {
            id : '3',
            img : orange,
            title : 'orange',
            price : '80',
            quantity:'1'

        },
        {
            id : '4',
            img : pomegarante,
            title : 'pomegarante',
            price : '120',
            quantity:'1'
        },
        {
            id : '5',
            img : banana,
            title : 'banana',
            price : '40',
            quantity:'1'

        },
        {
            id : '6',
            img : mango,
            title : 'mango',
            price : '70',
            quantity:'1'

        } 
       
    ]
     const product = data.map((item)=>(
      // <div style={{display:'flex',justifyContent:'center',marginTop:'70px'}}>
          <Col md={3} style={{marginBottom:"5px",marginTop:'50',marginRight:''}}>
          <Card style={{ width: '15rem' ,height:'20rem'}}>
        <Card.Body>
        <Card.Img variant="top" src={item.img} style={{height:'10rem'}}/>
          <Card.Title style={{margin:'5px',textAlign:'center'}}>{item.title}</Card.Title>
          <Card.Text style={{margin:'5px',textAlign:'center',fontWeight:'600',color:'red'}}>Price = ${item.price} </Card.Text>
          <Button variant="success" onClick={()=>{addItem(item)}}>Add to Cart</Button>
        </Card.Body>
      </Card>
          </Col>
      // </div>
     ))
  
  return (

    <div >
          <Container>
            <Row>
                 {product}             
            </Row>
            
          </Container>
    </div>
  )
}

export default Adddata