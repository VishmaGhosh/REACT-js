import React from 'react'

const heading = {
    fontSize: "70px",
    color: "green"
}

function InlineStyle() {
    return (
        <div>
            <h1 style={heading}>
                Inline Style
            </h1>
            <h1 className="error">Error</h1>
        </div>
    )
}

export default InlineStyle
