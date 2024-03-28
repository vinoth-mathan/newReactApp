import React from 'react'
import { useState } from 'react'
import Conchild1 from './Conchild1'
import Conchild2 from './Conchild2'
import { Col, Container, Row } from 'react-bootstrap'
import Condisplay from './Condisplay'

const Constparent = () => {

  
  return (
     
        <Container>
            <Row>
                <Col md={5}> <Conchild1/></Col>
                <Col>
                  <Condisplay/> 
                </Col>
                <Col md={4} style={{marginRight:'25px'}}> 
                <Conchild2/>
                </Col>
            </Row>
        </Container>
        
     
  )
}

export default Constparent