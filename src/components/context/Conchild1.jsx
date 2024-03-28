import React, { useEffect } from 'react'
import userContext from './Context'
import { useContext , useState} from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { useRef } from 'react'

const Conchild1 = () => {
    
    const inputref = useRef()
    const {setUser,setValue}=useContext(userContext)
    const [username,setUsername] = useState('')
    const [userpassword ,setUserpassword] = useState('')
    const [userage , setUserage] = useState('')

       
    useEffect(()=>{
        const currentdate = new Date();
        const birthday = new Date(userage);
        const age = Number(currentdate.getFullYear()-birthday.getFullYear())
        setValue({username,userpassword,age})
        
    },[username,userpassword,userage])
      
    function handelsub(e){ 
       e.preventDefault();
       const currentdate = new Date();
       const birthday = new Date(userage);
       const age = Number(currentdate.getFullYear()-birthday.getFullYear())
       
       setUser([{username,userpassword,age}])
       setUserage('')
       setUsername('')
       setUserpassword('')
       inputref.current.focus()
    }
  return (
    <div style={{display:'flex',flexDirection:'column',width:'80%',gap:'20px',marginTop:'20px'}}>
       <input type='text'ref={inputref} placeholder='name'value={username} onChange={(e)=>setUsername(e.target.value)}/>
       <input type='password' placeholder='password'value={userpassword} onChange={(e)=>setUserpassword(e.target.value)}/>
       <input type='date'  placeholder='dob' value={userage} onChange={(e)=>setUserage(e.target.value)}/>
       <Button onClick={handelsub}>submit</Button>

    </div>
  )
}

export default Conchild1