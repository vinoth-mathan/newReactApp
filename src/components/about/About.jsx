import React from 'react'
import Fot from '../footer/Fot';
import '../random.css'
import { Button, Col, Container, Row } from 'react-bootstrap'
import Image from 'react-bootstrap/Image';
import offone from '../assets/off1.jpeg'
import offtwo from '../assets/off 2.jpg'

const About = () => {
  return (
    <>
      <div  className='about'>
        <Container>
          <Row style={{marginBottom:'20px'}}>
            <Col style={{textAlign:'center'}}>
            <h2 style={{fontSize:'2.2rem',fontWeight:'800',marginTop:'100px',color: 'rgb(182, 6, 6)'}}>About Us</h2>
            {/* <p style={{fontSize:'0.8rem',fontWeight:'500'}}>Home -&gt; About Us Page</p> */}
            </Col>
          </Row>
          <Row style={{marginBottom:'20px',marginTop:'50px'}}>
            <Col></Col>
            <Col md={4} style={{fontSize:'2rem',fontWeight:'700'}}><h2>Our team lives and breathes digital</h2></Col>
            <Col md={4}>
              <p style={{fontSize:'1.1rem',fontWeight:'500'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas sed aperiam qui reiciendis veritatis! Quibusdam?</p>
              <Button variant=''style={{backgroundColor:'rgb(6, 182, 114)',fontWeight:'700',color:'white'}}>Let's Talk</Button>
            </Col>
            <Col></Col>
          </Row>

          <Row style={{marginBottom:'10px',marginTop:'50px'}}>
            <Col></Col>
            <Col md={7} style={{fontSize:'2rem',fontWeight:'700'}}>
              Big Brands trust their digital stategy to agencies like witrey
            </Col>
            <Col></Col>
          </Row>

          <Row style={{marginTop:'30px',marginBottom:'30px'}}>
            <Col> <span className='spn'>TOYOTᗩ</span></Col>
            <Col> <span className='spn'>ᖇOᑕᕼE</span></Col>
            <Col><span className='spn'>ᔕᗩᑎTIᒪᒪᗩᑎᗩ</span> </Col>
            <Col><span className='spn'>TᗩᑕOᗷEᒪᒪ</span></Col>
            <Col><span className='spn'>ᑎIᐯEᗩ</span> </Col>
            <Col><span className='spn'>ᗷᗩᑎᑕᕼᗩᖇIᗷE</span></Col>
          </Row>

          <Row style={{marginTop:'50px',marginBottom:'30px',gap:'10px'}}>
            <Col></Col>
            <Col md={5}>
            <Image src={offone} thumbnail style={{height:'400px'}}/>
            </Col>
            <Col md={5}>
                 <p style={{color:'rgb(6, 182, 114)',fontSize:'1.1rem',fontWeight:'800',marginTop:'50px'}}>About Us</p>
                 <h2> We are a professional innovative and creative dedicative term</h2>
                 <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed, earum non omnis dolore aliquam facilis obcaecati sit voluptas eaque ipsum?</p>
                 <Button variant='' style={{backgroundColor:'rgb(6, 182, 114)',fontWeight:'700',color:'white'}}>Learn More</Button>
            </Col>
            <Col></Col>
          </Row>
          <Row style={{marginTop:'50px',gap:'10px'}}>
            <Col></Col>
            <Col md={5}>
            <p style={{color:'rgb(6, 182, 114)',fontSize:'1.1rem',fontWeight:'800',marginTop:'50px'}}>Our Vision</p>
                 <h2> We have been visionaries since day one</h2>
                 <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed, earum non omnis dolore aliquam facilis obcaecati sit voluptas eaque ipsum?</p>
                 <Button variant='' style={{backgroundColor:'rgb(6, 182, 114)',fontWeight:'700',color:'white'}}>Learn More</Button>
            </Col>
            <Col md={5}>
            <Image src={offtwo} thumbnail style={{marginBottom:'60px',height:'400px',marginTop:'20px'}}/>
            </Col>
            <Col ></Col>
          </Row>
        </Container>
      </div>
      <Fot/>
      </>
  )
}

export default About