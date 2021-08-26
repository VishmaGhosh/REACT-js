import React from 'react'

// for learn UseCallback

function Age({ text, age }) {
    console.log(`Rendering ${text}`);
    return (
        <div>
            {text} - {age}

        </div>
    )
}

export default React.memo(Age)
//React.memo prevent of rerendering component if it's not change

