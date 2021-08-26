import React from 'react'

//for learn UseCallback

function Salary({ text, salary }) {
    console.log(`Rendering ${text}`);
    return (
        <div>
            {text} - {salary}

        </div>
    )
}

export default React.memo(Salary)
//React.memo prevent of rerendering component if it's not change

