import React,{useReducer} from 'react'

const initialState = 0
const reducer = (state, action)=>{
    switch(action.type){
        case 'increment':
            return state + action.value
        case 'decrement':
            return state - action.value
        case 'reset':
            return initialState
        default:
            return state            
    }
}

function CounterThree() {
    const [count , dispatch]=useReducer(reducer, initialState)
    const [countTwo , dispatchTwo]=useReducer(reducer, initialState)
    return (
        <div>
            <div>count -{count}</div>
            <button onClick={()=> dispatch({type:'increment',value:1})}>Increment</button>
            <button onClick={()=> dispatch({type:'decrement',value:1})}>Decrement</button>
            <button onClick={()=> dispatch({type:'reset'})}>Reset</button>
            <div>
            <div>countTwo -{countTwo}</div>
            <button onClick={()=> dispatchTwo({type:'increment',value:1})}>Increment</button>
            <button onClick={()=> dispatchTwo({type:'decrement',value:1})}>Decrement</button>
            <button onClick={()=> dispatchTwo({type:'reset'})}>Reset</button>
            </div>
        </div>
    )
}

export default CounterThree
