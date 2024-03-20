import React from 'react'
import { useState } from 'react';
import { useRef } from 'react';
import Fot from '../footer/Fot';
import { Col, Container, Row } from 'react-bootstrap'
import Child from '../footer/Child';
import {Button }from 'react-bootstrap';
import homeone from '../assets/homeone.jpg'
import Adddata from '../context/Adddata';



const Home = () => {
   const inputRef = useRef();
    
    const [user,setUser] = useState('')
    const [email,setEmail] = useState('')
    const [dob,setDob]=useState('')
    
    function handelSubmit(e){
      e.preventDefault()
      inputRef.current.focus()

      if(user !== ''){
        localStorage.setItem('name',user)
         setUser('')
      }
      if(email !== ''){
        localStorage.setItem('email',email)
        setEmail('')
      }
      if(dob !==''){
        localStorage.setItem('dob',dob)
        setDob('')
      }
      
  }

  return (
      <>
          <div style={{backgroundImage:`url(${homeone})`,width:'100%',marginBottom:'0px',marginTop:'50px',backgroundRepeat:'no-repeat',backgroundSize:'cover' }} className='img img-fluid'>
      <Container>   
        <Row>
          
          <Col  >
          <Adddata/>
          </Col>
          
          
        </Row>
          <hr />
          <hr />
          <hr />
              <Row>
                <Col></Col>
                <Col md={4}>
              
                <input style={{width:'100%',padding:'8px',marginTop:'20px'}} type="text" placeholder='enter name' ref={inputRef} value={user} onChange={(e)=>{setUser(e.currentTarget.value)}} required/>
                <input style={{width:'100%',padding:'8px',marginTop:'20px'}} type='email' placeholder='enter email'  value={email} onChange={(e)=>{setEmail(e.target.value)}} required/>
                <input style={{width:'100%',padding:'8px',marginTop:'20px',marginBottom:'10px'}} type='date' value={dob} onChange={(e)=>{setDob(e.target.value)}} required/> 
                <Button style={{marginTop:'5px',marginBottom:'10px',width:'100%'}} onClick={handelSubmit}>SetUserDetails</Button>
                </Col>
                <Col md={6}>
                <Child datebirth={dob}/>
                </Col>
              </Row>
      </Container>
          </div>
      <Fot/>
      </>
     
        
      
  )
}

export default Home  