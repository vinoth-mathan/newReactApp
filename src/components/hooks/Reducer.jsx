import React, { useReducer } from 'react'

function counterReducer(state,action){
    switch (action.type) {
        case 'INCREMENT':
            return {count :state.count +1}
        case 'DECREMENT':
            return {count :state.count-1}
        case 'RESET':
            return {count :0}    
        default:
          throw Error('Invalid action')
    }
}

const Reducer = () => {

const [state,dispatch] =useReducer(counterReducer,{count:0})

  return (
   <>
   <h1>{state.count}</h1>
   <button onClick={()=>dispatch({type:'INCREMENT'})}>increment</button>
   <button onClick={()=>dispatch({type:'DECREMENT'})}>decrement</button>
   <button onClick={()=>dispatch({type:'RESET'})}>reset</button>
   </>
  )
}

export default Reducer