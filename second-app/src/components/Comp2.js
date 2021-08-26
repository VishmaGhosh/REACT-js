import React from 'react'
// props destructuring

export const Comp2 = (props) => {
    const {name,heroName} = props
    return (
        <div>
            {name}- aka -{heroName}
        </div>
    )
}
