import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { CloseButton, Modal } from 'react-bootstrap';
import Register from './Register';

const Login = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 
  const msg = ' Invalid username or password'
  const userdetails = {
    name:"vinoth",   
    password:'3099'
  }
  const [userone , setUserone] = useState()
  const [usertwo , setUsertwo] = useState()
  // const [error,setError]=useState()
    const navigate = useNavigate()
    

    // const handelNavigate = (e) => {
    //     e.preventDefault()
    //     navigate('/register')
    // }
   

    const handelVlidate = (e) => {
       e.preventDefault()
      if((userone==="" ||userone!==userdetails.name) && (usertwo==="" || usertwo!==userdetails.password)){
         alert(msg)
      }
      else navigate('/')
       
    }
  return (
    <>
      

            <div style={{
            width:'100%',
            height:'',
            display:'flex',
            flexDirection:'column',
            alignItems:'center'}}>
                <div style={{
                    width:'350px',
                    height:'90%',
                  backgroundColor:'white',
                  color:'black',
                  display:'flex',
                  justifyContent:'center',
                  borderRadius:'10px',
                  marginTop:'10px'
                }}>

                <div  style={{display:'flex',flexDirection:'column',width:'80%'}} >

                <div className="head" style={{fontSize:'2rem',fontWeight:'700',display:'flex',alignSelf:'center',marginTop:'30px',marginBottom:'10px'}}>Login</div>
                <br/>
                <label htmlFor="uname" style={{fontSize:'.8rem',fontWeight:'400'}}>username</label> 
                <input type='text' placeholder='Type your name' name='uname'
                style={{padding:'5px',outline:'none',borderBottom:'2px solid black',borderTop:'none',borderLeft:'none',borderRight:'none'}} onChange={(e)=>{setUserone(e.target.value)}}
                />
                {/* <p style={{color:'red'}}>{error}</p> */}
                <br/>
                <label htmlFor="password" style={{fontSize:'.8rem',fontWeight:'400'}}>password</label> 
                <input type='password' placeholder='Enter password' name='password'
                style={{padding:'5px',outline:'none',borderBottom:'2px solid black',borderTop:'none',borderLeft:'none',borderRight:'none'}} onChange={(e)=>{setUsertwo(e.target.value)}}/>

                <p style={{fontSize:'.7rem',fontWeight:'300',display:'flex',alignSelf:'end',marginTop:'2px',cursor:'pointer'}}>forget password ?</p>

                <button type='submit' style={{width:'70%',padding:'2px',display:'flex',alignSelf:'center',borderRadius:'20px',background:"linear-gradient(to right, #38CAF1,#FE4ED0)",color:'white',justifyContent:'center',outline:'none'}} onClick={handelVlidate}>Login</button>
              
                    <hr style={{width:'60%',display:'flex',alignSelf:'center'}}/>
                    <p style={{fontSize:'.9rem',height:'0px',textAlign:'center'}}>or new user</p>
                    <hr style={{width:'60%',display:'flex',alignSelf:'center'}}/>
                <button type='submit'style={{width:'70%',padding:'2px',display:'flex',alignSelf:'center',borderRadius:'20px',background:"linear-gradient(to right, #FE4ED0,#38CAF1)",color:'white',justifyContent:'center',outline:'none'}} onClick={handleShow}>Register</button>

                        <div style={{display:'flex',gap:'20px',justifyContent:'center',marginTop:'15px',fontSize:'1.4rem'}}>
                              <span className='fb'><i class="bi bi-facebook"></i></span>
                              <span className='twi'><i class="bi bi-twitter"></i></span>
                              <span className='goo'><i class="bi bi-google"></i></span>
                        </div>
                </div>
              </div>

            </div>
       
       
            <Modal show={show} onHide={handleClose} animation={false}>
            <CloseButton onClick={handleClose} style={{marginTop:'10px',marginLeft:'10px'}}/>
        <Modal.Body>
         <Register/>
        </Modal.Body>
        </Modal>
    </>
      

  )
}

export default Login