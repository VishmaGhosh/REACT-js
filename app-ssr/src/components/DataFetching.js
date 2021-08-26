import React,{useEffect,useState} from 'react'
import axios  from 'axios'

export default function DataFetching() {
    const [post , setPost] = useState({})
    const [id , setId] = useState(0)
    const [idFromButtonClick , setIdFromButtonClick] = useState(0)

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
            .then(res => {
                console.log(res);
                setPost(res.data)
            })
            .catch(err =>{
                console.log(err);
            })
    },[idFromButtonClick])
    const handleClick = ()=>{
        setIdFromButtonClick(id)
    }
    return (
        <div>
            <input type="text" value={id} onChange={e=> setId(e.target.value)} /><br />
            <button type="button" onClick={handleClick}>Fetch Post</button>
            <div>
                {post.title}
            </div>
            {/*<ul>
                {
                    post.map(post => <li key={post.id}>{post.title}</li>)
                }
            </ul>*/}
        </div>
    )
}
