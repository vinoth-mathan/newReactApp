    
    import axios from 'axios'
import React from 'react'
    import { useState,useEffect } from 'react'
import { Container } from 'react-bootstrap'
import userContext from '../context/Context'
import { useContext } from 'react'


const Tablapl = () => {
    const {search,setSearch} = useContext(userContext)
    const [apidata , setApidata] = useState([])
    const [filterdata , setFilterdata] = useState([])
    const [loading,setLoding] = useState(true)
    const api = 'https://jsonplaceholder.typicode.com/albums';

    useEffect(()=>{
        const data = async () => {
            try{
                const responce = await axios.get(api);
                setApidata(responce.data.slice(0,15))
                setFilterdata(responce.data.slice(0,15))
                // console.log(responce);
            } catch(err){
                console.log(err);
            }
        }
        setTimeout(()=>{
            data()
            setLoding(false)
        },2000)
       
    },[])
    

     function filteredinput(filterinput){
     setFilterdata(apidata.filter((item)=>item.title.includes(filterinput) 

     ))
    }
 
   
    return (
        <>
          <Container>
             <div style={{margin:'50px'}}>
                <input type="text" placeholder='search' onChange={(e)=>filteredinput(e.target.value)} 
                 style={{width:'50%',padding:'10px'}}/>
             </div>
             <div>
               {loading ? <p style={{color:'white'}}>loding...</p> :  <table className='table table-hover'>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>study</th>
                        </tr>    
                    </thead>
                    {
                        filterdata ? (filterdata.map((item)=>(
                            <tbody >
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.title}</td>
                                    <td>no data</td>
                                </tr>
                            </tbody>
                        ))) : (apidata.map((item)=>(
                            <tbody >
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.title}</td>
                                    <td>no data</td>
                                </tr>
                            </tbody>
                        )))
                    }
                 </table>}

{/* 
                {
                    filterdata ? filterdata.map((item)=>(<li key={item.id}>{item.title} </li>)) :apidata.map((item)=>(<li key={item.id}>{item.title} </li>))
                } */}
             </div>
          </Container>
        
        </>
    )
    }

    export default Tablapl