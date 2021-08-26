import React from 'react'

function Button({ handleClick, children }) {
    console.log(`Rendering button -`, children);
    return (
        <button onClick={handleClick}>
            {children}
        </button>
    )
}

export default React.memo(Button)
//React.memo prevent of rerendering component if it's not change
