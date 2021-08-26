import React,{memo} from 'react'

const Home=(props)=>{
    console.warn("Innner component",props.data)
    return(
        <div>
            <h1>Home component</h1>
        </div>
    )
}

export default memo(Home);

//use memo to avoid again again internal data calling