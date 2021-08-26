//functional component
import React from 'react'
import './custome.css'

export default function Profile(prop)//  prop actualy use as a perameter
{
    const fn1=()=>{
        alert("on click on text profile function called");
    }
    function fn2(){
        alert(" on button click fn2 function called")
    }
    const h2={
        color:"green",
        fontSize:"35px"
    }//h2  is a inline styling add to h5 tag
    const h3={
        color:"red",
        fontSize:"35px"
    }
    return <div className="header">
        <p className="header">In this file we use global , inline, conditional style</p>
        <h5 style={prop.data==="function_data"? h2:h3} onClick={fn1}>{prop.text}</h5>
        <h5 style={h2}>{prop.data}</h5>
        <button onClick={fn2} >click me</button>{/*on click function called */}
    </div>
}
//in this file we use global , inLine, conditional style