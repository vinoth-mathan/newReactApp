import axios from 'axios';
import React from 'react'
import { useState,useEffect } from 'react'
import { Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import Spinner from 'react-bootstrap/Spinner';

const Useeft = () => {
 const [count ,setCount]=useState(0)
 const [search,setSearch] = useState()
 const [msg,setMsg]=useState([])
 const [user,setUser]=useState([])
 const [loding,setLoding]=useState(true)
const api = 'https://jsonplaceholder.typicode.com/users';
const api2 = 'https://jsonplaceholder.typicode.com/posts'

//  useEffect(()=>{
//    console.log('the count ',count);
//  },[count])
useEffect(()=>{
    const fethchdata = async () => {
        try{
            const responce = await fetch(api)
            if(!responce.ok){
                throw new Error('network not resloved')
            }
            const jsondata = await responce.json()
            setMsg(jsondata)
        }
        catch(err){
            console.error(err);
        }
    }
     setTimeout(()=>{
        fethchdata()
        setLoding(false)
     },3000)

 },[])

 useEffect(()=>{
    const fethchdata = async () => {
     try{
         const responce =await axios.get(api2)
         setUser(responce.data.slice(0,10))
     }   
     catch (err) {
        console.error(err);
     }
    }
    setTimeout(()=>{
        fethchdata()
        setLoding(false)
     },3000)
 },[])


    function deleter(id){
      setSearch( search.filter((item)=> item.id !== id))
    }
  return (        
      <>
     <Container style={{marginTop:'100px'}}>

      <div style={{display:'flex',margin:'15px',gap:"20px"}}>
      <button onClick={()=>{setCount(count+1)}}>increment</button> 
      <p>count value  {count}</p>
      <button onClick={()=>{setCount(count-1)}}>decrement</button>
      </div>

       {loding ? (<p><Spinner animation="border" /> Loding..</p>) : (<Table responsive='xs' striped bordered hover variant="dark">
            <thead>
            <tr>
                <th>id</th>
                <th>name</th>
                <th>phone</th>
                <th>email</th>
                <th>address</th>
            </tr>
            </thead>

       {msg.map(item => (
        <tbody key={item.id}>
            <tr>
                <td>{item.id}</td> 
                <td>{item.name}</td>
                <td>{item.phone}</td>
                <td>{item.email}</td>
                <td>{item.address.street},{item.address.suite},{item.address.city},{item.address.zipcode}</td>
                
            </tr>
            </tbody>
))}
       </Table> ) }

       {loding ?  (<p><Spinner animation="border" /> Loding...</p>) : (<dl>
          {user.map(item => (
           <p>
             <dt key={item.id} >{item.title}</dt>
             <dd>{item.body}</dd>
           </p>
          
          ))}
       </dl> ) }
            </Container> 
    </>
  )
}

export default Useeft