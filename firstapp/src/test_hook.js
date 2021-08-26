import React,{useState} from 'react';

function Hook()
{
    const [count,setCount]=useState(100)
    return(<div>
        <h1>Hooks in functional component {count}</h1>
        <button onClick={()=>{setCount(count+1)}}>Increment</button>
        {/*on button click increment the value */}
    </div>)
}

export default Hook;