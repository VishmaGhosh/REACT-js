import React from 'react';

export default class API_call extends React.Component{
    constructor(){
        super();
        this.state={
            users:null
        }
    }
    componentDidMount(){
        fetch("https://reqres.in/api/users?page=2").then((resp)=>{
            resp.json().then((result)=>{
                //console.warn(result.data);
                this.setState({users:result.data})
            })
        })
    }
    render(){
        return(
            <div className="API_call">
                <h2>Fetch api data</h2>
                {
                    this.state.users ?
                    this.state.users.map((item,i)=>
                    <div><p>{i}---{item.first_name}--{item.last_name}--{item.email}</p></div>
                    )
                    :
                    null
                }
            </div>
        );
    }
}
//1st we create constractor & then define state
// 2nd under the componenetDidMount we call API
// 3rd we use map function to fatch the data from api
