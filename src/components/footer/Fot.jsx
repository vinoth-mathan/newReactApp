import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';


const Fot = () => {
  return (
      <div className="fotbox">
          <Container fluid>
           <Row>
            <Col md={2} style={{marginTop:'30px'}}>
        <i class="bi bi-building-lock" style={{color:'pink',fontSize:'2rem',fontWeight:'800'}}></i>
         <span style={{color:'pink',fontSize:'1rem',fontWeight:'800'}}>Navbar scroll</span>
                <p>Throughfull marketing for growing dental practices</p>
            </Col>
            <Col md={5} style={{marginTop:'30px'}}>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, nihil?</p>
                 <Form className="d-flex " >
            <Form.Control
              type="search"
              placeholder="Enter Email"
              className="me-2 inti"
              aria-label="Email"
            />
            <Button variant="info" className='me-2' style={{color:'white',fontWeight:'700'}}>Subscribe</Button>
          </Form>
            </Col >
            <Col md={3} style={{marginTop:'30px'}}>
                <p style={{color:'yellow'}}><span style={{fontSize:'1.3rem',marginRight:'5px'}}><i class="bi bi-arrow-down-left-square"></i></span>Follow us</p>
                 <span className='fb'><i class="bi bi-facebook"></i></span>
                 <span className='twi'><i class="bi bi-twitter"></i></span>
                 <span className='goo'><i class="bi bi-google"></i></span>
            </Col>
            <Col md={2} style={{marginTop:'30px',marginRight:''}}>
                <p><span className='cont'><i class="bi bi-person-rolodex"></i></span><span style={{color:'yellow'}}>call us</span></p>
                <p><span style={{marginRight:'5px',color:'red'}}><i class="bi bi-telephone-forward"></i></span>0223334445555</p>
            </Col>
           </Row>
         </Container>
            <Container>
            <hr/>
           <Row>
              <Col md={6} ><span style={{fontSize:'1.3rem',color:'red'}}>&copy;</span> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem, voluptate?</Col>
              <Col md={3} >Privacy policy</Col>
              <Col md={3}>Terms and Condation</Col>
           </Row>
            </Container>
      </div>
  )
}

export default Fot