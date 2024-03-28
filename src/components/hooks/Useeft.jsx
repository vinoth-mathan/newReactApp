import axios from 'axios';
import React from 'react'
import { useState,useEffect } from 'react'
import { Button, Container } from 'react-bootstrap';
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
            setSearch(jsondata)
           
        }
        catch(err){
            console.error(err);
        }
    }
     setTimeout(()=>{
        fethchdata()
        setLoding(false)
     },2000)

 },[])
   
 console.log(user);

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
     },2000)
 },[])
    

   
   function datafilter(filterdata){
      setSearch(msg.filter((item) => item.name.includes(filterdata)))
   }

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
       <div>
        <input type='text' placeholder='search...' onChange={(e)=>datafilter(e.target.value)} 
         style={{width:'60%',padding:'10px',margin:'5px'}}
        />
       </div>

       {loding ?  (<p><Spinner animation="border" /> Loding...</p>)  : (<Table responsive='xs' striped bordered hover variant="dark">
            <thead>
            <tr>
                <th className='tdd'>id</th>
                <th className='tdd'>name</th>
                <th className='tdd'>phone</th>
                <th className='tdd'>email</th>
                <th className='tdd'>address</th>
                <th className='tdd'>empty</th>
            </tr>
            </thead>
            {
               search ? (search.map((item) =>(
            
          <tbody key={item.id}>
             <tr>
                <td className='td'>{item.id}</td> 
                <td className='td'>{item.name}</td>
                <td className='td'>{item.phone}</td>
                <td className='td'>{item.email}</td>

                <td className='td'>{item.address.street},{item.address.suite},{item.address.city},{item.address.zipcode}</td>
                <td>
                    <Button onClick={()=>deleter(item.id)}>delete</Button>
                </td>
            </tr>
            </tbody>)
)):(msg.map(item => {
    return(
      <tbody key={item.id}>
        <tr>
            <td className='td'>{item.id}</td> 
            <td className='td'>{item.name}</td>
            <td className='td'>{item.phone}</td>
            <td className='td'>{item.email}</td>
            <td className='td'>{item.address.street},{item.address.suite},{item.address.city},{item.address.zipcode}</td>
            <td>
                <Button onClick={()=>deleter(item.id)}>delete</Button>
            </td>
        </tr>
        </tbody> )
}))}
            
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