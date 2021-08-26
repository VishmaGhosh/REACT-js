import React from 'react'
//receive a method as a props 
//and return a parameter 

function ChildComponent(props) {
    return (
        <div>
            <button onClick={()=>props.greetHandler("child")}>greetParent</button>
        </div>
    )
}

export default ChildComponent
