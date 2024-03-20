import React from 'react'
import { useState } from 'react'
import '../random.css'


const Crtwb = () => {
 const [user,setUser]=useState(null)
 const [user2,setUser2]=useState(null)
 const [user3,setUser3]=useState(null)
 const [btn,setBtn]=useState()

  return (
    <>
      <div style={{margin:'10px',padding:'10px',display:'flex',flexDirection:'column',width:'30%',gap:'10px'}}>
      <input type="text" placeholder='name' value={user} onChange={(e)=>{setUser(e.target.value)}}/>

       <input type="email" placeholder='email'  value={user2} onChange={(e)=>{setUser2(e.target.value)}}/>
       <input type="text" placeholder='age' value={user3} onChange={(e)=>{setUser3(e.target.value)}}/>
        
       <div>
      <h2>Form Data</h2>
      <p>Name: {user}</p>
      <p>Email: {user2}</p>
      <p>Age: {user3}</p>
    </div>
     
     <div>
     <button onClick={()=>setBtn(!btn)} >
        {btn ? 'hidetable':'showtable' }
       </button>
       {  btn &&
       <table>
      <thead>
        <tr>
         
          <th>Name</th>
          <th>email</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
       <tr>
        <td>{user}</td>
        <td>{user2}</td>
        <td>{user3}</td>
       </tr>
      </tbody>
    </table>
  }
     </div>
         
      </div>
    </>
  )
}

export default Crtwb