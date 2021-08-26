import React from 'react'

function FuncClick() {
    function clickHandler(){
        console.log("button clicked");
    }
    return (
        <div>
            <button onClick={clickHandler}>Click</button>
        </div>
    )
}

export default FuncClick
