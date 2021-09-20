import React, { useState } from 'react'
// import axios from "axios"


function Home() {
    const imgRef = React.createRef();
    const [state, setState] = useState({ img: null })
    const [imgProp, setImgProp] = useState({height:null,width:null})

    const uploadd = (e) => {
        const files = e.target.files[0];
        console.log(files);
        setState({
            img: URL.createObjectURL(files)
        });
    }

    const getDitails = ()=>{
        setImgProp({
            height:imgRef.current.clientHeight,
            width:imgRef.current.clientWidth
        })
    }

    return (
        <div>
            Home
            <input type="file" onChange={(e) => uploadd(e)} />
            <img className="container" src={state.img} alt="" ref={imgRef} onLoad={getDitails}></img>
            <p>Width:{imgProp.width}   Height:{imgProp.height}</p>
        </div>
    )
}

export default Home
