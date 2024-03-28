import React from 'react'
import userContext from './Context'
import { useContext } from 'react'

const Condisplay = () => {
    const {value} = useContext(userContext);
  return (
    <div>
        <p>Name - <i className='tdd'>{ value.username}</i></p>
        <p>Password - <i  className='tdd'>{value.userpassword}</i></p>
        <p>Age - <i  className='tdd'>{value.age}</i></p>
    </div> 
  )
}

export default Condisplay