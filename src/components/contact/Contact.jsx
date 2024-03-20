import React, { useState } from 'react'
import Fot from '../footer/Fot';
import Card from 'react-bootstrap/Card';
import { Row ,Col, Container} from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import FormExample from './Validation';
import imgone from '../assets/img1.jpeg'
import imgtwo from '../assets/img2.jpg'
import imgthere from '../assets/img3.jpg'
import imgfour from '../assets/img4.jpeg'

const Contact = () => {
  
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };

  return (
    <div>
    <div className='start'>
    <Container fluid>
        <Row>
      <h2 style={{fontWeight:'800',color:'red',marginTop:'100px',marginBottom:'60px',textAlign:'center'}}>Contact us</h2>
    <Col md={6} style={{marginTop:'10px'}}>
          <Card >
          <Card.Body>
          <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                <img src={imgfour}alt='' style={{width:'100%',height:'360px', resize:"block"}}/>
                  <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                   <img src={imgthere} alt="" style={{width:'100%',height:'360px'}} />
                  <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                 <img src={imgone} alt="" style={{width:'100%',height:'360px'}}/>
                  <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                 <img src={imgtwo} alt="" style={{width:'100%',height:'360px'}} />
                  <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
          </Card.Body>
        </Card>
    </Col>
        <Col md={6}  style={{marginTop:'10px'}}>
            <Card >
              <Card.Body>
                    <FormExample />  
             </Card.Body>
           </Card>
         </Col>
        </Row>
        <Row>
          
          <Col style={{marginTop:'20px'}}>
          <h3 style={{marginTop:'15px',color:'red',fontWeight:'600'}}>why ?</h3>
           <p style={{color:'black',fontWeight:'500',marginBottom:'50px'}}>
           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur non unde illo quidem quam aperiam esse sapiente voluptatem quos totam, quaerat aut commodi nostrum tempora quis excepturi iste. Tempore, tenetur?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore placeat natus esse sed odio eligendi aspernatur nulla unde molestias fugiat dicta, eum exercitationem iste amet id. Nostrum libero rerum praesentium.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quis, consequuntur corporis eos ut doloremque assumenda minus. Autem nesciunt architecto reprehenderit magni earum asperiores similique veniam a, cupiditate possimus quis.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam rerum officia non perferendis eligendi incidunt illo labore? Maiores ullam modi quasi quia recusandae officia, earum voluptatum architecto commodi, illo eligendi!
           </p>
          </Col>
        </Row>
    </Container>
    </div>
    <Fot/>

    </div>
  )
}

export default Contact