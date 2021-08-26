import React,{useEffect,useState} from 'react';

const Forms = ()=>{
    const [count,setCount] = useState(1)
    useEffect(()=>{
        console.warn(count)
    },[count<5])
    return (
        <div>
            <h1>Use effect hooks in react js...{count}</h1>
            <button onClick={()=>setCount(count+1)}>update state</button>
        </div>
    );
};

export default Forms