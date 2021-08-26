import React from 'react'

//for learn useCallback

function Title() {
    console.log('Rendering Title');
    return (
        <div>
            <h1>Use CallBack Hook </h1>
        </div>
    )
}

export default React.memo(Title)
//React.memo prevent of rerendering component if it's not change

