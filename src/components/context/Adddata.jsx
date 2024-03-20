import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import watermelon from '../assets/fruits-watermelons.jpg'
import apple from '../assets/apple.jpg'
import mango from '../assets/mango.jpeg'
import banana from '../assets/banana-1025109_1280.jpg'
import pomegarante from '../assets/pomegranate-1558625011.jpg'
import orange from '../assets/Orange-Fruit-Pieces.jpg'
import Cart from './Cart'



const Adddata = () => {
     

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
    
  
  return (

    <div >
          <Container>
            <Row>
                <Col style={{display:'flex',justifyContent:'center',alignItems:'center',gap:'10px'}}>
                  {data.map((item,index)=>{
                    return(
                        <Cart key={index} 
                        img={item.img} 
                        item={item} 
                        title={item.title}
                         price={item.price}
                         
                         />
                    )
                  })}
                   
                 
                 
                </Col>
            </Row>
            
          </Container>
    </div>
  )
}

export default Adddata