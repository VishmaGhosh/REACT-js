import React from 'react'
import './myStyles.css'

function Stylesheet(props) {
    let className = props.primary ? "primary" : ""
    // Above the line use for conditionaly appaly the Styla 
    return (
        <div>
            <h1 className={`${className} font-xl`}>
                Stylesheet
            </h1>
        </div>
    )
}

export default Stylesheet
