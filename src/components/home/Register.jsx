
import React from 'react'
import '../../App.css'
// import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  // const [error,setError] = useState()
  // const [fristname ,setFristname] = useState()

  const navigate = useNavigate()
   function handeldef(e){
      e.preventDefault()
      navigate('/')
   }
  return (
    <div className='contain'>
        <div >
            <form className='box' >
                <h4>Registration Form</h4>
                     <input type='text' placeholder='FristName' className='input' />                     
                     <input type='text' placeholder='LastName'  className='input' />
                     <input type='email' placeholder='Email'  className='input'/>
                     <input type='password' placeholder='password'   className='input'/>
                     <input type='password' placeholder='cpassword'  className='input' />
                     
                    <div className='int'>
                    <input type='checkbox'/> <span style={{marginLeft:'6px',marginTop:'18px'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </span> 
                    </div>
                    <div className='int'>
                    <input type='checkbox' /> <span style={{marginLeft:'6px',marginTop:'18px'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </span> 
                     </div> 
                     
                     <button type='submit' className='button' onClick={handeldef} >Register</button>
                     </form>
        </div>

    </div>
  )
}

export default Register
