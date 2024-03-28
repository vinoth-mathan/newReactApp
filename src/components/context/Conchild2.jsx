import React, { useState } from 'react'
import userContext from './Context'
import { useContext } from 'react'
import { Button, Container } from 'react-bootstrap';

const Conchild2 = () => {
    const {user} = useContext(userContext);
    const [table , setTable] = useState(true)
    const [showtable ,setShowtable] = useState('')

    function handels(e) {
      e.preventDefault() 
        setTable(!table)
        if(showtable === user){
          setShowtable(!user)
        }
        else {
          setShowtable(user)
        }
    }
  return (
    <div style={{display:'flex',flexDirection:'column',width:'30%',gap:'20px'}}>
          <Button variant='info'style={{width:'100px'}} onClick={handels}>
            {table ? 'showtable' :'hidetable'}
          </Button>
           {showtable ? (<table>
               <thead>
               <tr>
                    <th>name</th>
                    <th>password</th>
                    <th>age</th>
                </tr>
                    </thead>
                {showtable.map((item,index)=>{
                    return(
                        <tbody key={index}>
                            <tr>
                                <td className='tdd'>{item.username}</td>
                                <td className='tdd'>{item.userpassword}</td>
                                <td className='tdd'>{item.age}</td>
                            </tr>
                        </tbody>
                    )
                })}
              </table>) : <span>Click to see the table</span> }
    </div>
  )
}

export default Conchild2