import React from 'react'
import { Container,Button, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {useCart} from 'react-use-cart'

const DisplayCart = () => {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
      } = useCart();
      
     

  return (
      
    <Container style={{marginTop:'100px'}}>
         {isEmpty ? (<h2 style={{fontSize:'2rem',fontStyle:'italic',fontWeight:'600'}}>Your Cart Is Empty 
          <Button style={{margin:'10px'}}><Link to='/'className='Link'>Back To Cart</Link></Button>
         </h2>) :(<div>
            <Row>
            <Col md={6}>
            <h2 style={{color:'red'}}>Cart({totalUniqueItems}) 
           </h2>
           <h3 style={{color:'green'}}> Totalitem ({totalItems})</h3>
            </Col>
            <Col>
               <h2 style={{color:'blue'}}>TotalCost = {cartTotal}</h2> 
            </Col>
            <Col>
                <Button variant='danger' onClick={()=>emptyCart()} >Empty Cart</Button>
            </Col>
          </Row>
          <table className='table table-light table-hover'> 
                <thead>
                      <tr>
                        <th>ProductImage</th>
                        <th>ProductName</th>
                        <th>ProductCost</th>
                        <th>ProductQuantity</th>
                        <th colSpan={2}> ControlButtons</th>
                      </tr>
                </thead>
            {items.map((item,index)=>{
                return(
                <tbody>
                  <tr key={index}> 
                      <td className='td'> <img src={item.img} alt='' style={{height:'6rem'}}/></td>
                      <td className='td'>{item.title}</td>
                      <td className='td'>$ - {item.price}</td>
                      <td className='td'>{item.quantity}</td>
                      <td className='td'>  <Button variant='success' onClick={()=>updateItemQuantity(item.id ,item.quantity + 1)} style={{width:'100%',margin:'3px',fontSize:'1.2rem',fontWeight:'600'}}>+</Button>
                      <Button variant='danger' onClick={()=>updateItemQuantity(item.id ,item.quantity - 1)} style={{width:'100%',margin:'3px',fontSize:'1.2rem',fontWeight:'600'}}>-</Button>
                      </td>
                      <td className='td'> <Button variant='info' onClick={()=>removeItem(item.id)}
                      style={{width:'100%',margin:'3px',fontSize:'1.2rem',fontWeight:'600',marginTop:'30px',color:'white'}}>removeItem</Button> </td>
                  </tr>

                </tbody>
                )
            })}
          </table>
         </div>)}
          

    </Container>
  )
}

export default DisplayCart