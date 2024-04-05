import React from 'react'
import { useReducer } from 'react'
import { useState,useEffect } from 'react';
// import axios from 'axios';


const initialState = {
  count: 0
};
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return {count: state.count = 0} ; 
    default:
      return state;
  }
};


const style = {
  width:'100%',
  padding:'10px',
  fontSize:'1.1rem',
  margin:'10px'
}
const btnstyle = {
    padding:"10px",
    fontSize:'1.1rem',
    margin:'10px'

}

const Namedtest = () => {
  const [data,setData] = useState([])
  const [update,setUpdate] = useState(0)
  const [state, dispatch] = useReducer(reducer, initialState);
  const api = 'https://jsonplaceholder.typicode.com/albums';
   
  useEffect(()=>{
     setUpdate(update +1)
  },[state.count])

      useEffect(()=>{
        const data = async () => {
          try{
            // const responce = await axios.get(api)
            // setData(responce.data.splice(0,10))
             await fetch(api)
            .then(responce => responce.json())
             .then(data => setData(data.splice(0,10)))
          }catch(err){
            console.log('network responce not get',err);
          }
        }
        data()
      },[])
    
   
  return (
      <>
              <div  
              style={{width:'100%',
              height:'300px',
              display:'flex',
              gap:'100px',
              }}>
                 <div style={{width:'30%',padding:'10px',}}>
                 <label data-testid="userName">Name</label>
                  <input type='text' placeholder='enter your name' style={style} />
                  <label data-testid='emlabl'>Email</label>
                  <input type='email' placeholder='enter email'style={style}  />
                  <label data-testid='agelabl'>Age</label>
                  <input type='number' placeholder='enter age'style={style}  />
                  <button 
                 style={{
                  padding:"10px",
                  width:'105%',
                  fontSize:'1.1rem',
                  margin:'10px'
              
                 }} >submit</button>
                 </div>

                    <div>
                        <p style={{fontSize:'1.5rem'}}>count</p>
                        <p style={{fontSize:'2rem'}} data-testid='countvalue'>{state.count}</p>
                          <hr/>

                            <div>
                              <button onClick={(e)=>dispatch({type:'increment'})} 
                              style={btnstyle}>Add+</button>
                              <button onClick={(e)=>dispatch({type:'decrement'})} 
                              style={btnstyle}>Sub-</button>
                              <button onClick={(e)=>dispatch({type:'reset'})}  
                              style={btnstyle}>Reset</button>
                            </div>

                    </div>
                       
                   <div data-testid='apicall'>
                   {data ? (data.map((item,index) => (<p key={item.id} data-testid={`apidata-${index}`}>- {item.title}</p>))) : (<p>Loding...</p>)}
                   </div>
                 <p>{update}</p>
                  
              </div>



      </>
  )
}

export default Namedtest 


