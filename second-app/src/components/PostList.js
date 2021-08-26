import React, { Component } from 'react';
import axios from 'axios'

// get data from api 
// using axios http lidery

class PostList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            error : ""
        }
    }
    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
        .then(res => {
            console.log(res)
            this.setState({posts:res.data})
        })
        .catch(error =>{
            console.log(error);
        this.setState({error:'error retriving data'})
        })
    }
    
    
    render() {
        const { posts,error } = this.state
        return (
            <div>
                <h1>Posts List</h1>
                {
                    posts.length ? 
                    posts.map(posts => <div key={posts.id}>{posts.title}</div>) :
                    null
                }
                {error ? <div>{error}</div>:null}
            </div>
        );
    }
}

export default PostList;