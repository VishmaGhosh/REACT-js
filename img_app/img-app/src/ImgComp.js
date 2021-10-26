import React,{useEffect,useState} from 'react'
import axios from 'axios'
import './imgComp.css'

function ImgComp() {
    const [image, setImage] = useState("")
    useEffect(()=>{
        axios.get(`https://dog.ceo/api/breeds/image/random`).then((res)=>{
            setImage(res.data.message)
        })
    },[])
    return (
        <div className="imgCover">
            <img src={image} alt="" className="dogImg rounded"></img>
        </div>
    )
}

export default ImgComp
