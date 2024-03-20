import React from 'react'
// import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useCart} from 'react-use-cart'


const Cart = (prop) => {

    const {addItem} = useCart();

      
  return (
        
      <div style={{display:'flex',justifyContent:'center',marginTop:'70px'}}>
           
        <Card style={{ width: '15rem' ,height:'20rem'}}>
      <Card.Body>
      <Card.Img variant="top" src={prop.img} style={{height:'10rem'}}/>
        <Card.Title style={{margin:'5px',textAlign:'center'}}>{prop.title}</Card.Title>
        <Card.Text style={{margin:'5px',textAlign:'center',fontWeight:'600',color:'red'}}>Price = ${prop.price} </Card.Text>
        <Button variant="success" onClick={()=>{addItem(prop.item)}}>Add to Cart</Button>
      </Card.Body>
    </Card>
       
      </div>
  )
}

export default Cart