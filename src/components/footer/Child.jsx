import React, { useState } from 'react'
import {  Card, CardBody, CardHeader, Col, Container, Row ,Button} from 'react-bootstrap'

const Child = ({datebirth}) => {
  const [user2,setUser2] = useState()
  const [email2,setEmail2] = useState()
  const [dob2,setDob2] = useState()

  function handelClick(){
    const user = localStorage.getItem("name")
    const email = localStorage.getItem('email')
    const dob = localStorage.getItem('dob')

    function calculateAge(dob) {
      var today = new Date();
      var birthDate = new Date(dob);
      var age = today.getFullYear() - birthDate.getFullYear();
      var m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
          age--;
      }
      return age
  }
  const age = calculateAge(dob);
    setUser2(user)
    setEmail2(email)
      setDob2(age)
    
    
   
  }

  return (
      <>
        <Container>
            <Row>            
                <Col sm={12}>
                <Card style={{width:"100%",marginTop:'10px',marginBottom:'20px'}}>  
                        <CardHeader style={{fontSize:'1.5rem',fontWeight:'700'}}>
                        <Button onClick={handelClick}>GetUserDetails</Button> 
                        </CardHeader>
                        <CardBody >
                             
                                {/* { user2<=0 ? <p style={{fontSize:'1.3rem',fontWeight:'500'}}>Empty</p> : (user2.map((user)=>(<li key={user.index} style={{fontSize:'1.2rem',fontWeight:'600'}}>{`WellCome ${user}`}<hr/></li> )))  } */}
                               <div>
                               <p> {
                                user2<=0 ? 'empty' :   <p>{user2}</p>
                              
                              }</p>
                              <p>{
                                email2<=0 ? 'empty' :   <p>{email2}</p>
                              
                              }</p>
                                <p>{dob2}</p>
                            
                               </div>
                            
                        </CardBody>
                    </Card></Col>
                
            </Row>
        </Container>
      
      </>
  )
}

export default Child